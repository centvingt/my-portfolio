import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IconContext } from 'react-icons'

interface PropsInterface {
    icon: JSX.Element
    label: string
    destination: string
    supplementaryClasses?: string
}

const ButtonComponent: FC<PropsInterface> = ({
    icon,
    label,
    destination,
    supplementaryClasses = '',
}) => {
    return (
        <Link href={destination}>
            {/* <a className="bg-accent text-slate-900 text-lg grid gap-2 grid-cols-[18px_1fr] items-center py-2 px-4"> */}
            <a
                className={`bg-accent text-slate-900 text-lg font-medium grid gap-2 grid-cols-[18px_max-content] justify-center items-center py-2 px-4 my-4 ${supplementaryClasses}`}
            >
                <IconContext.Provider value={{ size: '18px' }}>
                    {icon}
                </IconContext.Provider>

                {label}
            </a>
        </Link>
    )
}

export default ButtonComponent
