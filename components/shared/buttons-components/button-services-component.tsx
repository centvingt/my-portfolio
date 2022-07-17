import { FC } from 'react'

import ButtonComponent from './button-component'

import { BsFillPersonLinesFill } from 'react-icons/bs'

const ButtonServicesComponent: FC = () => (
    <ButtonComponent
        icon={<BsFillPersonLinesFill />}
        destination="/#services"
        label="Voir mes services"
    />
)

export default ButtonServicesComponent
