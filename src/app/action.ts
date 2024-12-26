'use server';

import { auth } from '@/lib/auth';
import { session } from '@/lib/session';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';


export async function handler() {
  const userSession = await session();

  if (!userSession) {
    redirect('/signin');
  }

  await auth.api.signOut({
    headers: await headers(),
  });

  redirect('/');
}
