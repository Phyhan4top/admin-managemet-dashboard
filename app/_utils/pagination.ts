export const PAGINATION_LIMIT = '10';
export const TALENT_PAGINATION_LIMIT = '6';

export const formatPaginationNumber = (
  currentPage: number,
  total: number,
  limit = parseInt(PAGINATION_LIMIT, 10),
) => {
  const startCount = (currentPage - 1) * limit + 1;
  const lastCount = currentPage * limit;
  return ` ${startCount} - ${lastCount < total ? lastCount : total} of ${total} `;
};
