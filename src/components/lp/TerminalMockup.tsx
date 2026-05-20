"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { TerminalLinha } from "@/data/produtos/types";

interface Props {
  linhas: TerminalLinha[];
  loop?: boolean;
}

const COR_MAP: Record<string, string> = {
  verde: "text-[var(--success)]",
  amarelo: "text-[var(--warn)]",
  azul: "text-[var(--info)]",
  cinza: "text-[var(--fg-mute)]",
};

interface LinhaRenderizada {
  id: string;
  tipo: "comando" | "saida";
  texto: string;
  cor?: string;
  digitando?: boolean;
}

export function TerminalMockup({ linhas, loop = true }: Props) {
  const [renderizadas, setRenderizadas] = useState<LinhaRenderizada[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const cancelRef = useRef(false);

  useEffect(() => {
    cancelRef.current = false;

    async function play() {
      while (!cancelRef.current) {
        for (let i = 0; i < linhas.length; i++) {
          if (cancelRef.current) return;
          const linha = linhas[i];

          if (linha.tipo === "espera") {
            await sleep(linha.ms);
            continue;
          }

          const id = `${Date.now()}-${idxRef.current++}`;
          if (linha.tipo === "comando") {
            // digita caractere por caractere
            const novo: LinhaRenderizada = {
              id,
              tipo: "comando",
              texto: "",
              digitando: true,
            };
            setRenderizadas((prev) => [...prev, novo].slice(-14));
            const stepMs = linha.ms ?? 30;
            for (let c = 1; c <= linha.texto.length; c++) {
              if (cancelRef.current) return;
              const parcial = linha.texto.slice(0, c);
              setRenderizadas((prev) =>
                prev.map((r) => (r.id === id ? { ...r, texto: parcial } : r)),
              );
              await sleep(stepMs);
            }
            setRenderizadas((prev) =>
              prev.map((r) => (r.id === id ? { ...r, digitando: false } : r)),
            );
          } else {
            const novo: LinhaRenderizada = {
              id,
              tipo: "saida",
              texto: linha.texto,
              cor: linha.cor,
            };
            setRenderizadas((prev) => [...prev, novo].slice(-14));
            await sleep(linha.ms ?? 50);
          }
        }

        if (!loop) break;
        await sleep(1500);
        setRenderizadas([]);
        await sleep(300);
      }
    }

    void play();

    return () => {
      cancelRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [renderizadas]);

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-2)] shadow-2xl">
      {/* Topo do "terminal" */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 font-mono text-[10px] text-[var(--fg-mute)]">
          claude — agent-whatsapp — bash
        </span>
      </div>

      {/* Linhas */}
      <div
        ref={scrollRef}
        className="h-[280px] overflow-y-auto bg-[var(--bg-2)] p-4 font-mono text-[12px] leading-[1.55] sm:h-[340px] sm:text-[13px]"
      >
        {renderizadas.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className={
              r.tipo === "comando"
                ? "text-[var(--fg)]"
                : `${r.cor ? COR_MAP[r.cor] : "text-[var(--fg-dim)]"}`
            }
          >
            {r.tipo === "comando" && r.texto.startsWith("$") ? (
              <span className="text-[var(--primary)]">{r.texto}</span>
            ) : r.tipo === "comando" ? (
              <>
                <span className="text-[var(--primary)]">{">"} </span>
                <span>{r.texto.replace(/^>\s*/, "")}</span>
              </>
            ) : (
              r.texto
            )}
            {r.digitando && (
              <span className="blink text-[var(--primary)]">▍</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
