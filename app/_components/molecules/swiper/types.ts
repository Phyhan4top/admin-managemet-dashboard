import { CarouselProps } from '@component/atoms/carousel';

type SliderPropsBasic = {
  images: string[];
  noPagination?: boolean;
};

export type SliderProps = Omit<CarouselProps, 'children'> & SliderPropsBasic;
