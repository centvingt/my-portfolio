import { FC, ReactNode, useEffect, useState } from 'react'
import FooterComponent from '../footer-component'
import NavComponent from '../nav-component'

interface Props {
    children: ReactNode
}

const LayoutComponent: FC<Props> = ({ children }) => {
    const [navIsClosed, setNavIsClosed] = useState(true)

    useEffect(() => {
        try {
            window
                .matchMedia('screen and (min-width: 640px)')
                .addEventListener('change', () => setNavIsClosed(true))
        } catch (error) {
            window
                .matchMedia('screen and (min-width: 640px)')
                .addListener(() => setNavIsClosed(true))
        }
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
