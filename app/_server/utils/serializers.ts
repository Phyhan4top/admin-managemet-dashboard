function extractUniqueErrorMessages(data: any): string {
  const messages = new Set<string>();

  function process(data: any): void {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        process(item);
      });
    } else if (typeof data === 'object' && data !== null) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          let item = data[key];
          //if item is array of string means last iteration
          if (Array.isArray(item)) {
            item = item.map((el) => {
              if (typeof el === 'string') {
                return `${key.replaceAll('_', ' ')}:: ${el}`;
              } else {
                return el;
              }
            });
          }
          process(item);
        }
      }
    } else if (typeof data === 'string') {
      messages.add(data);
    }
  }

  process(data);

  return Array.from(messages)[0]!;
}

export type ErrorType = {
  status: string;
  errorType: string;
  message: string;
  statusCode: number;
  fieldErrors: any;
  timestamp: number;
};
export const serializeError = (error: unknown): ErrorType => {
  if ((error as any)?.response?.status === 500) {
    return {
      status: 'ERROR' as const,
      errorType: (error as any)?.response?.data?.data?.error,
      message: (error as any)?.message + '--SERVER ERROR!!!',
      statusCode: 500,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else if ((error as any)?.response?.data?.data) {
    return {
      status: 'ERROR' as const,
      errorType: (error as any)?.statusText,
      message: extractUniqueErrorMessages((error as any)?.response?.data?.data),
      statusCode: (error as any).status,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR' as const,
      errorType: (error as any)?.statusText,
      message: (error as any)?.message || 'An unknown error occurred',
      statusCode: 500,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
};
