import { FC, ReactNode, useEffect, useState } from 'react'
import FooterComponent from '../footer-component'
import NavComponent from '../nav-component'

interface Props {
    children: ReactNode
}

const LayoutComponent: FC<Props> = ({ children }) => {
    const [navIsClosed, setNavIsClosed] = useState(false)

    useEffect(() => {
        window
            .matchMedia('(min-width: 640px)')
            .addEventListener('change', () => setNavIsClosed(true))
    }, [])

    return (
        <>
            <NavComponent
                navIsClosed={navIsClosed}
                setNavIsClosed={setNavIsClosed}
            />
            <div onClick={() => setNavIsClosed(true)}>
                {children}
                <FooterComponent />
            </div>
        </>
    )
}

export default LayoutComponent
