import { FC, Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import BurgerComponent from './burger-component'

interface Props {
    navIsClosed: boolean
    setNavIsClosed: Dispatch<SetStateAction<boolean>>
}

const NavComponent: FC<Props> = ({ navIsClosed, setNavIsClosed }) => {
    return (
        <div
            className={`fixed top-0 right-0 left-0 z-10 overflow-hidden border-b border-accent bg-slate-900/80 px-6 py-4 text-sm font-extralight transition-all ${
                navIsClosed ? 'h-[52px]' : 'h-[180px] sm:h-[52px]'
            }`}
        >
            <div className="grid sm:container sm:mx-auto xl:grid-cols-12">
                <nav className="col-span-full grid justify-items-center gap-3 sm:container sm:mx-auto sm:flex sm:gap-4 xl:col-span-10 xl:col-start-2">
                    <Link href={'/'}>
                        <a className="col-[1_/_2] row-[1_/_2] justify-self-start">
                            <span className="font-extrabold">APPS.120</span>
                            <span className="font-extralight text-accent">
                                .design
                            </span>
                        </a>
                    </Link>
                    <BurgerComponent
                        navIsClosed={navIsClosed}
                        setNavIsClosed={setNavIsClosed}
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
        </div>
    )
}

export default NavComponent
