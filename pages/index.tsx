import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
    BsBookFill,
    BsPersonLinesFill,
    BsPencilSquare,
    BsPeopleFill,
    BsLink45Deg,
    BsLinkedin,
} from 'react-icons/bs'
import HomeSentencesComponent from '../components/home-component/home-sentences-component'
import ButtonComponent from '../components/shared/button-component'

import { Target } from '../components/shared/button-component'

import photo120 from '../public/img/photo-120-1500w.jpg'
import photoOlivier from '../public/img/photo-olivier-1080w.jpg'
import photoCasian from '../public/img/photo-casian-1080w.jpg'
import photoDantin from '../public/img/photo-dantin-1080w.jpg'

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
                        icon={<BsPeopleFill />}
                        destination="/#team"
                        label="Voir mon équipe"
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
            <div className="pr-layout mt-10 grid-cols-12 gap-5 sm:container sm:mx-auto md:grid">
                <div className="col-span-3 grid content-start sm:mb-5 xl:col-span-3 xl:col-start-2">
                    <h1 id="team">Le studio</h1>
                    <p>
                        Parce que les projets digitaux gagnent de l’ampleur
                        rapidement et prennent vite du temps, j’ai su m’entourer
                        d’entrepreuneurs et de professionnels compétents pour
                        m’aider à mener à bien les travaux qu’on me confie.
                    </p>
                </div>
                <div className="col-span-9 grid text-slate-300 sm:-mt-6 lg:col-start-5 xl:col-span-6 xl:col-start-6">
                    <section className="mt-6 grid gap-x-5 md:grid-cols-2">
                        <div>
                            <h2>
                                Olivier Vom Dorp, chef de projet&nbsp;digital
                            </h2>
                            <p>
                                Directeur de création passé par plusieurs
                                agences renommées, Olivier donnera la direction
                                artistique dont a besoin votre projet.
                            </p>
                            <ButtonComponent
                                icon={<BsLinkedin />}
                                destination="https://www.linkedin.com/in/olivier-vom-dorp-expert-powerpoint/"
                                label="Olivier sur Linkedin"
                                target={Target.Blank}
                            />
                        </div>
                        <div className="-order-1 -mb-6 [clip-path:polygon(16%_0,_100%_42%,_69%_100%,_0_76%)] md:order-none">
                            <Image
                                src={photoOlivier}
                                alt="Olivier Vom Dorp, chef de projet digital"
                                layout="responsive"
                            />
                        </div>
                    </section>
                    <section className="mt-6 grid gap-x-5 md:grid-cols-2">
                        <div>
                            <h2>Dantin Durand, développeur sénior</h2>
                            <p>
                                Aprés avoir poursuivi des études de
                                Communication visuelle, de Webdesign puis de
                                Développeur <em>fullstack</em> web et mobile,
                                Dantin travaille depuis plusieurs années dans le
                                développement Node.js et PHP en <em>back</em> et
                                Vue.js et React en <em>front.</em>
                            </p>
                            <p>
                                Son expertise dans ces domaines permettra à
                                votre projet de gagner en qualité et en
                                efficacité.
                            </p>
                            <ButtonComponent
                                icon={<BsLinkedin />}
                                destination="https://www.linkedin.com/in/dantindurand/"
                                label="Dantin sur Linkedin"
                                target={Target.Blank}
                            />
                        </div>
                        <div className="-order-1 -mb-6  md:order-none">
                            <div className="-order-1 -mb-6 [clip-path:polygon(16%_0,_100%_42%,_69%_100%,_0_76%)] md:order-none">
                                <Image
                                    src={photoDantin}
                                    alt="Dantin Durand, développeur sénior"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="mt-6 grid gap-x-5 md:grid-cols-2">
                        <div>
                            <h2>Casian Ciorba, développeur junior</h2>
                            <p>
                                Après une formation d’Infographie et de
                                Webdesign, Casian a brillament obtenu un diplôme
                                d’UX Designer.
                            </p>
                            <p>
                                Il poursuit maintenant des études de Développeur{' '}
                                <em>fullstack</em> web et mobile où il apprend
                                le développement <em>back</em> et{' '}
                                <em>front.</em> Il a le souci du détail et vous
                                pouvez être certain qu’avec lui dans mon équipe
                                rien ne sera laissé au hasard dans votre
                                projet&thinsp;!
                            </p>
                            <ButtonComponent
                                icon={<BsLink45Deg />}
                                destination="https://casian.fr/"
                                label="Le site de Casian"
                                target={Target.Blank}
                            />
                            <ButtonComponent
                                icon={<BsLinkedin />}
                                destination="https://www.linkedin.com/in/casianc/"
                                label="Casian sur Linkedin"
                                target={Target.Blank}
                            />
                        </div>
                        <div className="-order-1 -mb-6  md:order-none">
                            <div className="[clip-path:polygon(16%_0,_100%_42%,_69%_100%,_0_76%)]">
                                <Image
                                    src={photoCasian}
                                    alt="Casian Ciorba, développeur junior"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </section>
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
        artisan du <strong>web.</strong>
    </>,
    <>
        jeune homme <strong>de {new Date().getFullYear() - 1975} ans.</strong>
    </>,
]
