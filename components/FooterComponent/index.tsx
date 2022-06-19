import { FC } from 'react'
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs'

const FooterComponent: FC = () => (
  <footer className="grid gap-4 fixed bottom-6 right-6">
    <div className="bg-tonic grid items-center justify-center w-10 h-10 text-slate-900">
      <BsInstagram size={'28px'} />
    </div>
    <div className="bg-tonic grid items-center justify-center w-10 h-10 text-slate-900">
      <BsLinkedin size={'28px'} />
    </div>
    <div className="bg-tonic grid items-center justify-center w-10 h-10 text-slate-900">
      <BsGithub size={'28px'} />
    </div>
    <div className="bg-tonic grid items-center justify-center w-10 h-10 text-slate-900">
      <BsEnvelope size={'28px'} />
    </div>
  </footer>
)

export default FooterComponent
