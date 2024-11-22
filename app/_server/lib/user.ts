import { ADMIN_TOKEN } from '@server/utils';
import { createSession } from './session';
import { User } from '../../types/user.api';

export async function userHandler(user: User) {
  await createSession(ADMIN_TOKEN, user);
}
