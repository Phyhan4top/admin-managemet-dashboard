'use client';
import useContainerDimensions from '@hooks/useContainerDimensions';
import { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';

interface ResizerProps {
  children: (data: {
    resizeWidth: number;
    scrollContainerRef: any;
  }) => ReactNode;
  baseWidth: number;
  gap: number;
}

const ResizerTemplate: FC<ResizerProps> = ({
  children,
  baseWidth = 200,
  gap = 0,
}) => {
  const scrollContainerRef = useRef(null);

  const [resizeWidth, setResizeWidth] = useState(baseWidth);

  const { height, width } = useContainerDimensions(scrollContainerRef);

  useLayoutEffect(() => {
    const adjustedWidth = width - 1; // for lapses

    const coef = adjustedWidth / baseWidth;
    const factor = Math.floor(coef);
    const inBetweenGap = (factor - 1) * gap;

    const remainingWidth = adjustedWidth - inBetweenGap;
    const resizeWidth = remainingWidth / factor;

    setResizeWidth(resizeWidth);
  }, [width]);

  return children({ resizeWidth, scrollContainerRef });
};

export default ResizerTemplate;
