const relativeUrlRegex = new RegExp(
  /^(?!www\.)(?!http)(?!https)(?!ftp)\/?[\dA-Za-z]/,
);

function standardizeUrl(url: string): string {
  //   if (relativeUrlRegex.test(url)) return url;

  if (url?.startsWith('//')) {
    return 'https:' + url;
  }

  if (url?.startsWith('www.')) {
    return 'https://' + url;
  }

  if (
    !url?.startsWith('http') &&
    !url?.startsWith('//') &&
    !url?.startsWith('www.') &&
    !!url
  ) {
    return 'https://' + url;
  }
  return url;
}

export default standardizeUrl;
