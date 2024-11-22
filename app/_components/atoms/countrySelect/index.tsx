'use client';
import { Country } from 'country-state-city';

import { UiOptionWithIcon, UiSelectWithIcon } from '../selectWithIcon';
import { UiCountrySelectProps } from './types';

const CountrySelect = (props: UiCountrySelectProps) => {
  const { ref, ...rest } = props;
  const countries = Country.getAllCountries();

  return (
    <UiSelectWithIcon ref={ref as any} placeholder="select a country" {...rest}>
      {countries.map(({ name, flag, isoCode }: any, index: number) => (
        <UiOptionWithIcon
          key={index}
          value={name}
          className="flex min-w-max items-center p-2"
        >
          <span className="mr-2 inline-flex h-5 w-5 scale-150 items-center justify-center">
            {flag}
          </span>
          {name}
        </UiOptionWithIcon>
      ))}
    </UiSelectWithIcon>
  );
};

export default CountrySelect;
