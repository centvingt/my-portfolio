import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import {
    Work,
    casianCollaborationElement,
    getAllWorks,
    getFormatedDateFromWork,
    getWorkItemsBySlug,
} from '@/utils/worksAPI'
import markdownToHtml from '@/utils/markdownToHtml'
import { BsChevronLeft } from 'react-icons/bs'

import { defaultRgbDataURL } from '@/utils/getRgbDataUrl'

import {
    ButtonAppStoreComponent,
    ButtonGithubComponent,
    ButtonWebsiteComponent,
    ButtonFigmaComponent,
} from '@/components/shared'

interface Props {
    work: Work
}

const WorkPage: NextPage<Props> = ({ work }) => {
    return (
        <>
            <Head>
                <title>{`Projet réalisé par Vincent Caronnet, développeur web et mobile à Paris : ${
                    work.title
                } (${work.categories.join(', ')}).`}</title>
                <meta name="description" content={work.description} />
            </Head>
            <div className="pr-layout mt-10 grid-cols-12 gap-x-5 gap-y-1 sm:container sm:mx-auto md:grid">
                <header className="col-span-5 xl:col-span-4 xl:col-start-2">
                    <Link
                        href="/works/"
                        className="mb-5 grid grid-cols-[12px_1fr] items-center text-xs font-light text-slate-300 underline"
                    >
                        <BsChevronLeft /> Retour aux travaux
                    </Link>
                    <h1>{work.title}</h1>
                    <h2 className="mt-2">{getFormatedDateFromWork(work)}</h2>
                    <h3>{`${work.categories.join(' – ')}`}</h3>
                </header>
                <div className="col-span-5 col-start-1 xl:col-span-4 xl:col-start-2">
                    <Image
                        src={require(`@/assets/img/works/${work.slug}-cover.jpg`)}
                        alt={`${work.title} (${work.categories.join(', ')}).`}
                        width={1080}
                        height={1080}
                        placeholder="blur"
                        blurDataURL={defaultRgbDataURL}
                        sizes="(min-width: 1280px) 480px, (min-width: 1024px) 382px, (min-width: 768px) 285px, calc(100vw - 48px - 60px)"
                    />
                    {work.gitHubURL && (
                        <ButtonGithubComponent destination={work.gitHubURL} />
                    )}
                    {work.appStoreURL && (
                        <ButtonAppStoreComponent
                            destination={work.appStoreURL}
                        />
                    )}
                    {work.websiteURL && (
                        <ButtonWebsiteComponent destination={work.websiteURL} />
                    )}
                    {work.figmaURL && (
                        <ButtonFigmaComponent destination={work.figmaURL} />
                    )}
                </div>
                <main
                    className="work col-span-7 text-slate-300 sm:-mt-6 lg:col-start-7 xl:col-span-5 xl:col-start-7"
                    dangerouslySetInnerHTML={{
                        __html:
                            work.content ?? '<p>Il n’y a pas de contenu !</p>',
                    }}
                />
            </div>
        </>
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
        'startDate',
        'endDate',
        'categories',
        'description',
        'content',
        'figmaURL',
        'appStoreURL',
        'gitHubURL',
        'websiteURL',
        'categories',
        'isCCCollab',
    ])

    // import image from '@/public/img/photo-120-1500w.jpg'
    // const image = `/img/works/${slug}-cover.jpg`
    // const image = require(`/img/works/${slug}-cover.jpg`)

    let content = await markdownToHtml(work.content || '')

    if (work.isCCCollab) content += casianCollaborationElement

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
