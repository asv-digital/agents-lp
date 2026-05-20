"use client";

import { Code, Copy, Download } from "lucide-react";
import { useState } from "react";
import type { Produto } from "@/data/produtos/types";

interface Props {
  produto: Produto;
}

export function DownloadCTA({ produto }: Props) {
  const [copiado, setCopiado] = useState(false);
  const { download } = produto;

  async function copiarLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // ignora — em iframe pode falhar
    }
  }

  return (
    <section
      id="baixar"
      className="border-b border-[var(--border)] bg-[var(--bg-2)]"
    >
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20 lg:px-8">
        <div
          className="rounded-2xl border border-[var(--primary)]/30 bg-gradient-to-b from-[var(--surface)] to-[var(--bg-2)] p-6 text-center sm:p-10"
          style={{
            boxShadow: `0 0 80px ${produto.cor_primaria}15`,
          }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
            Download direto
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--fg)] md:text-3xl">
            Leva pra casa o seu {produto.nome.toLowerCase()}.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--fg-dim)]">
            Arquivo único {download.tamanho}. Sem cadastro, sem e-mail, sem fila.
            Tudo seu, pra sempre.
          </p>

          <a
            href={download.url}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold text-black transition-transform hover:scale-[1.01] sm:w-auto sm:px-12"
            style={{ backgroundColor: produto.cor_primaria }}
          >
            <Download className="h-5 w-5" />
            Baixar agora ({download.tamanho})
          </a>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--fg-mute)]">
            <button
              onClick={copiarLink}
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <Copy className="h-3.5 w-3.5" />
              {copiado ? "Link copiado!" : "Copiar link da página"}
            </button>
            <a
              href={`https://github.com/${download.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--fg)]"
            >
              <Code className="h-3.5 w-3.5" />
              Ver código no GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
