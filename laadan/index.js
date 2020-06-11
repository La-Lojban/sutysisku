const content = document.getElementById('content')
const ciska = document.getElementById('ciska')
const clear = document.getElementById('clear')
const outp = document.getElementById('outp')
const descr = document.getElementById('descr')
const drata = document.getElementById('drata')
const citri = document.getElementById('citri')
const sidju = document.getElementById('sidju')
const pb = document.getElementById('kernelo_lo_cpacu')
const worker = new Worker('worker.js?sisku=1591871449573')
const SiteTitle = document.querySelector('#title > font')
const SiteTitleFull = document.querySelector('#site-title')
let jvoPlumbsOn = false
let plumbsTimeout = 3500
SiteTitleFull.classList.add('desktop-mode-title-color')
const dasri = document.getElementById('galtu-dasri')
const catni = document.getElementById('catni')
const cnano = document.getElementById('cnano')
const rimni = document.getElementById('rimni')
const SiteImage = document.querySelectorAll('#title > img')
const btnScrollToTop = document.getElementById('scrollToTop')
content.onscroll = () => {
if (content.scrollTop > 200) {
btnScrollToTop.style.display = 'block'
btnScrollToTop.classList.remove('dizlo')
} else {
btnScrollToTop.classList.add('dizlo')
}
}
function switchBorderScroll() {
if (content.scrollTop > 200) {
content.scrollTop = 0
} else {
content.scrollTop = content.scrollHeight
}
}
const fm = {
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
MOhE: "te'u",
}
let resultCount
let results = []
let typingTimer
let IdleTypingTimer
const delay = (() => (callback, ms) => {
clearTimeout(IdleTypingTimer)
IdleTypingTimer = setTimeout(callback, ms)
})()
const state = {
searching: {
seskari: 'cnano',
query: '',
},
displaying: {
seskari: 'cnano',
query: '',
},
citri: [],
}
;(() => {
try {
const tcini = JSON.parse(localStorage.getItem('tcini'))
if (tcini.seskari) state.searching.seskari = tcini.seskari
if (tcini.query) state.searching.query = tcini.query
} catch (e) {}
try {
state.citri = JSON.parse(localStorage.getItem('citri')) || []
} catch (e) {}
})()
RenderCitri()
function RenderCitri() {
if (state.citri.length > 0)
citri.innerHTML = ` ${window.purc}${state.citri
.filter(({ seskari }) => seskari !== 'velcusku')
.map(
({ seskari, query }) =>
`<a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
query
)}">${escHtml(query)}</a>`
)
.join(', ')}`
}
function RenderDasri(seskari, sepia) {
const colors = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni']
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
for (let i = 0; i < SiteImage.length; i++) {
SiteImage[i].style.filter = sepia
}
}
function SwitchRotation({ action }) {
if (document.readyState !== 'complete') return
const els = ['logo']
if (action === 'start') {
els.map((el) => {
document.getElementById(el).classList.remove('stopRotate')
document.getElementById(el).classList.add('rotate')
})
clear.classList.add('pulsate-css')
setTimeout(() => {
if (clear.classList.contains('pulsate-css'))
ciska.classList.add('granim-css')
}, 500)
} else {
els.map((el) => {
document.getElementById(el).classList.add('stopRotate')
})
ciska.classList.remove('granim-css')
clear.classList.remove('pulsate-css')
}
}
function EmitVelcusku() {
if (socket1Chat) socket1Chat.open()
}
function renderMathAndPlumbs() {
MathJax.typesetPromise().then(() => {
addJvoPlumbs(true)
})
}
function RenderResults({ query, seskari }) {
removePlumbs()
window.jimte = seskari === 'velcusku' ? 201 : 30
resultCount = 0
SwitchRotation({
action: 'stop',
})
outp.innerHTML = ''
skicu_rolodovalsi({
query,
seskari,
})
state.displaying.query = query
state.displaying.seskari = seskari
outp.style.display = 'block'
descr.style.display = 'none'
drata.style.display = 'none'
sidju.style.display = 'flex'
content.scrollTop = 0
switch (state.displaying.seskari) {
case 'rimni':
renderMathAndPlumbs()
RenderDasri('rimni', 'sepia(1.0)')
break
case 'arxivo':
RenderDasri('arxivo', 'none')
break
case 'velcusku':
RenderDasri('velcusku', 'none')
break
case 'catni':
renderMathAndPlumbs()
RenderDasri('catni', 'none')
break
case 'cnano':
default:
renderMathAndPlumbs()
RenderDasri('cnano', 'none')
}
delay(() => {
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
}, 2000)
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
removePlumbs()
addPlumbs(!force)
scrollJvoTimer = setTimeout(
() => {
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
for (var i = 0; i < targetedEls.length; i++) {
const el = targetedEls[i]
if (
el.attributes['data-head'] &&
el.attributes['data-head'].nodeValue !== '1'
)
continue
const id = el.id
const arr = el.attributes['data-arr'].nodeValue.split(',')
const tld = el.id.split('_')
const tld_0 = tld.slice(0, -1)
const kahe_zgana_el = kahe_sezgana(el)
targetedEls.filter((e) => {
const tld_inner = e.id.split('_')
const tld_inner_0 = tld_inner.slice(0, -2)
const arr_ = e.attributes['data-arr'].nodeValue.split(',')
const t_ = arr_[0].split(/(?=[0-9]+)/)
if (
arr_.length === 1 &&
tld_inner_0.length === tld_0.length &&
tld_inner_0.join('_') === tld_0.join('_') &&
arr.filter((ei) => {
const t = ei.split(/(?=[0-9])/)
return t_[0].indexOf(t[0]) === 0 && t_[1] === t[1]
}).length > 0 &&
(kahe_zgana_el || kahe_sezgana(e))
) {
let clr = e.attributes['data-color'].nodeValue
clr = `hsla(${clr},100%,70%,0.62)`
const t = new LeaderLine(
document.getElementById(e.id),
document.getElementById(id),
{
endPlugColor: clr,
color: clr,
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
function addPlumbs(force) {
removePlumbs()
scrollTimer = setTimeout(
() => {
const targetedEls = document.querySelectorAll('[data-target]')
for (let i = 0; i < targetedEls.length; i++) {
const el = targetedEls[i]
if (kahe_sezgana(el)) {
const id = el.id
const target = el.attributes['data-target'].nodeValue
const t = new LeaderLine(
document.getElementById(target),
document.getElementById(id),
{
endPlugColor: 'rgba(255, 120, 0, 0.33)',
color: 'rgba(255, 120, 0, 0.33)',
dash: { animation: true },
startSocketGravity: [50, -67],
endSocketGravity: [0, 67],
endPlug: 'arrow2',
endSocket: 'bottom',
size: 3,
}
)
}
}
appendPlumbs()
plumbsTimeout = 450
},
force ? 0 : plumbsTimeout
)
}
function kahe_sezgana(el) {
let rect = el.getBoundingClientRect()
rect =
rect.top >= 48 &&
rect.left >= 0 &&
rect.bottom <=
(window.innerHeight || document.documentElement.clientHeight) &&
rect.right <= (window.innerWidth || document.documentElement.clientWidth)
return rect
}
worker.onmessage = (ev) => {
const data = ev.data
if (data.kind == 'ready') {
document.title = 'la sutysisku'
const loading = document.getElementById('loading')
loading.parentNode.removeChild(loading)
setStateFromUrl({
replace: true,
})
} else if (data.kind == 'searchResults') {
if (JSON.stringify(data.req) !== JSON.stringify(state.searching)) return
if (JSON.stringify(data.req) === JSON.stringify(state.displaying)) return
results = data.results || []
RenderResults({
query: data.req.query,
seskari: data.req.seskari,
})
} else if (data.kind == 'loading') {
document.getElementById('caho_cpacu').textContent = window.bangubuild
pb.style.width = '51%'
} else if (data.kind == 'progress') {
pb.style.width = `${data.percent * 100}%`
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
function parseQuery(queryString) {
if (queryString==='') return
const query = {}
let pairs = ''
if (queryString.search(/^#sisku\//) === 0) {
pairs = [queryString.replace(/#sisku\/(.*)/, 'sisku=$1')]
} else {
pairs = (queryString[0] === '#'
? queryString.substr(1)
: queryString
).split('&')
}
for (let i = 0; i < pairs.length; i++) {
const pair = pairs[i].split('=')
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
let params = parseQuery(href || window.location.hash)
let newSearch
if (params && params['sisku']) {
newSearch = decodeUrl(params['sisku']).trim()
} else {
href = href || window.location.search
href = href.substring(href.indexOf('?') + 1)
const search = new URLSearchParams(href)
newSearch = decodeUrl(search.get('focus')||'').trim()
if (newSearch) {
params = { sisku: newSearch, seskari: 'cnano' }
} else return
}
if (
state.searching.seskari !== params['seskari'] ||
state.searching.query !== newSearch
) {
if (
params['seskari'] &&
['velcusku', 'cnano', 'catni', 'rimni', 'arxivo'].includes(
params['seskari']
)
)
state.searching.seskari = params['seskari']
if (params['sisku']) {
state.searching.query = newSearch
DispatchState({
replace,
})
}
}
}
citri.addEventListener('click', clicked)
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
let url = `${window.location.href.split('?')[0].split('#')[0]}#seskari=${
state.searching.seskari
}&sisku=${encodeUrl(state.searching.query)}`
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
window.addEventListener('popstate', setStateFromUrl)
ciska.addEventListener('paste', typing(0))
ciska.addEventListener('keyup', () => {
typing()
})
ciska.addEventListener('keydown', () => {
clearTimeout(typingTimer)
})
ciska.addEventListener('input', typing())
ciska.addEventListener('textInput', typing())
function GetCiskaAndDispatch() {
state.searching.query = plukaquery(ciska.value)
DispatchState({
caller: 'GetCiskaAndDispatch',
})
}
function typing(a) {
clearTimeout(typingTimer)
typingTimer = setTimeout(GetCiskaAndDispatch, a ? a : 250)
}
ciska.addEventListener('focus', focusSearch)
function focusSearch() {
state.searching.query = plukaquery(ciska.value)
DispatchState({})
}
clear.addEventListener('click', EmptyState)
document.getElementById('title').addEventListener('click', EmptyState)
function EmptyState() {
DispatchState({
empty: true,
})
}
document.getElementById('rimni').addEventListener('click', () => {
state.searching = {
seskari: 'rimni',
query: plukaquery(ciska.value),
}
DispatchState({
replace: false,
})
})
document.getElementById('cnano').addEventListener('click', () => {
state.searching = {
seskari: 'cnano',
query: plukaquery(ciska.value),
}
DispatchState({
replace: false,
})
})
document.getElementById('catni').addEventListener('click', () => {
state.searching = {
seskari: 'catni',
query: plukaquery(ciska.value),
}
DispatchState({
replace: false,
})
})
function DispatchCitri() {
if (state.displaying.query === '' || state.displaying.seskari === 'velcusku')
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
state.citri.unshift(JSON.parse(JSON.stringify(state.displaying)))
if (state.citri.length > 10) state.citri.length = 10
localStorage.setItem('citri', JSON.stringify(state.citri))
RenderCitri()
}
function DispatchState({ replace, caller, empty }) {
if (socket1Chat) socket1Chat.close()
state.searching.query = state.searching.query.trim()
setUrlFromState({
replace,
})
localStorage.setItem('tcini', JSON.stringify(state.searching))
if (empty == true) {
state.searching.query = ''
return RenderDesktop()
} else if (state.searching.seskari !== 'velcusku') {
if (state.searching.query === '') return RenderDesktop()
if (JSON.stringify(state.searching) === JSON.stringify(state.displaying))
return
}
ciska.value = state.searching.query
SwitchRotation({
action: 'start',
})
if (
caller === 'GetCiskaAndDispatch' &&
state.searching.seskari === 'velcusku'
)
state.searching.seskari = 'cnano'
switch (state.searching.seskari) {
case 'arxivo':
const json = JSON.parse(JSON.stringify(state.searching))
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
worker.postMessage({
kind: 'newSearch',
query: state.searching.query,
seskari: state.searching.seskari,
})
}
}
function RenderDesktop() {
removePlumbs()
SwitchRotation({
action: 'stop',
})
content.scrollTop = 0
const lastQuery = state.displaying.query
state.displaying.query = ''
SiteTitleFull.classList.add('desktop-mode-title-color')
SiteTitleFull.classList.remove(
'catni-search-mode-title-color',
'cnano-search-mode-title-color',
'velcusku-search-mode-title-color',
'rimni-search-mode-title-color',
'arxivo-search-mode-title-color'
)
catni.classList.remove('catni-tutci-hover', 'tutci-hover')
try {
cnano.classList.remove('cnano-tutci-hover', 'tutci-hover')
} catch (error) {}
rimni.classList.remove('rimni-tutci-hover', 'tutci-hover')
dasri.className = 'kampu-dasri cnano-dasri'
outp.style.display = 'none'
descr.style.display = 'block'
var obj = {
'muplis-eng-pol': [
0,
'English - polski',
'../pixra/muplis-eng-pol.png',
2.1,
],
'en-pt-BR': [0, 'English - Portugueze', '../pixra/152.png', 1],
zamenhofo: [0, 'Esperanto - English', '../pixra/lanci_epo.svg', 1],
toki: [0, 'toki pona - English', '../pixra/Toki_pona.svg', 1],
laadan: [0, 'English - Láadan', '../pixra/Double_girl_sign.svg', 1],
'simplingua-zho': [0, 'Simplingua - 中文', '../pixra/simplingua.svg', 1],
'ktv-eng': [0, 'Kotava - English', '../pixra/ktv-eng.svg', 1],
ina: [0, 'English - Interlingua', '../pixra/Flag_of_Interlingua.svg', 1],
ldp: [0, 'English - Lingwa de Planeta', '../pixra/ldp.svg', 1],
ile: [
0,
'English - Occidental / Interlingue',
'../pixra/Flag_of_Interlingue.svg',
1,
],
'epo-thai': [0, 'Esperanto - Thai', '../pixra/lanci_epo.svg', 1],
}
let acc = ''
const cisn = 100
for (const key in obj) {
if (obj[key][0] === 0 || obj[key][0] === window.bangu) {
acc += `<div class='DIV_1' style='height:${cisn}px;width:${
obj[key][3] * cisn
}px;'><div class='DIV_2' style='height:${cisn}px;width:${
obj[key][3] * cisn
}px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>${
obj[key][1]
}</b></span><a${
(obj[key][4] || '').indexOf('http') === 0
? " rel='noreferrer' target='_blank'"
: ''
} aria-label="${obj[key][1].replace(/<[^>]+?>/g, '')}" href="${
key.indexOf('@') === 0
? obj[key][4]
: `https://la-lojban.github.io/sutysisku/${key}/#seskari=${
state.displaying.seskari
}&sisku=${encodeUrl(lastQuery)}`
}" class='A_7'><div class='DIV_8' style='height:${cisn}px;width:${
obj[key][3] * cisn
}px;background-image:url("${obj[key][2]}")'></div></a></div></div>`
}
}
drata.innerHTML = acc
drata.style.display = 'block'
}
window.addEventListener('resize', calcVH, true)
content.addEventListener('scroll', checkScrolledNearBottom)
calcVH()
if (document.attachEvent) {
document.attachEvent('onkeyup', handler)
} else {
document.addEventListener('keyup', handler)
}
function handler({ keyCode }) {
if (keyCode && keyCode === 191) ciska.focus()
}
if (document.readyState === 'loading') {
pb.style.width = '37%'
document.title = 'la sutysisku'
}
function calcVH() {
content.setAttribute(
'style',
`height:${Math.max(
document.documentElement.clientHeight,
window.innerHeight || 0
)}px;`
)
}
var scrollTimer = null
var scrollJvoTimer = null
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
}
function string2Int(s, base, q) {
s = s.replace(/[\{\}_]/g, '')
return Math.abs(
Math.round(
(s.split('').reduce((a, b) => {
a = (a << 5) - a + b.charCodeAt(0)
return a & a
}, 0) %
base) /
q
) * q
)
}
function veljvoLetters(v) {
v = v.substr(1, v.length - 2).split('=')
const jalge = v.map((i) => i.replace(/[^A-Za-z']/g, ''))
return {
jalge,
hasExpansion: v.length > 1 || (jalge[0] && jalge[0] !== 'x'),
}
}
function veljvoString({ v, fullDef, subtype, dataArrAdded, b, veljvoLs }) {
if (dataArrAdded.includes(b)) return ''
if (subtype !== 'r' && fullDef.t !== 'lujvo') return ''
v = v
.substr(1, v.length - 2)
.split('=')
.map((i) =>
subtype === 'r'
? fullDef.w + i.replace(/[^0-9]/g, '')
: i.replace(/[^0-9A-Za-z']/g, '')
)
v = v.filter((i) => {
const sI = i.replace(/[0-9]/g, '')
if (veljvoLs.filter((j) => j.indexOf(sI) === 0 && j !== sI).length > 0)
return
return true
})
v = v.join(',')
return ` data-arr="${v}"`
}
function melbi_uenzi({ def, fullDef, query, seskari, type, index }) {
let iterTercricmiId = 0
const jsonIds = []
const types = []
const dataArrAdded = []
let veljvoLs = []
let hasExpansion = false
if (!['cnano', 'catni', 'rimni'].includes(seskari)) seskari = 'cnano'
const res = def.replace(/\$.*?\$/g, (c, offset, string) => {
if (type === 'd' && typeof index !== 'undefined') {
const rt = veljvoLetters(c)
if (rt.hasExpansion) hasExpansion = true
veljvoLs = veljvoLs.concat(rt.jalge)
const q = string.substr(offset)
const r = new RegExp(
`^(${c.replace(/[^a-zA-Z0-9\{\}_]/g, '')} \\([^\\(\\)<>]+?\\)).*`
)
let hc = c
if (q.search(r) === 0) {
hc = q.replace(r, '$1')
}
const k = {}
k[c] = hc
types.push(k)
}
return c
})
const jalge = `<span>${res
.replace(/\$.*?\$/g, (c, offset, string) => {
if (type === 'd' && typeof index !== 'undefined') {
const q = string.substr(offset)
const r = new RegExp(
`^(${c.replace(/[^a-zA-Z0-9\{\}_]/g, '')} \\([^()<>]+?\\)).*`
)
let hc = c
if (q.search(r) === 0) {
hc = q.replace(r, '$1')
} else {
const seklesi = types.filter((i) => i[c] && i[c] !== hc)[0]
if (seklesi) {
hc = seklesi[c]
}
}
iterTercricmiId++
const combInd = `${index}_${iterTercricmiId}`
const a = {}
a[c] = combInd
jsonIds.push(a)
const b = c.replace(/[^a-zA-Z0-9]/g, '')
let head = ''
if (!!((fullDef && fullDef.rfs) || []).length) head = ` data-head="1"`
const vel = veljvoString({
subtype: head !== '' ? 'd' : 'r',
v: c,
fullDef,
dataArrAdded,
b,
veljvoLs,
})
c = `<span id="${combInd}" class="terbricmi" style="background-color: hsl(${string2Int(
hc,
256,
16
)}, 100%, 90%);border-radius:${
string2Int(hc, 9, 1) + 3
}px"${vel}${head} data-color="${string2Int(hc, 256, 16)}">${c}</span>`
dataArrAdded.push(b)
}
return c
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
.replace(/\$.*?\$/g, (c) =>
c.replace(/\{/g, '\\curlyleft').replace(/\}/g, '\\curlyright')
)
.replace(
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
.replace(/\{.*?\}/g, (c) => {
var c = c.substring(1, c.length - 1)
return `</span><a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
c
)}">${basna({
def: escHtml(c, true),
query,
})}</a><span>`
})
.replace(/\$.*?\$/g, (c) =>
c.replace(/\\curlyleft/g, '{').replace(/\\curlyright/g, '}')
)}</span>`
.replace(/<span><\/span>/g, '')
.replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g, (
c // var c = c.substring(1, c.length - 1)
) =>
basna({
def: c,
query,
})
)
return { tergeha: jalge, hasExpansion }
}
function escapeRegExp(string) {
return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function basna({ def, query }) {
if (!query || query === '') return def
const f = `(${escapeRegExp(query).replace(/ /g, '|')}|${escapeRegExp(query)
.replace(/'/g, 'h')
.replace(/ /g, '|')})`
const rock = new RegExp(f, 'igm')
return def.replace(rock, "<span class='basna'>$1</span>")
}
const UNICODE_START = 0xed80
const lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY"
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
function skicu_palodovalsi({ def, inner, query, seskari, index }) {
if (!query) query = state.searching.query
if (!seskari) seskari = state.searching.seskari
if (!def) def = []
const out = document.createElement('div')
out.className = inner ? 'terminner' : 'termouter'
out.classList.add('term')
if (!inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0) {
out.className = 'sidju cll noselect'
}
if (typeof fm[def.s] !== 'undefined') {
var fmm = document.createElement('h4')
fmm.className = 'tfm'
fmm.innerHTML = `&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=${seskari}&sisku=${encodeUrl(
fm[def.s]
)}">${escHtml(fm[def.s])}</a>]</sup></i>`
}
const sh = []
for (const key in fm) {
if (fm[key] === def.w)
sh.push(
`<a href="#seskari=${seskari}&sisku=${encodeUrl(key)}">${escHtml(
key
)}</a>`
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
if (def.s) {
var ss = document.createElement('a')
ss.className = 'tutci klesi klesi-tutci'
var text = basna({
def: escHtml(def.s),
query,
})
ss.innerHTML = text
if (seskari !== 'velcusku')
ss.href = `#seskari=${seskari}&sisku=${encodeUrl(def.s)}`
}
if (def.t) {
var jvs = document.createElement('a')
jvs.className = 'klesi link noselect'
var text = def.t
const txt = encodeUrl(def.w).replace(/_/g, '%20')
jvs.href = window.judri
? window.judri + txt
: `#seskari=${seskari === 'catni' ? 'catni' : 'cnano'}&sisku=${txt}`
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
if (def.date) {
var jvs = document.createElement('div')
jvs.className = 'tutci klesi klesi-tutci'
jvs.style.whiteSpace = 'nowrap'
jvs.innerHTML = def.date
}
if (def.from) {
var ss = document.createElement('div')
ss.className = 'tutci klesi klesi-tutci'
ss.innerHTML = def.from
}
const word = document.createElement('h4')
word.classList.add('valsi')
word.setAttribute('data-valsi', encodeURIComponent(def.w))
if (def.l) word.classList.add('nalojbo')
if (plukaquery(def.w) == query || seskari == 'velcusku') {
word.innerHTML = `${basna({
def: def.w,
query,
})} `
} else {
word.innerHTML = `<a class="valsi${
def.l ? '' : ' nalojbo'
}" href="#seskari=${seskari}&sisku=${encodeUrl(def.w)}">${basna({
def: escHtml(def.w, true),
query,
})}</a> `
}
let mu = {}
if (def.d && !def.d.nasezvafahi)
mu = melbi_uenzi({
def: def.d,
fullDef: def,
query,
seskari,
type: 'd',
index,
})
const heading = document.createElement('heading')
heading.classList.add('heading')
if (tfm) heading.appendChild(tfm)
heading.appendChild(word)
if (zbalermorna && def.w.length <= 20 && !window.muplis)
heading.appendChild(zbalermorna)
if (fmm) heading.appendChild(fmm)
const flex = document.createElement('heading')
flex.style.flex = 1
heading.appendChild(flex)
if (jvs) heading.appendChild(jvs)
if (ss) heading.appendChild(ss)
out.appendChild(heading)
if (zbalermorna && (window.muplis || def.w.length > 20))
out.appendChild(zbalermorna)
if (seskari !== 'arxivo' && def.d) {
var n = document.createElement('div')
n.classList.add('definition', 'valsi')
if (def.d && def.d.nasezvafahi) {
if (!def.t && (def.rfs || []).length === 0) return
n.classList.add('nasezvafahi', 'noselect')
n.innerHTML = window.nasezvafahi
} else {
let melbi = mu.tergeha
if (seskari !== 'velcusku') melbi = `${melbi.replace(/\n/g, '<br/>')} `
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
}).replace(/\n/g, '<br/>')} `
n.addEventListener('click', () => {
n.style.display = 'none'
n.previousElementSibling.style.display = 'block'
n.parentElement.scrollIntoView()
})
}
out.appendChild(n)
}
if (def.n) {
var n = document.createElement('div')
n.classList.add('notes', 'valsi')
n.innerHTML = `${
melbi_uenzi({
def: def.n,
query,
seskari,
}).tergeha
} `
out.appendChild(n)
}
if (def.e) {
var n = document.createElement('div')
n.classList.add('examples', 'valsi')
n.innerHTML = `<table class='ciksi'>${
melbi_uenzi({
def: `${def.e}\n`
.replace(/%/g, '\n')
.replace(
/(.*?) — (.*?)\n/g,
"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"
),
query,
seskari,
}).tergeha
}</table> `
out.appendChild(n)
}
if (def.k) {
var n = document.createElement('div')
n.className = 'related'
n.innerHTML = `See also: ${
melbi_uenzi({
def: def.k,
query,
seskari,
}).tergeha
} `
out.appendChild(n)
}
if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
const rafsi = document.createElement('div')
rafsi.className = 'rafsi noselect'
rafsi.innerHTML = 'rafsi: '
for (i = 0; i < def.r.length; i++) {
const rafElem = document.createElement('span')
rafElem.className = 'pamei'
const raf = def.r[i]
if ((def.t || '').match(/lujvo/)) {
const a = document.createElement('a')
a.setAttribute('href', `#seskari=${seskari}&sisku=${encodeUrl(raf)}`)
a.text = raf
rafElem.appendChild(a)
} else {
rafElem.innerHTML = basna({
def: raf,
query,
})
}
rafElem.innerHTML = `${rafElem.innerHTML} `
rafsi.appendChild(rafElem)
}
out.appendChild(rafsi)
}
if ((def.rfs || []).length > 0) {
const subDefs = document.createElement('div')
subDefs.classList.add('definition', 'subdefinitions')
for (var i = 0; i < def.rfs.length; i++) {
const o = skicu_palodovalsi({
def: def.rfs[i],
inner: true,
index: `${index}_${i}`,
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
return a
.replace(/\./g, ' ')
.replace(/ {2,}/g, ' ')
.replace(/’/g, "'")
.trim()
return a
}
function encodeUrl(uenzi) {
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
a = (a || '')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;')
.replace(/"/g, '&quot;')
.replace(/\(/g, '&#40;')
.replace(/\)/g, '&#41;')
if (!apos) a = a.replace(/'/g, '&#039;')
return a
}
function skicu_rolodovalsi({ query, seskari }) {
const displayUpTo = Math.min(window.jimte, results.length)
state.cll = undefined
if (resultCount === 0) {
const { secs, div } = CLL({ pre: true, valsi: state.searching.query })
state.cll = secs
if (div) outp.appendChild(div)
}
for (; resultCount < displayUpTo; resultCount++) {
outp.appendChild(
skicu_palodovalsi({
def: results[resultCount],
query,
seskari,
length: results.length,
index: resultCount,
})
)
}
}
async function cnino_sorcu() {
const db = new Dexie('sorcu')
db.version(2).stores({
valsi: '++id, bangu, w, d, n, t, g, r',
})
for (const lang of [
'en',
'ru',
'eo',
'es',
'fr-facile',
'ja',
'jbo',
'ru',
'zh',
]) {
const response = await fetch(
`/sutysisku/data/parsed-${lang}.json?sisku=${new Date.getTime()}`
)
const json = response.json()
const keys = Object.keys(json)
for (const key of keys) {
await db.valsi.add(json[key])
}
}
}
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('./sw.js').then(
({ scope }) => {
console.log('ServiceWorker registration successful with scope: ', scope)
},
(err) => {
console.log('ServiceWorker registration failed: ', err)
}
)
})
} else {
alert(
'Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari.'
)
}
var socket
var socket1Chat
ciska.focus()
