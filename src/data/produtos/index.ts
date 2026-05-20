import { agentWhatsapp } from "./agent-whatsapp";
import type { Produto } from "./types";

export const PRODUTOS: Produto[] = [agentWhatsapp];

export function getProdutoPorSlug(slug: string): Produto | undefined {
  return PRODUTOS.find((p) => p.slug === slug);
}

export type { Produto } from "./types";
