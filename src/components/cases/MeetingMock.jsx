import BrowserFrame from '../ui/BrowserFrame'

const lines = [
  ['00:12', '“Estamos avaliando o concorrente X para o próximo trimestre.”'],
  ['00:41', '“Se o contrato não incluir o módulo novo, vamos repensar.”'],
  ['01:05', '“Queremos ampliar para mais duas filiais.”'],
]
const keywords = [
  ['concorrente', true],
  ['risco de churn', true],
  ['upsell', true],
  ['filiais', false],
]

export default function MeetingMock() {
  return (
    <BrowserFrame url="análise de reunião · exemplo ilustrativo">
      <div className="p-[18px]">
        {lines.map(([time, text]) => (
          <div key={time} className="mt-2 rounded-[10px] bg-bg px-3 py-2.5 text-[15px] first:mt-0">
            <b className="mr-2 font-mono text-xs font-semibold text-muted">{time}</b>
            {text}
          </div>
        ))}
        <div className="mt-3 flex flex-wrap gap-2">
          {keywords.map(([k, hot]) => (
            <span
              key={k}
              className={`rounded-[7px] border px-[9px] py-1 font-mono text-[12.5px] font-medium ${
                hot ? 'border-transparent bg-accent-soft text-tag' : 'border-line text-ink'
              }`}
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}
