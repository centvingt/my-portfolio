import { FC } from 'react'

import ButtonComponent from './button-component'

import { BsFillSignpostSplitFill } from 'react-icons/bs'

const ButtonResumeComponent: FC = () => (
    <ButtonComponent
        icon={<BsFillSignpostSplitFill />}
        destination="/resume/"
        label="Voir mon parcours"
    />
)

export default ButtonResumeComponent
