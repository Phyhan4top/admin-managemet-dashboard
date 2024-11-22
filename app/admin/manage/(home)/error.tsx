'use client';
import ErrorTemplate from '@component/templates/ErrorTemplate';

type ErrorProps = {
  error: Error & { statusCode?: number };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorTemplate error={error} title="Failed to load data" reset={reset} />
  );
}
