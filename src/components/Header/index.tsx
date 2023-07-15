/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToggleTheme } from '../ToggleTheme'

interface HeaderType {
  user: any
}

export function Header({ user }: HeaderType) {
  return (
    <header className="flex justify-between px-10 h-20 items-center bg-emerald-600 dark:bg-gray-600 text-white">
      <label className="text-lg font-semibold">Hello, {user || 'User'}!</label>
      <label className="text-xl hover:text-2xl transition-all font-semibold">
        Portfolio
      </label>
      <ToggleTheme />
    </header>
  )
}
