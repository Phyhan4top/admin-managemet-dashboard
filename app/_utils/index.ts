export function checkVisible(id: string) {
  const elm = document.getElementById(id);

  if (elm) {
    const rect = elm.getBoundingClientRect();

    const viewWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth,
    );

    return !(Math.abs(rect.right - viewWidth) >= viewWidth / 2);
  }

  return false;
}

export function replaceSpecialCharacters(text: string) {
  return text
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function getValueAtIndex<T>(
  array: T[] | undefined,
  index: number = 0,
): T | undefined {
  if (!Array.isArray(array)) {
    return undefined;
  }

  return array[index] !== undefined ? array[index] : undefined;
}

export function removeLastPath(url: string) {
  const arr = url.split('/');
  arr.pop();
  return arr.join('/');
}

export function getStartPath(url: string): string {
  const array = url.split('/');
  const newArr = array.filter((item) => item !== '');
  return `/${newArr.shift() || ''}`;
}

export function unshiftNthData<T>(data: T[], fn: (item: T) => boolean) {
  const dataSlice = [...data];
  let index = dataSlice.findIndex(fn);

  if (index > -1) {
    let item = dataSlice.splice(index, 1)[0];
    dataSlice.unshift(item);
  }
  return dataSlice;
}

export const isActivePath = (pathName: string, path: string) => {
  if (!path) {
    return false;
  } else if (pathName === '/admin' && path === '/admin') {
    return true;
  } else if (path !== '/admin') {
    return pathName.includes(path);
  } else {
    return false;
  }
};

type Tab = {
  label: string;
  href: string;
};

export const getNextTabHref = (
  tabs: Tab[],
  currentHref: string,
  searchParams: URLSearchParams,
): string | null => {
  const searchUrl = searchParams.toString()
    ? `?${searchParams.toString()}`
    : '';
  const currentIndex = tabs.findIndex((tab) => tab.href === currentHref);
  const nextTab = tabs[currentIndex + 1];
  return nextTab ? `${nextTab.href}${searchUrl}` : null;
};

export const getPrevTabHref = (
  tabs: Tab[],
  currentHref: string,
  searchParams: URLSearchParams,
): string | null => {
  const searchUrl = searchParams.toString()
    ? `?${searchParams.toString()}`
    : '';

  const currentIndex = tabs.findIndex((tab) => tab.href === currentHref);
  const prevTab = tabs[currentIndex - 1];
  return prevTab ? `${prevTab.href}${searchUrl}` : null;
};

export function extractFileName(url: string) {
  // Create a new URL object
  const urlObj = new URL(url);

  // Extract the pathname and split by '/'
  const pathParts = urlObj.pathname.split('/');

  // The file name is the last part of the path
  const fileName = pathParts[pathParts.length - 1];

  return fileName;
}

export const getPhoneNumber = (number: string) => {
  let countryCode = '';
  let mainNumber = number?.replace('+', '');

  if (mainNumber?.includes('::')) {
    const [code, phone] = mainNumber.split('::');
    mainNumber = phone;
    countryCode = `+${code}`;
  }

  return { countryCode, mainNumber };
};

export const generatePhoneNumber = (
  countryCode: string,
  mainNumber: string,
) => {
  return `${countryCode}::${mainNumber}`;
};
export const numberFormat = (value: number) =>
  new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);
