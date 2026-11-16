/* KODAROS · interações
   Menu, revelações, formulário, biblioteca, diagnóstico e popup de WhatsApp. */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── menu ─────────────────────────────────────────────────── */
  (function menu() {
    var burger = $('#burger');
    var panel = $('#mobileMenu');
    if (!burger || !panel) return;

    function setOpen(open) {
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      panel.classList.toggle('is-open', open);
      document.body.classList.toggle('no-scroll', open);
    }

    burger.addEventListener('click', function () {
      setOpen(burger.getAttribute('aria-expanded') !== 'true');
    });
    $$('a', panel).forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
  })();

  /* ── estado do cabeçalho ──────────────────────────────────── */
  (function header() {
    var nav = $('#topnav');
    if (!nav) return;
    var ticking = false;
    function update() {
      nav.classList.toggle('is-scrolled', window.pageYOffset > 12);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ── link ativo ───────────────────────────────────────────── */
  (function currentLink() {
    var path = window.location.pathname.replace(/\/$/, '') || '/index.html';
    $$('.nav-links a, .foot-col a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0 || href.indexOf('mailto') === 0) return;
      var clean = href.replace(/^\.\//, '').replace(/\/$/, '');
      if (clean && path.indexOf(clean) > -1) link.setAttribute('aria-current', 'page');
    });
  })();

  /* ── revelações ───────────────────────────────────────────── */
  (function reveal() {
    var items = $$('.reveal');
    if (!items.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (item) { item.classList.add('is-in'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (item) { observer.observe(item); });
  })();

  /* ── ano ──────────────────────────────────────────────────── */
  (function year() {
    var el = $('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  })();

  /* ── biblioteca ───────────────────────────────────────────── */
  (function library() {
    var group = $('#bookFilters');
    if (!group) return;
    var books = $$('#books .book');
    var valid = ['todos', 'iniciantes', 'intermediario', 'avancado'];

    function apply(filter) {
      books.forEach(function (book) {
        var show = filter === 'todos' || book.getAttribute('data-level') === filter;
        book.hidden = !show;
        if (show) book.classList.add('is-in');
      });
      try { localStorage.setItem('kodaros_filtro', filter); } catch (error) {}
    }

    $$('.filter-btn', group).forEach(function (button) {
      button.addEventListener('click', function () {
        $$('.filter-btn', group).forEach(function (item) { item.setAttribute('aria-pressed', 'false'); });
        button.setAttribute('aria-pressed', 'true');
        apply(button.getAttribute('data-filter'));
      });
    });

    var saved = null;
    try { saved = localStorage.getItem('kodaros_filtro'); } catch (error) {}
    if (saved && valid.indexOf(saved) > -1) {
      $$('.filter-btn', group).forEach(function (item) { item.setAttribute('aria-pressed', 'false'); });
      var target = $('.filter-btn[data-filter="' + saved + '"]', group);
      if (target) { target.setAttribute('aria-pressed', 'true'); apply(saved); }
    }
  })();

  /* ── formulário ───────────────────────────────────────────── */
  (function contact() {
    var form = $('#contactForm');
    if (!form) return;
    var status = $('#formStatus');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = $('#cf-name').value.trim();
      var email = $('#cf-email').value.trim();
      var company = $('#cf-company').value.trim();
      var service = $('#cf-service').value;
      var message = $('#cf-msg').value.trim();
      var consent = $('#cf-consent');

      if (!name || !email || !message) {
        status.textContent = 'Preencha nome, e-mail e mensagem.';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Informe um e-mail válido.';
        return;
      }
      if (consent && !consent.checked) {
        status.textContent = 'É preciso aceitar a política de privacidade.';
        return;
      }

      var lines = [
        'Contato pelo site KODAROS',
        '',
        'Nome: ' + name,
        'E-mail: ' + email
      ];
      if (company) lines.push('Empresa: ' + company);
      if (service) lines.push('Serviço: ' + service);
      lines.push('', 'Mensagem:', message);

      var url = 'https://wa.me/559192094504?text=' + encodeURIComponent(lines.join('\n'));
      status.textContent = 'Abrindo o WhatsApp com a sua mensagem. Se a janela não abrir, use o botão verde no canto da tela.';
      window.open(url, '_blank', 'noopener');
      form.reset();
    });
  })();

  /* ── popup de WhatsApp ────────────────────────────────────── */
  (function whatsapp() {
    var pop = $('#waPop');
    var fab = $('#waFab');
    if (!pop || !fab) return;
    var card = $('.wa-pop-card', pop);
    var close = $('#waClose');
    var closed = false;
    try { closed = sessionStorage.getItem('kodaros_wa_closed') === '1'; } catch (error) {}

    function showCard() {
      card.hidden = false;
      fab.hidden = true;
      pop.hidden = false;
    }
    function showFab() {
      card.hidden = true;
      fab.hidden = false;
      pop.hidden = false;
    }
    function closeCard() {
      card.hidden = true;
      fab.hidden = false;
      closed = true;
      try { sessionStorage.setItem('kodaros_wa_closed', '1'); } catch (error) {}
    }

    if (closed) {
      showFab();
    } else {
      card.hidden = true;
      window.setTimeout(showCard, 2400);
    }

    if (close) close.addEventListener('click', closeCard);
    fab.addEventListener('click', function (event) {
      event.preventDefault();
      showCard();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !card.hidden) closeCard();
    });
  })();

  /* ── diagnóstico ──────────────────────────────────────────── */
  (function diagnosis() {
    var root = $('#quiz');
    if (!root) return;

    var PROFILES = {
      empresa: { label: 'Já tenho uma empresa', note: 'Quero escalar, organizar e automatizar.' },
      iniciante: { label: 'Estou começando', note: 'Quero o passo a passo certo.' },
      outros: { label: 'Outro cenário', note: 'Renda extra, transição ou curiosidade.' }
    };

    var QUESTIONS = [
      {
        q: 'O que mais pesa hoje?',
        sub: 'Escolha o que mais se parece com a sua rotina.',
        options: [
          { v: 'tempo', t: 'Falta de tempo para cuidar de tudo' },
          { v: 'clientes', t: 'Falta de clientes entrando' },
          { v: 'organizacao', t: 'Processos vivendo na cabeça' },
          { v: 'presenca', t: 'Presença digital fraca' }
        ]
      },
      {
        q: 'O que um sistema deveria resolver primeiro?',
        sub: 'Pense no que você faria se não precisasse fazer na mão.',
        options: [
          { v: 'atendimento', t: 'Atendimento e respostas' },
          { v: 'conteudo', t: 'Conteúdo e publicação' },
          { v: 'followup', t: 'Follow-up de orçamentos' },
          { v: 'tudo', t: 'Tudo isso, em conjunto' }
        ]
      },
      {
        q: 'O que você contrata primeiro?',
        sub: 'Se ainda não souber, tudo bem. O diagnóstico cobre os dois caminhos.',
        options: [
          { v: 'site', t: 'Um site ou landing page' },
          { v: 'automacao', t: 'Uma automação de processo' },
          { v: 'agente', t: 'Um bot ou agente de IA' },
          { v: 'indeciso', t: 'Ainda não sei' }
        ]
      }
    ];

    var RECS = {
      site: { tag: 'Serviço recomendado', title: 'Sites e landing pages', text: 'Presença, copy e conversão. Começa pelo que o cliente vê e decide.', href: 'servicos/sites.html' },
      automacao: { tag: 'Serviço recomendado', title: 'Automações', text: 'Menos tarefa manual, mais processo rodando. Diagnóstico, integração e monitoramento.', href: 'servicos/automacoes.html' },
      agente: { tag: 'Serviço recomendado', title: 'Bots e agentes', text: 'Atendimento e análise com base de conhecimento, guardrails e revisão humana.', href: 'servicos/bots-agentes.html' },
      indeciso: { tag: 'Serviço recomendado', title: 'Diagnóstico e plano', text: 'Uma conversa para mapear o gargalo e escolher o primeiro projeto com critério.', href: 'contato.html' }
    };

    var BOOKS = {
      tempo: { title: 'Os 10 Pilares da Gestão Empresarial', cover: 'assets/img/livro-gestao.webp', href: 'biblioteca.html' },
      clientes: { title: 'Tráfego Que Vende', cover: 'assets/img/livro1.webp', href: 'biblioteca.html' },
      organizacao: { title: 'Os 10 Pilares do Controle Financeiro', cover: 'assets/img/livro-financeiro.webp', href: 'biblioteca.html' },
      presenca: { title: 'Use Seu Site Para Escalar Sua Empresa', cover: 'assets/img/livro-site.webp', href: 'biblioteca.html' }
    };

    var state = { profile: null, index: 0, answers: [], busy: false };
    var steps = $$('.quiz-step', root);
    var bar = $('#quizProgress', root);
    var label = $('#quizLabel', root);
    var title = $('#quizTitle', root);
    var sub = $('#quizSub', root);
    var options = $('#quizOptions', root);
    var feedback = $('#quizFeedback', root);
    var next = $('#quizNext', root);
    var back = $('#quizBack', root);
    var restart = $('#quizRestart', root);

    function go(id) {
      steps.forEach(function (step) { step.classList.toggle('is-active', step.id === id); });
      var host = $('#quiz');
      if (host) {
        var top = host.getBoundingClientRect().top + window.pageYOffset - 96;
        window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
      }
      if (next) {
        next.disabled = true;
        next.textContent = state.index === QUESTIONS.length - 1 ? 'Ver diagnóstico' : 'Continuar';
      }
    }

    function render() {
      var question = QUESTIONS[state.index];
      if (bar) bar.style.width = ((state.index + 1) / QUESTIONS.length * 100) + '%';
      if (label) label.textContent = 'Diagnóstico gratuito';
      if (title) title.textContent = question.q;
      if (sub) sub.textContent = question.sub;
      if (feedback) { feedback.textContent = ''; feedback.classList.remove('is-visible'); }
      if (next) next.disabled = true;
      if (back) {
        back.hidden = false;
        back.textContent = state.index === 0 ? 'Perfil' : 'Voltar';
      }

      if (!options) return;
      options.innerHTML = '';
      question.options.forEach(function (option) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'option';
        button.setAttribute('role', 'radio');
        button.setAttribute('aria-checked', 'false');
        button.textContent = option.t;
        button.addEventListener('click', function () { pick(option, button); });
        options.appendChild(button);
      });
    }

    function pick(option, button) {
      if (state.busy) return;
      state.busy = true;
      $$('.option', options).forEach(function (item) {
        item.classList.remove('is-selected');
        item.setAttribute('aria-checked', 'false');
      });
      button.classList.add('is-selected');
      button.setAttribute('aria-checked', 'true');
      state.answers[state.index] = option.v;
      if (feedback) {
        feedback.textContent = 'Resposta registrada. Você pode continuar ou voltar para revisar.';
        feedback.classList.add('is-visible');
      }
      if (next) next.disabled = false;
      state.busy = false;
    }

    function result() {
      var first = state.answers[0];
      var second = state.answers[1];
      var third = state.answers[2] || 'indeciso';

      var diagnosis = {
        tempo: 'O seu gargalo principal é tempo. Processo manual não escala, e é ele que cobra a conta no fim do mês.',
        clientes: 'O seu gargalo principal é entrada de clientes. Sem presença e sem follow-up, a receita vira uma montanha-russa.',
        organizacao: 'O seu gargalo principal é organização. O que vive na sua cabeça não vira processo, e o esquecimento custa caro.',
        presenca: 'O seu gargalo principal é presença digital. Sem autoridade, o cliente compara só preço.'
      }[first] || 'O diagnóstico aponta um cenário de processo manual e presença digital a organizar.';

      var priority = {
        atendimento: 'A prioridade é atendimento. Resposta rápida, no canal certo, sem depender de você.',
        conteudo: 'A prioridade é conteúdo. Publicação constante, com processo, não com memória.',
        followup: 'A prioridade é follow-up. A maior parte das vendas acontece depois do primeiro contato.',
        tudo: 'A prioridade é visão de conjunto. Atendimento, conteúdo e follow-up no mesmo desenho.'
      }[second] || 'A prioridade é organizar o processo antes de aumentar o volume.';

      var profileNote = {
        empresa: 'Seu cenário é de empresa em operação.',
        iniciante: 'Seu cenário é de começo no digital.',
        outros: 'Seu cenário é de transição ou renda extra.'
      }[state.profile] || '';

      var box = $('#diagnosisText', root);
      if (box) {
        box.innerHTML = '<p>' + diagnosis + '</p>' +
          (profileNote ? '<p style="margin-top:12px">' + profileNote + '</p>' : '') +
          '<p style="margin-top:12px">' + priority + '</p>';
      }
      var list = $('#diagnosisList', root);
      if (list) {
        var items = [
          'Um projeto começa com escopo, prazo e valor definidos por escrito.',
          'O código e os arquivos do projeto são seus.',
          'O diagnóstico gratuito não compromete orçamento.'
        ];
        list.innerHTML = items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
      }

      var service = RECS[third] || RECS.indeciso;
      var book = BOOKS[first] || BOOKS.presenca;
      var serviceCard = $('#recService', root);
      if (serviceCard) {
        serviceCard.innerHTML =
          '<span class="mono">' + service.tag + '</span>' +
          '<h3>' + service.title + '</h3>' +
          '<p>' + service.text + '</p>' +
          '<a class="btn btn-primary" href="' + service.href + '">Ver o serviço</a>';
      }
      var bookCard = $('#recBook', root);
      if (bookCard) {
        bookCard.innerHTML =
          '<span class="mono">E-book sugerido</span>' +
          '<h3>' + book.title + '</h3>' +
          '<p>Leitura curta para começar pelo ponto que mais dói.</p>' +
          '<a class="btn btn-secondary" href="' + book.href + '">Ver biblioteca</a>';
      }
      go('quizResult');
    }

    $$('.profile', root).forEach(function (card) {
      card.addEventListener('click', function () {
        $$('.profile', root).forEach(function (item) {
          item.classList.remove('is-selected');
          item.setAttribute('aria-checked', 'false');
        });
        card.classList.add('is-selected');
        card.setAttribute('aria-checked', 'true');
        state.profile = card.getAttribute('data-profile');
        state.index = 0;
        state.answers = [];
        render();
        go('quizQuestion');
      });
    });

    if (next) {
      next.addEventListener('click', function () {
        if (state.index < QUESTIONS.length - 1) {
          state.index += 1;
          render();
          go('quizQuestion');
        } else {
          result();
        }
      });
    }
    if (back) {
      back.addEventListener('click', function () {
        if (state.index === 0) { go('quizProfile'); return; }
        state.index -= 1;
        render();
        go('quizQuestion');
      });
    }
    if (restart) {
      restart.addEventListener('click', function () {
        state.profile = null;
        state.index = 0;
        state.answers = [];
        $$('.profile', root).forEach(function (item) {
          item.classList.remove('is-selected');
          item.setAttribute('aria-checked', 'false');
        });
        go('quizProfile');
      });
    }
  })();
})();