import type { Produto } from "./types";

export const agentWhatsapp: Produto = {
  slug: "whatsapp",
  nome: "Agent WhatsApp",
  categoria: "Vendas e Atendimento",
  hero: {
    badge: "Bravy / ASV Digital",
    headline: "Seu vendedor 24h no WhatsApp.",
    subheadline:
      "21 capacidades operacionais — disparo em grupo, inbox com auto-triage, qualificação BANT, cadência multi-toque, pipeline com forecast. Pronto pra rodar hoje.",
  },
  promessa:
    "Não é mais um copy-paste. É um agente Claude Code completo conectado à API Zappfy que faz o trabalho de SDR + atendimento + cobrança automaticamente.",

  terminal_loop: [
    { tipo: "comando", texto: "$ claude" },
    { tipo: "espera", ms: 600 },
    { tipo: "saida", texto: "Claude Code — pronto.", cor: "cinza" },
    { tipo: "espera", ms: 400 },
    { tipo: "comando", texto: "> roda o disparo pro grupo VIP com a oferta de hoje", ms: 50 },
    { tipo: "espera", ms: 800 },
    { tipo: "saida", texto: "✓ Lendo grupo VIP (142 contatos)...", cor: "azul" },
    { tipo: "espera", ms: 400 },
    { tipo: "saida", texto: "✓ Personalizando mensagem por perfil...", cor: "azul" },
    { tipo: "espera", ms: 500 },
    { tipo: "saida", texto: "✓ Enviando em batch (limite 8/min)...", cor: "amarelo" },
    { tipo: "espera", ms: 600 },
    { tipo: "saida", texto: "→ 142 enviados · 38 leram · 12 responderam · 4 quentes", cor: "verde" },
    { tipo: "espera", ms: 800 },
    { tipo: "comando", texto: "> qualifica BANT os 4 quentes" },
    { tipo: "espera", ms: 700 },
    { tipo: "saida", texto: "✓ Mateus B. — pronto pra fechar (score 87)", cor: "verde" },
    { tipo: "espera", ms: 200 },
    { tipo: "saida", texto: "✓ Joana R. — precisa de prova (score 62)", cor: "amarelo" },
    { tipo: "espera", ms: 200 },
    { tipo: "saida", texto: "✓ Carlos M. — sem urgência (score 41)", cor: "amarelo" },
    { tipo: "espera", ms: 200 },
    { tipo: "saida", texto: "✓ Lucas P. — sem budget (score 18)", cor: "cinza" },
    { tipo: "espera", ms: 1200 },
  ],

  conteudo: [
    { icone: "send", titulo: "Disparo inteligente", descricao: "Lista, grupo, segmentação por tag e cadência anti-ban." },
    { icone: "inbox", titulo: "Inbox com auto-triage", descricao: "Lê mensagens, classifica (lead/objeção/spam) e responde." },
    { icone: "target", titulo: "Qualificação BANT", descricao: "Budget, Authority, Need, Timing — score automático por conversa." },
    { icone: "repeat", titulo: "Cadência multi-toque", descricao: "7 toques em D+0, D+1, D+3, D+7, D+14, D+30, D+90." },
    { icone: "trending-up", titulo: "Pipeline com forecast", descricao: "Kanban CRM dentro do WhatsApp + previsão ponderada." },
    { icone: "users", titulo: "Extração de leads", descricao: "Puxa contatos de grupos com filtros (cidade, segmento, tempo)." },
    { icone: "shield-check", titulo: "Health check do número", descricao: "Detecta queda de quality rating antes do banimento." },
    { icone: "bar-chart-3", titulo: "Relatório automático", descricao: "Resumo diário/semanal de conversões e gargalos." },
  ],

  como_usar: [
    {
      numero: 1,
      titulo: "Baixe e descompacte",
      descricao: "Clique em BAIXAR AGORA aqui embaixo. Descompacte o zip no seu computador.",
    },
    {
      numero: 2,
      titulo: "Configure a API Zappfy",
      descricao: "Cole sua chave no arquivo .env (5 minutos). Sem Zappfy? A gente te ajuda — o suporte tá no rodapé.",
    },
    {
      numero: 3,
      titulo: "Abra o Claude Code dentro da pasta",
      descricao: "Digita os comandos em português normal. Tipo: 'roda o disparo pro grupo X com essa oferta'. O agent faz o resto.",
    },
  ],

  faq: [
    {
      pergunta: "Preciso pagar mensalidade?",
      resposta:
        "Não. É um arquivo standalone. Você usa quantas vezes quiser, no seu computador. Só paga a API Zappfy (R$ 79/mês) e o Claude Code (uso por crédito Anthropic, ~R$ 50/mês de uso intenso).",
    },
    {
      pergunta: "Funciona no Mac e Windows?",
      resposta: "Sim, os dois. Linux também. Só precisa ter o Claude Code instalado (gratuito, da Anthropic).",
    },
    {
      pergunta: "Não sou técnico, dou conta?",
      resposta:
        "Dá. O agent foi feito pra você falar em português normal com ele, sem comando técnico. Tem suporte direto no WhatsApp com a Bravy.",
    },
    {
      pergunta: "É legalizado? Risco de ban?",
      resposta:
        "O agent respeita rate limits da Zappfy (oficial) e tem health check pra detectar quedas de quality rating antes do banimento. Risco real é o mesmo de qualquer ferramenta séria de WhatsApp.",
    },
    {
      pergunta: "Posso usar com vários números?",
      resposta: "Sim. Cada número = 1 instância do agent. Sem limite.",
    },
    {
      pergunta: "Tô no celular agora, consigo usar?",
      resposta:
        "O agent roda no SEU COMPUTADOR (Claude Code). Salva esse link e abre no PC depois. O download em si até funciona no celular, mas a execução é no PC.",
    },
  ],

  download: {
    url: "https://github.com/asv-digital/agent-whatsapp/releases/latest/download/Agent-Whatsapp.zip",
    tamanho: "~ 2 MB",
    versao: "latest",
    repo: "asv-digital/agent-whatsapp",
  },

  requisito_principal: "Roda no Claude Code (no seu computador) com API Zappfy",
  cor_primaria: "#25D366",
  emoji: "💬",
};
