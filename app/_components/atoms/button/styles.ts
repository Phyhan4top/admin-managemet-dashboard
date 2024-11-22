const outlineStyle =
  'text-black-950 border border-solid border-black-200 hover:border-black-400';
const outlineStyleDisabled =
  'text-black-400  border-white-100 hover:border-white-100';

const textStyle =
  'border-none text-black-950 hover:text-black-800 hover:bg-white-20';
const textStyleDisabled =
  'border-none text-black-400 hover:text-black-400 hover:bg-inherit';

export const styles = {
  filled: {
    primary: 'bg-green-300 hover:bg-green-200 text-black-950 ',
    secondary: 'bg-black-950 hover:bg-black-900 text-white-50',
    tertiary: 'bg-brown-300 hover:bg-brown-200 text-black-950 ',
  },
  outlined: {
    primary: outlineStyle,
    secondary: outlineStyle,
    tertiary: outlineStyle,
  },
  text: {
    primary: textStyle,
    secondary: textStyle,
    tertiary: textStyle,
  },
};

export const disabledStyles = {
  filled: {
    primary:
      'bg-green-100 hover:bg-green-100 cursor-not-allowed text-black-400',
    secondary: 'bg-black-400 hover:bg-black-400 text-white-50',
    tertiary: 'bg-sandy-brown-100 hover:bg-sandy-brown-100 text-black-400',
  },
  outlined: {
    primary: outlineStyleDisabled,
    secondary: outlineStyleDisabled,
    tertiary: outlineStyleDisabled,
  },
  text: {
    primary: textStyleDisabled,
    secondary: textStyleDisabled,
    tertiary: textStyleDisabled,
  },
};

export const sizeStyles = {
  xl: 'h-16 text-sm md:text-base px-6 py-4 rounded-2xl',
  lg: 'h-14 py-4 px-5 rounded-[0.875rem] text-sm md:text-base',
  md: 'h-12 p-4 rounded-xl text-sm md:text-base',
  sm: 'h-12 p-4 text-sm md:text-base rounded-lg',
};
