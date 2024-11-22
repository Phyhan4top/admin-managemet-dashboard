'use client';

import UiButton from '@component/atoms/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="grid h-screen place-content-center bg-white px-4">
          <div className="text-center">
            <h1 className="text-9xl font-black text-gray-200">
              {error?.statusCode || 500}
            </h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uncaught Execptional!
            </p>

            {error?.message && (
              <p className="mt-4 text-gray-500">{error?.message}</p>
            )}

            <UiButton
              as="button"
              className="mt-8 w-1/3"
              onClick={() => reset()}
            >
              Try again
            </UiButton>
          </div>
        </div>
      </body>
    </html>
  );
}
