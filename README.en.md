# KodarosLanding — KODAROS Growth Platform

![Site](https://img.shields.io/badge/site-live-D4AF6A?style=flat-square&label=kelvinoliveiracode.github.io%2FKodarosLanding)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Zero deps](https://img.shields.io/badge/dependencies-0-2EA44F?style=flat-square)

A single HTML, CSS and JavaScript page that serves as the hub for the KODAROS ecosystem, with an interactive 4-question diagnosis, an 8-ebook library with filters, a KodaGrid software showcase and a link to more than 50 browser-based tools. No dependencies, no build step, direct deploy on GitHub Pages.

Visit https://kelvinoliveiracode.github.io/KodarosLanding/ (case-sensitive)

## Problem / Why it exists

A small-business owner loses time to repetitive tasks, manual service, forgotten follow-ups and disorganized digital presence. It is not information that is missing; it is a clear next step, without requiring a technician, registration or subscription. KODAROS brings together on one page a free diagnosis, a gift ebook, an ebook library and free tools.

## What it does

- Hero with brand identity, KODAROS navbar, coat of arms, platform card (8 ebooks, more than 50 tools, 1 software) and contact and custom software quote buttons.
- 3-step roadmap — 2-minute diagnosis, gift ebook "Do Zero ao Patrimônio" (42 pages, PDF), library and tools.
- Ecosystem with 5 accessible panels (ARIA tablist, tab and tabpanel roles): Software and Apps, Websites, Videos and Ads, Tools (link to external PWA with more than 50 calculators) and Library (8 ebooks).
- "Oracle" diagnosis — pure JavaScript state machine. Flow — introduction, profile choice (company, beginner or other), 4 questions adapted to the profile, result with diagnosis, free ebook download and showcase with 1 main recommendation plus 2 secondary ones. Purchase links go to Hotmart with UTM parameter utm_source=funil.
- Library with 8 ebooks from Traffic to Management, category filters (General, Beginners, Intermediate, Advanced), showcase prices and direct purchase on Hotmart.
- Software with KodaGrid, spreadsheet builder with formulas for Windows, 100% offline, generates .xlsx with live formulas and 13 templates.
- Websites and videos on demand, with quote form sent by email.
- Testimonials, differentiators and contact form with email validation, honeypot field and mailto sending to kodaros01@gmail.com.
- Gold particles in canvas at both bottom corners, cubic-bezier animations and motion reduction per prefers-reduced-motion.

## Stack

- Semantic HTML5 with CSS embedded in index.html
- Pure JavaScript in script.js; no framework, no external library, no build step
- Google Fonts — Cinzel, Cormorant Garamond, Figtree
- Canvas 2D for two particle layers (gray and gold)
- IntersectionObserver for reveal on scroll; localStorage to remember the chosen library filter
- JSON-LD (Organization, FAQPage, Product), Open Graph, meta description, theme-color and favicon
- Hosted on GitHub Pages at repository KelvinOliveiraCode/kodaros-landing

## How it works

1. Open index.html in any modern browser. Nothing to install.
2. On the Diagnosis tab, choose a profile (company, beginner or other) and answer 4 questions adapted to the chosen profile.
3. When finished, JavaScript builds the diagnosis from the PRODUCTS, QUESTIONS and DIAG objects in script.js, unlocks the "Do Zero ao Patrimônio" ebook download and shows 3 ebook recommendations (1 main, 2 secondary).
4. Purchases open Hotmart; WhatsApp opens with a pre-filled message; contact opens the visitor's email client. No backend.

## How to run

Open index.html in any modern browser or serve the folder with any static server. No dependencies to install.

To publish on GitHub Pages, publish the root content in repository KelvinOliveiraCode/kodaros-landing. The site is available at https://kelvinoliveiracode.github.io/KodarosLanding/ (case-sensitive).

To edit, change index.html (markup and styles) and script.js (diagnosis logic, particles, tabs and library filter). Images, PDFs and legal pages are in the repository root.

## Project structure

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

## Trade-offs and decisions

- Zero dependencies and no build — the site is the deliverable; direct deploy and fast loading, but all maintenance stays in pure HTML, CSS and JavaScript, with no framework abstractions.
- CSS embedded in index.html — simplifies single-file deploy, but concentrates styles in a large document.
- No backend — contact goes through the visitor's email client and purchases happen on Hotmart or WhatsApp; the landing does not process payments or store diagnosis responses.
- Canvas particles with requestAnimationFrame — disabled with prefers-reduced-motion and when the tab is inactive, to save battery.
- Library filter saved in localStorage; works without registration and without a server.
- Diagnosis entirely client-side; response data never leaves the visitor's browser.

## Known limitations

- No backend — contact messages depend on the visitor's email client and there is no delivery confirmation on the site.
- Purchases happen off the landing (Hotmart and WhatsApp); no payment processing on the page.
- The diagnosis is static, with fixed JavaScript objects, not a trained algorithm.
- Particles and animations require canvas and JavaScript enabled.
- The GitHub Pages URL is case-sensitive.
- Testimonials are from early users; the page already warns that results vary according to application.

## License

There is no LICENSE file in the repository. Texts, ebooks, images and trademarks belong to KODAROS. Contact kodaros01@gmail.com before reusing code or materials.

## Author

Kelvin Oliveira — founder of the KODAROS ecosystem
GitHub https://github.com/KelvinOliveiraCode
LinkedIn https://www.linkedin.com/in/kelvin-oliveira-code/
Contact kodaros01@gmail.com
