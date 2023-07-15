/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Control } from 'react-hook-form'

type FormInputProps = {
  control: Control<any, any>
  name: string
  label?: string
  type?: string
}

export function Input({ control, name, label, type = 'text' }: FormInputProps) {
  return (
    <div className="flex gap-2">
      <label className="text-md font-semibold text-gray-600 dark:text-gray-700 flex items-center">
        {label}:
      </label>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <input
            className="outline-emerald-500 border border-gray-300 rounded-md p-1"
            type={type}
            {...field}
          />
        )}
      />
    </div>
  )
}
