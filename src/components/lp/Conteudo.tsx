"use client";

import * as Icons from "lucide-react";
import type { ItemConteudo } from "@/data/produtos/types";

interface Props {
  itens: ItemConteudo[];
}

function iconKey(name: string): string {
  return name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

export function Conteudo({ itens }: Props) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
            O que tem dentro
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--fg)] md:text-3xl">
            Tudo que ele faz por você
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item) => {
            const Icone = (
              Icons as unknown as Record<string, React.FC<{ className?: string }>>
            )[iconKey(item.icone)] || Icons.Box;
            return (
              <div
                key={item.titulo}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:bg-[var(--surface-2)]"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icone className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-[var(--fg)]">
                  {item.titulo}
                </div>
                <div className="mt-1 text-xs text-[var(--fg-dim)]">
                  {item.descricao}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
