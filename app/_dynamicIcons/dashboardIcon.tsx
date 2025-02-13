import classNames from 'classnames';

export const DashboardIcon = ({ className }: { className?: string }) => {
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
          d="M5 10.4805H7C9 10.4805 10 9.48047 10 7.48047V5.48047C10 3.48047 9 2.48047 7 2.48047H5C3 2.48047 2 3.48047 2 5.48047V7.48047C2 9.48047 3 10.4805 5 10.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M17 10.4805H19C21 10.4805 22 9.48047 22 7.48047V5.48047C22 3.48047 21 2.48047 19 2.48047H17C15 2.48047 14 3.48047 14 5.48047V7.48047C14 9.48047 15 10.4805 17 10.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M17 22.4805H19C21 22.4805 22 21.4805 22 19.4805V17.4805C22 15.4805 21 14.4805 19 14.4805H17C15 14.4805 14 15.4805 14 17.4805V19.4805C14 21.4805 15 22.4805 17 22.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M5 22.4805H7C9 22.4805 10 21.4805 10 19.4805V17.4805C10 15.4805 9 14.4805 7 14.4805H5C3 14.4805 2 15.4805 2 17.4805V19.4805C2 21.4805 3 22.4805 5 22.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
      </svg>
    </span>
  );
};
