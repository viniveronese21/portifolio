import { SunIcon } from '@heroicons/react/20/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'

export function ToggleTheme() {
  const systemPreference = window.matchMedia(
    '(prefers-color-theme: dark)',
  ).matches

  const pageClasses = document.documentElement.classList

  function toggle() {
    pageClasses.toggle('dark')
  }

  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  }, [pageClasses, systemPreference])

  return (
    <div className="hiden sm:block">
      <MoonIcon onClick={toggle} className="h-8 dark:hidden cursor-pointer" />
      <SunIcon
        onClick={toggle}
        className="h-8 hidden dark:block cursor-pointer"
      />
    </div>
  )
}
