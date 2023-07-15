import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { z } from 'zod'
import { Input } from '../Input'
import { Button } from '../Button'

const FormValidationSchema = z.object({
  name: z
    .string()
    .nonempty('O nome e obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .email('Frormato de email invalido')
    .nonempty('O email e obrigatório'),
  password: z
    .string()
    .nonempty('A senha e obrigatória')
    .min(6, 'A senha precisa de no minimo 6 caracteres'),
})

type InputFormProps = z.infer<typeof FormValidationSchema>

export function Form() {
  const [output, setOutput] = useState('')
  const { control, handleSubmit } = useForm<InputFormProps>({
    resolver: zodResolver(FormValidationSchema),
  })

  const onSubmit = (data: InputFormProps) => {
    setOutput(JSON.stringify(data, null, 2))
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 justify-center items-center h-screen"
    >
      <Input name="name" control={control} label="Nome" />
      <Input name="email" control={control} type="email" label="E-mail" />
      <Input name="password" control={control} type="password" label="Senha" />
      <Button type="submit" label="Enviar" />
      <pre className="dark:text-gray-200 font-semibold">{output}</pre>
    </form>
  )
}
