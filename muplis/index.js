"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(t){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,a,r,i,c){try{var s=e[i](c),o=s.value}catch(e){return void n(e)}s.done?t(o):Promise.resolve(o).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var c=e.apply(t,n);function s(e){a(c,r,i,s,o,"next",e)}function o(e){a(c,r,i,s,o,"throw",e)}s(void 0)}))}}var i=document.getElementById("content"),c=document.getElementById("ciska"),s=document.getElementById("clear"),o=document.getElementById("outp"),l=document.getElementById("descr"),u=document.getElementById("drata"),d=document.getElementById("citri"),p=document.getElementById("sidju"),g=document.getElementById("kernelo_lo_cpacu"),f=new Worker("worker.js?sisku=1591876107750"),m=document.querySelector("#title > font"),h=document.querySelector("#site-title"),v=!1,y=3500;h.classList.add("desktop-mode-title-color");var k=document.getElementById("galtu-dasri"),w=document.getElementById("catni"),b=document.getElementById("cnano"),E=document.getElementById("rimni"),L=document.querySelectorAll("#title > img"),x=document.getElementById("scrollToTop");function switchBorderScroll(){i.scrollTop>200?i.scrollTop=0:i.scrollTop=i.scrollHeight}i.onscroll=function(){i.scrollTop>200?(x.style.display="block",x.classList.remove("dizlo")):x.classList.add("dizlo")};var q,j,I,C={BE:"bei",BEI:"be'o",BY:"boi",COI:"do'u",DOI:"do'u",FIhO:"fe'u",FUhE:"fu'o",GIhA:"vau",GOI:"ge'u",JOhI:"te'u",KE:"ke'e",LAhE:"lu'u",LA:"ku",LE:"ku",LI:"lo'o",LOhU:"le'u",LU:"li'u",ME:"me'u","NAhE+BO":"lu'u",NOI:"ku'o",NUhI:"nu'u",NU:"kei",PA:"boi",PEhO:"ku'e",SEI:"se'u",SOI:"se'u",TO:"toi",TUhE:"tu'u",VEI:"ve'o",LOhAI:"sa'ai",SAhAI:"le'ai",LOhOI:"ku'au",NAhU:"te'u",NIhE:"te'u",MOhE:"te'u"},O=[],S=function(e,t){clearTimeout(I),I=setTimeout(e,t)},_={searching:{seskari:"cnano",query:""},displaying:{seskari:"cnano",query:""},citri:[]};function T(){_.citri.length>0&&(d.innerHTML=" ".concat(window.purc).concat(_.citri.filter((function(e){return"velcusku"!==e.seskari})).map((function(e){var t=e.seskari,n=e.query;return'<a class="a-'.concat(t,'" href="#seskari=').concat(t,"&sisku=").concat(je(n),'">').concat(Ce(n),"</a>")})).join(", ")))}function A(e,t){var n=["velcusku","arxivo","cnano","rimni","catni"];n.includes(e)||(e="cnano"),k.className="kampu-dasri ".concat(e,"-dasri noselect"),h.classList.add("".concat(e,"-search-mode-title-color")),h.classList.remove("desktop-mode-title-color"),document.getElementById(e)&&document.getElementById(e).classList.add("".concat(e,"-tutci-hover"),"tutci-hover"),n.map((function(t){t!==e&&(h.classList.remove("".concat(t,"-search-mode-title-color")),document.getElementById(t)&&document.getElementById(t).classList.remove("".concat(t,"-tutci-hover"),"tutci-hover"))}));for(var a=0;a<L.length;a++)L[a].style.filter=t}function N(e){var t=e.action;if("complete"===document.readyState){var n=["logo"];"start"===t?(n.map((function(e){document.getElementById(e).classList.remove("stopRotate"),document.getElementById(e).classList.add("rotate")})),s.classList.add("pulsate-css"),setTimeout((function(){s.classList.contains("pulsate-css")&&c.classList.add("granim-css")}),500)):(n.map((function(e){document.getElementById(e).classList.add("stopRotate")})),c.classList.remove("granim-css"),s.classList.remove("pulsate-css"))}}function B(){Ae&&Ae.open()}function M(){MathJax.typesetPromise().then((function(){P(!0)}))}function H(e){var t=e.query,n=e.seskari;switch(z(),window.jimte="velcusku"===n?201:30,q=0,N({action:"stop"}),o.innerHTML="",Oe({query:t,seskari:n}),_.displaying.query=t,_.displaying.seskari=n,o.style.display="block",l.style.display="none",u.style.display="none",p.style.display="flex",i.scrollTop=0,_.displaying.seskari){case"rimni":M(),A("rimni","sepia(1.0)");break;case"arxivo":A("arxivo","none");break;case"velcusku":A("velcusku","none");break;case"catni":M(),A("catni","none");break;case"cnano":default:M(),A("cnano","none")}S((function(){Y(),ga("send","pageview","#sisku/".concat(_.displaying.query));var e={dl:window.location.href,dt:document.title,dr:document.referrer,dp:"#sisku/".concat(_.displaying.query),dh:"".concat(window.location.protocol,"//").concat(window.location.hostname),z:Math.round(1e12*Math.random())};Te&&Te.emit("sisku",e)}),2e3)}function z(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){e.parentNode.removeChild(e)}))}function $(){[].forEach.call(document.querySelectorAll(".leader-line"),(function(e){document.querySelector("#content").appendChild(e)}))}function P(e){z(),J(!e),ie=setTimeout((function(){if(!0!==e){var t=document.getElementsByClassName("jvo_plumber");v=!v;for(var n=0;n<t.length;n++){var a=t[n];a.value=Ee(),v?a.classList.add("tutci-hover"):a.classList.remove("tutci-hover")}}if(v){var r=Array.from(document.querySelectorAll("[data-arr]")),i=function(){var e=r[n];if(e.attributes["data-head"]&&"1"!==e.attributes["data-head"].nodeValue)return"continue";var t=e.id,a=e.attributes["data-arr"].nodeValue.split(","),i=e.id.split("_").slice(0,-1),c=R(e);r.filter((function(e){var n=e.id.split("_").slice(0,-2),r=e.attributes["data-arr"].nodeValue.split(","),s=r[0].split(/(?=[0-9]+)/);if(1===r.length&&n.length===i.length&&n.join("_")===i.join("_")&&a.filter((function(e){var t=e.split(/(?=[0-9])/);return 0===s[0].indexOf(t[0])&&s[1]===t[1]})).length>0&&(c||R(e))){var o=e.attributes["data-color"].nodeValue;o="hsla(".concat(o,",100%,70%,0.62)"),new LeaderLine(document.getElementById(e.id),document.getElementById(t),{endPlugColor:o,color:o,dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}})),$()};for(n=0;n<r.length;n++)i()}}),!0===e?450:0)}function J(e){z(),re=setTimeout((function(){for(var e=document.querySelectorAll("[data-target]"),t=0;t<e.length;t++){var n=e[t];if(R(n)){var a=n.id,r=n.attributes["data-target"].nodeValue;new LeaderLine(document.getElementById(r),document.getElementById(a),{endPlugColor:"rgba(255, 120, 0, 0.33)",color:"rgba(255, 120, 0, 0.33)",dash:{animation:!0},startSocketGravity:[50,-67],endSocketGravity:[0,67],endPlug:"arrow2",endSocket:"bottom",size:3})}}$(),y=450}),e?0:y)}function R(e){var t=e.getBoundingClientRect();return t=t.top>=48&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function D(e){if(""!==e){var t={},n="";n=0===e.search(/^#sisku\//)?[e.replace(/#sisku\/(.*)/,"sisku=$1")]:("#"===e[0]?e.substr(1):e).split("&");for(var a=0;a<n.length;a++){var r=n[a].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1].replace(/[\+]/g," ")||"")}return t}}function U(e){var t=e.href,n=e.replace;t&&(t=t.substring(t.indexOf("#")+1),localStorage.setItem("url","#".concat(t)));var a,r=D(t||window.location.hash);if(r&&r.sisku)a=Ie(r.sisku).trim();else{if(t=(t=t||window.location.search).substring(t.indexOf("?")+1),!(a=Ie(new URLSearchParams(t).get("focus")||"").trim()))return;r={sisku:a,seskari:"cnano"}}_.searching.seskari===r.seskari&&_.searching.query===a||(r.seskari&&["velcusku","cnano","catni","rimni","arxivo"].includes(r.seskari)&&(_.searching.seskari=r.seskari),r.sisku&&(_.searching.query=a,Q({replace:n})))}function V(e){var t=e.target;if("A"===t.nodeName){var n=t;if(n.ctrlKey||n.metaKey)return;U({replace:!1,href:n.getAttribute("href")})}}function Z(e){var t=e.replace,n="".concat(window.location.href.split("?")[0].split("#")[0],"#seskari=").concat(_.searching.seskari,"&sisku=").concat(je(_.searching.query));""===_.searching.query?(n="",document.title="la sutysisku"):document.title="".concat(_.searching.query," - la sutysisku");var a=localStorage.getItem("url")||"";!0===t?window.history.replaceState({},null,n):window.location.hash!==n&&a!==n&&window.history.pushState({},null,n),localStorage.setItem("url",n)}function G(){_.searching.query=qe(c.value),Q({caller:"GetCiskaAndDispatch"})}function W(e){clearTimeout(j),j=setTimeout(G,e||250)}function F(){_.searching.query=qe(c.value),Q({})}function K(){Q({empty:!0})}function Y(){if(""!==_.displaying.query&&"velcusku"!==_.displaying.seskari){var e=0;for(e=0;e<_.citri.length;e++)if(_.citri[e].query===_.displaying.query&&_.citri[e].seskari===_.displaying.seskari){_.citri.splice(e,1);break}_.citri.unshift(JSON.parse(JSON.stringify(_.displaying))),_.citri.length>10&&(_.citri.length=10),localStorage.setItem("citri",JSON.stringify(_.citri)),T()}}function Q(e){var t=e.replace,n=e.caller,a=e.empty;if(Ae&&Ae.close(),_.searching.query=_.searching.query.trim(),Z({replace:t}),localStorage.setItem("tcini",JSON.stringify(_.searching)),1==a)return _.searching.query="",X();if("velcusku"!==_.searching.seskari){if(""===_.searching.query)return X();if(JSON.stringify(_.searching)===JSON.stringify(_.displaying))return}switch(c.value=_.searching.query,N({action:"start"}),"GetCiskaAndDispatch"===n&&"velcusku"===_.searching.seskari&&(_.searching.seskari="cnano"),_.searching.seskari){case"arxivo":var r=JSON.parse(JSON.stringify(_.searching));"^"!==_.searching.query.charAt(0)&&"$"!==_.searching.query.slice(-1)[0]&&(r.query="\\b".concat(_.searching.query,"\\b")),r.max=20,Te&&Te.emit("cpedu_fi_la_arxivo",r);break;case"velcusku":B();break;default:f.postMessage({kind:"newSearch",query:_.searching.query,seskari:_.searching.seskari})}}function X(){z(),N({action:"stop"}),i.scrollTop=0;var e=_.displaying.query;_.displaying.query="",h.classList.add("desktop-mode-title-color"),h.classList.remove("catni-search-mode-title-color","cnano-search-mode-title-color","velcusku-search-mode-title-color","rimni-search-mode-title-color","arxivo-search-mode-title-color"),w.classList.remove("catni-tutci-hover","tutci-hover");try{b.classList.remove("cnano-tutci-hover","tutci-hover")}catch(e){}E.classList.remove("rimni-tutci-hover","tutci-hover"),k.className="kampu-dasri cnano-dasri",o.style.display="none",l.style.display="block";var t={"@CLL":[".inglic.","Reference Grammar","../pixra/cll.png",1,"https://lojban.pw/cll/uncll-1.2.7/xhtml_section_chunks/"],"@lojban.pw":[".inglic.","Lojban-Chan","../pixra/jbotcan.svg",1,"https://lojban.pw"],muplis:[0,"la muplis","../pixra/taplamuplis.svg",2.1],jb:[0,"English - Lojban examples","../pixra/snime-1.svg",1],en:[0,"English-Lojban","../pixra/selsku_lanci_eng.svg",1],jbo:[0,"fanva fi le'e lojbo ri","../pixra/lanci_jbo.svg",1],ja:[0,'日本 - <span style="white-space:pre;">ロジバン</span>',"../pixra/selsku_lanci_jpn.svg",1],"fr-facile":[0,"français facile - lojban","../pixra/selsku_lanci_fra.svg",1],ru:[0,"русский - ложбан","../pixra/selsku_lanci_rus.svg",1],eo:[0,"Esperanto - Loĵbano","../pixra/lanci_epo.svg",1],es:[0,"español - lojban","../pixra/selsku_lanci_spa.svg",1],zh:[0,"中文 - 逻辑语","../pixra/selsku_lanci_zho.svg",1],"@CC":[".inglic.","The Crash Course","../pixra/cogwheel-5.svg",1,"https://mw.lojban.org/papri/The_Crash_Course_in_Lojban"]},n="";for(var a in t)0!==t[a][0]&&t[a][0]!==window.bangu||(n+="<div class='DIV_1' style='height:".concat(100,"px;width:").concat(100*t[a][3],"px;'><div class='DIV_2' style='height:").concat(100,"px;width:").concat(100*t[a][3],"px;'><span class='SPAN_3' style='width:auto;'><b class='B_4'>").concat(t[a][1],"</b></span><a").concat(0===(t[a][4]||"").indexOf("http")?" rel='noreferrer' target='_blank'":"",' aria-label="').concat(t[a][1].replace(/<[^>]+?>/g,""),'" href="').concat(0===a.indexOf("@")?t[a][4]:"https://la-lojban.github.io/sutysisku/".concat(a,"/#seskari=").concat(_.displaying.seskari,"&sisku=").concat(je(e)),"\" class='A_7'><div class='DIV_8' style='height:").concat(100,"px;width:").concat(100*t[a][3],'px;background-image:url("').concat(t[a][2],"\")'></div></a></div></div>"));u.innerHTML=n,u.style.display="block"}function ee(e){var t=e.keyCode;t&&191===t&&c.focus()}function te(){i.setAttribute("style","height:".concat(Math.max(document.documentElement.clientHeight,window.innerHeight||0),"px;"))}function ne(e){var t=window.arrcll[e];return t||(t=window.arrcll[e.replace(/[^A-Z]+$/,"")]),t}function ae(e){var t=e.pre,n=e.valsi;if(!(!window.cll_url|0===(window.arrcll||[]).length)){if(t&&!n.match(/^[A-Zh]+[\+A-Zh0-9]*$/))return{};var a=ne(n);if(!a)return{};var r="".concat(window.cllnotci,"<ul class='uoldeliste'>").concat(Object.keys(a).map((function(e){return"<li><a rel='noreferrer' target='_blank' href=\"".concat(window.cll_url).concat(e,'">').concat(Ce(a[e]),"</a></li>")})).join(""),"</ul>"),i=document.createElement("div");return i.className="".concat(t?"sidju":"definition"," cll noselect"),i.innerHTML=r,{secs:a,div:i}}}!function(){try{var e=JSON.parse(localStorage.getItem("tcini"));e.seskari&&(_.searching.seskari=e.seskari),e.query&&(_.searching.query=e.query)}catch(e){}try{_.citri=JSON.parse(localStorage.getItem("citri"))||[]}catch(e){}}(),T(),f.onmessage=function(e){var t=e.data;if("ready"==t.kind){document.title="la sutysisku";var n=document.getElementById("loading");n.parentNode.removeChild(n),U({replace:!0})}else if("searchResults"==t.kind){if(JSON.stringify(t.req)!==JSON.stringify(_.searching))return;if(JSON.stringify(t.req)===JSON.stringify(_.displaying))return;O=t.results||[],H({query:t.req.query,seskari:t.req.seskari})}else"loading"==t.kind?(document.getElementById("caho_cpacu").textContent=window.bangubuild,g.style.width="51%"):"progress"==t.kind&&(g.style.width="".concat(100*t.percent,"%"))},d.addEventListener("click",V),window.addEventListener("popstate",U),c.addEventListener("paste",W(0)),c.addEventListener("keyup",(function(){W()})),c.addEventListener("keydown",(function(){clearTimeout(j)})),c.addEventListener("input",W()),c.addEventListener("textInput",W()),c.addEventListener("focus",F),s.addEventListener("click",K),document.getElementById("title").addEventListener("click",K),document.getElementById("rimni").addEventListener("click",(function(){_.searching={seskari:"rimni",query:qe(c.value)},Q({replace:!1})})),document.getElementById("cnano").addEventListener("click",(function(){_.searching={seskari:"cnano",query:qe(c.value)},Q({replace:!1})})),document.getElementById("catni").addEventListener("click",(function(){_.searching={seskari:"catni",query:qe(c.value)},Q({replace:!1})})),window.addEventListener("resize",te,!0),i.addEventListener("scroll",ce),te(),document.attachEvent?document.attachEvent("onkeyup",ee):document.addEventListener("keyup",ee),"loading"===document.readyState&&(g.style.width="37%",document.title="la sutysisku");var re=null,ie=null;function ce(e){var t=e.target;z(),null!==re&&clearTimeout(re),null!==ie&&clearTimeout(ie),"velcusku"!==_.displaying.seskari&&t.scrollTop+window.innerHeight>=o.clientHeight-700?(window.jimte+=10,Oe(_.displaying),MathJax.typesetPromise().then((function(){P(!0)}))):P(!0)}function se(e,t,n){return e=e.replace(/[\{\}_]/g,""),Math.abs(Math.round(e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)%t/n)*n)}function oe(e){var t=(e=e.substr(1,e.length-2).split("=")).map((function(e){return e.replace(/[^A-Za-z']/g,"")}));return{jalge:t,hasExpansion:e.length>1||t[0]&&"x"!==t[0]}}function le(e){var t=e.v,n=e.fullDef,a=e.subtype,r=e.dataArrAdded,i=e.b,c=e.veljvoLs;return r.includes(i)||"r"!==a&&"lujvo"!==n.t?"":(t=(t=(t=t.substr(1,t.length-2).split("=").map((function(e){return"r"===a?n.w+e.replace(/[^0-9]/g,""):e.replace(/[^0-9A-Za-z']/g,"")}))).filter((function(e){var t=e.replace(/[0-9]/g,"");if(!(c.filter((function(e){return 0===e.indexOf(t)&&e!==t})).length>0))return!0}))).join(","),' data-arr="'.concat(t,'"'))}function ue(e){var t=e.def,n=e.fullDef,a=e.query,r=e.seskari,i=e.type,c=e.index,s=0,o=[],l=[],u=[],d=[],p=!1;["cnano","catni","rimni"].includes(r)||(r="cnano");var g=t.replace(/\$.*?\$/g,(function(e,t,n){if("d"===i&&void 0!==c){var a=oe(e);a.hasExpansion&&(p=!0),d=d.concat(a.jalge);var r=n.substr(t),s=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^\\(\\)<>]+?\\)).*")),o=e;0===r.search(s)&&(o=r.replace(s,"$1"));var u={};u[e]=o,l.push(u)}return e}));return{tergeha:"<span>".concat(g.replace(/\$.*?\$/g,(function(e,t,a){if("d"===i&&void 0!==c){var r=a.substr(t),p=new RegExp("^(".concat(e.replace(/[^a-zA-Z0-9\{\}_]/g,"")," \\([^()<>]+?\\)).*")),g=e;if(0===r.search(p))g=r.replace(p,"$1");else{var f=l.filter((function(t){return t[e]&&t[e]!==g}))[0];f&&(g=f[e])}s++;var h="".concat(c,"_").concat(s),m={};m[e]=h,o.push(m);var v=e.replace(/[^a-zA-Z0-9]/g,""),y="";(n&&n.rfs||[]).length&&(y=' data-head="1"');var k=le({subtype:""!==y?"d":"r",v:e,fullDef:n,dataArrAdded:u,b:v,veljvoLs:d});e='<span id="'.concat(h,'" class="terbricmi" style="background-color: hsl(').concat(se(g,256,16),", 100%, 90%);border-radius:").concat(se(g,9,1)+3,'px"').concat(k).concat(y,' data-color="').concat(se(g,256,16),'">').concat(e,"</span>"),u.push(v)}return e})).replace(/(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,(function(e,t,n,a){if("d"===i){var r=o.filter((function(e){return e[a]!==n&&e[a]}));r[0]&&r[0][a]&&(e=e.replace(/^<span /,'<span data-target="'.concat(r[0][a],'" ')))}return e})).replace(/\$.*?\$/g,(function(e){return e.replace(/\{/g,"\\curlyleft").replace(/\}/g,"\\curlyright")})).replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(function(e){var t='</span><a href="'.concat(e,'" rel="noreferrer" target="_blank">').concat(pe({def:e,query:a}),"</a><span>");return e.match(/^https?:\/\/.*\.(jpg|png)$/)&&(t+="<img class='se-tcidu-pixra' alt='secusku' src=\"".concat(e,'"/>\n')),t})).replace(/\{.*?\}/g,(function(e){e=e.substring(1,e.length-1);return'</span><a class="a-'.concat(r,'" href="#seskari=').concat(r,"&sisku=").concat(je(e),'">').concat(pe({def:Ce(e,!0),query:a}),"</a><span>")})).replace(/\$.*?\$/g,(function(e){return e.replace(/\\curlyleft/g,"{").replace(/\\curlyright/g,"}")})),"</span>").replace(/<span><\/span>/g,"").replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g,(function(e){return pe({def:e,query:a})})),hasExpansion:p}}function de(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function pe(e){var t=e.def,n=e.query;if(!n||""===n)return t;var a="(".concat(de(n).replace(/ /g,"|"),"|").concat(de(n).replace(/'/g,"h").replace(/ /g,"|"),")"),r=new RegExp(a,"igm");return t.replace(r,"<span class='basna'>$1</span>")}var ge=60800,fe="ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY";function me(e){return e.replace(/\./g,"").replace(/^/,".").toLowerCase().replace(/([aeiou\.])u([aeiou])/g,"$1w$2").replace(/([aeiou\.])i([aeiou])/g,"$1ɩ$2").replace(/au/g,"ḁ").replace(/ai/g,"ą").replace(/ei/g,"ę").replace(/oi/g,"ǫ").replace(/\./g,"")}function he(e){return e.replace(/w/g,"u").replace(/ɩ/g,"i").replace(/ḁ/g,"au").replace(/ą/g,"ai").replace(/ę/g,"ei").replace(/ǫ/g,"oi")}function ve(e){var t=e.w,n=e.ot,a=e.rfs,r=me(t);return n&&"vlaza'umei"===n?a.map((function(e){return ve(e)})).join(" "):(r=r.split(/(?=[ɩw])/).map((function(e){return he(e).split("").map((function(e){return ye(e)})).join("")})).join("")).replace(/,/g,"")}function ye(e){return e.codePointAt(0)>=60800?e:" "==e?" ":("h"!=e&&"H"!=e||(e="'"),fe.includes(e)?String.fromCodePoint(ge+fe.indexOf(e)):fe.includes(e.toLowerCase())?String.fromCodePoint(ge+fe.indexOf(e.toLowerCase())):"\n"==e?"\n":"\t"==e?"\t":e)}function ke(e,t){for(var n,a=new RegExp(e,"g"),r=[];n=a.exec(t);)r.push(n.index);return r}function we(e,t,n){return n.indexOf(e)===t}function be(e,t,n){var a=ke(t,e);a=a.map((function(t){return(t=[t-n,t+n])[0]<0&&(t[0]=0),t[0]>=e.length&&(t[0]=e.length-1),t}));for(var r=0;r<a.length-1;r++)a[r][1]>a[r+1][0]&&(a[r][1]=a[r+1][1],a[r+1][0]=a[r][0]);if((a=a.map((function(e){return JSON.stringify(e)}))).length>0)a=(a=a.filter(we).map((function(n){n=JSON.parse(n);var a=e.substr(n[0],n[1]-n[0]);return a=pe({def:a,query:t}),n[0]>3&&(a="...".concat(a)),n[1]<e.length-4&&(a="".concat(a,"...")),a}))).join("<br/>");else{var i=e.substr(0,Math.min(100,e.length));i.length<e.length&&(i="".concat(i,"...")),a=i=pe({def:i,query:t})}return a}function Ee(){return v?"⇔":"↔"}function Le(e){var t=e.def,n=e.inner,a=e.query,r=e.seskari,i=e.index;a||(a=_.searching.query),r||(r=_.searching.seskari),t||(t=[]);var c=document.createElement("div");if(c.className=n?"terminner":"termouter",c.classList.add("term"),!n&&t.d&&t.d.nasezvafahi&&0===(t.rfs||[]).length&&(c.className="sidju cll noselect"),void 0!==C[t.s]){var s=document.createElement("h4");s.className="tfm",s.innerHTML='&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari='.concat(r,"&sisku=").concat(je(C[t.s]),'">').concat(Ce(C[t.s]),"</a>]</sup></i>")}var o=[];for(var l in C)C[l]===t.w&&o.push('<a href="#seskari='.concat(r,"&sisku=").concat(je(l),'">').concat(Ce(l),"</a>"));if(0!==o.length){var u=document.createElement("div");u.classList.add("valsi"),t.l&&u.classList.add("nalojbo"),u.innerHTML="<i><sup>[".concat(o.join(", "),"&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;")}if(t.s){var d;(d=document.createElement("a")).className="tutci klesi klesi-tutci";var p=pe({def:Ce(t.s),query:a});d.innerHTML=p,"velcusku"!==r&&(d.href="#seskari=".concat(r,"&sisku=").concat(je(t.s)))}if(t.t){var g;(g=document.createElement("a")).className="klesi link noselect";p=t.t;var f=je(t.w).replace(/_/g,"%20");g.href=window.judri?window.judri+f:"#seskari=".concat("catni"===r?"catni":"cnano","&sisku=").concat(f),window.judri&&(g.setAttribute("target","_blank"),g.setAttribute("rel","noreferrer"));var h="";t.t.search("sampu staile")>=0&&(h+="<img src='../pixra/plise.png' height='16' width='16' alt='lo staile poi sampu'>"),t.t.search("mansa staile")>=0&&(h+="<img src='../pixra/pelxuplise.png' height='16' width='16' alt=\"lo staile poi na mutce cinri\">"),t.t.search("plixau jufra")>=0&&(h+="<img src='../pixra/crinoplise.png' height='16' width='16' alt=\"lo jufra poi ka'e xamgu lo di'i fanva\">"),t.t.search("cnano staile")>=0&&(h+="<img src='../pixra/blabiplise.png' height='16' width='16' alt=\"lo staile poi ka'e pluja\">"),t.t.search("non-standard")>=0&&(h+="<img src='../pixra/cicnaplise.png' height='16' width='16' alt=\"na'e catni se ciska staile\">"),""!==h&&(p=h),window.xuzganalojudri&&!t.l&&(p="".concat(Ce(t.t),"# "),t.d&&t.d.nasezvafahi&&(p="➕ ".concat(p))),g.innerHTML=p}t.date&&((g=document.createElement("div")).className="tutci klesi klesi-tutci",g.style.whiteSpace="nowrap",g.innerHTML=t.date);t.from&&((d=document.createElement("div")).className="tutci klesi klesi-tutci",d.innerHTML=t.from);var m=document.createElement("h4");m.classList.add("valsi"),m.setAttribute("data-valsi",encodeURIComponent(t.w)),t.l&&m.classList.add("nalojbo"),qe(t.w)==a||"velcusku"==r?m.innerHTML="".concat(pe({def:t.w,query:a})," "):m.innerHTML='<a class="valsi'.concat(t.l?"":" nalojbo",'" href="#seskari=').concat(r,"&sisku=").concat(je(t.w),'">').concat(pe({def:Ce(t.w,!0),query:a}),"</a> ");var y={};t.d&&!t.d.nasezvafahi&&(y=ue({def:t.d,fullDef:t,query:a,seskari:r,type:"d",index:i}));var k=document.createElement("h4");k.classList.add("valsi","zbalermorna"),k.textContent=ve(t);var w=document.createElement("heading");if(w.classList.add("heading"),u&&w.appendChild(u),w.appendChild(m),k&&t.w.length<=20&&!window.muplis&&w.appendChild(k),s&&w.appendChild(s),"lujvo"===t.t&&(t.rfs||[]).length>0&&y.hasExpansion){var b=document.createElement("input");b.type="button",b.classList.add("tutci","sance","jvo_plumber"),b.value=Ee(),v?b.classList.add("tutci-hover"):b.classList.remove("tutci-hover"),b.onclick=P,w.appendChild(b)}var E=document.createElement("heading");E.style.flex=1,w.appendChild(E),g&&w.appendChild(g),d&&w.appendChild(d);try{var L=new Audio("/sutysisku/sance/vreji/".concat(xe(t.w),".mp3"));L.id="sance_".concat(xe(t.w)),L.addEventListener("canplaythrough",(function(){var e=Array.from(document.querySelectorAll('[data-valsi="'.concat(xe(t.w),'"]')))[0];e&&!document.getElementById("sance_".concat(xe(t.w)))&&(e.innerHTML+='<button class="tutci sance" onclick="document.getElementById(\'sance_'.concat(xe(t.w),"').play()\">▶</button>"),e.appendChild(L))}))}catch(e){}if(c.appendChild(w),k&&(window.muplis||t.w.length>20)&&c.appendChild(k),"arxivo"!==r&&t.d){if((j=document.createElement("div")).classList.add("definition","valsi"),t.d&&t.d.nasezvafahi){if(!t.t&&0===(t.rfs||[]).length)return;j.classList.add("nasezvafahi","noselect"),j.innerHTML=window.nasezvafahi}else{var x=y.tergeha;"velcusku"!==r&&(x="".concat(x.replace(/\n/g,"<br/>")," ")),j.innerHTML=x}c.appendChild(j)}if("arxivo"===r){var j,q=document.createElement("div");q.classList.add("definition","valsi","pointer"),q.innerHTML=be(t.d,a,50),q.addEventListener("click",(function(){q.style.display="none",q.nextElementSibling.style.display="block"})),c.appendChild(q),(j=document.createElement("div")).classList.add("definition","valsi"),j.style.display="none",t.d&&t.d.nasezvafahi?(j.classList.add("nasezvafahi","noselect"),j.innerHTML=window.nasezvafahi):(j.innerHTML="".concat(pe({def:t.d,query:a}).replace(/\n/g,"<br/>")," "),j.addEventListener("click",(function(){j.style.display="none",j.previousElementSibling.style.display="block",j.parentElement.scrollIntoView()}))),c.appendChild(j)}t.n&&((j=document.createElement("div")).classList.add("notes","valsi"),j.innerHTML="".concat(ue({def:t.n,query:a,seskari:r}).tergeha," "),c.appendChild(j));if(0==i&&"velcusku"!==r){var I=ae({valsi:t.w}),O=I.secs,S=I.div;O&&O!==_.cll&&c.appendChild(S)}t.e&&((j=document.createElement("div")).classList.add("examples","valsi"),j.innerHTML="<table class='ciksi'>".concat(ue({def:"".concat(t.e,"\n").replace(/%/g,"\n").replace(/(.*?) — (.*?)\n/g,"<tr><td class='mupligreku'><b>$1</b></td><td class='mupligreku'><i>$2</i></td></tr>\n"),query:a,seskari:r}).tergeha,"</table> "),c.appendChild(j));t.k&&((j=document.createElement("div")).className="related",j.innerHTML="See also: ".concat(ue({def:t.k,query:a,seskari:r}).tergeha," "),c.appendChild(j));if((t.r||[]).length>0&&!t.l&&window.xuzganalojudri){var T=document.createElement("div");for(T.className="rafsi noselect",T.innerHTML="rafsi: ",H=0;H<t.r.length;H++){var A=document.createElement("span");A.className="pamei";var N=t.r[H];if((t.t||"").match(/lujvo/)){var B=document.createElement("a");B.setAttribute("href","#seskari=".concat(r,"&sisku=").concat(je(N))),B.text=N,A.appendChild(B)}else A.innerHTML=pe({def:N,query:a});A.innerHTML="".concat(A.innerHTML," "),T.appendChild(A)}c.appendChild(T)}if((t.rfs||[]).length>0){var M=document.createElement("div");M.classList.add("definition","subdefinitions");for(var H=0;H<t.rfs.length;H++){var z=Le({def:t.rfs[H],inner:!0,index:"".concat(i,"_").concat(H)});z&&M.appendChild(z)}c.appendChild(M)}return c.addEventListener("click",V),c}function xe(e){return encodeURIComponent(e).replace(/'/g,"h")}function qe(e){return"^"!==e.charAt(0)&&"$"!==e.slice(-1)?e.replace(/\./g," ").replace(/ {2,}/g," ").replace(/’/g,"'").trim():e}function je(e){return encodeURIComponent((e||"").replace(/ /g,"_")).replace(/'/g,"%27")}function Ie(e){return decodeURIComponent(e.replace(/&amp;/g,"&").replace(/%27/g,"'")).replace(/[_]/g," ")}function Ce(e,t){return e=(e||"").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;"),t||(e=e.replace(/'/g,"&#039;")),e}function Oe(e){var t=e.query,n=e.seskari,a=Math.min(window.jimte,O.length);if(_.cll=void 0,0===q){var r=ae({pre:!0,valsi:_.searching.query}),i=r.secs,c=r.div;_.cll=i,c&&o.appendChild(c)}for(;q<a;q++)o.appendChild(Le({def:O[q],query:t,seskari:n,length:O.length,index:q}))}function Se(){return _e.apply(this,arguments)}function _e(){return(_e=r(regeneratorRuntime.mark((function e(){var n,a,r,i,c,s,o,l,u,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new Dexie("sorcu")).version(2).stores({valsi:"++id, bangu, w, d, n, t, g, r"}),a=0,r=["en","ru","eo","es","fr-facile","ja","jbo","ru","zh"];case 3:if(!(a<r.length)){e.next=21;break}return i=r[a],e.next=7,fetch("/sutysisku/data/parsed-".concat(i,".json?sisku=").concat((new Date).getTime()));case 7:if(c=e.sent,s=void 0,!c.ok){e.next=15;break}return e.next=12,c.json();case 12:s=e.sent,e.next=16;break;case 15:alert("HTTP-Error: "+c.status);case 16:for(o=Object.keys(s),l=0,u=o;l<u.length;l++)d=u[l],console.log(t({w:d,bangu:i},s[d])),n.valsi.put(t({w:d,bangu:i},s[d]));case 18:a++,e.next=3;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Se(),"serviceWorker"in navigator?window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){var t=e.scope;console.log("ServiceWorker registration successful with scope: ",t)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))})):alert("Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari.");var Te,Ae,Ne=[["p","t","k","f","s","c"],["b","d","g","v","z","j"],["m","l","n","r",,"x","'"],["a","e","i","o","u","y"],[],["aia","aua"],["au","ai","ei","oi"]],Be=document.querySelector("#audio");function Me(e,t,n){var a=document.createElement(e);return a.textContent=t,n&&(a.className=n),a}function He(e,t,n){var a=document.createElement(e);return n&&(a.className=n),Array.isArray(t)?t.forEach((function(e){a.appendChild(e)})):t&&a.appendChild(t),a}function ze(e){Be.src=e,Be.play()}document.querySelector("#table").appendChild(He("table",Ne.map((function(e){return He("tr",e.map((function(e){var t=Me("button",e,"bangu");return t.onclick=function(){ze("/sutysisku/sance/lerfu/".concat(encodeURIComponent(e),".ogg"))},He("td",t)})))})),"centero")),c.focus();