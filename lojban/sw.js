(()=>{var e="sutysisku",s=["https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js","https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.min.js","https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.4/dexie.min.js","https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js","./","./index.html","./index.js?detri=1629614215768","./index.css?detri=1629614215768","./sorcuWorker.js?sisku=1629614215768","./worker.js?sisku=1629614215768","../assets/fonts/linux-libertine/LinLibertine_R.otf?sisku=1629614215768","../assets/fonts/linux-libertine/LinLibertine_RI.otf?sisku=1629614215768","../assets/fonts/linux-libertine/LinLibertine_RB.otf?sisku=1629614215768","../assets/fonts/linux-libertine/LinLibertine_RBI.otf?sisku=1629614215768","../assets/fonts/crisa-regular.otf?sisku=1629614215768","../assets/scripts/leader-line.min.js","../pixra/144.png","../pixra/32.png","../pixra/cukta.svg","../pixra/certu.svg","../pixra/fanva.svg","../pixra/cll.png","../pixra/cmalu_snime.svg","../pixra/snime.svg","../pixra/menu.svg","../pixra/x.svg","../pixra/jbotcan.svg","../pixra/taplamuplis.svg","../pixra/selsku_lanci_eng.svg","../pixra/selsku_lanci_zho.svg","../pixra/lanci_jbo.svg","../pixra/selsku_lanci_jpn.svg","../pixra/selsku_lanci_fra.svg","../pixra/selsku_lanci_rus.svg","../pixra/lanci_epo.svg","../pixra/selsku_lanci_spa.svg","../pixra/cogwheel-5.svg","../sance/lerfu/a.ogg","../sance/lerfu/ai.ogg","../sance/lerfu/aia.ogg","../sance/lerfu/au.ogg","../sance/lerfu/aua.ogg","../sance/lerfu/b.ogg","../sance/lerfu/c.ogg","../sance/lerfu/d.ogg","../sance/lerfu/e.ogg","../sance/lerfu/ei.ogg","../sance/lerfu/f.ogg","../sance/lerfu/g.ogg","../sance/lerfu/'.ogg","../sance/lerfu/i.ogg","../sance/lerfu/j.ogg","../sance/lerfu/k.ogg","../sance/lerfu/l.ogg","../sance/lerfu/m.ogg","../sance/lerfu/n.ogg","../sance/lerfu/o.ogg","../sance/lerfu/oi.ogg","../sance/lerfu/p.ogg","../sance/lerfu/r.ogg","../sance/lerfu/s.ogg","../sance/lerfu/t.ogg","../sance/lerfu/u.ogg","../sance/lerfu/v.ogg","../sance/lerfu/x.ogg","../sance/lerfu/y.ogg","../sance/lerfu/z.ogg"];self.addEventListener("install",(function(a){a.waitUntil(caches.open(e).then((function(e){return console.log("Opened cache"),e.addAll(s)})))})),self.addEventListener("fetch",(function(e){"only-if-cached"===e.request.cache&&"same-origin"!==e.request.mode||e.respondWith(caches.match(e.request).then((function(s){if(s){const e=new Headers(s.headers);return e.set("Cross-Origin-Embedder-Policy","require-corp"),e.set("Cross-Origin-Opener-Policy","same-origin"),new Response(s.body,{status:s.status,statusText:s.statusText,headers:e})}return fetch(e.request)})))})),self.addEventListener("activate",(function(s){s.waitUntil(caches.keys().then((s=>Promise.all(s.map((s=>{if(e!==s)return caches.delete(s)}))))).then((()=>{self.clients.matchAll().then((function(e){}))})))}))})();