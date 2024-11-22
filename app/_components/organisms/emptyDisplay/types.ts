export type EmptyDisplayProps = {
  title: string;
  description: string;
  buttonLink?: { href: string; label: string };
  buttonAction?: { onClick: () => void; label: string };
  className?: string;
  imageClassName?: string;
};
