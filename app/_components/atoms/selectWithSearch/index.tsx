'use client';
import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import UiInput from '../input';
import './styles.css';
import { UiSelectWithsearchProps } from './types';

const UiSelectWithsearch = forwardRef(
  (props: UiSelectWithsearchProps, ref: any) => {
    const {
      error,
      label,
      className = '',
      placeholder,
      options,
      onSuggestionSelected,
      value,
      ...rest
    } = props;
    const dropdownRef = useRef<any>(null);

    const [visible, setVisible] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    // click away listener
    useEffect(() => {
      document.addEventListener('mousedown', handleClick, false);
      return () =>
        document.removeEventListener('mousedown', handleClick, false);
    }, []);

    const handleClick = (e: any) => {
      if (dropdownRef.current && dropdownRef.current?.contains(e.target)) {
        return;
      }
      setVisible(false);
    };

    useEffect(() => {
      if (value) {
        setFilteredOptions(
          options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase()),
          ),
        );
      } else {
        setFilteredOptions(options);
      }
    }, [value]);

    return (
      <div className={twMerge(`w-full ${className}`)}>
        {label && (
          <p className="mb-4 text-h5 font-medium text-black/80">{label}</p>
        )}
        <UiInput
          type="text"
          className={classNames('[&_input]:!border-black-200 ', className)}
          placeholder="search..."
          inputSize="sm"
          value={value}
          error={error}
          {...(rest as any)}
          onFocus={() => setVisible(true)}
        />
        <div className="relative w-full">
          <div
            ref={dropdownRef}
            className={`absolute left-0 right-0 top-0 z-searchDropdown h-auto max-h-[250px]  w-full  overflow-y-auto rounded-2xl bg-white py-1 shadow-searchDropdown ${visible && filteredOptions.length > 0 ? 'block' : 'hidden'}`}
          >
            <ul className="h-auto">
              {filteredOptions.map((suggest, i: number) => (
                <li
                  key={i}
                  className={classNames(
                    'flex  h-full w-full cursor-pointer items-center justify-between  px-4 py-3 last:border-none hover:bg-white-20',
                  )}
                  onClick={() => {
                    setVisible(false);
                    onSuggestionSelected(suggest);
                  }}
                >
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  },
);

UiSelectWithsearch.displayName = 'UiSelectWithsearch';

export default UiSelectWithsearch;
