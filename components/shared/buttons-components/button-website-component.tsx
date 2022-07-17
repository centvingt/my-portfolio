import { FC } from 'react'

import ButtonComponent, { Target } from './button-component'

import { BsLink45Deg } from 'react-icons/bs'

interface Props {
    destination: string
}

const ButtonWebsiteComponent: FC<Props> = ({ destination }) => (
    <ButtonComponent
        icon={<BsLink45Deg />}
        label={'Voir le site web'}
        destination={destination}
        target={Target.Blank}
    />
)

export default ButtonWebsiteComponent
