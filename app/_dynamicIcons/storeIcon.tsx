import classNames from 'classnames';

export const StoreIcon = ({ className }: { className?: string }) => {
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
          d="M3.00977 11.7004V16.1904C3.00977 20.6804 4.80977 22.4804 9.29977 22.4804H14.6898C19.1798 22.4804 20.9798 20.6804 20.9798 16.1904V11.7004"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M12.0005 12.4805C13.8305 12.4805 15.1805 10.9905 15.0005 9.16047L14.3405 2.48047H9.67048L9.00048 9.16047C8.82048 10.9905 10.1705 12.4805 12.0005 12.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M18.3108 12.4805C20.3308 12.4805 21.8108 10.8405 21.6108 8.83047L21.3308 6.08047C20.9708 3.48047 19.9708 2.48047 17.3508 2.48047H14.3008L15.0008 9.49047C15.1708 11.1405 16.6608 12.4805 18.3108 12.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M5.64037 12.4805C7.29037 12.4805 8.78037 11.1405 8.94037 9.49047L9.16037 7.28047L9.64037 2.48047H6.59037C3.97037 2.48047 2.97037 3.48047 2.61037 6.08047L2.34037 8.83047C2.14037 10.8405 3.62037 12.4805 5.64037 12.4805Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M12 17.4805C10.33 17.4805 9.5 18.3105 9.5 19.9805V22.4805H14.5V19.9805C14.5 18.3105 13.67 17.4805 12 17.4805Z"
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
