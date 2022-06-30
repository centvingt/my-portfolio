import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Work, getAllWorks, getWorkItemsBySlug } from '../../utils/worksAPI'
import markdownToHtml from '../../utils/markdownToHtml'
import { ParsedUrlQuery } from 'querystring'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs'

interface Props {
    work: Work
    content: string
}

const WorkPage: NextPage<Props> = ({ work }) => {
    const getDate = () => {
        const date = new Date(work.date)
        const month = date.toLocaleString('fr-FR', { month: 'long' })
        const year = date.toLocaleString('fr-FR', { year: 'numeric' })
        return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`
    }

    return (
        <div className="pr-layout mt-10">
            <header>
                <Link href="/works/">
                    <a className="mb-5 grid grid-cols-[14px_1fr] items-center text-sm font-light text-slate-500 underline">
                        <BsChevronLeft /> Retour aux travaux
                    </a>
                </Link>
                <h1>{work.title}</h1>
                <h2 className="mt-2">{getDate()}</h2>
                <h3>{`${work.categories.join(' – ')}`}</h3>
                <div className="relative aspect-square w-full border border-accent">
                    <Image
                        src={`/img/works/${work.slug}-cover.jpg`}
                        alt={`${work.title} (${work.categories.join(', ')}).`}
                        layout="fill"
                        objectFit={'contain'}
                    />
                </div>
            </header>
            <main
                dangerouslySetInnerHTML={{
                    __html: work.content ?? '<p>Il n’y a pas de contenu !</p>',
                }}
                className="text-slate-300"
            />
        </div>
    )
}

export default WorkPage

interface Params extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async context => {
    const { slug } = context.params as Params

    const work = getWorkItemsBySlug(slug, [
        'slug',
        'title',
        'date',
        'categories',
        'content',
        'figmaURL',
        'appStoreURL',
        'gitHubURL',
        'categories',
    ])

    const content = await markdownToHtml(work.content || '')

    return {
        props: {
            work: {
                ...work,
                content,
            },
        },
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    //only get the slug from works
    const works = getAllWorks(['slug'])

    // map through to return work paths
    const paths = works.map(work => ({
        params: {
            slug: work.slug,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}
