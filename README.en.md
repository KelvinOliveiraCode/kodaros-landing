
# kodaros-landing

![language: HTML](https://img.shields.io/badge/language-HTML-blue)   ![status: done](https://img.shields.io/badge/status-done-green)   ![license: MIT](https://img.shields.io/badge/license-MIT-blue)

## Summary

Static page or site in HTML, CSS and vanilla JavaScript, with no build dependencies. KODAROS platform landing with interactive diagnosis funnel

## Problem / why it exists

The project delivers a lightweight web solution, hostable on any static server (including GitHub Pages), without requiring an application server, database or build process.

## Architecture

- `index.html`: entry point and page structure.
- CSS: styling and layout (light/dark mode when applicable).
- JavaScript: client-side interactivity and logic.

Everything lives in one or a few files, easy to audit line by line.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla)

## What it does

KODAROS platform landing with interactive diagnosis funnel

## How to run

Open `index.html` directly in the browser, or serve locally:

```
python -m http.server 8080
# access http://localhost:8080
```

## Project structure

- arquitetura-capa.png, arquitetura-capa.webp, banner.png, banner.webp, bg-salao.jpg, bg-salao.webp, bust.png, bust.webp, do-zero-ao-patrimonio.pdf, ebook-cover.png e mais 34


## Trade-offs and decisions

- Single file (or a few): easy to host anywhere and audit.
- No build, no server, no database.
- Data in snapshot (when applicable), not real-time.

## Known limitations

- No backend; functionality limited to the browser.
- Static data or snapshot; confirm values in official sources.

## Tests

No automated tests detected.

## License

Distributed under the MIT License. See the `LICENSE` file in this repository.

## Author

Kelvin Oliveira, https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
