import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import SnippetWorkComponent from '@/components/works-components/snippet-work-component'

import { Work, getAllWorks } from '@/utils/worksAPI'

interface Props {
    allWorks: Work[]
}

const PortfolioPage: NextPage<Props> = ({ allWorks }) => {
    return (
        <>
            <Head>
                <title>
                    Travaux de développement web et mobile de Vincent Caronnet
                </title>
                <meta
                    name="description"
                    content="Parcourez les derniers travaux de Vincent Caronnet, développeur web et mobile à Paris : des applications pour iOS, des sites internet réalisés avec React ou WordPress."
                />
            </Head>
            <div className="pr-layout grid gap-5 sm:container sm:mx-auto xl:grid-cols-12">
                <div className="xl:col-span-10 xl:col-start-2">
                    <header>
                        <h1 className="mt-10">Mes travaux</h1>
                    </header>
                    <main className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(220px,_max-content))] gap-5">
                        {allWorks.map(work => (
                            <SnippetWorkComponent work={work} key={work.slug} />
                        ))}
                    </main>
                </div>
            </div>
        </>
    )
}

export default PortfolioPage

// get works from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
    const allWorks = getAllWorks(['slug', 'title', 'date', 'categories'])

    // return the allWorks props
    return {
        props: { allWorks },
    }
}
