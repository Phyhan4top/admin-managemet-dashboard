export class ErrorHandler extends Error {
  statusCode: number;
  errorType: string;

  constructor(message: string, statusCode: number, errorType: string) {
    super(message);
    this.errorType = 'global_error';
    this.statusCode = statusCode || 500;
  }
}
export class GlobalError extends Error {
  statusCode: number;
  errorType: string;

  constructor(message: string, statusCode: number, errorType: string) {
    super(message);
    this.errorType = 'global_error';
    this.statusCode = statusCode || 500;
  }
}

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

function extractTitle(content: string) {
  const titleRegex = /<title>(.*?)<\/title>/;
  const match = content.match(titleRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    return content;
  }
}

export const catchErr = (err: any): GlobalError => {
  if (err?.errorType === 'global_error') {
    throw err;
  }
  //   console.log(JSON.parse(JSON.stringify(err)), err?.response?.data);
  let errorMsg = err?.message || 'Error Retry!!!';

  if (err?.response?.data?.data) {
    errorMsg = extractUniqueErrorMessages(err?.response?.data?.data);
  }
  if (err?.response?.status === 500) {
    errorMsg += '--SERVER ERROR!!!';
  }

  errorMsg = extractTitle(errorMsg);

  throw new GlobalError(errorMsg, err?.response?.status, err?.name);
};
