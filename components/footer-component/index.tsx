import { FC } from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs'
import Link from 'next/link'

const FooterComponent: FC = () => (
    <footer className="fixed bottom-6 right-6 grid gap-4">
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <Link
                href="https://github.com/centvingt/"
                target="_blank"
                rel="nofollow"
            >
                <BsGithub size={'28px'} title="Consulter mon compte GitHub" />
            </Link>
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <Link
                href="https://www.linkedin.com/in/120design/"
                target="_blank"
                rel="nofollow"
            >
                <BsLinkedin
                    size={'28px'}
                    title="Consulter mon compte Linkedin"
                />
            </Link>
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <Link
                href="https://www.instagram.com/apps.120design/"
                target="_blank"
                rel="nofollow"
            >
                <BsInstagram
                    size={'28px'}
                    title="Consulter mon compte Instagram"
                />
            </Link>
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <Link href="/contact/">
                <BsEnvelope size={'28px'} title="Me contacter" />
            </Link>
        </div>
    </footer>
)

export default FooterComponent
