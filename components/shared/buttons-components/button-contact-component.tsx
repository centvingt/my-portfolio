import { FC } from 'react'

import ButtonComponent from './button-component'

import { BsPencilSquare } from 'react-icons/bs'

const ButtonContactComponent: FC = () => (
    <ButtonComponent
        icon={<BsPencilSquare />}
        destination="/contact/"
        label="Me contacter"
    />
)

export default ButtonContactComponent
