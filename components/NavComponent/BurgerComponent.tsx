import { FC, Dispatch, SetStateAction } from 'react'
import BurgerBar from './BurgerBar'

interface Props {
    isClosed: boolean
    setIsClosed: Dispatch<SetStateAction<boolean>>
}

const BurgerComponent: FC<Props> = ({ isClosed, setIsClosed }) => {
    return (
        <div
            className="row-[1_/_2] col-[1_/_2] justify-self-end items-center w-6 flex flex-col gap-1.5 sm:hidden"
            onClick={() => setIsClosed(!isClosed)}
        >
            <BurgerBar isClosed={isClosed} position={0} />
            <BurgerBar isClosed={isClosed} position={1} />
            <BurgerBar isClosed={isClosed} position={2} />
        </div>
    )
}

export default BurgerComponent
