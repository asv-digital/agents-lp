import { Smartphone, Monitor } from "lucide-react";

export function AvisoMobile() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]/40">
      <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8">
        <div className="rounded-xl border border-[var(--warn)]/30 bg-[var(--warn)]/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex shrink-0 items-center gap-1 rounded-md bg-[var(--warn)]/15 p-2 text-[var(--warn)]">
              <Smartphone className="h-4 w-4" />
              <span className="text-xs">→</span>
              <Monitor className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--fg)]">
                Tá no celular? Sem problema.
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-dim)]">
                Esse agente roda no <strong className="text-[var(--fg)]">seu computador</strong>{" "}
                (PC, Mac ou Linux) através do Claude Code. Se você tá no celular agora,{" "}
                <strong className="text-[var(--fg)]">salva esse link</strong> ou manda pra si
                mesmo no WhatsApp e abre depois no PC. Não precisa criar conta, não precisa
                e-mail, não tem fila.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
