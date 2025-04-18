(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();var Cf={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function zS(){if(cv)return Qo;cv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(s,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:s,key:u,ref:r!==void 0?r:null,props:c}}return Qo.Fragment=t,Qo.jsx=e,Qo.jsxs=e,Qo}var uv;function FS(){return uv||(uv=1,Cf.exports=zS()),Cf.exports}var bt=FS(),Df={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function HS(){if(hv)return re;hv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(N,tt,vt){this.props=N,this.context=tt,this.refs=b,this.updater=vt||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,tt,vt){this.props=N,this.context=tt,this.refs=b,this.updater=vt||y}var L=D.prototype=new x;L.constructor=D,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(N,tt,vt,yt,J,dt){return vt=dt.ref,{$$typeof:o,type:N,key:tt,ref:vt!==void 0?vt:null,props:dt}}function W(N,tt){return B(N.type,tt,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function C(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return tt[vt]})}var G=/\/+/g;function lt(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):tt.toString(36)}function rt(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(rt,rt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,vt,yt,J){var dt=typeof N;(dt==="undefined"||dt==="boolean")&&(N=null);var xt=!1;if(N===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(N.$$typeof){case o:case t:xt=!0;break;case g:return xt=N._init,ft(xt(N._payload),tt,vt,yt,J)}}if(xt)return J=J(N),xt=yt===""?"."+lt(N,0):yt,w(J)?(vt="",xt!=null&&(vt=xt.replace(G,"$&/")+"/"),ft(J,tt,vt,"",function(le){return le})):J!=null&&(U(J)&&(J=W(J,vt+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+xt)),tt.push(J)),1;xt=0;var At=yt===""?".":yt+":";if(w(N))for(var Ot=0;Ot<N.length;Ot++)yt=N[Ot],dt=At+lt(yt,Ot),xt+=ft(yt,tt,vt,dt,J);else if(Ot=v(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(yt=N.next()).done;)yt=yt.value,dt=At+lt(yt,Ot++),xt+=ft(yt,tt,vt,dt,J);else if(dt==="object"){if(typeof N.then=="function")return ft(gt(N),tt,vt,yt,J);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function I(N,tt,vt){if(N==null)return N;var yt=[],J=0;return ft(N,yt,"","",function(dt){return tt.call(vt,dt,J++)}),yt}function Z(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return re.Children={map:I,forEach:function(N,tt,vt){I(N,function(){tt.apply(this,arguments)},vt)},count:function(N){var tt=0;return I(N,function(){tt++}),tt},toArray:function(N){return I(N,function(tt){return tt})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=S,re.Fragment=e,re.Profiler=r,re.PureComponent=D,re.StrictMode=s,re.Suspense=d,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,tt,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=E({},N.props),J=N.key,dt=void 0;if(tt!=null)for(xt in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!H.call(tt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&tt.ref===void 0||(yt[xt]=tt[xt]);var xt=arguments.length-2;if(xt===1)yt.children=vt;else if(1<xt){for(var At=Array(xt),Ot=0;Ot<xt;Ot++)At[Ot]=arguments[Ot+2];yt.children=At}return B(N.type,J,void 0,void 0,dt,yt)},re.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,tt,vt){var yt,J={},dt=null;if(tt!=null)for(yt in tt.key!==void 0&&(dt=""+tt.key),tt)H.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(J[yt]=tt[yt]);var xt=arguments.length-2;if(xt===1)J.children=vt;else if(1<xt){for(var At=Array(xt),Ot=0;Ot<xt;Ot++)At[Ot]=arguments[Ot+2];J.children=At}if(N&&N.defaultProps)for(yt in xt=N.defaultProps,xt)J[yt]===void 0&&(J[yt]=xt[yt]);return B(N,dt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=U,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},re.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},re.startTransition=function(N){var tt=z.T,vt={};z.T=vt;try{var yt=N(),J=z.S;J!==null&&J(vt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Mt,q)}catch(dt){q(dt)}finally{z.T=tt}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(N){return z.H.use(N)},re.useActionState=function(N,tt,vt){return z.H.useActionState(N,tt,vt)},re.useCallback=function(N,tt){return z.H.useCallback(N,tt)},re.useContext=function(N){return z.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,tt){return z.H.useDeferredValue(N,tt)},re.useEffect=function(N,tt,vt){var yt=z.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,tt)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(N,tt,vt){return z.H.useImperativeHandle(N,tt,vt)},re.useInsertionEffect=function(N,tt){return z.H.useInsertionEffect(N,tt)},re.useLayoutEffect=function(N,tt){return z.H.useLayoutEffect(N,tt)},re.useMemo=function(N,tt){return z.H.useMemo(N,tt)},re.useOptimistic=function(N,tt){return z.H.useOptimistic(N,tt)},re.useReducer=function(N,tt,vt){return z.H.useReducer(N,tt,vt)},re.useRef=function(N){return z.H.useRef(N)},re.useState=function(N){return z.H.useState(N)},re.useSyncExternalStore=function(N,tt,vt){return z.H.useSyncExternalStore(N,tt,vt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.1.0",re}var fv;function dp(){return fv||(fv=1,Df.exports=HS()),Df.exports}var yd=dp(),Lf={exports:{}},Jo={},Uf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function VS(){return dv||(dv=1,function(o){function t(I,Z){var q=I.length;I.push(Z);t:for(;0<q;){var Mt=q-1>>>1,N=I[Mt];if(0<r(N,Z))I[Mt]=Z,I[q]=N,q=Mt;else break t}}function e(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Z=I[0],q=I.pop();if(q!==Z){I[0]=q;t:for(var Mt=0,N=I.length,tt=N>>>1;Mt<tt;){var vt=2*(Mt+1)-1,yt=I[vt],J=vt+1,dt=I[J];if(0>r(yt,q))J<N&&0>r(dt,yt)?(I[Mt]=dt,I[J]=q,Mt=J):(I[Mt]=yt,I[vt]=q,Mt=vt);else if(J<N&&0>r(dt,q))I[Mt]=dt,I[J]=q,Mt=J;else break t}}return Z}function r(I,Z){var q=I.sortIndex-Z.sortIndex;return q!==0?q:I.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,y=!1,E=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var Z=e(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=I)s(p),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=e(p)}}function z(I){if(b=!1,w(I),!E)if(e(d)!==null)E=!0,H||(H=!0,lt());else{var Z=e(p);Z!==null&&ft(z,Z.startTime-I)}}var H=!1,B=-1,W=5,U=-1;function C(){return S?!0:!(o.unstable_now()-U<W)}function G(){if(S=!1,H){var I=o.unstable_now();U=I;var Z=!0;try{t:{E=!1,b&&(b=!1,D(B),B=-1),y=!0;var q=v;try{e:{for(w(I),_=e(d);_!==null&&!(_.expirationTime>I&&C());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,v=_.priorityLevel;var N=Mt(_.expirationTime<=I);if(I=o.unstable_now(),typeof N=="function"){_.callback=N,w(I),Z=!0;break e}_===e(d)&&s(d),w(I)}else s(d);_=e(d)}if(_!==null)Z=!0;else{var tt=e(p);tt!==null&&ft(z,tt.startTime-I),Z=!1}}break t}finally{_=null,v=q,y=!1}Z=void 0}}finally{Z?lt():H=!1}}}var lt;if(typeof L=="function")lt=function(){L(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=G,lt=function(){gt.postMessage(null)}}else lt=function(){x(G,0)};function ft(I,Z){B=x(function(){I(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var q=v;v=Z;try{return I()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return Z()}finally{v=q}},o.unstable_scheduleCallback=function(I,Z,q){var Mt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,I={id:g++,callback:Z,priorityLevel:I,startTime:q,expirationTime:N,sortIndex:-1},q>Mt?(I.sortIndex=q,t(p,I),e(d)===null&&I===e(p)&&(b?(D(B),B=-1):b=!0,ft(z,q-Mt))):(I.sortIndex=N,t(d,I),E||y||(E=!0,H||(H=!0,lt()))),I},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(I){var Z=v;return function(){var q=v;v=Z;try{return I.apply(this,arguments)}finally{v=q}}}}(Nf)),Nf}var pv;function GS(){return pv||(pv=1,Uf.exports=VS()),Uf.exports}var Of={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function kS(){if(mv)return Pn;mv=1;var o=dp();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var s={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Pn.flushSync=function(d){var p=u.T,g=s.p;try{if(u.T=null,s.p=2,d)return d()}finally{u.T=p,s.p=g,s.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(d)},Pn.requestFormReset=function(d){s.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.1.0",Pn}var gv;function XS(){if(gv)return Of.exports;gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=kS(),Of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function WS(){if(_v)return Jo;_v=1;var o=GS(),t=dp(),e=XS();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(s(188))}function d(n){var i=n.alternate;if(!i){if(i=c(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return h(f),n;if(m===l)return h(f),i;m=m.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=m;else{for(var M=!1,T=f.child;T;){if(T===a){M=!0,a=f,l=m;break}if(T===l){M=!0,l=f,a=m;break}T=T.sibling}if(!M){for(T=m.child;T;){if(T===a){M=!0,a=m,l=f;break}if(T===l){M=!0,l=m,a=f;break}T=T.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Symbol.for("react.client.reference");function gt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===rt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case z:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case L:return(n.displayName||"Context")+".Provider";case D:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case B:return i=n.displayName||null,i!==null?i:gt(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return gt(n(i))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],N=-1;function tt(n){return{current:n}}function vt(n){0>N||(n.current=Mt[N],Mt[N]=null,N--)}function yt(n,i){N++,Mt[N]=n.current,n.current=i}var J=tt(null),dt=tt(null),xt=tt(null),At=tt(null);function Ot(n,i){switch(yt(xt,i),yt(dt,n),yt(J,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?B_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=B_(i),n=z_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}vt(J),yt(J,n)}function le(){vt(J),vt(dt),vt(xt)}function Kt(n){n.memoizedState!==null&&yt(At,n);var i=J.current,a=z_(i,n.type);i!==a&&(yt(dt,n),yt(J,a))}function We(n){dt.current===n&&(vt(J),vt(dt)),At.current===n&&(vt(At),Yo._currentValue=q)}var Ge=Object.prototype.hasOwnProperty,de=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Xn=o.unstable_shouldYield,xe=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,Pe=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,O=o.unstable_NormalPriority,A=o.unstable_LowPriority,et=o.unstable_IdlePriority,_t=o.log,St=o.unstable_setDisableYieldValue,ut=null,Bt=null;function Rt(n){if(typeof _t=="function"&&St(n),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(ut,n)}catch{}}var wt=Math.clz32?Math.clz32:Ft,ye=Math.log,Tt=Math.LN2;function Ft(n){return n>>>=0,n===0?32:31-(ye(n)/Tt|0)|0}var jt=256,Zt=4194304;function Pt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ue(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,M=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?f=Pt(l):(M&=T,M!==0?f=Pt(M):a||(a=T&~n,a!==0&&(f=Pt(a))))):(T=l&~m,T!==0?f=Pt(T):M!==0?f=Pt(M):a||(a=l&~n,a!==0&&(f=Pt(a)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,a=i&-i,m>=a||m===32&&(a&4194048)!==0)?i:f}function ee(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Ie(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var n=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),n}function Ut(){var n=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),n}function ot(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function pt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function It(n,i,a,l,f,m){var M=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,P=n.expirationTimes,$=n.hiddenUpdates;for(a=M&~a;0<a;){var ct=31-wt(a),mt=1<<ct;T[ct]=0,P[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~mt}l!==0&&Nt(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(M&~i))}function Nt(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-wt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function ie(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-wt(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function Ye(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function rn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ae(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:iv(n.type))}function ti(n,i){var a=Z.p;try{return Z.p=n,i()}finally{Z.p=a}}var yn=Math.random().toString(36).slice(2),fn="__reactFiber$"+yn,Rn="__reactProps$"+yn,Wn="__reactContainer$"+yn,da="__reactEvents$"+yn,Tl="__reactListeners$"+yn,Al="__reactHandles$"+yn,pa="__reactResources$"+yn,As="__reactMarker$"+yn;function Rs(n){delete n[fn],delete n[Rn],delete n[da],delete n[Tl],delete n[Al]}function Yi(n){var i=n[fn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Wn]||a[fn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=G_(n);n!==null;){if(a=n[fn])return a;n=G_(n)}return i}n=a,a=n.parentNode}return null}function ji(n){if(n=n[fn]||n[Wn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function ma(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function ws(n){var i=n[pa];return i||(i=n[pa]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(n){n[As]=!0}var Rl=new Set,wl={};function qi(n,i){R(n,i),R(n+"Capture",i)}function R(n,i){for(wl[n]=i,n=0;n<i.length;n++)Rl.add(i[n])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},at={};function K(n){return Ge.call(at,n)?!0:Ge.call(st,n)?!1:j.test(n)?at[n]=!0:(st[n]=!0,!1)}function Et(n,i,a){if(K(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Ct(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Dt(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var zt,Jt;function Wt(n){if(zt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);zt=i&&i[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+n+Jt}var kt=!1;function me(n,i){if(!n||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(n,[],mt)}else{try{mt.call()}catch(it){nt=it}n.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=n())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],T=m[1];if(M&&T){var P=M.split(`
`),$=T.split(`
`);for(f=l=0;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===P.length||f===$.length)for(l=P.length-1,f=$.length-1;1<=l&&0<=f&&P[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(P[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||P[l]!==$[f]){var ct=`
`+P[l].replace(" at new "," at ");return n.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",n.displayName)),ct}while(1<=l&&0<=f);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Wt(a):""}function Re(n){switch(n.tag){case 26:case 27:case 5:return Wt(n.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return me(n.type,!1);case 11:return me(n.type.render,!1);case 1:return me(n.type,!0);case 31:return Wt("Activity");default:return""}}function Ze(n){try{var i="";do i+=Re(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yt(n){var i=Me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=Yt(n))}function Te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=Me(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Un(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Cs=/[\n"\\]/g;function je(n){return n.replace(Cs,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ki(n,i,a,l,f,m,M,T){n.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.type=M:n.removeAttribute("type"),i!=null?M==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+Se(i)):n.value!==""+Se(i)&&(n.value=""+Se(i)):M!=="submit"&&M!=="reset"||n.removeAttribute("value"),i!=null?Nn(n,M,Se(i)):a!=null?Nn(n,M,Se(a)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+Se(T):n.removeAttribute("name")}function ke(n,i,a,l,f,m,M,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;a=a!=null?""+Se(a):"",i=i!=null?""+Se(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(n.name=M)}function Nn(n,i,a){i==="number"&&Un(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function dn(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Sn(n,i,a){if(i!=null&&(i=""+Se(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+Se(a):""}function wn(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(ft(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Se(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Ui(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bp(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Zi.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function zp(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&Bp(n,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Bp(n,m,i[m])}function Ru(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cl(n){return Bx.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var wu=null;function Cu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ya=null,ja=null;function Fp(n){var i=ji(n);if(i&&(n=i.stateNode)){var a=n[Rn]||null;t:switch(n=i.stateNode,i.type){case"input":if(Ki(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Rn]||null;if(!f)throw Error(s(90));Ki(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&Te(l)}break t;case"textarea":Sn(n,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&dn(n,!!a.multiple,i,!1)}}}var Du=!1;function Hp(n,i,a){if(Du)return n(i,a);Du=!0;try{var l=n(i);return l}finally{if(Du=!1,(Ya!==null||ja!==null)&&(pc(),Ya&&(i=Ya,n=ja,ja=Ya=null,Fp(i),n)))for(i=0;i<n.length;i++)Fp(n[i])}}function so(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Rn]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break t;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Qi)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Lu=!1}var Ds=null,Uu=null,Dl=null;function Vp(){if(Dl)return Dl;var n,i=Uu,a=i.length,l,f="value"in Ds?Ds.value:Ds.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(l=1;l<=M&&i[a-l]===f[m-l];l++);return Dl=f.slice(n,1<l?1-l:void 0)}function Ll(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ul(){return!0}function Gp(){return!1}function Yn(n){function i(a,l,f,m,M){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ul:Gp,this.isPropagationStopped=Gp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),i}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Yn(ga),ro=g({},ga,{view:0,detail:0}),zx=Yn(ro),Nu,Ou,oo,Ol=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==oo&&(oo&&n.type==="mousemove"?(Nu=n.screenX-oo.screenX,Ou=n.screenY-oo.screenY):Ou=Nu=0,oo=n),Nu)},movementY:function(n){return"movementY"in n?n.movementY:Ou}}),kp=Yn(Ol),Fx=g({},Ol,{dataTransfer:0}),Hx=Yn(Fx),Vx=g({},ro,{relatedTarget:0}),Pu=Yn(Vx),Gx=g({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),kx=Yn(Gx),Xx=g({},ga,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wx=Yn(Xx),Yx=g({},ga,{data:0}),Xp=Yn(Yx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Kx[n])?!!i[n]:!1}function Iu(){return Zx}var Qx=g({},ro,{key:function(n){if(n.key){var i=jx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ll(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(n){return n.type==="keypress"?Ll(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ll(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jx=Yn(Qx),$x=g({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Yn($x),ty=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),ey=Yn(ty),ny=g({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Yn(ny),sy=g({},Ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Yn(sy),ry=g({},ga,{newState:0,oldState:0}),oy=Yn(ry),ly=[9,13,27,32],Bu=Qi&&"CompositionEvent"in window,lo=null;Qi&&"documentMode"in document&&(lo=document.documentMode);var cy=Qi&&"TextEvent"in window&&!lo,Yp=Qi&&(!Bu||lo&&8<lo&&11>=lo),jp=" ",qp=!1;function Kp(n,i){switch(n){case"keyup":return ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qa=!1;function uy(n,i){switch(n){case"compositionend":return Zp(i);case"keypress":return i.which!==32?null:(qp=!0,jp);case"textInput":return n=i.data,n===jp&&qp?null:n;default:return null}}function hy(n,i){if(qa)return n==="compositionend"||!Bu&&Kp(n,i)?(n=Vp(),Dl=Uu=Ds=null,qa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yp&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fy[n.type]:i==="textarea"}function Jp(n,i,a,l){Ya?ja?ja.push(l):ja=[l]:Ya=l,i=yc(i,"onChange"),0<i.length&&(a=new Nl("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var co=null,uo=null;function dy(n){U_(n,0)}function Pl(n){var i=ma(n);if(Te(i))return n}function $p(n,i){if(n==="change")return i}var tm=!1;if(Qi){var zu;if(Qi){var Fu="oninput"in document;if(!Fu){var em=document.createElement("div");em.setAttribute("oninput","return;"),Fu=typeof em.oninput=="function"}zu=Fu}else zu=!1;tm=zu&&(!document.documentMode||9<document.documentMode)}function nm(){co&&(co.detachEvent("onpropertychange",im),uo=co=null)}function im(n){if(n.propertyName==="value"&&Pl(uo)){var i=[];Jp(i,uo,n,Cu(n)),Hp(dy,i)}}function py(n,i,a){n==="focusin"?(nm(),co=i,uo=a,co.attachEvent("onpropertychange",im)):n==="focusout"&&nm()}function my(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(uo)}function gy(n,i){if(n==="click")return Pl(i)}function _y(n,i){if(n==="input"||n==="change")return Pl(i)}function vy(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ei=typeof Object.is=="function"?Object.is:vy;function ho(n,i){if(ei(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Ge.call(i,f)||!ei(n[f],i[f]))return!1}return!0}function sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function am(n,i){var a=sm(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=sm(a)}}function rm(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?rm(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function om(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Un(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Un(n.document)}return i}function Hu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var xy=Qi&&"documentMode"in document&&11>=document.documentMode,Ka=null,Vu=null,fo=null,Gu=!1;function lm(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||Ka==null||Ka!==Un(l)||(l=Ka,"selectionStart"in l&&Hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&ho(fo,l)||(fo=l,l=yc(Vu,"onSelect"),0<l.length&&(i=new Nl("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Ka)))}function _a(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Za={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},ku={},cm={};Qi&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function va(n){if(ku[n])return ku[n];if(!Za[n])return n;var i=Za[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cm)return ku[n]=i[a];return n}var um=va("animationend"),hm=va("animationiteration"),fm=va("animationstart"),yy=va("transitionrun"),Sy=va("transitionstart"),My=va("transitioncancel"),dm=va("transitionend"),pm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Si(n,i){pm.set(n,i),qi(i,[n])}var mm=new WeakMap;function hi(n,i){if(typeof n=="object"&&n!==null){var a=mm.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Ze(i)},mm.set(n,i),i)}return{value:n,source:i,stack:Ze(i)}}var fi=[],Qa=0,Wu=0;function Il(){for(var n=Qa,i=Wu=Qa=0;i<n;){var a=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&gm(a,f,m)}}function Bl(n,i,a,l){fi[Qa++]=n,fi[Qa++]=i,fi[Qa++]=a,fi[Qa++]=l,Wu|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Yu(n,i,a,l){return Bl(n,i,a,l),zl(n)}function Ja(n,i){return Bl(n,null,null,i),zl(n)}function gm(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&i!==null&&(f=31-wt(a),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),m):null}function zl(n){if(50<zo)throw zo=0,Jh=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var $a={};function Ey(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,a,l){return new Ey(n,i,a,l)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ji(n,i){var a=n.alternate;return a===null?(a=ni(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function _m(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Fl(n,i,a,l,f,m){var M=0;if(l=n,typeof n=="function")ju(n)&&(M=1);else if(typeof n=="string")M=TS(n,a,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case U:return n=ni(31,a,i,f),n.elementType=U,n.lanes=m,n;case E:return xa(a.children,f,m,i);case b:M=8,f|=24;break;case S:return n=ni(12,a,i,f|2),n.elementType=S,n.lanes=m,n;case z:return n=ni(13,a,i,f),n.elementType=z,n.lanes=m,n;case H:return n=ni(19,a,i,f),n.elementType=H,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case L:M=10;break t;case D:M=9;break t;case w:M=11;break t;case B:M=14;break t;case W:M=16,l=null;break t}M=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=ni(M,a,i,f),i.elementType=n,i.type=l,i.lanes=m,i}function xa(n,i,a,l){return n=ni(7,n,l,i),n.lanes=a,n}function qu(n,i,a){return n=ni(6,n,null,i),n.lanes=a,n}function Ku(n,i,a){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var tr=[],er=0,Hl=null,Vl=0,di=[],pi=0,ya=null,$i=1,ts="";function Sa(n,i){tr[er++]=Vl,tr[er++]=Hl,Hl=n,Vl=i}function vm(n,i,a){di[pi++]=$i,di[pi++]=ts,di[pi++]=ya,ya=n;var l=$i;n=ts;var f=32-wt(l)-1;l&=~(1<<f),a+=1;var m=32-wt(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,$i=1<<32-wt(i)+f|a<<f|l,ts=m+n}else $i=1<<m|a<<f|l,ts=n}function Zu(n){n.return!==null&&(Sa(n,1),vm(n,1,0))}function Qu(n){for(;n===Hl;)Hl=tr[--er],tr[er]=null,Vl=tr[--er],tr[er]=null;for(;n===ya;)ya=di[--pi],di[pi]=null,ts=di[--pi],di[pi]=null,$i=di[--pi],di[pi]=null}var Fn=null,tn=null,De=!1,Ma=null,Ni=!1,Ju=Error(s(519));function Ea(n){var i=Error(s(418,""));throw go(hi(i,n)),Ju}function xm(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[fn]=n,i[Rn]=l,a){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(a=0;a<Ho.length;a++)_e(Ho[a],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),ke(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),$e(i);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),wn(i,l.value,l.defaultValue,l.children),$e(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||I_(i.textContent,a)?(l.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),l.onScroll!=null&&_e("scroll",i),l.onScrollEnd!=null&&_e("scrollend",i),l.onClick!=null&&(i.onclick=Sc),i=!0):i=!1,i||Ea(n)}function ym(n){for(Fn=n.return;Fn;)switch(Fn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Fn=Fn.return}}function po(n){if(n!==Fn)return!1;if(!De)return ym(n),De=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||mf(n.type,n.memoizedProps)),a=!a),a&&tn&&Ea(n),ym(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){tn=Ei(n.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}tn=null}}else i===27?(i=tn,Ys(n.type)?(n=xf,xf=null,tn=n):tn=i):tn=Fn?Ei(n.stateNode.nextSibling):null;return!0}function mo(){tn=Fn=null,De=!1}function Sm(){var n=Ma;return n!==null&&(Kn===null?Kn=n:Kn.push.apply(Kn,n),Ma=null),n}function go(n){Ma===null?Ma=[n]:Ma.push(n)}var $u=tt(null),ba=null,es=null;function Ls(n,i,a){yt($u,i._currentValue),i._currentValue=a}function ns(n){n._currentValue=$u.current,vt($u)}function th(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function eh(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var T=m;m=f;for(var P=0;P<i.length;P++)if(T.context===i[P]){m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),th(m.return,a,n),l||(M=null);break t}m=T.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=a,m=M.alternate,m!==null&&(m.lanes|=a),th(M,a,n),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===n){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function _o(n,i,a,l){n=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var T=f.type;ei(f.pendingProps.value,M.value)||(n!==null?n.push(T):n=[T])}}else if(f===At.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Yo):n=[Yo])}f=f.return}n!==null&&eh(i,n,a,l),i.flags|=262144}function Gl(n){for(n=n.firstContext;n!==null;){if(!ei(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ta(n){ba=n,es=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function On(n){return Mm(ba,n)}function kl(n,i){return ba===null&&Ta(n),Mm(n,i)}function Mm(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},es===null){if(n===null)throw Error(s(308));es=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else es=es.next=i;return a}var by=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},Ty=o.unstable_scheduleCallback,Ay=o.unstable_NormalPriority,pn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nh(){return{controller:new by,data:new Map,refCount:0}}function vo(n){n.refCount--,n.refCount===0&&Ty(Ay,function(){n.controller.abort()})}var xo=null,ih=0,nr=0,ir=null;function Ry(n,i){if(xo===null){var a=xo=[];ih=0,nr=rf(),ir={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ih++,i.then(Em,Em),i}function Em(){if(--ih===0&&xo!==null){ir!==null&&(ir.status="fulfilled");var n=xo;xo=null,nr=0,ir=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function wy(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var bm=I.S;I.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ry(n,i),bm!==null&&bm(n,i)};var Aa=tt(null);function sh(){var n=Aa.current;return n!==null?n:qe.pooledCache}function Xl(n,i){i===null?yt(Aa,Aa.current):yt(Aa,i.pool)}function Tm(){var n=sh();return n===null?null:{parent:pn._currentValue,pool:n}}var yo=Error(s(460)),Am=Error(s(474)),Wl=Error(s(542)),ah={then:function(){}};function Rm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Yl(){}function wm(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Yl,Yl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Dm(n),n;default:if(typeof i.status=="string")i.then(Yl,Yl);else{if(n=qe,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Dm(n),n}throw So=i,yo}}var So=null;function Cm(){if(So===null)throw Error(s(459));var n=So;return So=null,n}function Dm(n){if(n===yo||n===Wl)throw Error(s(483))}var Us=!1;function rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ns(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Os(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=zl(n),gm(n,null,a),i}return Bl(n,l,i,a),zl(n)}function Mo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ie(n,a)}}function lh(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var ch=!1;function Eo(){if(ch){var n=ir;if(n!==null)throw n}}function bo(n,i,a,l){ch=!1;var f=n.updateQueue;Us=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var P=T,$=P.next;P.next=null,M===null?m=$:M.next=$,M=P;var ct=n.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==M&&(T===null?ct.firstBaseUpdate=$:T.next=$,ct.lastBaseUpdate=P))}if(m!==null){var mt=f.baseState;M=0,ct=$=P=null,T=m;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(be&nt)===nt:(l&nt)===nt){nt!==0&&nt===nr&&(ch=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var $t=n,qt=T;nt=i;var Fe=a;switch(qt.tag){case 1:if($t=qt.payload,typeof $t=="function"){mt=$t.call(Fe,mt,nt);break t}mt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=qt.payload,nt=typeof $t=="function"?$t.call(Fe,mt,nt):$t,nt==null)break t;mt=g({},mt,nt);break t;case 2:Us=!0}}nt=T.callback,nt!==null&&(n.flags|=64,it&&(n.flags|=8192),it=f.callbacks,it===null?f.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?($=ct=it,P=mt):ct=ct.next=it,M|=nt;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;it=T,T=it.next,it.next=null,f.lastBaseUpdate=it,f.shared.pending=null}}while(!0);ct===null&&(P=mt),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=ct,m===null&&(f.shared.lanes=0),Gs|=M,n.lanes=M,n.memoizedState=mt}}function Lm(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function Um(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Lm(a[n],i)}var sr=tt(null),jl=tt(0);function Nm(n,i){n=cs,yt(jl,n),yt(sr,i),cs=n|i.baseLanes}function uh(){yt(jl,cs),yt(sr,sr.current)}function hh(){cs=jl.current,vt(sr),vt(jl)}var Ps=0,he=null,Be=null,ln=null,ql=!1,ar=!1,Ra=!1,Kl=0,To=0,rr=null,Cy=0;function nn(){throw Error(s(321))}function fh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ei(n[a],i[a]))return!1;return!0}function dh(n,i,a,l,f,m){return Ps=m,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=n===null||n.memoizedState===null?gg:_g,Ra=!1,m=a(l,f),Ra=!1,ar&&(m=Pm(i,a,l,f)),Om(n),m}function Om(n){I.H=ec;var i=Be!==null&&Be.next!==null;if(Ps=0,ln=Be=he=null,ql=!1,To=0,rr=null,i)throw Error(s(300));n===null||Mn||(n=n.dependencies,n!==null&&Gl(n)&&(Mn=!0))}function Pm(n,i,a,l){he=n;var f=0;do{if(ar&&(rr=null),To=0,ar=!1,25<=f)throw Error(s(301));if(f+=1,ln=Be=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=Iy,m=i(a,l)}while(ar);return m}function Dy(){var n=I.H,i=n.useState()[0];return i=typeof i.then=="function"?Ao(i):i,n=n.useState()[0],(Be!==null?Be.memoizedState:null)!==n&&(he.flags|=1024),i}function ph(){var n=Kl!==0;return Kl=0,n}function mh(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function gh(n){if(ql){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ql=!1}Ps=0,ln=Be=he=null,ar=!1,To=Kl=0,rr=null}function jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?he.memoizedState=ln=n:ln=ln.next=n,ln}function cn(){if(Be===null){var n=he.alternate;n=n!==null?n.memoizedState:null}else n=Be.next;var i=ln===null?he.memoizedState:ln.next;if(i!==null)ln=i,Be=n;else{if(n===null)throw he.alternate===null?Error(s(467)):Error(s(310));Be=n,n={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ln===null?he.memoizedState=ln=n:ln=ln.next=n}return ln}function _h(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(n){var i=To;return To+=1,rr===null&&(rr=[]),n=wm(rr,n,i),i=he,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?gg:_g),n}function Zl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ao(n);if(n.$$typeof===L)return On(n)}throw Error(s(438,String(n)))}function vh(n){var i=null,a=he.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=_h(),he.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=C;return i.index++,a}function is(n,i){return typeof i=="function"?i(n):i}function Ql(n){var i=cn();return xh(i,Be,n)}function xh(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{i=f.next;var T=M=null,P=null,$=i,ct=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(be&mt)===mt:(Ps&mt)===mt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===nr&&(ct=!0);else if((Ps&nt)===nt){$=$.next,nt===nr&&(ct=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=mt,M=m):P=P.next=mt,he.lanes|=nt,Gs|=nt;mt=$.action,Ra&&a(m,mt),m=$.hasEagerState?$.eagerState:a(m,mt)}else nt={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=nt,M=m):P=P.next=nt,he.lanes|=mt,Gs|=mt;$=$.next}while($!==null&&$!==i);if(P===null?M=m:P.next=T,!ei(m,n.memoizedState)&&(Mn=!0,ct&&(a=ir,a!==null)))throw a;n.memoizedState=m,n.baseState=M,n.baseQueue=P,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function yh(n){var i=cn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);ei(m,i.memoizedState)||(Mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,l]}function Im(n,i,a){var l=he,f=cn(),m=De;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=i();var M=!ei((Be||f).memoizedState,a);M&&(f.memoizedState=a,Mn=!0),f=f.queue;var T=Fm.bind(null,l,f,n);if(Ro(2048,8,T,[n]),f.getSnapshot!==i||M||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,or(9,Jl(),zm.bind(null,l,f,a,i),null),qe===null)throw Error(s(349));m||(Ps&124)!==0||Bm(l,i,a)}return a}function Bm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=he.updateQueue,i===null?(i=_h(),he.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function zm(n,i,a,l){i.value=a,i.getSnapshot=l,Hm(i)&&Vm(n)}function Fm(n,i,a){return a(function(){Hm(i)&&Vm(n)})}function Hm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ei(n,a)}catch{return!0}}function Vm(n){var i=Ja(n,2);i!==null&&oi(i,n,2)}function Sh(n){var i=jn();if(typeof n=="function"){var a=n;if(n=a(),Ra){Rt(!0);try{a()}finally{Rt(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},i}function Gm(n,i,a,l){return n.baseState=a,xh(n,Be,typeof l=="function"?l:is)}function Ly(n,i,a,l,f){if(tc(n))throw Error(s(485));if(n=i.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};I.T!==null?a(!0):m.isTransition=!1,l(m),a=i.pending,a===null?(m.next=i.pending=m,km(i,m)):(m.next=a.next,i.pending=a.next=m)}}function km(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var m=I.T,M={};I.T=M;try{var T=a(f,l),P=I.S;P!==null&&P(M,T),Xm(n,i,T)}catch($){Mh(n,i,$)}finally{I.T=m}}else try{m=a(f,l),Xm(n,i,m)}catch($){Mh(n,i,$)}}function Xm(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wm(n,i,l)},function(l){return Mh(n,i,l)}):Wm(n,i,a)}function Wm(n,i,a){i.status="fulfilled",i.value=a,Ym(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,km(n,a)))}function Mh(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ym(i),i=i.next;while(i!==l)}n.action=null}function Ym(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function jm(n,i){return i}function qm(n,i){if(De){var a=qe.formState;if(a!==null){t:{var l=he;if(De){if(tn){e:{for(var f=tn,m=Ni;f.nodeType!==8;){if(!m){f=null;break e}if(f=Ei(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){tn=Ei(f.nextSibling),l=f.data==="F!";break t}}Ea(l)}l=!1}l&&(i=a[0])}}return a=jn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:i},a.queue=l,a=dg.bind(null,he,l),l.dispatch=a,l=Sh(!1),m=Rh.bind(null,he,!1,l.queue),l=jn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=Ly.bind(null,he,f,m,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function Km(n){var i=cn();return Zm(i,Be,n)}function Zm(n,i,a){if(i=xh(n,i,jm)[0],n=Ql(is)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ao(i)}catch(M){throw M===yo?Wl:M}else l=i;i=cn();var f=i.queue,m=f.dispatch;return a!==i.memoizedState&&(he.flags|=2048,or(9,Jl(),Uy.bind(null,f,a),null)),[l,m,n]}function Uy(n,i){n.action=i}function Qm(n){var i=cn(),a=Be;if(a!==null)return Zm(i,a,n);cn(),i=i.memoizedState,a=cn();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function or(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=he.updateQueue,i===null&&(i=_h(),he.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Jl(){return{destroy:void 0,resource:void 0}}function Jm(){return cn().memoizedState}function $l(n,i,a,l){var f=jn();l=l===void 0?null:l,he.flags|=n,f.memoizedState=or(1|i,Jl(),a,l)}function Ro(n,i,a,l){var f=cn();l=l===void 0?null:l;var m=f.memoizedState.inst;Be!==null&&l!==null&&fh(l,Be.memoizedState.deps)?f.memoizedState=or(i,m,a,l):(he.flags|=n,f.memoizedState=or(1|i,m,a,l))}function $m(n,i){$l(8390656,8,n,i)}function tg(n,i){Ro(2048,8,n,i)}function eg(n,i){return Ro(4,2,n,i)}function ng(n,i){return Ro(4,4,n,i)}function ig(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sg(n,i,a){a=a!=null?a.concat([n]):null,Ro(4,4,ig.bind(null,i,n),a)}function Eh(){}function ag(n,i){var a=cn();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&fh(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function rg(n,i){var a=cn();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&fh(i,l[1]))return l[0];if(l=n(),Ra){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[l,i],l}function bh(n,i,a){return a===void 0||(Ps&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=c_(),he.lanes|=n,Gs|=n,a)}function og(n,i,a,l){return ei(a,i)?a:sr.current!==null?(n=bh(n,a,l),ei(n,i)||(Mn=!0),n):(Ps&42)===0?(Mn=!0,n.memoizedState=a):(n=c_(),he.lanes|=n,Gs|=n,i)}function lg(n,i,a,l,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=I.T,T={};I.T=T,Rh(n,!1,i,a);try{var P=f(),$=I.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=wy(P,l);wo(n,i,ct,ri(n))}else wo(n,i,l,ri(n))}catch(mt){wo(n,i,{then:function(){},status:"rejected",reason:mt},ri())}finally{Z.p=m,I.T=M}}function Ny(){}function Th(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=cg(n).queue;lg(n,f,i,q,a===null?Ny:function(){return ug(n),a(l)})}function cg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:q},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function ug(n){var i=cg(n).next.queue;wo(n,i,{},ri())}function Ah(){return On(Yo)}function hg(){return cn().memoizedState}function fg(){return cn().memoizedState}function Oy(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=ri();n=Ns(a);var l=Os(i,n,a);l!==null&&(oi(l,i,a),Mo(l,i,a)),i={cache:nh()},n.payload=i;return}i=i.return}}function Py(n,i,a){var l=ri();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},tc(n)?pg(i,a):(a=Yu(n,i,a,l),a!==null&&(oi(a,n,l),mg(a,i,l)))}function dg(n,i,a){var l=ri();wo(n,i,a,l)}function wo(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(n))pg(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,T=m(M,a);if(f.hasEagerState=!0,f.eagerState=T,ei(T,M))return Bl(n,i,f,0),qe===null&&Il(),!1}catch{}finally{}if(a=Yu(n,i,f,l),a!==null)return oi(a,n,l),mg(a,i,l),!0}return!1}function Rh(n,i,a,l){if(l={lane:2,revertLane:rf(),action:l,hasEagerState:!1,eagerState:null,next:null},tc(n)){if(i)throw Error(s(479))}else i=Yu(n,a,l,2),i!==null&&oi(i,n,2)}function tc(n){var i=n.alternate;return n===he||i!==null&&i===he}function pg(n,i){ar=ql=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function mg(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ie(n,a)}}var ec={readContext:On,use:Zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},gg={readContext:On,use:Zl,useCallback:function(n,i){return jn().memoizedState=[n,i===void 0?null:i],n},useContext:On,useEffect:$m,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,$l(4194308,4,ig.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $l(4194308,4,n,i)},useInsertionEffect:function(n,i){$l(4,2,n,i)},useMemo:function(n,i){var a=jn();i=i===void 0?null:i;var l=n();if(Ra){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=jn();if(a!==void 0){var f=a(i);if(Ra){Rt(!0);try{a(i)}finally{Rt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=Py.bind(null,he,n),[l.memoizedState,n]},useRef:function(n){var i=jn();return n={current:n},i.memoizedState=n},useState:function(n){n=Sh(n);var i=n.queue,a=dg.bind(null,he,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Eh,useDeferredValue:function(n,i){var a=jn();return bh(a,n,i)},useTransition:function(){var n=Sh(!1);return n=lg.bind(null,he,n.queue,!0,!1),jn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=he,f=jn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),qe===null)throw Error(s(349));(be&124)!==0||Bm(l,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,$m(Fm.bind(null,l,m,n),[n]),l.flags|=2048,or(9,Jl(),zm.bind(null,l,m,a,i),null),a},useId:function(){var n=jn(),i=qe.identifierPrefix;if(De){var a=ts,l=$i;a=(l&~(1<<32-wt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Kl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Cy++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Ah,useFormState:qm,useActionState:qm,useOptimistic:function(n){var i=jn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Rh.bind(null,he,!0,a),a.dispatch=i,[n,i]},useMemoCache:vh,useCacheRefresh:function(){return jn().memoizedState=Oy.bind(null,he)}},_g={readContext:On,use:Zl,useCallback:ag,useContext:On,useEffect:tg,useImperativeHandle:sg,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:rg,useReducer:Ql,useRef:Jm,useState:function(){return Ql(is)},useDebugValue:Eh,useDeferredValue:function(n,i){var a=cn();return og(a,Be.memoizedState,n,i)},useTransition:function(){var n=Ql(is)[0],i=cn().memoizedState;return[typeof n=="boolean"?n:Ao(n),i]},useSyncExternalStore:Im,useId:hg,useHostTransitionStatus:Ah,useFormState:Km,useActionState:Km,useOptimistic:function(n,i){var a=cn();return Gm(a,Be,n,i)},useMemoCache:vh,useCacheRefresh:fg},Iy={readContext:On,use:Zl,useCallback:ag,useContext:On,useEffect:tg,useImperativeHandle:sg,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:rg,useReducer:yh,useRef:Jm,useState:function(){return yh(is)},useDebugValue:Eh,useDeferredValue:function(n,i){var a=cn();return Be===null?bh(a,n,i):og(a,Be.memoizedState,n,i)},useTransition:function(){var n=yh(is)[0],i=cn().memoizedState;return[typeof n=="boolean"?n:Ao(n),i]},useSyncExternalStore:Im,useId:hg,useHostTransitionStatus:Ah,useFormState:Qm,useActionState:Qm,useOptimistic:function(n,i){var a=cn();return Be!==null?Gm(a,Be,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:vh,useCacheRefresh:fg},lr=null,Co=0;function nc(n){var i=Co;return Co+=1,lr===null&&(lr=[]),wm(lr,n,i)}function Do(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ic(n,i){throw i.$$typeof===_?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function vg(n){var i=n._init;return i(n._payload)}function xg(n){function i(Y,V){if(n){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function f(Y,V){return Y=Ji(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,Q){return Y.index=Q,n?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,Q,ht){return V===null||V.tag!==6?(V=qu(Q,Y.mode,ht),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function P(Y,V,Q,ht){var Ht=Q.type;return Ht===E?ct(Y,V,Q.props.children,ht,Q.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&vg(Ht)===V.type)?(V=f(V,Q.props),Do(V,Q),V.return=Y,V):(V=Fl(Q.type,Q.key,Q.props,null,Y.mode,ht),Do(V,Q),V.return=Y,V)}function $(Y,V,Q,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Ku(Q,Y.mode,ht),V.return=Y,V):(V=f(V,Q.children||[]),V.return=Y,V)}function ct(Y,V,Q,ht,Ht){return V===null||V.tag!==7?(V=xa(Q,Y.mode,ht,Ht),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function mt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=qu(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=Fl(V.type,V.key,V.props,null,Y.mode,Q),Do(Q,V),Q.return=Y,Q;case y:return V=Ku(V,Y.mode,Q),V.return=Y,V;case W:var ht=V._init;return V=ht(V._payload),mt(Y,V,Q)}if(ft(V)||lt(V))return V=xa(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,nc(V),Q);if(V.$$typeof===L)return mt(Y,kl(Y,V),Q);ic(Y,V)}return null}function nt(Y,V,Q,ht){var Ht=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:T(Y,V,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ht?P(Y,V,Q,ht):null;case y:return Q.key===Ht?$(Y,V,Q,ht):null;case W:return Ht=Q._init,Q=Ht(Q._payload),nt(Y,V,Q,ht)}if(ft(Q)||lt(Q))return Ht!==null?null:ct(Y,V,Q,ht,null);if(typeof Q.then=="function")return nt(Y,V,nc(Q),ht);if(Q.$$typeof===L)return nt(Y,V,kl(Y,Q),ht);ic(Y,Q)}return null}function it(Y,V,Q,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(Q)||null,T(V,Y,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return Y=Y.get(ht.key===null?Q:ht.key)||null,P(V,Y,ht,Ht);case y:return Y=Y.get(ht.key===null?Q:ht.key)||null,$(V,Y,ht,Ht);case W:var pe=ht._init;return ht=pe(ht._payload),it(Y,V,Q,ht,Ht)}if(ft(ht)||lt(ht))return Y=Y.get(Q)||null,ct(V,Y,ht,Ht,null);if(typeof ht.then=="function")return it(Y,V,Q,nc(ht),Ht);if(ht.$$typeof===L)return it(Y,V,Q,kl(V,ht),Ht);ic(V,ht)}return null}function $t(Y,V,Q,ht){for(var Ht=null,pe=null,Gt=V,Qt=V=0,bn=null;Gt!==null&&Qt<Q.length;Qt++){Gt.index>Qt?(bn=Gt,Gt=null):bn=Gt.sibling;var we=nt(Y,Gt,Q[Qt],ht);if(we===null){Gt===null&&(Gt=bn);break}n&&Gt&&we.alternate===null&&i(Y,Gt),V=m(we,V,Qt),pe===null?Ht=we:pe.sibling=we,pe=we,Gt=bn}if(Qt===Q.length)return a(Y,Gt),De&&Sa(Y,Qt),Ht;if(Gt===null){for(;Qt<Q.length;Qt++)Gt=mt(Y,Q[Qt],ht),Gt!==null&&(V=m(Gt,V,Qt),pe===null?Ht=Gt:pe.sibling=Gt,pe=Gt);return De&&Sa(Y,Qt),Ht}for(Gt=l(Gt);Qt<Q.length;Qt++)bn=it(Gt,Y,Qt,Q[Qt],ht),bn!==null&&(n&&bn.alternate!==null&&Gt.delete(bn.key===null?Qt:bn.key),V=m(bn,V,Qt),pe===null?Ht=bn:pe.sibling=bn,pe=bn);return n&&Gt.forEach(function(Qs){return i(Y,Qs)}),De&&Sa(Y,Qt),Ht}function qt(Y,V,Q,ht){if(Q==null)throw Error(s(151));for(var Ht=null,pe=null,Gt=V,Qt=V=0,bn=null,we=Q.next();Gt!==null&&!we.done;Qt++,we=Q.next()){Gt.index>Qt?(bn=Gt,Gt=null):bn=Gt.sibling;var Qs=nt(Y,Gt,we.value,ht);if(Qs===null){Gt===null&&(Gt=bn);break}n&&Gt&&Qs.alternate===null&&i(Y,Gt),V=m(Qs,V,Qt),pe===null?Ht=Qs:pe.sibling=Qs,pe=Qs,Gt=bn}if(we.done)return a(Y,Gt),De&&Sa(Y,Qt),Ht;if(Gt===null){for(;!we.done;Qt++,we=Q.next())we=mt(Y,we.value,ht),we!==null&&(V=m(we,V,Qt),pe===null?Ht=we:pe.sibling=we,pe=we);return De&&Sa(Y,Qt),Ht}for(Gt=l(Gt);!we.done;Qt++,we=Q.next())we=it(Gt,Y,Qt,we.value,ht),we!==null&&(n&&we.alternate!==null&&Gt.delete(we.key===null?Qt:we.key),V=m(we,V,Qt),pe===null?Ht=we:pe.sibling=we,pe=we);return n&&Gt.forEach(function(BS){return i(Y,BS)}),De&&Sa(Y,Qt),Ht}function Fe(Y,V,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var Ht=Q.key;V!==null;){if(V.key===Ht){if(Ht=Q.type,Ht===E){if(V.tag===7){a(Y,V.sibling),ht=f(V,Q.props.children),ht.return=Y,Y=ht;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&vg(Ht)===V.type){a(Y,V.sibling),ht=f(V,Q.props),Do(ht,Q),ht.return=Y,Y=ht;break t}a(Y,V);break}else i(Y,V);V=V.sibling}Q.type===E?(ht=xa(Q.props.children,Y.mode,ht,Q.key),ht.return=Y,Y=ht):(ht=Fl(Q.type,Q.key,Q.props,null,Y.mode,ht),Do(ht,Q),ht.return=Y,Y=ht)}return M(Y);case y:t:{for(Ht=Q.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),ht=f(V,Q.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,V);break}else i(Y,V);V=V.sibling}ht=Ku(Q,Y.mode,ht),ht.return=Y,Y=ht}return M(Y);case W:return Ht=Q._init,Q=Ht(Q._payload),Fe(Y,V,Q,ht)}if(ft(Q))return $t(Y,V,Q,ht);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(s(150));return Q=Ht.call(Q),qt(Y,V,Q,ht)}if(typeof Q.then=="function")return Fe(Y,V,nc(Q),ht);if(Q.$$typeof===L)return Fe(Y,V,kl(Y,Q),ht);ic(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),ht=f(V,Q),ht.return=Y,Y=ht):(a(Y,V),ht=qu(Q,Y.mode,ht),ht.return=Y,Y=ht),M(Y)):a(Y,V)}return function(Y,V,Q,ht){try{Co=0;var Ht=Fe(Y,V,Q,ht);return lr=null,Ht}catch(Gt){if(Gt===yo||Gt===Wl)throw Gt;var pe=ni(29,Gt,null,Y.mode);return pe.lanes=ht,pe.return=Y,pe}finally{}}}var cr=xg(!0),yg=xg(!1),mi=tt(null),Oi=null;function Is(n){var i=n.alternate;yt(mn,mn.current&1),yt(mi,n),Oi===null&&(i===null||sr.current!==null||i.memoizedState!==null)&&(Oi=n)}function Sg(n){if(n.tag===22){if(yt(mn,mn.current),yt(mi,n),Oi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Oi=n)}}else Bs()}function Bs(){yt(mn,mn.current),yt(mi,mi.current)}function ss(n){vt(mi),Oi===n&&(Oi=null),vt(mn)}var mn=tt(0);function sc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function wh(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:g({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ch={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=ri(),f=Ns(l);f.payload=i,a!=null&&(f.callback=a),i=Os(n,f,l),i!==null&&(oi(i,n,l),Mo(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=ri(),f=Ns(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Os(n,f,l),i!==null&&(oi(i,n,l),Mo(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ri(),l=Ns(a);l.tag=2,i!=null&&(l.callback=i),i=Os(n,l,a),i!==null&&(oi(i,n,a),Mo(i,n,a))}};function Mg(n,i,a,l,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!ho(a,l)||!ho(f,m):!0}function Eg(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&Ch.enqueueReplaceState(i,i.state,null)}function wa(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=g({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var ac=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function bg(n){ac(n)}function Tg(n){console.error(n)}function Ag(n){ac(n)}function rc(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Rg(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Dh(n,i,a){return a=Ns(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(n,i)},a}function wg(n){return n=Ns(n),n.tag=3,n}function Cg(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){Rg(i,a,l)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(n.callback=function(){Rg(i,a,l),typeof f!="function"&&(ks===null?ks=new Set([this]):ks.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function By(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&_o(i,a,f,!0),a=mi.current,a!==null){switch(a.tag){case 13:return Oi===null?tf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===ah?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),nf(n,l,f)),!1;case 22:return a.flags|=65536,l===ah?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),nf(n,l,f)),!1}throw Error(s(435,a.tag))}return nf(n,l,f),tf(),!1}if(De)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ju&&(n=Error(s(422),{cause:l}),go(hi(n,a)))):(l!==Ju&&(i=Error(s(423),{cause:l}),go(hi(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=hi(l,a),f=Dh(n.stateNode,l,f),lh(n,f),en!==4&&(en=2)),!1;var m=Error(s(520),{cause:l});if(m=hi(m,a),Bo===null?Bo=[m]:Bo.push(m),en!==4&&(en=2),i===null)return!0;l=hi(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Dh(a.stateNode,l,n),lh(a,n),!1;case 1:if(i=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ks===null||!ks.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=wg(f),Cg(f,n,a,l),lh(a,f),!1}a=a.return}while(a!==null);return!1}var Dg=Error(s(461)),Mn=!1;function Cn(n,i,a,l){i.child=n===null?yg(i,null,a,l):cr(i,n.child,a,l)}function Lg(n,i,a,l,f){a=a.render;var m=i.ref;if("ref"in l){var M={};for(var T in l)T!=="ref"&&(M[T]=l[T])}else M=l;return Ta(i),l=dh(n,i,a,M,m,f),T=ph(),n!==null&&!Mn?(mh(n,i,f),as(n,i,f)):(De&&T&&Zu(i),i.flags|=1,Cn(n,i,l,f),i.child)}function Ug(n,i,a,l,f){if(n===null){var m=a.type;return typeof m=="function"&&!ju(m)&&m.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=m,Ng(n,i,m,l,f)):(n=Fl(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!zh(n,f)){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(M,l)&&n.ref===i.ref)return as(n,i,f)}return i.flags|=1,n=Ji(m,l),n.ref=i.ref,n.return=i,i.child=n}function Ng(n,i,a,l,f){if(n!==null){var m=n.memoizedProps;if(ho(m,l)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=l=m,zh(n,f))(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,as(n,i,f)}return Lh(n,i,a,l,f)}function Og(n,i,a){var l=i.pendingProps,f=l.children,m=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|a:a,n!==null){for(f=i.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return Pg(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xl(i,m!==null?m.cachePool:null),m!==null?Nm(i,m):uh(),Sg(i);else return i.lanes=i.childLanes=536870912,Pg(n,i,m!==null?m.baseLanes|a:a,a)}else m!==null?(Xl(i,m.cachePool),Nm(i,m),Bs(),i.memoizedState=null):(n!==null&&Xl(i,null),uh(),Bs());return Cn(n,i,f,a),i.child}function Pg(n,i,a,l){var f=sh();return f=f===null?null:{parent:pn._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&Xl(i,null),uh(),Sg(i),n!==null&&_o(n,i,l,!0),null}function oc(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function Lh(n,i,a,l,f){return Ta(i),a=dh(n,i,a,l,void 0,f),l=ph(),n!==null&&!Mn?(mh(n,i,f),as(n,i,f)):(De&&l&&Zu(i),i.flags|=1,Cn(n,i,a,f),i.child)}function Ig(n,i,a,l,f,m){return Ta(i),i.updateQueue=null,a=Pm(i,l,a,f),Om(n),l=ph(),n!==null&&!Mn?(mh(n,i,m),as(n,i,m)):(De&&l&&Zu(i),i.flags|=1,Cn(n,i,a,m),i.child)}function Bg(n,i,a,l,f){if(Ta(i),i.stateNode===null){var m=$a,M=a.contextType;typeof M=="object"&&M!==null&&(m=On(M)),m=new a(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ch,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},rh(i),M=a.contextType,m.context=typeof M=="object"&&M!==null?On(M):$a,m.state=i.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(wh(i,a,M,l),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Ch.enqueueReplaceState(m,m.state,null),bo(i,l,m,f),Eo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){m=i.stateNode;var T=i.memoizedProps,P=wa(a,T);m.props=P;var $=m.context,ct=a.contextType;M=$a,typeof ct=="object"&&ct!==null&&(M=On(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ct||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||$!==M)&&Eg(i,m,l,M),Us=!1;var nt=i.memoizedState;m.state=nt,bo(i,l,m,f),Eo(),$=i.memoizedState,T||nt!==$||Us?(typeof mt=="function"&&(wh(i,a,mt,l),$=i.memoizedState),(P=Us||Mg(i,a,P,l,nt,$,M))?(ct||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=$),m.props=l,m.state=$,m.context=M,l=P):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,oh(n,i),M=i.memoizedProps,ct=wa(a,M),m.props=ct,mt=i.pendingProps,nt=m.context,$=a.contextType,P=$a,typeof $=="object"&&$!==null&&(P=On($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==mt||nt!==P)&&Eg(i,m,l,P),Us=!1,nt=i.memoizedState,m.state=nt,bo(i,l,m,f),Eo();var it=i.memoizedState;M!==mt||nt!==it||Us||n!==null&&n.dependencies!==null&&Gl(n.dependencies)?(typeof T=="function"&&(wh(i,a,T,l),it=i.memoizedState),(ct=Us||Mg(i,a,ct,l,nt,it,P)||n!==null&&n.dependencies!==null&&Gl(n.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,it,P),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,it,P)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=it),m.props=l,m.state=it,m.context=P,l=ct):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=1024),l=!1)}return m=l,oc(n,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&l?(i.child=cr(i,n.child,null,f),i.child=cr(i,null,a,f)):Cn(n,i,a,f),i.memoizedState=m.state,n=i.child):n=as(n,i,f),n}function zg(n,i,a,l){return mo(),i.flags|=256,Cn(n,i,a,l),i.child}var Uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nh(n){return{baseLanes:n,cachePool:Tm()}}function Oh(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=gi),n}function Fg(n,i,a){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=n!==null&&n.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,n===null){if(De){if(f?Is(i):Bs(),De){var T=tn,P;if(P=T){t:{for(P=T,T=Ni;P.nodeType!==8;){if(!T){T=null;break t}if(P=Ei(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(i.memoizedState={dehydrated:T,treeContext:ya!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},P=ni(18,null,null,0),P.stateNode=T,P.return=i,i.child=P,Fn=i,tn=null,P=!0):P=!1}P||Ea(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return vf(T)?i.lanes=32:i.lanes=536870912,null;ss(i)}return T=l.children,l=l.fallback,f?(Bs(),f=i.mode,T=lc({mode:"hidden",children:T},f),l=xa(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=Nh(a),f.childLanes=Oh(n,M,a),i.memoizedState=Uh,l):(Is(i),Ph(i,T))}if(P=n.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(m)i.flags&256?(Is(i),i.flags&=-257,i=Ih(n,i,a)):i.memoizedState!==null?(Bs(),i.child=n.child,i.flags|=128,i=null):(Bs(),f=l.fallback,T=i.mode,l=lc({mode:"visible",children:l.children},T),f=xa(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,cr(i,n.child,null,a),l=i.child,l.memoizedState=Nh(a),l.childLanes=Oh(n,M,a),i.memoizedState=Uh,i=f);else if(Is(i),vf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var $=M.dgst;M=$,l=Error(s(419)),l.stack="",l.digest=M,go({value:l,source:null,stack:null}),i=Ih(n,i,a)}else if(Mn||_o(n,i,a,!1),M=(a&n.childLanes)!==0,Mn||M){if(M=qe,M!==null&&(l=a&-a,l=(l&42)!==0?1:Ye(l),l=(l&(M.suspendedLanes|a))!==0?0:l,l!==0&&l!==P.retryLane))throw P.retryLane=l,Ja(n,l),oi(M,n,l),Dg;T.data==="$?"||tf(),i=Ih(n,i,a)}else T.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=P.treeContext,tn=Ei(T.nextSibling),Fn=i,De=!0,Ma=null,Ni=!1,n!==null&&(di[pi++]=$i,di[pi++]=ts,di[pi++]=ya,$i=n.id,ts=n.overflow,ya=i),i=Ph(i,l.children),i.flags|=4096);return i}return f?(Bs(),f=l.fallback,T=i.mode,P=n.child,$=P.sibling,l=Ji(P,{mode:"hidden",children:l.children}),l.subtreeFlags=P.subtreeFlags&65011712,$!==null?f=Ji($,f):(f=xa(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=n.child.memoizedState,T===null?T=Nh(a):(P=T.cachePool,P!==null?($=pn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Tm(),T={baseLanes:T.baseLanes|a,cachePool:P}),f.memoizedState=T,f.childLanes=Oh(n,M,a),i.memoizedState=Uh,l):(Is(i),a=n.child,n=a.sibling,a=Ji(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(M=i.deletions,M===null?(i.deletions=[n],i.flags|=16):M.push(n)),i.child=a,i.memoizedState=null,a)}function Ph(n,i){return i=lc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function lc(n,i){return n=ni(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ih(n,i,a){return cr(i,n.child,null,a),n=Ph(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Hg(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),th(n.return,i,a)}function Bh(n,i,a,l,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function Vg(n,i,a){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Cn(n,i,l.children,a),l=mn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hg(n,a,i);else if(n.tag===19)Hg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(yt(mn,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&sc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Bh(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&sc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Bh(i,!0,a,null,m);break;case"together":Bh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function as(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(_o(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Ji(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ji(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Gl(n)))}function zy(n,i,a){switch(i.tag){case 3:Ot(i,i.stateNode.containerInfo),Ls(i,pn,n.memoizedState.cache),mo();break;case 27:case 5:Kt(i);break;case 4:Ot(i,i.stateNode.containerInfo);break;case 10:Ls(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Is(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Fg(n,i,a):(Is(i),n=as(n,i,a),n!==null?n.sibling:null);Is(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(_o(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return Vg(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),yt(mn,mn.current),l)break;return null;case 22:case 23:return i.lanes=0,Og(n,i,a);case 24:Ls(i,pn,n.memoizedState.cache)}return as(n,i,a)}function Gg(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Mn=!0;else{if(!zh(n,a)&&(i.flags&128)===0)return Mn=!1,zy(n,i,a);Mn=(n.flags&131072)!==0}else Mn=!1,De&&(i.flags&1048576)!==0&&vm(i,Vl,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")ju(l)?(n=wa(l,n),i.tag=1,i=Bg(null,i,l,n,a)):(i.tag=0,i=Lh(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===w){i.tag=11,i=Lg(null,i,l,n,a);break t}else if(f===B){i.tag=14,i=Ug(null,i,l,n,a);break t}}throw i=gt(l)||l,Error(s(306,i,""))}}return i;case 0:return Lh(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=wa(l,i.pendingProps),Bg(n,i,l,f,a);case 3:t:{if(Ot(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,oh(n,i),bo(i,l,null,a);var M=i.memoizedState;if(l=M.cache,Ls(i,pn,l),l!==m.cache&&eh(i,[pn],a,!0),Eo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=zg(n,i,l,a);break t}else if(l!==f){f=hi(Error(s(424)),i),go(f),i=zg(n,i,l,a);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(tn=Ei(n.firstChild),Fn=i,De=!0,Ma=null,Ni=!0,a=yg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(mo(),l===f){i=as(n,i,a);break t}Cn(n,i,l,a)}i=i.child}return i;case 26:return oc(n,i),n===null?(a=Y_(i.type,null,i.pendingProps,null))?i.memoizedState=a:De||(a=i.type,n=i.pendingProps,l=Mc(xt.current).createElement(a),l[fn]=i,l[Rn]=n,Ln(l,a,n),on(l),i.stateNode=l):i.memoizedState=Y_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Kt(i),n===null&&De&&(l=i.stateNode=k_(i.type,i.pendingProps,xt.current),Fn=i,Ni=!0,f=tn,Ys(i.type)?(xf=f,tn=Ei(l.firstChild)):tn=f),Cn(n,i,i.pendingProps.children,a),oc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&De&&((f=l=tn)&&(l=fS(l,i.type,i.pendingProps,Ni),l!==null?(i.stateNode=l,Fn=i,tn=Ei(l.firstChild),Ni=!1,f=!0):f=!1),f||Ea(i)),Kt(i),f=i.type,m=i.pendingProps,M=n!==null?n.memoizedProps:null,l=m.children,mf(f,m)?l=null:M!==null&&mf(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=dh(n,i,Dy,null,null,a),Yo._currentValue=f),oc(n,i),Cn(n,i,l,a),i.child;case 6:return n===null&&De&&((n=a=tn)&&(a=dS(a,i.pendingProps,Ni),a!==null?(i.stateNode=a,Fn=i,tn=null,n=!0):n=!1),n||Ea(i)),null;case 13:return Fg(n,i,a);case 4:return Ot(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=cr(i,null,l,a):Cn(n,i,l,a),i.child;case 11:return Lg(n,i,i.type,i.pendingProps,a);case 7:return Cn(n,i,i.pendingProps,a),i.child;case 8:return Cn(n,i,i.pendingProps.children,a),i.child;case 12:return Cn(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ls(i,i.type,l.value),Cn(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ta(i),f=On(f),l=l(f),i.flags|=1,Cn(n,i,l,a),i.child;case 14:return Ug(n,i,i.type,i.pendingProps,a);case 15:return Ng(n,i,i.type,i.pendingProps,a);case 19:return Vg(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=lc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ji(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Og(n,i,a);case 24:return Ta(i),l=On(pn),n===null?(f=sh(),f===null&&(f=qe,m=nh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),i.memoizedState={parent:l,cache:f},rh(i),Ls(i,pn,f)):((n.lanes&a)!==0&&(oh(n,i),bo(i,null,null,a),Eo()),f=n.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ls(i,pn,l)):(l=m.cache,Ls(i,pn,l),l!==f.cache&&eh(i,[pn],a,!0))),Cn(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function rs(n){n.flags|=4}function kg(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Q_(i)){if(i=mi.current,i!==null&&((be&4194048)===be?Oi!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Oi))throw So=ah,Am;n.flags|=8192}}function cc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ut():536870912,n.lanes|=i,dr|=i)}function Lo(n,i){if(!De)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Qe(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function Fy(n,i,a){var l=i.pendingProps;switch(Qu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ns(pn),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(po(i)?rs(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sm())),Qe(i),null;case 26:return a=i.memoizedState,n===null?(rs(i),a!==null?(Qe(i),kg(i,a)):(Qe(i),i.flags&=-16777217)):a?a!==n.memoizedState?(rs(i),Qe(i),kg(i,a)):(Qe(i),i.flags&=-16777217):(n.memoizedProps!==l&&rs(i),Qe(i),i.flags&=-16777217),null;case 27:We(i),a=xt.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&rs(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}n=J.current,po(i)?xm(i):(n=k_(f,l,a),i.stateNode=n,rs(i))}return Qe(i),null;case 5:if(We(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&rs(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Qe(i),null}if(n=J.current,po(i))xm(i);else{switch(f=Mc(xt.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[fn]=i,n[Rn]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;t:switch(Ln(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&rs(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&rs(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=xt.current,po(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=Fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[fn]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||I_(n.nodeValue,a)),n||Ea(i)}else n=Mc(n).createTextNode(l),n[fn]=i,i.stateNode=n}return Qe(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=po(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[fn]=i}else mo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),f=!1}else f=Sm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ss(i),i):(ss(i),null)}if(ss(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),cc(i,i.updateQueue),Qe(i),null;case 4:return le(),n===null&&uf(i.stateNode.containerInfo),Qe(i),null;case 10:return ns(i.type),Qe(i),null;case 19:if(vt(mn),f=i.memoizedState,f===null)return Qe(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)Lo(f,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=sc(n),m!==null){for(i.flags|=128,Lo(f,!1),n=m.updateQueue,i.updateQueue=n,cc(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)_m(a,n),a=a.sibling;return yt(mn,mn.current&1|2),i.child}n=n.sibling}f.tail!==null&&ne()>fc&&(i.flags|=128,l=!0,Lo(f,!1),i.lanes=4194304)}else{if(!l)if(n=sc(m),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,cc(i,n),Lo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!De)return Qe(i),null}else 2*ne()-f.renderingStartTime>fc&&a!==536870912&&(i.flags|=128,l=!0,Lo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(n=f.last,n!==null?n.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ne(),i.sibling=null,n=mn.current,yt(mn,l?n&1|2:n&1),i):(Qe(i),null);case 22:case 23:return ss(i),hh(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),a=i.updateQueue,a!==null&&cc(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&vt(Aa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ns(pn),Qe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Hy(n,i){switch(Qu(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ns(pn),le(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return We(i),null;case 13:if(ss(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));mo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return vt(mn),null;case 4:return le(),null;case 10:return ns(i.type),null;case 22:case 23:return ss(i),hh(),n!==null&&vt(Aa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ns(pn),null;case 25:return null;default:return null}}function Xg(n,i){switch(Qu(i),i.tag){case 3:ns(pn),le();break;case 26:case 27:case 5:We(i);break;case 4:le();break;case 13:ss(i);break;case 19:vt(mn);break;case 10:ns(i.type);break;case 22:case 23:ss(i),hh(),n!==null&&vt(Aa);break;case 24:ns(pn)}}function Uo(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var m=a.create,M=a.inst;l=m(),M.destroy=l}a=a.next}while(a!==f)}}catch(T){Xe(i,i.return,T)}}function zs(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var M=l.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,f=i;var P=a,$=T;try{$()}catch(ct){Xe(f,P,ct)}}}l=l.next}while(l!==m)}}catch(ct){Xe(i,i.return,ct)}}function Wg(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Um(i,a)}catch(l){Xe(n,n.return,l)}}}function Yg(n,i,a){a.props=wa(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(n,i,l)}}function No(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){Xe(n,i,f)}}function Pi(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Xe(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Xe(n,i,f)}else a.current=null}function jg(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Xe(n,n.return,f)}}function Fh(n,i,a){try{var l=n.stateNode;oS(l,n.type,a,i),l[Rn]=i}catch(f){Xe(n,n.return,f)}}function qg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ys(n.type)||n.tag===4}function Hh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||qg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ys(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vh(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Sc));else if(l!==4&&(l===27&&Ys(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Vh(n,i,a),n=n.sibling;n!==null;)Vh(n,i,a),n=n.sibling}function uc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&Ys(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(uc(n,i,a),n=n.sibling;n!==null;)uc(n,i,a),n=n.sibling}function Kg(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,a),i[fn]=n,i[Rn]=a}catch(m){Xe(n,n.return,m)}}var os=!1,sn=!1,Gh=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Vy(n,i){if(n=n.containerInfo,df=wc,n=om(n),Hu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else t:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,$=0,ct=0,mt=n,nt=null;e:for(;;){for(var it;mt!==a||f!==0&&mt.nodeType!==3||(T=M+f),mt!==m||l!==0&&mt.nodeType!==3||(P=M+l),mt.nodeType===3&&(M+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===n)break e;if(nt===a&&++$===f&&(T=M),nt===m&&++ct===l&&(P=M),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(pf={focusedElem:n,selectionRange:a},wc=!1,En=i;En!==null;)if(i=En,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,En=n;else for(;En!==null;){switch(i=En,m=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,a=i,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var $t=wa(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate($t,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(qt){Xe(a,a.return,qt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)_f(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":_f(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,En=n;break}En=i.return}}function Qg(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Fs(n,a),l&4&&Uo(5,a);break;case 1:if(Fs(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(M){Xe(a,a.return,M)}else{var f=wa(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(a,a.return,M)}}l&64&&Wg(a),l&512&&No(a,a.return);break;case 3:if(Fs(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Um(n,i)}catch(M){Xe(a,a.return,M)}}break;case 27:i===null&&l&4&&Kg(a);case 26:case 5:Fs(n,a),i===null&&l&4&&jg(a),l&512&&No(a,a.return);break;case 12:Fs(n,a);break;case 13:Fs(n,a),l&4&&t_(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=Zy.bind(null,a),pS(n,a))));break;case 22:if(l=a.memoizedState!==null||os,!l){i=i!==null&&i.memoizedState!==null||sn,f=os;var m=sn;os=l,(sn=i)&&!m?Hs(n,a,(a.subtreeFlags&8772)!==0):Fs(n,a),os=f,sn=m}break;case 30:break;default:Fs(n,a)}}function Jg(n){var i=n.alternate;i!==null&&(n.alternate=null,Jg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Rs(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ke=null,qn=!1;function ls(n,i,a){for(a=a.child;a!==null;)$g(n,i,a),a=a.sibling}function $g(n,i,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:sn||Pi(a,i),ls(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Pi(a,i);var l=Ke,f=qn;Ys(a.type)&&(Ke=a.stateNode,qn=!1),ls(n,i,a),Go(a.stateNode),Ke=l,qn=f;break;case 5:sn||Pi(a,i);case 6:if(l=Ke,f=qn,Ke=null,ls(n,i,a),Ke=l,qn=f,Ke!==null)if(qn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(m){Xe(a,i,m)}else try{Ke.removeChild(a.stateNode)}catch(m){Xe(a,i,m)}break;case 18:Ke!==null&&(qn?(n=Ke,V_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Zo(n)):V_(Ke,a.stateNode));break;case 4:l=Ke,f=qn,Ke=a.stateNode.containerInfo,qn=!0,ls(n,i,a),Ke=l,qn=f;break;case 0:case 11:case 14:case 15:sn||zs(2,a,i),sn||zs(4,a,i),ls(n,i,a);break;case 1:sn||(Pi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yg(a,i,l)),ls(n,i,a);break;case 21:ls(n,i,a);break;case 22:sn=(l=sn)||a.memoizedState!==null,ls(n,i,a),sn=l;break;default:ls(n,i,a)}}function t_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Zo(n)}catch(a){Xe(i,i.return,a)}}function Gy(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Zg),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Zg),i;default:throw Error(s(435,n.tag))}}function kh(n,i){var a=Gy(n);i.forEach(function(l){var f=Qy.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function ii(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=n,M=i,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ys(T.type)){Ke=T.stateNode,qn=!1;break t}break;case 5:Ke=T.stateNode,qn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,qn=!0;break t}T=T.return}if(Ke===null)throw Error(s(160));$g(m,M,f),Ke=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)e_(i,n),i=i.sibling}var Mi=null;function e_(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ii(i,n),si(n),l&4&&(zs(3,n,n.return),Uo(3,n),zs(5,n,n.return));break;case 1:ii(i,n),si(n),l&512&&(sn||a===null||Pi(a,a.return)),l&64&&os&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=Mi;if(ii(i,n),si(n),l&512&&(sn||a===null||Pi(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){t:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[As]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Ln(m,l,a),m[fn]=n,on(m),l=m;break t;case"link":var M=K_("link","href",f).get(l+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(m=M[T],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}m=f.createElement(l),Ln(m,l,a),f.head.appendChild(m);break;case"meta":if(M=K_("meta","content",f).get(l+(a.content||""))){for(T=0;T<M.length;T++)if(m=M[T],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}m=f.createElement(l),Ln(m,l,a),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[fn]=n,on(m),l=m}n.stateNode=l}else Z_(f,n.type,n.stateNode);else n.stateNode=q_(f,l,n.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?Z_(f,n.type,n.stateNode):q_(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Fh(n,n.memoizedProps,a.memoizedProps)}break;case 27:ii(i,n),si(n),l&512&&(sn||a===null||Pi(a,a.return)),a!==null&&l&4&&Fh(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ii(i,n),si(n),l&512&&(sn||a===null||Pi(a,a.return)),n.flags&32){f=n.stateNode;try{Ui(f,"")}catch(it){Xe(n,n.return,it)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Fh(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Gh=!0);break;case 6:if(ii(i,n),si(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(it){Xe(n,n.return,it)}}break;case 3:if(Tc=null,f=Mi,Mi=Ec(i.containerInfo),ii(i,n),Mi=f,si(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Zo(i.containerInfo)}catch(it){Xe(n,n.return,it)}Gh&&(Gh=!1,n_(n));break;case 4:l=Mi,Mi=Ec(n.stateNode.containerInfo),ii(i,n),si(n),Mi=l;break;case 12:ii(i,n),si(n);break;case 13:ii(i,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kh=ne()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,kh(n,l)));break;case 22:f=n.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=os,ct=sn;if(os=$||f,sn=ct||P,ii(i,n),sn=ct,os=$,si(n),l&8192)t:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||P||os||sn||Ca(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){P=a=i;try{if(m=P.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Xe(P,P.return,it)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(it){Xe(P,P.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,kh(n,a))));break;case 19:ii(i,n),si(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,kh(n,l)));break;case 30:break;case 21:break;default:ii(i,n),si(n)}}function si(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(qg(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,m=Hh(n);uc(n,m,f);break;case 5:var M=a.stateNode;a.flags&32&&(Ui(M,""),a.flags&=-33);var T=Hh(n);uc(n,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Hh(n);Vh(n,$,P);break;default:throw Error(s(161))}}catch(ct){Xe(n,n.return,ct)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function n_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;n_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Fs(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Qg(n,i.alternate,i),i=i.sibling}function Ca(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:zs(4,i,i.return),Ca(i);break;case 1:Pi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Yg(i,i.return,a),Ca(i);break;case 27:Go(i.stateNode);case 26:case 5:Pi(i,i.return),Ca(i);break;case 22:i.memoizedState===null&&Ca(i);break;case 30:Ca(i);break;default:Ca(i)}n=n.sibling}}function Hs(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Hs(f,m,a),Uo(4,m);break;case 1:if(Hs(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Xe(l,l.return,$)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)Lm(P[f],T)}catch($){Xe(l,l.return,$)}}a&&M&64&&Wg(m),No(m,m.return);break;case 27:Kg(m);case 26:case 5:Hs(f,m,a),a&&l===null&&M&4&&jg(m),No(m,m.return);break;case 12:Hs(f,m,a);break;case 13:Hs(f,m,a),a&&M&4&&t_(f,m);break;case 22:m.memoizedState===null&&Hs(f,m,a),No(m,m.return);break;case 30:break;default:Hs(f,m,a)}i=i.sibling}}function Xh(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&vo(a))}function Wh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&vo(n))}function Ii(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)i_(n,i,a,l),i=i.sibling}function i_(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ii(n,i,a,l),f&2048&&Uo(9,i);break;case 1:Ii(n,i,a,l);break;case 3:Ii(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&vo(n)));break;case 12:if(f&2048){Ii(n,i,a,l),n=i.stateNode;try{var m=i.memoizedProps,M=m.id,T=m.onPostCommit;typeof T=="function"&&T(M,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(P){Xe(i,i.return,P)}}else Ii(n,i,a,l);break;case 13:Ii(n,i,a,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Ii(n,i,a,l):Oo(n,i):m._visibility&2?Ii(n,i,a,l):(m._visibility|=2,ur(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&Xh(M,i);break;case 24:Ii(n,i,a,l),f&2048&&Wh(i.alternate,i);break;default:Ii(n,i,a,l)}}function ur(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=n,M=i,T=a,P=l,$=M.flags;switch(M.tag){case 0:case 11:case 15:ur(m,M,T,P,f),Uo(8,M);break;case 23:break;case 22:var ct=M.stateNode;M.memoizedState!==null?ct._visibility&2?ur(m,M,T,P,f):Oo(m,M):(ct._visibility|=2,ur(m,M,T,P,f)),f&&$&2048&&Xh(M.alternate,M);break;case 24:ur(m,M,T,P,f),f&&$&2048&&Wh(M.alternate,M);break;default:ur(m,M,T,P,f)}i=i.sibling}}function Oo(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Oo(a,l),f&2048&&Xh(l.alternate,l);break;case 24:Oo(a,l),f&2048&&Wh(l.alternate,l);break;default:Oo(a,l)}i=i.sibling}}var Po=8192;function hr(n){if(n.subtreeFlags&Po)for(n=n.child;n!==null;)s_(n),n=n.sibling}function s_(n){switch(n.tag){case 26:hr(n),n.flags&Po&&n.memoizedState!==null&&RS(Mi,n.memoizedState,n.memoizedProps);break;case 5:hr(n);break;case 3:case 4:var i=Mi;Mi=Ec(n.stateNode.containerInfo),hr(n),Mi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,hr(n),Po=i):hr(n));break;default:hr(n)}}function a_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Io(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];En=l,o_(l,n)}a_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)r_(n),n=n.sibling}function r_(n){switch(n.tag){case 0:case 11:case 15:Io(n),n.flags&2048&&zs(9,n,n.return);break;case 3:Io(n);break;case 12:Io(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,hc(n)):Io(n);break;default:Io(n)}}function hc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];En=l,o_(l,n)}a_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:zs(8,i,i.return),hc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,hc(i));break;default:hc(i)}n=n.sibling}}function o_(n,i){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:zs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,En=l;else t:for(a=n;En!==null;){l=En;var f=l.sibling,m=l.return;if(Jg(l),l===a){En=null;break t}if(f!==null){f.return=m,En=f;break t}En=m}}}var ky={getCacheForType:function(n){var i=On(pn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},Xy=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,ge=null,be=0,Ue=0,ai=null,Vs=!1,fr=!1,Yh=!1,cs=0,en=0,Gs=0,Da=0,jh=0,gi=0,dr=0,Bo=null,Kn=null,qh=!1,Kh=0,fc=1/0,dc=null,ks=null,Dn=0,Xs=null,pr=null,mr=0,Zh=0,Qh=null,l_=null,zo=0,Jh=null;function ri(){if((Le&2)!==0&&be!==0)return be&-be;if(I.T!==null){var n=nr;return n!==0?n:rf()}return Ae()}function c_(){gi===0&&(gi=(be&536870912)===0||De?k():536870912);var n=mi.current;return n!==null&&(n.flags|=32),gi}function oi(n,i,a){(n===qe&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)&&(gr(n,0),Ws(n,be,gi,!1)),pt(n,a),((Le&2)===0||n!==qe)&&(n===qe&&((Le&2)===0&&(Da|=a),en===4&&Ws(n,be,gi,!1)),Bi(n))}function u_(n,i,a){if((Le&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||ee(n,i),f=l?jy(n,i):ef(n,i,!0),m=l;do{if(f===0){fr&&!l&&Ws(n,i,0,!1);break}else{if(a=n.current.alternate,m&&!Wy(a)){f=ef(n,i,!1),m=!1;continue}if(f===2){if(m=i,n.errorRecoveryDisabledLanes&m)var M=0;else M=n.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var T=n;f=Bo;var P=T.current.memoizedState.isDehydrated;if(P&&(gr(T,M).flags|=256),M=ef(T,M,!1),M!==2){if(Yh&&!P){T.errorRecoveryDisabledLanes|=m,Da|=m,f=4;break t}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){gr(n,0),Ws(n,i,0,!0);break}t:{switch(l=n,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ws(l,i,gi,!Vs);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Kh+300-ne(),10<f)){if(Ws(l,i,gi,!Vs),ue(l,0,!0)!==0)break t;l.timeoutHandle=F_(h_.bind(null,l,a,Kn,dc,qh,i,gi,Da,dr,Vs,m,2,-0,0),f);break t}h_(l,a,Kn,dc,qh,i,gi,Da,dr,Vs,m,0,-0,0)}}break}while(!0);Bi(n)}function h_(n,i,a,l,f,m,M,T,P,$,ct,mt,nt,it){if(n.timeoutHandle=-1,mt=i.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:AS},s_(i),mt=wS(),mt!==null)){n.cancelPendingCommit=mt(v_.bind(null,n,i,m,a,l,f,M,T,P,ct,1,nt,it)),Ws(n,m,M,!$);return}v_(n,i,m,a,l,f,M,T,P)}function Wy(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!ei(m(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ws(n,i,a,l){i&=~jh,i&=~Da,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var m=31-wt(f),M=1<<m;l[m]=-1,f&=~M}a!==0&&Nt(n,a,i)}function pc(){return(Le&6)===0?(Fo(0),!1):!0}function $h(){if(ge!==null){if(Ue===0)var n=ge.return;else n=ge,es=ba=null,gh(n),lr=null,Co=0,n=ge;for(;n!==null;)Xg(n.alternate,n),n=n.return;ge=null}}function gr(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,cS(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),$h(),qe=n,ge=a=Ji(n.current,null),be=i,Ue=0,ai=null,Vs=!1,fr=ee(n,i),Yh=!1,dr=gi=jh=Da=Gs=en=0,Kn=Bo=null,qh=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-wt(l),m=1<<f;i|=n[f],l&=~m}return cs=i,Il(),a}function f_(n,i){he=null,I.H=ec,i===yo||i===Wl?(i=Cm(),Ue=3):i===Am?(i=Cm(),Ue=4):Ue=i===Dg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,ge===null&&(en=1,rc(n,hi(i,n.current)))}function d_(){var n=I.H;return I.H=ec,n===null?ec:n}function p_(){var n=I.A;return I.A=ky,n}function tf(){en=4,Vs||(be&4194048)!==be&&mi.current!==null||(fr=!0),(Gs&134217727)===0&&(Da&134217727)===0||qe===null||Ws(qe,be,gi,!1)}function ef(n,i,a){var l=Le;Le|=2;var f=d_(),m=p_();(qe!==n||be!==i)&&(dc=null,gr(n,i)),i=!1;var M=en;t:do try{if(Ue!==0&&ge!==null){var T=ge,P=ai;switch(Ue){case 8:$h(),M=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var $=Ue;if(Ue=0,ai=null,_r(n,T,P,$),a&&fr){M=0;break t}break;default:$=Ue,Ue=0,ai=null,_r(n,T,P,$)}}Yy(),M=en;break}catch(ct){f_(n,ct)}while(!0);return i&&n.shellSuspendCounter++,es=ba=null,Le=l,I.H=f,I.A=m,ge===null&&(qe=null,be=0,Il()),M}function Yy(){for(;ge!==null;)m_(ge)}function jy(n,i){var a=Le;Le|=2;var l=d_(),f=p_();qe!==n||be!==i?(dc=null,fc=ne()+500,gr(n,i)):fr=ee(n,i);t:do try{if(Ue!==0&&ge!==null){i=ge;var m=ai;e:switch(Ue){case 1:Ue=0,ai=null,_r(n,i,m,1);break;case 2:case 9:if(Rm(m)){Ue=0,ai=null,g_(i);break}i=function(){Ue!==2&&Ue!==9||qe!==n||(Ue=7),Bi(n)},m.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Rm(m)?(Ue=0,ai=null,g_(i)):(Ue=0,ai=null,_r(n,i,m,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var T=ge;if(!M||Q_(M)){Ue=0,ai=null;var P=T.sibling;if(P!==null)ge=P;else{var $=T.return;$!==null?(ge=$,mc($)):ge=null}break e}}Ue=0,ai=null,_r(n,i,m,5);break;case 6:Ue=0,ai=null,_r(n,i,m,6);break;case 8:$h(),en=6;break t;default:throw Error(s(462))}}qy();break}catch(ct){f_(n,ct)}while(!0);return es=ba=null,I.H=l,I.A=f,Le=a,ge!==null?0:(qe=null,be=0,Il(),en)}function qy(){for(;ge!==null&&!Xn();)m_(ge)}function m_(n){var i=Gg(n.alternate,n,cs);n.memoizedProps=n.pendingProps,i===null?mc(n):ge=i}function g_(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=Ig(a,i,i.pendingProps,i.type,void 0,be);break;case 11:i=Ig(a,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:gh(i);default:Xg(a,i),i=ge=_m(i,cs),i=Gg(a,i,cs)}n.memoizedProps=n.pendingProps,i===null?mc(n):ge=i}function _r(n,i,a,l){es=ba=null,gh(i),lr=null,Co=0;var f=i.return;try{if(By(n,f,i,a,be)){en=1,rc(n,hi(a,n.current)),ge=null;return}}catch(m){if(f!==null)throw ge=f,m;en=1,rc(n,hi(a,n.current)),ge=null;return}i.flags&32768?(De||l===1?n=!0:fr||(be&536870912)!==0?n=!1:(Vs=n=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),__(i,n)):mc(i)}function mc(n){var i=n;do{if((i.flags&32768)!==0){__(i,Vs);return}n=i.return;var a=Fy(i.alternate,i,cs);if(a!==null){ge=a;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=n}while(i!==null);en===0&&(en=5)}function __(n,i){do{var a=Hy(n.alternate,n);if(a!==null){a.flags&=32767,ge=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){ge=n;return}ge=n=a}while(n!==null);en=6,ge=null}function v_(n,i,a,l,f,m,M,T,P){n.cancelPendingCommit=null;do gc();while(Dn!==0);if((Le&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(m=i.lanes|i.childLanes,m|=Wu,It(n,a,m,M,T,P),n===qe&&(ge=qe=null,be=0),pr=i,Xs=n,mr=a,Zh=m,Qh=f,l_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Jy(O,function(){return E_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=Z.p,Z.p=2,M=Le,Le|=4;try{Vy(n,i,a)}finally{Le=M,Z.p=f,I.T=l}}Dn=1,x_(),y_(),S_()}}function x_(){if(Dn===1){Dn=0;var n=Xs,i=pr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Le;Le|=4;try{e_(i,n);var m=pf,M=om(n.containerInfo),T=m.focusedElem,P=m.selectionRange;if(M!==T&&T&&T.ownerDocument&&rm(T.ownerDocument.documentElement,T)){if(P!==null&&Hu(T)){var $=P.start,ct=P.end;if(ct===void 0&&(ct=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ct,T.value.length);else{var mt=T.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),$t=T.textContent.length,qt=Math.min(P.start,$t),Fe=P.end===void 0?qt:Math.min(P.end,$t);!it.extend&&qt>Fe&&(M=Fe,Fe=qt,qt=M);var Y=am(T,qt),V=am(T,Fe);if(Y&&V&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),it.removeAllRanges(),qt>Fe?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}wc=!!df,pf=df=null}finally{Le=f,Z.p=l,I.T=a}}n.current=i,Dn=2}}function y_(){if(Dn===2){Dn=0;var n=Xs,i=pr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var l=Z.p;Z.p=2;var f=Le;Le|=4;try{Qg(n,i.alternate,i)}finally{Le=f,Z.p=l,I.T=a}}Dn=3}}function S_(){if(Dn===4||Dn===3){Dn=0,xe();var n=Xs,i=pr,a=mr,l=l_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Dn=5:(Dn=0,pr=Xs=null,M_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(ks=null),rn(a),i=i.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=Z.p,Z.p=2,I.T=null;try{for(var m=n.onRecoverableError,M=0;M<l.length;M++){var T=l[M];m(T.value,{componentStack:T.stack})}}finally{I.T=i,Z.p=f}}(mr&3)!==0&&gc(),Bi(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Jh?zo++:(zo=0,Jh=n):zo=0,Fo(0)}}function M_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,vo(i)))}function gc(n){return x_(),y_(),S_(),E_()}function E_(){if(Dn!==5)return!1;var n=Xs,i=Zh;Zh=0;var a=rn(mr),l=I.T,f=Z.p;try{Z.p=32>a?32:a,I.T=null,a=Qh,Qh=null;var m=Xs,M=mr;if(Dn=0,pr=Xs=null,mr=0,(Le&6)!==0)throw Error(s(331));var T=Le;if(Le|=4,r_(m.current),i_(m,m.current,M,a),Le=T,Fo(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(ut,m)}catch{}return!0}finally{Z.p=f,I.T=l,M_(n,i)}}function b_(n,i,a){i=hi(a,i),i=Dh(n.stateNode,i,2),n=Os(n,i,2),n!==null&&(pt(n,2),Bi(n))}function Xe(n,i,a){if(n.tag===3)b_(n,n,a);else for(;i!==null;){if(i.tag===3){b_(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ks===null||!ks.has(l))){n=hi(a,n),a=wg(2),l=Os(i,a,2),l!==null&&(Cg(a,l,i,n),pt(l,2),Bi(l));break}}i=i.return}}function nf(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new Xy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Yh=!0,f.add(a),n=Ky.bind(null,n,i,a),i.then(n,n))}function Ky(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,qe===n&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>ne()-Kh?(Le&2)===0&&gr(n,0):jh|=a,dr===be&&(dr=0)),Bi(n)}function T_(n,i){i===0&&(i=Ut()),n=Ja(n,i),n!==null&&(pt(n,i),Bi(n))}function Zy(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),T_(n,a)}function Qy(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),T_(n,a)}function Jy(n,i){return de(n,i)}var _c=null,vr=null,sf=!1,vc=!1,af=!1,La=0;function Bi(n){n!==vr&&n.next===null&&(vr===null?_c=vr=n:vr=vr.next=n),vc=!0,sf||(sf=!0,tS())}function Fo(n,i){if(!af&&vc){af=!0;do for(var a=!1,l=_c;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-wt(42|n)+1)-1,m&=f&~(M&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,C_(l,m))}else m=be,m=ue(l,l===qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||ee(l,m)||(a=!0,C_(l,m));l=l.next}while(a);af=!1}}function $y(){A_()}function A_(){vc=sf=!1;var n=0;La!==0&&(lS()&&(n=La),La=0);for(var i=ne(),a=null,l=_c;l!==null;){var f=l.next,m=R_(l,i);m===0?(l.next=null,a===null?_c=f:a.next=f,f===null&&(vr=a)):(a=l,(n!==0||(m&3)!==0)&&(vc=!0)),l=f}Fo(n)}function R_(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var M=31-wt(m),T=1<<M,P=f[M];P===-1?((T&a)===0||(T&l)!==0)&&(f[M]=Ie(T,i)):P<=i&&(n.expiredLanes|=T),m&=~T}if(i=qe,a=be,a=ue(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&F(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||ee(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&F(l),rn(a)){case 2:case 8:a=Vt;break;case 32:a=O;break;case 268435456:a=et;break;default:a=O}return l=w_.bind(null,n),a=de(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&F(l),n.callbackPriority=2,n.callbackNode=null,2}function w_(n,i){if(Dn!==0&&Dn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(gc()&&n.callbackNode!==a)return null;var l=be;return l=ue(n,n===qe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(u_(n,l,i),R_(n,ne()),n.callbackNode!=null&&n.callbackNode===a?w_.bind(null,n):null)}function C_(n,i){if(gc())return null;u_(n,i,!0)}function tS(){uS(function(){(Le&6)!==0?de(Pe,$y):A_()})}function rf(){return La===0&&(La=k()),La}function D_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Cl(""+n)}function L_(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function eS(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var m=D_((f[Rn]||null).action),M=l.submitter;M&&(i=(i=M[Rn]||null)?D_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var T=new Nl("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(La!==0){var P=M?L_(f,M):new FormData(f);Th(a,{pending:!0,data:P,method:f.method,action:m},null,P)}}else typeof m=="function"&&(T.preventDefault(),P=M?L_(f,M):new FormData(f),Th(a,{pending:!0,data:P,method:f.method,action:m},m,P))},currentTarget:f}]})}}for(var of=0;of<Xu.length;of++){var lf=Xu[of],nS=lf.toLowerCase(),iS=lf[0].toUpperCase()+lf.slice(1);Si(nS,"on"+iS)}Si(um,"onAnimationEnd"),Si(hm,"onAnimationIteration"),Si(fm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(yy,"onTransitionRun"),Si(Sy,"onTransitionStart"),Si(My,"onTransitionCancel"),Si(dm,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function U_(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var T=l[M],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=$;try{m(f)}catch(ct){ac(ct)}f.currentTarget=null,m=P}else for(M=0;M<l.length;M++){if(T=l[M],P=T.instance,$=T.currentTarget,T=T.listener,P!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=$;try{m(f)}catch(ct){ac(ct)}f.currentTarget=null,m=P}}}}function _e(n,i){var a=i[da];a===void 0&&(a=i[da]=new Set);var l=n+"__bubble";a.has(l)||(N_(i,n,2,!1),a.add(l))}function cf(n,i,a){var l=0;i&&(l|=4),N_(a,n,l,i)}var xc="_reactListening"+Math.random().toString(36).slice(2);function uf(n){if(!n[xc]){n[xc]=!0,Rl.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||cf(a,!1,n),cf(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[xc]||(i[xc]=!0,cf("selectionchange",!1,i))}}function N_(n,i,a,l){switch(iv(i)){case 2:var f=LS;break;case 8:f=US;break;default:f=bf}a=f.bind(null,i,a,n),f=void 0,!Lu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function hf(n,i,a,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var T=l.stateNode.containerInfo;if(T===f)break;if(M===4)for(M=l.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;T!==null;){if(M=Yi(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){l=m=M;continue t}T=T.parentNode}}l=l.return}Hp(function(){var $=m,ct=Cu(a),mt=[];t:{var nt=pm.get(n);if(nt!==void 0){var it=Nl,$t=n;switch(n){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":it=Jx;break;case"focusin":$t="focus",it=Pu;break;case"focusout":$t="blur",it=Pu;break;case"beforeblur":case"afterblur":it=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=ey;break;case um:case hm:case fm:it=kx;break;case dm:it=iy;break;case"scroll":case"scrollend":it=zx;break;case"wheel":it=ay;break;case"copy":case"cut":case"paste":it=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Wp;break;case"toggle":case"beforetoggle":it=oy}var qt=(i&4)!==0,Fe=!qt&&(n==="scroll"||n==="scrollend"),Y=qt?nt!==null?nt+"Capture":null:nt;qt=[];for(var V=$,Q;V!==null;){var ht=V;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||Y===null||(ht=so(V,Y),ht!=null&&qt.push(Vo(V,ht,Q))),Fe)break;V=V.return}0<qt.length&&(nt=new it(nt,$t,null,a,ct),mt.push({event:nt,listeners:qt}))}}if((i&7)===0){t:{if(nt=n==="mouseover"||n==="pointerover",it=n==="mouseout"||n==="pointerout",nt&&a!==wu&&($t=a.relatedTarget||a.fromElement)&&(Yi($t)||$t[Wn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?($t=a.relatedTarget||a.toElement,it=$,$t=$t?Yi($t):null,$t!==null&&(Fe=c($t),qt=$t.tag,$t!==Fe||qt!==5&&qt!==27&&qt!==6)&&($t=null)):(it=null,$t=$),it!==$t)){if(qt=kp,ht="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(qt=Wp,ht="onPointerLeave",Y="onPointerEnter",V="pointer"),Fe=it==null?nt:ma(it),Q=$t==null?nt:ma($t),nt=new qt(ht,V+"leave",it,a,ct),nt.target=Fe,nt.relatedTarget=Q,ht=null,Yi(ct)===$&&(qt=new qt(Y,V+"enter",$t,a,ct),qt.target=Q,qt.relatedTarget=Fe,ht=qt),Fe=ht,it&&$t)e:{for(qt=it,Y=$t,V=0,Q=qt;Q;Q=xr(Q))V++;for(Q=0,ht=Y;ht;ht=xr(ht))Q++;for(;0<V-Q;)qt=xr(qt),V--;for(;0<Q-V;)Y=xr(Y),Q--;for(;V--;){if(qt===Y||Y!==null&&qt===Y.alternate)break e;qt=xr(qt),Y=xr(Y)}qt=null}else qt=null;it!==null&&O_(mt,nt,it,qt,!1),$t!==null&&Fe!==null&&O_(mt,Fe,$t,qt,!0)}}t:{if(nt=$?ma($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=$p;else if(Qp(nt))if(tm)Ht=_y;else{Ht=my;var pe=py}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Ru($.elementType)&&(Ht=$p):Ht=gy;if(Ht&&(Ht=Ht(n,$))){Jp(mt,Ht,a,ct);break t}pe&&pe(n,nt,$),n==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Nn(nt,"number",nt.value)}switch(pe=$?ma($):window,n){case"focusin":(Qp(pe)||pe.contentEditable==="true")&&(Ka=pe,Vu=$,fo=null);break;case"focusout":fo=Vu=Ka=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,lm(mt,a,ct);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":lm(mt,a,ct)}var Gt;if(Bu)t:{switch(n){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else qa?Kp(n,a)&&(Qt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(Yp&&a.locale!=="ko"&&(qa||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&qa&&(Gt=Vp()):(Ds=ct,Uu="value"in Ds?Ds.value:Ds.textContent,qa=!0)),pe=yc($,Qt),0<pe.length&&(Qt=new Xp(Qt,n,null,a,ct),mt.push({event:Qt,listeners:pe}),Gt?Qt.data=Gt:(Gt=Zp(a),Gt!==null&&(Qt.data=Gt)))),(Gt=cy?uy(n,a):hy(n,a))&&(Qt=yc($,"onBeforeInput"),0<Qt.length&&(pe=new Xp("onBeforeInput","beforeinput",null,a,ct),mt.push({event:pe,listeners:Qt}),pe.data=Gt)),eS(mt,n,$,a,ct)}U_(mt,i)})}function Vo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function yc(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=so(n,a),f!=null&&l.unshift(Vo(n,f,m)),f=so(n,i),f!=null&&l.push(Vo(n,f,m))),n.tag===3)return l;n=n.return}return[]}function xr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function O_(n,i,a,l,f){for(var m=i._reactName,M=[];a!==null&&a!==l;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===l)break;T!==5&&T!==26&&T!==27||$===null||(P=$,f?($=so(a,m),$!=null&&M.unshift(Vo(a,$,P))):f||($=so(a,m),$!=null&&M.push(Vo(a,$,P)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function P_(n){return(typeof n=="string"?n:""+n).replace(aS,`
`).replace(rS,"")}function I_(n,i){return i=P_(i),P_(n)===i}function Sc(){}function ze(n,i,a,l,f,m){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ui(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ui(n,""+l);break;case"className":Ct(n,"class",l);break;case"tabIndex":Ct(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(n,a,l);break;case"style":zp(n,l,m);break;case"data":if(i!=="object"){Ct(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Cl(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(i!=="input"&&ze(n,i,"name",f.name,f,null),ze(n,i,"formEncType",f.formEncType,f,null),ze(n,i,"formMethod",f.formMethod,f,null),ze(n,i,"formTarget",f.formTarget,f,null)):(ze(n,i,"encType",f.encType,f,null),ze(n,i,"method",f.method,f,null),ze(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Cl(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Sc);break;case"onScroll":l!=null&&_e("scroll",n);break;case"onScrollEnd":l!=null&&_e("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Cl(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":_e("beforetoggle",n),_e("toggle",n),Et(n,"popover",l);break;case"xlinkActuate":Dt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Dt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Dt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Dt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Dt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Dt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Et(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ix.get(a)||a,Et(n,a,l))}}function ff(n,i,a,l,f,m){switch(a){case"style":zp(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Ui(n,l):(typeof l=="number"||typeof l=="bigint")&&Ui(n,""+l);break;case"onScroll":l!=null&&_e("scroll",n);break;case"onScrollEnd":l!=null&&_e("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),m=n[Rn]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break t}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Et(n,a,l)}}}function Ln(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",n),_e("load",n);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var M=a[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ze(n,i,m,M,a,null)}}f&&ze(n,i,"srcSet",a.srcSet,a,null),l&&ze(n,i,"src",a.src,a,null);return;case"input":_e("invalid",n);var T=m=M=f=null,P=null,$=null;for(l in a)if(a.hasOwnProperty(l)){var ct=a[l];if(ct!=null)switch(l){case"name":f=ct;break;case"type":M=ct;break;case"checked":P=ct;break;case"defaultChecked":$=ct;break;case"value":m=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:ze(n,i,l,ct,a,null)}}ke(n,m,T,P,$,M,f,!1),$e(n);return;case"select":_e("invalid",n),l=M=m=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":M=T;break;case"multiple":l=T;default:ze(n,i,f,T,a,null)}i=m,a=M,n.multiple=!!l,i!=null?dn(n,!!l,i,!1):a!=null&&dn(n,!!l,a,!0);return;case"textarea":_e("invalid",n),m=f=l=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:ze(n,i,M,T,a,null)}wn(n,l,f,m),$e(n);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(l=a[P],l!=null))switch(P){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ze(n,i,P,l,a,null)}return;case"dialog":_e("beforetoggle",n),_e("toggle",n),_e("cancel",n),_e("close",n);break;case"iframe":case"object":_e("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)_e(Ho[l],n);break;case"image":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"embed":case"source":case"link":_e("error",n),_e("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(l=a[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:ze(n,i,$,l,a,null)}return;default:if(Ru(i)){for(ct in a)a.hasOwnProperty(ct)&&(l=a[ct],l!==void 0&&ff(n,i,ct,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&ze(n,i,T,l,a,null))}function oS(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,T=null,P=null,$=null,ct=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:l.hasOwnProperty(it)||ze(n,i,it,null,l,mt)}}for(var nt in l){var it=l[nt];if(mt=a[nt],l.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":m=it;break;case"name":f=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":M=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,i));break;default:it!==mt&&ze(n,i,nt,it,l,mt)}}Ki(n,M,T,P,$,ct,m,f);return;case"select":it=M=T=nt=null;for(m in a)if(P=a[m],a.hasOwnProperty(m)&&P!=null)switch(m){case"value":break;case"multiple":it=P;default:l.hasOwnProperty(m)||ze(n,i,m,null,l,P)}for(f in l)if(m=l[f],P=a[f],l.hasOwnProperty(f)&&(m!=null||P!=null))switch(f){case"value":nt=m;break;case"defaultValue":T=m;break;case"multiple":M=m;default:m!==P&&ze(n,i,f,m,l,P)}i=T,a=M,l=it,nt!=null?dn(n,!!a,nt,!1):!!l!=!!a&&(i!=null?dn(n,!!a,i,!0):dn(n,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(n,i,T,null,l,f)}for(M in l)if(f=l[M],m=a[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":nt=f;break;case"defaultValue":it=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&ze(n,i,M,f,l,m)}Sn(n,nt,it);return;case"option":for(var $t in a)if(nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!l.hasOwnProperty($t))switch($t){case"selected":n.selected=!1;break;default:ze(n,i,$t,null,l,nt)}for(P in l)if(nt=l[P],it=a[P],l.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":n.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:ze(n,i,P,nt,l,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)nt=a[qt],a.hasOwnProperty(qt)&&nt!=null&&!l.hasOwnProperty(qt)&&ze(n,i,qt,null,l,nt);for($ in l)if(nt=l[$],it=a[$],l.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,i));break;default:ze(n,i,$,nt,l,it)}return;default:if(Ru(i)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!l.hasOwnProperty(Fe)&&ff(n,i,Fe,void 0,l,nt);for(ct in l)nt=l[ct],it=a[ct],!l.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||ff(n,i,ct,nt,l,it);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!l.hasOwnProperty(Y)&&ze(n,i,Y,null,l,nt);for(mt in l)nt=l[mt],it=a[mt],!l.hasOwnProperty(mt)||nt===it||nt==null&&it==null||ze(n,i,mt,nt,l,it)}var df=null,pf=null;function Mc(n){return n.nodeType===9?n:n.ownerDocument}function B_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function mf(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gf=null;function lS(){var n=window.event;return n&&n.type==="popstate"?n===gf?!1:(gf=n,!0):(gf=null,!1)}var F_=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(n){return H_.resolve(null).then(n).catch(hS)}:F_;function hS(n){setTimeout(function(){throw n})}function Ys(n){return n==="head"}function V_(n,i){var a=i,l=0,f=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<l&&8>l){a=l;var M=n.ownerDocument;if(a&1&&Go(M.documentElement),a&2&&Go(M.body),a&4)for(a=M.head,Go(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[As]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(f===0){n.removeChild(m),Zo(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=m}while(a);Zo(i)}function _f(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_f(a),Rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function fS(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[As])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ei(n.nextSibling),n===null)break}return null}function dS(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Ei(n.nextSibling),n===null))return null;return n}function vf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function pS(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Ei(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var xf=null;function G_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function k_(n,i,a){switch(i=Mc(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Go(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Rs(n)}var _i=new Map,X_=new Set;function Ec(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var us=Z.d;Z.d={f:mS,r:gS,D:_S,C:vS,L:xS,m:yS,X:MS,S:SS,M:ES};function mS(){var n=us.f(),i=pc();return n||i}function gS(n){var i=ji(n);i!==null&&i.tag===5&&i.type==="form"?ug(i):us.r(n)}var yr=typeof document>"u"?null:document;function W_(n,i,a){var l=yr;if(l&&typeof i=="string"&&i){var f=je(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),X_.has(f)||(X_.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",n),on(i),l.head.appendChild(i)))}}function _S(n){us.D(n),W_("dns-prefetch",n,null)}function vS(n,i){us.C(n,i),W_("preconnect",n,i)}function xS(n,i,a){us.L(n,i,a);var l=yr;if(l&&n&&i){var f='link[rel="preload"][as="'+je(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+je(a.imageSizes)+'"]')):f+='[href="'+je(n)+'"]';var m=f;switch(i){case"style":m=Sr(n);break;case"script":m=Mr(n)}_i.has(m)||(n=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),_i.set(m,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(ko(m))||i==="script"&&l.querySelector(Xo(m))||(i=l.createElement("link"),Ln(i,"link",n),on(i),l.head.appendChild(i)))}}function yS(n,i){us.m(n,i);var a=yr;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+je(l)+'"][href="'+je(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Mr(n)}if(!_i.has(m)&&(n=g({rel:"modulepreload",href:n},i),_i.set(m,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xo(m)))return}l=a.createElement("link"),Ln(l,"link",n),on(l),a.head.appendChild(l)}}}function SS(n,i,a){us.S(n,i,a);var l=yr;if(l&&n){var f=ws(l).hoistableStyles,m=Sr(n);i=i||"default";var M=f.get(m);if(!M){var T={loading:0,preload:null};if(M=l.querySelector(ko(m)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},a),(a=_i.get(m))&&yf(n,a);var P=M=l.createElement("link");on(P),Ln(P,"link",n),P._p=new Promise(function($,ct){P.onload=$,P.onerror=ct}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,bc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:T},f.set(m,M)}}}function MS(n,i){us.X(n,i);var a=yr;if(a&&n){var l=ws(a).hoistableScripts,f=Mr(n),m=l.get(f);m||(m=a.querySelector(Xo(f)),m||(n=g({src:n,async:!0},i),(i=_i.get(f))&&Sf(n,i),m=a.createElement("script"),on(m),Ln(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function ES(n,i){us.M(n,i);var a=yr;if(a&&n){var l=ws(a).hoistableScripts,f=Mr(n),m=l.get(f);m||(m=a.querySelector(Xo(f)),m||(n=g({src:n,async:!0,type:"module"},i),(i=_i.get(f))&&Sf(n,i),m=a.createElement("script"),on(m),Ln(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Y_(n,i,a,l){var f=(f=xt.current)?Ec(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Sr(a.href),a=ws(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Sr(a.href);var m=ws(f).hoistableStyles,M=m.get(n);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,M),(m=f.querySelector(ko(n)))&&!m._p&&(M.instance=m,M.state.loading=5),_i.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(n,a),m||bS(f,n,a,M.state))),i&&l===null)throw Error(s(528,""));return M}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Mr(a),a=ws(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Sr(n){return'href="'+je(n)+'"'}function ko(n){return'link[rel="stylesheet"]['+n+"]"}function j_(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function bS(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",a),on(i),n.head.appendChild(i))}function Mr(n){return'[src="'+je(n)+'"]'}function Xo(n){return"script[async]"+n}function q_(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+je(a.href)+'"]');if(l)return i.instance=l,on(l),l;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),on(l),Ln(l,"style",f),bc(l,a.precedence,n),i.instance=l;case"stylesheet":f=Sr(a.href);var m=n.querySelector(ko(f));if(m)return i.state.loading|=4,i.instance=m,on(m),m;l=j_(a),(f=_i.get(f))&&yf(l,f),m=(n.ownerDocument||n).createElement("link"),on(m);var M=m;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Ln(m,"link",l),i.state.loading|=4,bc(m,a.precedence,n),i.instance=m;case"script":return m=Mr(a.src),(f=n.querySelector(Xo(m)))?(i.instance=f,on(f),f):(l=a,(f=_i.get(m))&&(l=g({},a),Sf(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),on(f),Ln(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,bc(l,a.precedence,n));return i.instance}function bc(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var T=l[M];if(T.dataset.precedence===i)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function yf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Sf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Tc=null;function K_(n,i,a){if(Tc===null){var l=new Map,f=Tc=new Map;f.set(a,l)}else f=Tc,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[As]||m[fn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=n+M;var T=l.get(M);T?T.push(m):l.set(M,[m])}}return l}function Z_(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function TS(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Q_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Wo=null;function AS(){}function RS(n,i,a){if(Wo===null)throw Error(s(475));var l=Wo;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Sr(a.href),m=n.querySelector(ko(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Ac.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=m,on(m);return}m=n.ownerDocument||n,a=j_(a),(f=_i.get(f))&&yf(a,f),m=m.createElement("link"),on(m);var M=m;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Ln(m,"link",a),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Ac.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function wS(){if(Wo===null)throw Error(s(475));var n=Wo;return n.stylesheets&&n.count===0&&Mf(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Mf(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Ac(){if(this.count--,this.count===0){if(this.stylesheets)Mf(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rc=null;function Mf(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rc=new Map,i.forEach(CS,n),Rc=null,Ac.call(n))}function CS(n,i){if(!(i.state.loading&4)){var a=Rc.get(n);if(a)var l=a.get(null);else{a=new Map,Rc.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),l=M)}l&&a.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=a.get(M)||l,m===l&&a.set(null,f),a.set(M,f),this.count++,l=Ac.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var Yo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function DS(n,i,a,l,f,m,M,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function J_(n,i,a,l,f,m,M,T,P,$,ct,mt){return n=new DS(n,i,a,M,T,P,$,mt),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),n.current=m,m.stateNode=n,i=nh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:i},rh(m),n}function $_(n){return n?(n=$a,n):$a}function tv(n,i,a,l,f,m){f=$_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ns(i),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=Os(n,l,i),a!==null&&(oi(a,n,i),Mo(a,n,i))}function ev(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ef(n,i){ev(n,i),(n=n.alternate)&&ev(n,i)}function nv(n){if(n.tag===13){var i=Ja(n,67108864);i!==null&&oi(i,n,67108864),Ef(n,67108864)}}var wc=!0;function LS(n,i,a,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=2,bf(n,i,a,l)}finally{Z.p=m,I.T=f}}function US(n,i,a,l){var f=I.T;I.T=null;var m=Z.p;try{Z.p=8,bf(n,i,a,l)}finally{Z.p=m,I.T=f}}function bf(n,i,a,l){if(wc){var f=Tf(l);if(f===null)hf(n,i,l,Cc,a),sv(n,l);else if(OS(f,n,i,a,l))l.stopPropagation();else if(sv(n,l),i&4&&-1<NS.indexOf(n)){for(;f!==null;){var m=ji(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Pt(m.pendingLanes);if(M!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-wt(M);T.entanglements[1]|=P,M&=~P}Bi(m),(Le&6)===0&&(fc=ne()+500,Fo(0))}}break;case 13:T=Ja(m,2),T!==null&&oi(T,m,2),pc(),Ef(m,2)}if(m=Tf(l),m===null&&hf(n,i,l,Cc,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else hf(n,i,l,null,a)}}function Tf(n){return n=Cu(n),Af(n)}var Cc=null;function Af(n){if(Cc=null,n=Yi(n),n!==null){var i=c(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=u(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Cc=n,null}function iv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Pe:return 2;case Vt:return 8;case O:case A:return 32;case et:return 268435456;default:return 32}default:return 32}}var Rf=!1,js=null,qs=null,Ks=null,jo=new Map,qo=new Map,Zs=[],NS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(n,i){switch(n){case"focusin":case"focusout":js=null;break;case"dragenter":case"dragleave":qs=null;break;case"mouseover":case"mouseout":Ks=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Ko(n,i,a,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ji(i),i!==null&&nv(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function OS(n,i,a,l,f){switch(i){case"focusin":return js=Ko(js,n,i,a,l,f),!0;case"dragenter":return qs=Ko(qs,n,i,a,l,f),!0;case"mouseover":return Ks=Ko(Ks,n,i,a,l,f),!0;case"pointerover":var m=f.pointerId;return jo.set(m,Ko(jo.get(m)||null,n,i,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,qo.set(m,Ko(qo.get(m)||null,n,i,a,l,f)),!0}return!1}function av(n){var i=Yi(n.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){n.blockedOn=i,ti(n.priority,function(){if(a.tag===13){var l=ri();l=Ye(l);var f=Ja(a,l);f!==null&&oi(f,a,l),Ef(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Tf(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);wu=l,a.target.dispatchEvent(l),wu=null}else return i=ji(a),i!==null&&nv(i),n.blockedOn=a,!1;i.shift()}return!0}function rv(n,i,a){Dc(n)&&a.delete(i)}function PS(){Rf=!1,js!==null&&Dc(js)&&(js=null),qs!==null&&Dc(qs)&&(qs=null),Ks!==null&&Dc(Ks)&&(Ks=null),jo.forEach(rv),qo.forEach(rv)}function Lc(n,i){n.blockedOn===i&&(n.blockedOn=null,Rf||(Rf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,PS)))}var Uc=null;function ov(n){Uc!==n&&(Uc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Uc===n&&(Uc=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(Af(l||a)===null)continue;break}var m=ji(a);m!==null&&(n.splice(i,3),i-=3,Th(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Zo(n){function i(P){return Lc(P,n)}js!==null&&Lc(js,n),qs!==null&&Lc(qs,n),Ks!==null&&Lc(Ks,n),jo.forEach(i),qo.forEach(i);for(var a=0;a<Zs.length;a++){var l=Zs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Zs.length&&(a=Zs[0],a.blockedOn===null);)av(a),a.blockedOn===null&&Zs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],M=f[Rn]||null;if(typeof m=="function")M||ov(a);else if(M){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[Rn]||null)T=M.formAction;else if(Af(f)!==null)continue}else T=M.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),ov(a)}}}function wf(n){this._internalRoot=n}Nc.prototype.render=wf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=ri();tv(a,l,n,i,null,null)},Nc.prototype.unmount=wf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;tv(n.current,2,null,n,null,null),pc(),i[Wn]=null}};function Nc(n){this._internalRoot=n}Nc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ae();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zs.length&&i!==0&&i<Zs[a].priority;a++);Zs.splice(a,0,n),a===0&&av(n)}};var lv=t.version;if(lv!=="19.1.0")throw Error(s(527,lv,"19.1.0"));Z.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=d(i),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var IS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{ut=Oc.inject(IS),Bt=Oc}catch{}}return Jo.createRoot=function(n,i){if(!r(n))throw Error(s(299));var a=!1,l="",f=bg,m=Tg,M=Ag,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=J_(n,1,!1,null,null,a,l,f,m,M,T,null),n[Wn]=i.current,uf(n),new wf(i)},Jo.hydrateRoot=function(n,i,a){if(!r(n))throw Error(s(299));var l=!1,f="",m=bg,M=Tg,T=Ag,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),i=J_(n,1,!0,i,a??null,l,f,m,M,T,P,$),i.context=$_(null),a=i.current,l=ri(),l=Ye(l),f=Ns(l),f.callback=null,Os(a,f,l),a=l,i.current.lanes=a,pt(i,a),Bi(i),n[Wn]=i.current,uf(n),new Nc(i)},Jo.version="19.1.0",Jo}var vv;function YS(){if(vv)return Lf.exports;vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Lf.exports=WS(),Lf.exports}var jS=YS();const qS="/Portfolio_DiegoGonzalez/assets/react-CHdo91hT.svg",KS="/Portfolio_DiegoGonzalez/vite.svg",ZS="/Portfolio_DiegoGonzalez/images/ideas.svg",QS="/Portfolio_DiegoGonzalez/images/designs.svg",JS="/Portfolio_DiegoGonzalez/images/code.svg",$S="/Portfolio_DiegoGonzalez/images/concepts.svg",tM=[{name:"Perfil",link:"#myself"},{name:"Experience",link:"#experience"},{name:"Skills",link:"#skills"},{name:"Contacto",link:"#contact"}],pp=[{text:"Ideas",imgPath:ZS},{text:"Análisis",imgPath:QS},{text:"Ingenio",imgPath:$S},{text:"Diseño",imgPath:JS}],eM=()=>bt.jsx("header",{className:"navbar",children:bt.jsxs("div",{className:"inner",children:[bt.jsx("a",{className:"logo",href:"#hero",children:"DG"}),bt.jsx("nav",{className:"desktop",children:bt.jsx("ul",{children:tM.map(({link:o,name:t})=>bt.jsx("li",{className:"group",children:bt.jsxs("a",{href:o,children:[bt.jsx("span",{children:t}),bt.jsx("span",{className:"underline"})]})},t))})}),bt.jsx("a",{href:"#contact",className:"contact-btn group",children:bt.jsx("div",{className:"inner",children:bt.jsx("span",{children:"Contacto"})})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="175",Hr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nM=0,xv=1,iM=2,q0=1,sM=2,_s=3,Es=0,$n=1,Ri=2,ua=0,Vr=1,yv=2,Sv=3,Mv=4,aM=5,Ha=100,rM=101,oM=102,lM=103,cM=104,uM=200,hM=201,fM=202,dM=203,Sd=204,Md=205,pM=206,mM=207,gM=208,_M=209,vM=210,xM=211,yM=212,SM=213,MM=214,Ed=0,bd=1,Td=2,Xr=3,Ad=4,Rd=5,wd=6,Cd=7,K0=0,EM=1,bM=2,ha=0,TM=1,AM=2,RM=3,wM=4,CM=5,DM=6,LM=7,Ev="attached",UM="detached",Z0=300,Wr=301,Yr=302,Dd=303,Ld=304,Tu=306,jr=1e3,oa=1001,_u=1002,an=1003,Q0=1004,ll=1005,ui=1006,cu=1007,xs=1008,bs=1009,J0=1010,$0=1011,dl=1012,mp=1013,ka=1014,Jn=1015,Ml=1016,gp=1017,_p=1018,pl=1020,tx=35902,ex=1021,nx=1022,Gn=1023,ix=1024,sx=1025,ml=1026,gl=1027,vp=1028,xp=1029,ax=1030,yp=1031,Sp=1033,uu=33776,hu=33777,fu=33778,du=33779,Ud=35840,Nd=35841,Od=35842,Pd=35843,Id=36196,Bd=37492,zd=37496,Fd=37808,Hd=37809,Vd=37810,Gd=37811,kd=37812,Xd=37813,Wd=37814,Yd=37815,jd=37816,qd=37817,Kd=37818,Zd=37819,Qd=37820,Jd=37821,pu=36492,$d=36494,tp=36495,rx=36283,ep=36284,np=36285,ip=36286,_l=2300,vl=2301,Pf=2302,bv=2400,Tv=2401,Av=2402,NM=2500,OM=0,ox=1,sp=2,PM=3200,IM=3201,lx=0,BM=1,ra="",hn="srgb",zn="srgb-linear",vu="linear",He="srgb",Er=7680,Rv=519,zM=512,FM=513,HM=514,cx=515,VM=516,GM=517,kM=518,XM=519,ap=35044,wv="300 es",ys=2e3,xu=2001;class Xa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){const s=this._listeners;if(s===void 0)return;const r=s[t];if(r!==void 0){const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const s=e[t.type];if(s!==void 0){t.target=this;const r=s.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cv=1234567;const ul=Math.PI/180,qr=180/Math.PI;function Di(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function fe(o,t,e){return Math.max(t,Math.min(e,o))}function Mp(o,t){return(o%t+t)%t}function WM(o,t,e,s,r){return s+(o-t)*(r-s)/(e-t)}function YM(o,t,e){return o!==t?(e-o)/(t-o):0}function hl(o,t,e){return(1-e)*o+e*t}function jM(o,t,e,s){return hl(o,t,1-Math.exp(-e*s))}function qM(o,t=1){return t-Math.abs(Mp(o,t*2)-t)}function KM(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function ZM(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function QM(o,t){return o+Math.floor(Math.random()*(t-o+1))}function JM(o,t){return o+Math.random()*(t-o)}function $M(o){return o*(.5-Math.random())}function tE(o){o!==void 0&&(Cv=o);let t=Cv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eE(o){return o*ul}function nE(o){return o*qr}function iE(o){return(o&o-1)===0&&o!==0}function sE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function aE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rE(o,t,e,s,r){const c=Math.cos,u=Math.sin,h=c(e/2),d=u(e/2),p=c((t+s)/2),g=u((t+s)/2),_=c((t-s)/2),v=u((t-s)/2),y=c((s-t)/2),E=u((s-t)/2);switch(r){case"XYX":o.set(h*g,d*_,d*v,h*p);break;case"YZY":o.set(d*v,h*g,d*_,h*p);break;case"ZXZ":o.set(d*_,d*v,h*g,h*p);break;case"XZX":o.set(h*g,d*E,d*y,h*p);break;case"YXY":o.set(d*y,h*g,d*E,h*p);break;case"ZYZ":o.set(d*E,d*y,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ne(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ux={DEG2RAD:ul,RAD2DEG:qr,generateUUID:Di,clamp:fe,euclideanModulo:Mp,mapLinear:WM,inverseLerp:YM,lerp:hl,damp:jM,pingpong:qM,smoothstep:KM,smootherstep:ZM,randInt:QM,randFloat:JM,randFloatSpread:$M,seededRandom:tE,degToRad:eE,radToDeg:nE,isPowerOfTwo:iE,ceilPowerOfTwo:sE,floorPowerOfTwo:aE,setQuaternionFromProperEuler:rE,normalize:Ne,denormalize:wi};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6],this.y=r[1]*e+r[4]*s+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),r=Math.sin(e),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*r+t.x,this.y=c*r+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,s,r,c,u,h,d,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,r,c,u,h,d,p)}set(t,e,s,r,c,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=c,g[5]=d,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,c=this.elements,u=s[0],h=s[3],d=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],b=r[0],S=r[3],x=r[6],D=r[1],L=r[4],w=r[7],z=r[2],H=r[5],B=r[8];return c[0]=u*b+h*D+d*z,c[3]=u*S+h*L+d*H,c[6]=u*x+h*w+d*B,c[1]=p*b+g*D+_*z,c[4]=p*S+g*L+_*H,c[7]=p*x+g*w+_*B,c[2]=v*b+y*D+E*z,c[5]=v*S+y*L+E*H,c[8]=v*x+y*w+E*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],r=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return e*u*g-e*h*p-s*c*g+s*h*d+r*c*p-r*u*d}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=g*u-h*p,v=h*d-g*c,y=p*c-u*d,E=e*_+s*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(r*p-g*s)*b,t[2]=(h*s-r*u)*b,t[3]=v*b,t[4]=(g*e-r*d)*b,t[5]=(r*c-h*e)*b,t[6]=y*b,t[7]=(s*d-p*e)*b,t[8]=(u*e-s*c)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,r,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(s*d,s*p,-s*(d*u+p*h)+u+t,-r*p,r*d,-r*(-p*u+d*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(If.makeScale(t,e)),this}rotate(t){return this.premultiply(If.makeRotation(-t)),this}translate(t,e){return this.premultiply(If.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<9;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const If=new oe;function hx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function xl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oE(){const o=xl("canvas");return o.style.display="block",o}const Dv={};function mu(o){o in Dv||(Dv[o]=!0,console.warn(o))}function lE(o,t,e){return new Promise(function(s,r){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,e);break;default:s()}}setTimeout(c,e)})}function cE(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uE(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lv=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){const o={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===He&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===He&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},fromWorkingColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},toWorkingColorSpace:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ra?vu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[zn]:{primaries:t,whitePoint:s,transfer:vu,toXYZ:Lv,fromXYZ:Uv,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:Lv,fromXYZ:Uv,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),o}const Ee=hE();function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let br;class fE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=xl("canvas")),br.width=t.width,br.height=t.height;const r=br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xl("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const r=s.getImageData(0,0,t.width,t.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Ss(c[u]/255)*255;return s.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(Ss(e[s]/255)*255):e[s]=Ss(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dE=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Bf(r[u].image)):c.push(Bf(r[u]))}else c=Bf(r);s.url=c}return e||(t.images[this.uuid]=s),s}}function Bf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pE=0;class An extends Xa{constructor(t=An.DEFAULT_IMAGE,e=An.DEFAULT_MAPPING,s=oa,r=oa,c=ui,u=xs,h=Gn,d=bs,p=An.DEFAULT_ANISOTROPY,g=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Di(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case oa:t.x=t.x<0?0:1;break;case _u:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case oa:t.y=t.y<0?0:1;break;case _u:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Z0;An.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,s=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,r){return this.x=t,this.y=e,this.z=s,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,c=this.w,u=t.elements;return this.x=u[0]*e+u[4]*s+u[8]*r+u[12]*c,this.y=u[1]*e+u[5]*s+u[9]*r+u[13]*c,this.z=u[2]*e+u[6]*s+u[10]*r+u[14]*c,this.w=u[3]*e+u[7]*s+u[11]*r+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,r,c;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],y=d[5],E=d[9],b=d[2],S=d[6],x=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(p+1)/2,w=(y+1)/2,z=(x+1)/2,H=(g+v)/4,B=(_+b)/4,W=(E+S)/4;return L>w&&L>z?L<.01?(s=0,r=.707106781,c=.707106781):(s=Math.sqrt(L),r=H/s,c=B/s):w>z?w<.01?(s=.707106781,r=0,c=.707106781):(r=Math.sqrt(w),s=H/r,c=W/r):z<.01?(s=.707106781,r=.707106781,c=0):(c=Math.sqrt(z),s=B/c,r=W/c),this.set(s,r,c,e),this}let D=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(_-b)/D,this.z=(v-g)/D,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mE extends Xa{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new An(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,s=1){if(this.width!==t||this.height!==e||this.depth!==s){this.width=t,this.height=e,this.depth=s;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=s;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,s=t.textures.length;e<s;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ep(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fa extends mE{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class fx extends An{constructor(t=null,e=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends An{constructor(t=null,e=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=r}static slerpFlat(t,e,s,r,c,u,h){let d=s[r+0],p=s[r+1],g=s[r+2],_=s[r+3];const v=c[u+0],y=c[u+1],E=c[u+2],b=c[u+3];if(h===0){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h===1){t[e+0]=v,t[e+1]=y,t[e+2]=E,t[e+3]=b;return}if(_!==b||d!==v||p!==y||g!==E){let S=1-h;const x=d*v+p*y+g*E+_*b,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const z=Math.sqrt(L),H=Math.atan2(z,x*D);S=Math.sin(S*H)/z,h=Math.sin(h*H)/z}const w=h*D;if(d=d*S+v*w,p=p*S+y*w,g=g*S+E*w,_=_*S+b*w,S===1-h){const z=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=z,p*=z,g*=z,_*=z}}t[e]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,s,r,c,u){const h=s[r],d=s[r+1],p=s[r+2],g=s[r+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return t[e]=h*E+g*_+d*y-p*v,t[e+1]=d*E+g*v+p*_-h*y,t[e+2]=p*E+g*y+h*v-d*_,t[e+3]=g*E-h*_-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,r){return this._x=t,this._y=e,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,r=t._y,c=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(s/2),g=h(r/2),_=h(c/2),v=d(s/2),y=d(r/2),E=d(c/2);switch(u){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],r=e[4],c=e[8],u=e[1],h=e[5],d=e[9],p=e[2],g=e[6],_=e[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-d)*y,this._y=(c-p)*y,this._z=(u-r)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-d)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(u-r)/y,this._x=(c+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,e/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,r=t._y,c=t._z,u=t._w,h=e._x,d=e._y,p=e._z,g=e._w;return this._x=s*g+u*h+r*p-c*d,this._y=r*g+u*d+c*h-s*p,this._z=c*g+u*p+s*d-r*h,this._w=u*g-s*h-r*d-c*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,r=this._y,c=this._z,u=this._w;let h=u*t._w+s*t._x+r*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=s,this._y=r,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const y=1-e;return this._w=y*u+e*this._w,this._x=y*s+e*this._x,this._y=y*r+e*this._y,this._z=y*c+e*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-e)*g)/p,v=Math.sin(e*g)/p;return this._w=u*_+this._w*v,this._x=s*_+this._x*v,this._y=r*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(r*Math.sin(t),r*Math.cos(t),c*Math.sin(e),c*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,r=this.z,c=t.elements;return this.x=c[0]*e+c[3]*s+c[6]*r,this.y=c[1]*e+c[4]*s+c[7]*r,this.z=c[2]*e+c[5]*s+c[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,c=t.elements,u=1/(c[3]*e+c[7]*s+c[11]*r+c[15]);return this.x=(c[0]*e+c[4]*s+c[8]*r+c[12])*u,this.y=(c[1]*e+c[5]*s+c[9]*r+c[13])*u,this.z=(c[2]*e+c[6]*s+c[10]*r+c[14])*u,this}applyQuaternion(t){const e=this.x,s=this.y,r=this.z,c=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*r-h*s),g=2*(h*e-c*r),_=2*(c*s-u*e);return this.x=e+d*p+u*_-h*g,this.y=s+d*g+h*p-c*_,this.z=r+d*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,r=this.z,c=t.elements;return this.x=c[0]*e+c[4]*s+c[8]*r,this.y=c[1]*e+c[5]*s+c[9]*r,this.z=c[2]*e+c[6]*s+c[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,r=t.y,c=t.z,u=e.x,h=e.y,d=e.z;return this.x=r*d-c*h,this.y=c*u-s*d,this.z=s*h-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return zf.copy(this).projectOnVector(t),this.sub(zf)}reflect(t){return this.sub(zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return e*e+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const r=Math.sin(e)*t;return this.x=r*Math.sin(s),this.y=Math.cos(e)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new X,Nv=new Vi;class Ts{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(e===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,bi):bi.fromBufferAttribute(c,u),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pc.copy(s.boundingBox)),Pc.applyMatrix4(t.matrixWorld),this.union(Pc)}const r=t.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),Ic.subVectors(this.max,$o),Tr.subVectors(t.a,$o),Ar.subVectors(t.b,$o),Rr.subVectors(t.c,$o),Js.subVectors(Ar,Tr),$s.subVectors(Rr,Ar),Ua.subVectors(Tr,Rr);let e=[0,-Js.z,Js.y,0,-$s.z,$s.y,0,-Ua.z,Ua.y,Js.z,0,-Js.x,$s.z,0,-$s.x,Ua.z,0,-Ua.x,-Js.y,Js.x,0,-$s.y,$s.x,0,-Ua.y,Ua.x,0];return!Ff(e,Tr,Ar,Rr,Ic)||(e=[1,0,0,0,1,0,0,0,1],!Ff(e,Tr,Ar,Rr,Ic))?!1:(Bc.crossVectors(Js,$s),e=[Bc.x,Bc.y,Bc.z],Ff(e,Tr,Ar,Rr,Ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hs=[new X,new X,new X,new X,new X,new X,new X,new X],bi=new X,Pc=new Ts,Tr=new X,Ar=new X,Rr=new X,Js=new X,$s=new X,Ua=new X,$o=new X,Ic=new X,Bc=new X,Na=new X;function Ff(o,t,e,s,r){for(let c=0,u=o.length-3;c<=u;c+=3){Na.fromArray(o,c);const h=r.x*Math.abs(Na.x)+r.y*Math.abs(Na.y)+r.z*Math.abs(Na.z),d=t.dot(Na),p=e.dot(Na),g=s.dot(Na);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const _E=new Ts,tl=new X,Hf=new X;class Xi{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):_E.setFromPoints(t).getCenter(s);let r=0;for(let c=0,u=t.length;c<u;c++)r=Math.max(r,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const e=tl.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),r=(s-this.radius)*.5;this.center.addScaledVector(tl,r/s),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(Hf)),this.expandByPoint(tl.copy(t.center).sub(Hf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fs=new X,Vf=new X,zc=new X,ta=new X,Gf=new X,Fc=new X,kf=new X;class to{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,s,r){Vf.copy(t).add(e).multiplyScalar(.5),zc.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(Vf);const c=t.distanceTo(e)*.5,u=-this.direction.dot(zc),h=ta.dot(this.direction),d=-ta.dot(zc),p=ta.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*d-h,v=u*h-d,E=c*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,y=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-d),c),y=v*(v+2*d)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),y=-_*_+v*(v+2*d)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Vf).addScaledVector(zc,v),y}intersectSphere(t,e){fs.subVectors(t.center,this.origin);const s=fs.dot(this.direction),r=fs.dot(fs)-s*s,c=t.radius*t.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=s-u,d=s+u;return d<0?null:h<0?this.at(d,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,r,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>r||((c>s||isNaN(s))&&(s=c),(u<r||isNaN(r))&&(r=u),_>=0?(h=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),s>d||h>r)||((h>s||s!==s)&&(s=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(s>=0?s:r,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,s,r,c){Gf.subVectors(e,t),Fc.subVectors(s,t),kf.crossVectors(Gf,Fc);let u=this.direction.dot(kf),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ta.subVectors(this.origin,t);const d=h*this.direction.dot(Fc.crossVectors(ta,Fc));if(d<0)return null;const p=h*this.direction.dot(Gf.cross(ta));if(p<0||d+p>u)return null;const g=-h*ta.dot(kf);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,s,r,c,u,h,d,p,g,_,v,y,E,b,S){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,r,c,u,h,d,p,g,_,v,y,E,b,S)}set(t,e,s,r,c,u,h,d,p,g,_,v,y,E,b,S){const x=this.elements;return x[0]=t,x[4]=e,x[8]=s,x[12]=r,x[1]=c,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,r=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),u=1/wr.setFromMatrixColumn(t,2).length();return e[0]=s[0]*r,e[1]=s[1]*r,e[2]=s[2]*r,e[3]=0,e[4]=s[4]*c,e[5]=s[5]*c,e[6]=s[6]*c,e[7]=0,e[8]=s[8]*u,e[9]=s[9]*u,e[10]=s[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,r=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,E=h*g,b=h*_;e[0]=d*g,e[4]=-d*_,e[8]=p,e[1]=y+E*p,e[5]=v-b*p,e[9]=-h*d,e[2]=b-v*p,e[6]=E+y*p,e[10]=u*d}else if(t.order==="YXZ"){const v=d*g,y=d*_,E=p*g,b=p*_;e[0]=v+b*h,e[4]=E*h-y,e[8]=u*p,e[1]=u*_,e[5]=u*g,e[9]=-h,e[2]=y*h-E,e[6]=b+v*h,e[10]=u*d}else if(t.order==="ZXY"){const v=d*g,y=d*_,E=p*g,b=p*_;e[0]=v-b*h,e[4]=-u*_,e[8]=E+y*h,e[1]=y+E*h,e[5]=u*g,e[9]=b-v*h,e[2]=-u*p,e[6]=h,e[10]=u*d}else if(t.order==="ZYX"){const v=u*g,y=u*_,E=h*g,b=h*_;e[0]=d*g,e[4]=E*p-y,e[8]=v*p+b,e[1]=d*_,e[5]=b*p+v,e[9]=y*p-E,e[2]=-p,e[6]=h*d,e[10]=u*d}else if(t.order==="YZX"){const v=u*d,y=u*p,E=h*d,b=h*p;e[0]=d*g,e[4]=b-v*_,e[8]=E*_+y,e[1]=_,e[5]=u*g,e[9]=-h*g,e[2]=-p*g,e[6]=y*_+E,e[10]=v-b*_}else if(t.order==="XZY"){const v=u*d,y=u*p,E=h*d,b=h*p;e[0]=d*g,e[4]=-_,e[8]=p*g,e[1]=v*_+b,e[5]=u*g,e[9]=y*_-E,e[2]=E*_-y,e[6]=h*g,e[10]=b*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vE,t,xE)}lookAt(t,e,s){const r=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ea.crossVectors(s,li),ea.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ea.crossVectors(s,li)),ea.normalize(),Hc.crossVectors(li,ea),r[0]=ea.x,r[4]=Hc.x,r[8]=li.x,r[1]=ea.y,r[5]=Hc.y,r[9]=li.y,r[2]=ea.z,r[6]=Hc.z,r[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,c=this.elements,u=s[0],h=s[4],d=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],b=s[6],S=s[10],x=s[14],D=s[3],L=s[7],w=s[11],z=s[15],H=r[0],B=r[4],W=r[8],U=r[12],C=r[1],G=r[5],lt=r[9],rt=r[13],gt=r[2],ft=r[6],I=r[10],Z=r[14],q=r[3],Mt=r[7],N=r[11],tt=r[15];return c[0]=u*H+h*C+d*gt+p*q,c[4]=u*B+h*G+d*ft+p*Mt,c[8]=u*W+h*lt+d*I+p*N,c[12]=u*U+h*rt+d*Z+p*tt,c[1]=g*H+_*C+v*gt+y*q,c[5]=g*B+_*G+v*ft+y*Mt,c[9]=g*W+_*lt+v*I+y*N,c[13]=g*U+_*rt+v*Z+y*tt,c[2]=E*H+b*C+S*gt+x*q,c[6]=E*B+b*G+S*ft+x*Mt,c[10]=E*W+b*lt+S*I+x*N,c[14]=E*U+b*rt+S*Z+x*tt,c[3]=D*H+L*C+w*gt+z*q,c[7]=D*B+L*G+w*ft+z*Mt,c[11]=D*W+L*lt+w*I+z*N,c[15]=D*U+L*rt+w*Z+z*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],r=t[8],c=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],b=t[7],S=t[11],x=t[15];return E*(+c*d*_-r*p*_-c*h*v+s*p*v+r*h*y-s*d*y)+b*(+e*d*y-e*p*v+c*u*v-r*u*y+r*p*g-c*d*g)+S*(+e*p*_-e*h*y-c*u*_+s*u*y+c*h*g-s*p*g)+x*(-r*h*g-e*d*_+e*h*v+r*u*_-s*u*v+s*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],b=t[13],S=t[14],x=t[15],D=_*S*p-b*v*p+b*d*y-h*S*y-_*d*x+h*v*x,L=E*v*p-g*S*p-E*d*y+u*S*y+g*d*x-u*v*x,w=g*b*p-E*_*p+E*h*y-u*b*y-g*h*x+u*_*x,z=E*_*d-g*b*d-E*h*v+u*b*v+g*h*S-u*_*S,H=e*D+s*L+r*w+c*z;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=D*B,t[1]=(b*v*c-_*S*c-b*r*y+s*S*y+_*r*x-s*v*x)*B,t[2]=(h*S*c-b*d*c+b*r*p-s*S*p-h*r*x+s*d*x)*B,t[3]=(_*d*c-h*v*c-_*r*p+s*v*p+h*r*y-s*d*y)*B,t[4]=L*B,t[5]=(g*S*c-E*v*c+E*r*y-e*S*y-g*r*x+e*v*x)*B,t[6]=(E*d*c-u*S*c-E*r*p+e*S*p+u*r*x-e*d*x)*B,t[7]=(u*v*c-g*d*c+g*r*p-e*v*p-u*r*y+e*d*y)*B,t[8]=w*B,t[9]=(E*_*c-g*b*c-E*s*y+e*b*y+g*s*x-e*_*x)*B,t[10]=(u*b*c-E*h*c+E*s*p-e*b*p-u*s*x+e*h*x)*B,t[11]=(g*h*c-u*_*c-g*s*p+e*_*p+u*s*y-e*h*y)*B,t[12]=z*B,t[13]=(g*b*r-E*_*r+E*s*v-e*b*v-g*s*S+e*_*S)*B,t[14]=(E*h*r-u*b*r-E*s*d+e*b*d+u*s*S-e*h*S)*B,t[15]=(u*_*r-g*h*r+g*s*d-e*_*d-u*s*v+e*h*v)*B,this}scale(t){const e=this.elements,s=t.x,r=t.y,c=t.z;return e[0]*=s,e[4]*=r,e[8]*=c,e[1]*=s,e[5]*=r,e[9]*=c,e[2]*=s,e[6]*=r,e[10]*=c,e[3]*=s,e[7]*=r,e[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,r))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),r=Math.sin(e),c=1-s,u=t.x,h=t.y,d=t.z,p=c*u,g=c*h;return this.set(p*u+s,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+s,g*d-r*u,0,p*d-r*h,g*d+r*u,c*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,r,c,u){return this.set(1,s,c,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,s){const r=this.elements,c=e._x,u=e._y,h=e._z,d=e._w,p=c+c,g=u+u,_=h+h,v=c*p,y=c*g,E=c*_,b=u*g,S=u*_,x=h*_,D=d*p,L=d*g,w=d*_,z=s.x,H=s.y,B=s.z;return r[0]=(1-(b+x))*z,r[1]=(y+w)*z,r[2]=(E-L)*z,r[3]=0,r[4]=(y-w)*H,r[5]=(1-(v+x))*H,r[6]=(S+D)*H,r[7]=0,r[8]=(E+L)*B,r[9]=(S-D)*B,r[10]=(1-(v+b))*B,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,s){const r=this.elements;let c=wr.set(r[0],r[1],r[2]).length();const u=wr.set(r[4],r[5],r[6]).length(),h=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),t.x=r[12],t.y=r[13],t.z=r[14],Ti.copy(this);const p=1/c,g=1/u,_=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,e.setFromRotationMatrix(Ti),s.x=c,s.y=u,s.z=h,this}makePerspective(t,e,s,r,c,u,h=ys){const d=this.elements,p=2*c/(e-t),g=2*c/(s-r),_=(e+t)/(e-t),v=(s+r)/(s-r);let y,E;if(h===ys)y=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===xu)y=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,s,r,c,u,h=ys){const d=this.elements,p=1/(e-t),g=1/(s-r),_=1/(u-c),v=(e+t)*p,y=(s+r)*g;let E,b;if(h===ys)E=(u+c)*_,b=-2*_;else if(h===xu)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<16;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const wr=new X,Ti=new ae,vE=new X(0,0,0),xE=new X(1,1,1),ea=new X,Hc=new X,li=new X,Ov=new ae,Pv=new Vi;class Gi{constructor(t=0,e=0,s=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,r=this._order){return this._x=t,this._y=e,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const r=t.elements,c=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],y=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return Ov.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ov,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yE=0;const Iv=new X,Cr=new Vi,ds=new ae,Vc=new X,el=new X,SE=new X,ME=new Vi,Bv=new X(1,0,0),zv=new X(0,1,0),Fv=new X(0,0,1),Hv={type:"added"},EE={type:"removed"},Dr={type:"childadded",child:null},Xf={type:"childremoved",child:null};class Je extends Xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new X,e=new Gi,s=new Vi,r=new X(1,1,1);function c(){s.setFromEuler(e,!1)}function u(){e.setFromQuaternion(s,void 0,!1)}e._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new oe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(Bv,t)}rotateY(t){return this.rotateOnAxis(zv,t)}rotateZ(t){return this.rotateOnAxis(Fv,t)}translateOnAxis(t,e){return Iv.copy(t).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bv,t)}translateY(t){return this.translateOnAxis(zv,t)}translateZ(t){return this.translateOnAxis(Fv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?Vc.copy(t):Vc.set(t,e,s);const r=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(el,Vc,this.up):ds.lookAt(Vc,el,this.up),this.quaternion.setFromRotationMatrix(ds),r&&(ds.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(ds),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hv),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(EE),Xf.child=t,this.dispatchEvent(Xf),Xf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hv),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,r=this.children.length;s<r;s++){const u=this.children[s].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,SE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,ME,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].updateMatrixWorld(t)}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(t.shapes,_)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));r.material=h}else r.material=c(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(c(t.animations,d))}}if(e){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),E=u(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=r,s;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const r=t.children[s];this.add(r.clone())}return this}}Je.DEFAULT_UP=new X(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new X,ps=new X,Wf=new X,ms=new X,Lr=new X,Ur=new X,Vv=new X,Yf=new X,jf=new X,qf=new X,Kf=new Ce,Zf=new Ce,Qf=new Ce;class Ci{constructor(t=new X,e=new X,s=new X){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,r){r.subVectors(s,e),Ai.subVectors(t,e),r.cross(Ai);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(t,e,s,r,c){Ai.subVectors(r,e),ps.subVectors(s,e),Wf.subVectors(t,e);const u=Ai.dot(Ai),h=Ai.dot(ps),d=Ai.dot(Wf),p=ps.dot(ps),g=ps.dot(Wf),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*d-h*g)*v,E=(u*g-h*d)*v;return c.set(1-y-E,E,y)}static containsPoint(t,e,s,r){return this.getBarycoord(t,e,s,r,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,e,s,r,c,u,h,d){return this.getBarycoord(t,e,s,r,ms)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,ms.x),d.addScaledVector(u,ms.y),d.addScaledVector(h,ms.z),d)}static getInterpolatedAttribute(t,e,s,r,c,u){return Kf.setScalar(0),Zf.setScalar(0),Qf.setScalar(0),Kf.fromBufferAttribute(t,e),Zf.fromBufferAttribute(t,s),Qf.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(Kf,c.x),u.addScaledVector(Zf,c.y),u.addScaledVector(Qf,c.z),u}static isFrontFacing(t,e,s,r){return Ai.subVectors(s,e),ps.subVectors(t,e),Ai.cross(ps).dot(r)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,r){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,s,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Ai.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,s,r,c){return Ci.getInterpolation(t,this.a,this.b,this.c,e,s,r,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,r=this.b,c=this.c;let u,h;Lr.subVectors(r,s),Ur.subVectors(c,s),Yf.subVectors(t,s);const d=Lr.dot(Yf),p=Ur.dot(Yf);if(d<=0&&p<=0)return e.copy(s);jf.subVectors(t,r);const g=Lr.dot(jf),_=Ur.dot(jf);if(g>=0&&_<=g)return e.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),e.copy(s).addScaledVector(Lr,u);qf.subVectors(t,c);const y=Lr.dot(qf),E=Ur.dot(qf);if(E>=0&&y<=E)return e.copy(c);const b=y*p-d*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),e.copy(s).addScaledVector(Ur,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return Vv.subVectors(c,r),h=(_-g)/(_-g+(y-E)),e.copy(r).addScaledVector(Vv,h);const x=1/(S+b+v);return u=b*x,h=v*x,e.copy(s).addScaledVector(Lr,u).addScaledVector(Ur,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},na={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function Jf(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class se{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,s,r=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=s,Ee.toWorkingColorSpace(this,r),this}setHSL(t,e,s,r=Ee.workingColorSpace){if(t=Mp(t,1),e=fe(e,0,1),s=fe(s,0,1),e===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+e):s+e-s*e,u=2*s-c;this.r=Jf(u,c,t+1/3),this.g=Jf(u,c,t),this.b=Jf(u,c,t-1/3)}return Ee.toWorkingColorSpace(this,r),this}setStyle(t,e=hn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,e);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,e);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(c,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const s=dx[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Ee.fromWorkingColorSpace(Bn.copy(this),t),Math.round(fe(Bn.r*255,0,255))*65536+Math.round(fe(Bn.g*255,0,255))*256+Math.round(fe(Bn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(Bn.copy(this),e);const s=Bn.r,r=Bn.g,c=Bn.b,u=Math.max(s,r,c),h=Math.min(s,r,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case s:d=(r-c)/_+(r<c?6:0);break;case r:d=(c-s)/_+2;break;case c:d=(s-r)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(Bn.copy(this),e),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=hn){Ee.fromWorkingColorSpace(Bn.copy(this),t);const e=Bn.r,s=Bn.g,r=Bn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(t,e,s){return this.getHSL(na),this.setHSL(na.h+t,na.s+e,na.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(na),t.getHSL(Gc);const s=hl(na.h,Gc.h,e),r=hl(na.s,Gc.s,e),c=hl(na.l,Gc.l,e);return this.setHSL(s,r,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,r=this.b,c=t.elements;return this.r=c[0]*e+c[3]*s+c[6]*r,this.g=c[1]*e+c[4]*s+c[7]*r,this.b=c[2]*e+c[5]*s+c[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new se;se.NAMES=dx;let bE=0;class Fi extends Xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Vr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(s.blending=this.blending),this.side!==Es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==Md&&(s.blendDst=this.blendDst),this.blendEquation!==Ha&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(e){const c=r(t.textures),u=r(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const r=e.length;s=new Array(r);for(let c=0;c!==r;++c)s[c]=e[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class la extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new X,kc=new te;let TE=0;class _n{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=ap,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[t+r]=e.array[s+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)kc.fromBufferAttribute(this,e),kc.applyMatrix3(t),this.setXY(e,kc.x,kc.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=wi(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ne(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this}setXYZW(t,e,s,r,c){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array),c=Ne(c,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ap&&(t.usage=this.usage),t}}class px extends _n{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class mx extends _n{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class Ms extends _n{constructor(t,e,s){super(new Float32Array(t),e,s)}}let AE=0;const vi=new ae,$f=new Je,Nr=new X,ci=new Ts,nl=new Ts,Tn=new X;class yi extends Xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hx(t)?mx:px)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,s){return vi.makeTranslation(t,e,s),this.applyMatrix4(vi),this}scale(t,e,s){return vi.makeScale(t,e,s),this.applyMatrix4(vi),this}lookAt(t){return $f.lookAt(t),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const s=[];for(let r=0,c=t.length;r<c;r++){const u=t[r];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ms(s,3))}else{const s=Math.min(t.length,e.count);for(let r=0;r<s;r++){const c=t[r];e.setXYZ(r,c.x,c.y,c.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const c=e[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let c=0,u=e.length;c<u;c++){const h=e[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(ci.min,nl.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,nl.max),ci.expandByPoint(Tn)):(ci.expandByPoint(nl.min),ci.expandByPoint(nl.max))}ci.getCenter(s);let r=0;for(let c=0,u=t.count;c<u;c++)Tn.fromBufferAttribute(t,c),r=Math.max(r,s.distanceToSquared(Tn));if(e)for(let c=0,u=e.length;c<u;c++){const h=e[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),d&&(Nr.fromBufferAttribute(t,p),Tn.add(Nr)),r=Math.max(r,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.position,r=e.normal,c=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let W=0;W<s.count;W++)h[W]=new X,d[W]=new X;const p=new X,g=new X,_=new X,v=new te,y=new te,E=new te,b=new X,S=new X;function x(W,U,C){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,U),_.fromBufferAttribute(s,C),v.fromBufferAttribute(c,W),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(b),h[U].add(b),h[C].add(b),d[W].add(S),d[U].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,U=D.length;W<U;++W){const C=D[W],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)x(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new X,w=new X,z=new X,H=new X;function B(W){z.fromBufferAttribute(r,W),H.copy(z);const U=h[W];L.copy(U),L.sub(z.multiplyScalar(z.dot(U))).normalize(),w.crossVectors(H,U);const G=w.dot(d[W])<0?-1:1;u.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,U=D.length;W<U;++W){const C=D[W],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const r=new X,c=new X,u=new X,h=new X,d=new X,p=new X,g=new X,_=new X;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),c.fromBufferAttribute(e,b),u.fromBufferAttribute(e,S),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),h.fromBufferAttribute(s,E),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),h.add(g),d.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=e.count;v<y;v+=3)r.fromBufferAttribute(e,v+0),c.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),g.subVectors(u,c),_.subVectors(r,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let y=0,E=0;for(let b=0,S=d.length;b<S;b++){h.isInterleavedBufferAttribute?y=d[b]*h.data.stride+h.offset:y=d[b]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new _n(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yi,s=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=t(d,s);e.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,s);d.push(y)}e.morphAttributes[h]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const p=s[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(r[d]=g,c=!0)}c&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const r=t.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(e))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(e));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new ae,Oa=new to,Xc=new Xi,kv=new X,Wc=new X,Yc=new X,jc=new X,td=new X,qc=new X,Xv=new X,Kc=new X;class kn extends Je{constructor(t=new yi,e=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,e){const s=this.geometry,r=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;e.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(c&&h){qc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(td.fromBufferAttribute(_,t),u?qc.addScaledVector(td,g):qc.addScaledVector(td.sub(e),g))}e.add(qc)}return e}raycast(t,e){const s=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(c),Oa.copy(t.ray).recast(t.near),!(Xc.containsPoint(Oa.origin)===!1&&(Oa.intersectSphere(Xc,kv)===null||Oa.origin.distanceToSquared(kv)>(t.far-t.near)**2))&&(Gv.copy(c).invert(),Oa.copy(t.ray).applyMatrix4(Gv),!(s.boundingBox!==null&&Oa.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,Oa)))}_computeIntersections(t,e,s){let r;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=D,z=L;w<z;w+=3){const H=h.getX(w),B=h.getX(w+1),W=h.getX(w+2);r=Zc(this,x,t,s,p,g,_,H,B,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const D=h.getX(S),L=h.getX(S+1),w=h.getX(S+2);r=Zc(this,u,t,s,p,g,_,D,L,w),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=u[S.materialIndex],D=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let w=D,z=L;w<z;w+=3){const H=w,B=w+1,W=w+2;r=Zc(this,x,t,s,p,g,_,H,B,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const D=S,L=S+1,w=S+2;r=Zc(this,u,t,s,p,g,_,D,L,w),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}}function RE(o,t,e,s,r,c,u,h){let d;if(t.side===$n?d=s.intersectTriangle(u,c,r,!0,h):d=s.intersectTriangle(r,c,u,t.side===Es,h),d===null)return null;Kc.copy(h),Kc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Kc);return p<e.near||p>e.far?null:{distance:p,point:Kc.clone(),object:o}}function Zc(o,t,e,s,r,c,u,h,d,p){o.getVertexPosition(h,Wc),o.getVertexPosition(d,Yc),o.getVertexPosition(p,jc);const g=RE(o,t,e,s,Wc,Yc,jc,Xv);if(g){const _=new X;Ci.getBarycoord(Xv,Wc,Yc,jc,_),r&&(g.uv=Ci.getInterpolatedAttribute(r,h,d,p,_,new te)),c&&(g.uv1=Ci.getInterpolatedAttribute(c,h,d,p,_,new te)),u&&(g.normal=Ci.getInterpolatedAttribute(u,h,d,p,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new X,materialIndex:0};Ci.getNormal(Wc,Yc,jc,v.normal),g.face=v,g.barycoord=_}return g}class El extends yi{constructor(t=1,e=1,s=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,e,t,u,c,0),E("z","y","x",1,-1,s,e,-t,u,c,1),E("x","z","y",1,1,t,s,e,r,u,2),E("x","z","y",1,-1,t,s,-e,r,u,3),E("x","y","z",1,-1,t,e,s,r,c,4),E("x","y","z",-1,-1,t,e,-s,r,c,5),this.setIndex(d),this.setAttribute("position",new Ms(p,3)),this.setAttribute("normal",new Ms(g,3)),this.setAttribute("uv",new Ms(_,2));function E(b,S,x,D,L,w,z,H,B,W,U){const C=w/B,G=z/W,lt=w/2,rt=z/2,gt=H/2,ft=B+1,I=W+1;let Z=0,q=0;const Mt=new X;for(let N=0;N<I;N++){const tt=N*G-rt;for(let vt=0;vt<ft;vt++){const yt=vt*C-lt;Mt[b]=yt*D,Mt[S]=tt*L,Mt[x]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[S]=0,Mt[x]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(vt/B),_.push(1-N/W),Z+=1}}for(let N=0;N<W;N++)for(let tt=0;tt<B;tt++){const vt=v+tt+ft*N,yt=v+tt+ft*(N+1),J=v+(tt+1)+ft*(N+1),dt=v+(tt+1)+ft*N;d.push(vt,yt,dt),d.push(yt,J,dt),q+=6}h.addGroup(y,q,U),y+=q,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(o){const t={};for(const e in o){t[e]={};for(const s in o[e]){const r=o[e][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=r.clone():Array.isArray(r)?t[e][s]=r.slice():t[e][s]=r}}return t}function Vn(o){const t={};for(let e=0;e<o.length;e++){const s=Kr(o[e]);for(const r in s)t[r]=s[r]}return t}function wE(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function gx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const CE={clone:Kr,merge:Vn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=wE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class _x extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ys}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ia=new X,Wv=new te,Yv=new te;class Qn extends _x{constructor(t=50,e=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,s){ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ia.x,ia.y).multiplyScalar(-t/ia.z),ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ia.x,ia.y).multiplyScalar(-t/ia.z)}getViewSize(t,e){return this.getViewBounds(t,Wv,Yv),e.subVectors(Yv,Wv)}setViewOffset(t,e,s,r,c,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ul*.5*this.fov)/this.zoom,s=2*e,r=this.aspect*s,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*r/d,e-=u.offsetY*s/p,r*=u.width/d,s*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Or=-90,Pr=1;class UE extends Je{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Or,Pr,t,e);r.layers=this.layers,this.add(r);const c=new Qn(Or,Pr,t,e);c.layers=this.layers,this.add(c);const u=new Qn(Or,Pr,t,e);u.layers=this.layers,this.add(u);const h=new Qn(Or,Pr,t,e);h.layers=this.layers,this.add(h);const d=new Qn(Or,Pr,t,e);d.layers=this.layers,this.add(d);const p=new Qn(Or,Pr,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,r,c,u,h,d]=e;for(const p of e)this.remove(p);if(t===ys)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===xu)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,r),t.render(e,c),t.setRenderTarget(s,1,r),t.render(e,u),t.setRenderTarget(s,2,r),t.render(e,h),t.setRenderTarget(s,3,r),t.render(e,d),t.setRenderTarget(s,4,r),t.render(e,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,r),t.render(e,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vx extends An{constructor(t=[],e=Wr,s,r,c,u,h,d,p,g){super(t,e,s,r,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class NE extends fa{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},r=[s,s,s,s,s,s];this.texture=new vx(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new El(5,5,5),c=new ki({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:ua});c.uniforms.tEquirect.value=e;const u=new kn(r,c),h=e.minFilter;return e.minFilter===xs&&(e.minFilter=ui),new UE(1,10,this).update(t,u),e.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,s=!0,r=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,s,r);t.setRenderTarget(c)}}class Ga extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let r=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const S=e.getJointPose(b,s),x=this._getHandJoint(p,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,s),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,s),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new Ga;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class jv extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class PE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,s){t*=this.stride,s*=e.stride;for(let r=0,c=this.stride;r<c;r++)this.array[t+r]=e.array[s+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(e,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new X;class Tp{constructor(t,e,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,s=this.data.count;e<s;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let s=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(s=wi(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ne(s,this.array)),this.data.array[t*this.data.stride+this.offset+e]=s,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this}setXYZ(t,e,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,e,s,r,c){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array),c=Ne(c,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[r+c])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Tp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)e.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qv=new X,Kv=new Ce,Zv=new Ce,IE=new X,Qv=new ae,Qc=new X,nd=new Xi,Jv=new ae,id=new to;class BE extends kn{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ev,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ts),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,Qc),this.boundingBox.expandByPoint(Qc)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,Qc),this.boundingSphere.expandByPoint(Qc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nd.copy(this.boundingSphere),nd.applyMatrix4(r),t.ray.intersectsSphere(nd)!==!1&&(Jv.copy(r).invert(),id.copy(t.ray).applyMatrix4(Jv),!(this.boundingBox!==null&&id.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,id)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ce,e=this.geometry.attributes.skinWeight;for(let s=0,r=e.count;s<r;s++){t.fromBufferAttribute(e,s);const c=1/t.manhattanLength();c!==1/0?t.multiplyScalar(c):t.set(1,0,0,0),e.setXYZW(s,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ev?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===UM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const s=this.skeleton,r=this.geometry;Kv.fromBufferAttribute(r.attributes.skinIndex,t),Zv.fromBufferAttribute(r.attributes.skinWeight,t),qv.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let c=0;c<4;c++){const u=Zv.getComponent(c);if(u!==0){const h=Kv.getComponent(c);Qv.multiplyMatrices(s.bones[h].matrixWorld,s.boneInverses[h]),e.addScaledVector(IE.copy(qv).applyMatrix4(Qv),u)}}return e.applyMatrix4(this.bindMatrixInverse)}}class xx extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yu extends An{constructor(t=null,e=1,s=1,r,c,u,h,d,p=an,g=an,_,v){super(null,u,h,d,p,g,r,c,_,v),this.isDataTexture=!0,this.image={data:t,width:e,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $v=new ae,zE=new ae;class Ap{constructor(t=[],e=[]){this.uuid=Di(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const s=new ae;this.bones[t]&&s.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&s.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const t=this.bones,e=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let c=0,u=t.length;c<u;c++){const h=t[c]?t[c].matrixWorld:zE;$v.multiplyMatrices(h,e[c]),$v.toArray(s,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ap(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const s=new yu(e,t,t,Gn,Jn);return s.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=s,this}getBoneByName(t){for(let e=0,s=this.bones.length;e<s;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let s=0,r=t.bones.length;s<r;s++){const c=t.bones[s];let u=e[c];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",c),u=new xx),this.bones.push(u),this.boneInverses.push(new ae().fromArray(t.boneInverses[s]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,s=this.boneInverses;for(let r=0,c=e.length;r<c;r++){const u=e[r];t.bones.push(u.uuid);const h=s[r];t.boneInverses.push(h.toArray())}return t}}class rp extends _n{constructor(t,e,s,r=1){super(t,e,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ir=new ae,t0=new ae,Jc=[],e0=new Ts,FE=new ae,il=new kn,sl=new Xi;class HE extends kn{constructor(t,e,s){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new rp(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,FE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,Ir),e0.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(e0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,Ir),sl.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(sl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const s=e.morphTargetInfluences,r=this.morphTexture.source.data.data,c=s.length+1,u=t*c+1;for(let h=0;h<s.length;h++)s[h]=r[u+h]}raycast(t,e){const s=this.matrixWorld,r=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(s),t.ray.intersectsSphere(sl)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Ir),t0.multiplyMatrices(s,Ir),il.matrixWorld=t0,il.raycast(t,Jc);for(let u=0,h=Jc.length;u<h;u++){const d=Jc[u];d.instanceId=c,d.object=this,e.push(d)}Jc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new rp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const s=e.morphTargetInfluences,r=s.length+1;this.morphTexture===null&&(this.morphTexture=new yu(new Float32Array(r*this.count),r,this.count,vp,Jn));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<s.length;p++)u+=s[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=r*t;c[d]=h,c.set(s,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sd=new X,VE=new X,GE=new oe;class aa{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,r){return this.normal.set(t,e,s),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const r=sd.subVectors(s,e).cross(VE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(sd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:e.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||GE.getNormalMatrix(t),r=this.coplanarPoint(sd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pa=new Xi,$c=new X;class Rp{constructor(t=new aa,e=new aa,s=new aa,r=new aa,c=new aa,u=new aa){this.planes=[t,e,s,r,c,u]}set(t,e,s,r,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(s),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=ys){const s=this.planes,r=t.elements,c=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],y=r[8],E=r[9],b=r[10],S=r[11],x=r[12],D=r[13],L=r[14],w=r[15];if(s[0].setComponents(d-c,v-p,S-y,w-x).normalize(),s[1].setComponents(d+c,v+p,S+y,w+x).normalize(),s[2].setComponents(d+u,v+g,S+E,w+D).normalize(),s[3].setComponents(d-u,v-g,S-E,w-D).normalize(),s[4].setComponents(d-h,v-_,S-b,w-L).normalize(),e===ys)s[5].setComponents(d+h,v+_,S+b,w+L).normalize();else if(e===xu)s[5].setComponents(h,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(t){return Pa.center.set(0,0,0),Pa.radius=.7071067811865476,Pa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(t){const e=this.planes,s=t.center,r=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(s)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const r=e[s];if($c.x=r.normal.x>0?t.max.x:t.min.x,$c.y=r.normal.y>0?t.max.y:t.min.y,$c.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint($c)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yx extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Su=new X,Mu=new X,n0=new ae,al=new to,tu=new Xi,ad=new X,i0=new X;class wp extends Je{constructor(t=new yi,e=new yx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[0];for(let r=1,c=e.count;r<c;r++)Su.fromBufferAttribute(e,r-1),Mu.fromBufferAttribute(e,r),s[r]=s[r-1],s[r]+=Su.distanceTo(Mu);t.setAttribute("lineDistance",new Ms(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const s=this.geometry,r=this.matrixWorld,c=t.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(r),tu.radius+=c,t.ray.intersectsSphere(tu)===!1)return;n0.copy(r).invert(),al.copy(t.ray).applyMatrix4(n0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let b=y,S=E-1;b<S;b+=p){const x=g.getX(b),D=g.getX(b+1),L=eu(this,t,al,d,x,D,b);L&&e.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(y),x=eu(this,t,al,d,b,S,E-1);x&&e.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=y,S=E-1;b<S;b+=p){const x=eu(this,t,al,d,b,b+1,b);x&&e.push(x)}if(this.isLineLoop){const b=eu(this,t,al,d,E-1,y,E-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function eu(o,t,e,s,r,c,u){const h=o.geometry.attributes.position;if(Su.fromBufferAttribute(h,r),Mu.fromBufferAttribute(h,c),e.distanceSqToSegment(Su,Mu,ad,i0)>s)return;ad.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(ad);if(!(p<t.near||p>t.far))return{distance:p,point:i0.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const s0=new X,a0=new X;class kE extends wp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[];for(let r=0,c=e.count;r<c;r+=2)s0.fromBufferAttribute(e,r),a0.fromBufferAttribute(e,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+s0.distanceTo(a0);t.setAttribute("lineDistance",new Ms(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XE extends wp{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Sx extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const r0=new ae,op=new to,nu=new Xi,iu=new X;class Mx extends Je{constructor(t=new yi,e=new Sx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const s=this.geometry,r=this.matrixWorld,c=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),nu.copy(s.boundingSphere),nu.applyMatrix4(r),nu.radius+=c,t.ray.intersectsSphere(nu)===!1)return;r0.copy(r).invert(),op.copy(t.ray).applyMatrix4(r0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=v,b=y;E<b;E++){const S=p.getX(E);iu.fromBufferAttribute(_,S),o0(iu,S,d,r,t,e,this)}}else{const v=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=v,b=y;E<b;E++)iu.fromBufferAttribute(_,E),o0(iu,E,d,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function o0(o,t,e,s,r,c,u){const h=op.distanceSqToPoint(o);if(h<e){const d=new X;op.closestPointToPoint(o,d),d.applyMatrix4(s);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Ex extends An{constructor(t,e,s=ka,r,c,u,h=an,d=an,p,g=ml){if(g!==ml&&g!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,c,u,h,d,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zr extends yi{constructor(t=1,e=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:r};const c=t/2,u=e/2,h=Math.floor(s),d=Math.floor(r),p=h+1,g=d+1,_=t/h,v=e/d,y=[],E=[],b=[],S=[];for(let x=0;x<g;x++){const D=x*v-u;for(let L=0;L<p;L++){const w=L*_-c;E.push(w,-D,0),b.push(0,0,1),S.push(L/h),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<h;D++){const L=D+p*x,w=D+p*(x+1),z=D+1+p*(x+1),H=D+1+p*x;y.push(L,w,H),y.push(w,z,H)}this.setIndex(y),this.setAttribute("position",new Ms(E,3)),this.setAttribute("normal",new Ms(b,3)),this.setAttribute("uv",new Ms(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cp extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wi extends Cp{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class WE extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YE extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function su(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function jE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function qE(o){function t(r,c){return o[r]-o[c]}const e=o.length,s=new Array(e);for(let r=0;r!==e;++r)s[r]=r;return s.sort(t),s}function l0(o,t,e){const s=o.length,r=new o.constructor(s);for(let c=0,u=0;u!==s;++c){const h=e[c]*t;for(let d=0;d!==t;++d)r[u++]=o[h+d]}return r}function bx(o,t,e,s){let r=1,c=o[0];for(;c!==void 0&&c[s]===void 0;)c=o[r++];if(c===void 0)return;let u=c[s];if(u!==void 0)if(Array.isArray(u))do u=c[s],u!==void 0&&(t.push(c.time),e.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[s],u!==void 0&&(t.push(c.time),u.toArray(e,e.length)),c=o[r++];while(c!==void 0);else do u=c[s],u!==void 0&&(t.push(c.time),e.push(u)),c=o[r++];while(c!==void 0)}class bl{constructor(t,e,s,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(s),this.sampleValues=e,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let s=this._cachedIndex,r=e[s],c=e[s-1];t:{e:{let u;n:{i:if(!(t<r)){for(let h=s+2;;){if(r===void 0){if(t<c)break i;return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===h)break;if(c=r,r=e[++s],t<r)break e}u=e.length;break n}if(!(t>=c)){const h=e[1];t<h&&(s=2,c=h);for(let d=s-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===d)break;if(r=c,c=e[--s-1],t>=c)break e}u=s,s=0;break n}break t}for(;s<u;){const h=s+u>>>1;t<e[h]?u=h:s=h+1}if(r=e[s],c=e[s-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,c,r)}return this.interpolate_(s,c,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,r=this.valueSize,c=t*r;for(let u=0;u!==r;++u)e[u]=s[c+u];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class KE extends bl{constructor(t,e,s,r){super(t,e,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bv,endingEnd:bv}}intervalChanged_(t,e,s){const r=this.parameterPositions;let c=t-2,u=t+1,h=r[c],d=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case Tv:c=t,h=2*e-s;break;case Av:c=r.length-2,h=e+r[c]-r[c+1];break;default:c=t,h=s}if(d===void 0)switch(this.getSettings_().endingEnd){case Tv:u=t,d=2*s-e;break;case Av:u=1,d=s+r[1]-r[0];break;default:u=t-1,d=e}const p=(s-e)*.5,g=this.valueSize;this._weightPrev=p/(e-h),this._weightNext=p/(d-s),this._offsetPrev=c*g,this._offsetNext=u*g}interpolate_(t,e,s,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,E=(s-e)/(r-e),b=E*E,S=b*E,x=-v*S+2*v*b-v*E,D=(1+v)*S+(-1.5-2*v)*b+(-.5+v)*E+1,L=(-1-y)*S+(1.5+y)*b+.5*E,w=y*S-y*b;for(let z=0;z!==h;++z)c[z]=x*u[g+z]+D*u[p+z]+L*u[d+z]+w*u[_+z];return c}}class ZE extends bl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t,e,s,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=(s-e)/(r-e),_=1-g;for(let v=0;v!==h;++v)c[v]=u[p+v]*_+u[d+v]*g;return c}}class QE extends bl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Li{constructor(t,e,s,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=su(e,this.TimeBufferType),this.values=su(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let s;if(e.toJSON!==this.toJSON)s=e.toJSON(t);else{s={name:t.name,times:su(t.times,Array),values:su(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(s.interpolation=r)}return s.type=t.ValueTypeName,s}InterpolantFactoryMethodDiscrete(t){return new QE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ZE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new KE(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _l:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case Pf:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return Pf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let s=0,r=e.length;s!==r;++s)e[s]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let s=0,r=e.length;s!==r;++s)e[s]*=t}return this}trim(t,e){const s=this.times,r=s.length;let c=0,u=r-1;for(;c!==r&&s[c]<t;)++c;for(;u!==-1&&s[u]>e;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=s.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const s=this.times,r=this.values,c=s.length;c===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let h=0;h!==c;h++){const d=s[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),t=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,u),t=!1;break}u=d}if(r!==void 0&&jE(r))for(let h=0,d=r.length;h!==d;++h){const p=r[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),s=this.getValueSize(),r=this.getInterpolation()===Pf,c=t.length-1;let u=1;for(let h=1;h<c;++h){let d=!1;const p=t[h],g=t[h+1];if(p!==g&&(h!==1||p!==t[0]))if(r)d=!0;else{const _=h*s,v=_-s,y=_+s;for(let E=0;E!==s;++E){const b=e[_+E];if(b!==e[v+E]||b!==e[y+E]){d=!0;break}}}if(d){if(h!==u){t[u]=t[h];const _=h*s,v=u*s;for(let y=0;y!==s;++y)e[v+y]=e[_+y]}++u}}if(c>0){t[u]=t[c];for(let h=c*s,d=u*s,p=0;p!==s;++p)e[d+p]=e[h+p];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=e.slice(0,u*s)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),s=this.constructor,r=new s(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Li.prototype.ValueTypeName="";Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=vl;class eo extends Li{constructor(t,e,s){super(t,e,s)}}eo.prototype.ValueTypeName="bool";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=_l;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Tx extends Li{constructor(t,e,s,r){super(t,e,s,r)}}Tx.prototype.ValueTypeName="color";class Qr extends Li{constructor(t,e,s,r){super(t,e,s,r)}}Qr.prototype.ValueTypeName="number";class JE extends bl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t,e,s,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=(s-e)/(r-e);let p=t*h;for(let g=p+h;p!==g;p+=4)Vi.slerpFlat(c,0,u,p-h,u,p,d);return c}}class Jr extends Li{constructor(t,e,s,r){super(t,e,s,r)}InterpolantFactoryMethodLinear(t){return new JE(this.times,this.values,this.getValueSize(),t)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Li{constructor(t,e,s){super(t,e,s)}}no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=_l;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class $r extends Li{constructor(t,e,s,r){super(t,e,s,r)}}$r.prototype.ValueTypeName="vector";class $E{constructor(t="",e=-1,s=[],r=NM){this.name=t,this.tracks=s,this.duration=e,this.blendMode=r,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],s=t.tracks,r=1/(t.fps||1);for(let u=0,h=s.length;u!==h;++u)e.push(eb(s[u]).scale(r));const c=new this(t.name,t.duration,e,t.blendMode);return c.uuid=t.uuid,c}static toJSON(t){const e=[],s=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let c=0,u=s.length;c!==u;++c)e.push(Li.toJSON(s[c]));return r}static CreateFromMorphTargetSequence(t,e,s,r){const c=e.length,u=[];for(let h=0;h<c;h++){let d=[],p=[];d.push((h+c-1)%c,h,(h+1)%c),p.push(0,1,0);const g=qE(d);d=l0(d,1,g),p=l0(p,1,g),!r&&d[0]===0&&(d.push(c),p.push(p[0])),u.push(new Qr(".morphTargetInfluences["+e[h].name+"]",d,p).scale(1/s))}return new this(t,-1,u)}static findByName(t,e){let s=t;if(!Array.isArray(t)){const r=t;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===e)return s[r];return null}static CreateClipsFromMorphTargetSequences(t,e,s){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,d=t.length;h<d;h++){const p=t[h],g=p.name.match(c);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(p)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],e,s));return u}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(_,v,y,E,b){if(y.length!==0){const S=[],x=[];bx(y,S,x,E),S.length!==0&&b.push(new _(v,S,x))}},r=[],c=t.name||"default",u=t.fps||30,h=t.blendMode;let d=t.length||-1;const p=t.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let b=0;b<v[E].morphTargets.length;b++)y[v[E].morphTargets[b]]=-1;for(const b in y){const S=[],x=[];for(let D=0;D!==v[E].morphTargets.length;++D){const L=v[E];S.push(L.time),x.push(L.morphTarget===b?1:0)}r.push(new Qr(".morphTargetInfluence["+b+"]",S,x))}d=y.length*u}else{const y=".bones["+e[_].name+"]";s($r,y+".position",v,"pos",r),s(Jr,y+".quaternion",v,"rot",r),s($r,y+".scale",v,"scl",r)}}return r.length===0?null:new this(c,d,r,h)}resetDuration(){const t=this.tracks;let e=0;for(let s=0,r=t.length;s!==r;++s){const c=this.tracks[s];e=Math.max(e,c.times[c.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tb(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qr;case"vector":case"vector2":case"vector3":case"vector4":return $r;case"color":return Tx;case"quaternion":return Jr;case"bool":case"boolean":return eo;case"string":return no}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function eb(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=tb(o.type);if(o.times===void 0){const e=[],s=[];bx(o.keys,e,s,"value"),o.times=e,o.values=s}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const ca={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ax{constructor(t,e,s){const r=this;let c=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(g){h++,c===!1&&r.onStart!==void 0&&r.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const nb=new Ax;class Wa{constructor(t){this.manager=t!==void 0?t:nb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(r,c){s.load(t,r,e,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const gs={};class ib extends Error{constructor(t,e){super(t),this.response=e}}class Eu extends Wa{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,e,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=ca.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(c),this.manager.itemEnd(t)},0),c;if(gs[t]!==void 0){gs[t].push({onLoad:e,onProgress:s,onError:r});return}gs[t]=[],gs[t].push({onLoad:e,onProgress:s,onError:r});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=gs[t],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let b=0;const S=new ReadableStream({start(x){D();function D(){_.read().then(({done:L,value:w})=>{if(L)x.close();else{b+=w.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let H=0,B=g.length;H<B;H++){const W=g[H];W.onProgress&&W.onProgress(z)}x.enqueue(w),D()}},L=>{x.error(L)})}}});return new Response(S)}else throw new ib(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{ca.add(t,p);const g=gs[t];delete gs[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=gs[t];if(g===void 0)throw this.manager.itemError(t),p;delete gs[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class sb extends Wa{constructor(t){super(t)}load(t,e,s,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=ca.get(t);if(u!==void 0)return c.manager.itemStart(t),setTimeout(function(){e&&e(u),c.manager.itemEnd(t)},0),u;const h=xl("img");function d(){g(),ca.add(t,this),e&&e(this),c.manager.itemEnd(t)}function p(_){g(),r&&r(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class ab extends Wa{constructor(t){super(t)}load(t,e,s,r){const c=new An,u=new sb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(h){c.image=h,c.needsUpdate=!0,e!==void 0&&e(c)},s,r),c}}class Dp extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const rd=new ae,c0=new X,u0=new X;class Lp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;c0.setFromMatrixPosition(t.matrixWorld),e.position.copy(c0),u0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u0),e.updateMatrixWorld(),rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rb extends Lp{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,s=qr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,c=t.distance||e.far;(s!==e.fov||r!==e.aspect||c!==e.far)&&(e.fov=s,e.aspect=r,e.far=c,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ob extends Dp{constructor(t,e,s=0,r=Math.PI/3,c=0,u=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=s,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new rb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const h0=new ae,rl=new X,od=new X;class lb extends Lp{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,e=0){const s=this.camera,r=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),rl.setFromMatrixPosition(t.matrixWorld),s.position.copy(rl),od.copy(s.position),od.add(this._cubeDirections[e]),s.up.copy(this._cubeUps[e]),s.lookAt(od),s.updateMatrixWorld(),r.makeTranslation(-rl.x,-rl.y,-rl.z),h0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}}class cb extends Dp{constructor(t,e,s=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new lb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yl extends _x{constructor(t=-1,e=1,s=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ub extends Lp{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hb extends Dp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new ub}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fl{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class fb extends Wa{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,u=ca.get(t);if(u!==void 0){if(c.manager.itemStart(t),u.then){u.then(p=>{e&&e(p),c.manager.itemEnd(t)}).catch(p=>{r&&r(p)});return}return setTimeout(function(){e&&e(u),c.manager.itemEnd(t)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(t,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(p){return ca.add(t,p),e&&e(p),c.manager.itemEnd(t),p}).catch(function(p){r&&r(p),ca.remove(t),c.manager.itemError(t),c.manager.itemEnd(t)});ca.add(t,d),c.manager.itemStart(t)}}class db extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const Up="\\[\\]\\.:\\/",pb=new RegExp("["+Up+"]","g"),Np="[^"+Up+"]",mb="[^"+Up.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Np),_b=/(WCOD+)?/.source.replace("WCOD",mb),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Np),xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Np),yb=new RegExp("^"+gb+_b+vb+xb+"$"),Sb=["material","materials","bones","map"];class Mb{constructor(t,e,s){const r=s||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(t,e)}setValue(t,e){const s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=s.length;r!==c;++r)s[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].unbind()}}class Oe{constructor(t,e,s){this.path=e,this.parsedPath=s||Oe.parseTrackName(e),this.node=Oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,s){return t&&t.isAnimationObjectGroup?new Oe.Composite(t,e,s):new Oe(t,e,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(t){const e=yb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const s={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=s.nodeName.substring(r+1);Sb.indexOf(c)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=c)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const s=t.skeleton.getBoneByName(e);if(s!==void 0)return s}if(t.children){const s=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===e||h.uuid===e)return h;const d=s(h.children);if(d)return d}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const s=this.resolvedProperty;for(let r=0,c=s.length;r!==c;++r)t[e++]=s[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const s=this.resolvedProperty;for(let r=0,c=s.length;r!==c;++r)s[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const s=this.resolvedProperty;for(let r=0,c=s.length;r!==c;++r)s[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const s=this.resolvedProperty;for(let r=0,c=s.length;r!==c;++r)s[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,s=e.objectName,r=e.propertyName;let c=e.propertyIndex;if(t||(t=Oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let p=e.objectIndex;switch(s){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===p){p=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(p!==void 0){if(t[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[p]}}const u=t[r];if(u===void 0){const p=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=Mb;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const f0=new ae;class Eb{constructor(t,e,s=0,r=1/0){this.ray=new to(t,e),this.near=s,this.far=r,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(t,e=!0,s=[]){return lp(t,this,s,e),s.sort(d0),s}intersectObjects(t,e=!0,s=[]){for(let r=0,c=t.length;r<c;r++)lp(t[r],this,s,e);return s.sort(d0),s}}function d0(o,t){return o.distance-t.distance}function lp(o,t,e,s){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(r=!1),r===!0&&s===!0){const c=o.children;for(let u=0,h=c.length;u<h;u++)lp(c[u],t,e,!0)}}class p0{constructor(t=1,e=0,s=0){this.radius=t,this.phi=e,this.theta=s}set(t,e,s){return this.radius=t,this.phi=e,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,s){return this.radius=Math.sqrt(t*t+e*e+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bb extends Xa{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function m0(o,t,e,s){const r=Tb(s);switch(e){case ex:return o*t;case ix:return o*t;case sx:return o*t*2;case vp:return o*t/r.components*r.byteLength;case xp:return o*t/r.components*r.byteLength;case ax:return o*t*2/r.components*r.byteLength;case yp:return o*t*2/r.components*r.byteLength;case nx:return o*t*3/r.components*r.byteLength;case Gn:return o*t*4/r.components*r.byteLength;case Sp:return o*t*4/r.components*r.byteLength;case uu:case hu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fu:case du:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nd:case Pd:return Math.max(o,16)*Math.max(t,8)/4;case Ud:case Od:return Math.max(o,8)*Math.max(t,8)/2;case Id:case Bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case pu:case $d:case tp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case rx:case ep:return Math.ceil(o/4)*Math.ceil(t/4)*8;case np:case ip:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tb(o){switch(o){case bs:case J0:return{byteLength:1,components:1};case dl:case $0:case Ml:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case ka:case mp:case Jn:return{byteLength:4,components:1};case tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let o=null,t=!1,e=null,s=null;function r(c,u){e(c,u),s=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(s=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){o=c}}}function Ab(o){const t=new WeakMap;function e(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,d,p){const g=d.array,_=d.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],b=_[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const b=_[y];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(o.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,e(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,d),p.version=h.version}}return{get:r,remove:c,update:u}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_T=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Rb,alphahash_pars_fragment:wb,alphamap_fragment:Cb,alphamap_pars_fragment:Db,alphatest_fragment:Lb,alphatest_pars_fragment:Ub,aomap_fragment:Nb,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:Ib,begin_vertex:Bb,beginnormal_vertex:zb,bsdfs:Fb,iridescence_fragment:Hb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:Gb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Wb,color_fragment:Yb,color_pars_fragment:jb,color_pars_vertex:qb,color_vertex:Kb,common:Zb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:tT,emissivemap_fragment:eT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:sT,envmap_fragment:aT,envmap_common_pars_fragment:rT,envmap_pars_fragment:oT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:xT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:hT,fog_fragment:fT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:_T,lights_pars_begin:vT,lights_toon_fragment:yT,lights_toon_pars_fragment:ST,lights_phong_fragment:MT,lights_phong_pars_fragment:ET,lights_physical_fragment:bT,lights_physical_pars_fragment:TT,lights_fragment_begin:AT,lights_fragment_maps:RT,lights_fragment_end:wT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:UT,map_fragment:NT,map_pars_fragment:OT,map_particle_fragment:PT,map_particle_pars_fragment:IT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:zT,morphinstance_vertex:FT,morphcolor_vertex:HT,morphnormal_vertex:VT,morphtarget_pars_vertex:GT,morphtarget_vertex:kT,normal_fragment_begin:XT,normal_fragment_maps:WT,normal_pars_fragment:YT,normal_pars_vertex:jT,normal_vertex:qT,normalmap_pars_fragment:KT,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:$T,opaque_fragment:tA,packing:eA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:sA,dithering_pars_fragment:aA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:cA,shadowmap_vertex:uA,shadowmask_pars_fragment:hA,skinbase_vertex:fA,skinning_pars_vertex:dA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:_A,tonemapping_fragment:vA,tonemapping_pars_fragment:xA,transmission_fragment:yA,transmission_pars_fragment:SA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:bA,worldpos_vertex:TA,background_vert:AA,background_frag:RA,backgroundCube_vert:wA,backgroundCube_frag:CA,cube_vert:DA,cube_frag:LA,depth_vert:UA,depth_frag:NA,distanceRGBA_vert:OA,distanceRGBA_frag:PA,equirect_vert:IA,equirect_frag:BA,linedashed_vert:zA,linedashed_frag:FA,meshbasic_vert:HA,meshbasic_frag:VA,meshlambert_vert:GA,meshlambert_frag:kA,meshmatcap_vert:XA,meshmatcap_frag:WA,meshnormal_vert:YA,meshnormal_frag:jA,meshphong_vert:qA,meshphong_frag:KA,meshphysical_vert:ZA,meshphysical_frag:QA,meshtoon_vert:JA,meshtoon_frag:$A,points_vert:t1,points_frag:e1,shadow_vert:n1,shadow_frag:i1,sprite_vert:s1,sprite_frag:a1},Lt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},zi={basic:{uniforms:Vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Vn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Vn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Vn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Vn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Vn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Vn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Vn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Vn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Vn([Lt.common,Lt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Vn([Lt.lights,Lt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};zi.physical={uniforms:Vn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const au={r:0,b:0,g:0},Ia=new Gi,r1=new ae;function o1(o,t,e,s,r,c,u){const h=new se(0);let d=c===!0?0:1,p,g,_=null,v=0,y=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?e:t).get(w)),w}function b(L){let w=!1;const z=E(L);z===null?x(h,d):z&&z.isColor&&(x(z,1),w=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,w){const z=E(w);z&&(z.isCubeTexture||z.mapping===Tu)?(g===void 0&&(g=new kn(new El(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Kr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ia.copy(w.backgroundRotation),Ia.x*=-1,Ia.y*=-1,Ia.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ia.y*=-1,Ia.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(Ia)),g.material.toneMapped=Ee.getTransfer(z.colorSpace)!==He,(_!==z||v!==z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=z,v=z.version,y=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new kn(new Zr(2,2),new ki({name:"BackgroundMaterial",uniforms:Kr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||v!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=z,v=z.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,w){L.getRGB(au,gx(o)),s.buffers.color.setClear(au.r,au.g,au.b,w,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),d=w,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,x(h,d)},render:b,addToRenderList:S,dispose:D}}function l1(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},r=v(null);let c=r,u=!1;function h(C,G,lt,rt,gt){let ft=!1;const I=_(rt,lt,G);c!==I&&(c=I,p(c.object)),ft=y(C,rt,lt,gt),ft&&E(C,rt,lt,gt),gt!==null&&t.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||u)&&(u=!1,w(C,G,lt,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function d(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let I=ft[rt];return I===void 0&&(I=v(d()),ft[rt]=I),I}function v(C){const G=[],lt=[],rt=[];for(let gt=0;gt<e;gt++)G[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function y(C,G,lt,rt){const gt=c.attributes,ft=G.attributes;let I=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){const N=gt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==rt}function E(C,G,lt,rt){const gt={},ft=G.attributes;let I=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){let N=ft[q];N===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),gt[q]=tt,I++}c.attributes=gt,c.attributesNum=I,c.index=rt}function b(){const C=c.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function S(C){x(C,0)}function x(C,G){const lt=c.newAttributes,rt=c.enabledAttributes,gt=c.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function D(){const C=c.newAttributes,G=c.enabledAttributes;for(let lt=0,rt=G.length;lt<rt;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function L(C,G,lt,rt,gt,ft,I){I===!0?o.vertexAttribIPointer(C,G,lt,gt,ft):o.vertexAttribPointer(C,G,lt,rt,gt,ft)}function w(C,G,lt,rt){b();const gt=rt.attributes,ft=lt.getAttributes(),I=G.defaultAttributeValues;for(const Z in ft){const q=ft[Z];if(q.location>=0){let Mt=gt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const N=Mt.normalized,tt=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const yt=vt.buffer,J=vt.type,dt=vt.bytesPerElement,xt=J===o.INT||J===o.UNSIGNED_INT||Mt.gpuType===mp;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ot=At.stride,le=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)x(q.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)S(q.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Kt=0;Kt<q.locationSize;Kt++)L(q.location+Kt,tt/q.locationSize,J,N,Ot*dt,(le+tt/q.locationSize*Kt)*dt,xt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<q.locationSize;At++)x(q.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<q.locationSize;At++)S(q.location+At);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let At=0;At<q.locationSize;At++)L(q.location+At,tt/q.locationSize,J,N,tt*dt,tt/q.locationSize*At*dt,xt)}}else if(I!==void 0){const N=I[Z];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(q.location,N);break;case 3:o.vertexAttrib3fv(q.location,N);break;case 4:o.vertexAttrib4fv(q.location,N);break;default:o.vertexAttrib1fv(q.location,N)}}}}D()}function z(){W();for(const C in s){const G=s[C];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C.id]}function B(C){for(const G in s){const lt=s[G];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete lt[C.id]}}function W(){U(),u=!0,c!==r&&(c=r,p(c.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function c1(o,t,e){let s;function r(p){s=p}function c(p,g){o.drawArrays(s,p,g),e.update(g,s,1)}function u(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),e.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];e.update(y,s,1)}function d(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];e.update(E,s,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function u1(o,t,e,s){let r;function c(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==Gn&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===Ml&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==bs&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Jn&&!W)}function d(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:z,maxSamples:H}}function h1(o){const t=this;let e=null,s=0,r=!1,c=!1;const u=new aa,h=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||r;return r=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=o.get(_);if(!r||E===null||E.length===0||c&&!S)c?g(null):p();else{const D=c?0:s,L=D*4;let w=x.clippingState||null;d.value=w,w=g(E,v,L,y);for(let z=0;z!==L;++z)w[z]=e[z];x.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=d.value,E!==!0||S===null){const x=y+b*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,w=y;L!==b;++L,w+=4)u.copy(_[L]).applyMatrix4(D,h),u.normal.toArray(S,w),S[w+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function f1(o){let t=new WeakMap;function e(u,h){return h===Dd?u.mapping=Wr:h===Ld&&(u.mapping=Yr),u}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Dd||h===Ld)if(t.has(u)){const d=t.get(u).texture;return e(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new NE(d.height);return p.fromEquirectangularTexture(o,u),t.set(u,p),u.addEventListener("dispose",r),e(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Fr=4,g0=[.125,.215,.35,.446,.526,.582],Va=20,ld=new yl,_0=new se;let cd=null,ud=0,hd=0,fd=!1;const Fa=(1+Math.sqrt(5))/2,Br=1/Fa,v0=[new X(-Fa,Br,0),new X(Fa,Br,0),new X(-Br,0,Fa),new X(Br,0,Fa),new X(0,Fa,-Br),new X(0,Fa,Br),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],d1=new X;class x0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,r=100,c={}){const{size:u=256,position:h=d1}=c;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,r,d,h),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,hd),this._renderer.xr.enabled=fd,t.scissorTest=!1,ru(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wr||t.mapping===Yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Ml,format:Gn,colorSpace:zn,depthBuffer:!1},r=y0(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(t,e,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(c)),this._blurMaterial=m1(c,t,e)}return r}_compileMaterial(t){const e=new kn(this._lodPlanes[0],t);this._renderer.compile(e,ld)}_sceneToCubeUV(t,e,s,r,c){const d=new Qn(90,1,e,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(_0),_.toneMapping=ha,_.autoClear=!1;const E=new la({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),b=new kn(new El,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(_0),S=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(d.up.set(0,p[D],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[D],c.y,c.z)):L===1?(d.up.set(0,0,p[D]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[D],c.z)):(d.up.set(0,p[D],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[D]));const w=this._cubeSize;ru(r,L*w,D>2?w:0,w,w),_.setRenderTarget(r),S&&_.render(b,d),_.render(t,d)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,e){const s=this._renderer,r=t.mapping===Wr||t.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const c=r?this._cubemapMaterial:this._equirectMaterial,u=new kn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;ru(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(u,ld)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let c=1;c<r;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=v0[(r-c-1)%v0.length];this._blur(t,c-1,c,u,h)}e.autoClear=s}_blur(t,e,s,r,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,s,r,"latitudinal",c),this._halfBlur(u,t,s,s,r,"longitudinal",c)}_halfBlur(t,e,s,r,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new kn(this._lodPlanes[r],p),v=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Va-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Va;S>Va&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Va}`);const x=[];let D=0;for(let B=0;B<Va;++B){const W=B/b,U=Math.exp(-W*W/2);x.push(U),B===0?D+=U:B<S&&(D+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/D;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const w=this._sizeLods[r],z=3*w*(r>L-Fr?r-L+Fr:0),H=4*(this._cubeSize-w);ru(e,z,H,3*w,2*w),d.setRenderTarget(e),d.render(_,ld)}}function p1(o){const t=[],e=[],s=[];let r=o;const c=o-Fr+1+g0.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);e.push(h);let d=1/h;u>o-Fr?d=g0[u-o+Fr-1]:u===0&&(d=0),s.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,b=3,S=2,x=1,D=new Float32Array(b*E*y),L=new Float32Array(S*E*y),w=new Float32Array(x*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,W=H>2?0:-1,U=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];D.set(U,b*E*H),L.set(v,S*E*H);const C=[H,H,H,H,H,H];w.set(C,x*E*H)}const z=new yi;z.setAttribute("position",new _n(D,b)),z.setAttribute("uv",new _n(L,S)),z.setAttribute("faceIndex",new _n(w,x)),t.push(z),r>Fr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function y0(o,t,e){const s=new fa(o,t,e);return s.texture.mapping=Tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ru(o,t,e,s,r){o.viewport.set(t,e,s,r),o.scissor.set(t,e,s,r)}function m1(o,t,e){const s=new Float32Array(Va),r=new X(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Va,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function S0(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function M0(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g1(o){let t=new WeakMap,e=null;function s(h){if(h&&h.isTexture){const d=h.mapping,p=d===Dd||d===Ld,g=d===Wr||d===Yr;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return e===null&&(e=new x0(o)),_=p?e.fromEquirectangular(h,_):e.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&r(y)?(e===null&&(e=new x0(o)),_=p?e.fromEquirectangular(h):e.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:u}}function _1(o){const t={};function e(s){if(t[s]!==void 0)return t[s];let r;switch(s){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(s)}return t[s]=r,r}return{has:function(s){return e(s)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(s){const r=e(s);return r===null&&mu("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function v1(o,t,e,s){const r={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,e.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let b=0;if(y!==null){const D=y.array;b=y.version;for(let L=0,w=D.length;L<w;L+=3){const z=D[L+0],H=D[L+1],B=D[L+2];v.push(z,H,H,B,B,z)}}else if(E!==void 0){const D=E.array;b=E.version;for(let L=0,w=D.length/3-1;L<w;L+=3){const z=L+0,H=L+1,B=L+2;v.push(z,H,H,B,B,z)}}else return;const S=new(hx(v)?mx:px)(v,1);S.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function x1(o,t,e){let s;function r(v){s=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function d(v,y){o.drawElements(s,y,c,v*u),e.update(y,s,1)}function p(v,y,E){E!==0&&(o.drawElementsInstanced(s,y,c,v*u,E),e.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];e.update(S,s,1)}function _(v,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/u,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,b,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*b[D];e.update(x,s,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function y1(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=h*(c/3);break;case o.LINES:e.lines+=h*(c/2);break;case o.LINE_STRIP:e.lines+=h*(c-1);break;case o.LINE_LOOP:e.lines+=h*c;break;case o.POINTS:e.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:s}}function S1(o,t,e){const s=new WeakMap,r=new Ce;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let z=h.attributes.position.count*w,H=1;z>t.maxTextureSize&&(H=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*H*4*_),W=new fx(B,z,H,_);W.type=Jn,W.needsUpdate=!0;const U=w*4;for(let G=0;G<_;G++){const lt=x[G],rt=D[G],gt=L[G],ft=z*H*4*G;for(let I=0;I<lt.count;I++){const Z=I*U;E===!0&&(r.fromBufferAttribute(lt,I),B[ft+Z+0]=r.x,B[ft+Z+1]=r.y,B[ft+Z+2]=r.z,B[ft+Z+3]=0),b===!0&&(r.fromBufferAttribute(rt,I),B[ft+Z+4]=r.x,B[ft+Z+5]=r.y,B[ft+Z+6]=r.z,B[ft+Z+7]=0),S===!0&&(r.fromBufferAttribute(gt,I),B[ft+Z+8]=r.x,B[ft+Z+9]=r.y,B[ft+Z+10]=r.z,B[ft+Z+11]=gt.itemSize===4?r.w:1)}}v={count:_,texture:W,size:new te(z,H)},s.set(h,v),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function M1(o,t,e,s){let r=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,_=t.get(d,g);if(r.get(_)!==p&&(t.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:c,dispose:u}}const wx=new An,E0=new Ex(1,1),Cx=new fx,Dx=new gE,Lx=new vx,b0=[],T0=[],A0=new Float32Array(16),R0=new Float32Array(9),w0=new Float32Array(4);function io(o,t,e){const s=o[0];if(s<=0||s>0)return o;const r=t*e;let c=b0[r];if(c===void 0&&(c=new Float32Array(r),b0[r]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=e,o[u].toArray(c,h)}return c}function vn(o,t){if(o.length!==t.length)return!1;for(let e=0,s=o.length;e<s;e++)if(o[e]!==t[e])return!1;return!0}function xn(o,t){for(let e=0,s=t.length;e<s;e++)o[e]=t[e]}function Au(o,t){let e=T0[t];e===void 0&&(e=new Int32Array(t),T0[t]=e);for(let s=0;s!==t;++s)e[s]=o.allocateTextureUnit();return e}function E1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function b1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2fv(this.addr,t),xn(e,t)}}function T1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;o.uniform3fv(this.addr,t),xn(e,t)}}function A1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4fv(this.addr,t),xn(e,t)}}function R1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,s))return;w0.set(s),o.uniformMatrix2fv(this.addr,!1,w0),xn(e,s)}}function w1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,s))return;R0.set(s),o.uniformMatrix3fv(this.addr,!1,R0),xn(e,s)}}function C1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(vn(e,s))return;A0.set(s),o.uniformMatrix4fv(this.addr,!1,A0),xn(e,s)}}function D1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function L1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2iv(this.addr,t),xn(e,t)}}function U1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;o.uniform3iv(this.addr,t),xn(e,t)}}function N1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4iv(this.addr,t),xn(e,t)}}function O1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function P1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2uiv(this.addr,t),xn(e,t)}}function I1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;o.uniform3uiv(this.addr,t),xn(e,t)}}function B1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4uiv(this.addr,t),xn(e,t)}}function z1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(E0.compareFunction=cx,c=E0):c=wx,e.setTexture2D(t||c,r)}function F1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTexture3D(t||Dx,r)}function H1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTextureCube(t||Lx,r)}function V1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTexture2DArray(t||Cx,r)}function G1(o){switch(o){case 5126:return E1;case 35664:return b1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return w1;case 35676:return C1;case 5124:case 35670:return D1;case 35667:case 35671:return L1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return O1;case 36294:return P1;case 36295:return I1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}function k1(o,t){o.uniform1fv(this.addr,t)}function X1(o,t){const e=io(t,this.size,2);o.uniform2fv(this.addr,e)}function W1(o,t){const e=io(t,this.size,3);o.uniform3fv(this.addr,e)}function Y1(o,t){const e=io(t,this.size,4);o.uniform4fv(this.addr,e)}function j1(o,t){const e=io(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function q1(o,t){const e=io(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function K1(o,t){const e=io(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Z1(o,t){o.uniform1iv(this.addr,t)}function Q1(o,t){o.uniform2iv(this.addr,t)}function J1(o,t){o.uniform3iv(this.addr,t)}function $1(o,t){o.uniform4iv(this.addr,t)}function tR(o,t){o.uniform1uiv(this.addr,t)}function eR(o,t){o.uniform2uiv(this.addr,t)}function nR(o,t){o.uniform3uiv(this.addr,t)}function iR(o,t){o.uniform4uiv(this.addr,t)}function sR(o,t,e){const s=this.cache,r=t.length,c=Au(e,r);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||wx,c[u])}function aR(o,t,e){const s=this.cache,r=t.length,c=Au(e,r);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||Dx,c[u])}function rR(o,t,e){const s=this.cache,r=t.length,c=Au(e,r);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||Lx,c[u])}function oR(o,t,e){const s=this.cache,r=t.length,c=Au(e,r);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||Cx,c[u])}function lR(o){switch(o){case 5126:return k1;case 35664:return X1;case 35665:return W1;case 35666:return Y1;case 35674:return j1;case 35675:return q1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return $1;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return oR}}class cR{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=G1(e.type)}}class uR{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lR(e.type)}}class hR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(t,e[h.id],s)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function C0(o,t){o.seq.push(t),o.map[t.id]=t}function fR(o,t,e){const s=o.name,r=s.length;for(dd.lastIndex=0;;){const c=dd.exec(s),u=dd.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){C0(e,p===void 0?new cR(h,o,t):new uR(h,o,t));break}else{let _=e.map[h];_===void 0&&(_=new hR(h),C0(e,_)),e=_}}}class gu{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const c=t.getActiveUniform(e,r),u=t.getUniformLocation(e,c.name);fR(c,u,this)}}setValue(t,e,s,r){const c=this.map[e];c!==void 0&&c.setValue(t,s,r)}setOptional(t,e,s){const r=e[s];r!==void 0&&this.setValue(t,s,r)}static upload(t,e,s,r){for(let c=0,u=e.length;c!==u;++c){const h=e[c],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,r)}}static seqWithValue(t,e){const s=[];for(let r=0,c=t.length;r!==c;++r){const u=t[r];u.id in e&&s.push(u)}return s}}function D0(o,t,e){const s=o.createShader(t);return o.shaderSource(s,e),o.compileShader(s),s}const dR=37297;let pR=0;function mR(o,t){const e=o.split(`
`),s=[],r=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let u=r;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${e[u]}`)}return s.join(`
`)}const L0=new oe;function gR(o){Ee._getMatrix(L0,Ee.workingColorSpace,o);const t=`mat3( ${L0.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(o)){case vu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function U0(o,t,e){const s=o.getShaderParameter(t,o.COMPILE_STATUS),r=o.getShaderInfoLog(t).trim();if(s&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+r+`

`+mR(o.getShaderSource(t),u)}else return r}function _R(o,t){const e=gR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vR(o,t){let e;switch(t){case TM:e="Linear";break;case AM:e="Reinhard";break;case RM:e="Cineon";break;case wM:e="ACESFilmic";break;case DM:e="AgX";break;case LM:e="Neutral";break;case CM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ou=new X;function xR(){Ee.getLuminanceCoefficients(ou);const o=ou.x.toFixed(4),t=ou.y.toFixed(4),e=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function SR(o){const t=[];for(const e in o){const s=o[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function MR(o,t){const e={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const c=o.getActiveAttrib(t,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),e[u]={type:c.type,location:o.getAttribLocation(t,u),locationSize:h}}return e}function cl(o){return o!==""}function N0(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(o){return o.replace(ER,TR)}const bR=new Map;function TR(o,t){let e=ce[t];if(e===void 0){const s=bR.get(t);if(s!==void 0)e=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return cp(e)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(o){return o.replace(AR,RR)}function RR(o,t,e,s){let r="";for(let c=parseInt(t);c<parseInt(e);c++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function I0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wR(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===q0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===sM?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===_s&&(t="SHADOWMAP_TYPE_VSM"),t}function CR(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wr:case Yr:t="ENVMAP_TYPE_CUBE";break;case Tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DR(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Yr:t="ENVMAP_MODE_REFRACTION";break}return t}function LR(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case K0:t="ENVMAP_BLENDING_MULTIPLY";break;case EM:t="ENVMAP_BLENDING_MIX";break;case bM:t="ENVMAP_BLENDING_ADD";break}return t}function UR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function NR(o,t,e,s){const r=o.getContext(),c=e.defines;let u=e.vertexShader,h=e.fragmentShader;const d=wR(e),p=CR(e),g=DR(e),_=LR(e),v=UR(e),y=yR(e),E=SR(c),b=r.createProgram();let S,x,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(cl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(S=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ha?"#define TONE_MAPPING":"",e.toneMapping!==ha?ce.tonemapping_pars_fragment:"",e.toneMapping!==ha?vR("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,_R("linearToOutputTexel",e.outputColorSpace),xR(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cl).join(`
`)),u=cp(u),u=N0(u,e),u=O0(u,e),h=cp(h),h=N0(h,e),h=O0(h,e),u=P0(u),h=P0(h),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",e.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+S+u,w=D+x+h,z=D0(r,r.VERTEX_SHADER,L),H=D0(r,r.FRAGMENT_SHADER,w);r.attachShader(b,z),r.attachShader(b,H),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function B(G){if(o.debug.checkShaderErrors){const lt=r.getProgramInfoLog(b).trim(),rt=r.getShaderInfoLog(z).trim(),gt=r.getShaderInfoLog(H).trim();let ft=!0,I=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,b,z,H);else{const Z=U0(r,z,"vertex"),q=U0(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(I=!1);I&&(G.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:x}})}r.deleteShader(z),r.deleteShader(H),W=new gu(r,b),U=MR(r,b)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,dR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=H,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,r=this._getShaderStage(e),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new IR(t),e.set(t,s)),s}}class IR{constructor(t){this.id=OR++,this.code=t,this.usedTimes=0}}function BR(o,t,e,s,r,c,u){const h=new bp,d=new PR,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,C,G,lt,rt){const gt=lt.fog,ft=rt.geometry,I=U.isMeshStandardMaterial?lt.environment:null,Z=(U.isMeshStandardMaterial?e:t).get(U.envMap||I),q=Z&&Z.mapping===Tu?Z.image.height:null,Mt=E[U.type];U.precision!==null&&(y=r.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let vt=0;ft.morphAttributes.position!==void 0&&(vt=1),ft.morphAttributes.normal!==void 0&&(vt=2),ft.morphAttributes.color!==void 0&&(vt=3);let yt,J,dt,xt;if(Mt){const Ae=zi[Mt];yt=Ae.vertexShader,J=Ae.fragmentShader}else yt=U.vertexShader,J=U.fragmentShader,d.update(U),dt=d.getVertexShaderID(U),xt=d.getFragmentShaderID(U);const At=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),le=rt.isInstancedMesh===!0,Kt=rt.isBatchedMesh===!0,We=!!U.map,Ge=!!U.matcap,de=!!Z,F=!!U.aoMap,Xn=!!U.lightMap,xe=!!U.bumpMap,ne=!!U.normalMap,Xt=!!U.displacementMap,Pe=!!U.emissiveMap,Vt=!!U.metalnessMap,O=!!U.roughnessMap,A=U.anisotropy>0,et=U.clearcoat>0,_t=U.dispersion>0,St=U.iridescence>0,ut=U.sheen>0,Bt=U.transmission>0,Rt=A&&!!U.anisotropyMap,wt=et&&!!U.clearcoatMap,ye=et&&!!U.clearcoatNormalMap,Tt=et&&!!U.clearcoatRoughnessMap,Ft=St&&!!U.iridescenceMap,jt=St&&!!U.iridescenceThicknessMap,Zt=ut&&!!U.sheenColorMap,Pt=ut&&!!U.sheenRoughnessMap,ue=!!U.specularMap,ee=!!U.specularColorMap,Ie=!!U.specularIntensityMap,k=Bt&&!!U.transmissionMap,Ut=Bt&&!!U.thicknessMap,ot=!!U.gradientMap,pt=!!U.alphaMap,It=U.alphaTest>0,Nt=!!U.alphaHash,ie=!!U.extensions;let Ye=ha;U.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ye=o.toneMapping);const rn={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:yt,fragmentShader:J,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Kt,batchingColor:Kt&&rt._colorsTexture!==null,instancing:le,instancingColor:le&&rt.instanceColor!==null,instancingMorph:le&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:zn,alphaToCoverage:!!U.alphaToCoverage,map:We,matcap:Ge,envMap:de,envMapMode:de&&Z.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Xn,bumpMap:xe,normalMap:ne,displacementMap:v&&Xt,emissiveMap:Pe,normalMapObjectSpace:ne&&U.normalMapType===BM,normalMapTangentSpace:ne&&U.normalMapType===lx,metalnessMap:Vt,roughnessMap:O,anisotropy:A,anisotropyMap:Rt,clearcoat:et,clearcoatMap:wt,clearcoatNormalMap:ye,clearcoatRoughnessMap:Tt,dispersion:_t,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:ut,sheenColorMap:Zt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ee,specularIntensityMap:Ie,transmission:Bt,transmissionMap:k,thicknessMap:Ut,gradientMap:ot,opaque:U.transparent===!1&&U.blending===Vr&&U.alphaToCoverage===!1,alphaMap:pt,alphaTest:It,alphaHash:Nt,combine:U.combine,mapUv:We&&b(U.map.channel),aoMapUv:F&&b(U.aoMap.channel),lightMapUv:Xn&&b(U.lightMap.channel),bumpMapUv:xe&&b(U.bumpMap.channel),normalMapUv:ne&&b(U.normalMap.channel),displacementMapUv:Xt&&b(U.displacementMap.channel),emissiveMapUv:Pe&&b(U.emissiveMap.channel),metalnessMapUv:Vt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:Rt&&b(U.anisotropyMap.channel),clearcoatMapUv:wt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:ye&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(U.sheenRoughnessMap.channel),specularMapUv:ue&&b(U.specularMap.channel),specularColorMapUv:ee&&b(U.specularColorMap.channel),specularIntensityMapUv:Ie&&b(U.specularIntensityMap.channel),transmissionMapUv:k&&b(U.transmissionMap.channel),thicknessMapUv:Ut&&b(U.thicknessMap.channel),alphaMapUv:pt&&b(U.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ne||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(We||pt),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ot,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ye,decodeVideoTexture:We&&U.map.isVideoTexture===!0&&Ee.getTransfer(U.map.colorSpace)===He,decodeVideoTextureEmissive:Pe&&U.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(U.emissiveMap.colorSpace)===He,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ri,flipSided:U.side===$n,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ie&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&U.extensions.multiDraw===!0||Kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return rn.vertexUv1s=p.has(1),rn.vertexUv2s=p.has(2),rn.vertexUv3s=p.has(3),p.clear(),rn}function x(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(D(C,U),L(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function D(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function L(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const C=E[U.type];let G;if(C){const lt=zi[C];G=CE.clone(lt.uniforms)}else G=U.uniforms;return G}function z(U,C){let G;for(let lt=0,rt=g.length;lt<rt;lt++){const gt=g[lt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new NR(o,C,U,c),g.push(G)),G}function H(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function B(U){d.remove(U)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:z,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:W}}function zR(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function s(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function c(){o=new WeakMap}return{has:t,get:e,remove:s,update:r,dispose:c}}function FR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function B0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function z0(){const o=[];let t=0;const e=[],s=[],r=[];function c(){t=0,e.length=0,s.length=0,r.length=0}function u(_,v,y,E,b,S){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},o[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function h(_,v,y,E,b,S){const x=u(_,v,y,E,b,S);y.transmission>0?s.push(x):y.transparent===!0?r.push(x):e.push(x)}function d(_,v,y,E,b,S){const x=u(_,v,y,E,b,S);y.transmission>0?s.unshift(x):y.transparent===!0?r.unshift(x):e.unshift(x)}function p(_,v){e.length>1&&e.sort(_||FR),s.length>1&&s.sort(v||B0),r.length>1&&r.sort(v||B0)}function g(){for(let _=t,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:s,transparent:r,init:c,push:h,unshift:d,finish:g,sort:p}}function HR(){let o=new WeakMap;function t(s,r){const c=o.get(s);let u;return c===void 0?(u=new z0,o.set(s,[u])):r>=c.length?(u=new z0,c.push(u)):u=c[r],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function VR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new se};break;case"SpotLight":e={position:new X,direction:new X,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new X,halfWidth:new X,halfHeight:new X};break}return o[t.id]=e,e}}}function GR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let kR=0;function XR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function WR(o){const t=new VR,e=GR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const r=new X,c=new ae,u=new ae;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,D=0,L=0,w=0,z=0,H=0,B=0;p.sort(XR);for(let U=0,C=p.length;U<C;U++){const G=p[U],lt=G.color,rt=G.intensity,gt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*rt,_+=lt.g*rt,v+=lt.b*rt;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],rt);B++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=G.shadow.matrix,D++}s.directional[y]=I,y++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(lt).multiplyScalar(rt),I.distance=gt,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[b]=I;const Z=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,Z.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[b]=Z.matrix,G.castShadow){const q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[b]=q,s.spotShadowMap[b]=ft,w++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(lt).multiplyScalar(rt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=I,S++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const Z=G.shadow,q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(rt),I.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[x]=I,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const W=s.hash;(W.directionalLength!==y||W.pointLength!==E||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==x||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==w||W.numSpotMaps!==z||W.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+z-H,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,W.directionalLength=y,W.pointLength=E,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=x,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=w,W.numSpotMaps=z,W.numLightProbes=B,s.version=kR++)}function d(p,g){let _=0,v=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=s.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:d,state:s}}function F0(o){const t=new WR(o),e=[],s=[];function r(g){p.camera=g,e.length=0,s.length=0}function c(g){e.push(g)}function u(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function YR(o){let t=new WeakMap;function e(r,c=0){const u=t.get(r);let h;return u===void 0?(h=new F0(o),t.set(r,[h])):c>=u.length?(h=new F0(o),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:e,dispose:s}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KR(o,t,e){let s=new Rp;const r=new te,c=new te,u=new Ce,h=new WE({depthPacking:IM}),d=new YE,p={},g=e.maxTextureSize,_={[Es]:$n,[$n]:Es,[Ri]:Ri},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:jR,fragmentShader:qR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new yi;E.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new kn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q0;let x=this.type;this.render=function(H,B,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(ua),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=x!==_s&&this.type===_s,gt=x===_s&&this.type!==_s;for(let ft=0,I=H.length;ft<I;ft++){const Z=H[ft],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Mt=q.getFrameExtents();if(r.multiply(Mt),c.copy(q.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(c.x=Math.floor(g/Mt.x),r.x=c.x*Mt.x,q.mapSize.x=c.x),r.y>g&&(c.y=Math.floor(g/Mt.y),r.y=c.y*Mt.y,q.mapSize.y=c.y)),q.map===null||rt===!0||gt===!0){const tt=this.type!==_s?{minFilter:an,magFilter:an}:{};q.map!==null&&q.map.dispose(),q.map=new fa(r.x,r.y,tt),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const N=q.getViewportCount();for(let tt=0;tt<N;tt++){const vt=q.getViewport(tt);u.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),lt.viewport(u),q.updateMatrices(Z,tt),s=q.getFrustum(),w(B,W,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===_s&&D(q,W),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(U,C,G)};function D(H,B){const W=t.update(b);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new fa(r.x,r.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,W,v,b,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,W,y,b,null)}function L(H,B,W,U){let C=null;const G=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?d:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const lt=C.uuid,rt=B.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let ft=gt[rt];ft===void 0&&(ft=C.clone(),gt[rt]=ft,B.addEventListener("dispose",z)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,U===_s?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:_[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=W}return C}function w(H,B,W,U,C){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===_s)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),gt=H.material;if(Array.isArray(gt)){const ft=rt.groups;for(let I=0,Z=ft.length;I<Z;I++){const q=ft[I],Mt=gt[q.materialIndex];if(Mt&&Mt.visible){const N=L(H,Mt,U,C);H.onBeforeShadow(o,H,B,W,rt,N,q),o.renderBufferDirect(W,null,rt,N,H,q),H.onAfterShadow(o,H,B,W,rt,N,q)}}}else if(gt.visible){const ft=L(H,gt,U,C);H.onBeforeShadow(o,H,B,W,rt,ft,null),o.renderBufferDirect(W,null,rt,ft,H,null),H.onAfterShadow(o,H,B,W,rt,ft,null)}}const lt=H.children;for(let rt=0,gt=lt.length;rt<gt;rt++)w(lt[rt],B,W,U,C)}function z(H){H.target.removeEventListener("dispose",z);for(const W in p){const U=p[W],C=H.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const ZR={[Ed]:bd,[Td]:wd,[Ad]:Cd,[Xr]:Rd,[bd]:Ed,[wd]:Td,[Cd]:Ad,[Rd]:Xr};function QR(o,t){function e(){let k=!1;const Ut=new Ce;let ot=null;const pt=new Ce(0,0,0,0);return{setMask:function(It){ot!==It&&!k&&(o.colorMask(It,It,It,It),ot=It)},setLocked:function(It){k=It},setClear:function(It,Nt,ie,Ye,rn){rn===!0&&(It*=Ye,Nt*=Ye,ie*=Ye),Ut.set(It,Nt,ie,Ye),pt.equals(Ut)===!1&&(o.clearColor(It,Nt,ie,Ye),pt.copy(Ut))},reset:function(){k=!1,ot=null,pt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,ot=null,pt=null,It=null;return{setReversed:function(Nt){if(Ut!==Nt){const ie=t.get("EXT_clip_control");Nt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Nt;const Ye=It;It=null,this.setClear(Ye)}},getReversed:function(){return Ut},setTest:function(Nt){Nt?At(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(o.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Ut&&(Nt=ZR[Nt]),pt!==Nt){switch(Nt){case Ed:o.depthFunc(o.NEVER);break;case bd:o.depthFunc(o.ALWAYS);break;case Td:o.depthFunc(o.LESS);break;case Xr:o.depthFunc(o.LEQUAL);break;case Ad:o.depthFunc(o.EQUAL);break;case Rd:o.depthFunc(o.GEQUAL);break;case wd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){It!==Nt&&(Ut&&(Nt=1-Nt),o.clearDepth(Nt),It=Nt)},reset:function(){k=!1,ot=null,pt=null,It=null,Ut=!1}}}function r(){let k=!1,Ut=null,ot=null,pt=null,It=null,Nt=null,ie=null,Ye=null,rn=null;return{setTest:function(Ae){k||(Ae?At(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!k&&(o.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,ti,yn){(ot!==Ae||pt!==ti||It!==yn)&&(o.stencilFunc(Ae,ti,yn),ot=Ae,pt=ti,It=yn)},setOp:function(Ae,ti,yn){(Nt!==Ae||ie!==ti||Ye!==yn)&&(o.stencilOp(Ae,ti,yn),Nt=Ae,ie=ti,Ye=yn)},setLocked:function(Ae){k=Ae},setClear:function(Ae){rn!==Ae&&(o.clearStencil(Ae),rn=Ae)},reset:function(){k=!1,Ut=null,ot=null,pt=null,It=null,Nt=null,ie=null,Ye=null,rn=null}}}const c=new e,u=new s,h=new r,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,D=null,L=null,w=null,z=null,H=null,B=new se(0,0,0),W=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=Z>=2);let Mt=null,N={};const tt=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),yt=new Ce().fromArray(tt),J=new Ce().fromArray(vt);function dt(k,Ut,ot,pt){const It=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(k,Nt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ot;ie++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,pt,0,o.RGBA,o.UNSIGNED_BYTE,It):o.texImage2D(Ut+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,It);return Nt}const xt={};xt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),At(o.DEPTH_TEST),u.setFunc(Xr),xe(!1),ne(xv),At(o.CULL_FACE),F(ua);function At(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ot(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function le(k,Ut){return _[k]!==Ut?(o.bindFramebuffer(k,Ut),_[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Kt(k,Ut){let ot=y,pt=!1;if(k){ot=v.get(Ut),ot===void 0&&(ot=[],v.set(Ut,ot));const It=k.textures;if(ot.length!==It.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ie=It.length;Nt<ie;Nt++)ot[Nt]=o.COLOR_ATTACHMENT0+Nt;ot.length=It.length,pt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,pt=!0);pt&&o.drawBuffers(ot)}function We(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Ge={[Ha]:o.FUNC_ADD,[rM]:o.FUNC_SUBTRACT,[oM]:o.FUNC_REVERSE_SUBTRACT};Ge[lM]=o.MIN,Ge[cM]=o.MAX;const de={[uM]:o.ZERO,[hM]:o.ONE,[fM]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[vM]:o.SRC_ALPHA_SATURATE,[gM]:o.DST_COLOR,[pM]:o.DST_ALPHA,[dM]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[_M]:o.ONE_MINUS_DST_COLOR,[mM]:o.ONE_MINUS_DST_ALPHA,[xM]:o.CONSTANT_COLOR,[yM]:o.ONE_MINUS_CONSTANT_COLOR,[SM]:o.CONSTANT_ALPHA,[MM]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,ot,pt,It,Nt,ie,Ye,rn,Ae){if(k===ua){b===!0&&(Ot(o.BLEND),b=!1);return}if(b===!1&&(At(o.BLEND),b=!0),k!==aM){if(k!==S||Ae!==U){if((x!==Ha||w!==Ha)&&(o.blendEquation(o.FUNC_ADD),x=Ha,w=Ha),Ae)switch(k){case Vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yv:o.blendFunc(o.ONE,o.ONE);break;case Sv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Sv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,L=null,z=null,H=null,B.set(0,0,0),W=0,S=k,U=Ae}return}It=It||Ut,Nt=Nt||ot,ie=ie||pt,(Ut!==x||It!==w)&&(o.blendEquationSeparate(Ge[Ut],Ge[It]),x=Ut,w=It),(ot!==D||pt!==L||Nt!==z||ie!==H)&&(o.blendFuncSeparate(de[ot],de[pt],de[Nt],de[ie]),D=ot,L=pt,z=Nt,H=ie),(Ye.equals(B)===!1||rn!==W)&&(o.blendColor(Ye.r,Ye.g,Ye.b,rn),B.copy(Ye),W=rn),S=k,U=!1}function Xn(k,Ut){k.side===Ri?Ot(o.CULL_FACE):At(o.CULL_FACE);let ot=k.side===$n;Ut&&(ot=!ot),xe(ot),k.blending===Vr&&k.transparent===!1?F(ua):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const pt=k.stencilWrite;h.setTest(pt),pt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function xe(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function ne(k){k!==nM?(At(o.CULL_FACE),k!==G&&(k===xv?o.cullFace(o.BACK):k===iM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),G=k}function Xt(k){k!==lt&&(I&&o.lineWidth(k),lt=k)}function Pe(k,Ut,ot){k?(At(o.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==ot)&&(o.polygonOffset(Ut,ot),rt=Ut,gt=ot)):Ot(o.POLYGON_OFFSET_FILL)}function Vt(k){k?At(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function O(k){k===void 0&&(k=o.TEXTURE0+ft-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function A(k,Ut,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+ft-1:ot=Mt);let pt=N[ot];pt===void 0&&(pt={type:void 0,texture:void 0},N[ot]=pt),(pt.type!==k||pt.texture!==Ut)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(k,Ut||xt[k]),pt.type=k,pt.texture=Ut)}function et(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Pt(k){J.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ue(k,Ut){let ot=p.get(Ut);ot===void 0&&(ot=new WeakMap,p.set(Ut,ot));let pt=ot.get(k);pt===void 0&&(pt=o.getUniformBlockIndex(Ut,k.name),ot.set(k,pt))}function ee(k,Ut){const pt=p.get(Ut).get(k);d.get(Ut)!==pt&&(o.uniformBlockBinding(Ut,pt,k.__bindingPointIndex),d.set(Ut,pt))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,N={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,D=null,L=null,w=null,z=null,H=null,B=new se(0,0,0),W=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null,yt.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:At,disable:Ot,bindFramebuffer:le,drawBuffers:Kt,useProgram:We,setBlending:F,setMaterial:Xn,setFlipSided:xe,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:Pe,setScissorTest:Vt,activeTexture:O,bindTexture:A,unbindTexture:et,compressedTexImage2D:_t,compressedTexImage3D:St,texImage2D:Ft,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ee,texStorage2D:ye,texStorage3D:Tt,texSubImage2D:ut,texSubImage3D:Bt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:wt,scissor:Zt,viewport:Pt,reset:Ie}}function JR(o,t,e,s,r,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new te,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return y?new OffscreenCanvas(O,A):xl("canvas")}function b(O,A,et){let _t=1;const St=Vt(O);if((St.width>et||St.height>et)&&(_t=et/Math.max(St.width,St.height)),_t<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(_t*St.width),Bt=Math.floor(_t*St.height);_===void 0&&(_=E(ut,Bt));const Rt=A?E(ut,Bt):_;return Rt.width=ut,Rt.height=Bt,Rt.getContext("2d").drawImage(O,0,0,ut,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Bt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,A,et,_t,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=A;if(A===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),A===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),A===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),A===o.RGBA){const Bt=St?vu:Ee.getTransfer(_t);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Bt===He?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function w(O,A){let et;return O?A===null||A===ka||A===pl?et=o.DEPTH24_STENCIL8:A===Jn?et=o.DEPTH32F_STENCIL8:A===dl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ka||A===pl?et=o.DEPTH_COMPONENT24:A===Jn?et=o.DEPTH_COMPONENT32F:A===dl&&(et=o.DEPTH_COMPONENT16),et}function z(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==an&&O.minFilter!==ui?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function H(O){const A=O.target;A.removeEventListener("dispose",H),W(A),A.isVideoTexture&&g.delete(A)}function B(O){const A=O.target;A.removeEventListener("dispose",B),C(A)}function W(O){const A=s.get(O);if(A.__webglInit===void 0)return;const et=O.source,_t=v.get(et);if(_t){const St=_t[A.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(O),Object.keys(_t).length===0&&v.delete(et)}s.remove(O)}function U(O){const A=s.get(O);o.deleteTexture(A.__webglTexture);const et=O.source,_t=v.get(et);delete _t[A.__cacheKey],u.memory.textures--}function C(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let St=0;St<A.__webglFramebuffer[_t].length;St++)o.deleteFramebuffer(A.__webglFramebuffer[_t][St]);else o.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[_t]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=O.textures;for(let _t=0,St=et.length;_t<St;_t++){const ut=s.get(et[_t]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),u.memory.textures--),s.remove(et[_t])}s.remove(O)}let G=0;function lt(){G=0}function rt(){const O=G;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),G+=1,O}function gt(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ft(O,A){const et=s.get(O);if(O.isVideoTexture&&Xt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const _t=O.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,O,A);return}}e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function I(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){J(et,O,A);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function Z(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){J(et,O,A);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function q(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){dt(et,O,A);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const Mt={[jr]:o.REPEAT,[oa]:o.CLAMP_TO_EDGE,[_u]:o.MIRRORED_REPEAT},N={[an]:o.NEAREST,[Q0]:o.NEAREST_MIPMAP_NEAREST,[ll]:o.NEAREST_MIPMAP_LINEAR,[ui]:o.LINEAR,[cu]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},tt={[zM]:o.NEVER,[XM]:o.ALWAYS,[FM]:o.LESS,[cx]:o.LEQUAL,[HM]:o.EQUAL,[kM]:o.GEQUAL,[VM]:o.GREATER,[GM]:o.NOTEQUAL};function vt(O,A){if(A.type===Jn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ui||A.magFilter===cu||A.magFilter===ll||A.magFilter===xs||A.minFilter===ui||A.minFilter===cu||A.minFilter===ll||A.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Mt[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Mt[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Mt[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,N[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===an||A.minFilter!==ll&&A.minFilter!==xs||A.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function yt(O,A){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",H));const _t=A.source;let St=v.get(_t);St===void 0&&(St={},v.set(_t,St));const ut=gt(A);if(ut!==O.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,et=!0),St[ut].usedTimes++;const Bt=St[O.__cacheKey];Bt!==void 0&&(St[O.__cacheKey].usedTimes--,Bt.usedTimes===0&&U(A)),O.__cacheKey=ut,O.__webglTexture=St[ut].texture}return et}function J(O,A,et){let _t=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=o.TEXTURE_3D);const St=yt(O,A),ut=A.source;e.bindTexture(_t,O.__webglTexture,o.TEXTURE0+et);const Bt=s.get(ut);if(ut.version!==Bt.__version||St===!0){e.activeTexture(o.TEXTURE0+et);const Rt=Ee.getPrimaries(Ee.workingColorSpace),wt=A.colorSpace===ra?null:Ee.getPrimaries(A.colorSpace),ye=A.colorSpace===ra||Rt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Tt=b(A.image,!1,r.maxTextureSize);Tt=Pe(A,Tt);const Ft=c.convert(A.format,A.colorSpace),jt=c.convert(A.type);let Zt=L(A.internalFormat,Ft,jt,A.colorSpace,A.isVideoTexture);vt(_t,A);let Pt;const ue=A.mipmaps,ee=A.isVideoTexture!==!0,Ie=Bt.__version===void 0||St===!0,k=ut.dataReady,Ut=z(A,Tt);if(A.isDepthTexture)Zt=w(A.format===gl,A.type),Ie&&(ee?e.texStorage2D(o.TEXTURE_2D,1,Zt,Tt.width,Tt.height):e.texImage2D(o.TEXTURE_2D,0,Zt,Tt.width,Tt.height,0,Ft,jt,null));else if(A.isDataTexture)if(ue.length>0){ee&&Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Zt,ue[0].width,ue[0].height);for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):e.texImage2D(o.TEXTURE_2D,ot,Zt,Pt.width,Pt.height,0,Ft,jt,Pt.data);A.generateMipmaps=!1}else ee?(Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Zt,Tt.width,Tt.height),k&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,jt,Tt.data)):e.texImage2D(o.TEXTURE_2D,0,Zt,Tt.width,Tt.height,0,Ft,jt,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Zt,ue[0].width,ue[0].height,Tt.depth);for(let ot=0,pt=ue.length;ot<pt;ot++)if(Pt=ue[ot],A.format!==Gn)if(Ft!==null)if(ee){if(k)if(A.layerUpdates.size>0){const It=m0(Pt.width,Pt.height,A.format,A.type);for(const Nt of A.layerUpdates){const ie=Pt.data.subarray(Nt*It/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*It/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Nt,Pt.width,Pt.height,1,Ft,ie)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,Pt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Zt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,Ft,jt,Pt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ot,Zt,Pt.width,Pt.height,Tt.depth,0,Ft,jt,Pt.data)}else{ee&&Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Zt,ue[0].width,ue[0].height);for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],A.format!==Gn?Ft!==null?ee?k&&e.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Pt.data):e.compressedTexImage2D(o.TEXTURE_2D,ot,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):e.texImage2D(o.TEXTURE_2D,ot,Zt,Pt.width,Pt.height,0,Ft,jt,Pt.data)}else if(A.isDataArrayTexture)if(ee){if(Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Zt,Tt.width,Tt.height,Tt.depth),k)if(A.layerUpdates.size>0){const ot=m0(Tt.width,Tt.height,A.format,A.type);for(const pt of A.layerUpdates){const It=Tt.data.subarray(pt*ot/Tt.data.BYTES_PER_ELEMENT,(pt+1)*ot/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Tt.width,Tt.height,1,Ft,jt,It)}A.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,jt,Tt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Tt.width,Tt.height,Tt.depth,0,Ft,jt,Tt.data);else if(A.isData3DTexture)ee?(Ie&&e.texStorage3D(o.TEXTURE_3D,Ut,Zt,Tt.width,Tt.height,Tt.depth),k&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,jt,Tt.data)):e.texImage3D(o.TEXTURE_3D,0,Zt,Tt.width,Tt.height,Tt.depth,0,Ft,jt,Tt.data);else if(A.isFramebufferTexture){if(Ie)if(ee)e.texStorage2D(o.TEXTURE_2D,Ut,Zt,Tt.width,Tt.height);else{let ot=Tt.width,pt=Tt.height;for(let It=0;It<Ut;It++)e.texImage2D(o.TEXTURE_2D,It,Zt,ot,pt,0,Ft,jt,null),ot>>=1,pt>>=1}}else if(ue.length>0){if(ee&&Ie){const ot=Vt(ue[0]);e.texStorage2D(o.TEXTURE_2D,Ut,Zt,ot.width,ot.height)}for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft,jt,Pt):e.texImage2D(o.TEXTURE_2D,ot,Zt,Ft,jt,Pt);A.generateMipmaps=!1}else if(ee){if(Ie){const ot=Vt(Tt);e.texStorage2D(o.TEXTURE_2D,Ut,Zt,ot.width,ot.height)}k&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,jt,Tt)}else e.texImage2D(o.TEXTURE_2D,0,Zt,Ft,jt,Tt);S(A)&&x(_t),Bt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function dt(O,A,et){if(A.image.length!==6)return;const _t=yt(O,A),St=A.source;e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const ut=s.get(St);if(St.version!==ut.__version||_t===!0){e.activeTexture(o.TEXTURE0+et);const Bt=Ee.getPrimaries(Ee.workingColorSpace),Rt=A.colorSpace===ra?null:Ee.getPrimaries(A.colorSpace),wt=A.colorSpace===ra||Bt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let pt=0;pt<6;pt++)!ye&&!Tt?Ft[pt]=b(A.image[pt],!0,r.maxCubemapSize):Ft[pt]=Tt?A.image[pt].image:A.image[pt],Ft[pt]=Pe(A,Ft[pt]);const jt=Ft[0],Zt=c.convert(A.format,A.colorSpace),Pt=c.convert(A.type),ue=L(A.internalFormat,Zt,Pt,A.colorSpace),ee=A.isVideoTexture!==!0,Ie=ut.__version===void 0||_t===!0,k=St.dataReady;let Ut=z(A,jt);vt(o.TEXTURE_CUBE_MAP,A);let ot;if(ye){ee&&Ie&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ue,jt.width,jt.height);for(let pt=0;pt<6;pt++){ot=Ft[pt].mipmaps;for(let It=0;It<ot.length;It++){const Nt=ot[It];A.format!==Gn?Zt!==null?ee?k&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,Nt.width,Nt.height,Zt,Nt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,ue,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,Nt.width,Nt.height,Zt,Pt,Nt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,ue,Nt.width,Nt.height,0,Zt,Pt,Nt.data)}}}else{if(ot=A.mipmaps,ee&&Ie){ot.length>0&&Ut++;const pt=Vt(Ft[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Tt){ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft[pt].width,Ft[pt].height,Zt,Pt,Ft[pt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Ft[pt].width,Ft[pt].height,0,Zt,Pt,Ft[pt].data);for(let It=0;It<ot.length;It++){const ie=ot[It].image[pt].image;ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,ie.width,ie.height,Zt,Pt,ie.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,ue,ie.width,ie.height,0,Zt,Pt,ie.data)}}else{ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Zt,Pt,Ft[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Zt,Pt,Ft[pt]);for(let It=0;It<ot.length;It++){const Nt=ot[It];ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,Zt,Pt,Nt.image[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,ue,Zt,Pt,Nt.image[pt])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ut.__version=St.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function xt(O,A,et,_t,St,ut){const Bt=c.convert(et.format,et.colorSpace),Rt=c.convert(et.type),wt=L(et.internalFormat,Bt,Rt,et.colorSpace),ye=s.get(A),Tt=s.get(et);if(Tt.__renderTarget=A,!ye.__hasExternalTextures){const Ft=Math.max(1,A.width>>ut),jt=Math.max(1,A.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?e.texImage3D(St,ut,wt,Ft,jt,A.depth,0,Bt,Rt,null):e.texImage2D(St,ut,wt,Ft,jt,0,Bt,Rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,O),ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,St,Tt.__webglTexture,0,xe(A)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,St,Tt.__webglTexture,ut),e.bindFramebuffer(o.FRAMEBUFFER,null)}function At(O,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const _t=A.depthTexture,St=_t&&_t.isDepthTexture?_t.type:null,ut=w(A.stencilBuffer,St),Bt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=xe(A);ne(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ut,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Bt,o.RENDERBUFFER,O)}else{const _t=A.textures;for(let St=0;St<_t.length;St++){const ut=_t[St],Bt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),wt=L(ut.internalFormat,Bt,Rt,ut.colorSpace),ye=xe(A);et&&ne(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,wt,A.width,A.height):ne(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,wt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,wt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(A.depthTexture);_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ft(A.depthTexture,0);const St=_t.__webglTexture,ut=xe(A);if(A.depthTexture.format===ml)ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(A.depthTexture.format===gl)ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function le(O){const A=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const _t=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const St=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",St)};_t.addEventListener("dispose",St),A.__depthDisposeCallback=St}A.__boundDepthTexture=_t}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ot(A.__webglFramebuffer,O)}else if(et){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=o.createRenderbuffer(),At(A.__webglDepthbuffer[_t],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),At(A.__webglDepthbuffer,O,!1);else{const _t=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,St)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(O,A,et){const _t=s.get(O);A!==void 0&&xt(_t.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&le(O)}function We(O){const A=O.texture,et=s.get(O),_t=s.get(A);O.addEventListener("dispose",B);const St=O.textures,ut=O.isWebGLCubeRenderTarget===!0,Bt=St.length>1;if(Bt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=A.version,u.memory.textures++),ut){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)et.__webglFramebuffer[Rt][wt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Bt)for(let Rt=0,wt=St.length;Rt<wt;Rt++){const ye=s.get(St[Rt]);ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&ne(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const wt=St[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const ye=c.convert(wt.format,wt.colorSpace),Tt=c.convert(wt.type),Ft=L(wt.internalFormat,ye,Tt,wt.colorSpace,O.isXRRenderTarget===!0),jt=xe(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Ft,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){e.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),vt(o.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)xt(et.__webglFramebuffer[Rt][wt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,wt);else xt(et.__webglFramebuffer[Rt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(A)&&x(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let Rt=0,wt=St.length;Rt<wt;Rt++){const ye=St[Rt],Tt=s.get(ye);e.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),vt(o.TEXTURE_2D,ye),xt(et.__webglFramebuffer,O,ye,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),S(ye)&&x(o.TEXTURE_2D)}e.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Rt,_t.__webglTexture),vt(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)xt(et.__webglFramebuffer[wt],O,A,o.COLOR_ATTACHMENT0,Rt,wt);else xt(et.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,Rt,0);S(A)&&x(Rt),e.unbindTexture()}O.depthBuffer&&le(O)}function Ge(O){const A=O.textures;for(let et=0,_t=A.length;et<_t;et++){const St=A[et];if(S(St)){const ut=D(O),Bt=s.get(St).__webglTexture;e.bindTexture(ut,Bt),x(ut),e.unbindTexture()}}}const de=[],F=[];function Xn(O){if(O.samples>0){if(ne(O)===!1){const A=O.textures,et=O.width,_t=O.height;let St=o.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=s.get(O),Rt=A.length>1;if(Rt)for(let wt=0;wt<A.length;wt++)e.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let wt=0;wt<A.length;wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[wt]);const ye=s.get(A[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,et,_t,0,0,et,_t,St,o.NEAREST),d===!0&&(de.length=0,F.length=0,de.push(o.COLOR_ATTACHMENT0+wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(de.push(ut),F.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let wt=0;wt<A.length;wt++){e.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[wt]);const ye=s.get(A[wt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,ye,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function xe(O){return Math.min(r.maxSamples,O.samples)}function ne(O){const A=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(O){const A=u.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Pe(O,A){const et=O.colorSpace,_t=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==zn&&et!==ra&&(Ee.getTransfer(et)===He?(_t!==Gn||St!==bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Vt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function $R(o,t){function e(s,r=ra){let c;const u=Ee.getTransfer(r);if(s===bs)return o.UNSIGNED_BYTE;if(s===gp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return o.UNSIGNED_SHORT_5_5_5_1;if(s===tx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===J0)return o.BYTE;if(s===$0)return o.SHORT;if(s===dl)return o.UNSIGNED_SHORT;if(s===mp)return o.INT;if(s===ka)return o.UNSIGNED_INT;if(s===Jn)return o.FLOAT;if(s===Ml)return o.HALF_FLOAT;if(s===ex)return o.ALPHA;if(s===nx)return o.RGB;if(s===Gn)return o.RGBA;if(s===ix)return o.LUMINANCE;if(s===sx)return o.LUMINANCE_ALPHA;if(s===ml)return o.DEPTH_COMPONENT;if(s===gl)return o.DEPTH_STENCIL;if(s===vp)return o.RED;if(s===xp)return o.RED_INTEGER;if(s===ax)return o.RG;if(s===yp)return o.RG_INTEGER;if(s===Sp)return o.RGBA_INTEGER;if(s===uu||s===hu||s===fu||s===du)if(u===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ud||s===Nd||s===Od||s===Pd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Id||s===Bd||s===zd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Id||s===Bd)return u===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===zd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Hd||s===Vd||s===Gd||s===kd||s===Xd||s===Wd||s===Yd||s===jd||s===qd||s===Kd||s===Zd||s===Qd||s===Jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return u===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===$d||s===tp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===pu)return u===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rx||s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===pu)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:e}}const tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,s){if(this.texture===null){const r=new An,c=t.properties.get(r);c.__webglTexture=e.texture,(e.depthNear!==s.depthNear||e.depthFar!==s.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,s=new ki({vertexShader:tw,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new Zr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends Xa{constructor(t,e){super();const s=this;let r=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,y=null,E=null;const b=new nw,S=e.getContextAttributes();let x=null,D=null;const L=[],w=[],z=new te;let H=null;const B=new Qn;B.viewport=new Ce;const W=new Qn;W.viewport=new Ce;const U=[B,W],C=new db;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=L[J];return dt===void 0&&(dt=new ed,L[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=L[J];return dt===void 0&&(dt=new ed,L[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=L[J];return dt===void 0&&(dt=new ed,L[J]=dt),dt.getHandSpace()};function rt(J){const dt=w.indexOf(J.inputSource);if(dt===-1)return;const xt=L[dt];xt!==void 0&&(xt.update(J.inputSource,J.frame,p||u),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",gt),r.removeEventListener("inputsourceschange",ft);for(let J=0;J<L.length;J++){const dt=w[J];dt!==null&&(w[J]=null,L[J].disconnect(dt))}G=null,lt=null,b.reset(),t.setRenderTarget(x),y=null,v=null,_=null,r=null,D=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",gt),r.addEventListener("inputsourceschange",ft),S.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,At=null,Ot=null;S.depth&&(Ot=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?gl:ml,At=S.stencil?pl:ka);const le={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:c};_=new XRWebGLBinding(r,e),v=_.createProjectionLayer(le),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new fa(v.textureWidth,v.textureHeight,{format:Gn,type:bs,depthTexture:new Ex(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new fa(y.framebufferWidth,y.framebufferHeight,{format:Gn,type:bs,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),yt.setContext(r),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ft(J){for(let dt=0;dt<J.removed.length;dt++){const xt=J.removed[dt],At=w.indexOf(xt);At>=0&&(w[At]=null,L[At].disconnect(xt))}for(let dt=0;dt<J.added.length;dt++){const xt=J.added[dt];let At=w.indexOf(xt);if(At===-1){for(let le=0;le<L.length;le++)if(le>=w.length){w.push(xt),At=le;break}else if(w[le]===null){w[le]=xt,At=le;break}if(At===-1)break}const Ot=L[At];Ot&&Ot.connect(xt)}}const I=new X,Z=new X;function q(J,dt,xt){I.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const At=I.distanceTo(Z),Ot=dt.projectionMatrix.elements,le=xt.projectionMatrix.elements,Kt=Ot[14]/(Ot[10]-1),We=Ot[14]/(Ot[10]+1),Ge=(Ot[9]+1)/Ot[5],de=(Ot[9]-1)/Ot[5],F=(Ot[8]-1)/Ot[0],Xn=(le[8]+1)/le[0],xe=Kt*F,ne=Kt*Xn,Xt=At/(-F+Xn),Pe=Xt*-F;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pe),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Vt=Kt+Xt,O=We+Xt,A=xe-Pe,et=ne+(At-Pe),_t=Ge*We/O*Vt,St=de*We/O*Vt;J.projectionMatrix.makePerspective(A,et,_t,St,Vt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let dt=J.near,xt=J.far;b.texture!==null&&(b.depthNear>0&&(dt=b.depthNear),b.depthFar>0&&(xt=b.depthFar)),C.near=W.near=B.near=dt,C.far=W.far=B.far=xt,(G!==C.near||lt!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),B.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=B.layers.mask|W.layers.mask;const At=J.parent,Ot=C.cameras;Mt(C,At);for(let le=0;le<Ot.length;le++)Mt(Ot[le],At);Ot.length===2?q(C,B,W):C.projectionMatrix.copy(B.projectionMatrix),N(J,C,At)};function N(J,dt,xt){xt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let tt=null;function vt(J,dt){if(g=dt.getViewerPose(p||u),E=dt,g!==null){const xt=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let At=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<xt.length;Kt++){const We=xt[Kt];let Ge=null;if(y!==null)Ge=y.getViewport(We);else{const F=_.getViewSubImage(v,We);Ge=F.viewport,Kt===0&&(t.setRenderTargetTextures(D,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(D))}let de=U[Kt];de===void 0&&(de=new Qn,de.layers.enable(Kt),de.viewport=new Ce,U[Kt]=de),de.matrix.fromArray(We.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(We.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Kt===0&&(C.matrix.copy(de.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(de)}const Ot=r.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Kt=_.getDepthInformation(xt[0]);Kt&&Kt.isValid&&Kt.texture&&b.init(t,Kt,r.renderState)}}for(let xt=0;xt<L.length;xt++){const At=w[xt],Ot=L[xt];At!==null&&Ot!==void 0&&Ot.update(At,dt,p||u)}tt&&tt(J,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const yt=new Rx;yt.setAnimationLoop(vt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const Ba=new Gi,sw=new ae;function aw(o,t){function e(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,gx(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,D,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?d(S,x,D,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,e(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===$n&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,e(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===$n&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,e(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,e(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=t.get(x),L=D.envMap,w=D.envMapRotation;L&&(S.envMap.value=L,Ba.copy(w),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),S.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(Ba)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=L*.5,x.map&&(S.map.value=x.map,e(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,e(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,e(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const D=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function rw(o,t,e,s){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const w=L.program;s.uniformBlockBinding(D,w)}function p(D,L){let w=r[D.id];w===void 0&&(E(D),w=g(D),r[D.id]=w,D.addEventListener("dispose",S));const z=L.program;s.updateUBOMapping(D,z);const H=t.render.frame;c[D.id]!==H&&(v(D),c[D.id]=H)}function g(D){const L=_();D.__bindingPointIndex=L;const w=o.createBuffer(),z=D.__size,H=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,z,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function _(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=r[D.id],w=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,B=w.length;H<B;H++){const W=Array.isArray(w[H])?w[H]:[w[H]];for(let U=0,C=W.length;U<C;U++){const G=W[U];if(y(G,H,U,z)===!0){const lt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<rt.length;ft++){const I=rt[ft],Z=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,L,w,z){const H=D.value,B=L+"_"+w;if(z[B]===void 0)return typeof H=="number"||typeof H=="boolean"?z[B]=H:z[B]=H.clone(),!0;{const W=z[B];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return z[B]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function E(D){const L=D.uniforms;let w=0;const z=16;for(let B=0,W=L.length;B<W;B++){const U=Array.isArray(L[B])?L[B]:[L[B]];for(let C=0,G=U.length;C<G;C++){const lt=U[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ft=rt.length;gt<ft;gt++){const I=rt[gt],Z=b(I),q=w%z,Mt=q%Z.boundary,N=q+Mt;w+=Mt,N!==0&&z-N<Z.storage&&(w+=z-N),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const H=w%z;return H>0&&(w+=z-H),D.__size=w,D.__cache={},this}function b(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete c[L.id]}function x(){for(const D in r)o.deleteBuffer(r[D]);u=[],r={},c={}}return{bind:d,update:p,dispose:x}}class ow{constructor(t={}){const{canvas:e=oE(),context:s=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=u;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const D=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let z=!1;this._outputColorSpace=hn;let H=0,B=0,W=null,U=-1,C=null;const G=new Ce,lt=new Ce;let rt=null;const gt=new se(0);let ft=0,I=e.width,Z=e.height,q=1,Mt=null,N=null;const tt=new Ce(0,0,I,Z),vt=new Ce(0,0,I,Z);let yt=!1;const J=new Rp;let dt=!1,xt=!1;const At=new ae,Ot=new ae,le=new X,Kt=new Ce,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function de(){return W===null?q:1}let F=s;function Xn(R,j){return e.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bu}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),F===null){const j="webgl2";if(F=Xn(j,R),F===null)throw Xn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,ne,Xt,Pe,Vt,O,A,et,_t,St,ut,Bt,Rt,wt,ye,Tt,Ft,jt,Zt,Pt,ue,ee,Ie,k;function Ut(){xe=new _1(F),xe.init(),ee=new $R(F,xe),ne=new u1(F,xe,t,ee),Xt=new QR(F,xe),ne.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Pe=new y1(F),Vt=new zR,O=new JR(F,xe,Xt,Vt,ne,ee,Pe),A=new f1(w),et=new g1(w),_t=new Ab(F),Ie=new l1(F,_t),St=new v1(F,_t,Pe,Ie),ut=new M1(F,St,_t,Pe),Zt=new S1(F,ne,O),Tt=new h1(Vt),Bt=new BR(w,A,et,xe,ne,Ie,Tt),Rt=new aw(w,Vt),wt=new HR,ye=new YR(xe),jt=new o1(w,A,et,Xt,ut,y,d),Ft=new KR(w,ut,ne),k=new rw(F,Pe,ne,Xt),Pt=new c1(F,xe,Pe),ue=new x1(F,xe,Pe),Pe.programs=Bt.programs,w.capabilities=ne,w.extensions=xe,w.properties=Vt,w.renderLists=wt,w.shadowMap=Ft,w.state=Xt,w.info=Pe}Ut();const ot=new iw(w,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,j,st=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=j,e.width=Math.floor(R*q),e.height=Math.floor(j*q),st===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*q,Z*q).floor()},this.setDrawingBufferSize=function(R,j,st){I=R,Z=j,q=st,e.width=Math.floor(R*st),e.height=Math.floor(j*st),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,j,st,at){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,j,st,at),Xt.viewport(G.copy(tt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,j,st,at){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,j,st,at),Xt.scissor(lt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Xt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,st=!0){let at=0;if(R){let K=!1;if(W!==null){const Et=W.texture.format;K=Et===Sp||Et===yp||Et===xp}if(K){const Et=W.texture.type,Ct=Et===bs||Et===ka||Et===dl||Et===pl||Et===gp||Et===_p,Dt=jt.getClearColor(),zt=jt.getClearAlpha(),Jt=Dt.r,Wt=Dt.g,kt=Dt.b;Ct?(E[0]=Jt,E[1]=Wt,E[2]=kt,E[3]=zt,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=Jt,b[1]=Wt,b[2]=kt,b[3]=zt,F.clearBufferiv(F.COLOR,0,b))}else at|=F.COLOR_BUFFER_BIT}j&&(at|=F.DEPTH_BUFFER_BIT),st&&(at|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),wt.dispose(),ye.dispose(),Vt.dispose(),A.dispose(),et.dispose(),ut.dispose(),Ie.dispose(),k.dispose(),Bt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",fn),ot.removeEventListener("sessionend",Rn),Wn.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const R=Pe.autoReset,j=Ft.enabled,st=Ft.autoUpdate,at=Ft.needsUpdate,K=Ft.type;Ut(),Pe.autoReset=R,Ft.enabled=j,Ft.autoUpdate=st,Ft.needsUpdate=at,Ft.type=K}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const j=R.target;j.removeEventListener("dispose",ie),Ye(j)}function Ye(R){rn(R),Vt.remove(R)}function rn(R){const j=Vt.get(R).programs;j!==void 0&&(j.forEach(function(st){Bt.releaseProgram(st)}),R.isShaderMaterial&&Bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,st,at,K,Et){j===null&&(j=We);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,Dt=ma(R,j,st,at,K);Xt.setMaterial(at,Ct);let zt=st.index,Jt=1;if(at.wireframe===!0){if(zt=St.getWireframeAttribute(st),zt===void 0)return;Jt=2}const Wt=st.drawRange,kt=st.attributes.position;let me=Wt.start*Jt,Re=(Wt.start+Wt.count)*Jt;Et!==null&&(me=Math.max(me,Et.start*Jt),Re=Math.min(Re,(Et.start+Et.count)*Jt)),zt!==null?(me=Math.max(me,0),Re=Math.min(Re,zt.count)):kt!=null&&(me=Math.max(me,0),Re=Math.min(Re,kt.count));const Ze=Re-me;if(Ze<0||Ze===1/0)return;Ie.setup(K,at,Dt,st,zt);let Se,Me=Pt;if(zt!==null&&(Se=_t.get(zt),Me=ue,Me.setIndex(Se)),K.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*de()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(K.isLine){let Yt=at.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*de()),K.isLineSegments?Me.setMode(F.LINES):K.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else K.isPoints?Me.setMode(F.POINTS):K.isSprite&&Me.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)mu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,$e=K._multiDrawCounts,Te=K._multiDrawCount,Un=zt?_t.get(zt).bytesPerElement:1,Cs=Vt.get(at).currentProgram.getUniforms();for(let je=0;je<Te;je++)Cs.setValue(F,"_gl_DrawID",je),Me.render(Yt[je]/Un,$e[je])}else if(K.isInstancedMesh)Me.renderInstances(me,Ze,K.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,$e=Math.min(st.instanceCount,Yt);Me.renderInstances(me,Ze,$e)}else Me.render(me,Ze)};function Ae(R,j,st){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,Rs(R,j,st),R.side=Es,R.needsUpdate=!0,Rs(R,j,st),R.side=Ri):Rs(R,j,st)}this.compile=function(R,j,st=null){st===null&&(st=R),x=ye.get(st),x.init(j),L.push(x),st.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const at=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];Ae(Dt,st,K),at.add(Dt)}else Ae(Et,st,K),at.add(Et)}),x=L.pop(),at},this.compileAsync=function(R,j,st=null){const at=this.compile(R,j,st);return new Promise(K=>{function Et(){if(at.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&at.delete(Ct)}),at.size===0){K(R);return}setTimeout(Et,10)}xe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ti=null;function yn(R){ti&&ti(R)}function fn(){Wn.stop()}function Rn(){Wn.start()}const Wn=new Rx;Wn.setAnimationLoop(yn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(R){ti=R,ot.setAnimationLoop(R),R===null?Wn.stop():Wn.start()},ot.addEventListener("sessionstart",fn),ot.addEventListener("sessionend",Rn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,j,W),x=ye.get(R,L.length),x.init(j),L.push(x),Ot.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Ot),xt=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,xt),S=wt.get(R,D.length),S.init(),D.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&da(Et,j,-1/0,w.sortObjects)}da(R,j,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,N),Ge=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ge&&jt.addToRenderList(S,R),this.info.render.frame++,dt===!0&&Tt.beginShadows();const st=x.state.shadowsArray;Ft.render(st,R,j),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,K=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Et=j.cameras;if(K.length>0)for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const zt=Et[Ct];Al(at,K,R,zt)}Ge&&jt.render(R);for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const zt=Et[Ct];Tl(S,R,zt,zt.viewport)}}else K.length>0&&Al(at,K,R,j),Ge&&jt.render(R),Tl(S,R,j);W!==null&&B===0&&(O.updateMultisampleRenderTarget(W),O.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,j),Ie.resetDefaultState(),U=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],dt===!0&&Tt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function da(R,j,st,at){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){at&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ot);const Ct=ut.update(R),Dt=R.material;Dt.visible&&S.push(R,Ct,Dt,st,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ct=ut.update(R),Dt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ot)),Array.isArray(Dt)){const zt=Ct.groups;for(let Jt=0,Wt=zt.length;Jt<Wt;Jt++){const kt=zt[Jt],me=Dt[kt.materialIndex];me&&me.visible&&S.push(R,Ct,me,st,Kt.z,kt)}}else Dt.visible&&S.push(R,Ct,Dt,st,Kt.z,null)}}const Et=R.children;for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++)da(Et[Ct],j,st,at)}function Tl(R,j,st,at){const K=R.opaque,Et=R.transmissive,Ct=R.transparent;x.setupLightsView(st),dt===!0&&Tt.setGlobalState(w.clippingPlanes,st),at&&Xt.viewport(G.copy(at)),K.length>0&&pa(K,j,st),Et.length>0&&pa(Et,j,st),Ct.length>0&&pa(Ct,j,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Al(R,j,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[at.id]===void 0&&(x.state.transmissionRenderTarget[at.id]=new fa(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Ml:bs,minFilter:xs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Et=x.state.transmissionRenderTarget[at.id],Ct=at.viewport||G;Et.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const Dt=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(gt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&jt.render(st);const zt=w.toneMapping;w.toneMapping=ha;const Jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),x.setupLightsView(at),dt===!0&&Tt.setGlobalState(w.clippingPlanes,at),pa(R,st,at),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,me=j.length;kt<me;kt++){const Re=j[kt],Ze=Re.object,Se=Re.geometry,Me=Re.material,Yt=Re.group;if(Me.side===Ri&&Ze.layers.test(at.layers)){const $e=Me.side;Me.side=$n,Me.needsUpdate=!0,As(Ze,st,at,Se,Me,Yt),Me.side=$e,Me.needsUpdate=!0,Wt=!0}}Wt===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}w.setRenderTarget(Dt),w.setClearColor(gt,ft),Jt!==void 0&&(at.viewport=Jt),w.toneMapping=zt}function pa(R,j,st){const at=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Et=R.length;K<Et;K++){const Ct=R[K],Dt=Ct.object,zt=Ct.geometry,Jt=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&at!==null&&(Wt=at),Dt.layers.test(st.layers)&&As(Dt,j,st,zt,Wt,Jt)}}function As(R,j,st,at,K,Et){R.onBeforeRender(w,j,st,at,K,Et),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,j,st,at,R,Et),K.transparent===!0&&K.side===Ri&&K.forceSinglePass===!1?(K.side=$n,K.needsUpdate=!0,w.renderBufferDirect(st,j,at,K,R,Et),K.side=Es,K.needsUpdate=!0,w.renderBufferDirect(st,j,at,K,R,Et),K.side=Ri):w.renderBufferDirect(st,j,at,K,R,Et),R.onAfterRender(w,j,st,at,K,Et)}function Rs(R,j,st){j.isScene!==!0&&(j=We);const at=Vt.get(R),K=x.state.lights,Et=x.state.shadowsArray,Ct=K.state.version,Dt=Bt.getParameters(R,K.state,Et,j,st),zt=Bt.getProgramCacheKey(Dt);let Jt=at.programs;at.environment=R.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(R.isMeshStandardMaterial?et:A).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",ie),Jt=new Map,at.programs=Jt);let Wt=Jt.get(zt);if(Wt!==void 0){if(at.currentProgram===Wt&&at.lightsStateVersion===Ct)return ji(R,Dt),Wt}else Dt.uniforms=Bt.getUniforms(R),R.onBeforeCompile(Dt,w),Wt=Bt.acquireProgram(Dt,zt),Jt.set(zt,Wt),at.uniforms=Dt.uniforms;const kt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=Tt.uniform),ji(R,Dt),at.needsLights=on(R),at.lightsStateVersion=Ct,at.needsLights&&(kt.ambientLightColor.value=K.state.ambient,kt.lightProbe.value=K.state.probe,kt.directionalLights.value=K.state.directional,kt.directionalLightShadows.value=K.state.directionalShadow,kt.spotLights.value=K.state.spot,kt.spotLightShadows.value=K.state.spotShadow,kt.rectAreaLights.value=K.state.rectArea,kt.ltc_1.value=K.state.rectAreaLTC1,kt.ltc_2.value=K.state.rectAreaLTC2,kt.pointLights.value=K.state.point,kt.pointLightShadows.value=K.state.pointShadow,kt.hemisphereLights.value=K.state.hemi,kt.directionalShadowMap.value=K.state.directionalShadowMap,kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,kt.spotShadowMap.value=K.state.spotShadowMap,kt.spotLightMatrix.value=K.state.spotLightMatrix,kt.spotLightMap.value=K.state.spotLightMap,kt.pointShadowMap.value=K.state.pointShadowMap,kt.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=Wt,at.uniformsList=null,Wt}function Yi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=gu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ji(R,j){const st=Vt.get(R);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function ma(R,j,st,at,K){j.isScene!==!0&&(j=We),O.resetTextureUnits();const Et=j.fog,Ct=at.isMeshStandardMaterial?j.environment:null,Dt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zn,zt=(at.isMeshStandardMaterial?et:A).get(at.envMap||Ct),Jt=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Wt=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!st.morphAttributes.position,me=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let Ze=ha;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ze=w.toneMapping);const Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Me=Se!==void 0?Se.length:0,Yt=Vt.get(at),$e=x.state.lights;if(dt===!0&&(xt===!0||R!==C)){const Sn=R===C&&at.id===U;Tt.setState(at,R,Sn)}let Te=!1;at.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==$e.state.version||Yt.outputColorSpace!==Dt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==zt||at.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Tt.numPlanes||Yt.numIntersection!==Tt.numIntersection)||Yt.vertexAlphas!==Jt||Yt.vertexTangents!==Wt||Yt.morphTargets!==kt||Yt.morphNormals!==me||Yt.morphColors!==Re||Yt.toneMapping!==Ze||Yt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Yt.__version=at.version);let Un=Yt.currentProgram;Te===!0&&(Un=Rs(at,j,K));let Cs=!1,je=!1,Ki=!1;const ke=Un.getUniforms(),Nn=Yt.uniforms;if(Xt.useProgram(Un.program)&&(Cs=!0,je=!0,Ki=!0),at.id!==U&&(U=at.id,je=!0),Cs||C!==R){Xt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),cE(At),uE(At),ke.setValue(F,"projectionMatrix",At)):ke.setValue(F,"projectionMatrix",R.projectionMatrix),ke.setValue(F,"viewMatrix",R.matrixWorldInverse);const wn=ke.map.cameraPosition;wn!==void 0&&wn.setValue(F,le.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&ke.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ke.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,je=!0,Ki=!0)}if(K.isSkinnedMesh){ke.setOptional(F,K,"bindMatrix"),ke.setOptional(F,K,"bindMatrixInverse");const Sn=K.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ke.setValue(F,"boneTexture",Sn.boneTexture,O))}K.isBatchedMesh&&(ke.setOptional(F,K,"batchingTexture"),ke.setValue(F,"batchingTexture",K._matricesTexture,O),ke.setOptional(F,K,"batchingIdTexture"),ke.setValue(F,"batchingIdTexture",K._indirectTexture,O),ke.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&ke.setValue(F,"batchingColorTexture",K._colorsTexture,O));const dn=st.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Zt.update(K,st,Un),(je||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,ke.setValue(F,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Nn.envMap.value=zt,Nn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Nn.envMapIntensity.value=j.environmentIntensity),je&&(ke.setValue(F,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&ws(Nn,Ki),Et&&at.fog===!0&&Rt.refreshFogUniforms(Nn,Et),Rt.refreshMaterialUniforms(Nn,at,q,Z,x.state.transmissionRenderTarget[R.id]),gu.upload(F,Yi(Yt),Nn,O)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(gu.upload(F,Yi(Yt),Nn,O),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ke.setValue(F,"center",K.center),ke.setValue(F,"modelViewMatrix",K.modelViewMatrix),ke.setValue(F,"normalMatrix",K.normalMatrix),ke.setValue(F,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Sn=at.uniformsGroups;for(let wn=0,Ui=Sn.length;wn<Ui;wn++){const Zi=Sn[wn];k.update(Zi,Un),k.bind(Zi,Un)}}return Un}function ws(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,st){const at=Vt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=j,Vt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:st,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const st=Vt.get(R);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const Rl=F.createFramebuffer();this.setRenderTarget=function(R,j=0,st=0){W=R,H=j,B=st;let at=!0,K=null,Et=!1,Ct=!1;if(R){const zt=Vt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),at=!1;else if(zt.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(zt.__hasExternalTextures)O.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(zt.__boundDepthTexture!==kt){if(kt!==null&&Vt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ct=!0);const Wt=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?K=Wt[j][st]:K=Wt[j],Et=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?K=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?K=Wt[st]:K=Wt,G.copy(R.viewport),lt.copy(R.scissor),rt=R.scissorTest}else G.copy(tt).multiplyScalar(q).floor(),lt.copy(vt).multiplyScalar(q).floor(),rt=yt;if(st!==0&&(K=Rl),Xt.bindFramebuffer(F.FRAMEBUFFER,K)&&at&&Xt.drawBuffers(R,K),Xt.viewport(G),Xt.scissor(lt),Xt.setScissorTest(rt),Et){const zt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,st)}else if(Ct){const zt=Vt.get(R.texture),Jt=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,st,Jt)}else if(R!==null&&st!==0){const zt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(R,j,st,at,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Xt.bindFramebuffer(F.FRAMEBUFFER,Dt);try{const zt=R.texture,Jt=zt.format,Wt=zt.type;if(!ne.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-at&&st>=0&&st<=R.height-K&&F.readPixels(j,st,at,K,ee.convert(Jt),ee.convert(Wt),Et)}finally{const zt=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,j,st,at,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(j>=0&&j<=R.width-at&&st>=0&&st<=R.height-K){Xt.bindFramebuffer(F.FRAMEBUFFER,Dt);const zt=R.texture,Jt=zt.format,Wt=zt.type;if(!ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(j,st,at,K,ee.convert(Jt),ee.convert(Wt),0);const me=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,me);const Re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lE(F,Re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(kt),F.deleteSync(Re),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,st=0){const at=Math.pow(2,-st),K=Math.floor(R.image.width*at),Et=Math.floor(R.image.height*at),Ct=j!==null?j.x:0,Dt=j!==null?j.y:0;O.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Ct,Dt,K,Et),Xt.unbindTexture()};const wl=F.createFramebuffer(),qi=F.createFramebuffer();this.copyTextureToTexture=function(R,j,st=null,at=null,K=0,Et=null){Et===null&&(K!==0?(mu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Ct,Dt,zt,Jt,Wt,kt,me,Re,Ze;const Se=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(st!==null)Ct=st.max.x-st.min.x,Dt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,Jt=st.min.x,Wt=st.min.y,kt=st.isBox3?st.min.z:0;else{const dn=Math.pow(2,-K);Ct=Math.floor(Se.width*dn),Dt=Math.floor(Se.height*dn),R.isDataArrayTexture?zt=Se.depth:R.isData3DTexture?zt=Math.floor(Se.depth*dn):zt=1,Jt=0,Wt=0,kt=0}at!==null?(me=at.x,Re=at.y,Ze=at.z):(me=0,Re=0,Ze=0);const Me=ee.convert(j.format),Yt=ee.convert(j.type);let $e;j.isData3DTexture?(O.setTexture3D(j,0),$e=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),$e=F.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),$e=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),Un=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Cs=F.getParameter(F.UNPACK_SKIP_PIXELS),je=F.getParameter(F.UNPACK_SKIP_ROWS),Ki=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const ke=R.isDataArrayTexture||R.isData3DTexture,Nn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const dn=Vt.get(R),Sn=Vt.get(j),wn=Vt.get(dn.__renderTarget),Ui=Vt.get(Sn.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Zi=0;Zi<zt;Zi++)ke&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,K,kt+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,Et,Ze+Zi)),F.blitFramebuffer(Jt,Wt,Ct,Dt,me,Re,Ct,Dt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Vt.has(R)){const dn=Vt.get(R),Sn=Vt.get(j);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,wl),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qi);for(let wn=0;wn<zt;wn++)ke?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,K,kt+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,K),Nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Sn.__webglTexture,Et,Ze+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Sn.__webglTexture,Et),K!==0?F.blitFramebuffer(Jt,Wt,Ct,Dt,me,Re,Ct,Dt,F.COLOR_BUFFER_BIT,F.NEAREST):Nn?F.copyTexSubImage3D($e,Et,me,Re,Ze+wn,Jt,Wt,Ct,Dt):F.copyTexSubImage2D($e,Et,me,Re,Jt,Wt,Ct,Dt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D($e,Et,me,Re,Ze,Ct,Dt,zt,Me,Yt,Se.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D($e,Et,me,Re,Ze,Ct,Dt,zt,Me,Se.data):F.texSubImage3D($e,Et,me,Re,Ze,Ct,Dt,zt,Me,Yt,Se):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,me,Re,Ct,Dt,Me,Yt,Se.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,me,Re,Se.width,Se.height,Me,Se.data):F.texSubImage2D(F.TEXTURE_2D,Et,me,Re,Ct,Dt,Me,Yt,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Un),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Cs),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ki),Et===0&&j.generateMipmaps&&F.generateMipmap($e),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,st=null,at=null,K=0){return mu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,st,at,K)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){H=0,B=0,W=null,Xt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}const H0={type:"change"},Pp={type:"start"},Ux={type:"end"},lu=new to,V0=new aa,lw=Math.cos(70*ux.DEG2RAD),gn=new X,Zn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pd=1e-6;class cw extends bb{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Vi,this._lastTargetPosition=new X,this._quat=new Vi().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new p0,this._sphericalDelta=new p0,this._scale=1,this._panOffset=new X,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new X,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hw.bind(this),this._onPointerDown=uw.bind(this),this._onPointerUp=fw.bind(this),this._onContextMenu=xw.bind(this),this._onMouseWheel=mw.bind(this),this._onKeyDown=gw.bind(this),this._onTouchStart=_w.bind(this),this._onTouchMove=vw.bind(this),this._onMouseDown=dw.bind(this),this._onMouseMove=pw.bind(this),this._interceptControlDown=yw.bind(this),this._interceptControlUp=Sw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(H0),this.update(),this.state=Ve.NONE}update(t=null){const e=this.object.position;gn.copy(e).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(s)&&isFinite(r)&&(s<-Math.PI?s+=Zn:s>Math.PI&&(s-=Zn),r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),s<=r?this._spherical.theta=Math.max(s,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+r)/2?Math.max(s,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),e.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=gn.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(lu.origin.copy(this.object.position),lu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lu.direction))<lw?this.object.lookAt(this.target):(V0.setFromNormalAndCoplanarPoint(this.object.up,this.target),lu.intersectPlane(V0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pd||this._lastTargetPosition.distanceToSquared(this.target)>pd?(this.dispatchEvent(H0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){gn.setFromMatrixColumn(e,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,e){this.screenSpacePanning===!0?gn.setFromMatrixColumn(e,1):(gn.setFromMatrixColumn(e,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,e){const s=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*e*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),r=t-s.left,c=e-s.top,u=s.width,h=s.height;this._mouse.x=r/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(s,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(s,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,c=Math.sqrt(s*s+r*r);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),r=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(r,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(s,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,c=Math.sqrt(s*s+r*r);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function uw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function hw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function fw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ux),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dw(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ve.DOLLY;break;case Hr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}break;case Hr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Pp)}function pw(o){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function mw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(o.preventDefault(),this.dispatchEvent(Pp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ux))}function gw(o){this.enabled!==!1&&this._handleKeyDown(o)}function _w(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ve.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ve.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Pp)}function vw(o){switch(this._trackPointer(o),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ve.NONE}}function xw(o){this.enabled!==!1&&o.preventDefault()}function yw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G0(o,t){if(t===OM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===sp||t===ox){let e=o.getIndex();if(e===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)u.push(d);o.setIndex(u),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const s=e.count-2,r=[];if(t===sp)for(let u=1;u<=s;u++)r.push(e.getX(0)),r.push(e.getX(u)),r.push(e.getX(u+1));else for(let u=0;u<s;u++)u%2===0?(r.push(e.getX(u)),r.push(e.getX(u+1)),r.push(e.getX(u+2))):(r.push(e.getX(u+2)),r.push(e.getX(u+1)),r.push(e.getX(u)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class Mw extends Wa{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rw(e)}),this.register(function(e){return new ww(e)}),this.register(function(e){return new Bw(e)}),this.register(function(e){return new zw(e)}),this.register(function(e){return new Fw(e)}),this.register(function(e){return new Dw(e)}),this.register(function(e){return new Lw(e)}),this.register(function(e){return new Uw(e)}),this.register(function(e){return new Nw(e)}),this.register(function(e){return new Aw(e)}),this.register(function(e){return new Ow(e)}),this.register(function(e){return new Cw(e)}),this.register(function(e){return new Iw(e)}),this.register(function(e){return new Pw(e)}),this.register(function(e){return new bw(e)}),this.register(function(e){return new Hw(e)}),this.register(function(e){return new Vw(e)})}load(t,e,s,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=fl.extractUrlBase(t);u=fl.resolveURL(p,this.path)}else u=fl.extractUrlBase(t);this.manager.itemStart(t);const h=function(p){r?r(p):console.error(p),c.manager.itemError(t),c.manager.itemEnd(t)},d=new Eu(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(p){try{c.parse(p,u,function(g){e(g),c.manager.itemEnd(t)},h)}catch(g){h(g)}},s,h)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,s,r){let c;const u={},h={},d=new TextDecoder;if(typeof t=="string")c=JSON.parse(t);else if(t instanceof ArrayBuffer)if(d.decode(new Uint8Array(t,0,4))===Nx){try{u[ve.KHR_BINARY_GLTF]=new Gw(t)}catch(_){r&&r(_);return}c=JSON.parse(u[ve.KHR_BINARY_GLTF].content)}else c=JSON.parse(d.decode(t));else c=t;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new eC(c,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](p);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(c.extensionsUsed)for(let g=0;g<c.extensionsUsed.length;++g){const _=c.extensionsUsed[g],v=c.extensionsRequired||[];switch(_){case ve.KHR_MATERIALS_UNLIT:u[_]=new Tw;break;case ve.KHR_DRACO_MESH_COMPRESSION:u[_]=new kw(c,this.dracoLoader);break;case ve.KHR_TEXTURE_TRANSFORM:u[_]=new Xw;break;case ve.KHR_MESH_QUANTIZATION:u[_]=new Ww;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}p.setExtensions(u),p.setPlugins(h),p.parse(s,r)}parseAsync(t,e){const s=this;return new Promise(function(r,c){s.parse(t,e,r,c)})}}function Ew(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bw{constructor(t){this.parser=t,this.name=ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let s=0,r=e.length;s<r;s++){const c=e[s];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(t){const e=this.parser,s="light:"+t;let r=e.cache.get(s);if(r)return r;const c=e.json,d=((c.extensions&&c.extensions[this.name]||{}).lights||[])[t];let p;const g=new se(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],zn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new hb(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new cb(g),p.distance=_;break;case"spot":p=new ob(g),p.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),vs(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=e.createUniqueName(d.name||"light_"+t),r=Promise.resolve(p),e.cache.add(s,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,s=this.parser,c=s.json.nodes[t],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return s._getNodeRef(e.cache,h,d)})}}class Tw{constructor(){this.name=ve.KHR_MATERIALS_UNLIT}getMaterialType(){return la}extendParams(t,e,s){const r=[];t.color=new se(1,1,1),t.opacity=1;const c=e.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;t.color.setRGB(u[0],u[1],u[2],zn),t.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(s.assignTexture(t,"map",c.baseColorTexture,hn))}return Promise.all(r)}}class Aw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(e.emissiveIntensity=c),Promise.resolve()}}class Rw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(e.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(s.assignTexture(e,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(s.assignTexture(e,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(s.assignTexture(e,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new te(h,h)}return Promise.all(c)}}class ww{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_DISPERSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return e.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class Cw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(e.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(s.assignTexture(e,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(e.iridescenceIOR=u.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(s.assignTexture(e,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class Dw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SHEEN}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];e.sheenColor=new se(0,0,0),e.sheenRoughness=0,e.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;e.sheenColor.setRGB(h[0],h[1],h[2],zn)}return u.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(s.assignTexture(e,"sheenColorMap",u.sheenColorTexture,hn)),u.sheenRoughnessTexture!==void 0&&c.push(s.assignTexture(e,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class Lw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(e.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(s.assignTexture(e,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class Uw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_VOLUME}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];e.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(s.assignTexture(e,"thicknessMap",u.thicknessTexture)),e.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return e.attenuationColor=new se().setRGB(h[0],h[1],h[2],zn),Promise.all(c)}}class Nw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IOR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return e.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class Ow{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SPECULAR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];e.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(s.assignTexture(e,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return e.specularColor=new se().setRGB(h[0],h[1],h[2],zn),u.specularColorTexture!==void 0&&c.push(s.assignTexture(e,"specularColorMap",u.specularColorTexture,hn)),Promise.all(c)}}class Pw{constructor(t){this.parser=t,this.name=ve.EXT_MATERIALS_BUMP}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return e.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(s.assignTexture(e,"bumpMap",u.bumpTexture)),Promise.all(c)}}class Iw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(e.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(e.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(s.assignTexture(e,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class Bw{constructor(t){this.parser=t,this.name=ve.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,s=e.json,r=s.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=e.options.ktx2Loader;if(!u){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,c.source,u)}}class zw{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,r=s.json,c=r.textures[t];if(!c.extensions||!c.extensions[e])return null;const u=c.extensions[e],h=r.images[u.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Fw{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,r=s.json,c=r.textures[t];if(!c.extensions||!c.extensions[e])return null;const u=c.extensions[e],h=r.images[u.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Hw{constructor(t){this.name=ve.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,s=e.bufferViews[t];if(s.extensions&&s.extensions[this.name]){const r=s.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(y),g,_,v,r.mode,r.filter),y})})}else return null}}class Vw{constructor(t){this.name=ve.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,s=e.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const r=e.meshes[s.mesh];for(const p of r.primitives)if(p.mode!==xi.TRIANGLES&&p.mode!==xi.TRIANGLE_STRIP&&p.mode!==xi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=s.extensions[this.name].attributes,h=[],d={};for(const p in u)h.push(this.parser.getDependency("accessor",u[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(t)),Promise.all(h).then(p=>{const g=p.pop(),_=g.isGroup?g.children:[g],v=p[0].count,y=[];for(const E of _){const b=new ae,S=new X,x=new Vi,D=new X(1,1,1),L=new HE(E.geometry,E.material,v);for(let w=0;w<v;w++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,w),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,w),d.SCALE&&D.fromBufferAttribute(d.SCALE,w),L.setMatrixAt(w,b.compose(S,x,D));for(const w in d)if(w==="_COLOR_0"){const z=d[w];L.instanceColor=new rp(z.array,z.itemSize,z.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&E.geometry.setAttribute(w,d[w]);Je.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),y.push(L)}return g.isGroup?(g.clear(),g.add(...y),g):y[0]}))}}const Nx="glTF",ol=12,k0={JSON:1313821514,BIN:5130562};class Gw{constructor(t){this.name=ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ol),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Nx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ol,c=new DataView(t,ol);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const d=c.getUint32(u,!0);if(u+=4,d===k0.JSON){const p=new Uint8Array(t,ol+u,h);this.content=s.decode(p)}else if(d===k0.BIN){const p=ol+u;this.body=t.slice(p,p+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kw{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ve.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const s=this.json,r=this.dracoLoader,c=t.extensions[this.name].bufferView,u=t.extensions[this.name].attributes,h={},d={},p={};for(const g in u){const _=up[g]||g.toLowerCase();h[_]=u[g]}for(const g in t.attributes){const _=up[g]||g.toLowerCase();if(u[g]!==void 0){const v=s.accessors[t.attributes[g]],y=kr[v.componentType];p[_]=y.name,d[_]=v.normalized===!0}}return e.getDependency("bufferView",c).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(y){for(const E in y.attributes){const b=y.attributes[E],S=d[E];S!==void 0&&(b.normalized=S)}_(y)},h,p,zn,v)})})}}class Xw{constructor(){this.name=ve.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Ww{constructor(){this.name=ve.KHR_MESH_QUANTIZATION}}class Ox extends bl{constructor(t,e,s,r){super(t,e,s,r)}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,r=this.valueSize,c=t*r*3+r;for(let u=0;u!==r;u++)e[u]=s[c+u];return e}interpolate_(t,e,s,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=r-e,_=(s-e)/g,v=_*_,y=v*_,E=t*p,b=E-p,S=-2*y+3*v,x=y-v,D=1-S,L=x-v+_;for(let w=0;w!==h;w++){const z=u[b+w+h],H=u[b+w+d]*g,B=u[E+w+h],W=u[E+w]*g;c[w]=D*z+L*H+S*B+x*W}return c}}const Yw=new Vi;class jw extends Ox{interpolate_(t,e,s,r){const c=super.interpolate_(t,e,s,r);return Yw.fromArray(c).normalize().toArray(c),c}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},X0={9728:an,9729:ui,9984:Q0,9985:cu,9986:ll,9987:xs},W0={33071:oa,33648:_u,10497:jr},md={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},up={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sa={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qw={CUBICSPLINE:void 0,LINEAR:vl,STEP:_l},gd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Cp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Es})),o.DefaultMaterial}function za(o,t,e){for(const s in e.extensions)o[s]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=e.extensions[s])}function vs(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Zw(o,t,e){let s=!1,r=!1,c=!1;for(let p=0,g=t.length;p<g;p++){const _=t[p];if(_.POSITION!==void 0&&(s=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(c=!0),s&&r&&c)break}if(!s&&!r&&!c)return Promise.resolve(o);const u=[],h=[],d=[];for(let p=0,g=t.length;p<g;p++){const _=t[p];if(s){const v=_.POSITION!==void 0?e.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?e.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(c){const v=_.COLOR_0!==void 0?e.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],_=p[1],v=p[2];return s&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),c&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function Qw(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,s=t.weights.length;e<s;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let s=0,r=e.length;s<r;s++)o.morphTargetDictionary[e[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jw(o){let t;const e=o.extensions&&o.extensions[ve.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+_d(e.attributes):t=o.indices+":"+_d(o.attributes)+":"+o.mode,o.targets!==void 0)for(let s=0,r=o.targets.length;s<r;s++)t+=":"+_d(o.targets[s]);return t}function _d(o){let t="";const e=Object.keys(o).sort();for(let s=0,r=e.length;s<r;s++)t+=e[s]+":"+o[e[s]]+";";return t}function hp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $w(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tC=new ae;class eC{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Ew,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);r=s&&d?parseInt(d[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&r<17||c&&u<98?this.textureLoader=new ab(this.options.manager):this.textureLoader=new fb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const s=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:s,userData:{}};return za(c,h,r),vs(h,r),Promise.all(s._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();t(h)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],s=this.json.meshes||[];for(let r=0,c=e.length;r<c;r++){const u=e[r].joints;for(let h=0,d=u.length;h<d;h++)t[u[h]].isBone=!0}for(let r=0,c=t.length;r<c;r++){const u=t[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(s[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,s){if(t.refs[e]<=1)return s;const r=s.clone(),c=(u,h)=>{const d=this.associations.get(u);d!=null&&this.associations.set(h,d);for(const[p,g]of u.children.entries())c(g,h.children[p])};return c(s,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let s=0;s<e.length;s++){const r=t(e[s]);if(r)return r}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const s=[];for(let r=0;r<e.length;r++){const c=t(e[r]);c&&s.push(c)}return s}getDependency(t,e){const s=t+":"+e;let r=this.cache.get(s);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(e)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(s,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){const s=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(c,u){return s.getDependency(t,u)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],s=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){s.load(fl.resolveURL(e.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(s){const r=e.byteLength||0,c=e.byteOffset||0;return s.slice(c,c+r)})}loadAccessor(t){const e=this,s=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const u=md[r.type],h=kr[r.componentType],d=r.normalized===!0,p=new h(r.count*u);return Promise.resolve(new _n(p,u,d))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],d=md[r.type],p=kr[r.componentType],g=p.BYTES_PER_ELEMENT,_=g*d,v=r.byteOffset||0,y=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let b,S;if(y&&y!==_){const x=Math.floor(v/y),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let L=e.cache.get(D);L||(b=new p(h,x*y,r.count*y/g),L=new PE(b,y/g),e.cache.add(D,L)),S=new Tp(L,d,v%y/g,E)}else h===null?b=new p(r.count*d):b=new p(h,v,r.count*d),S=new _n(b,d,E);if(r.sparse!==void 0){const x=md.SCALAR,D=kr[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,z=new D(u[1],L,r.sparse.count*x),H=new p(u[2],w,r.sparse.count*d);h!==null&&(S=new _n(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,W=z.length;B<W;B++){const U=z[B];if(S.setX(U,H[B*d]),d>=2&&S.setY(U,H[B*d+1]),d>=3&&S.setZ(U,H[B*d+2]),d>=4&&S.setW(U,H[B*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(t){const e=this.json,s=this.options,c=e.textures[t].source,u=e.images[c];let h=this.textureLoader;if(u.uri){const d=s.manager.getHandler(u.uri);d!==null&&(h=d)}return this.loadTextureImage(t,c,h)}loadTextureImage(t,e,s){const r=this,c=this.json,u=c.textures[t],h=c.images[e],d=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(e,s).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(c.samplers||{})[u.sampler]||{};return g.magFilter=X0[v.magFilter]||ui,g.minFilter=X0[v.minFilter]||xs,g.wrapS=W0[v.wrapS]||jr,g.wrapT=W0[v.wrapT]||jr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==an&&g.minFilter!==ui,r.associations.set(g,{textures:t}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(t,e){const s=this,r=this.json,c=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(_=>_.clone());const u=r.images[t],h=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=s.getDependency("bufferView",u.bufferView).then(function(_){p=!0;const v=new Blob([_],{type:u.mimeType});return d=h.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(v,y){let E=v;e.isImageBitmapLoader===!0&&(E=function(b){const S=new An(b);S.needsUpdate=!0,v(S)}),e.load(fl.resolveURL(_,c.path),E,void 0,y)})}).then(function(_){return p===!0&&h.revokeObjectURL(d),vs(_,u),_.userData.mimeType=u.mimeType||$w(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[t]=g,g}assignTexture(t,e,s,r){const c=this;return this.getDependency("texture",s.index).then(function(u){if(!u)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(u=u.clone(),u.channel=s.texCoord),c.extensions[ve.KHR_TEXTURE_TRANSFORM]){const h=s.extensions!==void 0?s.extensions[ve.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=c.associations.get(u);u=c.extensions[ve.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),t[e]=u,u})}assignFinalMaterial(t){const e=t.geometry;let s=t.material;const r=e.attributes.tangent===void 0,c=e.attributes.color!==void 0,u=e.attributes.normal===void 0;if(t.isPoints){const h="PointsMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new Sx,Fi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,d.sizeAttenuation=!1,this.cache.add(h,d)),s=d}else if(t.isLine){const h="LineBasicMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new yx,Fi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,this.cache.add(h,d)),s=d}if(r||c||u){let h="ClonedMaterial:"+s.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=s.clone(),c&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(s))),s=d}t.material=s}getMaterialType(){return Cp}loadMaterial(t){const e=this,s=this.json,r=this.extensions,c=s.materials[t];let u;const h={},d=c.extensions||{},p=[];if(d[ve.KHR_MATERIALS_UNLIT]){const _=r[ve.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),p.push(_.extendParams(h,c,e))}else{const _=c.pbrMetallicRoughness||{};if(h.color=new se(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],zn),h.opacity=v[3]}_.baseColorTexture!==void 0&&p.push(e.assignTexture(h,"map",_.baseColorTexture,hn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(p.push(e.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),p.push(e.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(t)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(t,h)})))}c.doubleSided===!0&&(h.side=Ri);const g=c.alphaMode||gd.OPAQUE;if(g===gd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===gd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==la&&(p.push(e.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new te(1,1),c.normalTexture.scale!==void 0)){const _=c.normalTexture.scale;h.normalScale.set(_,_)}if(c.occlusionTexture!==void 0&&u!==la&&(p.push(e.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==la){const _=c.emissiveFactor;h.emissive=new se().setRGB(_[0],_[1],_[2],zn)}return c.emissiveTexture!==void 0&&u!==la&&p.push(e.assignTexture(h,"emissiveMap",c.emissiveTexture,hn)),Promise.all(p).then(function(){const _=new u(h);return c.name&&(_.name=c.name),vs(_,c),e.associations.set(_,{materials:t}),c.extensions&&za(r,_,c),_})}createUniqueName(t){const e=Oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,s=this.extensions,r=this.primitiveCache;function c(h){return s[ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,e).then(function(d){return Y0(d,h,e)})}const u=[];for(let h=0,d=t.length;h<d;h++){const p=t[h],g=Jw(p),_=r[g];if(_)u.push(_.promise);else{let v;p.extensions&&p.extensions[ve.KHR_DRACO_MESH_COMPRESSION]?v=c(p):v=Y0(new yi,p,e),r[g]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(t){const e=this,s=this.json,r=this.extensions,c=s.meshes[t],u=c.primitives,h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d].material===void 0?Kw(this.cache):this.getDependency("material",u[d].material);h.push(g)}return h.push(e.loadGeometries(u)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let y=0,E=g.length;y<E;y++){const b=g[y],S=u[y];let x;const D=p[y];if(S.mode===xi.TRIANGLES||S.mode===xi.TRIANGLE_STRIP||S.mode===xi.TRIANGLE_FAN||S.mode===void 0)x=c.isSkinnedMesh===!0?new BE(b,D):new kn(b,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===xi.TRIANGLE_STRIP?x.geometry=G0(x.geometry,ox):S.mode===xi.TRIANGLE_FAN&&(x.geometry=G0(x.geometry,sp));else if(S.mode===xi.LINES)x=new kE(b,D);else if(S.mode===xi.LINE_STRIP)x=new wp(b,D);else if(S.mode===xi.LINE_LOOP)x=new XE(b,D);else if(S.mode===xi.POINTS)x=new Mx(b,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&Qw(x,c),x.name=e.createUniqueName(c.name||"mesh_"+t),vs(x,c),S.extensions&&za(r,x,S),e.assignFinalMaterial(x),_.push(x)}for(let y=0,E=_.length;y<E;y++)e.associations.set(_[y],{meshes:t,primitives:y});if(_.length===1)return c.extensions&&za(r,_[0],c),_[0];const v=new Ga;c.extensions&&za(r,v,c),e.associations.set(v,{meshes:t});for(let y=0,E=_.length;y<E;y++)v.add(_[y]);return v})}loadCamera(t){let e;const s=this.json.cameras[t],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?e=new Qn(ux.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(e=new yl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(e.name=this.createUniqueName(s.name)),vs(e,s),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],s=[];for(let r=0,c=e.joints.length;r<c;r++)s.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",e.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){const c=r.pop(),u=r,h=[],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_){h.push(_);const v=new ae;c!==null&&v.fromArray(c.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[p])}return new Ap(h,d)})}loadAnimation(t){const e=this.json,s=this,r=e.animations[t],c=r.name?r.name:"animation_"+t,u=[],h=[],d=[],p=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const y=r.channels[_],E=r.samplers[y.sampler],b=y.target,S=b.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,D=r.parameters!==void 0?r.parameters[E.output]:E.output;b.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",D)),p.push(E),g.push(b))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(_){const v=_[0],y=_[1],E=_[2],b=_[3],S=_[4],x=[];for(let D=0,L=v.length;D<L;D++){const w=v[D],z=y[D],H=E[D],B=b[D],W=S[D];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const U=s._createAnimationTracks(w,z,H,B,W);if(U)for(let C=0;C<U.length;C++)x.push(U[C])}return new $E(c,void 0,x)})}createNodeMesh(t){const e=this.json,s=this,r=e.nodes[t];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(c){const u=s._getNodeRef(s.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let d=0,p=r.weights.length;d<p;d++)h.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(t){const e=this.json,s=this,r=e.nodes[t],c=s._loadNodeShallow(t),u=[],h=r.children||[];for(let p=0,g=h.length;p<g;p++)u.push(s.getDependency("node",h[p]));const d=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),d]).then(function(p){const g=p[0],_=p[1],v=p[2];v!==null&&g.traverse(function(y){y.isSkinnedMesh&&y.bind(v,tC)});for(let y=0,E=_.length;y<E;y++)g.add(_[y]);return g})}_loadNodeShallow(t){const e=this.json,s=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const c=e.nodes[t],u=c.name?r.createUniqueName(c.name):"",h=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(t)});return d&&h.push(d),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(p){return r._getNodeRef(r.cameraCache,c.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(t)}).forEach(function(p){h.push(p)}),this.nodeCache[t]=Promise.all(h).then(function(p){let g;if(c.isBone===!0?g=new xx:p.length>1?g=new Ga:p.length===1?g=p[0]:g=new Je,g!==p[0])for(let _=0,v=p.length;_<v;_++)g.add(p[_]);if(c.name&&(g.userData.name=c.name,g.name=u),vs(g,c),c.extensions&&za(s,g,c),c.matrix!==void 0){const _=new ae;_.fromArray(c.matrix),g.applyMatrix4(_)}else c.translation!==void 0&&g.position.fromArray(c.translation),c.rotation!==void 0&&g.quaternion.fromArray(c.rotation),c.scale!==void 0&&g.scale.fromArray(c.scale);return r.associations.has(g)||r.associations.set(g,{}),r.associations.get(g).nodes=t,g}),this.nodeCache[t]}loadScene(t){const e=this.extensions,s=this.json.scenes[t],r=this,c=new Ga;s.name&&(c.name=r.createUniqueName(s.name)),vs(c,s),s.extensions&&za(e,c,s);const u=s.nodes||[],h=[];for(let d=0,p=u.length;d<p;d++)h.push(r.getDependency("node",u[d]));return Promise.all(h).then(function(d){for(let g=0,_=d.length;g<_;g++)c.add(d[g]);const p=g=>{const _=new Map;for(const[v,y]of r.associations)(v instanceof Fi||v instanceof An)&&_.set(v,y);return g.traverse(v=>{const y=r.associations.get(v);y!=null&&_.set(v,y)}),_};return r.associations=p(c),c})}_createAnimationTracks(t,e,s,r,c){const u=[],h=t.name?t.name:t.uuid,d=[];sa[c.path]===sa.weights?t.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(h);let p;switch(sa[c.path]){case sa.weights:p=Qr;break;case sa.rotation:p=Jr;break;case sa.translation:case sa.scale:p=$r;break;default:switch(s.itemSize){case 1:p=Qr;break;case 2:case 3:default:p=$r;break}break}const g=r.interpolation!==void 0?qw[r.interpolation]:vl,_=this._getArrayFromAccessor(s);for(let v=0,y=d.length;v<y;v++){const E=new p(d[v]+"."+sa[c.path],e.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const s=hp(e.constructor),r=new Float32Array(e.length);for(let c=0,u=e.length;c<u;c++)r[c]=e[c]*s;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(s){const r=this instanceof Jr?jw:Ox;return new r(this.times,this.values,this.getValueSize()/3,s)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nC(o,t,e){const s=t.attributes,r=new Ts;if(s.POSITION!==void 0){const h=e.json.accessors[s.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(r.set(new X(d[0],d[1],d[2]),new X(p[0],p[1],p[2])),h.normalized){const g=hp(kr[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=t.targets;if(c!==void 0){const h=new X,d=new X;for(let p=0,g=c.length;p<g;p++){const _=c[p];if(_.POSITION!==void 0){const v=e.json.accessors[_.POSITION],y=v.min,E=v.max;if(y!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(E[2]))),v.normalized){const b=hp(kr[v.componentType]);d.multiplyScalar(b)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Xi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function Y0(o,t,e){const s=t.attributes,r=[];function c(u,h){return e.getDependency("accessor",u).then(function(d){o.setAttribute(h,d)})}for(const u in s){const h=up[u]||u.toLowerCase();h in o.attributes||r.push(c(s[u],h))}if(t.indices!==void 0&&!o.index){const u=e.getDependency("accessor",t.indices).then(function(h){o.setIndex(h)});r.push(u)}return Ee.workingColorSpace!==zn&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ee.workingColorSpace}" not supported.`),vs(o,t),nC(o,t,e),Promise.all(r).then(function(){return t.targets!==void 0?Zw(o,t.targets,e):o})}const vd=new WeakMap;class iC extends Wa{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,s,r){const c=new Eu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,u=>{this.parse(u,e,r)},s,r)}parse(t,e,s=()=>{}){this.decodeDracoFile(t,e,null,null,hn,s).catch(s)}decodeDracoFile(t,e,s,r,c=zn,u=()=>{}){const h={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!s,vertexColorSpace:c};return this.decodeGeometry(t,h).then(e).catch(u)}decodeGeometry(t,e){const s=JSON.stringify(e);if(vd.has(t)){const d=vd.get(t);if(d.key===s)return d.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const c=this.workerNextTaskID++,u=t.byteLength,h=this._getWorker(c,u).then(d=>(r=d,new Promise((p,g)=>{r._callbacks[c]={resolve:p,reject:g},r.postMessage({type:"decode",id:c,taskConfig:e,buffer:t},[t])}))).then(d=>this._createGeometry(d.geometry));return h.catch(()=>!0).then(()=>{r&&c&&this._releaseTask(r,c)}),vd.set(t,{key:s,promise:h}),h}_createGeometry(t){const e=new yi;t.index&&e.setIndex(new _n(t.index.array,1));for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s],c=r.name,u=r.array,h=r.itemSize,d=new _n(u,h);c==="color"&&(this._assignVertexColorSpace(d,r.vertexColorSpace),d.normalized=!(u instanceof Float32Array)),e.setAttribute(c,d)}return e}_assignVertexColorSpace(t,e){if(e!==hn)return;const s=new se;for(let r=0,c=t.count;r<c;r++)s.fromBufferAttribute(t,r),Ee.toWorkingColorSpace(s,hn),t.setXYZ(r,s.r,s.g,s.b)}_loadLibrary(t,e){const s=new Eu(this.manager);return s.setPath(this.decoderPath),s.setResponseType(e),s.setWithCredentials(this.withCredentials),new Promise((r,c)=>{s.load(t,r,void 0,c)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(s=>{const r=s[0];t||(this.decoderConfig.wasmBinary=s[1]);const c=sC.toString(),u=["/* draco decoder */",r,"","/* worker */",c.substring(c.indexOf("{")+1,c.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([u]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(c){const u=c.data;switch(u.type){case"decode":r._callbacks[u.id].resolve(u);break;case"error":r._callbacks[u.id].reject(u);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+u.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,c){return r._taskLoad>c._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[t]=e,s._taskLoad+=e,s})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function sC(){let o,t;onmessage=function(u){const h=u.data;switch(h.type){case"init":o=h.decoderConfig,t=new Promise(function(g){o.onModuleLoaded=function(_){g({draco:_})},DracoDecoderModule(o)});break;case"decode":const d=h.buffer,p=h.taskConfig;t.then(g=>{const _=g.draco,v=new _.Decoder;try{const y=e(_,v,new Int8Array(d),p),E=y.attributes.map(b=>b.array.buffer);y.index&&E.push(y.index.array.buffer),self.postMessage({type:"decode",id:h.id,geometry:y},E)}catch(y){console.error(y),self.postMessage({type:"error",id:h.id,error:y.message})}finally{_.destroy(v)}});break}};function e(u,h,d,p){const g=p.attributeIDs,_=p.attributeTypes;let v,y;const E=h.GetEncodedGeometryType(d);if(E===u.TRIANGULAR_MESH)v=new u.Mesh,y=h.DecodeArrayToMesh(d,d.byteLength,v);else if(E===u.POINT_CLOUD)v=new u.PointCloud,y=h.DecodeArrayToPointCloud(d,d.byteLength,v);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!y.ok()||v.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+y.error_msg());const b={index:null,attributes:[]};for(const S in g){const x=self[_[S]];let D,L;if(p.useUniqueIDs)L=g[S],D=h.GetAttributeByUniqueId(v,L);else{if(L=h.GetAttributeId(v,u[g[S]]),L===-1)continue;D=h.GetAttribute(v,L)}const w=r(u,h,v,S,x,D);S==="color"&&(w.vertexColorSpace=p.vertexColorSpace),b.attributes.push(w)}return E===u.TRIANGULAR_MESH&&(b.index=s(u,h,v)),u.destroy(v),b}function s(u,h,d){const g=d.num_faces()*3,_=g*4,v=u._malloc(_);h.GetTrianglesUInt32Array(d,_,v);const y=new Uint32Array(u.HEAPF32.buffer,v,g).slice();return u._free(v),{array:y,itemSize:1}}function r(u,h,d,p,g,_){const v=_.num_components(),E=d.num_points()*v,b=E*g.BYTES_PER_ELEMENT,S=c(u,g),x=u._malloc(b);h.GetAttributeDataArrayForAllPoints(d,_,S,b,x);const D=new g(u.HEAPF32.buffer,x,E).slice();return u._free(x),{name:p,array:D,itemSize:v}}function c(u,h){switch(h){case Float32Array:return u.DT_FLOAT32;case Int8Array:return u.DT_INT8;case Int16Array:return u.DT_INT16;case Int32Array:return u.DT_INT32;case Uint8Array:return u.DT_UINT8;case Uint16Array:return u.DT_UINT16;case Uint32Array:return u.DT_UINT32}}}var aC=`uniform float time;\r
uniform float progress;\r
uniform sampler2D texture1;\r
uniform vec4 resolution;\r
varying vec2 vUv;\r
varying vec4 vColor;\r
float PI = 3.141592653589793238;\r
void main() {\r
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r
    gl_FragColor = vColor;\r
}`,rC=`uniform float time;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r
varying vec4 vColor;\r
uniform sampler2D uPositions;\r
float PI = 3.141592653589793238;\r
void main() {\r
    vUv = uv;\r
    vec4 pos = texture2D(uPositions, vUv);

    float angle = atan(pos.y, pos.x);

    
    vColor = vec4(0.5 + 0.45*sin(angle+time*0.4));\r

    vec4 mvPosition = modelViewMatrix * vec4(pos.xyz, 1.);\r
    gl_PointSize = 1. * (1. / - mvPosition.z);\r
    gl_Position = projectionMatrix * mvPosition;\r
}`,oC=`uniform float time;\r
uniform float progress;\r
uniform sampler2D uPositions;\r
uniform sampler2D uInfo;\r
uniform vec4 resolution;\r
uniform vec2 uMouse;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r
float PI = 3.141592653589793238;

#define PI 3.1415926538

const float EPS = 0.001;\r
vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
float mod289(float x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
vec4 permute(vec4 x) {\r
    return mod289(((x*34.0)+1.0)*x);\r
}\r
float permute(float x) {\r
    return mod289(((x*34.0)+1.0)*x);\r
}\r
vec4 taylorInvSqrt(vec4 r) {\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
float taylorInvSqrt(float r) {\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
vec4 grad4(float j, vec4 ip) {\r
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
    vec4 p, s;\r
    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
    s = vec4(lessThan(p, vec4(0.0)));\r
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\r
    return p;\r
}\r
#define F4 0.309016994374947451

vec4 simplexNoiseDerivatives (vec4 v) {\r
    const vec4  C = vec4( 0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);\r
    vec4 i = floor(v + dot(v, vec4(F4)) );\r
    vec4 x0 = v -   i + dot(i, C.xxxx);\r
    vec4 i0;\r
    vec3 isX = step( x0.yzw, x0.xxx );\r
    vec3 isYZ = step( x0.zww, x0.yyz );\r
    i0.x = isX.x + isX.y + isX.z;\r
    i0.yzw = 1.0 - isX;\r
    i0.y += isYZ.x + isYZ.y;\r
    i0.zw += 1.0 - isYZ.xy;\r
    i0.z += isYZ.z;\r
    i0.w += 1.0 - isYZ.z;\r
    vec4 i3 = clamp( i0, 0.0, 1.0 );\r
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\r
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\r
    vec4 x1 = x0 - i1 + C.xxxx;\r
    vec4 x2 = x0 - i2 + C.yyyy;\r
    vec4 x3 = x0 - i3 + C.zzzz;\r
    vec4 x4 = x0 + C.wwww;\r
    i = mod289(i);\r
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\r
    vec4 j1 = permute( permute( permute( permute (\r
    i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\r
    + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\r
    + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\r
    + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\r
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\r
    vec4 p0 = grad4(j0, ip);\r
    vec4 p1 = grad4(j1.x, ip);\r
    vec4 p2 = grad4(j1.y, ip);\r
    vec4 p3 = grad4(j1.z, ip);\r
    vec4 p4 = grad4(j1.w, ip);\r
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;\r
    p4 *= taylorInvSqrt(dot(p4, p4));\r
    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); 
    \r
    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\r
    vec3 m0 = max(0.5 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0); 
    \r
    vec2 m1 = max(0.5 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);\r
    vec3 temp0 = -6.0 * m0 * m0 * values0;\r
    vec2 temp1 = -6.0 * m1 * m1 * values1;\r
    vec3 mmm0 = m0 * m0 * m0;\r
    vec2 mmm1 = m1 * m1 * m1;\r
    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\r
    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\r
    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\r
    
    \r
    \r
    
    return vec4(dx, dy, dz, 0.0) * 49.0;\r
}\r
vec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\r
    vec4 xNoisePotentialDerivatives = vec4(0.0);\r
    vec4 yNoisePotentialDerivatives = vec4(0.0);\r
    
    \r
    \r
    for (int i = 0; i < 2; ++i) {\r
        float twoPowI = pow(2.0, float(i));\r
        float scale = 0.5 * twoPowI * pow(persistence, float(i));\r
        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\r
        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\r
        
    }\r
    return vec3(\r
    yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1], yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2], yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\r
    );\r
}

    \r

    \r

void main() {\r
    vec4 pos = texture2D(uPositions, vUv);\r
    vec4 info = texture2D(uInfo, vUv);

    vec2 mouse = uMouse;

    float radius = length(pos.xy);\r
    float circularForce = 1. - smoothstep(0.5, 1.4, abs(pos.x - radius));\r
    float angle = atan(pos.y, pos.x) - info.y*0.25*mix(0.5,1.,circularForce);\r
    \r
    float offset = sin(time * 0.3 + info.y * 6.2831);\r
    float baseRadius = info.x;\r
    float animatedRadius = mix(baseRadius, 1.8, 0.7 + 0.2 * offset);

    
    float distortionFactor = smoothstep(10.2, 2.5, baseRadius); 
    float targetRadius = mix(baseRadius, animatedRadius, distortionFactor);

    radius += (targetRadius - radius) * mix(0.2, 0.5, circularForce);\r

    \r
    vec3 targetPos = vec3(cos(angle), sin(angle), 0.0)*radius;

    pos.xy += (targetPos.xy - pos.xy) * 0.1;

    pos.xy += curl(pos.xyz*4.,0.2 , 0.1).xy * 0.006;

    float dist = length(pos.xy - mouse);\r
    vec2 dir = normalize(pos.xy - mouse);\r
    pos.xy += dir * smoothstep(0.2, 0.0, dist);\r

    
    
    

    
    

    \r

    gl_FragColor = vec4(pos.xy, 1.0, 1.0);\r
}`,lC=`uniform float time;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r
uniform vec2 pixels;\r
float PI = 3.141592653589793238;\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Hi{constructor(t,e,s,r,c="div"){this.parent=t,this.object=e,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(c),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Hi.nextNameID=Hi.nextNameID||0,this.$name.id=`lil-gui-name-${++Hi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class cC extends Hi{constructor(t,e,s){super(t,e,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function fp(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const uC={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:fp,toHexString:fp},Sl={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},hC={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,t,e=1){const s=Sl.fromHexString(o);t[0]=(s>>16&255)/255*e,t[1]=(s>>8&255)/255*e,t[2]=(s&255)/255*e},toHexString([o,t,e],s=1){s=255/s;const r=o*s<<16^t*s<<8^e*s<<0;return Sl.toHexString(r)}},fC={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const s=Sl.fromHexString(o);t.r=(s>>16&255)/255*e,t.g=(s>>8&255)/255*e,t.b=(s&255)/255*e},toHexString({r:o,g:t,b:e},s=1){s=255/s;const r=o*s<<16^t*s<<8^e*s<<0;return Sl.toHexString(r)}},dC=[uC,Sl,hC,fC];function pC(o){return dC.find(t=>t.match(o))}class mC extends Hi{constructor(t,e,s,r){super(t,e,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=pC(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const c=fp(this.$text.value);c&&this._setValueFromHexString(c)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xd extends Hi{constructor(t,e,s){super(t,e,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class gC extends Hi{constructor(t,e,s,r,c,u){super(t,e,s,"number"),this._initInput(),this.min(r),this.max(c);const h=u!==void 0;this.step(h?u:this._getImplicitStep(),h),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},s=D=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+D),this.$input.value=this.getValue())},r=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D)*-1))},c=D=>{this._inputFocused&&(D.preventDefault(),s(this._step*this._normalizeMouseWheel(D)))};let u=!1,h,d,p,g,_;const v=5,y=D=>{h=D.clientX,d=p=D.clientY,u=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",b)},E=D=>{if(u){const L=D.clientX-h,w=D.clientY-d;Math.abs(w)>v?(D.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>v&&b()}if(!u){const L=D.clientY-p;_-=L*this._step*this._arrowKeyMultiplier(D),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}p=D.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",b)},S=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",c,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",S),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(x,D,L,w,z)=>(x-D)/(L-D)*(z-w)+w,e=x=>{const D=this.$slider.getBoundingClientRect();let L=t(x,D.left,D.right,this._min,this._max);this._snapClampSetValue(L)},s=x=>{this._setDraggingStyle(!0),e(x.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",c)},r=x=>{e(x.clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",c)};let u=!1,h,d;const p=x=>{x.preventDefault(),this._setDraggingStyle(!0),e(x.touches[0].clientX),u=!1},g=x=>{x.touches.length>1||(this._hasScrollBar?(h=x.touches[0].clientX,d=x.touches[0].clientY,u=!0):p(x),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",v))},_=x=>{if(u){const D=x.touches[0].clientX-h,L=x.touches[0].clientY-d;Math.abs(D)>Math.abs(L)?p(x):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v))}else x.preventDefault(),e(x.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v)},y=this._callOnFinishChange.bind(this),E=400;let b;const S=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();const L=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(y,E)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",S,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),e+-s}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class _C extends Hi{constructor(t,e,s,r){super(t,e,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const s=document.createElement("option");s.textContent=e,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class vC extends Hi{constructor(t,e,s){super(t,e,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var xC=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function yC(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let j0=!1;class Ip{constructor({parent:t,autoPlace:e=t===void 0,container:s,width:r,title:c="Controls",closeFolders:u=!1,injectStyles:h=!0,touchStyles:d=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(c),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!j0&&h&&(yC(xC),j0=!0),s?s.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=u}add(t,e,s,r,c){if(Object(s)===s)return new _C(this,t,e,s);const u=t[e];switch(typeof u){case"number":return new gC(this,t,e,s,r,c);case"boolean":return new cC(this,t,e);case"string":return new vC(this,t,e);case"function":return new xd(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,u)}addColor(t,e,s=1){return new mC(this,t,e,s)}addFolder(t){const e=new Ip({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof xd||s._name in t.controllers&&s.load(t.controllers[s._name])}),e&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof xd)){if(s._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);e.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);e.folders[s._title]=s.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const s=c=>{c.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class Px{constructor(t){if(this.scene=new jv,this.container=t.dom,!this.container){console.error("Sketch: el contenedor DOM es null o no existe.");return}this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new ow({alpha:!0,antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,0),this.raycaster=new Eb,this.pointer=new te,this.container.appendChild(this.renderer.domElement);let e=this.width/this.height,s=5;this.camera=new yl(-5*e/2,s*e/2,s/2,-5/2,.1,100),this.camera.position.set(0,0,4),this.camera.lookAt(0,0,0),this.controls=new cw(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.enablePan=!1,this.controls.enableZoom=!1,this.time=0;const r=`https://unpkg.com/three@0.${bu}.x`;this.dracoLoader=new iC(new Ax).setDecoderPath(`${r}/examples/jsm/libs/draco/gltf/`),this.gltfLoader=new Mw,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.isPlaying=!0,this.setupEvents(),this.setupFBO(),this.addObjects(),this.resize(),this.render(),this.setupResize()}setupEvents(){this.dummy=new kn(new Zr(100,100),new la),document.addEventListener("pointermove",t=>{this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObject(this.dummy);if(e.length>0){let[s,r]=e[0].point;this.fboMaterial.uniforms.uMouse.value=new te(s,r)}})}setUpSettings(){this.settings={progress:0},this.gui=new Ip,this.gui.add(this.settings,"progress",0,1,.01).onChange(t=>{})}setupResize(){window.addEventListener("resize",this.resize.bind(this))}getRenderTarget(){return new fa(this.width,this.height,{minFilter:an,magFilter:an,format:Gn,type:Jn})}setupFBO(){this.size=182,this.fbo=this.getRenderTarget(),this.fbo1=this.getRenderTarget(),this.fboScene=new jv,this.fboCamera=new yl(-1,1,1,-1,-1,1),this.fboCamera.position.set(0,0,.5),this.fboCamera.lookAt(0,0,0);let t=new Zr(2,2);this.data=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4,c=Math.random()*Math.PI*2,u=.5+.5*Math.random();this.data[r+0]=u*Math.cos(c),this.data[r+1]=u*Math.sin(c),this.data[r+2]=1,this.data[r+3]=1}this.fboTexture=new yu(this.data,this.size,this.size,Gn,Jn),this.fboTexture.magFilter=an,this.fboTexture.minFilter=an,this.fboTexture.needsUpdate=!0,this.fboMaterial=new ki({uniforms:{uPositions:{value:this.fboTexture},uInfo:{value:null},uMouse:{value:new te(0,0)},time:{value:0}},vertexShader:lC,fragmentShader:oC}),this.infoarray=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4;this.infoarray[r+0]=.5+Math.random(),this.infoarray[r+1]=.5+Math.random(),this.infoarray[r+2]=1,this.infoarray[r+3]=1}this.info=new yu(this.infoarray,this.size,this.size,Gn,Jn),this.info.magFilter=an,this.info.minFilter=an,this.info.needsUpdate=!0,this.fboMaterial.uniforms.uInfo.value=this.info,this.fboMesh=new kn(t,this.fboMaterial),this.fboScene.add(this.fboMesh),this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(this.fbo1),this.renderer.render(this.fboScene,this.fboCamera)}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height);let t=this.width/this.height,e=5;this.camera.left=-5*t/2,this.camera.right=e*t/2,this.camera.top=e/2,this.camera.bottom=-5/2,this.camera.updateProjectionMatrix()}addObjects(){this.material=new ki({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Ri,uniforms:{time:{value:0},uPositions:{value:null},resolution:{value:new Ce}},transparent:!0,vertexShader:rC,fragmentShader:aC}),this.count=this.size**2;let t=new yi,e=new Float32Array(this.count*3),s=new Float32Array(this.count*2);for(let r=0;r<this.size;r++)for(let c=0;c<this.size;c++){let u=r+c*this.size;e[u*3+0]=Math.random(),e[u*3+1]=Math.random(),e[u*3+2]=0,s[u*2+0]=r/this.size,s[u*2+1]=c/this.size}t.setAttribute("position",new _n(e,3)),t.setAttribute("uv",new _n(s,2)),this.material.uniforms.uPositions.value=this.fboTexture,this.points=new Mx(t,this.material),this.scene.add(this.points)}render(){if(!this.isPlaying)return;this.time+=.05,this.material.uniforms.time.value=this.time,this.fboMaterial.uniforms.time.value=this.time,requestAnimationFrame(this.render.bind(this)),this.fboMaterial.uniforms.uPositions.value=this.fbo1.texture,this.material.uniforms.uPositions.value=this.fbo.texture,this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera);let t=this.fbo;this.fbo=this.fbo1,this.fbo1=t}}new Px({dom:document.getElementById("container")});const SC=()=>{const o=yd.useRef(null);return yd.useEffect(()=>{o.current&&(console.log("Iniciando Sketch..."),new Px({dom:o.current}))},[]),bt.jsxs("section",{id:"hero",className:"relative overflow-hidden padding-x",children:[bt.jsx("div",{className:"absolute top-0 left-0 z-10",children:bt.jsx("div",{ref:o,className:"background-animation",style:{width:"100vw",left:"0"}})}),bt.jsx("div",{className:"hero-layout pt-70 min-h-[100vh]",children:bt.jsx("header",{className:"flex flex-col justify-start md:w-full w-screen md:px-20 px-5",children:bt.jsx("div",{className:"flex flex-col gap-7",children:bt.jsxs("div",{className:"hero-text",children:[bt.jsxs("h1",{children:["Integrando",bt.jsx("span",{className:"slide",children:bt.jsx("span",{className:"wrapper",children:pp.map(t=>bt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[bt.jsx("img",{src:t.imgPath,alt:t.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),bt.jsx("span",{children:t.text})]},t.text))})})]}),bt.jsx("h1",{children:"en cada línea de código"}),bt.jsx("h1",{children:"y cada experiencia creada."})]})})})})]})},MC=()=>bt.jsx("section",{id:"hero",className:"relative overflow-hidden",children:bt.jsx("div",{className:"hero-layout",children:bt.jsx("header",{className:"flex flex-col justify-center md:w-full w-screen md:px-20 px-5",children:bt.jsx("div",{className:"flex flex-col gap-7",children:bt.jsxs("div",{className:"hero-text",children:[bt.jsxs("h1",{children:["Shaping",bt.jsx("span",{className:"slide",children:bt.jsx("span",{className:"wrapper",children:pp.map(o=>bt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[bt.jsx("img",{src:o.imgPath,alt:o.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),bt.jsx("span",{children:o.text})]},o.text))})})]}),bt.jsx("h1",{children:"into Real Projects"}),bt.jsx("h1",{children:"that Deliver Results"})]})})})})}),EC="/Portfolio_DiegoGonzalez/images/Perfil_DiegoIA.webp",bC=()=>bt.jsx("section",{id:"myself",className:"relative overflow-hidden padding-x",children:bt.jsxs("div",{className:"flex items-center justify-center gap-8 h-screen px-6",children:[bt.jsx("img",{src:EC,className:"w-[45%] max-w-[450px] object-cover "}),bt.jsxs("div",{className:"text-center md:text-left w-full md:w-1/2 max-w-5xl",children:[bt.jsx("h2",{className:"text-5xl font-bold mb-4 text-white",children:"Hola, soy Diego González"}),bt.jsx("p",{className:"text-2xl text-white leading-relaxed",children:"Ingeniero Civil Industrial apasionado por el desarrollo web (Full Stack: Java, Python, JavaScript/React) y la ciencia de datos, con formación en finanzas y análisis avanzado. Combino mi creatividad técnica (Three.js, diseño interactivo) y mi enfoque analítico para construir soluciones donde el arte y la funcionalidad se unen. Disciplinado, autodidacta y siempre en busca de nuevos desafíos que mezclen tecnología, datos e impacto real."}),bt.jsx("p",{className:"text-2xl text-white leading-relaxed",children:"¡Hablemos de innovación!"}),bt.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mx-auto mt-10",children:[bt.jsx("a",{href:"https://www.linkedin.com/in/diegogonzalezb/",target:"_blank",rel:"noopener noreferrer",className:"contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors",children:bt.jsx("span",{children:"LinkedIn"})}),bt.jsx("a",{href:"https://github.com/DiegoGonzalezBaeza",target:"_blank",rel:"noopener noreferrer",className:"contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors",children:bt.jsx("span",{children:"GitHub"})}),bt.jsx("a",{href:"/Portfolio_DiegoGonzalez/images/CV_Diego_Gonzalez_B (1).pdf",target:"_blank",rel:"noopener noreferrer",className:"contact-btn group inline-flex items-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors",children:bt.jsx("span",{children:"CV"})})]})]})]})}),TC=()=>bt.jsxs("section",{id:"hero",className:"relative overflow-hidden ",children:[bt.jsx("div",{className:"absolute top-0 left-0 z-10"}),bt.jsx("div",{className:"hero-layout",children:bt.jsx("header",{className:"flex flex-col justify-center md:w-full w-screen md:px-20 px-5",children:bt.jsx("div",{className:"flex flex-col gap-7",children:bt.jsxs("div",{className:"hero-text",children:[bt.jsxs("h1",{children:["Shaping",bt.jsx("span",{className:"slide",children:bt.jsx("span",{className:"wrapper",children:pp.map(o=>bt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[bt.jsx("img",{src:o.imgPath,alt:o.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),bt.jsx("span",{children:o.text})]},o.text))})})]}),bt.jsx("h1",{children:"into Real Projects"}),bt.jsx("h1",{children:"that Deliver Results"})]})})})})]});function AC(){const[o,t]=yd.useState(0);return bt.jsxs(bt.Fragment,{children:[bt.jsx(eM,{}),bt.jsx("section",{id:"#hero",children:bt.jsx(SC,{})}),bt.jsx("section",{id:"myself",children:bt.jsx(bC,{})}),bt.jsx("section",{id:"#contact_2",children:bt.jsx(MC,{})}),bt.jsx("section",{id:"contact",children:bt.jsx(TC,{})}),bt.jsxs("div",{children:[bt.jsx("a",{href:"https://vite.dev",target:"_blank",children:bt.jsx("img",{src:KS,className:"logo",alt:"Vite logo"})}),bt.jsx("a",{href:"https://react.dev",target:"_blank",children:bt.jsx("img",{src:qS,className:"logo react",alt:"React logo"})})]}),bt.jsx("h1",{className:"text-3xl underline",children:"Vite + React"}),bt.jsxs("div",{className:"card",children:[bt.jsxs("button",{onClick:()=>t(o+1),children:["count is ",o]}),bt.jsxs("p",{children:["Edit ",bt.jsx("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),bt.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}jS.createRoot(document.getElementById("root")).render(bt.jsx(AC,{}));
