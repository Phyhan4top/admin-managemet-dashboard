'use client';
import {
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  ListProps,
  type ListItemProps,
} from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';

const UiList = (props: Omit<ListProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <List
      {...rest}
      className={twMerge(`text-black-950 ${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </List>
  );
};

const UiListItem = (props: Omit<ListItemProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <ListItem
      {...rest}
      className={twMerge(`text-black-950 ${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </ListItem>
  );
};

export {
  UiList,
  UiListItem,
  ListItemPrefix as UiListItemPrefix,
  ListItemSuffix as UiListItemSuffix,
};
