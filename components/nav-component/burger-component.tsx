import { FC, Dispatch, SetStateAction } from 'react'
import BurgerBar from './burger-bar'

interface Props {
    navIsClosed: boolean
    setNavIsClosed: Dispatch<SetStateAction<boolean>>
}

const BurgerComponent: FC<Props> = ({ navIsClosed, setNavIsClosed }) => {
    return (
        <div
            className="col-[1_/_2] row-[1_/_2] flex w-6 flex-col items-center gap-1.5 justify-self-end sm:hidden"
            onClick={() => setNavIsClosed(!navIsClosed)}
        >
            <BurgerBar navIsClosed={navIsClosed} position={0} />
            <BurgerBar navIsClosed={navIsClosed} position={1} />
            <BurgerBar navIsClosed={navIsClosed} position={2} />
        </div>
    )
}

export default BurgerComponent
