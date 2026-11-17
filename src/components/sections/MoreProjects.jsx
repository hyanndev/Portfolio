import { moreProjects } from '../../data/more'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import Section, { SectionTitle } from '../ui/Section'

export default function MoreProjects() {
  return (
    <Section id="mais" pad="noTop">
      <SectionTitle>Mais projetos</SectionTitle>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-4">
        {moreProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="h-full">
          <article className="flex h-full flex-col gap-2.5 rounded-[14px] border border-line bg-surface p-6">
            <div className="font-mono text-[12.5px] font-medium text-muted">{p.meta}</div>
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="text-base text-muted">{p.text}</p>
            <div className="mt-auto flex flex-wrap gap-2.5 pt-1.5">
              <Button href={p.href} size="sm">{p.cta}</Button>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
