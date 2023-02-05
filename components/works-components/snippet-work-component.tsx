import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import { Work } from '../../utils/worksAPI'

interface Props {
    work: Work
}

const SnippetWorkComponent: FC<Props> = ({ work }) => {
    return (
        <Link
            href={`/works/${work.slug}`}
            className="-mt-6 grid w-[450px] max-w-full grid-rows-[auto_1fr_auto]"
        >
            <h2>{work.title}</h2>
            <h3>{`${work.categories.join(' – ')}`}</h3>
            <Image
                src={require(`@/assets/img/works/${work.slug}-cover.jpg`)}
                alt={`${work.title} (${work.categories.join(', ')}).`}
                width={1080}
                height={1080}
                sizes="(min-width: 568px) 50vw, (min-width: 808px) 220px, (min-width: 1048px) 25vw, (min-width: 1072px) 230px, 100vw"
                placeholder="blur"
                blurDataURL="/img/work-placeholder.jpg"
            />
        </Link>
    )
}

export default SnippetWorkComponent
