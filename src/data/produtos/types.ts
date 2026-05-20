export interface Produto {
  slug: string;
  nome: string;
  categoria: string;
  hero: {
    headline: string;
    subheadline: string;
    badge: string;
  };
  promessa: string;
  /** Linhas que aparecem no mockup de terminal animado do Hero */
  terminal_loop: TerminalLinha[];
  conteudo: ItemConteudo[];
  como_usar: PassoUso[];
  faq: FAQ[];
  download: {
    /** URL direta do .zip (GitHub Release ou outro CDN) */
    url: string;
    /** Tamanho do arquivo em formato humano (ex: "740 KB") */
    tamanho: string;
    /** Versão atual */
    versao: string;
    /** Repo de origem pra mostrar transparência */
    repo: string;
  };
  /** Requisito principal — "Roda no Claude Code", "Roda no navegador", etc */
  requisito_principal: string;
  cor_primaria: string;
  emoji: string;
}

export type TerminalLinha =
  | { tipo: "comando"; texto: string; ms?: number }
  | { tipo: "saida"; texto: string; cor?: "verde" | "amarelo" | "azul" | "cinza"; ms?: number }
  | { tipo: "espera"; ms: number };

export interface ItemConteudo {
  titulo: string;
  descricao: string;
  icone: string;
}

export interface PassoUso {
  numero: number;
  titulo: string;
  descricao: string;
}

export interface FAQ {
  pergunta: string;
  resposta: string;
}
