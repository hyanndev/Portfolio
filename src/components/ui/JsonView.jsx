// Mostra um valor JavaScript como JSON colorido (chaves, textos e números).
const K = 'text-code-key'
const S = 'text-code-str'
const N = 'text-code-num'

function Primitive({ v }) {
  return typeof v === 'number' ? <span className={N}>{v}</span> : <span className={S}>{JSON.stringify(v)}</span>
}

function Inline({ v }) {
  if (Array.isArray(v)) {
    return (
      <>
        [
        {v.map((x, i) => (
          <span key={i}>
            {i > 0 && ', '}
            <Inline v={x} />
          </span>
        ))}
        ]
      </>
    )
  }
  if (v && typeof v === 'object') {
    const entries = Object.entries(v)
    return (
      <>
        {'{'}
        {entries.map(([k, x], i) => (
          <span key={k}>
            {i > 0 && ', '}
            <span className={K}>"{k}"</span>: <Inline v={x} />
          </span>
        ))}
        {'}'}
      </>
    )
  }
  return <Primitive v={v} />
}

export default function JsonView({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        {'[\n'}
        {value.map((x, i) => (
          <span key={i}>
            {'  '}
            <Inline v={x} />
            {i < value.length - 1 ? ',\n' : '\n'}
          </span>
        ))}
        {']'}
      </>
    )
  }
  const entries = Object.entries(value)
  return (
    <>
      {'{\n'}
      {entries.map(([k, x], i) => (
        <span key={k}>
          {'  '}
          <span className={K}>"{k}"</span>: <Inline v={x} />
          {i < entries.length - 1 ? ',\n' : '\n'}
        </span>
      ))}
      {'}'}
    </>
  )
}
