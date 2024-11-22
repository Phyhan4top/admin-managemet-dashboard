export type UiImagePropsExtend = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};
export type ImageProps = UiImagePropsExtend & JSX.IntrinsicElements['img'];
