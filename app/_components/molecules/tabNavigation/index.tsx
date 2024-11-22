'use client';
import { UiTab, UiTabs, UiTabsHeader } from '@component/atoms/tabs';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabNavigationProps } from './types';

// we may need this to preverse scroll history/state before navigating to another tab
// https://jak-ch-ll.medium.com/next-js-preserve-scroll-history-334cf699802a
const TabNavigation: FC<TabNavigationProps> = ({ routes, fullView }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const newHref = (href: string) =>
    `${href}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

  const tabRefs = routes.reduce((acc: { [key: string]: any }, curr) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[newHref(curr.href)] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    if (tabRefs[newHref(pathName)]?.current) {
      tabRefs[newHref(pathName)].current.click();
    }
  }, [newHref(pathName)]);

  return (
    <UiTabs value={newHref(pathName)}>
      <UiTabsHeader
        className="overflow-x-auto overflow-y-hidden rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
        }}
      >
        {routes.map(({ label, href }) => {
          return (
            <UiTab
              key={newHref(href)}
              value={newHref(href)}
              className={twMerge(
                classNames('w-max min-w-max px-0 py-0 [&>div]:w-full', {
                  'w-full': fullView,
                }),
              )}
            >
              <Link
                href={newHref(href)}
                className={twMerge(
                  classNames(
                    'inline-flex w-full items-center justify-center gap-2 px-8  py-4 text-sm font-medium capitalize text-white-600',
                    {
                      'text-black-950': pathName === newHref(href),
                    },
                  ),
                )}
                ref={tabRefs[newHref(href)]}
              >
                {label}
                {/* {showNotification && (
                  <span
                    className={`inline-flex h-2 w-2 rounded-[50%] bg-green-500 `}
                  ></span>
                )} */}
              </Link>
            </UiTab>
          );
        })}
      </UiTabsHeader>
    </UiTabs>
  );
};

export default TabNavigation;
