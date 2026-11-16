import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const URL = "https://kelvinoliveiracode.github.io/kodaros-landing";
const PHONE = "559192094504";
const EMAIL = "kodaros01@gmail.com";
const GITHUB = "https://github.com/KelvinOliveiraCode";
const INSTAGRAM = "https://www.instagram.com/kodaros01";
const LINKEDIN = "https://www.linkedin.com/in/kelvin-oliveira-code/";
const WHATSAPP = `https://wa.me/${PHONE}?text=Oi!%20Vim%20pelo%20site%20da%20KODAROS%20e%20quero%20falar%20sobre%20um%20projeto.`;

const nav = [
  { label: "Serviços", href: "servicos/index.html" },
  { label: "Projetos", href: "projetos.html" },
  { label: "Planos", href: "planos.html" },
  { label: "Biblioteca", href: "biblioteca.html" },
  { label: "Sobre", href: "sobre.html" }
];

const services = [
  {
    slug: "sites", label: "Sites", title: "Sites básicos e profissionais.",
    short: "Sites institucionais, catálogos e páginas de serviço com identidade própria, mobile first e medição.",
    description: "Sites institucionais e profissionais com estrutura, conteúdo e publicação. Do domínio ao deploy.",
    intro: [
      "Um site não é uma pasta com páginas. É a primeira conversa entre a sua empresa e quem procura por ela. A Kodaros projeta a estrutura, escreve o conteúdo, constrói a interface e publica.",
      "O resultado é rápido, responsivo e fácil de manter. O código é seu, a hospedagem é explicada e a medição fica ligada desde o primeiro dia."
    ],
    deliverables: ["Estrutura e conteúdo", "Design responsivo", "SEO técnico e metadados", "Painel de conteúdo ou HTML estático", "Analytics e medição", "Treinamento e suporte"],
    faqs: [
      ["Qual a diferença entre site básico e profissional?", "O site básico resolve presença: páginas essenciais, contato e SEO. O profissional inclui estrutura maior, painel de conteúdo, integrações e uma rotina de publicação."],
      ["O domínio e a hospedagem estão incluídos?", "O domínio é contratado no seu nome. A hospedagem pode ser contratada por você ou pela Kodaros, com o valor discriminado na proposta."],
      ["O site aparece no Google?", "A estrutura entrega SEO técnico, metadados, sitemap e velocidade. O trabalho de conteúdo e linkagem é contínuo e pode ser contratado à parte."]
    ],
    projects: ["modelos-de-sites", "olaria", "mostruario"]
  },
  {
    slug: "landing-pages", label: "Landing pages", title: "Uma página, uma decisão.",
    short: "Landing pages para campanhas, lançamentos e captura. Copy, design, formulário e integração.",
    description: "Landing pages para campanhas, lançamentos e captura de leads. Copy, design, formulário e integração com WhatsApp ou CRM.",
    intro: [
      "Uma landing page tem um trabalho só: transformar atenção em decisão. A Kodaros escreve a copy, desenha a página, conecta o formulário e mede o resultado.",
      "Sem menu, sem distração, sem página que não converte. Cada bloco tem uma função e cada chamada tem um destino."
    ],
    deliverables: ["Copy e estrutura", "Design responsivo", "Formulário e automação", "Integração com WhatsApp ou CRM", "Teste A/B", "Publicação e medição"],
    faqs: [
      ["Serve para tráfego pago?", "Sim. A página é desenhada para campanhas de Meta, Google e TikTok, com mensagem alinhada ao anúncio e medição de conversão."],
      ["Você escreve o copy?", "Sim. A copy entra no escopo e é construída a partir do seu público, da sua oferta e do que precisa ser dito."],
      ["Faz teste A/B?", "Quando há volume, a estrutura permite duas versões e a comparação de resultado. Sem volume, o teste vira aprendizado qualitativo."]
    ],
    projects: ["modelos-de-sites", "mostruario", "ferramentas"]
  },
  {
    slug: "automacoes", label: "Automações", title: "Processos que rodam sem você.",
    short: "Automação de tarefas repetitivas com n8n, Make, scripts e integrações. Do gargalo ao monitoramento.",
    description: "Automação de tarefas repetitivas com n8n, Make, scripts e integrações. Do diagnóstico do gargalo ao monitoramento.",
    intro: [
      "Tarefa repetitiva é custo. A Kodaros mapeia o processo, desenha o fluxo, conecta as ferramentas e deixa o monitoramento no lugar.",
      "O objetivo não é automatizar por automatizar. É devolver tempo, reduzir erro e criar um registro do que aconteceu."
    ],
    deliverables: ["Mapa do processo", "Fluxo e integrações", "Tratamento de erro", "Registro e monitoramento", "Documentação", "Suporte"],
    faqs: [
      ["Preciso trocar meu sistema?", "Não. A automação conecta o que você já usa. Se houver um limite do sistema atual, ele aparece no diagnóstico."],
      ["A automação é segura?", "O fluxo usa credenciais com escopo mínimo, registro de execução e tratamento de falha. O acesso é revisado com você."],
      ["Vocês dão suporte?", "Sim. O suporte cobre ajuste de fluxo, erro de integração e mudança de API. O prazo está na proposta."]
    ],
    projects: ["n8n", "reset-senha", "config-backup"]
  },
  {
    slug: "bots-agentes", label: "Bots e agentes", title: "Atendimento e análise no mesmo canal.",
    short: "Bots para Telegram, Discord e WhatsApp. Agentes com base de conhecimento, guardrails e revisão humana.",
    description: "Bots para Telegram, Discord e WhatsApp. Agentes de IA com base de conhecimento, guardrails e revisão humana.",
    intro: [
      "Um bot resolve quando o fluxo é claro. Um agente resolve quando a resposta depende de contexto. A Kodaros escolhe o caminho certo para cada caso.",
      "Montamos a base de conhecimento, definimos os limites, integramos os canais e deixamos registro do que foi respondido. Sem resposta inventada."
    ],
    deliverables: ["Fluxo e personalidade", "Base de conhecimento", "Integração com canais", "Guardrails e controle de alucinação", "Registro e revisão", "Monitoramento"],
    faqs: [
      ["O agente inventa resposta?", "O desenho usa base de conhecimento, validação e limite de escopo. Quando não há resposta segura, o agente encaminha para uma pessoa."],
      ["Dá para integrar com meu CRM?", "Sim. O agente pode ler e gravar no CRM, abrir chamado e devolver o histórico para a equipe."],
      ["Como medem a qualidade?", "Registro de conversas, taxa de resolução, encaminhamentos e revisão humana. O painel mostra o que precisa de ajuste."]
    ],
    projects: ["agente-bancario", "bia", "bot-fii"]
  },
  {
    slug: "sistemas-apps", label: "Sistemas e apps", title: "Do banco de dados à interface.",
    short: "Sistemas web e aplicativos sob medida. API, autenticação, painel, deploy e manutenção.",
    description: "Sistemas web e aplicativos sob medida. API, autenticação, painel, deploy e manutenção. Desktop quando o offline é requisito.",
    intro: [
      "Sistema sob medida começa com uma pergunta: qual decisão o usuário precisa tomar? A Kodaros desenha o modelo de dados, constrói a API, entrega a interface e publica.",
      "O código é versionado, testado e documentado. O projeto não depende de uma pessoa para continuar rodando."
    ],
    deliverables: ["Levantamento e arquitetura", "API e banco de dados", "Interface web", "Autenticação e permissões", "Deploy e monitoramento", "Testes e manutenção"],
    faqs: [
      ["Vocês fazem o sistema inteiro?", "Sim. Levantamento, arquitetura, API, interface, deploy e manutenção. O escopo é fechado por etapas."],
      ["O código é meu?", "Sim. O repositório, os arquivos e as credenciais são entregues no seu nome. A Kodaros mantém acesso apenas para suporte."],
      ["Como funciona a manutenção?", "A manutenção pode ser por hora, por pacote mensal ou por demanda. O combinado fica na proposta."]
    ],
    projects: ["portal-cliente", "loja-virtual", "kodapay", "frota"]
  },
  {
    slug: "marketing", label: "Marketing", title: "Conteúdo e mídia com medida.",
    short: "Tráfego pago, conteúdo, SEO e criativos. A mesma disciplina de engenharia aplicada à aquisição.",
    description: "Tráfego pago, conteúdo, SEO e criativos. A mesma disciplina de engenharia aplicada à aquisição.",
    intro: [
      "Marketing sem medida é opinião. A Kodaros monta o plano, produz os criativos, publica, mede e corrige.",
      "A mesma base de cálculo que sustenta o produto sustenta a campanha. Sem métrica inventada e sem promessa vazia."
    ],
    deliverables: ["Plano de aquisição", "Criativos e copy", "Campanhas e medição", "SEO e conteúdo", "Relatório e otimização", "Integração com ferramentas"],
    faqs: [
      ["Vocês gerenciam tráfego?", "Sim. A gestão inclui plano, criativos, campanhas, medição e otimização. O investimento em mídia é pago direto por você."],
      ["Qual o investimento mínimo?", "Depende do canal e do objetivo. O diagnóstico define o cenário e a proposta mostra o valor cheio, sem taxa escondida."],
      ["Como medem o resultado?", "Eventos, conversões, custo por lead e retorno. O painel mostra o que foi gasto e o que voltou."]
    ],
    projects: ["dashboard-porsche", "ferramentas", "biblioteca"]
  }
];

const projects = {
  "modelos-de-sites": { name: "Modelos de sites", desc: "20 landing pages por nicho, publicadas e navegáveis a partir de um hub.", stack: "HTML · CSS", href: "https://kelvinoliveiracode.github.io/modelos-de-sites/", group: "Produtos" },
  "kodagrid": { name: "KodaGrid", desc: "Construtor de planilhas com fórmulas para Windows. 13 templates, .xlsx real e 100% offline.", stack: "Windows · offline", href: "https://kelvinoliveiracode.github.io/kodaros-landing/#kodagrid", group: "Produtos" },
  "ferramentas": { name: "Kodaros Ferramentas", desc: "53 calculadoras de negócio, PWA offline, sem cadastro e sem custo.", stack: "JavaScript · PWA", href: "https://kelvinoliveiracode.github.io/kodaros-ferramentas/", group: "Produtos" },
  "mostruario": { name: "Mostruário Kodaros", desc: "50 landing pages de demonstração, uma para cada nicho, com busca e filtro.", stack: "HTML · CSS", href: "https://kelvinoliveiracode.github.io/kodaros-mostruario/", group: "Produtos" },
  "garimpo": { name: "Garimpo", desc: "Curadoria de ofertas com 131 itens, filtros, wishlist e catálogo aberto. Roda inteira no navegador.", stack: "JavaScript · navegador", href: "https://garimpo-oficial.vercel.app/", group: "Produtos" },
  "megaagt": { name: "MegaAGT", desc: "App desktop em Tauri e Rust para o OpenCode CLI: sessões, subagentes, raciocínio e diffs.", stack: "Rust · Tauri", href: "https://github.com/KelvinOliveiraCode/MegaAGT", group: "Apps" },
  "javaforge": { name: "JavaForge", desc: "Construtor visual de apps Java Swing com SQLite e geração de projetos Maven completos.", stack: "Rust · Java", href: "https://github.com/KelvinOliveiraCode/JavaForge", group: "Apps" },
  "slidestage": { name: "SlideStage", desc: "Editor de slides em HTML com canvas visual e edição de código no mesmo app.", stack: "TypeScript · Tauri", href: "https://github.com/KelvinOliveiraCode/slidestage", group: "Apps" },
  "olaria": { name: "Olaria", desc: "Construtor de landing pages para pessoas não técnicas, com editor visual e exportação em HTML.", stack: "JavaScript", href: "https://github.com/KelvinOliveiraCode/olaria", group: "Apps" },
  "bot-fii": { name: "Bot FII", desc: "Bot de análise de sentimentos para fundos imobiliários.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/bot-fii-sentimento", group: "Dados e IA" },
  "dashboard-porsche": { name: "Dashboard Porsche", desc: "Dashboard de vendas em React e TypeScript com gráficos, assistente de IA e persistência local.", stack: "TypeScript · React", href: "https://github.com/KelvinOliveiraCode/dashboard-vendas-porsche-dio", group: "Dados e IA" },
  "fraudes": { name: "Detecção de fraude", desc: "Modelos de ML para fraude em cartão, 284 mil transações e ROC AUC 0.94.", stack: "Python · scikit-learn", href: "https://github.com/KelvinOliveiraCode/deteccao-de-fraudes", group: "Dados e IA" },
  "agente-bancario": { name: "Agente de suporte bancário", desc: "Agente RAG com validação em quatro camadas.", stack: "Python · RAG", href: "https://github.com/KelvinOliveiraCode/agente-suporte-bancario-rag", group: "Dados e IA" },
  "bia": { name: "BIA", desc: "Agente financeiro bancário com IA generativa e validação.", stack: "Python · IA", href: "https://github.com/KelvinOliveiraCode/dio-lab-bia-do-futuro", group: "Dados e IA" },
  "data-pilot": { name: "Data Pilot", desc: "Painel de vendas em Streamlit com métricas determinísticas e explicação por IA.", stack: "Python · Streamlit", href: "https://github.com/KelvinOliveiraCode/data-pilot", group: "Dados e IA" },
  "loja-ebooks": { name: "Loja de e-books", desc: "Catálogo e checkout da biblioteca Kodaros.", stack: "TypeScript", href: "https://github.com/KelvinOliveiraCode/loja-ebooks-kodaros", group: "Sistemas" },
  "kodapay": { name: "Kodapay API", desc: "API de pagamentos com padrões de projeto e separação de camadas.", stack: "Java · Spring Boot", href: "https://github.com/KelvinOliveiraCode/kodapay-api-v2", group: "Sistemas" },
  "portal-cliente": { name: "Portal do cliente", desc: "Portal com OAuth2, RBAC e separação de permissões.", stack: "Java · Spring Boot", href: "https://github.com/KelvinOliveiraCode/portal-cliente-oauth2-rbac", group: "Sistemas" },
  "loja-virtual": { name: "Loja virtual", desc: "Sistema de loja com catálogo, carrinho e pedidos.", stack: "Java", href: "https://github.com/KelvinOliveiraCode/loja-virtual-completa", group: "Sistemas" },
  "frota": { name: "Gestão de frota", desc: "API de gestão de frota de veículos.", stack: "Java", href: "https://github.com/KelvinOliveiraCode/api-gestao-frota-veiculos", group: "Sistemas" },
  "n8n": { name: "Prospecção com n8n", desc: "Automação que dispara buscas amplas e entrega o CSV completo no Telegram.", stack: "n8n · Telegram", href: "https://github.com/KelvinOliveiraCode/prospectos-n8n-telegram", group: "Automação e infra" },
  "reset-senha": { name: "Reset de senha no AD", desc: "Automação de reset de senha em Active Directory com registro.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/reset-senha-ad-automacao", group: "Automação e infra" },
  "config-backup": { name: "Backup de switches", desc: "Backup de configuração de switches com detecção por hash e normalização.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/config-backup-switches", group: "Automação e infra" },
  "owasp": { name: "Scanner OWASP Top 10", desc: "Scanner de aplicação web com relatório por categoria.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/scanner-owasp-top10-web", group: "Automação e infra" },
  "siem": { name: "SIEM de logs", desc: "Pipeline de detecção com regras, correlação e alertas MITRE ATT&CK.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/siem-logs-lab", group: "Automação e infra" },
  "vpc": { name: "VPC em três camadas", desc: "Simulador de rede com firewall stateful, bastion e tracer de caminho.", stack: "Python", href: "https://github.com/KelvinOliveiraCode/vpc-3-tier-segura", group: "Automação e infra" },
  "iac": { name: "IaC com Terraform", desc: "Laboratório de infraestrutura como código com plano, diff e idempotência.", stack: "Python · Terraform", href: "https://github.com/KelvinOliveiraCode/iac-terraform-github-actions", group: "Automação e infra" }
};

const plans = [
  { name: "Landing page", price: "Sob orçamento", desc: "Uma página para uma campanha, lançamento ou captura. Copy, design, formulário e publicação.", items: ["Copy e estrutura", "Design responsivo", "Formulário e WhatsApp", "SEO e medição", "Publicação"], cta: "Pedir orçamento", href: "contato.html" },
  { name: "Site institucional", price: "Sob orçamento", desc: "Até seis páginas, painel de conteúdo, SEO e treinamento. A base para a empresa aparecer e vender.", items: ["Estrutura e conteúdo", "Até seis páginas", "Painel de conteúdo", "SEO técnico", "Analytics", "Treinamento"], cta: "Pedir orçamento", href: "contato.html", featured: true },
  { name: "Sistema sob medida", price: "Sob orçamento", desc: "Levantamento, arquitetura, API, interface, deploy e testes. Do processo ao sistema rodando.", items: ["Levantamento", "API e banco", "Interface", "Autenticação", "Deploy", "Testes"], cta: "Pedir orçamento", href: "contato.html" }
];

const faqs = [
  ["O que a Kodaros faz?", "Sites, landing pages, automações, bots, agentes de IA, sistemas sob medida, software desktop e marketing. O escopo é definido por projeto, com prazo e valor fechados antes de começar."],
  ["Quanto custa um site?", "Depende do número de páginas, do conteúdo, das integrações e do prazo. O orçamento é feito depois de um diagnóstico curto, e o valor aparece por escrito. Sem taxa escondida."],
  ["Qual é o prazo?", "Uma landing page leva de cinco a sete dias. Um site institucional leva de duas a três semanas. Um sistema sob medida leva de quatro a oito semanas, a depender do escopo."],
  ["Vocês atendem todo o Brasil?", "Sim. O trabalho é remoto, com reuniões por vídeo e acompanhamento por WhatsApp ou e-mail. O pagamento e o contrato são digitais."],
  ["O código e os arquivos são meus?", "Sim. O repositório, os arquivos e as credenciais são entregues no seu nome. A Kodaros mantém acesso apenas para suporte, quando contratado."],
  ["Como funciona o diagnóstico gratuito?", "São três perguntas sobre o seu cenário. No fim você recebe um retrato do gargalo, uma recomendação de serviço e um e-book de presente. Sem compromisso de orçamento."],
  ["Vocês fazem automação e agentes de IA?", "Sim. A Kodaros mapeia o processo, integra as ferramentas e publica o fluxo. No caso de agentes, a base de conhecimento e os limites são definidos antes da publicação."],
  ["Como contrato?", "Pelo formulário do site ou pelo WhatsApp. A conversa começa com o diagnóstico, segue para a proposta e termina com o escopo assinado. O pagamento é dividido em etapas."]
];

const books = [
  { title: "Arquitetura de Aquisição", level: "avancado", badge: "Avançado", cover: "arquitetura-capa.webp", desc: "O sistema operacional de tráfego pago e funis da Kodaros. Framework A.P.E.R.T.O., 3 calculadoras e checklists.", old: "R$ 247", now: "R$ 197", href: "https://pay.hotmart.com/B107295159O?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Lançamento Milionário", level: "intermediario", badge: "Intermediário", cover: "livro3.webp", desc: "O método para vender cursos e produtos digitais: do planejamento à execução de lançamentos que convertem.", old: "R$ 47", now: "R$ 12,99", href: "https://pay.hotmart.com/R106895415M?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Tráfego Que Vende", level: "intermediario", badge: "Intermediário", cover: "livro1.webp", desc: "Domine Facebook e Google Ads e crie campanhas pagas que geram retorno consistente e escalável.", old: "R$ 47", now: "R$ 12,99", href: "https://pay.hotmart.com/D106894870O?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Use Seu Site Para Escalar Sua Empresa", level: "intermediario", badge: "Intermediário", cover: "livro-site.webp", desc: "Transforme seu site em máquina de vendas com SEO, captura de leads e automação.", old: "R$ 67", now: "R$ 22,99", href: "https://pay.hotmart.com/Y107016734X?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Venda Mais Hoje", level: "iniciantes", badge: "Iniciante", cover: "livro2.webp", desc: "Marketing e vendas diretos, sem enrolação: táticas práticas para aumentar as suas vendas imediatamente.", old: "R$ 47", now: "R$ 12,99", href: "https://pay.hotmart.com/R106895345D?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Os 10 Pilares da Gestão Empresarial", level: "iniciantes", badge: "Iniciante", cover: "livro-gestao.webp", desc: "10 pilares para organizar e crescer a sua empresa com controle e decisões baseadas em dados.", old: "R$ 67", now: "R$ 22,99", href: "https://pay.hotmart.com/S107016677T?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Os 10 Pilares do Controle Financeiro", level: "iniciantes", badge: "Iniciante", cover: "livro-financeiro.webp", desc: "Organize o fluxo de caixa, a formação de preços e reduza custos para lucrar com previsibilidade.", old: "R$ 67", now: "R$ 22,99", href: "https://pay.hotmart.com/E107016796K?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" },
  { title: "Transforme Reclamações em Vendas", level: "iniciantes", badge: "Iniciante", cover: "livro-reclamacoes.webp", desc: "O método para transformar reclamações em fidelização e construir uma cultura centrada no cliente.", old: "R$ 67", now: "R$ 22,99", href: "https://pay.hotmart.com/G107016779V?utm_source=kodaros_site&utm_medium=biblioteca&utm_campaign=biblioteca" }
];

const social = [
  { label: "Instagram", href: INSTAGRAM, icon: "instagram" },
  { label: "LinkedIn", href: LINKEDIN, icon: "linkedin" },
  { label: "GitHub", href: GITHUB, icon: "github" },
  { label: "WhatsApp", href: WHATSAPP, icon: "whatsapp" }
];

const icons = {
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388C1.334 2.703.925 3.372.62 4.162.325 4.926.125 5.799.068 7.076.012 8.354-.001 8.764.005 12.023c.006 3.259.02 3.667.082 4.947.061 1.277.264 2.148.564 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.074 2.129 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.081 1.28-.061 2.147-.265 2.91-.564.789-.308 1.458-.72 2.123-1.388.665-.668 1.074-1.338 1.38-2.128.295-.763.496-1.636.552-2.913.056-1.28.069-1.689.063-4.948-.006-3.258-.021-3.667-.081-4.946-.061-1.28-.265-2.149-.564-2.912-.308-.789-.72-1.457-1.388-2.123C21.298 1.33 20.628.921 19.838.617 19.074.321 18.202.12 16.924.065 15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084m.14 21.693c-1.17-.051-1.805-.245-2.229-.408-.56-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.265-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.476-.96.895-1.382.419-.422.818-.681 1.378-.9.423-.165 1.058-.361 2.227-.417 1.266-.06 1.645-.072 4.848-.079 3.203-.007 3.583.005 4.85.061 1.169.051 1.805.245 2.228.408.561.216.96.475 1.382.895.421.419.681.818.9 1.379.165.421.362 1.056.417 2.226.06 1.265.074 1.645.08 4.848.005 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.229-.216.561-.476.96-.895 1.382-.419.421-.818.681-1.379.9-.422.164-1.057.361-2.226.417-1.266.06-1.645.072-4.849.079-3.205.007-3.583-.006-4.848-.061M16.953 5.586A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.442M5.838 12.012c.007 3.403 2.771 6.156 6.173 6.149 3.403-.006 6.157-2.77 6.151-6.173-.007-3.403-2.771-6.157-6.174-6.15-3.403.007-6.156 2.771-6.15 6.174M8 12.008a4 4 0 1 1 4.008 3.992A3.999 3.999 0 0 1 8 12.008"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

function asset(base, file) { return base + "assets/" + file; }
function url(base, file) { return base + file; }

function head({ title, description, base, jsonLd }) {
  const ld = jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : "";
  return `<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add('js')</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#070709">
<link rel="icon" type="image/png" href="${asset(base, "img/favicon-192.png")}">
<link rel="apple-touch-icon" href="${asset(base, "img/favicon-180.png")}">
<link rel="manifest" href="${base}site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset(base, "css/site.css")}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="KODAROS">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${asset(base, "img/kodaros_og.jpg")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${asset(base, "img/kodaros_og.jpg")}">
${ld}
</head>`;
}

function header(base, active) {
  const links = nav.map(item => {
    const href = url(base, item.href);
    const current = item.href === active ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${item.label}</a>`;
  }).join("\n        ");
  const mobile = nav.map(item => `<a href="${url(base, item.href)}">${item.label}</a>`).join("\n        ");
  return `<a class="skip-link" href="#content">Pular para o conteúdo</a>
<header class="topnav" id="topnav">
  <div class="container nav-inner">
    <a class="brand" href="${url(base, "index.html")}" aria-label="KODAROS, início">
      <img src="${asset(base, "img/kodaros-icon.webp")}" alt="" width="38" height="38">
      <span class="brand-name">KODAROS</span>
    </a>
    <nav class="nav-links" aria-label="Principal">
        ${links}
    </nav>
    <div class="nav-actions">
      <a class="btn btn-ghost nav-cta" href="${url(base, "contato.html")}">Contato</a>
      <a class="btn btn-primary nav-cta" href="${url(base, "diagnostico.html")}">Diagnóstico gratuito</a>
      <button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobileMenu">
  <nav aria-label="Menu principal">
        ${mobile}
        <a href="${url(base, "contato.html")}">Contato</a>
  </nav>
  <div class="stack">
    <a class="btn btn-primary" href="${url(base, "diagnostico.html")}">Diagnóstico gratuito</a>
    <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">Conversar no WhatsApp</a>
  </div>
  <div class="menu-foot">KODAROS · tecnologia, conteúdo e engenharia</div>
</div>`;
}

function footer(base) {
  const serviceLinks = services.map(s => `<li><a href="${url(base, "servicos/" + s.slug + ".html")}">${s.label}</a></li>`).join("\n          ");
  const socialLinks = social.map(s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${icons[s.icon]}</a>`).join("\n        ");
  return `<footer class="pagefoot">
  <div class="container">
    <div class="foot-grid">
      <div class="foot-brand">
        <img src="${asset(base, "img/kodaros-icon.webp")}" alt="KODAROS" width="64" height="64">
        <p>Tecnologia, conteúdo e engenharia. Sites, automações, agentes, sistemas e software sob medida.</p>
        <div class="social">
        ${socialLinks}
        </div>
      </div>
      <div class="foot-col">
        <h3>Serviços</h3>
        <ul>
          ${serviceLinks}
        </ul>
      </div>
      <div class="foot-col">
        <h3>Ecossistema</h3>
        <ul>
          <li><a href="${url(base, "projetos.html")}">Projetos</a></li>
          <li><a href="${url(base, "planos.html")}">Planos</a></li>
          <li><a href="${url(base, "biblioteca.html")}">Biblioteca</a></li>
          <li><a href="${url(base, "diagnostico.html")}">Diagnóstico</a></li>
          <li><a href="https://kelvinoliveiracode.github.io/kodaros-ferramentas/" target="_blank" rel="noopener">Ferramentas</a></li>
          <li><a href="https://kelvinoliveiracode.github.io/kodaros-mostruario/" target="_blank" rel="noopener">Mostruário</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h3>Contato e legal</h3>
        <ul>
          <li><a href="${url(base, "contato.html")}">Falar com a Kodaros</a></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li><a href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="${url(base, "privacidade.html")}">Política de Privacidade</a></li>
          <li><a href="${url(base, "termos.html")}">Termos de Uso</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© <span id="year">2026</span> KODAROS · Todos os direitos reservados.</span>
      <a class="foot-credit" href="${GITHUB}" target="_blank" rel="noopener" aria-label="Feito por Kelvin Oliveira. Abrir o GitHub em nova aba">
        ${icons.github}
        <span>Feito por <b>Kelvin Oliveira</b></span>
      </a>
    </div>
  </div>
</footer>
<div class="wa-pop" id="waPop" hidden>
  <div class="wa-pop-card">
    <button class="wa-pop-close" id="waClose" aria-label="Fechar mensagem">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
    </button>
    <div class="wa-pop-head">
      <span class="wa-pop-logo">${icons.whatsapp}</span>
      <div>
        <div class="wa-pop-title">Fale com a Kodaros</div>
        <div class="wa-pop-sub">Resposta em até 24h úteis.</div>
      </div>
    </div>
    <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">Conversar no WhatsApp</a>
  </div>
</div>
<a class="wa-fab" id="waFab" href="${WHATSAPP}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp" hidden>${icons.whatsapp}</a>
<script src="${asset(base, "js/site.js")}"></script>`;
}

function layout({ title, description, base = "", active = "", body, jsonLd }) {
  return `<!doctype html>
<html lang="pt-BR">
${head({ title, description, base, jsonLd })}
<body>
${header(base, active)}
<main id="content" tabindex="-1">
${body}
</main>
${footer(base)}
</body>
</html>`;
}

function write(file, content) {
  const target = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, "utf8");
  console.log("✓", file);
}

function serviceCard(service, base) {
  return `<article class="service-card reveal">
  <span class="service-label">${service.label}</span>
  <h3>${service.title}</h3>
  <p>${service.short}</p>
  <ul class="service-list">
    ${service.deliverables.slice(0, 3).map(d => `<li>${d}</li>`).join("\n    ")}
  </ul>
  <div class="service-foot">
    <a class="btn btn-secondary btn-arrow" href="${url(base, "servicos/" + service.slug + ".html")}">Ver o serviço</a>
  </div>
</article>`;
}

function evidenceRow(id, base) {
  const p = projects[id];
  if (!p) return "";
  return `<div class="evidence-row reveal">
  <div>
    <div class="evidence-name">${p.name}</div>
    <div class="evidence-desc">${p.desc}</div>
  </div>
  <div class="evidence-stack">${p.group}</div>
  <a class="evidence-link" href="${p.href}" target="_blank" rel="noopener">Abrir</a>
</div>`;
}

function faqList(items) {
  return items.map(([q, a]) => `<details><summary>${q}<span class="faq-mark" aria-hidden="true"></span></summary><p>${a}</p></details>`).join("\n      ");
}

/* ── home ─────────────────────────────────────────────────────── */
const homeBody = `
<section class="hero">
  <div class="hero-glow" aria-hidden="true"></div>
  <div class="container hero-split">
    <div class="hero-copy">
      <p class="eyebrow">Tecnologia, conteúdo e engenharia</p>
      <h1>Tecnologia que já está no ar.</h1>
      <p class="lead">A Kodaros cria sites, automações, bots, agentes e sistemas sob medida. Cada serviço mostra o que já foi construído: código publicado, produto rodando e número verificável.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#servicos">Ver serviços
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </a>
        <a class="btn btn-secondary" href="biblioteca.html">Para você</a>
      </div>
      <p class="hero-note">Resposta em até 24h úteis. Escopo, prazo e valor por escrito.</p>
    </div>
    <aside class="hero-panel" aria-label="Números da Kodaros">
      <div class="metrics">
        <div class="metric"><b>100</b><span>repositórios públicos</span></div>
        <div class="metric"><b>50</b><span>projetos funcionais</span></div>
        <div class="metric"><b>53</b><span>ferramentas gratuitas</span></div>
        <div class="metric"><b>50</b><span>modelos de site</span></div>
      </div>
      <figure class="hero-figure">
        <img src="assets/img/banner.webp" alt="Banner da KODAROS" width="1200" height="480">
        <figcaption>KODAROS · tecnologia, conteúdo e impacto</figcaption>
      </figure>
    </aside>
  </div>
</section>


<section class="section" id="servicos">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Serviços</p>
      <h2>Seis formas de contratar a Kodaros.</h2>
      <p>Cada linha tem escopo, prazo e entrega definidos. O detalhe está na página de cada serviço, com prova do que já foi construído.</p>
    </div>
    <div class="service-grid">
      ${services.map(s => serviceCard(s, "")).join("\n      ")}
    </div>
    <div class="row" style="margin-top:32px">
      <a class="btn btn-secondary btn-arrow" href="servicos/index.html">Ver todos os serviços</a>
      <a class="btn btn-ghost btn-arrow" href="diagnostico.html">Não sei por onde começar</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="between section-head reveal">
      <div style="max-width:58ch">
        <p class="eyebrow">Evidência</p>
        <h2>O que já está no ar.</h2>
        <p>Não é uma lista de promessas. É o que pode ser aberto, testado e lido hoje.</p>
      </div>
      <a class="text-link" href="projetos.html">Ver todos os projetos
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </a>
    </div>
    <div class="evidence">
      ${["kodagrid", "ferramentas", "mostruario", "megaagt", "fraudes", "agente-bancario", "n8n"].map(id => evidenceRow(id, "")).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Produtos</p>
      <h2>Coisas que funcionam.</h2>
      <p>Uma parte da Kodaros é produto. A outra é serviço. Os dois se sustentam com a mesma base técnica.</p>
    </div>
    <div class="product-grid">
      <article class="product-card reveal">
        <div class="product-media is-contain">
          <img src="assets/img/kodagrid-capa.webp" alt="Capa do KodaGrid" width="400" height="533" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-tag">Software · Windows</span>
          <h3>KodaGrid</h3>
          <p>Construtor de planilhas com fórmulas. 13 templates, arquivo .xlsx real e 100% offline.</p>
          <a class="btn btn-secondary" href="https://kelvinoliveiracode.github.io/kodaros-landing/#kodagrid" target="_blank" rel="noopener">Conhecer</a>
        </div>
      </article>
      <article class="product-card reveal">
        <div class="product-media">
          <img src="assets/img/mostruario/atelie-lumina.webp" alt="Prévia do projeto Ateliê Lúmina" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-tag">Mostruário</span>
          <h3>50 modelos de site</h3>
          <p>Uma página por nicho, com nome, serviço e identidade próprios. Referência real para o seu projeto.</p>
          <a class="btn btn-secondary" href="https://kelvinoliveiracode.github.io/kodaros-mostruario/" target="_blank" rel="noopener">Abrir mostruário</a>
        </div>
      </article>
      <article class="product-card reveal">
        <div class="product-media is-contain">
          <img src="assets/img/arquitetura-capa.webp" alt="Capa do e-book Arquitetura de Aquisição" width="296" height="395" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-tag">Biblioteca</span>
          <h3>Oito e-books</h3>
          <p>Um problema por livro. Tráfego, vendas, gestão, finanças, site e reclamações. Entrega imediata.</p>
          <a class="btn btn-secondary" href="biblioteca.html">Ver biblioteca</a>
        </div>
      </article>
      <article class="product-card reveal">
        <div class="product-media" style="flex-direction:column;gap:6px">
          <span class="mono">100% no navegador</span>
          <strong style="font-family:var(--font-display);font-size:clamp(52px,6vw,72px);line-height:1;color:var(--gold-light);font-weight:400">53</strong>
          <span class="mono">calculadoras · 7 categorias</span>
        </div>
        <div class="product-body">
          <span class="product-tag">Ferramentas</span>
          <h3>Kodaros Ferramentas</h3>
          <p>53 calculadoras de aquisição, finanças, vendas e gestão. Sem cadastro, sem custo e com funcionamento offline.</p>
          <a class="btn btn-secondary" href="https://kelvinoliveiracode.github.io/kodaros-ferramentas/" target="_blank" rel="noopener">Abrir ferramentas</a>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Processo</p>
      <h2>Como o trabalho acontece.</h2>
      <p>Quatro etapas, com escopo fechado antes de começar. Sem surpresa no meio do caminho.</p>
    </div>
    <div class="process">
      <div class="process-step reveal"><div class="mono">Diagnóstico</div><h3>Entender o gargalo</h3><p>Uma conversa curta para mapear o problema, o público e o que precisa ser resolvido primeiro.</p></div>
      <div class="process-step reveal"><div class="mono">Proposta</div><h3>Fechar o escopo</h3><p>Entregáveis, prazo e valor por escrito. O que entra, o que não entra e como o resultado será medido.</p></div>
      <div class="process-step reveal"><div class="mono">Execução</div><h3>Construir e revisar</h3><p>Construção em etapas, com revisão humana e registro do que foi feito. O código fica versionado.</p></div>
      <div class="process-step reveal"><div class="mono">Suporte</div><h3>Publicar e manter</h3><p>Deploy, treinamento e suporte. O projeto não termina no dia da entrega.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Planos</p>
      <h2>Escopo fechado antes de começar.</h2>
      <p>Três formatos de projeto. Automações, bots e agentes são orçados por processo, depois do diagnóstico.</p>
    </div>
    <div class="plans">
      ${plans.map(plan => `<article class="plan reveal${plan.featured ? " is-featured" : ""}">
        <h3>${plan.name}</h3>
        <div class="plan-price">${plan.price}</div>
        <p class="plan-desc">${plan.desc}</p>
        <ul>${plan.items.map(item => `<li>${item}</li>`).join("")}</ul>
        <a class="btn ${plan.featured ? "btn-primary" : "btn-secondary"}" href="${plan.href}">${plan.cta}</a>
      </article>`).join("\n      ")}
    </div>
    <p class="plan-note">O diagnóstico é gratuito e não compromete orçamento. O pagamento é dividido em etapas, conforme o avanço do projeto.</p>
  </div>
</section>

<section class="section">
  <div class="container split-2-1">
    <div class="reveal">
      <p class="eyebrow">Diagnóstico gratuito</p>
      <h2>Onde o seu crescimento está travando.</h2>
      <p class="lead" style="margin-top:16px">Três perguntas sobre o seu cenário. No fim você recebe um retrato do gargalo, uma recomendação de serviço e um e-book de presente.</p>
      <div class="row" style="margin-top:28px">
        <a class="btn btn-primary" href="diagnostico.html">Começar meu diagnóstico</a>
        <a class="btn btn-ghost" href="biblioteca.html">Ver a biblioteca</a>
      </div>
    </div>
    <div class="reveal">
      <img src="assets/img/ebook-cover.webp" alt="Capa do e-book Do Zero ao Patrimônio" width="280" height="396" loading="lazy" style="max-width:260px;margin-inline:auto;border-radius:10px;border:1px solid var(--border)">
    </div>
  </div>
</section>

<section class="section">
  <div class="container split-2-1">
    <div>
      <p class="eyebrow">Dúvidas</p>
      <h2>Perguntas frequentes</h2>
      <p class="lead" style="margin-top:16px">Se a sua pergunta não estiver aqui, fale no WhatsApp. A resposta vem de uma pessoa, não de um robô.</p>
      <a class="btn btn-secondary" style="margin-top:24px" href="contato.html">Falar com a Kodaros</a>
    </div>
    <div class="faq">
      ${faqList(faqs)}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="reveal" style="border:1px solid var(--border-strong);border-radius:var(--radius-lg);background:linear-gradient(180deg,var(--gold-soft),transparent 46%),var(--surface);padding:clamp(28px,5vw,56px)">
      <div class="between">
        <div style="max-width:56ch">
          <p class="eyebrow">Contato</p>
          <h2>Fale com a Kodaros.</h2>
          <p class="lead" style="margin-top:14px">Conte o que precisa resolver. A conversa começa com o diagnóstico e segue para uma proposta com escopo, prazo e valor.</p>
        </div>
        <div class="row">
          <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">Chamar no WhatsApp</a>
          <a class="btn btn-secondary" href="contato.html">Formulário</a>
        </div>
      </div>
    </div>
  </div>
</section>`;

write("index.html", layout({
  title: "KODAROS · Tecnologia, conteúdo e engenharia",
  description: "Sites, landing pages, automações, bots, agentes de IA, sistemas sob medida e software. Código publicado, produto no ar e número verificável.",
  active: "",
  body: homeBody,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KODAROS",
    description: "Empresa de tecnologia, conteúdo e engenharia. Sites, automações, bots, agentes, sistemas e software sob medida.",
    sameAs: [INSTAGRAM, LINKEDIN, GITHUB],
    contactPoint: [{ "@type": "ContactPoint", "contactType": "sales", "email": EMAIL, "telephone": "+" + PHONE }]
  }
}));

/* ── índice de serviços ──────────────────────────────────────── */
const servicesIndexBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Serviços</p>
    <p class="eyebrow">Serviços</p>
    <h1>Seis formas de contratar a Kodaros.</h1>
    <p class="lead">Sites, landing pages, automações, bots e agentes, sistemas e marketing. Cada linha tem escopo, prazo e entrega definidos antes de começar.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="service-grid">
      ${services.map(s => serviceCard(s, "../")).join("\n      ")}
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Como escolher</p>
      <h2>Comece pelo que dói mais.</h2>
      <p class="lead" style="margin-top:16px">Se você não sabe por onde começar, o diagnóstico gratuito mapeia o gargalo e aponta o primeiro projeto. Sem compromisso.</p>
    </div>
    <div class="reveal">
      <div class="evidence">
        <div class="evidence-row"><div><div class="evidence-name">Preciso aparecer melhor</div><div class="evidence-desc">Presença, autoridade e uma página que converte.</div></div><a class="evidence-link" href="sites.html">Sites</a></div>
        <div class="evidence-row"><div><div class="evidence-name">Perco tempo em tarefa manual</div><div class="evidence-desc">Processo repetitivo, planilha, retrabalho.</div></div><a class="evidence-link" href="automacoes.html">Automações</a></div>
        <div class="evidence-row"><div><div class="evidence-name">Demora para responder cliente</div><div class="evidence-desc">Atendimento, acompanhamento e triagem.</div></div><a class="evidence-link" href="bots-agentes.html">Bots e agentes</a></div>
        <div class="evidence-row"><div><div class="evidence-name">O sistema atual não acompanha</div><div class="evidence-desc">Operação, banco, API e interface.</div></div><a class="evidence-link" href="sistemas-apps.html">Sistemas</a></div>
      </div>
    </div>
  </div>
</section>`;

write("servicos/index.html", layout({
  title: "Serviços · KODAROS",
  description: "Seis serviços da Kodaros: sites, landing pages, automações, bots e agentes, sistemas sob medida e marketing.",
  base: "../",
  active: "servicos/index.html",
  body: servicesIndexBody
}));

/* ── páginas de serviço ──────────────────────────────────────── */
services.forEach(service => {
  const body = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="../index.html">Início</a> / <a href="index.html">Serviços</a> / ${service.label}</p>
    <p class="eyebrow">${service.label}</p>
    <h1>${service.title}</h1>
    <p class="lead">${service.description}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="../contato.html">Pedir orçamento</a>
      <a class="btn btn-secondary" href="../projetos.html">Ver projetos</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2-1">
    <div class="prose reveal">
      ${service.intro.map(p => `<p>${p}</p>`).join("\n      ")}
    </div>
    <aside class="reveal">
      <div class="result-card">
        <span class="mono">Escopo</span>
        <h3>O que está incluído</h3>
        <ul class="service-list" style="margin:0;border-top:0">
          ${service.deliverables.map(d => `<li>${d}</li>`).join("\n          ")}
        </ul>
      </div>
    </aside>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Prova</p>
      <h2>O que sustenta esta entrega.</h2>
      <p>Referências reais, não promessa. O código e as páginas podem ser abertos.</p>
    </div>
    <div class="evidence">
      ${service.projects.map(id => evidenceRow(id, "../")).join("\n      ")}
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Processo</p>
      <h2>Como funciona.</h2>
      <p class="lead" style="margin-top:16px">Quatro etapas, com escopo fechado antes de começar.</p>
    </div>
    <div class="reveal">
      <div class="process" style="border-top:0">
        <div class="process-step"><div class="mono">Diagnóstico</div><h3>Entender</h3><p>Conversa curta para mapear o problema e o resultado esperado.</p></div>
        <div class="process-step"><div class="mono">Proposta</div><h3>Fechar</h3><p>Entregáveis, prazo e valor por escrito.</p></div>
        <div class="process-step"><div class="mono">Execução</div><h3>Construir</h3><p>Construção em etapas, com revisão e código versionado.</p></div>
        <div class="process-step"><div class="mono">Suporte</div><h3>Manter</h3><p>Deploy, treinamento e suporte depois da entrega.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2-1">
    <div>
      <p class="eyebrow">Dúvidas</p>
      <h2>Perguntas frequentes</h2>
      <a class="btn btn-secondary" style="margin-top:24px" href="../contato.html">Falar com a Kodaros</a>
    </div>
    <div class="faq">
      ${faqList(service.faqs)}
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="reveal" style="border:1px solid var(--border-strong);border-radius:var(--radius-lg);background:linear-gradient(180deg,var(--gold-soft),transparent 46%),var(--surface);padding:clamp(28px,5vw,56px)">
      <div class="between">
        <div style="max-width:56ch">
          <p class="eyebrow">Próximo passo</p>
          <h2>Vamos falar do seu projeto?</h2>
          <p class="lead" style="margin-top:14px">O diagnóstico é gratuito e não compromete orçamento.</p>
        </div>
        <div class="row">
          <a class="btn btn-primary" href="../contato.html">Pedir orçamento</a>
          <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
  write(`servicos/${service.slug}.html`, layout({
    title: `${service.label} · KODAROS`,
    description: service.description,
    base: "../",
    active: "servicos/index.html",
    body
  }));
});

/* ── projetos ────────────────────────────────────────────────── */
const groups = ["Produtos", "Apps", "Sistemas", "Dados e IA", "Automação e infra"];
const projectsBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Projetos</p>
    <p class="eyebrow">Projetos</p>
    <h1>Código publicado, produto no ar.</h1>
    <p class="lead">Uma seleção do que pode ser aberto e testado. Repositórios, produtos e sistemas construídos pela Kodaros.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="${GITHUB}" target="_blank" rel="noopener">Ver o GitHub completo</a>
      <a class="btn btn-secondary" href="contato.html">Quero um projeto assim</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    ${groups.map(group => {
      const ids = Object.keys(projects).filter(id => projects[id].group === group);
      if (!ids.length) return "";
      return `<div style="margin-bottom:clamp(40px,6vw,72px)">
        <div class="between" style="margin-bottom:18px">
          <h2 style="font-size:clamp(28px,3.2vw,38px)">${group}</h2>
          <span class="mono">${ids.length} ${ids.length === 1 ? "item" : "itens"}</span>
        </div>
        <div class="evidence">
          ${ids.map(id => evidenceRow(id, "")).join("\n          ")}
        </div>
      </div>`;
    }).join("\n    ")}
  </div>
</section>`;

write("projetos.html", layout({
  title: "Projetos · KODAROS",
  description: "Produtos, apps, sistemas, dados, automação e infraestrutura construídos pela Kodaros. Código publicado e produto no ar.",
  active: "projetos.html",
  body: projectsBody
}));

/* ── planos ──────────────────────────────────────────────────── */
const plansBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Planos</p>
    <p class="eyebrow">Planos</p>
    <h1>Escopo fechado antes de começar.</h1>
    <p class="lead">Três formatos de projeto. O valor depende do escopo, do conteúdo e das integrações. O orçamento é feito depois de um diagnóstico curto.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="plans">
      ${plans.map(plan => `<article class="plan reveal${plan.featured ? " is-featured" : ""}">
        <h3>${plan.name}</h3>
        <div class="plan-price">${plan.price}</div>
        <p class="plan-desc">${plan.desc}</p>
        <ul>${plan.items.map(item => `<li>${item}</li>`).join("")}</ul>
        <a class="btn ${plan.featured ? "btn-primary" : "btn-secondary"}" href="${plan.href}">${plan.cta}</a>
      </article>`).join("\n      ")}
    </div>
    <p class="plan-note">Automações, bots e agentes são orçados por processo. O diagnóstico é gratuito e não compromete orçamento. O pagamento é dividido em etapas, conforme o avanço do projeto.</p>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Como orçar</p>
      <h2>Sem caixa preta.</h2>
      <p class="lead" style="margin-top:16px">O valor aparece por escrito, com o que entra, o que não entra e como o resultado será medido.</p>
    </div>
    <div class="reveal">
      <div class="process" style="border-top:0">
        <div class="process-step"><div class="mono">Diagnóstico</div><h3>Conversa</h3><p>Você conta o problema. A Kodaros faz as perguntas certas.</p></div>
        <div class="process-step"><div class="mono">Proposta</div><h3>Escopo</h3><p>Entregáveis, prazo e valor. Sem linha dupla.</p></div>
        <div class="process-step"><div class="mono">Execução</div><h3>Etapas</h3><p>O pagamento acompanha o avanço. Você vê o que está sendo feito.</p></div>
        <div class="process-step"><div class="mono">Suporte</div><h3>Durante</h3><p>Dúvida não fica sem resposta. O canal é direto.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Dúvidas</p>
      <h2>Antes de pedir orçamento.</h2>
    </div>
    <div class="faq">
      ${faqList(faqs.slice(0, 5))}
    </div>
  </div>
</section>`;

write("planos.html", layout({
  title: "Planos · KODAROS",
  description: "Três formatos de projeto da Kodaros: landing page, site institucional e sistema sob medida. Escopo, prazo e valor por escrito.",
  active: "planos.html",
  body: plansBody
}));

/* ── sobre ───────────────────────────────────────────────────── */
const aboutBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Sobre</p>
    <p class="eyebrow">Sobre</p>
    <h1>Uma empresa pequena, com código grande.</h1>
    <p class="lead">A Kodaros nasceu em 2026 como um ecossistema de produtos e serviços de tecnologia. A base é engenharia: código publicado, produto rodando e número verificável.</p>
  </div>
</section>
<section class="section">
  <div class="container split-2-1">
    <div class="prose reveal">
      <h2>O que é a Kodaros</h2>
      <p>A Kodaros é um ecossistema de tecnologia. O trabalho cobre sites, landing pages, automações, bots, agentes de IA, sistemas sob medida, software desktop e marketing.</p>
      <p>A empresa não é uma agência que promete. É um acervo de software que já roda. Cada serviço mostra o que foi construído, com código, produto ou número. O visitante não precisa confiar em uma frase. Ele pode abrir.</p>
      <h2>O que já foi construído</h2>
      <p>São 100 repositórios públicos, 50 deles projetos funcionais. O ecossistema inclui o KodaGrid, as 53 ferramentas gratuitas, o mostruário com 50 modelos de site e o Garimpo.</p>
    </div>    <aside class="reveal">
      <div class="metrics" style="grid-template-columns:1fr 1fr">
        <div class="metric"><b>100</b><span>repositórios públicos</span></div>
        <div class="metric"><b>50</b><span>projetos funcionais</span></div>
        <div class="metric"><b>53</b><span>ferramentas gratuitas</span></div>
        <div class="metric"><b>50</b><span>modelos de site</span></div>
      </div>
    </aside>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Como trabalha</p>
      <h2>Quatro decisões que não mudam.</h2>
    </div>
    <div class="process">
      <div class="process-step reveal"><div class="mono">Evidência</div><h3>Mostrar, não prometer</h3><p>O projeto vem com link, repositório ou número. Sem métrica inventada.</p></div>
      <div class="process-step reveal"><div class="mono">Escopo</div><h3>Fechar antes de começar</h3><p>Entregáveis, prazo e valor por escrito. O que não entra também fica dito.</p></div>
      <div class="process-step reveal"><div class="mono">Propriedade</div><h3>O código é seu</h3><p>Repositório, arquivos e credenciais no seu nome. Sem dependência de uma pessoa.</p></div>
      <div class="process-step reveal"><div class="mono">Suporte</div><h3>Continuar depois</h3><p>Treinamento e suporte. O projeto não termina no dia da entrega.</p></div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="reveal" style="border:1px solid var(--border-strong);border-radius:var(--radius-lg);background:linear-gradient(180deg,var(--gold-soft),transparent 46%),var(--surface);padding:clamp(28px,5vw,56px)">
      <div class="between">
        <div style="max-width:56ch">
          <p class="eyebrow">Contato</p>
          <h2>Vamos conversar?</h2>
          <p class="lead" style="margin-top:14px">O diagnóstico é gratuito e não compromete orçamento.</p>
        </div>
        <div class="row">
          <a class="btn btn-primary" href="diagnostico.html">Começar diagnóstico</a>
          <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
</section>`;

write("sobre.html", layout({
  title: "Sobre · KODAROS",
  description: "A Kodaros é um ecossistema de tecnologia. 100 repositórios públicos, 50 projetos funcionais e produtos no ar.",
  active: "sobre.html",
  body: aboutBody
}));

/* ── biblioteca ──────────────────────────────────────────────── */
const booksBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Biblioteca</p>
    <p class="eyebrow">Biblioteca</p>
    <h1>Oito e-books. Um problema cada.</h1>
    <p class="lead">De tráfego a gestão. Escolha pelo nível e comece pelo que dói mais hoje. A entrega é imediata pela Hotmart, com acesso vitalício.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="filters" id="bookFilters" role="group" aria-label="Filtrar e-books por nível">
      <button class="filter-btn" type="button" data-filter="todos" aria-pressed="true">Todos</button>
      <button class="filter-btn" type="button" data-filter="iniciantes" aria-pressed="false">Iniciante</button>
      <button class="filter-btn" type="button" data-filter="intermediario" aria-pressed="false">Intermediário</button>
      <button class="filter-btn" type="button" data-filter="avancado" aria-pressed="false">Avançado</button>
    </div>
    <div class="book-grid" id="books">
      ${books.map(book => `<article class="book reveal" data-level="${book.level}">
        <div class="book-cover"><img src="assets/img/${book.cover}" alt="Capa do e-book ${book.title}" loading="lazy"></div>
        <div class="book-body">
          <span class="book-badge">${book.badge}</span>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-desc">${book.desc}</p>
          <div class="book-price"><span class="old">${book.old}</span><span class="now">${book.now}</span></div>
          <a class="btn btn-secondary" href="${book.href}" target="_blank" rel="noopener">Comprar e-book</a>
        </div>
      </article>`).join("\n      ")}
    </div>
    <p class="fineprint" style="margin-top:28px">Pagamento processado pela Hotmart. A Kodaros não guarda dados do seu cartão. A entrega é feita no mesmo instante após a confirmação.</p>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Diagnóstico</p>
      <h2>Não sabe por onde começar?</h2>
      <p class="lead" style="margin-top:16px">Três perguntas sobre o seu cenário. No fim você recebe uma recomendação de e-book e um e-book de presente.</p>
      <a class="btn btn-primary" style="margin-top:24px" href="diagnostico.html">Fazer o diagnóstico</a>
    </div>
    <div class="reveal">
      <img src="assets/img/ebook-cover.webp" alt="Capa do e-book Do Zero ao Patrimônio" width="280" height="396" loading="lazy" style="max-width:240px;margin-inline:auto;border-radius:10px;border:1px solid var(--border)">
    </div>
  </div>
</section>`;

write("biblioteca.html", layout({
  title: "Biblioteca · KODAROS",
  description: "Oito e-books de tráfego, vendas, gestão, finanças, site e atendimento. Entrega imediata pela Hotmart.",
  active: "biblioteca.html",
  body: booksBody
}));

/* ── diagnóstico ─────────────────────────────────────────────── */
const quizBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Diagnóstico</p>
    <p class="eyebrow">Diagnóstico gratuito</p>
    <h1>Onde o seu crescimento está travando.</h1>
    <p class="lead">Três perguntas sobre o seu cenário. No fim você recebe um retrato do gargalo, uma recomendação de serviço e um e-book de presente.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="quiz" id="quiz">
      <div class="quiz-bar"><span>KODAROS</span><span>Diagnóstico gratuito</span></div>
      <div class="quiz-body">
        <section class="quiz-step is-active" id="quizProfile">
          <h2>Onde você se encaixa?</h2>
          <p class="quiz-sub">A recomendação muda conforme o seu momento. Escolha o que mais se parece com você.</p>
          <div class="profiles" role="radiogroup" aria-label="Seu perfil">
            <button class="profile" type="button" role="radio" aria-checked="false" data-profile="empresa">
              <strong>Já tenho uma empresa</strong>
              <small>Quero escalar, organizar e automatizar.</small>
            </button>
            <button class="profile" type="button" role="radio" aria-checked="false" data-profile="iniciante">
              <strong>Estou começando</strong>
              <small>Quero o passo a passo certo.</small>
            </button>
            <button class="profile" type="button" role="radio" aria-checked="false" data-profile="outros">
              <strong>Outro cenário</strong>
              <small>Renda extra, transição ou curiosidade.</small>
            </button>
          </div>
        </section>

        <section class="quiz-step" id="quizQuestion">
          <div class="progress"><span id="quizProgress"></span></div>
          <p class="q-label" id="quizLabel">Diagnóstico gratuito</p>
          <h2 class="q-title" id="quizTitle"></h2>
          <p class="q-sub" id="quizSub"></p>
          <ul class="options" id="quizOptions" role="radiogroup" aria-label="Selecione uma resposta"></ul>
          <p class="feedback" id="quizFeedback" aria-live="polite"></p>
          <div class="quiz-actions">
            <button class="btn btn-ghost" id="quizBack" type="button" hidden>Voltar</button>
            <button class="btn btn-primary" id="quizNext" type="button" disabled>Continuar</button>
          </div>
        </section>

        <section class="quiz-step" id="quizResult">
          <h2 style="text-align:center">Isto é o que as suas respostas revelaram</h2>
          <div class="result" style="margin-top:24px">
            <div id="diagnosisText"></div>
            <ul id="diagnosisList"></ul>
          </div>
          <div class="result-grid">
            <div class="result-card" id="recService"></div>
            <div class="result-card" id="recBook"></div>
          </div>
          <div class="result-card" style="margin-top:16px;flex-direction:row;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
            <div>
              <span class="mono">E-book de presente</span>
              <h3>Do Zero ao Patrimônio</h3>
              <p>42 páginas sobre empreendedorismo, transformação digital e estratégias para construir patrimônio.</p>
            </div>
            <a class="btn btn-secondary" href="assets/img/do-zero-ao-patrimonio.pdf" download="Kodaros-Do-Zero-ao-Patrimonio.pdf">Baixar PDF</a>
          </div>
          <div class="quiz-actions" style="margin-top:28px">
            <button class="btn btn-ghost" id="quizRestart" type="button">Refazer diagnóstico</button>
            <div class="row">
              <a class="btn btn-secondary" href="biblioteca.html">Ver biblioteca</a>
              <a class="btn btn-wa" href="${WHATSAPP}" target="_blank" rel="noopener">Falar com a Kodaros</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <p class="fineprint" style="margin-top:20px;text-align:center">Sem cadastro. Sem compromisso. O diagnóstico não envia seus dados para nenhum servidor.</p>
  </div>
</section>`;

write("diagnostico.html", layout({
  title: "Diagnóstico gratuito · KODAROS",
  description: "Três perguntas para mapear o gargalo do seu negócio. No fim, recomendação de serviço e e-book de presente.",
  active: "diagnostico.html",
  body: quizBody
}));

/* ── contato ─────────────────────────────────────────────────── */
const contactBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Contato</p>
    <p class="eyebrow">Contato</p>
    <h1>Fale com a Kodaros.</h1>
    <p class="lead">Conte o que precisa resolver. A conversa começa com o diagnóstico e segue para uma proposta com escopo, prazo e valor.</p>
  </div>
</section>
<section class="section">
  <div class="container contact-grid">
    <div class="reveal">
      <p class="eyebrow">Canais diretos</p>
      <h2>Sem fila de chat.</h2>
      <p class="lead" style="margin-top:16px">Resposta em até 24h úteis. Você fala com quem constrói e mantém o projeto.</p>
      <ul class="channels">
        <li><a href="${WHATSAPP}" target="_blank" rel="noopener">
          <span class="channel-icon">${icons.whatsapp}</span>
          <span><span class="channel-label">WhatsApp</span><span class="channel-sub">Resposta em até 24h úteis</span></span>
          <span class="channel-go">→</span>
        </a></li>
        <li><a href="mailto:${EMAIL}">
          <span class="channel-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.4l8 5.2 8-5.2V6H4zm16 12V8.5l-8 5.2-8-5.2V18h16z"/></svg></span>
          <span><span class="channel-label">E-mail</span><span class="channel-sub">${EMAIL}</span></span>
          <span class="channel-go">→</span>
        </a></li>
        <li><a href="${INSTAGRAM}" target="_blank" rel="noopener">
          <span class="channel-icon">${icons.instagram}</span>
          <span><span class="channel-label">Instagram</span><span class="channel-sub">@kodaros01</span></span>
          <span class="channel-go">→</span>
        </a></li>
        <li><a href="${LINKEDIN}" target="_blank" rel="noopener">
          <span class="channel-icon">${icons.linkedin}</span>
          <span><span class="channel-label">LinkedIn</span><span class="channel-sub">Kelvin Oliveira</span></span>
          <span class="channel-go">→</span>
        </a></li>
      </ul>
    </div>
    <div class="reveal">
      <form class="form" id="contactForm" novalidate>
        <div class="form-grid">
          <div class="field"><label for="cf-name">Nome</label><input class="input" id="cf-name" type="text" placeholder="Seu nome" required autocomplete="name"></div>
          <div class="field"><label for="cf-email">E-mail</label><input class="input" id="cf-email" type="email" placeholder="seu@email.com" required autocomplete="email"></div>
        </div>
        <div class="field" style="margin-top:18px"><label for="cf-company">Empresa</label><input class="input" id="cf-company" type="text" placeholder="Nome da empresa, se houver" autocomplete="organization"></div>
        <div class="field"><label for="cf-service">Serviço</label>
          <select class="select" id="cf-service">
            <option value="">Ainda não sei</option>
            <option>Sites e landing pages</option>
            <option>Automações</option>
            <option>Bots e agentes</option>
            <option>Sistemas e apps</option>
            <option>Marketing</option>
          </select>
        </div>
        <div class="field"><label for="cf-msg">Mensagem</label><textarea class="textarea" id="cf-msg" rows="6" placeholder="O que você precisa resolver?" required></textarea></div>
        <input class="hp" type="text" name="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <label class="check" for="cf-consent">
          <input id="cf-consent" type="checkbox">
          <span>Li a <a href="privacidade.html" style="color:var(--gold-light)">Política de Privacidade</a> e autorizo o contato.</span>
        </label>
        <button class="btn btn-wa btn-wide" type="submit">Abrir conversa no WhatsApp</button>
        <p class="form-status" id="formStatus" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>
<section class="section">
  <div class="container split-2">
    <div class="reveal">
      <p class="eyebrow">Depois do contato</p>
      <h2>O que acontece.</h2>
    </div>
    <div class="reveal">
      <div class="process" style="border-top:0">
        <div class="process-step"><div class="mono">Conversa</div><h3>Diagnóstico</h3><p>Você conta o problema. A Kodaros faz as perguntas certas.</p></div>
        <div class="process-step"><div class="mono">Proposta</div><h3>Escopo</h3><p>Entregáveis, prazo e valor por escrito.</p></div>
        <div class="process-step"><div class="mono">Execução</div><h3>Construção</h3><p>Etapas com revisão e código versionado.</p></div>
        <div class="process-step"><div class="mono">Suporte</div><h3>Depois</h3><p>Deploy, treinamento e suporte.</p></div>
      </div>
    </div>
  </div>
</section>`;

write("contato.html", layout({
  title: "Contato · KODAROS",
  description: "Fale com a Kodaros pelo WhatsApp, e-mail, Instagram ou LinkedIn. Resposta em até 24h úteis.",
  active: "contato.html",
  body: contactBody
}));

/* ── privacidade ─────────────────────────────────────────────── */
const privacyBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Privacidade</p>
    <h1>Política de Privacidade</h1>
    <p class="lead">Última atualização: 16 de novembro de 2026.</p>
  </div>
</section>
<section class="section">
  <div class="container prose">
    <h2>Quem é o responsável</h2>
    <p>A Kodaros é um ecossistema de tecnologia mantido por Kelvin Rebelo de Oliveira. Para questões de privacidade, escreva para <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
    <h2>O que é coletado</h2>
    <p>O site não pede cadastro. O formulário de contato coleta nome, e-mail, empresa, serviço e mensagem, enviados por você ao abrir a conversa no WhatsApp. O diagnóstico é calculado no seu navegador e não envia respostas para um servidor.</p>
    <p>O site guarda preferências locais no seu navegador, como o filtro da biblioteca e o estado do popup de WhatsApp. Esses dados ficam no seu dispositivo e podem ser apagados nas configurações do navegador.</p>
    <h2>Para que os dados são usados</h2>
    <p>Os dados enviados pelo formulário são usados para responder à sua mensagem, preparar uma proposta e manter o contato do projeto. Não são vendidos nem usados para publicidade de terceiros.</p>
    <h2>Base legal</h2>
    <p>O contato é tratado com base no seu consentimento, dado ao enviar a mensagem, e na execução de um procedimento pré-contratual quando você pede um orçamento. Você pode retirar o consentimento a qualquer momento.</p>
    <h2>Armazenamento</h2>
    <p>As mensagens ficam no WhatsApp e no e-mail da Kodaros pelo tempo necessário ao atendimento e ao eventual projeto. Preferências locais ficam no seu navegador até serem apagadas.</p>
    <h2>Compartilhamento</h2>
    <p>A entrega de e-books e o pagamento são processados pela Hotmart, que tem a sua própria política de privacidade. A Kodaros não recebe os dados do seu cartão.</p>
    <p>O site usa fontes do Google Fonts. O carregamento das fontes faz uma requisição ao Google, que pode registrar dados técnicos como o seu endereço IP. Se preferir, as fontes podem ser servidas localmente.</p>
    <h2>Seus direitos</h2>
    <p>Você pode pedir acesso, correção, exclusão ou revogação do consentimento. Escreva para <a href="mailto:${EMAIL}">${EMAIL}</a> com o assunto "Privacidade". A resposta é dada em até 15 dias.</p>
    <h2>Segurança</h2>
    <p>O site não tem área de login e não guarda senhas. O acesso ao e-mail e ao WhatsApp é protegido pelas configurações da conta. O código do site é estático e pode ser auditado.</p>
    <h2>Alterações</h2>
    <p>Esta política pode ser atualizada. A data no topo da página indica a última revisão. Mudanças relevantes são avisadas no site.</p>
  </div>
</section>`;

write("privacidade.html", layout({
  title: "Política de Privacidade · KODAROS",
  description: "Como a Kodaros trata dados pessoais, preferências locais e mensagens de contato.",
  active: "",
  body: privacyBody
}));

/* ── termos ──────────────────────────────────────────────────── */
const termsBody = `
<section class="page-hero">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / Termos</p>
    <h1>Termos de Uso</h1>
    <p class="lead">Última atualização: 16 de novembro de 2026.</p>
  </div>
</section>
<section class="section">
  <div class="container prose">
    <h2>Aceitação</h2>
    <p>Ao usar este site, você concorda com estes termos. Se não concordar, não use o site. Estes termos se aplicam ao site da Kodaros e não substituem um contrato de prestação de serviço, quando houver.</p>
    <h2>O que a Kodaros oferece</h2>
    <p>A Kodaros presta serviços de sites, landing pages, automações, bots, agentes de IA, sistemas sob medida, software desktop e marketing. Cada projeto tem escopo, prazo e valor definidos em proposta própria.</p>
    <h2>Orçamento e contratação</h2>
    <p>O diagnóstico é gratuito e não compromete orçamento. A proposta é válida pelo prazo informado. A contratação só existe depois do aceite por escrito. O pagamento é dividido em etapas, conforme o avanço do projeto.</p>
    <h2>Propriedade intelectual</h2>
    <p>O conteúdo deste site, os textos, as marcas, os e-books, os produtos e o código são da Kodaros ou de seus respectivos autores. A entrega de um projeto transfere ao contratante os arquivos e o código produzidos para ele, conforme o escopo assinado.</p>
    <p>O uso comercial dos e-books segue as regras da Hotmart e da própria obra. A revenda ou redistribuição não autorizada não é permitida.</p>
    <h2>Uso do site</h2>
    <p>É proibido usar o site para fins ilegais, tentar burlar a segurança, raspar conteúdo em massa ou interferir na operação. O uso do diagnóstico e das ferramentas é pessoal e gratuito.</p>
    <h2>Limitação de responsabilidade</h2>
    <p>O site é oferecido como está. A Kodaros não garante disponibilidade ininterrupta e não responde por danos indiretos decorrentes do uso. A responsabilidade por projeto contratado segue o contrato assinado.</p>
    <h2>Links externos</h2>
    <p>O site aponta para produtos e serviços operados por terceiros, como Hotmart, GitHub, Instagram e LinkedIn. O uso desses serviços segue as regras de cada um.</p>
    <h2>Privacidade</h2>
    <p>O tratamento de dados segue a <a href="privacidade.html">Política de Privacidade</a>.</p>
    <h2>Lei aplicável</h2>
    <p>Estes termos são regidos pela legislação brasileira. Eventuais conflitos são resolvidos no foro do domicílio do responsável, salvo disposição legal em contrário.</p>
    <h2>Contato</h2>
    <p>Dúvidas: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
  </div>
</section>`;

write("termos.html", layout({
  title: "Termos de Uso · KODAROS",
  description: "Termos de uso do site e dos serviços da Kodaros.",
  active: "",
  body: termsBody
}));

/* ── 404 ─────────────────────────────────────────────────────── */
const notFoundBody = `
<section class="page-hero" style="min-height:56vh;display:flex;align-items:center">
  <div class="container">
    <p class="breadcrumb"><a href="index.html">Início</a> / 404</p>
    <p class="eyebrow">Página não encontrada</p>
    <h1>Este caminho não existe.</h1>
    <p class="lead">O endereço pode ter mudado. Volte para a home ou fale com a Kodaros.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="index.html">Voltar para a home</a>
      <a class="btn btn-secondary" href="contato.html">Falar com a Kodaros</a>
    </div>
  </div>
</section>`;

write("404.html", layout({
  title: "Página não encontrada · KODAROS",
  description: "Página não encontrada.",
  active: "",
  body: notFoundBody
}));

/* ── sitemap, robots, manifest ───────────────────────────────── */
const sitemapPages = [
  "", "servicos/index.html", ...services.map(s => `servicos/${s.slug}.html`),
  "projetos.html", "planos.html", "sobre.html", "biblioteca.html",
  "diagnostico.html", "contato.html", "privacidade.html", "termos.html"
];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map(p => `  <url><loc>${URL}/${p}</loc><changefreq>${p === "" ? "weekly" : "monthly"}</changefreq><priority>${p === "" ? "1.0" : "0.7"}</priority></url>`).join("\n")}
</urlset>`);

write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${URL}/sitemap.xml
`);

write("site.webmanifest", JSON.stringify({
  name: "KODAROS · tecnologia, conteúdo e engenharia",
  short_name: "KODAROS",
  description: "Sites, automações, bots, agentes, sistemas e software sob medida.",
  start_url: "./index.html",
  scope: "./",
  display: "standalone",
  background_color: "#070709",
  theme_color: "#070709",
  lang: "pt-BR",
  icons: [
    { src: "assets/img/favicon-192.png", sizes: "192x192", type: "image/png" },
    { src: "assets/img/favicon-512.png", sizes: "512x512", type: "image/png" }
  ]
}, null, 2));

write("_src/README.md", `# Kodaros · build

O site é HTML estático. A raiz é o diretório \`kodaros-site\`. Abra \`index.html\`.

Para reconstruir as páginas depois de editar \`_src/build.mjs\`:

\`\`\`powershell
node _src/build.mjs
\`\`\`

Tudo sai em \`../\` em relação a \`_src\`. Os arquivos gerados são \`index.html\`, \`servicos/*.html\`, \`projetos.html\`, \`planos.html\`, \`sobre.html\`, \`biblioteca.html\`, \`diagnostico.html\`, \`contato.html\`, \`privacidade.html\`, \`termos.html\`, \`404.html\`, \`sitemap.xml\`, \`robots.txt\` e \`site.webmanifest\`.

O domínio usado no sitemap é \`https://kodaros.com.br\`. Troque essa constante antes de publicar se o domínio for outro.
`);

console.log("Build concluído.");










