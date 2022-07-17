import { FC } from 'react'

import ButtonComponent, { Target } from './button-component'

import { BsGithub } from 'react-icons/bs'

interface Props {
    destination: string
}

const ButtonGithubComponent: FC<Props> = ({ destination }) => (
    <ButtonComponent
        icon={<BsGithub />}
        label={'Voir le code sur GitHub'}
        destination={destination}
        target={Target.Blank}
    />
)

export default ButtonGithubComponent
