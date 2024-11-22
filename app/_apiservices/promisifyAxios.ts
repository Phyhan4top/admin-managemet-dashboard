import { axiosInstance } from './axiosInstance';

export type MethodTypes = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

const promisifyAxios = (
  url: string,
  method: MethodTypes,
  data: any = null,
  requireAuth: boolean = true,
) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        requireAuth: requireAuth,
      },
      data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default promisifyAxios;
