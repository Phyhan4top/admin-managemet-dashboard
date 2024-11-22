// PUBLIC ROUTES
export const HOME = '/admin/manage';
export const LOGIN = '/login';
export const SIGN_UP = '/signup';
export const FORGOT_PASSWORD = '/forgot-password';
export const RESET_LINK_SENT = '/reset-link-sent';
export const RESET_PASSWORD = '/reset-password';
export const RESET_PASSWORD_SUCCESS = '/reset-password-success';

//ADMIN ROUTES
export const DASHBOARD = '/admin/manage';
export const DASHBOARD_ADMIN_MANAGE = '/admin/manage';
export const DASHBOARD_STORE = `${DASHBOARD}/store`;
export const DASHBOARD_JOBS = `${DASHBOARD}/jobs`;
export const DASHBOARD_TALENTS = `${DASHBOARD}/talents`;
export const DASHBOARD_SUBSCRIPTION = `${DASHBOARD}/subscription`;
export const DASHBOARD_USERS = `${DASHBOARD}/users`;
export const DASHBOARD_REVIEWS = `${DASHBOARD}/reviews`;
export const DASHBOARD_SUPPORT = `${DASHBOARD}/support`;

//DASHBOARD SETTINGS ROUTES
export const DASHBOARD_SETTINGS = `${DASHBOARD}/settings`;
export const DASHBOARD_PROFILE_SETTINGS = `${DASHBOARD_SETTINGS}/profile`;
export const DASHBOARD_PRICE_CONFIG = `${DASHBOARD_SETTINGS}/price-config`;
export const DASHBOARD_CHANGE_PASSWORD_SETTINGS = `${DASHBOARD_SETTINGS}/change-password`;

//AUTHORIZATION
export const protectedRoutes = [DASHBOARD];

//SUPER ADMIN
export const superAdminRoutes = [];

export const authRoutes = [
  LOGIN,
  FORGOT_PASSWORD,
  RESET_LINK_SENT,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
];
