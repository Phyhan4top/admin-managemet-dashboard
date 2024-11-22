import classNames from 'classnames';

export const EyeopenIcon = ({ className }: { className?: string }) => {
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
          d="M12 4.94873C4.5 4.94873 1.5 12.6987 1.5 12.6987C1.5 12.6987 4.5 20.4487 12 20.4487C19.5 20.4487 22.5 12.6987 22.5 12.6987C22.5 12.6987 19.5 4.94873 12 4.94873Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M12 15.6987C13.6569 15.6987 15 14.3556 15 12.6987C15 11.0419 13.6569 9.69873 12 9.69873C10.3431 9.69873 9 11.0419 9 12.6987C9 14.3556 10.3431 15.6987 12 15.6987Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
      </svg>
    </span>
  );
};
