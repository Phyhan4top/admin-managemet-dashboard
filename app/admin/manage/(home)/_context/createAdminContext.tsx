'use client';
import {
  createAdminAction,
  updateAdminAction,
} from '@server/serverActions/admin.server';
import { Status } from '@utils/enums';
import { ACTION, Roles, STATUS } from '@utils/roles';
import { HOME } from '@utils/routes';
import { FormikProps, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { User } from '../../../../types/user.api';

type FormValuesType = {
  action: ACTION;
  id: string;
  status: STATUS;
  email: string;
  username: string;
  role: Roles;
  password: string;
  confirmPassword: string;
};

type FormProps = {
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  value: string | string[] | undefined;
  error: string | undefined;
  onBlur: (e: any) => void;
  clearInput: () => void;
};

type FormSelectProps = {
  name: string;
  value: string;
  onChange: (val: any | undefined) => void;
  onBlur: (e: any) => void;
};

type FormKeyProps = keyof Omit<FormValuesType, 'action'>;

type FormContext = {
  formInputProps: (name: FormKeyProps) => FormProps;
  formSelectProps: (name: FormKeyProps) => FormSelectProps;
  formik: FormikProps<FormValuesType>;
  resetForm: () => void;
  updateFormFields: (data: FormValuesType) => void;
  openCreateForm: boolean;
  createFormhandler: (val?: boolean) => void;
  openSuccess: boolean;
  setOpenSuccess: (open: boolean) => void;
};

const validationSchema = Yup.object({
  action: Yup.string().oneOf(Object.values(ACTION), 'Invalid action'),

  username: Yup.string().required('Username is required'),
  role: Yup.string().required('role is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
});

const CreateAdminFormContext = createContext<FormContext | null>(null);

export const useCreateAdminFormContext = () => {
  const context = useContext(CreateAdminFormContext);
  if (!context) {
    throw new Error(
      'useCreateAdminFormContext must be used within a CreateAdminFormProvider',
    );
  }
  return context;
};

export default function CreateAdminFormProvider({
  children,
  selectedAdmin,
}: {
  children: ReactNode;
  selectedAdmin?: User | null;
}) {
  const router = useRouter();
  const [openCreateForm, setOpenCreateForm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const formik = useFormik<FormValuesType>({
    initialValues: {
      action: ACTION.CREATE,
      id: '',
      status: STATUS.ACTIVE,
      email: '',
      username: '',
      role: Roles.USER,
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const { action, ...formValues } = values;
      if (action === ACTION.CREATE) {
        const res = await createAdminAction({
          email: formValues?.email,
          username: formValues?.username,
          role: formValues?.role,
          status: formValues?.status,
          password: formValues?.password,
        });
        if (res.status === Status.ERROR) {
          return toast.error(res.message);
        }
        setOpenCreateForm(false);
      }
      if (action === ACTION.UPDATE) {
        const { id, ...update } = formValues;

        const res = await updateAdminAction(id, {
          email: update?.email,
          username: update?.username,
          status: update?.status,
          role: update?.role,

           // Do not send password if not changed
      ...(update.password ? { password:update.password } : {}),
        });
        if (res.status === Status.ERROR || res.error === 'Unauthorized') {
          return toast.error(res.message);
        }
        setOpenCreateForm(false);
        router.push(HOME);
      }
      setOpenSuccess(true);
    },
  });
console.log(formik.errors);
  useEffect(() => {
    if (selectedAdmin) {
      formik.setValues({
        action: ACTION.UPDATE,
        id: selectedAdmin.id,
        email: selectedAdmin?.email,
        username: selectedAdmin?.username,
        role: selectedAdmin?.role,
        status: selectedAdmin?.status,
        password: '',
        confirmPassword: '',
      });
      setOpenCreateForm(true);
    }
  }, [selectedAdmin]);

  const updateFormFields = (data: FormValuesType) => {
    Object.entries(data).forEach(([field, value]) => {
      formik.setFieldValue(field, value);
    });
  };

  const clearInput = (field: string) => {
    formik.setFieldValue(field, '');
  };

  const resetForm = () => {
    formik.resetForm();
  };

  const createFormhandler = (val?: boolean) => {
    setOpenCreateForm(val ? val : (prev) => !prev);
    router.push(HOME);
    resetForm();
  };

  const formInputProps = (name: FormKeyProps): FormProps => ({
    name,
    onChange: formik.handleChange,
    value: formik.values[name],
    error: formik.touched[name] ? formik.errors[name] : undefined,
    onBlur: formik.handleBlur,
    clearInput: () => clearInput(name),
  });

  const formSelectProps = (name: FormKeyProps): FormSelectProps => ({
    name,
    value: formik.values[name] || '',
    onChange: (valueOrEvent) => {
      // Handle custom selects or standard events
      const value = valueOrEvent?.target?.value ?? valueOrEvent;
      formik.setFieldValue(name, value);
    },
    onBlur: formik.handleBlur,
  });

  return (
    <CreateAdminFormContext.Provider
      value={{
        formik,
        formInputProps,
        formSelectProps,
        resetForm,
        updateFormFields,
        openCreateForm,
        createFormhandler,
        openSuccess,
        setOpenSuccess,
      }}
    >
      {children}
    </CreateAdminFormContext.Provider>
  );
}
