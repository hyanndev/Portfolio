/** Moldura de navegador para mostrar telas e ilustrações. */
export default function BrowserFrame({ url, children }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_18px_44px_-26px_rgba(13,20,49,.4)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-bg px-3 py-2.5">
        <i className="size-[9px] rounded-full bg-line" />
        <i className="size-[9px] rounded-full bg-line" />
        <i className="size-[9px] rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-xs font-medium text-muted">{url}</span>
      </div>
      {children}
    </div>
  )
}
