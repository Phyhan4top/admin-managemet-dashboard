'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

/**@note for some reason this makes cause a login re-route in production due to redirect */
export async function redirectAction(pathname: string, params: string) {
  revalidatePath(pathname); // Update cached
  redirect(`${pathname}?${params}`);
}
