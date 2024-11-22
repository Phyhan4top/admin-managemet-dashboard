import { LOGIN } from '@utils/routes';
import { redirect } from 'next/navigation';

export default function Home() {
  return redirect(LOGIN);
}
