'use client';
import UiInput from '@component/atoms/input';
import { KEYWORD } from '@utils/params';
import debounce from 'lodash/debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = (props) => {
  const { className, ...rest } = props;
  const dropdownRef = useRef<any>(null);
  const router = useRouter();

  const [search, setSearch] = useState('');

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  const keyword = params.get(KEYWORD);

  useEffect(() => {
    setSearch(keyword || '');
  }, [keyword]);

  const debouncedSearch = useCallback(
    debounce((search, pathName, params) => {
      if (search) {
        params.set(KEYWORD, search);
      } else {
        params.delete(KEYWORD);
      }
      //call suggestion
      router.push(`${pathName}?${params.toString()}`);
    }, 300),
    [],
  );

  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value, pathName, params);
  };

  const clearInput = () => {
    setSearch('');
    debouncedSearch('', pathName, params);
  };

  return (
    <UiInput
      type="text"
      className={className}
      placeholder="Search..."
      inputSize="sm"
      leftIcon="/icons/searchIcon.svg"
      clearInput={clearInput}
      value={search}
      onChange={onSearchChange}
      {...(rest as any)}
    />
  );
};

export default SearchBar;
