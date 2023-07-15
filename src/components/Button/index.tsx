import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: 'success' | 'warning' | 'danger'
  label: string
}

export function Button({
  status = 'success',
  label,
  type,
  ...rest
}: ButtonProps) {
  let buttonClass = ''

  if (status === 'success') {
    buttonClass = 'bg-emerald-500 hover:bg-emerald-600'
  } else if (status === 'warning') {
    buttonClass = 'bg-orange-500 hover:bg-orange-600'
  } else {
    buttonClass = 'bg-red-500 hover:bg-red-600'
  }
  return (
    <button
      type={type}
      {...rest}
      className={`${buttonClass} dark:bg-gray-600 px-4 py-2 rounded-md transition-all text-white font-semibold`}
    >
      {label}
    </button>
  )
}
