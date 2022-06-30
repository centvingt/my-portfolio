import type { NextPage, GetStaticProps } from 'next'
import SnippetWorkComponent from '../../components/works-components/snippet-work-component'

import { Work, getAllWorks } from '../../utils/worksAPI'

interface Props {
    allWorks: Work[]
}

const PortfolioPage: NextPage<Props> = ({ allWorks }) => {
    return (
        <div className="pr-layout">
            <header>
                <h1 className="mt-10">Mes travaux</h1>
            </header>
            {/* <main className="grid grid-cols-[repeat(auto-fill,_minmax(1fr,_450px))] gap-5"> */}
            {/* <main className="grid grid-cols-[fit-content(450px)] gap-5"> */}
            {/* <main className="grid grid-cols-[repeat(auto-fill,_minmax(min(100%,_450px),_1fr))] gap-5"> */}
            {/* <main className="grid grid-cols-[repeat(auto-fill,_max(100%,_450px))] gap-5"> */}
            {/* <main className="grid auto-cols-[fit-content(450px)] gap-5"> */}
            {/* <main className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_max-content))] gap-5"> */}
            <main className="grid grid-cols-[repeat(auto-fit,_minmax(215px,_max-content))] items-end gap-5">
                {allWorks.map(work => (
                    <SnippetWorkComponent work={work} key={work.slug} />
                ))}
            </main>
        </div>
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
