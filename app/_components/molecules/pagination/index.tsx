'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { formatPaginationNumber } from '@utils/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, Fragment } from 'react';
import { TableFooterProps } from '../tableFooter/types';

const Pagination: FC<TableFooterProps> = ({
  data,
  totalCount,
  currentPage,
  nextPage,
  pageParamKey = 'page',
  limit = 10,
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const onPrevNavigation = () => {
    if (!currentPage || currentPage === 1) return;
    const prevPage = (currentPage - 1)?.toString();
    params.set(pageParamKey, prevPage);

    router.push(`${pathName}?${params.toString()}`);
  };

  const onNextNavigation = () => {
    if (!nextPage) return;
    const next = nextPage?.toString();
    params.set(pageParamKey, next);

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <Fragment>
      {data?.length ? (
        <div className="flex items-center justify-between px-5 py-4">
          <span className="text-sm font-medium text-black">
            {formatPaginationNumber(currentPage, totalCount, limit)}
          </span>
          <div className="flex items-center gap-4">
            <UiButton
              as="button"
              variant="outlined"
              className="h-10 w-10 rounded-lg border-transparent"
              onClick={onPrevNavigation}
            >
              <NextImage
                src="/icons/chevron-right.svg"
                className="flex min-h-6 min-w-6 rotate-180 transform"
              />
            </UiButton>
            <UiButton
              as="button"
              variant="outlined"
              className="h-10 w-10 rounded-lg border-transparent"
              onClick={onNextNavigation}
            >
              <NextImage
                src="/icons/chevron-right.svg"
                className="flex min-h-6 min-w-6"
              />
            </UiButton>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Pagination;
