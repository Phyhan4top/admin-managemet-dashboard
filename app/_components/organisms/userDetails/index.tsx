import UiAvatar from '@component/atoms/avatar';
import { Fragment } from 'react';

export const UserDetails = ({ user }: { user: any }) => {
  return (
    <Fragment>
      <div className="flex flex-col gap-8 md:flex-row lg:gap-3">
        <div className="w-full md:w-[20%]">
          <UiAvatar
            src={user?.photo}
            alt="avatar"
            className="h-[112px] w-[112px] rounded-[50%]"
          />
        </div>

        <div className="w-full md:w-[80%]">
          <div className="mb-[26px] flex items-center gap-[26px] max-sm:flex-wrap">
            <div className="w-full border-b-2 border-black-200">
              <h5 className="text-lg text-[#5d5d5d]">First Name </h5>

              <div className="my-2 text-h5 font-medium text-black/85">
                {user?.username}
              </div>
            </div>
            <div className="w-full border-b-2 border-black-200">
              <h5 className="text-lg text-black-600">Email</h5>

              <div className="my-2 text-h5 font-medium text-black/85">
                {user?.email}
              </div>
            </div>
          </div>
          <div className="mb-[26px] flex items-center gap-[26px] max-sm:flex-wrap">
            <div className="w-full border-b-2 border-black-200">
              <h5 className="text-lg text-black-600">Role</h5>

              <div className="my-2 text-h5 font-medium text-black/85">
                {user?.role}
              </div>
            </div>
            <div className="w-full border-b-2 border-black-200">
              <h5 className="text-lg text-black-600">Status</h5>

              <div className="my-2 text-h5 font-medium text-black/85">
                {user?.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
