import classNames from 'classnames';

export const UserPlusIcon = ({ className }: { className?: string }) => {
  return (
    <span className={classNames('inline-block', className)}>
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.668 17.5H31.668"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.668 14.5V20.5"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.168 20.5C18.3101 20.5 21.668 17.1421 21.668 13C21.668 8.85786 18.3101 5.5 14.168 5.5C10.0258 5.5 6.66797 8.85786 6.66797 13C6.66797 17.1421 10.0258 20.5 14.168 20.5Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M3.44336 25.5C4.75743 23.9338 6.39857 22.6744 8.25144 21.8104C10.1043 20.9463 12.1239 20.4985 14.1684 20.4985C16.2128 20.4985 18.2324 20.9463 20.0853 21.8104C21.9381 22.6744 23.5793 23.9338 24.8934 25.5"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
