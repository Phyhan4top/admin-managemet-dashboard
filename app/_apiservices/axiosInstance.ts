import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('x-access');
  // do not send a request with an expired token to the refresh token endpoint to prevent an inifinite loop of token expired.
  if (config.headers.requireAuth && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

const reRunRequest = (originalRequest: any) => {
  const token = localStorage.getItem('tino_token');
  //apppend new token to original request
  originalRequest.headers.Authorization = `Bearer ${token}`;
  return axios(originalRequest);
};

const logOut = () => {
  //   //dispatch to store
  // store.dispatch(logout());

  const pathname = window.location.pathname;
  const generalPages: string[] = [];
  //only redirect user to login page if not on these pages

  const doNotLogOut =
    pathname === '/' || generalPages.some((url) => pathname.includes(url));
  if (!doNotLogOut) {
    return window.location.replace('/login');
  }

  //don't redirect
  return;
};

const errInterceptor = async (err: any) => {
  const originalRequest = err.config;

  // keep adding error message encountered regarding failed authorization
  const errMessage = [
    'invalid token',
    'jwt malformed',
    'authorization token not found',
  ];
  const tokenError =
    (err?.response?.data?.statusCode === 400 ||
      err?.response?.data?.statusCode === 401) &&
    errMessage.includes(err?.response?.data?.message);

  if (tokenError) {
    logOut();
  }

  if (err?.response?.status === 451 && !originalRequest._retry) {
    if (isRefreshing) {
      //if refreshing token API is called push others to failed queue
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then(() => {
          //call subsequent failed request after resolve() is called
          return reRunRequest(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    return new Promise(async function (resolve, reject) {
      axios
        .post(`${API_URL}/auth/token/refresh/`, null, {
          withCredentials: true,
        })
        .then((res: any) => {
          //   initLocalStorage({
          //     token: res?.data?.token,
          //   });

          processQueue(null); //resolve/recall all failed request
          resolve(reRunRequest(originalRequest)); //call first failed request
        })
        .catch((err: any) => {
          //reject calls failedqueue
          processQueue(err);

          // redirected to login page since refresh token failed
          logOut();
        })
        .then(() => {
          isRefreshing = false;
        });
    });
  }

  //orriginal error
  return Promise.reject(err);
};

const resInterceptor = (response: any) => {
  if (response?.data?.data?.accessToken) {
    localStorage.setItem('x-access', response?.data?.data?.accessToken);
  }
  return response;
};
axiosInstance.interceptors.response.use(resInterceptor, errInterceptor);
