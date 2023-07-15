interface UserCardProps {
  name: string
  src: string
  role: string
}

export function UserCard({ name, role, src }: UserCardProps) {
  return (
    <div className="bg-emerald-600 dark:bg-gray-600 rounded-3xl w-[348px] h-[292px] flex flex-col items-center">
      <img
        src={src}
        alt="Imagen do ususario"
        className="cover h-32 w-32 rounded-full mt-8 border-2 dark:border-gray-900 border-white"
      />

      <span className="text-xl font-semibold mt-[30px] text-gray-100">
        {name}
      </span>
      <span className="text-sm font-semibold text-gray-100">{role}</span>
    </div>
  )
}
