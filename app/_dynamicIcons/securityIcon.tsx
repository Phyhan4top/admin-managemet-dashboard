import classNames from 'classnames';

export const SecurityIcon = ({ className }: { className?: string }) => {
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
          d="M10.4902 2.71053L5.50016 4.59053C4.35016 5.02053 3.41016 6.38053 3.41016 7.60053V15.0305C3.41016 16.2105 4.19016 17.7605 5.14016 18.4705L9.44016 21.6805C10.8502 22.7405 13.1702 22.7405 14.5802 21.6805L18.8802 18.4705C19.8302 17.7605 20.6102 16.2105 20.6102 15.0305V7.60053C20.6102 6.37053 19.6702 5.01053 18.5202 4.58053L13.5302 2.71053C12.6802 2.40053 11.3202 2.40053 10.4902 2.71053Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.9805C13.1046 12.9805 14 12.085 14 10.9805C14 9.8759 13.1046 8.98047 12 8.98047C10.8954 8.98047 10 9.8759 10 10.9805C10 12.085 10.8954 12.9805 12 12.9805Z"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.9805V15.9805"
          stroke="inherit"
          className="stroke-white-600 group-hover:stroke-black-950"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
