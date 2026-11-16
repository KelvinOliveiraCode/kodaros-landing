# Kodaros · build

O site é HTML estático. A raiz é o diretório `kodaros-site`. Abra `index.html`.

Para reconstruir as páginas depois de editar `_src/build.mjs`:

```powershell
node _src/build.mjs
```

Tudo sai em `../` em relação a `_src`. Os arquivos gerados são `index.html`, `servicos/*.html`, `projetos.html`, `planos.html`, `sobre.html`, `biblioteca.html`, `diagnostico.html`, `contato.html`, `privacidade.html`, `termos.html`, `404.html`, `sitemap.xml`, `robots.txt` e `site.webmanifest`.

O domínio usado no sitemap é `https://kelvinoliveiracode.github.io/kodaros-landing/`. Troque a constante `URL` em `_src/build.mjs` se um domínio próprio for configurado.


