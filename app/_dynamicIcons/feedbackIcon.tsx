import classNames from 'classnames';

export const FeedbackIcon = ({ className }: { className?: string }) => {
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
          d="M18.4698 17.3105L18.8598 20.4705C18.9598 21.3005 18.0698 21.8804 17.3598 21.4504L13.1698 18.9604C12.7098 18.9604 12.2599 18.9305 11.8199 18.8705C12.5599 18.0005 12.9998 16.9004 12.9998 15.7104C12.9998 12.8704 10.5398 10.5705 7.49985 10.5705C6.33985 10.5705 5.26985 10.9005 4.37985 11.4805C4.34985 11.2305 4.33984 10.9805 4.33984 10.7205C4.33984 6.17046 8.28985 2.48047 13.1698 2.48047C18.0498 2.48047 21.9998 6.17046 21.9998 10.7205C21.9998 13.4205 20.6098 15.8105 18.4698 17.3105Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 15.7103C13 16.9003 12.56 18.0003 11.82 18.8703C10.83 20.0703 9.26 20.8403 7.5 20.8403L4.89 22.3903C4.45 22.6603 3.89 22.2903 3.95 21.7803L4.2 19.8103C2.86 18.8803 2 17.3903 2 15.7103C2 13.9503 2.94 12.4003 4.38 11.4803C5.27 10.9003 6.34 10.5703 7.5 10.5703C10.54 10.5703 13 12.8703 13 15.7103Z"
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
