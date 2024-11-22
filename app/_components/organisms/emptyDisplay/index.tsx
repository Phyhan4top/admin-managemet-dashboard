import UiButton from '@component/atoms/button';
import NextImage from '@component/atoms/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { EmptyDisplayProps } from './types';

const EmptyDisplay: FC<EmptyDisplayProps> = (props) => {
  const {
    title,
    description,
    buttonAction,
    buttonLink,
    className,
    imageClassName,
  } = props;
  return (
    <div
      className={twMerge(
        'flex h-[70vh] w-full flex-col items-center justify-center',
        className,
      )}
    >
      <NextImage
        src={'/icons/not-found-search.svg'}
        className={twMerge('mb-6', imageClassName)}
        width={500}
        height={500}
      />

      <h4 className="mb-4 text-h4 font-medium text-black/85">{title}</h4>
      <p className="text-base text-white-600">{description}</p>
      {buttonLink?.label && (
        <UiButton as="a" href={buttonLink.href} className="mt-6">
          <NextImage src={'/icons/add.svg'} className="mr-2" />

          <span className="font-medium">{buttonLink.label}</span>
        </UiButton>
      )}
      {buttonAction?.label && (
        <UiButton as="button" onClick={buttonAction.onClick} className="mt-6">
          <NextImage src={'/icons/add.svg'} className="mr-2" />

          <span className="font-medium">{buttonAction.label}</span>
        </UiButton>
      )}
    </div>
  );
};

export default EmptyDisplay;
