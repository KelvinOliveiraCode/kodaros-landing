// PLATAFORMA KODAROS — Script unificado
// Navbar + Reveal + Biblioteca + Diagnóstico
document.addEventListener('DOMContentLoaded', function(){

  // NAVBAR
  (function initNavbar(){
    const navbar = document.getElementById('navbar');
    if(!navbar) return;
    let lastY = window.pageYOffset, ticking=false;
    function h(){
      const y = window.pageYOffset;
      if(y>30) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
      navbar.classList.add('visible'); navbar.classList.remove('hidden');
      ticking=false;
    }
    window.addEventListener('scroll', ()=>{ if(!ticking){ requestAnimationFrame(h); ticking=true; } }, {passive:true});
    h();
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if(toggle&&menu){
      function sync(exp){
        toggle.setAttribute('aria-expanded', exp?'true':'false');
        const s = toggle.querySelectorAll('span');
        if(exp){ s[0].style.transform='rotate(45deg) translate(5px,5px)'; s[1].style.opacity='0'; s[2].style.transform='rotate(-45deg) translate(5px,-5px)'; }
        else{ s[0].style.transform='none'; s[1].style.opacity='1'; s[2].style.transform='none'; }
      }
      toggle.addEventListener('click', ()=>{ const o=!menu.classList.contains('active'); menu.classList.toggle('active'); sync(o); });
      menu.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click', ()=>{ menu.classList.remove('active'); sync(false); }));
    }
  })();

  // SMOOTH SCROLL (ignora abas principais, que têm handler próprio)
  (function(){
    const nav=document.getElementById('navbar');
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href=this.getAttribute('href'); if(href==='#') return;
        const clean=href.replace('#','');
        if(['biblioteca','diagnostico','softwares','sites','videos'].includes(clean)) return; // deixa o handler das abas cuidar
        const t=document.querySelector(href); if(t){ e.preventDefault(); const h=nav?nav.offsetHeight:0; const p=t.getBoundingClientRect().top+window.pageYOffset-h-18; window.scrollTo({top:p,behavior:'smooth'}); }
      });
    });
  })();

  // SCROLL REVEAL (stagger por fileira)
  (function(){
    const els=document.querySelectorAll('.section-header, .stoa-card, .why-card, .testimonial-card, .contact-channel, .ebook-card, .software-card, .tool, .roteiro-row, .hero-proof, .ficha');
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          const sib=[...ent.target.parentElement.children].filter(c=>c.classList.contains(ent.target.classList[0]));
          const idx=Math.max(0, sib.indexOf(ent.target));
          ent.target.style.transitionDelay = (Math.min(idx,6)*0.09)+'s';
          ent.target.classList.add('active');
          obs.unobserve(ent.target);
        }
      });
    },{threshold:0.08, rootMargin:'0px 0px -40px 0px'});
    els.forEach(el=>{ el.classList.add('reveal'); obs.observe(el); });
  })();

  // ACTIVE LINKS
  (function(){
    const secs=document.querySelectorAll('section[id]');
    const links=document.querySelectorAll('.nav-link');
    function set(){
      const pos=window.pageYOffset+180;
      secs.forEach(sec=>{
        const top=sec.offsetTop, h=sec.offsetHeight, id=sec.getAttribute('id');
        if(pos>=top && pos<top+h){ links.forEach(l=>{ l.classList.remove('active'); const href=l.getAttribute('href')||''; if(href==='#'+id || href==='#'+id.replace(/^panel-/,'')) l.classList.add('active'); }); }
      });
    }
    let t=false; window.addEventListener('scroll', ()=>{ if(!t){ requestAnimationFrame(()=>{ set(); t=false; }); t=true; } }, {passive:true});
    set();
  })();

  // footer year
  const y=document.getElementById('footer-year'); if(y) y.textContent=new Date().getFullYear();
});

// BIBLIOTECA filtro
(function(){
  const filter=document.getElementById('ebook-filter');
  if(!filter) return;
  const cards=document.querySelectorAll('.ebooks-grid .ebook-card');
  function apply(f){
    cards.forEach(c=>{
      const m=(f==='all')||(c.dataset.class===f);
      c.classList.toggle('hide', !m);
    });
  }
  filter.querySelectorAll('.ebook-filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filter.querySelectorAll('.ebook-filter-btn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
      apply(btn.dataset.filter);
      try{ localStorage.setItem('kodaros_ebook_filter', btn.dataset.filter);}catch(e){}
    });
  });
  try{
    const s=localStorage.getItem('kodaros_ebook_filter');
    if(s&&filter.querySelector('[data-filter="'+s+'"]')){ filter.querySelectorAll('.ebook-filter-btn').forEach(b=>b.classList.remove('active')); const t=filter.querySelector('[data-filter="'+s+'"]'); t.classList.add('active'); t.setAttribute('aria-pressed','true'); apply(s); }
  }catch(e){}
})();

// NOTIFY + CONTACT
function handleNotify(e){
  e.preventDefault();
  const form=e.target;
  if(form.querySelector('[name="hp"]')?.value) return false;
  const email=form.querySelector('input[type="email"]')?.value.trim();
  const topic=form.dataset.notify||'geral';
  const msg=form.querySelector('.notify-msg');
  if(!email||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ if(msg) msg.textContent='Informe um e-mail válido.'; return false; }
  try{ const k='kodaros_notify_'+topic; const arr=JSON.parse(localStorage.getItem(k)||'[]'); if(!arr.includes(email)){ arr.push(email); localStorage.setItem(k, JSON.stringify(arr)); } }catch(_){}
  if(msg) msg.textContent='Obrigado! Avisaremos em '+email+'.';
  form.reset();
  setTimeout(()=>{ window.location.href='mailto:kodaros01@gmail.com?subject=Avise-me '+topic+'&body=Quero ser avisado em '+encodeURIComponent(email); }, 700);
  return false;
}
function waLink(text){ return 'https://wa.me/559192094504?text='+encodeURIComponent(text); }
function handleContact(e){
  e.preventDefault();
  const form=e.target;
  if(form.querySelector('[name="hp"]')?.value) return false;
  const name=document.getElementById('cf-name')?.value.trim();
  const email=document.getElementById('cf-email')?.value.trim();
  const m=document.getElementById('cf-msg')?.value.trim();
  const status=document.getElementById('cf-msg-status');
  if(!name||!email||!m){ if(status) status.textContent='Preencha todos os campos.'; return false; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ if(status) status.textContent='E-mail inválido.'; return false; }
  const msg='Contato pelo site\n\nNome: '+name+'\nE-mail: '+email+'\n\nMensagem:\n'+m;
  window.location.href=waLink(msg);
  if(status) status.textContent='Abrindo o WhatsApp com sua mensagem... se não abrir, use o botão verde no canto da tela.';
  form.reset(); return false;
}

// PLATFORM TABS — Biblioteca / Ferramentas / Diagnóstico
(function(){
  const tabs=document.querySelectorAll('.platform-tab');
  const panels=document.querySelectorAll('.platform-panel');
  if(!tabs.length) return;
  function activate(target){
    tabs.forEach(b=>{
      const on=b.dataset.target===target;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on?'true':'false');
      b.tabIndex = on ? 0 : -1;
    });
    panels.forEach(p=>{
      const on=p.id==='panel-'+target;
      if(on){ p.hidden=false; p.classList.add('active'); }
      else { p.hidden=true; p.classList.remove('active'); }
    });
    // Garante que o conteúdo do painel ativado fique visível
    // (elementos .reveal dentro de painel hidden não disparam o IntersectionObserver)
    const activePanel=document.getElementById('panel-'+target);
    if(activePanel){
      activePanel.querySelectorAll('.reveal:not(.active)').forEach(el=>el.classList.add('active'));
    }
    if(location.hash!=='#'+target) history.replaceState(null,'','#'+target);
    const explorar=document.getElementById('explorar');
    // Sempre rola até as abas ao trocar de painel (footer ou tabs)
    if(explorar){
      const top = explorar.getBoundingClientRect().top + window.pageYOffset - (document.getElementById('navbar')?.offsetHeight || 0) - 12;
      window.scrollTo({top, behavior:'smooth'});
    }
  }
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=>activate(btn.dataset.target));
    btn.addEventListener('keydown', (e)=>{
      const i=Array.prototype.indexOf.call(tabs, btn);
      let j=null;
      if(e.key==='ArrowRight') j=(i+1)%tabs.length;
      else if(e.key==='ArrowLeft') j=(i-1+tabs.length)%tabs.length;
      else if(e.key==='Home') j=0;
      else if(e.key==='End') j=tabs.length-1;
      if(j!==null){ e.preventDefault(); tabs[j].focus(); activate(tabs[j].dataset.target); }
    });
  });
  tabs.forEach(b=>{ b.tabIndex = b.classList.contains('active') ? 0 : -1; });
  const hash=location.hash.replace('#','');
  if(['biblioteca','diagnostico','softwares','sites','videos'].includes(hash)) activate(hash);
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    const href=a.getAttribute('href').replace('#','');
    if(['biblioteca','diagnostico','softwares','sites','videos'].includes(href)){
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        activate(href);
      });
    }
  });
  window.addEventListener('hashchange', ()=>{
    const h=location.hash.replace('#','');
    if(['biblioteca','diagnostico','softwares','sites','videos'].includes(h)) activate(h);
  });
})();

/* KODAROS — Funil de diagnóstico
   Fluxo: abertura → perfil → 3 perguntas adaptadas ao perfil → diagnóstico + brinde + vitrine 1+2 → site principal */

(function () {
    "use strict";

    var state = { profile: null, qIndex: 0, answers: [] };
    var steps = Array.prototype.slice.call(document.querySelectorAll(".step"));
    var ADVANCE_MS = 1000;
    var COVER_BASE = "./";

    /* ---------- CATÁLOGO ESPELHADO DO SITE PRINCIPAL ---------- */
    var PRODUCTS = {
        lancamento: {
            id: "lancamento", badge: "Intermediário",
            title: "Lançamento Milionário",
            desc: "O método para vender cursos e produtos digitais: do planejamento à execução de lançamentos que convertem.",
            old: "R$ 47,00", now: "R$ 12,99",
            cover: COVER_BASE + "livro3.webp",
            url: "https://pay.hotmart.com/R106895415M?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        trafego: {
            id: "trafego", badge: "Intermediário",
            title: "Tráfego Que Vende",
            desc: "Domine Facebook e Google Ads e crie campanhas pagas que geram retorno consistente e escalável.",
            old: "R$ 47,00", now: "R$ 12,99",
            cover: COVER_BASE + "livro1.webp",
            url: "https://pay.hotmart.com/D106894870O?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        venda: {
            id: "venda", badge: "Iniciante",
            title: "Venda Mais Hoje",
            desc: "Marketing e vendas diretos, sem enrolação: táticas práticas para aumentar suas vendas imediatamente.",
            old: "R$ 47,00", now: "R$ 12,99",
            cover: COVER_BASE + "livro2.webp",
            url: "https://pay.hotmart.com/R106895345D?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        gestao: {
            id: "gestao", badge: "Iniciante",
            title: "Os 10 Pilares da Gestão Empresarial",
            desc: "10 pilares para organizar e crescer sua empresa com controle e decisões baseadas em dados.",
            old: "R$ 67,00", now: "R$ 22,99",
            cover: COVER_BASE + "livro-gestao.webp",
            url: "https://pay.hotmart.com/S107016677T?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        financeiro: {
            id: "financeiro", badge: "Iniciante",
            title: "Os 10 Pilares do Controle Financeiro",
            desc: "Organize o fluxo de caixa, a formação de preços e reduza custos para lucrar com previsibilidade.",
            old: "R$ 67,00", now: "R$ 22,99",
            cover: COVER_BASE + "livro-financeiro.webp",
            url: "https://pay.hotmart.com/E107016796K?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        site: {
            id: "site", badge: "Intermediário",
            title: "Use Seu Site Para Escalar Sua Empresa",
            desc: "Transforme seu site em máquina de vendas com SEO, captura de leads e automação.",
            old: "R$ 67,00", now: "R$ 22,99",
            cover: COVER_BASE + "livro-site.webp",
            url: "https://pay.hotmart.com/Y107016734X?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        reclamacoes: {
            id: "reclamacoes", badge: "Iniciante",
            title: "Transforme Reclamações em Vendas",
            desc: "O método para virar reclamações em fidelização e construir uma cultura centrada no cliente.",
            old: "R$ 67,00", now: "R$ 22,99",
            cover: COVER_BASE + "livro-reclamacoes.webp",
            url: "https://pay.hotmart.com/G107016779V?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        },
        arquitetura: {
            id: "arquitetura", badge: "Avançado",
            title: "Arquitetura de Aquisição",
            desc: "O sistema operacional de tráfego pago e funis da KODAROS. Framework A.P.E.R.T.O., 3 calculadoras e checklists.",
            old: "R$ 247,00", now: "R$ 197,00",
            cover: COVER_BASE + "arquitetura-capa.webp",
            url: "https://pay.hotmart.com/B107295159O?utm_source=funil&utm_medium=quiz&utm_campaign=diagnostico"
        }
    };

    /* ---------- PERGUNTAS POR PERFIL ---------- */
    var QUESTIONS = {
        empresa: [
            {
                q: "Quanto tempo do seu dia vai para tarefas repetitivas?",
                sub: "Responder clientes, postar nas redes, mandar orçamento, cobrar pagamento…",
                options: [
                    { v: "3h+", t: "Mais de 3 horas por dia", fb: "Mais de 3 horas por dia em tarefas repetitivas é tempo que não volta." },
                    { v: "1-3h", t: "Entre 1 e 3 horas", fb: "Entre 1 e 3 horas diárias somam semanas inteiras de trabalho manual por ano." },
                    { v: "<1h", t: "Menos de 1 hora", fb: "Menos de 1 hora já é bom sinal — mas cada minuto salvo vira margem." },
                    { v: "auto", t: "Quase nada — aqui muita coisa já é automática", fb: "Você já entendeu o jogo: o que é manual, escala mal." }
                ]
            },
            {
                q: "Hoje, o que mais trava o seu crescimento?",
                sub: "Seja sincero — ninguém está olhando.",
                options: [
                    { v: "tempo", t: "Falta de tempo pra cuidar de tudo", fb: "Falta de tempo é o sintoma mais comum de processos manuais." },
                    { v: "clientes", t: "Falta de clientes entrando", fb: "Sem presença e sem follow-up automático, a entrada de clientes vira montanha-russa." },
                    { v: "organizacao", t: "Desorganização e processos na cabeça", fb: "Processo que vive na cabeça não escala — e cobra caro pelo esquecimento." },
                    { v: "autoridade", t: "Falta de presença e autoridade digital", fb: "Sem autoridade digital, o cliente compara só preço. Com autoridade, ele escolhe você." }
                ]
            },
            {
                q: "Se um sistema trabalhasse por você 24h por dia, por onde começaria?",
                sub: "",
                options: [
                    { v: "whatsapp", t: "Atendimento e respostas no WhatsApp", fb: "O WhatsApp é onde a venda nasce — e onde ela morre sem resposta rápida." },
                    { v: "redes", t: "Redes sociais e publicação de conteúdo", fb: "Constância nas redes constrói autoridade. O problema nunca é ideia, é rotina." },
                    { v: "followup", t: "Follow-up de clientes e orçamentos", fb: "Grande parte das vendas acontece no follow-up — e é exatamente ele que ninguém tem tempo de fazer." },
                    { v: "tudo", t: "Por tudo — quero escalar de vez", fb: "Quem automatiza tudo não contrai dívida de tempo com o próprio negócio." }
                ]
            }
        ],
        iniciante: [
            {
                q: "Qual é o seu maior desafio ao começar no digital?",
                sub: "O primeiro passo é saber onde dói.",
                options: [
                    { v: "poronde", t: "Não saber por onde começar", fb: "Começar sem mapa é o erro nº 1 — e o mais fácil de corrigir." },
                    { v: "tempo", t: "Ter pouco tempo por dia", fb: "Você não precisa de 8 horas: precisa de um método que caiba na sua rotina." },
                    { v: "medo", t: "Medo de errar na frente dos outros", fb: "Todo mundo que hoje fatura começou errando em público — é parte do caminho." },
                    { v: "tech", t: "Achar que precisa entender de tecnologia", fb: "As ferramentas de hoje fazem o pesado. O que falta é processo, não código." }
                ]
            },
            {
                q: "Em que ponto você está hoje?",
                sub: "Sem julgamento — só clareza.",
                options: [
                    { v: "parado", t: "Ainda não comecei", fb: "Perfeito: começar do zero, começando certo, é vantagem." },
                    { v: "posts", t: "Já posto nas redes, mas sem estratégia", fb: "Postar sem estratégia é correr na esteira: cansa e não sai do lugar." },
                    { v: "vendo", t: "Já vendo algo, mas tudo no manual", fb: "Vender manualmente prova que existe demanda — agora é estrutura para escalar." },
                    { v: "estudo", t: "Estudo muito e pratico pouco", fb: "Conhecimento sem execução vira ansiedade. O segredo é prática guiada." }
                ]
            },
            {
                q: "Se alguém te mostrasse o caminho, o que resolveria primeiro?",
                sub: "",
                options: [
                    { v: "base", t: "Entender o básico do jogo digital", fb: "Base sólida evita meses de tentativa e erro." },
                    { v: "primeiravenda", t: "Fazer a primeira venda", fb: "A primeira venda muda a mentalidade — depois dela, o jogo fica real." },
                    { v: "constancia", t: "Criar constância nas redes", fb: "Constância é o que separa quem aparece de quem desiste na semana 3." },
                    { v: "plano", t: "Ter um plano claro passo a passo", fb: "Com plano, cada dia tem um próximo passo. Sem plano, cada dia é dúvida." }
                ]
            }
        ],
        outros: [
            {
                q: "O que te trouxe até aqui hoje?",
                sub: "Me conta — o diagnóstico se adapta a você.",
                options: [
                    { v: "renda", t: "Quero uma renda extra", fb: "Renda extra bem construída vira renda principal — com método." },
                    { v: "transicao", t: "Quero mudar de área / carreira", fb: "Transição de carreira pro digital é a mais rápida do mercado quando há direção." },
                    { v: "escalar", t: "Já atendo clientes e quero escalar", fb: "Escalar sem estrutura quebra a operação — por isso automação vem primeiro." },
                    { v: "curiosidade", t: "Curiosidade — quero entender o jogo", fb: "Entender o jogo antes de apostar é a decisão mais inteligente." }
                ]
            },
            {
                q: "Qual frase te define melhor neste momento?",
                sub: "",
                options: [
                    { v: "tempopouco", t: "Tenho pouco tempo disponível", fb: "Pouco tempo não é obstáculo: é filtro. O que importa é direção." },
                    { v: "direcao", t: "Tenho tempo, mas falta direção", fb: "Direção transforma horas soltas em progresso composto." },
                    { v: "oquevender", t: "Não sei o que vender", fb: "Você não precisa inventar: precisa mapear o que já resolve bem." },
                    { v: "execucao", t: "Sei o que quero, falta execução", fb: "Execução é músculo — e sistemas são a academia." }
                ]
            },
            {
                q: "Se pudesse resolver uma coisa só este mês, qual seria?",
                sub: "",
                options: [
                    { v: "clareza", t: "Ter clareza do próximo passo", fb: "Clareza é o ativo mais barato e mais negligenciado." },
                    { v: "presenca", t: "Criar presença digital de verdade", fb: "Presença é ativo composto: cada publicação trabalha para sempre." },
                    { v: "vendas", t: "Aumentar minhas vendas", fb: "Venda consistente nasce de processo, não de sorte." },
                    { v: "automatizar", t: "Automatizar o que já faço manualmente", fb: "Automatizar o que existe libera o tempo para o que vem." }
                ]
            }
        ]
    };

    /* ---------- DIAGNÓSTICO POR PERFIL ---------- */
    var DIAG = {
        empresa: {
            intro: function (a) {
                var q1 = {
                    "3h+": "você está gastando <strong>mais de 3 horas por dia</strong> em tarefas que uma máquina faria por você",
                    "1-3h": "você perde <strong>entre 1 e 3 horas por dia</strong> com o que poderia rodar sozinho",
                    "<1h": "você já controla o tempo manual — mas o processo ainda depende de você",
                    "auto": "sua operação já tem automação — o próximo nível é virar estratégia"
                };
                var q2 = {
                    "tempo": "seu gargalo é <strong>tempo</strong>",
                    "clientes": "seu gargalo é <strong>entrada de clientes</strong>",
                    "organizacao": "seu gargalo é <strong>organização</strong>",
                    "autoridade": "seu gargalo é <strong>autoridade digital</strong>"
                };
                var q3 = {
                    "whatsapp": "atendimento automático no WhatsApp, respondendo na hora — inclusive de madrugada",
                    "redes": "publicação de conteúdo agendada e constante, sem depender de memória ou motivação",
                    "followup": "follow-up automático de orçamentos e clientes, para nenhuma venda morrer no esquecimento",
                    "tudo": "atendimento, conteúdo e follow-up rodando juntos, como um time invisível 24h"
                };
                return {
                    text: "Pelas suas respostas, " + (q1[a[0]] || q1["1-3h"]) + ", e " + (q2[a[1]] || q2.tempo) +
                        ". A boa notícia: isso tem solução — e ela começa com o que está no seu e-book.",
                    bullets: [
                        "Prioridade nº 1: " + (q3[a[2]] || q3.tudo) + ".",
                        "Automação não substitui você — ela devolve seu tempo para vender e crescer.",
                        "Quanto antes o sistema assume o repetitivo, mais cedo o negócio trabalha por você."
                    ]
                };
            }
        },
        iniciante: {
            intro: function (a) {
                var q1 = {
                    "poronde": "o seu desafio é <strong>saber por onde começar</strong>",
                    "tempo": "o seu desafio é <strong>falta de tempo</strong>",
                    "medo": "o seu desafio é <strong>medo de errar em público</strong>",
                    "tech": "o seu desafio é <strong>achar que precisa ser técnico</strong>"
                };
                var q2 = {
                    "parado": "você ainda está no marco zero — e isso é vantagem: dá pra começar certo",
                    "posts": "você já produz conteúdo, mas ainda sem estratégia por trás",
                    "vendo": "você já vende — agora falta estrutura para escalar",
                    "estudo": "você acumula teoria e ainda pratica pouco"
                };
                var q3 = {
                    "base": "montar a base: presença, oferta e uma rotina mínima viável",
                    "primeiravenda": "estruturar o caminho direto até a primeira venda",
                    "constancia": "criar um ciclo de constância que caiba na sua semana",
                    "plano": "seguir um plano claro, um passo por dia"
                };
                return {
                    text: "Pelas suas respostas, " + (q1[a[0]] || q1.poronde) + " e " + (q2[a[1]] || q2.parado) +
                        ". Ninguém nasce pronto — o que muda o jogo é começar com método.",
                    bullets: [
                        "Primeiro passo: " + (q3[a[2]] || q3.base) + ".",
                        "Constância vence talento: passos diários pequenos constroem autoridade.",
                        "O e-book abaixo organiza exatamente essa base — do zero ao patrimônio."
                    ]
                };
            }
        },
        outros: {
            intro: function (a) {
                var q1 = {
                    "renda": "você quer <strong>uma renda extra</strong>",
                    "transicao": "você quer <strong>transição de carreira</strong>",
                    "escalar": "você quer <strong>escalar o que já atende</strong>",
                    "curiosidade": "você quer <strong>entender o jogo antes de apostar</strong>"
                };
                var q2 = {
                    "tempopouco": "o seu tempo é curto",
                    "direcao": "o seu tempo existe, mas falta direção",
                    "oquevender": "a sua dúvida é o que vender",
                    "execucao": "a sua lacuna é execução"
                };
                var q3 = {
                    "clareza": "ter clareza do próximo passo",
                    "presenca": "construir presença digital de verdade",
                    "vendas": "aumentar suas vendas",
                    "automatizar": "automatizar o que já faz manualmente"
                };
                return {
                    text: "Pelas suas respostas, " + (q1[a[0]] || q1.curiosidade) + " e " + (q2[a[1]] || q2.direcao) +
                        ". O digital premia quem tem método — não quem tem sorte.",
                    bullets: [
                        "Foco do mês: " + (q3[a[2]] || q3.clareza) + ".",
                        "Autoridade digital é ativo composto: começa pequeno e cresce sozinho.",
                        "O e-book abaixo mostra a base completa — do zero ao patrimônio."
                    ]
                };
            }
        }
    };

    /* ---------- LÓGICA DE RECOMENDAÇÃO 1+2 ---------- */
    function getRecommendation(profile, a) {
        var p = profile || "outros";
        var q2 = a[1], q3 = a[2];
        var primary, sec1, sec2;

        if (p === "empresa") {
            if (q2 === "organizacao") { primary = "gestao"; sec1 = "financeiro"; sec2 = "site"; }
            else if (q2 === "autoridade") { primary = "site"; sec1 = "trafego"; sec2 = "arquitetura"; }
            else if (q2 === "clientes") {
                if (q3 === "redes") { primary = "trafego"; sec1 = "venda"; sec2 = "site"; }
                else if (q3 === "followup") { primary = "venda"; sec1 = "trafego"; sec2 = "reclamacoes"; }
                else { primary = "trafego"; sec1 = "venda"; sec2 = "lancamento"; }
            } else { // tempo
                if (q3 === "whatsapp") { primary = "reclamacoes"; sec1 = "venda"; sec2 = "trafego"; }
                else if (q3 === "followup") { primary = "venda"; sec1 = "reclamacoes"; sec2 = "gestao"; }
                else if (q3 === "tudo") { primary = "arquitetura"; sec1 = "trafego"; sec2 = "gestao"; }
                else { primary = "trafego"; sec1 = "gestao"; sec2 = "venda"; }
            }
        } else if (p === "iniciante") {
            if (q3 === "primeiravenda") { primary = "venda"; sec1 = "lancamento"; sec2 = "trafego"; }
            else if (q3 === "constancia") { primary = "trafego"; sec1 = "lancamento"; sec2 = "site"; }
            else if (q3 === "plano") { primary = "gestao"; sec1 = "lancamento"; sec2 = "venda"; }
            else { // base
                if (q2 === "estudo" || a[0] === "tech") { primary = "lancamento"; sec1 = "gestao"; sec2 = "venda"; }
                else { primary = "lancamento"; sec1 = "venda"; sec2 = "trafego"; }
            }
        } else { // outros
            if (q3 === "presenca") { primary = "site"; sec1 = "trafego"; sec2 = "lancamento"; }
            else if (q3 === "vendas") { primary = "venda"; sec1 = "reclamacoes"; sec2 = "trafego"; }
            else if (q3 === "automatizar") { primary = "trafego"; sec1 = "site"; sec2 = "gestao"; }
            else { // clareza
                if (q2 === "oquevender") { primary = "gestao"; sec1 = "lancamento"; sec2 = "venda"; }
                else { primary = "lancamento"; sec1 = "gestao"; sec2 = "venda"; }
            }
        }
        // garantir unicidade
        var seen = {};
        var list = [];
        [primary, sec1, sec2].forEach(function (id) {
            if (id && !seen[id] && PRODUCTS[id]) { seen[id] = 1; list.push(id); }
        });
        // fallback preenche com best sellers se faltar
        var fallback = ["venda", "trafego", "lancamento"];
        for (var i = 0; list.length < 3 && i < fallback.length; i++) {
            if (!seen[fallback[i]]) { list.push(fallback[i]); seen[fallback[i]] = 1; }
        }
        return { primary: list[0], secondary: [list[1], list[2]] };
    }

    function productCardHTML(id, variant) {
        var p = PRODUCTS[id];
        if (!p) return "";
        var isPrimary = variant === "primary";
        var cls = isPrimary ? "rec-card rec-card-primary" : "rec-card";
        var whyTag = isPrimary ? '<span class="rec-why">COMECE POR AQUI</span>' : "";
        return '' +
            '<article class="' + cls + '">' +
            whyTag +
             '<div class="rec-cover"><img src="' + p.cover + '" alt="" loading="lazy" width="270" height="360"></div>' +
            '<div class="rec-body">' +
            '<span class="rec-badge">' + p.badge + '</span>' +
            '<h3 class="rec-title">' + p.title + '</h3>' +
            '<p class="rec-desc">' + p.desc + '</p>' +
            '<div class="rec-price"><span class="old">' + p.old + '</span><span class="now">' + p.now + '</span></div>' +
            '<a href="' + p.url + '&utm_content=' + id + '" target="_blank" rel="noopener" class="btn ' + (isPrimary ? 'btn-primary' : 'btn-secondary') + ' rec-cta">' +
            (isPrimary ? 'COMPRAR AGORA' : 'Ver no site oficial') +
            '<svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
            '</a>' +
            '</div></article>';
    }

    /* ---------- NAVEGAÇÃO ---------- */
    function goTo(id) {
        steps.forEach(function (s) { s.classList.remove("is-active"); });
        var target = document.getElementById(id);
        if (target) {
            target.classList.add("is-active");
            var funnel = document.getElementById('funnel');
            var nav = document.getElementById('navbar');
            if(funnel){
                var top = funnel.getBoundingClientRect().top + window.pageYOffset - (nav ? nav.offsetHeight : 0) - 24;
                window.scrollTo({ top: top, behavior: "smooth" });
            }
        }
    }

    /* ---------- QUIZ DINÂMICO ---------- */
    function renderQuestion() {
        var list = QUESTIONS[state.profile];
        var item = list[state.qIndex];

        document.getElementById("quiz-progress").style.width = ((state.qIndex + 1) / list.length * 100) + "%";
        document.getElementById("quiz-label").textContent = state.qIndex === list.length - 1
            ? "ÚLTIMA PERGUNTA"
            : "PERGUNTA " + (state.qIndex + 1) + " DE " + list.length;
        document.getElementById("quiz-title").textContent = item.q;
        document.getElementById("quiz-sub").textContent = item.sub || "";

        var fb = document.getElementById("quiz-feedback");
        fb.classList.remove("is-visible");
        fb.textContent = "";

        var box = document.getElementById("quiz-options");
        box.innerHTML = "";
        item.options.forEach(function (opt) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "option" + (opt.highlight ? " option-highlight" : "");
            btn.textContent = opt.t;
            btn.setAttribute("data-value", opt.v);
            btn.addEventListener("click", function () { pick(opt, btn, fb); });
            box.appendChild(btn);
        });
    }

    function pick(opt, btn, fb) {
        var box = document.getElementById("quiz-options");
        Array.prototype.forEach.call(box.children, function (b) { b.classList.remove("is-selected"); });
        btn.classList.add("is-selected");

        state.answers[state.qIndex] = opt.v;

        if (opt.fb) {
            fb.textContent = opt.fb;
            fb.classList.add("is-visible");
        }

        setTimeout(function () {
            if (state.qIndex < QUESTIONS[state.profile].length - 1) {
                state.qIndex++;
                renderQuestion();
                var step = document.getElementById("step-quiz");
                step.classList.remove("is-active");
                void step.offsetWidth;
                step.classList.add("is-active");
            } else {
                buildDiagnosis();
                goTo("step-result");
            }
        }, ADVANCE_MS);
    }

    /* ---------- DIAGNÓSTICO + VITRINE ---------- */
    function buildDiagnosis() {
        var box = document.getElementById("diagnosis");
        if (!box) return;

        var d = (DIAG[state.profile] || DIAG.outros).intro(state.answers);

        var html = "";
        html += '<p class="diagnosis-head">RESUMO DO SEU DIAGNÓSTICO</p>';
        html += '<p class="diagnosis-text">' + d.text + "</p>";
        html += '<ul class="diagnosis-list">' + d.bullets.map(function (b) {
            return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>' + b + "</li>";
        }).join("") + "</ul>";

        box.innerHTML = html;

        var recBox = document.getElementById("rec-grid");
        if (recBox) {
            var rec = getRecommendation(state.profile, state.answers);
            var recHtml = '<div class="divider-oraculo"><span>RECOMENDADO PARA VOCÊ</span></div>';
            recHtml += productCardHTML(rec.primary, "primary");
            rec.secondary.forEach(function (id) { recHtml += productCardHTML(id, "secondary"); });
            recBox.innerHTML = recHtml;
        }
}

    /* ---------- EVENTOS ---------- */
    document.querySelectorAll("[data-next]").forEach(function (btn) {
        btn.addEventListener("click", function () { goTo("step-profile"); });
    });

    document.querySelectorAll(".profile-card").forEach(function (card) {
        card.addEventListener("click", function () {
            document.querySelectorAll(".profile-card").forEach(function (c) { c.classList.remove("is-selected"); });
            card.classList.add("is-selected");
            state.profile = card.getAttribute("data-profile");
            state.qIndex = 0;
            state.answers = [];
            setTimeout(function () {
                renderQuestion();
                goTo("step-quiz");
            }, 450);
        });
    });

    /* ---------- PARTÍCULAS DE FUNDO ---------- */
    (function particles() {
        var canvas = document.getElementById("particles");
        if (!canvas) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var ctx = canvas.getContext("2d");
        var dots = [];
        var COUNT = window.matchMedia('(pointer: coarse)').matches ? 12 : 28;
        var COLORS = ["59,91,254", "197,164,106", "154,163,184"];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();

        for (var i = 0; i < COUNT; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: 0.8 + Math.random() * 2.2,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                c: COLORS[i % COLORS.length],
                o: 0.08 + Math.random() * 0.16
            });
        }

        function frame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach(function (d) {
                d.x += d.vx;
                d.y += d.vy;
                if (d.x < -10) d.x = canvas.width + 10;
                if (d.x > canvas.width + 10) d.x = -10;
                if (d.y < -10) d.y = canvas.height + 10;
                if (d.y > canvas.height + 10) d.y = -10;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(" + d.c + "," + d.o + ")";
                ctx.fill();
            });
            requestAnimationFrame(frame);
        }
        frame();
    })();

    /* ========================================
       GOLDEN PARTICLES — diagonal rise
       ======================================== */
    (function initGoldenParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const ctx = canvas.getContext('2d');
        let dpr = window.devicePixelRatio || 1;
        let W = 0, H = 0, particles = [];
        const COUNT = 90;
        const GOLD = [
            '212,175,106',
            '232,201,154',
            '184,148,79',
            '201,168,92',
        ];
        function rand(a, b) { return a + Math.random() * (b - a); }
        function createParticle() {
            const fromLeft = Math.random() < 0.5;
            return {
                x: fromLeft ? rand(-50, W * 0.25) : rand(W * 0.75, W + 50),
                y: H + rand(0, 80),
                r: rand(0.6, 2.4),
                vx: fromLeft ? rand(0.25, 0.7) : rand(-0.7, -0.25),
                vy: rand(-0.5, -1.2),
                o: rand(0.15, 0.55),
                c: GOLD[(Math.random() * GOLD.length) | 0],
                wobble: rand(0, Math.PI * 2),
                wobbleSpeed: rand(0.005, 0.02),
            };
        }
        function resize() {
            W = window.innerWidth; H = window.innerHeight;
            canvas.width = W * dpr; canvas.height = H * dpr;
            canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            particles = [];
            for (let i = 0; i < COUNT; i++) {
                const p = createParticle();
                p.x = rand(-20, W);
                p.y = rand(0, H);
                particles.push(p);
            }
        }
        function frame() {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => {
                p.wobble += p.wobbleSpeed;
                p.x += p.vx + Math.sin(p.wobble) * 0.3;
                p.y += p.vy;
                p.o -= 0.0004;
                if (p.y < -10 || p.x > W + 20 || p.o <= 0) {
                    Object.assign(p, createParticle());
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + p.c + ',' + p.o.toFixed(3) + ')';
                ctx.fill();
            });
            requestAnimationFrame(frame);
        }
        window.addEventListener('resize', resize);
        resize();
        frame();
    })();
})();