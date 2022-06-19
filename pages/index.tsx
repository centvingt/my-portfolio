import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FooterComponent from '../components/FooterComponent'
import HomeSentencesComponent from '../components/HomeComponent/HomeSentencesComponent'

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
        graphiste <strong>UX/UI.</strong>
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
            <div className="font-thin text-lg pr-[50px]">
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
            </div>
            <FooterComponent />
        </>
    )
}

export default Home
