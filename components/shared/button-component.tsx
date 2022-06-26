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
                className={`my-4 grid grid-cols-[18px_max-content] items-center justify-center gap-2 bg-accent py-2 px-4 text-lg font-medium text-slate-900 ${supplementaryClasses}`}
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
