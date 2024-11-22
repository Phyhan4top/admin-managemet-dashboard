export const generateParams = (obj: { [key: string]: any }) => {
  let params = '?';
  let keys = Object.keys(obj); //[1,2,3] len = 3
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]]) {
      params = params.concat(
        `${params !== '?' ? '&' : ''}`,
        keys[i],
        '=',
        obj[keys[i]],
      );
    }
  }
  return params === '?' ? '' : params;
};
