import { useState } from 'react'
import { Header } from './components/Header'
import { LoginForm } from './components/LoginForm'
import { Home } from './pages/Home/index'

export default function App() {
  const [user, setUser] = useState()

  const hasUser = Boolean(user)

  return (
    <>
      <Header user={user} />
      {hasUser && <Home />}
      {!hasUser && <LoginForm onSubmit={setUser} />}
    </>
  )
}
