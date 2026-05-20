# Deploy — agents-lp

## Onde fica

- **Repo:** https://github.com/asv-digital/agents-lp
- **Domínio:** `agents.bravy.com.br`
- **Hospedagem:** Cloudflare Pages (free, bandwidth ilimitado)

## Setup inicial (uma vez só)

### 1. Conectar Cloudflare Pages ao repo

1. Abre https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Autoriza GitHub e seleciona `asv-digital/agents-lp`
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `pnpm install && pnpm build`
   - **Build output directory:** `out`
   - **Node version:** `20` (envar `NODE_VERSION=20`)
4. **Save and Deploy**

Cloudflare gera uma URL tipo `agents-lp.pages.dev`. Vamos apontar pro subdomínio bonito.

### 2. Apontar `agents.bravy.com.br` pro Cloudflare Pages

No painel da `bravy.com.br` (Registro.br, Cloudflare DNS, ou onde estiver):

```
Tipo: CNAME
Nome: agents
Valor: agents-lp.pages.dev
TTL: auto
Proxy: ativado (laranja, se for Cloudflare DNS)
```

Volta ao Cloudflare Pages → **Custom domains** → adiciona `agents.bravy.com.br`. Cloudflare valida (poucos minutos) e libera SSL automático.

### 3. Pronto

A partir daí, **todo `git push` na branch `main`** gera deploy automático em ~30 segundos. URL pública:

- https://agents.bravy.com.br — índice de todos os agents
- https://agents.bravy.com.br/whatsapp — LP do Agent WhatsApp

## Adicionar novo produto

1. Cria `src/data/produtos/<slug>.ts` (copie de `agent-whatsapp.ts` como base)
2. Registra em `src/data/produtos/index.ts`
3. `git push` — Cloudflare faz o resto

A rota `/[produto]/` é dinâmica via `generateStaticParams`, então cada novo produto vira automaticamente um link novo.

## Fluxo ManyChat

Story → "SKILL" → ManyChat → mensagem com botão → URL = `https://agents.bravy.com.br/whatsapp`

Pronto. O cara abre, vê a LP, escolhe se baixa agora (no PC) ou guarda o link pra abrir depois.
