'use client';
import UiButton from '@component/atoms/button';
import UiInput from '@component/atoms/input';
import { FORGOT_PASSWORD } from '@utils/routes';
import { Fragment } from 'react';
import { useLoginContext } from '../_context/loginContext';

export default function LoginForm() {
  const form = useLoginContext();

  return (
    <Fragment>
      <UiInput
        type="email"
        className="my-4"
        placeholder="Email"
        inputSize="sm"
        leftIcon="/icons/sms.svg"
        {...form?.formInputProps('email')}
      />

      <UiInput
        type="password"
        className="mb-4"
        inputSize="sm"
        leftIcon="/icons/key.svg"
        rightIcon="/icons/eyeclosed.svg"
        placeholder="Password"
        {...form?.formInputProps('password')}
      />

      <UiButton
        as="button"
        size="md"
        variant="filled"
        className="mb-4 w-full"
        type="submit"
        loading={form?.formik.isSubmitting}
      >
        Login
      </UiButton>

      <p className="flex w-full items-center justify-center text-sm md:text-base">
        <UiButton
          as="a"
          href={FORGOT_PASSWORD}
          variant="text"
          size="sm"
          className="h-fit p-0 font-medium text-black-1000"
          hoverEffect={false}
        >
          Forgot password
        </UiButton>
      </p>
    </Fragment>
  );
}
