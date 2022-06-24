import type { NextPage } from 'next'
import Image from 'next/image'
import { BsBookFill, BsPersonLinesFill, BsPencilSquare } from 'react-icons/bs'
import HomeSentencesComponent from '../components/HomeComponent/HomeSentencesComponent'
import ButtonComponent from '../components/shared/ButtonComponent'

import photo120 from '../public/img/photo-120-1500w.jpg'

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

const Home: NextPage = () => {
    const buttonSupplementaryClasses = 'md:w-64'

    return (
        <div className="grid-cols-12 pr-[60px] text-lg font-thin sm:grid">
            <div className="row-[1_/_2] -mt-16 w-[120vw] max-w-4xl [clip-path:polygon(16%_0,_100%_42%,_69%_100%,_0_76%)] sm:col-[1_/_8] sm:-mt-8 sm:w-full md:col-[1_/_7] lg:col-[1_/_9] xl:-mt-32">
                <Image
                    src={photo120}
                    alt="Vincent Caronnet, développeur mobile et web"
                    layout="responsive"
                />
            </div>
            <div className="col-span-full col-start-8 row-start-1 flex h-full max-h-screen flex-col justify-end sm:col-start-7 lg:col-start-8 2xl:col-start-7">
                <h1 className="pt-8 sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    Bonjour, je suis <strong>Vincent Caronnet,</strong>
                </h1>
                <HomeSentencesComponent
                    sentences={sentences}
                    className="sm:mb-4 sm:mt-1 sm:text-xl md:mb-6 md:text-2xl lg:mb-20 lg:mt-3 lg:text-3xl xl:text-4xl 2xl:text-5xl"
                />
            </div>
            <div className="lg: col-span-full col-start-1 row-start-2 mb-10 grid-cols-3 gap-3 self-start md:col-span-full md:row-span-full md:row-start-1 md:mt-8 md:justify-self-end lg:row-span-1 lg:row-start-2 lg:grid lg:justify-self-start">
                <ButtonComponent
                    icon={<BsBookFill />}
                    destination="/portfolio/"
                    label="Feuilleter mes travaux"
                    supplementaryClasses={buttonSupplementaryClasses}
                />
                <ButtonComponent
                    icon={<BsPersonLinesFill />}
                    destination="/resume/"
                    label="Voir mon parcours"
                    supplementaryClasses={buttonSupplementaryClasses}
                />
                <ButtonComponent
                    icon={<BsPencilSquare />}
                    destination="/contact/"
                    label="Me contacter"
                    supplementaryClasses={buttonSupplementaryClasses}
                />
            </div>
        </div>
    )
}

export default Home
