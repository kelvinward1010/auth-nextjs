import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  // fake check
  if (body.email === 'admin@test.com' && body.password === '123456') {
    const res = NextResponse.json({ user: { name: 'Admin' } })
    res.cookies.set('auth_token', 'fake-jwt-token', {
      httpOnly: true,
      path: '/',
    })
    return res
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}
