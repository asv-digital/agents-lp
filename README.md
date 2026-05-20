# agents-lp

Landing pages mobile-first dos agents/skills Bravy.

- **Subdomínio:** `agents.bravy.com.br`
- **1 produto = 1 LP** em `agents.bravy.com.br/<slug>`
- **Stack:** Next.js 16 + Tailwind 4 + Framer Motion (static export)
- **Hospedagem:** Cloudflare Pages (free)

## Pra que serve

Resolver o problema do lead que **clica no link do zip pelo celular** e vê arquivo travado / página em branco. Em vez disso, ele cai numa LP visual com:

- Mockup de terminal animado (prova de que tá funcionando)
- O que tem dentro do zip
- Como usar (3 passos)
- Aviso visível pra quem está no celular
- Botão de download direto
- FAQ + WhatsApp do suporte

## Rodar local

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # gera out/
```

## Adicionar produto novo

1. Copia `src/data/produtos/agent-whatsapp.ts` como ponto de partida
2. Edita slug, hero, conteúdo, terminal_loop, faq, download url
3. Registra em `src/data/produtos/index.ts`
4. `git push` → Cloudflare deploya automático

## Deploy

Ver [`DEPLOY.md`](./DEPLOY.md).

## Estrutura

```
src/
├── app/
│   ├── page.tsx              # índice (lista todos)
│   └── [produto]/page.tsx    # rota dinâmica por slug
├── components/lp/
│   ├── Hero.tsx
│   ├── TerminalMockup.tsx
│   ├── Conteudo.tsx
│   ├── ComoUsar.tsx
│   ├── AvisoMobile.tsx
│   ├── DownloadCTA.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
└── data/produtos/
    ├── types.ts
    ├── index.ts
    └── agent-whatsapp.ts
```
