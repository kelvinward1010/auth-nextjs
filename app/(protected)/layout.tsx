export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Protected Navbar</nav>
      {children}
    </div>
  )
}
