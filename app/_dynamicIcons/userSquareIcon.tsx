import classNames from 'classnames';

export const UserSquareIcon = ({ className }: { className?: string }) => {
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
          d="M18.1394 22.1005C17.2594 22.3605 16.2194 22.4805 14.9994 22.4805H8.99937C7.77937 22.4805 6.73937 22.3605 5.85938 22.1005C6.07937 19.5005 8.74937 17.4504 11.9994 17.4504C15.2494 17.4504 17.9194 19.5005 18.1394 22.1005Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M15 2.48047H9C4 2.48047 2 4.48047 2 9.48047V15.4805C2 19.2605 3.14 21.3305 5.86 22.1005C6.08 19.5005 8.75 17.4504 12 17.4504C15.25 17.4504 17.92 19.5005 18.14 22.1005C20.86 21.3305 22 19.2605 22 15.4805V9.48047C22 4.48047 20 2.48047 15 2.48047ZM12 14.6505C10.02 14.6505 8.42 13.0405 8.42 11.0605C8.42 9.08049 10.02 7.48047 12 7.48047C13.98 7.48047 15.58 9.08049 15.58 11.0605C15.58 13.0405 13.98 14.6505 12 14.6505Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M15.5819 11.0605C15.5819 13.0405 13.9819 14.6505 12.0019 14.6505C10.0219 14.6505 8.42188 13.0405 8.42188 11.0605C8.42188 9.08049 10.0219 7.48047 12.0019 7.48047C13.9819 7.48047 15.5819 9.08049 15.5819 11.0605Z"
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
