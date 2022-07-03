import { ChangeEvent, FC, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import { IconContext } from 'react-icons'
import { FiSend } from 'react-icons/fi'

import logoNeon from '../../public/img/logo-neon.jpg'

const ContactPage: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [consent, setConsent] = useState(false)

    const formContactRef = useRef<HTMLFormElement>(null)
    const submitButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        formContactRef.current?.addEventListener('change', e => {
            const consentInput = formContactRef.current?.consent
            const submitButton = submitButtonRef.current

            if (consentInput.checked) consentInput?.setCustomValidity('')
            else
                consentInput?.setCustomValidity(
                    'Merci de donner votre consentement avant d’envoyer votre message.'
                )

            const formIsValid = formContactRef.current?.checkValidity()

            console.log('formIsValid', formIsValid)

            if (formIsValid) submitButton?.removeAttribute('disabled')
            else submitButton?.setAttribute('disabled', 'true')
        })
    }, [])

    const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleMessageTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }
    const handleConsentCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setConsent(e.target.checked)
    }

    return (
        <>
            <Head>
                <title>
                    Contactez Vincent Caronnet pour lui parler de votre projet !
                </title>
                <meta
                    name="description"
                    content="Vous avez un projet mobile et/ou web ? Parlez-en à Vincent Caronnet, développeur à Paris spécialisé dans la réalisation d’applications iOS et de site React."
                />
            </Head>
            <div className="pr-layout mt-10 grid-cols-12 gap-5 sm:container sm:mx-auto md:grid">
                <header className="col-span-5 mb-5 grid content-start xl:col-span-4 xl:col-start-2">
                    <h1>Me contacter</h1>
                    <p>
                        Écrivez-moi pour me parler de votre projet mobile
                        et&thinsp;/&thinsp;ou web et je saurai vous conseiller
                        au mieux pour le développer.
                    </p>
                    <p>À très bientôt&thinsp;!</p>
                    <div className="mt-3 hidden md:block">
                        <Image
                            src={logoNeon}
                            alt="Confiez le développement de vos applications et de vos site internet à 120.design."
                            layout="responsive"
                        />
                    </div>
                </header>
                <main className="col-span-7 grid text-slate-300 lg:col-start-7 xl:col-span-5 xl:col-start-7">
                    <form
                        className="0 mb-5 bg-accent/20 p-4 text-accent"
                        ref={formContactRef}
                        data-netlify="true"
                        name="contact"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <fieldset className="invalid:text-tonic">
                            <label
                                className="block font-semibold italic"
                                htmlFor="subject"
                            >
                                Mon nom*
                            </label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={handleNameInput}
                                required
                                placeholder="Ex. : Jean-Luc Martin"
                            />
                        </fieldset>

                        <fieldset className="invalid:text-tonic">
                            <label
                                className="block font-semibold italic"
                                htmlFor="email"
                            >
                                Mon e-mail*
                            </label>
                            <input
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleEmailInput}
                                required
                                placeholder="Ex. : martin@gmail.com"
                            />
                        </fieldset>

                        <fieldset className="invalid:text-tonic">
                            <label
                                className="block font-semibold italic"
                                htmlFor="message"
                            >
                                Ma demande*
                            </label>
                            <textarea
                                className="input min-h-[100px]"
                                name="message"
                                id="message"
                                value={message}
                                onChange={handleMessageTextarea}
                                required
                                placeholder="Ex. : Bonjour, j’aime bien ce que vous faites..."
                            />
                        </fieldset>

                        <fieldset className="leading-3 invalid:text-tonic">
                            <input
                                type="checkbox"
                                name="consent"
                                id="consent"
                                className="mr-2"
                                checked={consent}
                                onChange={handleConsentCheckbox}
                            />
                            <label htmlFor="consent" className="text-xs">
                                En soumettant ce formulaire, j’accepte que mes
                                informations soient utilisées uniquement dans le
                                cadre de ma demande et de la relation
                                commerciale qui peut en découler.*
                            </label>
                        </fieldset>

                        <button
                            disabled
                            type="submit"
                            className="mt-4 grid w-full grid-cols-[18px_max-content] items-center justify-center gap-2 bg-accent py-2 px-4 text-lg font-medium text-slate-900 disabled:bg-slate-400 disabled:text-slate-600"
                            ref={submitButtonRef}
                        >
                            <IconContext.Provider value={{ size: '18px' }}>
                                <FiSend />
                            </IconContext.Provider>
                            Envoyer
                        </button>
                        <p className="text-tonic">* Champ obligatoire.</p>
                    </form>
                    <p>
                        Votre adresse e-mail ne me servira qu’à vous répondre,
                        je ne ferai aucun commerce des données que vous me
                        transmettrer par ce formulaire de contact.
                    </p>
                    <h2>Mentions légales</h2>
                    <p>
                        Portfolio de Vincent Caronnet, développeur mobile et web
                        habitant au 11 rue Averroès, 93500 Pantin, France.
                    </p>
                    <p>
                        Site hébergé par Netlify, 2325 3rd Street, Suite 296,
                        San Francisco, California 94107, USA.
                    </p>
                    <p>© Vincent Caronnet 2022.</p>
                </main>
            </div>
        </>
    )
}

export default ContactPage
