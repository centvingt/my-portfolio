import { FC } from 'react'

interface Props {
    isClosed: boolean
    position: Position
}
enum Position {
    First,
    Second,
    Third,
}

const BurgerBar: FC<Props> = ({ isClosed, position }) => {
    const getCSSProperty: () => string = () => {
        if (isClosed) return ''

        switch (position) {
            case 0:
                return 'translate-y-[7px] rotate-45'
            case 1:
                return 'scale-x-0'
            case 2:
                return 'translate-y-[-7px] -rotate-45'
            default:
                return ''
        }
    }
    return (
        <div
            className={`h-px w-full bg-accent transition-all ${getCSSProperty()}`}
        ></div>
    )
}

export default BurgerBar
