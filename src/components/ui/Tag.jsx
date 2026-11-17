export default function Tag({ children }) {
  return (
    <span className="rounded-[7px] bg-accent-soft px-2.5 py-[5px] font-mono text-[12.5px] font-medium text-tag">
      {children}
    </span>
  )
}

export function TagList({ items, className = 'mt-3.5' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  )
}
