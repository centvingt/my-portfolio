import { FC, ReactNode } from 'react'
import FooterComponent from '../FooterComponent'
import NavComponent from '../NavComponent'

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
