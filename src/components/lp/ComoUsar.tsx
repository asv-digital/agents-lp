import type { PassoUso } from "@/data/produtos/types";

interface Props {
  passos: PassoUso[];
}

export function ComoUsar({ passos }: Props) {
  return (
    <section id="como-usar" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
            Como usar
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--fg)] md:text-3xl">
            Em 3 passos, tá rodando
          </h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {passos.map((p) => (
            <li
              key={p.numero}
              className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="font-mono text-3xl font-bold text-[var(--primary)]">
                0{p.numero}
              </div>
              <div className="mt-3 text-base font-semibold text-[var(--fg)]">
                {p.titulo}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">
                {p.descricao}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
