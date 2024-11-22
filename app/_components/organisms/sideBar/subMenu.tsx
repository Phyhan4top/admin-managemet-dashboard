'use client';
import {
  UiAccordion,
  UiAccordionBody,
  UiAccordionHeader,
} from '@component/atoms/accordion';
import NextImage from '@component/atoms/image';
import {
  UiList,
  UiListItem,
  UiListItemPrefix,
  UiListItemSuffix,
} from '@component/atoms/list';
import { SessionContext } from '@providers/sessionProvider';
import { isActivePath } from '@utils/index';
import { filterRoutesByRole } from '@utils/roles';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { SidebarRoutesTypes } from './types';

const ChevronIcon = ({ active }: { active?: boolean }) => (
  <NextImage
    src={'/icons/chevron-right.svg'}
    alt={'chrevon-down'}
    className={classNames('flex min-h-4 min-w-4 rotate-90 transform', {
      'rotate-[270deg]': active,
    })}
  />
);

const SubMenu: FC<SidebarRoutesTypes> = (props) => {
  const { title, subRoutes } = props;
  const pathName = usePathname();
  const session = useContext(SessionContext);
  const user = session?.user;

  const activePath = subRoutes?.some(({ path }) => path === pathName);

  const [open, setOpen] = useState(!!activePath);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  if (!subRoutes) {
    return null;
  }
  return (
    <UiAccordion
      open={open}
      icon={<ChevronIcon active={open} />}
      className="mb-6"
    >
      <UiListItem className="group p-0" selected={open}>
        <UiAccordionHeader
          onClick={handleOpen}
          className={twMerge(
            classNames(
              ' border-b-0 px-4 py-3 text-base font-medium text-white-600 hover:bg-white-50 hover:text-black-950',
              { 'text-black-950': open || activePath },
            ),
          )}
        >
          <div className="flex items-center">
            <UiListItemPrefix className="group mr-[14px] size-6">
              <props.icon
                className={
                  open || activePath ? '[&_path]:!stroke-black-950' : ''
                }
              />
            </UiListItemPrefix>
            <span className="">{title}</span>
          </div>
        </UiAccordionHeader>
      </UiListItem>
      <UiAccordionBody className="py-1">
        <UiList className="p-0">
          {filterRoutesByRole(subRoutes, user?.role || '')?.map(
            (route, index) => (
              <UiListItem
                key={index}
                className={twMerge(
                  classNames(
                    'group flex min-h-12 w-full flex-wrap items-center rounded-2xl  px-8 py-3 text-base text-white-600 last:mb-0 hover:bg-white-50 hover:text-black-950 xl:h-12',
                    {
                      'bg-white-100 text-black-950': isActivePath(
                        pathName,
                        route?.path,
                      ),
                    },
                  ),
                )}
              >
                <Link
                  href={route.path}
                  className="flex h-full w-full items-center"
                >
                  <UiListItemPrefix>
                    <route.icon
                      className={
                        isActivePath(pathName, route?.path)
                          ? '[&_path]:!stroke-black-950'
                          : ''
                      }
                    />
                  </UiListItemPrefix>
                  <span>{route.title}</span>

                  {route?.rightIcon && (
                    <UiListItemSuffix>
                      <route.rightIcon />
                    </UiListItemSuffix>
                  )}
                </Link>
              </UiListItem>
            ),
          )}
        </UiList>
      </UiAccordionBody>
    </UiAccordion>
  );
};

export default SubMenu;
