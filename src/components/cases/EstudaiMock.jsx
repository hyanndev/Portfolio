import BrowserFrame from '../ui/BrowserFrame'

export default function EstudaiMock() {
  return (
    <BrowserFrame url="estudai-woad.vercel.app · exemplo">
      <div className="p-[18px]">
        <div className="rounded-[10px] bg-bg px-3 py-2.5 text-[15px]">
          <b className="mr-2 font-mono text-xs font-semibold text-muted">pergunta</b>
          O que é WIP no Kanban?
        </div>
        <div className="mt-2 rounded-[10px] border border-line px-3 py-2.5 text-[15px]">
          WIP é o trabalho em andamento. A regra principal do método é limitar o WIP para evitar que o time comece muitas tarefas sem terminá-las.
          <div className="mt-2.5">
            <span className="rounded-[7px] bg-accent-soft px-[9px] py-1 font-mono text-[12.5px] font-medium text-tag">metodos_ageis.pdf · trecho 5</span>
          </div>
        </div>
        <div className="mt-3 rounded-[10px] bg-bg px-3 py-2.5 text-[15px]">
          <b className="mr-2 font-mono text-xs font-semibold text-muted">pergunta</b>
          Qual a capital da Alemanha?
        </div>
        <div className="mt-2 rounded-[10px] border border-line px-3 py-2.5 text-[15px] text-muted">Não encontrei isso nos seus materiais.</div>
      </div>
    </BrowserFrame>
  )
}
