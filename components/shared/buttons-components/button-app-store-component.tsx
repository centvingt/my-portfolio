import { FC } from 'react'

import ButtonComponent, { Target } from './button-component'

import { BsApple } from 'react-icons/bs'

interface Props {
    destination: string
}

const ButtonAppStoreComponent: FC<Props> = ({ destination }) => (
    <ButtonComponent
        icon={<BsApple />}
        label={'Télécharger sur l’App Store'}
        destination={destination}
        target={Target.Blank}
    />
)

export default ButtonAppStoreComponent
