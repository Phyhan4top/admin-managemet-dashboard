'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import {
  UiList,
  UiListItem,
  UiListItemPrefix,
  UiListItemSuffix,
} from '@component/atoms/list';
import MenuLink from '@component/molecules/menuLink';
import { useAppDispatch } from '@hooks/useStore';
import { SessionContext } from '@providers/sessionProvider';
import { logOutAction } from '@server/serverActions/auth.server';
import { logOut } from '@stores/authSlice';
import {
  SETTINGS_ACTIONS,
  settingsRoutes,
  sideBarRoutes,
} from '@utils/dashboardRoutes';
import { getStartPath, isActivePath } from '@utils/index';
import { filterRoutesByRole } from '@utils/roles';
import { DASHBOARD_SETTINGS } from '@utils/routes';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { Fragment, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import SubMenu from './subMenu';

export default function SideBar() {
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const isSettingsRoute = pathName.includes(DASHBOARD_SETTINGS);
  const session = useContext(SessionContext);
  const user = session?.user;

  const [routes, setRoutes] = useState(
    isSettingsRoute ? settingsRoutes : sideBarRoutes,
  );

  const onAction = (action: string) => {
    switch (action) {
      case SETTINGS_ACTIONS.OPEN_SETTINGS:
        return setRoutes(settingsRoutes);
      case SETTINGS_ACTIONS.CLOSE_SETTINGS:
        return setRoutes(sideBarRoutes);
      default:
        return null;
    }
  };

  const handleLogout = () => {
    const startPathname = getStartPath(pathName);
    logOutAction(startPathname);
    dispatch(logOut());
    toast.success('Logged out successfully');
  };

  const menuItems = (
    <UiList className="mb-20  min-w-[auto]  gap-0 p-0">
      {filterRoutesByRole(routes, user?.role || '').map((route, index) => {
        if (route.hasSubMenu && route?.subRoutes?.length) {
          return <SubMenu {...route} key={index} />;
        }
        return (
          <UiListItem
            key={index}
            className={twMerge(
              classNames(
                'group mb-6 flex min-h-12 w-full flex-wrap items-center rounded-2xl  px-4 py-3 text-base text-white-600 last:mb-0 hover:bg-white-50 hover:text-black-950 xl:h-12',
                {
                  'bg-white-100 text-black-950': isActivePath(
                    pathName,
                    route?.path,
                  ),
                },
              ),
            )}
          >
            <MenuLink route={route} onAction={onAction}>
              <UiListItemPrefix className="group mr-[14px] size-6">
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
                <UiListItemSuffix className="flex h-6 w-6 items-center justify-center">
                  <route.rightIcon active />
                </UiListItemSuffix>
              )}
            </MenuLink>
          </UiListItem>
        );
      })}
    </UiList>
  );
  return (
    <Fragment>
      <div className=" h-full w-full  py-8 ">
       
        <div className="h-[calc(100vh-220px)] overflow-y-auto pl-5 pr-[35px] ">
          {menuItems}
        </div>
        <div className="px-4 pt-4 xl:pl-5">
          <UiButton
            as="button"
            onClick={handleLogout}
            variant="outlined"
            className="w-full"
          >
            <NextImage
              src="/icons/logout.svg"
              className="mr-2 inline-block size-6"
            />
            <span className="text-sm text-black-950 md:text-base">Logout</span>
          </UiButton>
        </div>
      </div>
    </Fragment>
  );
}
