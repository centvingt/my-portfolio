import { FC } from 'react'
import Image from 'next/image'

import vincent1998 from '../../public/img/vincent-1998.jpg'
import vincent2019 from '../../public/img/vincent-2019.jpg'

const ResumePage: FC = () => {
    return (
        <div className="pr-layout mt-10 grid-cols-12 gap-5 sm:container sm:mx-auto md:grid">
            <header>
                <h1>Mon parcours</h1>
                <p className="mb-5">
                    Je développe des sites web et des application mobiles pour
                    iOS depuis une dizaine d’années après une longue carrière de
                    graphiste print.
                </p>
                <Image
                    src={vincent1998}
                    alt="Vincent Caronnet en 1998"
                    layout="responsive"
                />
            </header>
            <main>
                <h2>Mes compétences</h2>
                <p>Mes langages de prédilection sont :</p>
                <ul className="mb-5">
                    <li>
                        <strong>le Swift</strong> quand je développe des
                        applications mobiles,
                    </li>
                    <li>
                        <strong>le JavaScript, </strong>la bibliothèque{' '}
                        <strong>React</strong> et le framework{' '}
                        <strong>Next.js</strong> quand je développe pour le web
                        en front,
                    </li>
                    <li>
                        <strong>le Node.js</strong> pour mettre en place le
                        backend de mes applications mobiles et web.
                    </li>
                </ul>
                <Image
                    src={vincent2019}
                    alt="Vincent Caronnet en 2019"
                    layout="responsive"
                />
                <h2>Mes services</h2>
                <p>
                    Mon activité principale est d’enseigner ces langages de
                    programmation à des étudiants après le bac et je suis aussi
                    disponible pour vous accompagner.
                </p>
                <p>
                    Faites-moi part de votre projet, je saurais vous conseiller
                    au mieux et vous aiderai à le développer.
                </p>
            </main>
        </div>
    )
}

export default ResumePage
