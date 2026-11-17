import { useState } from 'react'
import { apiTabs, facts, profile } from '../../data/profile'
import { asset } from '../../lib/asset'
import Button from '../ui/Button'
import Float from '../ui/Float'
import JsonView from '../ui/JsonView'
import Reveal from '../ui/Reveal'

function ApiCard() {
  const [active, setActive] = useState(apiTabs[0].id)
  const tab = apiTabs.find((t) => t.id === active)
  return (
    <div className="overflow-hidden rounded-2xl bg-code-bg text-code-fg ring-1 ring-white/10 shadow-[0_24px_60px_-24px_rgba(13,20,49,.45)]" aria-label="Resumo em formato de resposta de API">
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/10 p-3" role="tablist">
        {apiTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={t.id === active}
            aria-controls="api-panel"
            onClick={() => setActive(t.id)}
            className={`cursor-pointer whitespace-nowrap rounded-[7px] border-0 px-2.5 py-1.5 font-mono text-[13px] font-medium ${
              t.id === active ? 'bg-[rgba(143,160,255,.18)] text-white' : 'bg-transparent text-[#9AA5D6]'
            }`}
          >
            {t.label}
          </button>
        ))}
        <span className="ml-auto whitespace-nowrap pl-2 font-mono text-xs font-medium text-code-str">200 OK</span>
      </div>
      <div className="grid items-start gap-[18px] p-[18px] max-[420px]:grid-cols-1 min-[421px]:grid-cols-[auto_1fr]">
        <img
          src={asset(profile.photo.small)}
          srcSet={`${asset(profile.photo.small)} 240w, ${asset(profile.photo.large)} 720w`}
          sizes="104px"
          alt={`Retrato de ${profile.name}`}
          width="104"
          height="104"
          fetchPriority="high"
          decoding="async"
          className="size-[104px] rounded-xl object-cover object-[50%_20%] max-[420px]:size-[84px]"
        />
        <pre id="api-panel" role="tabpanel" className="m-0 min-h-[15.5em] whitespace-pre-wrap break-words font-mono text-[13.5px] leading-[1.7]">
          <JsonView value={tab.data} />
        </pre>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pb-[clamp(40px,6vw,72px)] pt-[clamp(40px,7vw,88px)]">
      <div className="grid items-center gap-[clamp(28px,5vw,64px)] min-[901px]:grid-cols-[1.15fr_.95fr]">
        <div className="min-w-0">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-ok-soft py-1.5 pl-2.5 pr-3 text-sm font-semibold text-ok">
              <i className="size-2 animate-pulse-ring rounded-full bg-ok shadow-[0_0_0_0_var(--ok)]" />
              Disponível para estágio em desenvolvimento de software
            </span>
          </Reveal>
          <Reveal delay={90}>
          <h1 className="mt-[22px] text-[clamp(40px,7.2vw,84px)] font-extrabold tracking-[-0.04em]">
            Backend Java que{' '}
            <em className="bg-[linear-gradient(transparent_62%,var(--accent-soft)_62%)] not-italic">sai do papel</em> e vai pro ar.
          </h1>
          </Reveal>
          <Reveal delay={190}>
          <p className="mt-[22px] max-w-[50ch] text-[clamp(17px,2vw,20px)] text-muted">
            Sou <strong className="font-semibold text-ink">{profile.name}</strong>, 21 anos, no 4º semestre de Engenharia de Software na{' '}
            <strong className="font-semibold text-ink">FIAP</strong>. Construo APIs em{' '}
            <strong className="font-semibold text-ink">Java, Spring Boot e Oracle</strong> em projetos de equipe — com segurança, testes e documentação como
            parte da entrega. Uso ferramentas de IA no dia a dia para aprender e programar com mais produtividade.
          </p>
          </Reveal>
          <Reveal delay={290}>
          <div className="mt-[30px] flex flex-wrap gap-3">
            <Button href="#cases" variant="primary">Ver projetos</Button>
            <Button href="#contato">Falar comigo</Button>
          </div>
          </Reveal>
          <Reveal delay={390}>
          <div className="mt-[34px] flex flex-wrap gap-x-[26px] gap-y-2.5 border-t border-line pt-[22px] text-sm text-muted">
            {facts.map((f) => (
              <div key={f.title}>
                <b className="block text-[17px] font-bold leading-tight text-ink">{f.title}</b>
                {f.text}
              </div>
            ))}
          </div>
          </Reveal>
        </div>
        <div className="min-w-0">
          <Reveal from="right" delay={250}>
            {/* O cartão flutua devagar de um lado para o outro. */}
            <Float>
              <ApiCard />
            </Float>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
