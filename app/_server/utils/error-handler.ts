import { serializeError } from './serializers';

const serverActionWithErrorHandler = async (fn: () => Promise<any>) => {
  try {
    const res = await fn();

    return { status: 'SUCCESS' as const, data: res.data };
  } catch (err: any) {
    return serializeError(err);
  }
};

export default serverActionWithErrorHandler;
