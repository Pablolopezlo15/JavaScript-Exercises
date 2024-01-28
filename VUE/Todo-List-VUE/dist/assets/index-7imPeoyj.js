(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Fh(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ae={},Rr=[],vn=()=>{},bI=()=>!1,Cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uh=t=>t.startsWith("onUpdate:"),rt=Object.assign,Bh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PI=Object.prototype.hasOwnProperty,le=(t,e)=>PI.call(t,e),z=Array.isArray,Ar=t=>Ao(t)==="[object Map]",Sl=t=>Ao(t)==="[object Set]",sp=t=>Ao(t)==="[object Date]",Z=t=>typeof t=="function",je=t=>typeof t=="string",ds=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",__=t=>(Ie(t)||Z(t))&&Z(t.then)&&Z(t.catch),y_=Object.prototype.toString,Ao=t=>y_.call(t),kI=t=>Ao(t).slice(8,-1),v_=t=>Ao(t)==="[object Object]",$h=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ta=Fh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},NI=/-(\w)/g,Rn=bl(t=>t.replace(NI,(e,n)=>n?n.toUpperCase():"")),OI=/\B([A-Z])/g,tr=bl(t=>t.replace(OI,"-$1").toLowerCase()),Pl=bl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mc=bl(t=>t?`on${Pl(t)}`:""),qs=(t,e)=>!Object.is(t,e),wa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Va=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Eu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rp;const Tu=()=>rp||(rp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jh(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?LI(s):jh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(je(t)||Ie(t))return t}const DI=/;(?![^(]*\))/g,xI=/:([^]+)/,MI=/\/\*[^]*?\*\//g;function LI(t){const e={};return t.replace(MI,"").split(DI).forEach(n=>{if(n){const s=n.split(xI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qh(t){let e="";if(je(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=qh(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const VI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",FI=Fh(VI);function E_(t){return!!t||t===""}function UI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=kl(t[s],e[s]);return n}function kl(t,e){if(t===e)return!0;let n=sp(t),s=sp(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ds(t),s=ds(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?UI(t,e):!1;if(n=Ie(t),s=Ie(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!kl(t[o],e[o]))return!1}}return String(t)===String(e)}function T_(t,e){return t.findIndex(n=>kl(n,e))}const Ai=t=>je(t)?t:t==null?"":z(t)||Ie(t)&&(t.toString===y_||!Z(t.toString))?JSON.stringify(t,w_,2):String(t),w_=(t,e)=>e&&e.__v_isRef?w_(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Lc(s,i)+" =>"]=r,n),{})}:Sl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Lc(n))}:ds(e)?Lc(e):Ie(e)&&!z(e)&&!v_(e)?String(e):e,Lc=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Pt;class I_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function BI(t){return new I_(t)}function $I(t,e=Pt){e&&e.active&&e.effects.push(t)}function R_(){return Pt}function jI(t){Pt&&Pt.cleanups.push(t)}const Wh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},A_=t=>(t.w&fs)>0,C_=t=>(t.n&fs)>0,qI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fs},WI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];A_(r)&&!C_(r)?r.delete(t):e[n++]=r,r.w&=~fs,r.n&=~fs}e.length=n}},wu=new WeakMap;let Ci=0,fs=1;const Iu=30;let Ht;const Vs=Symbol(""),Ru=Symbol("");class Hh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$I(this,s)}run(){if(!this.active)return this.fn();let e=Ht,n=is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ht,Ht=this,is=!0,fs=1<<++Ci,Ci<=Iu?qI(this):ip(this),this.fn()}finally{Ci<=Iu&&WI(this),fs=1<<--Ci,Ht=this.parent,is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ht===this?this.deferStop=!0:this.active&&(ip(this),this.onStop&&this.onStop(),this.active=!1)}}function ip(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let is=!0;const S_=[];function Zr(){S_.push(is),is=!1}function ei(){const t=S_.pop();is=t===void 0?!0:t}function St(t,e,n){if(is&&Ht){let s=wu.get(t);s||wu.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Wh()),b_(r)}}function b_(t,e){let n=!1;Ci<=Iu?C_(t)||(t.n|=fs,n=!A_(t)):n=!t.has(Ht),n&&(t.add(Ht),Ht.deps.push(t))}function Vn(t,e,n,s,r,i){const o=wu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!ds(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?$h(n)&&a.push(o.get("length")):(a.push(o.get(Vs)),Ar(t)&&a.push(o.get(Ru)));break;case"delete":z(t)||(a.push(o.get(Vs)),Ar(t)&&a.push(o.get(Ru)));break;case"set":Ar(t)&&a.push(o.get(Vs));break}if(a.length===1)a[0]&&Au(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Au(Wh(l))}}function Au(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&op(s);for(const s of n)s.computed||op(s)}function op(t,e){(t!==Ht||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const HI=Fh("__proto__,__v_isRef,__isVue"),P_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),ap=zI();function zI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zr();const s=ue(this)[e].apply(this,n);return ei(),s}}),t}function KI(t){const e=ue(this);return St(e,"has",t),e.hasOwnProperty(t)}class k_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const r=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?oR:x_:i?D_:O_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=z(e);if(!r){if(o&&le(ap,n))return Reflect.get(ap,n,s);if(n==="hasOwnProperty")return KI}const a=Reflect.get(e,n,s);return(ds(n)?P_.has(n):HI(n))||(r||St(e,"get",n),i)?a:gt(a)?o&&$h(n)?a:a.value:Ie(a)?r?L_(a):Ol(a):a}}class N_ extends k_{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._shallow){const l=Lr(i);if(!Fa(s)&&!Lr(s)&&(i=ue(i),s=ue(s)),!z(e)&&gt(i)&&!gt(s))return l?!1:(i.value=s,!0)}const o=z(e)&&$h(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,s,r);return e===ue(r)&&(o?qs(s,i)&&Vn(e,"set",n,s):Vn(e,"add",n,s)),a}deleteProperty(e,n){const s=le(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Vn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!ds(n)||!P_.has(n))&&St(e,"has",n),s}ownKeys(e){return St(e,"iterate",z(e)?"length":Vs),Reflect.ownKeys(e)}}class GI extends k_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const QI=new N_,YI=new GI,XI=new N_(!0),zh=t=>t,Nl=t=>Reflect.getPrototypeOf(t);function Jo(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);n||(qs(e,i)&&St(r,"get",e),St(r,"get",i));const{has:o}=Nl(r),a=s?zh:n?Qh:Xi;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Zo(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return e||(qs(t,r)&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ea(t,e=!1){return t=t.__v_raw,!e&&St(ue(t),"iterate",Vs),Reflect.get(t,"size",t)}function lp(t){t=ue(t);const e=ue(this);return Nl(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function cp(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=Nl(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?qs(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function up(t){const e=ue(this),{has:n,get:s}=Nl(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Vn(e,"delete",t,void 0),i}function hp(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function ta(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),l=e?zh:t?Qh:Xi;return!t&&St(a,"iterate",Vs),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function na(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=Ar(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?zh:e?Qh:Xi;return!e&&St(i,"iterate",l?Ru:Vs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Qn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function JI(){const t={get(i){return Jo(this,i)},get size(){return ea(this)},has:Zo,add:lp,set:cp,delete:up,clear:hp,forEach:ta(!1,!1)},e={get(i){return Jo(this,i,!1,!0)},get size(){return ea(this)},has:Zo,add:lp,set:cp,delete:up,clear:hp,forEach:ta(!1,!0)},n={get(i){return Jo(this,i,!0)},get size(){return ea(this,!0)},has(i){return Zo.call(this,i,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:ta(!0,!1)},s={get(i){return Jo(this,i,!0,!0)},get size(){return ea(this,!0)},has(i){return Zo.call(this,i,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=na(i,!1,!1),n[i]=na(i,!0,!1),e[i]=na(i,!1,!0),s[i]=na(i,!0,!0)}),[t,n,e,s]}const[ZI,eR,tR,nR]=JI();function Kh(t,e){const n=e?t?nR:tR:t?eR:ZI;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const sR={get:Kh(!1,!1)},rR={get:Kh(!1,!0)},iR={get:Kh(!0,!1)},O_=new WeakMap,D_=new WeakMap,x_=new WeakMap,oR=new WeakMap;function aR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lR(t){return t.__v_skip||!Object.isExtensible(t)?0:aR(kI(t))}function Ol(t){return Lr(t)?t:Gh(t,!1,QI,sR,O_)}function M_(t){return Gh(t,!1,XI,rR,D_)}function L_(t){return Gh(t,!0,YI,iR,x_)}function Gh(t,e,n,s,r){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=lR(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Cr(t){return Lr(t)?Cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Lr(t){return!!(t&&t.__v_isReadonly)}function Fa(t){return!!(t&&t.__v_isShallow)}function V_(t){return Cr(t)||Lr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function F_(t){return Va(t,"__v_skip",!0),t}const Xi=t=>Ie(t)?Ol(t):t,Qh=t=>Ie(t)?L_(t):t;function U_(t){is&&Ht&&(t=ue(t),b_(t.dep||(t.dep=Wh())))}function B_(t,e){t=ue(t);const n=t.dep;n&&Au(n)}function gt(t){return!!(t&&t.__v_isRef===!0)}function Fn(t){return j_(t,!1)}function $_(t){return j_(t,!0)}function j_(t,e){return gt(t)?t:new cR(t,e)}class cR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Xi(e)}get value(){return U_(this),this._value}set value(e){const n=this.__v_isShallow||Fa(e)||Lr(e);e=n?e:ue(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xi(e),B_(this))}}function ze(t){return gt(t)?t.value:t}function Nn(t){return Z(t)?t():ze(t)}const uR={get:(t,e,n)=>ze(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return gt(r)&&!gt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function q_(t){return Cr(t)?t:new Proxy(t,uR)}class hR{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Hh(e,()=>{this._dirty||(this._dirty=!0,B_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return U_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dR(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=vn):(s=t.get,r=t.set),new hR(s,r,i||!r,n)}function os(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Dl(i,e,n)}return r}function Xt(t,e,n,s){if(Z(t)){const i=os(t,e,n,s);return i&&__(i)&&i.catch(o=>{Dl(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Xt(t[i],e,n,s));return r}function Dl(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){os(l,null,10,[t,o,a]);return}}fR(t,n,r,s)}function fR(t,e,n,s=!0){console.error(t)}let Ji=!1,Cu=!1;const ht=[];let hn=0;const Sr=[];let On=null,bs=0;const W_=Promise.resolve();let Yh=null;function H_(t){const e=Yh||W_;return t?e.then(this?t.bind(this):t):e}function pR(t){let e=hn+1,n=ht.length;for(;e<n;){const s=e+n>>>1,r=ht[s],i=Zi(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function Xh(t){(!ht.length||!ht.includes(t,Ji&&t.allowRecurse?hn+1:hn))&&(t.id==null?ht.push(t):ht.splice(pR(t.id),0,t),z_())}function z_(){!Ji&&!Cu&&(Cu=!0,Yh=W_.then(G_))}function gR(t){const e=ht.indexOf(t);e>hn&&ht.splice(e,1)}function mR(t){z(t)?Sr.push(...t):(!On||!On.includes(t,t.allowRecurse?bs+1:bs))&&Sr.push(t),z_()}function dp(t,e,n=Ji?hn+1:0){for(;n<ht.length;n++){const s=ht[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;ht.splice(n,1),n--,s()}}}function K_(t){if(Sr.length){const e=[...new Set(Sr)];if(Sr.length=0,On){On.push(...e);return}for(On=e,On.sort((n,s)=>Zi(n)-Zi(s)),bs=0;bs<On.length;bs++)On[bs]();On=null,bs=0}}const Zi=t=>t.id==null?1/0:t.id,_R=(t,e)=>{const n=Zi(t)-Zi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function G_(t){Cu=!1,Ji=!0,ht.sort(_R);try{for(hn=0;hn<ht.length;hn++){const e=ht[hn];e&&e.active!==!1&&os(e,null,14)}}finally{hn=0,ht.length=0,K_(),Ji=!1,Yh=null,(ht.length||Sr.length)&&G_()}}function yR(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ae;d&&(r=n.map(f=>je(f)?f.trim():f)),h&&(r=n.map(Eu))}let a,l=s[a=Mc(e)]||s[a=Mc(Rn(e))];!l&&i&&(l=s[a=Mc(tr(e))]),l&&Xt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(c,t,6,r)}}function Q_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Q_(c,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ie(t)&&s.set(t,null),null):(z(i)?i.forEach(l=>o[l]=null):rt(o,i),Ie(t)&&s.set(t,o),o)}function xl(t,e){return!t||!Cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,tr(e))||le(t,e))}let Nt=null,Y_=null;function Ua(t){const e=Nt;return Nt=t,Y_=t&&t.type.__scopeId||null,e}function Mi(t,e=Nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Rp(-1);const i=Ua(e);let o;try{o=t(...r)}finally{Ua(i),s._d&&Rp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Vc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,C;const T=Ua(t);try{if(n.shapeFlag&4){const E=r||s,$=E;v=un(u.call($,E,h,i,f,d,m)),C=l}else{const E=e;v=un(E.length>1?E(i,{attrs:l,slots:a,emit:c}):E(i,null)),C=e.props?l:vR(l)}}catch(E){Fi.length=0,Dl(E,t,1),v=Ne(Ws)}let I=v;if(C&&y!==!1){const E=Object.keys(C),{shapeFlag:$}=I;E.length&&$&7&&(o&&E.some(Uh)&&(C=ER(C,o)),I=Vr(I,C))}return n.dirs&&(I=Vr(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),v=I,Ua(T),v}const vR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cl(n))&&((e||(e={}))[n]=t[n]);return e},ER=(t,e)=>{const n={};for(const s in t)(!Uh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function TR(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?fp(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!xl(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?fp(s,o,c):!0:!!o;return!1}function fp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!xl(n,i))return!0}return!1}function wR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const X_="components";function Ba(t,e){return RR(X_,t,!0,e)||t}const IR=Symbol.for("v-ndc");function RR(t,e,n=!0,s=!1){const r=Nt||Ke;if(r){const i=r.type;if(t===X_){const a=_A(i,!1);if(a&&(a===e||a===Rn(e)||a===Pl(Rn(e))))return i}const o=pp(r[t]||i[t],e)||pp(r.appContext[t],e);return!o&&s?i:o}}function pp(t,e){return t&&(t[e]||t[Rn(e)]||t[Pl(Rn(e))])}const AR=t=>t.__isSuspense;function CR(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):mR(t)}const sa={};function Li(t,e,n){return J_(t,e,n)}function J_(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ae){var a;const l=R_()===((a=Ke)==null?void 0:a.scope)?Ke:null;let c,u=!1,h=!1;if(gt(t)?(c=()=>t.value,u=Fa(t)):Cr(t)?(c=()=>t,s=!0):z(t)?(h=!0,u=t.some(E=>Cr(E)||Fa(E)),c=()=>t.map(E=>{if(gt(E))return E.value;if(Cr(E))return Ns(E);if(Z(E))return os(E,l,2)})):Z(t)?e?c=()=>os(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Xt(t,l,3,[f])}:c=vn,e&&s){const E=c;c=()=>Ns(E())}let d,f=E=>{d=T.onStop=()=>{os(E,l,4),d=T.onStop=void 0}},m;if(to)if(f=vn,e?n&&Xt(e,l,3,[c(),h?[]:void 0,f]):c(),r==="sync"){const E=EA();m=E.__watcherHandles||(E.__watcherHandles=[])}else return vn;let y=h?new Array(t.length).fill(sa):sa;const v=()=>{if(T.active)if(e){const E=T.run();(s||u||(h?E.some(($,X)=>qs($,y[X])):qs(E,y)))&&(d&&d(),Xt(e,l,3,[E,y===sa?void 0:h&&y[0]===sa?[]:y,f]),y=E)}else T.run()};v.allowRecurse=!!e;let C;r==="sync"?C=v:r==="post"?C=()=>Rt(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),C=()=>Xh(v));const T=new Hh(c,C);e?n?v():y=T.run():r==="post"?Rt(T.run.bind(T),l&&l.suspense):T.run();const I=()=>{T.stop(),l&&l.scope&&Bh(l.scope.effects,T)};return m&&m.push(I),I}function SR(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?Z_(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Ke;Fr(this);const a=J_(r,i.bind(s),n);return o?Fr(o):Fs(),a}function Z_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ns(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),gt(t))Ns(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Ns(t[n],e);else if(Sl(t)||Ar(t))t.forEach(n=>{Ns(n,e)});else if(v_(t))for(const n in t)Ns(t[n],e);return t}function gp(t,e){const n=Nt;if(n===null)return t;const s=Fl(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ae]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Ns(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Rs(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Zr(),Xt(l,n,8,[t.el,a,t,e]),ei())}}/*! #__NO_SIDE_EFFECTS__ */function ey(t,e){return Z(t)?rt({name:t.name},e,{setup:t}):t}const Ia=t=>!!t.type.__asyncLoader,ty=t=>t.type.__isKeepAlive;function bR(t,e){ny(t,"a",e)}function PR(t,e){ny(t,"da",e)}function ny(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ml(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ty(r.parent.vnode)&&kR(s,e,n,r),r=r.parent}}function kR(t,e,n,s){const r=Ml(e,t,s,!0);sy(()=>{Bh(s[e],r)},n)}function Ml(t,e,n=Ke,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zr(),Fr(n);const a=Xt(e,n,t,o);return Fs(),ei(),a});return s?r.unshift(i):r.push(i),i}}const Hn=t=>(e,n=Ke)=>(!to||t==="sp")&&Ml(t,(...s)=>e(...s),n),NR=Hn("bm"),OR=Hn("m"),DR=Hn("bu"),xR=Hn("u"),MR=Hn("bum"),sy=Hn("um"),ry=Hn("sp"),LR=Hn("rtg"),VR=Hn("rtc");function FR(t,e=Ke){Ml("ec",t,e)}function UR(t,e,n,s){let r;const i=n&&n[s];if(z(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Su=t=>t?my(t)?Fl(t)||t.proxy:Su(t.parent):null,Vi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Su(t.parent),$root:t=>Su(t.root),$emit:t=>t.emit,$options:t=>Jh(t),$forceUpdate:t=>t.f||(t.f=()=>Xh(t.update)),$nextTick:t=>t.n||(t.n=H_.bind(t.proxy)),$watch:t=>SR.bind(t)}),Fc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&le(t,e),BR={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Fc(s,e))return o[e]=1,s[e];if(r!==Ae&&le(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==Ae&&le(n,e))return o[e]=4,n[e];bu&&(o[e]=0)}}const u=Vi[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Fc(r,e)?(r[e]=n,!0):s!==Ae&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&le(t,o)||Fc(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(Vi,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mp(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bu=!0;function $R(t){const e=Jh(t),n=t.proxy,s=t.ctx;bu=!1,e.beforeCreate&&_p(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:C,beforeUnmount:T,destroyed:I,unmounted:E,render:$,renderTracked:X,renderTriggered:he,errorCaptured:Ee,serverPrefetch:wt,expose:Xe,inheritAttrs:Kn,components:Is,directives:on,filters:fi}=e;if(c&&jR(c,s,null),o)for(const ve in o){const de=o[ve];Z(de)&&(s[ve]=de.bind(n))}if(r){const ve=r.call(n,n);Ie(ve)&&(t.data=Ol(ve))}if(bu=!0,i)for(const ve in i){const de=i[ve],Pn=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):vn,Gn=!Z(de)&&Z(de.set)?de.set.bind(n):vn,an=zt({get:Pn,set:Gn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>an.value,set:It=>an.value=It})}if(a)for(const ve in a)iy(a[ve],s,n,ve);if(l){const ve=Z(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(de=>{Ra(de,ve[de])})}u&&_p(u,t,"c");function qe(ve,de){z(de)?de.forEach(Pn=>ve(Pn.bind(n))):de&&ve(de.bind(n))}if(qe(NR,h),qe(OR,d),qe(DR,f),qe(xR,m),qe(bR,y),qe(PR,v),qe(FR,Ee),qe(VR,X),qe(LR,he),qe(MR,T),qe(sy,E),qe(ry,wt),z(Xe))if(Xe.length){const ve=t.exposed||(t.exposed={});Xe.forEach(de=>{Object.defineProperty(ve,de,{get:()=>n[de],set:Pn=>n[de]=Pn})})}else t.exposed||(t.exposed={});$&&t.render===vn&&(t.render=$),Kn!=null&&(t.inheritAttrs=Kn),Is&&(t.components=Is),on&&(t.directives=on)}function jR(t,e,n=vn){z(t)&&(t=Pu(t));for(const s in t){const r=t[s];let i;Ie(r)?"default"in r?i=Mt(r.from||s,r.default,!0):i=Mt(r.from||s):i=Mt(r),gt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function _p(t,e,n){Xt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function iy(t,e,n,s){const r=s.includes(".")?Z_(n,s):()=>n[s];if(je(t)){const i=e[t];Z(i)&&Li(r,i)}else if(Z(t))Li(r,t.bind(n));else if(Ie(t))if(z(t))t.forEach(i=>iy(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Li(r,i,t)}}function Jh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>$a(l,c,o,!0)),$a(l,e,o)),Ie(e)&&i.set(e,l),l}function $a(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&$a(t,i,n,!0),r&&r.forEach(o=>$a(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=qR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qR={data:yp,props:vp,emits:vp,methods:Si,computed:Si,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Si,directives:Si,watch:HR,provide:yp,inject:WR};function yp(t,e){return e?t?function(){return rt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function WR(t,e){return Si(Pu(t),Pu(e))}function Pu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?rt(Object.create(null),t,e):e}function vp(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:rt(Object.create(null),mp(t),mp(e??{})):e}function HR(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const s in e)n[s]=vt(t[s],e[s]);return n}function oy(){return{app:null,config:{isNativeTag:bI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zR=0;function KR(t,e){return function(s,r=null){Z(s)||(s=rt({},s)),r!=null&&!Ie(r)&&(r=null);const i=oy(),o=new WeakSet;let a=!1;const l=i.app={_uid:zR++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:TA,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Ne(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Fl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ja=l;try{return c()}finally{ja=null}}};return l}}let ja=null;function Ra(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Ke||Nt;if(s||ja){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ja._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function GR(t,e,n,s=!1){const r={},i={};Va(i,Vl,1),t.propsDefaults=Object.create(null),ay(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:M_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function QR(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(xl(t.emitsOptions,d))continue;const f=e[d];if(l)if(le(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const m=Rn(d);r[m]=ku(l,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{ay(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=tr(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ku(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&Vn(t,"set","$attrs")}function ay(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ta(l))continue;const c=e[l];let u;r&&le(r,u=Rn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:xl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ue(n),c=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ku(r,l,h,c[h],t,!le(c,h))}}return o}function ku(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Fr(r),s=c[n]=l.call(null,e),Fs())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tr(n))&&(s=!0))}return s}function ly(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[d,f]=ly(h,e,!0);rt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ie(t)&&s.set(t,Rr),Rr;if(z(i))for(let u=0;u<i.length;u++){const h=Rn(i[u]);Ep(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=Rn(u);if(Ep(h)){const d=i[u],f=o[h]=z(d)||Z(d)?{type:d}:rt({},d);if(f){const m=Ip(Boolean,f.type),y=Ip(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||le(f,"default"))&&a.push(h)}}}const c=[o,a];return Ie(t)&&s.set(t,c),c}function Ep(t){return t[0]!=="$"}function Tp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wp(t,e){return Tp(t)===Tp(e)}function Ip(t,e){return z(e)?e.findIndex(n=>wp(n,t)):Z(e)&&wp(e,t)?0:-1}const cy=t=>t[0]==="_"||t==="$stable",Zh=t=>z(t)?t.map(un):[un(t)],YR=(t,e,n)=>{if(e._n)return e;const s=Mi((...r)=>Zh(e(...r)),n);return s._c=!1,s},uy=(t,e,n)=>{const s=t._ctx;for(const r in t){if(cy(r))continue;const i=t[r];if(Z(i))e[r]=YR(r,i,s);else if(i!=null){const o=Zh(i);e[r]=()=>o}}},hy=(t,e)=>{const n=Zh(e);t.slots.default=()=>n},XR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Va(e,"_",n)):uy(e,t.slots={})}else t.slots={},e&&hy(t,e);Va(t.slots,Vl,1)},JR=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,uy(e,r)),o=e}else e&&(hy(t,e),o={default:1});if(i)for(const a in r)!cy(a)&&o[a]==null&&delete r[a]};function Nu(t,e,n,s,r=!1){if(z(t)){t.forEach((d,f)=>Nu(d,e&&(z(e)?e[f]:e),n,s,r));return}if(Ia(s)&&!r)return;const i=s.shapeFlag&4?Fl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,le(h,c)&&(h[c]=null)):gt(c)&&(c.value=null)),Z(l))os(l,a,12,[o,u]);else{const d=je(l),f=gt(l);if(d||f){const m=()=>{if(t.f){const y=d?le(h,l)?h[l]:u[l]:l.value;r?z(y)&&Bh(y,i):z(y)?y.includes(i)||y.push(i):d?(u[l]=[i],le(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,le(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Rt(m,n)):m()}}}const Rt=CR;function ZR(t){return eA(t)}function eA(t,e){const n=Tu();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=vn,insertStaticContent:m}=t,y=(p,g,_,w=null,S=null,b=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!gi(p,g)&&(w=R(p),It(p,S,b,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:k,ref:W,shapeFlag:B}=g;switch(k){case Ll:v(p,g,_,w);break;case Ws:C(p,g,_,w);break;case Aa:p==null&&T(g,_,w,L);break;case At:Is(p,g,_,w,S,b,L,N,O);break;default:B&1?$(p,g,_,w,S,b,L,N,O):B&6?on(p,g,_,w,S,b,L,N,O):(B&64||B&128)&&k.process(p,g,_,w,S,b,L,N,O,D)}W!=null&&S&&Nu(W,p&&p.ref,b,g||p,!g)},v=(p,g,_,w)=>{if(p==null)s(g.el=a(g.children),_,w);else{const S=g.el=p.el;g.children!==p.children&&c(S,g.children)}},C=(p,g,_,w)=>{p==null?s(g.el=l(g.children||""),_,w):g.el=p.el},T=(p,g,_,w)=>{[p.el,p.anchor]=m(p.children,g,_,w,p.el,p.anchor)},I=({el:p,anchor:g},_,w)=>{let S;for(;p&&p!==g;)S=d(p),s(p,_,w),p=S;s(g,_,w)},E=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),r(p),p=_;r(g)},$=(p,g,_,w,S,b,L,N,O)=>{L=L||g.type==="svg",p==null?X(g,_,w,S,b,L,N,O):wt(p,g,S,b,L,N,O)},X=(p,g,_,w,S,b,L,N)=>{let O,k;const{type:W,props:B,shapeFlag:H,transition:J,dirs:te}=p;if(O=p.el=o(p.type,b,B&&B.is,B),H&8?u(O,p.children):H&16&&Ee(p.children,O,null,w,S,b&&W!=="foreignObject",L,N),te&&Rs(p,null,w,"created"),he(O,p,p.scopeId,L,w),B){for(const _e in B)_e!=="value"&&!Ta(_e)&&i(O,_e,null,B[_e],b,p.children,w,S,it);"value"in B&&i(O,"value",null,B.value),(k=B.onVnodeBeforeMount)&&cn(k,w,p)}te&&Rs(p,null,w,"beforeMount");const Te=tA(S,J);Te&&J.beforeEnter(O),s(O,g,_),((k=B&&B.onVnodeMounted)||Te||te)&&Rt(()=>{k&&cn(k,w,p),Te&&J.enter(O),te&&Rs(p,null,w,"mounted")},S)},he=(p,g,_,w,S)=>{if(_&&f(p,_),w)for(let b=0;b<w.length;b++)f(p,w[b]);if(S){let b=S.subTree;if(g===b){const L=S.vnode;he(p,L,L.scopeId,L.slotScopeIds,S.parent)}}},Ee=(p,g,_,w,S,b,L,N,O=0)=>{for(let k=O;k<p.length;k++){const W=p[k]=N?Jn(p[k]):un(p[k]);y(null,W,g,_,w,S,b,L,N)}},wt=(p,g,_,w,S,b,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:k,dirs:W}=g;O|=p.patchFlag&16;const B=p.props||Ae,H=g.props||Ae;let J;_&&As(_,!1),(J=H.onVnodeBeforeUpdate)&&cn(J,_,g,p),W&&Rs(g,p,_,"beforeUpdate"),_&&As(_,!0);const te=S&&g.type!=="foreignObject";if(k?Xe(p.dynamicChildren,k,N,_,w,te,b):L||de(p,g,N,null,_,w,te,b,!1),O>0){if(O&16)Kn(N,g,B,H,_,w,S);else if(O&2&&B.class!==H.class&&i(N,"class",null,H.class,S),O&4&&i(N,"style",B.style,H.style,S),O&8){const Te=g.dynamicProps;for(let _e=0;_e<Te.length;_e++){const Ve=Te[_e],Wt=B[Ve],dr=H[Ve];(dr!==Wt||Ve==="value")&&i(N,Ve,Wt,dr,S,p.children,_,w,it)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&k==null&&Kn(N,g,B,H,_,w,S);((J=H.onVnodeUpdated)||W)&&Rt(()=>{J&&cn(J,_,g,p),W&&Rs(g,p,_,"updated")},w)},Xe=(p,g,_,w,S,b,L)=>{for(let N=0;N<g.length;N++){const O=p[N],k=g[N],W=O.el&&(O.type===At||!gi(O,k)||O.shapeFlag&70)?h(O.el):_;y(O,k,W,null,w,S,b,L,!0)}},Kn=(p,g,_,w,S,b,L)=>{if(_!==w){if(_!==Ae)for(const N in _)!Ta(N)&&!(N in w)&&i(p,N,_[N],null,L,g.children,S,b,it);for(const N in w){if(Ta(N))continue;const O=w[N],k=_[N];O!==k&&N!=="value"&&i(p,N,k,O,L,g.children,S,b,it)}"value"in w&&i(p,"value",_.value,w.value)}},Is=(p,g,_,w,S,b,L,N,O)=>{const k=g.el=p?p.el:a(""),W=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:H,slotScopeIds:J}=g;J&&(N=N?N.concat(J):J),p==null?(s(k,_,w),s(W,_,w),Ee(g.children,_,W,S,b,L,N,O)):B>0&&B&64&&H&&p.dynamicChildren?(Xe(p.dynamicChildren,H,_,S,b,L,N),(g.key!=null||S&&g===S.subTree)&&dy(p,g,!0)):de(p,g,_,W,S,b,L,N,O)},on=(p,g,_,w,S,b,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?S.ctx.activate(g,_,w,L,O):fi(g,_,w,S,b,L,O):cr(p,g,O)},fi=(p,g,_,w,S,b,L)=>{const N=p.component=dA(p,w,S);if(ty(p)&&(N.ctx.renderer=D),fA(N),N.asyncDep){if(S&&S.registerDep(N,qe),!p.el){const O=N.subTree=Ne(Ws);C(null,O,g,_)}return}qe(N,p,g,_,S,b,L)},cr=(p,g,_)=>{const w=g.component=p.component;if(TR(p,g,_))if(w.asyncDep&&!w.asyncResolved){ve(w,g,_);return}else w.next=g,gR(w.update),w.update();else g.el=p.el,w.vnode=g},qe=(p,g,_,w,S,b,L)=>{const N=()=>{if(p.isMounted){let{next:W,bu:B,u:H,parent:J,vnode:te}=p,Te=W,_e;As(p,!1),W?(W.el=te.el,ve(p,W,L)):W=te,B&&wa(B),(_e=W.props&&W.props.onVnodeBeforeUpdate)&&cn(_e,J,W,te),As(p,!0);const Ve=Vc(p),Wt=p.subTree;p.subTree=Ve,y(Wt,Ve,h(Wt.el),R(Wt),p,S,b),W.el=Ve.el,Te===null&&wR(p,Ve.el),H&&Rt(H,S),(_e=W.props&&W.props.onVnodeUpdated)&&Rt(()=>cn(_e,J,W,te),S)}else{let W;const{el:B,props:H}=g,{bm:J,m:te,parent:Te}=p,_e=Ia(g);if(As(p,!1),J&&wa(J),!_e&&(W=H&&H.onVnodeBeforeMount)&&cn(W,Te,g),As(p,!0),B&&fe){const Ve=()=>{p.subTree=Vc(p),fe(B,p.subTree,p,S,null)};_e?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ve()):Ve()}else{const Ve=p.subTree=Vc(p);y(null,Ve,_,w,p,S,b),g.el=Ve.el}if(te&&Rt(te,S),!_e&&(W=H&&H.onVnodeMounted)){const Ve=g;Rt(()=>cn(W,Te,Ve),S)}(g.shapeFlag&256||Te&&Ia(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&Rt(p.a,S),p.isMounted=!0,g=_=w=null}},O=p.effect=new Hh(N,()=>Xh(k),p.scope),k=p.update=()=>O.run();k.id=p.uid,As(p,!0),k()},ve=(p,g,_)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,QR(p,g.props,w,_),JR(p,g.children,_),Zr(),dp(p),ei()},de=(p,g,_,w,S,b,L,N,O=!1)=>{const k=p&&p.children,W=p?p.shapeFlag:0,B=g.children,{patchFlag:H,shapeFlag:J}=g;if(H>0){if(H&128){Gn(k,B,_,w,S,b,L,N,O);return}else if(H&256){Pn(k,B,_,w,S,b,L,N,O);return}}J&8?(W&16&&it(k,S,b),B!==k&&u(_,B)):W&16?J&16?Gn(k,B,_,w,S,b,L,N,O):it(k,S,b,!0):(W&8&&u(_,""),J&16&&Ee(B,_,w,S,b,L,N,O))},Pn=(p,g,_,w,S,b,L,N,O)=>{p=p||Rr,g=g||Rr;const k=p.length,W=g.length,B=Math.min(k,W);let H;for(H=0;H<B;H++){const J=g[H]=O?Jn(g[H]):un(g[H]);y(p[H],J,_,null,S,b,L,N,O)}k>W?it(p,S,b,!0,!1,B):Ee(g,_,w,S,b,L,N,O,B)},Gn=(p,g,_,w,S,b,L,N,O)=>{let k=0;const W=g.length;let B=p.length-1,H=W-1;for(;k<=B&&k<=H;){const J=p[k],te=g[k]=O?Jn(g[k]):un(g[k]);if(gi(J,te))y(J,te,_,null,S,b,L,N,O);else break;k++}for(;k<=B&&k<=H;){const J=p[B],te=g[H]=O?Jn(g[H]):un(g[H]);if(gi(J,te))y(J,te,_,null,S,b,L,N,O);else break;B--,H--}if(k>B){if(k<=H){const J=H+1,te=J<W?g[J].el:w;for(;k<=H;)y(null,g[k]=O?Jn(g[k]):un(g[k]),_,te,S,b,L,N,O),k++}}else if(k>H)for(;k<=B;)It(p[k],S,b,!0),k++;else{const J=k,te=k,Te=new Map;for(k=te;k<=H;k++){const bt=g[k]=O?Jn(g[k]):un(g[k]);bt.key!=null&&Te.set(bt.key,k)}let _e,Ve=0;const Wt=H-te+1;let dr=!1,ep=0;const pi=new Array(Wt);for(k=0;k<Wt;k++)pi[k]=0;for(k=J;k<=B;k++){const bt=p[k];if(Ve>=Wt){It(bt,S,b,!0);continue}let ln;if(bt.key!=null)ln=Te.get(bt.key);else for(_e=te;_e<=H;_e++)if(pi[_e-te]===0&&gi(bt,g[_e])){ln=_e;break}ln===void 0?It(bt,S,b,!0):(pi[ln-te]=k+1,ln>=ep?ep=ln:dr=!0,y(bt,g[ln],_,null,S,b,L,N,O),Ve++)}const tp=dr?nA(pi):Rr;for(_e=tp.length-1,k=Wt-1;k>=0;k--){const bt=te+k,ln=g[bt],np=bt+1<W?g[bt+1].el:w;pi[k]===0?y(null,ln,_,np,S,b,L,N,O):dr&&(_e<0||k!==tp[_e]?an(ln,_,np,2):_e--)}}},an=(p,g,_,w,S=null)=>{const{el:b,type:L,transition:N,children:O,shapeFlag:k}=p;if(k&6){an(p.component.subTree,g,_,w);return}if(k&128){p.suspense.move(g,_,w);return}if(k&64){L.move(p,g,_,D);return}if(L===At){s(b,g,_);for(let B=0;B<O.length;B++)an(O[B],g,_,w);s(p.anchor,g,_);return}if(L===Aa){I(p,g,_);return}if(w!==2&&k&1&&N)if(w===0)N.beforeEnter(b),s(b,g,_),Rt(()=>N.enter(b),S);else{const{leave:B,delayLeave:H,afterLeave:J}=N,te=()=>s(b,g,_),Te=()=>{B(b,()=>{te(),J&&J()})};H?H(b,te,Te):Te()}else s(b,g,_)},It=(p,g,_,w=!1,S=!1)=>{const{type:b,props:L,ref:N,children:O,dynamicChildren:k,shapeFlag:W,patchFlag:B,dirs:H}=p;if(N!=null&&Nu(N,null,_,p,!0),W&256){g.ctx.deactivate(p);return}const J=W&1&&H,te=!Ia(p);let Te;if(te&&(Te=L&&L.onVnodeBeforeUnmount)&&cn(Te,g,p),W&6)Xo(p.component,_,w);else{if(W&128){p.suspense.unmount(_,w);return}J&&Rs(p,null,g,"beforeUnmount"),W&64?p.type.remove(p,g,_,S,D,w):k&&(b!==At||B>0&&B&64)?it(k,g,_,!1,!0):(b===At&&B&384||!S&&W&16)&&it(O,g,_),w&&ur(p)}(te&&(Te=L&&L.onVnodeUnmounted)||J)&&Rt(()=>{Te&&cn(Te,g,p),J&&Rs(p,null,g,"unmounted")},_)},ur=p=>{const{type:g,el:_,anchor:w,transition:S}=p;if(g===At){hr(_,w);return}if(g===Aa){E(p);return}const b=()=>{r(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:N}=S,O=()=>L(_,b);N?N(p.el,b,O):O()}else b()},hr=(p,g)=>{let _;for(;p!==g;)_=d(p),r(p),p=_;r(g)},Xo=(p,g,_)=>{const{bum:w,scope:S,update:b,subTree:L,um:N}=p;w&&wa(w),S.stop(),b&&(b.active=!1,It(L,p,g,_)),N&&Rt(N,g),Rt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},it=(p,g,_,w=!1,S=!1,b=0)=>{for(let L=b;L<p.length;L++)It(p[L],g,_,w,S)},R=p=>p.shapeFlag&6?R(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,g,_)=>{p==null?g._vnode&&It(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,_),dp(),K_(),g._vnode=p},D={p:y,um:It,m:an,r:ur,mt:fi,mc:Ee,pc:de,pbc:Xe,n:R,o:t};let j,fe;return e&&([j,fe]=e(D)),{render:V,hydrate:j,createApp:KR(V,j)}}function As({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function tA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dy(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Jn(r[i]),a.el=o.el),n||dy(o,a)),a.type===Ll&&(a.el=o.el)}}function nA(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sA=t=>t.__isTeleport,At=Symbol.for("v-fgt"),Ll=Symbol.for("v-txt"),Ws=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),Fi=[];let Gt=null;function Ot(t=!1){Fi.push(Gt=t?null:[])}function rA(){Fi.pop(),Gt=Fi[Fi.length-1]||null}let eo=1;function Rp(t){eo+=t}function fy(t){return t.dynamicChildren=eo>0?Gt||Rr:null,rA(),eo>0&&Gt&&Gt.push(t),t}function Qt(t,e,n,s,r,i){return fy(ke(t,e,n,s,r,i,!0))}function py(t,e,n,s,r){return fy(Ne(t,e,n,s,r,!0))}function Ou(t){return t?t.__v_isVNode===!0:!1}function gi(t,e){return t.type===e.type&&t.key===e.key}const Vl="__vInternal",gy=({key:t})=>t??null,Ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||gt(t)||Z(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function ke(t,e=null,n=null,s=0,r=null,i=t===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gy(e),ref:e&&Ca(e),scopeId:Y_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Nt};return a?(ed(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),eo>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const Ne=iA;function iA(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===IR)&&(t=Ws),Ou(t)){const a=Vr(t,e,!0);return n&&ed(a,n),eo>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(t)]=a:Gt.push(a)),a.patchFlag|=-2,a}if(yA(t)&&(t=t.__vccOpts),e){e=oA(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=qh(a)),Ie(l)&&(V_(l)&&!z(l)&&(l=rt({},l)),e.style=jh(l))}const o=je(t)?1:AR(t)?128:sA(t)?64:Ie(t)?4:Z(t)?2:0;return ke(t,e,n,s,r,o,i,!0)}function oA(t){return t?V_(t)||Vl in t?rt({},t):t:null}function Vr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?cA(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gy(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ca(e)):[r,Ca(e)]:Ca(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vr(t.ssContent),ssFallback:t.ssFallback&&Vr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function as(t=" ",e=0){return Ne(Ll,null,t,e)}function aA(t,e){const n=Ne(Aa,null,t);return n.staticCount=e,n}function lA(t="",e=!1){return e?(Ot(),py(Ws,null,t)):Ne(Ws,null,t)}function un(t){return t==null||typeof t=="boolean"?Ne(Ws):z(t)?Ne(At,null,t.slice()):typeof t=="object"?Jn(t):Ne(Ll,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vr(t)}function ed(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ed(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Vl in e)?e._ctx=Nt:r===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),s&64?(n=16,e=[as(e)]):n=8);t.children=e,t.shapeFlag|=n}function cA(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=qh([e.class,s.class]));else if(r==="style")e.style=jh([e.style,s.style]);else if(Cl(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function cn(t,e,n,s=null){Xt(t,e,7,[n,s])}const uA=oy();let hA=0;function dA(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||uA,i={uid:hA++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new I_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ly(s,r),emitsOptions:Q_(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yR.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const td=()=>Ke||Nt;let nd,fr,Ap="__VUE_INSTANCE_SETTERS__";(fr=Tu()[Ap])||(fr=Tu()[Ap]=[]),fr.push(t=>Ke=t),nd=t=>{fr.length>1?fr.forEach(e=>e(t)):fr[0](t)};const Fr=t=>{nd(t),t.scope.on()},Fs=()=>{Ke&&Ke.scope.off(),nd(null)};function my(t){return t.vnode.shapeFlag&4}let to=!1;function fA(t,e=!1){to=e;const{props:n,children:s}=t.vnode,r=my(t);GR(t,n,r,e),XR(t,s);const i=r?pA(t,e):void 0;return to=!1,i}function pA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=F_(new Proxy(t.ctx,BR));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?mA(t):null;Fr(t),Zr();const i=os(s,t,0,[t.props,r]);if(ei(),Fs(),__(i)){if(i.then(Fs,Fs),e)return i.then(o=>{Cp(t,o,e)}).catch(o=>{Dl(o,t,0)});t.asyncDep=i}else Cp(t,i,e)}else _y(t,e)}function Cp(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=q_(e)),_y(t,n)}let Sp;function _y(t,e,n){const s=t.type;if(!t.render){if(!e&&Sp&&!s.render){const r=s.template||Jh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=rt(rt({isCustomElement:i,delimiters:a},o),l);s.render=Sp(r,c)}}t.render=s.render||vn}{Fr(t),Zr();try{$R(t)}finally{ei(),Fs()}}}function gA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}}))}function mA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return gA(t)},slots:t.slots,emit:t.emit,expose:e}}function Fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(q_(F_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}}))}function _A(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function yA(t){return Z(t)&&"__vccOpts"in t}const zt=(t,e)=>dR(t,e,to);function yy(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!z(e)?Ou(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ou(n)&&(n=[n]),Ne(t,e,n))}const vA=Symbol.for("v-scx"),EA=()=>Mt(vA),TA="3.3.12",wA="http://www.w3.org/2000/svg",Ps=typeof document<"u"?document:null,bp=Ps&&Ps.createElement("template"),IA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ps.createElementNS(wA,t):Ps.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ps.createTextNode(t),createComment:t=>Ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{bp.innerHTML=s?`<svg>${t}</svg>`:t;const a=bp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},RA=Symbol("_vtc");function AA(t,e,n){const s=t[RA];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const CA=Symbol("_vod"),SA=Symbol("");function bA(t,e,n){const s=t.style,r=je(n);if(n&&!r){if(e&&!je(e))for(const i in e)n[i]==null&&Du(s,i,"");for(const i in n)Du(s,i,n[i])}else{const i=s.display;if(r){if(e!==n){const o=s[SA];o&&(n+=";"+o),s.cssText=n}}else e&&t.removeAttribute("style");CA in t&&(s.display=i)}}const Pp=/\s*!important$/;function Du(t,e,n){if(z(n))n.forEach(s=>Du(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=PA(t,e);Pp.test(n)?t.setProperty(tr(s),n.replace(Pp,""),"important"):t[s]=n}}const kp=["Webkit","Moz","ms"],Uc={};function PA(t,e){const n=Uc[e];if(n)return n;let s=Rn(e);if(s!=="filter"&&s in t)return Uc[e]=s;s=Pl(s);for(let r=0;r<kp.length;r++){const i=kp[r]+s;if(i in t)return Uc[e]=i}return e}const Np="http://www.w3.org/1999/xlink";function kA(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Np,e.slice(6,e.length)):t.setAttributeNS(Np,e,n);else{const i=FI(e);n==null||i&&!E_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function NA(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=E_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ks(t,e,n,s){t.addEventListener(e,n,s)}function OA(t,e,n,s){t.removeEventListener(e,n,s)}const Op=Symbol("_vei");function DA(t,e,n,s,r=null){const i=t[Op]||(t[Op]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=xA(e);if(s){const c=i[e]=VA(s,r);ks(t,a,c,l)}else o&&(OA(t,a,o,l),i[e]=void 0)}}const Dp=/(?:Once|Passive|Capture)$/;function xA(t){let e;if(Dp.test(t)){e={};let s;for(;s=t.match(Dp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):tr(t.slice(2)),e]}let Bc=0;const MA=Promise.resolve(),LA=()=>Bc||(MA.then(()=>Bc=0),Bc=Date.now());function VA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(FA(s,n.value),e,5,[s])};return n.value=t,n.attached=LA(),n}function FA(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const xp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,UA=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?AA(t,s,r):e==="style"?bA(t,n,s):Cl(e)?Uh(e)||DA(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BA(t,e,s,r))?NA(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kA(t,e,s,r))};function BA(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&xp(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xp(e)&&je(n)?!1:e in t}const qa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>wa(e,n):e};function $A(t){t.target.composing=!0}function Mp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br=Symbol("_assign"),jA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[br]=qa(r);const i=s||r.props&&r.props.type==="number";ks(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Eu(a)),t[br](a)}),n&&ks(t,"change",()=>{t.value=t.value.trim()}),e||(ks(t,"compositionstart",$A),ks(t,"compositionend",Mp),ks(t,"change",Mp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t[br]=qa(i),t.composing)return;const o=r||t.type==="number"?Eu(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},qA={deep:!0,created(t,e,n){t[br]=qa(n),ks(t,"change",()=>{const s=t._modelValue,r=WA(t),i=t.checked,o=t[br];if(z(s)){const a=T_(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Sl(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(vy(t,i))})},mounted:Lp,beforeUpdate(t,e,n){t[br]=qa(n),Lp(t,e,n)}};function Lp(t,{value:e,oldValue:n},s){t._modelValue=e,z(e)?t.checked=T_(e,s.props.value)>-1:Sl(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=kl(e,vy(t,!0)))}function WA(t){return"_value"in t?t._value:t.value}function vy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const HA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zA=(t,e)=>t._withKeys||(t._withKeys=n=>{if(!("key"in n))return;const s=tr(n.key);if(e.some(r=>r===s||HA[r]===s))return t(n)}),KA=rt({patchProp:UA},IA);let Vp;function GA(){return Vp||(Vp=ZR(KA))}const QA=(...t)=>{const e=GA().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=YA(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function YA(t){return je(t)?document.querySelector(t):t}const Ey=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},XA={};function JA(t,e){const n=Ba("RouterLink"),s=Ba("RouterView");return Ot(),Qt(At,null,[Ne(n,{to:"/"},{default:Mi(()=>[as("Inicio")]),_:1}),Ne(n,{to:"/privada"},{default:Mi(()=>[as("Privada")]),_:1}),Ne(n,{to:"/administracion"},{default:Mi(()=>[as("Administracion")]),_:1}),Ne(s)],64)}const ZA=Ey(XA,[["render",JA]]);var Fp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+Ty.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},e0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new t0;const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class t0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(t){const e=wy(t);return Ul.encodeByteArray(e,!0)},Wa=function(t){return Iy(t).replace(/\./g,"")},Ha=function(t){try{return Ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){return Ry(void 0,t)}function Ry(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s0(n)||(t[n]=Ry(t[n],e[n]));return t}function s0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=()=>r0().__FIREBASE_DEFAULTS__,o0=()=>{if(typeof process>"u"||typeof Fp>"u")return;const t=Fp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ha(t[1]);return e&&JSON.parse(e)},sd=()=>{try{return i0()||o0()||a0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ay=t=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cy=t=>{const e=Ay(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sy=()=>{var t;return(t=sd())===null||t===void 0?void 0:t.config},by=t=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wa(JSON.stringify(n)),Wa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function l0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ky(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c0(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ny(){return Ty.NODE_ADMIN===!0}function Oy(){try{return typeof indexedDB=="object"}catch{return!1}}function u0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="FirebaseError";class bn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=h0,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?d0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new bn(r,a,s)}}function d0(t,e){return t.replace(f0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const f0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=so(Ha(i[0])||""),n=so(Ha(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},p0=function(t){const e=Dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},g0=function(t){const e=Dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function za(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ka(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Up(i)&&Up(o)){if(!Ka(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function _0(t,e){const n=new y0(t,e);return n.subscribe.bind(n)}class y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");v0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$c),r.error===void 0&&(r.error=$c),r.complete===void 0&&(r.complete=$c);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $c(){}function E0(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Bl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new no;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R0(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===Cs?void 0:t}function R0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const C0={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},S0=ne.INFO,b0={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},P0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=b0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Co{constructor(e){this.name=e,this._logLevel=S0,this._logHandler=P0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const k0=(t,e)=>e.some(n=>t instanceof n);let Bp,$p;function N0(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return $p||($p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xy=new WeakMap,Mu=new WeakMap,My=new WeakMap,jc=new WeakMap,id=new WeakMap;function D0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ls(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xy.set(n,t)}).catch(()=>{}),id.set(e,t),e}function x0(t){if(Mu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mu.set(t,e)}let Lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ls(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M0(t){Lu=t(Lu)}function L0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qc(this),e,...n);return My.set(s,e.sort?e.sort():[e]),ls(s)}:O0().includes(t)?function(...e){return t.apply(qc(this),e),ls(xy.get(this))}:function(...e){return ls(t.apply(qc(this),e))}}function V0(t){return typeof t=="function"?L0(t):(t instanceof IDBTransaction&&x0(t),k0(t,N0())?new Proxy(t,Lu):t)}function ls(t){if(t instanceof IDBRequest)return D0(t);if(jc.has(t))return jc.get(t);const e=V0(t);return e!==t&&(jc.set(t,e),id.set(e,t)),e}const qc=t=>id.get(t);function F0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ls(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ls(o.result),l.oldVersion,l.newVersion,ls(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const U0=["get","getKey","getAll","getAllKeys","count"],B0=["put","add","delete","clear"],Wc=new Map;function jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wc.get(e))return Wc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=B0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||U0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Wc.set(e,i),i}M0(t=>({...t,get:(e,n,s)=>jp(e,n)||t.get(e,n,s),has:(e,n)=>!!jp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vu="@firebase/app",qp="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Co("@firebase/app"),q0="@firebase/app-compat",W0="@firebase/analytics-compat",H0="@firebase/analytics",z0="@firebase/app-check-compat",K0="@firebase/app-check",G0="@firebase/auth",Q0="@firebase/auth-compat",Y0="@firebase/database",X0="@firebase/database-compat",J0="@firebase/functions",Z0="@firebase/functions-compat",eC="@firebase/installations",tC="@firebase/installations-compat",nC="@firebase/messaging",sC="@firebase/messaging-compat",rC="@firebase/performance",iC="@firebase/performance-compat",oC="@firebase/remote-config",aC="@firebase/remote-config-compat",lC="@firebase/storage",cC="@firebase/storage-compat",uC="@firebase/firestore",hC="@firebase/firestore-compat",dC="firebase",fC="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="[DEFAULT]",pC={[Vu]:"fire-core",[q0]:"fire-core-compat",[H0]:"fire-analytics",[W0]:"fire-analytics-compat",[K0]:"fire-app-check",[z0]:"fire-app-check-compat",[G0]:"fire-auth",[Q0]:"fire-auth-compat",[Y0]:"fire-rtdb",[X0]:"fire-rtdb-compat",[J0]:"fire-fn",[Z0]:"fire-fn-compat",[eC]:"fire-iid",[tC]:"fire-iid-compat",[nC]:"fire-fcm",[sC]:"fire-fcm-compat",[rC]:"fire-perf",[iC]:"fire-perf-compat",[oC]:"fire-rc",[aC]:"fire-rc-compat",[lC]:"fire-gcs",[cC]:"fire-gcs-compat",[uC]:"fire-fst",[hC]:"fire-fst-compat","fire-js":"fire-js",[dC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map,Uu=new Map;function gC(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(Uu.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of Ga.values())gC(n,t);return!0}function $l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cs=new ni("app","Firebase",mC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=fC;function Ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw cs.create("bad-app-name",{appName:String(r)});if(n||(n=Sy()),!n)throw cs.create("no-options");const i=Ga.get(r);if(i){if(Ka(n,i.options)&&Ka(s,i.config))return i;throw cs.create("duplicate-app",{appName:r})}const o=new A0(r);for(const l of Uu.values())o.addComponent(l);const a=new _C(n,s,o);return Ga.set(r,a),a}function jl(t=Fu){const e=Ga.get(t);if(!e&&t===Fu&&Sy())return Ly();if(!e)throw cs.create("no-app",{appName:t});return e}function Lt(t,e,n){var s;let r=(s=pC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}An(new en(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="firebase-heartbeat-database",vC=1,ro="firebase-heartbeat-store";let Hc=null;function Vy(){return Hc||(Hc=F0(yC,vC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ro)}}}).catch(t=>{throw cs.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function EC(t){try{return await(await Vy()).transaction(ro).objectStore(ro).get(Fy(t))}catch(e){if(e instanceof bn)Hs.warn(e.message);else{const n=cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hs.warn(n.message)}}}async function Wp(t,e){try{const s=(await Vy()).transaction(ro,"readwrite");await s.objectStore(ro).put(e,Fy(t)),await s.done}catch(n){if(n instanceof bn)Hs.warn(n.message);else{const s=cs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hs.warn(s.message)}}}function Fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=1024,wC=30*24*60*60*1e3;class IC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hp(),{heartbeatsToSend:s,unsentEntries:r}=RC(this._heartbeatsCache.heartbeats),i=Wa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hp(){return new Date().toISOString().substring(0,10)}function RC(t,e=TC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),zp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class AC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oy()?u0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zp(t){return Wa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){An(new en("platform-logger",e=>new $0(e),"PRIVATE")),An(new en("heartbeat",e=>new IC(e),"PRIVATE")),Lt(Vu,qp,t),Lt(Vu,qp,"esm2017"),Lt("fire-js","")}CC("");function od(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Uy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SC=Uy,By=new ni("auth","Firebase",Uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Co("@firebase/auth");function bC(t,...e){Qa.logLevel<=ne.WARN&&Qa.warn(`Auth (${vs}): ${t}`,...e)}function Sa(t,...e){Qa.logLevel<=ne.ERROR&&Qa.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw ad(t,...e)}function En(t,...e){return ad(t,...e)}function $y(t,e,n){const s=Object.assign(Object.assign({},SC()),{[e]:n});return new ni("auth","Firebase",s).create(e,{appName:t.name})}function PC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Cn(t,"argument-error"),$y(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ad(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return By.create(t,...e)}function Y(t,e,...n){if(!t)throw ad(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function $n(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kC(){return Kp()==="http:"||Kp()==="https:"}function Kp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kC()||l0()||"connection"in navigator)?navigator.onLine:!0}function OC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||ky()}get(){return NC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=new So(3e4,6e4);function cd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ri(t,e,n,s,r={}){return qy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=si(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jy.fetch()(Wy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function qy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},DC),e);try{const r=new LC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ra(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $y(t,u,c);Cn(t,u)}}catch(r){if(r instanceof bn)throw r;Cn(t,"network-request-failed",{message:String(r)})}}async function MC(t,e,n,s,r={}){const i=await ri(t,e,n,s,r);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ld(t.config,r):`${t.config.apiScheme}://${r}`}class LC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(En(this.auth,"network-request-failed")),xC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=En(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function FC(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UC(t,e=!1){const n=Oe(t),s=await n.getIdToken(e),r=ud(s);Y(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ui(zc(r.auth_time)),issuedAtTime:Ui(zc(r.iat)),expirationTime:Ui(zc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function ud(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ha(n);return r?JSON.parse(r):(Sa("Failed to decode base64 JWT payload"),null)}catch(r){return Sa("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function BC(t){const e=ud(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof bn&&$C(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $C({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t){var e;const n=t.auth,s=await t.getIdToken(),r=await io(t,FC(n,{idToken:s}));Y(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?HC(i.providerUserInfo):[],a=WC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qC(t){const e=Oe(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function HC(t){return t.map(e=>{var{providerId:n}=e,s=od(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){const n=await qy(t,{},async()=>{const s=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Wy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KC(t,e){return ri(t,"POST","/v2/accounts:revokeToken",cd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await zC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new oo;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UC(this,e)}reload(){return qC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await io(this,VC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:E,isAnonymous:$,providerData:X,stsTokenManager:he}=n;Y(I&&he,e,"internal-error");const Ee=oo.fromJSON(this.name,he);Y(typeof I=="string",e,"internal-error"),Yn(h,e.name),Yn(d,e.name),Y(typeof E=="boolean",e,"internal-error"),Y(typeof $=="boolean",e,"internal-error"),Yn(f,e.name),Yn(m,e.name),Yn(y,e.name),Yn(v,e.name),Yn(C,e.name),Yn(T,e.name);const wt=new Us({uid:I,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:$,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Ee,createdAt:C,lastLoginAt:T});return X&&Array.isArray(X)&&(wt.providerData=X.map(Xe=>Object.assign({},Xe))),v&&(wt._redirectEventId=v),wt}static async _fromIdTokenResponse(e,n,s=!1){const r=new oo;r.updateFromServerResponse(n);const i=new Us({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ya(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Map;function xn(t){$n(t instanceof Function,"Expected a class definition");let e=Gp.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const Qp=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ba(this.userKey,r.apiKey,i),this.fullPersistenceKey=ba("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Pr(xn(Qp),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||xn(Qp);const o=ba(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Us._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Pr(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Pr(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(hd(e))return"Safari";if((e.includes("chrome/")||Gy(e))&&!e.includes("edge/"))return"Chrome";if(Yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ky(t=mt()){return/firefox\//i.test(t)}function hd(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gy(t=mt()){return/crios\//i.test(t)}function Qy(t=mt()){return/iemobile/i.test(t)}function Yy(t=mt()){return/android/i.test(t)}function Xy(t=mt()){return/blackberry/i.test(t)}function Jy(t=mt()){return/webos/i.test(t)}function ql(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GC(t=mt()){var e;return ql(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QC(){return c0()&&document.documentMode===10}function Zy(t=mt()){return ql(t)||Yy(t)||Jy(t)||Xy(t)||/windows phone/i.test(t)||Qy(t)}function YC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t,e=[]){let n;switch(t){case"Browser":n=Yp(mt());break;case"Worker":n=`${Yp(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(t,e={}){return ri(t,"GET","/v2/passwordPolicy",cd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=6;class eS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new XC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JC(this),n=new eS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await KC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wl(t){return Oe(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_0(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=En("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",nS().appendChild(s)})}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t,e){const n=$l(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ka(i,e??{}))return r;Cn(r,"already-initialized")}return n.initialize({options:e})}function iS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function oS(t,e,n){const s=Wl(t);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=nv(e),{host:o,port:a}=aS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||lS()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aS(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Jp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t,e){return MC(t,"POST","/v1/accounts:signInWithIdp",cd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="http://localhost";class zs extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=od(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new zs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,kr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kr(e,n)}buildRequest(){const e={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=si(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends bo{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ut.credential(n,s)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends bo{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends bo{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Us._fromIdTokenResponse(e,s,r),o=Zp(s);return new Br({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zp(s);return new Br({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends bn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xa(e,n,s,r)}}function rv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(t,i,e,s):i})}async function uS(t,e,n=!1){const s=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await io(t,rv(s,r,e,t),n);Y(i.idToken,s,"internal-error");const o=ud(i.idToken);Y(o,s,"internal-error");const{sub:a}=o;return Y(t.uid===a,s,"user-mismatch"),Br._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e,n=!1){const s="signIn",r=await rv(t,s,e),i=await Br._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function iv(t,e,n,s){return Oe(t).onIdTokenChanged(e,n,s)}function fS(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function pS(t,e,n,s){return Oe(t).onAuthStateChanged(e,n,s)}function gS(t){return Oe(t).signOut()}const Ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){const t=mt();return hd(t)||ql(t)}const _S=1e3,yS=10;class av extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mS()&&YC(),this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);QC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const lv=av;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cv.type="SESSION";const fd=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Hl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await vS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=pd("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function TS(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function wS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RS(){return uv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="firebaseLocalStorageDb",AS=1,Za="firebaseLocalStorage",dv="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function CS(){const t=indexedDB.deleteDatabase(hv);return new Po(t).toPromise()}function $u(){const t=indexedDB.open(hv,AS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Za,{keyPath:dv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Za)?e(s):(s.close(),await CS(),e(await $u()))})})}async function eg(t,e,n){const s=zl(t,!0).put({[dv]:e,value:n});return new Po(s).toPromise()}async function SS(t,e){const n=zl(t,!1).get(e),s=await new Po(n).toPromise();return s===void 0?null:s.value}function tg(t,e){const n=zl(t,!0).delete(e);return new Po(n).toPromise()}const bS=800,PS=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hl._getInstance(RS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new ES(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $u();return await eg(e,Ja,"1"),await tg(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>eg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>SS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=zl(r,!1).getAll();return new Po(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const pv=fv;new So(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){return e?xn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return dS(t.auth,new gd(t),t.bypassAuthState)}function NS(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),hS(n,new gd(t),t.bypassAuthState)}async function OS(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),uS(n,new gd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return OS;case"reauthViaPopup":case"reauthViaRedirect":return NS;default:Cn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new So(2e3,1e4);async function xS(t,e,n){const s=Wl(t);PC(t,e,dd);const r=gv(s,n);return new Os(s,"signInViaPopup",e,r).executeNotNull()}class Os extends mv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DS.get())};e()}}Os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="pendingRedirect",Pa=new Map;class LS extends mv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const s=await VS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VS(t,e){const n=BS(e),s=US(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function FS(t,e){Pa.set(t._key(),e)}function US(t){return xn(t._redirectPersistence)}function BS(t){return ba(MS,t.config.apiKey,t.name)}async function $S(t,e,n=!1){const s=Wl(t),r=gv(s,e),o=await new LS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=10*60*1e3;class qS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_v(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(En(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ng(e))}saveEventToCache(e){this.cachedEventUids.add(ng(e)),this.lastProcessedEventTime=Date.now()}}function ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _v({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KS=/^https?/;async function GS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HS(t);for(const n of e)try{if(QS(n))return}catch{}Cn(t,"unauthorized-domain")}function QS(t){const e=Bu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!KS.test(n))return!1;if(zS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=new So(3e4,6e4);function sg(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XS(t){return new Promise((e,n)=>{var s,r,i;function o(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),n(En(t,"network-request-failed"))},timeout:YS.get()})}if(!((r=(s=Tn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const a=rS("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},sS(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ka=null,e})}let ka=null;function JS(t){return ka=ka||XS(t),ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new So(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rb(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ld(e,tb):`https://${t.config.authDomain}/${eb}`,s={apiKey:e.apiKey,appName:t.name,v:vs},r=sb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${si(s).slice(1)}`}async function ib(t){const e=await JS(t),n=Tn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:rb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=Tn().setTimeout(()=>{i(o)},ZS.get());function l(){Tn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,lb=600,cb="_blank",ub="http://localhost";class rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(t,e,n,s=ab,r=lb){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ob),{width:s.toString(),height:r.toString(),top:i,left:o}),c=mt().toLowerCase();n&&(a=Gy(c)?cb:n),Ky(c)&&(e=e||ub,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(GC(c)&&a!=="_self")return db(e||"",a),new rg(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new rg(h)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="__/auth/handler",pb="emulator/auth/handler",gb=encodeURIComponent("fac");async function ig(t,e,n,s,r,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vs,eventId:r};if(e instanceof dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof bo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gb}=${encodeURIComponent(l)}`:"";return`${mb(t)}?${si(a).slice(1)}${c}`}function mb({config:t}){return t.emulator?ld(t,pb):`https://${t.authDomain}/${fb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=$S,this._overrideRedirectResult=FS}async _openPopup(e,n,s,r){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ig(e,n,s,Bu(),r);return hb(e,o,pd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ig(e,n,s,Bu(),r);return TS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):($n(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ib(e),s=new qS(e);return n.register("authEvent",r=>(Y(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kc,{type:Kc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Kc];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zy()||hd()||ql()}}const yv=_b;var og="@firebase/auth",ag="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Eb(t){An(new en("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(t)},c=new tS(s,r,i,l);return iS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),An(new en("auth-internal",e=>{const n=Wl(e.getProvider("auth").getImmediate());return(s=>new yb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(og,ag,vb(t)),Lt(og,ag,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=5*60,wb=by("authIdTokenMaxAge")||Tb;let lg=null;const Ib=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wb)return;const r=n==null?void 0:n.token;lg!==r&&(lg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Kl(t=jl()){const e=$l(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tv(t,{popupRedirectResolver:yv,persistence:[pv,lv,fd]}),s=by("authTokenSyncURL");if(s){const i=Ib(s);fS(n,i,()=>i(n.currentUser)),iv(n,o=>i(o))}const r=Ay("auth");return r&&oS(n,`http://${r}`),n}Eb("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Map,Ab={activated:!1,tokenObservers:[]};function tn(t){return Rb.get(t)||Object.assign({},Ab)}const cg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new no,this.pending.promise.catch(n=>{}),await Sb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new no,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Sb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},el=new ni("appCheck","AppCheck",bb);function vv(t){if(!tn(t).activated)throw el.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="firebase-app-check-database",kb=1,ju="firebase-app-check-store";let ia=null;function Nb(){return ia||(ia=new Promise((t,e)=>{try{const n=indexedDB.open(Pb,kb);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(el.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ju,{keyPath:"compositeKey"})}}}catch(n){e(el.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ia)}function Ob(t,e){return Db(xb(t),e)}async function Db(t,e){const s=(await Nb()).transaction(ju,"readwrite"),i=s.objectStore(ju).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var c;a(el.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function xb(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Co("@firebase/app-check");function ug(t,e){return Oy()?Ob(t,e).catch(n=>{qu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={error:"UNKNOWN_ERROR"};function Lb(t){return Ul.encodeString(JSON.stringify(t),!1)}async function Wu(t,e=!1){const n=t.app;vv(n);const s=tn(n);let r=s.token,i;if(r&&!bi(r)&&(s.token=void 0,r=void 0),!r){const l=await s.cachedTokenPromise;l&&(bi(l)?r=l:await ug(n,void 0))}if(!e&&r&&bi(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await tn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?qu.warn(l.message):qu.error(l),i=l}let a;return r?i?bi(r)?a={token:r.token,internalError:i}:a=dg(i):(a={token:r.token},s.token=r,await ug(n,r)):a=dg(i),o&&Bb(n,a),a}async function Vb(t){const e=t.app;vv(e);const{provider:n}=tn(e);{const{token:s}=await n.getToken();return{token:s}}}function Fb(t,e,n,s){const{app:r}=t,i=tn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&bi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),hg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>hg(t))}function Ev(t,e){const n=tn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function hg(t){const{app:e}=t,n=tn(e);let s=n.tokenRefresher;s||(s=Ub(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Ub(t){const{app:e}=t;return new Cb(async()=>{const n=tn(e);let s;if(n.token?s=await Wu(t,!0):s=await Wu(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=tn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},cg.RETRIAL_MIN_WAIT,cg.RETRIAL_MAX_WAIT)}function Bb(t,e){const n=tn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function bi(t){return t.expireTimeMillis-Date.now()>0}function dg(t){return{token:Lb(Mb),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=tn(this.app);for(const n of e)Ev(this.app,n.next);return Promise.resolve()}}function jb(t,e){return new $b(t,e)}function qb(t){return{getToken:e=>Wu(t,e),getLimitedUseToken:()=>Vb(t),addTokenListener:e=>Fb(t,"INTERNAL",e),removeTokenListener:e=>Ev(t.app,e)}}const Wb="@firebase/app-check",Hb="0.8.1",zb="app-check",fg="app-check-internal";function Kb(){An(new en(zb,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return jb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(fg).initialize()})),An(new en(fg,t=>{const e=t.getProvider("app-check").getImmediate();return qb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Lt(Wb,Hb)}Kb();var Gb="firebase",Qb="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(Gb,Qb,"app");const Tv=Symbol("firebaseApp");function Gl(t){return td()&&Mt(Tv,null)||jl(t)}const fn=()=>{};function md(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Yb(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function nr(t){return!!t&&typeof t=="object"}const Xb=Object.prototype;function Jb(t){return nr(t)&&Object.getPrototypeOf(t)===Xb}function _d(t){return nr(t)&&t.type==="document"}function Zb(t){return nr(t)&&t.type==="collection"}function eP(t){return _d(t)||Zb(t)}function tP(t){return nr(t)&&t.type==="query"}function nP(t){return nr(t)&&"ref"in t}function sP(t){return nr(t)&&typeof t.bucket=="string"}function rP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const iP=Symbol.for("v-scx");function oP(){return td(),!!Mt(iP,0)}const oa=new WeakMap;function aP(t,e){if(!oa.has(t)){const n=BI(!0);oa.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),oa.delete(t)}}return oa.get(t)}const lP=new WeakMap,aa=new WeakMap;function cP(t){const e=Gl(t);if(!aa.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{aa.set(e,i),n(i.value)}];aa.set(e,r)}return aa.get(e)}function uP(t,e){iv(e,n=>{const s=cP();t.value=n,Array.isArray(s)&&s[1](t)})}var pg={};const gg="@firebase/database",mg="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wv="";function hP(t){wv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:so(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dP(e)}}catch{}return new fP},Ds=Iv("localStorage"),Hu=Iv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Co("@firebase/database"),pP=function(){let t=1;return function(){return t++}}(),Rv=function(t){const e=T0(t),n=new m0;n.update(e);const s=n.digest();return Ul.encodeByteArray(s)},ko=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ko.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let Bs=null,_g=!0;const gP=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Nr.logLevel=ne.VERBOSE,Bs=Nr.log.bind(Nr),e&&Hu.set("logging_enabled",!0)):typeof t=="function"?Bs=t:(Bs=null,Hu.remove("logging_enabled"))},lt=function(...t){if(_g===!0&&(_g=!1,Bs===null&&Hu.get("logging_enabled")===!0&&gP(!0)),Bs){const e=ko.apply(null,t);Bs(e)}},No=function(t){return function(...e){lt(t,...e)}},zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ko(...t);Nr.error(e)},Ks=function(...t){const e=`FIREBASE FATAL ERROR: ${ko(...t)}`;throw Nr.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+ko(...t);Nr.warn(e)},mP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Av=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_P=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$r="[MIN_NAME]",Gs="[MAX_NAME]",ii=function(t,e){if(t===e)return 0;if(t===$r||e===Gs)return-1;if(e===$r||t===Gs)return 1;{const n=yg(t),s=yg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},yP=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},yd=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=et(e[s]),n+=":",n+=yd(t[e[s]]);return n+="}",n},Cv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sv=function(t){x(!Av(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},vP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},TP=new RegExp("^-?(0*)\\d{1,10}$"),wP=-2147483648,IP=2147483647,yg=function(t){if(TP.test(t)){const e=Number(t);if(e>=wP&&e<=IP)return e}return null},Oo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},RP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class Ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ku.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="5",bv="v",Pv="s",kv="r",Nv="f",Ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dv="ls",xv="p",Gu="ac",Mv="websocket",Lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ds.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ds.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Mv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bP(t)&&(n.ns=t.namespace);const r=[];return qt(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.counters_={}}incrementCounter(e,n=1){zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return n0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={},Qc={};function Ed(t){const e=t.toString();return Gc[e]||(Gc[e]=new PP),Gc[e]}function kP(t,e){const n=t.toString();return Qc[n]||(Qc[n]=e()),Qc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Oo(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="start",OP="close",DP="pLPCommand",xP="pRTLPCB",Fv="id",Uv="pw",Bv="ser",MP="cb",LP="seg",VP="ts",FP="d",UP="dframe",$v=1870,jv=30,BP=$v-jv,$P=25e3,jP=3e4;class Tr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=No(e),this.stats_=Ed(n),this.urlFn=l=>(this.appCheckToken&&(l[Gu]=this.appCheckToken),Vv(n,Lv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jP)),_P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Td((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vg)this.id=a,this.password=l;else if(o===OP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vg]="t",s[Bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[MP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[bv]=vd,this.transportSessionId&&(s[Pv]=this.transportSessionId),this.lastSessionId&&(s[Dv]=this.lastSessionId),this.applicationId&&(s[xv]=this.applicationId),this.appCheckToken&&(s[Gu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(s[kv]=Nv);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return Tr.forceAllow_?!0:!Tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vP()&&!EP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Iy(n),r=Cv(s,BP);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[UP]="t",s[Fv]=e,s[Uv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Td{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pP(),window[DP+this.uniqueCallbackIdentifier]=e,window[xP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Td.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){lt("frame writing exception"),a.stack&&lt(a.stack),lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[Bv]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+s.length<=$v;){const o=this.pendingSegs.shift();s=s+"&"+LP+r+"="+o.seg+"&"+VP+r+"="+o.ts+"&"+FP+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor($P)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=16384,WP=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class Kt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=No(this.connId),this.stats_=Ed(n),this.connURL=Kt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[bv]=vd,typeof location<"u"&&location.hostname&&Ov.test(location.hostname)&&(o[kv]=Nv),n&&(o[Pv]=n),s&&(o[Dv]=s),r&&(o[Gu]=r),i&&(o[xv]=i),Vv(e,Mv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ds.set("previous_websocket_failure",!0);try{let s;Ny(),this.mySock=new tl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&tl!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Ds.isInMemoryStorage||Ds.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ds.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=so(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cv(n,qP);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let s=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Kt];else{const r=this.transports_=[];for(const i of ao.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ao.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=6e4,zP=5e3,KP=10*1024,GP=100*1024,Yc="t",Eg="d",QP="s",Tg="r",YP="e",wg="o",Ig="a",Rg="n",Ag="p",XP="h";class JP{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=No("c:"+this.id+":"),this.transportManager_=new ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yc in e){const n=e[Yc];n===Ig?this.upgradeIfSecondaryHealthy_():n===Tg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===wg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),s=mi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ag,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ig,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),s=mi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(Yc,e);if(Eg in e){const s=e[Eg];if(n===XP){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Rg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===QP?this.onConnectionShutdown_(s):n===Tg?this.onReset_(s):n===YP?zu("Server Error: "+s):n===wg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==s&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ag,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ds.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends Wv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=32,Sg=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Pe("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ps(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Hv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function Ge(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new Pe(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function $t(t,e){const n=oe(t),s=oe(e);if(n===null)return e;if(n===s)return $t(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gv(t,e){if(ps(t)!==ps(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ps(t)>ps(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ek{constructor(e,n){this.errorPrefix_=n,this.parts_=zv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bl(this.parts_[s]);Qv(this)}}function tk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bl(e),Qv(t)}function nk(t){const e=t.parts_.pop();t.byteLength_-=Bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Qv(t){if(t.byteLength_>Sg)throw new Error(t.errorPrefix_+"has a key path longer than "+Sg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cg+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Wv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new wd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1e3,sk=60*5*1e3,bg=30*1e3,rk=1.3,ik=3e4,ok="server_kill",Pg=3;class Un extends qv{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Un.nextPersistentConnectionId_++,this.log_=No("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_i,this.maxReconnectDelay_=sk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ny())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(et(i)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new no,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Un.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zn(e,"w")){const s=Ur(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||g0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=p0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zu("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ik&&(this.reconnectDelay_=_i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Un.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new JP(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Vt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ok)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Vt(h),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xu(this.interruptReasons_)&&(this.reconnectDelay_=_i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>yd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){lt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pg&&(this.reconnectDelay_=bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){lt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wv.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:ky()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return xu(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae($r,e),r=new ae($r,n);return this.compare(s,r)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;class Yv extends Ql{static get __EMPTY_NODE(){return la}static set __EMPTY_NODE(e){la=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Gs,la)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,la)}toString(){return".key"}}const Or=new Yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca=class{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kt=class Pi{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Pi.RED,this.left=r??pn.EMPTY_NODE,this.right=i??pn.EMPTY_NODE}copy(e,n,s,r,i){return new Pi(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kt.RED=!0;kt.BLACK=!1;class ak{copy(e,n,s,r,i){return this}insert(e,n,s){return new kt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let pn=class Na{constructor(e,n=Na.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Na(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,kt.BLACK,null,null))}remove(e){return new Na(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ca(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ca(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ca(this.root_,null,this.comparator_,!0,e)}};pn.EMPTY_NODE=new ak;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e){return ii(t.name,e.name)}function Id(t,e){return ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function ck(t){Qu=t}const Xv=function(t){return typeof t=="number"?"number:"+Sv(t):"string:"+t},Jv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zn(e,".sv"),"Priority must be a string or number.")}else x(t===Qu||t.isEmpty(),"priority of unexpected type.");x(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kg;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Jv(this.priorityNode_)}static set __childrenNodeConstructor(e){kg=e}static get __childrenNodeConstructor(){return kg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:oe(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sv(this.value_):e+=this.value_,this.lazyHash_=Rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=We.VALUE_TYPE_ORDER.indexOf(n),i=We.VALUE_TYPE_ORDER.indexOf(s);return x(r>=0,"Unknown leaf type: "+n),x(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zv,eE;function uk(t){Zv=t}function hk(t){eE=t}class dk extends Ql{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?ii(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Gs,new We("[PRIORITY-POST]",eE))}makePost(e,n){const s=Zv(e);return new ae(n,new We("[PRIORITY-POST]",s))}toString(){return".priority"}}const dt=new dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=Math.log(2);class pk{constructor(e){const n=i=>parseInt(Math.log(i)/fk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sl=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new kt(d,h.node,kt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=r(l,f),y=r(f+1,c);return h=t[f],d=n?n(h):h,new kt(d,h.node,kt.BLACK,m,y)}},i=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,C=h;h-=m;const T=r(v+1,C),I=t[v],E=n?n(I):I;f(new kt(E,I.node,y,null,T))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,kt.BLACK):(d(v,kt.BLACK),d(v,kt.RED))}return u},o=new pk(t.length),a=i(o);return new pn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc;const pr={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(pr&&dt,"ChildrenNode.ts has not been loaded"),Xc=Xc||new Mn({".priority":pr},{".priority":dt}),Xc}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pn?n:null}hasIndex(e){return zn(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=sl(s,e.getCompare()):a=pr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mn(u,c)}addToIndexes(e,n){const s=za(this.indexes_,(r,i)=>{const o=Ur(this.indexSet_,i);if(x(o,"Missing index implementation for "+i),r===pr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),sl(a,o.getCompare())}else return pr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new Mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=za(this.indexes_,r=>{if(r===pr)return r;{const i=n.get(e.name);return i?r.remove(new ae(e.name,i)):r}});return new Mn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class pe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Jv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return yi||(yi=new pe(new pn(Id),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?yi:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?yi:this.priorityNode_;return new pe(r,o,i)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{x(oe(e)!==".priority"||ps(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(dt,(o,a)=>{n[o]=a.val(e),s++,i&&pe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xv(this.getPriority().val())+":"),this.forEachChild(dt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Rv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Do?-1:0}withIndex(e){if(e===Or||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Or||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(dt),r=n.getIterator(dt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Or?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gk extends pe{constructor(){super(new pn(Id),pe.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const Do=new gk;Object.defineProperties(ae,{MIN:{value:new ae($r,pe.EMPTY_NODE)},MAX:{value:new ae(Gs,Do)}});Yv.__EMPTY_NODE=pe.EMPTY_NODE;We.__childrenNodeConstructor=pe;ck(Do);hk(Do);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=!0;function ct(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,ct(e))}if(!(t instanceof Array)&&mk){const n=[];let s=!1;if(qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ct(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return pe.EMPTY_NODE;const i=sl(n,lk,o=>o.name,Id);if(s){const o=sl(n,dt.getCompare());return new pe(i,ct(e),new Mn({".priority":o},{".priority":dt}))}else return new pe(i,ct(e),Mn.Default)}else{let n=pe.EMPTY_NODE;return qt(t,(s,r)=>{if(zn(t,s)&&s.substring(0,1)!=="."){const i=ct(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(ct(e))}}uk(ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k extends Ql{constructor(e){super(),this.indexPath_=e,x(!re(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?ii(e.name,n.name):i}makePost(e,n){const s=ct(e),r=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,r)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,Do);return new ae(Gs,e)}toString(){return zv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk extends Ql{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ii(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=ct(e);return new ae(n,s)}toString(){return".value"}}const vk=new yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return{type:"value",snapshotNode:t}}function Tk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ng(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ik(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$r}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===dt}copy(){const e=new Rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Og(t){const e={};if(t.isDefault())return e;let n;if(t.index_===dt?n="$priority":t.index_===vk?n="$value":t.index_===Or?n="$key":(x(t.index_ instanceof _k,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==dt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends qv{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=No("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=rl.getListenId_(e,s),a={};this.listens_[o]=a;const l=Og(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Ur(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=rl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Og(e._queryParams),s=e._path.toString(),r=new no;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+si(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=so(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return{value:null,children:new Map}}function tE(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=oe(e);t.children.has(s)||t.children.set(s,il());const r=t.children.get(s);e=Ce(e),tE(r,e,n)}}function Yu(t,e,n){t.value!==null?n(e,t.value):Ak(t,(s,r)=>{const i=new Pe(e.toString()+"/"+s);Yu(r,i,n)})}function Ak(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qt(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=10*1e3,Sk=30*1e3,bk=5*60*1e3;class Pk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ck(e);const s=xg+(Sk-xg)*Math.random();Bi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qt(e,(r,i)=>{i>0&&zn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*bk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function nE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=gn.ACK_USER_WRITE,this.source=nE()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new ol(ye(),n,this.revert)}}else return x(oe(this.path)===e,"operationForChild called for unrelated child."),new ol(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=gn.OVERWRITE}operationForChild(e){return re(this.path)?new Qs(this.source,ye(),this.snap.getImmediateChild(e)):new Qs(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=gn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new Qs(this.source,ye(),n.value):new lo(this.source,ye(),n)}else return x(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function kk(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Ik(o.childName,o.snapshotNode))}),vi(t,r,"child_removed",e,s,n),vi(t,r,"child_added",e,s,n),vi(t,r,"child_moved",i,s,n),vi(t,r,"child_changed",e,s,n),vi(t,r,"value",e,s,n),r}function vi(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ok(t,a,l)),o.forEach(a=>{const l=Nk(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Nk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ok(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),r=new ae(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){return{eventCache:t,serverCache:e}}function $i(t,e,n,s){return iE(new Ad(e,n,s),t.serverCache)}function oE(t,e,n,s){return iE(t.eventCache,new Ad(e,n,s))}function Xu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ys(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc;const Dk=()=>(Jc||(Jc=new pn(yP)),Jc);class Re{constructor(e,n=Dk()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return qt(e,(s,r)=>{n=n.set(new Pe(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(re(e))return null;{const s=oe(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ce(e),n);return i!=null?{path:Ge(new Pe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Re(null)}}set(e,n){if(re(e))return new Re(n,this.children);{const s=oe(e),i=(this.children.get(s)||new Re(null)).set(Ce(e),n),o=this.children.insert(s,i);return new Re(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const r=s.remove(Ce(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new Re(null):new Re(this.value,i)}else return this}}get(e){if(re(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(re(e))return n;{const s=oe(e),i=(this.children.get(s)||new Re(null)).setTree(Ce(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Re(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ge(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(re(e))return null;{const i=oe(e),o=this.children.get(i);return o?o.findOnPath_(Ce(e),Ge(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const r=oe(e),i=this.children.get(r);return i?i.foreachOnPath_(Ce(e),Ge(n,r),s):new Re(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ge(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Re(null))}}function ji(t,e,n){if(re(e))return new Jt(new Re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=$t(r,e);return i=i.updateChild(o,n),new Jt(t.writeTree_.set(r,i))}else{const r=new Re(n),i=t.writeTree_.setTree(e,r);return new Jt(i)}}}function Mg(t,e,n){let s=t;return qt(n,(r,i)=>{s=ji(s,Ge(e,r),i)}),s}function Lg(t,e){if(re(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new Jt(n)}}function Ju(t,e){return sr(t,e)!=null}function sr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($t(n.path,e)):null}function Vg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(dt,(s,r)=>{e.push(new ae(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new ae(s,r.value))}),e}function us(t,e){if(re(e))return t;{const n=sr(t,e);return n!=null?new Jt(new Re(n)):new Jt(t.writeTree_.subtree(e))}}function Zu(t){return t.writeTree_.isEmpty()}function jr(t,e){return aE(ye(),t.writeTree_,e)}function aE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(x(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=aE(Ge(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ge(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e){return fE(e,t)}function xk(t,e,n,s,r){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=ji(t.visibleWrites,e,n)),t.lastWriteId=s}function Mk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Lk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Vk(a,s.path)?r=!1:Yt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return Fk(t),!0;if(s.snap)t.visibleWrites=Lg(t.visibleWrites,s.path);else{const a=s.children;qt(a,l=>{t.visibleWrites=Lg(t.visibleWrites,Ge(s.path,l))})}return!0}else return!1}function Vk(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(Ge(t.path,n),e))return!0;return!1}function Fk(t){t.visibleWrites=cE(t.allWrites,Uk,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Uk(t){return t.visible}function cE(t,e,n){let s=Jt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Yt(n,o)?(a=$t(n,o),s=ji(s,a,i.snap)):Yt(o,n)&&(a=$t(o,n),s=ji(s,ye(),i.snap.getChild(a)));else if(i.children){if(Yt(n,o))a=$t(n,o),s=Mg(s,a,i.children);else if(Yt(o,n))if(a=$t(o,n),re(a))s=Mg(s,ye(),i.children);else{const l=Ur(i.children,oe(a));if(l){const c=l.getChild(Ce(a));s=ji(s,ye(),c)}}}else throw ti("WriteRecord should have .snap or .children")}}return s}function uE(t,e,n,s,r){if(!s&&!r){const i=sr(t.visibleWrites,e);if(i!=null)return i;{const o=us(t.visibleWrites,e);if(Zu(o))return n;if(n==null&&!Ju(o,ye()))return null;{const a=n||pe.EMPTY_NODE;return jr(o,a)}}}else{const i=us(t.visibleWrites,e);if(!r&&Zu(i))return n;if(!r&&n==null&&!Ju(i,ye()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(Yt(c.path,e)||Yt(e,c.path))},a=cE(t.allWrites,o,e),l=n||pe.EMPTY_NODE;return jr(a,l)}}}function Bk(t,e,n){let s=pe.EMPTY_NODE;const r=sr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(dt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=us(t.visibleWrites,e);return n.forEachChild(dt,(o,a)=>{const l=jr(us(i,new Pe(o)),a);s=s.updateImmediateChild(o,l)}),Vg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=us(t.visibleWrites,e);return Vg(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $k(t,e,n,s,r){x(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ge(e,n);if(Ju(t.visibleWrites,i))return null;{const o=us(t.visibleWrites,i);return Zu(o)?r.getChild(n):jr(o,r.getChild(n))}}function jk(t,e,n,s){const r=Ge(e,n),i=sr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=us(t.visibleWrites,r);return jr(o,s.getNode().getImmediateChild(n))}else return null}function qk(t,e){return sr(t.visibleWrites,e)}function Wk(t,e,n,s,r,i,o){let a;const l=us(t.visibleWrites,e),c=sr(l,ye());if(c!=null)a=c;else if(n!=null)a=jr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<r;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Hk(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function eh(t,e,n,s){return uE(t.writeTree,t.treePath,e,n,s)}function hE(t,e){return Bk(t.writeTree,t.treePath,e)}function Fg(t,e,n,s){return $k(t.writeTree,t.treePath,e,n,s)}function al(t,e){return qk(t.writeTree,Ge(t.treePath,e))}function zk(t,e,n,s,r,i){return Wk(t.writeTree,t.treePath,e,n,s,r,i)}function Cd(t,e,n){return jk(t.writeTree,t.treePath,e,n)}function dE(t,e){return fE(Ge(t.treePath,e),t.writeTree)}function fE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Ng(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,wk(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Tk(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ng(s,e.snapshotNode,r.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const pE=new Gk;class Sd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ad(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ys(this.viewCache_),i=zk(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function Qk(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Yk(t,e,n,s,r){const i=new Kk;let o,a;if(n.type===gn.OVERWRITE){const c=n;c.source.fromUser?o=th(t,e,c.path,c.snap,s,r,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!re(c.path),o=ll(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===gn.MERGE){const c=n;c.source.fromUser?o=Jk(t,e,c.path,c.children,s,r,i):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,c.path,c.children,s,r,a,i))}else if(n.type===gn.ACK_USER_WRITE){const c=n;c.revert?o=tN(t,e,c.path,s,r,i):o=Zk(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===gn.LISTEN_COMPLETE)o=eN(t,e,n.path,s,i);else throw ti("Unknown operation type: "+n.type);const l=i.getChanges();return Xk(e,o,l),{viewCache:o,changes:l}}function Xk(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Xu(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Ek(Xu(e)))}}function gE(t,e,n,s,r,i){const o=e.eventCache;if(al(s,n)!=null)return e;{let a,l;if(re(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ys(e),u=c instanceof pe?c:pe.EMPTY_NODE,h=hE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=eh(s,Ys(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=oe(n);if(c===".priority"){x(ps(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Fg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Fg(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Cd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return $i(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function ll(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=oe(n);if(!l.isCompleteForPath(n)&&ps(n)>1)return e;const m=Ce(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,pE,null)}const h=oE(e,c,l.isFullyInitialized()||re(n),u.filtersNodes()),d=new Sd(r,h,i);return gE(t,h,n,r,d,a)}function th(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Sd(r,e,i);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=$i(e,c,!0,t.filter.filtersNodes());else{const h=oe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=$i(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),f=a.getNode().getImmediateChild(h);let m;if(re(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Hv(d)===".priority"&&y.getChild(Kv(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=pe.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=$i(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ug(t,e){return t.eventCache.isCompleteForChild(e)}function Jk(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ge(n,l);Ug(e,oe(u))&&(a=th(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ge(n,l);Ug(e,oe(u))||(a=th(t,a,u,c,r,i,o))}),a}function Bg(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function nh(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;re(n)?c=s:c=new Re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Bg(t,f,d);l=ll(t,l,new Pe(h),m,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=Bg(t,m,d);l=ll(t,l,new Pe(h),y,r,i,o,a)}}),l}function Zk(t,e,n,s,r,i,o){if(al(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ll(t,e,n,l.getNode().getChild(n),r,i,a,o);if(re(n)){let c=new Re(null);return l.getNode().forEachChild(Or,(u,h)=>{c=c.set(new Pe(u),h)}),nh(t,e,n,c,r,i,a,o)}else return e}else{let c=new Re(null);return s.foreach((u,h)=>{const d=Ge(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),nh(t,e,n,c,r,i,a,o)}}function eN(t,e,n,s,r){const i=e.serverCache,o=oE(e,i.getNode(),i.isFullyInitialized()||re(n),i.isFiltered());return gE(t,o,n,s,pE,r)}function tN(t,e,n,s,r,i){let o;if(al(s,n)!=null)return e;{const a=new Sd(s,e,r),l=e.eventCache.getNode();let c;if(re(n)||oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=eh(s,Ys(e));else{const h=e.serverCache.getNode();x(h instanceof pe,"serverChildren would be complete if leaf node"),u=hE(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=oe(n);let h=Cd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ce(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,pe.EMPTY_NODE,Ce(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eh(s,Ys(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||al(s,ye())!=null,$i(e,c,o,t.filter.filtersNodes())}}function nN(t,e){const n=Ys(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function $g(t,e,n,s){e.type===gn.MERGE&&e.source.queryId!==null&&(x(Ys(t.viewCache_),"We should always have a full cache before handling merges"),x(Xu(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=Yk(t.processor_,r,e,n,s);return Qk(t.processor_,i.viewCache),x(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sN(t,i.changes,i.viewCache.eventCache.getNode(),null)}function sN(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return kk(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jg;function rN(t){x(!jg,"__referenceConstructor has already been defined"),jg=t}function bd(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return x(i!=null,"SyncTree gave us an op for an invalid query."),$g(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat($g(o,e,n,s));return i}}function Pd(t,e){let n=null;for(const s of t.views.values())n=n||nN(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg;function iN(t){x(!qg,"__referenceConstructor has already been defined"),qg=t}class Wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=Hk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oN(t,e,n,s,r){return xk(t.pendingWriteTree_,e,n,s,r),r?Xl(t,new Qs(nE(),e,n)):[]}function wr(t,e,n=!1){const s=Mk(t.pendingWriteTree_,e);if(Lk(t.pendingWriteTree_,e)){let i=new Re(null);return s.snap!=null?i=i.set(ye(),!0):qt(s.children,o=>{i=i.set(new Pe(o),!0)}),Xl(t,new ol(s.path,i,n))}else return[]}function Yl(t,e,n){return Xl(t,new Qs(sE(),e,n))}function aN(t,e,n){const s=Re.fromObject(n);return Xl(t,new lo(sE(),e,s))}function lN(t,e,n,s){const r=vE(t,s);if(r!=null){const i=EE(r),o=i.path,a=i.queryId,l=$t(o,e),c=new Qs(rE(a),l,n);return TE(t,o,c)}else return[]}function cN(t,e,n,s){const r=vE(t,s);if(r){const i=EE(r),o=i.path,a=i.queryId,l=$t(o,e),c=Re.fromObject(n),u=new lo(rE(a),l,c);return TE(t,o,u)}else return[]}function mE(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$t(o,e),c=Pd(a,l);if(c)return c});return uE(r,e,i,n,!0)}function Xl(t,e){return _E(e,t.syncPointTree_,null,lE(t.pendingWriteTree_,ye()))}function _E(t,e,n,s){if(re(t.path))return yE(t,e,n,s);{const r=e.get(ye());n==null&&r!=null&&(n=Pd(r,ye()));let i=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dE(s,o);i=i.concat(_E(a,l,c,u))}return r&&(i=i.concat(bd(r,t,s,n))),i}}function yE(t,e,n,s){const r=e.get(ye());n==null&&r!=null&&(n=Pd(r,ye()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dE(s,o),u=t.operationForChild(o);u&&(i=i.concat(yE(u,a,l,c)))}),r&&(i=i.concat(bd(r,t,s,n))),i}function vE(t,e){return t.tagToQueryMap.get(e)}function EE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function TE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const r=lE(t.pendingWriteTree_,e);return bd(s,n,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new Nd(this.syncTree_,n)}node(){return mE(this.syncTree_,this.path_)}}const uN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dN(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},dN=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const r=e.node();if(x(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},fN=function(t,e,n,s){return Od(e,new Nd(n,t),s)},pN=function(t,e,n){return Od(t,new kd(e),n)};function Od(t,e,n){const s=t.getPriority().val(),r=Hg(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Hg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new We(a,ct(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new We(r))),o.forEachChild(dt,(a,l)=>{const c=Od(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function xd(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,r=oe(n);for(;r!==null;){const i=Ur(s.node.children,r)||{children:{},childCount:0};s=new Dd(r,s,i),n=Ce(n),r=oe(n)}return s}function oi(t){return t.node.value}function wE(t,e){t.node.value=e,sh(t)}function IE(t){return t.node.childCount>0}function gN(t){return oi(t)===void 0&&!IE(t)}function Jl(t,e){qt(t.node.children,(n,s)=>{e(new Dd(n,t,s))})}function RE(t,e,n,s){n&&!s&&e(t),Jl(t,r=>{RE(r,e,!0,s)}),n&&s&&e(t)}function mN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xo(t){return new Pe(t.parent===null?t.name:xo(t.parent)+"/"+t.name)}function sh(t){t.parent!==null&&_N(t.parent,t.name,t)}function _N(t,e,n){const s=gN(n),r=zn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,sh(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,sh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=/[\[\].#$\/\u0000-\u001F\u007F]/,vN=/[\[\].#$\u0000-\u001F\u007F]/,Zc=10*1024*1024,AE=function(t){return typeof t=="string"&&t.length!==0&&!yN.test(t)},EN=function(t){return typeof t=="string"&&t.length!==0&&!vN.test(t)},TN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),EN(t)},CE=function(t,e,n){const s=n instanceof Pe?new ek(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(s)+" with contents = "+e.toString());if(Av(e))throw new Error(t+"contains "+e.toString()+" "+Ss(s));if(typeof e=="string"&&e.length>Zc/3&&Bl(e)>Zc)throw new Error(t+"contains a string greater than "+Zc+" utf8 bytes "+Ss(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(qt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!AE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tk(s,o),CE(t,a,s),nk(s)}),r&&i)throw new Error(t+' contains ".value" child '+Ss(s)+" in addition to actual children.")}},wN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!AE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TN(n))throw new Error(E0(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function RN(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Gv(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function rr(t,e,n){RN(t,n),AN(t,s=>Yt(s,e)||Yt(e,s))}function AN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(CN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bs&&lt("event: "+n.toString()),Oo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="repo_interrupt",bN=25;class PN{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=il(),this.transactionQueueTree_=new Dd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kN(t,e,n){if(t.stats_=Ed(t.repoInfo_),t.forceRestClient_||RP())t.server_=new rl(t.repoInfo_,(s,r,i,o)=>{zg(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Kg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Un(t.repoInfo_,e,(s,r,i,o)=>{zg(t,s,r,i,o)},s=>{Kg(t,s)},s=>{ON(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=kP(t.repoInfo_,()=>new Pk(t.stats_,t.server_)),t.infoData_=new Rk,t.infoSyncTree_=new Wg({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Yl(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Md(t,"connected",!1),t.serverSyncTree_=new Wg({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);rr(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function NN(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function SE(t){return uN({timestamp:NN(t)})}function zg(t,e,n,s,r){t.dataUpdateCount++;const i=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=za(n,c=>ct(c));o=cN(t.serverSyncTree_,i,l,r)}else{const l=ct(n);o=lN(t.serverSyncTree_,i,l,r)}else if(s){const l=za(n,c=>ct(c));o=aN(t.serverSyncTree_,i,l)}else{const l=ct(n);o=Yl(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Vd(t,i)),rr(t.eventQueue_,a,o)}function Kg(t,e){Md(t,"connected",e),e===!1&&xN(t)}function ON(t,e){qt(e,(n,s)=>{Md(t,n,s)})}function Md(t,e,n){const s=new Pe("/.info/"+e),r=ct(n);t.infoData_.updateSnapshot(s,r);const i=Yl(t.infoSyncTree_,s,r);rr(t.eventQueue_,s,i)}function DN(t){return t.nextWriteId_++}function xN(t){bE(t,"onDisconnectEvents");const e=SE(t),n=il();Yu(t.onDisconnect_,ye(),(r,i)=>{const o=fN(r,i,t.serverSyncTree_,e);tE(n,r,o)});let s=[];Yu(n,ye(),(r,i)=>{s=s.concat(Yl(t.serverSyncTree_,r,i));const o=FN(t,r);Vd(t,o)}),t.onDisconnect_=il(),rr(t.eventQueue_,ye(),s)}function MN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SN)}function bE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),lt(n,...e)}function PE(t,e,n){return mE(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function Ld(t,e=t.transactionQueueTree_){if(e||Zl(t,e),oi(e)){const n=NE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&LN(t,xo(e),n)}else IE(e)&&Jl(e,n=>{Ld(t,n)})}function LN(t,e,n){const s=n.map(c=>c.currentWriteId),r=PE(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=$t(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{bE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(wr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Zl(t,xd(t.transactionQueueTree_,e)),Ld(t,t.transactionQueueTree_),rr(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Oo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Vt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Vd(t,e)}},o)}function Vd(t,e){const n=kE(t,e),s=xo(n),r=NE(t,n);return VN(t,r,s),s}function VN(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$t(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(wr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bN)u=!0,h="maxretry",r=r.concat(wr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=PE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){CE("transaction failed: Data returned ",f,l.path);let m=ct(f);typeof f=="object"&&f!=null&&zn(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,C=SE(t),T=pN(m,d,C);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=T,l.currentWriteId=DN(t),o.splice(o.indexOf(v),1),r=r.concat(oN(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),r=r.concat(wr(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",r=r.concat(wr(t.serverSyncTree_,l.currentWriteId,!0))}rr(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Zl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Oo(s[a]);Ld(t,t.transactionQueueTree_)}function kE(t,e){let n,s=t.transactionQueueTree_;for(n=oe(e);n!==null&&oi(s)===void 0;)s=xd(s,n),e=Ce(e),n=oe(e);return s}function NE(t,e){const n=[];return OE(t,e,n),n.sort((s,r)=>s.order-r.order),n}function OE(t,e,n){const s=oi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Jl(e,r=>{OE(t,r,n)})}function Zl(t,e){const n=oi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,wE(e,n.length>0?n:void 0)}Jl(e,s=>{Zl(t,s)})}function FN(t,e){const n=xo(kE(t,e)),s=xd(t.transactionQueueTree_,e);return mN(s,r=>{eu(t,r)}),eu(t,s),RE(s,r=>{eu(t,r)}),n}function eu(t,e){const n=oi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(wr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?wE(e,void 0):n.length=i+1,rr(t.eventQueue_,xo(e),r);for(let o=0;o<s.length;o++)Oo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function BN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gg=function(t,e){const n=$N(t),s=n.namespace;n.domain==="firebase.com"&&Ks(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ks("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mP();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SP(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},$N=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=UN(t.substring(u,h)));const d=BN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return re(this._path)?null:Hv(this._path)}get ref(){return new ai(this._repo,this._path)}get _queryIdentifier(){const e=Dg(this._queryParams),n=yd(e);return n==="{}"?"default":n}get _queryObject(){return Dg(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Fd))return!1;const n=this._repo===e._repo,s=Gv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZP(this._path)}}class ai extends Fd{constructor(e,n){super(e,n,new Rd,!1)}get parent(){const e=Kv(this._path);return e===null?null:new ai(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}rN(ai);iN(ai);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="FIREBASE_DATABASE_EMULATOR_HOST",rh={};let qN=!1;function WN(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Ks("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gg(i,r),a=o.repoInfo,l,c;typeof process<"u"&&pg&&(c=pg[jN]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Gg(i,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Ku(Ku.OWNER):new CP(t.name,t.options,e);wN("Invalid Firebase Database URL",o),re(o.path)||Ks("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zN(a,t,u,new AP(t.name,n));return new KN(h,t)}function HN(t,e){const n=rh[e];(!n||n[t.key]!==t)&&Ks(`Database ${e}(${t.repoInfo_}) has already been deleted.`),MN(t),delete n[t.key]}function zN(t,e,n,s){let r=rh[e.name];r||(r={},rh[e.name]=r);let i=r[t.toURLString()];return i&&Ks("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new PN(t,qN,n,s),r[t.toURLString()]=i,i}class KN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ai(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ks("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){hP(vs),An(new en("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return WN(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Lt(gg,mg,t),Lt(gg,mg,"esm2017")}Un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GN();var QN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Ud=Ud||{},G=QN||self;function ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YN(t){return Object.prototype.hasOwnProperty.call(t,tu)&&t[tu]||(t[tu]=++XN)}var tu="closure_uid_"+(1e9*Math.random()>>>0),XN=0;function JN(t,e,n){return t.call.apply(t.bind,arguments)}function ZN(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=JN:ft=ZN,ft.apply(null,arguments)}function ua(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Es(){this.s=this.s,this.o=this.o}var eO=0;Es.prototype.s=!1;Es.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eO!=0)&&YN(this)};Es.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Qg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ec(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var tO=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function co(t){return/^[\s\xa0]*$/.test(t)}function tc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return tc().indexOf(t)!=-1}function $d(t){return $d[" "](t),t}$d[" "]=function(){};function nO(t,e){var n=GO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sO=dn("Opera"),qr=dn("Trident")||dn("MSIE"),xE=dn("Edge"),ih=xE||qr,ME=dn("Gecko")&&!(tc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),rO=tc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function LE(){var t=G.document;return t?t.documentMode:void 0}var oh;e:{var nu="",su=function(){var t=tc();if(ME)return/rv:([^\);]+)(\)|;)/.exec(t);if(xE)return/Edge\/([\d\.]+)/.exec(t);if(qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rO)return/WebKit\/(\S+)/.exec(t);if(sO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(su&&(nu=su?su[1]:""),qr){var ru=LE();if(ru!=null&&ru>parseFloat(nu)){oh=String(ru);break e}}oh=nu}var ah;if(G.document&&qr){var Yg=LE();ah=Yg||parseInt(oh,10)||void 0}else ah=void 0;var iO=ah;function uo(t,e){if(pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ME){e:{try{$d(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.$.h.call(this)}}Ye(uo,pt);var oO={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lo="closure_listenable_"+(1e6*Math.random()|0),aO=0;function lO(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++aO,this.fa=this.ia=!1}function nc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function VE(t){const e={};for(const n in t)e[n]=t[n];return e}const Xg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FE(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Xg.length;i++)n=Xg[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function sc(t){this.src=t,this.g={},this.h=0}sc.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ch(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lO(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function lh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=DE(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(nc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ch(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var qd="closure_lm_"+(1e6*Math.random()|0),iu={};function UE(t,e,n,s,r){if(s&&s.once)return $E(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)UE(t,e[i],n,s,r);return null}return n=zd(n),t&&t[Lo]?t.O(e,n,Mo(s)?!!s.capture:!!s,r):BE(t,e,n,!1,s,r)}function BE(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Mo(r)?!!r.capture:!!r,a=Hd(t);if(a||(t[qd]=a=new sc(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=uO(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)tO||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(qE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uO(){function t(n){return e.call(t.src,t.listener,n)}const e=hO;return t}function $E(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$E(t,e[i],n,s,r);return null}return n=zd(n),t&&t[Lo]?t.P(e,n,Mo(s)?!!s.capture:!!s,r):BE(t,e,n,!0,s,r)}function jE(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)jE(t,e[i],n,s,r);else s=Mo(s)?!!s.capture:!!s,n=zd(n),t&&t[Lo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ch(i,n,s,r),-1<n&&(nc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ch(e,n,s,r)),(n=-1<t?e[t]:null)&&Wd(n))}function Wd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Lo])lh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hd(e))?(lh(n,t),n.h==0&&(n.src=null,e[qd]=null)):nc(t)}}}function qE(t){return t in iu?iu[t]:iu[t]="on"+t}function hO(t,e){if(t.fa)t=!0;else{e=new uo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Wd(t),t=n.call(s,e)}return t}function Hd(t){return t=t[qd],t instanceof sc?t:null}var ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(t){return typeof t=="function"?t:(t[ou]||(t[ou]=function(e){return t.handleEvent(e)}),t[ou])}function Qe(){Es.call(this),this.i=new sc(this),this.S=this,this.J=null}Ye(Qe,Es);Qe.prototype[Lo]=!0;Qe.prototype.removeEventListener=function(t,e,n,s){jE(this,t,e,n,s)};function nt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new pt(e,t);else if(e instanceof pt)e.target=e.target||t;else{var r=e;e=new pt(s,t),FE(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ha(o,s,!0,e)&&r}if(o=e.g=t,r=ha(o,s,!0,e)&&r,r=ha(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ha(o,s,!1,e)&&r}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)nc(n[s]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ha(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&lh(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Kd=G.JSON.stringify;class dO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function fO(){var t=Gd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pO{constructor(){this.h=this.g=null}add(e,n){const s=WE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var WE=new dO(()=>new gO,t=>t.reset());class gO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _O(t){G.setTimeout(()=>{throw t},0)}let ho,fo=!1,Gd=new pO,HE=()=>{const t=G.Promise.resolve(void 0);ho=()=>{t.then(yO)}};var yO=()=>{for(var t;t=fO();){try{t.h.call(t.g)}catch(n){_O(n)}var e=WE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fo=!1};function rc(t,e){Qe.call(this),this.h=t||1,this.g=e||G,this.j=ft(this.qb,this),this.l=Date.now()}Ye(rc,Qe);M=rc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Qd(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){rc.$.N.call(this),Qd(this),delete this.g};function Yd(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function zE(t){t.g=Yd(()=>{t.g=null,t.i&&(t.i=!1,zE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vO extends Es{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zE(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(t){Es.call(this),this.h=t,this.g={}}Ye(po,Es);var Jg=[];function KE(t,e,n,s){Array.isArray(n)||(n&&(Jg[0]=n.toString()),n=Jg);for(var r=0;r<n.length;r++){var i=UE(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function GE(t){jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wd(e)},t),t.g={}}po.prototype.N=function(){po.$.N.call(this),GE(this)};po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ic(){this.g=!0}ic.prototype.Ea=function(){this.g=!1};function EO(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function TO(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ir(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+IO(t,n)+(s?" "+s:"")})}function wO(t,e){t.info(function(){return"TIMEOUT: "+e})}ic.prototype.info=function(){};function IO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Kd(n)}catch{return e}}var ir={},Zg=null;function oc(){return Zg=Zg||new Qe}ir.Ta="serverreachability";function QE(t){pt.call(this,ir.Ta,t)}Ye(QE,pt);function go(t){const e=oc();nt(e,new QE(e))}ir.STAT_EVENT="statevent";function YE(t,e){pt.call(this,ir.STAT_EVENT,t),this.stat=e}Ye(YE,pt);function Et(t){const e=oc();nt(e,new YE(e,t))}ir.Ua="timingevent";function XE(t,e){pt.call(this,ir.Ua,t),this.size=e}Ye(XE,pt);function Vo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xd(){}Xd.prototype.h=null;function em(t){return t.h||(t.h=t.i())}function ZE(){}var Fo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jd(){pt.call(this,"d")}Ye(Jd,pt);function Zd(){pt.call(this,"c")}Ye(Zd,pt);var uh;function lc(){}Ye(lc,Xd);lc.prototype.g=function(){return new XMLHttpRequest};lc.prototype.i=function(){return{}};uh=new lc;function Uo(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new po(this),this.P=RO,t=ih?125:void 0,this.V=new rc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eT}function eT(){this.i=null,this.g="",this.h=!1}var RO=45e3,tT={},hh={};M=Uo.prototype;M.setTimeout=function(t){this.P=t};function dh(t,e,n){t.L=1,t.A=uc(jn(e)),t.u=n,t.S=!0,nT(t,null)}function nT(t,e){t.G=Date.now(),Bo(t),t.B=jn(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),uT(n.i,"t",s),t.o=0,n=t.l.J,t.h=new eT,t.g=NT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new vO(ft(t.Pa,t,t.g),t.O)),KE(t.U,t.g,"readystatechange",t.nb),e=t.I?VE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),go(),EO(t.j,t.v,t.B,t.m,t.W,t.u)}M.nb=function(t){t=t.target;const e=this.M;e&&mn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ih||this.g&&(this.h.h||this.g.ja()||rm(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?go(3):go(2)),cc(this);var n=this.g.da();this.ca=n;t:if(sT(this)){var s=rm(this.g);t="";var r=s.length,i=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xs(this),qi(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TO(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!co(a)){var c=a;break t}}c=null}if(n=c)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,n);else{this.i=!1,this.s=3,Et(12),xs(this),qi(this);break e}}this.S?(rT(this,u,o),ih&&this.i&&u==3&&(KE(this.U,this.V,"tick",this.mb),this.V.start())):(Ir(this.j,this.m,o,null),fh(this,o)),u==4&&xs(this),this.i&&!this.J&&(u==4?ST(this.l,this):(this.i=!1,Bo(this)))}else HO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),xs(this),qi(this)}}}catch{}finally{}};function sT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function rT(t,e,n){let s=!0,r;for(;!t.J&&t.o<n.length;)if(r=AO(t,n),r==hh){e==4&&(t.s=4,Et(14),s=!1),Ir(t.j,t.m,null,"[Incomplete Response]");break}else if(r==tT){t.s=4,Et(15),Ir(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ir(t.j,t.m,r,null),fh(t,r);sT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Et(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),of(e),e.M=!0,Et(11))):(Ir(t.j,t.m,n,"[Invalid Chunked Response]"),xs(t),qi(t))}M.mb=function(){if(this.g){var t=mn(this.g),e=this.g.ja();this.o<e.length&&(cc(this),rT(this,t,e),this.i&&t!=4&&Bo(this))}};function AO(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?hh:(n=Number(e.substring(n,s)),isNaN(n)?tT:(s+=1,s+n>e.length?hh:(e=e.slice(s,s+n),t.o=s+n,e)))}M.cancel=function(){this.J=!0,xs(this)};function Bo(t){t.Y=Date.now()+t.P,iT(t,t.P)}function iT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Vo(ft(t.lb,t),e)}function cc(t){t.C&&(G.clearTimeout(t.C),t.C=null)}M.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(wO(this.j,this.B),this.L!=2&&(go(),Et(17)),xs(this),this.s=2,qi(this)):iT(this,this.Y-t)};function qi(t){t.l.H==0||t.J||ST(t.l,t)}function xs(t){cc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qd(t.V),GE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ph(n.i,t))){if(!t.K&&ph(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)hl(n),pc(n);else break e;rf(n),Et(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vo(ft(n.ib,n),6e3));if(1>=fT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ms(n,11)}else if((t.K||n.g==t)&&hl(n),!co(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ef(i,i.h),i.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Se(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=kT(s,s.J?s.pa:null,s.Y),o.K){pT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(cc(a),Bo(a)),s.g=o}else AT(s);0<n.j.length&&gc(n)}else c[0]!="stop"&&c[0]!="close"||Ms(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ms(n,7):sf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}go(4)}catch{}}function CO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ec(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function SO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function oT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=SO(t),s=CO(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var aT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $s(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=t.h,cl(this,t.j),this.s=t.s,this.g=t.g,ul(this,t.m),this.l=t.l;var e=t.i,n=new mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tm(this,n),this.o=t.o}else t&&(e=String(t).match(aT))?(this.h=!1,cl(this,e[1]||"",!0),this.s=ki(e[2]||""),this.g=ki(e[3]||"",!0),ul(this,e[4]),this.l=ki(e[5]||"",!0),tm(this,e[6]||"",!0),this.o=ki(e[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ni(e,nm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ni(e,nm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ni(n,n.charAt(0)=="/"?NO:kO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ni(n,DO)),t.join("")};function jn(t){return new $s(t)}function cl(t,e,n){t.j=n?ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ul(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tm(t,e,n){e instanceof mo?(t.i=e,xO(t.i,t.h)):(n||(e=Ni(e,OO)),t.i=new mo(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function uc(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ni(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nm=/[#\/\?@]/g,kO=/[#\?:]/g,NO=/[#\?]/g,OO=/[#\?@]/g,DO=/#/g;function mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ts(t){t.g||(t.g=new Map,t.h=0,t.i&&bO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=mo.prototype;M.add=function(t,e){Ts(this),this.i=null,t=li(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lT(t,e){Ts(t),e=li(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cT(t,e){return Ts(t),e=li(t,e),t.g.has(e)}M.forEach=function(t,e){Ts(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.ta=function(){Ts(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){Ts(this);let e=[];if(typeof t=="string")cT(this,t)&&(e=e.concat(this.g.get(li(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ts(this),this.i=null,t=li(this,t),cT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function uT(t,e,n){lT(t,e),0<n.length&&(t.i=null,t.g.set(li(t,e),Bd(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xO(t,e){e&&!t.j&&(Ts(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(lT(this,s),uT(this,r,n))},t)),t.j=e}var MO=class{constructor(t,e){this.g=t,this.map=e}};function hT(t){this.l=t||LO,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LO=10;function dT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fT(t){return t.h?1:t.g?t.g.size:0}function ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ef(t,e){t.g?t.g.add(e):t.h=e}function pT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hT.prototype.cancel=function(){if(this.i=gT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bd(t.i)}var VO=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function FO(){this.g=new VO}function UO(t,e,n){const s=n||"";try{oT(t,function(r,i){let o=r;Mo(r)&&(o=Kd(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function BO(t,e){const n=new ic;if(G.Image){const s=new Image;s.onload=ua(da,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ua(da,n,s,"TestLoadImage: error",!1,e),s.onabort=ua(da,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ua(da,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function da(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function hc(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(hc,Xd);hc.prototype.g=function(){return new dc(this.l,this.j)};hc.prototype.i=function(t){return function(){return t}}({});function dc(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(dc,Qe);var tf=0;M=dc.prototype;M.open=function(t,e){if(this.readyState!=tf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_o(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=tf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$o(this):_o(this),this.readyState==3&&mT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,$o(this))};M.Ya=function(t){this.g&&(this.response=t,$o(this))};M.ka=function(){this.g&&$o(this)};function $o(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_o(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _o(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $O=G.JSON.parse;function xe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_T,this.L=this.M=!1}Ye(xe,Qe);var _T="",jO=/^https?$/i,qO=["POST","PUT"];M=xe.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uh.g(),this.C=this.u?em(this.u):em(uh),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sm(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=G.FormData&&t instanceof G.FormData,!(0<=DE(qO,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ET(this),0<this.B&&((this.L=WO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=Yd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sm(this,i)}};function WO(t){return qr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Ud<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function sm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yT(t),fc(t)}function yT(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),fc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fc(this,!0)),xe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?vT(this):this.kb())};M.kb=function(){vT(this)};function vT(t){if(t.h&&typeof Ud<"u"&&(!t.C[1]||mn(t)!=4||t.da()!=2)){if(t.v&&mn(t)==4)Yd(t.La,0,t);else if(nt(t,"readystatechange"),mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(aT)[1]||null;!r&&G.self&&G.self.location&&(r=G.self.location.protocol.slice(0,-1)),s=!jO.test(r?r.toLowerCase():"")}n=s}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<mn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",yT(t)}}finally{fc(t)}}}}function fc(t,e){if(t.g){ET(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=s}catch{}}}function ET(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function mn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$O(e)}};function rm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _T:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HO(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(co(t[s]))continue;var n=mO(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}cO(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TT(t){let e="";return jd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nf(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=TT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wT(t){this.Ga=0,this.j=[],this.l=new ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ei("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ei("baseRetryDelayMs",5e3,t),this.hb=Ei("retryDelaySeedMs",1e4,t),this.eb=Ei("forwardChannelMaxRetries",2,t),this.xa=Ei("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hT(t&&t.concurrentRequestLimit),this.Ja=new FO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=wT.prototype;M.ra=8;M.H=1;function sf(t){if(IT(t),t.H==3){var e=t.W++,n=jn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),jo(t,n),e=new Uo(t,t.l,e),e.L=2,e.A=uc(jn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=NT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Bo(e)}PT(t)}function pc(t){t.g&&(of(t),t.g.cancel(),t.g=null)}function IT(t){pc(t),t.u&&(G.clearTimeout(t.u),t.u=null),hl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function gc(t){if(!dT(t.i)&&!t.m){t.m=!0;var e=t.Na;ho||HE(),fo||(ho(),fo=!0),Gd.add(e,t),t.C=0}}function zO(t,e){return fT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vo(ft(t.Na,t,e),bT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Uo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=VE(i),FE(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=RT(this,r,e),n=jn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),jo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(TT(i)))+"&"+e:this.o&&nf(n,this.o,i)),ef(this.i,r),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),r.aa=!0,dh(r,n,null)):dh(r,n,e),this.H=2}}else this.H==3&&(t?im(this,t):this.j.length==0||dT(this.i)||im(this))};function im(t,e){var n;e?n=e.m:n=t.W++;const s=jn(t.I);Se(s,"SID",t.K),Se(s,"RID",n),Se(s,"AID",t.V),jo(t,s),t.o&&t.s&&nf(s,t.o,t.s),n=new Uo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=RT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ef(t.i,n),dh(n,s,e)}function jo(t,e){t.na&&jd(t.na,function(n,s){Se(e,s,n)}),t.h&&oT({},function(n,s){Se(e,s,n)})}function RT(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ft(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=i,0>c)i=Math.max(0,r[l].g-100),a=!1;else try{UO(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function AT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ho||HE(),fo||(ho(),fo=!0),Gd.add(e,t),t.A=0}}function rf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vo(ft(t.Ma,t),bT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,CT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vo(ft(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Et(10),pc(this),CT(this))};function of(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function CT(t){t.g=new Uo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=jn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),jo(t,e),t.o&&t.s&&nf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=uc(jn(e)),n.u=null,n.S=!0,nT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,pc(this),rf(this),Et(19))};function hl(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function ST(t,e){var n=null;if(t.g==e){hl(t),of(t),t.g=null;var s=2}else if(ph(t.i,e))n=e.F,pT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;s=oc(),nt(s,new XE(s,n)),gc(t)}else AT(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(s==1&&zO(t,e)||s==2&&rf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ms(t,5);break;case 4:Ms(t,10);break;case 3:Ms(t,6);break;default:Ms(t,2)}}}function bT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ms(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ft(t.pb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||cl(n,"https"),uc(n)),BO(n.toString(),s)}else Et(2);t.H=0,t.h&&t.h.za(e),PT(t),IT(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Et(2)):(this.l.info("Failed to ping google.com"),Et(1))};function PT(t){if(t.H=0,t.ma=[],t.h){const e=gT(t.i);(e.length!=0||t.j.length!=0)&&(Qg(t.ma,e),Qg(t.ma,t.j),t.i.i.length=0,Bd(t.j),t.j.length=0),t.h.ya()}}function kT(t,e,n){var s=n instanceof $s?jn(n):new $s(n);if(s.g!="")e&&(s.g=e+"."+s.g),ul(s,s.m);else{var r=G.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new $s(null);s&&cl(i,s),e&&(i.g=e),r&&ul(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Se(s,n,e),Se(s,"VER",t.ra),jo(t,s),s}function NT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new xe(new hc({ob:n})):new xe(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function OT(){}M=OT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function dl(){if(qr&&!(10<=Number(iO)))throw Error("Environmental error: no available transport.")}dl.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){Qe.call(this),this.g=new wT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!co(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ci(this)}Ye(Ft,Qe);Ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=kT(t,null,t.Y),gc(t)};Ft.prototype.close=function(){sf(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kd(t),t=n);e.j.push(new MO(e.fb++,t)),e.H==3&&gc(e)};Ft.prototype.N=function(){this.g.h=null,delete this.j,sf(this.g),delete this.g,Ft.$.N.call(this)};function DT(t){Jd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(DT,Jd);function xT(){Zd.call(this),this.status=1}Ye(xT,Zd);function ci(t){this.g=t}Ye(ci,OT);ci.prototype.Ba=function(){nt(this.g,"a")};ci.prototype.Aa=function(t){nt(this.g,new DT(t))};ci.prototype.za=function(t){nt(this.g,new xT)};ci.prototype.ya=function(){nt(this.g,"b")};function KO(){this.blockSize=-1}function nn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(nn,KO);nn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function au(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}nn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)au(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){au(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){au(this,s),r=0;break}}this.h=r,this.i+=e};nn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function me(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var GO={};function af(t){return-128<=t&&128>t?nO(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function _n(t){if(isNaN(t)||!isFinite(t))return Dr;if(0>t)return Ze(_n(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=gh;return new me(e,0)}function MT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(MT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_n(Math.pow(e,8)),s=Dr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=_n(Math.pow(e,i)),s=s.R(i).add(_n(o))):(s=s.R(n),s=s.add(_n(o)))}return s}var gh=4294967296,Dr=af(0),mh=af(1),om=af(16777216);M=me.prototype;M.ea=function(){if(Bt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:gh+s)*e,e*=gh}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ln(this))return"0";if(Bt(this))return"-"+Ze(this).toString(t);for(var e=_n(Math.pow(t,6)),n=this,s="";;){var r=pl(n,e).g;n=fl(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Ln(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Bt(t){return t.h==-1}M.X=function(t){return t=fl(this,t),Bt(t)?-1:Ln(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new me(n,~t.h).add(mh)}M.abs=function(){return Bt(this)?Ze(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function fl(t,e){return t.add(Ze(e))}M.R=function(t){if(Ln(this)||Ln(t))return Dr;if(Bt(this))return Bt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Bt(t))return Ze(this.R(Ze(t)));if(0>this.X(om)&&0>t.X(om))return _n(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*s+2*r]+=o*l,fa(n,2*s+2*r),n[2*s+2*r+1]+=i*l,fa(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,fa(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,fa(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new me(n,0)};function fa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ti(t,e){this.g=t,this.h=e}function pl(t,e){if(Ln(e))throw Error("division by zero");if(Ln(t))return new Ti(Dr,Dr);if(Bt(t))return e=pl(Ze(t),e),new Ti(Ze(e.g),Ze(e.h));if(Bt(e))return e=pl(t,Ze(e)),new Ti(Ze(e.g),e.h);if(30<t.g.length){if(Bt(t)||Bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=mh,s=e;0>=s.X(t);)n=am(n),s=am(s);var r=gr(n,1),i=gr(s,1);for(s=gr(s,2),n=gr(n,2);!Ln(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=gr(s,1),n=gr(n,1)}return e=fl(t,r.R(e)),new Ti(r,e)}for(r=Dr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=_n(n),o=i.R(e);Bt(o)||0<o.X(t);)n-=s,i=_n(n),o=i.R(e);Ln(i)&&(i=mh),r=r.add(i),t=fl(t,o)}return new Ti(r,t)}M.gb=function(t){return pl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new me(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new me(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new me(n,this.h^t.h)};function am(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new me(n,t.h)}function gr(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(r,t.h)}dl.prototype.createWebChannel=dl.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;ac.NO_ERROR=0;ac.TIMEOUT=8;ac.HTTP_ERROR=6;JE.COMPLETE="complete";ZE.EventType=Fo;Fo.OPEN="a";Fo.CLOSE="b";Fo.ERROR="c";Fo.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;nn.prototype.digest=nn.prototype.l;nn.prototype.reset=nn.prototype.reset;nn.prototype.update=nn.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=_n;me.fromString=MT;var QO=function(){return new dl},YO=function(){return oc()},lu=ac,XO=JE,JO=ir,lm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pa=ZE,ZO=xe,e1=nn,xr=me;const cm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Co("@firebase/firestore");function wi(){return Xs.logLevel}function U(t,...e){if(Xs.logLevel<=ne.DEBUG){const n=e.map(lf);Xs.debug(`Firestore (${ui}): ${t}`,...n)}}function qn(t,...e){if(Xs.logLevel<=ne.ERROR){const n=e.map(lf);Xs.error(`Firestore (${ui}): ${t}`,...n)}}function Wr(t,...e){if(Xs.logLevel<=ne.WARN){const n=e.map(lf);Xs.warn(`Firestore (${ui}): ${t}`,...n)}}function lf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function we(t,e){t||K()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class n1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s1{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(we(typeof s.accessToken=="string"),new LT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new at(e)}}class r1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class i1{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new r1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new o1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=l1(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new $e(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new $e(0,0))}static max(){return new Q(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends yo{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new be(n)}static emptyPath(){return new be([])}}const c1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends yo{construct(e,n,s){return new tt(e,n,s)}static isValidIdentifier(e){return c1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(be.fromString(e))}static fromName(e){return new q(be.fromString(e).popFirst(5))}static empty(){return new q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new be(e.slice()))}}function u1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new $e(n+1,0):new $e(n,s));return new gs(r,q.empty(),e)}function h1(t){return new gs(t.readTime,t.key,-1)}class gs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new gs(Q.min(),q.empty(),-1)}static max(){return new gs(Q.max(),q.empty(),-1)}}function d1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==f1)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(r=>r?P.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new P((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new P((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}cf._e=-1;function mc(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function g1(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Je.RED,this.left=r??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new st(tt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UT("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const m1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ms(t){if(we(!!t),typeof t=="string"){let e=0;const n=m1.exec(t);if(we(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Js(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hf(t){const e=t.mapValue.fields.__previous_value__;return uf(e)?hf(e):e}function vo(t){const e=ms(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,s,r,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uf(t)?4:y1(t)?9007199254740991:10:K()}function Sn(t,e){if(t===e)return!0;const n=Zs(t);if(n!==Zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=ms(r.timestampValue),a=ms(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Js(r.bytesValue).isEqual(Js(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ue(r.doubleValue),a=Ue(i.doubleValue);return o===a?gl(o)===gl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(um(o)!==um(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Sn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function To(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function zr(t,e){if(t===e)return 0;const n=Zs(t),s=Zs(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return dm(t.timestampValue,e.timestampValue);case 4:return dm(vo(t),vo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Js(i),l=Js(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ce(a[c],l[c]);if(u!==0)return u}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ce(Ue(i.latitude),Ue(o.latitude));return a!==0?a:ce(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=zr(a[c],l[c]);if(u)return u}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ma.mapValue&&o===ma.mapValue)return 0;if(i===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ce(l[h],u[h]);if(d!==0)return d;const f=zr(a[l[h]],c[u[h]]);if(f!==0)return f}return ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function dm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ms(t),s=ms(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Kr(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ms(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Js(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=_h(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${_h(n.fields[o])}`;return r+"}"}(t.mapValue):K()}function fm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yh(t){return!!t&&"integerValue"in t}function df(t){return!!t&&"arrayValue"in t}function pm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function Wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return or(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Wi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function y1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wi(n)}setAll(e){let n=tt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Wi(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Oa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){or(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ct(Wi(this.value))}}function BT(t){const e=[];return or(t.fields,(n,s)=>{const r=new tt([n]);if(Oa(s)){const i=BT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Q.min(),Q.min(),Q.min(),Ct.empty(),0)}static newFoundDocument(e,n,s,r){return new ut(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new ut(e,2,n,Q.min(),Q.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Q.min(),Q.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.position=e,this.inclusive=n}}function mm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=zr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function _m(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n="asc"){this.field=e,this.dir=n}}function v1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{}class Be extends $T{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new T1(e,n,s):n==="array-contains"?new R1(e,s):n==="in"?new A1(e,s):n==="not-in"?new C1(e,s):n==="array-contains-any"?new S1(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new w1(e,s):new I1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zr(n,this.value)):n!==null&&Zs(this.value)===Zs(n)&&this.matchesComparison(zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends $T{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new sn(e,n)}matches(e){return jT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function jT(t){return t.op==="and"}function qT(t){return E1(t)&&jT(t)}function E1(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function vh(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Kr(t.value);if(qT(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function WT(t,e){return t instanceof Be?function(s,r){return r instanceof Be&&s.op===r.op&&s.field.isEqual(r.field)&&Sn(s.value,r.value)}(t,e):t instanceof sn?function(s,r){return r instanceof sn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&WT(o,r.filters[a]),!0):!1}(t,e):void K()}function HT(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Kr(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(HT).join(" ,")+"}"}(t):"Filter"}class T1 extends Be{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class w1 extends Be{constructor(e,n){super(e,"in",n),this.keys=zT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class I1 extends Be{constructor(e,n){super(e,"not-in",n),this.keys=zT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class R1 extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return df(n)&&To(n.arrayValue,this.value)}}class A1 extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class C1 extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class S1 extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>To(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ym(t,e=null,n=[],s=[],r=null,i=null,o=null){return new b1(t,e,n,s,r,i,o)}function ff(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>vh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Kr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Kr(s)).join(",")),e.ce=n}return e.ce}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!v1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_m(t.startAt,e.startAt)&&_m(t.endAt,e.endAt)}function Eh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function P1(t,e,n,s,r,i,o,a){return new Ho(t,e,n,s,r,i,o,a)}function _c(t){return new Ho(t)}function vm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KT(t){return t.collectionGroup!==null}function Hi(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new _l(i,s))}),n.has(tt.keyField().canonicalString())||e.le.push(new _l(tt.keyField(),s))}return e.le}function wn(t){const e=ee(t);return e.he||(e.he=k1(e,Hi(t))),e.he}function k1(t,e){if(t.limitType==="F")return ym(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new _l(r.field,i)});const n=t.endAt?new ml(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ml(t.startAt.position,t.startAt.inclusive):null;return ym(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Th(t,e){const n=t.filters.concat([e]);return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wh(t,e,n){return new Ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return pf(wn(t),wn(e))&&t.limitType===e.limitType}function GT(t){return`${ff(wn(t))}|lt:${t.limitType}`}function mr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>HT(r)).join(", ")}]`),mc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Kr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Kr(r)).join(",")),`Target(${s})`}(wn(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Hi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const c=mm(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Hi(s),r)||s.endAt&&!function(o,a,l){const c=mm(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Hi(s),r))}(t,e)}function N1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QT(t){return(e,n)=>{let s=!1;for(const r of Hi(t)){const i=O1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function O1(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?zr(l,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return FT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new De(q.comparator);function Wn(){return D1}const YT=new De(q.comparator);function Oi(...t){let e=YT;for(const n of t)e=e.insert(n.key,n);return e}function XT(t){let e=YT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ls(){return zi()}function JT(){return zi()}function zi(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const x1=new De(q.comparator),M1=new st(q.comparator);function se(...t){let e=M1;for(const n of t)e=e.add(n);return e}const L1=new st(ce);function V1(){return L1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function ew(t){return{integerValue:""+t}}function F1(t,e){return g1(e)?ew(e):ZT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function U1(t,e,n){return t instanceof yl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&uf(i)&&(i=hf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wo?nw(t,e):t instanceof Io?sw(t,e):function(r,i){const o=tw(r,i),a=Em(o)+Em(r.Ie);return yh(o)&&yh(r.Ie)?ew(a):ZT(r.serializer,a)}(t,e)}function B1(t,e,n){return t instanceof wo?nw(t,e):t instanceof Io?sw(t,e):n}function tw(t,e){return t instanceof vl?function(s){return yh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class yl extends Ec{}class wo extends Ec{constructor(e){super(),this.elements=e}}function nw(t,e){const n=rw(e);for(const s of t.elements)n.some(r=>Sn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Io extends Ec{constructor(e){super(),this.elements=e}}function sw(t,e){let n=rw(e);for(const s of t.elements)n=n.filter(r=>!Sn(r,s));return{arrayValue:{values:n}}}class vl extends Ec{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Em(t){return Ue(t.integerValue||t.doubleValue)}function rw(t){return df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $1(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof wo&&r instanceof wo||s instanceof Io&&r instanceof Io?Hr(s.elements,r.elements,Sn):s instanceof vl&&r instanceof vl?Sn(s.Ie,r.Ie):s instanceof yl&&r instanceof yl}(t.transform,e.transform)}class j1{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tc{}function iw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gf(t.key,Zt.none()):new zo(t.key,t.data,Zt.none());{const n=t.data,s=Ct.empty();let r=new st(tt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ws(t.key,s,new Dt(r.toArray()),Zt.none())}}function q1(t,e,n){t instanceof zo?function(r,i,o){const a=r.value.clone(),l=wm(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(r,i,o){if(!Da(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=wm(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ow(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ki(t,e,n,s){return t instanceof zo?function(i,o,a,l){if(!Da(i.precondition,o))return a;const c=i.value.clone(),u=Im(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ws?function(i,o,a,l){if(!Da(i.precondition,o))return a;const c=Im(i.fieldTransforms,l,o),u=o.data;return u.setAll(ow(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,o,a){return Da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function W1(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=tw(s.transform,r||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(s.field,i))}return n||null}function Tm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Hr(s,r,(i,o)=>$1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends Tc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ws extends Tc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function wm(t,e,n){const s=new Map;we(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,B1(o,a,n[r]))}return s}function Im(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,U1(i,o,e))}return s}class gf extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H1 extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&q1(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ki(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ki(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=JT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=iw(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,s)=>Tm(n,s))&&Hr(this.baseMutations,e.baseMutations,(n,s)=>Tm(n,s))}}class mf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){we(e.mutations.length===s.length);let r=function(){return x1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new mf(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ie;function Q1(t){switch(t){default:return K();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function aw(t){if(t===void 0)return qn("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return K()}}(ie=Fe||(Fe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new xr([4294967295,4294967295],0);function Rm(t){const e=Y1().encode(t),n=new e1;return n.update(e),new Uint8Array(n.digest())}function Am(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xr([n,s],0),new xr([r,i],0)]}class _f{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(s<0)throw new Di(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=xr.fromNumber(this.Te)}de(e,n,s){let r=e.add(n.multiply(xr.fromNumber(s)));return r.compare(X1)===1&&(r=new xr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Rm(e),[s,r]=Am(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _f(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Rm(e),[s,r]=Am(n);for(let i=0;i<this.hashCount;i++){const o=this.de(s,r,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wc(Q.min(),r,new De(ce),Wn(),se())}}class Ko{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ko(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,s,r){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=r}}class lw{constructor(e,n){this.targetId=e,this.fe=n}}class cw{constructor(e,n,s=_t.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Cm{constructor(){this.ge=0,this.pe=bm(),this.ye=_t.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=se(),n=se(),s=se();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new Ko(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=bm()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,we(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class J1{constructor(e){this.Le=e,this.ke=new Map,this.qe=Wn(),this.Qe=Sm(),this.Ke=new De(ce)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.fe.count,r=this.Ye(n);if(r){const i=r.target;if(Eh(i))if(s===0){const o=new q(i.path);this.We(n,o,ut.newNoDocument(o,Q.min()))}else we(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Js(s).toUint8Array()}catch(l){if(l instanceof UT)return Wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _f(o,r,i)}catch(l){return Wr(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Eh(a.target)){const l=new q(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,ut.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let s=se();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const r=new wc(e,n,this.Ke,this.qe,s);return this.qe=Wn(),this.Qe=Sm(),this.Ke=new De(ce),r}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Cm,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new st(ce),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Cm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sm(){return new De(q.comparator)}function bm(){return new De(q.comparator)}const Z1={asc:"ASCENDING",desc:"DESCENDING"},eD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tD={and:"AND",or:"OR"};class nD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ih(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function El(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sD(t,e){return El(t,e.toTimestamp())}function In(t){return we(!!t),Q.fromTimestamp(function(n){const s=ms(n);return new $e(s.seconds,s.nanos)}(t))}function yf(t,e){return function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function hw(t){const e=be.fromString(t);return we(gw(e)),e}function Rh(t,e){return yf(t.databaseId,e.path)}function cu(t,e){const n=hw(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(dw(n))}function Ah(t,e){return yf(t.databaseId,e)}function rD(t){const e=hw(t);return e.length===4?be.emptyPath():dw(e)}function Ch(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dw(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pm(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function iD(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(we(u===void 0||typeof u=="string"),_t.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:aw(c.code);return new F(u,c.message||"")}(o);n=new cw(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=cu(t,s.document.name),i=In(s.document.updateTime),o=s.document.createTime?In(s.document.createTime):Q.min(),a=new Ct({mapValue:{fields:s.document.fields}}),l=ut.newFoundDocument(r,i,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new xa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=cu(t,s.document),i=s.readTime?In(s.readTime):Q.min(),o=ut.newNoDocument(r,i),a=s.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=cu(t,s.document),i=s.removedTargetIds||[];n=new xa([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new G1(r,i),a=s.targetId;n=new lw(a,o)}}return n}function oD(t,e){let n;if(e instanceof zo)n={update:Pm(t,e.key,e.value)};else if(e instanceof gf)n={delete:Rh(t,e.key)};else if(e instanceof ws)n={update:Pm(t,e.key,e.data),updateMask:gD(e.fieldMask)};else{if(!(e instanceof H1))return K();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof vl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:sD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function aD(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?In(r.updateTime):In(i);return o.isEqual(Q.min())&&(o=In(i)),new j1(o,r.transformResults||[])}(n,e))):[]}function lD(t,e){return{documents:[Ah(t,e.path)]}}function cD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ah(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ah(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return pw(sn.create(l,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:_r(h.field),direction:dD(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ih(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function uD(t){let e=rD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){we(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=fw(h);return d instanceof sn&&qT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new _l(yr(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,mc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ml(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ml(f,d)}(n.endAt)),P1(e,r,o,i,a,"F",l,c)}function hD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=yr(n.unaryFilter.field);return Be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=yr(n.unaryFilter.field);return Be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(yr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(s=>fw(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function dD(t){return Z1[t]}function fD(t){return eD[t]}function pD(t){return tD[t]}function _r(t){return{fieldPath:t.canonicalString()}}function yr(t){return tt.fromServerFormat(t.fieldPath)}function pw(t){return t instanceof Be?function(n){if(n.op==="=="){if(gm(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NAN"}};if(pm(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gm(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NAN"}};if(pm(n.value))return{unaryFilter:{field:_r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_r(n.field),op:fD(n.op),value:n.value}}}(t):t instanceof sn?function(n){const s=n.getFilters().map(r=>pw(r));return s.length===1?s[0]:{compositeFilter:{op:pD(n.op),filters:s}}}(t):K()}function gD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.ut=e}}function _D(t){const e=uD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.on=new vD}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(gs.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(gs.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class vD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new st(be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new st(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Gr(0)}static Nn(){return new Gr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ki(s.mutation,r,Dt.empty(),$e.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Ls();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Oi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ls();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Wn();const o=zi(),a=function(){return zi()}();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof ws)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ki(u.mutation,c,u.mutation.getFieldMask(),$e.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new TD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=zi();let r=new De((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Dt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||se()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=JT();u.forEach(d=>{if(!i.has(d)){const f=iw(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):P.resolve(Ls());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:XT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=Oi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Oi();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,l=>{const c=function(h,d){return new Ho(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s,r).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ut.newInvalidDocument(u)))});let a=Oi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ki(u.mutation,c,Dt.empty(),$e.now()),vc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(r){return{id:r.id,version:r.version,createTime:In(r.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(r){return{name:r.name,query:_D(r.bundledQuery),readTime:In(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.overlays=new De(q.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ls();return P.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.lt(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const r=Ls(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return P.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Ls(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ls(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return P.resolve(a)}lt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.lr.get(r.largestBatchId).delete(s.key);this.lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new K1(n,s));let i=this.lr.get(n);i===void 0&&(i=se(),this.lr.set(n,i)),this.lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.hr=new st(He.Pr),this.Ir=new st(He.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new He(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new He(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new q(new be([])),s=new He(n,e),r=new He(n,e+1),i=[];return this.Ir.forEachInRange([s,r],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new be([])),s=new He(n,e),r=new He(n,e+1);let i=se();return this.Ir.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class He{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||ce(e.gr,n.gr)}static Tr(e,n){return ce(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new st(He.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new z1(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.yr=this.yr.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Sr(s),i=r<0?0:r;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new He(n,0),r=new He(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([s,r],o=>{const a=this.wr(o.gr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new st(ce);return n.forEach(r=>{const i=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{s=s.add(a.gr)})}),P.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new He(new q(i),0);let a=new st(ce);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const r=this.wr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){we(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return P.forEach(n.mutations,r=>{const i=new He(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new He(n,0),r=this.yr.firstAfterOrEqual(s);return P.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.Cr=e,this.docs=function(){return new De(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=Wn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ut.newInvalidDocument(r))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Wn();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||d1(h1(u),s)<=0||(r.has(u.key)||vc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,s,r){K()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new SD(this)}getSize(e){return P.resolve(this.size)}}class SD extends ED{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this._r.addEntry(e,r)):this._r.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.persistence=e,this.Fr=new hi(n=>ff(n),pf),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vf,this.targetCount=0,this.Nr=Gr.On()}forEachTarget(e,n){return this.Fr.forEach((s,r)=>n(r)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Gr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),P.waitFor(i).next(()=>r)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new cf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new bD(this),this.indexManager=new yD,this.remoteDocumentCache=function(r){return new CD(r)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new mD(n),this.Kr=new ID(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new AD(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new kD(this.Lr.next());return this.referenceDelegate.$r(),s(r).next(i=>this.referenceDelegate.Ur(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Wr(e,n){return P.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class kD extends p1{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Gr=new vf,this.zr=null}static jr(e){return new Ef(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(r=>this.Hr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Hr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,s=>{const r=q.fromPath(s);return this.Jr(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=r}static Qi(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tf(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ND;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,s,r){return s.documentReadCount<this.Ui?(wi()<=ne.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(wi()<=ne.DEBUG&&U("QueryEngine","Query:",mr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Wi*r?(wi()<=ne.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):P.resolve())}zi(e,n){if(vm(n))return P.resolve(null);let s=wn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=wh(n,null,"F"),s=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,wh(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,r){return vm(n)||r.isEqual(Q.min())?P.resolve(null):this.Gi.getDocuments(e,s).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,s,r)?P.resolve(null):(wi()<=ne.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mr(n)),this.Xi(e,o,n,u1(r,-1)).next(a=>a))})}Yi(e,n){let s=new st(QT(e));return n.forEach((r,i)=>{vc(e,i)&&(s=s.add(i))}),s}Zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,n,s){return wi()<=ne.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",mr(n)),this.Gi.getDocumentsMatchingQuery(e,n,gs.min(),s)}Xi(e,n,s,r){return this.Gi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,s,r){this.persistence=e,this.es=n,this.serializer=r,this.ts=new De(ce),this.ns=new hi(i=>ff(i),pf),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wD(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function xD(t,e,n,s){return new DD(t,e,n,s)}async function mw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=se();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function MD(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=P.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(y=>{const v=c.docVersions.get(m);we(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function _w(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function LD(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(_t.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(y,v,C){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let l=Wn(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(VD(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(Q.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=r,i))}function VD(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Wn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:r}})}function FD(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function UD(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.qr.getTargetData(s,e).next(i=>i?(r=i,P.resolve(r)):n.qr.allocateTargetId(s).next(o=>(r=new rs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Sh(t,e,n){const s=ee(t),r=s.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wo(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(r.target)}function km(t,e,n){const s=ee(t);let r=Q.min(),i=se();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ee(l),d=h.ns.get(u);return d!==void 0?P.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(s,o,wn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:se())).next(a=>(BD(s,N1(e),a),{documents:a,ls:i})))}function BD(t,e,n){let s=t.rs.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.rs.set(e,s)}class Nm{constructor(){this.activeTargetIds=V1()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $D{constructor(){this.eo=new Nm,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Nm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function uu(){return _a===null?_a=function(){return 268435456+Math.round(2147483648*Math.random())}():_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class HD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${r}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get yo(){return!1}wo(n,s,r,i,o){const a=uu(),l=this.So(n,s);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,r).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Wr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",r),u})}Co(n,s,r,i,o,a){return this.wo(n,s,r,i,o)}bo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ui}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}So(n,s){const r=qD[n];return`${this.mo}/v1/${s}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,r){const i=uu();return new Promise((o,a)=>{const l=new ZO;l.setWithCredentials(!0),l.listenOnce(XO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case lu.NO_ERROR:const u=l.getResponseJson();U(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case lu.TIMEOUT:U(ot,`RPC '${e}' ${i} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case lu.HTTP_ERROR:const h=l.getStatus();if(U(ot,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(C)>=0?C:A.UNKNOWN}(f.status);a(new F(m,f.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U(ot,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);U(ot,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",c,s,15)})}vo(e,n,s){const r=uu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QO(),a=YO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=i.join("");U(ot,`Creating RPC '${e}' stream ${r}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new WD({co:v=>{f?U(ot,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(d||(U(ot,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),U(ot,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},lo:()=>h.close()}),y=(v,C,T)=>{v.listen(C,I=>{try{T(I)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,pa.EventType.OPEN,()=>{f||U(ot,`RPC '${e}' stream ${r} transport opened.`)}),y(h,pa.EventType.CLOSE,()=>{f||(f=!0,U(ot,`RPC '${e}' stream ${r} transport closed`),m.Ro())}),y(h,pa.EventType.ERROR,v=>{f||(f=!0,Wr(ot,`RPC '${e}' stream ${r} transport errored:`,v),m.Ro(new F(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,pa.EventType.MESSAGE,v=>{var C;if(!f){const T=v.data[0];we(!!T);const I=T,E=I.error||((C=I[0])===null||C===void 0?void 0:C.error);if(E){U(ot,`RPC '${e}' stream ${r} received error:`,E);const $=E.status;let X=function(wt){const Xe=Fe[wt];if(Xe!==void 0)return aw(Xe)}($),he=E.message;X===void 0&&(X=A.INTERNAL,he="Unknown error status: "+$+" with message "+E.message),f=!0,m.Ro(new F(X,he)),h.close()}else U(ot,`RPC '${e}' stream ${r} received:`,T),m.Vo(T)}}),y(a,JO.STAT_EVENT,v=>{v.stat===lm.PROXY?U(ot,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===lm.NOPROXY&&U(ot,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function hu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new nD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,s,r,i,o,a,l){this.si=e,this.Ko=s,this.$o=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new yw(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Uo===n&&this.s_(s,r)},s=>{e(()=>{const r=new F(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(r)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(r=>{s(()=>this.o_(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zD extends vw{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=iD(this.serializer,e),s=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?In(o.readTime):Q.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=Ch(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Eh(l)?{documents:lD(i,l)}:{query:cD(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uw(i,o.resumeToken);const c=Ih(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=El(i,o.snapshotVersion.toTimestamp());const c=Ih(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=hD(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=Ch(this.serializer),n.removeTarget=e,this.e_(n)}}class KD extends vw{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=aD(e.writeResults,e.commitTime),s=In(e.commitTime);return this.listener.I_(s,n)}return we(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ch(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>oD(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.wo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(A.UNKNOWN,r.toString())})}Co(e,n,s,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class QD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(qn(n),this.f_=!1):U("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{s.enqueueAndForget(async()=>{ar(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.C_.add(4),await Go(c),c.M_.set("Unknown"),c.C_.delete(4),await Rc(c)}(this))})}),this.M_=new QD(s,r)}}async function Rc(t){if(ar(t))for(const e of t.v_)await e(!0)}async function Go(t){for(const e of t.v_)await e(!1)}function Ew(t,e){const n=ee(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Rf(n)?If(n):di(n).Ho()&&wf(n,e))}function Tw(t,e){const n=ee(t),s=di(n);n.D_.delete(e),s.Ho()&&ww(n,e),n.D_.size===0&&(s.Ho()?s.Zo():ar(n)&&n.M_.set("Unknown"))}function wf(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}di(t).u_(e)}function ww(t,e){t.x_.Oe(e),di(t).c_(e)}function If(t){t.x_=new J1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.M_.g_()}function Rf(t){return ar(t)&&!di(t).jo()&&t.D_.size>0}function ar(t){return ee(t).C_.size===0}function Iw(t){t.x_=void 0}async function XD(t){t.D_.forEach((e,n)=>{wf(t,e)})}async function JD(t,e){Iw(t),Rf(t)?(t.M_.w_(e),If(t)):t.M_.set("Unknown")}async function ZD(t,e,n){if(t.M_.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.D_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.D_.delete(a),r.x_.removeTarget(a))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Tl(t,s)}else if(e instanceof xa?t.x_.$e(e):e instanceof lw?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Q.min()))try{const s=await _w(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),ww(i,l);const h=new rs(u.target,l,c,u.sequenceNumber);wf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Tl(t,s)}}async function Tl(t,e,n){if(!Wo(e))throw e;t.C_.add(1),await Go(t),t.M_.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Rc(t)})}function Rw(t,e){return e().catch(n=>Tl(t,n,e))}async function Ac(t){const e=ee(t),n=_s(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ex(e);)try{const r=await FD(e.localStore,s);if(r===null){e.b_.length===0&&n.Zo();break}s=r.batchId,tx(e,r)}catch(r){await Tl(e,r)}Aw(e)&&Cw(e)}function ex(t){return ar(t)&&t.b_.length<10}function tx(t,e){t.b_.push(e);const n=_s(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Aw(t){return ar(t)&&!_s(t).jo()&&t.b_.length>0}function Cw(t){_s(t).start()}async function nx(t){_s(t).E_()}async function sx(t){const e=_s(t);for(const n of t.b_)e.P_(n.mutations)}async function rx(t,e,n){const s=t.b_.shift(),r=mf.from(s,e,n);await Rw(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ac(t)}async function ix(t,e){e&&_s(t).h_&&await async function(s,r){if(function(o){return Q1(o)&&o!==A.ABORTED}(r.code)){const i=s.b_.shift();_s(s).Yo(),await Rw(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ac(s)}}(t,e),Aw(t)&&Cw(t)}async function Dm(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=ar(n);n.C_.add(3),await Go(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Rc(n)}async function ox(t,e){const n=ee(t);e?(n.C_.delete(2),await Rc(n)):e||(n.C_.add(2),await Go(n),n.M_.set("Unknown"))}function di(t){return t.O_||(t.O_=function(n,s,r){const i=ee(n);return i.A_(),new zD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:XD.bind(null,t),Io:JD.bind(null,t),a_:ZD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Rf(t)?If(t):t.M_.set("Unknown")):(await t.O_.stop(),Iw(t))})),t.O_}function _s(t){return t.N_||(t.N_=function(n,s,r){const i=ee(n);return i.A_(),new KD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{ho:nx.bind(null,t),Io:ix.bind(null,t),T_:sx.bind(null,t),I_:rx.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ac(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Af(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Wo(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=Oi(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.B_=new De(q.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Qr{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qr(e,n,Mr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.k_=void 0,this.listeners=[]}}class lx{constructor(){this.queries=new hi(e=>GT(e),yc),this.onlineState="Unknown",this.q_=new Set}}async function Sf(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new ax),r)try{i.k_=await n.onListen(s)}catch(o){const a=Cf(o,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Pf(n)}async function bf(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function cx(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(r)&&(s=!0);o.k_=r}}s&&Pf(n)}function ux(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Pf(t){t.q_.forEach(e=>{e.next()})}class kf{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Qr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class hx{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=se(),this.mutatedKeys=se(),this._a=QT(e),this.aa=new Mr(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new xm,r=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=vc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),v=!0):this.ha(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this._a(f,l)>0||c&&this._a(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,m){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return y(f)-y(m)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(s),r=r!=null&&r;const a=n&&!r?this.Ia():[],l=this.oa.size===0&&this.current&&!r?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Qr(this.query,e.aa,i,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new xm,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=se(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new bw(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new Sw(s))}),n}da(e){this.ia=e.ls,this.oa=se();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Qr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class dx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class fx{constructor(e){this.key=e,this.Ra=!1}}class px{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new hi(a=>GT(a),yc),this.fa=new Map,this.ga=new Set,this.pa=new De(q.comparator),this.ya=new Map,this.wa=new vf,this.Sa={},this.ba=new Map,this.Da=Gr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function gx(t,e){const n=Ax(t);let s,r;const i=n.ma.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Aa();else{const o=await UD(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await mx(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Ew(n.remoteStore,o)}return r}async function mx(t,e,n,s,r){t.va=(h,d,f)=>async function(y,v,C,T){let I=v.view.ca(C);I.Zi&&(I=await km(y.localStore,v.query,!1).then(({documents:he})=>v.view.ca(he,I)));const E=T&&T.targetChanges.get(v.targetId),$=T&&T.targetMismatches.get(v.targetId)!=null,X=v.view.applyChanges(I,y.isPrimaryClient,E,$);return Lm(y,v.targetId,X.Ta),X.snapshot}(t,h,d,f);const i=await km(t.localStore,e,!0),o=new hx(e,i.ls),a=o.ca(i.documents),l=Ko.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);Lm(t,n,c.Ta);const u=new dx(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function _x(t,e){const n=ee(t),s=n.ma.get(e),r=n.fa.get(s.targetId);if(r.length>1)return n.fa.set(s.targetId,r.filter(i=>!yc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Tw(n.remoteStore,s.targetId),bh(n,s.targetId)}).catch(qo)):(bh(n,s.targetId),await Sh(n.localStore,s.targetId,!0))}async function yx(t,e,n){const s=Cx(t);try{const r=await function(o,a){const l=ee(o),c=$e.now(),u=a.reduce((f,m)=>f.add(m.key),se());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Wn(),y=se();return l.ss.getEntries(f,u).next(v=>{m=v,m.forEach((C,T)=>{T.isValidDocument()||(y=y.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const C=[];for(const T of a){const I=W1(T,h.get(T.key).overlayedDocument);I!=null&&C.push(new ws(T.key,I,BT(I.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,C,a)}).next(v=>{d=v;const C=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,C)})}).then(()=>({batchId:d.batchId,changes:XT(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new De(ce)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,r.batchId,n),await Qo(s,r.changes),await Ac(s.remoteStore)}catch(r){const i=Cf(r,"Failed to persist write");n.reject(i)}}async function Pw(t,e){const n=ee(t);try{const s=await LD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ya.get(i);o&&(we(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ra=!0:r.modifiedDocuments.size>0?we(o.Ra):r.removedDocuments.size>0&&(we(o.Ra),o.Ra=!1))}),await Qo(n,s,e)}catch(s){await qo(s)}}function Mm(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(c=!0)}),c&&Pf(l)}(s.eventManager,e),r.length&&s.Va.a_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vx(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ya.get(e),i=r&&r.key;if(i){let o=new De(q.comparator);o=o.insert(i,ut.newNoDocument(i,Q.min()));const a=se().add(i),l=new wc(Q.min(),new Map,new De(ce),o,a);await Pw(s,l),s.pa=s.pa.remove(i),s.ya.delete(e),Nf(s)}else await Sh(s.localStore,e,!1).then(()=>bh(s,e,n)).catch(qo)}async function Ex(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await MD(n.localStore,e);Nw(n,s,null),kw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Qo(n,r)}catch(r){await qo(r)}}async function Tx(t,e,n){const s=ee(t);try{const r=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(we(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);Nw(s,e,n),kw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Qo(s,r)}catch(r){await qo(r)}}function kw(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Nw(t,e,n){const s=ee(t);let r=s.Sa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Sa[s.currentUser.toKey()]=r}}function bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||Ow(t,s)})}function Ow(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Tw(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Nf(t))}function Lm(t,e,n){for(const s of n)s instanceof Sw?(t.wa.addReference(s.key,e),wx(t,s)):s instanceof bw?(U("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||Ow(t,s.key)):K()}function wx(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(U("SyncEngine","New document in limbo: "+n),t.ga.add(s),Nf(t))}function Nf(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new q(be.fromString(e)),s=t.Da.next();t.ya.set(s,new fx(n)),t.pa=t.pa.insert(n,s),Ew(t.remoteStore,new rs(wn(_c(n.path)),s,"TargetPurposeLimboResolution",cf._e))}}async function Qo(t,e,n){const s=ee(t),r=[],i=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=Tf.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Va.a_(r),await async function(l,c){const u=ee(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Wo(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(d,y)}}}(s.localStore,i))}async function Ix(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await mw(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qo(n,s._s)}}function Rx(t,e){const n=ee(t),s=n.ya.get(e);if(s&&s.Ra)return se().add(s.key);{let r=se();const i=n.fa.get(e);if(!i)return r;for(const o of i){const a=n.ma.get(o);r=r.unionWith(a.view.ua)}return r}}function Ax(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vx.bind(null,e),e.Va.a_=cx.bind(null,e.eventManager),e.Va.Fa=ux.bind(null,e.eventManager),e}function Cx(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ex.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tx.bind(null,e),e}class Vm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return xD(this.persistence,new OD,e.initialUser,this.serializer)}createPersistence(e){return new PD(Ef.jr,this.serializer)}createSharedClientState(e){return new $D}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ix.bind(null,this.syncEngine),await ox(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lx}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),s=function(i){return new HD(i)}(e.databaseInfo);return function(i,o,a,l){return new GD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new YD(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Mm(this.syncEngine,n,0),function(){return Om.D()?new Om:new jD}())}createSyncEngine(e,n){return function(r,i,o,a,l,c,u){const h=new px(r,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=ee(n);U("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await Go(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=at.UNAUTHENTICATED,this.clientId=VT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function du(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await mw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kx(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Dm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dm(e.remoteStore,i)),t._onlineComponents=e}function Px(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Px(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await du(t,new Vm)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await du(t,new Vm);return t._offlineComponents}async function Dw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Fm(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Fm(t,new Sx))),t._onlineComponents}function Nx(t){return Dw(t).then(e=>e.syncEngine)}async function wl(t){const e=await Dw(t),n=e.eventManager;return n.onListen=gx.bind(null,e.syncEngine),n.onUnlisten=_x.bind(null,e.syncEngine),n}function Ox(t,e,n={}){const s=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Of({next:d=>{o.enqueueAndForget(()=>bf(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new F(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kf(_c(a.path),u,{includeMetadataChanges:!0,J_:!0});return Sf(i,h)}(await wl(t),t.asyncQueue,e,n,s)),s.promise}function Dx(t,e,n={}){const s=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Of({next:d=>{o.enqueueAndForget(()=>bf(i,h)),d.fromCache&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new kf(a,u,{includeMetadataChanges:!0,J_:!0});return Sf(i,h)}(await wl(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xx(t,e,n,s){if(e===!0&&s===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bm(t){if(!q.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $m(t){if(q.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new t1;switch(s.type){case"firstParty":return new i1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Um.get(n);s&&(U("ComponentProvider","Removing Datastore"),Um.delete(n),s.terminate())}(this),Promise.resolve()}}function Mx(t,e,n,s={}){var r;const i=(t=jt(t,Sc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=at.MOCK_USER;else{a=Py(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(c)}t._authCredentials=new n1(new LT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lr(this.firestore,e,this._query)}}class Tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class hs extends lr{constructor(e,n,s){super(e,n,_c(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new q(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function Ma(t,e,...n){if(t=Oe(t),Mw("collection","path",e),t instanceof Sc){const s=be.fromString(e,...n);return $m(s),new hs(t,null,s)}{if(!(t instanceof Tt||t instanceof hs))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return $m(s),new hs(t.firestore,null,s)}}function vr(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=VT.newId()),Mw("doc","path",e),t instanceof Sc){const s=be.fromString(e,...n);return Bm(s),new Tt(t,null,new q(s))}{if(!(t instanceof Tt||t instanceof hs))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return Bm(s),new Tt(t.firestore,t instanceof hs?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new yw(this,"async_queue_retry"),this.iu=()=>{const n=hu();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=hu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Bn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Wo(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw qn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const r=Af.createAndSchedule(this,e,n,s,i=>this.au(i));return this.Xa.push(r),r}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function qm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ys extends Sc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=function(){return new Lx}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vw(this),this._firestoreClient.terminate()}}function Lw(t,e){const n=typeof t=="object"?t:jl(),s=typeof t=="string"?t:e||"(default)",r=$l(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cy("firestore");i&&Mx(r,...i)}return r}function bc(t){return t._firestoreClient||Vw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vw(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,c,u){return new _1(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xw(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new bx(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(_t.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=/^__.*__$/;class Fx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class Fw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ws(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class xf{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Au(e),r}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Tu({path:s,du:!1});return r.Pu(),r}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Il(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Uw(this.Iu)&&Vx.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Ux{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ic(e)}pu(e,n,s,r=!1){return new xf({Iu:e,methodName:n,gu:s,path:tt.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new Ux(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bx(t,e,n,s,r,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,r);Lf("Data must be an object, but it was:",o,s);const a=Bw(s,o);let l,c;if(i.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Ph(e,h,n);if(!o.contains(d))throw new F(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jw(u,d)||u.push(d)}l=new Dt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Fx(new Ct(a),l,c)}class Nc extends Df{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nc}}function $x(t,e,n,s){const r=t.pu(1,e,n);Lf("Data must be an object, but it was:",r,s);const i=[],o=Ct.empty();or(s,(l,c)=>{const u=Vf(e,l,n);c=Oe(c);const h=r.Ru(u);if(c instanceof Nc)i.push(u);else{const d=Yo(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Dt(i);return new Fw(o,a,r.fieldTransforms)}function jx(t,e,n,s,r,i){const o=t.pu(1,e,n),a=[Ph(e,s,n)],l=[r];if(i.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ph(e,i[d])),l.push(i[d+1]);const c=[],u=Ct.empty();for(let d=a.length-1;d>=0;--d)if(!jw(c,a[d])){const f=a[d];let m=l[d];m=Oe(m);const y=o.Ru(f);if(m instanceof Nc)c.push(f);else{const v=Yo(m,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new Dt(c);return new Fw(u,h,o.fieldTransforms)}function qx(t,e,n,s=!1){return Yo(n,t.pu(s?4:3,e))}function Yo(t,e){if($w(t=Oe(t)))return Lf("Unsupported field value:",e,t),Bw(t,e);if(t instanceof Df)return function(s,r){if(!Uw(r.Iu))throw r.mu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.mu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=Yo(a,r.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Oe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return F1(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=$e.fromDate(s);return{timestampValue:El(r.serializer,i)}}if(s instanceof $e){const i=new $e(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:El(r.serializer,i)}}if(s instanceof kc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Yr)return{bytesValue:uw(r.serializer,s._byteString)};if(s instanceof Tt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(s.firestore._databaseId||r.databaseId,s._key.path)}}throw r.mu(`Unsupported field value: ${Cc(s)}`)}(t,e)}function Bw(t,e){const n={};return FT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(t,(s,r)=>{const i=Yo(r,e.Eu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function $w(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof kc||t instanceof Yr||t instanceof Tt||t instanceof Df)}function Lf(t,e,n){if(!$w(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Cc(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function Ph(t,e,n){if((e=Oe(e))instanceof Pc)return e._internalPath;if(typeof e=="string")return Vf(t,e);throw Il("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wx=new RegExp("[~\\*/\\[\\]]");function Vf(t,e,n){if(e.search(Wx)>=0)throw Il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pc(...e.split("."))._internalPath}catch{throw Il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Il(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}function jw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hx extends qw{data(){return super.data()}}function Ff(t,e){return typeof e=="string"?Vf(t,e):e instanceof Pc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class zx extends Uf{}function Wm(t,e,...n){let s=[];e instanceof Uf&&s.push(e),s=s.concat(n),function(i){const o=i.filter(l=>l instanceof Bf).length,a=i.filter(l=>l instanceof Oc).length;if(o>1||o>0&&a>0)throw new F(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Oc extends zx{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Oc(e,n,s)}_apply(e){const n=this._parse(e);return Hw(e._query,n),new lr(e.firestore,e.converter,Th(e._query,n))}_parse(e){const n=Mf(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new F(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Km(h,u);const f=[];for(const m of h)f.push(zm(l,i,m));d={arrayValue:{values:f}}}else d=zm(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Km(h,u),d=qx(a,o,h,u==="in"||u==="not-in");return Be.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Hm(t,e,n){const s=e,r=Ff("where",t);return Oc._create(r,s,n)}class Bf extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bf(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const l of a)Hw(o,l),o=Th(o,l)}(e._query,n),new lr(e.firestore,e.converter,Th(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function zm(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new F(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KT(e)&&n.indexOf("/")!==-1)throw new F(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(be.fromString(n));if(!q.isDocumentKey(s))throw new F(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fm(t,new q(s))}if(n instanceof Tt)return fm(t,n._key);throw new F(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(n)}.`)}function Km(t,e){if(!Array.isArray(t)||t.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hw(t,e){const n=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Kx{convertValue(e,n="none"){switch(Zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Js(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return or(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new kc(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=ms(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);we(gw(s));const r=new Eo(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zw extends qw{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class La extends zw{data(e={}){return super.data(e)}}class Kw{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new xi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new La(this._firestore,this._userDataWriter,s.key,s,new xi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new La(r._firestore,r._userDataWriter,a.doc.key,a.doc,new xi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new La(r._firestore,r._userDataWriter,a.doc.key,a.doc,new xi(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Qx(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Qx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){t=jt(t,Tt);const e=jt(t.firestore,ys);return Ox(bc(e),t._key).then(n=>Qw(e,t,n))}class $f extends Kx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Yx(t){t=jt(t,lr);const e=jt(t.firestore,ys),n=bc(e),s=new $f(e);return Ww(t._query),Dx(n,t._query).then(r=>new Kw(e,s,t,r))}function ya(t,e,n,...s){t=jt(t,Tt);const r=jt(t.firestore,ys),i=Mf(r);let o;return o=typeof(e=Oe(e))=="string"||e instanceof Pc?jx(i,"updateDoc",t._key,e,n,s):$x(i,"updateDoc",t._key,e),qf(r,[o.toMutation(t._key,Zt.exists(!0))])}function Gm(t){return qf(jt(t.firestore,ys),[new gf(t._key,Zt.none())])}function Xx(t,e){const n=jt(t.firestore,ys),s=vr(t),r=Gx(t.converter,e);return qf(n,[Bx(Mf(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function jf(t,...e){var n,s,r;t=Oe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qm(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(qm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof Tt)c=jt(t.firestore,ys),u=_c(t._key.path),l={next:h=>{e[o]&&e[o](Qw(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=jt(t,lr);c=jt(h.firestore,ys),u=h._query;const d=new $f(c);l={next:f=>{e[o]&&e[o](new Kw(c,d,h,f))},error:e[o+1],complete:e[o+2]},Ww(t._query)}return function(d,f,m,y){const v=new Of(y),C=new kf(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>Sf(await wl(d),C)),()=>{v.Na(),d.asyncQueue.enqueueAndForget(async()=>bf(await wl(d),C))}}(bc(c),u,a,l)}function qf(t,e){return function(s,r){const i=new Bn;return s.asyncQueue.enqueueAndForget(async()=>yx(await Nx(s),r,i)),i.promise}(bc(t),e)}function Qw(t,e,n){const s=n.docs.get(e._key),r=new $f(t);return new zw(t,r,e._key,s,new xi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ui=r})(vs),An(new en("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ys(new s1(s.getProvider("auth-internal")),new a1(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(c.options.projectId,u)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Lt(cm,"4.4.0",e),Lt(cm,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebasestorage.googleapis.com",Xw="storageBucket",Jx=2*60*1e3,Zx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends bn{constructor(e,n,s=0){super(fu(e),`Firebase Storage: ${n} (${fu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function fu(t){return"storage/"+t}function Wf(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Me.UNKNOWN,t)}function eM(t){return new Le(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tM(t){return new Le(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Me.UNAUTHENTICATED,t)}function sM(){return new Le(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rM(t){return new Le(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iM(){return new Le(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oM(){return new Le(Me.CANCELED,"User canceled the upload/download.")}function aM(t){return new Le(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function lM(t){return new Le(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cM(){return new Le(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xw+"' property when initializing the app?")}function uM(){return new Le(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hM(){return new Le(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dM(t){return new Le(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kh(t){return new Le(Me.INVALID_ARGUMENT,t)}function Jw(){return new Le(Me.APP_DELETED,"The Firebase app was deleted.")}function fM(t){return new Le(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gi(t,e){return new Le(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ii(t){throw new Le(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(s.path==="")return s;throw lM(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},y=n===Yw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",C=new RegExp(`^https?://${y}/${r}/${v}`,"i"),I=[{regex:a,indices:l,postModify:i},{regex:f,indices:m,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<I.length;E++){const $=I[E],X=$.regex.exec(e);if(X){const he=X[$.indices.bucket];let Ee=X[$.indices.path];Ee||(Ee=""),s=new xt(he,Ee),$.postModify(s);break}}if(s==null)throw aM(e);return s}}class pM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(f,l())},v)}function d(){i&&clearTimeout(i)}function f(v,...C){if(c){d();return}if(v){d(),u.call(null,v,...C);return}if(l()||o){d(),u.call(null,v,...C);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let m=!1;function y(v){m||(m=!0,d(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function mM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t){return t!==void 0}function yM(t){return typeof t=="object"&&!Array.isArray(t)}function Hf(t){return typeof t=="string"||t instanceof String}function Qm(t){return zf()&&t instanceof Blob}function zf(){return typeof Blob<"u"}function Ym(t,e,n,s){if(s<e)throw kh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw kh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Zw(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var js;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(js||(js={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,s,r,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new va(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===js.NO_ERROR,l=i.getStatus();if(!a||vM(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===js.ABORT;s(!1,new va(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new va(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_M(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Wf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Jw():oM();o(l)}else{const l=iM();o(l)}};this.canceled_?n(!1,new va(!1,null,!0)):this.backoffId_=gM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class va{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function TM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function wM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AM(t,e,n,s,r,i,o=!0){const a=Zw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return IM(c,e),TM(c,n),wM(c,i),RM(c,s),new EM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SM(...t){const e=CM();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(zf())return new Blob(t);throw new Le(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){if(typeof atob>"u")throw dM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pu{constructor(e,n){this.data=e,this.contentType=n||null}}function kM(t,e){switch(t){case yn.RAW:return new pu(eI(e));case yn.BASE64:case yn.BASE64URL:return new pu(tI(t,e));case yn.DATA_URL:return new pu(OM(e),DM(e))}throw Wf()}function eI(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function NM(t){let e;try{e=decodeURIComponent(t)}catch{throw Gi(yn.DATA_URL,"Malformed data URL.")}return eI(e)}function tI(t,e){switch(t){case yn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Gi(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Gi(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PM(e)}catch(r){throw r.message.includes("polyfill")?r:Gi(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class nI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gi(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=xM(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function OM(t){const e=new nI(t);return e.base64?tI(yn.BASE64,e.rest):NM(e.rest)}function DM(t){return new nI(t).contentType}function xM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){let s=0,r="";Qm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qm(this.data_)){const s=this.data_,r=bM(s,e,n);return r===null?null:new ss(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ss(s,!0)}}static getBlob(...e){if(zf()){const n=e.map(s=>s instanceof ss?s.data_:s);return new ss(SM.apply(null,n))}else{const n=e.map(o=>Hf(o)?kM(yn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new ss(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){let e;try{e=JSON.parse(t)}catch{return null}return yM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function LM(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function rI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VM(t,e){return e}class yt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||VM}}let Ea=null;function FM(t){return!Hf(t)||t.length<2?t:rI(t)}function iI(){if(Ea)return Ea;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(i,o){return FM(o)}const n=new yt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new yt("size");return r.xform=s,t.push(r),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),Ea=t,Ea}function UM(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new xt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function BM(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return UM(s,t),s}function oI(t,e,n){const s=sI(e);return s===null?null:BM(t,s,n)}function $M(t,e,n,s){const r=sI(e);if(r===null||!Hf(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Kf(d,n,s),m=Zw({alt:"media",token:c});return f+m})[0]}function jM(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class aI{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){if(!t)throw Wf()}function qM(t,e){function n(s,r){const i=oI(t,r,e);return lI(i!==null),i}return n}function WM(t,e){function n(s,r){const i=oI(t,r,e);return lI(i!==null),$M(i,r,t.host,t._protocol)}return n}function cI(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=sM():r=nM():n.getStatus()===402?r=tM(t.bucket):n.getStatus()===403?r=rM(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function HM(t){const e=cI(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=eM(t.path)),i.serverResponse=r.serverResponse,i}return n}function zM(t,e,n){const s=e.fullServerUrl(),r=Kf(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new aI(r,i,WM(t,n),o);return a.errorHandler=HM(e),a}function KM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GM(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=KM(null,e)),s}function QM(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let E=0;E<2;E++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=GM(e,s,r),u=jM(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ss.getBlob(h,s,d);if(f===null)throw uM();const m={name:c.fullPath},y=Kf(i,t.host,t._protocol),v="POST",C=t.maxUploadRetryTime,T=new aI(y,v,qM(t,n),C);return T.urlParams=m,T.headers=o,T.body=f.uploadData(),T.errorHandler=cI(e),T}class YM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=js.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=js.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=js.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ii("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ii("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ii("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ii("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ii("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XM extends YM{initXhr(){this.xhr_.responseType="text"}}function uI(){return new XM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new er(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rI(this._location.path)}get storage(){return this._service}get parent(){const e=MM(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fM(e)}}function JM(t,e,n){t._throwIfRoot("uploadBytes");const s=QM(t.storage,t._location,iI(),new ss(e,!0),n);return t.storage.makeRequestWithTokens(s,uI).then(r=>({metadata:r,ref:t}))}function ZM(t){t._throwIfRoot("getDownloadURL");const e=zM(t.storage,t._location,iI());return t.storage.makeRequestWithTokens(e,uI).then(n=>{if(n===null)throw hM();return n})}function eL(t,e){const n=LM(t._location.path,e),s=new xt(t._location.bucket,n);return new er(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){return/^[A-Za-z]+:\/\//.test(t)}function nL(t,e){return new er(t,e)}function hI(t,e){if(t instanceof Gf){const n=t;if(n._bucket==null)throw cM();const s=new er(n,n._bucket);return e!=null?hI(s,e):s}else return e!==void 0?eL(t,e):t}function sL(t,e){if(e&&tL(e)){if(t instanceof Gf)return nL(t,e);throw kh("To use ref(service, url), the first argument must be a Storage instance.")}else return hI(t,e)}function Xm(t,e){const n=e==null?void 0:e[Xw];return n==null?null:xt.makeFromBucketSpec(n,t)}function rL(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Py(r,t.app.options.projectId))}class Gf{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Yw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jx,this._maxUploadRetryTime=Zx,this._requests=new Set,r!=null?this._bucket=xt.makeFromBucketSpec(r,this._host):this._bucket=Xm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=Xm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ym("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new er(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new pM(Jw());{const o=AM(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Jm="@firebase/storage",Zm="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="storage";function iL(t,e,n){return t=Oe(t),JM(t,e,n)}function oL(t){return t=Oe(t),ZM(t)}function aL(t,e){return t=Oe(t),sL(t,e)}function lL(t=jl(),e){t=Oe(t);const s=$l(t,dI).getImmediate({identifier:e}),r=Cy("storage");return r&&cL(s,...r),s}function cL(t,e,n,s={}){rL(t,e,n,s)}function uL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Gf(n,s,r,e,vs)}function hL(){An(new en(dI,uL,"PUBLIC").setMultipleInstances(!0)),Lt(Jm,Zm,""),Lt(Jm,Zm,"esm2017")}hL();const gu=new WeakMap;function fI(t,e){return gu.has(e)||gu.set(e,t||{f:{},r:{},s:{},u:{}}),gu.get(e)}function dL(t,e,n,s){if(!t)return n;const[r,i]=pI(t);if(!r)return n;const o=fI(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function fL(t,e,n,s){if(!t)return;const[r,i]=pI(t);if(!r)return;const o=fI(void 0,s)[r],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(fn),a}function pI(t){return eP(t)||tP(t)?["f",t.path]:nP(t)?["r",t.toString()]:sP(t)?["s",t.toString()]:[]}const mu=new WeakMap;function pL(t,e,n){const s=Gl();mu.has(s)||mu.set(s,new Map);const r=mu.get(s),i=fL(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):fn}const gL={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Nh(t,e,n,s){if(!Jb(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof $e||m instanceof kc)h[f]=m;else if(_d(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in i&&(h[f][y]=i[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else nr(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",r),r}const Qf={reset:!1,wait:!0,maxRefDepth:2,converter:gL,snapshotOptions:{serverTimestamps:"estimate"}};function Rl(t){for(const e in t)t[e].unsub()}function Oh(t,e,n,s,r,i,o,a,l){const[c,u]=Nh(s.data(t.snapshotOptions),md(e,n),r,t);i.set(e,n,c),Dh(t,e,n,r,u,i,o,a,l)}function mL({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const l=Object.create(null);let c=fn;return a.once?Gw(t).then(u=>{u.exists()?Oh(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())}).catch(i):c=jf(t,u=>{u.exists()?Oh(a,e,n,u,l,o,s,r,i):(o.set(e,n,null),r())},i),()=>{c(),Rl(l)}}function Dh(t,e,n,s,r,i,o,a,l){const c=Object.keys(r);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],C=r[y],T=`${n}.${y}`;if(f[T]=!0,v)if(v.path!==C.path)v.unsub();else return;s[y]={data:()=>md(e,T),unsub:mL({ref:C,target:e,path:T,depth:o,ops:i,resolve:m.bind(null,T),reject:l},t),path:C.path}})}function _L(t,e,n,s,r,i){const o=Object.assign({},Qf,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Fn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,y=fn;const v=[],C={added:({newIndex:I,doc:E})=>{v.splice(I,0,Object.create(null));const $=v[I],[X,he]=Nh(E.data(l),void 0,$,o);n.add(Nn(d),I,X),Dh(o,d,`${h}.${I}`,$,he,n,0,s.bind(null,E),r)},modified:({oldIndex:I,newIndex:E,doc:$})=>{const X=Nn(d),he=v[I],Ee=X[I],[wt,Xe]=Nh($.data(l),Ee,he,o);v.splice(E,0,he),n.remove(X,I),n.add(X,E,wt),Dh(o,d,`${h}.${E}`,he,Xe,n,0,s,r)},removed:({oldIndex:I})=>{const E=Nn(d);n.remove(E,I),Rl(v.splice(I,1)[0])}};function T(I){const E=I.docChanges(a);if(!m&&E.length){m=!0;let $=0;const X=E.length,he=Object.create(null);for(let Ee=0;Ee<X;Ee++)he[E[Ee].doc.id]=!0;s=Ee=>{Ee&&Ee.id in he&&++$>=X&&(c&&(n.set(t,h,Nn(d)),d=t),f(Nn(d)),s=fn)}}E.forEach($=>{C[$.type]($)}),E.length||(c&&(n.set(t,h,Nn(d)),d=t),s(Nn(d)))}return u?Yx(e).then(T).catch(r):y=jf(e,T,r),I=>{if(y(),I){const E=typeof I=="function"?I():[];n.set(t,h,E)}v.forEach(Rl)}}function yL(t,e,n,s,r,i){const o=Object.assign({},Qf,i),a="value",l=Object.create(null);s=rP(s,()=>md(t,a));let c=fn;function u(h){h.exists()?Oh(o,t,a,h,l,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?Gw(e).then(u).catch(r):c=jf(e,u,r),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Rl(l)}}const e_=Symbol();function vL(t,e){let n=fn;const s=Object.assign({},Qf,e),r=Nn(t),i=s.target||Fn();oP()&&(s.once=!0);const o=dL(r,s.ssrKey,e_,Gl()),a=o!==e_;a&&(i.value=o);let l=!a;const c=Fn(!1),u=Fn(),h=$_(),d=R_();let f=fn;function m(){let C=Nn(t);const T=new Promise((I,E)=>{if(n(s.reset),!C)return n=fn,I(null);c.value=l,l=!0,C.converter||(C=C.withConverter(s.converter)),n=(_d(C)?yL:_L)(i,C,EL,I,E,s)}).catch(I=>(h.value===T&&(u.value=I),Promise.reject(I))).finally(()=>{h.value===T&&(c.value=!1)});h.value=T}let y=fn;gt(t)&&(y=Li(t,m)),m(),r&&(f=pL(h.value,r,s.ssrKey)),td()&&ry(()=>h.value),d&&jI(v);function v(C=s.reset){y(),f(),n(C)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const EL={set:(t,e,n)=>Yb(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function TL(t,e){return vL(t,{target:Fn([]),...e})}function wL(t){return Lw(Gl(t))}function IL(t){return AL({initialUser:t,dependencies:{popupRedirectResolver:yv,persistence:[pv,lv,fd]}})}const RL=Symbol("VueFireAuth");function AL({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=CL(n,s,e,t);uP(r,i)}}function CL(t,e,n,s){const r=aP(t,e).run(()=>Fn(n));lP.set(t,r);const i=tv(t,s);return e.provide(RL,i),[r,i]}function SL(t,{firebaseApp:e,modules:n=[]}){t.provide(Tv,e);for(const s of n)s(e,t)}const gI=Ly({apiKey:"AIzaSyAMsFMrcBOd0PDe0WWuychjy01AZxyqZMU",authDomain:"tiendavue-pablolopez.firebaseapp.com",projectId:"tiendavue-pablolopez",storageBucket:"tiendavue-pablolopez.appspot.com",messagingSenderId:"779516547261",appId:"1:779516547261:web:3f1b650464779e3743e7d4",measurementId:"G-HXKQ95K2KB"}),bL=Lw(gI);Ma(bL,"todos");/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Er=typeof window<"u";function PL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function _u(t,e){const n={};for(const s in e){const r=e[s];n[s]=rn(r)?r.map(t):t(r)}return n}const Qi=()=>{},rn=Array.isArray,kL=/\/$/,NL=t=>t.replace(kL,"");function yu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ML(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function OL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function t_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DL(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Xr(e.matched[s],n.matched[r])&&mI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xL(t[n],e[n]))return!1;return!0}function xL(t,e){return rn(t)?n_(t,e):rn(e)?n_(e,t):t===e}function n_(t,e){return rn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ML(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function LL(t){if(!t)if(Er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),NL(t)}const VL=/^[^#]+#/;function FL(t,e){return t.replace(VL,"#")+e}function UL(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Dc=()=>({left:window.pageXOffset,top:window.pageYOffset});function BL(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=UL(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function s_(t,e){return(history.state?history.state.position-e:-1)+t}const xh=new Map;function $L(t,e){xh.set(t,e)}function jL(t){const e=xh.get(t);return xh.delete(t),e}let qL=()=>location.protocol+"//"+location.host;function _I(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),t_(l,"")}return t_(n,t)+s+r}function WL(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=_I(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else s(f);r.forEach(C=>{C(n.value,m,{delta:v,type:Ro.pop,direction:v?v>0?Yi.forward:Yi.back:Yi.unknown})})};function l(){o=n.value}function c(d){r.push(d);const f=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ge({},d.state,{scroll:Dc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function r_(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Dc():null}}function HL(t){const{history:e,location:n}=window,s={value:_I(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:qL()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=ge({},e.state,r_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ge({},r.value,e.state,{forward:l,scroll:Dc()});i(u.current,u,!0);const h=ge({},r_(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function zL(t){t=LL(t);const e=HL(t),n=WL(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:FL.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KL(t){return typeof t=="string"||t&&typeof t=="object"}function yI(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vI=Symbol("");var i_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(i_||(i_={}));function Jr(t,e){return ge(new Error,{type:t,[vI]:!0},e)}function kn(t,e){return t instanceof Error&&vI in t&&(e==null||!!(t.type&e))}const o_="[^/]+?",GL={sensitive:!1,strict:!1,start:!0,end:!0},QL=/[.+*?^${}()[\]/\\]/g;function YL(t,e){const n=ge({},GL,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(QL,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:C}=d;i.push({name:m,repeatable:y,optional:v});const T=C||o_;if(T!==o_){f+=10;try{new RegExp(`(${T})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${T}): `+E.message)}}let I=y?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(I=v&&c.length<2?`(?:/${I})`:"/"+I),v&&(I+="?"),r+=I,f+=20,v&&(f+=-8),y&&(f+=-20),T===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,C=m in c?c[m]:"";if(rn(C)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const T=rn(C)?C.join("/"):C;if(!T)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=T}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function XL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function JL(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=XL(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(a_(s))return 1;if(a_(r))return-1}return r.length-s.length}function a_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZL={type:0,value:""},eV=/[a-zA-Z0-9_]/;function tV(t){if(!t)return[[]];if(t==="/")return[[ZL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:eV.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function nV(t,e,n){const s=YL(tV(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sV(t,e){const n=[],s=new Map;e=u_({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,m=rV(u);m.aliasOf=d&&d.record;const y=u_(e,u),v=[m];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of I)v.push(ge({},m,{components:d?d.record.components:m.components,path:E,aliasOf:d?d.record:m}))}let C,T;for(const I of v){const{path:E}=I;if(h&&E[0]!=="/"){const $=h.record.path,X=$[$.length-1]==="/"?"":"/";I.path=h.record.path+(E&&X+E)}if(C=nV(I,h,y),d?d.alias.push(C):(T=T||C,T!==C&&T.alias.push(C),f&&u.name&&!c_(C)&&o(u.name)),m.children){const $=m.children;for(let X=0;X<$.length;X++)i($[X],C,d&&d.children[X])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return T?()=>{o(T)}:Qi}function o(u){if(yI(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&JL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!EI(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!c_(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Jr(1,{location:u});y=d.record.name,f=ge(l_(h.params,d.keys.filter(T=>!T.optional).map(T=>T.name)),u.params&&l_(u.params,d.keys.map(T=>T.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(T=>T.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(T=>T.re.test(h.path)),!d)throw Jr(1,{location:u,currentLocation:h});y=d.record.name,f=ge({},h.params,u.params),m=d.stringify(f)}const v=[];let C=d;for(;C;)v.unshift(C.record),C=C.parent;return{name:y,path:m,params:f,matched:v,meta:oV(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function l_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function c_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function oV(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function u_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function EI(t,e){return e.children.some(n=>n===t||EI(t,n))}const TI=/#/g,aV=/&/g,lV=/\//g,cV=/=/g,uV=/\?/g,wI=/\+/g,hV=/%5B/g,dV=/%5D/g,II=/%5E/g,fV=/%60/g,RI=/%7B/g,pV=/%7C/g,AI=/%7D/g,gV=/%20/g;function Yf(t){return encodeURI(""+t).replace(pV,"|").replace(hV,"[").replace(dV,"]")}function mV(t){return Yf(t).replace(RI,"{").replace(AI,"}").replace(II,"^")}function Mh(t){return Yf(t).replace(wI,"%2B").replace(gV,"+").replace(TI,"%23").replace(aV,"%26").replace(fV,"`").replace(RI,"{").replace(AI,"}").replace(II,"^")}function _V(t){return Mh(t).replace(cV,"%3D")}function yV(t){return Yf(t).replace(TI,"%23").replace(uV,"%3F")}function vV(t){return t==null?"":yV(t).replace(lV,"%2F")}function Al(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function EV(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(wI," "),o=i.indexOf("="),a=Al(o<0?i:i.slice(0,o)),l=o<0?null:Al(i.slice(o+1));if(a in e){let c=e[a];rn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function h_(t){let e="";for(let n in t){const s=t[n];if(n=_V(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(s)?s.map(i=>i&&Mh(i)):[s&&Mh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TV(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const wV=Symbol(""),d_=Symbol(""),xc=Symbol(""),Xf=Symbol(""),Lh=Symbol("");function Ri(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Jr(4,{from:n,to:e})):h instanceof Error?a(h):KL(h)?a(Jr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function vu(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(IV(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Zn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=PL(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zn(d,n,s,i,o)()}))}}return r}function IV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function f_(t){const e=Mt(xc),n=Mt(Xf),s=zt(()=>e.resolve(ze(t.to))),r=zt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xr.bind(null,u));if(d>-1)return d;const f=p_(l[c-2]);return c>1&&p_(u)===f&&h[h.length-1].path!==f?h.findIndex(Xr.bind(null,l[c-2])):d}),i=zt(()=>r.value>-1&&SV(n.params,s.value.params)),o=zt(()=>r.value>-1&&r.value===n.matched.length-1&&mI(n.params,s.value.params));function a(l={}){return CV(l)?e[ze(t.replace)?"replace":"push"](ze(t.to)).catch(Qi):Promise.resolve()}return{route:s,href:zt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const RV=ey({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:f_,setup(t,{slots:e}){const n=Ol(f_(t)),{options:s}=Mt(xc),r=zt(()=>({[g_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[g_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),AV=RV;function CV(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SV(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!rn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function p_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const g_=(t,e,n)=>t??e??n,bV=ey({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Lh),r=zt(()=>t.route||s.value),i=Mt(d_,0),o=zt(()=>{let c=ze(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=zt(()=>r.value.matched[o.value]);Ra(d_,zt(()=>o.value+1)),Ra(wV,a),Ra(Lh,r);const l=Fn();return Li(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Xr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return m_(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=yy(d,ge({},m,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return m_(n.default,{Component:v,route:c})||v}}});function m_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PV=bV;function kV(t){const e=sV(t.routes,t),n=t.parseQuery||EV,s=t.stringifyQuery||h_,r=t.history,i=Ri(),o=Ri(),a=Ri(),l=$_(Xn);let c=Xn;Er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_u.bind(null,R=>""+R),h=_u.bind(null,vV),d=_u.bind(null,Al);function f(R,V){let D,j;return yI(R)?(D=e.getRecordMatcher(R),j=V):j=R,e.addRoute(j,D)}function m(R){const V=e.getRecordMatcher(R);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(R=>R.record)}function v(R){return!!e.getRecordMatcher(R)}function C(R,V){if(V=ge({},V||l.value),typeof R=="string"){const _=yu(n,R,V.path),w=e.resolve({path:_.path},V),S=r.createHref(_.fullPath);return ge(_,w,{params:d(w.params),hash:Al(_.hash),redirectedFrom:void 0,href:S})}let D;if("path"in R)D=ge({},R,{path:yu(n,R.path,V.path).path});else{const _=ge({},R.params);for(const w in _)_[w]==null&&delete _[w];D=ge({},R,{params:h(_)}),V.params=h(V.params)}const j=e.resolve(D,V),fe=R.hash||"";j.params=u(d(j.params));const p=OL(s,ge({},R,{hash:mV(fe),path:j.path})),g=r.createHref(p);return ge({fullPath:p,hash:fe,query:s===h_?TV(R.query):R.query||{}},j,{redirectedFrom:void 0,href:g})}function T(R){return typeof R=="string"?yu(n,R,l.value.path):ge({},R)}function I(R,V){if(c!==R)return Jr(8,{from:V,to:R})}function E(R){return he(R)}function $(R){return E(ge(T(R),{replace:!0}))}function X(R){const V=R.matched[R.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let j=typeof D=="function"?D(R):D;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=T(j):{path:j},j.params={}),ge({query:R.query,hash:R.hash,params:"path"in j?{}:R.params},j)}}function he(R,V){const D=c=C(R),j=l.value,fe=R.state,p=R.force,g=R.replace===!0,_=X(D);if(_)return he(ge(T(_),{state:typeof _=="object"?ge({},fe,_.state):fe,force:p,replace:g}),V||D);const w=D;w.redirectedFrom=V;let S;return!p&&DL(s,j,D)&&(S=Jr(16,{to:w,from:j}),an(j,j,!0,!1)),(S?Promise.resolve(S):Xe(w,j)).catch(b=>kn(b)?kn(b,2)?b:Gn(b):de(b,w,j)).then(b=>{if(b){if(kn(b,2))return he(ge({replace:g},T(b.to),{state:typeof b.to=="object"?ge({},fe,b.to.state):fe,force:p}),V||w)}else b=Is(w,j,!0,g,fe);return Kn(w,j,b),b})}function Ee(R,V){const D=I(R,V);return D?Promise.reject(D):Promise.resolve()}function wt(R){const V=hr.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(R):R()}function Xe(R,V){let D;const[j,fe,p]=NV(R,V);D=vu(j.reverse(),"beforeRouteLeave",R,V);for(const _ of j)_.leaveGuards.forEach(w=>{D.push(Zn(w,R,V))});const g=Ee.bind(null,R,V);return D.push(g),it(D).then(()=>{D=[];for(const _ of i.list())D.push(Zn(_,R,V));return D.push(g),it(D)}).then(()=>{D=vu(fe,"beforeRouteUpdate",R,V);for(const _ of fe)_.updateGuards.forEach(w=>{D.push(Zn(w,R,V))});return D.push(g),it(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(rn(_.beforeEnter))for(const w of _.beforeEnter)D.push(Zn(w,R,V));else D.push(Zn(_.beforeEnter,R,V));return D.push(g),it(D)}).then(()=>(R.matched.forEach(_=>_.enterCallbacks={}),D=vu(p,"beforeRouteEnter",R,V),D.push(g),it(D))).then(()=>{D=[];for(const _ of o.list())D.push(Zn(_,R,V));return D.push(g),it(D)}).catch(_=>kn(_,8)?_:Promise.reject(_))}function Kn(R,V,D){a.list().forEach(j=>wt(()=>j(R,V,D)))}function Is(R,V,D,j,fe){const p=I(R,V);if(p)return p;const g=V===Xn,_=Er?history.state:{};D&&(j||g?r.replace(R.fullPath,ge({scroll:g&&_&&_.scroll},fe)):r.push(R.fullPath,fe)),l.value=R,an(R,V,D,g),Gn()}let on;function fi(){on||(on=r.listen((R,V,D)=>{if(!Xo.listening)return;const j=C(R),fe=X(j);if(fe){he(ge(fe,{replace:!0}),j).catch(Qi);return}c=j;const p=l.value;Er&&$L(s_(p.fullPath,D.delta),Dc()),Xe(j,p).catch(g=>kn(g,12)?g:kn(g,2)?(he(g.to,j).then(_=>{kn(_,20)&&!D.delta&&D.type===Ro.pop&&r.go(-1,!1)}).catch(Qi),Promise.reject()):(D.delta&&r.go(-D.delta,!1),de(g,j,p))).then(g=>{g=g||Is(j,p,!1),g&&(D.delta&&!kn(g,8)?r.go(-D.delta,!1):D.type===Ro.pop&&kn(g,20)&&r.go(-1,!1)),Kn(j,p,g)}).catch(Qi)}))}let cr=Ri(),qe=Ri(),ve;function de(R,V,D){Gn(R);const j=qe.list();return j.length?j.forEach(fe=>fe(R,V,D)):console.error(R),Promise.reject(R)}function Pn(){return ve&&l.value!==Xn?Promise.resolve():new Promise((R,V)=>{cr.add([R,V])})}function Gn(R){return ve||(ve=!R,fi(),cr.list().forEach(([V,D])=>R?D(R):V()),cr.reset()),R}function an(R,V,D,j){const{scrollBehavior:fe}=t;if(!Er||!fe)return Promise.resolve();const p=!D&&jL(s_(R.fullPath,0))||(j||!D)&&history.state&&history.state.scroll||null;return H_().then(()=>fe(R,V,p)).then(g=>g&&BL(g)).catch(g=>de(g,R,V))}const It=R=>r.go(R);let ur;const hr=new Set,Xo={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:C,options:t,push:E,replace:$,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:qe.add,isReady:Pn,install(R){const V=this;R.component("RouterLink",AV),R.component("RouterView",PV),R.config.globalProperties.$router=V,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>ze(l)}),Er&&!ur&&l.value===Xn&&(ur=!0,E(r.location).catch(fe=>{}));const D={};for(const fe in Xn)Object.defineProperty(D,fe,{get:()=>l.value[fe],enumerable:!0});R.provide(xc,V),R.provide(Xf,M_(D)),R.provide(Lh,l);const j=R.unmount;hr.add(R),R.unmount=function(){hr.delete(R),hr.size<1&&(c=Xn,on&&on(),on=null,l.value=Xn,ur=!1,ve=!1),j()}}};function it(R){return R.reduce((V,D)=>V.then(()=>wt(D)),Promise.resolve())}return Xo}function NV(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xr(c,l))||r.push(l))}return[n,s,r]}function CI(){return Mt(xc)}function OV(){return Mt(Xf)}const DV={class:"header"},xV=ke("h1",null,"To - Do List",-1),MV={key:0},LV=["src"],VV={key:1},FV=ke("i",{class:"ri-google-fill"},null,-1),Jf={__name:"cabecera",emits:["nuevaNota","borrarCompletadas","nuevoArchivo"],setup(t,{emit:e}){const n=Kl(),s=new Ut;let r=Fn(n.currentUser);r&&r.uid;const i=CI();function o(){console.log("iniciarSesion"),xS(n,s).then(l=>{Ut.credentialFromResult(l).accessToken;const u=l.user;console.log(u.displayName),i.push("/privada")}).catch(l=>{l.code,l.message,l.customData.email,Ut.credentialFromError(l)})}function a(){gS(n).then(()=>{r=null,console.log("sesion cerrada"),i.push("/")}).catch(l=>{})}return(l,c)=>{const u=Ba("RouterLink"),h=Ba("RouterView");return Ot(),Qt("header",DV,[xV,ze(r)?(Ot(),Qt("ul",MV,[ke("p",null,"Bienvenido, "+Ai(ze(r).displayName)+".",1),ke("img",{class:"foto",src:ze(r).photoURL,alt:""},null,8,LV),ke("button",{onClick:a},"Cerrar Sesión")])):(Ot(),Qt("ul",VV,[Ne(u,{to:"/iniciarsesion"},{default:Mi(()=>[as("Iniciar Sesion")]),_:1}),Ne(h),ke("button",{onClick:o},[as("Iniciar Sesion con "),FV])]))])}}},UV=["onClick"],BV=["onClick"],$V=["onClick"],jV=["onClick"],qV=["onUpdate:modelValue","onClick"],WV={key:0},HV=["onClick"],zV={__name:"cuerpo",setup(t){let e=wL(),s=Kl().currentUser.uid;console.log(s);const r=Ma(e,"todos"),i=TL(Wm(r,Hm("idUsuario","==",s)));async function o(T){console.log("subirAdjunto");const I=T.target.files[0];console.log(I.name);const E=lL(),$=aL(E,I.name),X=await iL($,I);l=await oL(X.ref),console.log("URL",l)}let a="",l="";function c(T,I,E){console.log(I),Xx(Ma(e,"todos"),{idUsuario:E,texto:T,URL:I,prioridad:"baja",completada:!1,fecha:new Date}).then($=>{console.log("Document written with ID: ",$.id)})}function u(T,I){const E=vr(e,"todos",T);I?I=!1:I=!0,ya(E,{completada:I}),console.log("marcarCompletada con id"+T)}async function h(){const T=Wm(Ma(e,"todos"),Hm("completada","==",!0));(await getDocs(T)).forEach(E=>{Gm(E.ref)}),console.log("borrarCompletadas")}function d(T){Gm(vr(e,"todos",T)),console.log("eliminarNota con id"+T)}function f(T){const I=vr(e,"todos",T);ya(I,{prioridad:"baja"}),console.log("subirPrioridad con id"+T)}function m(T){const I=vr(e,"todos",T);ya(I,{prioridad:"media"}),console.log("subirPrioridad con id"+T)}function y(T){const I=vr(e,"todos",T);ya(I,{prioridad:"alta"}),console.log("subirPrioridad con id"+T)}function v(T){const I=Date.now(),E=T.seconds*1e3,$=Math.abs(I-E);return Math.floor($/6e4)}function C(T){window.open(T)}return(T,I)=>(Ot(),Qt(At,null,[Ne(Jf,{onBorrarCompletadas:h,onNuevoArchivo:o}),ke("nav",null,[gp(ke("input",{type:"text","onUpdate:modelValue":I[0]||(I[0]=E=>gt(a)?a.value=E:a=E),onKeyup:I[1]||(I[1]=zA(E=>c(ze(a),ze(l),ze(s)),["enter"])),placeholder:"Escribe tu nota",name:"contenidoNota"},null,544),[[jA,ze(a)]]),ke("button",{onClick:I[2]||(I[2]=E=>c(ze(a),ze(l),ze(s)))},"Alta Nota"),ke("input",{type:"file",id:"subirFichero",name:"adjunto",accept:"image/png, image/jpg",onChange:I[3]||(I[3]=E=>o(E))},null,32),as(),ke("button",{onClick:h},"Borrar Completadas")]),ke("ul",null,[(Ot(!0),Qt(At,null,UR(ze(i),E=>(Ot(),Qt("li",{key:E.id},[ke("h4",null,Ai(E.texto),1),ke("p",null,Ai(E.prioridad)+" Creada hace: "+Ai(v(E.fecha))+" min "+Ai(E.completada),1),ke("button",{onClick:$=>d(E.id)},"Eliminar",8,UV),ke("button",{onClick:$=>y(E.id)},"Alta",8,BV),ke("button",{onClick:$=>m(E.id)},"Media",8,$V),ke("button",{onClick:$=>f(E.id)},"Baja",8,jV),gp(ke("input",{type:"checkbox","onUpdate:modelValue":$=>E.completada=$,onClick:$=>u(E.id,E.completada),value:"Completado"},null,8,qV),[[qA,E.completada]]),E.URL!=""?(Ot(),Qt("p",WV,[as("Archivo adjunto: "),ke("button",{onClick:$=>C(E.URL)},"Ver",8,HV)])):lA("",!0)]))),128))])],64))}},KV={__name:"privada",setup(t){return OV(),(e,n)=>(Ot(),py(zV))}},GV=ke("h1",null,"LANDING PAGE",-1),QV={__name:"inicio",setup(t){const e=Kl();return new Ut,CI(),Fn(e.currentUser),(n,s)=>(Ot(),Qt(At,null,[Ne(Jf),GV],64))}},YV={};function XV(t,e){return Ot(),Qt("h1",null,"Menu Administración")}const JV=Ey(YV,[["render",XV]]),ZV=aA('<h2>Inicio de sesion</h2><main><div class="form-container"><p class="title">Login</p><form class="form"><div class="input-group"><label for="username">Username</label><input type="text" name="username" id="username" placeholder=""></div><div class="input-group"><label for="password">Password</label><input type="password" name="password" id="password" placeholder=""><div class="forgot"><a rel="noopener noreferrer" href="#">Forgot Password ?</a></div></div><button class="sign">Sign in</button></form><div class="social-message"><div class="line"></div><p class="message">Login with social accounts</p><div class="line"></div></div><div class="social-icons"><button aria-label="Log in with Google" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg></button><button aria-label="Log in with Twitter" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current"><path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path></svg></button><button aria-label="Log in with GitHub" class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-5 h-5 fill-current"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg></button></div><p class="signup">Don&#39;t have an account? <a rel="noopener noreferrer" href="#" class="">Sign up</a></p></div></main>',2),eF={__name:"iniciarsesion",setup(t){return(e,n)=>(Ot(),Qt(At,null,[Ne(Jf),ZV],64))}},tF=[{path:"/",component:QV},{path:"/privada",name:"privada",component:KV},{path:"/administracion",component:JV},{path:"/iniciarsesion",name:"iniciarsesion",component:eF}],SI=kV({history:zL(),routes:tF});let Vh=!1;SI.beforeEach((t,e)=>{if(t.path=="/privada"&&!Vh)return console.log("ruta privada"),!1});const nF=Kl();pS(nF,t=>{t?(t.uid,console.log("usuario logeado"),Vh=!0):Vh=!1});const Zf=QA(ZA);Zf.use(SL,{firebaseApp:gI,modules:[IL()]});Zf.use(SI);Zf.mount("#app");
