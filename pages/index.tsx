import type { NextPage } from 'next'
import Image from 'next/image'
import { BsBookFill, BsPersonLinesFill, BsPencilSquare } from 'react-icons/bs'
import HomeSentencesComponent from '../components/HomeComponent/HomeSentencesComponent'
import ButtonComponent from '../components/shared/ButtonComponent'

import photo120 from '../public/img/photo-120-600w.jpg'

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
    return (
        <>
            <div className="font-thin text-lg pr-[60px]">
                <header className="mb-10">
                    <div className="home-mask">
                        <Image
                            src={photo120}
                            alt="Vincent Caronnet, développeur mobile et web"
                            layout="responsive"
                        />
                    </div>
                    <h1 className="pt-8">
                        Bonjour, je suis <strong>Vincent Caronnet,</strong>
                    </h1>
                    <HomeSentencesComponent sentences={sentences} />
                </header>
                <ButtonComponent
                    icon={<BsBookFill />}
                    destination="/portfolio/"
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
            {/* <FooterComponent /> */}
        </>
    )
}

export default Home
