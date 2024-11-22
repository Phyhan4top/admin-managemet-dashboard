import classNames from 'classnames';

export const UserIcon = ({ className }: { className?: string }) => {
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
          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.28571"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.28571"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};