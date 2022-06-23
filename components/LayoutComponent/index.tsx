import { FC, ReactNode } from 'react'
import FooterComponent from '../FooterComponent'

interface Props {
    children: ReactNode
}

const LayoutComponent: FC<Props> = ({ children }) => {
    return (
        <>
            {children}
            <FooterComponent />
        </>
    )
}

export default LayoutComponent
