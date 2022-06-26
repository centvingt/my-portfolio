import { FC, useState } from 'react'
import Link from 'next/link'
import BurgerComponent from './burger-component'

const NavComponent: FC = () => {
    const [isClosed, setIsClosed] = useState(false)

    return (
        <div
            className={`fixed top-0 right-0 left-0 z-10 overflow-hidden border-b border-accent bg-slate-900/60 px-6 py-4 text-sm font-extralight transition-all ${
                isClosed ? 'h-[52px]' : 'h-[180px] sm:h-[52px]'
            }`}
        >
            <nav className="grid justify-items-center gap-3 sm:flex sm:gap-4">
                <Link href={'/'}>
                    <a className="col-[1_/_2] row-[1_/_2] justify-self-start">
                        <span className="font-extrabold">APPS.120</span>
                        <span className="font-extralight text-accent">
                            .design
                        </span>
                    </a>
                </Link>
                <BurgerComponent
                    isClosed={isClosed}
                    setIsClosed={setIsClosed}
                />
                <Link href={'/'}>
                    <a className="text-accent sm:ml-auto">Accueil</a>
                </Link>
                <Link href={'/works/'}>
                    <a className="text-accent">Mes travaux</a>
                </Link>
                <Link href={'/resume/'}>
                    <a className="text-accent">Mon parcours</a>
                </Link>
                <Link href={'/contact/'}>
                    <a className="text-accent">Me contacter</a>
                </Link>
            </nav>
        </div>
    )
}

export default NavComponent
