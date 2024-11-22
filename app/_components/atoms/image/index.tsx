import Image from 'next/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ImageProps } from './types';

const NextImage: FC<ImageProps> = (props: ImageProps) => {
  const { src, alt, className = '', width, height, ...rest } = props;
  return (
    <span className={twMerge('inline-flex', className)}>
      <Image
        src={src}
        alt={alt || src}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        sizes="100vw"
        width={width || 100}
        height={height || 100}
        {...(rest as any)}
      />
    </span>
  );
};

export default NextImage;
