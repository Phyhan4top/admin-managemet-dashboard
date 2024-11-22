import { SidebarRoutesTypes } from '@component/organisms/sideBar/types';
import { CaretLeftIcon } from '@icons/caretLeftIcon';
import { DashboardIcon } from '@icons/dashboardIcon';
import { ProfileIcon } from '@icons/profileIcon';
import { SettingsIcon } from '@icons/settingsIcon';
import { UserIcon } from '@icons/userIcon';
import { Roles } from './roles';
import {
  DASHBOARD,
  DASHBOARD_ADMIN_MANAGE,
  DASHBOARD_PROFILE_SETTINGS,
} from './routes';

export const SETTINGS_ACTIONS = {
  OPEN_SETTINGS: 'OPEN_SETTINGS',
  CLOSE_SETTINGS: 'CLOSE_SETTINGS',
};

const dashRoute = {
  title: 'Dashboard',
  icon: DashboardIcon,
  path: DASHBOARD,
  hasSubMenu: false,
  role: [Roles.ADMIN, Roles.USER],
};

const manageAdminsRoute = {
  title: 'Manage Admins',
  icon: ProfileIcon,
  path: DASHBOARD_ADMIN_MANAGE,
  hasSubMenu: false,
  role: [Roles.ADMIN, Roles.USER],
};

const dashCommonRoutes: SidebarRoutesTypes[] = [
  {
    title: 'Settings',
    icon: SettingsIcon,
    path: '',
    hasSubMenu: false,
    action: SETTINGS_ACTIONS.OPEN_SETTINGS,
    role: [Roles.ADMIN, Roles.USER],
  },
];

export const sideBarRoutes: SidebarRoutesTypes[] = [
  dashRoute,
  manageAdminsRoute,
  ...dashCommonRoutes,
];

export const mobileNavRoutes = [dashRoute];
export const mobileDrawerRoutes: SidebarRoutesTypes[] = [
  manageAdminsRoute,
  ...dashCommonRoutes,
];

export const settingsRoutes: SidebarRoutesTypes[] = [
  {
    title: 'Go Back',
    icon: CaretLeftIcon,
    path: '',
    hasSubMenu: false,
    action: SETTINGS_ACTIONS.CLOSE_SETTINGS,
    role: [Roles.ADMIN, Roles.USER],
  },
  {
    title: 'My Profile',
    icon: UserIcon,
    path: DASHBOARD_PROFILE_SETTINGS,
    hasSubMenu: false,
    role: [Roles.ADMIN, Roles.USER],
  },
];
