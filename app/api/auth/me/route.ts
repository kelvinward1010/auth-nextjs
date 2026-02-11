import { cookies } from 'next/headers'

export async function GET() {
  const token = (await cookies()).get('auth_token')?.value

  if (!token) return Response.json(null, { status: 401 })

  return Response.json({ name: 'Admin' })
}
