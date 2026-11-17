import { education, languages } from '../../data/education'
import Section, { SectionTitle } from '../ui/Section'

function Rows({ items }) {
  return (
    <div className="mt-7">
      {items.map((r) => (
        <div key={r.title} className="border-t border-line py-4">
          <h3 className="text-[22px] font-bold">{r.title}</h3>
          <p className="text-base text-muted">{r.text}</p>
        </div>
      ))}
    </div>
  )
}

export default function Education() {
  return (
    <Section id="formacao" pad="noTop">
      <div className="grid gap-[clamp(24px,5vw,64px)] min-[761px]:grid-cols-[1.1fr_.9fr]">
        <div>
          <SectionTitle>Formação</SectionTitle>
          <Rows items={education} />
        </div>
        <div>
          <SectionTitle className="text-[clamp(24px,3.4vw,34px)]">Idiomas</SectionTitle>
          <Rows items={languages} />
        </div>
      </div>
    </Section>
  )
}
