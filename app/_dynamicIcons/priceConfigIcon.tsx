import classNames from 'classnames';
export const PriceConfigIcon = ({ className }: { className?: string }) => {
  return (
    <span className={classNames('inline-block', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M6.73 20.1805C7.55 19.3005 8.8 19.3705 9.52 20.3305L10.53 21.6805C11.34 22.7505 12.65 22.7505 13.46 21.6805L14.47 20.3305C15.19 19.3705 16.44 19.3005 17.26 20.1805C19.04 22.0805 20.49 21.4505 20.49 18.7905V7.52047C20.5 3.49047 19.56 2.48047 15.78 2.48047H8.22C4.44 2.48047 3.5 3.49047 3.5 7.52047V18.7805C3.5 21.4505 4.96 22.0705 6.73 20.1805Z"
          stroke="#656565"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13.4805L15 7.48047"
          stroke="#656565"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9945 13.4805H15.0035"
          stroke="#656565"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.99451 7.98047H9.00349"
          stroke="#656565"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
