import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionTemplate: FC<{
  children: React.ReactNode;
  className?: string;
  as: 'section' | 'div';
}> = (props) => {
  const { children, as: Component = 'section', className = '' } = props;
  return (
    <Component
      className={twMerge(
        `mx-auto w-[95%] md:w-[95%] lg:w-[90%] 2xl:w-[80%]`,
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default SectionTemplate;
