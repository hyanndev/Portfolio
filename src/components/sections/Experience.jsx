import { experience } from '../../data/experience'
import Section, { SectionLead, SectionTitle } from '../ui/Section'
import Reveal from '../ui/Reveal'
import { TagList } from '../ui/Tag'

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionTitle>Experiência em projetos de equipe</SectionTitle>
      <SectionLead>
        Ainda sem estágio — por isso o que mostro aqui é o que já entreguei: projetos reais de semestre, em grupo, com banca, prazo e código versionado.
      </SectionLead>
      <div className="mt-11 grid border-b border-line">
        {experience.map((e) => (
          <Reveal key={e.id}>
          <article className="grid gap-2 border-t border-line py-7 min-[701px]:grid-cols-[150px_1fr] min-[701px]:gap-7">
            <div className="font-mono text-sm font-medium leading-normal text-accent">
              {e.when}
              <small className="mt-0.5 block text-[13px] text-muted">{e.note}</small>
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl font-bold tracking-[-0.02em]">{e.title}</h3>
              <div className="mt-1 text-[15px] text-muted">{e.org}</div>
              <ul className="mb-0 mt-3 max-w-[70ch] list-disc pl-5">
                {e.bullets.map((b) => (
                  <li key={b} className="my-1.5">{b}</li>
                ))}
              </ul>
              <TagList items={e.tags} />
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
