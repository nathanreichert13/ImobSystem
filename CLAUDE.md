@AGENTS.md

# ImobSystem — regras do projeto

Sistema de gestão de aluguéis (imóveis, locatários, fiadores, contratos). Guarda dados pessoais
(CPF, RG, estado civil, endereço) — tratar tudo como sensível (LGPD).

## Segurança (obrigatório)

Segurança é prioridade máxima. Na dúvida, escolha a opção mais restritiva.

- **Autorização sempre no back-end.** Toda checagem de login e permissão acontece no servidor
  (Data Access Layer `server-only`, Server Actions, Route Handlers) e no banco (RLS).
  Esconder botão/menu no front é só cosmético — nunca é a proteção.
- **Toda Server Action / Route Handler** re-valida a sessão, checa a permissão do usuário sobre
  o recurso, valida a entrada com **zod** e devolve só os campos necessários.
- **Acesso a dados só por `src/lib/` com `import "server-only"`.** Componentes não consultam o banco direto.
- **Supabase:** RLS ativado em **todas** as tabelas, negando por padrão; políticas explícitas por papel.
  Cadastro público desativado (usuários só por convite). Use `supabase.auth.getUser()`/`getClaims()`
  no servidor, nunca `getSession()` para decidir acesso.
- **Segredos:** nunca em `NEXT_PUBLIC_*`, nunca commitados. A chave `service_role`/secret só em
  código de servidor e só quando inevitável.
- **Arquivos (contratos):** bucket privado + URLs assinadas de curta duração.
- **Endpoints de cron/webhook:** protegidos por segredo (`CRON_SECRET`) no header.
- **proxy.ts** serve para checagem otimista/redirect — não é a autorização de verdade.
- Headers de segurança e CSP ficam em `next.config.ts`; não afrouxar sem motivo documentado.
