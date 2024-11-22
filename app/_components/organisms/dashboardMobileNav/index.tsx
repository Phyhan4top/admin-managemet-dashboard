'use client';
import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import {
  UiList,
  UiListItem,
  UiListItemPrefix,
  UiListItemSuffix,
} from '@component/atoms/list';
import BottomNavBar from '@component/molecules/bottomNav';
import MenuLink from '@component/molecules/menuLink';
import MobileDrawer from '@component/molecules/mobileDrawer';
import { useAppDispatch } from '@hooks/useStore';
import { SessionContext } from '@providers/sessionProvider';
import { logOutAction } from '@server/serverActions/auth.server';
import { logOut } from '@stores/authSlice';
import {
  SETTINGS_ACTIONS,
  mobileDrawerRoutes,
  mobileNavRoutes,
  settingsRoutes,
} from '@utils/dashboardRoutes';
import { getStartPath } from '@utils/index';
import { filterRoutesByRole } from '@utils/roles';
import { DASHBOARD_SETTINGS, HOME } from '@utils/routes';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DashboardMobileNavBar = () => {
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const isSettingsRoute = pathName.includes(DASHBOARD_SETTINGS);

  const session = useContext(SessionContext);
  const user = session?.user;
  const [routes, setRoutes] = useState(
    isSettingsRoute ? settingsRoutes : mobileDrawerRoutes,
  );

  const onAction = (action: string) => {
    switch (action) {
      case SETTINGS_ACTIONS.OPEN_SETTINGS:
        return setRoutes(settingsRoutes);
      case SETTINGS_ACTIONS.CLOSE_SETTINGS:
        return setRoutes(mobileDrawerRoutes);
      default:
        return null;
    }
  };
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    closeDrawer();
  }, [pathName]);

  const handleLogout = () => {
    const startPathname = getStartPath(pathName);
    logOutAction(startPathname);
    dispatch(logOut());
    toast.success('Logged out successfully');
  };

  return (
    <BottomNavBar className="flex h-[79px] px-4 py-2 lg:hidden">
      <div className="flex w-full items-center justify-between">
        {mobileNavRoutes.map((route, index) => (
          <UiButton
            key={index}
            as="a"
            href={route.path}
            variant="text"
            className="flex flex-col justify-center p-0"
          >
            <route.icon />
            <span className="mt-[3px] text-[10px] leading-none text-black-400">
              {route.title}
            </span>
          </UiButton>
        ))}
        <UiButton
          as="button"
          variant="text"
          onClick={openDrawer}
          className="flex flex-col items-center justify-center p-0 pt-[6px]"
        >
          <NextImage
            src="/icons/more-vertical.svg"
            className="max-h-6 cursor-pointer"
          />
          <span className="mt-[5px] text-[10px] leading-none text-black-400">
            Explore
          </span>
        </UiButton>
      </div>

      <MobileDrawer open={open} onClose={closeDrawer} className="pb-8">
        <UiList className="mb-8  min-w-[auto]  gap-0 p-0">
          {filterRoutesByRole(routes, user?.role || '').map((route, index) => (
            <UiListItem
              key={index}
              className="group mb-5 flex min-h-12 w-full flex-wrap items-center rounded-2xl  px-4 py-3 text-base text-white-600 last:mb-0 hover:bg-white-50 hover:text-black-950 xl:h-12"
            >
              <MenuLink route={route} onAction={onAction}>
                <UiListItemPrefix className="group mr-[14px] size-6">
                  <route.icon />
                </UiListItemPrefix>
                <span>{route.title}</span>
                {route?.rightIcon && (
                  <UiListItemSuffix className="flex h-6 w-6 items-center justify-center">
                    <route.rightIcon active />
                  </UiListItemSuffix>
                )}
              </MenuLink>
            </UiListItem>
          ))}
        </UiList>
        <div className="px-4">
          <UiButton as="a" href={HOME} className="w-full">
            <NextImage src="/icons/switchto.svg" className="inline-bloc mr-2" />
            <span className="text-sm text-black-950 md:text-base">
              Switch to Guest
            </span>
          </UiButton>
          <UiButton
            as="button"
            onClick={handleLogout}
            variant="outlined"
            className="mt-4 w-full"
          >
            <NextImage
              src="/icons/logout.svg"
              className="mr-2 inline-block size-6"
            />
            <span className="text-sm text-black-950 md:text-base">Logout</span>
          </UiButton>
        </div>
      </MobileDrawer>
    </BottomNavBar>
  );
};

export default DashboardMobileNavBar;
