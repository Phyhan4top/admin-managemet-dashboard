import classNames from 'classnames';

export const VerificationIcon = ({ className }: { className?: string }) => {
  return (
    <span className={classNames('inline-block', className)}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 11.2336V5.73047C3.75 5.53156 3.82902 5.34079 3.96967 5.20014C4.11032 5.05949 4.30109 4.98047 4.5 4.98047H19.5C19.6989 4.98047 19.8897 5.05949 20.0303 5.20014C20.171 5.34079 20.25 5.53156 20.25 5.73047V11.2336C20.25 19.1086 13.5656 21.7148 12.2344 22.1555C12.0831 22.2115 11.9169 22.2115 11.7656 22.1555C10.4344 21.7148 3.75 19.1086 3.75 11.2336Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.125 10.2305L10.6219 15.4805L7.875 12.8555"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
