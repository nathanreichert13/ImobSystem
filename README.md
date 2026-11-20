# ImobSystem

Sistema de gestão de aluguéis: cadastro de imóveis, locatários e fiadores, geração de contratos (caução ou fiador) a partir de modelos `.docx` e aviso por e-mail de contratos perto do vencimento.

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS 4** + **shadcn/ui**
- **Supabase** (Postgres + Auth)
- Formulários: **react-hook-form** + **zod**
- Futuro: **docxtemplater** (contratos), **Resend** + cron (avisos por e-mail), deploy na **Vercel**

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha com os dados do Supabase
npm run dev
```

Acesse http://localhost:3000.

## Estrutura

```
src/
  app/
    layout.tsx          # layout raiz (fontes, toasts, tooltips)
    (app)/              # área logada, com menu lateral
      page.tsx          # Painel
      imoveis/  pessoas/  contratos/
  components/
    app-sidebar.tsx     # menu lateral
    ui/                 # componentes shadcn/ui
  lib/supabase/         # clientes Supabase (navegador e servidor)
```

## Roadmap

1. [x] Setup do projeto e layout
2. [ ] Modelo de dados (imóveis, pessoas, contratos, modelos de contrato)
3. [ ] Login (Supabase Auth)
4. [ ] Cadastro de imóveis e pessoas
5. [ ] Contratos + geração do `.docx`
6. [ ] Aviso de vencimento por e-mail
