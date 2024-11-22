'use client';
import classNames from 'classnames';
import { forwardRef, useId, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCountries } from 'use-react-countries';
import UiButton from '../button';
import NextImage from '../image';
import { sizeStyles } from '../input/styles';
import { UiMenu, UiMenuHandler, UiMenuItem, UiMenuList } from '../menu';
import './styles.css';
import { UiPhoneInputProps } from './types';

const getCountry = (
  countryCode: string,
  countries: { countryCallingCode: string; name: string; flags: any }[],
) => {
  let { name, flags, countryCallingCode } = countries[5];
  if (countryCode) {
    const country = countries.find(
      ({ countryCallingCode }) => countryCallingCode === countryCode,
    );

    if (country) {
      name = country.name;
      flags = country.flags;
      countryCallingCode = country.countryCallingCode;
    }
  }
  return { name, flags, countryCallingCode };
};

const PhoneInput = forwardRef((props: UiPhoneInputProps, ref: any) => {
  const generatedId = useId();

  const {
    label,
    error,
    id = generatedId,
    required,
    inputSize = 'md',
    className,
    rightIcon = '/icons/cancel.svg',
    showError = false,
    type = 'string',
    clearInput,
    countryCode = '+234',
    setCountryCode,

    ...rest
  } = props;

  const { countries } = useCountries();
  const { countryCallingCode, flags, name } = getCountry(
    countryCode,
    countries,
  );

  const [openMenu, setOpenMenu] = useState(false);
  const [focus, setFocus] = useState(false);

  const invalid = error;

  function getError() {
    if (invalid) {
      return (
        <div className=" px-3" id={id + '-error'}>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      );
    }
  }

  const onFocus = (e: any) => {
    if (rest.onFocus) {
      rest.onFocus(e);
    }
    setFocus(true);
  };
  const onBlur = (e: any) => {
    if (rest.onBlur) {
      rest.onBlur(e);
    }
    setFocus(false);
  };

  const onHandleChange = (e: any) => {
    if (e?.target?.value?.toString().startsWith('0')) {
      return;
    }
    if (rest?.onChange) {
      rest?.onChange(e);
    }
  };
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && (
            <span aria-hidden="true" className="text-red">
              &nbsp;*
            </span>
          )}
        </label>
      )}

      <div
        className={twMerge(
          classNames('relative h-auto w-full', className, {
            'mb-2': invalid && showError,
          }),
        )}
      >
        <div className="hideBtnCounter relative">
          <UiMenu
            placement="bottom-start"
            open={openMenu}
            handler={setOpenMenu}
          >
            <UiMenuHandler>
              <UiButton
                as="button"
                variant="text"
                hoverEffect={false}
                className={twMerge(
                  classNames(
                    'absolute bottom-0 left-0 top-0 z-[1] flex items-center gap-1',
                    sizeStyles[inputSize],
                  ),
                )}
                type="button"
              >
                <NextImage
                  src={flags.svg}
                  alt={name}
                  className="mr-1 h-4 w-4 rounded-full object-cover"
                />
                {countryCallingCode}
                <NextImage
                  src={'/icons/chevron-right.svg'}
                  alt={name}
                  className={classNames(
                    'flex min-h-4 min-w-4 rotate-90 transform',
                    { 'rotate-[270deg]': openMenu },
                  )}
                />
              </UiButton>
            </UiMenuHandler>
            <UiMenuList className="max-h-[20rem] max-w-[18rem]">
              {countries
                .filter(({ countryCallingCode }: any) => countryCallingCode)
                .map(
                  ({ name, flags, countryCallingCode }: any, index: number) => {
                    return (
                      <UiMenuItem
                        key={name}
                        value={name}
                        className="flex items-center gap-2"
                        onClick={() => setCountryCode(countryCallingCode)}
                      >
                        <NextImage
                          src={flags.svg}
                          alt={name}
                          className="h-5 w-5 rounded-full object-cover"
                        />
                        {name}
                        <span className="ml-auto">{countryCallingCode}</span>
                      </UiMenuItem>
                    );
                  },
                )}
            </UiMenuList>
          </UiMenu>

          <input
            ref={ref}
            type="number"
            className={twMerge(
              classNames(
                'relative flex w-full items-center border border-solid border-black-200 bg-inherit  px-12 pl-28 text-base text-black-600 placeholder:text-inherit focus:outline-none disabled:cursor-not-allowed disabled:bg-inherit',
                sizeStyles[inputSize],
                {
                  'border-white-200 cursor-not-allowed border  border-solid bg-white-50  text-black-600 opacity-40':
                    rest.disabled,
                  'border border-solid border-red-600  bg-red-50  text-black-600':
                    invalid,
                  'border border-solid border-blue-400 bg-blue-50':
                    focus && !invalid,
                },
              ),
            )}
            id={id}
            required={required}
            aria-required={required}
            aria-readonly={rest.readOnly}
            aria-disabled={rest.disabled}
            aria-invalid={invalid}
            aria-describedby={invalid ? id + '-error' : undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            min={0}
            {...(rest as any)}
            onChange={onHandleChange}
          />

          {rightIcon && (
            <div className="absolute bottom-0 right-0 top-0 flex w-14 items-center justify-center">
              <NextImage
                src={rightIcon}
                className="cursor-pointer"
                onClick={clearInput}
              />
            </div>
          )}
        </div>
        {showError && getError()}
      </div>
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
