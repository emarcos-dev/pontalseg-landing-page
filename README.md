# PontalSeg Landing Page

Landing page estática em React/Vite para a PontalSeg.

## Desenvolvimento

Pré-requisito: Node.js 20+

1. Instale as dependências:
   `npm install`
2. Rode em desenvolvimento:
   `npm run dev`
3. Gere a versão de produção:
   `npm run build`

## Publicação segura

- Publique apenas atrás de HTTPS.
- O certificado TLS deve ser gerenciado pelo provedor de hospedagem, CDN ou proxy reverso.
- Opções comuns:
  - Cloudflare com SSL/TLS em `Full (strict)`
  - Nginx ou Caddy com Let's Encrypt
  - Vercel / Netlify / GitHub Pages com HTTPS habilitado
- Exemplo de configuração com emissão automática de certificado:
  - [Caddyfile.example](/Users/marcos/Documents/pontalseg/pontalseg-landing-page/Caddyfile.example)

## Cabeçalhos recomendados em produção

Configure estes cabeçalhos no servidor ou CDN:

- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` coerente com os assets realmente usados em produção
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Observações de segurança

- Não coloque chaves de API, segredos ou tokens no frontend.
- Esta aplicação não precisa de backend, banco local ou variáveis de ambiente para operar.
