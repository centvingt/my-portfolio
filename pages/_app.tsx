import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '@/components/layout-component'

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="shortcut icon"
                    href="/favicon.jpg"
                    type="image/jpeg"
                />
            </Head>
            <LayoutComponent>
                <Component {...pageProps} />
            </LayoutComponent>
        </>
    )
}

export default MyApp
