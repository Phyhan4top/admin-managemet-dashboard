import NextImage from '@component/atoms/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const AuthTemplate: FC<{
  children: React.ReactNode;
  className?: string;
  title: string;
  success?: boolean;
  showLogo?: boolean;
  sectionClassName?: string;
}> = ({
  children,
  className = '',
  title = '',
  success,
  showLogo = true,
  sectionClassName = '',
}) => {
  return (
    <div
      className={`flex min-h-screen w-screen items-center justify-center bg-white-100 p-4  ${className}`}
    >
      <div className="flex flex-col items-center justify-center">
        <section
          className={twMerge(
            'flex min-h-[572px] w-[95vw] flex-col items-center  justify-center rounded-[2rem] bg-white p-4 md:w-[550px] md:p-12',
            sectionClassName,
          )}
        >
          {success && (
            <NextImage
              src="/icons/success.svg"
              className="mb-8 cursor-pointer"
            />
          )}

          <h2 className="mb-4 text-center text-h3 font-medium text-black-1000 md:text-h2">
            {title}
          </h2>
          {children}
        </section>
      </div>
    </div>
  );
};

export default AuthTemplate;
