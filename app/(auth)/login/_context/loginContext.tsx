'use client';
import AuthServices from '@apiservices/auth';
import {
  OverridableTokenClientConfig,
  useGoogleLogin,
} from '@react-oauth/google';
import { loginAction } from '@server/serverActions/auth.server';
import { Status } from '@utils/enums';
import { DASHBOARD } from '@utils/routes';
import { FormikProps, useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

type FormValues = {
  email: string;
  password: string;
};
type formProps = {
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  value: string | string[] | undefined;
  error: any;
  onBlur: any;
  clearInput: () => void;
};

type formKeyProps = keyof FormValues;

type FormContext = {
  formik: FormikProps<FormValues>;
  formInputProps: (name: formKeyProps) => formProps;
  googleLogin: (
    overrideConfig?: OverridableTokenClientConfig | undefined,
  ) => void;
};
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const LoginContext = createContext<FormContext | null>(null);
export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error(
      'useLoginContext must be used within a LoginContextProvider',
    );
  }
  return context;
};
export default function LoginContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: async (values) => {
      const res = await loginAction({
        email: values.email,
        password: values.password,
      });

      if (res.status === Status.ERROR) {
        formik.setErrors({
          email: 'Invalid',
          password: 'Invalid',
        });
        return toast.error(res.message);
      }
      localStorage.setItem('id', res?.data?.user?.id);
      localStorage.setItem('role', res?.data?.user?.role);
      const redirect = searchParams.get('redirect');
      router.replace(redirect || DASHBOARD);
    },
  });

  const clearInput = (field: string) => {
    formik.setFieldValue(field, '', false);
  };

  const formInputProps = (name: formKeyProps): formProps => {
    return {
      name,
      onChange: formik.handleChange,
      value: formik.values[name],
      error: formik.touched[name] ? formik.errors[name] : '',
      onBlur: formik.handleBlur,
      clearInput: () => clearInput(name),
    };
  };
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await AuthServices.googleSignIn({ token: tokenResponse.access_token });
      // dispatch(login());
    },
    onError: (error) => toast.error(error.error_description),
  });

  return (
    <LoginContext.Provider value={{ formik, formInputProps, googleLogin }}>
      <form onSubmit={formik.handleSubmit} className="w-full">
        {children}
      </form>
    </LoginContext.Provider>
  );
}
