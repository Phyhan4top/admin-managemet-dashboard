'use client';
import { Country, State } from 'country-state-city';

import { UiOption, UiSelect } from '../select';
import { UiStateSelectProps } from './types';

const StateSelect = (props: UiStateSelectProps) => {
  const { countrySelected, ref, ...rest } = props;
  const country = Country.getAllCountries().find(
    ({ name }) => name.toLowerCase() === countrySelected?.toLowerCase(),
  );

  const states = State.getStatesOfCountry(country?.isoCode || '');

  return (
    <UiSelect
      ref={ref as any}
      className="h-12 w-full "
      placeholder="select state"
      disabled={!countrySelected}
      {...rest}
    >
      {states.map(({ name }: any, i) => (
        <UiOption key={i} value={name}>
          {name}
        </UiOption>
      ))}
    </UiSelect>
  );
};

export default StateSelect;
