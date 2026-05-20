import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
              Bravy / ASV Digital
            </div>
            <div className="mt-2 text-sm text-[var(--fg-dim)]">
              Agentes e skills profissionais pra Claude Code.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5521983431358"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--fg-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--fg)]"
            >
              <MessageCircle className="h-4 w-4" />
              Suporte no WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-5 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-mute)]">
          © {new Date().getFullYear()} Bravy · ASV Digital · Feito com IA, distribuído de
          graça
        </div>
      </div>
    </footer>
  );
}
