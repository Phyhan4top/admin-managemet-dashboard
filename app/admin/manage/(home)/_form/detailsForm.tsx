'use client';
import UiInput from '@component/atoms/input';
import { UiOption, UiSelect } from '@component/atoms/select';
import { Roles } from '@utils/roles';
import { Fragment } from 'react';
import { useCreateAdminFormContext } from '../_context/createAdminContext';

const roleOptions = [
  {
    label: 'User',
    value: Roles.USER,
  },
  {
    label: 'Admin',
    value: Roles.ADMIN,
  },
];
const statusOptions = [
  {
    label: 'Active',
    value: 'ACTIVE',
  },
  {
    label: 'Inactive',
    value: 'INACTIVE',
  },
];
const DetailsForm = () => {
  const form = useCreateAdminFormContext();
  const userRole = localStorage.getItem('role');
  return (
    <Fragment>
      <div className="mb-[26px] flex items-center gap-[26px] max-sm:flex-wrap">
        <div className="w-full">
          <h5 className="mb-4 text-h5 font-medium text-black/85">Username</h5>

          <UiInput
            type="text"
            className=""
            placeholder="First Name"
            inputSize="sm"
            leftIcon="/icons/profile.svg"
            {...form?.formInputProps('username')}
            disabled={userRole !== 'ADMIN'}
          />
        </div>
        <div className="w-full">
          <h5 className="mb-4 text-h5 font-medium text-black/85">Email</h5>

          <UiInput
            type="text"
            className=""
            placeholder="Email"
            inputSize="sm"
            leftIcon="/icons/sms.svg"
            rightIcon={'/icons/cancel.svg'}
            {...form?.formInputProps('email')}
            disabled={userRole !== 'ADMIN'}
          />
        </div>
      </div>
      <div className="mb-[26px] flex items-center gap-[26px] max-sm:flex-wrap">
        <div className="w-full">
          <h5 className="mb-4 text-h5 font-medium text-black/85">Status</h5>

          <UiSelect
            className="h-12 w-full"
            placeholder="select"
            {...form?.formSelectProps('status')}
            disabled={userRole !== 'ADMIN'}
          >
            {statusOptions.map(({ label, value }, i) => (
              <UiOption key={i} value={value}>
                {label}
              </UiOption>
            ))}
          </UiSelect>
        </div>
        <div className="w-full">
          <h5 className="mb-4 text-h5 font-medium text-black/85">Role</h5>

          <UiSelect
            className="h-12 w-full"
            placeholder="select"
            {...form?.formSelectProps('role')}
            disabled={userRole !== 'ADMIN'}
          >
            {roleOptions.map(({ label, value }, i) => (
              <UiOption key={i} value={value}>
                {label}
              </UiOption>
            ))}
          </UiSelect>
        </div>
      </div>
      {form?.formik?.values?.action === 'CREATE' && (
        <div className="mb-[26px] flex items-center gap-[26px] max-sm:flex-wrap">
          <div className="w-full">
            <h5 className="mb-4 text-h5 font-medium text-black/85">Password</h5>

            <UiInput
              type="password"
              className="mb-4"
              inputSize="sm"
              leftIcon="/icons/key.svg"
              rightIcon="/icons/eyeclosed.svg"
              placeholder="Enter Password"
              {...form?.formInputProps('password')}
            />
          </div>
          <div className="w-full">
            <h5 className="mb-4 text-h5 font-medium text-black/85">
              Confirm Password
            </h5>

            <UiInput
              type="password"
              className="mb-4"
              inputSize="sm"
              leftIcon="/icons/key.svg"
              rightIcon="/icons/eyeclosed.svg"
              placeholder="Confirm Password"
              {...form?.formInputProps('confirmPassword')}
              showError
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DetailsForm;
