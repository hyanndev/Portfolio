import BrowserFrame from '../ui/BrowserFrame'

export default function DesconfiaMock() {
  return (
    <BrowserFrame url="desconfia-three.vercel.app · exemplo ilustrativo">
      <div className="p-[18px]">
        <div className="rounded-[10px] bg-bg px-3 py-2.5 text-[15px]">
          “URGENTE: sua conta foi bloqueada. Acesse o link e desbloqueie em 1 hora.”
        </div>
        <div className="mt-3.5 flex items-center gap-3 font-mono text-xs font-medium text-muted">
          <span>risco de golpe</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[78%] bg-accent" />
          </div>
          <b className="font-semibold text-tag">alto</b>
        </div>
        <p className="mt-3 text-[15px] text-muted">
          Golpes costumam criar urgência e pedir que você clique em um link. Não clique: confirme pelo aplicativo oficial.
        </p>
      </div>
    </BrowserFrame>
  )
}
