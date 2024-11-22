'use client';
import UiButton from '@component/atoms/button';
import { UiCarousel } from '@component/atoms/carousel';
import NextImage from '@component/atoms/image';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { SliderProps } from './types';

const UiSwiper = (props: SliderProps) => {
  const { className = '', ref, images, noPagination, ...rest } = props;

  return (
    <UiCarousel
      ref={ref as any}
      className={twMerge(classNames(`h-full w-full rounded-2xl ${className}`))}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-0.5">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={classNames(
                `block h-[6px] w-[6px] cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'bg-white-50' : 'bg-white-300'
                }`,
                {
                  hidden: noPagination,
                },
              )}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev, firstIndex }) => (
        <UiButton
          as="button"
          variant="text"
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
          className={classNames(
            '!absolute left-4 top-2/4 h-6 w-6 -translate-y-2/4 rounded-full bg-white',
            { hidden: firstIndex },
          )}
        >
          <NextImage
            src="/icons/chevron-right.svg"
            className="flex min-h-6 min-w-6 rotate-180 transform"
          />
        </UiButton>
      )}
      nextArrow={({ handleNext, lastIndex }) => (
        <UiButton
          as="button"
          variant="text"
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className={classNames(
            '!absolute !right-4 top-2/4 h-6  w-6 -translate-y-2/4 rounded-full bg-white',
            {
              hidden: lastIndex,
            },
          )}
        >
          <NextImage
            src="/icons/chevron-right.svg"
            className="flex min-h-6 min-w-6"
          />
        </UiButton>
      )}
      transition={{ duration: 1 }}
      {...rest}
    >
      {images.map((src, i) => (
        <NextImage key={i} className="flex h-full" src={src} />
      ))}
    </UiCarousel>
  );
};

export default UiSwiper;
