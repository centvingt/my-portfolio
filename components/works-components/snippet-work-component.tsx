import Image from 'next/image'
import Link from 'next/link'

import { FC, useEffect } from 'react'

import { Work } from '../../utils/worksAPI'

interface Props {
    work: Work
}

const SnippetWorkComponent: FC<Props> = ({ work }) => {
    return (
        <Link href={`/works/${work.slug}`}>
            <a className="mb-10 block">
                <h2>{work.title}</h2>
                <h3>{`${work.categories.join(' – ')}`}</h3>
                <div className="relative aspect-square w-full">
                    <Image
                        src={`/img/works/${work.slug}-cover.jpg`}
                        alt={`${work.title} (${work.categories.join(', ')}).`}
                        layout="fill"
                        objectFit={'contain'}
                    />
                </div>
            </a>
        </Link>
    )
}

export default SnippetWorkComponent
