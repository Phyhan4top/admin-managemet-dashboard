import classNames from 'classnames';

export const SubscriptionIcon = ({ className }: { className?: string }) => {
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
          d="M11.4654 2.88812L2.40338 11.9501C2.11048 12.243 2.11048 12.7179 2.40338 13.0108L11.468 22.0755C11.7609 22.3684 12.2358 22.3684 12.5287 22.0755L21.5907 13.0134C21.8836 12.7206 21.8836 12.2457 21.5907 11.9528L12.5261 2.88812C12.2332 2.59523 11.7583 2.59523 11.4654 2.88812Z"
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
