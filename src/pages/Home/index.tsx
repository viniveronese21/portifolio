import { UserCard } from '../../components/UserCard'
import { UserContacts } from '../../components/UserContac'

export function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-10 ml-10">
        <UserCard
          name="Vinicius"
          role="Front End Developer"
          src="https://github.com/viniveronese21.png"
        />
        <UserContacts />
      </div>
    </div>
  )
}
