export const WhiteWishlistIcon = ({ wish }: { wish: boolean }) => {
  return (
    <span className="inline-block size-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
          fill={wish ? '#FEFEFE' : 'inherit'}
          stroke="#FEFEFE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export const BlackWishlistIcon = ({ wish }: { wish: boolean }) => {
  return (
    <span className="inline-block size-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20.25C12 20.25 2.625 15 2.625 8.625C2.625 7.49802 3.01546 6.40585 3.72996 5.5343C4.44445 4.66276 5.43884 4.06569 6.54393 3.84467C7.64903 3.62365 8.79657 3.79234 9.79131 4.32203C10.7861 4.85173 11.5665 5.70971 12 6.75C12.4335 5.70971 13.2139 4.85173 14.2087 4.32203C15.2034 3.79234 16.351 3.62365 17.4561 3.84467C18.5612 4.06569 19.5555 4.66276 20.27 5.5343C20.9845 6.40585 21.375 7.49802 21.375 8.625C21.375 15 12 20.25 12 20.25Z"
          fill={wish ? '#191C1F' : 'inherit'}
          stroke="#191C1F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
