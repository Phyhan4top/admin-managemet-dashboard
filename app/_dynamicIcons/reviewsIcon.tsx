import classNames from 'classnames';

export const ReviewsIcon = ({ className }: { className?: string }) => {
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
          d="M13.7309 3.99048L15.4909 7.51048C15.7309 8.00048 16.3709 8.47048 16.9109 8.56048L20.1009 9.09048C22.1409 9.43048 22.6209 10.9105 21.1509 12.3705L18.6709 14.8505C18.2509 15.2705 18.0209 16.0805 18.1509 16.6605L18.8609 19.7305C19.4209 22.1605 18.1309 23.1005 15.9809 21.8305L12.9909 20.0605C12.4509 19.7405 11.5609 19.7405 11.0109 20.0605L8.02089 21.8305C5.88089 23.1005 4.58089 22.1505 5.14089 19.7305L5.85089 16.6605C5.98089 16.0805 5.75089 15.2705 5.33089 14.8505L2.85089 12.3705C1.39089 10.9105 1.86089 9.43048 3.90089 9.09048L7.09089 8.56048C7.62089 8.47048 8.26089 8.00048 8.50089 7.51048L10.2609 3.99048C11.2209 2.08048 12.7809 2.08048 13.7309 3.99048Z"
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
