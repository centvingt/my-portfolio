import { FC } from 'react'

import ButtonComponent, { Target } from './button-component'

import { BsFillBrushFill } from 'react-icons/bs'

interface Props {
    destination: string
}

const ButtonFigmaComponent: FC<Props> = ({ destination }) => (
    <ButtonComponent
        icon={<BsFillBrushFill />}
        label={'Voir la maquette sur Figma'}
        destination={destination}
        target={Target.Blank}
    />
)

export default ButtonFigmaComponent
