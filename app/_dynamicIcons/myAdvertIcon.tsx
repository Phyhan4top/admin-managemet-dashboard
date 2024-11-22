import classNames from 'classnames';

export const MyAdvertIcon = ({ className }: { className?: string }) => {
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
          d="M17.2902 4.62046L17.2202 8.41044C17.2102 8.93044 17.5403 9.62046 17.9603 9.93046L20.4403 11.8104C22.0303 13.0104 21.7703 14.4805 19.8703 15.0805L16.6403 16.0904C16.1003 16.2604 15.5303 16.8505 15.3903 17.4005L14.6203 20.3404C14.0103 22.6604 12.4902 22.8904 11.2302 20.8504L9.47024 18.0004C9.15024 17.4804 8.39024 17.0905 7.79024 17.1205L4.45028 17.2904C2.06028 17.4104 1.38027 16.0305 2.94027 14.2105L4.92025 11.9104C5.29025 11.4804 5.46024 10.6805 5.29024 10.1405L4.28029 6.91044C3.69029 5.01044 4.75028 3.96045 6.64028 4.58045L9.59029 5.55046C10.0903 5.71046 10.8403 5.60045 11.2603 5.29045L14.3403 3.07044C16.0003 1.87044 17.3302 2.57046 17.2902 4.62046Z"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white-600 group-hover:stroke-black-950"
        />
        <path
          d="M21.9108 22.4802L18.8809 19.4502"
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
