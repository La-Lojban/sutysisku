/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ ((module) => {

var camxes="use strict";function peg$subclass(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}function peg$SyntaxError(t,r,e,n){var o=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(o,peg$SyntaxError.prototype),o.expected=r,o.found=e,o.location=n,o.name="SyntaxError",o}function peg$padEnd(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}function peg$parse(t,r){var e,n={},o=(r=void 0!==r?r:{}).grammarSource,u={text:ft},s=ft,i=/^[a]/,l=/^[aeo]/,a=/^[aeiou]/,c=/^[i]/,f=/^[u]/,v=/^[y]/,x=/^[i\u0269]/,P=/^[uw]/,d=/^[l]/,h=/^[m]/,p=/^[n]/,g=/^[r]/,A=/^[pfbgvkx]/,y=/^[d]/,m=/^[jz]/,E=/^[cs]/,$=/^[x]/,S=/^[t]/,b=/^[,']/,w=/^[}]/,F=/^[^a-za-z,']/,j=st(["a"],!1,!1),z=st(["a","e","o"],!1,!1),C=st(["a","e","i","o","u"],!1,!1),O=st(["i"],!1,!1),R=st(["u"],!1,!1),k=st(["y"],!1,!1),M=st(["i","ɩ"],!1,!1),U=st(["u","w"],!1,!1),q=st(["l"],!1,!1),B=st(["m"],!1,!1),D=st(["n"],!1,!1),G=st(["r"],!1,!1),H=st(["p","f","b","g","v","k","x"],!1,!1),I=st(["d"],!1,!1),J=st(["j","z"],!1,!1),K=st(["c","s"],!1,!1),L=st(["x"],!1,!1),N=st(["t"],!1,!1),Q=st([",","'"],!1,!1),T=st(["}"],!1,!1),V={type:"any"},W=st([["a","z"],["a","z"],",","'"],!0,!1),X=(st([" "],!0,!1),function(t){return yr(t)}),Y=function(t,r,e){return[Ar(t),"-",Ar(r),Ar(e)]},Z=function(t){return[Ar(t),"-"]},_=function(t,r){return[Ar(t),"-",Ar(r)]},tt=0,rt=[{line:1,column:1}],et=0,nt=[],ot=0,ut={};if("startRule"in r){if(!(r.startRule in u))throw new Error("Can't start parsing from rule \""+r.startRule+'".');s=u[r.startRule]}function st(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function it(r){var e,n=rt[r];if(n)return n;for(e=r-1;!rt[e];)e--;for(n={line:(n=rt[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return rt[r]=n,n}function lt(t,r){var e=it(t),n=it(r);return{source:o,start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function at(t){tt<et||(tt>et&&(et=tt,nt=[]),nt.push(t))}function ct(t,r,e){return new peg$SyntaxError(peg$SyntaxError.buildMessage(t,r),t,r,e)}function ft(){var t,r,e,o=67*tt+0,u=ut[o];if(u)return tt=u.nextPos,u.result;for(t=tt,r=[],e=vt();e!==n;)r.push(e),e=vt();return t,t=r=X(r),ut[o]={nextPos:tt,result:t},t}function vt(){var t,r,e=67*tt+1,o=ut[e];return o?(tt=o.nextPos,o.result):(t=tt,(r=xt())!==n&&(t,r=r),t=r,ut[e]={nextPos:tt,result:t},t)}function xt(){var t,r,e,o,u,s,i,l,a,c,f,v=67*tt+2,x=ut[v];return x?(tt=x.nextPos,x.result):((t=gr())===n&&(t=Pt())===n&&(t=tt,(r=yt())!==n&&(t,r=["cmavo",Ar(r)]),(t=r)===n&&(t=tt,(r=dt())!==n&&(t,r=function(t){return["gismu",Ar(t)]}(r)),(t=r)===n&&(t=tt,r=tt,e=tt,ot++,o=dt(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n?(o=tt,ot++,u=At(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?(u=tt,ot++,s=yt(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n?(s=tt,ot++,i=tt,(l=Mt())!==n&&(a=dr())!==n&&(c=_t())!==n&&(f=Vt())!==n?i=l=[l,a,c,f]:(tt=i,i=n),ot--,i===n?s=void 0:(tt=s,s=n),s!==n&&(i=mt())!==n?r=e=[e,o,u,s,i]:(tt=r,r=n)):(tt=r,r=n)):(tt=r,r=n)):(tt=r,r=n),r!==n&&(t,r=function(t){return["lujvo",Ar(t)]}(r)),(t=r)===n&&(t=tt,(r=At())!==n&&(t,r=function(t){return["fu'ivla",Ar(t)]}(r)),t=r)))),ut[v]={nextPos:tt,result:t},t)}function Pt(){var t,r,e,o,u,s,i=67*tt+3,l=ut[i];if(l)return tt=l.nextPos,l.result;if(t=tt,r=tt,e=tt,ot++,o=St(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n){if(o=[],(u=Lt())!==n)for(;u!==n;)o.push(u),u=Lt();else o=n;o!==n?(u=tt,ot++,s=pr(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?r=e=[e,o,u]:(tt=r,r=n)):(tt=r,r=n)}else tt=r,r=n;return r===n&&(r=St()),r!==n&&(t,r=["cmevla",Ar(r)]),t=r,ut[i]={nextPos:tt,result:t},t}function dt(){var t,r,e,o,u,s,i,l=67*tt+4,a=ut[l];return a?(tt=a.nextPos,a.result):(t=tt,(r=Ht())!==n?(e=tt,ot++,o=Kt(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n?(o=tt,ot++,u=Jt(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n&&(u=Zt())!==n?(s=tt,ot++,i=hr(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n?t=r=[r,e,o,u,s]:(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n),ut[l]={nextPos:tt,result:t},t)}function ht(){var t,r,e,o,u,s,i,l,a=67*tt+5,c=ut[a];if(c)return tt=c.nextPos,c.result;if(t=tt,r=tt,ot++,e=$t(),ot--,e===n?r=void 0:(tt=r,r=n),r!==n)if(e=tt,ot++,o=yt(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n)if(o=tt,ot++,u=tt,s=tt,ot++,i=$t(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n&&(i=or())!==n&&(l=$t())!==n?u=s=[s,i,l]:(tt=u,u=n),ot--,u===n?o=void 0:(tt=o,o=n),o!==n)if(u=tt,ot++,s=dr(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n)if(s=tt,ot++,i=Vt(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n){for(i=[],l=Gt();l!==n;)i.push(l),l=Gt();t=r=[r,e,o,u,s,i]}else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;return ut[a]={nextPos:tt,result:t},t}function pt(){var t,r,e,o,u,s,i=67*tt+6,l=ut[i];if(l)return tt=l.nextPos,l.result;if(t=tt,(r=ht())!==n)if((e=Nt())!==n)if(o=tt,ot++,u=Kt(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n){for(u=[],s=Qt();s!==n;)u.push(s),s=Qt();t=r=[r,e,o,u]}else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;return ut[i]={nextPos:tt,result:t},t}function gt(){var t,r,e,o=67*tt+7,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=pt())!==n&&(e=Jt())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function At(){var t,r,e,o,u,s,i,l,a,c,f=67*tt+8,v=ut[f];if(v)return tt=v.nextPos,v.result;if(t=tt,r=tt,ot++,e=gt(),ot--,e!==n?(tt=r,r=void 0):r=n,r!==n)if((e=Mt())===n&&(e=Ut())===n&&(e=Rt()),e!==n)if((o=ar())===n&&(o=lr())===n&&(o=sr()),o!==n){for(u=tt,s=[],i=Gt();i!==n;)s.push(i),i=Gt();if((i=Nt())!==n)if(l=tt,ot++,a=Kt(),ot--,a!==n?(tt=l,l=void 0):l=n,l!==n){for(a=[],c=Qt();c!==n;)a.push(c),c=Qt();(c=Jt())!==n?u=s=[s,i,l,a,c]:(tt=u,u=n)}else tt=u,u=n;else tt=u,u=n;u!==n?(t,t=Y(e,o,u)):(tt=t,t=n)}else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;if(t===n){if(t=tt,r=tt,ot++,e=gt(),ot--,e!==n?(tt=r,r=void 0):r=n,r!==n)if((e=Ht())!==n)if((o=ar())===n&&(o=lr())===n&&(o=sr()),o!==n){for(u=tt,s=[],i=Gt();i!==n;)s.push(i),i=Gt();if((i=Nt())!==n)if(l=tt,ot++,a=Kt(),ot--,a!==n?(tt=l,l=void 0):l=n,l!==n){for(a=[],c=Qt();c!==n;)a.push(c),c=Qt();(c=Jt())!==n?u=s=[s,i,l,a,c]:(tt=u,u=n)}else tt=u,u=n;else tt=u,u=n;u!==n?(t,t=Y(e,o,u)):(tt=t,t=n)}else tt=t,t=n;else tt=t,t=n;else tt=t,t=n;t===n&&(t=gt())}return ut[f]={nextPos:tt,result:t},t}function yt(){var t,r,e,o,u,s,i,l,a,c,f,v=67*tt+9,x=ut[v];if(x)return tt=x.nextPos,x.result;if(t=tt,r=tt,ot++,e=Pt(),ot--,e===n?r=void 0:(tt=r,r=n),r!==n)if(e=tt,ot++,o=tt,(u=Rt())!==n?(s=tt,ot++,i=Kt(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n&&(i=_t())!==n?((l=dr())===n&&(l=null),(a=mt())!==n?o=u=[u,s,i,l,a]:(tt=o,o=n)):(tt=o,o=n)):(tt=o,o=n),o===n&&(o=tt,(u=Rt())!==n?(s=tt,ot++,i=Kt(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n&&(i=_t())!==n&&(l=Dt())!==n?o=u=[u,s,i,l]:(tt=o,o=n)):(tt=o,o=n)),ot--,o===n?e=void 0:(tt=e,e=n),e!==n){if(o=tt,u=tt,ot++,s=dr(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n){if(s=tt,ot++,i=tt,(l=or())!==n){if(a=[],(c=or())!==n)for(;c!==n;)a.push(c),c=or();else a=n;a!==n?i=l=[l,a]:(tt=i,i=n)}else tt=i,i=n;if(ot--,i===n?s=void 0:(tt=s,s=n),s!==n)if((i=Vt())!==n){for(l=[],a=tt,(c=Wt())!==n&&(f=dr())!==n?a=c=[c,f]:(tt=a,a=n);a!==n;)l.push(a),a=tt,(c=Wt())!==n&&(f=dr())!==n?a=c=[c,f]:(tt=a,a=n);(a=Wt())!==n?o=u=[u,s,i,l,a]:(tt=o,o=n)}else tt=o,o=n;else tt=o,o=n}else tt=o,o=n;if(o===n)if(o=[],(u=_t())!==n)for(;u!==n;)o.push(u),u=_t();else o=n;o!==n?(u=tt,ot++,s=hr(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?t=r=[r,e,o,u]:(tt=t,t=n)):(tt=t,t=n)}else tt=t,t=n;else tt=t,t=n;return ut[v]={nextPos:tt,result:t},t}function mt(){var t,r,e,o,u,s,i,l,a,c=67*tt+10,f=ut[c];if(f)return tt=f.nextPos,f.result;for(t=tt,r=[],e=tt,(o=Ot())===n&&(o=wt())===n&&(o=jt())===n&&(o=tt,u=tt,ot++,s=Et(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n&&(s=zt())!==n?(i=tt,ot++,l=Et(),ot--,l===n?i=void 0:(tt=i,i=n),i!==n?o=u=[u,s,i]:(tt=o,o=n)):(tt=o,o=n)),o!==n&&(e,o=Z(o)),e=o;e!==n;)r.push(e),e=tt,(o=Ot())===n&&(o=wt())===n&&(o=jt())===n&&(o=tt,u=tt,ot++,s=Et(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n&&(s=zt())!==n?(i=tt,ot++,l=Et(),ot--,l===n?i=void 0:(tt=i,i=n),i!==n?o=u=[u,s,i]:(tt=o,o=n)):(tt=o,o=n)),o!==n&&(e,o=Z(o)),e=o;return e=tt,(o=At())===n&&(o=Bt()),o!==n&&(e,o=[Ar(o)]),(e=o)===n&&(e=tt,(o=Ct())===n&&(o=bt())===n&&(o=Ft())===n&&(o=tt,(u=qt())!==n?(s=tt,ot++,i=Kt(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n?o=u=[u,s]:(tt=o,o=n)):(tt=o,o=n)),o!==n&&(u=Dt())!==n?(e,a=u,e=[Ar(o),"-",Ar(a)]):(tt=e,e=n)),e!==n?t=r=[r,e]:(tt=t,t=n),ut[c]={nextPos:tt,result:t},t}function Et(){var t,r=67*tt+11,e=ut[r];return e?(tt=e.nextPos,e.result):((t=At())===n&&(t=wt())===n&&(t=bt()),ut[r]={nextPos:tt,result:t},t)}function $t(){var t,r,e,o,u,s,i,l,a=67*tt+12,c=ut[a];if(c)return tt=c.nextPos,c.result;for(t=tt,r=[],e=zt();e!==n;)r.push(e),e=zt();return(e=Bt())===n&&(e=tt,(o=qt())!==n?(u=tt,ot++,s=Kt(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?(s=tt,ot++,i=_t(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n&&(i=Dt())!==n?e=o=[o,u,s,i]:(tt=e,e=n)):(tt=e,e=n)):(tt=e,e=n),e===n&&(e=jt())===n&&(e=Ft())===n&&(e=tt,o=tt,(u=qt())!==n?(s=tt,ot++,i=Kt(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n?(i=tt,ot++,l=_t(),ot--,l===n?i=void 0:(tt=i,i=n),i!==n?o=u=[u,s,i]:(tt=o,o=n)):(tt=o,o=n)):(tt=o,o=n),o===n&&(o=null),(u=er())!==n&&(s=_t())!==n?e=o=[o,u,s]:(tt=e,e=n),e===n&&(e=Ot())===n&&(e=Ct()))),e!==n?t=r=[r,e]:(tt=t,t=n),ut[a]={nextPos:tt,result:t},t}function St(){var t,r,e,o,u,s,i,l=67*tt+13,a=ut[l];if(a)return tt=a.nextPos,a.result;if(t=tt,r=tt,ot++,e=dr(),ot--,e===n?r=void 0:(tt=r,r=n),r!==n){for(e=[],(o=Wt())===n&&(o=Xt())===n&&(o=dr())===n&&(o=tt,(u=or())!==n?(s=tt,ot++,i=pr(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n?o=u=[u,s]:(tt=o,o=n)):(tt=o,o=n));o!==n;)e.push(o),(o=Wt())===n&&(o=Xt())===n&&(o=dr())===n&&(o=tt,(u=or())!==n?(s=tt,ot++,i=pr(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n?o=u=[u,s]:(tt=o,o=n)):(tt=o,o=n));(o=or())!==n?(u=tt,ot++,s=pr(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?t=r=[r,e,o,u]:(tt=t,t=n)):(tt=t,t=n)}else tt=t,t=n;return ut[l]={nextPos:tt,result:t},t}function bt(){var t,r,e,o,u,s,i=67*tt+14,l=ut[i];return l?(tt=l.nextPos,l.result):(t=tt,(r=pt())!==n?(e=tt,(o=dr())!==n&&(u=_t())!==n?e=o=[o,u]:(tt=e,e=n),e!==n?(t,t=_(r,e)):(tt=t,t=n)):(tt=t,t=n),t===n&&(t=tt,r=tt,(e=pt())!==n&&(o=Vt())!==n?r=e=[e,o]:(tt=r,r=n),r!==n&&(e=_t())!==n?(t,s=e,t=[Ar(r),"-",Ar(s)]):(tt=t,t=n)),ut[i]={nextPos:tt,result:t},t)}function wt(){var t,r,e,o,u,s,i=67*tt+15,l=ut[i];return l?(tt=l.nextPos,l.result):(t=tt,r=tt,ot++,e=Gt(),ot--,e!==n?(tt=r,r=void 0):r=n,r!==n&&(e=ht())!==n?(o=tt,(u=dr())!==n&&(s=_t())!==n?o=u=[u,s]:(tt=o,o=n),o!==n?(t,t=_(e,o)):(tt=t,t=n)):(tt=t,t=n),t===n&&(t=tt,r=tt,(e=ht())!==n&&(o=Vt())!==n?r=e=[e,o]:(tt=r,r=n),r!==n?(e=tt,(o=_t())!==n?((u=dr())===n&&(u=null),e=o=[o,u]):(tt=e,e=n),e!==n?(t,t=_(r,e)):(tt=t,t=n)):(tt=t,t=n)),ut[i]={nextPos:tt,result:t},t)}function Ft(){var t,r,e,o,u=67*tt+16,s=ut[u];return s?(tt=s.nextPos,s.result):(t=tt,(r=Ht())===n&&(r=Rt()),r!==n?(e=tt,ot++,o=Kt(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n&&(o=_t())!==n?(t,t=_(r,o)):(tt=t,t=n)):(tt=t,t=n),ut[u]={nextPos:tt,result:t},t)}function jt(){var t,r,e,o,u,s=67*tt+17,i=ut[s];return i?(tt=i.nextPos,i.result):(t=tt,r=tt,(e=Ht())===n&&(e=Rt()),e!==n?(o=tt,ot++,u=Kt(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),r!==n?(e=tt,(o=_t())!==n?((u=dr())===n&&(u=null),e=o=[o,u]):(tt=e,e=n),e!==n?(t,t=_(r,e)):(tt=t,t=n)):(tt=t,t=n),ut[s]={nextPos:tt,result:t},t)}function zt(){var t,r,e,o,u,s,i,l,a,c,f=67*tt+18,v=ut[f];return v?(tt=v.nextPos,v.result):(t=tt,r=tt,ot++,e=jt(),ot--,e===n?r=void 0:(tt=r,r=n),r!==n?(e=tt,ot++,o=Ft(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n?(o=tt,ot++,u=Ot(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?(u=tt,ot++,s=Ct(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n&&(s=qt())!==n?(i=tt,ot++,l=Kt(),ot--,l===n?i=void 0:(tt=i,i=n),i!==n?(l=tt,ot++,a=_t(),ot--,a===n?l=void 0:(tt=l,l=n),l!==n?(a=tt,ot++,c=dr(),ot--,c===n?a=void 0:(tt=a,a=n),a!==n?t=r=[r,e,o,u,s,i,l,a]:(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n),ut[f]={nextPos:tt,result:t},t)}function Ct(){var t,r,e,o,u,s,i=67*tt+19,l=ut[i];return l?(tt=l.nextPos,l.result):(t=tt,r=tt,(e=Ht())!==n&&(o=Zt())!==n?r=e=[e,o]:(tt=r,r=n),r===n&&(r=qt()),r!==n?(e=tt,ot++,o=Kt(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n?(o=tt,(u=dr())!==n&&(s=_t())!==n?o=u=[u,s]:(tt=o,o=n),o!==n?(t,t=_(r,o)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n),ut[i]={nextPos:tt,result:t},t)}function Ot(){var t,r,e,o,u,s,i,l,a=67*tt+20,c=ut[a];return c?(tt=c.nextPos,c.result):(t=tt,r=tt,(e=Ht())!==n&&(o=Zt())!==n?r=e=[e,o]:(tt=r,r=n),r===n&&(r=qt()),r!==n?(e=tt,o=tt,ot++,u=Kt(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n&&(u=dr())!==n&&(s=_t())!==n?((i=dr())===n&&(i=null),e=o=[o,u,s,i]):(tt=e,e=n),e!==n?(t,l=e,t=[Ar(r),"-",Ar(l)]):(tt=t,t=n)):(tt=t,t=n),ut[a]={nextPos:tt,result:t},t)}function Rt(){var t,r,e,o=67*tt+21,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=It())!==n&&(e=or())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function kt(){var t,r=67*tt+22,e=ut[r];return e?(tt=e.nextPos,e.result):((t=Rt())===n&&(t=Mt()),ut[r]={nextPos:tt,result:t},t)}function Mt(){var t,r,e,o=67*tt+23,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=er())!==n&&(e=Zt())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function Ut(){var t,r,e,o=67*tt+24,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=or())!==n&&(e=Yt())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function qt(){var t,r=67*tt+25,e=ut[r];return e?(tt=e.nextPos,e.result):((t=kt())===n&&(t=function(){var t,r,e,o,u,s,i,l=67*tt+26,a=ut[l];if(a)return tt=a.nextPos,a.result;t=tt,r=tt,(e=or())!==n&&(o=Zt())!==n?(u=tt,ot++,s=Kt(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n&&(s=dr())!==n&&(i=Zt())!==n?r=e=[e,o,u,s,i]:(tt=r,r=n)):(tt=r,r=n);r===n&&(r=Ut());r!==n?(e=tt,(o=ar())!==n?(u=tt,ot++,s=or(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?e=o=[o,u]:(tt=e,e=n)):(tt=e,e=n),e===n&&(e=tt,(o=lr())!==n?(u=tt,ot++,s=ar(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n?e=o=[o,u]:(tt=e,e=n)):(tt=e,e=n)),e===n&&(e=null),t,t=_(r,e)):(tt=t,t=n);return ut[l]={nextPos:tt,result:t},t}()),ut[r]={nextPos:tt,result:t},t)}function Bt(){var t,r,e,o,u,s,i,l,a=67*tt+27,c=ut[a];return c?(tt=c.nextPos,c.result):((t=dt())===n&&(t=tt,(r=It())!==n?(e=tt,ot++,o=Kt(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n&&(o=dr())!==n?(u=tt,ot++,s=Jt(),ot--,s!==n?(tt=u,u=void 0):u=n,u!==n&&(s=Zt())!==n?(i=tt,ot++,l=hr(),ot--,l!==n?(tt=i,i=void 0):i=n,i!==n?t=r=[r,e,o,u,s,i]:(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)),ut[a]={nextPos:tt,result:t},t)}function Dt(){var t,r,e,o,u,s=67*tt+28,i=ut[s];return i?(tt=i.nextPos,i.result):(t=tt,r=tt,ot++,e=Jt(),ot--,e!==n?(tt=r,r=void 0):r=n,r!==n?(e=tt,(o=or())!==n&&(u=Yt())!==n?e=o=[o,u]:(tt=e,e=n),e===n&&(e=Mt()),e!==n?(o=tt,ot++,u=hr(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n?t=r=[r,e,o]:(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n),ut[s]={nextPos:tt,result:t},t)}function Gt(){var t,r,e,o,u=67*tt+29,s=ut[u];return s?(tt=s.nextPos,s.result):(t=tt,(r=Nt())!==n?(e=tt,ot++,o=Kt(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n?t=r=[r,e]:(tt=t,t=n)):(tt=t,t=n),t===n&&(t=Qt()),ut[u]={nextPos:tt,result:t},t)}function Ht(){var t,r,e,o=67*tt+30,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=kt())!==n&&(e=or())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function It(){var t,r,e,o=67*tt+31,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=or())!==n&&(e=Zt())!==n?t=r=[r,e]:(tt=t,t=n),ut[o]={nextPos:tt,result:t},t)}function Jt(){var t,r,e,o,u,s,i,l=67*tt+32,a=ut[l];return a?(tt=a.nextPos,a.result):(t=tt,(r=Vt())!==n?(e=tt,ot++,o=_t(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n&&(o=Wt())!==n?(u=tt,ot++,s=Pt(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n?(s=tt,ot++,i=hr(),ot--,i!==n?(tt=s,s=void 0):s=n,s!==n?t=r=[r,e,o,u,s]:(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n)):(tt=t,t=n),ut[l]={nextPos:tt,result:t},t)}function Kt(){var t,r,e,o,u,s,i=67*tt+33,l=ut[i];if(l)return tt=l.nextPos,l.result;for(t=tt,r=[],(e=or())===n&&(e=Xt());e!==n;)r.push(e),(e=or())===n&&(e=Xt());return(e=dr())===n&&(e=null),(o=_t())===n&&(o=null),(u=Nt())!==n&&(s=pr())!==n?t=r=[r,e,o,u,s]:(tt=t,t=n),ut[i]={nextPos:tt,result:t},t}function Lt(){var t,r,e,o,u=67*tt+34,s=ut[u];return s?(tt=s.nextPos,s.result):(t=tt,(r=Vt())!==n&&(e=Wt())!==n?((o=Tt())===n&&(o=null),t=r=[r,e,o]):(tt=t,t=n),t===n&&(t=Qt()),ut[u]={nextPos:tt,result:t},t)}function Nt(){var t,r,e,o,u,s=67*tt+35,i=ut[s];return i?(tt=i.nextPos,i.result):(t=tt,(r=Vt())!==n?(e=tt,ot++,o=_t(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n&&(o=Wt())!==n?((u=Tt())===n&&(u=null),t=r=[r,e,o,u]):(tt=t,t=n)):(tt=t,t=n),ut[s]={nextPos:tt,result:t},t)}function Qt(){var t,r,e,o,u=67*tt+36,s=ut[u];return s?(tt=s.nextPos,s.result):(t=tt,(r=or())!==n?(e=tt,ot++,o=ur(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n&&(o=Tt())!==n?t=r=[r,e,o]:(tt=t,t=n)):(tt=t,t=n),ut[u]={nextPos:tt,result:t},t)}function Tt(){var t,r,e,o,u,s=67*tt+37,i=ut[s];return i?(tt=i.nextPos,i.result):(t=tt,r=tt,ot++,e=Lt(),ot--,e===n?r=void 0:(tt=r,r=n),r!==n&&(e=or())!==n?(o=tt,ot++,u=Lt(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n?t=r=[r,e,o]:(tt=t,t=n)):(tt=t,t=n),t===n&&(t=tt,(r=ur())===n&&(r=null),(e=or())===n&&(e=null),o=tt,ot++,u=pr(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n?t=r=[r,e,o]:(tt=t,t=n)),ut[s]={nextPos:tt,result:t},t)}function Vt(){var r,e,o,u,s,i,l,a,c=67*tt+38,f=ut[c];return f?(tt=f.nextPos,f.result):((r=dr())===n&&(r=tt,(e=or())===n&&(e=null),(o=Xt())!==n?r=e=[e,o]:(tt=r,r=n),r===n&&(r=tt,(e=nr())===n&&(e=tt,o=tt,(u=xr())!==n?(s=tt,ot++,i=function(){var r,e=67*tt+60,o=ut[e];if(o)return tt=o.nextPos,o.result;$.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(L));return ut[e]={nextPos:tt,result:r},r}(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n?o=u=[u,s]:(tt=o,o=n)):(tt=o,o=n),o===n&&(o=tt,(u=vr())!==n?(s=tt,ot++,(i=lr())===n&&(i=sr())===n&&(i=ar()),ot--,i===n?s=void 0:(tt=s,s=n),s!==n?o=u=[u,s]:(tt=o,o=n)):(tt=o,o=n)),o===n&&(o=null),(u=cr())===n&&(u=tt,(s=Pr())===n&&(s=fr())===n&&(s=tt,(i=lr())!==n?(l=tt,ot++,a=ar(),ot--,a===n?l=void 0:(tt=l,l=n),l!==n?s=i=[i,l]:(tt=s,s=n)):(tt=s,s=n)),s!==n?(i=tt,ot++,l=sr(),ot--,l===n?i=void 0:(tt=i,i=n),i!==n?u=s=[s,i]:(tt=u,u=n)):(tt=u,u=n),u===n&&(u=ir())),u===n&&(u=null),(s=sr())===n&&(s=ar()),s===n&&(s=null),e=o=[o,u,s]),e!==n?(o=tt,ot++,u=or(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?(u=tt,ot++,s=Xt(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n?r=e=[e,o,u]:(tt=r,r=n)):(tt=r,r=n)):(tt=r,r=n))),ut[c]={nextPos:tt,result:r},r)}function Wt(){var t,r,e,o,u=67*tt+39,s=ut[u];return s?(tt=s.nextPos,s.result):((t=Zt())===n&&(t=Yt())===n&&(t=tt,(r=_t())!==n?(e=tt,ot++,o=Wt(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n?t=r=[r,e]:(tt=t,t=n)):(tt=t,t=n)),ut[u]={nextPos:tt,result:t},t)}function Xt(){var t,r,e,o,u=67*tt+40,s=ut[u];return s?(tt=s.nextPos,s.result):(t=tt,(r=tr())===n&&(r=rr()),r!==n?(e=tt,ot++,o=Wt(),ot--,o!==n?(tt=e,e=void 0):e=n,e!==n?t=r=[r,e]:(tt=t,t=n)):(tt=t,t=n),ut[u]={nextPos:tt,result:t},t)}function Yt(){var r,e,o,u,s,a,v=67*tt+41,x=ut[v];return x?(tt=x.nextPos,x.result):(r=tt,e=tt,i.test(t.charAt(tt))?(o=t.charAt(tt),tt++):(o=n,0===ot&&at(j)),o!==n&&(u=rr())!==n?(s=tt,ot++,a=function(){var r,e=67*tt+44,o=ut[e];if(o)return tt=o.nextPos,o.result;f.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(R));return ut[e]={nextPos:tt,result:r},r}(),ot--,a===n?s=void 0:(tt=s,s=n),s!==n?e=o=[o,u,s]:(tt=e,e=n)):(tt=e,e=n),e===n&&(e=tt,l.test(t.charAt(tt))?(o=t.charAt(tt),tt++):(o=n,0===ot&&at(z)),o!==n&&(u=tr())!==n?(s=tt,ot++,a=function(){var r,e=67*tt+43,o=ut[e];if(o)return tt=o.nextPos,o.result;c.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(O));return ut[e]={nextPos:tt,result:r},r}(),ot--,a===n?s=void 0:(tt=s,s=n),s!==n?e=o=[o,u,s]:(tt=e,e=n)):(tt=e,e=n)),e!==n?(o=tt,ot++,u=Wt(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),ut[v]={nextPos:tt,result:r},r)}function Zt(){var r,e,o,u,s=67*tt+42,i=ut[s];return i?(tt=i.nextPos,i.result):(r=tt,a.test(t.charAt(tt))?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(C)),e!==n?(o=tt,ot++,u=Wt(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),ut[s]={nextPos:tt,result:r},r)}function _t(){var r,e,o,u,s,i,l=67*tt+45,a=ut[l];return a?(tt=a.nextPos,a.result):(r=tt,v.test(t.charAt(tt))?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(k)),e!==n?(o=tt,ot++,u=tt,s=tt,ot++,i=_t(),ot--,i===n?s=void 0:(tt=s,s=n),s!==n&&(i=Wt())!==n?u=s=[s,i]:(tt=u,u=n),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),ut[l]={nextPos:tt,result:r},r)}function tr(){var r,e=67*tt+46,o=ut[e];return o?(tt=o.nextPos,o.result):(x.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(M)),ut[e]={nextPos:tt,result:r},r)}function rr(){var r,e,o=67*tt+47,u=ut[o];return u?(tt=u.nextPos,u.result):(r=tt,P.test(t.charAt(tt))?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(U)),e!==n&&(r,e=["u",""]),r=e,ut[o]={nextPos:tt,result:r},r)}function er(){var t,r,e,o,u,s,i=67*tt+48,l=ut[i];return l?(tt=l.nextPos,l.result):(t=tt,r=tt,ot++,e=Vt(),ot--,e!==n?(tt=r,r=void 0):r=n,r!==n&&(e=or())!==n&&(o=or())!==n?(u=tt,ot++,s=or(),ot--,s===n?u=void 0:(tt=u,u=n),u!==n?t=r=[r,e,o,u]:(tt=t,t=n)):(tt=t,t=n),ut[i]={nextPos:tt,result:t},t)}function nr(){var t,r,e,o=67*tt+49,u=ut[o];return u?(tt=u.nextPos,u.result):(t=tt,(r=Pr())!==n&&(e=xr())!==n?t=r=[r,e]:(tt=t,t=n),t===n&&(t=tt,(r=fr())!==n&&(e=vr())!==n?t=r=[r,e]:(tt=t,t=n)),ut[o]={nextPos:tt,result:t},t)}function or(){var t,r=67*tt+50,e=ut[r];return e?(tt=e.nextPos,e.result):((t=cr())===n&&(t=fr())===n&&(t=vr())===n&&(t=xr())===n&&(t=Pr())===n&&(t=ur()),ut[r]={nextPos:tt,result:t},t)}function ur(){var t,r=67*tt+51,e=ut[r];return e?(tt=e.nextPos,e.result):((t=sr())===n&&(t=ir())===n&&(t=lr())===n&&(t=ar()),ut[r]={nextPos:tt,result:t},t)}function sr(){var r,e=67*tt+52,o=ut[e];return o?(tt=o.nextPos,o.result):(d.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(q)),ut[e]={nextPos:tt,result:r},r)}function ir(){var r,e=67*tt+53,o=ut[e];return o?(tt=o.nextPos,o.result):(h.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(B)),ut[e]={nextPos:tt,result:r},r)}function lr(){var r,e,o,u,s=67*tt+54,i=ut[s];return i?(tt=i.nextPos,i.result):(r=tt,p.test(t.charAt(tt))?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(D)),e!==n?(o=tt,ot++,u=nr(),ot--,u===n?o=void 0:(tt=o,o=n),o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),ut[s]={nextPos:tt,result:r},r)}function ar(){var r,e=67*tt+55,o=ut[e];return o?(tt=o.nextPos,o.result):(g.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(G)),ut[e]={nextPos:tt,result:r},r)}function cr(){var r,e=67*tt+56,o=ut[e];return o?(tt=o.nextPos,o.result):(A.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(H)),ut[e]={nextPos:tt,result:r},r)}function fr(){var r,e=67*tt+57,o=ut[e];return o?(tt=o.nextPos,o.result):(y.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(I)),ut[e]={nextPos:tt,result:r},r)}function vr(){var r,e=67*tt+58,o=ut[e];return o?(tt=o.nextPos,o.result):(m.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(J)),ut[e]={nextPos:tt,result:r},r)}function xr(){var r,e=67*tt+59,o=ut[e];return o?(tt=o.nextPos,o.result):(E.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(K)),ut[e]={nextPos:tt,result:r},r)}function Pr(){var r,e=67*tt+61,o=ut[e];return o?(tt=o.nextPos,o.result):(S.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(N)),ut[e]={nextPos:tt,result:r},r)}function dr(){var r,e,o,u,s=67*tt+62,i=ut[s];return i?(tt=i.nextPos,i.result):(r=tt,b.test(t.charAt(tt))?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(Q)),e!==n?(o=tt,ot++,u=Wt(),ot--,u!==n?(tt=o,o=void 0):o=n,o!==n?r=e=[e,o]:(tt=r,r=n)):(tt=r,r=n),ut[s]={nextPos:tt,result:r},r)}function hr(){var r,e,o,u=67*tt+63,s=ut[u];return s?(tt=s.nextPos,s.result):((r=pr())===n&&(r=tt,e=tt,ot++,o=Wt(),ot--,o===n?e=void 0:(tt=e,e=n),e!==n&&(o=xt())!==n?r=e=[e,o]:(tt=r,r=n),r===n&&(w.test(t.charAt(tt))?(r=t.charAt(tt),tt++):(r=n,0===ot&&at(T)))),ut[u]={nextPos:tt,result:r},r)}function pr(){var r,e,o=67*tt+64,u=ut[o];return u?(tt=u.nextPos,u.result):((r=gr())===n&&(r=tt,ot++,t.length>tt?(e=t.charAt(tt),tt++):(e=n,0===ot&&at(V)),ot--,e===n?r=void 0:(tt=r,r=n)),ut[o]={nextPos:tt,result:r},r)}function gr(){var r,e,o,u=67*tt+65,s=ut[u];if(s)return tt=s.nextPos,s.result;if(r=tt,e=[],F.test(t.charAt(tt))?(o=t.charAt(tt),tt++):(o=n,0===ot&&at(W)),o!==n)for(;o!==n;)e.push(o),F.test(t.charAt(tt))?(o=t.charAt(tt),tt++):(o=n,0===ot&&at(W));else e=n;return e!==n&&(r,e=["drata",Ar(e)]),r=e,ut[u]={nextPos:tt,result:r},r}function Ar(t){if("string"==typeof t)return t;var r="";for(var e in t)r+=Ar(t[e]);return r}function yr(t){if("string"==typeof t)return t;var r=[];for(var e in t)r.push(yr(t[e]));return r}if((e=s())!==n&&tt===t.length)return e;throw e!==n&&tt<t.length&&at({type:"end"}),ct(nt,et<t.length?t.charAt(et):null,et<t.length?lt(et,et+1):lt(et,et))}peg$subclass(peg$SyntaxError,Error),peg$SyntaxError.prototype.format=function(t){var r="Error: "+this.message;if(this.location){var e,n=null;for(e=0;e<t.length;e++)if(t[e].source===this.location.source){n=t[e].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,u=this.location.source+":"+o.line+":"+o.column;if(n){var s=this.location.end,i=peg$padEnd("",o.line.toString().length),l=n[o.line-1],a=o.line===s.line?s.column:l.length+1;r+="\n --\x3e "+u+"\n"+i+" |\n"+o.line+" | "+l+"\n"+i+" | "+peg$padEnd("",o.column-1)+peg$padEnd("",a-o.column,"^")}else r+="\n at "+u}return r},peg$SyntaxError.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map((function(t){return Array.isArray(t)?u(t[0])+"-"+u(t[1]):u(t)}));return"["+(t.inverted?"^":"")+r+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function u(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function s(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(s);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(r)+" found."},module.exports={SyntaxError:peg$SyntaxError,parse:peg$parse};

/***/ }),

/***/ 485:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/* provided dependency */ var process = __webpack_require__(155);
/* provided dependency */ var Buffer = __webpack_require__(764)["Buffer"];

// We are modularizing this manually because the current modularize setting in Emscripten has some issues:
// https://github.com/kripken/emscripten/issues/5820
// In addition, When you use emcc's modularization, it still expects to export a global object called `Module`,
// which is able to be used/called before the WASM is loaded.
// The modularization below exports a promise that loads and resolves to the actual sql.js module.
// That way, this module can't be used before the WASM is finished loading.

// We are going to define a function that a user will call to start loading initializing our Sql.js library
// However, that function might be called multiple times, and on subsequent calls, we don't actually want it to instantiate a new instance of the Module
// Instead, we want to return the previously loaded module

// TODO: Make this not declare a global if used in the browser
var initSqlJsPromise = undefined;

var initSqlJs = function (moduleConfig) {

    if (initSqlJsPromise){
      return initSqlJsPromise;
    }
    // If we're here, we've never called this function before
    initSqlJsPromise = new Promise(function (resolveModule, reject) {

        // We are modularizing this manually because the current modularize setting in Emscripten has some issues:
        // https://github.com/kripken/emscripten/issues/5820

        // The way to affect the loading of emcc compiled modules is to create a variable called `Module` and add
        // properties to it, like `preRun`, `postRun`, etc
        // We are using that to get notified when the WASM has finished loading.
        // Only then will we return our promise

        // If they passed in a moduleConfig object, use that
        // Otherwise, initialize Module to the empty object
        var Module = typeof moduleConfig !== 'undefined' ? moduleConfig : {};

        // EMCC only allows for a single onAbort function (not an array of functions)
        // So if the user defined their own onAbort function, we remember it and call it
        var originalOnAbortFunction = Module['onAbort'];
        Module['onAbort'] = function (errorThatCausedAbort) {
            reject(new Error(errorThatCausedAbort));
            if (originalOnAbortFunction){
              originalOnAbortFunction(errorThatCausedAbort);
            }
        };

        Module['postRun'] = Module['postRun'] || [];
        Module['postRun'].push(function () {
            // When Emscripted calls postRun, this promise resolves with the built Module
            resolveModule(Module);
        });

        // There is a section of code in the emcc-generated code below that looks like this:
        // (Note that this is lowercase `module`)
        // if (typeof module !== 'undefined') {
        //     module['exports'] = Module;
        // }
        // When that runs, it's going to overwrite our own modularization export efforts in shell-post.js!
        // The only way to tell emcc not to emit it is to pass the MODULARIZE=1 or MODULARIZE_INSTANCE=1 flags,
        // but that carries with it additional unnecessary baggage/bugs we don't want either.
        // So, we have three options:
        // 1) We undefine `module`
        // 2) We remember what `module['exports']` was at the beginning of this function and we restore it later
        // 3) We write a script to remove those lines of code as part of the Make process.
        //
        // Since those are the only lines of code that care about module, we will undefine it. It's the most straightforward
        // of the options, and has the side effect of reducing emcc's efforts to modify the module if its output were to change in the future.
        // That's a nice side effect since we're handling the modularization efforts ourselves
        module = undefined;

        // The emcc-generated code and shell-post.js code goes below,
        // meaning that all of it runs inside of this promise. If anything throws an exception, our promise will abort

var Module;Module||(Module=typeof Module !== 'undefined' ? Module : {});null;
Module.onRuntimeInitialized=function(){function a(h,n){this.Qa=h;this.db=n;this.Pa=1;this.wb=[]}function b(h,n){this.db=n;n=d(h)+1;this.hb=aa(n);if(null===this.hb)throw Error("Unable to allocate memory for the SQL string");p(h,u,this.hb,n);this.sb=this.hb;this.eb=this.Mb=null}function c(h,{filename:n=!1}={}){!1===n?(this.filename="dbfile_"+(4294967295*Math.random()>>>0),this.Xc=!0,null!=h&&w.zb("/",this.filename,h,!0,!0)):this.filename=h;this.handleError(g(this.filename,e));this.db=z(e,"i32");Cb(this.db);
this.nb={};this.Xa={}}var e=C(4),f=Module.cwrap,g=f("sqlite3_open","number",["string","number"]),k=f("sqlite3_close_v2","number",["number"]),l=f("sqlite3_exec","number",["number","string","number","number","number"]),q=f("sqlite3_changes","number",["number"]),m=f("sqlite3_prepare_v2","number",["number","string","number","number","number"]),r=f("sqlite3_sql","string",["number"]),x=f("sqlite3_normalized_sql","string",["number"]),B=f("sqlite3_prepare_v2","number",["number","number","number","number",
"number"]),E=f("sqlite3_bind_text","number",["number","number","number","number","number"]),A=f("sqlite3_bind_blob","number",["number","number","number","number","number"]),J=f("sqlite3_bind_double","number",["number","number","number"]),Z=f("sqlite3_bind_int","number",["number","number","number"]),U=f("sqlite3_bind_parameter_index","number",["number","string"]),Ka=f("sqlite3_step","number",["number"]),G=f("sqlite3_errmsg","string",["number"]),Db=f("sqlite3_column_count","number",["number"]),Eb=f("sqlite3_data_count",
"number",["number"]),Fb=f("sqlite3_column_double","number",["number","number"]),Gb=f("sqlite3_column_text","string",["number","number"]),Hb=f("sqlite3_column_blob","number",["number","number"]),Ib=f("sqlite3_column_bytes","number",["number","number"]),Jb=f("sqlite3_column_type","number",["number","number"]),Kb=f("sqlite3_column_name","string",["number","number"]),Lb=f("sqlite3_reset","number",["number"]),Mb=f("sqlite3_clear_bindings","number",["number"]),Nb=f("sqlite3_finalize","number",["number"]),
Ob=f("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),Pb=f("sqlite3_value_type","number",["number"]),Qb=f("sqlite3_value_bytes","number",["number"]),Rb=f("sqlite3_value_text","string",["number"]),Sb=f("sqlite3_value_blob","number",["number"]),Tb=f("sqlite3_value_double","number",["number"]),Ub=f("sqlite3_result_double","",["number","number"]),db=f("sqlite3_result_null","",["number"]),Vb=f("sqlite3_result_text","",["number","string",
"number","number"]),Wb=f("sqlite3_result_blob","",["number","number","number","number"]),Xb=f("sqlite3_result_int","",["number","number"]),eb=f("sqlite3_result_error","",["number","string","number"]),Cb=f("RegisterExtensionFunctions","number",["number"]);a.prototype.bind=function(h){if(!this.Qa)throw"Statement closed";this.reset();return Array.isArray(h)?this.vc(h):null!=h&&"object"===typeof h?this.wc(h):!0};a.prototype.step=function(){if(!this.Qa)throw"Statement closed";this.Pa=1;var h=Ka(this.Qa);
switch(h){case 100:return!0;case 101:return!1;default:throw this.db.handleError(h);}};a.prototype.Pc=function(h){null==h&&(h=this.Pa,this.Pa+=1);return Fb(this.Qa,h)};a.prototype.Qc=function(h){null==h&&(h=this.Pa,this.Pa+=1);return Gb(this.Qa,h)};a.prototype.getBlob=function(h){null==h&&(h=this.Pa,this.Pa+=1);var n=Ib(this.Qa,h);h=Hb(this.Qa,h);for(var t=new Uint8Array(n),v=0;v<n;v+=1)t[v]=D[h+v];return t};a.prototype.get=function(h){null!=h&&this.bind(h)&&this.step();h=[];for(var n=Eb(this.Qa),
t=0;t<n;t+=1)switch(Jb(this.Qa,t)){case 1:case 2:h.push(this.Pc(t));break;case 3:h.push(this.Qc(t));break;case 4:h.push(this.getBlob(t));break;default:h.push(null)}return h};a.prototype.getColumnNames=function(){for(var h=[],n=Db(this.Qa),t=0;t<n;t+=1)h.push(Kb(this.Qa,t));return h};a.prototype.getAsObject=function(h){h=this.get(h);for(var n=this.getColumnNames(),t={},v=0;v<n.length;v+=1)t[n[v]]=h[v];return t};a.prototype.getSQL=function(){return r(this.Qa)};a.prototype.getNormalizedSQL=function(){return x(this.Qa)};
a.prototype.run=function(h){null!=h&&this.bind(h);this.step();return this.reset()};a.prototype.zc=function(h,n){null==n&&(n=this.Pa,this.Pa+=1);h=ba(h);var t=ca(h);this.wb.push(t);this.db.handleError(E(this.Qa,n,t,h.length-1,0))};a.prototype.uc=function(h,n){null==n&&(n=this.Pa,this.Pa+=1);var t=ca(h);this.wb.push(t);this.db.handleError(A(this.Qa,n,t,h.length,0))};a.prototype.yc=function(h,n){null==n&&(n=this.Pa,this.Pa+=1);this.db.handleError((h===(h|0)?Z:J)(this.Qa,n,h))};a.prototype.xc=function(h){null==
h&&(h=this.Pa,this.Pa+=1);A(this.Qa,h,0,0,0)};a.prototype.Tb=function(h,n){null==n&&(n=this.Pa,this.Pa+=1);switch(typeof h){case "string":this.zc(h,n);return;case "number":case "boolean":this.yc(h+0,n);return;case "object":if(null===h){this.xc(n);return}if(null!=h.length){this.uc(h,n);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+h+").";};a.prototype.wc=function(h){var n=this;Object.keys(h).forEach(function(t){var v=U(n.Qa,t);0!==v&&n.Tb(h[t],v)});return!0};a.prototype.vc=
function(h){for(var n=0;n<h.length;n+=1)this.Tb(h[n],n+1);return!0};a.prototype.reset=function(){return 0===Mb(this.Qa)&&0===Lb(this.Qa)};a.prototype.freemem=function(){for(var h;void 0!==(h=this.wb.pop());)da(h)};a.prototype.free=function(){var h=0===Nb(this.Qa);delete this.db.nb[this.Qa];this.Qa=0;return h};b.prototype.next=function(){if(null===this.hb)return{done:!0};null!==this.eb&&(this.eb.free(),this.eb=null);if(!this.db.db)throw this.Bb(),Error("Database closed");var h=ha(),n=C(4);ia(e);ia(n);
try{this.db.handleError(B(this.db.db,this.sb,-1,e,n));this.sb=z(n,"i32");var t=z(e,"i32");if(0===t)return this.Bb(),{done:!0};this.eb=new a(t,this.db);this.db.nb[t]=this.eb;return{value:this.eb,done:!1}}catch(v){throw this.Mb=F(this.sb),this.Bb(),v;}finally{ja(h)}};b.prototype.Bb=function(){da(this.hb);this.hb=null};b.prototype.getRemainingSQL=function(){return null!==this.Mb?this.Mb:F(this.sb)};"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator&&(b.prototype[Symbol.iterator]=function(){return this});
c.prototype.run=function(h,n){if(!this.db)throw"Database closed";if(n){h=this.prepare(h,n);try{h.step()}finally{h.free()}}else this.handleError(l(this.db,h,0,0,e));return this};c.prototype.exec=function(h,n){if(!this.db)throw"Database closed";var t=ha(),v=null;try{var y=d(h)+1,N=C(y);p(h,D,N,y);var H=N;var ea=C(4);for(h=[];0!==z(H,"i8");){ia(e);ia(ea);this.handleError(B(this.db,H,-1,e,ea));var fa=z(e,"i32");H=z(ea,"i32");if(0!==fa){y=null;v=new a(fa,this);for(null!=n&&v.bind(n);v.step();)null===y&&
(y={columns:v.getColumnNames(),values:[]},h.push(y)),y.values.push(v.get());v.free()}}return h}catch(I){throw v&&v.free(),I;}finally{ja(t)}};c.prototype.each=function(h,n,t,v){"function"===typeof n&&(v=t,t=n,n=void 0);h=this.prepare(h,n);try{for(;h.step();)t(h.getAsObject())}finally{h.free()}if("function"===typeof v)return v()};c.prototype.prepare=function(h,n){ia(e);this.handleError(m(this.db,h,-1,e,0));h=z(e,"i32");if(0===h)throw"Nothing to prepare";var t=new a(h,this);null!=n&&t.bind(n);return this.nb[h]=
t};c.prototype.iterateStatements=function(h){return new b(h,this)};c.prototype["export"]=function(){Object.values(this.nb).forEach(function(n){n.free()});Object.values(this.Xa).forEach(ka);this.Xa={};this.handleError(k(this.db));var h=w.readFile(this.filename,{encoding:"binary"});this.handleError(g(this.filename,e));this.db=z(e,"i32");return h};c.prototype.close=function(){null!==this.db&&(Object.values(this.nb).forEach(function(h){h.free()}),Object.values(this.Xa).forEach(ka),this.Xa={},this.handleError(k(this.db)),
this.Xc&&w.unlink("/"+this.filename),this.db=null)};c.prototype.handleError=function(h){if(0===h)return null;h=G(this.db);throw Error(h);};c.prototype.getRowsModified=function(){return q(this.db)};c.prototype.create_function=function(h,n){Object.prototype.hasOwnProperty.call(this.Xa,h)&&(ka(this.Xa[h]),delete this.Xa[h]);var t=la(function(v,y,N){for(var H,ea=[],fa=0;fa<y;fa+=1){var I=z(N+4*fa,"i32"),S=Pb(I);if(1===S||2===S)I=Tb(I);else if(3===S)I=Rb(I);else if(4===S){S=I;I=Qb(S);S=Sb(S);for(var fb=
new Uint8Array(I),Aa=0;Aa<I;Aa+=1)fb[Aa]=D[S+Aa];I=fb}else I=null;ea.push(I)}try{H=n.apply(null,ea)}catch(Yb){eb(v,Yb,-1);return}switch(typeof H){case "boolean":Xb(v,H?1:0);break;case "number":Ub(v,H);break;case "string":Vb(v,H,-1,-1);break;case "object":null===H?db(v):null!=H.length?(y=ca(H),Wb(v,y,H.length,-1),da(y)):eb(v,"Wrong API use : tried to return a value of an unknown type ("+H+").",-1);break;default:db(v)}},"viii");this.Xa[h]=t;this.handleError(Ob(this.db,h,n.length,1,0,t,0,0,0));return this};
Module.Database=c;var ra=new Map;Module.register_for_idb=h=>{let n=la(function(y,N){y=ra.get(y);return h.lock(y,N)?0:5},"iii"),t=la(function(y,N){y=ra.get(y);h.unlock(y,N);return 0},"iii"),v=la(function(y,N){y=F(y);ra.set(N,y)},"vii");Module._register_for_idb(n,t,v)};Module.cleanup_file=h=>{let n=[...ra.entries()].find(t=>t[1]===h);ra.delete(n[0])};Module.reset_filesystem=()=>{w.root=null;w.lc()}};var ma={},K;for(K in Module)Module.hasOwnProperty(K)&&(ma[K]=Module[K]);
var na="./this.program",oa="object"===typeof window,pa="function"===typeof importScripts,qa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,L="",sa,ta,ua,va,wa;
if(qa)L=pa?__webpack_require__(358).dirname(L)+"/":__dirname+"/",sa=function(a,b){va||(va=__webpack_require__(181));wa||(wa=__webpack_require__(358));a=wa.normalize(a);return va.readFileSync(a,b?null:"utf8")},ua=function(a){a=sa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},ta=function(a,b,c){va||(va=__webpack_require__(181));wa||(wa=__webpack_require__(358));a=wa.normalize(a);va.readFile(a,function(e,f){e?c(e):b(f.buffer)})},1<process.argv.length&&(na=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2), true&&
(module.exports=Module),Module.inspect=function(){return"[Emscripten Module object]"};else if(oa||pa)pa?L=self.location.href:"undefined"!==typeof document&&document.currentScript&&(L=document.currentScript.src),L=0!==L.indexOf("blob:")?L.substr(0,L.lastIndexOf("/")+1):"",sa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},pa&&(ua=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ta=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)};var xa=Module.print||console.log.bind(console),M=Module.printErr||console.warn.bind(console);for(K in ma)ma.hasOwnProperty(K)&&(Module[K]=ma[K]);ma=null;Module.thisProgram&&(na=Module.thisProgram);var ya=[],za;function ka(a){za.delete(O.get(a));ya.push(a)}
function la(a,b){if(!za){za=new WeakMap;for(var c=0;c<O.length;c++){var e=O.get(c);e&&za.set(e,c)}}if(za.has(a))a=za.get(a);else{if(ya.length)c=ya.pop();else{try{O.grow(1)}catch(l){if(!(l instanceof RangeError))throw l;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";}c=O.length-1}try{O.set(c,a)}catch(l){if(!(l instanceof TypeError))throw l;if("function"===typeof WebAssembly.Function){var f={i:"i32",j:"i64",f:"f32",d:"f64"},g={parameters:[],results:"v"==b[0]?[]:[f[b[0]]]};for(e=1;e<b.length;++e)g.parameters.push(f[b[e]]);
b=new WebAssembly.Function(g,a)}else{f=[1,0,1,96];g=b.slice(0,1);b=b.slice(1);var k={i:127,j:126,f:125,d:124};f.push(b.length);for(e=0;e<b.length;++e)f.push(k[b[e]]);"v"==g?f.push(0):f=f.concat([1,k[g]]);f[1]=f.length-2;b=new Uint8Array([0,97,115,109,1,0,0,0].concat(f,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));b=new WebAssembly.Module(b);b=(new WebAssembly.Instance(b,{e:{f:a}})).exports.f}O.set(c,b)}za.set(a,c);a=c}return a}var Ba;Module.wasmBinary&&(Ba=Module.wasmBinary);
var noExitRuntime=Module.noExitRuntime||!0;"object"!==typeof WebAssembly&&P("no native wasm support detected");
function ia(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":D[a>>0]=0;break;case "i8":D[a>>0]=0;break;case "i16":Ca[a>>1]=0;break;case "i32":Q[a>>2]=0;break;case "i64":R=[0,(T=0,1<=+Math.abs(T)?0<T?(Math.min(+Math.floor(T/4294967296),4294967295)|0)>>>0:~~+Math.ceil((T-+(~~T>>>0))/4294967296)>>>0:0)];Q[a>>2]=R[0];Q[a+4>>2]=R[1];break;case "float":Da[a>>2]=0;break;case "double":Ea[a>>3]=0;break;default:P("invalid type for setValue: "+b)}}
function z(a,b){b=b||"i8";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return D[a>>0];case "i8":return D[a>>0];case "i16":return Ca[a>>1];case "i32":return Q[a>>2];case "i64":return Q[a>>2];case "float":return Da[a>>2];case "double":return Ea[a>>3];default:P("invalid type for getValue: "+b)}return null}var Fa,Ga=!1;function assert(a,b){a||P("Assertion failed: "+b)}function Ha(a){var b=Module["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function Ia(a,b,c,e){var f={string:function(m){var r=0;if(null!==m&&void 0!==m&&0!==m){var x=(m.length<<2)+1;r=C(x);p(m,u,r,x)}return r},array:function(m){var r=C(m.length);D.set(m,r);return r}},g=Ha(a),k=[];a=0;if(e)for(var l=0;l<e.length;l++){var q=f[c[l]];q?(0===a&&(a=ha()),k[l]=q(e[l])):k[l]=e[l]}c=g.apply(null,k);c=function(m){return"string"===b?F(m):"boolean"===b?!!m:m}(c);0!==a&&ja(a);return c}var Ja=0,La=1;
function ca(a){var b=Ja==La?C(a.length):aa(a.length);a.subarray||a.slice?u.set(a,b):u.set(new Uint8Array(a),b);return b}var Ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Na(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&Ma)return Ma.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function F(a,b){return a?Na(u,a,b):""}
function p(a,b,c,e){if(!(0<e))return 0;var f=c;e=c+e-1;for(var g=0;g<a.length;++g){var k=a.charCodeAt(g);if(55296<=k&&57343>=k){var l=a.charCodeAt(++g);k=65536+((k&1023)<<10)|l&1023}if(127>=k){if(c>=e)break;b[c++]=k}else{if(2047>=k){if(c+1>=e)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=e)break;b[c++]=224|k>>12}else{if(c+3>=e)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function d(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function Oa(a){var b=d(a)+1,c=aa(b);c&&p(a,D,c,b);return c}var Pa,D,u,Ca,Q,Da,Ea;
function Qa(){var a=Fa.buffer;Pa=a;Module.HEAP8=D=new Int8Array(a);Module.HEAP16=Ca=new Int16Array(a);Module.HEAP32=Q=new Int32Array(a);Module.HEAPU8=u=new Uint8Array(a);Module.HEAPU16=new Uint16Array(a);Module.HEAPU32=new Uint32Array(a);Module.HEAPF32=Da=new Float32Array(a);Module.HEAPF64=Ea=new Float64Array(a)}var O,Ra=[],Sa=[],Ta=[];function Ua(){var a=Module.preRun.shift();Ra.unshift(a)}var Va=0,Wa=null,Xa=null;
function Ya(){Va++;Module.monitorRunDependencies&&Module.monitorRunDependencies(Va)}function Za(){Va--;Module.monitorRunDependencies&&Module.monitorRunDependencies(Va);if(0==Va&&(null!==Wa&&(clearInterval(Wa),Wa=null),Xa)){var a=Xa;Xa=null;a()}}Module.preloadedImages={};Module.preloadedAudios={};function P(a){if(Module.onAbort)Module.onAbort(a);M(a);Ga=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function $a(){return V.startsWith("data:application/octet-stream;base64,")}var V;V="sql-wasm.wasm";if(!$a()){var ab=V;V=Module.locateFile?Module.locateFile(ab,L):L+ab}function bb(){var a=V;try{if(a==V&&Ba)return new Uint8Array(Ba);if(ua)return ua(a);throw"both async and sync fetching of the wasm failed";}catch(b){P(b)}}
function cb(){if(!Ba&&(oa||pa)){if("function"===typeof fetch&&!V.startsWith("file://"))return fetch(V,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+V+"'";return a.arrayBuffer()}).catch(function(){return bb()});if(ta)return new Promise(function(a,b){ta(V,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return bb()})}var T,R;
function gb(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(Module);else{var c=b.pd;"number"===typeof c?void 0===b.yb?O.get(c)():O.get(c)(b.yb):c(void 0===b.yb?null:b.yb)}}}function hb(a){return a.replace(/\b_Z[\w\d_]+/g,function(b){return b===b?b:b+" ["+b+"]"})}
function ib(){function a(k){return(k=k.toTimeString().match(/\(([A-Za-z ]+)\)$/))?k[1]:"GMT"}if(!jb){jb=!0;var b=(new Date).getFullYear(),c=new Date(b,0,1),e=new Date(b,6,1);b=c.getTimezoneOffset();var f=e.getTimezoneOffset(),g=Math.max(b,f);Q[kb()>>2]=60*g;Q[lb()>>2]=Number(b!=f);c=a(c);e=a(e);c=Oa(c);e=Oa(e);f<b?(Q[mb()>>2]=c,Q[mb()+4>>2]=e):(Q[mb()>>2]=e,Q[mb()+4>>2]=c)}}var jb;
function nb(a,b){for(var c=0,e=a.length-1;0<=e;e--){var f=a[e];"."===f?a.splice(e,1):".."===f?(a.splice(e,1),c++):c&&(a.splice(e,1),c--)}if(b)for(;c;c--)a.unshift("..");return a}function ob(a){var b="/"===a.charAt(0),c="/"===a.substr(-1);(a=nb(a.split("/").filter(function(e){return!!e}),!b).join("/"))||b||(a=".");a&&c&&(a+="/");return(b?"/":"")+a}
function pb(a){var b=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);a=b[0];b=b[1];if(!a&&!b)return".";b&&(b=b.substr(0,b.length-1));return a+b}function W(a){if("/"===a)return"/";a=ob(a);a=a.replace(/\/$/,"");var b=a.lastIndexOf("/");return-1===b?a:a.substr(b+1)}function qb(a,b){return ob(a+"/"+b)}
function rb(){if("object"===typeof crypto&&"function"===typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(qa)try{var b=__webpack_require__(470);return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){P("randomDevice")}}
function sb(){for(var a="",b=!1,c=arguments.length-1;-1<=c&&!b;c--){b=0<=c?arguments[c]:w.cwd();if("string"!==typeof b)throw new TypeError("Arguments to path.resolve must be strings");if(!b)return"";a=b+"/"+a;b="/"===b.charAt(0)}a=nb(a.split("/").filter(function(e){return!!e}),!b).join("/");return(b?"/":"")+a||"."}
function tb(a,b){function c(k){for(var l=0;l<k.length&&""===k[l];l++);for(var q=k.length-1;0<=q&&""===k[q];q--);return l>q?[]:k.slice(l,q-l+1)}a=sb(a).substr(1);b=sb(b).substr(1);a=c(a.split("/"));b=c(b.split("/"));for(var e=Math.min(a.length,b.length),f=e,g=0;g<e;g++)if(a[g]!==b[g]){f=g;break}e=[];for(g=f;g<a.length;g++)e.push("..");e=e.concat(b.slice(f));return e.join("/")}var ub=[];function vb(a,b){ub[a]={input:[],output:[],gb:b};w.Qb(a,wb)}
var wb={open:function(a){var b=ub[a.node.rdev];if(!b)throw new w.ErrnoError(43);a.tty=b;a.seekable=!1},close:function(a){a.tty.gb.flush(a.tty)},flush:function(a){a.tty.gb.flush(a.tty)},read:function(a,b,c,e){if(!a.tty||!a.tty.gb.cc)throw new w.ErrnoError(60);for(var f=0,g=0;g<e;g++){try{var k=a.tty.gb.cc(a.tty)}catch(l){throw new w.ErrnoError(29);}if(void 0===k&&0===f)throw new w.ErrnoError(6);if(null===k||void 0===k)break;f++;b[c+g]=k}f&&(a.node.timestamp=Date.now());return f},write:function(a,b,
c,e){if(!a.tty||!a.tty.gb.Nb)throw new w.ErrnoError(60);try{for(var f=0;f<e;f++)a.tty.gb.Nb(a.tty,b[c+f])}catch(g){throw new w.ErrnoError(29);}e&&(a.node.timestamp=Date.now());return f}},xb={cc:function(a){if(!a.input.length){var b=null;if(qa){var c=Buffer.alloc(256),e=0;try{e=va.readSync(process.stdin.fd,c,0,256,null)}catch(f){if(f.toString().includes("EOF"))e=0;else throw f;}0<e?b=c.slice(0,e).toString("utf-8"):b=null}else"undefined"!=typeof window&&"function"==typeof window.prompt?(b=window.prompt("Input: "),
null!==b&&(b+="\n")):"function"==typeof readline&&(b=readline(),null!==b&&(b+="\n"));if(!b)return null;a.input=ba(b,!0)}return a.input.shift()},Nb:function(a,b){null===b||10===b?(xa(Na(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(xa(Na(a.output,0)),a.output=[])}},yb={Nb:function(a,b){null===b||10===b?(M(Na(a.output,0)),a.output=[]):0!=b&&a.output.push(b)},flush:function(a){a.output&&0<a.output.length&&(M(Na(a.output,0)),a.output=[])}};
function zb(a){a=65536*Math.ceil(a/65536);var b=Ab(65536,a);if(!b)return 0;u.fill(0,b,b+a);return b}
var X={Va:null,mount:function(){return X.createNode(null,"/",16895,0)},createNode:function(a,b,c,e){if(w.Rc(c)||w.isFIFO(c))throw new w.ErrnoError(63);X.Va||(X.Va={dir:{node:{getattr:X.node_ops.getattr,setattr:X.node_ops.setattr,lookup:X.node_ops.lookup,mknod:X.node_ops.mknod,rename:X.node_ops.rename,unlink:X.node_ops.unlink,rmdir:X.node_ops.rmdir,readdir:X.node_ops.readdir,symlink:X.node_ops.symlink},stream:{llseek:X.stream_ops.llseek}},file:{node:{getattr:X.node_ops.getattr,setattr:X.node_ops.setattr},
stream:{llseek:X.stream_ops.llseek,read:X.stream_ops.read,write:X.stream_ops.write,allocate:X.stream_ops.allocate,mmap:X.stream_ops.mmap,msync:X.stream_ops.msync}},link:{node:{getattr:X.node_ops.getattr,setattr:X.node_ops.setattr,readlink:X.node_ops.readlink},stream:{}},Vb:{node:{getattr:X.node_ops.getattr,setattr:X.node_ops.setattr},stream:w.Cc}});c=w.createNode(a,b,c,e);w.isDir(c.mode)?(c.node_ops=X.Va.dir.node,c.stream_ops=X.Va.dir.stream,c.Na={}):w.isFile(c.mode)?(c.node_ops=X.Va.file.node,c.stream_ops=
X.Va.file.stream,c.Ra=0,c.Na=null):w.fb(c.mode)?(c.node_ops=X.Va.link.node,c.stream_ops=X.Va.link.stream):w.pb(c.mode)&&(c.node_ops=X.Va.Vb.node,c.stream_ops=X.Va.Vb.stream);c.timestamp=Date.now();a&&(a.Na[b]=c,a.timestamp=c.timestamp);return c},qd:function(a){return a.Na?a.Na.subarray?a.Na.subarray(0,a.Ra):new Uint8Array(a.Na):new Uint8Array(0)},Zb:function(a,b){var c=a.Na?a.Na.length:0;c>=b||(b=Math.max(b,c*(1048576>c?2:1.125)>>>0),0!=c&&(b=Math.max(b,256)),c=a.Na,a.Na=new Uint8Array(b),0<a.Ra&&
a.Na.set(c.subarray(0,a.Ra),0))},gd:function(a,b){if(a.Ra!=b)if(0==b)a.Na=null,a.Ra=0;else{var c=a.Na;a.Na=new Uint8Array(b);c&&a.Na.set(c.subarray(0,Math.min(b,a.Ra)));a.Ra=b}},node_ops:{getattr:function(a){var b={};b.dev=w.pb(a.mode)?a.id:1;b.ino=a.id;b.mode=a.mode;b.nlink=1;b.uid=0;b.gid=0;b.rdev=a.rdev;w.isDir(a.mode)?b.size=4096:w.isFile(a.mode)?b.size=a.Ra:w.fb(a.mode)?b.size=a.link.length:b.size=0;b.atime=new Date(a.timestamp);b.mtime=new Date(a.timestamp);b.ctime=new Date(a.timestamp);b.Ac=
4096;b.blocks=Math.ceil(b.size/b.Ac);return b},setattr:function(a,b){void 0!==b.mode&&(a.mode=b.mode);void 0!==b.timestamp&&(a.timestamp=b.timestamp);void 0!==b.size&&X.gd(a,b.size)},lookup:function(){throw w.Db[44];},mknod:function(a,b,c,e){return X.createNode(a,b,c,e)},rename:function(a,b,c){if(w.isDir(a.mode)){try{var e=w.lookupNode(b,c)}catch(g){}if(e)for(var f in e.Na)throw new w.ErrnoError(55);}delete a.parent.Na[a.name];a.parent.timestamp=Date.now();a.name=c;b.Na[c]=a;b.timestamp=a.parent.timestamp;
a.parent=b},unlink:function(a,b){delete a.Na[b];a.timestamp=Date.now()},rmdir:function(a,b){var c=w.lookupNode(a,b),e;for(e in c.Na)throw new w.ErrnoError(55);delete a.Na[b];a.timestamp=Date.now()},readdir:function(a){var b=[".",".."],c;for(c in a.Na)a.Na.hasOwnProperty(c)&&b.push(c);return b},symlink:function(a,b,c){a=X.createNode(a,b,41471,0);a.link=c;return a},readlink:function(a){if(!w.fb(a.mode))throw new w.ErrnoError(28);return a.link}},stream_ops:{read:function(a,b,c,e,f){var g=a.node.Na;if(f>=
a.node.Ra)return 0;a=Math.min(a.node.Ra-f,e);if(8<a&&g.subarray)b.set(g.subarray(f,f+a),c);else for(e=0;e<a;e++)b[c+e]=g[f+e];return a},write:function(a,b,c,e,f,g){b.buffer===D.buffer&&(g=!1);if(!e)return 0;a=a.node;a.timestamp=Date.now();if(b.subarray&&(!a.Na||a.Na.subarray)){if(g)return a.Na=b.subarray(c,c+e),a.Ra=e;if(0===a.Ra&&0===f)return a.Na=b.slice(c,c+e),a.Ra=e;if(f+e<=a.Ra)return a.Na.set(b.subarray(c,c+e),f),e}X.Zb(a,f+e);if(a.Na.subarray&&b.subarray)a.Na.set(b.subarray(c,c+e),f);else for(g=
0;g<e;g++)a.Na[f+g]=b[c+g];a.Ra=Math.max(a.Ra,f+e);return e},llseek:function(a,b,c){1===c?b+=a.position:2===c&&w.isFile(a.node.mode)&&(b+=a.node.Ra);if(0>b)throw new w.ErrnoError(28);return b},allocate:function(a,b,c){X.Zb(a.node,b+c);a.node.Ra=Math.max(a.node.Ra,b+c)},mmap:function(a,b,c,e,f,g){if(0!==b)throw new w.ErrnoError(28);if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);a=a.node.Na;if(g&2||a.buffer!==Pa){if(0<e||e+c<a.length)a.subarray?a=a.subarray(e,e+c):a=Array.prototype.slice.call(a,
e,e+c);e=!0;c=zb(c);if(!c)throw new w.ErrnoError(48);D.set(a,c)}else e=!1,c=a.byteOffset;return{ed:c,vb:e}},msync:function(a,b,c,e,f){if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);if(f&2)return 0;X.stream_ops.write(a,b,0,e,c,!1);return 0}}};function Bb(a,b,c){var e="al "+a;ta(a,function(f){assert(f,'Loading data file "'+a+'" failed (no arrayBuffer).');b(new Uint8Array(f));e&&Za()},function(){if(c)c();else throw'Loading data file "'+a+'" failed.';});e&&Ya()}
var w={root:null,mb:[],Xb:{},streams:[],Zc:1,Ua:null,Wb:"/",Hb:!1,hc:!0,Sa:{},nc:{kc:{qc:1,rc:2}},ErrnoError:null,Db:{},Lc:null,tb:0,lookupPath:function(a,b){a=sb(w.cwd(),a);b=b||{};if(!a)return{path:"",node:null};var c={Cb:!0,Pb:0},e;for(e in c)void 0===b[e]&&(b[e]=c[e]);if(8<b.Pb)throw new w.ErrnoError(32);a=nb(a.split("/").filter(function(k){return!!k}),!1);var f=w.root;c="/";for(e=0;e<a.length;e++){var g=e===a.length-1;if(g&&b.parent)break;f=w.lookupNode(f,a[e]);c=qb(c,a[e]);w.ab(f)&&(!g||g&&
b.Cb)&&(f=f.lb.root);if(!g||b.Ta)for(g=0;w.fb(f.mode);)if(f=w.readlink(c),c=sb(pb(c),f),f=w.lookupPath(c,{Pb:b.Pb}).node,40<g++)throw new w.ErrnoError(32);}return{path:c,node:f}},Ya:function(a){for(var b;;){if(w.isRoot(a))return a=a.mount.jc,b?"/"!==a[a.length-1]?a+"/"+b:a+b:a;b=b?a.name+"/"+b:a.name;a=a.parent}},Gb:function(a,b){for(var c=0,e=0;e<b.length;e++)c=(c<<5)-c+b.charCodeAt(e)|0;return(a+c>>>0)%w.Ua.length},ec:function(a){var b=w.Gb(a.parent.id,a.name);a.cb=w.Ua[b];w.Ua[b]=a},fc:function(a){var b=
w.Gb(a.parent.id,a.name);if(w.Ua[b]===a)w.Ua[b]=a.cb;else for(b=w.Ua[b];b;){if(b.cb===a){b.cb=a.cb;break}b=b.cb}},lookupNode:function(a,b){var c=w.Vc(a);if(c)throw new w.ErrnoError(c,a);for(c=w.Ua[w.Gb(a.id,b)];c;c=c.cb){var e=c.name;if(c.parent.id===a.id&&e===b)return c}return w.lookup(a,b)},createNode:function(a,b,c,e){a=new w.FSNode(a,b,c,e);w.ec(a);return a},Ab:function(a){w.fc(a)},isRoot:function(a){return a===a.parent},ab:function(a){return!!a.lb},isFile:function(a){return 32768===(a&61440)},
isDir:function(a){return 16384===(a&61440)},fb:function(a){return 40960===(a&61440)},pb:function(a){return 8192===(a&61440)},Rc:function(a){return 24576===(a&61440)},isFIFO:function(a){return 4096===(a&61440)},isSocket:function(a){return 49152===(a&49152)},Mc:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},Yc:function(a){var b=w.Mc[a];if("undefined"===typeof b)throw Error("Unknown file open mode: "+a);return b},$b:function(a){var b=["r","w","rw"][a&3];a&512&&(b+="w");return b},Za:function(a,b){if(w.hc)return 0;
if(!b.includes("r")||a.mode&292){if(b.includes("w")&&!(a.mode&146)||b.includes("x")&&!(a.mode&73))return 2}else return 2;return 0},Vc:function(a){var b=w.Za(a,"x");return b?b:a.node_ops.lookup?0:2},Lb:function(a,b){try{return w.lookupNode(a,b),20}catch(c){}return w.Za(a,"wx")},qb:function(a,b,c){try{var e=w.lookupNode(a,b)}catch(f){return f.Oa}if(a=w.Za(a,"wx"))return a;if(c){if(!w.isDir(e.mode))return 54;if(w.isRoot(e)||w.Ya(e)===w.cwd())return 10}else if(w.isDir(e.mode))return 31;return 0},Wc:function(a,
b){return a?w.fb(a.mode)?32:w.isDir(a.mode)&&("r"!==w.$b(b)||b&512)?31:w.Za(a,w.$b(b)):44},oc:4096,$c:function(a,b){b=b||w.oc;for(a=a||0;a<=b;a++)if(!w.streams[a])return a;throw new w.ErrnoError(33);},$a:function(a){return w.streams[a]},Jc:function(a,b,c){w.ub||(w.ub=function(){},w.ub.prototype={object:{get:function(){return this.node},set:function(g){this.node=g}}});var e=new w.ub,f;for(f in a)e[f]=a[f];a=e;b=w.$c(b,c);a.fd=b;return w.streams[b]=a},Dc:function(a){w.streams[a]=null},Cc:{open:function(a){a.stream_ops=
w.Oc(a.node.rdev).stream_ops;a.stream_ops.open&&a.stream_ops.open(a)},llseek:function(){throw new w.ErrnoError(70);}},Kb:function(a){return a>>8},sd:function(a){return a&255},bb:function(a,b){return a<<8|b},Qb:function(a,b){w.Xb[a]={stream_ops:b}},Oc:function(a){return w.Xb[a]},bc:function(a){var b=[];for(a=[a];a.length;){var c=a.pop();b.push(c);a.push.apply(a,c.mb)}return b},mc:function(a,b){function c(k){w.tb--;return b(k)}function e(k){if(k){if(!e.Kc)return e.Kc=!0,c(k)}else++g>=f.length&&c(null)}
"function"===typeof a&&(b=a,a=!1);w.tb++;1<w.tb&&M("warning: "+w.tb+" FS.syncfs operations in flight at once, probably just doing extra work");var f=w.bc(w.root.mount),g=0;f.forEach(function(k){if(!k.type.mc)return e(null);k.type.mc(k,a,e)})},mount:function(a,b,c){var e="/"===c,f=!c;if(e&&w.root)throw new w.ErrnoError(10);if(!e&&!f){var g=w.lookupPath(c,{Cb:!1});c=g.path;g=g.node;if(w.ab(g))throw new w.ErrnoError(10);if(!w.isDir(g.mode))throw new w.ErrnoError(54);}b={type:a,vd:b,jc:c,mb:[]};a=a.mount(b);
a.mount=b;b.root=a;e?w.root=a:g&&(g.lb=b,g.mount&&g.mount.mb.push(b));return a},yd:function(a){a=w.lookupPath(a,{Cb:!1});if(!w.ab(a.node))throw new w.ErrnoError(28);a=a.node;var b=a.lb,c=w.bc(b);Object.keys(w.Ua).forEach(function(e){for(e=w.Ua[e];e;){var f=e.cb;c.includes(e.mount)&&w.Ab(e);e=f}});a.lb=null;a.mount.mb.splice(a.mount.mb.indexOf(b),1)},lookup:function(a,b){return a.node_ops.lookup(a,b)},mknod:function(a,b,c){var e=w.lookupPath(a,{parent:!0}).node;a=W(a);if(!a||"."===a||".."===a)throw new w.ErrnoError(28);
var f=w.Lb(e,a);if(f)throw new w.ErrnoError(f);if(!e.node_ops.mknod)throw new w.ErrnoError(63);return e.node_ops.mknod(e,a,b,c)},create:function(a,b){return w.mknod(a,(void 0!==b?b:438)&4095|32768,0)},mkdir:function(a,b){return w.mknod(a,(void 0!==b?b:511)&1023|16384,0)},td:function(a,b){a=a.split("/");for(var c="",e=0;e<a.length;++e)if(a[e]){c+="/"+a[e];try{w.mkdir(c,b)}catch(f){if(20!=f.Oa)throw f;}}},rb:function(a,b,c){"undefined"===typeof c&&(c=b,b=438);return w.mknod(a,b|8192,c)},symlink:function(a,
b){if(!sb(a))throw new w.ErrnoError(44);var c=w.lookupPath(b,{parent:!0}).node;if(!c)throw new w.ErrnoError(44);b=W(b);var e=w.Lb(c,b);if(e)throw new w.ErrnoError(e);if(!c.node_ops.symlink)throw new w.ErrnoError(63);return c.node_ops.symlink(c,b,a)},rename:function(a,b){var c=pb(a),e=pb(b),f=W(a),g=W(b);var k=w.lookupPath(a,{parent:!0});var l=k.node;k=w.lookupPath(b,{parent:!0});k=k.node;if(!l||!k)throw new w.ErrnoError(44);if(l.mount!==k.mount)throw new w.ErrnoError(75);var q=w.lookupNode(l,f);e=
tb(a,e);if("."!==e.charAt(0))throw new w.ErrnoError(28);e=tb(b,c);if("."!==e.charAt(0))throw new w.ErrnoError(55);try{var m=w.lookupNode(k,g)}catch(r){}if(q!==m){c=w.isDir(q.mode);if(f=w.qb(l,f,c))throw new w.ErrnoError(f);if(f=m?w.qb(k,g,c):w.Lb(k,g))throw new w.ErrnoError(f);if(!l.node_ops.rename)throw new w.ErrnoError(63);if(w.ab(q)||m&&w.ab(m))throw new w.ErrnoError(10);if(k!==l&&(f=w.Za(l,"w")))throw new w.ErrnoError(f);try{w.Sa.willMovePath&&w.Sa.willMovePath(a,b)}catch(r){M("FS.trackingDelegate['willMovePath']('"+
a+"', '"+b+"') threw an exception: "+r.message)}w.fc(q);try{l.node_ops.rename(q,k,g)}catch(r){throw r;}finally{w.ec(q)}try{if(w.Sa.onMovePath)w.Sa.onMovePath(a,b)}catch(r){M("FS.trackingDelegate['onMovePath']('"+a+"', '"+b+"') threw an exception: "+r.message)}}},rmdir:function(a){var b=w.lookupPath(a,{parent:!0}).node,c=W(a),e=w.lookupNode(b,c),f=w.qb(b,c,!0);if(f)throw new w.ErrnoError(f);if(!b.node_ops.rmdir)throw new w.ErrnoError(63);if(w.ab(e))throw new w.ErrnoError(10);try{w.Sa.willDeletePath&&
w.Sa.willDeletePath(a)}catch(g){M("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+g.message)}b.node_ops.rmdir(b,c);w.Ab(e);try{if(w.Sa.onDeletePath)w.Sa.onDeletePath(a)}catch(g){M("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+g.message)}},readdir:function(a){a=w.lookupPath(a,{Ta:!0}).node;if(!a.node_ops.readdir)throw new w.ErrnoError(54);return a.node_ops.readdir(a)},unlink:function(a){var b=w.lookupPath(a,{parent:!0}).node,c=W(a),e=w.lookupNode(b,c),f=
w.qb(b,c,!1);if(f)throw new w.ErrnoError(f);if(!b.node_ops.unlink)throw new w.ErrnoError(63);if(w.ab(e))throw new w.ErrnoError(10);try{w.Sa.willDeletePath&&w.Sa.willDeletePath(a)}catch(g){M("FS.trackingDelegate['willDeletePath']('"+a+"') threw an exception: "+g.message)}b.node_ops.unlink(b,c);w.Ab(e);try{if(w.Sa.onDeletePath)w.Sa.onDeletePath(a)}catch(g){M("FS.trackingDelegate['onDeletePath']('"+a+"') threw an exception: "+g.message)}},readlink:function(a){a=w.lookupPath(a).node;if(!a)throw new w.ErrnoError(44);
if(!a.node_ops.readlink)throw new w.ErrnoError(28);return sb(w.Ya(a.parent),a.node_ops.readlink(a))},stat:function(a,b){a=w.lookupPath(a,{Ta:!b}).node;if(!a)throw new w.ErrnoError(44);if(!a.node_ops.getattr)throw new w.ErrnoError(63);return a.node_ops.getattr(a)},lstat:function(a){return w.stat(a,!0)},chmod:function(a,b,c){a="string"===typeof a?w.lookupPath(a,{Ta:!c}).node:a;if(!a.node_ops.setattr)throw new w.ErrnoError(63);a.node_ops.setattr(a,{mode:b&4095|a.mode&-4096,timestamp:Date.now()})},lchmod:function(a,
b){w.chmod(a,b,!0)},fchmod:function(a,b){a=w.$a(a);if(!a)throw new w.ErrnoError(8);w.chmod(a.node,b)},chown:function(a,b,c,e){a="string"===typeof a?w.lookupPath(a,{Ta:!e}).node:a;if(!a.node_ops.setattr)throw new w.ErrnoError(63);a.node_ops.setattr(a,{timestamp:Date.now()})},lchown:function(a,b,c){w.chown(a,b,c,!0)},fchown:function(a,b,c){a=w.$a(a);if(!a)throw new w.ErrnoError(8);w.chown(a.node,b,c)},truncate:function(a,b){if(0>b)throw new w.ErrnoError(28);a="string"===typeof a?w.lookupPath(a,{Ta:!0}).node:
a;if(!a.node_ops.setattr)throw new w.ErrnoError(63);if(w.isDir(a.mode))throw new w.ErrnoError(31);if(!w.isFile(a.mode))throw new w.ErrnoError(28);var c=w.Za(a,"w");if(c)throw new w.ErrnoError(c);a.node_ops.setattr(a,{size:b,timestamp:Date.now()})},Nc:function(a,b){a=w.$a(a);if(!a)throw new w.ErrnoError(8);if(0===(a.flags&2097155))throw new w.ErrnoError(28);w.truncate(a.node,b)},kd:function(a,b,c){a=w.lookupPath(a,{Ta:!0}).node;a.node_ops.setattr(a,{timestamp:Math.max(b,c)})},open:function(a,b,c,e,
f){if(""===a)throw new w.ErrnoError(44);b="string"===typeof b?w.Yc(b):b;c=b&64?("undefined"===typeof c?438:c)&4095|32768:0;if("object"===typeof a)var g=a;else{a=ob(a);try{g=w.lookupPath(a,{Ta:!(b&131072)}).node}catch(l){}}var k=!1;if(b&64)if(g){if(b&128)throw new w.ErrnoError(20);}else g=w.mknod(a,c,0),k=!0;if(!g)throw new w.ErrnoError(44);w.pb(g.mode)&&(b&=-513);if(b&65536&&!w.isDir(g.mode))throw new w.ErrnoError(54);if(!k&&(c=w.Wc(g,b)))throw new w.ErrnoError(c);b&512&&w.truncate(g,0);b&=-131713;
e=w.Jc({node:g,path:w.Ya(g),flags:b,seekable:!0,position:0,stream_ops:g.stream_ops,jd:[],error:!1},e,f);e.stream_ops.open&&e.stream_ops.open(e);!Module.logReadFiles||b&1||(w.Ob||(w.Ob={}),a in w.Ob||(w.Ob[a]=1,M("FS.trackingDelegate error on read file: "+a)));try{w.Sa.onOpenFile&&(f=0,1!==(b&2097155)&&(f|=w.nc.kc.qc),0!==(b&2097155)&&(f|=w.nc.kc.rc),w.Sa.onOpenFile(a,f))}catch(l){M("FS.trackingDelegate['onOpenFile']('"+a+"', flags) threw an exception: "+l.message)}return e},close:function(a){if(w.kb(a))throw new w.ErrnoError(8);
a.Fb&&(a.Fb=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(b){throw b;}finally{w.Dc(a.fd)}a.fd=null},kb:function(a){return null===a.fd},llseek:function(a,b,c){if(w.kb(a))throw new w.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new w.ErrnoError(70);if(0!=c&&1!=c&&2!=c)throw new w.ErrnoError(28);a.position=a.stream_ops.llseek(a,b,c);a.jd=[];return a.position},read:function(a,b,c,e,f){if(0>e||0>f)throw new w.ErrnoError(28);if(w.kb(a))throw new w.ErrnoError(8);if(1===(a.flags&2097155))throw new w.ErrnoError(8);
if(w.isDir(a.node.mode))throw new w.ErrnoError(31);if(!a.stream_ops.read)throw new w.ErrnoError(28);var g="undefined"!==typeof f;if(!g)f=a.position;else if(!a.seekable)throw new w.ErrnoError(70);b=a.stream_ops.read(a,b,c,e,f);g||(a.position+=b);return b},write:function(a,b,c,e,f,g){if(0>e||0>f)throw new w.ErrnoError(28);if(w.kb(a))throw new w.ErrnoError(8);if(0===(a.flags&2097155))throw new w.ErrnoError(8);if(w.isDir(a.node.mode))throw new w.ErrnoError(31);if(!a.stream_ops.write)throw new w.ErrnoError(28);
a.seekable&&a.flags&1024&&w.llseek(a,0,2);var k="undefined"!==typeof f;if(!k)f=a.position;else if(!a.seekable)throw new w.ErrnoError(70);b=a.stream_ops.write(a,b,c,e,f,g);k||(a.position+=b);try{if(a.path&&w.Sa.onWriteToFile)w.Sa.onWriteToFile(a.path)}catch(l){M("FS.trackingDelegate['onWriteToFile']('"+a.path+"') threw an exception: "+l.message)}return b},allocate:function(a,b,c){if(w.kb(a))throw new w.ErrnoError(8);if(0>b||0>=c)throw new w.ErrnoError(28);if(0===(a.flags&2097155))throw new w.ErrnoError(8);
if(!w.isFile(a.node.mode)&&!w.isDir(a.node.mode))throw new w.ErrnoError(43);if(!a.stream_ops.allocate)throw new w.ErrnoError(138);a.stream_ops.allocate(a,b,c)},mmap:function(a,b,c,e,f,g){if(0!==(f&2)&&0===(g&2)&&2!==(a.flags&2097155))throw new w.ErrnoError(2);if(1===(a.flags&2097155))throw new w.ErrnoError(2);if(!a.stream_ops.mmap)throw new w.ErrnoError(43);return a.stream_ops.mmap(a,b,c,e,f,g)},msync:function(a,b,c,e,f){return a&&a.stream_ops.msync?a.stream_ops.msync(a,b,c,e,f):0},ud:function(){return 0},
ic:function(a,b,c){if(!a.stream_ops.ic)throw new w.ErrnoError(59);return a.stream_ops.ic(a,b,c)},readFile:function(a,b){b=b||{};b.flags=b.flags||0;b.encoding=b.encoding||"binary";if("utf8"!==b.encoding&&"binary"!==b.encoding)throw Error('Invalid encoding type "'+b.encoding+'"');var c,e=w.open(a,b.flags);a=w.stat(a).size;var f=new Uint8Array(a);w.read(e,f,0,a,0);"utf8"===b.encoding?c=Na(f,0):"binary"===b.encoding&&(c=f);w.close(e);return c},writeFile:function(a,b,c){c=c||{};c.flags=c.flags||577;a=
w.open(a,c.flags,c.mode);if("string"===typeof b){var e=new Uint8Array(d(b)+1);b=p(b,e,0,e.length);w.write(a,e,0,b,void 0,c.Bc)}else if(ArrayBuffer.isView(b))w.write(a,b,0,b.byteLength,void 0,c.Bc);else throw Error("Unsupported data type");w.close(a)},cwd:function(){return w.Wb},chdir:function(a){a=w.lookupPath(a,{Ta:!0});if(null===a.node)throw new w.ErrnoError(44);if(!w.isDir(a.node.mode))throw new w.ErrnoError(54);var b=w.Za(a.node,"x");if(b)throw new w.ErrnoError(b);w.Wb=a.path},Fc:function(){w.mkdir("/tmp");
w.mkdir("/home");w.mkdir("/home/web_user")},Ec:function(){w.mkdir("/dev");w.Qb(w.bb(1,3),{read:function(){return 0},write:function(b,c,e,f){return f}});w.rb("/dev/null",w.bb(1,3));vb(w.bb(5,0),xb);vb(w.bb(6,0),yb);w.rb("/dev/tty",w.bb(5,0));w.rb("/dev/tty1",w.bb(6,0));var a=rb();w.Wa("/dev","random",a);w.Wa("/dev","urandom",a);w.mkdir("/dev/shm");w.mkdir("/dev/shm/tmp")},Hc:function(){w.mkdir("/proc");var a=w.mkdir("/proc/self");w.mkdir("/proc/self/fd");w.mount({mount:function(){var b=w.createNode(a,
"fd",16895,73);b.node_ops={lookup:function(c,e){var f=w.$a(+e);if(!f)throw new w.ErrnoError(8);c={parent:null,mount:{jc:"fake"},node_ops:{readlink:function(){return f.path}}};return c.parent=c}};return b}},{},"/proc/self/fd")},Ic:function(){Module.stdin?w.Wa("/dev","stdin",Module.stdin):w.symlink("/dev/tty","/dev/stdin");Module.stdout?w.Wa("/dev","stdout",null,Module.stdout):w.symlink("/dev/tty","/dev/stdout");Module.stderr?w.Wa("/dev","stderr",null,Module.stderr):w.symlink("/dev/tty1","/dev/stderr");
w.open("/dev/stdin",0);w.open("/dev/stdout",1);w.open("/dev/stderr",1)},Yb:function(){w.ErrnoError||(w.ErrnoError=function(a,b){this.node=b;this.hd=function(c){this.Oa=c};this.hd(a);this.message="FS error"},w.ErrnoError.prototype=Error(),w.ErrnoError.prototype.constructor=w.ErrnoError,[44].forEach(function(a){w.Db[a]=new w.ErrnoError(a);w.Db[a].stack="<generic error, no stack>"}))},lc:function(){w.Yb();w.Ua=Array(4096);w.mount(X,{},"/");w.Fc();w.Ec();w.Hc();w.Lc={MEMFS:X}},jb:function(a,b,c){w.jb.Hb=
!0;w.Yb();Module.stdin=a||Module.stdin;Module.stdout=b||Module.stdout;Module.stderr=c||Module.stderr;w.Ic()},wd:function(){w.jb.Hb=!1;var a=Module._fflush;a&&a(0);for(a=0;a<w.streams.length;a++){var b=w.streams[a];b&&w.close(b)}},Eb:function(a,b){var c=0;a&&(c|=365);b&&(c|=146);return c},od:function(a,b){a=w.xb(a,b);return a.exists?a.object:null},xb:function(a,b){try{var c=w.lookupPath(a,{Ta:!b});a=c.path}catch(f){}var e={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,ad:!1,cd:null,bd:null};
try{c=w.lookupPath(a,{parent:!0}),e.ad=!0,e.cd=c.path,e.bd=c.node,e.name=W(a),c=w.lookupPath(a,{Ta:!b}),e.exists=!0,e.path=c.path,e.object=c.node,e.name=c.node.name,e.isRoot="/"===c.path}catch(f){e.error=f.Oa}return e},md:function(a,b){a="string"===typeof a?a:w.Ya(a);for(b=b.split("/").reverse();b.length;){var c=b.pop();if(c){var e=qb(a,c);try{w.mkdir(e)}catch(f){}a=e}}return e},Gc:function(a,b,c,e,f){a=qb("string"===typeof a?a:w.Ya(a),b);return w.create(a,w.Eb(e,f))},zb:function(a,b,c,e,f,g){a=b?
qb("string"===typeof a?a:w.Ya(a),b):a;e=w.Eb(e,f);f=w.create(a,e);if(c){if("string"===typeof c){a=Array(c.length);b=0;for(var k=c.length;b<k;++b)a[b]=c.charCodeAt(b);c=a}w.chmod(f,e|146);a=w.open(f,577);w.write(a,c,0,c.length,0,g);w.close(a);w.chmod(f,e)}return f},Wa:function(a,b,c,e){a=qb("string"===typeof a?a:w.Ya(a),b);b=w.Eb(!!c,!!e);w.Wa.Kb||(w.Wa.Kb=64);var f=w.bb(w.Wa.Kb++,0);w.Qb(f,{open:function(g){g.seekable=!1},close:function(){e&&e.buffer&&e.buffer.length&&e(10)},read:function(g,k,l,q){for(var m=
0,r=0;r<q;r++){try{var x=c()}catch(B){throw new w.ErrnoError(29);}if(void 0===x&&0===m)throw new w.ErrnoError(6);if(null===x||void 0===x)break;m++;k[l+r]=x}m&&(g.node.timestamp=Date.now());return m},write:function(g,k,l,q){for(var m=0;m<q;m++)try{e(k[l+m])}catch(r){throw new w.ErrnoError(29);}q&&(g.node.timestamp=Date.now());return m}});return w.rb(a,b,f)},ac:function(a){if(a.Ib||a.Sc||a.link||a.Na)return!0;if("undefined"!==typeof XMLHttpRequest)throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
if(sa)try{a.Na=ba(sa(a.url),!0),a.Ra=a.Na.length}catch(b){throw new w.ErrnoError(29);}else throw Error("Cannot load without read() or XMLHttpRequest.");},ld:function(a,b,c,e,f){function g(){this.Jb=!1;this.ob=[]}g.prototype.get=function(m){if(!(m>this.length-1||0>m)){var r=m%this.chunkSize;return this.dc(m/this.chunkSize|0)[r]}};g.prototype.pc=function(m){this.dc=m};g.prototype.Ub=function(){var m=new XMLHttpRequest;m.open("HEAD",c,!1);m.send(null);if(!(200<=m.status&&300>m.status||304===m.status))throw Error("Couldn't load "+
c+". Status: "+m.status);var r=Number(m.getResponseHeader("Content-length")),x,B=(x=m.getResponseHeader("Accept-Ranges"))&&"bytes"===x;m=(x=m.getResponseHeader("Content-Encoding"))&&"gzip"===x;var E=1048576;B||(E=r);var A=this;A.pc(function(J){var Z=J*E,U=(J+1)*E-1;U=Math.min(U,r-1);if("undefined"===typeof A.ob[J]){var Ka=A.ob;if(Z>U)throw Error("invalid range ("+Z+", "+U+") or no bytes requested!");if(U>r-1)throw Error("only "+r+" bytes available! programmer error!");var G=new XMLHttpRequest;G.open("GET",
c,!1);r!==E&&G.setRequestHeader("Range","bytes="+Z+"-"+U);"undefined"!=typeof Uint8Array&&(G.responseType="arraybuffer");G.overrideMimeType&&G.overrideMimeType("text/plain; charset=x-user-defined");G.send(null);if(!(200<=G.status&&300>G.status||304===G.status))throw Error("Couldn't load "+c+". Status: "+G.status);Z=void 0!==G.response?new Uint8Array(G.response||[]):ba(G.responseText||"",!0);Ka[J]=Z}if("undefined"===typeof A.ob[J])throw Error("doXHR failed!");return A.ob[J]});if(m||!r)E=r=1,E=r=this.dc(0).length,
xa("LazyFiles on gzip forces download of the whole file when length is accessed");this.tc=r;this.sc=E;this.Jb=!0};if("undefined"!==typeof XMLHttpRequest){if(!pa)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var k=new g;Object.defineProperties(k,{length:{get:function(){this.Jb||this.Ub();return this.tc}},chunkSize:{get:function(){this.Jb||this.Ub();return this.sc}}});k={Ib:!1,Na:k}}else k={Ib:!1,url:c};var l=w.Gc(a,b,k,e,
f);k.Na?l.Na=k.Na:k.url&&(l.Na=null,l.url=k.url);Object.defineProperties(l,{Ra:{get:function(){return this.Na.length}}});var q={};Object.keys(l.stream_ops).forEach(function(m){var r=l.stream_ops[m];q[m]=function(){w.ac(l);return r.apply(null,arguments)}});q.read=function(m,r,x,B,E){w.ac(l);m=m.node.Na;if(E>=m.length)return 0;B=Math.min(m.length-E,B);if(m.slice)for(var A=0;A<B;A++)r[x+A]=m[E+A];else for(A=0;A<B;A++)r[x+A]=m.get(E+A);return B};l.stream_ops=q;return l},nd:function(a,b,c,e,f,g,k,l,q,
m){function r(B){function E(J){m&&m();l||w.zb(a,b,J,e,f,q);g&&g();Za()}var A=!1;Module.preloadPlugins.forEach(function(J){!A&&J.canHandle(x)&&(J.handle(B,x,E,function(){k&&k();Za()}),A=!0)});A||E(B)}Zb.jb();var x=b?sb(qb(a,b)):a;Ya();"string"==typeof c?Bb(c,function(B){r(B)},k):r(c)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},Rb:function(){return"EM_FS_"+window.location.pathname},Sb:20,ib:"FILE_DATA",xd:function(a,b,c){b=b||function(){};
c=c||function(){};var e=w.indexedDB();try{var f=e.open(w.Rb(),w.Sb)}catch(g){return c(g)}f.onupgradeneeded=function(){xa("creating db");f.result.createObjectStore(w.ib)};f.onsuccess=function(){var g=f.result.transaction([w.ib],"readwrite"),k=g.objectStore(w.ib),l=0,q=0,m=a.length;a.forEach(function(r){r=k.put(w.xb(r).object.Na,r);r.onsuccess=function(){l++;l+q==m&&(0==q?b():c())};r.onerror=function(){q++;l+q==m&&(0==q?b():c())}});g.onerror=c};f.onerror=c},rd:function(a,b,c){b=b||function(){};c=c||
function(){};var e=w.indexedDB();try{var f=e.open(w.Rb(),w.Sb)}catch(g){return c(g)}f.onupgradeneeded=c;f.onsuccess=function(){var g=f.result;try{var k=g.transaction([w.ib],"readonly")}catch(x){c(x);return}var l=k.objectStore(w.ib),q=0,m=0,r=a.length;a.forEach(function(x){var B=l.get(x);B.onsuccess=function(){w.xb(x).exists&&w.unlink(x);w.zb(pb(x),W(x),B.result,!0,!0,!0);q++;q+m==r&&(0==m?b():c())};B.onerror=function(){m++;q+m==r&&(0==m?b():c())}});k.onerror=c};f.onerror=c}},$b={};
function ac(a,b,c){try{var e=a(b)}catch(f){if(f&&f.node&&ob(b)!==ob(w.Ya(f.node)))return-54;throw f;}Q[c>>2]=e.dev;Q[c+4>>2]=0;Q[c+8>>2]=e.ino;Q[c+12>>2]=e.mode;Q[c+16>>2]=e.nlink;Q[c+20>>2]=e.uid;Q[c+24>>2]=e.gid;Q[c+28>>2]=e.rdev;Q[c+32>>2]=0;R=[e.size>>>0,(T=e.size,1<=+Math.abs(T)?0<T?(Math.min(+Math.floor(T/4294967296),4294967295)|0)>>>0:~~+Math.ceil((T-+(~~T>>>0))/4294967296)>>>0:0)];Q[c+40>>2]=R[0];Q[c+44>>2]=R[1];Q[c+48>>2]=4096;Q[c+52>>2]=e.blocks;Q[c+56>>2]=e.atime.getTime()/1E3|0;Q[c+60>>
2]=0;Q[c+64>>2]=e.mtime.getTime()/1E3|0;Q[c+68>>2]=0;Q[c+72>>2]=e.ctime.getTime()/1E3|0;Q[c+76>>2]=0;R=[e.ino>>>0,(T=e.ino,1<=+Math.abs(T)?0<T?(Math.min(+Math.floor(T/4294967296),4294967295)|0)>>>0:~~+Math.ceil((T-+(~~T>>>0))/4294967296)>>>0:0)];Q[c+80>>2]=R[0];Q[c+84>>2]=R[1];return 0}var bc=void 0;function cc(){bc+=4;return Q[bc-4>>2]}function Y(a){a=w.$a(a);if(!a)throw new w.ErrnoError(8);return a}var dc;dc=qa?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()};
var ec={};function fc(){if(!gc){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:na||"./this.program"},b;for(b in ec)void 0===ec[b]?delete a[b]:a[b]=ec[b];var c=[];for(b in a)c.push(b+"="+a[b]);gc=c}return gc}var gc;
function hc(a,b,c,e){a||(a=this);this.parent=a;this.mount=a.mount;this.lb=null;this.id=w.Zc++;this.name=b;this.mode=c;this.node_ops={};this.stream_ops={};this.rdev=e}Object.defineProperties(hc.prototype,{read:{get:function(){return 365===(this.mode&365)},set:function(a){a?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146===(this.mode&146)},set:function(a){a?this.mode|=146:this.mode&=-147}},Sc:{get:function(){return w.isDir(this.mode)}},Ib:{get:function(){return w.pb(this.mode)}}});
w.FSNode=hc;w.lc();var Zb;function ba(a,b){var c=Array(d(a)+1);a=p(a,c,0,c.length);b&&(c.length=a);return c}
var jc={a:function(a,b,c,e){P("Assertion failed: "+F(a)+", at: "+[b?F(b):"unknown filename",c,e?F(e):"unknown function"])},u:function(a,b){ib();a=new Date(1E3*Q[a>>2]);Q[b>>2]=a.getSeconds();Q[b+4>>2]=a.getMinutes();Q[b+8>>2]=a.getHours();Q[b+12>>2]=a.getDate();Q[b+16>>2]=a.getMonth();Q[b+20>>2]=a.getFullYear()-1900;Q[b+24>>2]=a.getDay();var c=new Date(a.getFullYear(),0,1);Q[b+28>>2]=(a.getTime()-c.getTime())/864E5|0;Q[b+36>>2]=-(60*a.getTimezoneOffset());var e=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();
c=c.getTimezoneOffset();a=(e!=c&&a.getTimezoneOffset()==Math.min(c,e))|0;Q[b+32>>2]=a;a=Q[mb()+(a?4:0)>>2];Q[b+40>>2]=a;return b},m:function(a,b){try{a=F(a);if(b&-8)var c=-28;else{var e;(e=w.lookupPath(a,{Ta:!0}).node)?(a="",b&4&&(a+="r"),b&2&&(a+="w"),b&1&&(a+="x"),c=a&&w.Za(e,a)?-2:0):c=-44}return c}catch(f){return"undefined"!==typeof w&&f instanceof w.ErrnoError||P(f),-f.Oa}},A:function(a,b){try{return a=F(a),w.chmod(a,b),0}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),
-c.Oa}},H:function(a,b,c){try{return a=F(a),w.chown(a,b,c),0}catch(e){return"undefined"!==typeof w&&e instanceof w.ErrnoError||P(e),-e.Oa}},B:function(a,b){try{return w.fchmod(a,b),0}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),-c.Oa}},I:function(a,b,c){try{return w.fchown(a,b,c),0}catch(e){return"undefined"!==typeof w&&e instanceof w.ErrnoError||P(e),-e.Oa}},b:function(a,b,c){bc=c;try{var e=Y(a);switch(b){case 0:var f=cc();return 0>f?-28:w.open(e.path,e.flags,0,f).fd;case 1:case 2:return 0;
case 3:return e.flags;case 4:return f=cc(),e.flags|=f,0;case 12:return f=cc(),Ca[f+0>>1]=2,0;case 13:case 14:return 0;case 16:case 8:return-28;case 9:return Q[ic()>>2]=28,-1;default:return-28}}catch(g){return"undefined"!==typeof w&&g instanceof w.ErrnoError||P(g),-g.Oa}},E:function(a,b){try{var c=Y(a);return ac(w.stat,c.path,b)}catch(e){return"undefined"!==typeof w&&e instanceof w.ErrnoError||P(e),-e.Oa}},n:function(a,b,c){try{return w.Nc(a,c),0}catch(e){return"undefined"!==typeof w&&e instanceof
w.ErrnoError||P(e),-e.Oa}},l:function(a,b){try{if(0===b)return-28;var c=w.cwd();if(b<d(c)+1)return-68;p(c,u,a,b);return a}catch(e){return"undefined"!==typeof w&&e instanceof w.ErrnoError||P(e),-e.Oa}},G:function(){return 0},d:function(){return 42},z:function(a,b){try{return a=F(a),ac(w.lstat,a,b)}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),-c.Oa}},C:function(a,b){try{return a=F(a),a=ob(a),"/"===a[a.length-1]&&(a=a.substr(0,a.length-1)),w.mkdir(a,b,0),0}catch(c){return"undefined"!==
typeof w&&c instanceof w.ErrnoError||P(c),-c.Oa}},y:function(a,b,c,e,f,g){try{a:{g<<=12;var k=!1;if(0!==(e&16)&&0!==a%65536)var l=-28;else{if(0!==(e&32)){var q=zb(b);if(!q){l=-48;break a}k=!0}else{var m=w.$a(f);if(!m){l=-8;break a}var r=w.mmap(m,a,b,g,c,e);q=r.ed;k=r.vb}$b[q]={Uc:q,Tc:b,vb:k,fd:f,dd:c,flags:e,offset:g};l=q}}return l}catch(x){return"undefined"!==typeof w&&x instanceof w.ErrnoError||P(x),-x.Oa}},x:function(a,b){try{var c=$b[a];if(0!==b&&c){if(b===c.Tc){var e=w.$a(c.fd);if(e&&c.dd&2){var f=
c.flags,g=c.offset,k=u.slice(a,a+b);w.msync(e,k,g,b,f)}$b[a]=null;c.vb&&da(c.Uc)}var l=0}else l=-28;return l}catch(q){return"undefined"!==typeof w&&q instanceof w.ErrnoError||P(q),-q.Oa}},w:function(a,b,c){bc=c;try{var e=F(a),f=c?cc():0;return w.open(e,b,f).fd}catch(g){return"undefined"!==typeof w&&g instanceof w.ErrnoError||P(g),-g.Oa}},J:function(a,b,c){try{a=F(a);if(0>=c)var e=-28;else{var f=w.readlink(a),g=Math.min(c,d(f)),k=D[b+g];p(f,u,b,c+1);D[b+g]=k;e=g}return e}catch(l){return"undefined"!==
typeof w&&l instanceof w.ErrnoError||P(l),-l.Oa}},F:function(a){try{return a=F(a),w.rmdir(a),0}catch(b){return"undefined"!==typeof w&&b instanceof w.ErrnoError||P(b),-b.Oa}},e:function(a,b){try{return a=F(a),ac(w.stat,a,b)}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),-c.Oa}},i:function(a){try{return a=F(a),w.unlink(a),0}catch(b){return"undefined"!==typeof w&&b instanceof w.ErrnoError||P(b),-b.Oa}},v:function(){return 2147483648},p:function(a,b,c){u.copyWithin(a,b,b+c)},c:function(a){var b=
u.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(a,e);0<e%65536&&(e+=65536-e%65536);a:{try{Fa.grow(Math.min(2147483648,e)-Pa.byteLength+65535>>>16);Qa();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},t:function(a){for(var b=dc();dc()-b<a;);},r:function(a,b){try{var c=0;fc().forEach(function(e,f){var g=b+c;f=Q[a+4*f>>2]=g;for(g=0;g<e.length;++g)D[f++>>0]=e.charCodeAt(g);D[f>>0]=0;c+=e.length+1});return 0}catch(e){return"undefined"!==
typeof w&&e instanceof w.ErrnoError||P(e),e.Oa}},s:function(a,b){try{var c=fc();Q[a>>2]=c.length;var e=0;c.forEach(function(f){e+=f.length+1});Q[b>>2]=e;return 0}catch(f){return"undefined"!==typeof w&&f instanceof w.ErrnoError||P(f),f.Oa}},f:function(a){try{var b=Y(a);w.close(b);return 0}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),c.Oa}},q:function(a,b){try{var c=Y(a),e=c.tty?2:w.isDir(c.mode)?3:w.fb(c.mode)?7:4;D[b>>0]=e;return 0}catch(f){return"undefined"!==typeof w&&
f instanceof w.ErrnoError||P(f),f.Oa}},j:function(a,b,c,e){try{a:{for(var f=Y(a),g=a=0;g<c;g++){var k=Q[b+(8*g+4)>>2],l=w.read(f,D,Q[b+8*g>>2],k,void 0);if(0>l){var q=-1;break a}a+=l;if(l<k)break}q=a}Q[e>>2]=q;return 0}catch(m){return"undefined"!==typeof w&&m instanceof w.ErrnoError||P(m),m.Oa}},o:function(a,b,c,e,f){try{var g=Y(a);a=4294967296*c+(b>>>0);if(-9007199254740992>=a||9007199254740992<=a)return-61;w.llseek(g,a,e);R=[g.position>>>0,(T=g.position,1<=+Math.abs(T)?0<T?(Math.min(+Math.floor(T/
4294967296),4294967295)|0)>>>0:~~+Math.ceil((T-+(~~T>>>0))/4294967296)>>>0:0)];Q[f>>2]=R[0];Q[f+4>>2]=R[1];g.Fb&&0===a&&0===e&&(g.Fb=null);return 0}catch(k){return"undefined"!==typeof w&&k instanceof w.ErrnoError||P(k),k.Oa}},k:function(a){try{var b=Y(a);return b.stream_ops&&b.stream_ops.fsync?-b.stream_ops.fsync(b):0}catch(c){return"undefined"!==typeof w&&c instanceof w.ErrnoError||P(c),c.Oa}},g:function(a,b,c,e){try{a:{for(var f=Y(a),g=a=0;g<c;g++){var k=w.write(f,D,Q[b+8*g>>2],Q[b+(8*g+4)>>2],
void 0);if(0>k){var l=-1;break a}a+=k}l=a}Q[e>>2]=l;return 0}catch(q){return"undefined"!==typeof w&&q instanceof w.ErrnoError||P(q),q.Oa}},h:function(a){var b=Date.now();Q[a>>2]=b/1E3|0;Q[a+4>>2]=b%1E3*1E3|0;return 0},K:function(a){var b=Date.now()/1E3|0;a&&(Q[a>>2]=b);return b},D:function(a,b){if(b){var c=b+8;b=1E3*Q[c>>2];b+=Q[c+4>>2]/1E3}else b=Date.now();a=F(a);try{w.kd(a,b,b);var e=0}catch(f){if(!(f instanceof w.ErrnoError)){b:{e=Error();if(!e.stack){try{throw Error();}catch(g){e=g}if(!e.stack){e=
"(no stack trace available)";break b}}e=e.stack.toString()}Module.extraStackTrace&&(e+="\n"+Module.extraStackTrace());e=hb(e);throw f+" : "+e;}e=f.Oa;Q[ic()>>2]=e;e=-1}return e}};
(function(){function a(f){Module.asm=f.exports;Fa=Module.asm.L;Qa();O=Module.asm.Da;Sa.unshift(Module.asm.M);Za()}function b(f){a(f.instance)}function c(f){return cb().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){M("failed to asynchronously prepare wasm: "+g);P(g)})}var e={a:jc};Ya();if(Module.instantiateWasm)try{return Module.instantiateWasm(e,a)}catch(f){return M("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return Ba||"function"!==typeof WebAssembly.instantiateStreaming||
$a()||V.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(V,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(g){M("wasm streaming compile failed: "+g);M("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();Module.___wasm_call_ctors=function(){return(Module.___wasm_call_ctors=Module.asm.M).apply(null,arguments)};Module._sqlite3_vfs_find=function(){return(Module._sqlite3_vfs_find=Module.asm.N).apply(null,arguments)};
Module._sqlite3_free=function(){return(Module._sqlite3_free=Module.asm.O).apply(null,arguments)};var ic=Module.___errno_location=function(){return(ic=Module.___errno_location=Module.asm.P).apply(null,arguments)};Module._sqlite3_finalize=function(){return(Module._sqlite3_finalize=Module.asm.Q).apply(null,arguments)};Module._sqlite3_reset=function(){return(Module._sqlite3_reset=Module.asm.R).apply(null,arguments)};
Module._sqlite3_clear_bindings=function(){return(Module._sqlite3_clear_bindings=Module.asm.S).apply(null,arguments)};Module._sqlite3_value_blob=function(){return(Module._sqlite3_value_blob=Module.asm.T).apply(null,arguments)};Module._sqlite3_value_text=function(){return(Module._sqlite3_value_text=Module.asm.U).apply(null,arguments)};Module._sqlite3_value_bytes=function(){return(Module._sqlite3_value_bytes=Module.asm.V).apply(null,arguments)};
Module._sqlite3_value_double=function(){return(Module._sqlite3_value_double=Module.asm.W).apply(null,arguments)};Module._sqlite3_value_int=function(){return(Module._sqlite3_value_int=Module.asm.X).apply(null,arguments)};Module._sqlite3_value_type=function(){return(Module._sqlite3_value_type=Module.asm.Y).apply(null,arguments)};Module._sqlite3_result_blob=function(){return(Module._sqlite3_result_blob=Module.asm.Z).apply(null,arguments)};
Module._sqlite3_result_double=function(){return(Module._sqlite3_result_double=Module.asm._).apply(null,arguments)};Module._sqlite3_result_error=function(){return(Module._sqlite3_result_error=Module.asm.$).apply(null,arguments)};Module._sqlite3_result_int=function(){return(Module._sqlite3_result_int=Module.asm.aa).apply(null,arguments)};Module._sqlite3_result_int64=function(){return(Module._sqlite3_result_int64=Module.asm.ba).apply(null,arguments)};
Module._sqlite3_result_null=function(){return(Module._sqlite3_result_null=Module.asm.ca).apply(null,arguments)};Module._sqlite3_result_text=function(){return(Module._sqlite3_result_text=Module.asm.da).apply(null,arguments)};Module._sqlite3_step=function(){return(Module._sqlite3_step=Module.asm.ea).apply(null,arguments)};Module._sqlite3_column_count=function(){return(Module._sqlite3_column_count=Module.asm.fa).apply(null,arguments)};
Module._sqlite3_data_count=function(){return(Module._sqlite3_data_count=Module.asm.ga).apply(null,arguments)};Module._sqlite3_column_blob=function(){return(Module._sqlite3_column_blob=Module.asm.ha).apply(null,arguments)};Module._sqlite3_column_bytes=function(){return(Module._sqlite3_column_bytes=Module.asm.ia).apply(null,arguments)};Module._sqlite3_column_double=function(){return(Module._sqlite3_column_double=Module.asm.ja).apply(null,arguments)};
Module._sqlite3_column_text=function(){return(Module._sqlite3_column_text=Module.asm.ka).apply(null,arguments)};Module._sqlite3_column_type=function(){return(Module._sqlite3_column_type=Module.asm.la).apply(null,arguments)};Module._sqlite3_column_name=function(){return(Module._sqlite3_column_name=Module.asm.ma).apply(null,arguments)};Module._sqlite3_bind_blob=function(){return(Module._sqlite3_bind_blob=Module.asm.na).apply(null,arguments)};
Module._sqlite3_bind_double=function(){return(Module._sqlite3_bind_double=Module.asm.oa).apply(null,arguments)};Module._sqlite3_bind_int=function(){return(Module._sqlite3_bind_int=Module.asm.pa).apply(null,arguments)};Module._sqlite3_bind_text=function(){return(Module._sqlite3_bind_text=Module.asm.qa).apply(null,arguments)};Module._sqlite3_bind_parameter_index=function(){return(Module._sqlite3_bind_parameter_index=Module.asm.ra).apply(null,arguments)};
Module._sqlite3_sql=function(){return(Module._sqlite3_sql=Module.asm.sa).apply(null,arguments)};Module._sqlite3_normalized_sql=function(){return(Module._sqlite3_normalized_sql=Module.asm.ta).apply(null,arguments)};Module._sqlite3_errmsg=function(){return(Module._sqlite3_errmsg=Module.asm.ua).apply(null,arguments)};Module._sqlite3_exec=function(){return(Module._sqlite3_exec=Module.asm.va).apply(null,arguments)};
Module._sqlite3_prepare_v2=function(){return(Module._sqlite3_prepare_v2=Module.asm.wa).apply(null,arguments)};Module._sqlite3_changes=function(){return(Module._sqlite3_changes=Module.asm.xa).apply(null,arguments)};Module._sqlite3_close_v2=function(){return(Module._sqlite3_close_v2=Module.asm.ya).apply(null,arguments)};Module._sqlite3_create_function_v2=function(){return(Module._sqlite3_create_function_v2=Module.asm.za).apply(null,arguments)};
Module._sqlite3_open=function(){return(Module._sqlite3_open=Module.asm.Aa).apply(null,arguments)};var aa=Module._malloc=function(){return(aa=Module._malloc=Module.asm.Ba).apply(null,arguments)},da=Module._free=function(){return(da=Module._free=Module.asm.Ca).apply(null,arguments)};Module._RegisterExtensionFunctions=function(){return(Module._RegisterExtensionFunctions=Module.asm.Ea).apply(null,arguments)};
Module._register_for_idb=function(){return(Module._register_for_idb=Module.asm.Fa).apply(null,arguments)};
var mb=Module.__get_tzname=function(){return(mb=Module.__get_tzname=Module.asm.Ga).apply(null,arguments)},lb=Module.__get_daylight=function(){return(lb=Module.__get_daylight=Module.asm.Ha).apply(null,arguments)},kb=Module.__get_timezone=function(){return(kb=Module.__get_timezone=Module.asm.Ia).apply(null,arguments)},ha=Module.stackSave=function(){return(ha=Module.stackSave=Module.asm.Ja).apply(null,arguments)},ja=Module.stackRestore=function(){return(ja=Module.stackRestore=Module.asm.Ka).apply(null,
arguments)},C=Module.stackAlloc=function(){return(C=Module.stackAlloc=Module.asm.La).apply(null,arguments)},Ab=Module._memalign=function(){return(Ab=Module._memalign=Module.asm.Ma).apply(null,arguments)};Module.cwrap=function(a,b,c,e){c=c||[];var f=c.every(function(g){return"number"===g});return"string"!==b&&f&&!e?Ha(a):function(){return Ia(a,b,c,arguments)}};Module.UTF8ToString=F;Module.FS=w;Module.stackSave=ha;Module.stackRestore=ja;Module.stackAlloc=C;var kc;Xa=function lc(){kc||mc();kc||(Xa=lc)};
function mc(){function a(){if(!kc&&(kc=!0,Module.calledRun=!0,!Ga)){Module.noFSInit||w.jb.Hb||w.jb();w.hc=!1;gb(Sa);if(Module.onRuntimeInitialized)Module.onRuntimeInitialized();if(Module.postRun)for("function"==typeof Module.postRun&&(Module.postRun=[Module.postRun]);Module.postRun.length;){var b=Module.postRun.shift();Ta.unshift(b)}gb(Ta)}}if(!(0<Va)){if(Module.preRun)for("function"==typeof Module.preRun&&(Module.preRun=[Module.preRun]);Module.preRun.length;)Ua();gb(Ra);0<Va||(Module.setStatus?(Module.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){Module.setStatus("")},1);a()},1)):a())}}Module.run=mc;if(Module.preInit)for("function"==typeof Module.preInit&&(Module.preInit=[Module.preInit]);0<Module.preInit.length;)Module.preInit.pop()();mc();


        // The shell-pre.js and emcc-generated code goes above
        return Module;
    }); // The end of the promise being returned

  return initSqlJsPromise;
} // The end of our initSqlJs function

// This bit below is copied almost exactly from what you get when you use the MODULARIZE=1 flag with emcc
// However, we don't want to use the emcc modularization. See shell-pre.js
if (true){
    module.exports = initSqlJs;
    // This will allow the module to be used in ES6 or CommonJS
    module.exports["default"] = initSqlJs;
}
else {}


/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 198:
/***/ ((module) => {

/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Bit reading helpers
*/

var BROTLI_READ_SIZE = 4096;
var BROTLI_IBUF_SIZE =  (2 * BROTLI_READ_SIZE + 32);
var BROTLI_IBUF_MASK =  (2 * BROTLI_READ_SIZE - 1);

var kBitMask = new Uint32Array([
  0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
  65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215
]);

/* Input byte buffer, consist of a ringbuffer and a "slack" region where */
/* bytes from the start of the ringbuffer are copied. */
function BrotliBitReader(input) {
  this.buf_ = new Uint8Array(BROTLI_IBUF_SIZE);
  this.input_ = input;    /* input callback */
  
  this.reset();
}

BrotliBitReader.READ_SIZE = BROTLI_READ_SIZE;
BrotliBitReader.IBUF_MASK = BROTLI_IBUF_MASK;

BrotliBitReader.prototype.reset = function() {
  this.buf_ptr_ = 0;      /* next input will write here */
  this.val_ = 0;          /* pre-fetched bits */
  this.pos_ = 0;          /* byte position in stream */
  this.bit_pos_ = 0;      /* current bit-reading position in val_ */
  this.bit_end_pos_ = 0;  /* bit-reading end position from LSB of val_ */
  this.eos_ = 0;          /* input stream is finished */
  
  this.readMoreInput();
  for (var i = 0; i < 4; i++) {
    this.val_ |= this.buf_[this.pos_] << (8 * i);
    ++this.pos_;
  }
  
  return this.bit_end_pos_ > 0;
};

/* Fills up the input ringbuffer by calling the input callback.

   Does nothing if there are at least 32 bytes present after current position.

   Returns 0 if either:
    - the input callback returned an error, or
    - there is no more input and the position is past the end of the stream.

   After encountering the end of the input stream, 32 additional zero bytes are
   copied to the ringbuffer, therefore it is safe to call this function after
   every 32 bytes of input is read.
*/
BrotliBitReader.prototype.readMoreInput = function() {
  if (this.bit_end_pos_ > 256) {
    return;
  } else if (this.eos_) {
    if (this.bit_pos_ > this.bit_end_pos_)
      throw new Error('Unexpected end of input ' + this.bit_pos_ + ' ' + this.bit_end_pos_);
  } else {
    var dst = this.buf_ptr_;
    var bytes_read = this.input_.read(this.buf_, dst, BROTLI_READ_SIZE);
    if (bytes_read < 0) {
      throw new Error('Unexpected end of input');
    }
    
    if (bytes_read < BROTLI_READ_SIZE) {
      this.eos_ = 1;
      /* Store 32 bytes of zero after the stream end. */
      for (var p = 0; p < 32; p++)
        this.buf_[dst + bytes_read + p] = 0;
    }
    
    if (dst === 0) {
      /* Copy the head of the ringbuffer to the slack region. */
      for (var p = 0; p < 32; p++)
        this.buf_[(BROTLI_READ_SIZE << 1) + p] = this.buf_[p];

      this.buf_ptr_ = BROTLI_READ_SIZE;
    } else {
      this.buf_ptr_ = 0;
    }
    
    this.bit_end_pos_ += bytes_read << 3;
  }
};

/* Guarantees that there are at least 24 bits in the buffer. */
BrotliBitReader.prototype.fillBitWindow = function() {    
  while (this.bit_pos_ >= 8) {
    this.val_ >>>= 8;
    this.val_ |= this.buf_[this.pos_ & BROTLI_IBUF_MASK] << 24;
    ++this.pos_;
    this.bit_pos_ = this.bit_pos_ - 8 >>> 0;
    this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
  }
};

/* Reads the specified number of bits from Read Buffer. */
BrotliBitReader.prototype.readBits = function(n_bits) {
  if (32 - this.bit_pos_ < n_bits) {
    this.fillBitWindow();
  }
  
  var val = ((this.val_ >>> this.bit_pos_) & kBitMask[n_bits]);
  this.bit_pos_ += n_bits;
  return val;
};

module.exports = BrotliBitReader;


/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, exports) => {

/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Lookup table to map the previous two bytes to a context id.

   There are four different context modeling modes defined here:
     CONTEXT_LSB6: context id is the least significant 6 bits of the last byte,
     CONTEXT_MSB6: context id is the most significant 6 bits of the last byte,
     CONTEXT_UTF8: second-order context model tuned for UTF8-encoded text,
     CONTEXT_SIGNED: second-order context model tuned for signed integers.

   The context id for the UTF8 context model is calculated as follows. If p1
   and p2 are the previous two bytes, we calcualte the context as

     context = kContextLookup[p1] | kContextLookup[p2 + 256].

   If the previous two bytes are ASCII characters (i.e. < 128), this will be
   equivalent to

     context = 4 * context1(p1) + context2(p2),

   where context1 is based on the previous byte in the following way:

     0  : non-ASCII control
     1  : \t, \n, \r
     2  : space
     3  : other punctuation
     4  : " '
     5  : %
     6  : ( < [ {
     7  : ) > ] }
     8  : , ; :
     9  : .
     10 : =
     11 : number
     12 : upper-case vowel
     13 : upper-case consonant
     14 : lower-case vowel
     15 : lower-case consonant

   and context2 is based on the second last byte:

     0 : control, space
     1 : punctuation
     2 : upper-case letter, number
     3 : lower-case letter

   If the last byte is ASCII, and the second last byte is not (in a valid UTF8
   stream it will be a continuation byte, value between 128 and 191), the
   context is the same as if the second last byte was an ASCII control or space.

   If the last byte is a UTF8 lead byte (value >= 192), then the next byte will
   be a continuation byte and the context id is 2 or 3 depending on the LSB of
   the last byte and to a lesser extent on the second last byte if it is ASCII.

   If the last byte is a UTF8 continuation byte, the second last byte can be:
     - continuation byte: the next byte is probably ASCII or lead byte (assuming
       4-byte UTF8 characters are rare) and the context id is 0 or 1.
     - lead byte (192 - 207): next byte is ASCII or lead byte, context is 0 or 1
     - lead byte (208 - 255): next byte is continuation byte, context is 2 or 3

   The possible value combinations of the previous two bytes, the range of
   context ids and the type of the next byte is summarized in the table below:

   |--------\-----------------------------------------------------------------|
   |         \                         Last byte                              |
   | Second   \---------------------------------------------------------------|
   | last byte \    ASCII            |   cont. byte        |   lead byte      |
   |            \   (0-127)          |   (128-191)         |   (192-)         |
   |=============|===================|=====================|==================|
   |  ASCII      | next: ASCII/lead  |  not valid          |  next: cont.     |
   |  (0-127)    | context: 4 - 63   |                     |  context: 2 - 3  |
   |-------------|-------------------|---------------------|------------------|
   |  cont. byte | next: ASCII/lead  |  next: ASCII/lead   |  next: cont.     |
   |  (128-191)  | context: 4 - 63   |  context: 0 - 1     |  context: 2 - 3  |
   |-------------|-------------------|---------------------|------------------|
   |  lead byte  | not valid         |  next: ASCII/lead   |  not valid       |
   |  (192-207)  |                   |  context: 0 - 1     |                  |
   |-------------|-------------------|---------------------|------------------|
   |  lead byte  | not valid         |  next: cont.        |  not valid       |
   |  (208-)     |                   |  context: 2 - 3     |                  |
   |-------------|-------------------|---------------------|------------------|

   The context id for the signed context mode is calculated as:

     context = (kContextLookup[512 + p1] << 3) | kContextLookup[512 + p2].

   For any context modeling modes, the context ids can be calculated by |-ing
   together two lookups from one table using context model dependent offsets:

     context = kContextLookup[offset1 + p1] | kContextLookup[offset2 + p2].

   where offset1 and offset2 are dependent on the context mode.
*/

var CONTEXT_LSB6         = 0;
var CONTEXT_MSB6         = 1;
var CONTEXT_UTF8         = 2;
var CONTEXT_SIGNED       = 3;

/* Common context lookup table for all context modes. */
exports.lookup = new Uint8Array([
  /* CONTEXT_UTF8, last byte. */
  /* ASCII range. */
   0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  4,  0,  0,  4,  0,  0,
   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   8, 12, 16, 12, 12, 20, 12, 16, 24, 28, 12, 12, 32, 12, 36, 12,
  44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 32, 32, 24, 40, 28, 12,
  12, 48, 52, 52, 52, 48, 52, 52, 52, 48, 52, 52, 52, 52, 52, 48,
  52, 52, 52, 52, 52, 48, 52, 52, 52, 52, 52, 24, 12, 28, 12, 12,
  12, 56, 60, 60, 60, 56, 60, 60, 60, 56, 60, 60, 60, 60, 60, 56,
  60, 60, 60, 60, 60, 56, 60, 60, 60, 60, 60, 24, 12, 28, 12,  0,
  /* UTF8 continuation byte range. */
  0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  /* UTF8 lead byte range. */
  2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
  2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
  2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
  2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
  /* CONTEXT_UTF8 second last byte. */
  /* ASCII range. */
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0,
  /* UTF8 continuation byte range. */
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* UTF8 lead byte range. */
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  /* CONTEXT_SIGNED, second last byte. */
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7,
  /* CONTEXT_SIGNED, last byte, same as the above values shifted by 3 bits. */
   0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
  16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
  40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
  48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 56,
  /* CONTEXT_LSB6, last byte. */
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
  /* CONTEXT_MSB6, last byte. */
   0,  0,  0,  0,  1,  1,  1,  1,  2,  2,  2,  2,  3,  3,  3,  3,
   4,  4,  4,  4,  5,  5,  5,  5,  6,  6,  6,  6,  7,  7,  7,  7,
   8,  8,  8,  8,  9,  9,  9,  9, 10, 10, 10, 10, 11, 11, 11, 11,
  12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15,
  16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19,
  20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23,
  24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27,
  28, 28, 28, 28, 29, 29, 29, 29, 30, 30, 30, 30, 31, 31, 31, 31,
  32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34, 35, 35, 35, 35,
  36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 38, 39, 39, 39, 39,
  40, 40, 40, 40, 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43,
  44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 47, 47, 47, 47,
  48, 48, 48, 48, 49, 49, 49, 49, 50, 50, 50, 50, 51, 51, 51, 51,
  52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55,
  56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 59,
  60, 60, 60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63,
  /* CONTEXT_{M,L}SB6, second last byte, */
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);

exports.lookupOffsets = new Uint16Array([
  /* CONTEXT_LSB6 */
  1024, 1536,
  /* CONTEXT_MSB6 */
  1280, 1536,
  /* CONTEXT_UTF8 */
  0, 256,
  /* CONTEXT_SIGNED */
  768, 512,
]);


/***/ }),

/***/ 450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var BrotliInput = __webpack_require__(154)/* .BrotliInput */ .g;
var BrotliOutput = __webpack_require__(154)/* .BrotliOutput */ .j;
var BrotliBitReader = __webpack_require__(198);
var BrotliDictionary = __webpack_require__(139);
var HuffmanCode = __webpack_require__(966)/* .HuffmanCode */ .h;
var BrotliBuildHuffmanTable = __webpack_require__(966)/* .BrotliBuildHuffmanTable */ .g;
var Context = __webpack_require__(80);
var Prefix = __webpack_require__(435);
var Transform = __webpack_require__(973);

var kDefaultCodeLength = 8;
var kCodeLengthRepeatCode = 16;
var kNumLiteralCodes = 256;
var kNumInsertAndCopyCodes = 704;
var kNumBlockLengthCodes = 26;
var kLiteralContextBits = 6;
var kDistanceContextBits = 2;

var HUFFMAN_TABLE_BITS = 8;
var HUFFMAN_TABLE_MASK = 0xff;
/* Maximum possible Huffman table size for an alphabet size of 704, max code
 * length 15 and root table bits 8. */
var HUFFMAN_MAX_TABLE_SIZE = 1080;

var CODE_LENGTH_CODES = 18;
var kCodeLengthCodeOrder = new Uint8Array([
  1, 2, 3, 4, 0, 5, 17, 6, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);

var NUM_DISTANCE_SHORT_CODES = 16;
var kDistanceShortCodeIndexOffset = new Uint8Array([
  3, 2, 1, 0, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2
]);

var kDistanceShortCodeValueOffset = new Int8Array([
  0, 0, 0, 0, -1, 1, -2, 2, -3, 3, -1, 1, -2, 2, -3, 3
]);

var kMaxHuffmanTableSize = new Uint16Array([
  256, 402, 436, 468, 500, 534, 566, 598, 630, 662, 694, 726, 758, 790, 822,
  854, 886, 920, 952, 984, 1016, 1048, 1080
]);

function DecodeWindowBits(br) {
  var n;
  if (br.readBits(1) === 0) {
    return 16;
  }
  
  n = br.readBits(3);
  if (n > 0) {
    return 17 + n;
  }
  
  n = br.readBits(3);
  if (n > 0) {
    return 8 + n;
  }
  
  return 17;
}

/* Decodes a number in the range [0..255], by reading 1 - 11 bits. */
function DecodeVarLenUint8(br) {
  if (br.readBits(1)) {
    var nbits = br.readBits(3);
    if (nbits === 0) {
      return 1;
    } else {
      return br.readBits(nbits) + (1 << nbits);
    }
  }
  return 0;
}

function MetaBlockLength() {
  this.meta_block_length = 0;
  this.input_end = 0;
  this.is_uncompressed = 0;
  this.is_metadata = false;
}

function DecodeMetaBlockLength(br) {
  var out = new MetaBlockLength;  
  var size_nibbles;
  var size_bytes;
  var i;
  
  out.input_end = br.readBits(1);
  if (out.input_end && br.readBits(1)) {
    return out;
  }
  
  size_nibbles = br.readBits(2) + 4;
  if (size_nibbles === 7) {
    out.is_metadata = true;
    
    if (br.readBits(1) !== 0)
      throw new Error('Invalid reserved bit');
    
    size_bytes = br.readBits(2);
    if (size_bytes === 0)
      return out;
    
    for (i = 0; i < size_bytes; i++) {
      var next_byte = br.readBits(8);
      if (i + 1 === size_bytes && size_bytes > 1 && next_byte === 0)
        throw new Error('Invalid size byte');
      
      out.meta_block_length |= next_byte << (i * 8);
    }
  } else {
    for (i = 0; i < size_nibbles; ++i) {
      var next_nibble = br.readBits(4);
      if (i + 1 === size_nibbles && size_nibbles > 4 && next_nibble === 0)
        throw new Error('Invalid size nibble');
      
      out.meta_block_length |= next_nibble << (i * 4);
    }
  }
  
  ++out.meta_block_length;
  
  if (!out.input_end && !out.is_metadata) {
    out.is_uncompressed = br.readBits(1);
  }
  
  return out;
}

/* Decodes the next Huffman code from bit-stream. */
function ReadSymbol(table, index, br) {
  var start_index = index;
  
  var nbits;
  br.fillBitWindow();
  index += (br.val_ >>> br.bit_pos_) & HUFFMAN_TABLE_MASK;
  nbits = table[index].bits - HUFFMAN_TABLE_BITS;
  if (nbits > 0) {
    br.bit_pos_ += HUFFMAN_TABLE_BITS;
    index += table[index].value;
    index += (br.val_ >>> br.bit_pos_) & ((1 << nbits) - 1);
  }
  br.bit_pos_ += table[index].bits;
  return table[index].value;
}

function ReadHuffmanCodeLengths(code_length_code_lengths, num_symbols, code_lengths, br) {
  var symbol = 0;
  var prev_code_len = kDefaultCodeLength;
  var repeat = 0;
  var repeat_code_len = 0;
  var space = 32768;
  
  var table = [];
  for (var i = 0; i < 32; i++)
    table.push(new HuffmanCode(0, 0));
  
  BrotliBuildHuffmanTable(table, 0, 5, code_length_code_lengths, CODE_LENGTH_CODES);

  while (symbol < num_symbols && space > 0) {
    var p = 0;
    var code_len;
    
    br.readMoreInput();
    br.fillBitWindow();
    p += (br.val_ >>> br.bit_pos_) & 31;
    br.bit_pos_ += table[p].bits;
    code_len = table[p].value & 0xff;
    if (code_len < kCodeLengthRepeatCode) {
      repeat = 0;
      code_lengths[symbol++] = code_len;
      if (code_len !== 0) {
        prev_code_len = code_len;
        space -= 32768 >> code_len;
      }
    } else {
      var extra_bits = code_len - 14;
      var old_repeat;
      var repeat_delta;
      var new_len = 0;
      if (code_len === kCodeLengthRepeatCode) {
        new_len = prev_code_len;
      }
      if (repeat_code_len !== new_len) {
        repeat = 0;
        repeat_code_len = new_len;
      }
      old_repeat = repeat;
      if (repeat > 0) {
        repeat -= 2;
        repeat <<= extra_bits;
      }
      repeat += br.readBits(extra_bits) + 3;
      repeat_delta = repeat - old_repeat;
      if (symbol + repeat_delta > num_symbols) {
        throw new Error('[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols');
      }
      
      for (var x = 0; x < repeat_delta; x++)
        code_lengths[symbol + x] = repeat_code_len;
      
      symbol += repeat_delta;
      
      if (repeat_code_len !== 0) {
        space -= repeat_delta << (15 - repeat_code_len);
      }
    }
  }
  if (space !== 0) {
    throw new Error("[ReadHuffmanCodeLengths] space = " + space);
  }
  
  for (; symbol < num_symbols; symbol++)
    code_lengths[symbol] = 0;
}

function ReadHuffmanCode(alphabet_size, tables, table, br) {
  var table_size = 0;
  var simple_code_or_skip;
  var code_lengths = new Uint8Array(alphabet_size);
  
  br.readMoreInput();
  
  /* simple_code_or_skip is used as follows:
     1 for simple code;
     0 for no skipping, 2 skips 2 code lengths, 3 skips 3 code lengths */
  simple_code_or_skip = br.readBits(2);
  if (simple_code_or_skip === 1) {
    /* Read symbols, codes & code lengths directly. */
    var i;
    var max_bits_counter = alphabet_size - 1;
    var max_bits = 0;
    var symbols = new Int32Array(4);
    var num_symbols = br.readBits(2) + 1;
    while (max_bits_counter) {
      max_bits_counter >>= 1;
      ++max_bits;
    }

    for (i = 0; i < num_symbols; ++i) {
      symbols[i] = br.readBits(max_bits) % alphabet_size;
      code_lengths[symbols[i]] = 2;
    }
    code_lengths[symbols[0]] = 1;
    switch (num_symbols) {
      case 1:
        break;
      case 3:
        if ((symbols[0] === symbols[1]) ||
            (symbols[0] === symbols[2]) ||
            (symbols[1] === symbols[2])) {
          throw new Error('[ReadHuffmanCode] invalid symbols');
        }
        break;
      case 2:
        if (symbols[0] === symbols[1]) {
          throw new Error('[ReadHuffmanCode] invalid symbols');
        }
        
        code_lengths[symbols[1]] = 1;
        break;
      case 4:
        if ((symbols[0] === symbols[1]) ||
            (symbols[0] === symbols[2]) ||
            (symbols[0] === symbols[3]) ||
            (symbols[1] === symbols[2]) ||
            (symbols[1] === symbols[3]) ||
            (symbols[2] === symbols[3])) {
          throw new Error('[ReadHuffmanCode] invalid symbols');
        }
        
        if (br.readBits(1)) {
          code_lengths[symbols[2]] = 3;
          code_lengths[symbols[3]] = 3;
        } else {
          code_lengths[symbols[0]] = 2;
        }
        break;
    }
  } else {  /* Decode Huffman-coded code lengths. */
    var i;
    var code_length_code_lengths = new Uint8Array(CODE_LENGTH_CODES);
    var space = 32;
    var num_codes = 0;
    /* Static Huffman code for the code length code lengths */
    var huff = [
      new HuffmanCode(2, 0), new HuffmanCode(2, 4), new HuffmanCode(2, 3), new HuffmanCode(3, 2), 
      new HuffmanCode(2, 0), new HuffmanCode(2, 4), new HuffmanCode(2, 3), new HuffmanCode(4, 1),
      new HuffmanCode(2, 0), new HuffmanCode(2, 4), new HuffmanCode(2, 3), new HuffmanCode(3, 2), 
      new HuffmanCode(2, 0), new HuffmanCode(2, 4), new HuffmanCode(2, 3), new HuffmanCode(4, 5)
    ];
    for (i = simple_code_or_skip; i < CODE_LENGTH_CODES && space > 0; ++i) {
      var code_len_idx = kCodeLengthCodeOrder[i];
      var p = 0;
      var v;
      br.fillBitWindow();
      p += (br.val_ >>> br.bit_pos_) & 15;
      br.bit_pos_ += huff[p].bits;
      v = huff[p].value;
      code_length_code_lengths[code_len_idx] = v;
      if (v !== 0) {
        space -= (32 >> v);
        ++num_codes;
      }
    }
    
    if (!(num_codes === 1 || space === 0))
      throw new Error('[ReadHuffmanCode] invalid num_codes or space');
    
    ReadHuffmanCodeLengths(code_length_code_lengths, alphabet_size, code_lengths, br);
  }
  
  table_size = BrotliBuildHuffmanTable(tables, table, HUFFMAN_TABLE_BITS, code_lengths, alphabet_size);
  
  if (table_size === 0) {
    throw new Error("[ReadHuffmanCode] BuildHuffmanTable failed: ");
  }
  
  return table_size;
}

function ReadBlockLength(table, index, br) {
  var code;
  var nbits;
  code = ReadSymbol(table, index, br);
  nbits = Prefix.kBlockLengthPrefixCode[code].nbits;
  return Prefix.kBlockLengthPrefixCode[code].offset + br.readBits(nbits);
}

function TranslateShortCodes(code, ringbuffer, index) {
  var val;
  if (code < NUM_DISTANCE_SHORT_CODES) {
    index += kDistanceShortCodeIndexOffset[code];
    index &= 3;
    val = ringbuffer[index] + kDistanceShortCodeValueOffset[code];
  } else {
    val = code - NUM_DISTANCE_SHORT_CODES + 1;
  }
  return val;
}

function MoveToFront(v, index) {
  var value = v[index];
  var i = index;
  for (; i; --i) v[i] = v[i - 1];
  v[0] = value;
}

function InverseMoveToFrontTransform(v, v_len) {
  var mtf = new Uint8Array(256);
  var i;
  for (i = 0; i < 256; ++i) {
    mtf[i] = i;
  }
  for (i = 0; i < v_len; ++i) {
    var index = v[i];
    v[i] = mtf[index];
    if (index) MoveToFront(mtf, index);
  }
}

/* Contains a collection of huffman trees with the same alphabet size. */
function HuffmanTreeGroup(alphabet_size, num_htrees) {
  this.alphabet_size = alphabet_size;
  this.num_htrees = num_htrees;
  this.codes = new Array(num_htrees + num_htrees * kMaxHuffmanTableSize[(alphabet_size + 31) >>> 5]);  
  this.htrees = new Uint32Array(num_htrees);
}

HuffmanTreeGroup.prototype.decode = function(br) {
  var i;
  var table_size;
  var next = 0;
  for (i = 0; i < this.num_htrees; ++i) {
    this.htrees[i] = next;
    table_size = ReadHuffmanCode(this.alphabet_size, this.codes, next, br);
    next += table_size;
  }
};

function DecodeContextMap(context_map_size, br) {
  var out = { num_htrees: null, context_map: null };
  var use_rle_for_zeros;
  var max_run_length_prefix = 0;
  var table;
  var i;
  
  br.readMoreInput();
  var num_htrees = out.num_htrees = DecodeVarLenUint8(br) + 1;

  var context_map = out.context_map = new Uint8Array(context_map_size);
  if (num_htrees <= 1) {
    return out;
  }

  use_rle_for_zeros = br.readBits(1);
  if (use_rle_for_zeros) {
    max_run_length_prefix = br.readBits(4) + 1;
  }
  
  table = [];
  for (i = 0; i < HUFFMAN_MAX_TABLE_SIZE; i++) {
    table[i] = new HuffmanCode(0, 0);
  }
  
  ReadHuffmanCode(num_htrees + max_run_length_prefix, table, 0, br);
  
  for (i = 0; i < context_map_size;) {
    var code;

    br.readMoreInput();
    code = ReadSymbol(table, 0, br);
    if (code === 0) {
      context_map[i] = 0;
      ++i;
    } else if (code <= max_run_length_prefix) {
      var reps = 1 + (1 << code) + br.readBits(code);
      while (--reps) {
        if (i >= context_map_size) {
          throw new Error("[DecodeContextMap] i >= context_map_size");
        }
        context_map[i] = 0;
        ++i;
      }
    } else {
      context_map[i] = code - max_run_length_prefix;
      ++i;
    }
  }
  if (br.readBits(1)) {
    InverseMoveToFrontTransform(context_map, context_map_size);
  }
  
  return out;
}

function DecodeBlockType(max_block_type, trees, tree_type, block_types, ringbuffers, indexes, br) {
  var ringbuffer = tree_type * 2;
  var index = tree_type;
  var type_code = ReadSymbol(trees, tree_type * HUFFMAN_MAX_TABLE_SIZE, br);
  var block_type;
  if (type_code === 0) {
    block_type = ringbuffers[ringbuffer + (indexes[index] & 1)];
  } else if (type_code === 1) {
    block_type = ringbuffers[ringbuffer + ((indexes[index] - 1) & 1)] + 1;
  } else {
    block_type = type_code - 2;
  }
  if (block_type >= max_block_type) {
    block_type -= max_block_type;
  }
  block_types[tree_type] = block_type;
  ringbuffers[ringbuffer + (indexes[index] & 1)] = block_type;
  ++indexes[index];
}

function CopyUncompressedBlockToOutput(output, len, pos, ringbuffer, ringbuffer_mask, br) {
  var rb_size = ringbuffer_mask + 1;
  var rb_pos = pos & ringbuffer_mask;
  var br_pos = br.pos_ & BrotliBitReader.IBUF_MASK;
  var nbytes;

  /* For short lengths copy byte-by-byte */
  if (len < 8 || br.bit_pos_ + (len << 3) < br.bit_end_pos_) {
    while (len-- > 0) {
      br.readMoreInput();
      ringbuffer[rb_pos++] = br.readBits(8);
      if (rb_pos === rb_size) {
        output.write(ringbuffer, rb_size);
        rb_pos = 0;
      }
    }
    return;
  }

  if (br.bit_end_pos_ < 32) {
    throw new Error('[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32');
  }

  /* Copy remaining 0-4 bytes from br.val_ to ringbuffer. */
  while (br.bit_pos_ < 32) {
    ringbuffer[rb_pos] = (br.val_ >>> br.bit_pos_);
    br.bit_pos_ += 8;
    ++rb_pos;
    --len;
  }

  /* Copy remaining bytes from br.buf_ to ringbuffer. */
  nbytes = (br.bit_end_pos_ - br.bit_pos_) >> 3;
  if (br_pos + nbytes > BrotliBitReader.IBUF_MASK) {
    var tail = BrotliBitReader.IBUF_MASK + 1 - br_pos;
    for (var x = 0; x < tail; x++)
      ringbuffer[rb_pos + x] = br.buf_[br_pos + x];
    
    nbytes -= tail;
    rb_pos += tail;
    len -= tail;
    br_pos = 0;
  }

  for (var x = 0; x < nbytes; x++)
    ringbuffer[rb_pos + x] = br.buf_[br_pos + x];
  
  rb_pos += nbytes;
  len -= nbytes;

  /* If we wrote past the logical end of the ringbuffer, copy the tail of the
     ringbuffer to its beginning and flush the ringbuffer to the output. */
  if (rb_pos >= rb_size) {
    output.write(ringbuffer, rb_size);
    rb_pos -= rb_size;    
    for (var x = 0; x < rb_pos; x++)
      ringbuffer[x] = ringbuffer[rb_size + x];
  }

  /* If we have more to copy than the remaining size of the ringbuffer, then we
     first fill the ringbuffer from the input and then flush the ringbuffer to
     the output */
  while (rb_pos + len >= rb_size) {
    nbytes = rb_size - rb_pos;
    if (br.input_.read(ringbuffer, rb_pos, nbytes) < nbytes) {
      throw new Error('[CopyUncompressedBlockToOutput] not enough bytes');
    }
    output.write(ringbuffer, rb_size);
    len -= nbytes;
    rb_pos = 0;
  }

  /* Copy straight from the input onto the ringbuffer. The ringbuffer will be
     flushed to the output at a later time. */
  if (br.input_.read(ringbuffer, rb_pos, len) < len) {
    throw new Error('[CopyUncompressedBlockToOutput] not enough bytes');
  }

  /* Restore the state of the bit reader. */
  br.reset();
}

/* Advances the bit reader position to the next byte boundary and verifies
   that any skipped bits are set to zero. */
function JumpToByteBoundary(br) {
  var new_bit_pos = (br.bit_pos_ + 7) & ~7;
  var pad_bits = br.readBits(new_bit_pos - br.bit_pos_);
  return pad_bits == 0;
}

function BrotliDecompressedSize(buffer) {
  var input = new BrotliInput(buffer);
  var br = new BrotliBitReader(input);
  DecodeWindowBits(br);
  var out = DecodeMetaBlockLength(br);
  return out.meta_block_length;
}

__webpack_unused_export__ = BrotliDecompressedSize;

function BrotliDecompressBuffer(buffer, output_size) {
  var input = new BrotliInput(buffer);
  
  if (output_size == null) {
    output_size = BrotliDecompressedSize(buffer);
  }
  
  var output_buffer = new Uint8Array(output_size);
  var output = new BrotliOutput(output_buffer);
  
  BrotliDecompress(input, output);
  
  if (output.pos < output.buffer.length) {
    output.buffer = output.buffer.subarray(0, output.pos);
  }
  
  return output.buffer;
}

exports.BrotliDecompressBuffer = BrotliDecompressBuffer;

function BrotliDecompress(input, output) {
  var i;
  var pos = 0;
  var input_end = 0;
  var window_bits = 0;
  var max_backward_distance;
  var max_distance = 0;
  var ringbuffer_size;
  var ringbuffer_mask;
  var ringbuffer;
  var ringbuffer_end;
  /* This ring buffer holds a few past copy distances that will be used by */
  /* some special distance codes. */
  var dist_rb = [ 16, 15, 11, 4 ];
  var dist_rb_idx = 0;
  /* The previous 2 bytes used for context. */
  var prev_byte1 = 0;
  var prev_byte2 = 0;
  var hgroup = [new HuffmanTreeGroup(0, 0), new HuffmanTreeGroup(0, 0), new HuffmanTreeGroup(0, 0)];
  var block_type_trees;
  var block_len_trees;
  var br;

  /* We need the slack region for the following reasons:
       - always doing two 8-byte copies for fast backward copying
       - transforms
       - flushing the input ringbuffer when decoding uncompressed blocks */
  var kRingBufferWriteAheadSlack = 128 + BrotliBitReader.READ_SIZE;

  br = new BrotliBitReader(input);

  /* Decode window size. */
  window_bits = DecodeWindowBits(br);
  max_backward_distance = (1 << window_bits) - 16;

  ringbuffer_size = 1 << window_bits;
  ringbuffer_mask = ringbuffer_size - 1;
  ringbuffer = new Uint8Array(ringbuffer_size + kRingBufferWriteAheadSlack + BrotliDictionary.maxDictionaryWordLength);
  ringbuffer_end = ringbuffer_size;

  block_type_trees = [];
  block_len_trees = [];
  for (var x = 0; x < 3 * HUFFMAN_MAX_TABLE_SIZE; x++) {
    block_type_trees[x] = new HuffmanCode(0, 0);
    block_len_trees[x] = new HuffmanCode(0, 0);
  }

  while (!input_end) {
    var meta_block_remaining_len = 0;
    var is_uncompressed;
    var block_length = [ 1 << 28, 1 << 28, 1 << 28 ];
    var block_type = [ 0 ];
    var num_block_types = [ 1, 1, 1 ];
    var block_type_rb = [ 0, 1, 0, 1, 0, 1 ];
    var block_type_rb_index = [ 0 ];
    var distance_postfix_bits;
    var num_direct_distance_codes;
    var distance_postfix_mask;
    var num_distance_codes;
    var context_map = null;
    var context_modes = null;
    var num_literal_htrees;
    var dist_context_map = null;
    var num_dist_htrees;
    var context_offset = 0;
    var context_map_slice = null;
    var literal_htree_index = 0;
    var dist_context_offset = 0;
    var dist_context_map_slice = null;
    var dist_htree_index = 0;
    var context_lookup_offset1 = 0;
    var context_lookup_offset2 = 0;
    var context_mode;
    var htree_command;

    for (i = 0; i < 3; ++i) {
      hgroup[i].codes = null;
      hgroup[i].htrees = null;
    }

    br.readMoreInput();
    
    var _out = DecodeMetaBlockLength(br);
    meta_block_remaining_len = _out.meta_block_length;
    if (pos + meta_block_remaining_len > output.buffer.length) {
      /* We need to grow the output buffer to fit the additional data. */
      var tmp = new Uint8Array( pos + meta_block_remaining_len );
      tmp.set( output.buffer );
      output.buffer = tmp;
    }    
    input_end = _out.input_end;
    is_uncompressed = _out.is_uncompressed;
    
    if (_out.is_metadata) {
      JumpToByteBoundary(br);
      
      for (; meta_block_remaining_len > 0; --meta_block_remaining_len) {
        br.readMoreInput();
        /* Read one byte and ignore it. */
        br.readBits(8);
      }
      
      continue;
    }
    
    if (meta_block_remaining_len === 0) {
      continue;
    }
    
    if (is_uncompressed) {
      br.bit_pos_ = (br.bit_pos_ + 7) & ~7;
      CopyUncompressedBlockToOutput(output, meta_block_remaining_len, pos,
                                    ringbuffer, ringbuffer_mask, br);
      pos += meta_block_remaining_len;
      continue;
    }
    
    for (i = 0; i < 3; ++i) {
      num_block_types[i] = DecodeVarLenUint8(br) + 1;
      if (num_block_types[i] >= 2) {
        ReadHuffmanCode(num_block_types[i] + 2, block_type_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
        ReadHuffmanCode(kNumBlockLengthCodes, block_len_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
        block_length[i] = ReadBlockLength(block_len_trees, i * HUFFMAN_MAX_TABLE_SIZE, br);
        block_type_rb_index[i] = 1;
      }
    }
    
    br.readMoreInput();
    
    distance_postfix_bits = br.readBits(2);
    num_direct_distance_codes = NUM_DISTANCE_SHORT_CODES + (br.readBits(4) << distance_postfix_bits);
    distance_postfix_mask = (1 << distance_postfix_bits) - 1;
    num_distance_codes = (num_direct_distance_codes + (48 << distance_postfix_bits));
    context_modes = new Uint8Array(num_block_types[0]);

    for (i = 0; i < num_block_types[0]; ++i) {
       br.readMoreInput();
       context_modes[i] = (br.readBits(2) << 1);
    }
    
    var _o1 = DecodeContextMap(num_block_types[0] << kLiteralContextBits, br);
    num_literal_htrees = _o1.num_htrees;
    context_map = _o1.context_map;
    
    var _o2 = DecodeContextMap(num_block_types[2] << kDistanceContextBits, br);
    num_dist_htrees = _o2.num_htrees;
    dist_context_map = _o2.context_map;
    
    hgroup[0] = new HuffmanTreeGroup(kNumLiteralCodes, num_literal_htrees);
    hgroup[1] = new HuffmanTreeGroup(kNumInsertAndCopyCodes, num_block_types[1]);
    hgroup[2] = new HuffmanTreeGroup(num_distance_codes, num_dist_htrees);

    for (i = 0; i < 3; ++i) {
      hgroup[i].decode(br);
    }

    context_map_slice = 0;
    dist_context_map_slice = 0;
    context_mode = context_modes[block_type[0]];
    context_lookup_offset1 = Context.lookupOffsets[context_mode];
    context_lookup_offset2 = Context.lookupOffsets[context_mode + 1];
    htree_command = hgroup[1].htrees[0];

    while (meta_block_remaining_len > 0) {
      var cmd_code;
      var range_idx;
      var insert_code;
      var copy_code;
      var insert_length;
      var copy_length;
      var distance_code;
      var distance;
      var context;
      var j;
      var copy_dst;

      br.readMoreInput();
      
      if (block_length[1] === 0) {
        DecodeBlockType(num_block_types[1],
                        block_type_trees, 1, block_type, block_type_rb,
                        block_type_rb_index, br);
        block_length[1] = ReadBlockLength(block_len_trees, HUFFMAN_MAX_TABLE_SIZE, br);
        htree_command = hgroup[1].htrees[block_type[1]];
      }
      --block_length[1];
      cmd_code = ReadSymbol(hgroup[1].codes, htree_command, br);
      range_idx = cmd_code >> 6;
      if (range_idx >= 2) {
        range_idx -= 2;
        distance_code = -1;
      } else {
        distance_code = 0;
      }
      insert_code = Prefix.kInsertRangeLut[range_idx] + ((cmd_code >> 3) & 7);
      copy_code = Prefix.kCopyRangeLut[range_idx] + (cmd_code & 7);
      insert_length = Prefix.kInsertLengthPrefixCode[insert_code].offset +
          br.readBits(Prefix.kInsertLengthPrefixCode[insert_code].nbits);
      copy_length = Prefix.kCopyLengthPrefixCode[copy_code].offset +
          br.readBits(Prefix.kCopyLengthPrefixCode[copy_code].nbits);
      prev_byte1 = ringbuffer[pos-1 & ringbuffer_mask];
      prev_byte2 = ringbuffer[pos-2 & ringbuffer_mask];
      for (j = 0; j < insert_length; ++j) {
        br.readMoreInput();

        if (block_length[0] === 0) {
          DecodeBlockType(num_block_types[0],
                          block_type_trees, 0, block_type, block_type_rb,
                          block_type_rb_index, br);
          block_length[0] = ReadBlockLength(block_len_trees, 0, br);
          context_offset = block_type[0] << kLiteralContextBits;
          context_map_slice = context_offset;
          context_mode = context_modes[block_type[0]];
          context_lookup_offset1 = Context.lookupOffsets[context_mode];
          context_lookup_offset2 = Context.lookupOffsets[context_mode + 1];
        }
        context = (Context.lookup[context_lookup_offset1 + prev_byte1] |
                   Context.lookup[context_lookup_offset2 + prev_byte2]);
        literal_htree_index = context_map[context_map_slice + context];
        --block_length[0];
        prev_byte2 = prev_byte1;
        prev_byte1 = ReadSymbol(hgroup[0].codes, hgroup[0].htrees[literal_htree_index], br);
        ringbuffer[pos & ringbuffer_mask] = prev_byte1;
        if ((pos & ringbuffer_mask) === ringbuffer_mask) {
          output.write(ringbuffer, ringbuffer_size);
        }
        ++pos;
      }
      meta_block_remaining_len -= insert_length;
      if (meta_block_remaining_len <= 0) break;

      if (distance_code < 0) {
        var context;
        
        br.readMoreInput();
        if (block_length[2] === 0) {
          DecodeBlockType(num_block_types[2],
                          block_type_trees, 2, block_type, block_type_rb,
                          block_type_rb_index, br);
          block_length[2] = ReadBlockLength(block_len_trees, 2 * HUFFMAN_MAX_TABLE_SIZE, br);
          dist_context_offset = block_type[2] << kDistanceContextBits;
          dist_context_map_slice = dist_context_offset;
        }
        --block_length[2];
        context = (copy_length > 4 ? 3 : copy_length - 2) & 0xff;
        dist_htree_index = dist_context_map[dist_context_map_slice + context];
        distance_code = ReadSymbol(hgroup[2].codes, hgroup[2].htrees[dist_htree_index], br);
        if (distance_code >= num_direct_distance_codes) {
          var nbits;
          var postfix;
          var offset;
          distance_code -= num_direct_distance_codes;
          postfix = distance_code & distance_postfix_mask;
          distance_code >>= distance_postfix_bits;
          nbits = (distance_code >> 1) + 1;
          offset = ((2 + (distance_code & 1)) << nbits) - 4;
          distance_code = num_direct_distance_codes +
              ((offset + br.readBits(nbits)) <<
               distance_postfix_bits) + postfix;
        }
      }

      /* Convert the distance code to the actual distance by possibly looking */
      /* up past distnaces from the ringbuffer. */
      distance = TranslateShortCodes(distance_code, dist_rb, dist_rb_idx);
      if (distance < 0) {
        throw new Error('[BrotliDecompress] invalid distance');
      }

      if (pos < max_backward_distance &&
          max_distance !== max_backward_distance) {
        max_distance = pos;
      } else {
        max_distance = max_backward_distance;
      }

      copy_dst = pos & ringbuffer_mask;

      if (distance > max_distance) {
        if (copy_length >= BrotliDictionary.minDictionaryWordLength &&
            copy_length <= BrotliDictionary.maxDictionaryWordLength) {
          var offset = BrotliDictionary.offsetsByLength[copy_length];
          var word_id = distance - max_distance - 1;
          var shift = BrotliDictionary.sizeBitsByLength[copy_length];
          var mask = (1 << shift) - 1;
          var word_idx = word_id & mask;
          var transform_idx = word_id >> shift;
          offset += word_idx * copy_length;
          if (transform_idx < Transform.kNumTransforms) {
            var len = Transform.transformDictionaryWord(ringbuffer, copy_dst, offset, copy_length, transform_idx);
            copy_dst += len;
            pos += len;
            meta_block_remaining_len -= len;
            if (copy_dst >= ringbuffer_end) {
              output.write(ringbuffer, ringbuffer_size);
              
              for (var _x = 0; _x < (copy_dst - ringbuffer_end); _x++)
                ringbuffer[_x] = ringbuffer[ringbuffer_end + _x];
            }
          } else {
            throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance +
              " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
          }
        } else {
          throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance +
            " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
        }
      } else {
        if (distance_code > 0) {
          dist_rb[dist_rb_idx & 3] = distance;
          ++dist_rb_idx;
        }

        if (copy_length > meta_block_remaining_len) {
          throw new Error("Invalid backward reference. pos: " + pos + " distance: " + distance +
            " len: " + copy_length + " bytes left: " + meta_block_remaining_len);
        }

        for (j = 0; j < copy_length; ++j) {
          ringbuffer[pos & ringbuffer_mask] = ringbuffer[(pos - distance) & ringbuffer_mask];
          if ((pos & ringbuffer_mask) === ringbuffer_mask) {
            output.write(ringbuffer, ringbuffer_size);
          }
          ++pos;
          --meta_block_remaining_len;
        }
      }

      /* When we get here, we must have inserted at least one literal and */
      /* made a copy of at least length two, therefore accessing the last 2 */
      /* bytes is valid. */
      prev_byte1 = ringbuffer[(pos - 1) & ringbuffer_mask];
      prev_byte2 = ringbuffer[(pos - 2) & ringbuffer_mask];
    }

    /* Protect pos from overflow, wrap it around at every GB of input data */
    pos &= 0x3fffffff;
  }

  output.write(ringbuffer, pos & ringbuffer_mask);
}

__webpack_unused_export__ = BrotliDecompress;

BrotliDictionary.init();


/***/ }),

/***/ 340:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var base64 = __webpack_require__(742);
var fs = __webpack_require__(687);

/**
 * The normal dictionary-data.js is quite large, which makes it 
 * unsuitable for browser usage. In order to make it smaller, 
 * we read dictionary.bin, which is a compressed version of
 * the dictionary, and on initial load, Brotli decompresses 
 * it's own dictionary. 😜
 */
exports.init = function() {
  var BrotliDecompressBuffer = __webpack_require__(450).BrotliDecompressBuffer;
  var compressed = base64.toByteArray(__webpack_require__(722));
  return BrotliDecompressBuffer(compressed);
};


/***/ }),

/***/ 722:
/***/ ((module) => {

module.exports="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";


/***/ }),

/***/ 139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Collection of static dictionary words.
*/

var data = __webpack_require__(340);
exports.init = function() {
  exports.dictionary = data.init();
};

exports.offsetsByLength = new Uint32Array([
     0,     0,     0,     0,     0,  4096,  9216, 21504, 35840, 44032,
 53248, 63488, 74752, 87040, 93696, 100864, 104704, 106752, 108928, 113536,
 115968, 118528, 119872, 121280, 122016,
]);

exports.sizeBitsByLength = new Uint8Array([
  0,  0,  0,  0, 10, 10, 11, 11, 10, 10,
 10, 10, 10,  9,  9,  8,  7,  7,  8,  7,
  7,  6,  6,  5,  5,
]);

exports.minDictionaryWordLength = 4;
exports.maxDictionaryWordLength = 24;


/***/ }),

/***/ 966:
/***/ ((__unused_webpack_module, exports) => {

function HuffmanCode(bits, value) {
  this.bits = bits;   /* number of bits used for this symbol */
  this.value = value; /* symbol value or table offset */
}

exports.h = HuffmanCode;

var MAX_LENGTH = 15;

/* Returns reverse(reverse(key, len) + 1, len), where reverse(key, len) is the
   bit-wise reversal of the len least significant bits of key. */
function GetNextKey(key, len) {
  var step = 1 << (len - 1);
  while (key & step) {
    step >>= 1;
  }
  return (key & (step - 1)) + step;
}

/* Stores code in table[0], table[step], table[2*step], ..., table[end] */
/* Assumes that end is an integer multiple of step */
function ReplicateValue(table, i, step, end, code) {
  do {
    end -= step;
    table[i + end] = new HuffmanCode(code.bits, code.value);
  } while (end > 0);
}

/* Returns the table width of the next 2nd level table. count is the histogram
   of bit lengths for the remaining symbols, len is the code length of the next
   processed symbol */
function NextTableBitSize(count, len, root_bits) {
  var left = 1 << (len - root_bits);
  while (len < MAX_LENGTH) {
    left -= count[len];
    if (left <= 0) break;
    ++len;
    left <<= 1;
  }
  return len - root_bits;
}

exports.g = function(root_table, table, root_bits, code_lengths, code_lengths_size) {
  var start_table = table;
  var code;            /* current table entry */
  var len;             /* current code length */
  var symbol;          /* symbol index in original or sorted table */
  var key;             /* reversed prefix code */
  var step;            /* step size to replicate values in current table */
  var low;             /* low bits for current root entry */
  var mask;            /* mask for low bits */
  var table_bits;      /* key length of current table */
  var table_size;      /* size of current table */
  var total_size;      /* sum of root table size and 2nd level table sizes */
  var sorted;          /* symbols sorted by code length */
  var count = new Int32Array(MAX_LENGTH + 1);  /* number of codes of each length */
  var offset = new Int32Array(MAX_LENGTH + 1);  /* offsets in sorted table for each length */

  sorted = new Int32Array(code_lengths_size);

  /* build histogram of code lengths */
  for (symbol = 0; symbol < code_lengths_size; symbol++) {
    count[code_lengths[symbol]]++;
  }

  /* generate offsets into sorted symbol table by code length */
  offset[1] = 0;
  for (len = 1; len < MAX_LENGTH; len++) {
    offset[len + 1] = offset[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (symbol = 0; symbol < code_lengths_size; symbol++) {
    if (code_lengths[symbol] !== 0) {
      sorted[offset[code_lengths[symbol]]++] = symbol;
    }
  }
  
  table_bits = root_bits;
  table_size = 1 << table_bits;
  total_size = table_size;

  /* special case code with only one value */
  if (offset[MAX_LENGTH] === 1) {
    for (key = 0; key < total_size; ++key) {
      root_table[table + key] = new HuffmanCode(0, sorted[0] & 0xffff);
    }
    
    return total_size;
  }

  /* fill in root table */
  key = 0;
  symbol = 0;
  for (len = 1, step = 2; len <= root_bits; ++len, step <<= 1) {
    for (; count[len] > 0; --count[len]) {
      code = new HuffmanCode(len & 0xff, sorted[symbol++] & 0xffff);
      ReplicateValue(root_table, table + key, step, table_size, code);
      key = GetNextKey(key, len);
    }
  }

  /* fill in 2nd level tables and add pointers to root table */
  mask = total_size - 1;
  low = -1;
  for (len = root_bits + 1, step = 2; len <= MAX_LENGTH; ++len, step <<= 1) {
    for (; count[len] > 0; --count[len]) {
      if ((key & mask) !== low) {
        table += table_size;
        table_bits = NextTableBitSize(count, len, root_bits);
        table_size = 1 << table_bits;
        total_size += table_size;
        low = key & mask;
        root_table[start_table + low] = new HuffmanCode((table_bits + root_bits) & 0xff, ((table - start_table) - low) & 0xffff);
      }
      code = new HuffmanCode((len - root_bits) & 0xff, sorted[symbol++] & 0xffff);
      ReplicateValue(root_table, table + (key >> root_bits), step, table_size, code);
      key = GetNextKey(key, len);
    }
  }
  
  return total_size;
}


/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, exports) => {

/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Lookup tables to map prefix codes to value ranges. This is used during
   decoding of the block lengths, literal insertion lengths and copy lengths.
*/

/* Represents the range of values belonging to a prefix code: */
/* [offset, offset + 2^nbits) */
function PrefixCodeRange(offset, nbits) {
  this.offset = offset;
  this.nbits = nbits;
}

exports.kBlockLengthPrefixCode = [
  new PrefixCodeRange(1, 2), new PrefixCodeRange(5, 2), new PrefixCodeRange(9, 2), new PrefixCodeRange(13, 2),
  new PrefixCodeRange(17, 3), new PrefixCodeRange(25, 3), new PrefixCodeRange(33, 3), new PrefixCodeRange(41, 3),
  new PrefixCodeRange(49, 4), new PrefixCodeRange(65, 4), new PrefixCodeRange(81, 4), new PrefixCodeRange(97, 4),
  new PrefixCodeRange(113, 5), new PrefixCodeRange(145, 5), new PrefixCodeRange(177, 5), new PrefixCodeRange(209, 5),
  new PrefixCodeRange(241, 6), new PrefixCodeRange(305, 6), new PrefixCodeRange(369, 7), new PrefixCodeRange(497, 8),
  new PrefixCodeRange(753, 9), new PrefixCodeRange(1265, 10), new PrefixCodeRange(2289, 11), new PrefixCodeRange(4337, 12),
  new PrefixCodeRange(8433, 13), new PrefixCodeRange(16625, 24)
];

exports.kInsertLengthPrefixCode = [
  new PrefixCodeRange(0, 0), new PrefixCodeRange(1, 0), new PrefixCodeRange(2, 0), new PrefixCodeRange(3, 0),
  new PrefixCodeRange(4, 0), new PrefixCodeRange(5, 0), new PrefixCodeRange(6, 1), new PrefixCodeRange(8, 1),
  new PrefixCodeRange(10, 2), new PrefixCodeRange(14, 2), new PrefixCodeRange(18, 3), new PrefixCodeRange(26, 3),
  new PrefixCodeRange(34, 4), new PrefixCodeRange(50, 4), new PrefixCodeRange(66, 5), new PrefixCodeRange(98, 5),
  new PrefixCodeRange(130, 6), new PrefixCodeRange(194, 7), new PrefixCodeRange(322, 8), new PrefixCodeRange(578, 9),
  new PrefixCodeRange(1090, 10), new PrefixCodeRange(2114, 12), new PrefixCodeRange(6210, 14), new PrefixCodeRange(22594, 24),
];

exports.kCopyLengthPrefixCode = [
  new PrefixCodeRange(2, 0), new PrefixCodeRange(3, 0), new PrefixCodeRange(4, 0), new PrefixCodeRange(5, 0),
  new PrefixCodeRange(6, 0), new PrefixCodeRange(7, 0), new PrefixCodeRange(8, 0), new PrefixCodeRange(9, 0),
  new PrefixCodeRange(10, 1), new PrefixCodeRange(12, 1), new PrefixCodeRange(14, 2), new PrefixCodeRange(18, 2),
  new PrefixCodeRange(22, 3), new PrefixCodeRange(30, 3), new PrefixCodeRange(38, 4), new PrefixCodeRange(54, 4),
  new PrefixCodeRange(70, 5), new PrefixCodeRange(102, 5), new PrefixCodeRange(134, 6), new PrefixCodeRange(198, 7),
  new PrefixCodeRange(326, 8), new PrefixCodeRange(582, 9), new PrefixCodeRange(1094, 10), new PrefixCodeRange(2118, 24),
];

exports.kInsertRangeLut = [
  0, 0, 8, 8, 0, 16, 8, 16, 16,
];

exports.kCopyRangeLut = [
  0, 8, 0, 8, 16, 0, 16, 8, 16,
];


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, exports) => {

function BrotliInput(buffer) {
  this.buffer = buffer;
  this.pos = 0;
}

BrotliInput.prototype.read = function(buf, i, count) {
  if (this.pos + count > this.buffer.length) {
    count = this.buffer.length - this.pos;
  }
  
  for (var p = 0; p < count; p++)
    buf[i + p] = this.buffer[this.pos + p];
  
  this.pos += count;
  return count;
}

exports.g = BrotliInput;

function BrotliOutput(buf) {
  this.buffer = buf;
  this.pos = 0;
}

BrotliOutput.prototype.write = function(buf, count) {
  if (this.pos + count > this.buffer.length)
    throw new Error('Output buffer is not large enough');
  
  this.buffer.set(buf.subarray(0, count), this.pos);
  this.pos += count;
  return count;
};

exports.j = BrotliOutput;


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* Copyright 2013 Google Inc. All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   Transformations on dictionary words.
*/

var BrotliDictionary = __webpack_require__(139);

var kIdentity       = 0;
var kOmitLast1      = 1;
var kOmitLast2      = 2;
var kOmitLast3      = 3;
var kOmitLast4      = 4;
var kOmitLast5      = 5;
var kOmitLast6      = 6;
var kOmitLast7      = 7;
var kOmitLast8      = 8;
var kOmitLast9      = 9;
var kUppercaseFirst = 10;
var kUppercaseAll   = 11;
var kOmitFirst1     = 12;
var kOmitFirst2     = 13;
var kOmitFirst3     = 14;
var kOmitFirst4     = 15;
var kOmitFirst5     = 16;
var kOmitFirst6     = 17;
var kOmitFirst7     = 18;
var kOmitFirst8     = 19;
var kOmitFirst9     = 20;

function Transform(prefix, transform, suffix) {
  this.prefix = new Uint8Array(prefix.length);
  this.transform = transform;
  this.suffix = new Uint8Array(suffix.length);
  
  for (var i = 0; i < prefix.length; i++)
    this.prefix[i] = prefix.charCodeAt(i);
  
  for (var i = 0; i < suffix.length; i++)
    this.suffix[i] = suffix.charCodeAt(i);
}

var kTransforms = [
     new Transform(         "", kIdentity,       ""           ),
     new Transform(         "", kIdentity,       " "          ),
     new Transform(        " ", kIdentity,       " "          ),
     new Transform(         "", kOmitFirst1,     ""           ),
     new Transform(         "", kUppercaseFirst, " "          ),
     new Transform(         "", kIdentity,       " the "      ),
     new Transform(        " ", kIdentity,       ""           ),
     new Transform(       "s ", kIdentity,       " "          ),
     new Transform(         "", kIdentity,       " of "       ),
     new Transform(         "", kUppercaseFirst, ""           ),
     new Transform(         "", kIdentity,       " and "      ),
     new Transform(         "", kOmitFirst2,     ""           ),
     new Transform(         "", kOmitLast1,      ""           ),
     new Transform(       ", ", kIdentity,       " "          ),
     new Transform(         "", kIdentity,       ", "         ),
     new Transform(        " ", kUppercaseFirst, " "          ),
     new Transform(         "", kIdentity,       " in "       ),
     new Transform(         "", kIdentity,       " to "       ),
     new Transform(       "e ", kIdentity,       " "          ),
     new Transform(         "", kIdentity,       "\""         ),
     new Transform(         "", kIdentity,       "."          ),
     new Transform(         "", kIdentity,       "\">"        ),
     new Transform(         "", kIdentity,       "\n"         ),
     new Transform(         "", kOmitLast3,      ""           ),
     new Transform(         "", kIdentity,       "]"          ),
     new Transform(         "", kIdentity,       " for "      ),
     new Transform(         "", kOmitFirst3,     ""           ),
     new Transform(         "", kOmitLast2,      ""           ),
     new Transform(         "", kIdentity,       " a "        ),
     new Transform(         "", kIdentity,       " that "     ),
     new Transform(        " ", kUppercaseFirst, ""           ),
     new Transform(         "", kIdentity,       ". "         ),
     new Transform(        ".", kIdentity,       ""           ),
     new Transform(        " ", kIdentity,       ", "         ),
     new Transform(         "", kOmitFirst4,     ""           ),
     new Transform(         "", kIdentity,       " with "     ),
     new Transform(         "", kIdentity,       "'"          ),
     new Transform(         "", kIdentity,       " from "     ),
     new Transform(         "", kIdentity,       " by "       ),
     new Transform(         "", kOmitFirst5,     ""           ),
     new Transform(         "", kOmitFirst6,     ""           ),
     new Transform(    " the ", kIdentity,       ""           ),
     new Transform(         "", kOmitLast4,      ""           ),
     new Transform(         "", kIdentity,       ". The "     ),
     new Transform(         "", kUppercaseAll,   ""           ),
     new Transform(         "", kIdentity,       " on "       ),
     new Transform(         "", kIdentity,       " as "       ),
     new Transform(         "", kIdentity,       " is "       ),
     new Transform(         "", kOmitLast7,      ""           ),
     new Transform(         "", kOmitLast1,      "ing "       ),
     new Transform(         "", kIdentity,       "\n\t"       ),
     new Transform(         "", kIdentity,       ":"          ),
     new Transform(        " ", kIdentity,       ". "         ),
     new Transform(         "", kIdentity,       "ed "        ),
     new Transform(         "", kOmitFirst9,     ""           ),
     new Transform(         "", kOmitFirst7,     ""           ),
     new Transform(         "", kOmitLast6,      ""           ),
     new Transform(         "", kIdentity,       "("          ),
     new Transform(         "", kUppercaseFirst, ", "         ),
     new Transform(         "", kOmitLast8,      ""           ),
     new Transform(         "", kIdentity,       " at "       ),
     new Transform(         "", kIdentity,       "ly "        ),
     new Transform(    " the ", kIdentity,       " of "       ),
     new Transform(         "", kOmitLast5,      ""           ),
     new Transform(         "", kOmitLast9,      ""           ),
     new Transform(        " ", kUppercaseFirst, ", "         ),
     new Transform(         "", kUppercaseFirst, "\""         ),
     new Transform(        ".", kIdentity,       "("          ),
     new Transform(         "", kUppercaseAll,   " "          ),
     new Transform(         "", kUppercaseFirst, "\">"        ),
     new Transform(         "", kIdentity,       "=\""        ),
     new Transform(        " ", kIdentity,       "."          ),
     new Transform(    ".com/", kIdentity,       ""           ),
     new Transform(    " the ", kIdentity,       " of the "   ),
     new Transform(         "", kUppercaseFirst, "'"          ),
     new Transform(         "", kIdentity,       ". This "    ),
     new Transform(         "", kIdentity,       ","          ),
     new Transform(        ".", kIdentity,       " "          ),
     new Transform(         "", kUppercaseFirst, "("          ),
     new Transform(         "", kUppercaseFirst, "."          ),
     new Transform(         "", kIdentity,       " not "      ),
     new Transform(        " ", kIdentity,       "=\""        ),
     new Transform(         "", kIdentity,       "er "        ),
     new Transform(        " ", kUppercaseAll,   " "          ),
     new Transform(         "", kIdentity,       "al "        ),
     new Transform(        " ", kUppercaseAll,   ""           ),
     new Transform(         "", kIdentity,       "='"         ),
     new Transform(         "", kUppercaseAll,   "\""         ),
     new Transform(         "", kUppercaseFirst, ". "         ),
     new Transform(        " ", kIdentity,       "("          ),
     new Transform(         "", kIdentity,       "ful "       ),
     new Transform(        " ", kUppercaseFirst, ". "         ),
     new Transform(         "", kIdentity,       "ive "       ),
     new Transform(         "", kIdentity,       "less "      ),
     new Transform(         "", kUppercaseAll,   "'"          ),
     new Transform(         "", kIdentity,       "est "       ),
     new Transform(        " ", kUppercaseFirst, "."          ),
     new Transform(         "", kUppercaseAll,   "\">"        ),
     new Transform(        " ", kIdentity,       "='"         ),
     new Transform(         "", kUppercaseFirst, ","          ),
     new Transform(         "", kIdentity,       "ize "       ),
     new Transform(         "", kUppercaseAll,   "."          ),
     new Transform( "\xc2\xa0", kIdentity,       ""           ),
     new Transform(        " ", kIdentity,       ","          ),
     new Transform(         "", kUppercaseFirst, "=\""        ),
     new Transform(         "", kUppercaseAll,   "=\""        ),
     new Transform(         "", kIdentity,       "ous "       ),
     new Transform(         "", kUppercaseAll,   ", "         ),
     new Transform(         "", kUppercaseFirst, "='"         ),
     new Transform(        " ", kUppercaseFirst, ","          ),
     new Transform(        " ", kUppercaseAll,   "=\""        ),
     new Transform(        " ", kUppercaseAll,   ", "         ),
     new Transform(         "", kUppercaseAll,   ","          ),
     new Transform(         "", kUppercaseAll,   "("          ),
     new Transform(         "", kUppercaseAll,   ". "         ),
     new Transform(        " ", kUppercaseAll,   "."          ),
     new Transform(         "", kUppercaseAll,   "='"         ),
     new Transform(        " ", kUppercaseAll,   ". "         ),
     new Transform(        " ", kUppercaseFirst, "=\""        ),
     new Transform(        " ", kUppercaseAll,   "='"         ),
     new Transform(        " ", kUppercaseFirst, "='"         )
];

exports.kTransforms = kTransforms;
exports.kNumTransforms = kTransforms.length;

function ToUpperCase(p, i) {
  if (p[i] < 0xc0) {
    if (p[i] >= 97 && p[i] <= 122) {
      p[i] ^= 32;
    }
    return 1;
  }
  
  /* An overly simplified uppercasing model for utf-8. */
  if (p[i] < 0xe0) {
    p[i + 1] ^= 32;
    return 2;
  }
  
  /* An arbitrary transform for three byte characters. */
  p[i + 2] ^= 5;
  return 3;
}

exports.transformDictionaryWord = function(dst, idx, word, len, transform) {
  var prefix = kTransforms[transform].prefix;
  var suffix = kTransforms[transform].suffix;
  var t = kTransforms[transform].transform;
  var skip = t < kOmitFirst1 ? 0 : t - (kOmitFirst1 - 1);
  var i = 0;
  var start_idx = idx;
  var uppercase;
  
  if (skip > len) {
    skip = len;
  }
  
  var prefix_pos = 0;
  while (prefix_pos < prefix.length) {
    dst[idx++] = prefix[prefix_pos++];
  }
  
  word += skip;
  len -= skip;
  
  if (t <= kOmitLast9) {
    len -= t;
  }
  
  for (i = 0; i < len; i++) {
    dst[idx++] = BrotliDictionary.dictionary[word + i];
  }
  
  uppercase = idx - len;
  
  if (t === kUppercaseFirst) {
    ToUpperCase(dst, uppercase);
  } else if (t === kUppercaseAll) {
    while (len > 0) {
      var step = ToUpperCase(dst, uppercase);
      uppercase += step;
      len -= step;
    }
  }
  
  var suffix_pos = 0;
  while (suffix_pos < suffix.length) {
    dst[idx++] = suffix[suffix_pos++];
  }
  
  return idx - start_idx;
}


/***/ }),

/***/ 709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(450).BrotliDecompressBuffer;


/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(742)
var ieee754 = __webpack_require__(645)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 155:
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 470:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 181:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 358:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 687:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./build/sutysisku/lojban/sqljs/sql-wasm.js
var sql_wasm = __webpack_require__(485);
var sql_wasm_default = /*#__PURE__*/__webpack_require__.n(sql_wasm);
;// CONCATENATED MODULE: ./build/sutysisku/lojban/asql/index.js
const ERRNO_CODES = {
  EPERM: 63,
  ENOENT: 44
};

// This implements an emscripten-compatible filesystem that is means
// to be mounted to the one from `sql.js`. Example:
//
// let BFS = new SQLiteFS(SQL.FS, idbBackend);
// SQL.FS.mount(BFS, {}, '/blocked');
//
// Now any files created under '/blocked' will be handled by this
// filesystem, which creates a special file that handles read/writes
// in the way that we want.
class SQLiteFS$1 {
  constructor(FS, backend) {
    this.FS = FS;
    this.backend = backend;

    this.node_ops = {
      getattr: node => {
        let fileattr = FS.isFile(node.mode) ? node.contents.getattr() : null;

        let attr = {};
        attr.dev = 1;
        attr.ino = node.id;
        attr.mode = fileattr ? fileattr.mode : node.mode;
        attr.nlink = 1;
        attr.uid = 0;
        attr.gid = 0;
        attr.rdev = node.rdev;
        attr.size = fileattr ? fileattr.size : FS.isDir(node.mode) ? 4096 : 0;
        attr.atime = new Date(0);
        attr.mtime = new Date(0);
        attr.ctime = new Date(0);
        attr.blksize = fileattr ? fileattr.blockSize : 4096;
        attr.blocks = Math.ceil(attr.size / attr.blksize);
        return attr;
      },
      setattr: (node, attr) => {
        if (this.FS.isFile(node.mode)) {
          node.contents.setattr(attr);
        } else {
          if (attr.mode != null) {
            node.mode = attr.mode;
          }
          if (attr.size != null) {
            node.size = attr.size;
          }
        }
      },
      lookup: (parent, name) => {
        throw new this.FS.ErrnoError(ERRNO_CODES.ENOENT);
      },
      mknod: (parent, name, mode, dev) => {
        if (name.endsWith('.lock')) {
          throw new Error('Locking via lockfiles is not supported');
        }

        return this.createNode(parent, name, mode, dev);
      },
      rename: (old_node, new_dir, new_name) => {
        throw new Error('rename not implemented');
      },
      unlink: (parent, name) => {
        let node = this.FS.lookupNode(parent, name);
        node.contents.delete(name);
      },
      readdir: node => {
        // We could list all the available databases here if `node` is
        // the root directory. However Firefox does not implemented
        // such a methods. Other browsers do, but since it's not
        // supported on all browsers users will need to track it
        // separate anyway right now

        throw new Error('readdir not implemented');
      },
      symlink: (parent, newname, oldpath) => {
        throw new Error('symlink not implemented');
      },
      readlink: node => {
        throw new Error('symlink not implemented');
      }
    };

    this.stream_ops = {
      open: stream => {
        if (this.FS.isFile(stream.node.mode)) {
          stream.node.contents.open();
        }
      },

      close: stream => {
        if (this.FS.isFile(stream.node.mode)) {
          stream.node.contents.close();
        }
      },

      read: (stream, buffer, offset, length, position) => {
        // console.log('read', offset, length, position)
        return stream.node.contents.read(buffer, offset, length, position);
      },

      write: (stream, buffer, offset, length, position) => {
        // console.log('write', offset, length, position);
        return stream.node.contents.write(buffer, offset, length, position);
      },

      llseek: (stream, offset, whence) => {
        // Copied from MEMFS
        var position = offset;
        if (whence === 1) {
          position += stream.position;
        } else if (whence === 2) {
          if (FS.isFile(stream.node.mode)) {
            position += stream.node.contents.getattr().size;
          }
        }
        if (position < 0) {
          throw new this.FS.ErrnoError(28);
        }
        return position;
      },
      allocate: (stream, offset, length) => {
        stream.node.contents.setattr({ size: offset + length });
      },
      mmap: (stream, address, length, position, prot, flags) => {
        throw new Error('mmap not implemented');
      },
      msync: (stream, buffer, offset, length, mmapFlags) => {
        throw new Error('msync not implemented');
      },
      fsync: (stream, buffer, offset, length, mmapFlags) => {
        stream.node.contents.fsync();
      }
    };
  }

  mount() {
    return this.createNode(null, '/', 16384 /* dir */ | 511 /* 0777 */, 0);
  }

  lock(path, lockType) {
    let { node } = this.FS.lookupPath(path);
    return node.contents.lock(lockType);
  }

  unlock(path, lockType) {
    let { node } = this.FS.lookupPath(path);
    return node.contents.unlock(lockType);
  }

  createNode(parent, name, mode, dev) {
    // Only files and directories supported
    if (!(this.FS.isDir(mode) || this.FS.isFile(mode))) {
      throw new this.FS.ErrnoError(ERRNO_CODES.EPERM);
    }

    var node = this.FS.createNode(parent, name, mode, dev);
    if (this.FS.isDir(node.mode)) {
      node.node_ops = {
        mknod: this.node_ops.mknod,
        lookup: this.node_ops.lookup,
        unlink: this.node_ops.unlink,
        setattr: this.node_ops.setattr
      };
      node.stream_ops = {};
      node.contents = {};
    } else if (this.FS.isFile(node.mode)) {
      node.node_ops = this.node_ops;
      node.stream_ops = this.stream_ops;

      // Create file!
      node.contents = this.backend.createFile(name);
    }

    // add the new node to the parent
    if (parent) {
      parent.contents[name] = node;
      parent.timestamp = node.timestamp;
    }

    return node;
  }
}

// Right now we don't support `export from` so we do this manually
const SQLiteFS = SQLiteFS$1;



;// CONCATENATED MODULE: ./build/sutysisku/lojban/asql/indexeddb-backend.js
/* provided dependency */ var process = __webpack_require__(155);
let LOCK_TYPES = {
  NONE: 0,
  SHARED: 1,
  RESERVED: 2,
  PENDING: 3,
  EXCLUSIVE: 4
};

function getPageSize(bufferView) {
  // See 1.3.2 on https://www.sqlite.org/fileformat.html The page size
  // is stored as a 2 byte integer at the 16th byte. It's stored as
  // big-endian so the first byte is the larger one. Combine it into a
  // single integer.
  let int1 = bufferView[16];
  let int2 = bufferView[17];
  return (int1 << 8) + int2;
}

function isSafeToWrite(localData, diskData) {
  if (localData != null && diskData != null) {
    let localView = new Uint8Array(localData);
    let diskView = new Uint8Array(diskData);

    // See
    // https://github.com/sqlite/sqlite/blob/master/src/pager.c#L93-L96
    // (might be documented somewhere? I didn't see it this clearly in
    // the docs). At least one of these bytes change when sqlite3 writes
    // data. We can check this against our in-memory data to see if it's
    // safe to write (if something changes underneath us, it's not)
    for (let i = 24; i < 40; i++) {
      if (localView[i] !== diskView[i]) {
        return false;
      }
    }
    return true;
  }

  // One of them is null, so it's only safe if to write if both are
  // null, otherwise they are different
  return localData == null && diskData == null;
}

function range(start, end, step) {
  let r = [];
  for (let i = start; i <= end; i += step) {
    r.push(i);
  }
  return r;
}

function getBoundaryIndexes(blockSize, start, end) {
  let startC = start - (start % blockSize);
  let endC = end - 1 - ((end - 1) % blockSize);

  return range(startC, endC, blockSize);
}

function readChunks(chunks, start, end) {
  let buffer = new ArrayBuffer(end - start);
  let bufferView = new Uint8Array(buffer);
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];

    // TODO: jest has a bug where we can't do `instanceof ArrayBuffer`
    if (chunk.data.constructor.name !== 'ArrayBuffer') {
      throw new Error('Chunk data is not an ArrayBuffer');
    }

    let cstart = 0;
    let cend = chunk.data.byteLength;

    if (start > chunk.pos) {
      cstart = start - chunk.pos;
    }
    if (end < chunk.pos + chunk.data.byteLength) {
      cend = end - chunk.pos;
    }

    if (cstart > chunk.data.byteLength || cend < 0) {
      continue;
    }

    let len = cend - cstart;

    bufferView.set(
      new Uint8Array(chunk.data, cstart, len),
      chunk.pos - start + cstart
    );
  }

  return buffer;
}

function writeChunks(bufferView, blockSize, start, end) {
  let indexes = getBoundaryIndexes(blockSize, start, end);
  let cursor = 0;

  return indexes
    .map(index => {
      let cstart = 0;
      let cend = blockSize;
      if (start > index && start < index + blockSize) {
        cstart = start - index;
      }
      if (end > index && end < index + blockSize) {
        cend = end - index;
      }

      let len = cend - cstart;
      let chunkBuffer = new ArrayBuffer(blockSize);

      if (start > index + blockSize || end <= index) {
        return null;
      }

      let off = bufferView.byteOffset + cursor;

      let available = bufferView.buffer.byteLength - off;
      if (available <= 0) {
        return null;
      }

      let readLength = Math.min(len, available);

      new Uint8Array(chunkBuffer).set(
        new Uint8Array(bufferView.buffer, off, readLength),
        cstart
      );
      cursor += readLength;

      return {
        pos: index,
        data: chunkBuffer,
        offset: cstart,
        length: readLength
      };
    })
    .filter(Boolean);
}

class File {
  constructor(filename, ops, meta = null) {
    this.filename = filename;
    this.buffer = new Map();
    this.ops = ops;
    this.meta = meta;
    this._metaDirty = false;
    this.writeLock = false;
    this.openHandles = 0;
  }

  bufferChunks(chunks) {
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];
      this.buffer.set(chunk.pos, chunk);
    }
  }

  open() {
    this.openHandles++;

    // Don't open the file again if it's already open
    if (this.openHandles === 1) {
      this.ops.open();
      let meta = this.ops.readMeta();

      // It's possible that `setattr` has already been called if opening
      // the file in a mode that truncates it to 0
      if (this.meta == null) {
        if (meta == null) {
          // New file

          meta = { size: 0 };
        }

        this.meta = meta;
      }
    }

    return this.meta;
  }

  close() {
    this.fsync();

    this.openHandles = Math.max(this.openHandles - 1, 0);

    // Only close it if there are no existing open handles
    if (this.openHandles === 0) {
      this.ops.close();
    }
  }

  delete() {
    this.ops.delete();
  }

  load(indexes) {
    let status = indexes.reduce(
      (acc, b) => {
        let inMemory = this.buffer.get(b);
        if (inMemory) {
          acc.chunks.push(inMemory);
        } else {
          acc.missing.push(b);
        }
        return acc;
      },
      { chunks: [], missing: [] }
    );

    let missingChunks = [];
    if (status.missing.length > 0) {
      missingChunks = this.ops.readBlocks(status.missing, this.meta.blockSize);
    }
    return status.chunks.concat(missingChunks);
  }

  read(bufferView, offset, length, position) {
    // console.log('reading', this.filename, offset, length, position);
    let buffer = bufferView.buffer;

    if (length <= 0) {
      return 0;
    }
    if (position < 0) {
      // TODO: is this right?
      return 0;
    }
    if (position >= this.meta.size) {
      let view = new Uint8Array(buffer, offset);
      for (let i = 0; i < length; i++) {
        view[i] = 0;
      }

      return length;
    }

    position = Math.max(position, 0);
    let dataLength = Math.min(length, this.meta.size - position);

    let start = position;
    let end = position + dataLength;

    let indexes = getBoundaryIndexes(this.meta.blockSize, start, end);

    let chunks = this.load(indexes);
    let readBuffer = readChunks(chunks, start, end);

    if (buffer.byteLength - offset < readBuffer.byteLength) {
      throw new Error('Buffer given to `read` is too small');
    }
    let view = new Uint8Array(buffer);
    view.set(new Uint8Array(readBuffer), offset);

    // TODO: I don't need to do this. `unixRead` does this for us.
    for (let i = dataLength; i < length; i++) {
      view[offset + i] = 0;
    }

    return length;
  }

  write(bufferView, offset, length, position) {
    // console.log('writing', this.filename, offset, length, position);

    if (this.meta.blockSize == null) {
      // We don't have a block size yet (an empty file). The first
      // write MUST be the beginning of the file. This is a new file
      // and the first block contains the page size which we need.
      // sqlite will write this block first, and if you are directly
      // writing a db file to disk you can't write random parts of it.
      // Just write the whole thing and we'll get the first block
      // first.

      let pageSize = getPageSize(
        new Uint8Array(bufferView.buffer, bufferView.byteOffset + offset)
      );

      // Page sizes must be a power of 2 between 512 and 65536.
      // These was generated by doing `Math.pow(2, N)` where N >= 9
      // and N <= 16.
      if (
        ![512, 1024, 2048, 4096, 8192, 16384, 32768, 65536].includes(pageSize)
      ) {
        throw new Error(
          'File has invalid page size. (the first block of a new file must be written first)'
        );
      }

      this.setattr({ blockSize: pageSize });
    }

    let buffer = bufferView.buffer;

    if (length <= 0) {
      return 0;
    }
    if (position < 0) {
      return 0;
    }
    if (buffer.byteLength === 0) {
      return 0;
    }

    length = Math.min(length, buffer.byteLength - offset);

    let writes = writeChunks(
      new Uint8Array(buffer, offset, length),
      this.meta.blockSize,
      position,
      position + length
    );

    // Find any partial chunks and read them in and merge with
    // existing data
    let { partialWrites, fullWrites } = writes.reduce(
      (state, write) => {
        if (write.length !== this.meta.blockSize) {
          state.partialWrites.push(write);
        } else {
          state.fullWrites.push({
            pos: write.pos,
            data: write.data
          });
        }
        return state;
      },
      { fullWrites: [], partialWrites: [] }
    );

    let reads = [];
    if (partialWrites.length > 0) {
      reads = this.load(partialWrites.map(w => w.pos));
    }

    let allWrites = fullWrites.concat(
      reads.map(read => {
        let write = partialWrites.find(w => w.pos === read.pos);

        // MuTatIoN!
        new Uint8Array(read.data).set(
          new Uint8Array(write.data, write.offset, write.length),
          write.offset,
          write.length
        );

        return read;
      })
    );

    this.bufferChunks(allWrites);

    if (position + length > this.meta.size) {
      this.setattr({ size: position + length });
    }

    return length;
  }

  async readIfFallback() {
    if (this.ops.readIfFallback) {
      // Reset the meta
      let meta = await this.ops.readIfFallback();
      this.meta = meta || { size: 0 };
    }
  }

  lock(lockType) {
    // TODO: Perf APIs need improvement
    if (!this._recordingLock) {
      this._recordingLock = true;
    }

    if (this.ops.lock(lockType)) {
      if (lockType >= LOCK_TYPES.RESERVED) {
        this.writeLock = true;
      }
      return true;
    }
    return false;
  }

  unlock(lockType) {
    if (lockType === 0) {
      this._recordingLock = false;
    }

    if (this.writeLock) {
      // In certain cases (I saw this while running VACUUM after
      // changing page size) sqlite changes the size of the file
      // _after_ `fsync` for some reason. In our case, this is
      // critical because we are relying on fsync to write everything
      // out. If we just did some writes, do another fsync which will
      // check the meta and make sure it's persisted if dirty (all
      // other writes should already be flushed by now)
      this.fsync();
      this.writeLock = false;
    }

    return this.ops.unlock(lockType);
  }

  fsync() {
    if (this.buffer.size > 0) {
      // We need to handle page size changes which restructures the
      // whole db. We check if the page size is being written and
      // handle it
      let first = this.buffer.get(0);
      if (first) {
        let pageSize = getPageSize(new Uint8Array(first.data));

        if (pageSize !== this.meta.blockSize) {
          // The page size changed! We need to reflect that in our
          // storage. We need to restructure all pending writes and
          // change our page size so all future writes reflect the new
          // size.
          let buffer = this.buffer;
          this.buffer = new Map();

          // We take all pending writes, concat them into a single
          // buffer, and rewrite it out with the new size. This would
          // be dangerous if the page size could be changed at any
          // point in time since we don't handle partial reads here.
          // However sqlite only ever actually changes the page size
          // in 2 cases:
          //
          // * The db is empty (no data yet, so nothing to read)
          // * A VACUUM command is rewriting the entire db
          //
          // In both cases, we can assume we have _all_ the needed
          // data in the pending buffer, and we don't have to worry
          // about overwriting anything.

          let writes = [...buffer.values()];
          let totalSize = writes.length * this.meta.blockSize;
          let buf = new ArrayBuffer(totalSize);
          let view = new Uint8Array(buf);

          for (let write of writes) {
            view.set(new Uint8Array(write.data), write.pos);
          }

          // Rewrite the buffer with the new page size
          this.bufferChunks(writeChunks(view, pageSize, 0, totalSize));

          // Change our page size
          this.setattr({ blockSize: pageSize });
        }
      }

      this.ops.writeBlocks([...this.buffer.values()], this.meta.blockSize);
    }

    if (this._metaDirty) {
      // We only store the size right now. Block size is already
      // stored in the sqlite file and we don't need the rest
      //
      // TODO: Currently we don't delete any extra blocks after the
      // end of the file. This isn't super important, and in fact
      // could cause perf regressions (sqlite doesn't compress files
      // either!) but what we probably should do is detect a VACUUM
      // command (the whole db is being rewritten) and at that point
      // delete anything after the end of the file
      this.ops.writeMeta({ size: this.meta.size });
      this._metaDirty = false;
    }

    this.buffer = new Map();
  }

  setattr(attr) {
    if (this.meta == null) {
      this.meta = {};
    }

    // Size is the only attribute we actually persist. The rest are
    // stored in memory

    if (attr.mode !== undefined) {
      this.meta.mode = attr.mode;
    }

    if (attr.blockSize !== undefined) {
      this.meta.blockSize = attr.blockSize;
    }

    if (attr.size !== undefined) {
      this.meta.size = attr.size;
      this._metaDirty = true;
    }
  }

  getattr() {
    return this.meta;
  }
}

let FINALIZED = 0xdeadbeef;

let WRITEABLE = 0;
let READABLE = 1;

class Reader {
  constructor(
    buffer,
    { initialOffset = 4, useAtomics = true, stream = true, debug, name } = {}
  ) {
    this.buffer = buffer;
    this.atomicView = new Int32Array(buffer);
    this.offset = initialOffset;
    this.useAtomics = useAtomics;
    this.stream = stream;
    this.debug = debug;
    this.name = name;
  }

  log(...args) {
    if (this.debug) {
      console.log(`[reader: ${this.name}]`, ...args);
    }
  }

  waitWrite(name, timeout = null) {
    if (this.useAtomics) {
      this.log(`waiting for ${name}`);

      while (Atomics.load(this.atomicView, 0) === WRITEABLE) {
        if (timeout != null) {
          if (
            Atomics.wait(this.atomicView, 0, WRITEABLE, timeout) === 'timed-out'
          ) {
            throw new Error('timeout');
          }
        }

        Atomics.wait(this.atomicView, 0, WRITEABLE, 500);
      }

      this.log(`resumed for ${name}`);
    } else {
      if (this.atomicView[0] !== READABLE) {
        throw new Error('`waitWrite` expected array to be readable');
      }
    }
  }

  flip() {
    this.log('flip');
    if (this.useAtomics) {
      let prev = Atomics.compareExchange(
        this.atomicView,
        0,
        READABLE,
        WRITEABLE
      );

      if (prev !== READABLE) {
        throw new Error('Read data out of sync! This is disastrous');
      }

      Atomics.notify(this.atomicView, 0);
    } else {
      this.atomicView[0] = WRITEABLE;
    }

    this.offset = 4;
  }

  done() {
    this.waitWrite('done');

    let dataView = new DataView(this.buffer, this.offset);
    let done = dataView.getUint32(0) === FINALIZED;

    if (done) {
      this.log('done');
      this.flip();
    }

    return done;
  }

  peek(fn) {
    this.peekOffset = this.offset;
    let res = fn();
    this.offset = this.peekOffset;
    this.peekOffset = null;
    return res;
  }

  string(timeout) {
    this.waitWrite('string', timeout);

    let byteLength = this._int32();
    let length = byteLength / 2;

    let dataView = new DataView(this.buffer, this.offset, byteLength);
    let chars = [];
    for (let i = 0; i < length; i++) {
      chars.push(dataView.getUint16(i * 2));
    }
    let str = String.fromCharCode.apply(null, chars);
    this.log('string', str);

    this.offset += byteLength;

    if (this.peekOffset == null) {
      this.flip();
    }
    return str;
  }

  _int32() {
    let byteLength = 4;

    let dataView = new DataView(this.buffer, this.offset);
    let num = dataView.getInt32();
    this.log('_int32', num);

    this.offset += byteLength;
    return num;
  }

  int32() {
    this.waitWrite('int32');
    let num = this._int32();
    this.log('int32', num);

    if (this.peekOffset == null) {
      this.flip();
    }
    return num;
  }

  bytes() {
    this.waitWrite('bytes');

    let byteLength = this._int32();

    let bytes = new ArrayBuffer(byteLength);
    new Uint8Array(bytes).set(
      new Uint8Array(this.buffer, this.offset, byteLength)
    );
    this.log('bytes', bytes);

    this.offset += byteLength;

    if (this.peekOffset == null) {
      this.flip();
    }
    return bytes;
  }
}

class Writer {
  constructor(
    buffer,
    { initialOffset = 4, useAtomics = true, stream = true, debug, name } = {}
  ) {
    this.buffer = buffer;
    this.atomicView = new Int32Array(buffer);
    this.offset = initialOffset;
    this.useAtomics = useAtomics;
    this.stream = stream;

    this.debug = debug;
    this.name = name;

    if (this.useAtomics) {
      // The buffer starts out as writeable
      Atomics.store(this.atomicView, 0, WRITEABLE);
    } else {
      this.atomicView[0] = WRITEABLE;
    }
  }

  log(...args) {
    if (this.debug) {
      console.log(`[writer: ${this.name}]`, ...args);
    }
  }

  waitRead(name) {
    if (this.useAtomics) {
      this.log(`waiting for ${name}`);
      // Switch to writable
      // Atomics.store(this.atomicView, 0, 1);

      let prev = Atomics.compareExchange(
        this.atomicView,
        0,
        WRITEABLE,
        READABLE
      );

      if (prev !== WRITEABLE) {
        throw new Error(
          'Wrote something into unwritable buffer! This is disastrous'
        );
      }

      Atomics.notify(this.atomicView, 0);

      while (Atomics.load(this.atomicView, 0) === READABLE) {
        // console.log('waiting to be read...');
        Atomics.wait(this.atomicView, 0, READABLE, 500);
      }

      this.log(`resumed for ${name}`);
    } else {
      this.atomicView[0] = READABLE;
    }

    this.offset = 4;
  }

  finalize() {
    this.log('finalizing');
    let dataView = new DataView(this.buffer, this.offset);
    dataView.setUint32(0, FINALIZED);
    this.waitRead('finalize');
  }

  string(str) {
    this.log('string', str);

    let byteLength = str.length * 2;
    this._int32(byteLength);

    let dataView = new DataView(this.buffer, this.offset, byteLength);
    for (let i = 0; i < str.length; i++) {
      dataView.setUint16(i * 2, str.charCodeAt(i));
    }

    this.offset += byteLength;
    this.waitRead('string');
  }

  _int32(num) {
    let byteLength = 4;

    let dataView = new DataView(this.buffer, this.offset);
    dataView.setInt32(0, num);

    this.offset += byteLength;
  }

  int32(num) {
    this.log('int32', num);
    this._int32(num);
    this.waitRead('int32');
  }

  bytes(buffer) {
    this.log('bytes', buffer);

    let byteLength = buffer.byteLength;
    this._int32(byteLength);
    new Uint8Array(this.buffer, this.offset).set(new Uint8Array(buffer));

    this.offset += byteLength;
    this.waitRead('bytes');
  }
}

function positionToKey$1(pos, blockSize) {
  // We are forced to round because of floating point error. `pos`
  // should always be divisible by `blockSize`
  return Math.round(pos / blockSize);
}

function startWorker(reader, writer) {
  // In a normal world, we'd spawn the worker here as a child worker.
  // However Safari doesn't support nested workers, so we have to
  // proxy them through the main thread
  self.postMessage({
    type: '__absurd:spawn-idb-worker',
    argBuffer: writer.buffer,
    resultBuffer: reader.buffer
  });

  self.addEventListener('message', e => {
    switch (e.data.type) {
      // Normally you would use `postMessage` control the profiler in
      // a worker (just like this worker go those events), and the
      // perf library automatically handles those events. We don't do
      // that for the special backend worker though because it's
      // always blocked when it's not processing. Instead we forward
      // these events by going through the atomics layer to unblock it
      // to make sure it starts immediately
      case '__perf-deets:start-profile':
        writer.string('profile-start');
        writer.finalize();
        reader.int32();
        reader.done();
        break;

      case '__perf-deets:stop-profile':
        writer.string('profile-stop');
        writer.finalize();
        reader.int32();
        reader.done();
        break;
    }
  });
}

class FileOps {
  constructor(filename) {
    this.filename = filename;
  }

  // TODO: This should be renamed to `getDatabaseName`
  getStoreName() {
    return this.filename.replace(/\//g, '-');
  }

  invokeWorker(method, args) {
    if (this.reader == null || this.writer == null) {
      throw new Error(
        `Attempted ${method} on ${this.filename} but file not open`
      );
    }

    let reader = this.reader;
    let writer = this.writer;

    switch (method) {
      case 'readBlocks': {
        let { name, positions, blockSize } = args;

        let res = [];
        for (let pos of positions) {
          writer.string('readBlock');
          writer.string(name);
          writer.int32(positionToKey$1(pos, blockSize));
          writer.finalize();

          let data = reader.bytes();
          reader.done();
          res.push({
            pos,
            // If th length is 0, the block didn't exist. We return a
            // blank block in that case
            data: data.byteLength === 0 ? new ArrayBuffer(blockSize) : data
          });
        }

        return res;
      }

      case 'writeBlocks': {
        let { name, writes, blockSize } = args;
        writer.string('writeBlocks');
        writer.string(name);
        for (let write of writes) {
          writer.int32(positionToKey$1(write.pos, blockSize));
          writer.bytes(write.data);
        }
        writer.finalize();

        let res = reader.int32();
        reader.done();
        return res;
      }

      case 'readMeta': {
        writer.string('readMeta');
        writer.string(args.name);
        writer.finalize();

        let size = reader.int32();
        let blockSize = reader.int32();
        reader.done();
        return size === -1 ? null : { size, blockSize };
      }

      case 'writeMeta': {
        let { name, meta } = args;
        writer.string('writeMeta');
        writer.string(name);
        writer.int32(meta.size);
        // writer.int32(meta.blockSize);
        writer.finalize();

        let res = reader.int32();
        reader.done();
        return res;
      }

      case 'closeFile': {
        writer.string('closeFile');
        writer.string(args.name);
        writer.finalize();

        let res = reader.int32();
        reader.done();
        return res;
      }

      case 'lockFile': {
        writer.string('lockFile');
        writer.string(args.name);
        writer.int32(args.lockType);
        writer.finalize();

        let res = reader.int32();
        reader.done();
        return res === 0;
      }

      case 'unlockFile': {
        writer.string('unlockFile');
        writer.string(args.name);
        writer.int32(args.lockType);
        writer.finalize();

        let res = reader.int32();
        reader.done();
        return res === 0;
      }
    }
  }

  lock(lockType) {
    return this.invokeWorker('lockFile', {
      name: this.getStoreName(),
      lockType
    });
  }

  unlock(lockType) {
    return this.invokeWorker('unlockFile', {
      name: this.getStoreName(),
      lockType
    });
  }

  delete() {
    // Close the file if it's open
    if (this.reader || this.writer) {
      this.close();
    }

    // We delete it here because we can't do it in the worker; the
    // worker is stopped when the file closes. If we didn't do that,
    // workers would leak in the case of closing a file but not
    // deleting it. We could potentially restart the worker here if
    // needed, but for now just assume that the deletion is a success
    let req = globalThis.indexedDB.deleteDatabase(this.getStoreName());
    req.onerror = () => {
      console.warn(`Deleting ${this.filename} database failed`);
    };
    req.onsuccess = () => {};
  }

  open() {
    let argBuffer = new SharedArrayBuffer(4096 * 9);
    this.writer = new Writer(argBuffer, {
      name: 'args (backend)',
      debug: false
    });

    let resultBuffer = new SharedArrayBuffer(4096 * 9);
    this.reader = new Reader(resultBuffer, {
      name: 'results',
      debug: false
    });

    // TODO: We could pool workers and reuse them so opening files
    // aren't so slow
    startWorker(this.reader, this.writer);
  }

  close() {
    this.invokeWorker('closeFile', { name: this.getStoreName() });
    this.reader = null;
    this.writer = null;
    this.worker = null;
  }

  readMeta() {
    return this.invokeWorker('readMeta', { name: this.getStoreName() });
  }

  writeMeta(meta) {
    return this.invokeWorker('writeMeta', { name: this.getStoreName(), meta });
  }

  readBlocks(positions, blockSize) {
    if (this.stats) {
      this.stats.read += positions.length;
    }

    return this.invokeWorker('readBlocks', {
      name: this.getStoreName(),
      positions,
      blockSize
    });
  }

  writeBlocks(writes, blockSize) {
    if (this.stats) {
      this.stats.writes += writes.length;
    }

    return this.invokeWorker('writeBlocks', {
      name: this.getStoreName(),
      writes,
      blockSize
    });
  }
}

/**
 * https://bugs.webkit.org/show_bug.cgi?id=226547
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up.
 * The only solution is to keep nudging it until it's awake.
 * This probably creates garbage, but garbage is better than totally failing.
 */
function idbReady() {
    const isSafari = !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
    // No point putting other browsers or older versions of Safari through this mess.
    if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
    let intervalId;
    return new Promise((resolve) => {
        const tryIdb = () => indexedDB.databases().finally(resolve);
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(() => clearInterval(intervalId));
}

function positionToKey(pos, blockSize) {
  // We are forced to round because of floating point error. `pos`
  // should always be divisible by `blockSize`
  return Math.round(pos / blockSize);
}

async function openDb(name) {
  await idbReady();

  return new Promise((resolve, reject) => {
    let req = globalThis.indexedDB.open(name, 2);
    req.onsuccess = event => {
      let db = event.target.result;

      db.onversionchange = () => {
        console.log('closing because version changed');
        db.close();
      };
      db.onclose = () => {};

      resolve(db);
    };
    req.onupgradeneeded = event => {
      let db = event.target.result;
      if (!db.objectStoreNames.contains('data')) {
        db.createObjectStore('data');
      }
    };
    req.onblocked = e => console.log('blocked', e);
    req.onerror = req.onabort = e => reject(e.target.error);
  });
}

// Using a separate class makes it easier to follow the code, and
// importantly it removes any reliance on internal state in
// `FileOpsFallback`. That would be problematic since these method
// happen async; the args to `write` must be closed over so they don't
// change
class Persistance {
  constructor(dbName, onFallbackFailure) {
    this.dbName = dbName;
    this._openDb = null;
    this.hasAlertedFailure = false;
    this.onFallbackFailure = onFallbackFailure;
  }

  async getDb() {
    if (this._openDb) {
      return this._openDb;
    }

    this._openDb = await openDb(this.dbName);
    return this._openDb;
  }

  closeDb() {
    if (this._openDb) {
      this._openDb.close();
      this._openDb = null;
    }
  }

  // Both `readAll` and `write` rely on IndexedDB transactional
  // semantics to work, otherwise we'd have to coordinate them. If
  // there are pending writes, the `readonly` transaction in `readAll`
  // will block until they are all flushed out. If `write` is called
  // multiple times, `readwrite` transactions can only run one at a
  // time so it will naturally apply the writes sequentially (and
  // atomically)

  async readAll() {
    let db = await this.getDb(this.dbName);
    let blocks = new Map();

    let trans = db.transaction(['data'], 'readonly');
    let store = trans.objectStore('data');

    return new Promise((resolve, reject) => {
      // Open a cursor and iterate through the entire file
      let req = store.openCursor(IDBKeyRange.lowerBound(-1));
      req.onerror = reject;
      req.onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          blocks.set(cursor.key, cursor.value);
          cursor.continue();
        } else {
          resolve(blocks);
        }
      };
    });
  }

  async write(writes, cachedFirstBlock, hasLocked) {
    let db = await this.getDb(this.dbName);

    // We need grab a readwrite lock on the db, and then read to check
    // to make sure we can write to it
    let trans = db.transaction(['data'], 'readwrite');
    let store = trans.objectStore('data');

    await new Promise((resolve, reject) => {
      let req = store.get(0);
      req.onsuccess = e => {
        if (hasLocked) {
          if (!isSafeToWrite(req.result, cachedFirstBlock)) {
            if (this.onFallbackFailure && !this.hasAlertedFailure) {
              this.hasAlertedFailure = true;
              this.onFallbackFailure();
            }
            reject(new Error('Fallback mode unable to write file changes'));
            return;
          }
        }

        // Flush all the writes
        for (let write of writes) {
          store.put(write.value, write.key);
        }

        trans.onsuccess = () => resolve();
        trans.onerror = () => reject();
      };
      req.onerror = reject;
    });
  }
}

class FileOpsFallback {
  constructor(filename, onFallbackFailure) {
    this.filename = filename;
    this.dbName = this.filename.replace(/\//g, '-');
    this.cachedFirstBlock = null;
    this.writeQueue = null;
    this.blocks = new Map();
    this.lockType = 0;
    this.transferBlockOwnership = false;

    this.persistance = new Persistance(this.dbName, onFallbackFailure);
  }

  async readIfFallback() {
    this.transferBlockOwnership = true;
    this.blocks = await this.persistance.readAll();

    return this.readMeta();
  }

  lock(lockType) {
    // Locks always succeed here. Essentially we're only working
    // locally (we can't see any writes from anybody else) and we just
    // want to track the lock so we know when it downgrades from write
    // to read
    this.cachedFirstBlock = this.blocks.get(0);
    this.lockType = lockType;
    return true;
  }

  unlock(lockType) {
    if (this.lockType > LOCK_TYPES.SHARED && lockType === LOCK_TYPES.SHARED) {
      // Within a write lock, we delay all writes until the end of the
      // lock. We probably don't have to do this since we already
      // delay writes until an `fsync`, however this is an extra
      // measure to make sure we are writing everything atomically
      this.flush();
    }
    this.lockType = lockType;
    return true;
  }

  delete() {
    let req = globalThis.indexedDB.deleteDatabase(this.dbName);
    req.onerror = () => {
      console.warn(`Deleting ${this.filename} database failed`);
    };
    req.onsuccess = () => {};
  }

  open() {
    this.writeQueue = [];
    this.lockType = 0;
  }

  close() {
    this.flush();

    if (this.transferBlockOwnership) {
      this.transferBlockOwnership = false;
    } else {
      this.blocks = new Map();
    }

    this.persistance.closeDb();
  }

  readMeta() {
    let metaBlock = this.blocks.get(-1);
    if (metaBlock) {
      let block = this.blocks.get(0);

      return {
        size: metaBlock.size,
        blockSize: getPageSize(new Uint8Array(block))
      };
    }
    return null;
  }

  writeMeta(meta) {
    this.blocks.set(-1, meta);
    this.queueWrite(-1, meta);
  }

  readBlocks(positions, blockSize) {
    let res = [];
    for (let pos of positions) {
      res.push({
        pos,
        data: this.blocks.get(positionToKey(pos, blockSize))
      });
    }
    return res;
  }

  writeBlocks(writes, blockSize) {
    for (let write of writes) {
      let key = positionToKey(write.pos, blockSize);
      this.blocks.set(key, write.data);
      this.queueWrite(key, write.data);
    }

    // No write lock; flush them out immediately
    if (this.lockType <= LOCK_TYPES.SHARED) {
      this.flush();
    }
  }

  queueWrite(key, value) {
    this.writeQueue.push({ key, value });
  }

  flush() {
    if (this.writeQueue.length > 0) {
      this.persistance.write(
        this.writeQueue,
        this.cachedFirstBlock,
        this.lockType > LOCK_TYPES.SHARED
      );
      this.writeQueue = [];
    }
    this.cachedFirstBlock = null;
  }
}

class IndexedDBBackend {
  constructor(onFallbackFailure) {
    this.onFallbackFailure = onFallbackFailure;
  }

  createFile(filename) {
    let ops;
    if (typeof SharedArrayBuffer !== 'undefined') {
      // SharedArrayBuffer exists! We can run this fully
      ops = new FileOps(filename);
    } else {
      // SharedArrayBuffer is not supported. Use the fallback methods
      // which provide a somewhat working version, but doesn't
      // support mutations across connections (tabs)
      ops = new FileOpsFallback(filename, this.onFallbackFailure);
    }

    let file = new File(filename, ops);

    // If we don't need perf data, there's no reason for us to hold a
    // reference to the files. If we did we'd have to worry about
    // memory leaks
    if ( false || process.env.PERF_BUILD) {
      if (this._files == null) {
        this._files = new Set();
      }
      this._files.add(file);
    }

    return file;
  }

  // Instead of controlling the profiler from the main thread by
  // posting a message to this worker, you can control it inside the
  // worker manually with these methods
  startProfile() {
    for (let file of this._files) {
      // If the writer doesn't exist, that means the file has been
      // deleted
      if (file.ops.writer) {
        let writer = file.ops.writer;
        let reader = file.ops.reader;
        writer.string('profile-start');
        writer.finalize();
        reader.int32();
        reader.done();
      }
    }
  }

  stopProfile() {
    for (let file of this._files) {
      if (file.ops.writer) {
        let writer = file.ops.writer;
        let reader = file.ops.reader;
        writer.string('profile-stop');
        writer.finalize();
        reader.int32();
        reader.done();
      }
    }
  }
}

/* harmony default export */ const indexeddb_backend = (IndexedDBBackend);

// EXTERNAL MODULE: ./build/sutysisku/lojban/cmaxes.js
var cmaxes = __webpack_require__(104);
;// CONCATENATED MODULE: ./build/sutysisku/lojban/worker.js
/* provided dependency */ var Buffer = __webpack_require__(764)["Buffer"];




const decompress = __webpack_require__(709)

self.postMessage({ kind: 'loading' })

class Queue {
	constructor() {
		this._items = []
	}
	enqueue(item) {
		this._items.push(item)
	}
	dequeue() {
		const withVlaste = this._items.filter((i) => i.name === 'vlaste').slice(-1)
		const notWithVlaste = this._items.filter((i) => i.name !== 'vlaste')
		this._items = withVlaste.concat(notWithVlaste)
		return this._items.shift()
	}
	get size() {
		return this._items.length
	}
}

class AutoQueue extends Queue {
	constructor() {
		super()
		this._pendingPromise = false
	}

	enqueue(action, name) {
		return new Promise((resolve, reject) => {
			super.enqueue({ name, action, resolve, reject })
			this.dequeue()
		})
	}

	async dequeue() {
		if (this._pendingPromise) return false

		const item = super.dequeue()

		if (!item) return false

		try {
			this._pendingPromise = true

			const payload = await item.action(this)

			this._pendingPromise = false
			item.resolve(payload)
		} catch (e) {
			this._pendingPromise = false
			item.reject(e)
		} finally {
			this.dequeue()
		}

		return true
	}
}

const aQueue = new AutoQueue()

self.onmessage = function (ev) {
	if (ev.data.kind == 'newSearch') {
		aQueue.enqueue(() => {
			// let q = `SELECT 'ok' from valsi where regexp('ok','oka')`
			// let bangu='muplis', query_apos='nilce'
			// const rows = runQuery(`select distinct d,n,w,r,bangu,s,t,cache from valsi where cache like ? and (bangu = ? or bangu like ?)`, ["%" + query_apos + "%", bangu, bangu + "-%"])
			// console.log(rows);

			sisku(ev.data, function (res) {
				self.postMessage({
					kind: 'searchResults',
					results: res.results,
					req: {
						bangu: ev.data.bangu,
						seskari: ev.data.seskari,
						versio: ev.data.versio,
						query: ev.data.query,
					},
				})
			})
		}, 'vlaste')
	} else if (ev.data.kind == 'parse') {
		aQueue.enqueue(() => {
			cmaxesParse({ tegerna: ev.data.tegerna }, function (res) {
				self.postMessage({
					kind: 'parse',
					results: res,
					req: ev.data,
				})
			})
		})
	} else if (ev.data.kind == 'fancu' && ev.data.cmene) {
		aQueue.enqueue(() => {
			fancu[ev.data.cmene](ev.data, function (results) {
				self.postMessage({
					kind: 'fancu',
					cmene: ev.data.cmene,
					datni: ev.data,
					results: results,
				})
			})
		})
	}
}

let db
async function initSQLDB() {
	let SQL = await sql_wasm_default()({ locateFile: (file) => file })
	let sqlFS = new SQLiteFS(SQL.FS, new indexeddb_backend())
	SQL.register_for_idb(sqlFS)

	SQL.FS.mkdir('/sql')
	SQL.FS.mount(sqlFS, {}, '/sql')

	const path = '/sql/db.sqlite'
	if (typeof SharedArrayBuffer === 'undefined') {
		let stream = SQL.FS.open(path, 'a+')
		await stream.node.contents.readIfFallback()
		SQL.FS.close(stream)
	}

	db = new SQL.Database('/sql/db.sqlite', { filename: true })
	db.run(`
	pragma page_size = 8192;
	pragma cache_size = 3000;
    PRAGMA journal_mode=MEMORY;
	`)
	db.run(
		'CREATE TABLE IF NOT EXISTS valsi (d text,n text,w text,r text,bangu text,s text,t text,g text,cache text )'
	)
	db.create_function('regexp', (regex, str) => RegExp(regex).test(str))
	db.run('CREATE TABLE IF NOT EXISTS langs_ready (bangu TEXT, timestamp TEXT)')
	db.run('CREATE TABLE IF NOT EXISTS tejufra (bangu TEXT, jufra TEXT)')
	self.postMessage({
		kind: 'loader',
		cmene: 'booting',
	})
	console.log('booting')

	db.run(`SELECT * FROM valsi`)
	self.postMessage({
		kind: 'loader',
		cmene: 'loaded',
	})
	console.log('booted')
}

self.production = `false`

function runQuery(sql_query, params) {
	const start = new Date()
	let stmt = db.prepare(sql_query)
	stmt.bind(params)
	let rows = []
	while (stmt.step()) rows.push(stmt.getAsObject())
	stmt.free()
	if (self.production !== 'production')
		console.log({ duration: new Date() - start, sql_query, params, rows })

	return rows.map((row) => {
		delete row.cache
		delete row.no
		if (row.r) row.r = JSON.parse(row.r)
		if ((row.t || '').indexOf('{') === 0) row.t = JSON.parse(row.t)
		if ((row.s || '').indexOf('[') === 0) row.s = JSON.parse(row.s)
		if (row.d) {
			try {
				const json = JSON.parse(row.d)
				if (Object.keys(json).length > 0) row.d = json
			} catch (error) { }
		}
		return row
	})
}

const supportedLangs = {
	sutysisku: { n: 'la sutysisku', bangu: 'en' },
	en: { n: 'English', p: 'selsku_lanci_eng' },
	muplis: { n: 'la muplis' },
	'en-cll': { n: 'The Book', p: 'cukta', noRafsi: true, searchPriority: true },
	'en-ll': {
		n: 'Learn Lojban',
		p: 'cukta',
		noRafsi: true,
		searchPriority: true,
	},
	jbo: { n: 'lojbo', p: 'lanci_jbo', searchPriority: true },
	ru: { n: 'русский', p: 'selsku_lanci_rus' },
	eo: { n: 'esperanto', p: 'lanci_epo' },
	es: { n: 'español', p: 'selsku_lanci_spa' },
	'fr-facile': { n: 'français', p: 'selsku_lanci_fra' },
	ja: { n: '日本語', p: 'selsku_lanci_jpn' },
	zh: { n: '中文', p: 'selsku_lanci_zho' },
}

const sufficientLangs = (searching) =>
	[
		searching ? searching.bangu : null,
		'sutysisku',
		'en-cll',
		'en-ll',
		'en',
		'muplis',
		'jbo',
	].filter(Boolean)

let sesisku_bangu = null

const fancu = {
	tejufra: async ({ bangu }, cb) => {
		let stmt = db.prepare(`SELECT jufra FROM tejufra where bangu=?`)
		let tef1 = {},
			tef2 = {}
		if (bangu) {
			stmt.bind([bangu])
			stmt.step()
			try {
				tef1 = JSON.parse(stmt.getAsObject().jufra)
			} catch (error) { }
		}
		stmt.free()
		stmt = db.prepare(`SELECT jufra FROM tejufra where bangu=?`)
		stmt.bind(['en'])
		stmt.step()
		try {
			tef2 = JSON.parse(stmt.getAsObject().jufra)
		} catch (error) { }
		stmt.free()

		cb({ ...tef2, ...tef1 })
	},
	cnino_bangu: ({ bangu }) => {
		sesisku_bangu = bangu
	},
	ningau_lerosorcu: async (searching, cb) => {
		fancu.ningau_lesorcu(searching, cb, true)
	},
	ningau_lesorcu: async (searching, cb, forceAll) => {
		let langsToUpdate = []
		let response
		try {
			response = await fetch(
				`/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
			)
		} catch (error) {
			console.log({
				event: "can't fetch new version, skipping database updates",
			})
			return
		}

		let json = {}
		if (response.ok) {
			json = await response.json()

			const stmt = db.prepare(
				`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
			)
			for (const lang of sufficientLangs(searching)) {
				let count = 0
				if (!forceAll) {
					stmt.bind([lang, json[lang]])
					stmt.step()
					count = stmt.getAsObject().klani
				}
				if (count === 0) langsToUpdate.push(lang)
			}
			stmt.free()

			if (langsToUpdate.length > 0) {
				for (const lang of Object.keys(supportedLangs))
					if (langsToUpdate.includes(supportedLangs[lang].bangu))
						langsToUpdate.push(lang)

				const langsUpdated = await cnino_sorcu(
					cb,
					langsToUpdate,
					searching,
					json
				)
				console.log({
					event: 'Database updated',
					'No. of languages updated': langsUpdated.length,
				})
			}
		}

		self.postMessage({
			kind: 'loader',
			cmene: 'loaded',
		})
		jufra({})
	},
	ningau_lepasorcu: async (searching, cb) => {
		const lang = searching.bangu || 'en'
		let json = {}
		const response = await fetch(
			`/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
		)
		if (response.ok) {
			json = await response.json()
		}
		const stmt = db.prepare(
			`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
		)
		stmt.bind([lang, json[lang]])
		stmt.step()
		const count = stmt.getAsObject().klani
		stmt.free()

		if (count > 0) return
		await cnino_sorcu(cb, [lang], searching, json)
		self.postMessage({
			kind: 'loader',
			cmene: 'loaded',
		})
	},
}

async function jufra({ bapli }) {
	if (bapli) db.run(`delete from tejufra`)
	//tejufra
	const stmt = db.prepare(`SELECT count(jufra) as klani FROM tejufra`)
	stmt.step()
	const nitejufra = stmt.getAsObject().klani
	stmt.free()
	if (nitejufra === 0 || bapli) {
		let json = {}
		const url = `/sutysisku/lojban/tejufra.json?sisku=${new Date().getTime()}`
		const response = await fetch(url)
		if (response.ok) json = await response.json()
		else console.log({ event: 'HTTP error', status: response.status, url })

		const stmt = db.prepare(`insert into tejufra (bangu, jufra) values(?,?)`)
		Object.keys(json).forEach((key) => {
			stmt.run([key, JSON.stringify(json[key])])
		})
		console.log({ event: 'Locales fully updated' })
	}
}
function chunkArray(myArray, chunk_size, lang) {
	let index = 0
	const arrayLength = myArray.length
	let tempArray = []

	for (index = 0; index < arrayLength; index += chunk_size) {
		const myChunk = myArray.slice(index, index + chunk_size)
		tempArray.push(myChunk.map((def) => addCache(def, lang)))
	}

	return tempArray
}

function addCache(def, tegerna) {
	if (def.cache) {
		if (def.w) def.cache = [...new Set(def.cache)]
		return { bangu: tegerna, ...def }
	}
	let cache
	if (Array.isArray(def.g)) def.g = def.g.join(';')
	cache = [def.w, def.s, def.g, def.d, def.n]
		.concat(def.r || [])
		.filter(Boolean)
		.map((i) => i.replace(/\$[a-z]+_\{.*?\}\$/g, ''))
		.join(';')
		.toLowerCase()
	const cache2 = cache
		.replace(
			/[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－／（）々仝ヽヾゝゞ〃〱〲〳〵〴〵「」『』（）〔〕［］｛｝｟｠〈〉《》【】〖〗〘〙〚〛ッー゛゜。、・゠＝〆〜…‥ヶ•◦﹅﹆※＊〽〓♪♫♬♩〇〒〶〠〄再⃝ⓍⓁⓎ]/g,
			';'
		)
		.split(';')
	cache = cache.replace(
		/[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－（）]/g,
		';'
	)
	cache = `${cache};${cache.replace(/h/g, "'")}`.split(';')
	cache = [...new Set(cache.concat(cache2))].filter(Boolean)

	return { bangu: tegerna, ...def, cache }
}

const blobChunkLength = 5
async function cnino_sorcu(cb, langsToUpdate, searching, json) {
	langsToUpdate = [...new Set(langsToUpdate)]
	await jufra({ bapli: true })
	fancu.tejufra(searching, (results) => {
		self.postMessage({
			kind: 'fancu',
			cmene: 'tejufra',
			bangu: searching.bangu,
			results,
		})
	})

	//for each lang download dump
	let langs = langsToUpdate || sufficientLangs(searching)
	langs = langs
		.filter((lang) => lang == searching.bangu)
		.concat(langs.filter((lang) => lang != searching.bangu))
	console.log({
		event: 'Preparing imports into the database',
		languages: langsToUpdate,
	})

	while (langs.length > 0) {
		if (sesisku_bangu) {
			const stmt = db.prepare(
				`SELECT count(*) as klani FROM langs_ready where bangu=?`
			)
			stmt.bind([sesisku_bangu])
			stmt.step()
			const savedLang_next = stmt.getAsObject().klani
			stmt.free()
			if (!savedLang_next) langs = [...new Set([sesisku_bangu].concat(langs))]
			sesisku_bangu = null
		}
		const lang = langs[0]
		langs = langs.slice(1)

		let completedRows = 0
		console.log({ event: 'Updating the language', language: lang })

		self.postMessage({
			kind: 'loader',
			cmene: 'loading',
			completedRows: 12 + (Math.random() - 0.5) * 3,
			totalRows: 100,
			bangu: supportedLangs[lang].n,
		})
		for (let i = 0; i < blobChunkLength; i++) {
			cb(`downloading ${lang}-${i}.bin dump`)
			const url = `/sutysisku/data/parsed-${lang}-${i}.bin?sisku=${new Date().getTime()}`
			const response = await fetch(url)
			let json
			if (response.ok) {
				const blob = await response.arrayBuffer()

				const decompressedData = Buffer.from(decompress(Buffer.from(blob)))
				json = JSON.parse(decompressedData)
				let rows = json.data.data[0].rows
				const totalRows = json.data.tables[0].rowCount * blobChunkLength

				const chunkSize = 1000
				const all_rows = rows.length
				rows = chunkArray(rows, chunkSize, lang)
				const time = new Date()
				if (i === 0) {
					db.run(`delete from valsi where bangu=?`, [lang])
					db.run(`delete from langs_ready where bangu=?`, [lang])
				}
				for (const toAdd of rows) {
					db.exec('BEGIN TRANSACTION')
					let stmt = db.prepare(
						'INSERT INTO valsi (d,n,w,r,bangu,s,t,g,cache) VALUES (?,?,?,?,?,?,?,?,?)'
					)
					for (let rec of toAdd) {
						const { d, n, w, r, bangu, s, t, g, cache } = rec
						stmt.run(
							[d, n, w, r, bangu, s, t, g, cache].map((i) =>
								typeof i == 'object' ? JSON.stringify(i || '') : i || ''
							)
						)
					}
					stmt.free()
					db.exec('COMMIT')
					completedRows += chunkSize
					self.postMessage({
						kind: 'loader',
						cmene: 'loading',
						completedRows,
						totalRows,
						bangu: supportedLangs[lang].n,
						banguRaw: lang,
					})
				}

				console.log({
					event: 'Records inserted',
					language: lang,
					'speed, records/sec': (
						(all_rows * 1000) /
						(new Date() - time)
					).toFixed(2),
				})
			} else {
				console.log({ event: 'HTTP error', status: response.status, url })
				break
			}
		}
		const stmt = db.prepare(
			`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`
		)
		stmt.bind([lang, json[lang]])
		stmt.step()
		const savedLang = stmt.getAsObject().klani
		stmt.free()

		if (!savedLang) {
			const stmt = db.prepare(
				`insert into langs_ready (bangu,timestamp) values(?,?)`
			)
			stmt.run([lang, json[lang]])
			stmt.free()
		}
		cb(`imported ${lang}-*.bin files at ${new Date().toISOString()}`)
		self.postMessage({
			kind: 'loader',
			cmene: 'loading',
			completedRows,
			totalRows: completedRows,
			bangu: supportedLangs[lang].n,
			banguRaw: lang,
		})
	}
	db.run(`pragma optimize;`)
	return langsToUpdate
}

//sisku

let leijufra = {
	xuzganalojudri: '',
	bangudecomp: '',
}

function getCachedDefinitions({ query, bangu, mapti_vreji }) {
	let result = []
	if (mapti_vreji)
		result = mapti_vreji.filter(
			(i) =>
				i.bangu === bangu &&
				[i.w, i.d].map((_) => _.toLowerCase()).includes(query.toLowerCase())
		)
	if (result.length === 0)
		result = runQuery(
			`SELECT * FROM valsi where bangu=$bangu and (w=$query COLLATE NOCASE or d=$query COLLATE NOCASE)`,
			{ $bangu: bangu, $query: query.toLowerCase() }
		)
	return result
}

async function cnanosisku({
	query_apos,
	query,
	bangu,
	versio,
	mapti_vreji,
	multi,
	seskari,
	secupra_vreji,
	queryDecomposition,
}) {
	let rows
	if (versio === 'selmaho') {
		if (bangu === 'muplis') {
			rows = runQuery(`SELECT * FROM valsi where s = ? and bangu=?`, [
				query,
				bangu,
			])
		} else {
			rows = runQuery(`SELECT * FROM valsi where s like ? and bangu=?`, [
				query + '%',
				bangu,
			]).filter(
				(valsi) =>
					typeof valsi.s === 'string' &&
					new RegExp(`^${query}[0-9]*[a-z]*$`).test(valsi.s)
			)
		}
	} else if (seskari === 'fanva') {
		rows = runQuery(`SELECT * FROM valsi where w= ?`, [query_apos]).sort(
			(a, b) => {
				if (a.bangu === bangu) {
					return -1
				}
				if (supportedLangs[a.bangu].searchPriority) {
					return 0
				}
				return 1
			}
		)
	} else if (queryDecomposition.length > 1) {
		const array = [...queryDecomposition, query_apos]
			.map((i) => `'${i.replace(/'/g, "''")}'`)
			.join(',')
		const arrayLength = [...new Set(queryDecomposition)].length
		const query = `select d,n,w,r,bangu,s,t,g,count(ex) as no from (select distinct valsi.d as d,valsi.n as n,valsi.w as w,valsi.r as r,valsi.bangu as bangu,valsi.s as s,valsi.t as t,valsi.g as g,json_each.value as ex from valsi,json_each(valsi.cache) where json_each.value in (${array}) and bangu='${bangu}') as k
			group by d,n,w,r,bangu,s,t,g
			having no/${arrayLength}>=0.5
			order by no desc
			;`

		rows = runQuery(query, [])
		const rows2 = runQuery(
			`select distinct d,n,w,r,bangu,s,t,g from valsi,json_each(valsi.cache) where (w like $query or json_each.value like $query) and (bangu = $bangu or bangu like $bangu)`,
			{ $query: '%' + query_apos + '%', $bangu: bangu }
		)
		rows = rows.concat(rows2)
	} else {
		//normal search
		rows = runQuery(
			`select distinct d,n,w,r,bangu,s,t,g from valsi,json_each(valsi.cache) where (w like $query or json_each.value like $query) and (bangu = $bangu or bangu like $bangu)`,
			{ $query: '%' + query_apos + '%', $bangu: bangu }
		)
	}
	rows = rows
		.map((el) => {
			const { cache, ...rest } = el
			return rest
		})
		.sort((a, b) => {
			if (supportedLangs[a.bangu].searchPriority) {
				return -1
			}
			if (supportedLangs[b.bangu].searchPriority) {
				return 1
			}
			return 0
		})
	mapti_vreji = mapti_vreji.slice().concat(rows)
	if (seskari === 'fanva' || bangu === 'muplis') {
		return { result: mapti_vreji, decomposed: false }
	}
	const { result, decomposed } = await sortthem({
		query_apos,
		query,
		bangu,
		mapti_vreji,
		seskari,
		secupra_vreji,
	})

	const allMatches = result
	if (multi) return { result: allMatches[0], decomposed }
	if (allMatches[0].length === 0) {
		allMatches[0] = (await jmina_ro_cmima_be_lehivalsi({ query, bangu })) || []
	}
	if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
		let vlazahumei = /^[A-Zh]+[0-9\*]+$/.test(query)
			? []
			: julne_setca_lotcila(
				await shortget({
					valsi: query_apos,
					secupra: [],
					bangu,
					cachedDefinitions: getCachedDefinitions({
						query: query_apos,
						bangu,
						mapti_vreji,
					}),
				})
			)
		if (bangu === 'muplis' || !leijufra.xuzganalojudri) {
			vlazahumei = vlazahumei.filter(({ d }) => !d || !d.nasezvafahi)
		}
		if (vlazahumei.length <= 1)
			return { result: vlazahumei.concat(allMatches[0]), decomposed }
		const e = {
			result: allMatches[1].concat(
				[
					{
						t: leijufra.bangudecomp,
						ot: "vlaza'umei",
						w: query,
						rfs: vlazahumei,
					},
				],
				allMatches[2]
			),
			decomposed,
		}
		return e
	}
	if (allMatches[0][0].w === query_apos) {
		//full match
		const [type, parsedWord] = maklesi_levalsi(allMatches[0][0].w)
		if (type.indexOf("fu'ivla") >= 0 && parsedWord.indexOf('-') >= 0) {
			const pseudoRafsi = parsedWord.split('-')[0]
			const selrafsi = runQuery(
				`SELECT * FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`,
				[pseudoRafsi, bangu]
			)
			allMatches[0][0].rfs = selrafsi
		}
	}

	return { result: allMatches[0], decomposed }
}

function sortMultiDimensional(a, b) {
	if (!a.d) a.d = ''
	if (!b.d) b.d = ''
	return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
}

function cmaxesParse({ tegerna }, callback) {
	try {
		let parsed = (0,cmaxes.parse)(tegerna.toLowerCase())
		parsed = parsed.filter((el) => el[0] !== 'drata')
		return callback(parsed)
	} catch (error) { }
	return callback([])
}

function reconcatenate(selsku) {
	try {
		let parsed = (0,cmaxes.parse)(selsku.toLowerCase())
		parsed = parsed.filter((el) => el[0] !== 'drata')
		const reconcatenated = parsed.map((el) => el[1]).join(' ')
		return { parsed, reconcatenated }
	} catch (error) { }
	return { parsed: [], reconcatenated: selsku }
}

function maklesi_levalsi(selsku) {
	let reconcatenated = selsku
	if (!leijufra.xuzganalojudri || selsku.search(/[^aeiouyAEIOY]'/) > -1)
		return ['', selsku]
	try {
		const { parsed: parsedString, reconcatenated } = reconcatenate(selsku)
		const oddEls = parsedString.filter((_, index) => index % 2 == 1)
		if (oddEls.length > 0 && oddEls.every((el) => el[0] == 'zei'))
			return ['zei-lujvo', reconcatenated]
		if (parsedString.length == 1) return parsedString[0]
		if (
			parsedString.length > 0 &&
			parsedString.every((el) => el[0] === 'cmavo')
		)
			return ['cmavo-compound', reconcatenated]
		if (parsedString.length > 1) return ['phrase', reconcatenated]
	} catch (e) { }
	return ['', reconcatenated]
}

function mevuhilevelujvo(tegerna) {
	if (!leijufra.xuzganalojudri) return
	if (tegerna.includes(' zei ')) return ['@'].concat(tegerna.split(' '))
	let text
	try {
		text = (0,cmaxes.parse)(tegerna).toString().split(',')
	} catch (err) {
		return
	}
	if (!['lujvo'].includes(text[0]) || text.length !== 2) return
	return text[1].split('-')
}

function setca_lotcila(def) {
	if ([undefined, ''].includes(def.t))
		def.t =
			def.bangu !== 'muplis' && leijufra.xuzganalojudri
				? maklesi_levalsi(def.w)[0]
				: ''
	return def
}

function decompose(selsku) {
	return leijufra.xuzganalojudri
		? reconcatenate(selsku)
			.reconcatenated.replace(/ zei /g, '_zei_')
			.split(' ')
			.map((b) => b.replace(/_zei_/g, ' zei ').replace(/-/g, ''))
		: selsku.split(' ')
}

function julne_setca_lotcila(a) {
	return a.reduce((b, n) => {
		if (n) b.push(setca_lotcila(n))
		return b
	}, [])
}

async function sohivalsi({ decomposed, bangu, mapti_vreji }) {
	let secupra = []
	for (let valsi_index = 0; valsi_index < decomposed.length; valsi_index++) {
		for (
			let valsi2_index = decomposed.length - 1;
			valsi2_index >= valsi_index;
			valsi2_index--
		) {
			const o = decomposed.slice(valsi_index, valsi2_index + 1).join(' ')
			const cachedDefinitions = getCachedDefinitions({
				bangu,
				mapti_vreji,
				query: o,
			})
			secupra = await shortget({ valsi: o, secupra, bangu, cachedDefinitions })
		}
	}
	return secupra
}

async function jmina_ro_cmima_be_lehivalsi({ query, def, bangu }) {
	let vuhi_le_ve_lujvo = mevuhilevelujvo(query)
	if (!vuhi_le_ve_lujvo) return def ? [def] : []
	let vuhi_le_valsi = []
	if (vuhi_le_ve_lujvo[0] === '@') {
		vuhi_le_valsi = vuhi_le_ve_lujvo.slice(1).map((i) => ({
			w: i,
			d: { nasezvafahi: true },
		}))
		for (let j = 0; j < vuhi_le_valsi.length; j++) {
			const le_valsi = vuhi_le_valsi[j].w
			const le_se_skicu_veljvo = runQuery(
				`SELECT * FROM valsi where w = ? and bangu=? limit 1`,
				[le_valsi, bangu]
			)[0]

			if (le_se_skicu_veljvo) {
				vuhi_le_valsi[j] = le_se_skicu_veljvo
				vuhi_le_valsi[j]['w'] = le_valsi
			}
		}
	} else {
		for (const ji in vuhi_le_ve_lujvo) {
			const rf = runQuery(
				`SELECT * FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`,
				[vuhi_le_ve_lujvo[ji], bangu]
			)[0]

			if (rf) {
				vuhi_le_valsi.push(rf)
			} else if (vuhi_le_ve_lujvo[ji].length > 2) {
				vuhi_le_valsi = vuhi_le_valsi.concat([
					{
						t: '',
						d: { nasezvafahi: true },
						w: vuhi_le_ve_lujvo[ji],
						r: [vuhi_le_ve_lujvo[ji]],
					},
				])
			}
		}
	}
	const aw = julne_setca_lotcila(vuhi_le_valsi) // .filter(function(i){return !i.d.nasezvafahi});
	return [
		{
			t: aw.length > 0 ? 'lujvo' : maklesi_levalsi(query)[0],
			w: query,
			d: { nasezvafahi: true },
			rfs: aw,
		},
	]
}

async function shortget({
	valsi,
	secupra,
	nasisku_filohipagbu,
	bangu,
	cachedDefinitions,
}) {
	const definitions = cachedDefinitions
	if (definitions.length > 0) return secupra.concat(definitions)
	if (!nasisku_filohipagbu) {
		if (valsi.replace(/ zei /g, '-zei-').split(' ').length === 1) {
			const valsi_giheklesi = maklesi_levalsi(valsi)
			if (
				valsi_giheklesi[0] === 'cmavo-compound' ||
				valsi_giheklesi[0] === 'zei-lujvo'
			) {
				const words = valsi_giheklesi[1].split(' ')
				for (const word of words) {
					secupra = await shortget({
						valsi: word,
						secupra,
						nasisku_filohipagbu: true,
						bangu,
						cachedDefinitions,
					})
				}
			} else if (valsi_giheklesi[0] !== '') {
				for (const word of valsi_giheklesi.filter(
					(_, index) => index % 2 !== 0
				)) {
					secupra = await shortget({
						valsi: word.replace(/-/g, ''),
						secupra,
						nasisku_filohipagbu: true,
						bangu,
						cachedDefinitions,
					})
				}
			}
		} else {
			//several words
			let vuhilevelujvo = mevuhilevelujvo(valsi)
			if ((vuhilevelujvo || [])[0] === '@') {
				vuhilevelujvo = vuhilevelujvo.slice(1)

				for (let j = 0; j < vuhilevelujvo.length; j++) {
					const le_valsi = vuhilevelujvo[j]
					const le_se_skicu_valsi = runQuery(
						`SELECT * FROM valsi where w = ? and bangu=? limit 1`,
						[le_valsi, bangu]
					)[0]

					if (le_se_skicu_valsi) {
						vuhilevelujvo[j] = le_se_skicu_valsi
						vuhilevelujvo[j]['w'] = le_valsi
					}
				}
				secupra.concat(vuhi_le_valsi)
			} else if (vuhilevelujvo) {
				for (const r of vuhilevelujvo) {
					const foundRafsi = runQuery(
						`SELECT value FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`,
						[r, bangu]
					)[0]
					if (foundRafsi) secupra.push(foundRafsi)
				}
			}
		}
	} else {
		let ff = await jmina_ro_cmima_be_lehivalsi({ query: valsi, bangu })
		ff = ff[0] && ff[0].rfs ? ff[0].rfs : undefined
		secupra = secupra.concat([
			{ t: '', d: { nasezvafahi: true }, w: valsi, rfs: ff },
		])
	}
	return secupra
}

function isCoreWord(def) {
	return ['gismu', 'cmavo'].includes(def.t)
}

function defaultPriorityGroups() {
	return {
		wordFullMatch: [],
		wordFullMatchAdditional: [],
		glossMatch: [],
		rafsiMatch: [],
		wordSemiMatch: [],
		selmahoFullMatch: [],
		selmahoSemiMatch: [],
		oneOfSelmahosFullMatch: [],
		oneOfSelmahosSemiMatch: [],
		querySemiMatch: [],
		defGoodMatch: [],
		defInsideMatch: [],
		otherMatch: [],
	}
}

async function sortthem({
	mapti_vreji,
	query,
	bangu,
	query_apos,
	seskari,
	secupra_vreji,
}) {
	let decomposed = false
	let searchPriorityGroups = defaultPriorityGroups()
	for (let i = 0; i < mapti_vreji.length; i++) {
		const def = setca_lotcila(mapti_vreji[i]) // todo: optimize for phrases
		if (def) {
			if (def.w === 'prenu') {
				console.log(def)
			}
			if (def.w === query || def.w === query_apos) {
				if (!supportedLangs[def.bangu].noRafsi) {
					def.rfs = JSON.parse(
						JSON.stringify(
							julne_setca_lotcila(
								await sohivalsi({
									decomposed: decompose(def.w),
									bangu,
									mapti_vreji,
								})
							)
						)
					).filter(({ w }) => w !== def.w)
					decomposed = true
					if (def.rfs.length === 0) {
						def.rfs = (
							await jmina_ro_cmima_be_lehivalsi({
								query: def.w,
								def: def,
								bangu,
							})
						)[0].rfs
					}
				}
				if (def.bangu == bangu) searchPriorityGroups.wordFullMatch.push(def)
				else searchPriorityGroups.wordFullMatchAdditional.push(def)
			} else if (def.g && def.g.split(';').includes(query)) {
				searchPriorityGroups.glossMatch.push(def)
			} else if (def.r && def.r.join(' ').search(`\\b${query}\\b`) >= 0) {
				searchPriorityGroups.rafsiMatch.push(def)
			} else if (def.w.search(`(^| )(${query_apos}|${query})( |$)`) >= 0) {
				searchPriorityGroups.wordSemiMatch.push(def)
			} else if (def.s && typeof def.s === 'string' && def.s === query) {
				searchPriorityGroups.selmahoFullMatch.push(def)
			} else if (
				def.s &&
				typeof def.s === 'string' &&
				def.s.indexOf(query) === 0
			) {
				searchPriorityGroups.selmahoSemiMatch.push(def)
			} else if (def.s && Array.isArray(def.s) && def.s.includes(query)) {
				searchPriorityGroups.oneOfSelmahosFullMatch.push(def)
			} else if (
				def.s &&
				Array.isArray(def.s) &&
				def.s.filter((i) => i.indexOf(query) === 0).length > 0
			) {
				searchPriorityGroups.oneOfSelmahosSemiMatch.push(def)
			} else if (
				(def.g &&
					def.g.search(
						`(\\b(${query_apos}|${query}))|((${query_apos}|${query})\\b)`
					) >= 0) ||
				(def.w &&
					def.w.search(
						`(\\b(${query_apos}|${query}))|((${query_apos}|${query})\\b)`
					) >= 0)
			) {
				searchPriorityGroups.querySemiMatch.push(def)
			} else if (def.d && typeof def.d === 'string') {
				if (def.d.toLowerCase().search(`^${query}\\b`) >= 0) {
					searchPriorityGroups.defGoodMatch.push(def)
				} else if (def.d.toLowerCase().search(`\\b${query}\\b`) >= 0) {
					searchPriorityGroups.defInsideMatch.push(def)
				} else {
					searchPriorityGroups.otherMatch.push(def)
				}
			} else {
				searchPriorityGroups.otherMatch.push(def)
			}
		}
	}

	let firstMatches
	let secondMatches
	if (seskari === 'catni') {
		const searchPriorityGroups_unofficial_words = defaultPriorityGroups()
		const searchPriorityGroups_official_words = defaultPriorityGroups()
		Object.keys(searchPriorityGroups).forEach((group) => {
			searchPriorityGroups[group].forEach((def) => {
				if (isCoreWord(def))
					searchPriorityGroups_official_words[group].push(def)
				else searchPriorityGroups_unofficial_words[group].push(def)
			})
		})
		firstMatches = secupra_vreji.concat(
			searchPriorityGroups.wordFullMatch,
			searchPriorityGroups.wordFullMatchAdditional
		)
		secondMatches = [].concat(
			searchPriorityGroups_official_words.glossMatch,
			searchPriorityGroups_official_words.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups_official_words.defGoodMatch,
			searchPriorityGroups_official_words.defInsideMatch,
			searchPriorityGroups_official_words.wordSemiMatch,
			searchPriorityGroups_official_words.querySemiMatch,
			searchPriorityGroups_unofficial_words.glossMatch,
			searchPriorityGroups_unofficial_words.selmahoFullMatch,
			searchPriorityGroups_unofficial_words.wordSemiMatch,
			searchPriorityGroups_unofficial_words.querySemiMatch,
			searchPriorityGroups_unofficial_words.defGoodMatch,
			searchPriorityGroups_unofficial_words.defInsideMatch,
			searchPriorityGroups_official_words.otherMatch,
			searchPriorityGroups_unofficial_words.otherMatch
		)
	} else if (seskari === 'cnano') {
		firstMatches = secupra_vreji.concat(
			searchPriorityGroups.wordFullMatch,
			searchPriorityGroups.glossMatch,
			searchPriorityGroups.wordFullMatchAdditional
		)
		secondMatches = [].concat(
			searchPriorityGroups.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups.wordSemiMatch,
			searchPriorityGroups.querySemiMatch,
			searchPriorityGroups.defGoodMatch,
			searchPriorityGroups.defInsideMatch,
			searchPriorityGroups.otherMatch
		)
	} else {
		firstMatches = secupra_vreji.concat(
			searchPriorityGroups.wordFullMatch,
			searchPriorityGroups.glossMatch,
			searchPriorityGroups.wordFullMatchAdditional
		)
		secondMatches = [].concat(
			searchPriorityGroups.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups.wordSemiMatch,
			searchPriorityGroups.querySemiMatch,
			searchPriorityGroups.defGoodMatch,
			searchPriorityGroups.defInsideMatch,
			searchPriorityGroups.otherMatch
		)
	}
	// if (firstMatches && firstMatches.w === query_apos) {
	//   for (let a = 1; a < firstMatches.length; a++) {
	//     if (firstMatches[a].l && firstMatches[a].d === `{${query_apos}}`) {
	//       firstMatches.splice(a, 1)
	//       --a
	//     }
	//   }
	// }
	return {
		result: [firstMatches.concat(secondMatches), firstMatches, secondMatches],
		decomposed,
	}
}

async function sisku(searching, callback) {
	let {
		query,
		seskari,
		bangu,
		versio,
		leijufra: leijufra_incoming,
		loadingState,
	} = searching
	query = query.trim()
	//connect and do selects

	if (!leijufra.bangu) {
		const stmt = db.prepare(`SELECT jufra FROM tejufra where bangu=?`)
		let tef1 = {}
		if (bangu) {
			stmt.bind([bangu.toString()])
			stmt.step()
			try {
				tef1 = JSON.parse(stmt.getAsObject().jufra)
			} catch (error) { }
		}
		stmt.bind(['en'])
		stmt.step()
		stmt.free()

		if (tef1)
			Object.keys(tef1.window || {}).forEach((key) => {
				const subKey = key.replace('window.', '')
				leijufra[subKey] = tef1.window[key]
			})
	}

	leijufra = { ...leijufra, ...leijufra_incoming }
	if (query.length === 0) return
	let secupra_vreji = []
	const query_apos = query.replace(/[h‘]/g, "'").toLowerCase()
	const queryDecomposition = decompose(query_apos)

	if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
		const regexpedQuery = query.toLowerCase().replace(/'/g, "''")
		// const regexpedQueryPrecise = regexpedQuery.replace(/\^/g, '').replace(/\$/g, '').replace(/^(.*)$/g, '\\b$1\\b')
		let first1000 = runQuery(
			`SELECT * FROM valsi where bangu = ? and regexp('${regexpedQuery}',w) limit 1000`,
			[bangu]
		)

		secupra_vreji = julne_setca_lotcila(
			(
				await sortthem({
					query_apos,
					query,
					bangu,
					mapti_vreji: first1000,
					seskari,
					secupra_vreji: [],
				})
			).result[0]
		)
	} else if (seskari === 'rimni') {
		secupra_vreji = await siskurimni({ query, bangu })
	} else if (bangu !== 'muplis' && queryDecomposition.length > 1) {
		const { result, decomposed } = await cnanosisku({
			mapti_vreji: [],
			multi: true,
			query,
			bangu,
			query_apos,
			seskari,
			secupra_vreji,
			queryDecomposition,
		})
		secupra_vreji = result
		if (!decomposed) {
			secupra_vreji.unshift({
				t: 'bangudecomp',
				ot: "vlaza'umei",
				w: query,
				rfs: julne_setca_lotcila(
					await sohivalsi({ decomposed: queryDecomposition, bangu })
				),
			})
		}
	} else {
		const { result } = await cnanosisku({
			mapti_vreji: [],
			multi: false,
			query,
			bangu,
			versio,
			query_apos,
			seskari,
			secupra_vreji,
			queryDecomposition,
		})
		secupra_vreji = result
	}
	callback({ results: secupra_vreji })
}

function krulermorna(t) {
	return `.${t
		.replace(/\./g, '')
		.replace(/^/, '.')
		.replace(/h/g, "'")
		.toLowerCase()
		.replace(/([aeiouy\.])u([aeiouy])/g, '$1w$2')
		.replace(/([aeiouy\.])i([aeiouy])/g, '$1ɩ$2')
		.replace(/au/g, 'ḁ')
		.replace(/ai/g, 'ą')
		.replace(/ei/g, 'ę')
		.replace(/oi/g, 'ǫ')
		.replace(/\./g, '')}`
}

async function siskurimni({ query, bangu }) {
	if (query.length === 0) return
	const rimni = [[], [], [], [], [], [], [], [], []]
	let query_apos
	let queryF
	let queryR
	function cupra_lo_porsi(a) {
		for (let i = 0; i < a.length; i++) {
			const def = setca_lotcila(a[i]) // todo: optimize for phrases
			if (!def) continue
			const docw = krulermorna(def.w)
				.replace(/([aeiouḁąęǫy])/g, '$1-')
				.split('-')
				.slice(-3)
			if (queryR && docw[0].slice(-1) !== queryR[0].slice(-1)) continue
			const right = docw[1].slice(-1)
			const reversal =
				docw[1].slice(-3, -1) ===
				queryF[1].slice(-3, -1).split('').reverse().join('')
			const left = queryF[1].slice(-1)
			let sli = false
			if (
				(left === 'a' && right.search('[eao]') >= 0) ||
				(left === 'e' && right.search('[iea]') >= 0) ||
				(left === 'i' && right.search('[ie]') >= 0) ||
				(left === 'o' && right.search('[aou]') >= 0) ||
				(left === 'u' && right.search('[aou]') >= 0)
			) {
				sli = true
			}
			if (krulermorna(def.w) === query) {
				rimni[0].push(def)
				continue
			} else if (docw[2] || '' === queryR[2] || '') {
				// if (queryR[2])
				if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0 &&
					left === right
				) {
					rimni[1].push(def)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0 &&
					sli
				) {
					rimni[2].push(def)
				} else if (
					(docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
					left === right
				) {
					rimni[3].push(def)
				} else if (
					(docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
					sli
				) {
					rimni[4].push(def)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					sli &&
					reversal
				) {
					rimni[5].push(def)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0
				) {
					rimni[6].push(def)
				}
			} else if (
				queryR[1] &&
				(docw[0].match(queryR[0]) || []).length > 0 &&
				(docw[1].match(queryR[1]) || []).length > 0
			) {
				rimni[7].push(def)
			} else {
				rimni[8].push(def)
			}
		}
		const sortArray = ({ ar }) => {
			if (ar.length === 0) return []
			const gism = []
			const expgism = []
			const cmav = []
			const expcmav = []
			const drata = []
			for (let c = 0; c < ar.length; c++) {
				if (ar[c].t === 'gismu') {
					gism.push(ar[c])
				} else if (ar[c].t === 'experimental gismu') {
					expgism.push(ar[c])
				} else if (ar[c].t === 'cmavo') {
					cmav.push(ar[c])
				} else if (ar[c].t === 'experimental cmavo') {
					expcmav.push(ar[c])
				} else {
					drata.push(ar[c])
				}
			}
			return gism
				.sort(sortMultiDimensional)
				.concat(
					expgism.sort(sortMultiDimensional),
					cmav.sort(sortMultiDimensional),
					expcmav.sort(sortMultiDimensional),
					drata.sort(sortMultiDimensional)
				)
		}

		return rimni.reduce((list, x) => list.concat(sortArray({ ar: x })), [])
	}

	function regexify(t) {
		return t
			.replace(/[lmnr]/g, '[lmnr]')
			.replace(/[ɩw]/g, '[ɩw]')
			.replace(/[pb]/g, '[pb]')
			.replace(/[fv]/g, '[fv]')
			.replace(/[td]/g, '[td]')
			.replace(/[sz]/g, '[sz]')
			.replace(/[cj]/g, '[cj]')
			.replace(/[kg]/g, '[kg]')
			.replace(/x/g, '[xk]')
	}

	queryR = krulermorna(query)
		.replace(/([aeiouḁąęǫy])/g, '$1-')
		.split('-')
		.slice(-3)
	queryF = queryR.slice()
	if (queryR.length >= 2) {
		queryR[1] = queryR[1].replace(/[aeiouḁąęǫy]/, '[aeiouḁąęǫy]')
	}
	let r = /.*([aeiouḁąęǫy])/.exec(queryR[0])
	if (r === null) return []
	queryR[0] = r[1]
	if (queryR.length === 2) {
		r = runQuery(`SELECT * FROM valsi where bangu=?`, [bangu]).filter(
			(valsi) => {
				const queryRn = krulermorna(valsi.w)
					.replace(/([aeiouḁąęǫy])/g, '$1-')
					.split('-')
					.slice(-3)
				if (
					queryRn.length === 2 &&
					queryRn[0].split('').slice(-1)[0] ===
					queryR[0].split('').slice(-1)[0] &&
					setca_lotcila(valsi)
				)
					return true
				return false
			}
		)
	} else {
		query_apos = regexify((queryR || []).join(''))
		r = runQuery(`SELECT * FROM valsi where bangu=?`, [bangu]).filter(
			({ w }) => {
				if (krulermorna(w).match(`${query_apos.toLowerCase()}$`)) return true
				return false
			}
		)
	}
	return cupra_lo_porsi(r)
}
aQueue.enqueue(initSQLDB)

self.postMessage({ kind: 'ready' })

})();

/******/ })()
;