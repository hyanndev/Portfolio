import { cases } from '../../data/cases'
import Button from '../ui/Button'
import Section, { SectionLead, SectionTitle } from '../ui/Section'
import { TagList } from '../ui/Tag'
import Reveal from '../ui/Reveal'
import Gallery from '../cases/Gallery'
import EstudaiMock from '../cases/EstudaiMock'
import DesconfiaMock from '../cases/DesconfiaMock'
import MeetingMock from '../cases/MeetingMock'

const visuals = { pratodos: Gallery, vaox: MeetingMock, estudai: EstudaiMock, desconfia: DesconfiaMock }

function Case({ c }) {
  const Visual = visuals[c.id]
  return (
    <article className="grid items-center gap-[clamp(24px,4vw,56px)] border-t border-line py-[clamp(36px,5vw,64px)] min-[861px]:grid-cols-[1fr_1.05fr]">
      <Reveal from={c.flip ? 'right' : 'left'} className="min-w-0">
        <div className="font-mono text-[13px] font-medium text-muted">{c.meta}</div>
        <h3 className="mt-2.5 text-[clamp(30px,4vw,44px)] font-extrabold">{c.title}</h3>
        <p className="mt-3.5 max-w-[52ch] text-muted">
          <strong className="font-semibold text-ink">Problema:</strong> {c.problem}{' '}
          <strong className="font-semibold text-ink">Solução:</strong> {c.solution}
        </p>
        <ul className="mb-0 mt-4 max-w-[52ch] list-disc pl-5">
          {c.bullets.map((b) => (
            <li key={b} className="my-1.5">{b}</li>
          ))}
        </ul>
        <TagList items={c.tags} />
        <div className="mt-5 flex flex-wrap gap-2.5">
          <Button href={c.link.href} variant="primary" size="sm">{c.link.label}</Button>
          {c.link2 && <Button href={c.link2.href} size="sm">{c.link2.label}</Button>}
        </div>
        {c.note && <p className="mt-3.5 max-w-[52ch] text-sm text-muted">{c.note}</p>}
      </Reveal>
      <Reveal from={c.flip ? 'left' : 'right'} delay={120} className={`min-w-0 ${c.flip ? 'min-[861px]:order-first' : ''}`}>
        <Visual />
      </Reveal>
    </article>
  )
}

export default function Cases() {
  return (
    <Section id="cases" pad="noBottom">
      <SectionTitle>Quatro projetos, de perto</SectionTitle>
      <div className="mb-10">
        <SectionLead>O problema, o que eu usei e como ficou.</SectionLead>
      </div>
      {cases.map((c) => (
        <Case key={c.id} c={c} />
      ))}
    </Section>
  )
}
