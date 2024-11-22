import classNames from 'classnames';

export const JobIcon = ({ className }: { className?: string }) => {
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
          d="M8.0008 22.4805H16.0008C20.0208 22.4805 20.7408 20.8705 20.9508 18.9105L21.7008 10.9105C21.9708 8.47047 21.2708 6.48047 17.0008 6.48047H7.0008C2.7308 6.48047 2.0308 8.47047 2.3008 10.9105L3.0508 18.9105C3.2608 20.8705 3.9808 22.4805 8.0008 22.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M8 6.48047V5.68047C8 3.91047 8 2.48047 11.2 2.48047H12.8C16 2.48047 16 3.91047 16 5.68047V6.48047"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M14 13.4805V14.4805C14 14.4905 14 14.4905 14 14.5005C14 15.5905 13.99 16.4805 12 16.4805C10.02 16.4805 10 15.6005 10 14.5105V13.4805C10 12.4805 10 12.4805 11 12.4805H13C14 12.4805 14 12.4805 14 13.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M21.65 11.4805C19.34 13.1605 16.7 14.1605 14 14.5005"
          stroke="inherit"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M2.61914 11.7505C4.86914 13.2905 7.40914 14.2205 9.99914 14.5105"
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
