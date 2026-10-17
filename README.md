# KodarosLanding — Plataforma de Crescimento KODAROS

![Site](https://img.shields.io/badge/site-live-D4AF6A?style=flat-square&label=kelvinoliveiracode.github.io%2FKodarosLanding)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Zero deps](https://img.shields.io/badge/depend%C3%AAncias-0-2EA44F?style=flat-square)

Uma única página em HTML, CSS e JavaScript puro que serve de hub para o ecossistema KODAROS, com diagnóstico interativo de 4 perguntas, biblioteca de 8 e-books com filtros, vitrine do software KodaGrid e link para mais de 50 ferramentas que rodam no navegador. Sem dependências, sem passo de build, deploy direto no GitHub Pages.

Acesse https://kelvinoliveiracode.github.io/KodarosLanding/ (diferencia maiúsculas de minúsculas)

## Problema / Por que existe

Dono de pequeno negócio perde tempo com tarefas repetitivas, atendimento manual, follow-up esquecido e presença digital desorganizada. Não falta informação; falta um próximo passo claro, sem exigir técnico, cadastro ou assinatura. A KODAROS reúne em uma página diagnóstico gratuito, e-book de presente, biblioteca de e-books e ferramentas gratuitas.

## O que faz

- Hero com identidade da marca, navbar KODAROS, brasão, ficha da plataforma (8 e-books, mais de 50 ferramentas, 1 software) e botões de contato e de orçamento de software sob medida.
- Roteiro de 3 passos — diagnóstico de 2 minutos, e-book "Do Zero ao Patrimônio" de presente (42 páginas, PDF), biblioteca e ferramentas.
- Ecossistema com 5 painéis acessíveis (roles ARIA tablist, tab e tabpanel): Softwares e Apps, Sites, Vídeos e Propagandas, Ferramentas (link para PWA externo com mais de 50 calculadoras) e Biblioteca (8 e-books).
- Diagnóstico "Oráculo" — máquina de estados em JavaScript puro. Fluxo — introdução, escolha de perfil (empresa, iniciante ou outros), 4 perguntas que se adaptam ao perfil, resultado com diagnóstico, download do e-book gratuito e vitrine com 1 recomendação principal mais 2 secundárias. Os links de compra levam à Hotmart com o parâmetro UTM utm_source=funil.
- Biblioteca com 8 e-books de Tráfego a Gestão, filtros por categoria (Geral, Iniciantes, Intermediário, Avançado), preços de vitrine e compra direta na Hotmart.
- Softwares com KodaGrid, construtor de planilhas com fórmulas para Windows, 100% offline, gera .xlsx com fórmula viva e 13 templates.
- Sites e vídeos sob encomenda, com formulário de orçamento enviado por e-mail.
- Depoimentos, diferenciais e formulário de contato com validação de e-mail, campo honeypot e envio por mailto para kodaros01@gmail.com.
- Partículas douradas em canvas nos dois cantos inferiores, animações em cubic-bezier e redução de movimento conforme prefers-reduced-motion.

## Stack

- HTML5 semântico com CSS embutido em index.html
- JavaScript puro em script.js; sem framework, sem biblioteca externa, sem passo de build
- Fontes do Google Fonts — Cinzel, Cormorant Garamond, Figtree
- Canvas 2D para duas camadas de partículas (cinzas e douradas)
- IntersectionObserver para reveal ao rolar; localStorage para lembrar o filtro escolhido na biblioteca
- JSON-LD (Organization, FAQPage, Product), Open Graph, meta description, theme-color e favicon
- Hospedagem no GitHub Pages no repositório KelvinOliveiraCode/kodaros-landing

## Como funciona

1. Abra index.html em qualquer navegador moderno. Não é preciso instalar nada.
2. Na aba Diagnóstico, escolha um perfil (empresa, iniciante ou outros) e responda 4 perguntas que se adaptam ao perfil escolhido.
3. Ao finalizar, o JavaScript monta o diagnóstico a partir dos objetos PRODUCTS, QUESTIONS e DIAG de script.js, libera o download do e-book "Do Zero ao Patrimônio" e exibe 3 recomendações de e-books (1 principal, 2 secundárias).
4. Compras abrem a Hotmart; o WhatsApp abre com mensagem pré-preenchida; o contato abre o cliente de e-mail do visitante. Não há backend.

## Como rodar

Abra index.html em qualquer navegador moderno ou sirva a pasta com qualquer servidor estático. Não há dependências a instalar.

Para publicar no GitHub Pages, publique o conteúdo da raiz no repositório KelvinOliveiraCode/kodaros-landing. O site fica disponível em https://kelvinoliveiracode.github.io/KodarosLanding/ (diferencia maiúsculas de minúsculas).

Para editar, altere index.html (marcação e estilos) e script.js (lógica do diagnóstico, partículas, abas e filtro da biblioteca). Imagens, PDFs e páginas legais ficam na raiz do repositório.

## Estrutura do projeto

```
KodarosLanding/
├── index.html
├── script.js
├── do-zero-ao-patrimonio.pdf
├── privacidade.html
├── termos.html
├── sitemap.xml
├── robots.txt
├── kodaros_icon.png
├── kodaros_og.png
├── banner.png
├── bust.png
├── bg-salao.jpg
├── arquitetura-capa.png
├── kodagrid-capa.png
├── ebook-cover.png
├── livro-financeiro.png
├── livro-gestao.png
├── livro-reclamacoes.png
├── livro-site.png
├── livro1.png
├── livro2.png
└── livro3.png
```

## Trade-offs e decisões

- Zero dependências e sem build — o site é o entregável; deploy direto e carregamento rápido, mas toda manutenção fica em HTML, CSS e JavaScript puro, sem abstrações de framework.
- CSS embutido em index.html — simplifica o deploy de um único arquivo, mas concentra estilos em um documento grande.
- Sem backend — contato sai pelo cliente de e-mail do visitante e compras acontecem na Hotmart ou WhatsApp; a landing não processa pagamento nem armazena respostas do diagnóstico.
- Partículas em canvas com requestAnimationFrame — desativadas com prefers-reduced-motion e quando a aba fica inativa, para economizar bateria.
- Filtro da biblioteca salvo em localStorage; funciona sem cadastro e sem servidor.
- Diagnóstico inteiramente no cliente; os dados das respostas não saem do navegador do visitante.

## Limitações conhecidas

- Não há backend — mensagens de contato dependem do cliente de e-mail do visitante e não há confirmação de entrega no site.
- Compras ocorrem fora da landing (Hotmart e WhatsApp); não há processamento de pagamento na página.
- O diagnóstico é estático, com objetos fixos em JavaScript, não um algoritmo treinado.
- Partículas e animações exigem canvas e JavaScript habilitados.
- A URL do GitHub Pages diferencia maiúsculas de minúsculas.
- Os depoimentos são de usuários iniciais; a página já avisa que resultados variam conforme a aplicação.

## Licença

Não há arquivo LICENSE no repositório. Os textos, e-books, imagens e marcas pertencem à KODAROS. Entre em contato por kodaros01@gmail.com antes de reutilizar código ou materiais.

## Autor

Kelvin Oliveira — fundador do ecossistema KODAROS
GitHub https://github.com/KelvinOliveiraCode
LinkedIn https://www.linkedin.com/in/kelvin-oliveira-code/
Contato kodaros01@gmail.com
