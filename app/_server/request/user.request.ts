import { apiRequest } from '@server/utils/fetch';
import { generateParams } from '@server/utils/params';
import { PAGINATION_LIMIT } from '@utils/pagination';
import { AllUserResponse } from '../../types/user.api';

export async function getUsers({
  limit = PAGINATION_LIMIT,
  page = '1',
 sortBy,
}: {
  limit?: string;
  page?: string;
  sortBy?: string;
}): Promise<AllUserResponse> {
  const res = await apiRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users?${generateParams({ limit, page, sortBy })}`,
    options: { method: 'GET' },
    errorMessages: 'Failed to fetch user account',
  });
  return res;
}
