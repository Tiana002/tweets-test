import{s as x,P as O,j as b,G as Ee,r as T,L as We,a as Ke,_ as Ge}from"./index-03b3943c.js";function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xe}=Object.prototype,{getPrototypeOf:re}=Object,v=(e=>t=>{const n=Xe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>v(t)===e),$=e=>t=>typeof t===e,{isArray:F}=Array,D=$("undefined");function Qe(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Re=j("ArrayBuffer");function Ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Re(e.buffer),t}const Ye=$("string"),A=$("function"),Oe=$("number"),J=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,M=e=>{if(v(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=j("Date"),nt=j("File"),rt=j("Blob"),st=j("FileList"),ot=e=>J(e)&&A(e.pipe),it=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=v(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},at=j("URLSearchParams"),ct=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!D(e)&&e!==Te;function Z(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ae(t,s)||s;M(t[o])&&M(r)?t[o]=Z(t[o],r):M(r)?t[o]=Z({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&U(arguments[r],n);return t}const lt=(e,t,n,{allOwnKeys:r}={})=>(U(t,(s,o)=>{n&&A(s)?e[o]=Se(s,n):e[o]=s},{allOwnKeys:r}),e),ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),dt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ft=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},pt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ht=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Oe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},yt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},wt=j("HTMLFormElement"),gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xt=j("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Et=e=>{je(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},St=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},Rt=()=>{},Ot=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",de="0123456789",Ne={DIGIT:de,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+de},At=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return U(r,(i,l)=>{const f=n(i,s+1);!D(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},jt=j("AsyncFunction"),Nt=e=>e&&(J(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:F,isArrayBuffer:Re,isBuffer:Qe,isFormData:it,isArrayBufferView:Ze,isString:Ye,isNumber:Oe,isBoolean:et,isObject:J,isPlainObject:M,isUndefined:D,isDate:tt,isFile:nt,isBlob:rt,isRegExp:xt,isFunction:A,isStream:ot,isURLSearchParams:at,isTypedArray:mt,isFileList:st,forEach:U,merge:Z,extend:lt,trim:ct,stripBOM:ut,inherits:dt,toFlatObject:ft,kindOf:v,kindOfTest:j,endsWith:pt,toArray:ht,forEachEntry:bt,matchAll:yt,isHTMLForm:wt,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:je,freezeMethods:Et,toObjectSet:St,toCamelCase:gt,noop:Rt,toFiniteNumber:Ot,findKey:Ae,global:Te,isContextDefined:Ce,ALPHABET:Ne,generateString:At,isSpecCompliantForm:Tt,toJSONObject:Ct,isAsyncFn:jt,isThenable:Nt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pe=m.prototype,Le={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Le[e]={value:e}});Object.defineProperties(m,Le);Object.defineProperty(Pe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Pe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Pt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(s,o){return s=ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Lt(e){return a.isArray(e)&&!e.some(Y)}const kt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,y){return!a.isUndefined(y[d])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!f&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?f&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function c(u,d,y){let E=u;if(u&&!y&&typeof u=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Lt(u)||(a.isFileList(u)||a.endsWith(d,"[]"))&&(E=a.toArray(u)))return d=ke(d),E.forEach(function(L,I){!(a.isUndefined(L)||L===null)&&t.append(i===!0?fe([d],I,o):i===null?d:d+"[]",p(L))}),!1}return Y(u)?!0:(t.append(fe(y,d,o),p(u)),!1)}const h=[],w=Object.assign(kt,{defaultVisitor:c,convertValue:p,isVisitable:Y});function R(u,d){if(!a.isUndefined(u)){if(h.indexOf(u)!==-1)throw Error("Circular reference detected in "+d.join("."));h.push(u),a.forEach(u,function(E,S){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(S)?S.trim():S,d,w))===!0&&R(E,d?d.concat(S):[S])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&V(e,this,t)}const Fe=se.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ft(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Ft,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const he=Bt,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dt=typeof URLSearchParams<"u"?URLSearchParams:se,Ut=typeof FormData<"u"?FormData:null,_t=typeof Blob<"u"?Blob:null,It=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:Dt,FormData:Ut,Blob:_t},isStandardBrowserEnv:It,isStandardBrowserWebWorkerEnv:Mt,protocols:["http","https","file","blob","url","data"]};function qt(e,t){return V(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ht(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ht(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(zt(r),s,n,0)}),n}return null}function vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const oe={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return V(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),vt(t)):t}],transformResponse:[function(t){const n=this.transitional||oe.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{oe.headers[e]={}});const ie=oe,$t=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&$t[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},me=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Vt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Wt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Kt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,p){const c=B(f);if(!c)throw new Error("header name must be a non-empty string");const h=a.findKey(s,c);(!h||s[h]===void 0||p===!0||p===void 0&&s[h]!==!1)&&(s[h||f]=q(l))}const i=(l,f)=>a.forEach(l,(p,c)=>o(p,c,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Wt(t)?i(Jt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Vt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const l=t?Kt(o):String(o).trim();l!==o&&delete n[o],n[l]=q(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=B(i);r[l]||(Gt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(W.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(W);const N=W;function X(e,t){const n=this||ie,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});function Xt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Qt=C.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Zt(t)?Yt(e,t):t}const en=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function tn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function nn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const p=Date.now(),c=r[o];i||(i=p),n[s]=f,r[s]=p;let h=o,w=0;for(;h!==s;)w+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const R=c&&p-c;return R?Math.round(w*1e3/R):void 0}}function be(e,t){let n=0;const r=nn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),p=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&p?(i-o)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const rn=typeof XMLHttpRequest<"u",sn=rn&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let p;a.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(p=o.getContentType())&&o.setContentType(p.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const u=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(u+":"+d))}const h=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),Be(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const u=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:u,config:e,request:c};Xt(function(S){n(S),f()},function(S){r(S),f()},y),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||De;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,y.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},C.isStandardBrowserEnv){const u=(e.withCredentials||en(h))&&e.xsrfCookieName&&Qt.read(e.xsrfCookieName);u&&o.set(e.xsrfHeaderName,u)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,y){c.setRequestHeader(y,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=u=>{c&&(r(!u||u.type?new _(null,e,c):u),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const R=tn(h);if(R&&C.protocols.indexOf(R)===-1){r(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},ee={http:Pt,xhr:sn};a.forEach(ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ye=e=>`- ${e}`,on=e=>a.isFunction(e)||e===null||e===!1,Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!on(n)&&(r=ee[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,f])=>`adapter ${l} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ye).join(`
`):" "+ye(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ee};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function we(e){return Q(e),e.headers=N.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return _e(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof N?e.toJSON():e;function k(e,t){t=t||{};const n={};function r(p,c,h){return a.isPlainObject(p)&&a.isPlainObject(c)?a.merge.call({caseless:h},p,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(p,c,h){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p,h)}else return r(p,c,h)}function o(p,c){if(!a.isUndefined(c))return r(void 0,c)}function i(p,c){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,c)}function l(p,c,h){if(h in t)return r(p,c);if(h in e)return r(void 0,p)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(p,c)=>s(ge(p),ge(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=f[c]||s,w=h(e[c],t[c],c);a.isUndefined(w)&&h!==l||(n[c]=w)}),n}const qe="1.5.1",ae={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ae[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};ae.transitional=function(t,n,r){function s(o,i){return"[Axios v"+qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function an(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const te={assertOptions:an,validators:ae},P=te.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=N.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(f=f&&d.synchronous,l.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let c,h=0,w;if(!f){const u=[we.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,p),w=u.length,c=Promise.resolve(n);h<w;)c=c.then(u[h++],u[h++]);return c}w=l.length;let R=n;for(h=0;h<w;){const u=l[h++],d=l[h++];try{R=u(R)}catch(y){d.call(this,y);break}}try{c=we.call(this,R)}catch(u){return Promise.reject(u)}for(h=0,w=p.length;h<w;)c=c.then(p[h++],p[h++]);return c}getUri(t){t=k(this.defaults,t);const n=Ie(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(k(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const z=H;class ce{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new _(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ce(function(s){t=s}),cancel:t}}}const cn=ce;function ln(e){return function(n){return e.apply(null,n)}}function un(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});const dn=ne;function ze(e){const t=new z(e),n=Se(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ze(k(e,s))},n}const g=ze(ie);g.Axios=z;g.CanceledError=_;g.CancelToken=cn;g.isCancel=_e;g.VERSION=qe;g.toFormData=V;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=ln;g.isAxiosError=un;g.mergeConfig=k;g.AxiosHeaders=N;g.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Me.getAdapter;g.HttpStatusCode=dn;g.default=g;const le=g;le.defaults.baseURL="https://6453ab91c18adbbdfea42414.mockapi.io";const fn=async()=>{try{return await le.get("/users")}catch(e){throw new Error(e.response||"Network error")}},pn=async(e,t,n)=>{try{return await le.put(`/users/${e}`,{followers:t,following:n})}catch(r){throw new Error(r.response||"Network error")}},hn="/tweets-test/assets/logo-719476e6.svg",mn="/tweets-test/assets/picture-338b66fd.png",bn=x.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px;

  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`,yn=x.img`
  position: absolute;
  top: 20px;
  left: 20px;
`,wn=x.img`
  margin: 0 auto;
`,gn=x.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px,
    rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`,xn=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px,
    rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
  border-radius: 50%;
`,En=x.img`
  border-radius: 50%;
  overflow: hidden;
`,Sn=x.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`,Rn=x.button`
  padding: 14px 39px;
  min-width: 196px;

  font-weight: 600;
  font-size: 18px;

  border-radius: 10px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: ${e=>e.value?"#ebd8ff":"#5CD3A8"};

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${e=>e.value?"#ebd8ffae":"#5cd3a7ae"};
  }
`,He=({id:e,avatar:t,followers:n,following:r,tweets:s,user:o,onClick:i})=>b.jsxs(bn,{children:[b.jsx(yn,{src:hn,alt:"logo",loading:"lazy"}),b.jsx(wn,{src:mn,alt:"Background",loading:"lazy"}),b.jsx(gn,{children:b.jsx(xn,{children:b.jsx(En,{src:t,alt:o,width:62,height:62,loading:"lazy"})})}),b.jsxs(Sn,{children:[b.jsx("p",{children:o}),b.jsxs("p",{children:[s," TWEETS"]}),b.jsxs("p",{children:[n.toLocaleString("en-US")," FOLLOWERS"]})]}),b.jsx(Rn,{type:"button",value:r,onClick:()=>i(e,r),children:r?"Follow":"Following"})]});He.propTypes={id:O.string.isRequired,avatar:O.string.isRequired,followers:O.number.isRequired,following:O.bool.isRequired,tweets:O.number.isRequired,user:O.string.isRequired,onClick:O.func.isRequired};const On=x.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`,ve=({users:e,onClick:t})=>b.jsx(On,{children:e.map(n=>b.jsx(He,{...n,onClick:t},n.id))});ve.propTypes={users:O.array.isRequired,onClick:O.func.isRequired};const $e=Object.freeze({all:"all",follow:"follow",followings:"followings"}),{all:An,follow:Tn,followings:Cn}=$e;function jn(e){return Ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}}]})(e)}const Nn=x.div``,Pn=x.div`
    width: 140px;
`,Ln=x.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 10px;

    border-radius: 10px;

    background-color: #625df5;
&:hover {
    background-color: #6165c881;
}

    cursor: pointer;

    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,kn=x.div``,Fn=x.ul`
    position: absolute;
    display: flex;
    flex-direction: column;

    border-radius: 10px;

    background-color: #461ca9a8;

    z-index: 999;

&:first-child {
    padding-top: 0.8em;
}

&:last-child {
    padding-bottom: 0.8em;
}

    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,Bn=x.li`
    padding: 15px;

&:hover {
    background-color: #6165c881;
}
    cursor: pointer;

    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,Je=({handleFilterChange:e,resetPage:t})=>{const[n,r]=T.useState(!1),s=()=>r(!n);return b.jsx(Nn,{children:b.jsxs(Pn,{children:[b.jsxs(Ln,{onClick:s,children:["Filter ",b.jsx(jn,{})]}),n&&b.jsx(kn,{children:b.jsx(Fn,{children:Object.keys($e).map(o=>b.jsx(Bn,{type:"button",onClick:()=>{e(o),r(!1),t(1)},children:o},Math.random()))})})]})})};Je.propTypes={handleFilterChange:O.func.isRequired,resetPage:O.func.isRequired};const Dn=x.button`
    display: flex;
    justify-content: center;
    min-width: 196px;
    margin: 40px auto 0;
    padding: 14px 39px;
    background-color: #ebd8ffae;
    border-radius: 10px;
    border: none;
    transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
    background-color: #746fdcad;
}
`,Ve=({handleBtnLoadMore:e,disabled:t})=>b.jsx(Dn,{type:"button",disabled:t,onClick:()=>e(),children:t?"Load More...":"Load More"});Ve.propTypes={handleBtnLoadMore:O.func.isRequired,disabled:O.bool.isRequired};function Un(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}}]})(e)}const _n=x(We)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px;
    margin-bottom: 10px;
    width: 140px;

    border-radius: 10px;
    color: #ffffff;
    background-color: #625df5;
    transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
    background-color: #6165c881;
}
`,In=()=>b.jsxs(_n,{to:"/",children:[b.jsx(Un,{}),b.jsx("span",{children:"Back"})]}),Mn=()=>{setTimeout(()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},0)},qn=x.main`
  min-height: 75vh;
`,zn=x.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;function vn(){const[e,t]=T.useState([]),[n,r]=T.useState(1),[s,o]=T.useState("all"),[i,l]=T.useState(!0),[f,p]=T.useState(!1);T.useEffect(()=>{(async()=>{p(!0);try{const{data:y}=await fn();t(y),p(!1)}catch{Ge.error("Oops! Something went wrong! Please try again."),p(!1)}finally{p(!1)}})()},[]);const c=T.useCallback((d,y)=>{try{t(E=>E.map(S=>{if(S.id===d){const L=y?S.followers+1:S.followers-1,I={...S,followers:L,following:!S.following};return pn(d,L,I.following),I}return S}))}catch(E){console.log(E)}},[]),h=T.useCallback(d=>{o(d)},[]),w=T.useMemo(()=>{let d=e;switch(s){case An:break;case Tn:d=d.filter(E=>E.following);break;case Cn:d=d.filter(E=>!E.following);break}const y=n*3;return l(y),d.slice(0,y)},[s,n,e]),R=()=>{r(d=>d+1),Mn()},u=i===w.length;return b.jsxs(qn,{children:[b.jsxs(zn,{children:[b.jsx(In,{}),b.jsx(Je,{handleFilterChange:h,resetPage:r})]}),b.jsxs("section",{children:[b.jsx(ve,{users:w,onClick:c}),u&&b.jsx(Ve,{handleBtnLoadMore:R,disabled:f}),f&&b.jsx(Ke,{})]})]})}export{vn as default};