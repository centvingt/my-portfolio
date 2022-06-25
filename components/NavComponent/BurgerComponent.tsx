import { FC, Dispatch, SetStateAction } from 'react'
import BurgerBar from './BurgerBar'

interface Props {
    isClosed: boolean
    setIsClosed: Dispatch<SetStateAction<boolean>>
}

const BurgerComponent: FC<Props> = ({ isClosed, setIsClosed }) => {
    return (
        <div
            className="col-[1_/_2] row-[1_/_2] flex w-6 flex-col items-center gap-1.5 justify-self-end sm:hidden"
            onClick={() => setIsClosed(!isClosed)}
        >
            <BurgerBar isClosed={isClosed} position={0} />
            <BurgerBar isClosed={isClosed} position={1} />
            <BurgerBar isClosed={isClosed} position={2} />
        </div>
    )
}

export default BurgerComponent
