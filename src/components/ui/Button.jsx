const base =
  'inline-flex items-center gap-2 rounded-[10px] border-[1.5px] font-semibold leading-tight no-underline cursor-pointer transition-transform hover:-translate-y-px'
const sizes = { md: 'px-5 py-3 text-base', sm: 'px-3.5 py-2 text-sm' }
const variants = {
  primary: 'border-accent bg-accent text-accent-ink',
  outline: 'border-ink bg-transparent text-ink',
  onDark: 'border-[#EDF0FF] bg-transparent text-[#EDF0FF]',
  onDarkPrimary: 'border-white bg-white text-[#0D1431]',
}

/** Botão ou link: com `href` vira <a> (abre em nova aba quando é externo). */
export default function Button({ href, variant = 'outline', size = 'md', children, ...rest }) {
  const className = `${base} ${sizes[size]} ${variants[variant]}`
  if (href) {
    const external = /^https?:/.test(href) || href.endsWith('.pdf')
    return (
      <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  )
}
