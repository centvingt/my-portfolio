import type { NextPage, GetStaticProps } from 'next'
import SnippetWorkComponent from '../../components/works-components/snippet-work-component'

import { Work, getAllWorks } from '../../utils/worksAPI'

interface Props {
    allWorks: Work[]
}

const PortfolioPage: NextPage<Props> = ({ allWorks }) => {
    return (
        <div className="pr-layout">
            <h1 className="mt-10">Mes travaux</h1>
            {allWorks.map(work => (
                <SnippetWorkComponent work={work} key={work.slug} />
            ))}
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
