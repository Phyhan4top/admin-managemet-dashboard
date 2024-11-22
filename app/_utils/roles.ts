export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
export enum STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE= 'INACTIVE'
}
export enum ACTION {
  UPDATE = 'UPDATE',
  CREATE= 'CREATE'
}

export const filterRoutesByRole = (routes: any[], role: string) => {
  return routes?.filter((route) => route.role.includes(role));
};
