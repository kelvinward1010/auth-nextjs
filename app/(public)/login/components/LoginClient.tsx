'use client'
import { useRouter } from 'next/navigation'

export default function LoginClient() {
  const router = useRouter()

  async function handleLogin() {
    await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'admin@test.com',
        password: '123456',
      }),
    })

    router.push('/dashboard')
  }

  return <button onClick={handleLogin}>Login</button>
}