import { FC } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import ButtonComponent from '../../components/shared/button-component'
import { BsPencilSquare } from 'react-icons/bs'

import vincent1998 from '../../public/img/vincent-1998.jpg'
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
                        carrière de graphiste print.
                    </p>
                    <div className="my-5">
                        <Image
                            src={vincent1998}
                            alt="Vincent Caronnet en 1998"
                            layout="responsive"
                        />
                    </div>
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
                        <h2>Mes services</h2>
                        <p>
                            Mon activité principale est d’enseigner ces langages
                            de programmation à des étudiants après le bac et je
                            suis aussi disponible pour vous accompagner.
                        </p>
                        <p>
                            Faites-moi part de votre projet, je saurai vous
                            conseiller au mieux et vous aiderai à le développer.
                        </p>
                        <ButtonComponent
                            icon={<BsPencilSquare />}
                            destination="/contact/"
                            label="Me contacter"
                        />
                    </section>
                </main>
            </div>
        </>
    )
}

export default ResumePage
