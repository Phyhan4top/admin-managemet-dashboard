import classNames from 'classnames';

export const NotificationIcon = ({ className }: { className?: string }) => {
  return (
    <span className={classNames('inline-block', className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.26806 10.2305C5.26681 9.34131 5.44149 8.4607 5.78202 7.63935C6.12256 6.818 6.62223 6.07214 7.25226 5.44473C7.88228 4.81732 8.63022 4.32075 9.45297 3.98363C10.2757 3.64651 11.1571 3.4755 12.0462 3.48045C15.7587 3.50858 18.7306 6.59295 18.7306 10.3148V10.9805C18.7306 14.3367 19.4337 16.2867 20.0524 17.3555C20.1182 17.4693 20.1528 17.5984 20.1529 17.7298C20.153 17.8612 20.1186 17.9904 20.0531 18.1043C19.9876 18.2182 19.8933 18.313 19.7796 18.379C19.666 18.445 19.537 18.48 19.4056 18.4805H4.59306C4.46163 18.48 4.33263 18.445 4.21899 18.379C4.10534 18.313 4.01104 18.2182 3.94552 18.1043C3.88001 17.9904 3.84559 17.8612 3.8457 17.7298C3.84582 17.5984 3.88047 17.4693 3.94619 17.3555C4.56494 16.2867 5.26806 14.3367 5.26806 10.9805V10.2305Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M9 18.4805V19.2305C9 20.0261 9.31607 20.7892 9.87868 21.3518C10.4413 21.9144 11.2044 22.2305 12 22.2305C12.7956 22.2305 13.5587 21.9144 14.1213 21.3518C14.6839 20.7892 15 20.0261 15 19.2305V18.4805"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
      </svg>
    </span>
  );
};
