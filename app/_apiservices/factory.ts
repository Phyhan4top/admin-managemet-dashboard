import { catchErr } from './errorHandler';
import promisifyAxios, { MethodTypes } from './promisifyAxios';

const requestFactory = async (
  url: string,
  method: MethodTypes,
  data?: any,
  requireAuth?: boolean,
) => {
  try {
    const response: any = await promisifyAxios(url, method, data, requireAuth);
    return response.data;
  } catch (err: any) {
    catchErr(err);
  }
};

export default requestFactory;
