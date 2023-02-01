(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function tl(t,e){const n=Object.create(null),l=t.split(",");for(let o=0;o<l.length;o++)n[l[o]]=!0;return e?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function el(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const l=t[n],o=ct(l)?Rs(l):el(l);if(o)for(const s in o)e[s]=o[s]}return e}else{if(ct(t))return t;if(st(t))return t}}const Ss=/;(?![^(]*\))/g,ks=/:([^]+)/,As=/\/\*.*?\*\//gs;function Rs(t){const e={};return t.replace(As,"").split(Ss).forEach(n=>{if(n){const l=n.split(ks);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function nl(t){let e="";if(ct(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const l=nl(t[n]);l&&(e+=l+" ")}else if(st(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ps=tl(Os);function yo(t){return!!t||t===""}const et={},qe=[],It=()=>{},Ls=()=>!1,Is=/^on[^a-z]/,mn=t=>Is.test(t),ll=t=>t.startsWith("onUpdate:"),gt=Object.assign,ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ms=Object.prototype.hasOwnProperty,z=(t,e)=>Ms.call(t,e),H=Array.isArray,De=t=>vn(t)==="[object Map]",Ns=t=>vn(t)==="[object Set]",U=t=>typeof t=="function",ct=t=>typeof t=="string",sl=t=>typeof t=="symbol",st=t=>t!==null&&typeof t=="object",wo=t=>st(t)&&U(t.then)&&U(t.catch),Fs=Object.prototype.toString,vn=t=>Fs.call(t),Ds=t=>vn(t).slice(8,-1),Hs=t=>vn(t)==="[object Object]",rl=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,on=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bs=/-(\w)/g,Ee=bn(t=>t.replace(Bs,(e,n)=>n?n.toUpperCase():"")),js=/\B([A-Z])/g,Oe=bn(t=>t.replace(js,"-$1").toLowerCase()),xo=bn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sn=bn(t=>t?`on${xo(t)}`:""),$e=(t,e)=>!Object.is(t,e),kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kl;const Us=()=>kl||(kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dt;class qo{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function $s(t){return new qo(t)}function Ks(t,e=Dt){e&&e.active&&e.effects.push(t)}const il=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Co=t=>(t.w&re)>0,To=t=>(t.n&re)>0,Ws=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=re},zs=t=>{const{deps:e}=t;if(e.length){let n=0;for(let l=0;l<e.length;l++){const o=e[l];Co(o)&&!To(o)?o.delete(t):e[n++]=o,o.w&=~re,o.n&=~re}e.length=n}},Fn=new WeakMap;let Fe=0,re=1;const Dn=30;let Ot;const me=Symbol(""),Hn=Symbol("");class al{constructor(e,n=null,l){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ks(this,l)}run(){if(!this.active)return this.fn();let e=Ot,n=oe;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,oe=!0,re=1<<++Fe,Fe<=Dn?Ws(this):Al(this),this.fn()}finally{Fe<=Dn&&zs(this),re=1<<--Fe,Ot=this.parent,oe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(Al(this),this.onStop&&this.onStop(),this.active=!1)}}function Al(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let oe=!0;const Eo=[];function Pe(){Eo.push(oe),oe=!1}function Le(){const t=Eo.pop();oe=t===void 0?!0:t}function _t(t,e,n){if(oe&&Ot){let l=Fn.get(t);l||Fn.set(t,l=new Map);let o=l.get(n);o||l.set(n,o=il()),So(o)}}function So(t,e){let n=!1;Fe<=Dn?To(t)||(t.n|=re,n=!Co(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function Jt(t,e,n,l,o,s){const r=Fn.get(t);if(!r)return;let c=[];if(e==="clear")c=[...r.values()];else if(n==="length"&&H(t)){const a=_o(l);r.forEach((p,u)=>{(u==="length"||u>=a)&&c.push(p)})}else switch(n!==void 0&&c.push(r.get(n)),e){case"add":H(t)?rl(n)&&c.push(r.get("length")):(c.push(r.get(me)),De(t)&&c.push(r.get(Hn)));break;case"delete":H(t)||(c.push(r.get(me)),De(t)&&c.push(r.get(Hn)));break;case"set":De(t)&&c.push(r.get(me));break}if(c.length===1)c[0]&&Bn(c[0]);else{const a=[];for(const p of c)p&&a.push(...p);Bn(il(a))}}function Bn(t,e){const n=H(t)?t:[...t];for(const l of n)l.computed&&Rl(l);for(const l of n)l.computed||Rl(l)}function Rl(t,e){(t!==Ot||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gs=tl("__proto__,__v_isRef,__isVue"),ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sl)),Vs=cl(),Ys=cl(!1,!0),Js=cl(!0),Ol=Qs();function Qs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=G(this);for(let s=0,r=this.length;s<r;s++)_t(l,"get",s+"");const o=l[e](...n);return o===-1||o===!1?l[e](...n.map(G)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pe();const l=G(this)[e].apply(this,n);return Le(),l}}),t}function cl(t=!1,e=!1){return function(l,o,s){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_isShallow")return e;if(o==="__v_raw"&&s===(t?e?fr:Lo:e?Po:Oo).get(l))return l;const r=H(l);if(!t&&r&&z(Ol,o))return Reflect.get(Ol,o,s);const c=Reflect.get(l,o,s);return(sl(o)?ko.has(o):Gs(o))||(t||_t(l,"get",o),e)?c:ht(c)?r&&rl(o)?c:c.value:st(c)?t?Io(c):Je(c):c}}const Zs=Ao(),Xs=Ao(!0);function Ao(t=!1){return function(n,l,o,s){let r=n[l];if(Se(r)&&ht(r)&&!ht(o))return!1;if(!t&&(!pn(o)&&!Se(o)&&(r=G(r),o=G(o)),!H(n)&&ht(r)&&!ht(o)))return r.value=o,!0;const c=H(n)&&rl(l)?Number(l)<n.length:z(n,l),a=Reflect.set(n,l,o,s);return n===G(s)&&(c?$e(o,r)&&Jt(n,"set",l,o):Jt(n,"add",l,o)),a}}function tr(t,e){const n=z(t,e);t[e];const l=Reflect.deleteProperty(t,e);return l&&n&&Jt(t,"delete",e,void 0),l}function er(t,e){const n=Reflect.has(t,e);return(!sl(e)||!ko.has(e))&&_t(t,"has",e),n}function nr(t){return _t(t,"iterate",H(t)?"length":me),Reflect.ownKeys(t)}const Ro={get:Vs,set:Zs,deleteProperty:tr,has:er,ownKeys:nr},lr={get:Js,set(t,e){return!0},deleteProperty(t,e){return!0}},or=gt({},Ro,{get:Ys,set:Xs}),ul=t=>t,yn=t=>Reflect.getPrototypeOf(t);function Ze(t,e,n=!1,l=!1){t=t.__v_raw;const o=G(t),s=G(e);n||(e!==s&&_t(o,"get",e),_t(o,"get",s));const{has:r}=yn(o),c=l?ul:n?hl:Ke;if(r.call(o,e))return c(t.get(e));if(r.call(o,s))return c(t.get(s));t!==o&&t.get(e)}function Xe(t,e=!1){const n=this.__v_raw,l=G(n),o=G(t);return e||(t!==o&&_t(l,"has",t),_t(l,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function tn(t,e=!1){return t=t.__v_raw,!e&&_t(G(t),"iterate",me),Reflect.get(t,"size",t)}function Pl(t){t=G(t);const e=G(this);return yn(e).has.call(e,t)||(e.add(t),Jt(e,"add",t,t)),this}function Ll(t,e){e=G(e);const n=G(this),{has:l,get:o}=yn(n);let s=l.call(n,t);s||(t=G(t),s=l.call(n,t));const r=o.call(n,t);return n.set(t,e),s?$e(e,r)&&Jt(n,"set",t,e):Jt(n,"add",t,e),this}function Il(t){const e=G(this),{has:n,get:l}=yn(e);let o=n.call(e,t);o||(t=G(t),o=n.call(e,t)),l&&l.call(e,t);const s=e.delete(t);return o&&Jt(e,"delete",t,void 0),s}function Ml(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Jt(t,"clear",void 0,void 0),n}function en(t,e){return function(l,o){const s=this,r=s.__v_raw,c=G(r),a=e?ul:t?hl:Ke;return!t&&_t(c,"iterate",me),r.forEach((p,u)=>l.call(o,a(p),a(u),s))}}function nn(t,e,n){return function(...l){const o=this.__v_raw,s=G(o),r=De(s),c=t==="entries"||t===Symbol.iterator&&r,a=t==="keys"&&r,p=o[t](...l),u=n?ul:e?hl:Ke;return!e&&_t(s,"iterate",a?Hn:me),{next(){const{value:f,done:h}=p.next();return h?{value:f,done:h}:{value:c?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function sr(){const t={get(s){return Ze(this,s)},get size(){return tn(this)},has:Xe,add:Pl,set:Ll,delete:Il,clear:Ml,forEach:en(!1,!1)},e={get(s){return Ze(this,s,!1,!0)},get size(){return tn(this)},has:Xe,add:Pl,set:Ll,delete:Il,clear:Ml,forEach:en(!1,!0)},n={get(s){return Ze(this,s,!0)},get size(){return tn(this,!0)},has(s){return Xe.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:en(!0,!1)},l={get(s){return Ze(this,s,!0,!0)},get size(){return tn(this,!0)},has(s){return Xe.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nn(s,!1,!1),n[s]=nn(s,!0,!1),e[s]=nn(s,!1,!0),l[s]=nn(s,!0,!0)}),[t,n,e,l]}const[rr,ir,ar,cr]=sr();function dl(t,e){const n=e?t?cr:ar:t?ir:rr;return(l,o,s)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?l:Reflect.get(z(n,o)&&o in l?n:l,o,s)}const ur={get:dl(!1,!1)},dr={get:dl(!1,!0)},pr={get:dl(!0,!1)},Oo=new WeakMap,Po=new WeakMap,Lo=new WeakMap,fr=new WeakMap;function hr(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gr(t){return t.__v_skip||!Object.isExtensible(t)?0:hr(Ds(t))}function Je(t){return Se(t)?t:pl(t,!1,Ro,ur,Oo)}function mr(t){return pl(t,!1,or,dr,Po)}function Io(t){return pl(t,!0,lr,pr,Lo)}function pl(t,e,n,l,o){if(!st(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const r=gr(t);if(r===0)return t;const c=new Proxy(t,r===2?l:n);return o.set(t,c),c}function Ce(t){return Se(t)?Ce(t.__v_raw):!!(t&&t.__v_isReactive)}function Se(t){return!!(t&&t.__v_isReadonly)}function pn(t){return!!(t&&t.__v_isShallow)}function Mo(t){return Ce(t)||Se(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function fl(t){return dn(t,"__v_skip",!0),t}const Ke=t=>st(t)?Je(t):t,hl=t=>st(t)?Io(t):t;function No(t){oe&&Ot&&(t=G(t),So(t.dep||(t.dep=il())))}function Fo(t,e){t=G(t),t.dep&&Bn(t.dep)}function ht(t){return!!(t&&t.__v_isRef===!0)}function Do(t){return Ho(t,!1)}function vr(t){return Ho(t,!0)}function Ho(t,e){return ht(t)?t:new br(t,e)}class br{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ke(e)}get value(){return No(this),this._value}set value(e){const n=this.__v_isShallow||pn(e)||Se(e);e=n?e:G(e),$e(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ke(e),Fo(this))}}function vt(t){return ht(t)?t.value:t}const yr={get:(t,e,n)=>vt(Reflect.get(t,e,n)),set:(t,e,n,l)=>{const o=t[e];return ht(o)&&!ht(n)?(o.value=n,!0):Reflect.set(t,e,n,l)}};function Bo(t){return Ce(t)?t:new Proxy(t,yr)}var jo;class wr{constructor(e,n,l,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jo]=!1,this._dirty=!0,this.effect=new al(e,()=>{this._dirty||(this._dirty=!0,Fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=l}get value(){const e=G(this);return No(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jo="__v_isReadonly";function xr(t,e,n=!1){let l,o;const s=U(t);return s?(l=t,o=It):(l=t.get,o=t.set),new wr(l,o,s||!o,n)}function se(t,e,n,l){let o;try{o=l?t(...l):t()}catch(s){wn(s,e,n)}return o}function Tt(t,e,n,l){if(U(t)){const s=se(t,e,n,l);return s&&wo(s)&&s.catch(r=>{wn(r,e,n)}),s}const o=[];for(let s=0;s<t.length;s++)o.push(Tt(t[s],e,n,l));return o}function wn(t,e,n,l=!0){const o=e?e.vnode:null;if(e){let s=e.parent;const r=e.proxy,c=n;for(;s;){const p=s.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,r,c)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){se(a,null,10,[t,r,c]);return}}_r(t,n,o,l)}function _r(t,e,n,l=!0){console.error(t)}let We=!1,jn=!1;const ft=[];let Bt=0;const Te=[];let Gt=null,fe=0;const Uo=Promise.resolve();let gl=null;function $o(t){const e=gl||Uo;return t?e.then(this?t.bind(this):t):e}function qr(t){let e=Bt+1,n=ft.length;for(;e<n;){const l=e+n>>>1;ze(ft[l])<t?e=l+1:n=l}return e}function ml(t){(!ft.length||!ft.includes(t,We&&t.allowRecurse?Bt+1:Bt))&&(t.id==null?ft.push(t):ft.splice(qr(t.id),0,t),Ko())}function Ko(){!We&&!jn&&(jn=!0,gl=Uo.then(zo))}function Cr(t){const e=ft.indexOf(t);e>Bt&&ft.splice(e,1)}function Tr(t){H(t)?Te.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?fe+1:fe))&&Te.push(t),Ko()}function Nl(t,e=We?Bt+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function Wo(t){if(Te.length){const e=[...new Set(Te)];if(Te.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,l)=>ze(n)-ze(l)),fe=0;fe<Gt.length;fe++)Gt[fe]();Gt=null,fe=0}}const ze=t=>t.id==null?1/0:t.id,Er=(t,e)=>{const n=ze(t)-ze(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zo(t){jn=!1,We=!0,ft.sort(Er);const e=It;try{for(Bt=0;Bt<ft.length;Bt++){const n=ft[Bt];n&&n.active!==!1&&se(n,null,14)}}finally{Bt=0,ft.length=0,Wo(),We=!1,gl=null,(ft.length||Te.length)&&zo()}}function Sr(t,e,...n){if(t.isUnmounted)return;const l=t.vnode.props||et;let o=n;const s=e.startsWith("update:"),r=s&&e.slice(7);if(r&&r in l){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:f,trim:h}=l[u]||et;h&&(o=n.map(y=>ct(y)?y.trim():y)),f&&(o=n.map(_o))}let c,a=l[c=Sn(e)]||l[c=Sn(Ee(e))];!a&&s&&(a=l[c=Sn(Oe(e))]),a&&Tt(a,t,6,o);const p=l[c+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Tt(p,t,6,o)}}function Go(t,e,n=!1){const l=e.emitsCache,o=l.get(t);if(o!==void 0)return o;const s=t.emits;let r={},c=!1;if(!U(t)){const a=p=>{const u=Go(p,e,!0);u&&(c=!0,gt(r,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!s&&!c?(st(t)&&l.set(t,null),null):(H(s)?s.forEach(a=>r[a]=null):gt(r,s),st(t)&&l.set(t,r),r)}function xn(t,e){return!t||!mn(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Oe(e))||z(t,e))}let Pt=null,Vo=null;function fn(t){const e=Pt;return Pt=t,Vo=t&&t.type.__scopeId||null,e}function Wt(t,e=Pt,n){if(!e||t._n)return t;const l=(...o)=>{l._d&&Wl(-1);const s=fn(e);let r;try{r=t(...o)}finally{fn(s),l._d&&Wl(1)}return r};return l._n=!0,l._c=!0,l._d=!0,l}function An(t){const{type:e,vnode:n,proxy:l,withProxy:o,props:s,propsOptions:[r],slots:c,attrs:a,emit:p,render:u,renderCache:f,data:h,setupState:y,ctx:k,inheritAttrs:E}=t;let F,A;const N=fn(t);try{if(n.shapeFlag&4){const K=o||l;F=Ht(u.call(K,K,f,s,y,h,k)),A=a}else{const K=e;F=Ht(K.length>1?K(s,{attrs:a,slots:c,emit:p}):K(s,null)),A=e.props?a:kr(a)}}catch(K){Be.length=0,wn(K,t,1),F=ot(Yt)}let O=F;if(A&&E!==!1){const K=Object.keys(A),{shapeFlag:tt}=O;K.length&&tt&7&&(r&&K.some(ll)&&(A=Ar(A,r)),O=ie(O,A))}return n.dirs&&(O=ie(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,fn(N),F}const kr=t=>{let e;for(const n in t)(n==="class"||n==="style"||mn(n))&&((e||(e={}))[n]=t[n]);return e},Ar=(t,e)=>{const n={};for(const l in t)(!ll(l)||!(l.slice(9)in e))&&(n[l]=t[l]);return n};function Rr(t,e,n){const{props:l,children:o,component:s}=t,{props:r,children:c,patchFlag:a}=e,p=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return l?Fl(l,r,p):!!r;if(a&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(r[h]!==l[h]&&!xn(p,h))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:l===r?!1:l?r?Fl(l,r,p):!0:!!r;return!1}function Fl(t,e,n){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let o=0;o<l.length;o++){const s=l[o];if(e[s]!==t[s]&&!xn(n,s))return!0}return!1}function Or({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pr=t=>t.__isSuspense;function Lr(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Tr(t)}function sn(t,e){if(at){let n=at.provides;const l=at.parent&&at.parent.provides;l===n&&(n=at.provides=Object.create(l)),n[t]=e}}function Vt(t,e,n=!1){const l=at||Pt;if(l){const o=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return n&&U(e)?e.call(l.proxy):e}}const ln={};function rn(t,e,n){return Yo(t,e,n)}function Yo(t,e,{immediate:n,deep:l,flush:o,onTrack:s,onTrigger:r}=et){const c=at;let a,p=!1,u=!1;if(ht(t)?(a=()=>t.value,p=pn(t)):Ce(t)?(a=()=>t,l=!0):H(t)?(u=!0,p=t.some(O=>Ce(O)||pn(O)),a=()=>t.map(O=>{if(ht(O))return O.value;if(Ce(O))return _e(O);if(U(O))return se(O,c,2)})):U(t)?e?a=()=>se(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return f&&f(),Tt(t,c,3,[h])}:a=It,e&&l){const O=a;a=()=>_e(O())}let f,h=O=>{f=A.onStop=()=>{se(O,c,4)}},y;if(Ve)if(h=It,e?n&&Tt(e,c,3,[a(),u?[]:void 0,h]):a(),o==="sync"){const O=Si();y=O.__watcherHandles||(O.__watcherHandles=[])}else return It;let k=u?new Array(t.length).fill(ln):ln;const E=()=>{if(A.active)if(e){const O=A.run();(l||p||(u?O.some((K,tt)=>$e(K,k[tt])):$e(O,k)))&&(f&&f(),Tt(e,c,3,[O,k===ln?void 0:u&&k[0]===ln?[]:k,h]),k=O)}else A.run()};E.allowRecurse=!!e;let F;o==="sync"?F=E:o==="post"?F=()=>wt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),F=()=>ml(E));const A=new al(a,F);e?n?E():k=A.run():o==="post"?wt(A.run.bind(A),c&&c.suspense):A.run();const N=()=>{A.stop(),c&&c.scope&&ol(c.scope.effects,A)};return y&&y.push(N),N}function Ir(t,e,n){const l=this.proxy,o=ct(t)?t.includes(".")?Jo(l,t):()=>l[t]:t.bind(l,l);let s;U(e)?s=e:(s=e.handler,n=e);const r=at;ke(this);const c=Yo(o,s.bind(l),n);return r?ke(r):ve(),c}function Jo(t,e){const n=e.split(".");return()=>{let l=t;for(let o=0;o<n.length&&l;o++)l=l[n[o]];return l}}function _e(t,e){if(!st(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ht(t))_e(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)_e(t[n],e);else if(Ns(t)||De(t))t.forEach(n=>{_e(n,e)});else if(Hs(t))for(const n in t)_e(t[n],e);return t}function Mr(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{t.isMounted=!0}),es(()=>{t.isUnmounting=!0}),t}const qt=[Function,Array],Nr={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},setup(t,{slots:e}){const n=wi(),l=Mr();let o;return()=>{const s=e.default&&Zo(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const E of s)if(E.type!==Yt){r=E;break}}const c=G(t),{mode:a}=c;if(l.isLeaving)return Rn(r);const p=Dl(r);if(!p)return Rn(r);const u=Un(p,c,l,n);$n(p,u);const f=n.subTree,h=f&&Dl(f);let y=!1;const{getTransitionKey:k}=p.type;if(k){const E=k();o===void 0?o=E:E!==o&&(o=E,y=!0)}if(h&&h.type!==Yt&&(!he(p,h)||y)){const E=Un(h,c,l,n);if($n(h,E),a==="out-in")return l.isLeaving=!0,E.afterLeave=()=>{l.isLeaving=!1,n.update.active!==!1&&n.update()},Rn(r);a==="in-out"&&p.type!==Yt&&(E.delayLeave=(F,A,N)=>{const O=Qo(l,h);O[String(h.key)]=h,F._leaveCb=()=>{A(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return r}}},Fr=Nr;function Qo(t,e){const{leavingVNodes:n}=t;let l=n.get(e.type);return l||(l=Object.create(null),n.set(e.type,l)),l}function Un(t,e,n,l){const{appear:o,mode:s,persisted:r=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:k,onBeforeAppear:E,onAppear:F,onAfterAppear:A,onAppearCancelled:N}=e,O=String(t.key),K=Qo(n,t),tt=(B,lt)=>{B&&Tt(B,l,9,lt)},ut=(B,lt)=>{const X=lt[1];tt(B,lt),H(B)?B.every(dt=>dt.length<=1)&&X():B.length<=1&&X()},bt={mode:s,persisted:r,beforeEnter(B){let lt=c;if(!n.isMounted)if(o)lt=E||c;else return;B._leaveCb&&B._leaveCb(!0);const X=K[O];X&&he(t,X)&&X.el._leaveCb&&X.el._leaveCb(),tt(lt,[B])},enter(B){let lt=a,X=p,dt=u;if(!n.isMounted)if(o)lt=F||a,X=A||p,dt=N||u;else return;let pt=!1;const Et=B._enterCb=$t=>{pt||(pt=!0,$t?tt(dt,[B]):tt(X,[B]),bt.delayedLeave&&bt.delayedLeave(),B._enterCb=void 0)};lt?ut(lt,[B,Et]):Et()},leave(B,lt){const X=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return lt();tt(f,[B]);let dt=!1;const pt=B._leaveCb=Et=>{dt||(dt=!0,lt(),Et?tt(k,[B]):tt(y,[B]),B._leaveCb=void 0,K[X]===t&&delete K[X])};K[X]=t,h?ut(h,[B,pt]):pt()},clone(B){return Un(B,e,n,l)}};return bt}function Rn(t){if(_n(t))return t=ie(t),t.children=null,t}function Dl(t){return _n(t)?t.children?t.children[0]:void 0:t}function $n(t,e){t.shapeFlag&6&&t.component?$n(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zo(t,e=!1,n){let l=[],o=0;for(let s=0;s<t.length;s++){let r=t[s];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===Rt?(r.patchFlag&128&&o++,l=l.concat(Zo(r.children,e,c))):(e||r.type!==Yt)&&l.push(c!=null?ie(r,{key:c}):r)}if(o>1)for(let s=0;s<l.length;s++)l[s].patchFlag=-2;return l}function vl(t){return U(t)?{setup:t,name:t.name}:t}const an=t=>!!t.type.__asyncLoader,_n=t=>t.type.__isKeepAlive;function Dr(t,e){Xo(t,"a",e)}function Hr(t,e){Xo(t,"da",e)}function Xo(t,e,n=at){const l=t.__wdc||(t.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(qn(e,l,n),n){let o=n.parent;for(;o&&o.parent;)_n(o.parent.vnode)&&Br(l,e,n,o),o=o.parent}}function Br(t,e,n,l){const o=qn(e,t,l,!0);ns(()=>{ol(l[e],o)},n)}function qn(t,e,n=at,l=!1){if(n){const o=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;Pe(),ke(n);const c=Tt(e,n,t,r);return ve(),Le(),c});return l?o.unshift(s):o.push(s),s}}const Qt=t=>(e,n=at)=>(!Ve||t==="sp")&&qn(t,(...l)=>e(...l),n),jr=Qt("bm"),ts=Qt("m"),Ur=Qt("bu"),$r=Qt("u"),es=Qt("bum"),ns=Qt("um"),Kr=Qt("sp"),Wr=Qt("rtg"),zr=Qt("rtc");function Gr(t,e=at){qn("ec",t,e)}function ue(t,e,n,l){const o=t.dirs,s=e&&e.dirs;for(let r=0;r<o.length;r++){const c=o[r];s&&(c.oldValue=s[r].value);let a=c.dir[l];a&&(Pe(),Tt(a,n,8,[t.el,c,t,e]),Le())}}const Vr=Symbol(),Kn=t=>t?ps(t)?xl(t)||t.proxy:Kn(t.parent):null,He=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kn(t.parent),$root:t=>Kn(t.root),$emit:t=>t.emit,$options:t=>bl(t),$forceUpdate:t=>t.f||(t.f=()=>ml(t.update)),$nextTick:t=>t.n||(t.n=$o.bind(t.proxy)),$watch:t=>Ir.bind(t)}),On=(t,e)=>t!==et&&!t.__isScriptSetup&&z(t,e),Yr={get({_:t},e){const{ctx:n,setupState:l,data:o,props:s,accessCache:r,type:c,appContext:a}=t;let p;if(e[0]!=="$"){const y=r[e];if(y!==void 0)switch(y){case 1:return l[e];case 2:return o[e];case 4:return n[e];case 3:return s[e]}else{if(On(l,e))return r[e]=1,l[e];if(o!==et&&z(o,e))return r[e]=2,o[e];if((p=t.propsOptions[0])&&z(p,e))return r[e]=3,s[e];if(n!==et&&z(n,e))return r[e]=4,n[e];Wn&&(r[e]=0)}}const u=He[e];let f,h;if(u)return e==="$attrs"&&_t(t,"get",e),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==et&&z(n,e))return r[e]=4,n[e];if(h=a.config.globalProperties,z(h,e))return h[e]},set({_:t},e,n){const{data:l,setupState:o,ctx:s}=t;return On(o,e)?(o[e]=n,!0):l!==et&&z(l,e)?(l[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:l,appContext:o,propsOptions:s}},r){let c;return!!n[r]||t!==et&&z(t,r)||On(e,r)||(c=s[0])&&z(c,r)||z(l,r)||z(He,r)||z(o.config.globalProperties,r)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wn=!0;function Jr(t){const e=bl(t),n=t.proxy,l=t.ctx;Wn=!1,e.beforeCreate&&Hl(e.beforeCreate,t,"bc");const{data:o,computed:s,methods:r,watch:c,provide:a,inject:p,created:u,beforeMount:f,mounted:h,beforeUpdate:y,updated:k,activated:E,deactivated:F,beforeDestroy:A,beforeUnmount:N,destroyed:O,unmounted:K,render:tt,renderTracked:ut,renderTriggered:bt,errorCaptured:B,serverPrefetch:lt,expose:X,inheritAttrs:dt,components:pt,directives:Et,filters:$t}=e;if(p&&Qr(p,l,null,t.appContext.config.unwrapInjectedRef),r)for(const Q in r){const Y=r[Q];U(Y)&&(l[Q]=Y.bind(n))}if(o){const Q=o.call(n,n);st(Q)&&(t.data=Je(Q))}if(Wn=!0,s)for(const Q in s){const Y=s[Q],St=U(Y)?Y.bind(n,n):U(Y.get)?Y.get.bind(n,n):It,ce=!U(Y)&&U(Y.set)?Y.set.bind(n):It,kt=Ct({get:St,set:ce});Object.defineProperty(l,Q,{enumerable:!0,configurable:!0,get:()=>kt.value,set:yt=>kt.value=yt})}if(c)for(const Q in c)ls(c[Q],l,n,Q);if(a){const Q=U(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(Y=>{sn(Y,Q[Y])})}u&&Hl(u,t,"c");function rt(Q,Y){H(Y)?Y.forEach(St=>Q(St.bind(n))):Y&&Q(Y.bind(n))}if(rt(jr,f),rt(ts,h),rt(Ur,y),rt($r,k),rt(Dr,E),rt(Hr,F),rt(Gr,B),rt(zr,ut),rt(Wr,bt),rt(es,N),rt(ns,K),rt(Kr,lt),H(X))if(X.length){const Q=t.exposed||(t.exposed={});X.forEach(Y=>{Object.defineProperty(Q,Y,{get:()=>n[Y],set:St=>n[Y]=St})})}else t.exposed||(t.exposed={});tt&&t.render===It&&(t.render=tt),dt!=null&&(t.inheritAttrs=dt),pt&&(t.components=pt),Et&&(t.directives=Et)}function Qr(t,e,n=It,l=!1){H(t)&&(t=zn(t));for(const o in t){const s=t[o];let r;st(s)?"default"in s?r=Vt(s.from||o,s.default,!0):r=Vt(s.from||o):r=Vt(s),ht(r)&&l?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:c=>r.value=c}):e[o]=r}}function Hl(t,e,n){Tt(H(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,n)}function ls(t,e,n,l){const o=l.includes(".")?Jo(n,l):()=>n[l];if(ct(t)){const s=e[t];U(s)&&rn(o,s)}else if(U(t))rn(o,t.bind(n));else if(st(t))if(H(t))t.forEach(s=>ls(s,e,n,l));else{const s=U(t.handler)?t.handler.bind(n):e[t.handler];U(s)&&rn(o,s,t)}}function bl(t){const e=t.type,{mixins:n,extends:l}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=t.appContext,c=s.get(e);let a;return c?a=c:!o.length&&!n&&!l?a=e:(a={},o.length&&o.forEach(p=>hn(a,p,r,!0)),hn(a,e,r)),st(e)&&s.set(e,a),a}function hn(t,e,n,l=!1){const{mixins:o,extends:s}=e;s&&hn(t,s,n,!0),o&&o.forEach(r=>hn(t,r,n,!0));for(const r in e)if(!(l&&r==="expose")){const c=Zr[r]||n&&n[r];t[r]=c?c(t[r],e[r]):e[r]}return t}const Zr={data:Bl,props:pe,emits:pe,methods:pe,computed:pe,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:pe,directives:pe,watch:ti,provide:Bl,inject:Xr};function Bl(t,e){return e?t?function(){return gt(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Xr(t,e){return pe(zn(t),zn(e))}function zn(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function pe(t,e){return t?gt(gt(Object.create(null),t),e):e}function ti(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const l in e)n[l]=mt(t[l],e[l]);return n}function ei(t,e,n,l=!1){const o={},s={};dn(s,Tn,1),t.propsDefaults=Object.create(null),os(t,e,o,s);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=l?o:mr(o):t.type.props?t.props=o:t.props=s,t.attrs=s}function ni(t,e,n,l){const{props:o,attrs:s,vnode:{patchFlag:r}}=t,c=G(o),[a]=t.propsOptions;let p=!1;if((l||r>0)&&!(r&16)){if(r&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(xn(t.emitsOptions,h))continue;const y=e[h];if(a)if(z(s,h))y!==s[h]&&(s[h]=y,p=!0);else{const k=Ee(h);o[k]=Gn(a,c,k,y,t,!1)}else y!==s[h]&&(s[h]=y,p=!0)}}}else{os(t,e,o,s)&&(p=!0);let u;for(const f in c)(!e||!z(e,f)&&((u=Oe(f))===f||!z(e,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(o[f]=Gn(a,c,f,void 0,t,!0)):delete o[f]);if(s!==c)for(const f in s)(!e||!z(e,f))&&(delete s[f],p=!0)}p&&Jt(t,"set","$attrs")}function os(t,e,n,l){const[o,s]=t.propsOptions;let r=!1,c;if(e)for(let a in e){if(on(a))continue;const p=e[a];let u;o&&z(o,u=Ee(a))?!s||!s.includes(u)?n[u]=p:(c||(c={}))[u]=p:xn(t.emitsOptions,a)||(!(a in l)||p!==l[a])&&(l[a]=p,r=!0)}if(s){const a=G(n),p=c||et;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Gn(o,a,f,p[f],t,!z(p,f))}}return r}function Gn(t,e,n,l,o,s){const r=t[n];if(r!=null){const c=z(r,"default");if(c&&l===void 0){const a=r.default;if(r.type!==Function&&U(a)){const{propsDefaults:p}=o;n in p?l=p[n]:(ke(o),l=p[n]=a.call(null,e),ve())}else l=a}r[0]&&(s&&!c?l=!1:r[1]&&(l===""||l===Oe(n))&&(l=!0))}return l}function ss(t,e,n=!1){const l=e.propsCache,o=l.get(t);if(o)return o;const s=t.props,r={},c=[];let a=!1;if(!U(t)){const u=f=>{a=!0;const[h,y]=ss(f,e,!0);gt(r,h),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!a)return st(t)&&l.set(t,qe),qe;if(H(s))for(let u=0;u<s.length;u++){const f=Ee(s[u]);jl(f)&&(r[f]=et)}else if(s)for(const u in s){const f=Ee(u);if(jl(f)){const h=s[u],y=r[f]=H(h)||U(h)?{type:h}:Object.assign({},h);if(y){const k=Kl(Boolean,y.type),E=Kl(String,y.type);y[0]=k>-1,y[1]=E<0||k<E,(k>-1||z(y,"default"))&&c.push(f)}}}const p=[r,c];return st(t)&&l.set(t,p),p}function jl(t){return t[0]!=="$"}function Ul(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function $l(t,e){return Ul(t)===Ul(e)}function Kl(t,e){return H(e)?e.findIndex(n=>$l(n,t)):U(e)&&$l(e,t)?0:-1}const rs=t=>t[0]==="_"||t==="$stable",yl=t=>H(t)?t.map(Ht):[Ht(t)],li=(t,e,n)=>{if(e._n)return e;const l=Wt((...o)=>yl(e(...o)),n);return l._c=!1,l},is=(t,e,n)=>{const l=t._ctx;for(const o in t){if(rs(o))continue;const s=t[o];if(U(s))e[o]=li(o,s,l);else if(s!=null){const r=yl(s);e[o]=()=>r}}},as=(t,e)=>{const n=yl(e);t.slots.default=()=>n},oi=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),dn(e,"_",n)):is(e,t.slots={})}else t.slots={},e&&as(t,e);dn(t.slots,Tn,1)},si=(t,e,n)=>{const{vnode:l,slots:o}=t;let s=!0,r=et;if(l.shapeFlag&32){const c=e._;c?n&&c===1?s=!1:(gt(o,e),!n&&c===1&&delete o._):(s=!e.$stable,is(e,o)),r=e}else e&&(as(t,e),r={default:1});if(s)for(const c in o)!rs(c)&&!(c in r)&&delete o[c]};function cs(){return{app:null,config:{isNativeTag:Ls,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ri=0;function ii(t,e){return function(l,o=null){U(l)||(l=Object.assign({},l)),o!=null&&!st(o)&&(o=null);const s=cs(),r=new Set;let c=!1;const a=s.app={_uid:ri++,_component:l,_props:o,_container:null,_context:s,_instance:null,version:ki,get config(){return s.config},set config(p){},use(p,...u){return r.has(p)||(p&&U(p.install)?(r.add(p),p.install(a,...u)):U(p)&&(r.add(p),p(a,...u))),a},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),a},component(p,u){return u?(s.components[p]=u,a):s.components[p]},directive(p,u){return u?(s.directives[p]=u,a):s.directives[p]},mount(p,u,f){if(!c){const h=ot(l,o);return h.appContext=s,u&&e?e(h,p):t(h,p,f),c=!0,a._container=p,p.__vue_app__=a,xl(h.component)||h.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(p,u){return s.provides[p]=u,a}};return a}}function Vn(t,e,n,l,o=!1){if(H(t)){t.forEach((h,y)=>Vn(h,e&&(H(e)?e[y]:e),n,l,o));return}if(an(l)&&!o)return;const s=l.shapeFlag&4?xl(l.component)||l.component.proxy:l.el,r=o?null:s,{i:c,r:a}=t,p=e&&e.r,u=c.refs===et?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==a&&(ct(p)?(u[p]=null,z(f,p)&&(f[p]=null)):ht(p)&&(p.value=null)),U(a))se(a,c,12,[r,u]);else{const h=ct(a),y=ht(a);if(h||y){const k=()=>{if(t.f){const E=h?z(f,a)?f[a]:u[a]:a.value;o?H(E)&&ol(E,s):H(E)?E.includes(s)||E.push(s):h?(u[a]=[s],z(f,a)&&(f[a]=u[a])):(a.value=[s],t.k&&(u[t.k]=a.value))}else h?(u[a]=r,z(f,a)&&(f[a]=r)):y&&(a.value=r,t.k&&(u[t.k]=r))};r?(k.id=-1,wt(k,n)):k()}}}const wt=Lr;function ai(t){return ci(t)}function ci(t,e){const n=Us();n.__VUE__=!0;const{insert:l,remove:o,patchProp:s,createElement:r,createText:c,createComment:a,setText:p,setElementText:u,parentNode:f,nextSibling:h,setScopeId:y=It,insertStaticContent:k}=t,E=(i,d,g,m=null,b=null,_=null,T=!1,x=null,q=!!d.dynamicChildren)=>{if(i===d)return;i&&!he(i,d)&&(m=C(i),yt(i,b,_,!0),i=null),d.patchFlag===-2&&(q=!1,d.dynamicChildren=null);const{type:w,ref:L,shapeFlag:R}=d;switch(w){case Cn:F(i,d,g,m);break;case Yt:A(i,d,g,m);break;case cn:i==null&&N(d,g,m,T);break;case Rt:pt(i,d,g,m,b,_,T,x,q);break;default:R&1?tt(i,d,g,m,b,_,T,x,q):R&6?Et(i,d,g,m,b,_,T,x,q):(R&64||R&128)&&w.process(i,d,g,m,b,_,T,x,q,W)}L!=null&&b&&Vn(L,i&&i.ref,_,d||i,!d)},F=(i,d,g,m)=>{if(i==null)l(d.el=c(d.children),g,m);else{const b=d.el=i.el;d.children!==i.children&&p(b,d.children)}},A=(i,d,g,m)=>{i==null?l(d.el=a(d.children||""),g,m):d.el=i.el},N=(i,d,g,m)=>{[i.el,i.anchor]=k(i.children,d,g,m,i.el,i.anchor)},O=({el:i,anchor:d},g,m)=>{let b;for(;i&&i!==d;)b=h(i),l(i,g,m),i=b;l(d,g,m)},K=({el:i,anchor:d})=>{let g;for(;i&&i!==d;)g=h(i),o(i),i=g;o(d)},tt=(i,d,g,m,b,_,T,x,q)=>{T=T||d.type==="svg",i==null?ut(d,g,m,b,_,T,x,q):lt(i,d,b,_,T,x,q)},ut=(i,d,g,m,b,_,T,x)=>{let q,w;const{type:L,props:R,shapeFlag:I,transition:D,dirs:$}=i;if(q=i.el=r(i.type,_,R&&R.is,R),I&8?u(q,i.children):I&16&&B(i.children,q,null,m,b,_&&L!=="foreignObject",T,x),$&&ue(i,null,m,"created"),R){for(const J in R)J!=="value"&&!on(J)&&s(q,J,null,R[J],_,i.children,m,b,S);"value"in R&&s(q,"value",null,R.value),(w=R.onVnodeBeforeMount)&&Ft(w,m,i)}bt(q,i,i.scopeId,T,m),$&&ue(i,null,m,"beforeMount");const Z=(!b||b&&!b.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(q),l(q,d,g),((w=R&&R.onVnodeMounted)||Z||$)&&wt(()=>{w&&Ft(w,m,i),Z&&D.enter(q),$&&ue(i,null,m,"mounted")},b)},bt=(i,d,g,m,b)=>{if(g&&y(i,g),m)for(let _=0;_<m.length;_++)y(i,m[_]);if(b){let _=b.subTree;if(d===_){const T=b.vnode;bt(i,T,T.scopeId,T.slotScopeIds,b.parent)}}},B=(i,d,g,m,b,_,T,x,q=0)=>{for(let w=q;w<i.length;w++){const L=i[w]=x?ne(i[w]):Ht(i[w]);E(null,L,d,g,m,b,_,T,x)}},lt=(i,d,g,m,b,_,T)=>{const x=d.el=i.el;let{patchFlag:q,dynamicChildren:w,dirs:L}=d;q|=i.patchFlag&16;const R=i.props||et,I=d.props||et;let D;g&&de(g,!1),(D=I.onVnodeBeforeUpdate)&&Ft(D,g,d,i),L&&ue(d,i,g,"beforeUpdate"),g&&de(g,!0);const $=b&&d.type!=="foreignObject";if(w?X(i.dynamicChildren,w,x,g,m,$,_):T||Y(i,d,x,null,g,m,$,_,!1),q>0){if(q&16)dt(x,d,R,I,g,m,b);else if(q&2&&R.class!==I.class&&s(x,"class",null,I.class,b),q&4&&s(x,"style",R.style,I.style,b),q&8){const Z=d.dynamicProps;for(let J=0;J<Z.length;J++){const it=Z[J],At=R[it],ye=I[it];(ye!==At||it==="value")&&s(x,it,At,ye,b,i.children,g,m,S)}}q&1&&i.children!==d.children&&u(x,d.children)}else!T&&w==null&&dt(x,d,R,I,g,m,b);((D=I.onVnodeUpdated)||L)&&wt(()=>{D&&Ft(D,g,d,i),L&&ue(d,i,g,"updated")},m)},X=(i,d,g,m,b,_,T)=>{for(let x=0;x<d.length;x++){const q=i[x],w=d[x],L=q.el&&(q.type===Rt||!he(q,w)||q.shapeFlag&70)?f(q.el):g;E(q,w,L,null,m,b,_,T,!0)}},dt=(i,d,g,m,b,_,T)=>{if(g!==m){if(g!==et)for(const x in g)!on(x)&&!(x in m)&&s(i,x,g[x],null,T,d.children,b,_,S);for(const x in m){if(on(x))continue;const q=m[x],w=g[x];q!==w&&x!=="value"&&s(i,x,w,q,T,d.children,b,_,S)}"value"in m&&s(i,"value",g.value,m.value)}},pt=(i,d,g,m,b,_,T,x,q)=>{const w=d.el=i?i.el:c(""),L=d.anchor=i?i.anchor:c("");let{patchFlag:R,dynamicChildren:I,slotScopeIds:D}=d;D&&(x=x?x.concat(D):D),i==null?(l(w,g,m),l(L,g,m),B(d.children,g,L,b,_,T,x,q)):R>0&&R&64&&I&&i.dynamicChildren?(X(i.dynamicChildren,I,g,b,_,T,x),(d.key!=null||b&&d===b.subTree)&&us(i,d,!0)):Y(i,d,g,L,b,_,T,x,q)},Et=(i,d,g,m,b,_,T,x,q)=>{d.slotScopeIds=x,i==null?d.shapeFlag&512?b.ctx.activate(d,g,m,T,q):$t(d,g,m,b,_,T,q):Ie(i,d,q)},$t=(i,d,g,m,b,_,T)=>{const x=i.component=yi(i,m,b);if(_n(i)&&(x.ctx.renderer=W),xi(x),x.asyncDep){if(b&&b.registerDep(x,rt),!i.el){const q=x.subTree=ot(Yt);A(null,q,d,g)}return}rt(x,i,d,g,b,_,T)},Ie=(i,d,g)=>{const m=d.component=i.component;if(Rr(i,d,g))if(m.asyncDep&&!m.asyncResolved){Q(m,d,g);return}else m.next=d,Cr(m.update),m.update();else d.el=i.el,m.vnode=d},rt=(i,d,g,m,b,_,T)=>{const x=()=>{if(i.isMounted){let{next:L,bu:R,u:I,parent:D,vnode:$}=i,Z=L,J;de(i,!1),L?(L.el=$.el,Q(i,L,T)):L=$,R&&kn(R),(J=L.props&&L.props.onVnodeBeforeUpdate)&&Ft(J,D,L,$),de(i,!0);const it=An(i),At=i.subTree;i.subTree=it,E(At,it,f(At.el),C(At),i,b,_),L.el=it.el,Z===null&&Or(i,it.el),I&&wt(I,b),(J=L.props&&L.props.onVnodeUpdated)&&wt(()=>Ft(J,D,L,$),b)}else{let L;const{el:R,props:I}=d,{bm:D,m:$,parent:Z}=i,J=an(d);if(de(i,!1),D&&kn(D),!J&&(L=I&&I.onVnodeBeforeMount)&&Ft(L,Z,d),de(i,!0),R&&j){const it=()=>{i.subTree=An(i),j(R,i.subTree,i,b,null)};J?d.type.__asyncLoader().then(()=>!i.isUnmounted&&it()):it()}else{const it=i.subTree=An(i);E(null,it,g,m,i,b,_),d.el=it.el}if($&&wt($,b),!J&&(L=I&&I.onVnodeMounted)){const it=d;wt(()=>Ft(L,Z,it),b)}(d.shapeFlag&256||Z&&an(Z.vnode)&&Z.vnode.shapeFlag&256)&&i.a&&wt(i.a,b),i.isMounted=!0,d=g=m=null}},q=i.effect=new al(x,()=>ml(w),i.scope),w=i.update=()=>q.run();w.id=i.uid,de(i,!0),w()},Q=(i,d,g)=>{d.component=i;const m=i.vnode.props;i.vnode=d,i.next=null,ni(i,d.props,m,g),si(i,d.children,g),Pe(),Nl(),Le()},Y=(i,d,g,m,b,_,T,x,q=!1)=>{const w=i&&i.children,L=i?i.shapeFlag:0,R=d.children,{patchFlag:I,shapeFlag:D}=d;if(I>0){if(I&128){ce(w,R,g,m,b,_,T,x,q);return}else if(I&256){St(w,R,g,m,b,_,T,x,q);return}}D&8?(L&16&&S(w,b,_),R!==w&&u(g,R)):L&16?D&16?ce(w,R,g,m,b,_,T,x,q):S(w,b,_,!0):(L&8&&u(g,""),D&16&&B(R,g,m,b,_,T,x,q))},St=(i,d,g,m,b,_,T,x,q)=>{i=i||qe,d=d||qe;const w=i.length,L=d.length,R=Math.min(w,L);let I;for(I=0;I<R;I++){const D=d[I]=q?ne(d[I]):Ht(d[I]);E(i[I],D,g,null,b,_,T,x,q)}w>L?S(i,b,_,!0,!1,R):B(d,g,m,b,_,T,x,q,R)},ce=(i,d,g,m,b,_,T,x,q)=>{let w=0;const L=d.length;let R=i.length-1,I=L-1;for(;w<=R&&w<=I;){const D=i[w],$=d[w]=q?ne(d[w]):Ht(d[w]);if(he(D,$))E(D,$,g,null,b,_,T,x,q);else break;w++}for(;w<=R&&w<=I;){const D=i[R],$=d[I]=q?ne(d[I]):Ht(d[I]);if(he(D,$))E(D,$,g,null,b,_,T,x,q);else break;R--,I--}if(w>R){if(w<=I){const D=I+1,$=D<L?d[D].el:m;for(;w<=I;)E(null,d[w]=q?ne(d[w]):Ht(d[w]),g,$,b,_,T,x,q),w++}}else if(w>I)for(;w<=R;)yt(i[w],b,_,!0),w++;else{const D=w,$=w,Z=new Map;for(w=$;w<=I;w++){const xt=d[w]=q?ne(d[w]):Ht(d[w]);xt.key!=null&&Z.set(xt.key,w)}let J,it=0;const At=I-$+1;let ye=!1,Tl=0;const Me=new Array(At);for(w=0;w<At;w++)Me[w]=0;for(w=D;w<=R;w++){const xt=i[w];if(it>=At){yt(xt,b,_,!0);continue}let Nt;if(xt.key!=null)Nt=Z.get(xt.key);else for(J=$;J<=I;J++)if(Me[J-$]===0&&he(xt,d[J])){Nt=J;break}Nt===void 0?yt(xt,b,_,!0):(Me[Nt-$]=w+1,Nt>=Tl?Tl=Nt:ye=!0,E(xt,d[Nt],g,null,b,_,T,x,q),it++)}const El=ye?ui(Me):qe;for(J=El.length-1,w=At-1;w>=0;w--){const xt=$+w,Nt=d[xt],Sl=xt+1<L?d[xt+1].el:m;Me[w]===0?E(null,Nt,g,Sl,b,_,T,x,q):ye&&(J<0||w!==El[J]?kt(Nt,g,Sl,2):J--)}}},kt=(i,d,g,m,b=null)=>{const{el:_,type:T,transition:x,children:q,shapeFlag:w}=i;if(w&6){kt(i.component.subTree,d,g,m);return}if(w&128){i.suspense.move(d,g,m);return}if(w&64){T.move(i,d,g,W);return}if(T===Rt){l(_,d,g);for(let R=0;R<q.length;R++)kt(q[R],d,g,m);l(i.anchor,d,g);return}if(T===cn){O(i,d,g);return}if(m!==2&&w&1&&x)if(m===0)x.beforeEnter(_),l(_,d,g),wt(()=>x.enter(_),b);else{const{leave:R,delayLeave:I,afterLeave:D}=x,$=()=>l(_,d,g),Z=()=>{R(_,()=>{$(),D&&D()})};I?I(_,$,Z):Z()}else l(_,d,g)},yt=(i,d,g,m=!1,b=!1)=>{const{type:_,props:T,ref:x,children:q,dynamicChildren:w,shapeFlag:L,patchFlag:R,dirs:I}=i;if(x!=null&&Vn(x,null,g,i,!0),L&256){d.ctx.deactivate(i);return}const D=L&1&&I,$=!an(i);let Z;if($&&(Z=T&&T.onVnodeBeforeUnmount)&&Ft(Z,d,i),L&6)v(i.component,g,m);else{if(L&128){i.suspense.unmount(g,m);return}D&&ue(i,null,d,"beforeUnmount"),L&64?i.type.remove(i,d,g,b,W,m):w&&(_!==Rt||R>0&&R&64)?S(w,d,g,!1,!0):(_===Rt&&R&384||!b&&L&16)&&S(q,d,g),m&&be(i)}($&&(Z=T&&T.onVnodeUnmounted)||D)&&wt(()=>{Z&&Ft(Z,d,i),D&&ue(i,null,d,"unmounted")},g)},be=i=>{const{type:d,el:g,anchor:m,transition:b}=i;if(d===Rt){Qe(g,m);return}if(d===cn){K(i);return}const _=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(i.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:x}=b,q=()=>T(g,_);x?x(i.el,_,q):q()}else _()},Qe=(i,d)=>{let g;for(;i!==d;)g=h(i),o(i),i=g;o(d)},v=(i,d,g)=>{const{bum:m,scope:b,update:_,subTree:T,um:x}=i;m&&kn(m),b.stop(),_&&(_.active=!1,yt(T,i,d,g)),x&&wt(x,d),wt(()=>{i.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&i.asyncDep&&!i.asyncResolved&&i.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},S=(i,d,g,m=!1,b=!1,_=0)=>{for(let T=_;T<i.length;T++)yt(i[T],d,g,m,b)},C=i=>i.shapeFlag&6?C(i.component.subTree):i.shapeFlag&128?i.suspense.next():h(i.anchor||i.el),P=(i,d,g)=>{i==null?d._vnode&&yt(d._vnode,null,null,!0):E(d._vnode||null,i,d,null,null,null,g),Nl(),Wo(),d._vnode=i},W={p:E,um:yt,m:kt,r:be,mt:$t,mc:B,pc:Y,pbc:X,n:C,o:t};let nt,j;return e&&([nt,j]=e(W)),{render:P,hydrate:nt,createApp:ii(P,nt)}}function de({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function us(t,e,n=!1){const l=t.children,o=e.children;if(H(l)&&H(o))for(let s=0;s<l.length;s++){const r=l[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=ne(o[s]),c.el=r.el),n||us(r,c)),c.type===Cn&&(c.el=r.el)}}function ui(t){const e=t.slice(),n=[0];let l,o,s,r,c;const a=t.length;for(l=0;l<a;l++){const p=t[l];if(p!==0){if(o=n[n.length-1],t[o]<p){e[l]=o,n.push(l);continue}for(s=0,r=n.length-1;s<r;)c=s+r>>1,t[n[c]]<p?s=c+1:r=c;p<t[n[s]]&&(s>0&&(e[l]=n[s-1]),n[s]=l)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=e[r];return n}const di=t=>t.__isTeleport,Rt=Symbol(void 0),Cn=Symbol(void 0),Yt=Symbol(void 0),cn=Symbol(void 0),Be=[];let Lt=null;function jt(t=!1){Be.push(Lt=t?null:[])}function pi(){Be.pop(),Lt=Be[Be.length-1]||null}let Ge=1;function Wl(t){Ge+=t}function fi(t){return t.dynamicChildren=Ge>0?Lt||qe:null,pi(),Ge>0&&Lt&&Lt.push(t),t}function Ut(t,e,n,l,o,s){return fi(M(t,e,n,l,o,s,!0))}function Yn(t){return t?t.__v_isVNode===!0:!1}function he(t,e){return t.type===e.type&&t.key===e.key}const Tn="__vInternal",ds=({key:t})=>t??null,un=({ref:t,ref_key:e,ref_for:n})=>t!=null?ct(t)||ht(t)||U(t)?{i:Pt,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,l=0,o=null,s=t===Rt?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ds(e),ref:e&&un(e),scopeId:Vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:l,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Pt};return c?(wl(a,n),s&128&&t.normalize(a)):n&&(a.shapeFlag|=ct(n)?8:16),Ge>0&&!r&&Lt&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Lt.push(a),a}const ot=hi;function hi(t,e=null,n=null,l=0,o=null,s=!1){if((!t||t===Vr)&&(t=Yt),Yn(t)){const c=ie(t,e,!0);return n&&wl(c,n),Ge>0&&!s&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag|=-2,c}if(Ti(t)&&(t=t.__vccOpts),e){e=gi(e);let{class:c,style:a}=e;c&&!ct(c)&&(e.class=nl(c)),st(a)&&(Mo(a)&&!H(a)&&(a=gt({},a)),e.style=el(a))}const r=ct(t)?1:Pr(t)?128:di(t)?64:st(t)?4:U(t)?2:0;return M(t,e,n,l,o,r,s,!0)}function gi(t){return t?Mo(t)||Tn in t?gt({},t):t:null}function ie(t,e,n=!1){const{props:l,ref:o,patchFlag:s,children:r}=t,c=e?mi(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ds(c),ref:e&&e.ref?n&&o?H(o)?o.concat(un(e)):[o,un(e)]:un(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ie(t.ssContent),ssFallback:t.ssFallback&&ie(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ee(t=" ",e=0){return ot(Cn,null,t,e)}function Zt(t,e){const n=ot(cn,null,t);return n.staticCount=e,n}function Ht(t){return t==null||typeof t=="boolean"?ot(Yt):H(t)?ot(Rt,null,t.slice()):typeof t=="object"?ne(t):ot(Cn,null,String(t))}function ne(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ie(t)}function wl(t,e){let n=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(l&65){const o=e.default;o&&(o._c&&(o._d=!1),wl(t,o()),o._c&&(o._d=!0));return}else{n=32;const o=e._;!o&&!(Tn in e)?e._ctx=Pt:o===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),l&64?(n=16,e=[ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function mi(...t){const e={};for(let n=0;n<t.length;n++){const l=t[n];for(const o in l)if(o==="class")e.class!==l.class&&(e.class=nl([e.class,l.class]));else if(o==="style")e.style=el([e.style,l.style]);else if(mn(o)){const s=e[o],r=l[o];r&&s!==r&&!(H(s)&&s.includes(r))&&(e[o]=s?[].concat(s,r):r)}else o!==""&&(e[o]=l[o])}return e}function Ft(t,e,n,l=null){Tt(t,e,7,[n,l])}const vi=cs();let bi=0;function yi(t,e,n){const l=t.type,o=(e?e.appContext:t.appContext)||vi,s={uid:bi++,vnode:t,type:l,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ss(l,o),emitsOptions:Go(l,o),emit:null,emitted:null,propsDefaults:et,inheritAttrs:l.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sr.bind(null,s),t.ce&&t.ce(s),s}let at=null;const wi=()=>at||Pt,ke=t=>{at=t,t.scope.on()},ve=()=>{at&&at.scope.off(),at=null};function ps(t){return t.vnode.shapeFlag&4}let Ve=!1;function xi(t,e=!1){Ve=e;const{props:n,children:l}=t.vnode,o=ps(t);ei(t,n,o,e),oi(t,l);const s=o?_i(t,e):void 0;return Ve=!1,s}function _i(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fl(new Proxy(t.ctx,Yr));const{setup:l}=n;if(l){const o=t.setupContext=l.length>1?Ci(t):null;ke(t),Pe();const s=se(l,t,0,[t.props,o]);if(Le(),ve(),wo(s)){if(s.then(ve,ve),e)return s.then(r=>{zl(t,r,e)}).catch(r=>{wn(r,t,0)});t.asyncDep=s}else zl(t,s,e)}else fs(t,e)}function zl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:st(e)&&(t.setupState=Bo(e)),fs(t,n)}let Gl;function fs(t,e,n){const l=t.type;if(!t.render){if(!e&&Gl&&!l.render){const o=l.template||bl(t).template;if(o){const{isCustomElement:s,compilerOptions:r}=t.appContext.config,{delimiters:c,compilerOptions:a}=l,p=gt(gt({isCustomElement:s,delimiters:c},r),a);l.render=Gl(o,p)}}t.render=l.render||It}ke(t),Pe(),Jr(t),Le(),ve()}function qi(t){return new Proxy(t.attrs,{get(e,n){return _t(t,"get","$attrs"),e[n]}})}function Ci(t){const e=l=>{t.exposed=l||{}};let n;return{get attrs(){return n||(n=qi(t))},slots:t.slots,emit:t.emit,expose:e}}function xl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bo(fl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in He)return He[n](t)},has(e,n){return n in e||n in He}}))}function Ti(t){return U(t)&&"__vccOpts"in t}const Ct=(t,e)=>xr(t,e,Ve);function hs(t,e,n){const l=arguments.length;return l===2?st(e)&&!H(e)?Yn(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&Yn(n)&&(n=[n]),ot(t,e,n))}const Ei=Symbol(""),Si=()=>Vt(Ei),ki="3.2.45",Ai="http://www.w3.org/2000/svg",ge=typeof document<"u"?document:null,Vl=ge&&ge.createElement("template"),Ri={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,l)=>{const o=e?ge.createElementNS(Ai,t):ge.createElement(t,n?{is:n}:void 0);return t==="select"&&l&&l.multiple!=null&&o.setAttribute("multiple",l.multiple),o},createText:t=>ge.createTextNode(t),createComment:t=>ge.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ge.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,l,o,s){const r=n?n.previousSibling:e.lastChild;if(o&&(o===s||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Vl.innerHTML=l?`<svg>${t}</svg>`:t;const c=Vl.content;if(l){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Oi(t,e,n){const l=t._vtc;l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pi(t,e,n){const l=t.style,o=ct(n);if(n&&!o){for(const s in n)Jn(l,s,n[s]);if(e&&!ct(e))for(const s in e)n[s]==null&&Jn(l,s,"")}else{const s=l.display;o?e!==n&&(l.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(l.display=s)}}const Yl=/\s*!important$/;function Jn(t,e,n){if(H(n))n.forEach(l=>Jn(t,e,l));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const l=Li(t,e);Yl.test(n)?t.setProperty(Oe(l),n.replace(Yl,""),"important"):t[l]=n}}const Jl=["Webkit","Moz","ms"],Pn={};function Li(t,e){const n=Pn[e];if(n)return n;let l=Ee(e);if(l!=="filter"&&l in t)return Pn[e]=l;l=xo(l);for(let o=0;o<Jl.length;o++){const s=Jl[o]+l;if(s in t)return Pn[e]=s}return e}const Ql="http://www.w3.org/1999/xlink";function Ii(t,e,n,l,o){if(l&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ql,e.slice(6,e.length)):t.setAttributeNS(Ql,e,n);else{const s=Ps(e);n==null||s&&!yo(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Mi(t,e,n,l,o,s,r){if(e==="innerHTML"||e==="textContent"){l&&r(l,o,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yo(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ni(t,e,n,l){t.addEventListener(e,n,l)}function Fi(t,e,n,l){t.removeEventListener(e,n,l)}function Di(t,e,n,l,o=null){const s=t._vei||(t._vei={}),r=s[e];if(l&&r)r.value=l;else{const[c,a]=Hi(e);if(l){const p=s[e]=Ui(l,o);Ni(t,c,p,a)}else r&&(Fi(t,c,r,a),s[e]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function Hi(t){let e;if(Zl.test(t)){e={};let l;for(;l=t.match(Zl);)t=t.slice(0,t.length-l[0].length),e[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Oe(t.slice(2)),e]}let Ln=0;const Bi=Promise.resolve(),ji=()=>Ln||(Bi.then(()=>Ln=0),Ln=Date.now());function Ui(t,e){const n=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=n.attached)return;Tt($i(l,n.value),e,5,[l])};return n.value=t,n.attached=ji(),n}function $i(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(l=>o=>!o._stopped&&l&&l(o))}else return e}const Xl=/^on[a-z]/,Ki=(t,e,n,l,o=!1,s,r,c,a)=>{e==="class"?Oi(t,l,o):e==="style"?Pi(t,n,l):mn(e)?ll(e)||Di(t,e,n,l,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wi(t,e,l,o))?Mi(t,e,l,s,r,c,a):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Ii(t,e,l,o))};function Wi(t,e,n,l){return l?!!(e==="innerHTML"||e==="textContent"||e in t&&Xl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xl.test(e)&&ct(n)?!1:e in t}const zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fr.props;const Gi=gt({patchProp:Ki},Ri);let to;function Vi(){return to||(to=ai(Gi))}const Yi=(...t)=>{const e=Vi().createApp(...t),{mount:n}=e;return e.mount=l=>{const o=Ji(l);if(!o)return;const s=e._component;!U(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const r=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},e};function Ji(t){return ct(t)?document.querySelector(t):t}var Qi=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zi=Symbol();var eo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(eo||(eo={}));function Xi(){const t=$s(!0),e=t.run(()=>Do({}));let n=[],l=[];const o=fl({install(s){o._a=s,s.provide(Zi,o),s.config.globalProperties.$pinia=o,l.forEach(r=>n.push(r)),l=[]},use(s){return!this._a&&!Qi?l.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xe=typeof window<"u";function ta(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const V=Object.assign;function In(t,e){const n={};for(const l in e){const o=e[l];n[l]=Mt(o)?o.map(t):t(o)}return n}const je=()=>{},Mt=Array.isArray,ea=/\/$/,na=t=>t.replace(ea,"");function Mn(t,e,n="/"){let l,o={},s="",r="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(l=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),o=t(s)),c>-1&&(l=l||e.slice(0,c),r=e.slice(c,e.length)),l=ra(l??e,n),{fullPath:l+(s&&"?")+s+r,path:l,query:o,hash:r}}function la(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function no(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oa(t,e,n){const l=e.matched.length-1,o=n.matched.length-1;return l>-1&&l===o&&Ae(e.matched[l],n.matched[o])&&gs(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ae(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gs(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sa(t[n],e[n]))return!1;return!0}function sa(t,e){return Mt(t)?lo(t,e):Mt(e)?lo(e,t):t===e}function lo(t,e){return Mt(e)?t.length===e.length&&t.every((n,l)=>n===e[l]):t.length===1&&t[0]===e}function ra(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),l=t.split("/");let o=n.length-1,s,r;for(s=0;s<l.length;s++)if(r=l[s],r!==".")if(r==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+l.slice(s-(s===l.length?1:0)).join("/")}var Ye;(function(t){t.pop="pop",t.push="push"})(Ye||(Ye={}));var Ue;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ue||(Ue={}));function ia(t){if(!t)if(xe){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),na(t)}const aa=/^[^#]+#/;function ca(t,e){return t.replace(aa,"#")+e}function ua(t,e){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-n.left-(e.left||0),top:l.top-n.top-(e.top||0)}}const En=()=>({left:window.pageXOffset,top:window.pageYOffset});function da(t){let e;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=ua(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function oo(t,e){return(history.state?history.state.position-e:-1)+t}const Qn=new Map;function pa(t,e){Qn.set(t,e)}function fa(t){const e=Qn.get(t);return Qn.delete(t),e}let ha=()=>location.protocol+"//"+location.host;function ms(t,e){const{pathname:n,search:l,hash:o}=e,s=t.indexOf("#");if(s>-1){let c=o.includes(t.slice(s))?t.slice(s).length:1,a=o.slice(c);return a[0]!=="/"&&(a="/"+a),no(a,"")}return no(n,t)+l+o}function ga(t,e,n,l){let o=[],s=[],r=null;const c=({state:h})=>{const y=ms(t,location),k=n.value,E=e.value;let F=0;if(h){if(n.value=y,e.value=h,r&&r===k){r=null;return}F=E?h.position-E.position:0}else l(y);o.forEach(A=>{A(n.value,k,{delta:F,type:Ye.pop,direction:F?F>0?Ue.forward:Ue.back:Ue.unknown})})};function a(){r=n.value}function p(h){o.push(h);const y=()=>{const k=o.indexOf(h);k>-1&&o.splice(k,1)};return s.push(y),y}function u(){const{history:h}=window;h.state&&h.replaceState(V({},h.state,{scroll:En()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:p,destroy:f}}function so(t,e,n,l=!1,o=!1){return{back:t,current:e,forward:n,replaced:l,position:window.history.length,scroll:o?En():null}}function ma(t){const{history:e,location:n}=window,l={value:ms(t,n)},o={value:e.state};o.value||s(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(a,p,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:ha()+t+a;try{e[u?"replaceState":"pushState"](p,"",h),o.value=p}catch(y){console.error(y),n[u?"replace":"assign"](h)}}function r(a,p){const u=V({},e.state,so(o.value.back,a,o.value.forward,!0),p,{position:o.value.position});s(a,u,!0),l.value=a}function c(a,p){const u=V({},o.value,e.state,{forward:a,scroll:En()});s(u.current,u,!0);const f=V({},so(l.value,a,null),{position:u.position+1},p);s(a,f,!1),l.value=a}return{location:l,state:o,push:c,replace:r}}function va(t){t=ia(t);const e=ma(t),n=ga(t,e.state,e.location,e.replace);function l(s,r=!0){r||n.pauseListeners(),history.go(s)}const o=V({location:"",base:t,go:l,createHref:ca.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function ba(t){return typeof t=="string"||t&&typeof t=="object"}function vs(t){return typeof t=="string"||typeof t=="symbol"}const te={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bs=Symbol("");var ro;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ro||(ro={}));function Re(t,e){return V(new Error,{type:t,[bs]:!0},e)}function Kt(t,e){return t instanceof Error&&bs in t&&(e==null||!!(t.type&e))}const io="[^/]+?",ya={sensitive:!1,strict:!1,start:!0,end:!0},wa=/[.+*?^${}()[\]/\\]/g;function xa(t,e){const n=V({},ya,e),l=[];let o=n.start?"^":"";const s=[];for(const p of t){const u=p.length?[]:[90];n.strict&&!p.length&&(o+="/");for(let f=0;f<p.length;f++){const h=p[f];let y=40+(n.sensitive?.25:0);if(h.type===0)f||(o+="/"),o+=h.value.replace(wa,"\\$&"),y+=40;else if(h.type===1){const{value:k,repeatable:E,optional:F,regexp:A}=h;s.push({name:k,repeatable:E,optional:F});const N=A||io;if(N!==io){y+=10;try{new RegExp(`(${N})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${k}" (${N}): `+K.message)}}let O=E?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(O=F&&p.length<2?`(?:/${O})`:"/"+O),F&&(O+="?"),o+=O,y+=20,F&&(y+=-8),E&&(y+=-20),N===".*"&&(y+=-50)}u.push(y)}l.push(u)}if(n.strict&&n.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const r=new RegExp(o,n.sensitive?"":"i");function c(p){const u=p.match(r),f={};if(!u)return null;for(let h=1;h<u.length;h++){const y=u[h]||"",k=s[h-1];f[k.name]=y&&k.repeatable?y.split("/"):y}return f}function a(p){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const y of h)if(y.type===0)u+=y.value;else if(y.type===1){const{value:k,repeatable:E,optional:F}=y,A=k in p?p[k]:"";if(Mt(A)&&!E)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const N=Mt(A)?A.join("/"):A;if(!N)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${k}"`);u+=N}}return u||"/"}return{re:r,score:l,keys:s,parse:c,stringify:a}}function _a(t,e){let n=0;for(;n<t.length&&n<e.length;){const l=e[n]-t[n];if(l)return l;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qa(t,e){let n=0;const l=t.score,o=e.score;for(;n<l.length&&n<o.length;){const s=_a(l[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-l.length)===1){if(ao(l))return 1;if(ao(o))return-1}return o.length-l.length}function ao(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ca={type:0,value:""},Ta=/[a-zA-Z0-9_]/;function Ea(t){if(!t)return[[]];if(t==="/")return[[Ca]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${p}": ${y}`)}let n=0,l=n;const o=[];let s;function r(){s&&o.push(s),s=[]}let c=0,a,p="",u="";function f(){p&&(n===0?s.push({type:0,value:p}):n===1||n===2||n===3?(s.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:p,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),p="")}function h(){p+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:a==="/"?(p&&f(),r()):a===":"?(f(),n=1):h();break;case 4:h(),n=l;break;case 1:a==="("?n=2:Ta.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${p}"`),f(),r(),o}function Sa(t,e,n){const l=xa(Ea(t.path),n),o=V(l,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function ka(t,e){const n=[],l=new Map;e=po({strict:!1,end:!0,sensitive:!1},e);function o(u){return l.get(u)}function s(u,f,h){const y=!h,k=Aa(u);k.aliasOf=h&&h.record;const E=po(e,u),F=[k];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of O)F.push(V({},k,{components:h?h.record.components:k.components,path:K,aliasOf:h?h.record:k}))}let A,N;for(const O of F){const{path:K}=O;if(f&&K[0]!=="/"){const tt=f.record.path,ut=tt[tt.length-1]==="/"?"":"/";O.path=f.record.path+(K&&ut+K)}if(A=Sa(O,f,E),h?h.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),y&&u.name&&!uo(A)&&r(u.name)),k.children){const tt=k.children;for(let ut=0;ut<tt.length;ut++)s(tt[ut],A,h&&h.children[ut])}h=h||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return N?()=>{r(N)}:je}function r(u){if(vs(u)){const f=l.get(u);f&&(l.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&l.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function c(){return n}function a(u){let f=0;for(;f<n.length&&qa(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ys(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!uo(u)&&l.set(u.record.name,u)}function p(u,f){let h,y={},k,E;if("name"in u&&u.name){if(h=l.get(u.name),!h)throw Re(1,{location:u});E=h.record.name,y=V(co(f.params,h.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&co(u.params,h.keys.map(N=>N.name))),k=h.stringify(y)}else if("path"in u)k=u.path,h=n.find(N=>N.re.test(k)),h&&(y=h.parse(k),E=h.record.name);else{if(h=f.name?l.get(f.name):n.find(N=>N.re.test(f.path)),!h)throw Re(1,{location:u,currentLocation:f});E=h.record.name,y=V({},f.params,u.params),k=h.stringify(y)}const F=[];let A=h;for(;A;)F.unshift(A.record),A=A.parent;return{name:E,path:k,params:y,matched:F,meta:Oa(F)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:p,removeRoute:r,getRoutes:c,getRecordMatcher:o}}function co(t,e){const n={};for(const l of e)l in t&&(n[l]=t[l]);return n}function Aa(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ra(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ra(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const l in t.components)e[l]=typeof n=="boolean"?n:n[l];return e}function uo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Oa(t){return t.reduce((e,n)=>V(e,n.meta),{})}function po(t,e){const n={};for(const l in t)n[l]=l in e?e[l]:t[l];return n}function ys(t,e){return e.children.some(n=>n===t||ys(t,n))}const ws=/#/g,Pa=/&/g,La=/\//g,Ia=/=/g,Ma=/\?/g,xs=/\+/g,Na=/%5B/g,Fa=/%5D/g,_s=/%5E/g,Da=/%60/g,qs=/%7B/g,Ha=/%7C/g,Cs=/%7D/g,Ba=/%20/g;function _l(t){return encodeURI(""+t).replace(Ha,"|").replace(Na,"[").replace(Fa,"]")}function ja(t){return _l(t).replace(qs,"{").replace(Cs,"}").replace(_s,"^")}function Zn(t){return _l(t).replace(xs,"%2B").replace(Ba,"+").replace(ws,"%23").replace(Pa,"%26").replace(Da,"`").replace(qs,"{").replace(Cs,"}").replace(_s,"^")}function Ua(t){return Zn(t).replace(Ia,"%3D")}function $a(t){return _l(t).replace(ws,"%23").replace(Ma,"%3F")}function Ka(t){return t==null?"":$a(t).replace(La,"%2F")}function gn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Wa(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<l.length;++o){const s=l[o].replace(xs," "),r=s.indexOf("="),c=gn(r<0?s:s.slice(0,r)),a=r<0?null:gn(s.slice(r+1));if(c in e){let p=e[c];Mt(p)||(p=e[c]=[p]),p.push(a)}else e[c]=a}return e}function fo(t){let e="";for(let n in t){const l=t[n];if(n=Ua(n),l==null){l!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(l)?l.map(s=>s&&Zn(s)):[l&&Zn(l)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function za(t){const e={};for(const n in t){const l=t[n];l!==void 0&&(e[n]=Mt(l)?l.map(o=>o==null?null:""+o):l==null?l:""+l)}return e}const Ga=Symbol(""),ho=Symbol(""),ql=Symbol(""),Ts=Symbol(""),Xn=Symbol("");function Ne(){let t=[];function e(l){return t.push(l),()=>{const o=t.indexOf(l);o>-1&&t.splice(o,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function le(t,e,n,l,o){const s=l&&(l.enterCallbacks[o]=l.enterCallbacks[o]||[]);return()=>new Promise((r,c)=>{const a=f=>{f===!1?c(Re(4,{from:n,to:e})):f instanceof Error?c(f):ba(f)?c(Re(2,{from:e,to:f})):(s&&l.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),r())},p=t.call(l&&l.instances[o],e,n,a);let u=Promise.resolve(p);t.length<3&&(u=u.then(a)),u.catch(f=>c(f))})}function Nn(t,e,n,l){const o=[];for(const s of t)for(const r in s.components){let c=s.components[r];if(!(e!=="beforeRouteEnter"&&!s.instances[r]))if(Va(c)){const p=(c.__vccOpts||c)[e];p&&o.push(le(p,n,l,s,r))}else{let a=c();o.push(()=>a.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${s.path}"`));const u=ta(p)?p.default:p;s.components[r]=u;const h=(u.__vccOpts||u)[e];return h&&le(h,n,l,s,r)()}))}}return o}function Va(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function go(t){const e=Vt(ql),n=Vt(Ts),l=Ct(()=>e.resolve(vt(t.to))),o=Ct(()=>{const{matched:a}=l.value,{length:p}=a,u=a[p-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ae.bind(null,u));if(h>-1)return h;const y=mo(a[p-2]);return p>1&&mo(u)===y&&f[f.length-1].path!==y?f.findIndex(Ae.bind(null,a[p-2])):h}),s=Ct(()=>o.value>-1&&Qa(n.params,l.value.params)),r=Ct(()=>o.value>-1&&o.value===n.matched.length-1&&gs(n.params,l.value.params));function c(a={}){return Ja(a)?e[vt(t.replace)?"replace":"push"](vt(t.to)).catch(je):Promise.resolve()}return{route:l,href:Ct(()=>l.value.href),isActive:s,isExactActive:r,navigate:c}}const Ya=vl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:go,setup(t,{slots:e}){const n=Je(go(t)),{options:l}=Vt(ql),o=Ct(()=>({[vo(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[vo(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:hs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),zt=Ya;function Ja(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qa(t,e){for(const n in e){const l=e[n],o=t[n];if(typeof l=="string"){if(l!==o)return!1}else if(!Mt(o)||o.length!==l.length||l.some((s,r)=>s!==o[r]))return!1}return!0}function mo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vo=(t,e,n)=>t??e??n,Za=vl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const l=Vt(Xn),o=Ct(()=>t.route||l.value),s=Vt(ho,0),r=Ct(()=>{let p=vt(s);const{matched:u}=o.value;let f;for(;(f=u[p])&&!f.components;)p++;return p}),c=Ct(()=>o.value.matched[r.value]);sn(ho,Ct(()=>r.value+1)),sn(Ga,c),sn(Xn,o);const a=Do();return rn(()=>[a.value,c.value,t.name],([p,u,f],[h,y,k])=>{u&&(u.instances[f]=p,y&&y!==u&&p&&p===h&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),p&&u&&(!y||!Ae(u,y)||!h)&&(u.enterCallbacks[f]||[]).forEach(E=>E(p))},{flush:"post"}),()=>{const p=o.value,u=t.name,f=c.value,h=f&&f.components[u];if(!h)return bo(n.default,{Component:h,route:p});const y=f.props[u],k=y?y===!0?p.params:typeof y=="function"?y(p):y:null,F=hs(h,V({},k,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return bo(n.default,{Component:F,route:p})||F}}});function bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Es=Za;function Xa(t){const e=ka(t.routes,t),n=t.parseQuery||Wa,l=t.stringifyQuery||fo,o=t.history,s=Ne(),r=Ne(),c=Ne(),a=vr(te);let p=te;xe&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=In.bind(null,v=>""+v),f=In.bind(null,Ka),h=In.bind(null,gn);function y(v,S){let C,P;return vs(v)?(C=e.getRecordMatcher(v),P=S):P=v,e.addRoute(P,C)}function k(v){const S=e.getRecordMatcher(v);S&&e.removeRoute(S)}function E(){return e.getRoutes().map(v=>v.record)}function F(v){return!!e.getRecordMatcher(v)}function A(v,S){if(S=V({},S||a.value),typeof v=="string"){const i=Mn(n,v,S.path),d=e.resolve({path:i.path},S),g=o.createHref(i.fullPath);return V(i,d,{params:h(d.params),hash:gn(i.hash),redirectedFrom:void 0,href:g})}let C;if("path"in v)C=V({},v,{path:Mn(n,v.path,S.path).path});else{const i=V({},v.params);for(const d in i)i[d]==null&&delete i[d];C=V({},v,{params:f(v.params)}),S.params=f(S.params)}const P=e.resolve(C,S),W=v.hash||"";P.params=u(h(P.params));const nt=la(l,V({},v,{hash:ja(W),path:P.path})),j=o.createHref(nt);return V({fullPath:nt,hash:W,query:l===fo?za(v.query):v.query||{}},P,{redirectedFrom:void 0,href:j})}function N(v){return typeof v=="string"?Mn(n,v,a.value.path):V({},v)}function O(v,S){if(p!==v)return Re(8,{from:S,to:v})}function K(v){return bt(v)}function tt(v){return K(V(N(v),{replace:!0}))}function ut(v){const S=v.matched[v.matched.length-1];if(S&&S.redirect){const{redirect:C}=S;let P=typeof C=="function"?C(v):C;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=N(P):{path:P},P.params={}),V({query:v.query,hash:v.hash,params:"path"in P?{}:v.params},P)}}function bt(v,S){const C=p=A(v),P=a.value,W=v.state,nt=v.force,j=v.replace===!0,i=ut(C);if(i)return bt(V(N(i),{state:typeof i=="object"?V({},W,i.state):W,force:nt,replace:j}),S||C);const d=C;d.redirectedFrom=S;let g;return!nt&&oa(l,P,C)&&(g=Re(16,{to:d,from:P}),ce(P,P,!0,!1)),(g?Promise.resolve(g):lt(d,P)).catch(m=>Kt(m)?Kt(m,2)?m:St(m):Q(m,d,P)).then(m=>{if(m){if(Kt(m,2))return bt(V({replace:j},N(m.to),{state:typeof m.to=="object"?V({},W,m.to.state):W,force:nt}),S||d)}else m=dt(d,P,!0,j,W);return X(d,P,m),m})}function B(v,S){const C=O(v,S);return C?Promise.reject(C):Promise.resolve()}function lt(v,S){let C;const[P,W,nt]=tc(v,S);C=Nn(P.reverse(),"beforeRouteLeave",v,S);for(const i of P)i.leaveGuards.forEach(d=>{C.push(le(d,v,S))});const j=B.bind(null,v,S);return C.push(j),we(C).then(()=>{C=[];for(const i of s.list())C.push(le(i,v,S));return C.push(j),we(C)}).then(()=>{C=Nn(W,"beforeRouteUpdate",v,S);for(const i of W)i.updateGuards.forEach(d=>{C.push(le(d,v,S))});return C.push(j),we(C)}).then(()=>{C=[];for(const i of v.matched)if(i.beforeEnter&&!S.matched.includes(i))if(Mt(i.beforeEnter))for(const d of i.beforeEnter)C.push(le(d,v,S));else C.push(le(i.beforeEnter,v,S));return C.push(j),we(C)}).then(()=>(v.matched.forEach(i=>i.enterCallbacks={}),C=Nn(nt,"beforeRouteEnter",v,S),C.push(j),we(C))).then(()=>{C=[];for(const i of r.list())C.push(le(i,v,S));return C.push(j),we(C)}).catch(i=>Kt(i,8)?i:Promise.reject(i))}function X(v,S,C){for(const P of c.list())P(v,S,C)}function dt(v,S,C,P,W){const nt=O(v,S);if(nt)return nt;const j=S===te,i=xe?history.state:{};C&&(P||j?o.replace(v.fullPath,V({scroll:j&&i&&i.scroll},W)):o.push(v.fullPath,W)),a.value=v,ce(v,S,C,j),St()}let pt;function Et(){pt||(pt=o.listen((v,S,C)=>{if(!Qe.listening)return;const P=A(v),W=ut(P);if(W){bt(V(W,{replace:!0}),P).catch(je);return}p=P;const nt=a.value;xe&&pa(oo(nt.fullPath,C.delta),En()),lt(P,nt).catch(j=>Kt(j,12)?j:Kt(j,2)?(bt(j.to,P).then(i=>{Kt(i,20)&&!C.delta&&C.type===Ye.pop&&o.go(-1,!1)}).catch(je),Promise.reject()):(C.delta&&o.go(-C.delta,!1),Q(j,P,nt))).then(j=>{j=j||dt(P,nt,!1),j&&(C.delta&&!Kt(j,8)?o.go(-C.delta,!1):C.type===Ye.pop&&Kt(j,20)&&o.go(-1,!1)),X(P,nt,j)}).catch(je)}))}let $t=Ne(),Ie=Ne(),rt;function Q(v,S,C){St(v);const P=Ie.list();return P.length?P.forEach(W=>W(v,S,C)):console.error(v),Promise.reject(v)}function Y(){return rt&&a.value!==te?Promise.resolve():new Promise((v,S)=>{$t.add([v,S])})}function St(v){return rt||(rt=!v,Et(),$t.list().forEach(([S,C])=>v?C(v):S()),$t.reset()),v}function ce(v,S,C,P){const{scrollBehavior:W}=t;if(!xe||!W)return Promise.resolve();const nt=!C&&fa(oo(v.fullPath,0))||(P||!C)&&history.state&&history.state.scroll||null;return $o().then(()=>W(v,S,nt)).then(j=>j&&da(j)).catch(j=>Q(j,v,S))}const kt=v=>o.go(v);let yt;const be=new Set,Qe={currentRoute:a,listening:!0,addRoute:y,removeRoute:k,hasRoute:F,getRoutes:E,resolve:A,options:t,push:K,replace:tt,go:kt,back:()=>kt(-1),forward:()=>kt(1),beforeEach:s.add,beforeResolve:r.add,afterEach:c.add,onError:Ie.add,isReady:Y,install(v){const S=this;v.component("RouterLink",zt),v.component("RouterView",Es),v.config.globalProperties.$router=S,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(a)}),xe&&!yt&&a.value===te&&(yt=!0,K(o.location).catch(W=>{}));const C={};for(const W in te)C[W]=Ct(()=>a.value[W]);v.provide(ql,S),v.provide(Ts,Je(C)),v.provide(Xn,a);const P=v.unmount;be.add(v),v.unmount=function(){be.delete(v),be.size<1&&(p=te,pt&&pt(),pt=null,a.value=te,yt=!1,rt=!1),P()}}};return Qe}function we(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tc(t,e){const n=[],l=[],o=[],s=Math.max(e.matched.length,t.matched.length);for(let r=0;r<s;r++){const c=e.matched[r];c&&(t.matched.find(p=>Ae(p,c))?l.push(c):n.push(c));const a=t.matched[r];a&&(e.matched.find(p=>Ae(p,a))||o.push(a))}return[n,l,o]}const ec={class:"header container-fluid"},nc={class:"wrapper"},lc={class:"header__top container"},oc=M("h1",{class:"col-sm-12 col-md-6 header__top-title"},null,-1),sc=M("h1",{class:"col-sm-12 col-md-6 header__top-subtitle"},"Check Everyday",-1),rc={class:"header__nav container"},ic=M("footer",{class:"footer"},[M("a",{class:"footer__link",href:"https://asone.studio",target:"_blank"},"developed by As One")],-1),ac=vl({__name:"App",setup(t){return(e,n)=>(jt(),Ut(Rt,null,[M("header",ec,[M("div",nc,[M("div",lc,[ot(vt(zt),{class:"header__top-link",to:"/"},{default:Wt(()=>[oc,sc]),_:1})]),M("nav",rc,[ot(vt(zt),{class:"header__nav-option",to:"/html"},{default:Wt(()=>[ee("HTML")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/css"},{default:Wt(()=>[ee("CSS")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/js"},{default:Wt(()=>[ee("JS")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/ts"},{default:Wt(()=>[ee("TS")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/vue"},{default:Wt(()=>[ee("Vue")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/react"},{default:Wt(()=>[ee("React")]),_:1}),ot(vt(zt),{class:"header__nav-option",to:"/sql"},{default:Wt(()=>[ee("SQL")]),_:1})])])]),ic,ot(vt(Es))],64))}}),ae=(t,e)=>{const n=t.__vccOpts||t;for(const[l,o]of e)n[l]=o;return n},cc={},uc={class:"container"},dc=Zt(`<h1>HTML</h1><h2>Basics</h2><h3>Doctype</h3><div class="row"><div class="col-sm-12"><div class="pre">&lt;!DOCTYPE html&gt;</div></div></div><h3>Headings</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;
        </pre></div><div class="col-sm-12 col-md-6"><h1 class="color_blue100">Heading 1</h1><h2 class="color_blue100">Heading 2</h2><h3 class="color_blue100">Heading 3</h3><h4 class="color_blue100">Heading 4</h4><h5 class="color_blue100">Heading 5</h5><h6 class="color_blue100">Heading 6</h6></div></div><h3>Paragraph</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;p&gt;This is a paragraph&lt;/p&gt;</pre></div><div class="col-sm-12 col-md-6"><p>This is a paragraph</p></div></div><h3>Text Formatting</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;p&gt;There is a &lt;strong&gt;Bold text here&lt;/strong&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;b&gt;Bold text here&lt;/b&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;em&gt;Italicized text here&lt;/em&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;i&gt;Italicized text here&lt;/i&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;abbr title=&quot;Hypertext Markup Language&quot;&gt;HTML!&lt;/abbr&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;ins&gt;New Text&lt;/ins&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;del&gt;Deleted Text&lt;/del&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;s&gt;Struck-through text&lt;/s&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;sup&gt;Superscript text&lt;/sup&gt; here&lt;/p&gt;
&lt;p&gt;There is a &lt;sub&gt;Subscript text&lt;/sub&gt; here&lt;/p&gt;
        </pre></div><div class="col-sm-12 col-md-6"><p>There is a <strong>Bold text here</strong> here</p><p>There is a <b>Bold text here</b> here</p><p>There is a <em>Italicized text here</em> here</p><p>There is a <i>Italicized text here</i> here</p><p>There is a <abbr title="Hypertext Markup Language">HTML!</abbr> here</p><p>There is a <ins>New Text</ins> here</p><p>There is a <del>Deleted Text</del> here</p><p>There is a <s>Struck-through text</s> here</p><p>There is a <sup>Superscript text</sup> here</p><p>There is a <sub>Subscript text</sub> here</p></div></div><h3>Anchors and Hyperlinks</h3>`,11),pc=M("div",{class:"row"},[M("div",{class:"col-sm-12 col-md-6"},[M("pre",{class:"pre"},`<a href="http://www.example.com">Link to example.com</lt;a>
<a href="#heading4">Go to Heading 4</a> <h4 id="heading4">Heading 4</h4>
<a href="/about">About</a>
<a href="tel:112233445566">Call Us</a>
<a href="http://www.example.com" target="_blank">Open in new tab</a>
<a href="#!" onclick="alert('Alert!')">Run JavaScript function</a>
<a href="mailto:example@example.com">Send email</a>
        `)]),M("div",{class:"col-sm-12 col-md-6"},[M("a",{href:"http://www.example.com",class:"color_blue100"},"Link to example.com"),M("br"),M("a",{href:"#heading4",class:"color_blue100"},"Go to Heading 4"),M("h4",{style:{display:"inline"},id:"heading4",class:"color_blue100"},"Heading 4"),M("br"),M("a",{href:"/about",class:"color_blue100"},"About"),M("br"),M("a",{href:"tel:112233445566",class:"color_blue100"},"Call Us"),M("br"),M("a",{href:"http://www.example.com",target:"_blank",class:"color_blue100"},"Open in new tab"),M("br"),M("a",{href:"#!",onclick:"alert('Alert!')",class:"color_blue100"},"Run JavaScript function"),M("br"),M("a",{href:"mailto:example@example.com",class:"color_blue100"},"Send email")])],-1),fc=Zt(`<h3>Lists</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;ol&gt;
  &lt;li&gt;Item&lt;/li&gt;
  &lt;li&gt;Another item&lt;/li&gt;
  &lt;li&gt;Yet another item&lt;/li&gt;
&lt;/ol&gt;

&lt;ul&gt;
  &lt;li&gt;Item&lt;/li&gt;
  &lt;li&gt;Another item&lt;/li&gt;
  &lt;li&gt;Yet another item&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;Item&lt;/li&gt;
  &lt;li&gt;Another item&lt;/li&gt;
  &lt;li&gt;Yet another item&lt;/li&gt;
  &lt;li&gt;
    &lt;ul&gt;
      &lt;li&gt;Item&lt;/li&gt;
      &lt;li&gt;Another item&lt;/li&gt;
      &lt;li&gt;Yet another item&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ol&gt;

&lt;dl&gt;
  &lt;dt&gt;Name 1&lt;/dt&gt;
  &lt;dd&gt;Value for 1&lt;/dd&gt;
  &lt;dt&gt;Name 2&lt;/dt&gt;
  &lt;dd&gt;Value for 2&lt;/dd&gt;
&lt;/dl&gt;
        </pre></div><div class="col-sm-12 col-md-6"><ol><li>Item</li><li>Another item</li><li>Yet another item</li></ol><ul><li>Item</li><li>Another item</li><li>Yet another item</li></ul><ol><li>Item</li><li>Another item</li><li>Yet another item</li><li><ul><li>Item</li><li>Another item</li><li>Yet another item</li></ul></li></ol><dl><dt>Name 1</dt><dd>Value for 1</dd><dt>Name 2</dt><dd>Value for 2</dd></dl></div></div><h3>Table</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;table&gt;
  &lt;caption&gt;Table Title&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;A&lt;/th&gt;
      &lt;th&gt;B&lt;/th&gt;
      &lt;th&gt;C&lt;/th&gt;
      &lt;th&gt;D&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
  &lt;tr&gt;
    &lt;td&gt;A1&lt;/td&gt;
    &lt;td&gt;B1&lt;/td&gt;
    &lt;td&gt;C1&lt;/td&gt;
    &lt;td&gt;D1&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;A2&lt;/td&gt;
    &lt;td&gt;B2&lt;/td&gt;
    &lt;td&gt;C2&lt;/td&gt;
    &lt;td&gt;D2&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;A3&lt;/td&gt;
    &lt;td&gt;B3&lt;/td&gt;
    &lt;td&gt;C3&lt;/td&gt;
    &lt;td&gt;D3&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;A4&lt;/td&gt;
    &lt;td colspan=&quot;3&quot;&gt;B4&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;A5&lt;/td&gt;
    &lt;td&gt;B5&lt;/td&gt;
    &lt;td&gt;C5&lt;/td&gt;
    &lt;td&gt;D5&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;B6&lt;/td&gt;
    &lt;td&gt;C6&lt;/td&gt;
    &lt;td&gt;D6&lt;/td&gt;
  &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;AF&lt;/td&gt;
      &lt;td&gt;BF&lt;/td&gt;
      &lt;td&gt;CF&lt;/td&gt;
      &lt;td&gt;DF&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;
        </pre></div><div class="col-sm-12 col-md-6"><table><caption> Table Title </caption><thead><tr><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead><tbody><tr><td>A1</td><td>B1</td><td>C1</td><td>D1</td></tr><tr><td>A2</td><td>B2</td><td>C2</td><td>D2</td></tr><tr><td>A3</td><td>B3</td><td>C3</td><td>D3</td></tr><tr><td>A4</td><td colspan="3">B4</td></tr><tr><td rowspan="2">A5</td><td>B5</td><td>C5</td><td>D5</td></tr><tr><td>B6</td><td>C6</td><td>D6</td></tr></tbody><tfoot><tr><td>AF</td><td>BF</td><td>CF</td><td>DF</td></tr></tfoot></table></div></div><h3>Comments</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;!-- I&#39;m an HTML comment --&gt;</pre></div></div><h3>Classes and IDs</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;div class=&quot;example-class&quot;&gt;&lt;/div&gt;
&lt;div id=&quot;example-id&quot;&gt;&lt;/div&gt;
&lt;style&gt;
.example-class {}
#example-id {}
&lt;/style&gt;
        </pre></div></div><h3>Linking Resources</h3><div class="row"><div class="col-sm-12"><pre class="pre">JavaScript:   &lt;script src=&quot;example.min.js&quot;&gt;&lt;script&gt;
CSS:          &lt;link rel=&quot;stylesheet&quot; href=&quot;example.css&quot;&gt;
Favicon:      &lt;link rel=&quot;icon&quot; type=&quot;image/png&quot; href=&quot;/favicon.png&quot;&gt;
Favicon:      &lt;link rel=&quot;shortcut icon&quot; type=&quot;image/x-icon&quot; href=&quot;/favicon.ico&quot;&gt;
CSS to print: &lt;link rel=&quot;stylesheet&quot; href=&quot;test.css&quot; media=&quot;print&quot;&gt;
RSS:          &lt;link rel=&quot;alternate&quot; type=&quot;application/rss+xml&quot; href=&quot;http://example.com/feed.xml&quot; /&gt;
        </pre></div></div><h3>Include JavaScript code in HTML</h3><div class="row"><div class="col-sm-12"><pre class="pre">&lt;script src=&quot;example.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
// JavaScript code
&lt;/script&gt;
&lt;noscript&gt;This browser does not support Javascript.&lt;/noscript&gt;
        </pre></div></div><h3>Using HTML with CSS</h3><div class="row"><div class="col-sm-12"><pre class="pre">&lt;head&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;general.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;specific.css&quot;&gt;
&lt;style type=&quot;text/css&quot;&gt;
* {
margin: 0;
padding: 0;
border-box: box-sizing;
}
body {
background-color: gray;
}
.specific {
background-color: red;
}
&lt;/style&gt;
&lt;/head&gt;
        </pre></div></div><h3>Images</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;img src=&quot;http://lorempixel.com/200/200&quot; alt=&quot;Hello&quot;&gt;
        </pre></div><div class="col-sm-12 col-md-6"><img src="http://lorempixel.com/200/200" alt="Hello"></div></div><h3>Input</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;label&gt;Type: text&lt;/label&gt;
&lt;input type=&quot;text&quot;&gt;

&lt;label&gt;Type: checkbox&lt;/label&gt;
&lt;input type=&quot;checkbox&quot;&gt;

&lt;label&gt;Type: radio&lt;/label&gt;
&lt;input type=&quot;radio&quot;&gt;

&lt;label&gt;Type: checkbox&lt;/label&gt;
&lt;input type=&quot;checkbox&quot; checked&gt;

&lt;label&gt;Type: radio&lt;/label&gt;
&lt;input type=&quot;radio&quot; checked&gt;

&lt;label&gt;Type: color&lt;/label&gt;
&lt;input type=&quot;color&quot;&gt;

&lt;label&gt;Type: password&lt;/label&gt;
&lt;input type=&quot;password&quot;&gt;

&lt;label&gt;Type: file&lt;/label&gt;
&lt;input type=&quot;file&quot;&gt;

&lt;label&gt;Type: button&lt;/label&gt;
&lt;input type=&quot;button&quot; value=&quot;Button&quot;&gt;

&lt;label&gt;Type: submit&lt;/label&gt;
&lt;input type=&quot;submit&quot; value=&quot;Submit&quot;&gt;

&lt;label&gt;Type: reset&lt;/label&gt;
&lt;input type=&quot;reset&quot; value=&quot;Reset&quot;&gt;

&lt;label&gt;Type: hidden&lt;/label&gt;
&lt;input type=&quot;hidden&quot;&gt;

&lt;label&gt;Type: tel&lt;/label&gt;
&lt;input type=&quot;tel&quot; value=&quot;+15544332211&quot;&gt;

&lt;label&gt;Type: email&lt;/label&gt;
&lt;input type=&quot;email&quot;&gt;

&lt;label&gt;Type: number&lt;/label&gt;
&lt;input type=&quot;number&quot;&gt;

&lt;label&gt;Type: range&lt;/label&gt;
&lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;20&quot; step=&quot;2&quot;&gt;

&lt;label&gt;Type: search&lt;/label&gt;
&lt;input type=&quot;search&quot;&gt;

&lt;label&gt;Type: image&lt;/label&gt;
&lt;input type=&quot;image&quot;&gt;

&lt;label&gt;Type: week&lt;/label&gt;
&lt;input type=&quot;week&quot;&gt;

&lt;label&gt;Type: url&lt;/label&gt;
&lt;input type=&quot;url&quot;&gt;

&lt;label&gt;Type: datetime&lt;/label&gt;
&lt;input type=&quot;datetime-local&quot;&gt;

&lt;label&gt;Type: month&lt;/label&gt;
&lt;input type=&quot;month&quot;&gt;

&lt;label&gt;Type: time&lt;/label&gt;
&lt;input type=&quot;time&quot;&gt;

&lt;label&gt;Type: date&lt;/label&gt;
&lt;input type=&quot;date&quot;&gt;

&lt;input id=&quot;red&quot; type=&quot;text&quot;&gt;
&lt;label for=&quot;red&quot;&gt;Red&lt;/label&gt;

&lt;label&gt;
  Blue
  &lt;input id=&quot;red&quot; type=&quot;text&quot;&gt;
&lt;/label&gt;

&lt;fieldset&gt;
  &lt;legend&gt;Theme Color&lt;/legend&gt;
  &lt;label for=&quot;color&quot;&gt;Define the color&lt;/label&gt;
  &lt;input id=&quot;color&quot; type=&quot;text&quot;&gt;
&lt;/fieldset&gt;

&lt;h4&gt;Validation&lt;/h4&gt;
&lt;input type=&quot;text&quot; required&gt;

&lt;input type=&quot;text&quot; minlength=&quot;5&quot; maxlength=&quot;10&quot;&gt;

&lt;input type=&quot;text&quot; pattern=&quot;\\d*&quot;&gt;
        </pre></div><div class="col-sm-12 col-md-6"><label>Type: text</label><input type="text"><br><label>Type: checkbox</label><input type="checkbox"><br><label>Type: radio</label><input type="radio"><br><label>Type: checkbox</label><input type="checkbox" checked><br><label>Type: radio</label><input type="radio" checked><br><label>Type: color</label><input type="color"><br><label>Type: password</label><input type="password"><br><label>Type: file</label><input type="file"><br><label>Type: button</label><input type="button" value="Button"><br><label>Type: submit</label><input type="submit" value="Submit"><br><label>Type: reset</label><input type="reset" value="Reset"><br><label>Type: hidden</label><input type="hidden"><br><label>Type: tel</label><input type="tel" value="+15544332211"><br><label>Type: email</label><input type="email"><br><label>Type: number</label><input type="number"><br><label>Type: range</label><input type="range" min="0" max="20" step="2"><br><label>Type: search</label><input type="search"><br><label>Type: image</label><input type="image"><br><label>Type: week</label><input type="week"><br><label>Type: url</label><input type="url"><br><label>Type: datetime</label><input type="datetime-local"><br><label>Type: month</label><input type="month"><br><label>Type: time</label><input type="time"><br><label>Type: date</label><input type="date"><br><input id="red" type="text"><label for="red">Red</label><br><label> Blue <input id="red" type="text"></label><br><fieldset><legend>Theme Color</legend><label for="color">Define the color</label><input id="color" type="text"></fieldset><h4>Validation</h4><input type="text" required><br><input type="text" minlength="5" maxlength="10"><br><input type="text" pattern="\\d*"><br></div></div><h3>Forms</h3>`,19),hc=M("div",{class:"row"},[M("div",{class:"col-sm-12 col-md-6"},[M("pre",{class:"pre"},`<form action="upload.php" method="get"></<form>

<form action="upload.php" method="post"></form>

<form method="post" enctype="multipart/form-data" action="upload.php">
  <input type="file" name="pic" />
  <input type="submit" value="Upload" />
</form>
        `)]),M("div",{class:"col-sm-12 col-md-6"},[M("form",{action:"upload.php",method:"get"}),M("form",{action:"upload.php",method:"post"}),M("form",{method:"post",enctype:"multipart/form-data",action:"upload.php"},[M("input",{type:"file",name:"pic"}),M("input",{type:"submit",value:"Upload"})])])],-1),gc=Zt(`<h3>Div</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;div&gt;Not nested&lt;/&lt;div&gt;
&lt;div class=&quot;outer-div&quot;&gt;
  &lt;div class=&quot;inner-div&quot;&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&quot;inner-div&quot;&gt;
    &lt;p&gt;This is another paragraph&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
        </pre></div><div class="col-sm-12 col-md-6"><div>Not nested</div><div class="outer-div"><div class="inner-div"><p>This is a paragraph</p></div><div class="inner-div"><p>This is another paragraph</p></div></div></div></div><h3>Sectioning</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;nav&gt;
  &lt;a href=&quot;#&quot;&gt;Link 1&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Link 2&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Link 3&lt;/a&gt;
&lt;/nav&gt;

&lt;header&gt;&lt;/header&gt;
&lt;section&gt;&lt;/section&gt;
&lt;footer&gt;&lt;/footer&gt;
&lt;article&gt;&lt;/article&gt;
&lt;main&gt;&lt;/main&gt;

&lt;section&gt;
  &lt;article&gt;&lt;/article&gt;
&lt;/section&gt;
&lt;article&gt;
  &lt;header&gt;&lt;/header&gt;
  &lt;section&gt;&lt;/section&gt;
  &lt;footer&gt;&lt;/footer&gt;
&lt;/article&gt;
        </pre></div></div><h3>Navigation Bars</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;nav&gt;
  &lt;a href=&quot;#&quot;&gt;Link 1&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Link 2&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Link 3&lt;/a&gt;
&lt;/nav&gt;

&lt;ul&gt;
  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
        </pre></div><div class="col-sm-12 col-md-6"><nav><a href="#" class="color_blue100">Link 1</a><a href="#" class="color_blue100">Link 2</a><a href="#" class="color_blue100">Link 3</a></nav><ul><li><a href="#" class="color_blue100">Link 1</a></li><li><a href="#" class="color_blue100">Link 2</a></li><li><a href="#" class="color_blue100">Link 3</a></li></ul></div></div><h3>Label</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;label&gt;
  &lt;input type=&quot;checkbox&quot; name=&quot;Cats&quot;&gt;
  I like cats
&lt;/&lt;label&gt;

&lt;input id=&quot;cats&quot; type=&quot;checkbox&quot; name=&quot;Cats&quot;&gt;
&lt;label for=&quot;cats&quot;&gt;I like cats&lt;/label&gt;
        </pre></div><div class="col-sm-12 col-md-6"><label><input type="checkbox" name="Cats"> I like cats </label><input id="cats" type="checkbox" name="Cats"><label for="cats">I like cats</label></div></div><h3>Void Elements</h3><div class="row"><div class="col-sm-12"><pre class="pre">&lt;area&gt;
&lt;base&gt;
&lt;br&gt;
&lt;col&gt;
&lt;hr&gt;
&lt;img&gt;
&lt;input&gt;
&lt;link&gt;
&lt;meta&gt;
&lt;param&gt;
        </pre></div></div><h3></h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;audio controls&gt;
  &lt;source src=&quot;file.mp3&quot; type=&quot;audio/mp3&quot;&gt;
  Your browser does not support this element.
&lt;/&lt;audio&gt;

&lt;video controls&gt;
  &lt;source src=&quot;file.mp4&quot; type=&quot;video/mp4&quot;&gt;
  Your browser does not support this element.
&lt;/video&gt;
        </pre></div><div class="col-sm-12 col-md-6"><audio controls><source src="" type="audio/mp3"> Your browser does not support this element. </audio><video controls><source src="" type="video/mp4"> Your browser does not support this element. </video></div></div><h3></h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">          &lt;progress value=&quot;20&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;
        </pre></div><div class="col-sm-12 col-md-6"><progress value="20" max="100"></progress></div></div><h3>Selection Menu Controls</h3><div class="row"><div class="col-sm-12 col-md-6"><pre class="pre">&lt;select name=&quot;one&quot;&gt;
  &lt;option value=&quot;&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
  &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
  &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;select name=&quot;two&quot;&gt;
  &lt;option value=&quot;&quot; label=&quot;&quot;&gt;
  &lt;option value=&quot;1&quot; label=&quot;One&quot;&gt;
  &lt;option value=&quot;2&quot; label=&quot;Two&quot;&gt;
  &lt;option value=&quot;3&quot; label=&quot;Three&quot;&gt;
&lt;/select&gt;

&lt;select name=&quot;three&quot; multiple&gt;
  &lt;option value=&quot;&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
  &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
  &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;select name=&quot;four&quot; multiple&gt;
  &lt;option value=&quot;&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;1&quot; selected&gt;One&lt;/option&gt;
  &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
  &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;

&lt;input list=&quot;Languages&quot;&gt;
&lt;datalist id=&quot;Languages&quot;&gt;
  &lt;option value=&quot;PHP&quot;&gt;
  &lt;option value=&quot;Perl&quot;&gt;
  &lt;option value=&quot;Python&quot;&gt;
  &lt;option value=&quot;Ruby&quot;&gt;
  &lt;option value=&quot;C+&quot;&gt;
&lt;/datalist&gt;
        </pre></div><div class="col-sm-12 col-md-6"><select name="one"><option value=""></option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select><select name="two"><option value="" label=""></option><option value="1" label="One"></option><option value="2" label="Two"></option><option value="3" label="Three"></option></select><select name="three" multiple><option value=""></option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select><select name="four" multiple><option value=""></option><option value="1" selected>One</option><option value="2">Two</option><option value="3">Three</option></select><input list="Languages"><datalist id="Languages"><option value="PHP"></option><option value="Perl"></option><option value="Python"></option><option value="Ruby"></option><option value="C+"></option></datalist></div></div><h3>Embed</h3><div class="row"><div class="col-sm-12"><pre class="pre">&lt;embed type=&quot;video/mp4&quot; src=&quot;video.mp4&quot; width=&quot;640&quot; height=&quot;480&quot;&gt;
        </pre></div></div><h3>Iframe</h3>`,19),mc=M("div",{class:"row"},[M("div",{class:"col-sm-12 col-md-6"},[M("pre",{class:"pre"},`<iframe src="base.html"></<iframe>
<iframe src="http://www.example.com"></iframe>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/suUsDNq4WtM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
        `)]),M("div",{class:"col-sm-12 col-md-6"},[M("iframe",{src:""}),M("iframe",{src:"http://www.example.com"}),M("iframe",{width:"360",height:"115",src:"https://www.youtube.com/embed/suUsDNq4WtM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])],-1),vc=M("h3",null,"SVG",-1),bc={class:"row"},yc=M("div",{class:"col-sm-12 col-md-6"},[M("pre",{class:"pre"},`<svg
  style="width: 100px; height: 100px;"
  class="attention"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 1000 1000">
    <path
    id="attention"
    d="large code here" />
</svg>
        `)],-1),wc={class:"col-sm-12 col-md-6"},xc={style:{width:"100px",height:"100px"},class:"attention",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1000 1000"},_c=M("path",{id:"attention",d:"m571,767l0,-106q0,-8,-5,-13t-12,-5l-108,0q-7,0,-12,5t-5,13l0,106q0,8,5,13t12,6l108,0q7,0,12,-6t5 ,-13Zm-1,-208l10,-257q0,-6,-5,-10q-7,-6,-14,-6l-122,0q-7,0,-14,6q-5,4,-5,12l9,255q0,5,6,9t13,3l103, 0q8,0,13,-3t6,-9Zm-7,-522l428,786q20,35,-1,70q-10,17,-26,26t-35,10l-858,0q-18,0,-35,-10t-26,-26q-21 ,-35,-1,-70l429,-786q9,-17,26,-27t36,-10t36,10t27,27Z"},null,-1),qc=[_c];function Cc(t,e){return jt(),Ut("div",uc,[dc,pc,fc,hc,gc,mc,vc,M("div",bc,[yc,M("div",wc,[(jt(),Ut("svg",xc,qc))])])])}const Tc=ae(cc,[["render",Cc]]),Ec={},Sc={class:"container"},kc=Zt('<div class="row"><div class="col-sm-12 col-md-4"><h2>Basics</h2><h3>CSS Design Patterns</h3><ul><li><strong><a href="https://en.bem.info/" target="_blank">BEM</a> - Block Element Modifier</strong>: .block__element_modifier </li></ul><h3>Block Construction Order</h3><ol><li><strong>html / folders</strong></li><li><strong>bg-reference / base</strong></li><li><strong>flexbox / positioning</strong></li><li><strong>grid</strong> (fr &gt; px &gt; %)</li><li><strong>img</strong></li><li><strong>font-*</strong> (family/size/weight/style)</li><li><strong>padding</strong> (-left? button?) (px)</li><li><strong>margin-top / margin-left</strong> (px)</li><li><strong>width / height</strong> (% &gt; px)</li><li>color / background-color</li></ol><a href="https://codepen.io/as-one/pen/eYdvPbZ" target="_blank">Set bg-reference</a><h3>Rules Order</h3><ol><li><strong>Display</strong>: display, position, and float</li><li><strong>Box model</strong>: width, height, margin, padding, and border</li><li><strong>Background</strong></li><li><strong>Typography</strong></li><li>Other</li></ol><h3>Box Model</h3><ul><li><strong>margin &gt; border &gt; padding</strong> &gt; content</li></ul><h3>Selectors</h3><ul><li><strong>*</strong> // universal selector (all elements)</li><li><strong>div</strong> // tag selector (all &lt;div&gt; elements)</li><li><strong>#headline</strong> // id</li><li><strong>.blue</strong> // class blue</li><li><strong>.blue.red</strong> // class blue and red</li><li><strong>:hover</strong> // mouseover</li><li><strong>::after</strong> // after any element. Use as a complement of it.</li><li><strong>::before</strong> // before any element. Use as a complement of it.</li><li><strong>div &gt; p</strong> // child p of div</li><li><strong>[attr=&#39;val&#39;]</strong> // attribute attr equal val</li><li><strong>:first-child</strong></li><li><strong>:last-child</strong></li><li><strong>:nth-child(2)</strong> // number, odd, or even</li><li><strong>:nth-of-type(2)</strong> // number, odd, or even</li></ul><h3>Length units</h3><ul><li><strong>%</strong> percentage</li><li><strong>em</strong> relative to parent&#39;s font-size</li><li><strong>rem</strong> relative to root&#39;s font-size (1rem == browser&#39;s font-size)</li><li><strong>vw</strong> viewport width</li><li><strong>vh</strong> viewport height</li><li><strong>px</strong> pixels</li><li><strong>fr</strong> fraction. Unit used for grid</li></ul><h3>Adding CSS</h3><ul><li>External stylesheet <strong>&lt;link rel=&quot;stylesheet&quot; href=&quot;&quot;&gt; </strong></li><li>Internal stylesheet <strong>&lt;style&gt;* { }&lt;/style&gt; </strong></li><li>Import in CSS: <strong>@import { url(./folder/file.css); }</strong></li></ul><h3>Media queries</h3><ul><li><strong>@media (min-width: 480px) {}</strong> // Tablet</li><li><strong>@media (min-width: 992px) {}</strong> // Desktop</li><li>@media screen and (min-width: 769px) and (max-width: 992px) {} // Exceptions</li><li><a href="https://codepen.io/cesarkohl/pen/PoPxweK" target="_blank">All @media</a></li></ul><h3>Comments</h3><ul><li><strong>/* Comment */</strong></li><li><strong>// Comment</strong></li></ul><h3>Lines</h3><ul><li>div { display: hidden; } <strong>// one rule, one line</strong></li><li>div { position: absolute; top: 0; } <strong>// over one rule, multiple lines</strong></li></ul><h3>Custom properties</h3><ul><li><strong>:root</strong> { <strong>--blue</strong>: #0A0A0A; }</li><li>div { color: <strong>var(--blue)</strong>; }</li></ul><h3>Functions</h3><ul><li>width: <strong>calc(50% - 100px)</strong>;</li><li>color: <strong>var(--blue)</strong>; // -- blue set in <strong>:root {}</strong></li><li><strong>radial-gradient(red, orange, yellow)</strong>; // background</li><li><strong>linear-gradient(0deg, red, yellow 50%, blue)</strong>; // background</li></ul><h3>!important</h3><ul><li>color: red <strong>!important</strong>; // overrides blue</li><li>color: blue;</li></ul></div><div class="col-sm-12 col-md-4"><h2>Structure</h2><h3 class="h4">Grid</h3><div class="container container_col_two"><div class="col"><h4>Parent</h4><ul><li><strong>display: grid;</strong></li><li><strong>grid-template-rows</strong>: 100px 200px 100px;</li><li><strong>grid-template-columns</strong>: 1fr repeat(10, 99px) 1fr;</li><li>grid: grid-template-rows / grid-template-columns;</li><li>gap: 10px 20px;</li><li>place-items: center center;</li></ul></div><div class="col"><h4>Children</h4><ul><li><strong>grid-row</strong>: 1 / 3;</li><li><strong>grid-column</strong>: 2 / 3;</li><li>place-self: end end;</li></ul></div></div><ul><li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">CSS Tricks&#39;s Complete Guide to Grid</a></li></ul><h3 class="h4">Flexbox</h3><div class="container container_col_two"><div class="col"><h4>Parent</h4><ul><li><strong>display: flex;</strong></li><li><strong>flex-direction</strong>: row | column</li><li><strong>flex-wrap</strong>: nowrap || wrap; // nowrap disregard width.</li><li>flex-flow: flex-direction + flex-wrap</li><li><strong>justify-content</strong>: x axis</li><li><strong>align-content</strong>:; y axis</li><li>align-items:; // y axis</li></ul></div><div class="col"><h4>Children</h4><ul><li><strong>flex-grow</strong>: (number)</li><li><em>flex-shrink: (number)</em></li><li><em>flex-basis: auto</em></li><li><em>flex: flex-grow + flex-shrink + flex-basis</em></li><li><em>order: (number)</em></li><li><em>align-self: Check Dev Tools&#39;s options</em></li></ul></div></div><ul><li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks&#39;s Complete Guide to Flexbox</a></li></ul><h3 class="h4">Positioning</h3><div class="container container_col_two"><div class="col"><h4>Parent</h4><ul><li><strong>position: relative</strong></li></ul></div><div class="col"><h4>Children</h4><ul><li><strong>position: absolute</strong></li><li><strong>top:</strong> (number);</li><li><strong>right:</strong> (number);</li><li><strong>bottom:</strong> (number);</li><li><strong>left:</strong> (number);</li><li><strong>z-index:</strong> (number);</li></ul></div></div><ul></ul><ul><li>position: <strong>fixed</strong> // fixed in the screen despite scrolling</li></ul><h3>Display</h3><ul><li>display: <strong>inline</strong>; // siblings inline are in the same line</li><li>display: <strong>block</strong>; // width 100%</li><li>display: <strong>none</strong>; // hides element</li></ul><h3>Float</h3><ul><li><strong>float: left || right;</strong></li></ul><h3>Centering</h3><ul><li><a href="https://codepen.io/cesarkohl/pen/PoPxwbW" target="_blank">Horizontal + vertical using Grid</a> // parent &amp; child </li><li><a href="https://codepen.io/cesarkohl/pen/gOaQOZa" target="_blank">Horizontal + vertical using Flexbox</a> // parent &amp; child </li><li><a href="https://codepen.io/cesarkohl/pen/wvKQvLg" target="_blank">Horizontal + vertical using Position: absolute</a> // parent &amp; child </li><li><a href="https://codepen.io/cesarkohl/pen/QWyjvpa" target="_blank">Horizontal using margin: 0 auto</a> // no parent </li></ul><h3>Margin</h3><ul><li><strong>margin: top right bottom left;</strong> // clockwise</li><li>margin: 10px 100px 5px; // == 10px 100px 5px 100px</li><li>margin: 20px 200px; // == 20px 200px 20px 200px</li></ul><h3>Padding</h3><ul><li><strong>padding: top right bottom left;</strong> // clockwise</li><li>padding: 10px 100px 5px; // == 10px 100px 5px 100px</li><li>padding: 20px 200px; // == 20px 200px 20px 200px</li></ul><h3>Border</h3><ul><li><strong>border</strong>: 1px solid black;</li><li><strong>border-top</strong>: 1px solid black;</li><li><strong>border-right</strong>: 1px solid black;</li><li><strong>border-bottom</strong>: 1px solid black;</li><li><strong>border-left</strong>: 1px solid black;</li><li><strong>border-radius</strong>: 10px;</li><li><strong>box-sizing: border-box;</strong> // border inside the box&#39;s dimension</li><li><a href="https://codepen.io/cesarkohl/pen/qBbbKmv" target="_blank">Case: Border &amp; outline</a></li></ul><h3>Opacity</h3><ul><li><strong>opacity</strong>: 0.5;</li></ul><h3>Typography</h3><ul><li><strong>font-style: italic;</strong></li><li><strong>font-weight</strong>: bold || number from 100 to 900</li><li><strong>font-size</strong>: 10px;</li><li><strong>line-height</strong>: 5px; // font&#39;s container</li><li><strong>font-family</strong>: <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> &amp;&amp; sans-serif || serif; </li><li><strong>color</strong>: #000000;</li><li><strong>text-align</strong>: left || right || center || justify;</li><li><strong>text-decoration</strong>: underline || none;</li><li><strong>text-transform</strong>: uppercase || lowercase;</li><li><strong>text-shadow</strong>: <a href="https://css3gen.com/text-shadow/" target="_blank">Text Shadow tool</a> // copy &amp; paste </li><li><strong>letter-spacing</strong>: 2px; // space between letters</li></ul></div><div class="col-sm-12 col-md-4"><h2>Details</h2><h3>Overflow</h3><ul><li><strong>overflow: auto</strong>; // when float is used in children apply this to the parent</li><li><strong>overflow: hidden</strong>; // hide content that overpasses the element</li></ul><h3>Backgrounds</h3><ul><li><strong>background-image:</strong> url(./folder/file.jpg || png || svg);</li><li><strong>background-color:</strong> blue;</li><li><strong>background-position:</strong> top center;</li><li><strong>background-size:</strong> 10px 20px || auto || contain || cover;</li><li><strong>background-repeat: no-repeat</strong>;</li><li>background-origin</li><li>background-clip</li><li>background-attachment</li><li><a href="https://codepen.io/cesarkohl/pen/xxZwqPz" target="_blank">All background&#39;s properties applied</a></li><li><a href="https://codepen.io/cesarkohl/pen/abdvWOX" target="_blank">Case: SVG background image and color</a></li></ul><h3>Object fit</h3><ul><li><strong>object-fit</strong>:; // consider in backgrounds</li></ul><h3>Box-shadow</h3><ul><li><a href="https://www.cssmatic.com/box-shadow" target="_blank">Box Shadow tool</a> // copy &amp; paste</li></ul><h3>Color</h3><ul><li><strong>color</strong>: red;</li><li><strong>border</strong>: 1px solid red;</li><li><strong>box-shadow</strong>: 0 0 5px <strong>currentColor</strong>;</li><li><strong>background</strong>: #000000;</li><li>// #000000 == #000</li><li>// #00FFCC == #0FC</li></ul><h3>List styles</h3><ul><li><strong>ul { padding: 0; }</strong> // good practice for normalization</li><li><strong>ul { list-style-type: none;</strong> } // lis&#39;s dots dissapear</li></ul><h3>Filter</h3><ul><li><strong>filter: blur(</strong>10px<strong>);</strong></li></ul><h3>Cursor</h3><ul><li><strong>pointer: cursor;</strong> // use on &lt;a&gt; or &lt;button&gt; to show up the cursor on hover</li></ul><h3>Table</h3><ul><li><a href="https://www.w3schools.com/css/css_table.asp" target="_blank">W3Schools&#39;s Styling Tables</a></li></ul><h3>Transitions</h3><ul><li><strong>transition:</strong> {duration} {property} {timing-function}</li><li><strong>transition-delay:</strong> 0.5s</li><li><strong>transition-duration:</strong> 1s</li><li><strong>transition-property:</strong> height</li><li><strong>transition-timing-function:</strong> ease, linear, ease-(in|out|in-out), cubic bezier(n,n,n,n)</li></ul><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" target="_blank">Mozilla&#39;s CSS Transitions Docs</a></li><li><a href="https://www.w3schools.com/css/css3_transitions.asp">W3Schools&#39; CSS Transitions Docs</a></li><li><a href="https://codepen.io/cesarkohl/pen/ExPVWQL" target="_blank">All transition&#39;s properties applied</a></li></ul><h3>2D transforms</h3><ul><li><a href="https://codepen.io/cesarkohl/pen/ExPVWep" target="_blank">Case: Menu hamburger</a></li></ul><h3>3D transforms</h3><ul><li><a href="https://3dtransforms.desandro.com/" target="_blank">DeSandro&#39;s Intro to CSS 3D</a></li><li><a href="https://codepen.io/cesarkohl/pen/pogjeKw" target="_blank">Case: 3D phone rotating</a></li></ul><h3>Animation</h3></div></div>',1),Ac=[kc];function Rc(t,e){return jt(),Ut("div",Sc,Ac)}const Oc=ae(Ec,[["render",Rc]]),Pc={},Lc={class:"container"},Ic=Zt(`<div class="row"><div class="col-sm-12"><h2>Basics</h2></div></div><div class="row"><div class="col-sm-12"><h3>Fundamentals</h3></div></div><div class="row"><div class="col-sm-12"><div class="row"><div class="col-sm-12 col-md-4"><h4>Developer Console</h4><pre class="pre">Command + Option + I
console.log();
debugger;
alert();
            </pre><h4>Variables</h4><pre class="pre">const
let   // block scope
var   // function scope
            </pre><h4>Data Types</h4><pre class="pre">string    // &quot;&quot; &#39;&#39; \`\`
number
boolean   // true || false
array     // []
object    // {}
            </pre><h4>Type Conversions</h4><pre class="pre">Number()    // to number
String()    // to string
Boolean()   // to boolean
            </pre></div><div class="col-sm-12 col-md-4"><h4>Comparisons</h4><pre class="pre">===
&lt;=
&gt;=
!=    // different
&amp;&amp;    // and
||    // or
            </pre><h4>Conditional</h4><pre class="pre">if () {

} else
if () {

} else {

}

let name = (conditional) ? true : false;
            </pre><h4>Logical Operators</h4><pre class="pre">+
-
*	// multiplication
/	// division
++	// +1
--	// -1
            </pre></div><div class="col-sm-12 col-md-4"><h4>Loops</h4><pre class="pre">switch {
  case 1:
    break;
  case 2:
    break;
  default:
    break;
}

let length = 20;
for (let i = 0; i &lt; length; i++) {

}

arrays.forEach(array =&gt; {
  console.log(array);
});

objects.forEach(object =&gt; {
console.log(object);
});

Array.map()     // creates a new array
Array.reduce()  // returns single value
Array.find()    // returns the first passed element
Array.filter()  // return filtered string
Array.every()   // if all return true
Array.some()    // if some return true
Array.indexOf() // index of
            </pre><a target="_blank" href="https://www.w3schools.com/js/js_array_iteration.asp">W3Schools&#39; JS Array Iteration</a><h4>Functions</h4><pre class="pre">function name() {}
let name = function() {}
let name = () =&gt; {}       // arrow function
            </pre></div></div></div></div><div class="row"><div class="col-sm-12 col-md-4"><h3>Code Quality</h3><div class="row"><div class="col-sm-12"><h4>Coding Style</h4><a style="display:block;" target="_blank" href="https://prettier.io/">Prettier</a><a style="display:block;" target="_blank" href="https://eslint.org/">ESLint</a><a style="display:block;" target="_blank" href="https://javascript.info/coding-style">JS Info&#39;s Coding Style</a><h4>Comments</h4><pre class="pre">// Single line

/*
Block
*/
            </pre></div></div><h3>Objects</h3><div class="row"><div class="col-sm-12"><h4></h4><pre class="pre">let newObject = {
  key: &quot;value&quot;,
  key2: &quot;value2&quot;
};
            </pre></div></div></div><div class="col-sm-12 col-md-4"><h3>Data Types</h3><div class="row"><div class="col-sm-12"><h4>Array</h4><pre class="pre">let newArray = [&quot;value&quot;, &quot;value2&quot;];
            </pre><h4>Date</h4><pre class="pre">let date = new Date();
            </pre><h4>JSON</h4><pre class="pre">{
  &quot;key&quot;: &quot;value&quot;,
  &quot;key2&quot;: &quot;value2&quot;
}
            </pre></div></div><h3>Classes</h3><div class="row"><div class="col-sm-12"><pre class="pre">class Example {
  // 1. let const
  // 2. functions
  // 3. render() || init()
}
            </pre></div></div><h3>Modules</h3><div class="row"><div class="col-sm-12"><pre class="pre">export default Logo;          // in file logo.js
import Logo from &#39;./logo.js&#39;; // in file index.js
            </pre></div></div></div><div class="col-sm-12 col-md-4"><h3>Promises</h3><div class="row"><div class="col-sm-12"><h4>then</h4><pre class="pre">function runPromise(){
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;runPromise&#39;);
    }, 1000);
  })
}
runPromise().then(console.log);
            </pre><h4>async/await</h4><pre class="pre">async function runNewPromise() {
  let promise = new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      resolve(&#39;runNewPromise&#39;);
    }, 2000);
})

  let response = await promise;
  console.log(response);
}
runNewPromise();
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h2>Browser</h2></div></div><div class="row"><div class="col-sm-12 col-lg-6"><h3>Parent &amp; Children</h3><div class="row"><div class="col-sm-12"><pre class="pre">let parent = document.querySelector(&#39;.parent&#39;),       // get parent
els = document.querySelectorAll(&#39;.parent .el&#39;),       // get all children
el = document.querySelector(&#39;.parent .el&#39;),           // get one child
newEl = document.createElement(&#39;div&#39;);                // create element
            </pre></div></div><h3>Events</h3><div class="row"><div class="col-sm-12"><pre class="pre">document.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {});  // ready
el.addEventListener(&#39;click&#39;, () =&gt; {});                   // on
el.removeEventListener();                                    // off Check MDN
window.addEventListener(&quot;resize&quot;, () =&gt; {});              // on resize
            </pre></div></div><h3>Elements</h3><div class="row"><div class="col-sm-12"><h4>Create</h4><pre class="pre">document.createElement(&#39;div&#39;);                  // create
el.cloneNode(true|false);                       // clone
el.before(newEl);                               // prev sibling / before()
el.prepend(newEl);                              // first child / prepend()
el.append(newEl);                               // last child / append()
el.after(newEl);                                // next sibling / after()
el.replaceWith(newEl);                          // replace all
// el.insertAdjacentHTML(&#39;&#39;, newEl);            // Check MDN
            </pre><h4>Retrieve</h4><pre class="pre">document.querySelector(&#39;.className&#39;);           // get element
document.querySelectorAll(&#39;.className&#39;);        // get elements
el.querySelectorAll(&#39;.className&#39;);              // get children by selector
el.closest(&#39;.className&#39;);                       // get closest parent by selector

el.parentElement;                               // get parent
el.children;                                    // get children
el.firstElementChild;                           // get first child
el.lastElementChild;                            // get last child
el.previousElementSibling;                      // get previous sibling
el.nextElementSibling;                          // get next sibling

el.forEach((item, index, array) =&gt; {});         // foreach (Array)
            </pre><h4>Delete</h4><pre class="pre">el.remove();                                    // remove itself
el.innerHTML = &#39;&#39;;                              // remove content
            </pre></div></div></div><div class="col-sm-12 col-lg-6"><h3>Attributes</h3><div class="row"><div class="col-sm-12"><h4>Class</h4><pre class="pre">el.className;                                   // get class name
el.classList.add(&#39;className&#39;);                  // add class
el.classList.remove(&#39;className&#39;);               // remove class
el.classList.toggle(&#39;className&#39;);               // toggle class
            </pre><h4>Style</h4><pre class="pre">getComputedStyle(el)[&#39;width&#39;];                  // get any style post-rendering

el.style.borderWidth = &#39;10px&#39;;                  // set style
el.style.borderWidth;                           // get style

el.setAttribute(&#39;attr&#39;, &#39;value&#39;);               // set attributes
el.getAttribute(&#39;attr&#39;);                        // get attributes
el.removeAttribute(&#39;attr&#39;);                     // remove attributes
            </pre><h4>Position, width, and height</h4><pre class="pre">el.getBoundingClientRect();                     // get all positions
el.offsetTop; el.offsetLeft;                    // get position top and left

el.style.width = &#39;100px&#39;;                       // set width
el.clientWidth;                                 // get width

el.style.height = &#39;100px&#39;;                      // set height
el.clientHeight;                                // get height

window.scrollX;                                 // pixels scrolled in X axis
window.scrollY;                                 // pixels scrolled in Y axis

document.body.clientWidth;                      // window width (for resizing)
document.body.clientHeight;                     // window height
            </pre><h4>Content</h4><pre class="pre">el.outerHTML = &#39;&lt;div&gt;&lt;/&lt;div&gt;&#39;;                  // set HTML
el.outerHTML;                                   // get HTML

el.innerHTML = &#39;Content&#39;;                       // set content of HTML
el.innerHTML;                                   // get content of HTML
            </pre><h4>Returns boolean</h4><pre class="pre">el.classList.contains(&#39;className&#39;);             // has class
el.filter(() =&gt; {});                            // filter
el !== child &amp;&amp; el.contains(child);             // contains
!!newMe.querySelector(&#39;.className&#39;);            // contains selector
el === newEl;                                   // matches
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h2>Additional</h2></div></div><div class="row"><div class="col-sm-12"><h3>General</h3><div class="row"><div class="col-sm-12 col-lg-6"><h4>Nomenclature</h4><pre class="pre">DOM = Document Object Model
            </pre></div><div class="col-sm-12 col-lg-6"><h4>UI Events</h4><pre class="pre">Mouse: click, scroll, mouseenter, mouseleave
Keyboard: keydown, keyup
Form: focus, blur, change
            </pre></div></div></div></div><div class="row"><div class="col-sm-12 col-lg-6"><h3>Storing data</h3><div class="row"><div class="col-sm-12"><h4>Cookie - Older approach</h4><pre class="pre">C: setCookie(key, value)
R: getCookie(key)
U: setCookie(key, value)
D: deleteCookie(key)
            </pre><a target="_blank" href="https://javascript.info/cookie">JS Info Cookie&#39;s Functions</a><h4>Local Storage - Newer approach</h4><pre class="pre">C: localStorage.setItem(&#39;key&#39;, &#39;value&#39;)
R: localStorage.getItem(&#39;key&#39;)
U: localStorage.setItem(&#39;key&#39;, &#39;value&#39;)
D: localStorage.removeItem(&#39;key&#39;)
            </pre></div></div></div><div class="col-sm-12 col-lg-6"><h3>Misc</h3><div class="row"><div class="col-sm-12"><h4>Extra functions</h4><pre class="pre">let fetchData = fetch(url, options);            // Fetching
JSON.stringify({});                             // JSON to string
JSON.parse(&#39;string&#39;);                           // JSON string to object
el.slice(0, 5);                                 // slice
el.trim();                                      // trim
Object.values(els).indexOf(el);                 // index of
Array.isArray(el);                              // is array
Date.now();                                     // now
typeof el;                                      // type
Math.ceil(Math.random() * 10);                  // random between 0 and 10

el.style.display = &#39;block&#39;;                     // show tag
el.style.display = &#39;none&#39;;                      // hide tag
            </pre></div></div></div><div class="row"><div class="col-sm-12"><h2>Fetching</h2></div></div><div class="col-sm-12 col-lg-6"><h3>fetch()</h3><pre class="pre">const fetchCatData = async () =&gt; {
  const API_URL = &#39;https://localhost/&#39;;

  try {
    const response = await fetch(API_URL);
    const date = await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchCatData();
            </pre></div><div class="col-sm-12 col-lg-6"><h3>Axios RESTful</h3><pre class="pre">import axios from &quot;axios&quot;;

const API_URL = &quot;http://localhost/&quot;;

const getIndex = () =&gt; {
  return axios.get(API_URL + &quot;contact&quot;, { headers: authHeader() });
};

const store = (values) =&gt; {
  const { username, email } = values;

  return axios.post(API_URL + &quot;contact/&quot;, {
    name: username,
    email
  }, { headers: authHeader() });
};

const update = (values) =&gt; {
  const { id, username, email } = values;

  return axios.put(API_URL + &quot;contact/&quot; + id, {
    name: username,
    email
  }, { headers: authHeader() });
};

const destroy = (values) =&gt; {
  const { id, email } = values;

  return axios({
    method: &#39;DELETE&#39;,
    url: API_URL + &quot;contact/&quot; + id,
    headers: authHeader(),
    data: { email }
  });
};
          </pre></div></div>`,9),Mc=[Ic];function Nc(t,e){return jt(),Ut("div",Lc,Mc)}const Fc=ae(Pc,[["render",Nc]]),Dc={},Hc={class:"container"},Bc=Zt(`<div class="row"><div class="col-sm-12"><h2>Basics</h2></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Types</h3></div></div><div class="row"><div class="col-sm-12"><h4>unknown &amp; any</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">let varUnknown: unknown;
let varAny: any;
            </pre></div></div><div class="row"><div class="col-sm-12"><h4>string, boolean, number, array</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">let varString: string = &quot;Hello World&quot;;
let varBoolean: boolean = true;
let varNumber: number = 10;
let varArray: string[] = [&#39;one&#39;, &#39;two&#39;, &#39;three&#39;];
            </pre></div></div><div class="row"><div class="col-sm-12"><h4>object (+optional, function)</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">let varObject: {
  one: string;
  two?: boolean; // optional
  callback(): void;
} = {
  one: &#39;one&#39;,
  callback: () =&gt; { }
};
            </pre></div></div><div class="row"><div class="col-sm-12"><h4>object (+optional) + interface</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">interface IVarObject {
  one: string;
  two?: boolean; // optional
}

let varObject: IVarObject = {
  one: &#39;one&#39;
};
            </pre></div></div></div><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Functions</h3></div></div><div class="row"><div class="col-sm-12"><h4>return void</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">function consoleLogMessage(message: any): void {
  console.log(message);
}

consoleLogMessage(&#39;Message&#39;); // Message
            </pre></div></div><div class="row"><div class="col-sm-12"><h4>return not void</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">function add(x: number, y: number): number {
  return x + y;
}

add(1, 2); // 3
            </pre></div></div><div class="row"><div class="col-sm-12"><h4>param as object</h4></div></div><div class="row"><div class="col-sm-12"><pre class="pre">function addFromObject({ x, y }: { x: number; y: number }): number {
  return x + y;
}

addFromObject({ x: 1, y: 2 }); // 3
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h2>Advanced</h2></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Types</h3></div></div><div class="row"><div class="col-sm-12"><h4>null &amp; undefined</h4></div></div><pre class="pre">let varNull: null = null;     // useless
let varUndefined: undefined;  // useless
        </pre><div class="row"><div class="col-sm-12"><h4>unknown &amp; any</h4></div></div><pre class="pre">let varArray: unknown[] = [&#39;one&#39;, true, 3];
let varArray: any[] = [&#39;one&#39;, true, 3];
        </pre></div><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Functions</h3></div></div><div class="row"><div class="col-sm-12"><h4>function is type object</h4></div></div><pre class="pre">let varFunction: {} = () =&gt; { };
        </pre><div class="row"><div class="col-sm-12"><h4>function with array param</h4></div></div><pre class="pre">let varFunctionArray = function (varArray: string[]) {
  return varArray;
}

varFunctionArray([&#39;one&#39;, &#39;two&#39;, &#39;three&#39;]);
        </pre><div class="row"><div class="col-sm-12"><h4>function with object param</h4></div></div><pre class="pre">let varFunctionObject = function (param1: string, param2: {}) { }

varFunctionObject(&#39;one&#39;, { one: &#39;one&#39;, two: true, three: 3 });
        </pre></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Classes</h3></div></div><div class="row"><div class="col-sm-12"><div class="row"><div class="col-sm-12"><h4>with interface</h4></div></div><pre class="pre">interface AClass {
  varOne: string;
  varTwo: boolean;
  varThree?: number;
}

class aClass implements AClass {
  varOne = &#39;one&#39;;
  varTwo = true;
}
            </pre><div class="row"><div class="col-sm-12"><h4>extends and implements</h4></div></div><pre class="pre">interface OldClass {
  varZero: number;
}

interface NewClass extends OldClass {
  varOne: string;
  varTwo: boolean;
  varThree?: number;
}

class newClass implements NewClass {
  varZero = 0;
  varOne = &#39;one&#39;;
  varTwo = true;
}
            </pre><div class="row"><div class="col-sm-12"><h4>hybrid</h4></div></div><pre class="pre">interface IHybridClass {
  varOne: string;
  varTwo: {
    twoOne: boolean;
  };
  varThree(varThreeOne: string, varThreeTwo: boolean): number;
  varFour({ varFourOne, varFourTwo }: { varFourOne: string, varFourTwo: boolean }): number;
}

class HybridClass implements IHybridClass {
  varOne = &#39;one&#39;;

  varTwo = {
    twoOne: true
  };

  varThree = (varThreeOne: string, varThreeTwo: boolean) =&gt; {
    return 3;
  };
  testingVarThree() {
    let three = this.varThree(&#39;one&#39;, true);
  }

  varFour = function ({
    varFourOne,
    varFourTwo
  }: { varFourOne: string, varFourTwo: boolean }) {
    console.log(varFourOne, varFourTwo);
    return 4;
  }
  testingVarFour() {
    let four = this.varFour({ varFourOne: &#39;four&#39;, varFourTwo: true });
  }
}
            </pre></div></div></div><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Generics</h3></div></div><div class="row"><div class="col-sm-12"><div class="row"><div class="col-sm-12"><h4>simple</h4></div></div><pre class="pre">function identity&lt;T&gt;(arg: T): T {
  return arg;
}

identity(10);
identity&lt;number&gt;(10);
identity(&#39;ten&#39;);
identity&lt;string&gt;(&#39;ten&#39;);
            </pre><div class="row"><div class="col-sm-12"><h4>extends</h4></div></div><pre class="pre">interface ILoggingIdentity2 {
  length: number;
}

function loggingIdentity2&lt;T extends ILoggingIdentity2&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity2({ length: 1 });
            </pre></div></div></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Enums</h3></div></div><div class="row"><div class="col-sm-12"><pre class="pre">// Later
            </pre></div></div></div><div class="col-sm-12 col-md-6"><div class="row"><div class="col-sm-12"><h3>Literals and unions</h3></div></div><div class="row"><div class="col-sm-12"><pre class="pre">// Later
Literal Types: ie. &#39;Value1&#39; | &#39;Value2&#39;
Union Types:   ie. boolean | string
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h2>Applied</h2></div></div><div class="row"><div class="col-sm-12"><h3>React Component</h3></div></div><div class="row"><div class="col-sm-12"><pre class="pre">interface IButton {
  text: string;
  color?: string;
  size?: number;
}

function Button({ text, color, size }: IButton) {
  // variables
  // logic
  // return &lt;button&gt;{text}&lt;/button&gt;;
}

export default Button;

&lt;Button text=&quot;Click Here&quot; /&gt;
&lt;Button text=&quot;Click Here&quot; color=&quot;purple&quot; size={10} /&gt;
        </pre></div></div>`,9),jc=[Bc];function Uc(t,e){return jt(),Ut("div",Hc,jc)}const $c=ae(Dc,[["render",Uc]]),Kc={},Wc={class:"container"},zc=Zt(`<div class="row"><div class="col-sm-12"><h2>Basics</h2></div></div><div class="row"><div class="col-sm-12 col-md-4"><h3>Props</h3><h4>Assigning</h4><pre>&lt;template&gt;
  // Static
  &lt;blog-post title=&quot;My journey with Vue&quot; /&gt;

  // Dynamic
  &lt;blog-post :title=&quot;post.title&quot;/&gt;
&lt;/template&gt;
            </pre><h4>Declaring - Composition API</h4><pre class="pre">&lt;script setup&gt;
const props = defineProps([&#39;foo&#39;]);

console.log(props.foo);
&lt;/script&gt;

OR

&lt;script setup&gt;
defineProps({
  title: String,
  likes: Number
});

console.log(props.likes);
&lt;/script&gt;
            </pre><h4>Declaring - Options API</h4><pre class="pre">&lt;script&gt;
export default {
  props: [&#39;foo&#39;],
  setup(props) {
    console.log(props.foo);
  }
}
&lt;/script&gt;

OR

&lt;script&gt;
export default {
  props: {
    title: String,
    likes: Number,
  },
  setup(props) {
    console.log(props.likes);
  }
}
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h3>Sharing State</h3><h4>Top Down</h4><h5>Grandpa to Dad</h5><pre class="pre">// Grandpa.vue

&lt;template&gt;
  &lt;dad grandpa-message=&quot;Hi from Grandpa&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Dad from &quot;@/Dad.vue&quot;;
&lt;/script&gt;

==========

// Dad.vue

&lt;template&gt;
  &lt;span&gt;{ { GrandpaMessage }}&lt;/span&gt;
&lt;/template&gt;

&lt;script setup&gt;
  defineProps({
    GrandpaMessage: String,
  });
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h3>Sharing State</h3><h4>Bottom Up - Emits</h4><h5>Child to Dad</h5><pre class="pre">// Dad.vue

&lt;template&gt;
  &lt;child @handleButton=&quot;showAlert&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Child from &quot;@/Child.vue&quot;;

function showAlert(value) {
  alert(value);
};
&lt;/script&gt;

==========

// Child.vue

&lt;template&gt;
  &lt;button @click=&quot;handleClick&quot;&gt;Button&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { defineEmits } from &quot;vue&quot;;

const emit = defineEmits([&#39;handleButton&#39;]);

function handleClick() {
  emit(&#39;handleButton&#39;, &#39;Clicked!&#39;);
}
&lt;/script&gt;
            </pre><h5>Child to Grandpa</h5><pre class="pre">// Grandpa.vue

&lt;template&gt;
  &lt;dad @handleButton=&quot;showAlert&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Dad from &quot;@/Dad.vue&quot;;

function showAlert(value) {
  alert(value);
};
&lt;/script&gt;

==========

// Dad.vue

&lt;template&gt;
  &lt;child /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Child from &quot;@/Child.vue&quot;;
&lt;/script&gt;

==========

// Child.vue

&lt;template&gt;
  &lt;button @click=&quot;$dad.$emit(&#39;handleButton&#39;, &#39;Clicked!&#39;)&gt;Button&lt;/button&gt;
&lt;/template&gt;
            </pre></div></div><div class="row"><div class="col-sm-12"><h3>Events Handlers</h3></div><div class="col-sm-12 col-md-4"><h4>Method Handlers</h4><pre class="pre">&lt;template&gt;
  // Inline
  &lt;button @click=&quot;counter++&quot;&gt;Add 1&lt;/button&gt;
  &lt;p&gt;The button above has been clicked { { counter }} times.&lt;/p&gt;

  // Function
  &lt;button @click=&quot;greet&quot;&gt;Greet&lt;/button&gt;
  &lt;button @click=&quot;say(&#39;hello&#39;)&quot;&gt;Say Hello&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

const counter = ref(0);

function greet(event) {
  // event is the native DOM event
  console.log(event.target.tagName);
}

function say(message) {
  console.log(message);
}
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>Event Modifiers</h4><pre class="pre">&lt;template&gt;
  &lt;a @click.stop=&quot;doThis&quot;&gt;&lt;/a&gt;
  &lt;a @click.stop.prevent=&quot;doThat&quot;&gt;&lt;/a&gt;
  &lt;div @click.self=&quot;myFunction&quot;&gt;...&lt;/div&gt;
  &lt;form @submit.prevent=&quot;onSubmit&quot;&gt;&lt;/form&gt;
&lt;/template&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>Key Modifiers</h4><pre class="pre">&lt;template&gt;
  &lt;input @keyup.enter=&quot;submit&quot; /&gt;
  &lt;input @keyup.page-down=&quot;onPageDown&quot; /&gt;
  &lt;input @keyup.delete=&quot;onDelete&quot; /&gt; // captures both &quot;Delete&quot; and &quot;Backspace&quot; keys
&lt;/template&gt;
            </pre></div></div><div class="row"><div class="col-sm-12"><div class="row"><h3>Conditional Rendering</h3><div class="col-sm-12 col-md-4"><h4>v-if</h4><pre class="pre">&lt;template v-if=&quot;ok&quot;&gt;
  &lt;h1&gt;Title&lt;/h1&gt;
  &lt;p&gt;Paragraph 1&lt;/p&gt;
  &lt;p&gt;Paragraph 2&lt;/p&gt;
&lt;/template&gt;
        </pre></div><div class="col-sm-12 col-md-4"><h4>v-else-if</h4><pre class="pre">&lt;template&gt;
  &lt;div v-if=&quot;type === &#39;A&#39;&quot;&gt;A&lt;/div&gt;
  &lt;div v-else-if=&quot;type === &#39;B&#39;&quot;&gt;B&lt;/div&gt;
  &lt;div v-else&gt;Else&lt;/div&gt;
&lt;/template&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>v-show</h4><pre class="pre">&lt;template&gt;
  &lt;h1 v-show=&quot;ok&quot;&gt;Hello!&lt;/h1&gt;
&lt;/template&gt;

The v-show always renders in the DOM just toggling the CSS.
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h3>List Rendering</h3></div><div class="col-sm-12 col-md-4"><h4>v-for on Array</h4><pre class="pre">&lt;template&gt;
  &lt;li v-for=&quot;(item, index) in items&quot; :key=&quot;item.message&quot;&gt;
    { { item.message }}
  &lt;/li&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

const items = ref([
  { message: &#39;Foo&#39; },
  { message: &#39;Bar&#39; },
]);
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>v-for on Object</h4><pre class="pre">&lt;template&gt;
   &lt;ul&gt;
    &lt;li v-for=&quot;(value, key, index) in myObject&quot; :key=&quot;index&quot;&gt;
      { { index }}. { { key }}: { { value }}
      // 0. title: My Title
      // 1. author: My Author
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { reactive } from &#39;vue&#39;;

const myObject = reactive({
  title: &#39;My Title&#39;,
  author: &#39;My Author&#39;,
});
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>v-for on Component</h4><pre class="pre">&lt;my-component
  v-for=&quot;(item, index) in items&quot;
  :item=&quot;item&quot;
  :index=&quot;index&quot;
  :key=&quot;item.id&quot;
/&gt;
            </pre></div></div><div class="row"><div class="col-sm-12"><h3>Template Refs ref=</h3></div><div class="col-sm-12 col-md-4"><h4>Accessing</h4><pre class="pre">&lt;template&gt;
  &lt;input ref=&quot;input&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from &#39;vue&#39;;

const input = ref(null);

onMounted(() =&gt; {
  input.value.focus();
});
&lt;/script&gt;
            </pre></div></div><div class="row"><h3>Reactivity - ref() and reactive()</h3><div class="col-sm-12 col-md-6"><h4>ref()</h4><pre class="pre">// Use for scalar types

&lt;script setup&gt;
import {ref} from &#39;vue&#39;;

const title = ref(&#39;Title&#39;);
const price = ref(9.99);

console.log(title.value);
console.log(price.value);
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-6"><h4>reactive()</h4><pre class="pre">// Use for compound types

&lt;script setup&gt;
import {reactive} from &#39;vue&#39;;

const product = reactive({
  title: &#39;Title&#39;,
  price: 9.99
});

console.log(product.title);
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-6"><h4>ref(): Reactive State</h4><pre class="pre">&lt;template&gt;
  &lt;button @click=&quot;increment&quot;&gt;
    { { count }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from &#39;vue&#39;;

const count = ref(0)

function increment() {
  count.value++
}
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-6"><h4>reactive(): Reactive State</h4><pre class="pre">&lt;template&gt;
  &lt;button @click=&quot;increment&quot;&gt;
    { { state.count }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { reactive } from &#39;vue&#39;;

const state = reactive({ count: 0 });

function increment() {
  state.count++
};
&lt;/script&gt;
            </pre></div></div><div class="row"><h3>Routing</h3><div class="col-sm-12 col-md-4"><h4>Simple Routing from Scratch</h4><pre class="pre">&lt;template&gt;
  &lt;a href=&quot;#/&quot;&gt;Home&lt;/a&gt;
  &lt;a href=&quot;#/about&quot;&gt;About&lt;/a&gt;
  &lt;a href=&quot;#/non-existent-path&quot;&gt;Broken Link&lt;/a&gt;
  &lt;component :is=&quot;currentView&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, computed } from &#39;vue&#39;;
import { createRouter, createWebHistory } from &quot;vue-router&quot;;
import Home from &#39;./Home.vue&#39;;
import About from &#39;./About.vue&#39;;
import NotFound from &#39;./NotFound.vue&#39;;

const router = createRouter({
  history: createWebHistory(`/`),
  routes: [
    {
      path: &quot;/&quot;,
      name: &quot;home&quot;,
      component: Home,
    },
    {
      path: &quot;/about&quot;,
      name: &quot;about&quot;,
      component: About,
    },
    {
      path: &quot;/not-found&quot;,
      name: &quot;notFound&quot;,
      component: NotFound,
    },
  ],
});

export default router;

const currentPath = ref(window.location.hash);

window.addEventListener(&#39;hashchange&#39;, () =&gt; {
  currentPath.value = window.location.hash
});

const currentView = computed(() =&gt; {
  return routes[currentPath.value.slice(1) || &#39;/&#39;] || NotFound
});

&lt;/script&gt;

==========
App.vue

&lt;template&gt;
  &lt;nav&gt;
    &lt;RouterLink to=&quot;/home&quot;&gt;Home&lt;/RouterLink&gt;
    &lt;RouterLink to=&quot;/about&quot;&gt;About&lt;/RouterLink&gt;
    &lt;RouterLink to=&quot;/not-found&quot;&gt;NotFound&lt;/RouterLink&gt;
  &lt;/nav&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { RouterLink, RouterView } from &quot;vue-router&quot;;
&lt;/script&gt;
            </pre></div><div class="col-sm-12 col-md-4"><h4>Redirecting</h4><pre class="pre">&lt;template&gt;&lt;/template&gt;

&lt;script setup&gt;
created() {
  this.$router.push(&#39;/my-path&#39;);
}
&lt;/script&gt;
            </pre></div></div>`,8),Gc=[zc];function Vc(t,e){return jt(),Ut("div",Wc,Gc)}const Yc=ae(Kc,[["render",Vc]]),Jc={},Qc={class:"container"},Zc=Zt(`<div class="row"><div class="col-sm-12"><h2>Basics</h2></div></div><div class="row"><div class="col-sm-12 col-md-4"><h3>Props</h3><h4>Function and Class component</h4><pre class="pre">&lt;Welcome name=&quot;Julie&quot; role=&quot;developer&quot; /&gt;

// OR

&lt;Welcome {...props} /&gt;

class Welcome extends React.Component {
  return &lt;h1&gt;Hello, {props.name}, {props.role}&lt;/h1&gt;;

  // OR

  render() {
    return &lt;h1&gt;Hello, {this.props.name}, {this.props.role}&lt;/h1&gt;;
  }
}

// OR

export function Welcome(props) {
  return (
    &lt;h1&gt;Hello, {props.name}, {props.role}&lt;/h1&gt;
  );
}
         </pre></div><div class="col-sm-12 col-md-4"><h3>Sharing State</h3><h4>Top Down</h4><h5>Grandpa to Dad (props)</h5><pre class="pre">// Grandpa.jsx

import Dad from &#39;./Dad.jsx&#39;;

const Grandpa = () =&gt; {
  return (
    &lt;Dad data={ {test: 123}} /&gt;
  );
};

export default Grandpa;

=============

// Dad.jsx

const Dad = (props) =&gt; {
  console.log(props.data); // {test: 123}
};

export default Dad;
            </pre><h5>Grandpa to Kid (Context API)</h5><pre>// Grandpa.jsx

import Dad from &#39;./Dad.jsx&#39;;
export const DataContext = React.createContext();

const Grandpa = () =&gt; {
  const data = {test: 123};
  return (
    &lt;DataContext.Provider value={data}&gt;
      &lt;Dad /&gt;
    &lt;/DataContext.Provider&gt;
  );
};

export default Grandpa;

=============

// Dad.jsx

import Kid from &#39;./Kid.jsx&#39;;

const Dad = () =&gt; {
  return &lt;Kid /&gt;;
};

export default Dad;

=============

// Kid.jsx

import React, { useContext } from &#39;react&#39;;
import { DataContext } from &#39;./Grandpa&#39;;

const Kid = () =&gt; {
  const data = useContext(DataContext);
  return (
    &lt;div&gt;
      The data received is: {data.test}
      // {test: 123}
    &lt;/div&gt;
  );
};

export default Kid;
            </pre></div><div class="col-sm-12 col-md-4"><h3>Sharing State</h3><h4>Bottom Up</h4><h5>Dad to Grandpa (callback props)</h5><pre class="pre">// Grandpa.jsx

import Dad from &#39;./Dad.jsx&#39;;

const Grandpa = () =&gt; {
  const handleData = (data) =&gt; {
    console.log(data);
  }
  return (
    &lt;Dad grandpaHandleData={handleData} /&gt;
  );
};

export default Grandpa;

=============

const Dad = ({ grandpaHandleData }) =&gt; {
  const handleClick = () =&gt; {
    const data = &quot;Hello from child&quot;;
    grandpaHandleData(data);
  }
  return (
    &lt;button onClick={handleClick}&gt;Send data to parent&lt;/button&gt;
  );
};

export default Dad;
            </pre><h5>Kid to Grandpa (Context API)</h5><pre>// Grandpa.jsx

import React, { Component } from &quot;react&quot;;
import Dad from &#39;./Dad.jsx&#39;;

export const  MyContext = React.createContext();

class Grandpa extends Component {
  state = {
    data: { message: &quot;Hello from Grandpa&quot; }
  };
  handleData = (newData) =&gt; {
    this.setState({ data: newData });
    console.log(newData.message);
  };
  render() {
    return (
      &lt;MyContext.Provider
          value={ {
            handleData: this.handleData
          }}
      &gt;
        &lt;Dad /&gt;
        &lt;p&gt;{this.state.data.message}&lt;/p&gt;
      &lt;/MyContext.Provider&gt;
    );
  }
}

export default Grandpa;

=============
// Dad.js

import React, { Component } from &quot;react&quot;;
import Kid from &quot;./Kid&quot;;

class Dad extends Component {
  render() {
    return &lt;Kid /&gt;;
  }
}

export default Dad;

=============
// Kid.jsx

import React, { Component } from &quot;react&quot;;
import { MyContext } from &quot;./Grandpa&quot;;

class Kid extends Component {
  render() {
    return (
      &lt;MyContext.Consumer&gt;
        {({ handleData }) =&gt; (
          &lt;button onClick={() =&gt; handleData({ message: &quot;Hello from Kid&quot; })}&gt;
            Handle Data
        &lt;/button&gt;
        )}
      &lt;/MyContext.Consumer&gt;
    );
  }
}

export default Kid;
            </pre></div></div><div class="row"><h3>Events Handlers</h3><div class="col-sm-12 col-md-4"><h4>Method Handlers</h4><h5>Function</h5><pre class="pre">function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(&#39;You clicked submit.&#39;);
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
            </pre></div><div class="col-sm-12 col-md-4"><h4>Method Handlers</h4><h5>Class</h5><pre class="pre">class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make \`this\` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState =&gt; ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      &lt;button onClick={this.handleClick}&gt;
        {this.state.isToggleOn ? &#39;ON&#39; : &#39;OFF&#39;}
      &lt;/button&gt;
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));
root.render(&lt;Toggle /&gt;);
            </pre><h5>Class - Arrow Function</h5><pre class="pre">class LoggingButton extends React.Component {
  handleClick() {
    console.log(&#39;this is:&#39;, this);
  }

  render() {
    // This syntax ensures \`this\` is bound within handleClick
    return (
      &lt;button onClick={() =&gt; this.handleClick()}&gt;
        Click me
      &lt;/button&gt;
    );
  }
}
            </pre></div><div class="col-sm-12 col-md-4"><h4>Passing Arguments to Event Handlers</h4><pre class="pre">&lt;button onClick={(e) =&gt; this.deleteRow(id, e)}&gt;Delete Row&lt;/button&gt;

// OR

&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;
            </pre></div></div><div class="row"><h3>Conditional Rendering</h3><div class="col-sm-12 col-md-4"><h4>On function</h4><pre class="pre">function UserGreeting(props) {
  return &lt;h1&gt;Welcome back!&lt;/h1&gt;;
}

function GuestGreeting(props) {
  return &lt;h1&gt;Please sign up.&lt;/h1&gt;;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return &lt;UserGreeting /&gt;;
  }
  return &lt;GuestGreeting /&gt;;
}

&lt;Greeting isLoggedIn={false} /&gt;;
        </pre></div><div class="col-sm-12 col-md-4"><h4>On rendering, conditional on JS</h4><pre class="pre">class LoginControl extends React.Component {
  render() {
    const isLoggedIn = true;
    let button;

    if (isLoggedIn) {
      button = &lt;LogoutButton onClick={this.handleLogoutClick} /&gt;;
    } else {
      button = &lt;LoginButton onClick={this.handleLoginClick} /&gt;;
    }

    return (
      {button}
    );
  }
}
            </pre></div><div class="col-sm-12 col-md-4"><h4>On rendering, conditional on JSX</h4><pre class="pre">return (
  &lt;div&gt;
    {count &amp;&amp; &lt;h1&gt;{count}&lt;/h1&gt;}
  &lt;/div&gt;
);

// OR

return (
    {unreadMessages.length &gt; 0 &amp;&amp;
      {unreadMessages.length} unread messages.
    }
);

// OR

return (
  &lt;div&gt;
    The user is {isLoggedIn ? &#39;currently&#39; : &#39;not&#39;} logged in.
  &lt;/div&gt;
);

// OR

return (
  {isLoggedIn
    ? &lt;LogoutButton /&gt;
    : &lt;LoginButton /&gt;
  }
);
            </pre></div><div class="col-sm-12 col-md-4"><h4>Preventing rendering</h4><pre class="pre">function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    &lt;div className=&quot;warning&quot;&gt;
      Warning!
    &lt;/div&gt;
  );
}
            </pre></div></div><div class="row"><h3>List Rendering</h3><div class="col-sm-12 col-md-4"><h4>Rendering HTML</h4><pre class="pre">function List() {
  const listItems = people.map(person =&gt;
      &lt;li key={person.id}&gt;
        &lt;p&gt;{person.name}&lt;/p&gt;
      &lt;/li&gt;
  );
  return &lt;ul&gt;{listItems}&lt;/ul&gt;;
}
            </pre></div><div class="col-sm-12 col-md-4"><h4>Rendering components - map on JS</h4><pre class="pre">function ListItem(props) {
  return &lt;li&gt;{props.name}&lt;/li&gt;;
}

function List() {
  const listItems = people.map(person =&gt;
    &lt;ListItem key={person.id} name={person.name} /&gt;
  );
  return &lt;ul&gt;{listItems}&lt;/ul&gt;;
}
            </pre></div><div class="col-sm-12 col-md-4"><h4>Rendering components - map on JSX</h4><pre class="pre">function ListItem(props) {
  return &lt;li&gt;{props.name}&lt;/li&gt;;
}

function List() {
  return (
    &lt;ul&gt;
      {people.map(person =&gt;
        &lt;ListItem key={person.id} name={person.name} /&gt;
      )}
    &lt;/ul&gt;
  );
}
            </pre></div></div><div class="row"><h3>Routing</h3><div class="col-sm-12 col-md-6"><h4>React Router</h4><pre class="pre">import { BrowserRouter, Switch, Route, Link } from &#39;react-router-dom&#39;;

function Nav() {
  return (
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;Link to=&quot;/&quot;&gt;
          &lt;li&gt;Home&lt;/li&gt;
        &lt;/Link&gt;
        &lt;Link to=&quot;/about&quot;&gt;
          &lt;li&gt;About&lt;/li&gt;
        &lt;/Link&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  );
}

function Home() {
  return (
    &lt;h1&gt;Home&lt;/h1&gt;
  );
}

function About() {
  return (
    &lt;h1&gt;About&lt;/h1&gt;
  );
}

function Http404() {
  return (
    &lt;h1&gt;404&lt;/h1&gt;
  );
}

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;div className=&quot;App&quot;&gt;
        &lt;Nav /&gt;
        &lt;Switch&gt;
          &lt;Route path=&quot;/&quot; exact component={Home} /&gt;
          &lt;Route path=&quot;/about&quot; component={About} /&gt;
          &lt;Route&gt;
            &lt;Http404 /&gt;
          &lt;/Route&gt;
        &lt;/Switch&gt;
      &lt;/div&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
            </pre></div></div><div class="row"><h3>Hooks</h3><p>Hooks are functions that let you “hook into” React state and lifecycle features from function components.</p><div class="col-sm-12 col-md-4"><h4>State A Component&#39;s Memory</h4><p>We call it inside a function component to add some local state to it. React will preserve this state between re-renders.</p><pre class="pre">App.js
// 1. adding a state variable
import { useState } from &#39;react&#39;;
import { sculptureList } from &#39;./data.js&#39;;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    &lt;&gt;
      &lt;button onClick={handleNextClick}&gt;
        Next
      &lt;/button&gt;
      &lt;h2&gt;
        &lt;i&gt;{sculpture.name} &lt;/i&gt;
        by {sculpture.artist}
      &lt;/h2&gt;
      &lt;h3&gt;
        ({index + 1} of {sculptureList.length})
      &lt;/h3&gt;
      &lt;button onClick={handleMoreClick}&gt;
        {showMore ? &#39;Hide&#39; : &#39;Show&#39;} details
      &lt;/button&gt;
      {showMore &amp;&amp; &lt;p&gt;{sculpture.description}&lt;/p&gt;}
      &lt;img
        src={sculpture.url}
        alt={sculpture.alt}
      /&gt;
    &lt;/&gt;
  );
}

data.js
export const sculptureList = [{
  name: &#39;Homenaje a la Neurocirugía&#39;,
  artist: &#39;Marta Colvin Andrade&#39;,
  description: &#39;Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.&#39;,
  url: &#39;https://i.imgur.com/Mx7dA2Y.jpg&#39;,
  alt: &#39;A bronze statue of two crossed hands delicately holding a human brain in their fingertips.&#39;
}, {
  name: &#39;Floralis Genérica&#39;,
  artist: &#39;Eduardo Catalano&#39;,
  description: &#39;This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.&#39;,
  url: &#39;https://i.imgur.com/ZF6s192m.jpg&#39;,
  alt: &#39;A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.&#39;
}];

===================================
import React, { useState } from &#39;react&#39;;
function Example() {
  // Declare a new state variable, which we&#39;ll call &quot;count&quot;
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      // reading state
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      // updating state
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

===================================
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState(&#39;banana&#39;);
  const [todos, setTodos] = useState([{ text: &#39;Learn Hooks&#39; }]);
  // ...
}

=====================================
import { useState } from &#39;react&#39;;

export default function Form() {
  const [answer, setAnswer] = useState(&#39;&#39;);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(&#39;typing&#39;);

  if (status === &#39;success&#39;) {
    return &lt;h1&gt;That&#39;s right!&lt;/h1&gt;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(&#39;submitting&#39;);
    try {
      await submitForm(answer);
      setStatus(&#39;success&#39;);
    } catch (err) {
      setStatus(&#39;typing&#39;);
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    &lt;&gt;
      &lt;h2&gt;City quiz&lt;/h2&gt;
      &lt;p&gt;
        In which city is there a billboard that turns air into drinkable water?
      &lt;/p&gt;
      &lt;form onSubmit={handleSubmit}&gt;
        &lt;textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === &#39;submitting&#39;}
        /&gt;
        &lt;br /&gt;
        &lt;button disabled={
          answer.length === 0 ||
          status === &#39;submitting&#39;
        }&gt;
          Submit
        &lt;/button&gt;
        {error !== null &amp;&amp;
          &lt;p className=&quot;Error&quot;&gt;
            {error.message}
          &lt;/p&gt;
        }
      &lt;/form&gt;
    &lt;/&gt;
  );
}

function submitForm(answer) {
  // Pretend it&#39;s hitting the network.
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      let shouldError = answer.toLowerCase() !== &#39;lima&#39;
      if (shouldError) {
        reject(new Error(&#39;Good guess but a wrong answer. Try again!&#39;));
      } else {
        resolve();
      }
    }, 1500);
  });
}

==========
import { useState } from &#39;react&#39;;

export default function Form() {
  const [firstName, setFirstName] = useState(&#39;&#39;);
  const [lastName, setLastName] = useState(&#39;&#39;);

  const fullName = firstName + &#39; &#39; + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    &lt;&gt;
      &lt;h2&gt;Let’s check you in&lt;/h2&gt;
      &lt;label&gt;
        First name:{&#39; &#39;}
        &lt;input
          value={firstName}
          onChange={handleFirstNameChange}
        /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Last name:{&#39; &#39;}
        &lt;input
          value={lastName}
          onChange={handleLastNameChange}
        /&gt;
      &lt;/label&gt;
      &lt;p&gt;
        Your ticket will be issued to: &lt;b&gt;{fullName}&lt;/b&gt;
      &lt;/p&gt;
    &lt;/&gt;
  );
}

========================================
<h4>State is isolated and private</h4>

App.js
import Gallery from &#39;./Gallery.js&#39;;

export default function Page() {
  return (
    &lt;div className=&quot;Page&quot;&gt;
      &lt;Gallery /&gt;
      &lt;Gallery /&gt;
    &lt;/div&gt;
  );
}

Gallery.js
import { useState } from &#39;react&#39;;
import { sculptureList } from &#39;./data.js&#39;;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    &lt;section&gt;
      &lt;button onClick={handleNextClick}&gt;
        Next
      &lt;/button&gt;
      &lt;h2&gt;
        &lt;i&gt;{sculpture.name} &lt;/i&gt;
        by {sculpture.artist}
      &lt;/h2&gt;
      &lt;h3&gt;
        ({index + 1} of {sculptureList.length})
      &lt;/h3&gt;
      &lt;button onClick={handleMoreClick}&gt;
        {showMore ? &#39;Hide&#39; : &#39;Show&#39;} details
      &lt;/button&gt;
      {showMore &amp;&amp; &lt;p&gt;{sculpture.description}&lt;/p&gt;}
      &lt;img
        src={sculpture.url}
        alt={sculpture.alt}
      /&gt;
    &lt;/section&gt;
  );
}

data.js
export const sculptureList = [{
  name: &#39;Homenaje a la Neurocirugía&#39;,
  artist: &#39;Marta Colvin Andrade&#39;,
  description: &#39;Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.&#39;,
  url: &#39;https://i.imgur.com/Mx7dA2Y.jpg&#39;,
  alt: &#39;A bronze statue of two crossed hands delicately holding a human brain in their fingertips.&#39;
}, {
  name: &#39;Floralis Genérica&#39;,
  artist: &#39;Eduardo Catalano&#39;,
  description: &#39;This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.&#39;,
  url: &#39;https://i.imgur.com/ZF6s192m.jpg&#39;,
  alt: &#39;A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.&#39;
}];

==========
<h4>Sharing State Between Components</h4>
import { useState } from &#39;react&#39;;

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    &lt;&gt;
      &lt;h2&gt;Almaty, Kazakhstan&lt;/h2&gt;
      &lt;Panel
        title=&quot;About&quot;
        isActive={activeIndex === 0}
        onShow={() =&gt; setActiveIndex(0)}
      &gt;
        With a population of about 2 million, Almaty is Kazakhstan&#39;s largest city. From 1929 to 1997, it was its capital city.
      &lt;/Panel&gt;
      &lt;Panel
        title=&quot;Etymology&quot;
        isActive={activeIndex === 1}
        onShow={() =&gt; setActiveIndex(1)}
      &gt;
        The name comes from &lt;span lang=&quot;kk-KZ&quot;&gt;алма&lt;/span&gt;, the Kazakh word for &quot;apple&quot; and is often translated as &quot;full of apples&quot;. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild &lt;i lang=&quot;la&quot;&gt;Malus sieversii&lt;/i&gt; is considered a likely candidate for the ancestor of the modern domestic apple.
      &lt;/Panel&gt;
    &lt;/&gt;
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
  }) {
    return (
      &lt;section className=&quot;panel&quot;&gt;
        &lt;h3&gt;{title}&lt;/h3&gt;
        {isActive ? (
          &lt;p&gt;{children}&lt;/p&gt;
        ) : (
          &lt;button onClick={onShow}&gt;
            Show
          &lt;/button&gt;
        )}
      &lt;/section&gt;
    );
}


==========
<h4>Preserving and Resetting State</h4>
import { useState } from &#39;react&#39;;
import Chat from &#39;./Chat.js&#39;;
import ContactList from &#39;./ContactList.js&#39;;

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    &lt;div&gt;
      &lt;ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact =&gt; setTo(contact)}
      /&gt;
      &lt;Chat key={to.email} contact={to} /&gt;
    &lt;/div&gt;
  )
}

const contacts = [
  { name: &#39;Taylor&#39;, email: &#39;taylor@mail.com&#39; },
  { name: &#39;Alice&#39;, email: &#39;alice@mail.com&#39; },
  { name: &#39;Bob&#39;, email: &#39;bob@mail.com&#39; }
];

            </pre></div><div class="col-sm-12 col-md-4"><h4>Effect</h4><p>The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p><pre class="pre">Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.

// 1. declare an Effect
import { useState, useRef, useEffect } from &#39;react&#39;;

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  // 2. call at the top leve of your component
  useEffect(() =&gt; {
    if (isPlaying) {
      console.log(&#39;Calling video.play()&#39;);
      ref.current.play();
    } else {
      console.log(&#39;Calling video.pause()&#39;);
      ref.current.pause();
    }
    // 3. specify the Effect dependencies
  }, [isPlaying]);

  return &lt;video ref={ref} src={src} loop playsInline /&gt;;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState(&#39;&#39;);
  return (
    &lt;&gt;
      &lt;input value={text} onChange={e =&gt; setText(e.target.value)} /&gt;
      &lt;button onClick={() =&gt; setIsPlaying(!isPlaying)}&gt;
        {isPlaying ? &#39;Pause&#39; : &#39;Play&#39;}
      &lt;/button&gt;
      &lt;VideoPlayer
        isPlaying={isPlaying}
        src=&quot;https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4&quot;
      /&gt;
    &lt;/&gt;
  );
}

===================================
import React, { useState, useEffect } from &#39;react&#39;;
function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() =&gt; {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

===================================
import React, { useState, useEffect } from &#39;react&#39;;

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() =&gt; {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () =&gt; {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return &#39;Loading...&#39;;
  }
  return isOnline ? &#39;Online&#39; : &#39;Offline&#39;;
}

===================================
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() =&gt; {
    document.title = \`You clicked \${count} times\`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() =&gt; {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () =&gt; {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  // ...
}

===================================
<h4>Add cleanup</h4>
chat.js
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(&#39;Connecting...&#39;);
    },
    disconnect() {
      console.log(&#39;Disconnected.&#39;);
    }
  };
}


App.js
import { useState, useEffect } from &#39;react&#39;;
import { createConnection } from &#39;./chat.js&#39;;

export default function ChatRoom() {
  useEffect(() =&gt; {
    const connection = createConnection();
    connection.connect();
    return () =&gt; connection.disconnect();
  }, []);
  return &lt;h1&gt;Welcome to the chat!&lt;/h1&gt;;
}

            </pre></div><div class="col-sm-12 col-md-4"><h4>Context</h4><p>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. When the nearest &lt;MyContext.Provider&gt; above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider.</p><pre class="pre">// 1. declare context
import { createContext, useContext, useState } from &#39;react&#39;;

const ThemeContext = createContext(&#39;null&#39;);
// 4. specifying a fallback default value
const ThemeContext = createContext(&#39;light&#39;);

export default function MyApp() {
  // 2. use passing data deeply into the tree
  const [theme, setTheme] = useState(&#39;light&#39;);
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;Form /&gt;
        // 3. updating a value via context
        &lt;label&gt;
          &lt;input
            type=&quot;checkbox&quot;
            checked={theme === &#39;dark&#39;}
            onChange={(e) =&gt; {
              setTheme(e.target.checked ? &#39;dark&#39; : &#39;light&#39;)
          }}
          /&gt;
          Use dark mode
      &lt;/label&gt;
    &lt;/ThemeContext.Provider&gt;
    &lt;Button onClick={() =&gt; {
      setTheme(theme === &#39;dark&#39; ? &#39;light&#39; : &#39;dark&#39;);
    }}&gt;
      Toggle theme
    &lt;/Button&gt;
  )
}

function Form({ children }) {
  return (
    &lt;Panel title=&quot;Welcome&quot;&gt;
      &lt;Button&gt;Sign up&lt;/Button&gt;
      &lt;Button&gt;Log in&lt;/Button&gt;
    &lt;/Panel&gt;
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = &#39;panel-&#39; + theme;
  return (
    &lt;section className={className}&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      {children}
    &lt;/section&gt;
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = &#39;button-&#39; + theme;
  return (
    &lt;button className={className} onClick={onClick}&gt;
      {children}
    &lt;/button&gt;
  );
}

===========================
const themes = {
  light: {
    foreground: &quot;#000000&quot;,
    background: &quot;#eeeeee&quot;
  },
  dark: {
    foreground: &quot;#ffffff&quot;,
    background: &quot;#222222&quot;
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    &lt;ThemeContext.Provider value={themes.dark}&gt;
      &lt;Toolbar /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function Toolbar(props) {
  return (
    &lt;div&gt;
      &lt;ThemedButton /&gt;
    &lt;/div&gt;
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
          
    &lt;button style={ background: theme.background, color: theme.foreground }&gt;
      I am styled by theme context!
    &lt;/button&gt;
  );
}

===================================
<h4>Optimizing re-renders when passing objects and functions </h4>
<p>You can pass any values via context, including objects and functions.</p>

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
          
    &lt;AuthContext.Provider value={ currentUser, login }&gt;
      &lt;Page /&gt;
    &lt;/AuthContext.Provider&gt;
  );
}

OR

import { useCallback, useMemo } from &#39;react&#39;;

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) =&gt; {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() =&gt; ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    &lt;AuthContext.Provider value={contextValue}&gt;
      &lt;Page /&gt;
    &lt;/AuthContext.Provider&gt;
  );
}

            </pre></div></div>`,7),Xc=[Zc];function tu(t,e){return jt(),Ut("div",Qc,Xc)}const eu=ae(Jc,[["render",tu]]),nu={},lu={class:"container"},ou=Zt(`<div class="row"><div class="col-sm-12"><h2>Basics</h2></div></div><div class="row"><div class="col-sm-12 col-md-4"><h3>Database Manipulation</h3><h4>Create a database</h4><pre class="pre">CREATE DATABASE My_First_Database
        </pre><h4>Delete a database</h4><pre class="pre">DROP DATABASE My_First_Database
        </pre></div><div class="col-sm-12 col-md-4"><h3>Table Manipulation</h3><h4>Create a table in a database</h4><pre class="pre">CREATE TABLE Person
(LastName varchar(30) NOT NULL, FirstName varchar(30) NOT NULL,
Address varchar(50) NOT NULL, Age int NOT NULL,
PersonID int NOT NULL, PRIMARY KEY (PersonID) );
        </pre><h4>Add columns in an existing table</h4><pre class="pre">ALTER TABLE Person ADD Sex char(6)
        </pre><h4>Delete columns in an existing table</h4><pre class="pre">ALTER TABLE Person DROP Sex char(6)
        </pre><h4>Delete a table</h4><pre class="pre">DROP TABLE Person
        </pre></div><div class="col-sm-12 col-md-4"><h3>Data Manipulation</h3><h4>Insert new rows into a table</h4><pre class="pre">INSERT INTO Persons
VALUES(&#39;Skywalker&#39;, &#39;Julie&#39;, &#39;White House&#39;)

# OR

INSERT INTO Persons (LastName, FirstName, Address)
VALUES(&#39;Skywalker&#39;, &#39;Julie&#39;, &#39;White House&#39;)
        </pre><h4>Update one or several columns in rows</h4><pre class="pre">UPDATE Person
SET Address = &#39;Planet of Tatooine&#39;
WHERE LastName = &#39;Skywalker&#39;
        </pre><h4>Delete rows in a table</h4><pre class="pre">DELETE FROM Person WHERE LastName = &#39;Skywalker&#39;
        </pre><h4>Deletes the data inside the table</h4><pre class="pre">TRUNCATE TABLE Person
        </pre></div></div><div class="row"><div class="col-sm-12"><h3>SELECT</h3></div><div class="col-sm-12 col-md-4"><h4>Select data from a table</h4><pre class="pre">SELECT LastName, FirstName FROM Persons
        </pre><h4>Select all data from a table</h4><pre class="pre">SELECT * FROM Persons
        </pre><h4>Select only distinct (different) data from a table</h4><pre class="pre">ELECT DISTINCT LastName, FirstName FROM Persons
        </pre><h4>Select only certain data from a table</h4><pre class="pre">SELECT * FROM Persons WHERE sex=&#39;female&#39;

# OR

SELECT * FROM Persons WHERE
(FirstName=&#39;Tove&#39; OR FirstName=&#39;Stephen&#39;)
AND LastName=&#39;Svendson&#39;
        </pre></div><div class="col-sm-12 col-md-4"><h4>The IN operator</h4><pre class="pre">SELECT * FROM Persons
WHERE LastName IN (&#39;Skywalker&#39;,&#39;Pettersen&#39;)
        </pre><h4>Order By</h4><pre class="pre">SELECT * FROM Persons
ORDER BY LastName
        </pre><h5>ASC</h5><pre class="pre">SELECT Company, OrderNumber FROM Orders
ORDER BY Company DESC, OrderNumber ASC
        </pre><h5>DESC</h5><pre class="pre">SELECT FirstName, LastName FROM Persons
ORDER BY LastName DESC
        </pre></div><div class="col-sm-12 col-md-4"><h3>Some aggregate functions</h3><h4>AVG(column)</h4><pre class="pre">SELECT Company, AVG(Amount)
FROM Sales
GROUP BY Company
        </pre><h4>COUNT(column)</h4><pre class="pre">SELECT Company, COUNT(Amount)
FROM Sales
GROUP BY Company
        </pre><h4>MAX(column)</h4><pre class="pre">SELECT Company, MAX(Amount)
FROM Sales
GROUP BY Company
        </pre><h4>MIN(column)</h4><pre class="pre">SELECT Company, MIN(Amount)
FROM Sales
GROUP BY Company
        </pre><h4>SUM(column)</h4><pre class="pre">SELECT Company, SUM(Amount)
FROM Sales
GROUP BY Company
        </pre><h4>HAVING</h4><pre class="pre">SELECT Company, SUM(Amount)
FROM Sales
GROUP BY Company
HAVING SUM(Amount)&gt;10000
        </pre></div></div><div class="row"><div class="col-sm-12"><div class="row"><h3>Alias</h3><div class="col-sm-12 col-md-4"><h4>Column name</h4><pre class="pre">SELECT LastName AS Family, FirstName AS Name
FROM Persons
        </pre></div><div class="col-sm-12 col-md-4"><h4>Table name</h4><pre class="pre">SELECT LastName, FirstName
FROM Persons AS Employees
            </pre></div></div></div></div><div class="row"><div class="col-sm-12"><h3>JOIN</h3></div><div class="col-sm-12 col-md-4"><h4>The INNER JOIN</h4><pre class="pre">SELECT Employees.Name, Orders.Product
FROM Employees
INNER JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre></div><div class="col-sm-12 col-md-4"><h4>The LEFT JOIN</h4><pre class="pre">SELECT Employees.Name, Orders.Product
FROM Employees
LEFT JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre></div><div class="col-sm-12 col-md-4"><h4>The RIGHT JOIN</h4><pre class="pre">SELECT Employees.Name, Orders.Product
FROM Employees
RIGHT JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre></div></div><div class="row"><div class="col-sm-12 col-md-4"><h3>UNION</h3><h4>Select all different values</h4><pre class="pre">SELECT E_Name FROM Employees_Norway
UNION
SELECT E_Name FROM Employees_USA
        </pre><h4>Select all values</h4><pre class="pre">SELECT E_Name FROM Employees_Norway
UNION
SELECT E_Name FROM Employees_USA
        </pre></div><div class="col-sm-12 col-md-4"><h3>SELECT INTO/IN</h3><h4>Select data from table(S) and insert it into another table</h4><pre class="pre">SELECT * INTO Persons_backup FROM Persons
        </pre><h4>Select data from table(S) and insert it in another database</h4><pre class="pre">SELECT Persons.* INTO Persons IN &#39;Backup.db&#39; FROM Persons WHERE City=&#39;Sandnes&#39;
        </pre></div></div>`,6),su=[ou];function ru(t,e){return jt(),Ut("div",lu,su)}const iu=ae(nu,[["render",ru]]),au={},cu={class:"content container"},uu=M("h1",{class:"welcome"},"Hello! Click on the language you want to review.",-1),du=[uu];function pu(t,e){return jt(),Ut("section",cu,du)}const fu=ae(au,[["render",pu]]),hu=Xa({history:va("/"),routes:[{path:"/",name:"root",component:fu},{path:"/html",name:"html",component:Tc},{path:"/css",name:"css",component:Oc},{path:"/js",name:"js",component:Fc},{path:"/ts",name:"ts",component:$c},{path:"/vue",name:"vue",component:Yc},{path:"/react",name:"react",component:eu},{path:"/sql",name:"sql",component:iu}]});const Cl=Yi(ac);Cl.use(Xi());Cl.use(hu);Cl.mount("#app");
