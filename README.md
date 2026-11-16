# KODAROS · site

Site estático da Kodaros. Abra `index.html` no navegador para ver a versão completa.

## Estrutura

- `index.html` · home
- `servicos/` · índice e seis páginas de serviço
- `projetos.html` · produtos, apps, sistemas, dados, automação e infra
- `planos.html` · três formatos de projeto
- `biblioteca.html` · oito e-books com filtro
- `diagnostico.html` · quiz de três perguntas com recomendação e PDF grátis
- `sobre.html` · empresa e fundador
- `contato.html` · canais e formulário
- `privacidade.html`, `termos.html` · páginas legais
- `assets/` · CSS, JavaScript e imagens
- `_src/build.mjs` · gerador das páginas

## Rebuild

```powershell
node _src/build.mjs
```

O gerador reescreve as páginas a partir de `_src/build.mjs`. O CSS e o JavaScript ficam em `assets/` e não são gerados.

Atenção: edições manuais no `index.html` não estão no gerador. Rodar o build sobrescreve essas edições. Edite o HTML diretamente ou atualize o gerador antes.

## Premissas

- Publicado em `https://kelvinoliveiracode.github.io/kodaros-landing/`. O `sitemap.xml` e o `robots.txt` usam essa URL. Se um domínio próprio for configurado, troque as URLs.
- Contatos usados: WhatsApp `559192094504` e e-mail `kodaros01@gmail.com`, os mesmos do site antigo. O portfólio pessoal usa outros dois contatos. Unifique antes de publicar.
- As imagens vêm do repositório `kodaros-landing`. O hero usa `assets/img/banner.webp`. As capas do mostruário estão em `assets/img/mostruario/`.
- O PDF do brinde é o mesmo `do-zero-ao-patrimonio.pdf` do site antigo.
- As tags `og:image` e `twitter:image` usam caminho relativo. Ao publicar, troque por URL absoluta.
- O site não tem backend. O formulário abre o WhatsApp com a mensagem pronta. O diagnóstico roda no navegador e não envia respostas.

## Publicar

O site é HTML estático. Publique a pasta em GitHub Pages, Cloudflare Pages, Netlify ou qualquer hospedagem estática. Não há build obrigatório.


