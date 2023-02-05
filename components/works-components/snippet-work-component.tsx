import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import { Work } from '../../utils/worksAPI'

interface Props {
    work: Work
}

const SnippetWorkComponent: FC<Props> = ({ work }) => {
    return (
        <Link href={`/works/${work.slug}`}>
            <a className="-mt-6 grid w-[450px] max-w-full grid-rows-[auto_1fr_auto]">
                <h2>{work.title}</h2>
                <h3>{`${work.categories.join(' – ')}`}</h3>
                <div className="relative aspect-square w-full">
                    <Image
                        src={`/img/works/${work.slug}-cover.jpg`}
                        alt={`${work.title} (${work.categories.join(', ')}).`}
                        layout="fill"
                        objectFit={'contain'}
                        placeholder="blur"
                        blurDataURL="/img/works/work-placeholder.jpg"
                    />
                </div>
            </a>
        </Link>
    )
}

export default SnippetWorkComponent
