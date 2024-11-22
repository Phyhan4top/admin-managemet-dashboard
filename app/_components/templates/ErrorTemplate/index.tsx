'use client';
import UiButton from '@component/atoms/button';
import { FC } from 'react';

const ErrorTemplate: FC<{
  className?: string;
  title: string;
  error: any;
  reset: () => void;
}> = ({ title = '', error, reset }) => {
  return (
    <div className="my-8 grid h-full place-content-center rounded-lg border border-solid border-gray-400  bg-white p-8 px-4">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </p>

        {
          // process.env.NODE_ENV === 'development' &&
          error?.message && (
            <p className="mt-4 text-gray-500">{error?.message}</p>
          )
        }

        <UiButton
          as="button"
          color="secondary"
          variant="outlined"
          className="mt-8 w-max"
          onClick={reset}
        >
          Reload data
        </UiButton>
      </div>
    </div>
  );
};

export default ErrorTemplate;
