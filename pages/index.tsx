import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import HomeSentencesComponent from '@/components/home-component/home-sentences-component'
import {
    ButtonContactComponent,
    ButtonResumeComponent,
    ButtonWorksComponent,
} from '@/components/shared'

import photo120 from '@/public/img/photo-120-1500w.jpg'

const sentences = [
    <>
        <strong>développeur web</strong> fullstack.
    </>,
    <>
        développeur <strong>mobile iOS.</strong>
    </>,
    <>
        développeur <strong>React.</strong>
    </>,
    <>
        graphiste <strong>UI.</strong>
    </>,
    <>
        basé <strong>à Paris.</strong>
    </>,
    <>
        artisan du <strong>web.</strong>
    </>,
    <>
        jeune homme <strong>de {new Date().getFullYear() - 1975} ans.</strong>
    </>,
]

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Vincent Caronnet, développeur web et mobile à Paris
                </title>
                <meta
                    name="description"
                    content="Vincent Caronnet développe à Paris vos applications mobiles et vos sites web avec les langages Swift, React et Node.js."
                />
            </Head>
            <div className="pr-layout sm:container sm:mx-auto xl:grid xl:grid-cols-12">
                <header className="mb-6 grid-cols-12 text-lg sm:grid xl:col-span-full xl:col-start-2">
                    <div className="row-[1_/_2] -mt-16 w-[120vw] max-w-4xl [clip-path:polygon(16%_0,_100%_42%,_69%_100%,_0_76%)] sm:col-[1_/_8] sm:-mt-8 sm:w-full md:col-[1_/_7] lg:col-[1_/_9] xl:-mt-32">
                        <Image
                            src={photo120}
                            alt="Vincent Caronnet, développeur mobile et web"
                            layout="responsive"
                        />
                    </div>
                    <div className="col-span-full col-start-8 row-start-1 flex h-full max-h-screen flex-col justify-end sm:col-start-7 lg:col-start-8 2xl:col-start-8">
                        <h1 className="pt-4 text-left text-lg font-thin not-italic text-slate-100 sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                            Bonjour, je suis <strong>Vincent Caronnet,</strong>
                        </h1>
                        <HomeSentencesComponent
                            sentences={sentences}
                            className="mt-0 text-left text-lg font-thin not-italic text-slate-100 sm:mb-4 sm:mt-1 sm:text-xl md:mb-6 md:text-2xl lg:mb-20 lg:mt-3 lg:text-3xl xl:text-4xl 2xl:text-5xl"
                        />
                    </div>
                </header>
                <div className="buttons-container -mt-4 xl:col-span-full xl:col-start-2">
                    <ButtonWorksComponent />
                    <ButtonResumeComponent />
                    <ButtonContactComponent />
                </div>
            </div>
            <main className="pr-layout mt-6 grid-cols-12 gap-5 sm:container sm:mx-auto md:mt-10 md:grid">
                <header className="col-span-3 grid content-start sm:mb-5 xl:col-span-3 xl:col-start-2">
                    <h1 id="services">Mes services</h1>
                    <p>
                        Je peux réaliser pour vous votre site internet ou votre
                        application mobile.
                    </p>
                </header>
                <div className="col-span-9 grid text-slate-300 sm:-mt-6 lg:col-start-5 xl:col-span-6 xl:col-start-6">
                    {/* <section className="mt-6 grid gap-x-5 md:grid-cols-2"> */}
                    <div>
                        <h2>Ce que je vais pouvoir faire pour&nbsp;vous</h2>
                        <ul className="mt-2">
                            <li>
                                Développer <strong>une applications iOS</strong>{' '}
                                pour iPhone disponible sur l’App Store,
                            </li>
                            <li>
                                réaliser <strong>un site vitrine</strong> pour
                                votre entreprise,
                            </li>
                            <li>
                                concevoir <strong>un portfolio</strong> pour
                                présenter vos travaux,
                            </li>
                            <li>
                                mettre en place{' '}
                                <strong>une boutique en ligne,</strong>
                            </li>
                            <li>
                                ou même concevoir et réaliser un projet beaucoup
                                plus complexe&thinsp;!
                            </li>
                        </ul>
                        <p>
                            Vous pourrez{' '}
                            <strong>
                                modifier vous-même votre site internet
                            </strong>{' '}
                            pour mettre à jour ses contenus <em>via</em> ce
                            qu’on appelle un CMS (
                            <strong>un système de gestion de contenus,</strong>{' '}
                            en français), une interface qui vous permettra
                            d’administrer votre site sans l’aide de personne.
                        </p>
                        <div className="buttons-container mt-2">
                            <ButtonResumeComponent />
                            <ButtonContactComponent />
                        </div>
                    </div>
                    {/* </section> */}
                </div>
            </main>
        </>
    )
}

export default HomePage
