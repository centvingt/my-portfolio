import { FC, ReactNode } from 'react'
import FooterComponent from '../footer-component'
import NavComponent from '../nav-component'

interface Props {
    children: ReactNode
}

const LayoutComponent: FC<Props> = ({ children }) => {
    return (
        <>
            <NavComponent />
            {children}
            <FooterComponent />
        </>
    )
}

export default LayoutComponent
