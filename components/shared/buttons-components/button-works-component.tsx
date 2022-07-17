import { FC } from 'react'

import ButtonComponent from './button-component'

import { BsBookFill } from 'react-icons/bs'

const ButtonWorksComponent: FC = () => (
    <ButtonComponent
        icon={<BsBookFill />}
        destination="/works/"
        label="Feuilleter mes travaux"
    />
)

export default ButtonWorksComponent
