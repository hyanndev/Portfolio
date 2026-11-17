import { skills } from '../../data/skills'
import Section, { SectionLead, SectionTitle } from '../ui/Section'
import Reveal from '../ui/Reveal'
import { TagList } from '../ui/Tag'

export default function Stack() {
  return (
    <Section id="stack">
      <SectionTitle>Stack, com onde usei</SectionTitle>
      <SectionLead>Cada ferramenta vem com o projeto em que ela apareceu.</SectionLead>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 90} className="h-full">
          <div className="h-full rounded-[14px] border border-line bg-surface p-[22px] transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-2.5 text-[14.5px] text-muted">{s.proof}</p>
            <TagList items={s.tags} className="mt-3" />
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
