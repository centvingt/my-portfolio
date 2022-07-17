import { FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import ButtonComponent from '../../components/shared/button-component'
import { BsPencilSquare, BsFillPersonLinesFill } from 'react-icons/bs'

import vincent2019 from '../../public/img/vincent-2019.jpg'

const ResumePage: FC = () => {
    return (
        <>
            <Head>
                <title>
                    Vincent Caronnet développe des applications mobiles et web
                </title>
                <meta
                    name="description"
                    content="Spécialisé dans le développement d’applications iOS, React et Node.js depuis une dizaine d’années, Vincent Caronnet met ses compétences au service de vos projets."
                />
            </Head>
            <div className="pr-layout mt-10 grid-cols-12 gap-5 sm:container sm:mx-auto md:grid">
                <header className="col-span-5 grid content-start sm:mb-5 xl:col-span-4 xl:col-start-2">
                    <h1>Mon parcours</h1>
                    <p>
                        Je développe des application mobiles et des sites web
                        pour iOS depuis une dizaine d’années après une longue
                        carrière de graphiste.
                    </p>
                    <p>
                        J’ai commencé à enseigner ces domaines au milieu des
                        années 2010 dans des écoles parisiennes.
                    </p>
                </header>
                <main className="col-span-7 grid text-slate-300 sm:-mt-6 lg:col-start-7 xl:col-span-5 xl:col-start-7">
                    <section className="-mt-6">
                        <h2>Mes compétences</h2>
                        <p>Mes langages de prédilection sont :</p>
                        <ul>
                            <li>
                                <strong>le Swift</strong> quand je développe des
                                applications mobiles,
                            </li>
                            <li>
                                <strong>le JavaScript, </strong>la bibliothèque{' '}
                                <strong>React</strong> et le framework{' '}
                                <strong>Next.js</strong> quand je développe pour
                                le web en front,
                            </li>
                            <li>
                                <strong>le Node.js</strong> pour mettre en place
                                le backend de mes applications mobiles et web.
                            </li>
                        </ul>
                    </section>
                    <div className="mt-5 md:-order-1 md:my-5 md:mt-8">
                        <Image
                            src={vincent2019}
                            alt="Vincent Caronnet en 2019"
                            layout="responsive"
                        />
                    </div>
                    <section className="-mt-2">
                        <h2>Vous accompagner dans votre projet</h2>
                        <p>
                            Mon activité principale est d’enseigner ces langages
                            de programmation à des étudiants après le bac et je
                            suis aussi disponible pour vous accompagner.
                        </p>
                        <p>
                            Faites-moi part de votre projet, je saurai vous
                            conseiller au mieux et vous aiderai à le développer.
                        </p>
                        <p>
                            Et si l’envergure de votre projet nécessite de
                            monter une équipe, vous pouvez être rassuré&thinsp;:
                            je suis en capacité de la monter rapidement avec des
                            confrères compétents avec lesquels j’ai l’habitude
                            de collaborer.
                        </p>
                        <div className="buttons-container">
                            <ButtonComponent
                                icon={<BsFillPersonLinesFill />}
                                destination="/#services"
                                label="Voir mes services"
                            />
                            <ButtonComponent
                                icon={<BsPencilSquare />}
                                destination="/contact/"
                                label="Me contacter"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default ResumePage
