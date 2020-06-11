var CACHE_NAME = 'sutysisku'
var urlsToCache = [
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.otf',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.otf',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.otf',
  'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js',
  './',
  './index.html',
  './index.js?detri=1591858411106',
  './index.css?detri=1591858411106',
  './bangu.js?sisku=1591858411106',
  '../data/parsed-ithkuil.js?sisku=1591858411106',
  '../sisku.js?sisku=1591858411106',
  './worker.js?sisku=1591858411106',
  '../assets/fonts/crisa-regular.otf?sisku=1591858411106',
  '../assets/scripts/leader-line.min.js',
  '../pixra/cll.png',
  '../pixra/cmalu_snime.svg',
  '../pixra/snime.svg',
  '../pixra/menu.svg',
  '../pixra/x.svg',
  '../pixra/16.png',
  '../pixra/32.png',
  '../pixra/jbotcan.svg',
  '../pixra/taplasance.svg',
  '../pixra/taplamuplis.svg',
  '../pixra/snime-1.svg',
  '../pixra/selsku_lanci_eng.svg',
  '../pixra/selsku_lanci_zho.svg',
  '../pixra/lanci_jbo.svg',
  '../pixra/selsku_lanci_jpn.svg',
  '../pixra/selsku_lanci_fra.svg',
  '../pixra/selsku_lanci_rus.svg',
  '../pixra/lanci_epo.svg',
  '../pixra/selsku_lanci_spa.svg',
  '../pixra/cogwheel-5.svg',
  '../sance/lerfu/a.ogg',
  '../sance/lerfu/ai.ogg',
  '../sance/lerfu/aia.ogg',
  '../sance/lerfu/au.ogg',
  '../sance/lerfu/aua.ogg',
  '../sance/lerfu/b.ogg',
  '../sance/lerfu/c.ogg',
  '../sance/lerfu/d.ogg',
  '../sance/lerfu/e.ogg',
  '../sance/lerfu/ei.ogg',
  '../sance/lerfu/f.ogg',
  '../sance/lerfu/g.ogg',
  "../sance/lerfu/'.ogg",
  '../sance/lerfu/i.ogg',
  '../sance/lerfu/j.ogg',
  '../sance/lerfu/k.ogg',
  '../sance/lerfu/l.ogg',
  '../sance/lerfu/m.ogg',
  '../sance/lerfu/n.ogg',
  '../sance/lerfu/o.ogg',
  '../sance/lerfu/oi.ogg',
  '../sance/lerfu/p.ogg',
  '../sance/lerfu/r.ogg',
  '../sance/lerfu/s.ogg',
  '../sance/lerfu/t.ogg',
  '../sance/lerfu/u.ogg',
  '../sance/lerfu/v.ogg',
  '../sance/lerfu/x.ogg',
  '../sance/lerfu/y.ogg',
  '../sance/lerfu/z.ogg',
]

self.addEventListener('install', function (event) {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

self.addEventListener('activate', function (event) {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (CACHE_NAME !== key) {
              return caches.delete(key)
            }
          })
        )
      )
      .then(() => {
        console.log('V2 now ready to handle fetches!')
      })
  )
})
