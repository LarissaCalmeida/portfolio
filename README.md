This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, create a `.env.local` file in the root directory with the following variables:

```env
# Gmail do remetente (seu email Gmail)
GMAIL_USER=seu-email@gmail.com

# App Password do Gmail (veja instruções abaixo)
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Email para receber os contatos do portfólio
NEXT_PUBLIC_PERSONAL_EMAIL=seu-email@exemplo.com
```

### Configuração do Gmail

1. **Ative a verificação em duas etapas** na sua conta Google:

   - Acesse [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Vá em "Verificação em duas etapas" e ative

2. **Crie um App Password**:

   - Acesse [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Selecione "App" como "Mail" e "Dispositivo" como "Outro (nome personalizado)"
   - Digite "Portfolio" como nome
   - Clique em "Gerar"
   - Copie a senha gerada (16 caracteres, pode ter espaços - remova os espaços ao colar)

3. **Configure as variáveis de ambiente**:
   - `GMAIL_USER`: Seu email Gmail completo
   - `GMAIL_APP_PASSWORD`: A senha de 16 caracteres gerada (sem espaços)
   - `NEXT_PUBLIC_PERSONAL_EMAIL`: Email onde você quer receber os contatos

Agora, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**Importante:** Não esqueça de adicionar as variáveis de ambiente no painel da Vercel:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `NEXT_PUBLIC_PERSONAL_EMAIL`

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
