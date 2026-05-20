"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQ as FAQItem } from "@/data/produtos/types";

interface Props {
  perguntas: FAQItem[];
}

export function FAQ({ perguntas }: Props) {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
            Perguntas frequentes
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--fg)] md:text-3xl">
            Dúvidas? Resposta aqui.
          </h2>
        </div>
        <div className="space-y-2">
          {perguntas.map((q, i) => {
            const isAberto = aberto === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              >
                <button
                  onClick={() => setAberto(isAberto ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left hover:bg-[var(--surface-2)]"
                >
                  <span className="text-sm font-medium text-[var(--fg)]">
                    {q.pergunta}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[var(--fg-mute)] transition-transform ${
                      isAberto ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isAberto && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-[var(--border)] px-4 py-3.5 text-sm leading-relaxed text-[var(--fg-dim)]">
                        {q.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
