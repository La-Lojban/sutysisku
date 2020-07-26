"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var content = document.getElementById('content');
var ciska = document.getElementById('ciska');
var clear = document.getElementById('clear');
var outp = document.getElementById('outp');
var descr = document.getElementById('descr');
var drata = document.getElementById('drata');
var citri = document.getElementById('citri');
var sidju = document.getElementById('sidju');
var pb = document.getElementById('kernelo_lo_cpacu');
var worker = new Worker('worker.js?sisku=1591879595234');
var SiteTitle = document.querySelector('#title > font');
var SiteTitleFull = document.querySelector('#site-title');
var jvoPlumbsOn = false;
var plumbsTimeout = 3500;
SiteTitleFull.classList.add('desktop-mode-title-color');
var dasri = document.getElementById('galtu-dasri');
var catni = document.getElementById('catni');
var cnano = document.getElementById('cnano');
var rimni = document.getElementById('rimni');
var SiteImage = document.querySelectorAll('#title > img');
var btnScrollToTop = document.getElementById('scrollToTop');

content.onscroll = function () {
  if (content.scrollTop > 200) {
    btnScrollToTop.style.display = 'block';
    btnScrollToTop.classList.remove('dizlo');
  } else {
    btnScrollToTop.classList.add('dizlo');
  }
};

function switchBorderScroll() {
  if (content.scrollTop > 200) {
    content.scrollTop = 0;
  } else {
    content.scrollTop = content.scrollHeight;
  }
}

var fm = {
  BE: 'bei',
  BEI: "be'o",
  BY: 'boi',
  COI: "do'u",
  DOI: "do'u",
  FIhO: "fe'u",
  FUhE: "fu'o",
  GIhA: 'vau',
  GOI: "ge'u",
  JOhI: "te'u",
  KE: "ke'e",
  LAhE: "lu'u",
  LA: 'ku',
  LE: 'ku',
  LI: "lo'o",
  LOhU: "le'u",
  LU: "li'u",
  ME: "me'u",
  'NAhE+BO': "lu'u",
  NOI: "ku'o",
  NUhI: "nu'u",
  NU: 'kei',
  PA: 'boi',
  PEhO: "ku'e",
  SEI: "se'u",
  SOI: "se'u",
  TO: 'toi',
  TUhE: "tu'u",
  VEI: "ve'o",
  LOhAI: "sa'ai",
  SAhAI: "le'ai",
  LOhOI: "ku'au",
  NAhU: "te'u",
  NIhE: "te'u",
  MOhE: "te'u"
};
var resultCount;
var results = [];
var typingTimer;
var IdleTypingTimer;

var delay = function () {
  return function (callback, ms) {
    clearTimeout(IdleTypingTimer);
    IdleTypingTimer = setTimeout(callback, ms);
  };
}();

var state = {
  searching: {
    seskari: 'cnano',
    query: ''
  },
  displaying: {
    seskari: 'cnano',
    query: ''
  },
  citri: []
};

(function () {
  try {
    var tcini = JSON.parse(localStorage.getItem('tcini'));
    if (tcini.seskari) state.searching.seskari = tcini.seskari;
    if (tcini.query) state.searching.query = tcini.query;
  } catch (e) {}

  try {
    state.citri = JSON.parse(localStorage.getItem('citri')) || [];
  } catch (e) {}
})();

RenderCitri();

function RenderCitri() {
  if (state.citri.length > 0) citri.innerHTML = " ".concat(window.purc).concat(state.citri.filter(function (_ref) {
    var seskari = _ref.seskari;
    return seskari !== 'velcusku';
  }).map(function (_ref2) {
    var seskari = _ref2.seskari,
        query = _ref2.query;
    return "<a class=\"a-".concat(seskari, "\" href=\"#seskari=").concat(seskari, "&sisku=").concat(encodeUrl(query), "\">").concat(escHtml(query), "</a>");
  }).join(', '));
}

function RenderDasri(seskari, sepia) {
  var colors = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni'];
  if (!colors.includes(seskari)) seskari = 'cnano';
  dasri.className = "kampu-dasri ".concat(seskari, "-dasri noselect");
  SiteTitleFull.classList.add("".concat(seskari, "-search-mode-title-color"));
  SiteTitleFull.classList.remove('desktop-mode-title-color');
  if (document.getElementById(seskari)) document.getElementById(seskari).classList.add("".concat(seskari, "-tutci-hover"), 'tutci-hover');
  colors.map(function (c) {
    if (c !== seskari) {
      SiteTitleFull.classList.remove("".concat(c, "-search-mode-title-color"));
      if (document.getElementById(c)) document.getElementById(c).classList.remove("".concat(c, "-tutci-hover"), 'tutci-hover');
    }
  });

  for (var i = 0; i < SiteImage.length; i++) {
    SiteImage[i].style.filter = sepia;
  }
}

function SwitchRotation(_ref3) {
  var action = _ref3.action;
  if (document.readyState !== 'complete') return;
  var els = ['logo'];

  if (action === 'start') {
    els.map(function (el) {
      document.getElementById(el).classList.remove('stopRotate');
      document.getElementById(el).classList.add('rotate');
    });
    clear.classList.add('pulsate-css');
    setTimeout(function () {
      if (clear.classList.contains('pulsate-css')) ciska.classList.add('granim-css');
    }, 500);
  } else {
    els.map(function (el) {
      document.getElementById(el).classList.add('stopRotate');
    });
    ciska.classList.remove('granim-css');
    clear.classList.remove('pulsate-css');
  }
}

function EmitVelcusku() {
  if (socket1Chat) socket1Chat.open();
}

function renderMathAndPlumbs() {
  MathJax.typesetPromise().then(function () {
    addJvoPlumbs(true);
  });
}

function RenderResults(_ref4) {
  var query = _ref4.query,
      seskari = _ref4.seskari;
  removePlumbs();
  window.jimte = seskari === 'velcusku' ? 201 : 30;
  resultCount = 0;
  SwitchRotation({
    action: 'stop'
  });
  outp.innerHTML = '';
  skicu_rolodovalsi({
    query: query,
    seskari: seskari
  });
  state.displaying.query = query;
  state.displaying.seskari = seskari;
  outp.style.display = 'block';
  descr.style.display = 'none';
  drata.style.display = 'none';
  sidju.style.display = 'flex';
  content.scrollTop = 0;

  switch (state.displaying.seskari) {
    case 'rimni':
      renderMathAndPlumbs();
      RenderDasri('rimni', 'sepia(1.0)');
      break;

    case 'arxivo':
      RenderDasri('arxivo', 'none');
      break;

    case 'velcusku':
      RenderDasri('velcusku', 'none');
      break;

    case 'catni':
      renderMathAndPlumbs();
      RenderDasri('catni', 'none');
      break;

    case 'cnano':
    default:
      renderMathAndPlumbs();
      RenderDasri('cnano', 'none');
  }

  delay(function () {
    DispatchCitri();
    ga('send', 'pageview', "#sisku/".concat(state.displaying.query));
    var pageViewData = {
      dl: window.location.href,
      dt: document.title,
      dr: document.referrer,
      dp: "#sisku/".concat(state.displaying.query),
      dh: "".concat(window.location.protocol, "//").concat(window.location.hostname),
      z: Math.round(Math.random() * 1e12)
    };
    if (socket) socket.emit('sisku', pageViewData);
  }, 2000);
}

function removePlumbs() {
  ;
  [].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    e.parentNode.removeChild(e);
  });
}

function appendPlumbs() {
  ;
  [].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    document.querySelector('#content').appendChild(e);
  });
}

function addJvoPlumbs(force) {
  removePlumbs();
  addPlumbs(!force);
  scrollJvoTimer = setTimeout(function () {
    if (force !== true) {
      var plumbers = document.getElementsByClassName('jvo_plumber');
      jvoPlumbsOn = !jvoPlumbsOn;

      for (var i = 0; i < plumbers.length; i++) {
        var plumber = plumbers[i];
        plumber.value = jvoValue();
        jvoPlumbsOn ? plumber.classList.add('tutci-hover') : plumber.classList.remove('tutci-hover');
      }
    }

    if (!jvoPlumbsOn) return;
    var targetedEls = Array.from(document.querySelectorAll('[data-arr]'));

    var _loop = function _loop() {
      var el = targetedEls[i];
      if (el.attributes['data-head'] && el.attributes['data-head'].nodeValue !== '1') return "continue";
      var id = el.id;
      var arr = el.attributes['data-arr'].nodeValue.split(',');
      var tld = el.id.split('_');
      var tld_0 = tld.slice(0, -1);
      var kahe_zgana_el = kahe_sezgana(el);
      targetedEls.filter(function (e) {
        var tld_inner = e.id.split('_');
        var tld_inner_0 = tld_inner.slice(0, -2);
        var arr_ = e.attributes['data-arr'].nodeValue.split(',');
        var t_ = arr_[0].split(/(?=[0-9]+)/);

        if (arr_.length === 1 && tld_inner_0.length === tld_0.length && tld_inner_0.join('_') === tld_0.join('_') && arr.filter(function (ei) {
          var t = ei.split(/(?=[0-9])/);
          return t_[0].indexOf(t[0]) === 0 && t_[1] === t[1];
        }).length > 0 && (kahe_zgana_el || kahe_sezgana(e))) {
          var clr = e.attributes['data-color'].nodeValue;
          clr = "hsla(".concat(clr, ",100%,70%,0.62)");
          var t = new LeaderLine(document.getElementById(e.id), document.getElementById(id), {
            endPlugColor: clr,
            color: clr,
            dash: {
              animation: true
            },
            startSocketGravity: [50, -67],
            endSocketGravity: [0, 67],
            endPlug: 'arrow2',
            endSocket: 'bottom',
            size: 3
          });
        }
      });
      appendPlumbs();
    };

    for (var i = 0; i < targetedEls.length; i++) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  }, force === true ? 450 : 0);
}

function addPlumbs(force) {
  removePlumbs();
  scrollTimer = setTimeout(function () {
    var targetedEls = document.querySelectorAll('[data-target]');

    for (var i = 0; i < targetedEls.length; i++) {
      var el = targetedEls[i];

      if (kahe_sezgana(el)) {
        var id = el.id;
        var target = el.attributes['data-target'].nodeValue;
        var t = new LeaderLine(document.getElementById(target), document.getElementById(id), {
          endPlugColor: 'rgba(255, 120, 0, 0.33)',
          color: 'rgba(255, 120, 0, 0.33)',
          dash: {
            animation: true
          },
          startSocketGravity: [50, -67],
          endSocketGravity: [0, 67],
          endPlug: 'arrow2',
          endSocket: 'bottom',
          size: 3
        });
      }
    }

    appendPlumbs();
    plumbsTimeout = 450;
  }, force ? 0 : plumbsTimeout);
}

function kahe_sezgana(el) {
  var rect = el.getBoundingClientRect();
  rect = rect.top >= 48 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  return rect;
}

worker.onmessage = function (ev) {
  var data = ev.data;

  if (data.kind == 'ready') {
    document.title = 'la sutysisku';
    var loading = document.getElementById('loading');
    loading.parentNode.removeChild(loading);
    setStateFromUrl({
      replace: true
    });
  } else if (data.kind == 'searchResults') {
    if (JSON.stringify(data.req) !== JSON.stringify(state.searching)) return;
    if (JSON.stringify(data.req) === JSON.stringify(state.displaying)) return;
    results = data.results || [];
    RenderResults({
      query: data.req.query,
      seskari: data.req.seskari
    });
  } else if (data.kind == 'loading') {
    document.getElementById('caho_cpacu').textContent = window.bangubuild;
    pb.style.width = '51%';
  } else if (data.kind == 'progress') {
    pb.style.width = "".concat(data.percent * 100, "%");
  }
};

if (socket) socket.on('la_arxivo_cu_cusku', function (_ref5) {
  var seskari = _ref5.seskari,
      query = _ref5.query,
      message = _ref5.message;

  if (state.searching.seskari === seskari && state.searching.query === query) {
    results = message || [];
    RenderResults({
      query: query,
      seskari: seskari
    });
  }
});

function parseQuery(queryString) {
  if (queryString === '') return;
  var query = {};
  var pairs = '';

  if (queryString.search(/^#sisku\//) === 0) {
    pairs = [queryString.replace(/#sisku\/(.*)/, 'sisku=$1')];
  } else {
    pairs = (queryString[0] === '#' ? queryString.substr(1) : queryString).split('&');
  }

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1].replace(/[\+]/g, ' ') || '');
  }

  return query;
}

function setStateFromUrl(_ref6) {
  var href = _ref6.href,
      replace = _ref6.replace;

  if (href) {
    href = href.substring(href.indexOf('#') + 1);
    localStorage.setItem('url', "#".concat(href));
  }

  var params = parseQuery(href || window.location.hash);
  var newSearch;

  if (params && params['sisku']) {
    newSearch = decodeUrl(params['sisku']).trim();
  } else {
    href = href || window.location.search;
    href = href.substring(href.indexOf('?') + 1);
    var search = new URLSearchParams(href);
    newSearch = decodeUrl(search.get('focus') || '').trim();

    if (newSearch) {
      params = {
        sisku: newSearch,
        seskari: 'cnano'
      };
    } else return;
  }

  if (state.searching.seskari !== params['seskari'] || state.searching.query !== newSearch) {
    if (params['seskari'] && ['velcusku', 'cnano', 'catni', 'rimni', 'arxivo'].includes(params['seskari'])) state.searching.seskari = params['seskari'];

    if (params['sisku']) {
      state.searching.query = newSearch;
      DispatchState({
        replace: replace
      });
    }
  }
}

citri.addEventListener('click', clicked);

function clicked(_ref7) {
  var target = _ref7.target;

  if (target.nodeName === 'A') {
    var el = target;
    if (el.ctrlKey || el.metaKey) return;
    setStateFromUrl({
      replace: false,
      href: el.getAttribute('href')
    });
  }

  return;
}

function setUrlFromState(_ref8) {
  var replace = _ref8.replace;
  var url = "".concat(window.location.href.split('?')[0].split('#')[0], "#seskari=").concat(state.searching.seskari, "&sisku=").concat(encodeUrl(state.searching.query));

  if (state.searching.query === '') {
    url = '';
    document.title = 'la sutysisku';
  } else {
    document.title = "".concat(state.searching.query, " - la sutysisku");
  }

  var lastUrl = localStorage.getItem('url') || '';

  if (replace === true) {
    window.history.replaceState({}, null, url);
  } else if (window.location.hash !== url && lastUrl !== url) {
    window.history.pushState({}, null, url);
  }

  localStorage.setItem('url', url);
}

window.addEventListener('popstate', setStateFromUrl);
ciska.addEventListener('paste', typing(0));
ciska.addEventListener('keyup', function () {
  typing();
});
ciska.addEventListener('keydown', function () {
  clearTimeout(typingTimer);
});
ciska.addEventListener('input', typing());
ciska.addEventListener('textInput', typing());

function GetCiskaAndDispatch() {
  state.searching.query = plukaquery(ciska.value);
  DispatchState({
    caller: 'GetCiskaAndDispatch'
  });
}

function typing(a) {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(GetCiskaAndDispatch, a ? a : 250);
}

ciska.addEventListener('focus', focusSearch);

function focusSearch() {
  state.searching.query = plukaquery(ciska.value);
  DispatchState({});
}

clear.addEventListener('click', EmptyState);
document.getElementById('title').addEventListener('click', EmptyState);

function EmptyState() {
  DispatchState({
    empty: true
  });
}

document.getElementById('rimni').addEventListener('click', function () {
  state.searching = {
    seskari: 'rimni',
    query: plukaquery(ciska.value)
  };
  DispatchState({
    replace: false
  });
});
document.getElementById('cnano').addEventListener('click', function () {
  state.searching = {
    seskari: 'cnano',
    query: plukaquery(ciska.value)
  };
  DispatchState({
    replace: false
  });
});
document.getElementById('catni').addEventListener('click', function () {
  state.searching = {
    seskari: 'catni',
    query: plukaquery(ciska.value)
  };
  DispatchState({
    replace: false
  });
});

function DispatchCitri() {
  if (state.displaying.query === '' || state.displaying.seskari === 'velcusku') return;
  var i = 0;

  for (i = 0; i < state.citri.length; i++) {
    if (state.citri[i].query === state.displaying.query && state.citri[i].seskari === state.displaying.seskari) {
      state.citri.splice(i, 1);
      break;
    }
  }

  state.citri.unshift(JSON.parse(JSON.stringify(state.displaying)));
  if (state.citri.length > 10) state.citri.length = 10;
  localStorage.setItem('citri', JSON.stringify(state.citri));
  RenderCitri();
}

function DispatchState(_ref9) {
  var replace = _ref9.replace,
      caller = _ref9.caller,
      empty = _ref9.empty;
  if (socket1Chat) socket1Chat.close();
  state.searching.query = state.searching.query.trim();
  setUrlFromState({
    replace: replace
  });
  localStorage.setItem('tcini', JSON.stringify(state.searching));

  if (empty == true) {
    state.searching.query = '';
    return RenderDesktop();
  } else if (state.searching.seskari !== 'velcusku') {
    if (state.searching.query === '') return RenderDesktop();
    if (JSON.stringify(state.searching) === JSON.stringify(state.displaying)) return;
  }

  ciska.value = state.searching.query;
  SwitchRotation({
    action: 'start'
  });
  if (caller === 'GetCiskaAndDispatch' && state.searching.seskari === 'velcusku') state.searching.seskari = 'cnano';

  switch (state.searching.seskari) {
    case 'arxivo':
      var json = JSON.parse(JSON.stringify(state.searching));
      if (state.searching.query.charAt(0) !== '^' && state.searching.query.slice(-1)[0] !== '$') json.query = "\\b".concat(state.searching.query, "\\b");
      json.max = 20;
      if (socket) socket.emit('cpedu_fi_la_arxivo', json);
      break;

    case 'velcusku':
      EmitVelcusku();
      break;

    default:
      worker.postMessage({
        kind: 'newSearch',
        query: state.searching.query,
        seskari: state.searching.seskari
      });
  }
}

function RenderDesktop() {
  removePlumbs();
  SwitchRotation({
    action: 'stop'
  });
  content.scrollTop = 0;
  var lastQuery = state.displaying.query;
  state.displaying.query = '';
  SiteTitleFull.classList.add('desktop-mode-title-color');
  SiteTitleFull.classList.remove('catni-search-mode-title-color', 'cnano-search-mode-title-color', 'velcusku-search-mode-title-color', 'rimni-search-mode-title-color', 'arxivo-search-mode-title-color');
  catni.classList.remove('catni-tutci-hover', 'tutci-hover');

  try {
    cnano.classList.remove('cnano-tutci-hover', 'tutci-hover');
  } catch (error) {}

  rimni.classList.remove('rimni-tutci-hover', 'tutci-hover');
  dasri.className = 'kampu-dasri cnano-dasri';
  outp.style.display = 'none';
  descr.style.display = 'block';
  var obj = {
    '@CLL': ['.inglic.', 'Reference Grammar', '../pixra/cll.png', 1, 'https://lojban.pw/cll/uncll-1.2.9/xhtml_section_chunks/'],
    '@lojban.pw': ['.inglic.', 'Lojban-Chan', '../pixra/jbotcan.svg', 1, 'https://lojban.pw'],
    muplis: [0, 'la muplis', '../pixra/taplamuplis.svg', 2.1],
    jb: [0, 'English - Lojban examples', '../pixra/snime-1.svg', 1],
    en: [0, 'English-Lojban', '../pixra/selsku_lanci_eng.svg', 1],
    jbo: [0, "fanva fi le'e lojbo ri", '../pixra/lanci_jbo.svg', 1],
    ja: [0, '日本 - <span style="white-space:pre;">ロジバン</span>', '../pixra/selsku_lanci_jpn.svg', 1],
    'fr-facile': [0, 'français facile - lojban', '../pixra/selsku_lanci_fra.svg', 1],
    ru: [0, 'русский - ложбан', '../pixra/selsku_lanci_rus.svg', 1],
    eo: [0, 'Esperanto - Loĵbano', '../pixra/lanci_epo.svg', 1],
    es: [0, 'español - lojban', '../pixra/selsku_lanci_spa.svg', 1],
    zh: [0, '中文 - 逻辑语', '../pixra/selsku_lanci_zho.svg', 1],
    '@CC': ['.inglic.', 'The Crash Course', '../pixra/cogwheel-5.svg', 1, 'https://mw.lojban.org/papri/The_Crash_Course_in_Lojban']
  };
  var acc = '';
  var cisn = 100;

  for (var key in obj) {
    if (obj[key][0] === 0 || obj[key][0] === window.bangu) {
      acc += "<div class='DIV_1' style='height:".concat(cisn, "px;width:").concat(obj[key][3] * cisn, "px;'><div class='DIV_2' style='height:").concat(cisn, "px;width:").concat(obj[key][3] * cisn, "px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(obj[key][1], "</b></span><a").concat((obj[key][4] || '').indexOf('http') === 0 ? " rel='noreferrer' target='_blank'" : '', " aria-label=\"").concat(obj[key][1].replace(/<[^>]+?>/g, ''), "\" href=\"").concat(key.indexOf('@') === 0 ? obj[key][4] : "https://la-lojban.github.io/sutysisku/".concat(key, "/#seskari=").concat(state.displaying.seskari, "&sisku=").concat(encodeUrl(lastQuery)), "\" class='A_7'><div class='DIV_8' style='height:").concat(cisn, "px;width:").concat(obj[key][3] * cisn, "px;background-image:url(\"").concat(obj[key][2], "\")'></div></a></div></div>");
    }
  }

  drata.innerHTML = acc;
  drata.style.display = 'block';
}

window.addEventListener('resize', calcVH, true);
content.addEventListener('scroll', checkScrolledNearBottom);
calcVH();

if (document.attachEvent) {
  document.attachEvent('onkeyup', handler);
} else {
  document.addEventListener('keyup', handler);
}

function handler(_ref10) {
  var keyCode = _ref10.keyCode;
  if (keyCode && keyCode === 191) ciska.focus();
}

if (document.readyState === 'loading') {
  pb.style.width = '37%';
  document.title = 'la sutysisku';
}

function calcVH() {
  content.setAttribute('style', "height:".concat(Math.max(document.documentElement.clientHeight, window.innerHeight || 0), "px;"));
}

function getCLLSections(te_gerna) {
  var a = window.arrcll[te_gerna];

  if (!a) {
    a = window.arrcll[te_gerna.replace(/[^A-Z]+$/, '')];
  }

  return a;
}

function CLL(_ref11) {
  var pre = _ref11.pre,
      valsi = _ref11.valsi;
  if (!window.cll_url | (window.arrcll || []).length === 0) return {};
  if (pre && !valsi.match(/^[A-Zh]+[\+A-Zh0-9]*$/)) return {};
  var secs = getCLLSections(valsi);
  if (!secs) return {};
  var cllHtmlLinksString = "".concat(window.cllnotci, "<ul class='uoldeliste'>").concat(Object.keys(secs).map(function (sec) {
    return "<li><a rel='noreferrer' target='_blank' href=\"".concat(window.cll_url).concat(sec, "\">").concat(escHtml(secs[sec]), "</a></li>");
  }).join(''), "</ul>");
  var div = document.createElement('div');
  div.className = "".concat(pre ? 'sidju' : 'definition', " cll noselect");
  div.innerHTML = cllHtmlLinksString;
  return {
    secs: secs,
    div: div
  };
}

var scrollTimer = null;
var scrollJvoTimer = null;

function checkScrolledNearBottom(_ref12) {
  var target = _ref12.target;
  removePlumbs();

  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
  }

  if (scrollJvoTimer !== null) {
    clearTimeout(scrollJvoTimer);
  }

  if (state.displaying.seskari !== 'velcusku' && target.scrollTop + window.innerHeight >= outp.clientHeight - 700) {
    window.jimte += 10;
    skicu_rolodovalsi(state.displaying);
    MathJax.typesetPromise().then(function () {
      addJvoPlumbs(true);
    });
  } else {
    addJvoPlumbs(true);
  }
}

function string2Int(s, base, q) {
  s = s.replace(/[\{\}_]/g, '');
  return Math.abs(Math.round(s.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0) % base / q) * q);
}

function veljvoLetters(v) {
  v = v.substr(1, v.length - 2).split('=');
  var jalge = v.map(function (i) {
    return i.replace(/[^A-Za-z']/g, '');
  });
  return {
    jalge: jalge,
    hasExpansion: v.length > 1 || jalge[0] && jalge[0] !== 'x'
  };
}

function veljvoString(_ref13) {
  var v = _ref13.v,
      fullDef = _ref13.fullDef,
      subtype = _ref13.subtype,
      dataArrAdded = _ref13.dataArrAdded,
      b = _ref13.b,
      veljvoLs = _ref13.veljvoLs;
  if (dataArrAdded.includes(b)) return '';
  if (subtype !== 'r' && fullDef.t !== 'lujvo') return '';
  v = v.substr(1, v.length - 2).split('=').map(function (i) {
    return subtype === 'r' ? fullDef.w + i.replace(/[^0-9]/g, '') : i.replace(/[^0-9A-Za-z']/g, '');
  });
  v = v.filter(function (i) {
    var sI = i.replace(/[0-9]/g, '');
    if (veljvoLs.filter(function (j) {
      return j.indexOf(sI) === 0 && j !== sI;
    }).length > 0) return;
    return true;
  });
  v = v.join(',');
  return " data-arr=\"".concat(v, "\"");
}

function melbi_uenzi(_ref14) {
  var def = _ref14.def,
      fullDef = _ref14.fullDef,
      query = _ref14.query,
      seskari = _ref14.seskari,
      type = _ref14.type,
      index = _ref14.index;
  var iterTercricmiId = 0;
  var jsonIds = [];
  var types = [];
  var dataArrAdded = [];
  var veljvoLs = [];
  var hasExpansion = false;
  if (!['cnano', 'catni', 'rimni'].includes(seskari)) seskari = 'cnano';
  var res = def.replace(/\$.*?\$/g, function (c, offset, string) {
    if (type === 'd' && typeof index !== 'undefined') {
      var rt = veljvoLetters(c);
      if (rt.hasExpansion) hasExpansion = true;
      veljvoLs = veljvoLs.concat(rt.jalge);
      var q = string.substr(offset);
      var r = new RegExp("^(".concat(c.replace(/[^a-zA-Z0-9\{\}_]/g, ''), " \\([^\\(\\)<>]+?\\)).*"));
      var hc = c;

      if (q.search(r) === 0) {
        hc = q.replace(r, '$1');
      }

      var k = {};
      k[c] = hc;
      types.push(k);
    }

    return c;
  });
  var jalge = "<span>".concat(res.replace(/\$.*?\$/g, function (c, offset, string) {
    if (type === 'd' && typeof index !== 'undefined') {
      var q = string.substr(offset);
      var r = new RegExp("^(".concat(c.replace(/[^a-zA-Z0-9\{\}_]/g, ''), " \\([^()<>]+?\\)).*"));
      var hc = c;

      if (q.search(r) === 0) {
        hc = q.replace(r, '$1');
      } else {
        var seklesi = types.filter(function (i) {
          return i[c] && i[c] !== hc;
        })[0];

        if (seklesi) {
          hc = seklesi[c];
        }
      }

      iterTercricmiId++;
      var combInd = "".concat(index, "_").concat(iterTercricmiId);
      var a = {};
      a[c] = combInd;
      jsonIds.push(a);
      var b = c.replace(/[^a-zA-Z0-9]/g, '');
      var head = '';
      if (!!(fullDef && fullDef.rfs || []).length) head = " data-head=\"1\"";
      var vel = veljvoString({
        subtype: head !== '' ? 'd' : 'r',
        v: c,
        fullDef: fullDef,
        dataArrAdded: dataArrAdded,
        b: b,
        veljvoLs: veljvoLs
      });
      c = "<span id=\"".concat(combInd, "\" class=\"terbricmi\" style=\"background-color: hsl(").concat(string2Int(hc, 256, 16), ", 100%, 90%);border-radius:").concat(string2Int(hc, 9, 1) + 3, "px\"").concat(vel).concat(head, " data-color=\"").concat(string2Int(hc, 256, 16), "\">").concat(c, "</span>");
      dataArrAdded.push(b);
    }

    return c;
  }).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g, function (c, _, id, t) {
    if (type === 'd') {
      var a = jsonIds.filter(function (e) {
        return e[t] !== id && e[t];
      });
      if (a[0] && a[0][t]) c = c.replace(/^<span /, "<span data-target=\"".concat(a[0][t], "\" "));
    }

    return c;
  }).replace(/\$.*?\$/g, function (c) {
    return c.replace(/\{/g, '\\curlyleft').replace(/\}/g, '\\curlyright');
  }).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, function (c) {
    var res = "</span><a href=\"".concat(c, "\" rel=\"noreferrer\" target=\"_blank\">").concat(basna({
      def: c,
      query: query
    }), "</a><span>");
    if (c.match(/^https?:\/\/.*\.(jpg|png)$/)) res += "<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(c, "\"/>\n");
    return res;
  }).replace(/\{.*?\}/g, function (c) {
    var c = c.substring(1, c.length - 1);
    return "</span><a class=\"a-".concat(seskari, "\" href=\"#seskari=").concat(seskari, "&sisku=").concat(encodeUrl(c), "\">").concat(basna({
      def: escHtml(c, true),
      query: query
    }), "</a><span>");
  }).replace(/\$.*?\$/g, function (c) {
    return c.replace(/\\curlyleft/g, '{').replace(/\\curlyright/g, '}');
  }), "</span>").replace(/<span><\/span>/g, '').replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g, function (c // var c = c.substring(1, c.length - 1)
  ) {
    return basna({
      def: c,
      query: query
    });
  });
  return {
    tergeha: jalge,
    hasExpansion: hasExpansion
  };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function basna(_ref15) {
  var def = _ref15.def,
      query = _ref15.query;
  if (!query || query === '') return def;
  var f = "(".concat(escapeRegExp(query).replace(/ /g, '|'), "|").concat(escapeRegExp(query).replace(/'/g, 'h').replace(/ /g, '|'), ")");
  var rock = new RegExp(f, 'igm');
  return def.replace(rock, "<span class='basna'>$1</span>");
}

var UNICODE_START = 0xed80;
var lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";

function krulermorna(t) {
  return t.replace(/\./g, '').replace(/^/, '.').toLowerCase().replace(/([aeiou\.])u([aeiou])/g, '$1w$2').replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2').replace(/au/g, 'ḁ').replace(/ai/g, 'ą').replace(/ei/g, 'ę').replace(/oi/g, 'ǫ').replace(/\./g, '');
}

function cohukrulermorna(t) {
  return t.replace(/w/g, 'u').replace(/ɩ/g, 'i').replace(/ḁ/g, 'au').replace(/ą/g, 'ai').replace(/ę/g, 'ei').replace(/ǫ/g, 'oi');
}

function zbalermornaize(_ref16) {
  var w = _ref16.w,
      ot = _ref16.ot,
      rfs = _ref16.rfs;
  var word = krulermorna(w);

  if (ot && ot === "vlaza'umei") {
    return rfs.map(function (def) {
      return zbalermornaize(def);
    }).join(' ');
  }

  word = word.split(/(?=[ɩw])/).map(function (spisa) {
    return cohukrulermorna(spisa).split('').map(function (lerfu) {
      return latinToZbalermorna(lerfu);
    }).join('');
  }).join('');
  return word.replace(/,/g, '');
}

function latinToZbalermorna(c) {
  if (c.codePointAt(0) >= 0xed80) {
    return c;
  }

  if (c == ' ') return ' ';
  if (c == 'h' || c == 'H') c = "'";
  if (lerfu_index.includes(c)) return String.fromCodePoint(UNICODE_START + lerfu_index.indexOf(c));else if (lerfu_index.includes(c.toLowerCase())) return String.fromCodePoint(UNICODE_START + lerfu_index.indexOf(c.toLowerCase()));
  if (c == '\n') return '\n';
  if (c == '\t') return '\t';
  return c;
}

function getMatchIndices(query, d) {
  var regex = new RegExp(query, 'g');
  var result = [];
  var match;

  while (match = regex.exec(d)) {
    result.push(match.index);
  }

  return result;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function ConstructArxivoValsiExtract(d, query, range) {
  var locs = getMatchIndices(query, d);
  locs = locs.map(function (i) {
    i = [i - range, i + range];
    if (i[0] < 0) i[0] = 0;
    if (i[0] >= d.length) i[0] = d.length - 1;
    return i;
  });

  for (var i = 0; i < locs.length - 1; i++) {
    if (locs[i][1] > locs[i + 1][0]) {
      locs[i][1] = locs[i + 1][1];
      locs[i + 1][0] = locs[i][0];
    }
  }

  locs = locs.map(function (i) {
    return JSON.stringify(i);
  });

  if (locs.length > 0) {
    locs = locs.filter(onlyUnique).map(function (i) {
      i = JSON.parse(i);
      var n = d.substr(i[0], i[1] - i[0]);
      n = basna({
        def: n,
        query: query
      });
      if (i[0] > 3) n = "...".concat(n);
      if (i[1] < d.length - 4) n = "".concat(n, "...");
      return n;
    });
    locs = locs.join('<br/>');
  } else {
    var n = d.substr(0, Math.min(100, d.length));
    if (n.length < d.length) n = "".concat(n, "...");
    n = basna({
      def: n,
      query: query
    });
    locs = n;
  }

  return locs;
}

function jvoValue() {
  return jvoPlumbsOn ? '⇔' : '↔';
}

function skicu_palodovalsi(_ref17) {
  var def = _ref17.def,
      inner = _ref17.inner,
      query = _ref17.query,
      seskari = _ref17.seskari,
      index = _ref17.index;
  if (!query) query = state.searching.query;
  if (!seskari) seskari = state.searching.seskari;
  if (!def) def = [];
  var out = document.createElement('div');
  out.className = inner ? 'terminner' : 'termouter';
  out.classList.add('term');

  if (!inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0) {
    out.className = 'sidju cll noselect';
  }

  if (typeof fm[def.s] !== 'undefined') {
    var fmm = document.createElement('h4');
    fmm.className = 'tfm';
    fmm.innerHTML = "&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href=\"#seskari=".concat(seskari, "&sisku=").concat(encodeUrl(fm[def.s]), "\">").concat(escHtml(fm[def.s]), "</a>]</sup></i>");
  }

  var sh = [];

  for (var key in fm) {
    if (fm[key] === def.w) sh.push("<a href=\"#seskari=".concat(seskari, "&sisku=").concat(encodeUrl(key), "\">").concat(escHtml(key), "</a>"));
  }

  if (sh.length !== 0) {
    var tfm = document.createElement('div');
    tfm.classList.add('valsi');
    if (def.l) tfm.classList.add('nalojbo');
    tfm.innerHTML = "<i><sup>[".concat(sh.join(', '), "&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;");
  }

  if (def.s) {
    var ss = document.createElement('a');
    ss.className = 'tutci klesi klesi-tutci';
    var text = basna({
      def: escHtml(def.s),
      query: query
    });
    ss.innerHTML = text;
    if (seskari !== 'velcusku') ss.href = "#seskari=".concat(seskari, "&sisku=").concat(encodeUrl(def.s));
  }

  if (def.t) {
    var jvs = document.createElement('a');
    jvs.className = 'klesi link noselect';
    var text = def.t;
    var txt = encodeUrl(def.w).replace(/_/g, '%20');
    jvs.href = window.judri ? window.judri + txt : "#seskari=".concat(seskari === 'catni' ? 'catni' : 'cnano', "&sisku=").concat(txt);

    if (window.judri) {
      jvs.setAttribute('target', '_blank');
      jvs.setAttribute('rel', 'noreferrer');
    }

    if (window.xuzganalojudri && !def.l) {
      text = "".concat(escHtml(def.t), "# ");
      if (def.d && def.d.nasezvafahi) text = "\u2795 ".concat(text);
    }

    jvs.innerHTML = text;
  }

  if (def.date) {
    var jvs = document.createElement('div');
    jvs.className = 'tutci klesi klesi-tutci';
    jvs.style.whiteSpace = 'nowrap';
    jvs.innerHTML = def.date;
  }

  if (def.from) {
    var ss = document.createElement('div');
    ss.className = 'tutci klesi klesi-tutci';
    ss.innerHTML = def.from;
  }

  var word = document.createElement('h4');
  word.classList.add('valsi');
  word.setAttribute('data-valsi', encodeURIComponent(def.w));
  if (def.l) word.classList.add('nalojbo');

  if (plukaquery(def.w) == query || seskari == 'velcusku') {
    word.innerHTML = "".concat(basna({
      def: def.w,
      query: query
    }), " ");
  } else {
    word.innerHTML = "<a class=\"valsi".concat(def.l ? '' : ' nalojbo', "\" href=\"#seskari=").concat(seskari, "&sisku=").concat(encodeUrl(def.w), "\">").concat(basna({
      def: escHtml(def.w, true),
      query: query
    }), "</a> ");
  }

  var mu = {};
  if (def.d && !def.d.nasezvafahi) mu = melbi_uenzi({
    def: def.d,
    fullDef: def,
    query: query,
    seskari: seskari,
    type: 'd',
    index: index
  });
  var zbalermorna = document.createElement('h4');
  zbalermorna.classList.add('valsi', 'zbalermorna');
  zbalermorna.textContent = zbalermornaize(def);
  var heading = document.createElement('heading');
  heading.classList.add('heading');
  if (tfm) heading.appendChild(tfm);
  heading.appendChild(word);
  if (zbalermorna && def.w.length <= 20 && !window.muplis) heading.appendChild(zbalermorna);
  if (fmm) heading.appendChild(fmm);

  if (def.t === 'lujvo' && (def.rfs || []).length > 0 && mu.hasExpansion) {
    var jvo = document.createElement('input');
    jvo.type = 'button';
    jvo.classList.add('tutci', 'sance', 'jvo_plumber');
    jvo.value = jvoValue();
    jvoPlumbsOn ? jvo.classList.add('tutci-hover') : jvo.classList.remove('tutci-hover');
    jvo.onclick = addJvoPlumbs;
    heading.appendChild(jvo);
  }

  var flex = document.createElement('heading');
  flex.style.flex = 1;
  heading.appendChild(flex);
  if (jvs) heading.appendChild(jvs);
  if (ss) heading.appendChild(ss);

  try {
    var sance = new Audio("/sutysisku/sance/vreji/".concat(encodeValsiForWeb(def.w), ".mp3"));
    sance.id = "sance_".concat(encodeValsiForWeb(def.w));
    sance.addEventListener('canplaythrough', function (event) {
      var hd = Array.from(document.querySelectorAll("[data-valsi=\"".concat(encodeValsiForWeb(def.w), "\"]")))[0];

      if (hd && !document.getElementById("sance_".concat(encodeValsiForWeb(def.w)))) {
        hd.innerHTML += "<button class=\"tutci sance\" onclick=\"document.getElementById('sance_".concat(encodeValsiForWeb(def.w), "').play()\">\u25B6</button>");
        hd.appendChild(sance);
      }
    });
  } catch (error) {}

  out.appendChild(heading);
  if (zbalermorna && (window.muplis || def.w.length > 20)) out.appendChild(zbalermorna);

  if (seskari !== 'arxivo' && def.d) {
    var n = document.createElement('div');
    n.classList.add('definition', 'valsi');

    if (def.d && def.d.nasezvafahi) {
      if (!def.t && (def.rfs || []).length === 0) return;
      n.classList.add('nasezvafahi', 'noselect');
      n.innerHTML = window.nasezvafahi;
    } else {
      var melbi = mu.tergeha;
      if (seskari !== 'velcusku') melbi = "".concat(melbi.replace(/\n/g, '<br/>'), " ");
      n.innerHTML = melbi;
    }

    out.appendChild(n);
  }

  if (seskari === 'arxivo') {
    var k = document.createElement('div');
    k.classList.add('definition', 'valsi', 'pointer');
    k.innerHTML = ConstructArxivoValsiExtract(def.d, query, 50);
    k.addEventListener('click', function () {
      k.style.display = 'none';
      k.nextElementSibling.style.display = 'block';
    });
    out.appendChild(k);
    var n = document.createElement('div');
    n.classList.add('definition', 'valsi');
    n.style.display = 'none';

    if (def.d && def.d.nasezvafahi) {
      n.classList.add('nasezvafahi', 'noselect');
      n.innerHTML = window.nasezvafahi;
    } else {
      n.innerHTML = "".concat(basna({
        def: def.d,
        query: query
      }).replace(/\n/g, '<br/>'), " ");
      n.addEventListener('click', function () {
        n.style.display = 'none';
        n.previousElementSibling.style.display = 'block';
        n.parentElement.scrollIntoView();
      });
    }

    out.appendChild(n);
  }

  if (def.n) {
    var n = document.createElement('div');
    n.classList.add('notes', 'valsi');
    n.innerHTML = "".concat(melbi_uenzi({
      def: def.n,
      query: query,
      seskari: seskari
    }).tergeha, " ");
    out.appendChild(n);
  }

  if (index == 0 && seskari !== 'velcusku') {
    var _CLL = CLL({
      valsi: def.w
    }),
        secs = _CLL.secs,
        div = _CLL.div;

    if (secs && secs !== state.cll) out.appendChild(div);
  }

  if (def.e) {
    var n = document.createElement('div');
    n.classList.add('examples', 'valsi');
    n.innerHTML = "<table class='ciksi'>".concat(melbi_uenzi({
      def: "".concat(def.e, "\n").replace(/%/g, '\n').replace(/(.*?) — (.*?)\n/g, "<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),
      query: query,
      seskari: seskari
    }).tergeha, "</table> ");
    out.appendChild(n);
  }

  if (def.k) {
    var n = document.createElement('div');
    n.className = 'related';
    n.innerHTML = "See also: ".concat(melbi_uenzi({
      def: def.k,
      query: query,
      seskari: seskari
    }).tergeha, " ");
    out.appendChild(n);
  }

  if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
    var rafsi = document.createElement('div');
    rafsi.className = 'rafsi noselect';
    rafsi.innerHTML = 'rafsi: ';

    for (i = 0; i < def.r.length; i++) {
      var rafElem = document.createElement('span');
      rafElem.className = 'pamei';
      var raf = def.r[i];

      if ((def.t || '').match(/lujvo/)) {
        var a = document.createElement('a');
        a.setAttribute('href', "#seskari=".concat(seskari, "&sisku=").concat(encodeUrl(raf)));
        a.text = raf;
        rafElem.appendChild(a);
      } else {
        rafElem.innerHTML = basna({
          def: raf,
          query: query
        });
      }

      rafElem.innerHTML = "".concat(rafElem.innerHTML, " ");
      rafsi.appendChild(rafElem);
    }

    out.appendChild(rafsi);
  }

  if ((def.rfs || []).length > 0) {
    var subDefs = document.createElement('div');
    subDefs.classList.add('definition', 'subdefinitions');

    for (var i = 0; i < def.rfs.length; i++) {
      var o = skicu_palodovalsi({
        def: def.rfs[i],
        inner: true,
        index: "".concat(index, "_").concat(i)
      });
      if (o) subDefs.appendChild(o);
    }

    out.appendChild(subDefs);
  }

  out.addEventListener('click', clicked);
  return out;
}

function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, 'h');
}

function plukaquery(a) {
  if (a.charAt(0) !== '^' && a.slice(-1) !== '$') return a.replace(/\./g, ' ').replace(/ {2,}/g, ' ').replace(/’/g, "'").trim();
  return a;
}

function encodeUrl(uenzi) {
  return encodeURIComponent((uenzi || '').replace(/ /g, '_')).replace(/'/g, '%27');
}

function decodeUrl(urli) {
  return decodeURIComponent(urli.replace(/&amp;/g, '&').replace(/%27/g, "'")).replace(/[_]/g, ' ');
}

function escHtml(a, apos) {
  a = (a || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\(/g, '&#40;').replace(/\)/g, '&#41;');
  if (!apos) a = a.replace(/'/g, '&#039;');
  return a;
}

function skicu_rolodovalsi(_ref18) {
  var query = _ref18.query,
      seskari = _ref18.seskari;
  var displayUpTo = Math.min(window.jimte, results.length);
  state.cll = undefined;

  if (resultCount === 0) {
    var _CLL2 = CLL({
      pre: true,
      valsi: state.searching.query
    }),
        secs = _CLL2.secs,
        div = _CLL2.div;

    state.cll = secs;
    if (div) outp.appendChild(div);
  }

  for (; resultCount < displayUpTo; resultCount++) {
    outp.appendChild(skicu_palodovalsi({
      def: results[resultCount],
      query: query,
      seskari: seskari,
      length: results.length,
      index: resultCount
    }));
  }
}

function cnino_sorcu() {
  var db = new Dexie('sorcu');
  db.version(2).stores({
    valsi: '++id, bangu, w, d, n, t, g, r'
  });

  var _loop2 = function _loop2() {
    var lang = _arr[_i];
    fetch("/sutysisku/data/parsed-".concat(lang, ".json?sisku=").concat(new Date().getTime())).then(function (response) {
      var json;

      if (response.ok) {
        response.json().then(function (json) {
          var keys = Object.keys(json).map(function (key) {
            return _objectSpread({
              w: key,
              bangu: lang
            }, json[key]);
          });
          db.valsi.bulkPut(keys);
        });
      } else {
        alert('HTTP-Error: ' + response.status);
      }
    });
  };

  for (var _i = 0, _arr = ['en', 'ru', 'eo', 'es', 'fr-facile', 'ja', 'jbo', 'ru', 'zh']; _i < _arr.length; _i++) {
    _loop2();
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(function (_ref19) {
      var scope = _ref19.scope;
      console.log('ServiceWorker registration successful with scope: ', scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
} else {
  alert('Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari.');
}

var rows = [['p', 't', 'k', 'f', 's', 'c'], ['b', 'd', 'g', 'v', 'z', 'j'], ['m', 'l', 'n', 'r',, 'x', "'"], ['a', 'e', 'i', 'o', 'u', 'y'], [], ['aia', 'aua'], ['au', 'ai', 'ei', 'oi']];
var audio = document.querySelector('#audio');

function text(name, text, style) {
  var el = document.createElement(name);
  el.textContent = text;
  if (style) el.className = style;
  return el;
}

function elem(name, contents, style) {
  var el = document.createElement(name);
  if (style) el.className = style;
  if (Array.isArray(contents)) contents.forEach(function (sub) {
    el.appendChild(sub);
  });else if (contents) el.appendChild(contents);
  return el;
}

function play(url) {
  audio.src = url;
  audio.play();
}

document.querySelector('#table').appendChild(elem('table', rows.map(function (row) {
  return elem('tr', row.map(function (col) {
    var button = text('button', col, 'bangu');

    button.onclick = function () {
      play("/sutysisku/sance/lerfu/".concat(encodeURIComponent(col), ".ogg"));
    };

    return elem('td', button);
  }));
}), 'centero'));
var socket;
var socket1Chat;
ciska.focus();
