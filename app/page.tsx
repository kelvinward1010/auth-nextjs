import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const token = (await cookies()).get('auth_token')

  if (token) redirect('/dashboard')
  redirect('/login')
}
