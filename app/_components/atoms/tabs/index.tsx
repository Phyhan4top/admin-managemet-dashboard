'use client';
import {
  Tab,
  TabPanel,
  TabProps,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';

const UiTab = (props: Omit<TabProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <Tab
      {...rest}
      className={twMerge(`text-black-950 ${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </Tab>
  );
};

export {
  UiTab,
  TabPanel as UiTabPanel,
  Tabs as UiTabs,
  TabsBody as UiTabsBody,
  TabsHeader as UiTabsHeader,
};
