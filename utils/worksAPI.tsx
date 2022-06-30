import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

// https://github.com/vercel/next.js/tree/canary/examples/blog-starter + https://www.section.io/engineering-education/static-nextjs-markdown-blog-typescript-mdx-tailwindcss/

// structure of work items
type WorkItems = {
    // each work has a parameter key that takes the value of a string
    [key: string]: string
}

export interface Work {
    title: string
    slug: string
    date: string
    categories: string[]
    content?: string
    appStoreURL?: string
    figmaURL?: string
    gitHubURL?: string
    websiteURL?: string
}

// path to our list of available works
const worksDirectory = join(process.cwd(), '_works')

// get the file paths of all available list of works
export const getWorkSlugs: () => string[] = () => {
    return (
        // return the md file work path and load the work content from the md files
        fs.readdirSync(worksDirectory).filter(path => /\.md?$/.test(path))
    )
}

// getting a single work
export const getWorkItemsBySlug: (
    slug: string,
    fields: string[]
) => WorkItems = (slug, fields) => {
    // create a slug from the md file location
    const realSlug = slug.replace(/\.md$/, '')

    // add path/location to a single work
    const fullPath = join(worksDirectory, `${realSlug}.md`)

    // work's content
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // get the front matter data and content
    const { data, content } = matter(fileContents)

    // get the front matter data and content
    const workItems: WorkItems = {}

    // just load and include the content needed
    fields.forEach(field => {
        // load the slug
        if (field === 'slug') {
            workItems[field] = realSlug
        }

        // load the work content
        if (field === 'content') {
            workItems[field] = content
        }

        // check if the above specified field exists on data
        if (data[field]) {
            // verify the fileds has data
            workItems[field] = data[field]
        }
    })

    // return the work items
    return workItems
}

// getting all works
export const getAllWorks: (fields: string[]) => WorkItems[] = (fields = []) => {
    // add paths for getting all works
    const slugs = getWorkSlugs()

    // get the works from the filepaths with the needed fields sorted by date in descending order
    const works = slugs
        .map(slug => getWorkItemsBySlug(slug, fields))
        .sort((work1, work2) => (work1.date > work2.date ? -1 : 1))

    // return the available work
    return works
}
