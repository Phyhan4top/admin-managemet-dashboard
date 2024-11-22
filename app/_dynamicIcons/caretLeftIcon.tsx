import classNames from 'classnames';

export const CaretLeftIcon = ({ className }: { className?: string }) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7071 7.77336C15.0976 8.16389 15.0976 8.79705 14.7071 9.18758L11.4142 12.4805L14.7071 15.7734C15.0976 16.1639 15.0976 16.7971 14.7071 17.1876C14.3166 17.5781 13.6834 17.5781 13.2929 17.1876L9.29289 13.1876C8.90237 12.7971 8.90237 12.1639 9.29289 11.7734L13.2929 7.77336C13.6834 7.38284 14.3166 7.38284 14.7071 7.77336Z"
          fill="inherit"
          className="fill-white-600 group-hover:fill-black-950"
        />
      </svg>
    </span>
  );
};
