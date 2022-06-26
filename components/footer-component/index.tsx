import { FC } from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs'

const FooterComponent: FC = () => (
    <footer className="fixed bottom-6 right-6 grid gap-4">
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <BsInstagram size={'28px'} />
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <BsLinkedin size={'28px'} />
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <BsGithub size={'28px'} />
        </div>
        <div className="grid h-10 w-10 items-center justify-center bg-tonic text-slate-900">
            <BsEnvelope size={'28px'} />
        </div>
    </footer>
)

export default FooterComponent
