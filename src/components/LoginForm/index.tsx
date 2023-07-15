/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../Button'
import { Input } from '../Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const CreateUserSchema = z
  .object({
    user: z
      .string()
      .nonempty('O usuario e obrigatório')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
  })
  .required()

type CreateUserProps = z.infer<typeof CreateUserSchema>

interface LoginFormProps {
  onSubmit: (user: any) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const { control, handleSubmit } = useForm<CreateUserProps>({
    resolver: zodResolver(CreateUserSchema),
  })

  const createUser = (data: CreateUserProps) => {
    onSubmit(data.user)
  }

  return (
    <form
      className="flex flex-col gap-4 items-center justify-center h-full mt-28"
      onSubmit={handleSubmit(createUser)}
    >
      <Input label="user" control={control} name="user" />
      <Button label="Enviar" type="submit" />
    </form>
  )
}
