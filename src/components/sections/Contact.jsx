import { profile } from '../../data/profile'
import { asset } from '../../lib/asset'
import { useCopy } from '../../hooks/useCopy'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Contact() {
  const { copy, state } = useCopy(profile.email)
  return (
    <Reveal from="scale">
    <section id="contato" className="mb-14 rounded-[22px] bg-code-bg p-[clamp(30px,6vw,64px)] text-[#EDF0FF]">
      <h2 className="max-w-[16ch] text-[clamp(34px,5.6vw,60px)] font-extrabold text-white">Vamos conversar sobre estágio?</h2>
      <p className="mt-4 max-w-[54ch] text-[#B7C0E8]">
        Procuro uma vaga de estágio em desenvolvimento back-end ou IA aplicada. Respondo rápido por e-mail ou LinkedIn.
      </p>
      <div className="mt-[22px] select-all break-all font-mono text-[15px] font-medium text-white">{profile.email}</div>
      <div className="mt-[30px] flex flex-wrap gap-3">
        <Button variant="onDarkPrimary" onClick={copy}>
          {state === 'copied' ? 'Copiado' : state === 'failed' ? 'Selecione o e-mail acima' : 'Copiar e-mail'}
        </Button>
        <Button href={profile.linkedin} variant="onDark">LinkedIn ↗</Button>
        <Button href={profile.github} variant="onDark">GitHub ↗</Button>
        <Button href={asset(profile.cv)} variant="onDark">Currículo (PDF)</Button>
      </div>
    </section>
    </Reveal>
  )
}
