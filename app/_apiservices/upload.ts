import axios, { AxiosProgressEvent } from 'axios';
import { MethodTypes } from './promisifyAxios';
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const apiFileUploadService = ({
  url,
  method,
  data = null,
  token,
  onUploadProgress,
}: {
  url: string;
  method: MethodTypes;
  data: any;
  token: string;
  onUploadProgress: ((progressEvent: AxiosProgressEvent) => void) | undefined;
}): Promise<{
  status: string;
  data: { location: string; fileName: string }[] | null;
}> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      method,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data,
      onUploadProgress: onUploadProgress,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error?.response?.data?.data?.message);
      });
  });
};
