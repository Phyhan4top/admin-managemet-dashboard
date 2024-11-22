type IconType = ({
  className,
  active,
}: {
  className?: string;
  active?: boolean;
}) => JSX.Element;

export type SubRoutes = {
  title: string;
  icon: IconType;
  path: string;
  rightIcon?: IconType;
  role: string[];
};
export type SidebarRoutesTypes = {
  title: string;
  icon: IconType;
  path: string;
  hasSubMenu: boolean;
  rightIcon?: IconType;
  action?: string;
  subRoutes?: SubRoutes[];
  role: string[];
};
