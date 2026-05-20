import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/lp/Footer";
import { PRODUTOS } from "@/data/produtos";

export const metadata = {
  title: "Agents Bravy — Agentes Claude Code prontos pra rodar",
  description:
    "Agentes profissionais pra Claude Code, distribuídos de graça pela Bravy / ASV Digital. Atendimento, vendas, tráfego, contabilidade e mais.",
};

export default function Index() {
  return (
    <>
      <main className="flex-1">
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-dim)]">
              Bravy / ASV Digital
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--fg)] md:text-6xl">
              Agents prontos pra rodar
              <br />
              <span className="text-[var(--primary)]">no seu computador.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-dim)] md:text-lg">
              Cada agent é um pacote standalone pra Claude Code. Você baixa, configura
              em 5 minutos, e ele faz o trabalho.
            </p>
          </div>
        </section>

        <section className="border-b border-[var(--border)] bg-[var(--bg-2)]">
          <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {PRODUTOS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className="group flex flex-col justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--primary)]/40 hover:bg-[var(--surface-2)]"
                >
                  <div>
                    <div className="text-3xl">{p.emoji}</div>
                    <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-mute)]">
                      {p.categoria}
                    </div>
                    <h2 className="mt-1 text-lg font-semibold text-[var(--fg)]">
                      {p.nome}
                    </h2>
                    <p className="mt-2 text-sm text-[var(--fg-dim)]">{p.promessa}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]">
                    Ver detalhes
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
