"use client";

import { ArrowDown } from "lucide-react";
import type { Produto } from "@/data/produtos/types";
import { TerminalMockup } from "./TerminalMockup";

interface Props {
  produto: Produto;
}

export function Hero({ produto }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      {/* gradiente sutil de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse at top, ${produto.cor_primaria}15 0%, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-dim)]">
            <span className="text-base">{produto.emoji}</span>
            {produto.hero.badge}
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--fg)] md:text-5xl">
            {produto.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-dim)] md:text-lg">
            {produto.hero.subheadline}
          </p>

          {/* Mini-stats */}
          <div className="mt-7 grid grid-cols-3 gap-3 sm:max-w-sm">
            <Stat valor="21" label="capacidades" />
            <Stat valor="24h" label="rodando" />
            <Stat valor="0" label="mensalidade" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#baixar"
              className="glow-cta inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: produto.cor_primaria }}
            >
              Baixar agora — grátis
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#como-usar"
              className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--fg-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--fg)]"
            >
              Ver como funciona
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-[var(--fg-mute)]">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
            {produto.requisito_principal}
          </p>
        </div>

        <div className="lg:translate-y-2">
          <TerminalMockup linhas={produto.terminal_loop} />
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-mute)]">
            Demonstração ao vivo do agente em execução
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ valor, label }: { valor: string; label: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-2">
      <div className="font-mono text-xl font-semibold text-[var(--fg)]">{valor}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-[var(--fg-mute)]">
        {label}
      </div>
    </div>
  );
}
