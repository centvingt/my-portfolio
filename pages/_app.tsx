import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from '@/components/layout-component'
import Script from 'next/script'

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload" id="script">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fr_FR" />
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
