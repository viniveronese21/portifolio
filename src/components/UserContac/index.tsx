import { MapPinIcon } from '@heroicons/react/20/solid'

export function UserContacts() {
  return (
    <div className="h-[348px] w-[348px] bg-emerald-600 dark:bg-gray-600 rounded-3xl mt-[30px] border-2 border-red-500">
      <ul className=" mt-[30px] ml-[40px] border-2 border-blue-500">
        <li className="flex items-center gap-2">
          <MapPinIcon className="h-[18px] w-[22px] text-white" />
          <span className="font-semibold text-white">Brasil</span>
        </li>
        <li>oi</li>
        <li>oi</li>
        <li>oi</li>
        <li>oi</li>
      </ul>
    </div>
  )
}
