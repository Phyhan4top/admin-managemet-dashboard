import { type AvatarProps } from '@material-tailwind/react';

type UiAvatarPropsExtend = {
  showNotification?: boolean;
};

export type UiAvatarProps = AvatarProps & UiAvatarPropsExtend;
