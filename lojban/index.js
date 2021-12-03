//imports:
import io from './socket.io.js'
import { initBackend } from './asql/indexeddb-main-thread.js'

//DOM element vars:
const content = document.getElementById('content')
const ciska = document.getElementById('ciska')
const clear = document.getElementById('clear')
const outp = document.getElementById('outp')
const descr = document.getElementById('descr')
const drata = document.getElementById('drata')
const citri = document.getElementById('citri')
const sidju = document.getElementById('sidju')
const pb = document.getElementById('kernelo_lo_cpacu')
let SiteTitleFull = document.querySelector('#site-title')
const dasri = document.getElementById('galtu-dasri')
const catni = document.getElementById('catni')
const cnano = document.getElementById('cnano')
const rimni = document.getElementById('rimni')
// var arxivo = document.getElementById("arxivo");
const SiteImage = document.querySelectorAll('#title > img')
const btnScrollToTop = document.getElementById('scrollToTop')
const audio = document.querySelector('#audio')
const loading = document.getElementById('loading')
const modalWindow = document.getElementById('jsModal')

// generic vars:

const CACHE_NAME = 'sutysisku'

window.leijufra = {}
let jvoPlumbsOn = true
const uncll_url = `https://la-lojban.github.io/uncll/uncll-1.2.14/xhtml_section_chunks/`
const learnlojban_url = 'https://lojban.pw/books/learn-lojban/#'
const supportedLangs = {
  en: { n: 'English', p: 'selsku_lanci_eng' },
  muplis: { n: 'la muplis' },
  'en-cll': { n: 'The Book', p: 'cukta' },
  'en-ll': { n: 'Learn Lojban', p: 'cukta' },
  jbo: { n: 'lojbo', p: 'lanci_jbo' },
  ru: { n: 'русский', p: 'selsku_lanci_rus' },
  eo: { n: 'esperanto', p: 'lanci_epo' },
  es: { n: 'español', p: 'selsku_lanci_spa' },
  'fr-facile': { n: 'français', p: 'selsku_lanci_fra' },
  ja: { n: '日本語', p: 'selsku_lanci_jpn' },
  zh: { n: '中文', p: 'selsku_lanci_zho' },
}

const listFamymaho = {
  GA: "gi",
  GUhA: "gi",
  BE: "bei be'o",
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
  MOhE: "te'u",
}
let resultCount
let results = []

//search after timeout
let typingTimer
//prepare:
const state = {
  searching: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  displaying: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  citri: [],
}
const loadingState = {
  loading: true,
  firstRun: true,
  mathRendered: false
}

try {
  const tcini = JSON.parse(localStorage.getItem('tcini'))
  if (tcini && tcini.seskari) state.searching.seskari = tcini.seskari
  if (tcini && tcini.versio) state.searching.versio = tcini.versio
  // if (tcini.query) state.searching.query = tcini.query
  if (tcini && tcini.bangu) state.searching.bangu = tcini.bangu
} catch (error) { }

state.citri = macitri()

const timers = {
  vh: null,
  typing: null,
}

let scrollTimer = null
let scrollJvoTimer = null

const UNICODE_START = 0xed80
const lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY"


//pronunciation guide
const rows = [
  ['p', 't', 'k', 'f', 's', 'c'],
  ['b', 'd', 'g', 'v', 'z', 'j'],
  ['m', 'l', 'n', 'r', , 'x', "'"],
  ['a', 'e', 'i', 'o', 'u', 'y'],
  [],
  ['aia', 'aua'],
  ['au', 'ai', 'ei', 'oi'],
]

let socket, socket1Chat, socket1Chat_connected
ciska.focus()

const pollyParams = {
  IdentityPoolId: 'us-east-1:35da84f8-d67e-4977-b07d-37650808ea00',
  region: 'us-east-1',
  VoiceId: 'Vicki',
  LanguageCode: 'de-DE',
  Engine: 'neural',
  lojban2IPAMapping: {
    '«': '',
    '-': '.',
    '»': '',
    '\\?': '',
    ',': '',
    '\\.': 'ʔ',
    ' ': ' ',
    ˈ: 'ˈ',
    a: 'aː',
    "a\\b(?!')": 'aː',
    e: 'ɛ:',
    "e\\b(?!')": 'ɛ:ʔ',
    i: 'i:',
    o: 'ɔ:',
    u: 'u:',
    y: 'ə',
    ą: 'aj',
    ę: 'ɛj',
    "ę\\b(?!')": 'ɛjʔ',
    ǫ: 'ɔj',
    ḁ: 'aʊ',
    ɩa: 'jaː',
    ɩe: 'jɛ:',
    ɩi: 'ji:',
    ɩo: 'jɔ:',
    ɩu: 'ju:',
    ɩy: 'jə',
    ɩ: 'j',
    wa: 'waː',
    we: 'wɛ:',
    wi: 'wi:',
    wo: 'wɔ:',
    wu: 'wu:',
    wy: 'wə',
    w: 'w',
    c: 'ʃ',
    j: 'ʒ',
    s: 's',
    z: 'z',
    f: 'f',
    ev: 'ɛ:ʔv',
    v: 'v',
    x: 'x',
    "'": 'h',
    dj: 'dʒ',
    tc: 'tʃ',
    dz: 'ʣ',
    ts: 'ʦ',
    'r(?=[^aeiouyḁąęǫ])': 'rr.',
    'r(?=[aeiouyḁąęǫ])': 'ɹ',
    n: 'n',
    m: 'm',
    l: 'l',
    b: 'b',
    d: 'd',
    g: 'g',
    k: 'k',
    p: 'p',
    t: 't',
  },
}
window.pollyParams = pollyParams

let audioParams
try {
  audioParams = JSON.parse(localStorage.getItem(`audioParams`))
} catch (error) { }


if (audioParams && audioParams.IdentityPoolId) {
  window.pollyParams = audioParams
} else {
  localStorage.setItem(`audioParams`, JSON.stringify(window.pollyParams))
}

window.delay = (() => (callback, ms, timer) => {
  clearTimeout(timers[timer])
  timers[timer] = setTimeout(callback, ms)
})()

//commands:

const worker = new Worker('worker.js?sisku=1638525479127')
initBackend(worker)

try {
  setStateFromUrl({
    replace: true,
  })
} catch (error) { }

RenderCitri()
calcVH()
let polly = PollyPlayer(window.pollyParams)
//listeners:
document.addEventListener('animationstart', listenToSearchRendered, false)
citri.addEventListener('click', clicked)//clicked link > push it
window.addEventListener('popstate', setStateFromUrl)//typed, stopped typing > push
ciska.addEventListener('paste', typing(0))
ciska.addEventListener('keyup', () => {
  typing()
})
ciska.addEventListener('keydown', () => {
  clearTimeout(typingTimer)
})
ciska.addEventListener('input', typing())
ciska.addEventListener('textInput', typing())
ciska.addEventListener('focus', focusSearch)//focus > push
clear.addEventListener('click', window.EmptyState)

rimni.addEventListener('click', () => {//change seskari
  state.searching = {
    ...state.displaying,
    seskari: 'rimni',
    versio: 'masno',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
  })
})

document.getElementById('cnano').addEventListener('click', () => {
  state.searching = {
    ...state.displaying,
    seskari: 'cnano',
    versio: 'masno',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
  })
})

document.getElementById('catni').addEventListener('click', () => {
  state.searching = {
    ...state.displaying,
    seskari: 'catni',
    versio: 'masno',
    query: plukaquery(ciska.value),
  }
  DispatchState({
    replace: false,
  })
})

window.addEventListener('resize', calcVH, true)
content.addEventListener('scroll', checkScrolledNearBottom)

if (document.attachEvent) {
  document.attachEvent('onkeyup', handler)
} else {
  document.addEventListener('keyup', handler)
}

window.applyNewPollyParams = function (input) {
  try {
    const json = {
      ...pollyParams,
      ...window.pollyParams,
      ...JSON.parse(input.value),
    }
    localStorage.setItem('audioParams', JSON.stringify(json))
    polly = PollyPlayer(json)
    localStorage.setItem('cachedAudio', null)
  } catch (error) { }
}

document.addEventListener('keyup', function (e) {
  if (e.ctrlKey && e.key === 'ArrowDown') {
    openModal({
      innerHTML: `
    <textarea id="modal_textArea" name="textarea" rows="10" onkeyup = "window.applyNewPollyParams(this)">${JSON.stringify(
        window.pollyParams,
        null,
        2
      )
        }</textarea>
    <button onclick="resetAudioParams(document.getElementById('modal_textArea'))">${window.modal_reset}</button>
  `})
  }
}, false)

window.addEventListener('load', async () => {
  await getCache({ mode: "co'a" })
  // if (!cacheIsFine) return

  // if (window.crossOriginIsolated) {
  console.log({ crossOriginIsolated: window.crossOriginIsolated })
  //check if our db is filled
  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lesorcu',
    ...state.searching,
  })
  updateLocales()
  // }

  // jimpe fi le jei su'o cnino sorcu ka'e se pilno ca lo nu jai gau akti fai le cnino papri
  if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.addEventListener('controllerchange',
    //   function () {
    //     if (window.refreshing) return;
    //     window.refreshing = true;
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 2000)
    //   }
    // );
    // navigator.serviceWorker.addEventListener('message', event => {
    //   if (event.data.event === 'loading cache') {
    //     console.log(event.data);

    //   }

    // });

    // navigator.serviceWorker.onmessage = function ({ data }) {
    //   console.log(data);

    // if (data && data.teminde && data.teminde === "co'a jmina le vreji") {
    //   console.log('updating cache started')
    // } else if (data && data.teminde && data.teminde === "mo'u jmina le vreji") {
    //   console.log('updating cache done')
    //   window.location.reload()
    //   // worker.postMessage({
    //   //   kind: 'fancu',
    //   //   cmene: 'ningau_lerosorcu',
    //   //   ...state.searching,
    //   // })
    // }
    // }
    //   navigator.serviceWorker.register('./sw.js', {
    //     scope: './'
    //   }).then(
    //     function (registration) {
    //       // console.log("COOP/COEP Service Worker registered", registration.scope);
    //       // // If the registration is active, but it's not controlling the page
    //       // if (registration.active && !navigator.serviceWorker.controller) {
    //       //   window.location.reload();
    //       // }
    //     },
    //     (err) => {
    //       console.log('ServiceWorker registration failed: ', err)
    //     }
    //   )
  } else if (location.protocol === 'https:') {
    alert(
      'Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari and don\'t use the app in incognito / private browsing mode (it needs to save dictionary data to disk to work successfully).'
    )
  } else {
    alert("HTTP protocol, la sutysisku won't work.")
    console.log("http protocol, service worker won't work")
  }
})

//functions:
function showLoaded() {
  loadingState.loading = false
  addAudioLinks()
  delete loadingState.resultsHash
  loading.style.display = 'none'
  document.getElementById('contentWrapper').style.paddingBottom = '0'
}

function showLoading({ completedRows, totalRows, bangu, hideProgress }) {
  loading.style.display = 'inline-flex'
  document.getElementById('contentWrapper').style.paddingBottom = '28px'
  const cpacu = document.getElementById('cpacu')
  if (hideProgress) {
    cpacu.style.display = 'none'
  } else {
    const percent = Math.min(
      100,
      Math.max(
        10,
        (parseFloat(completedRows) * 100) / parseFloat(totalRows)
      )
    )
    cpacu.style.display = 'block'
    pb.style.width = `${percent}%`
  }
  document.getElementById('bangu_loading').innerHTML = bangu
}

async function getCache({ mode }) {
  const cacheStorage = await caches.open(CACHE_NAME);
  const cachedList = await getCachedList();
  const initialCacheListLength = cachedList.length

  const response = await fetch(`/sutysisku/data/tcini.json?sisku=${new Date().getTime()}`)
  if (!response.ok) {
    if (initialCacheListLength === 0) alert("Are you offline? We can't fetch the source.")
    return false
  }
  const vreji = (await response.json()).vreji.map(v => new URL(v, window.location.origin + window.location.pathname).href)
  let cacheUpdated = false
  for (let i = 0; i < vreji.length; i++) {
    const url = vreji[i]
    if (mode === "co'a" && !/(\.(js|wasm|html|css)|\/$)/.test(url)) continue
    const cachedResponse = await cacheStorage.match(url);
    if (!cachedResponse) {
      await cacheStorage.add(url);
      cacheUpdated = true
      if (mode === "co'a") showLoading({ completedRows: i, totalRows: vreji.length, bangu: `📦 💾 📁 🛠️` })
    }
  }

  for (const key of cachedList) {
    if (!vreji.includes(key.url)) {
      await cacheStorage.delete(key.url, { ignoreMethod: true, ignoreVary: true });
      console.log({ event: 'removing cache', url: key.url });
    }
  }
  if (cacheUpdated) await cacheStorage.add(new URL('index.html', window.location.origin + window.location.pathname).href);
  showLoaded()
  if (mode === "co'a" && cacheUpdated) {
    window.location.reload()
  }
  //  else if (!window.crossOriginIsolated) {
  //   alert("la sutysisku will likely not work. Please, use Chrome/Chromium browser.")
  //   return false
  // }
  return true
}

async function getCachedList() {
  const cacheStorage = await caches.open(CACHE_NAME);
  return await cacheStorage.keys()
}


content.onscroll = () => {
  if (content.scrollTop > 200) {
    btnScrollToTop.style.display = 'block'
    btnScrollToTop.classList.remove('dizlo')
  } else {
    // btnScrollToTop.style.display = "none";
    btnScrollToTop.classList.add('dizlo')
  }
}

window.switchBorderScroll = () => {
  if (content.scrollTop > 200) {
    content.scrollTop = 0
  } else {
    content.scrollTop = content.scrollHeight
  }
}


function macitri() {
  let citri = []
  try {
    return JSON.parse(localStorage.getItem('citri')) || citri
  } catch (e) { }
  return citri
}

function RenderCitri() {
  if (state.citri.length > 0)
    citri.innerHTML = ` <span class="romoi_lehiseciska" data-jufra="window.purc">${window.purc || ''
      }</span>${state.citri
        .filter(({ seskari }) => seskari !== 'velcusku')
        .map(
          ({ seskari, versio, query, bangu }) =>
            `<a class="a-${seskari}${versio !== 'masno' ? ` a-${versio}` : ''}" href="#seskari=${seskari}&versio=${versio}&sisku=${encodeUrl(
              query
            )}&bangu=${bangu}">${escHtml(query)}</a>`
        )
        .join(', ')}`
}

function RenderDasri({ seskari, sepia }) {
  const colors = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni', 'fanva']
  if (state.displaying.bangu === 'muplis') {
    document.getElementById('leitutci').style.display = 'none'
  } else {
    document.getElementById('leitutci').style.display = 'flex'
  }
  if (!colors.includes(seskari)) seskari = 'cnano'
  dasri.className = `kampu-dasri ${seskari}-dasri noselect`
  SiteTitleFull.classList.add(`${seskari}-search-mode-title-color`)
  SiteTitleFull.classList.remove('desktop-mode-title-color')
  if (document.getElementById(seskari))
    document
      .getElementById(seskari)
      .classList.add(`${seskari}-tutci-hover`, 'tutci-hover')
  colors.map((c) => {
    if (c !== seskari) {
      SiteTitleFull.classList.remove(`${c}-search-mode-title-color`)
      if (document.getElementById(c))
        document
          .getElementById(c)
          .classList.remove(`${c}-tutci-hover`, 'tutci-hover')
    }
  })
  if (sepia)
    for (let i = 0; i < SiteImage.length; i++) {
      SiteImage[i].style.filter = sepia
    }
}

function listenToSearchRendered(event) {
  if (event.animationName == 'nodeInserted') {
    if (loadingState.loading !== true) addAudioLinks()
    SwitchRotation({
      action: 'stop',
    })
  }
}

function SwitchRotation({ action, quick }) {
  if (document.readyState !== 'complete') return
  const els = ['logo']
  if (action === 'start') {
    els.map((el) => {
      document.getElementById(el).classList.remove('stopRotate')
      document.getElementById(el).classList.add('rotate')
    })
    clear.classList.add('pulsate-css')
    setTimeout(
      () => {
        if (clear.classList.contains('pulsate-css'))
          ciska.classList.add('granim-css')
      },
      quick ? 100 : 500
    )
  } else {
    els.map((el) => {
      document.getElementById(el).classList.add('stopRotate')
    })
    ciska.classList.remove('granim-css')
    clear.classList.remove('pulsate-css')
  }
}

function EmitVelcusku() {
  // if (socket1Chat) socket1Chat.open()
}

function renderMathAndPlumbs() {
  MathJax.typesetPromise().then(() => {
    addJvoPlumbs(true)
  })
}

const hashResults = ({ query, seskari, bangu, len }) =>
  `${query}${seskari}${bangu}${len}`

function RenderResults({ query, seskari, bangu, versio }) {
  if (loadingState.loading) {
    const currentHash = hashResults({
      query,
      seskari,
      bangu,
      len: results.length,
    })
    if (
      state.displaying.query !== '' &&
      loadingState.resultsHash === currentHash
    )
      return
    loadingState.resultsHash = currentHash
  }
  removePlumbs()
  window.jimte = seskari === 'velcusku' ? 201 : 30
  resultCount = 0
  outp.innerHTML = ''
  skicu_rolodovalsi({
    query,
    seskari,
    bangu,
    versio,
  })
  if (results.length === 0)
    SwitchRotation({
      action: 'stop',
    })
  state.displaying = { ...state.displaying, query, versio, seskari, bangu }
  outp.style.display = 'block'
  descr.style.display = 'none'
  drata.style.display = 'none'
  sidju.style.display = 'flex'
  content.scrollTop = 0
  switch (state.displaying.seskari) {
    case 'rimni':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'rimni', sepia: 'sepia(}1.0)' })
      break
    case 'arxivo':
      RenderDasri({ seskari: 'arxivo', sepia: 'none' })
      break
    case 'velcusku':
      RenderDasri({ seskari: 'velcusku', sepia: 'none' })
      break
    case 'catni':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'catni', sepia: 'none' })
      break
    case 'fanva':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'fanva', sepia: 'none' })
      break
    case 'cnano':
    default:
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'cnano', sepia: 'none' })
  }


  //todo: arrpurc or state.history
  DispatchCitri()

  ga('send', 'pageview', `#sisku/${state.displaying.query}`)
  const pageViewData = {
    dl: window.location.href,
    dt: document.title,
    dr: document.referrer,
    dp: `#sisku/${state.displaying.query}`,
    dh: `${window.location.protocol}//${window.location.hostname}`,
    z: Math.round(Math.random() * 1e12),
  }
  if (socket) socket.emit('sisku', pageViewData)

}

function removePlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    e.parentNode.removeChild(e)
  })
}

function appendPlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (e) {
    document.querySelector('#content').appendChild(e)
  })
}

function addJvoPlumbs(force) {
  scrollJvoTimer = setTimeout(
    () => {
      removePlumbs()
      addPlumbs()
      if (force !== true) {
        const plumbers = document.getElementsByClassName('jvo_plumber')
        jvoPlumbsOn = !jvoPlumbsOn
        for (var i = 0; i < plumbers.length; i++) {
          const plumber = plumbers[i]
          plumber.value = jvoValue()
          jvoPlumbsOn
            ? plumber.classList.add('tutci-hover')
            : plumber.classList.remove('tutci-hover')
        }
      }
      if (!jvoPlumbsOn) return
      const targetedEls = Array.from(document.querySelectorAll('[data-arr]'))
      for (let targetedElIndex = 0; targetedElIndex < targetedEls.length; targetedElIndex++) {
        const target = targetedEls[targetedElIndex]
        const target_id = target.id
        const targetVeljvoElements = target.attributes['data-arr'].nodeValue.split(',')
        const targetIdComponents = target.id.split('_')
        const targetFinalIndex = targetIdComponents.slice(0, -1)
        const WeCanSeeThisElement = kahe_sezgana(target)
        targetedEls.filter((startElement) => {
          const startElIdComponents = startElement.id.split('_')
          const startElFinalIndexes = startElIdComponents.slice(0, -2)
          const startElVeljvoElements = startElement.attributes['data-arr'].nodeValue.split(',')
          const startVeljvoElementComponents = startElVeljvoElements[0].split(/(?=[0-9]+)/)
          if (
            startElVeljvoElements.length === 1 &&
            startElFinalIndexes.length === targetFinalIndex.length &&
            startElFinalIndexes.join('_') === targetFinalIndex.join('_') &&
            targetVeljvoElements.filter((targetVeljvoElement) => {
              const targetVeljvoElementComponents = targetVeljvoElement.split(/(?=[0-9])/)
              return startVeljvoElementComponents[0].indexOf(targetVeljvoElementComponents[0]) === 0 && startVeljvoElementComponents[1] === targetVeljvoElementComponents[1]
            }).length > 0 &&
            (WeCanSeeThisElement || kahe_sezgana(startElement))
          ) {
            let color = startElement.attributes['data-color'].nodeValue
            color = `hsla(${color},100%,70%,0.62)`
              ; new LeaderLine(
                document.getElementById(startElement.id),
                document.getElementById(target_id),
                {
                  endPlugColor: color,
                  color: color,
                  dash: { animation: true },
                  startSocketGravity: [50, -67],
                  endSocketGravity: [0, 67],
                  endPlug: 'arrow2',
                  endSocket: 'bottom',
                  size: 3,
                }
              )
          }
        })

        appendPlumbs()
      }
    },
    force === true ? 450 : 0
  )
}

function addPlumbs() {
  //plumbs for in-terbri interactions
  const targetedEls = document.querySelectorAll('[data-target]')
  for (let i = 0; i < targetedEls.length; i++) {
    const target = targetedEls[i]
    if (kahe_sezgana(target)) {
      const target_id = target.id
      const start = target.attributes['data-target'].nodeValue
      let color = document.getElementById(start).attributes['data-color'].nodeValue
      color = `hsla(${color},100%,70%,0.62)`
        ; new LeaderLine(
          document.getElementById(start),
          document.getElementById(target_id),
          {
            // gradient: {
            //   startColor: 'rgba(135, 0, 0, 0.4)',
            //   endColor: 'rgba(255, 120, 0, 0.4)',
            // },
            endPlugColor: color,
            color: color,
            dash: { animation: true },
            // outlineColor: '#111',
            // outline: true,
            startSocketGravity: [50, -67],
            endSocketGravity: [0, 67],
            endPlug: 'arrow2',
            // startSocket: 'top',
            endSocket: 'bottom',
            size: 3,
          }
        )
    }
  }
  appendPlumbs()
}

function kahe_sezgana(el) {
  const rect = el.getBoundingClientRect()
  return rect.top >= 42 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function twoJsonsAreEqual(obj1 = {}, obj2 = {}) {
  let flag = true

  if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (const key in obj1) {
      if (obj1[key] == obj2[key]) {
        continue
      } else {
        flag = false
        break
      }
    }
  } else {
    flag = false
  }
  return flag
}
//listeners
worker.onmessage = (ev) => {
  const { data } = ev
  const { kind, cmene } = data
  if (kind == 'searchResults') {
    delete loadingState.searching
    if (!data.force && !twoJsonsAreEqual(data.req, state.searching)) return
    results = data.results || []
    RenderResults({
      ...data.req,
    })
  } else if (kind == 'parse' && data.req && data.req.operation == 'audioLink') {
    let word = (data.req.tegerna || '').replace(/"/g, '')
    if (!word) return
    const encodedWord = encodeValsiForWeb(word)
    data.results = data.results.map((i) => [i[0], i[1].replace(/-/g, '')])
    const isReliableText = allAreSafeWords(data.results, {
      allowCmavo: true,
      allowCmevla: true,
    })

    if (!isReliableText) return
    word = data.results.map((i) => i[1]).join(' ')

    const hd = Array.from(
      document.querySelectorAll(`[data-valsi="${encodedWord}"]`)
    )[0]
    const hd2 = Array.from(
      document.querySelectorAll(`[data-valsi-play="${encodedWord}"]`)
    )[0]
    if (hd && !hd2) {
      try {
        const gotAudio = window.runSpeakableAudio(word, true)
        if (gotAudio) hd.insertAdjacentHTML(
          'afterend',
          `<button class="tutci sance" data-valsi-play="${encodedWord}" onclick="window.runSpeakableAudio(&quot;${word}&quot;)">▶</button>`
        )
      } catch (error) {

      }
    }

    // } else if (data.kind == 'fancu') {
    //   const { cmene, results } = data
    //   switch (cmene) {
    //     case 'tejufra':
    //       updateDOMWithLocales(results, { ...state.searching, ...data.datni })
    //       break
    //   }
  } else if (kind == 'loader') {
    if (cmene === 'loading') {
      if (
        data.banguRaw === state.searching.bangu ||
        data.completedRows === 0 ||
        data.completedRows === data.totalRows
      ) {
        if (
          data.completedRows === data.totalRows ||
          !twoJsonsAreEqual(loadingState.searching, state.searching)
        ) {
          loadingState.searching = state.searching
          loadingState.loading = true
          worker.postMessage({
            kind: 'newSearch',
            versio: 'masno',
            ...state.searching,
            leijufra: window.leijufra,
            loadingState,
          })
        }
      }
      showLoading({ completedRows: data.completedRows, totalRows: data.totalRows, bangu: "🗃️ " + data.bangu })
    } else if (cmene === 'loaded') {
      showLoaded()
      getCache({ mode: "ca'o" })
    } else if (cmene === 'booting') {
      showLoading({ completedRows: 1, totalRows: 3, bangu: "🗃️ " + (window.booting || '') })
    }
    calcVH()
  } else if (kind == 'fancu') {
    switch (cmene) {
      case 'tejufra':
        updateDOMWithLocales(data.results, {
          ...state.searching,
          ...data.datni,
        })
        break
    }
  }
}
if (socket)
  socket.on('la_arxivo_cu_cusku', ({ seskari, query, message }) => {
    if (
      state.searching.seskari === seskari &&
      state.searching.query === query
    ) {
      results = message || []
      RenderResults({
        query: query,
        seskari: seskari,
      })
    }
  })

//loaded doc > from url > push new seskari/query, update url
//get events:
function parseQuery(queryString) {
  if (queryString === '') return
  const query = {}
  let pairs = ''
  //legacy support:
  if (queryString.search(/^#sisku\//) === 0) {
    pairs = [queryString.replace(/#sisku\/(.*)/, 'sisku=$1')]
  } else {
    pairs = (
      queryString[0] === '#' ? queryString.substr(1) : queryString
    ).split('&')
  }
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
    if (pair[1])
      query[decodeURIComponent(pair[0])] = decodeURIComponent(
        pair[1].replace(/[\+]/g, ' ') || ''
      )
  }
  return query
}

function setStateFromUrl({ href, replace }) {
  if (href) {
    href = href.substring(href.indexOf('#') + 1)
    localStorage.setItem('url', `#${href}`)
  }
  let params = parseQuery(href || window.location.hash) || {}
  let newSearch
  if (params && params['sisku']) {
    newSearch = decodeUrl(params['sisku'])
  } else {
    href = href || window.location.search
    href = href.substring(href.indexOf('?') + 1)
    const search = new URLSearchParams(href)
    newSearch = decodeUrl(search.get('focus') || '')
    if (newSearch) {
      params = { sisku: newSearch, seskari: 'cnano' }
    }
  }
  const stateToUpdate = { ...state.searching }
  if (
    params['seskari'] &&
    ['velcusku', 'cnano', 'catni', 'rimni', 'arxivo', 'fanva'].includes(
      params['seskari']
    )
  ) {
    stateToUpdate.seskari = params['seskari']
  }
  stateToUpdate.versio = 'masno'
  if (params['versio'] && ['selmaho'].includes(params['versio'])) {
    stateToUpdate.versio = params['versio']
  }
  if (
    params['bangu'] &&
    Object.keys(supportedLangs).includes(params['bangu'])
  ) {
    stateToUpdate.bangu = params['bangu']
  }
  if (params['sisku']) {
    stateToUpdate.query = newSearch
  }
  if (!twoJsonsAreEqual(stateToUpdate, state.searching)) {
    state.searching = { ...state.searching, ...stateToUpdate }
    DispatchState({
      replace,
    })
  }
}

function clicked({ target }) {
  if (target.nodeName === 'A') {
    const el = target
    if (el.ctrlKey || el.metaKey) return
    setStateFromUrl({
      replace: false,
      href: el.getAttribute('href'),
    })
  }
  return
}

function setUrlFromState({ replace }) {
  let versio = ''
  if (state.searching.versio) {
    versio = `&versio=${state.searching.versio}`
  }
  let url = `${window.location.href.split('?')[0].split('#')[0]}#seskari=${state.searching.seskari
    }&sisku=${encodeUrl(state.searching.query)}&bangu=${state.searching.bangu
    }${versio}`
  if (state.searching.query === '') {
    url = ''
    document.title = 'la sutysisku'
  } else {
    document.title = `${state.searching.query} - la sutysisku`
  }
  const lastUrl = localStorage.getItem('url') || ''
  if (replace === true) {
    window.history.replaceState({}, null, url)
  } else if (window.location.hash !== url && lastUrl !== url) {
    window.history.pushState({}, null, url)
  }
  localStorage.setItem('url', url)
}

function GetCiskaAndDispatch() {
  state.searching.query = plukaquery(ciska.value)
  // state.searching.versio = 'masno'
  DispatchState({
    caller: 'GetCiskaAndDispatch',
  })
}

function typing(timeout) {
  clearTimeout(typingTimer)
  const defaultTimeout = 250
  if (state.searching.bangu === 'muplis') timeout = 500
  if (state.searching.versio === 'selmaho') state.searching = { ...state.searching, seskari: 'catni', versio: 'masno' }
  typingTimer = setTimeout(GetCiskaAndDispatch, timeout ? timeout : defaultTimeout)
}


function focusSearch() {
  if (loadingState.firstRun) {
    loadingState.firstRun = false
    return
  }
  state.searching.query = plukaquery(ciska.value)
  DispatchState({ quickRotation: true })
}

window.EmptyState = (bangu) => {
  if (typeof bangu === 'string') {
    state.searching.bangu = bangu
    updateLocales()
  }
  DispatchState({
    empty: true,
  })
}

document.getElementById("report_feedback_main").addEventListener("click", function () {
  window.tmp_value = state.displaying;
  openModal({
    innerHTML: `
        <h2>${window.report_feedback}</h2>
        <h3 class="valsi">${state.displaying.query}</h3>
        <h4 class="valsi">${supportedLangs[state.displaying.bangu].n}</h4>
        <textarea id="modal__textarea" class="modal__textarea" row="10" placeholder="${window.report_feedback_description}"></textarea>
        <button class="tutci feedback" onclick="this.firstElementChild.classList.remove('d-none');window.send_feedback({state: window.tmp_value, comment: document.getElementById('modal__textarea').value})"><div class="spinner d-none"></div>${window.report_feedback}</button>
  `})
})
// document.getElementById("arxivo").addEventListener("click", function () {
//   state.searching = {
//     seskari: "arxivo",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

// document.getElementById("velcusku").addEventListener("click", function () {
//   state.searching = {
//     seskari: "velcusku",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

function DispatchCitri() {
  if (
    ['fanva', 'velcusku'].includes(state.displaying.seskari) ||
    state.displaying.query === ''
  )
    return
  let i = 0
  for (i = 0; i < state.citri.length; i++) {
    if (
      state.citri[i].query === state.displaying.query &&
      state.citri[i].seskari === state.displaying.seskari
    ) {
      state.citri.splice(i, 1)
      break
    }
  }
  state.citri.unshift({ ...state.displaying })
  if (state.citri.length > 10) state.citri.length = 10
  localStorage.setItem('citri', JSON.stringify(state.citri))
  RenderCitri()
}
//Dispatch State
function DispatchState({ replace, caller, empty, quickRotation }) {
  updateLocales()
  // if (socket1Chat) socket1Chat.close()
  state.searching.query = state.searching.query
  setUrlFromState({
    replace,
  })
  localStorage.setItem('tcini', JSON.stringify(state.searching))
  if (empty == true) {
    state.searching.query = ''
    return RenderDesktop()
  } else if (state.searching.seskari !== 'velcusku') {
    if (state.searching.query === '') return RenderDesktop()
    if (twoJsonsAreEqual(state.searching, state.displaying)) return
  }
  //emit search
  ciska.value = state.searching.query

  SwitchRotation({
    action: 'start',
    quick: quickRotation,
  })
  if (
    caller === 'GetCiskaAndDispatch' &&
    state.searching.seskari === 'velcusku'
  )
    state.searching.seskari = 'cnano'
  switch (state.searching.seskari) {
    case 'arxivo':
      const json = { ...state.searching }
      if (
        state.searching.query.charAt(0) !== '^' &&
        state.searching.query.slice(-1)[0] !== '$'
      )
        json.query = `\\b${state.searching.query}\\b`
      json.max = 20
      if (socket) socket.emit('cpedu_fi_la_arxivo', json)
      break
    case 'velcusku':
      EmitVelcusku()
      break
    default:
      if (loadingState.loading)
        worker.postMessage({
          kind: 'fancu',
          cmene: 'cnino_bangu',
          ...state.searching,
        })
      worker.postMessage({
        kind: 'newSearch',
        versio: 'masno',
        ...state.searching,
        leijufra: window.leijufra,
        loadingState,
      })
  }
}

function updateDOMWithLocales(jufra, miniState) {
  if (!jufra.window) return
  for (const key in jufra.window) {
    const subKey = key.replace('window.', '')
    window.leijufra[subKey] = window[subKey] = jufra.window[key]
  }

  Array.from(document.querySelectorAll('[data-jufra]')).forEach((node) => {
    const key = node.attributes['data-jufra'].nodeValue
    let val = jufra[key]
    if (key.indexOf('window.') === 0) {
      val = jufra.window[key]
      const subKey = key.replace('window.', '')
      window[subKey] = jufra.window[key]
    }
    switch (node.nodeName) {
      case 'INPUT':
        node.placeholder = val || node.placeholder
        break
      default:
        node.innerHTML = val || node.innerHTML
    }
  })
  SiteTitleFull = document.querySelector('#site-title')
  RenderDasri({ ...miniState, sepia: 'none' })
  if (state.displaying.query === '') RenderDesktop(miniState)
  const velsku = document.getElementById('velsku_sebenji')
  if (velsku)
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`
}

function updateLocales() {
  worker.postMessage({ kind: 'fancu', cmene: 'tejufra', ...state.searching })
}

//rendering
function RenderDesktop(tempState) {
  if (!tempState)
    SwitchRotation({
      action: 'stop',
    })
  tempState = tempState || state.displaying
  removePlumbs()
  content.scrollTop = 0
  const lastQuery = tempState.query
  state.displaying.query = ''
  // ciska.value = "";
  SiteTitleFull.classList.add('desktop-mode-title-color')
  SiteTitleFull.classList.remove(
    'catni-search-mode-title-color',
    'cnano-search-mode-title-color',
    'velcusku-search-mode-title-color',
    'rimni-search-mode-title-color',
    'fanva-search-mode-title-color',
    'arxivo-search-mode-title-color'
  )
  try {
    catni.classList.remove('catni-tutci-hover', 'tutci-hover')
  } catch (error) { }
  try {
    cnano.classList.remove('cnano-tutci-hover', 'tutci-hover')
  } catch (error) { }
  try {
    rimni.classList.remove('rimni-tutci-hover', 'tutci-hover')
  } catch (error) { }
  // velcusku.classList.remove("velcusku-tutci-hover", "tutci-hover");
  // arxivo.classList.remove("arxivo-tutci-hover", "tutci-hover");
  dasri.className = 'kampu-dasri cnano-dasri'
  outp.style.display = 'none'
  descr.style.display = 'block'
  
  const obj = {
    '@CLL': {
      bangu: 'english',
      cmene: 'Reference Grammar',
      pixra: '../pixra/cll.png',
      url: uncll_url,
    },
    '@lojban.pw': {
      cmene: 'Live chat for your questions',
      pixra: '../pixra/nunsku.svg',
      url: `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`,
    },
    '@LL': {
      bangu: 'english',
      cmene: 'Learn Lojban',
      pixra: '../pixra/cogwheel-5.svg',
      url: learnlojban_url,
    },
    muplis: {
      cmene: 'la muplis',
      pixra: '../pixra/taplamuplis.svg',
      width: 2.1,
    },
    en: { cmene: 'English-Lojban', pixra: '../pixra/selsku_lanci_eng.svg' },
    jbo: { cmene: "fanva fi le'e lojbo ri", pixra: '../pixra/lanci_jbo.svg' },
    ja: {
      cmene: '日本 - <span style="white-space:pre;">ロジバン</span>',
      pixra: '../pixra/selsku_lanci_jpn.svg',
    },
    'fr-facile': {
      cmene: 'français facile - lojban',
      pixra: '../pixra/selsku_lanci_fra.svg',
    },
    ru: { cmene: 'русский - ложбан', pixra: '../pixra/selsku_lanci_rus.svg' },
    eo: { cmene: 'Esperanto - Loĵbano', pixra: '../pixra/lanci_epo.svg' },
    es: { cmene: 'español - lojban', pixra: '../pixra/selsku_lanci_spa.svg' },
    zh: { cmene: '中文 - 逻辑语', pixra: '../pixra/selsku_lanci_zho.svg' },
  }

  
  
  let acc = ''
  const cisn = 100
  for (const key in obj) {
    let { bangu, width, pixra, url, cmene } = obj[key]
    if (!width) width = 1
    if (!bangu || bangu === window.bangu) {
      acc += `<div class='DIV_1' style='height:${cisn}px;width:${width * cisn
        }px;'><div class='DIV_2' style='height:${cisn}px;width:${width * cisn
        }px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>${window.leijufra[cmene] || cmene
        }</b></span><a${(url || '').indexOf('http') === 0
          ? " rel='noreferrer' target='_blank'"
          : ''
        } aria-label="${cmene.replace(
          /<[^>]+?>/g,
          ''
        )}" onclick="window.ningau_lepasorcu('${key}')" href="${key.indexOf('@') === 0
          ? url
          : `#seskari=${tempState.seskari !== 'fanva' ? tempState.seskari : 'catni'
          }&sisku=${encodeUrl(lastQuery)}&bangu=${key}&versio=masno`
        }" class='A_7'><div class='DIV_8' style='height:${cisn}px;width:${width * cisn
        }px;background-image:url("${pixra}")'></div></a></div></div>`
    }
  }
  drata.innerHTML = acc
  drata.style.display = 'block'
}

function handler({ keyCode }) {
  if (keyCode && keyCode === 191) ciska.focus()
}
if (document.readyState === 'loading') {
  pb.style.width = '37%'
  document.title = 'la sutysisku'
}

function calcVH() {
  const { clientHeight: dasriHeight } =
    document.getElementById('galtu-dasri')
  const { clientHeight: loadingHeight } = document.getElementById('loading')
  const { clientHeight: velskuHeight } = document.getElementById('velsku')
  content.setAttribute(
    'style',
    `height:${Math.max(
      document.documentElement.clientHeight -
      dasriHeight -
      loadingHeight -
      velskuHeight,
      window.innerHeight - dasriHeight - loadingHeight - velskuHeight,
      50
    )}px;`
  )

}


// function getCLLSections(te_gerna) {
//   let a = window.arrcll[te_gerna]
//   if (!a) {
//     te_gerna = te_gerna.replace(/[^A-Z]+$/, '')
//     if (te_gerna === '') return
//     a = window.arrcll[te_gerna]
//   }
//   return a
// }

// function CLL({ pre, valsi }) {
//   if (!window.cll_url | ((window.arrcll || []).length === 0)) return {}
//   if (pre && !valsi.match(/^[A-Zh]+[\+A-Zh0-9]*$/)) return {}
//   const secs = getCLLSections(valsi)
//   if (!secs) return {}
//   const cllHtmlLinksString = `${
//     window.cllnotci
//   }<ul class='uoldeliste'>${Object.keys(secs)
//     .map(
//       (sec) =>
//         `<li><a rel='noreferrer' target='_blank' href="${
//           window.cll_url
//         }${sec}">${escHtml(secs[sec])}</a></li>`
//     )
//     .join('')}</ul>`
//   const div = document.createElement('div')
//   div.className = `${pre ? 'sidju' : 'definition'} cll noselect`
//   div.innerHTML = cllHtmlLinksString
//   return { secs, div }
// }



function checkScrolledNearBottom({ target }) {
  removePlumbs()
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer)
  }
  if (scrollJvoTimer !== null) {
    clearTimeout(scrollJvoTimer)
  }
  if (
    state.displaying.seskari !== 'velcusku' &&
    target.scrollTop + window.innerHeight >= outp.clientHeight - 700
  ) {
    window.jimte += 10
    skicu_rolodovalsi(state.displaying)
    MathJax.typesetPromise().then(() => {
      addJvoPlumbs(true)
    })
  } else {
    addJvoPlumbs(true)
  }
  addAudioLinks()
}

function bgString2Int(string, { s, l }) {
  const sl = `,${s || '90%'},${l || '80%'}`
  const array = string.split(",");
  let acc = []
  for (let i = 0; i < array.length; i++) {
    const color = string2Int(array[i], 256, 32)
    if (i === 0) {
      acc.push(`hsl(${color}${sl}),hsl(${color}${sl}) ${100 * (i + 1) / array.length}%`)
    } else if (i === array.length - 1) {
      acc.push(`hsl(${color}${sl}) ${100 * i / array.length}%,hsl(${color}${sl})`)
    } else {
      acc.push(`hsl(${color}${sl}) ${100 * i / array.length}%,hsl(${color}${sl}) ${100 * (i + 1) / array.length}%`)
    }
  }
  return acc.join(",")
}
const cyrb53 = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

function string2Int(stringToHash, maxNumber, quantifier) {
  stringToHash = stringToHash.replace(/[\{\}_]/g, '')
  return Math.abs(
    Math.round(
      (cyrb53(stringToHash) %
        maxNumber) /
      quantifier
    ) * quantifier
  )
}
function getVeljvoLetters(v) {
  v = v.substr(1, v.length - 2).split('=')

  const jalge = v.map((i) => i.replace(/[^A-Za-z']/g, ''))
  return {
    jalge,
    hasExpansion: v.length > 1 || (jalge[0] && jalge[0] !== 'x'),
  }
}

function getVeljvoString({ placeTag, fullDef, isHead, dataArrAdded, clearedPlaceTag }) {
  if (isHead && fullDef.t !== 'lujvo') return { dataArr: false, replacement: placeTag, stringifiedPlaceTag: placeTag }
  const rfsWords = (fullDef.rfs || []).map(i => i.w)
  const arrayPlaceTags = placeTag
    .substr(1, placeTag.length - 2)
    .split('=')
    .map((i) => {
      const arrayTag = i.split(/(?=[_0-9].*)/)
      const candidateWord = rfsWords.filter(word => word.indexOf(arrayTag[0]) === 0)[0]
      return {
        full: isHead ? candidateWord || arrayTag[0] : fullDef.w,
        number: arrayTag.slice(1).join(""),
        short: isHead ? arrayTag[0] : fullDef.w,
        hasMatchInRFS: !!candidateWord
      }
    })
  const stringifiedPlaceTag = arrayPlaceTags.filter(i => i.hasMatchInRFS || !isHead).map(i => i.full + i.number.replace(/[_\{\}]/g, '')).join(',') || clearedPlaceTag
  const replacingPlaceTag = arrayPlaceTags.map(i => i.full + i.number).join("=")
  return { stringifiedPlaceTag, dataArr: !dataArrAdded.includes(clearedPlaceTag), replacement: `$${replacingPlaceTag}$` }
}

function melbi_uenzi({ def, fullDef, query, seskari, versio, bangu, type, index }) {
  if (fullDef) {
    if (fullDef.bangu.indexOf('-cll') >= 0) {
      const d = Object.keys(def)
        .map((address) => {
          const velcki = def[address]
          return `<li><a rel='noreferrer' target='_blank' href="${uncll_url}${address}">${velcki}</a></li>`
        })
        .join('')
      return {
        tergeha: `<ul class='uoldeliste' style="list-style-image: url(../pixra/cukta.svg);">${d}</ul>`,
        hasExpansion: false,
      }
    } else if (fullDef.bangu.indexOf('-ll') >= 0) {
      const d = Object.keys(def)
        .map((address) => {
          const velcki = def[address]
          return `<li><a rel='noreferrer' target='_blank' href="${learnlojban_url}${address}">${velcki}</a></li>`
        })
        .join('')
      return {
        tergeha: `<ul class='uoldeliste' style="list-style-image: url(../pixra/certu.svg);">${d}</ul>`,
        hasExpansion: false,
      }
    }
  }

  const hasHtml = /<\/?a [\s\S]*>/i.test(def)
  let iterTercricmiId = 0
  const jsonIds = []
  const types = []
  const dataArrAdded = []
  let hasExpansion = false
  if (!['cnano', 'catni', 'rimni'].includes(seskari)) seskari = 'cnano'

  const placeTags = def.match(/\$.*?\$/g) || []
  for (const placeTag of placeTags) {
    if (type === 'd' && typeof index !== 'undefined') {
      const rt = getVeljvoLetters(placeTag)
      if (rt.hasExpansion) hasExpansion = true
      let regexpForPrettifiedPlaceTag
      try {
        regexpForPrettifiedPlaceTag = new RegExp(
          `^(${placeTag
            .replace(/[^a-zA-Z0-9\{\}_]/g, '')
            .replace(/([\{\}])/g, '\\$1')} \\([^\\(\\)<>]+?\\)).*`
        )
      } catch (error) {
        console.log(placeTag, fullDef, error)
      }
      types.push({ [placeTag]: placeTag.search(regexpForPrettifiedPlaceTag) !== 0 ? placeTag : q.replace(regexpForPrettifiedPlaceTag, '$1') })
    }
  }

  let jalge = def
    .replace(/\$=\$/g, (placeTag) => {
      return `$<span class="veljvocmiterjonmaho">=</span>$`
    })
    .replace(/\$.*?\$/g, (placeTag, offset) => {
      iterTercricmiId++
      const combInd = `${index}_${iterTercricmiId}`

      if (type === 'd') jsonIds.push({ [placeTag]: combInd })
      const clearedPlaceTag = placeTag.replace(/[^a-zA-Z0-9]/g, '')
      const isHead = fullDef && (fullDef.rfs || []).length > 0 ? true : false

      const objectVeljvoReplacement = getVeljvoString({
        isHead,
        placeTag,
        fullDef,
        dataArrAdded,
        clearedPlaceTag,
      })
      const replacementTag = isHead ? objectVeljvoReplacement.replacement : placeTag;
      const gradient = bgString2Int(objectVeljvoReplacement.stringifiedPlaceTag, { s: '90%', l: '100%' });
      const gradientBorder = bgString2Int(objectVeljvoReplacement.stringifiedPlaceTag, { s: '100%', l: '40%' });
      // dataArrAdded.push(clearedPlaceTag)
      const span = document.createElement('span')
      if (type === 'd') span.id = combInd
      span.classList.add("terbricmi")
      span.style = `background: repeating-linear-gradient(to right,${gradient}), linear-gradient(90deg, ${gradientBorder});background-origin: content-box, padding-box;background-clip: content-box, padding-box;padding: 1px;border-radius:999px;`
      if (objectVeljvoReplacement.dataArr && (type === 'd')) span.setAttribute("data-arr", objectVeljvoReplacement.stringifiedPlaceTag)
      if (!isHead) span.setAttribute("data-color", string2Int(objectVeljvoReplacement.stringifiedPlaceTag, 256, 32))
      span.innerHTML = replacementTag.replace(/\{/g, '\\curlyleft').replace(/\}/g, '\\curlyright')
      return span.outerHTML
    })
    .replace(
      /(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,
      (c, _, id, t) => {
        if (type === 'd') {
          const a = jsonIds.filter((e) => e[t] !== id && e[t])
          if (a[0] && a[0][t])
            c = c.replace(/^<span /, `<span data-target="${a[0][t]}" `)
        }
        return c
      }
    )
  if (!hasHtml)
    jalge = jalge.replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      (c) => {
        let res = `</span><a href="${c}" rel="noreferrer" target="_blank">${basna(
          {
            def: c,
            query,
          }
        )}</a><span>`
        if (c.match(/^https?:\/\/.*\.(jpg|png)$/))
          res += `<img class='se-tcidu-pixra' alt='secusku' src="${c}"/>\n`
        return res
      }
    )
  jalge = jalge
    .replace(/\{.*?\}/g, (c) => {
      var c = c.substring(1, c.length - 1)
      return `</span><a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
        c
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(c, true),
        query,
      })}</a><span>`
    })
    .replace(/\$.*?\$/g, (c) =>
      c.replace(/\\curlyleft/g, '{').replace(/\\curlyright/g, '}')
    )
  jalge = `<span>${jalge}</span>`
  jalge = jalge
    .replace(/<span><\/span>/g, '')
    .replace(
      /(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,
      (
        c // var c = c.substring(1, c.length - 1)
      ) =>
        basna({
          def: c,
          query,
        })
    )
    .replace(/\n/g, '<br/>')
  return { tergeha: jalge, hasExpansion }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function basna({ def, query }) {
  if (!query || query.length <= 2) return def
  query = query.trim().replace(/[\|\(\)\{\}<>]/g, '.')
  let wordsToHilite = escapeRegExp(query).split(" ").filter(i => i.length > 2).concat(escapeRegExp(query.replace(/'/g, 'h')).split(" ").filter(i => i.length > 2))
  if (wordsToHilite.length === 0) return def;

  const regexpToHilite = `(${wordsToHilite.join("|")})`
  return def.replace(new RegExp(regexpToHilite, 'igm'), "<span class='basna'>$1</span>")
}


function krulermorna(text) {
  return text
    .replace(/\./g, '')
    .replace(/^/, '.')
    .toLowerCase()
    .replace(/([aeiou\.])u([aeiou])/g, '$1w$2')
    .replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2')
    .replace(/au/g, 'ḁ')
    .replace(/ai/g, 'ą')
    .replace(/ei/g, 'ę')
    .replace(/oi/g, 'ǫ')
    .replace(/\./g, '')
}
function cohukrulermorna(text) {
  return text
    .replace(/w/g, 'u')
    .replace(/ɩ/g, 'i')
    .replace(/ḁ/g, 'au')
    .replace(/ą/g, 'ai')
    .replace(/ę/g, 'ei')
    .replace(/ǫ/g, 'oi')
}

function zbalermornaize({ w, ot, rfs }) {
  let word = krulermorna(w)
  word = word
    .split(/(?=[ɩw])/)
    .map((spisa) =>
      cohukrulermorna(spisa)
        .split('')
        .map((lerfu) => latinToZbalermorna(lerfu))
        .join('')
    )
    .join('')
  return word.replace(/,/g, '')
}

function latinToZbalermorna(c) {
  if (c.codePointAt(0) >= 0xed80) {
    return c
  }
  if (c == ' ') return ' '
  if (c == 'h' || c == 'H') c = "'"
  if (lerfu_index.includes(c))
    return String.fromCodePoint(UNICODE_START + lerfu_index.indexOf(c))
  else if (lerfu_index.includes(c.toLowerCase()))
    return String.fromCodePoint(
      UNICODE_START + lerfu_index.indexOf(c.toLowerCase())
    )
  if (c == '\n') return '\n'
  if (c == '\t') return '\t'
  return c
}


function getMatchIndices(query, d) {
  const regex = new RegExp(query, 'g')
  const result = []
  let match
  while ((match = regex.exec(d))) result.push(match.index)
  return result
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function ConstructArxivoValsiExtract(d, query, range) {
  let locs = getMatchIndices(query, d)
  locs = locs.map((i) => {
    i = [i - range, i + range]
    if (i[0] < 0) i[0] = 0
    if (i[0] >= d.length) i[0] = d.length - 1
    return i
  })
  for (let i = 0; i < locs.length - 1; i++) {
    if (locs[i][1] > locs[i + 1][0]) {
      locs[i][1] = locs[i + 1][1]
      locs[i + 1][0] = locs[i][0]
    }
  }
  locs = locs.map((i) => JSON.stringify(i))
  if (locs.length > 0) {
    locs = locs.filter(onlyUnique).map((i) => {
      i = JSON.parse(i)
      let n = d.substr(i[0], i[1] - i[0])
      n = basna({
        def: n,
        query,
      })
      if (i[0] > 3) n = `...${n}`
      if (i[1] < d.length - 4) n = `${n}...`
      return n
    })
    locs = locs.join('<br/>')
  } else {
    let n = d.substr(0, Math.min(100, d.length))
    if (n.length < d.length) n = `${n}...`
    n = basna({
      def: n,
      query,
    })
    locs = n
  }
  return locs
}

function jvoValue() {
  return jvoPlumbsOn ? '⇔' : '↔'
}

window.ningau_lepasorcu = (bangu) => {
  if (bangu.indexOf('@') === 0) return
  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lepasorcu',
    ...state.searching,
    bangu,
  })
}

window.runSearch = (seskari, selmaho, bangu) => {
  state.searching = {
    seskari,
    versio: 'selmaho',
    query: selmaho,
    bangu,
  }
  DispatchState({
    replace: false,
  })
}

function skicu_palodovalsi({ def, inner, query, seskari, versio, bangu, index }) {
  if (!query) query = state.searching.query
  if (!seskari) seskari = state.searching.seskari
  bangu = def.bangu || bangu || state.searching.bangu
  bangu = bangu.replace(/-cll/, '')
  if (!def) def = []
  const out = document.createElement('div')
  out.className = inner ? 'terminner' : 'termouter'
  out.classList.add('term')
  if (!inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0) {
    out.className = 'sidju sidju-normal cll noselect'
  }
  if (index === 0) out.classList.add('searchRendered')
  var famymahos =
    typeof def.s === 'string' && listFamymaho[def.s]
      ? listFamymaho[def.s].split(' ')
      : undefined
  if (typeof famymahos !== 'undefined') {
    let innerHTML = ''
    var fmm = document.createElement('h4')
    fmm.className = 'tfm'
    for (let famymaho of famymahos) {
      innerHTML += `&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=${seskari}&sisku=${encodeUrl(
        famymaho
      )}&bangu=${bangu}&versio=masno">${escHtml(famymaho)}</a>]</sup></i>`
    }
    fmm.innerHTML = innerHTML
  }
  const sh = []
  for (const key in listFamymaho) {
    if (listFamymaho[key].split(' ').includes(def.w))
      sh.push(
        `<a href="#seskari=${seskari}&versio=selmaho&sisku=${encodeUrl(
          key
        )}&bangu=${bangu}">${escHtml(key)}</a>`
      )
  }
  if (sh.length !== 0) {
    var tfm = document.createElement('div')
    tfm.classList.add('valsi')
    if (def.l) tfm.classList.add('nalojbo')
    tfm.innerHTML = `<i><sup>[${sh.join(
      ', '
    )}&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;`
  }
  let selms
  if (def.s) {
    const selmahos = typeof def.s === 'string' ? def.s.split(' ') : def.s
    if (selmahos.length > 0) {
      selms = document.createElement('div')
      for (const selmaho of selmahos) {
        var ss = document.createElement('button')
        ss.className = 'tutci klesi klesi-tutci'
        var text = basna({
          def: escHtml(selmaho),
          query,
        })
        ss.innerHTML = text
        // ss.onclick = window.runSearch(seskari,selmaho,bangu)
        ss.setAttribute(
          'onclick',
          `window.runSearch("${seskari}","${selmaho}","${bangu}")`
        )
        selms.appendChild(ss)
      }
    }
  }
  if (def.from) {
    var ss = document.createElement('div')
    ss.className = 'tutci klesi klesi-tutci'
    ss.innerHTML = def.from
  }
  let hasTranslateButton = false
  const word = document.createElement('h4')
  word.classList.add('valsi')
  if (def.d && !def.d.nasezvafahi)
    word.setAttribute('data-valsi', encodeValsiForWeb(def.w))
  if (def.l) word.classList.add('nalojbo')
  if (
    def.t !== window.bangudecomp &&
    seskari !== 'fanva' &&
    (plukaquery(def.w) == query || seskari == 'velcusku')
  ) {
    hasTranslateButton = true
    word.innerHTML = `${basna({
      def: def.q || def.w,
      query,
    })} `
  } else {
    let seskari2 = seskari
    if (seskari === 'fanva') seskari2 = 'catni'
    word.innerHTML = `<a class="valsi${def.l ? '' : ' nalojbo'
      }" href="#seskari=${seskari2}&sisku=${encodeUrl(
        def.w
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(def.w, true),
        query,
      })}</a> `
  }

  let jvs
  if (def.t && !def.t.type) {
    def.t = def.t === 'bangudecomp' ? window.bangudecomp : def.t
    jvs = document.createElement('a')
    jvs.className = 'klesi link'
    let text = def.t
    const txt = encodeUrl(def.w).replace(/_/g, '%20')
    jvs.href = window.judri
      ? window.judri + txt
      : `#seskari=${seskari === 'catni' ? 'catni' : 'cnano'
      }&sisku=${txt}&bangu=${bangu}&versio=masno`
    if (window.judri) {
      jvs.setAttribute('target', '_blank')
      jvs.setAttribute('rel', 'noreferrer')
    }
    if (window.xuzganalojudri && !def.l) {
      text = `${escHtml(def.t)}# `
      if (def.d && def.d.nasezvafahi) text = `➕ ${text}`
    }
    jvs.innerHTML = text
  }
  if (def.t && def.t.type) {
    jvs = document.createElement('a')
    jvs.href = 'javascript:;'
    jvs.className = 'klesi'
    jvs.innerHTML = def.t.type

    if (def.t.bangu && def.t.bangu !== "lojbo") word.classList.add('na_eisesance')
  }
  if (def.date) {
    jvs = document.createElement('div')
    jvs.className = 'tutci klesi klesi-tutci'
    jvs.style.whiteSpace = 'nowrap'
    jvs.innerHTML = def.date
  }

  let mu = {}
  if (def.d && !def.d.nasezvafahi)
    mu = melbi_uenzi({
      def: def.d,
      fullDef: def,
      query,
      seskari,
      versio,
      bangu,
      type: 'd',
      index,
    })

  
  let zbalermorna
  if (!(def.t && def.t.k === 0) && (seskari !== 'fanva' || index === 0)) {
    zbalermorna = document.createElement('h4')
    zbalermorna.classList.add('valsi', 'zbalermorna', 'segerna', 'sampu')
    zbalermorna.textContent = zbalermornaize(def)
  }
  

  const heading = document.createElement('heading')
  heading.classList.add('heading')

  if (tfm) heading.appendChild(tfm)

  heading.appendChild(word)

  let translateButton
  if (hasTranslateButton) {
    translateButton = document.createElement('button')
    translateButton.className = 'fanva-tutci tutci klesi klesi-tutci'
    translateButton.onclick = function () {
      state.searching = {
        ...state.searching,
        seskari: 'fanva',
        query: plukaquery(def.w),
      }
      DispatchState({
        replace: false,
      })
    }
    // translateButton.innerHTML = `<img src="../pixra/fanva.svg" class="cukta"/>`
    translateButton.innerHTML = `🌍`
  }

  const banguEl = document.createElement('div')
  banguEl.classList.add('segerna', 'sampu', 'noselect')
  // if (supportedLangs[bangu]) {
  //   banguEl.innerHTML = `<div style='background-size:cover;background-image: url("../pixra/${supportedLangs[bangu].p}.svg");width:40px;height:21px'></div>`
  // } else
  const ban =
    def.bangu && supportedLangs[def.bangu].n
      ? supportedLangs[def.bangu].n
      : def.bangu || ''
  banguEl.innerHTML = ban
  // banguEl.onclick = function () {
  //   EmptyState(def.bangu);
  //   window.location = `#seskari=catni&sisku=&bangu=${def.bangu.replace(/-(cll)/, '')}`
  // }

  if (fmm) heading.appendChild(fmm)

  if (jvs) {
    const div1 = document.createElement('div')
    div1.classList.add('sampu', 'noselect')
    div1.appendChild(jvs)
    jvs = div1
  }

  
  let jvo
  if (def.t === 'lujvo' && (def.rfs || []).length > 0 && mu.hasExpansion) {
    jvo = document.createElement('input')
    jvo.type = 'button'
    jvo.classList.add('tutci', 'sance', 'jvo_plumber')
    jvo.value = jvoValue()
    jvoPlumbsOn
      ? jvo.classList.add('tutci-hover')
      : jvo.classList.remove('tutci-hover')
    jvo.onclick = addJvoPlumbs
  }

  

  let whoIsFirstLine = []

  if (zbalermorna && !selms && def.w.length < 10 && !jvo) {
    whoIsFirstLine.push('zbalermorna')
    heading.appendChild(zbalermorna)
  }

  const flex = document.createElement('heading')
  flex.style.flex = 1
  heading.appendChild(flex)

  if (!selms) {
    heading.appendChild(banguEl)
    whoIsFirstLine.push('banguEl')
    if (jvs) {
      heading.appendChild(jvs)
      whoIsFirstLine.push('jvs')
    }
  }

  if (hasTranslateButton && def.w.length < 20) {
    heading.appendChild(translateButton)
    whoIsFirstLine.push('translateButton')
  }

  
  if (jvo) heading.appendChild(jvo)
  

  if (selms) heading.appendChild(selms)

  const copy = document.createElement('input')
  copy.type = 'button'
  copy.classList.add('tutci', 'sance', 'klesi-tutci')
  copy.value = "📋"
  copy.addEventListener('click', function () {
    copyToClipboard([def.w, def.d, def.n].filter(Boolean).join("\r\n"))
  });
  heading.appendChild(copy)

  out.appendChild(heading)
  //new line buttons
  const heading2 = document.createElement('heading')
  heading2.classList.add('heading', 'heading2')
  
  if (zbalermorna && !whoIsFirstLine.includes('zbalermorna'))
    heading2.appendChild(zbalermorna)
  
  const flex2 = document.createElement('heading')
  flex2.style.flex = 1
  heading2.appendChild(flex2)
  if (!whoIsFirstLine.includes('banguEl')) heading2.appendChild(banguEl)
  if (jvs && !whoIsFirstLine.includes('jvs')) heading2.appendChild(jvs)
  if (translateButton && !whoIsFirstLine.includes('translateButton'))
    heading2.appendChild(translateButton)
  out.appendChild(heading2)
  // }

  if (bangu.indexOf("muplis") === 0) {
    //add feedback button
    const row = document.createElement('button')
    row.className = 'tutci klesi klesi-tutci align-right'
    row.onclick = () => window.send_muplis_feedback(def);
    row.setAttribute("data-jufra", `window.report_feedback`)
    row.innerText = window.report_feedback
    out.appendChild(row)
  }

  if (seskari !== 'arxivo' && def.d) {
    var n = document.createElement('div')
    n.classList.add('definition', 'valsi')
    if (def.d && def.d.nasezvafahi) {
      if (!def.t && (def.rfs || []).length === 0) return
      n.classList.add('nasezvafahi', 'noselect')
      n.innerHTML = window.nasezvafahi
    } else {
      let melbi = mu.tergeha
      // if (seskari !== 'velcusku') melbi = `${melbi.replace(/\n/g, '<br/>')} `
      n.innerHTML = melbi
    }
    out.appendChild(n)
  }
  if (seskari === 'arxivo') {
    const k = document.createElement('div')
    k.classList.add('definition', 'valsi', 'pointer')
    k.innerHTML = ConstructArxivoValsiExtract(def.d, query, 50)
    k.addEventListener('click', () => {
      k.style.display = 'none'
      k.nextElementSibling.style.display = 'block'
    })
    out.appendChild(k)

    var n = document.createElement('div')
    n.classList.add('definition', 'valsi')
    n.style.display = 'none'
    if (def.d && def.d.nasezvafahi) {
      n.classList.add('nasezvafahi', 'noselect')
      n.innerHTML = window.nasezvafahi
    } else {
      n.innerHTML = `${basna({
        def: def.d,
        query,
      })} `
      n.addEventListener('click', () => {
        n.style.display = 'none'
        n.previousElementSibling.style.display = 'block'
        n.parentElement.scrollIntoView()
      })
    }
    out.appendChild(n)
    //add two divs. first is hidden. on click hide and display the other
  }
  if (def.n) {
    var n = document.createElement('div')
    n.classList.add('notes', 'valsi')
    n.innerHTML = `${melbi_uenzi({
      def: def.n,
      fullDef: def,
      query,
      seskari,
      versio,
      type: 'n',
      index,
      bangu,
    }).tergeha
      } `
    out.appendChild(n)
  }
  
  // if (index == 0 && seskari !== 'velcusku') {
  //   const { secs, div } = CLL({ valsi: def.w })
  //   if (secs && secs !== state.cll) out.appendChild(div)
  // }
  
  if (def.e) {
    var n = document.createElement('div')
    n.classList.add('examples', 'valsi')
    n.innerHTML = `<table class='ciksi'>${melbi_uenzi({
      def: `${def.e}\n`
        .replace(/%/g, '\n')
        .replace(
          /(.*?) — (.*?)\n/g,
          "<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"
        ),
      query,
      seskari,
      versio,
      bangu,
    }).tergeha
      }</table> `
    out.appendChild(n)
  }
  if (def.k) {
    var n = document.createElement('div')
    n.className = 'related'
    n.innerHTML = `See also: ${melbi_uenzi({
      def: def.k,
      query,
      seskari,
      versio,
      bangu,
    }).tergeha
      } `
    out.appendChild(n)
  }
  if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
    const tanxe_leirafsi = document.createElement('div')
    tanxe_leirafsi.className = 'rafsi noselect'

    const rafcme = document.createElement('div')
    rafcme.className = 'tanxe zunle_tanxe'
    rafcme.innerHTML = 'rafsi'
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = document.createElement('div')
    rafsi.className = 'tanxe pritu_tanxe'
    for (let i = 0; i < def.r.length; i++) {
      const rafElem = document.createElement('span')
      rafElem.className = 'pamei'
      const raf = def.r[i]
      // if ((def.t || '').match(/lujvo/)) {
      //   const a = document.createElement('a')
      //   a.setAttribute(
      //     'href',
      //     `#seskari=${seskari}&sisku=${encodeUrl(raf)}&bangu=${bangu}`
      //   )
      //   a.text = raf
      //   rafElem.appendChild(a)
      // } else {
      rafElem.innerHTML = basna({
        def: raf,
        query,
      })
      // }
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.b || []).length > 0 && !def.l && window.xuzganalojudri) {
    const tanxe_leirafsi = document.createElement('div')
    tanxe_leirafsi.className = 'rafsi noselect hue_rotate'

    const rafcme = document.createElement('div')
    rafcme.className = 'tanxe zunle_tanxe kurfa_tanxe'
    rafcme.innerHTML = 'BAI'
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = document.createElement('div')
    rafsi.className = 'tanxe pritu_tanxe kurfa_tanxe'
    for (i = 0; i < def.b.length; i++) {
      const rafElem = document.createElement('span')
      rafElem.className = 'pamei'
      const raf = def.b[i]
      rafElem.innerHTML = `</span><a class="hue_rotate_back a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
        raf
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(raf, true),
        query,
      })}</a><span>`
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.rfs || []).length > 0) {
    const subDefs = document.createElement('div')
    subDefs.classList.add('definition', 'subdefinitions')
    for (let i = 0; i < def.rfs.length; i++) {
      const o = skicu_palodovalsi({
        def: def.rfs[i],
        inner: true,
        index: `${index}_${i}`,
        query,
        seskari,
        versio,
        bangu,
      })
      if (o) subDefs.appendChild(o)
    }
    out.appendChild(subDefs)
  }

  out.addEventListener('click', clicked)
  return out
}

function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, 'h')
}
function plukaquery(a) {
  if (a.charAt(0) !== '^' && a.slice(-1) !== '$')
    return a.replace(/\./g, ' ').replace(/ {2,}/g, ' ').replace(/’/g, "'")
  return a
}

function encodeUrl(uenzi) {
  //for bookmarkable urls
  return encodeURIComponent((uenzi || '').replace(/ /g, '_')).replace(
    /'/g,
    '%27'
  )
}

function decodeUrl(urli) {
  return decodeURIComponent(
    urli.replace(/&amp;/g, '&').replace(/%27/g, "'")
  ).replace(/[_]/g, ' ')
}

function escHtml(a, apos) {
  //for displaying text
  a = (a || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;')
  if (!apos) a = a.replace(/'/g, '&#039;')
  return a
}

function skicu_rolodovalsi({ query, seskari, bangu, versio }) {
  const displayUpTo = Math.min(window.jimte, results.length)
  state.cll = undefined
  // if (resultCount === 0) {
  //   const { secs, div } = CLL({ pre: true, valsi: state.searching.query })
  //   state.cll = secs
  //   if (div) outp.appendChild(div)
  // }
  for (; resultCount < displayUpTo; resultCount++) {
    const a = skicu_palodovalsi({
      def: results[resultCount],
      query,
      seskari,
      versio,
      bangu,
      length: results.length,
      index: resultCount,
    })
    if (a) outp.appendChild(a)
  }
}

async function addAudioLinkForExternalSpeaker(word) {
  worker.postMessage({
    kind: 'parse',
    operation: 'audioLink',
    tegerna: word.replace(/"/g, ''),
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function addAudioLinks() {
  
  //audio
  const els = Array.from(document.querySelectorAll(':not(.na_eisesance)[data-valsi]'))
  for (let el of els) {
    if (!kahe_sezgana(el)) continue
    el = el.textContent.trim()
    addAudioLinkForExternalSpeaker(el)
    await sleep(500)

    // await new Promise(resolve => {
    //   try {
    //     const urli = `/sutysisku/sance/vreji/${encodeValsiForWeb(el)}.mp3`
    //     var http = new XMLHttpRequest()
    //     http.open('HEAD', urli, true)
    //     http.send()
    //     http.onload = function () {
    //       if (this.status == 200) {
    //         const sance = new Audio(urli)
    //         sance.id = `sance_${encodeValsiForWeb(el)}`
    //         sance.addEventListener('canplaythrough', (event) => {
    //           const hd = Array.from(
    //             document.querySelectorAll(
    //               `[data-valsi="${encodeValsiForWeb(el)}"]`
    //             )
    //           )[0]
    //           if (
    //             hd &&
    //             !document.getElementById(`sance_${encodeValsiForWeb(el)}`)
    //           ) {
    //             hd.insertAdjacentHTML('afterend', `<button class="tutci sance" onclick="document.getElementById('sance_${encodeValsiForWeb(
    //               el
    //             )}').play()">▶</button>`)
    //             hd.appendChild(sance)
    //           }
    //         })
    //       } else {
    //         addAudioLinkForExternalSpeaker(el)
    //       }
    //       resolve()
    //     }
    //     http.onerror = () => {
    //       addAudioLinkForExternalSpeaker(el)
    //       resolve()
    //     }
    //   } catch (error) {
    //     addAudioLinkForExternalSpeaker(el)
    //     resolve()
    //   }
    // })
  }
  
}



//pronunciation guide
function text(name, text, style) {
  const el = document.createElement(name)
  el.textContent = text
  if (style) el.className = style
  return el
}

function elem(name, contents, style) {
  const el = document.createElement(name)
  if (style) el.className = style
  if (Array.isArray(contents))
    contents.forEach((sub) => {
      el.appendChild(sub)
    })
  else if (contents) el.appendChild(contents)
  return el
}

function play(url) {
  audio.src = url
  audio.play()
}
document.querySelector('#table').appendChild(
  elem(
    'table',
    rows.map((row) =>
      elem(
        'tr',
        row.map((col) => {
          const button = text('button', col, 'bangu')
          button.onclick = () => {
            play(`/sutysisku/sance/lerfu/${encodeURIComponent(col)}.ogg`)
          }
          return elem('td', button)
        })
      )
    ),
    'centero'
  )
)



function getStateBangu() {
  const citri = macitri()[0]
  if (citri && citri.bangu) return state.searching.bangu
  return 'en'
}

//sockets
// socket = io ? io.connect("https://jbotcan.org:3020"):undefined;
// if (socket) socket.on("connect", function () {
//   document.getElementById("arxivo").style.display = "inline-block";
// });
// if (socket) socket.on("connect_error", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
// if (socket) socket.on("disconnect", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
socket1Chat = io('wss://jbotcan.org:9091', {
  transports: ['polling', 'websocket'],
})
if (socket1Chat) {
  socket1Chat.on('connect', function () {
    socket1Chat_connected = true
  })
  socket1Chat.on('connect_error', function () {
    console.log('1chat connection error')
    // document.getElementById("velcusku").style.display = "none";
  })
  // socket1Chat.on("disconnect", function() {
  //   document.getElementById("velcusku").style.display = "none";
  // });
  function trimSocketChunk(text) {
    return text.replace(/[\n\r]+$/gims, ' ').split('<')[0]
  }
  socket1Chat.on('sentFrom', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    var i = data.data
    var msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }

    const velsku = document.getElementById('velsku_sebenji')
    velsku.innerHTML = `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`
    velsku.style.display = 'flex'
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`

    // if (msg.s === channel)
    // outp.appendChild(
    //   skicu_palodovalsi({
    //     def: msg,
    //     query: state.searching.query,
    //     seskari: "velcusku"
    //   })
    // );
    // outp.childNodes.length = Math.min(outp.childNodes.length, 201);
    // content.scrollTop = content.scrollHeight;
  })
  socket1Chat.on('history', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    const velsku = document.getElementById('velsku_sebenji')
    const i = data.slice(-1)[0]
    if (!i) return
    const msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }
    velsku.innerHTML = `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`
    velsku.style.display = 'flex'
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`
  })
}

function getPhonemeClasses() {
  const C = '[bdgjvzcfkpstxlmnr]'
  const V = '(a|e|i|o|u)'
  const I = '(ai|ei|oi|au|ḁ|ą|ę|ǫ)'
  const D =
    '(pl|pr|fl|fr|bl|br|vl|vr|cp|cf|ct|ck|cm|cn|cl|cr|jb|jv|jd|jg|jm|sp|sf|st|sk|sm|sn|sl|sr|zb|zv|zd|zg|zm|tc|tr|ts|kl|kr|dj|dr|dz|gl|gr|ml|mr|xl|xr)'
  const T =
    '(cfr|cfl|sfr|sfl|jvr|jvl|zvr|zvl|cpr|cpl|spr|spl|jbr|jbl|zbr|zbl|ckr|ckl|skr|skl|jgr|jgl|zgr|zgl|ctr|str|jdr|zdr|cmr|cml|smr|sml|jmr|jml|zmr|zml)'
  const R = `((?!${D})${C}${C})`
  const J = '(i|u)(?=[aeiouyḁąęǫ])'
  const h = "[h']"
  return { C, V, I, D, T, R, J, h }
}
function allAreSafeWords(array, { allowCmevla = false, allowCmavo = false }) {
  const { C, V, I, D, T, R, J, h } = getPhonemeClasses()
  //this is the complete regular expression matching any possible gismu and only them
  const gismu = RegExp(`^(${D}${V}${C}${V}|${C}${V}${C}${C}${V})$`)
  const nornau = RegExp(`^${C}${V}${C}${C}${I}$`)
  const ismu = RegExp(`^${V}${C}${C}${V}$`)
  const iismu = RegExp(`^${J}${V}${C}${C}${V}$`)
  const strelka = RegExp(`^${T}${V}${R}${V}$`)
  const flokati = RegExp(`^${D}${V}${C}${V}${C}${V}$`)
  const prulamdei = RegExp(`^${D}${V}${C}${V}${C}${C}${V}$`)
  const cinjikca = RegExp(`^${C}${V}${R}${V}${C}${C}${V}$`)
  const sorpeka = RegExp(`^${C}${V}${R}${V}${C}${V}$`)
  const snazga = RegExp(`^${D}${V}${C}${C}${V}$`)
  const kaltahu = RegExp(`^${C}${V}${C}${C}${V}${h}${V}$`)
  const cmalahu = RegExp(`^${C}${C}${V}${C}${V}${h}${V}$`)
  return array.every(
    (el) =>
      el[0] === 'gismu' ||
      gismu.test(el[1]) ||
      ismu.test(el[1]) ||
      iismu.test(el[1]) ||
      strelka.test(el[1]) ||
      flokati.test(el[1]) ||
      sorpeka.test(el[1]) ||
      nornau.test(el[1]) ||
      kaltahu.test(el[1]) ||
      cmalahu.test(el[1]) ||
      snazga.test(el[1]) ||
      prulamdei.test(el[1]) ||
      cinjikca.test(el[1]) ||
      (allowCmevla && el[0] === 'cmevla') ||
      (allowCmavo && el[0] === 'cmavo')
  )
}

function PollyPlayer(params) {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: params.IdentityPoolId,
  })
  AWS.config.region = params.region

  function matchForm(word, form) {
    let regex = '^'
    const working = word.replace(/[\.\?»«]/g, '')
    for (let f = 0; f < form.length; f++) {
      if (form[f] == '?') regex += '.'
      else if (form[f] == '*') regex += '.*'
      else if (form[f] == 'C') regex += '[^aeiouyḁąęǫ]'
      else if (form[f] == 'V') regex += '[aeiouyḁąęǫ]'
      else if (form[f] == 'I') regex += '[iu]'
    }
    regex += '$'
    const re = new RegExp(regex)
    return re.test(working)
  }

  // function isBrivla(word) {
  //   return allAreSafeWords([["", word]], { allowCmavo: false })
  // }

  function getValByKeyRegex(json, testedString) {
    const match =
      Object.keys(json)
        .filter((key) => RegExp(`^${key}`).test(testedString))
        .sort((a, b) => b.length - a.length)[0] ?? '-'
    return { match, value: json[match] }
  }

  function text2SSML(textToSpeak) {
    const famymaho = ['kei', 'vau', "ku'o", "li'u", "le'u", "ge'u", "zo'u"]
    // const stresslessWords = ["lo","le","lei","loi","ku"]
    const words = textToSpeak.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ')
    let output = [`<speak><prosody rate="slow">`, '<s>']
    for (let w = 0; w < words.length; w++) {
      const currentWord = krulermorna(words[w])
      // const nextWord = words[w + 1]
      if (['i', '.i', "ni'o"].includes(currentWord)) {
        output.push('</s>\n<s>')
      } else if (currentWord[0] == '.') {
        output.push('<break time="20ms" strength="x-weak" />')
      }

      let ph = []
      for (let i = 0; i < [...currentWord].length; i++) {
        // if (matchForm(currentWord, "CV") && (i == 0) && nextWord && !isBrivla(nextWord) && !stresslessWords.includes(currentWord))
        //   ph.push('ˈ');
        if (matchForm(currentWord, 'VCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'CVCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'VCCV') && i == 0) ph.push('ˈ')
        else if (
          matchForm(currentWord, 'CVCCI') ||
          matchForm(currentWord, 'CVCCV') ||
          matchForm(currentWord, 'IVCCV') ||
          matchForm(currentWord, 'CCVCV')
        ) {
          if (i == 0) ph.push('ˈ')
          if (i == 3) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 4) ph.push('.')
        } else if (matchForm(currentWord, 'CCCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        }
        const { match, value } = getValByKeyRegex(
          params.lojban2IPAMapping,
          currentWord.slice(i) +
          ' ' +
          words
            .concat('')
            .slice(w + 1)
            .join(' ')
        )
        ph.push(value)
        i = i - 1 + match.replace(/\\/g, '').replace(/\(\?.*\)/g, '').length
      }

      const { C, V, I } = getPhonemeClasses()
      if (RegExp(`(${C})$`).test(currentWord)) {
        ph.unshift("ʔ")
      }
      if (RegExp(`^(${V}|${I})`).test(currentWord)) {
        ph.unshift("ʔ")
      }
      // if (["mo", "ma", "xu", "xo"].includes(currentWord)) {
      //   output.push(`<prosody volume="loud">`);
      //   output.push(`<phoneme alphabet="ipa" ph="${ph.join("")}">${currentWord}</phoneme>`);
      //   output.push(`</prosody>`);
      // }else{
      const compiledWord = ph.join("").replace(/ʔ+/g, 'ʔ').replace(/\.+/g, '.')
      output.push(`<phoneme alphabet="ipa" ph="${compiledWord}">${currentWord}</phoneme>`)
      // }
      if (
        currentWord[currentWord.length - 1] == '.' ||
        famymaho.includes(currentWord) ||
        RegExp(`(${C})$`).test(currentWord)
      ) {
        output.push(`<break time="1ms" strength="x-weak" />`)
      }
    }

    output.push('</s>', '</prosody></speak>')
    return output.join('\n')
  }

  async function getAndPlayAudio(textToSpeak, dontSpeak) {
    const text = text2SSML(textToSpeak)
    const sance_datni =
      getLocalAudio(text) || (await downloadAudio(text, dontSpeak))
    if (dontSpeak) return true
    return new Promise((resolve) => {
      audio.src = URL.createObjectURL(new Blob([new Uint8Array(sance_datni).buffer]))
      audio.addEventListener('ended', () => resolve(true))
      audio.pause()
      audio.play()
    })
  }

  function downloadAudio(Text, dontSpeak) {
    return new Promise(function (resolve, reject) {
      const polly = new AWS.Polly()
      polly.synthesizeSpeech(
        {
          Text,
          VoiceId: params.VoiceId,
          LanguageCode: params.LanguageCode,
          Engine: params.Engine,
          OutputFormat: 'mp3',
          TextType: 'ssml',
          SampleRate: '24000',
        },
        (error, data) => {
          if (error) {
            reject()
          } else {
            cacheAudio(Text, data.AudioStream, dontSpeak)
            resolve(data.AudioStream)
          }
        }
      )
    })
  }

  function cacheAudio(text, audio, dontSpeak) {
    let cache = JSON.parse(localStorage.getItem('cachedAudio')) || []
    cache = cache.slice(dontSpeak ? -20 : -10)
    cache.push({
      text,
      audio: JSON.stringify(audio),
    })
    localStorage.setItem('cachedAudio', JSON.stringify(cache))
  }

  function getLocalAudio(text) {
    const audioStreamArray =
      JSON.parse(localStorage.getItem('cachedAudio')) || []
    const sance_datni = audioStreamArray.filter(
      (record) => record.text === text
    )[0]
    if (!sance_datni) return
    return JSON.parse(sance_datni.audio).data
  }

  return function (text, dontSpeak) {
    return getAndPlayAudio(text, dontSpeak)
  }
}

window.runSpeakableAudio = function (textToSpeak, dontSpeak = false) {
  return polly(textToSpeak, dontSpeak)
}



  ; (function () {
    function closeModal() {
      /* Get close button */
      const closeButton = document.getElementsByClassName('jsModalClose')
      const closeOverlay = document.getElementsByClassName('jsOverlay')

      /* Set onclick event handler for close buttons */
      for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
          const modalWindow = this.parentNode.parentNode

          modalWindow.classList
            ? modalWindow.classList.remove('open')
            : (modalWindow.className = modalWindow.className.replace(
              new RegExp(
                '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
                'gi'
              ),
              ' '
            ))
        }
      }

      /* Set onclick event handler for modal overlay */
      for (let i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function () {
          const modalWindow = this.parentNode

          modalWindow.classList
            ? modalWindow.classList.remove('open')
            : (modalWindow.className = modalWindow.className.replace(
              new RegExp(
                '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
                'gi'
              ),
              ' '
            ))
        }
      }
    }

    /* Handling domready event IE9+ */
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn()
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
    }

    /* Triggering modal window function after dom ready */
    ready(closeModal)
  })()

window.resetAudioParams = (input) => {
  const json = pollyParams
  localStorage.setItem('audioParams', JSON.stringify(json))
  input.value = JSON.stringify(json, null, 2)
  polly = PollyPlayer(json)
  localStorage.setItem('cachedAudio', null)
}

window.send_feedback = async function ({ def = {}, state = {}, comment }) {
  let defCompiled = '', queryCompiled = ''
  if (def.w) {
    defCompiled = `**${def.w}**\n*${def.d}*`
  }
  if (state.query) {
    queryCompiled = `**${state.query}**\n*${supportedLangs[state.bangu].n}*`
  }
  const url = "https://sutysisku-report.herokuapp.com/";
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ body: `${[defCompiled, queryCompiled].join("\n\n")}\n\n----\n\n${comment}`, title: def.w || state.query }) // body data type must match "Content-Type" header
  });

  if (response.status < 400) {
    modalWindow.classList.remove('open')
    openModal({
      innerHTML: `
          <h2>${window.report_feedback_thankyou}</h2>
          <button class="tutci feedback" onclick="document.getElementById('jsModal').classList.remove('open')">${window.report_feedback_has_been_submitted}</button>
          <a href="https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc" target="_blank">${window.report_feedback_issues_repo}</a>
    `}
    )
  } else {
    modalWindow.classList.remove('open')
    openModal({
      innerHTML: `
          <div>${window.report_feedback_problem}</div>
          <button class="tutci feedback" onclick="document.getElementById('jsModal').classList.remove('open')">✔️</button>
          <a href="https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc" target="_blank">${window.report_feedback_issues_repo}</a>
    `}
    )

  }
}

window.send_muplis_feedback = function (def) {
  window.tmp_value = def;
  openModal({
    innerHTML: `
        <h2>${window.report_feedback}</h2>
        <h3 class="valsi">${def.w}</h3>
        <div class="definition valsi">${def.d}</div>
        <textarea id="modal__textarea" class="modal__textarea" row="10" placeholder="${window.report_feedback_description}"></textarea>
        <button class="tutci feedback" onclick="this.firstElementChild.classList.remove('d-none');window.send_feedback({def: window.tmp_value, comment: document.getElementById('modal__textarea').value})"><div class="spinner d-none"></div>${window.report_feedback}</button>
  `})
}

function openModal({ innerHTML }) {
  const modal__container = document.getElementById('modal__container')
  modal__container.innerHTML = innerHTML
  modalWindow.classList
    ? modalWindow.classList.add('open')
    : (modalWindow.className += ' ' + 'open')
}

function copyToClipboard(text) {
  const myTemporaryInputElement = document.createElement("textarea");
  myTemporaryInputElement.value = text;

  document.body.appendChild(myTemporaryInputElement);

  myTemporaryInputElement.select();
  document.execCommand("Copy");

  document.body.removeChild(myTemporaryInputElement);
  showLoading({ bangu: window.copied || '📋', hideProgress: true })
  setTimeout(() => {
    showLoaded()
  }, 2000)
}