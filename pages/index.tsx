import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BsBookFill, BsPersonLinesFill, BsPencilSquare } from 'react-icons/bs'
import HomeSentencesComponent from '../components/home-component/home-sentences-component'
import ButtonComponent from '../components/shared/button-component'

import photo120 from '../public/img/photo-120-1500w.jpg'

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
                <div className="buttons-container xl:col-span-full xl:col-start-2">
                    <ButtonComponent
                        icon={<BsBookFill />}
                        destination="/works/"
                        label="Feuilleter mes travaux"
                    />
                    <ButtonComponent
                        icon={<BsPersonLinesFill />}
                        destination="/resume/"
                        label="Voir mon parcours"
                    />
                    <ButtonComponent
                        icon={<BsPencilSquare />}
                        destination="/contact/"
                        label="Me contacter"
                    />
                </div>
            </div>
        </>
    )
}

export default HomePage

const sentences = [
    <>
        développeur <strong>mobile iOS.</strong>
    </>,
    <>
        <strong>développeur web</strong> fullstack.
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
        jeune homme <strong>de {new Date().getFullYear() - 1975} ans.</strong>
    </>,
]
