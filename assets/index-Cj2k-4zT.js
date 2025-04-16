(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();var Nf={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function jS(){if(dv)return tl;dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(s,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var h in r)h!=="key"&&(l[h]=r[h])}else l=r;return r=l.ref,{$$typeof:o,type:s,key:u,ref:r!==void 0?r:null,props:l}}return tl.Fragment=t,tl.jsx=e,tl.jsxs=e,tl}var pv;function qS(){return pv||(pv=1,Nf.exports=jS()),Nf.exports}var Tt=qS(),Of={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function KS(){if(mv)return re;mv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(N,tt,vt){this.props=N,this.context=tt,this.refs=b,this.updater=vt||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(N,tt,vt){this.props=N,this.context=tt,this.refs=b,this.updater=vt||x}var L=D.prototype=new y;L.constructor=D,E(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function z(N,tt,vt,xt,J,dt){return vt=dt.ref,{$$typeof:o,type:N,key:tt,ref:vt!==void 0?vt:null,props:dt}}function W(N,tt){return z(N.type,tt,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function C(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(vt){return tt[vt]})}var G=/\/+/g;function lt(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):tt.toString(36)}function rt(){}function gt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(rt,rt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,vt,xt,J){var dt=typeof N;(dt==="undefined"||dt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(dt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case o:case t:yt=!0;break;case g:return yt=N._init,ft(yt(N._payload),tt,vt,xt,J)}}if(yt)return J=J(N),yt=xt===""?"."+lt(N,0):xt,w(J)?(vt="",yt!=null&&(vt=yt.replace(G,"$&/")+"/"),ft(J,tt,vt,"",function(le){return le})):J!=null&&(U(J)&&(J=W(J,vt+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+yt)),tt.push(J)),1;yt=0;var At=xt===""?".":xt+":";if(w(N))for(var Ot=0;Ot<N.length;Ot++)xt=N[Ot],dt=At+lt(xt,Ot),yt+=ft(xt,tt,vt,dt,J);else if(Ot=v(N),typeof Ot=="function")for(N=Ot.call(N),Ot=0;!(xt=N.next()).done;)xt=xt.value,dt=At+lt(xt,Ot++),yt+=ft(xt,tt,vt,dt,J);else if(dt==="object"){if(typeof N.then=="function")return ft(gt(N),tt,vt,xt,J);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function I(N,tt,vt){if(N==null)return N;var xt=[],J=0;return ft(N,xt,"","",function(dt){return tt.call(vt,dt,J++)}),xt}function Z(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(vt){(N._status===0||N._status===-1)&&(N._status=1,N._result=vt)},function(vt){(N._status===0||N._status===-1)&&(N._status=2,N._result=vt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return re.Children={map:I,forEach:function(N,tt,vt){I(N,function(){tt.apply(this,arguments)},vt)},count:function(N){var tt=0;return I(N,function(){tt++}),tt},toArray:function(N){return I(N,function(tt){return tt})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=S,re.Fragment=e,re.Profiler=r,re.PureComponent=D,re.StrictMode=s,re.Suspense=d,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return B.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,tt,vt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var xt=E({},N.props),J=N.key,dt=void 0;if(tt!=null)for(yt in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!H.call(tt,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&tt.ref===void 0||(xt[yt]=tt[yt]);var yt=arguments.length-2;if(yt===1)xt.children=vt;else if(1<yt){for(var At=Array(yt),Ot=0;Ot<yt;Ot++)At[Ot]=arguments[Ot+2];xt.children=At}return z(N.type,J,void 0,void 0,dt,xt)},re.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},re.createElement=function(N,tt,vt){var xt,J={},dt=null;if(tt!=null)for(xt in tt.key!==void 0&&(dt=""+tt.key),tt)H.call(tt,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(J[xt]=tt[xt]);var yt=arguments.length-2;if(yt===1)J.children=vt;else if(1<yt){for(var At=Array(yt),Ot=0;Ot<yt;Ot++)At[Ot]=arguments[Ot+2];J.children=At}if(N&&N.defaultProps)for(xt in yt=N.defaultProps,yt)J[xt]===void 0&&(J[xt]=yt[xt]);return z(N,dt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:h,render:N}},re.isValidElement=U,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},re.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},re.startTransition=function(N){var tt=B.T,vt={};B.T=vt;try{var xt=N(),J=B.S;J!==null&&J(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(Mt,q)}catch(dt){q(dt)}finally{B.T=tt}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(N){return B.H.use(N)},re.useActionState=function(N,tt,vt){return B.H.useActionState(N,tt,vt)},re.useCallback=function(N,tt){return B.H.useCallback(N,tt)},re.useContext=function(N){return B.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,tt){return B.H.useDeferredValue(N,tt)},re.useEffect=function(N,tt,vt){var xt=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(N,tt)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(N,tt,vt){return B.H.useImperativeHandle(N,tt,vt)},re.useInsertionEffect=function(N,tt){return B.H.useInsertionEffect(N,tt)},re.useLayoutEffect=function(N,tt){return B.H.useLayoutEffect(N,tt)},re.useMemo=function(N,tt){return B.H.useMemo(N,tt)},re.useOptimistic=function(N,tt){return B.H.useOptimistic(N,tt)},re.useReducer=function(N,tt,vt){return B.H.useReducer(N,tt,vt)},re.useRef=function(N){return B.H.useRef(N)},re.useState=function(N){return B.H.useState(N)},re.useSyncExternalStore=function(N,tt,vt){return B.H.useSyncExternalStore(N,tt,vt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.1.0",re}var gv;function gp(){return gv||(gv=1,Of.exports=KS()),Of.exports}var ha=gp(),Pf={exports:{}},el={},If={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function ZS(){return _v||(_v=1,function(o){function t(I,Z){var q=I.length;I.push(Z);t:for(;0<q;){var Mt=q-1>>>1,N=I[Mt];if(0<r(N,Z))I[Mt]=Z,I[q]=N,q=Mt;else break t}}function e(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Z=I[0],q=I.pop();if(q!==Z){I[0]=q;t:for(var Mt=0,N=I.length,tt=N>>>1;Mt<tt;){var vt=2*(Mt+1)-1,xt=I[vt],J=vt+1,dt=I[J];if(0>r(xt,q))J<N&&0>r(dt,xt)?(I[Mt]=dt,I[J]=q,Mt=J):(I[Mt]=xt,I[vt]=q,Mt=vt);else if(J<N&&0>r(dt,q))I[Mt]=dt,I[J]=q,Mt=J;else break t}}return Z}function r(I,Z){var q=I.sortIndex-Z.sortIndex;return q!==0?q:I.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,x=!1,E=!1,b=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var Z=e(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=I)s(p),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=e(p)}}function B(I){if(b=!1,w(I),!E)if(e(d)!==null)E=!0,H||(H=!0,lt());else{var Z=e(p);Z!==null&&ft(B,Z.startTime-I)}}var H=!1,z=-1,W=5,U=-1;function C(){return S?!0:!(o.unstable_now()-U<W)}function G(){if(S=!1,H){var I=o.unstable_now();U=I;var Z=!0;try{t:{E=!1,b&&(b=!1,D(z),z=-1),x=!0;var q=v;try{e:{for(w(I),_=e(d);_!==null&&!(_.expirationTime>I&&C());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,v=_.priorityLevel;var N=Mt(_.expirationTime<=I);if(I=o.unstable_now(),typeof N=="function"){_.callback=N,w(I),Z=!0;break e}_===e(d)&&s(d),w(I)}else s(d);_=e(d)}if(_!==null)Z=!0;else{var tt=e(p);tt!==null&&ft(B,tt.startTime-I),Z=!1}}break t}finally{_=null,v=q,x=!1}Z=void 0}}finally{Z?lt():H=!1}}}var lt;if(typeof L=="function")lt=function(){L(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=G,lt=function(){gt.postMessage(null)}}else lt=function(){y(G,0)};function ft(I,Z){z=y(function(){I(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var q=v;v=Z;try{return I()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return Z()}finally{v=q}},o.unstable_scheduleCallback=function(I,Z,q){var Mt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Mt+q:Mt):q=Mt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,I={id:g++,callback:Z,priorityLevel:I,startTime:q,expirationTime:N,sortIndex:-1},q>Mt?(I.sortIndex=q,t(p,I),e(d)===null&&I===e(p)&&(b?(D(z),z=-1):b=!0,ft(B,q-Mt))):(I.sortIndex=N,t(d,I),E||x||(E=!0,H||(H=!0,lt()))),I},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(I){var Z=v;return function(){var q=v;v=Z;try{return I.apply(this,arguments)}finally{v=q}}}}(zf)),zf}var vv;function QS(){return vv||(vv=1,If.exports=ZS()),If.exports}var Bf={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function JS(){if(yv)return Bn;yv=1;var o=gp();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var s={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},Bn.flushSync=function(d){var p=u.T,g=s.p;try{if(u.T=null,s.p=2,d)return d()}finally{u.T=p,s.p=g,s.d.f()}},Bn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(d,p))},Bn.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},Bn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&s.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(d)},Bn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(d)},Bn.requestFormReset=function(d){s.d.r(d)},Bn.unstable_batchedUpdates=function(d,p){return d(p)},Bn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Bn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bn.version="19.1.0",Bn}var xv;function $S(){if(xv)return Bf.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=JS(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function tM(){if(Sv)return el;Sv=1;var o=QS(),t=gp(),e=$S();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(s(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return h(f),n;if(m===c)return h(f),i;m=m.sibling}throw Error(s(188))}if(a.return!==c.return)a=f,c=m;else{for(var M=!1,T=f.child;T;){if(T===a){M=!0,a=f,c=m;break}if(T===c){M=!0,c=f,a=m;break}T=T.sibling}if(!M){for(T=m.child;T;){if(T===a){M=!0,a=m,c=f;break}if(T===c){M=!0,c=m,a=f;break}T=T.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==c)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function lt(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Symbol.for("react.client.reference");function gt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===rt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case L:return(n.displayName||"Context")+".Provider";case D:return(n._context.displayName||"Context")+".Consumer";case w:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:gt(n.type)||"Memo";case W:i=n._payload,n=n._init;try{return gt(n(i))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Mt=[],N=-1;function tt(n){return{current:n}}function vt(n){0>N||(n.current=Mt[N],Mt[N]=null,N--)}function xt(n,i){N++,Mt[N]=n.current,n.current=i}var J=tt(null),dt=tt(null),yt=tt(null),At=tt(null);function Ot(n,i){switch(xt(yt,i),xt(dt,n),xt(J,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?V_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=V_(i),n=G_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}vt(J),xt(J,n)}function le(){vt(J),vt(dt),vt(yt)}function Zt(n){n.memoizedState!==null&&xt(At,n);var i=J.current,a=G_(i,n.type);i!==a&&(xt(dt,n),xt(J,a))}function Ye(n){dt.current===n&&(vt(J),vt(dt)),At.current===n&&(vt(At),Ko._currentValue=q)}var Ge=Object.prototype.hasOwnProperty,de=o.unstable_scheduleCallback,F=o.unstable_cancelCallback,Wn=o.unstable_shouldYield,ye=o.unstable_requestPaint,ne=o.unstable_now,Xt=o.unstable_getCurrentPriorityLevel,Pe=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,O=o.unstable_NormalPriority,A=o.unstable_LowPriority,et=o.unstable_IdlePriority,_t=o.log,St=o.unstable_setDisableYieldValue,ut=null,zt=null;function Rt(n){if(typeof _t=="function"&&St(n),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(ut,n)}catch{}}var wt=Math.clz32?Math.clz32:Ft,xe=Math.log,bt=Math.LN2;function Ft(n){return n>>>=0,n===0?32:31-(xe(n)/bt|0)|0}var jt=256,Qt=4194304;function Pt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ue(n,i,a){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,M=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~m,c!==0?f=Pt(c):(M&=T,M!==0?f=Pt(M):a||(a=T&~n,a!==0&&(f=Pt(a))))):(T=c&~m,T!==0?f=Pt(T):M!==0?f=Pt(M):a||(a=c&~n,a!==0&&(f=Pt(a)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,a=i&-i,m>=a||m===32&&(a&4194048)!==0)?i:f}function ee(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Ie(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var n=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),n}function Ut(){var n=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),n}function ot(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function pt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function It(n,i,a,c,f,m){var M=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,P=n.expirationTimes,$=n.hiddenUpdates;for(a=M&~a;0<a;){var ct=31-wt(a),mt=1<<ct;T[ct]=0,P[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~mt}c!==0&&Nt(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(M&~i))}function Nt(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-wt(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|a&4194090}function ie(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-wt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}function je(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function on(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Re(){var n=Z.p;return n!==0?n:(n=window.event,n===void 0?32:ov(n.type))}function ti(n,i){var a=Z.p;try{return Z.p=n,i()}finally{Z.p=a}}var xn=Math.random().toString(36).slice(2),dn="__reactFiber$"+xn,wn="__reactProps$"+xn,Yn="__reactContainer$"+xn,ma="__reactEvents$"+xn,wl="__reactListeners$"+xn,Cl="__reactHandles$"+xn,ga="__reactResources$"+xn,ws="__reactMarker$"+xn;function Cs(n){delete n[dn],delete n[wn],delete n[ma],delete n[wl],delete n[Cl]}function Yi(n){var i=n[dn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Yn]||a[dn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Y_(n);n!==null;){if(a=n[dn])return a;n=Y_(n)}return i}n=a,a=n.parentNode}return null}function ji(n){if(n=n[dn]||n[Yn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function _a(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function Ds(n){var i=n[ga];return i||(i=n[ga]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(n){n[ws]=!0}var Dl=new Set,Ll={};function qi(n,i){R(n,i),R(n+"Capture",i)}function R(n,i){for(Ll[n]=i,n=0;n<i.length;n++)Dl.add(i[n])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},at={};function K(n){return Ge.call(at,n)?!0:Ge.call(st,n)?!1:j.test(n)?at[n]=!0:(st[n]=!0,!1)}function Et(n,i,a){if(K(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Ct(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Dt(n,i,a,c){if(c===null)n.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+c)}}var Bt,$t;function Wt(n){if(Bt===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Bt=i&&i[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+n+$t}var kt=!1;function me(n,i){if(!n||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(n,[],mt)}else{try{mt.call()}catch(it){nt=it}n.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=n())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),M=m[0],T=m[1];if(M&&T){var P=M.split(`
`),$=T.split(`
`);for(f=c=0;c<P.length&&!P[c].includes("DetermineComponentFrameRoot");)c++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(c===P.length||f===$.length)for(c=P.length-1,f=$.length-1;1<=c&&0<=f&&P[c]!==$[f];)f--;for(;1<=c&&0<=f;c--,f--)if(P[c]!==$[f]){if(c!==1||f!==1)do if(c--,f--,0>f||P[c]!==$[f]){var ct=`
`+P[c].replace(" at new "," at ");return n.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",n.displayName)),ct}while(1<=c&&0<=f);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Wt(a):""}function we(n){switch(n.tag){case 26:case 27:case 5:return Wt(n.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return me(n.type,!1);case 11:return me(n.type.render,!1);case 1:return me(n.type,!0);case 31:return Wt("Activity");default:return""}}function Qe(n){try{var i="";do i+=we(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yt(n){var i=Me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function tn(n){n._valueTracker||(n._valueTracker=Yt(n))}function Te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Me(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ls=/[\n"\\]/g;function qe(n){return n.replace(Ls,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ki(n,i,a,c,f,m,M,T){n.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?n.type=M:n.removeAttribute("type"),i!=null?M==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+Se(i)):n.value!==""+Se(i)&&(n.value=""+Se(i)):M!=="submit"&&M!=="reset"||n.removeAttribute("value"),i!=null?In(n,M,Se(i)):a!=null?In(n,M,Se(a)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+Se(T):n.removeAttribute("name")}function ke(n,i,a,c,f,m,M,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;a=a!=null?""+Se(a):"",i=i!=null?""+Se(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(n.name=M)}function In(n,i,a){i==="number"&&Pn(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function pn(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Sn(n,i,a){if(i!=null&&(i=""+Se(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+Se(a):""}function Cn(n,i,a,c){if(i==null){if(c!=null){if(a!=null)throw Error(s(92));if(ft(c)){if(1<c.length)throw Error(s(93));c=c[0]}a=c}a==null&&(a=""),i=a}a=Se(i),n.defaultValue=a,c=n.textContent,c===a&&c!==""&&c!==null&&(n.value=c)}function Ni(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vp(n,i,a){var c=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,a):typeof a!="number"||a===0||Zi.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function Gp(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in i)c=i[f],i.hasOwnProperty(f)&&a[f]!==c&&Vp(n,f,c)}else for(var m in i)i.hasOwnProperty(m)&&Vp(n,m,i[m])}function Lu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(n){return Yy.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Uu=null;function Nu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ka=null,Za=null;function kp(n){var i=ji(n);if(i&&(n=i.stateNode)){var a=n[wn]||null;t:switch(n=i.stateNode,i.type){case"input":if(Ki(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=c[wn]||null;if(!f)throw Error(s(90));Ki(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)c=a[i],c.form===n.form&&Te(c)}break t;case"textarea":Sn(n,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&pn(n,!!a.multiple,i,!1)}}}var Ou=!1;function Xp(n,i,a){if(Ou)return n(i,a);Ou=!0;try{var c=n(i);return c}finally{if(Ou=!1,(Ka!==null||Za!==null)&&(_c(),Ka&&(i=Ka,n=Za,Za=Ka=null,kp(i),n)))for(i=0;i<n.length;i++)kp(n[i])}}function oo(n,i){var a=n.stateNode;if(a===null)return null;var c=a[wn]||null;if(c===null)return null;a=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(Qi)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Pu=!1}var Us=null,Iu=null,Nl=null;function Wp(){if(Nl)return Nl;var n,i=Iu,a=i.length,c,f="value"in Us?Us.value:Us.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===f[m-c];c++);return Nl=f.slice(n,1<c?1-c:void 0)}function Ol(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pl(){return!0}function Yp(){return!1}function jn(n){function i(a,c,f,m,M){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pl:Yp,this.isPropagationStopped=Yp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),i}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=jn(va),co=g({},va,{view:0,detail:0}),jy=jn(co),zu,Bu,uo,zl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==uo&&(uo&&n.type==="mousemove"?(zu=n.screenX-uo.screenX,Bu=n.screenY-uo.screenY):Bu=zu=0,uo=n),zu)},movementY:function(n){return"movementY"in n?n.movementY:Bu}}),jp=jn(zl),qy=g({},zl,{dataTransfer:0}),Ky=jn(qy),Zy=g({},co,{relatedTarget:0}),Fu=jn(Zy),Qy=g({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=jn(Qy),$y=g({},va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tx=jn($y),ex=g({},va,{data:0}),qp=jn(ex),nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=sx[n])?!!i[n]:!1}function Hu(){return ax}var rx=g({},co,{key:function(n){if(n.key){var i=nx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ol(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ix[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(n){return n.type==="keypress"?Ol(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ol(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ox=jn(rx),lx=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=jn(lx),cx=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),ux=jn(cx),hx=g({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=jn(hx),dx=g({},zl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),px=jn(dx),mx=g({},va,{newState:0,oldState:0}),gx=jn(mx),_x=[9,13,27,32],Vu=Qi&&"CompositionEvent"in window,ho=null;Qi&&"documentMode"in document&&(ho=document.documentMode);var vx=Qi&&"TextEvent"in window&&!ho,Zp=Qi&&(!Vu||ho&&8<ho&&11>=ho),Qp=" ",Jp=!1;function $p(n,i){switch(n){case"keyup":return _x.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qa=!1;function yx(n,i){switch(n){case"compositionend":return tm(i);case"keypress":return i.which!==32?null:(Jp=!0,Qp);case"textInput":return n=i.data,n===Qp&&Jp?null:n;default:return null}}function xx(n,i){if(Qa)return n==="compositionend"||!Vu&&$p(n,i)?(n=Wp(),Nl=Iu=Us=null,Qa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zp&&i.locale!=="ko"?null:i.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Sx[n.type]:i==="textarea"}function nm(n,i,a,c){Ka?Za?Za.push(c):Za=[c]:Ka=c,i=Ec(i,"onChange"),0<i.length&&(a=new Il("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var fo=null,po=null;function Mx(n){I_(n,0)}function Bl(n){var i=_a(n);if(Te(i))return n}function im(n,i){if(n==="change")return i}var sm=!1;if(Qi){var Gu;if(Qi){var ku="oninput"in document;if(!ku){var am=document.createElement("div");am.setAttribute("oninput","return;"),ku=typeof am.oninput=="function"}Gu=ku}else Gu=!1;sm=Gu&&(!document.documentMode||9<document.documentMode)}function rm(){fo&&(fo.detachEvent("onpropertychange",om),po=fo=null)}function om(n){if(n.propertyName==="value"&&Bl(po)){var i=[];nm(i,po,n,Nu(n)),Xp(Mx,i)}}function Ex(n,i,a){n==="focusin"?(rm(),fo=i,po=a,fo.attachEvent("onpropertychange",om)):n==="focusout"&&rm()}function bx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bl(po)}function Tx(n,i){if(n==="click")return Bl(i)}function Ax(n,i){if(n==="input"||n==="change")return Bl(i)}function Rx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ei=typeof Object.is=="function"?Object.is:Rx;function mo(n,i){if(ei(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!Ge.call(i,f)||!ei(n[f],i[f]))return!1}return!0}function lm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cm(n,i){var a=lm(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=lm(a)}}function um(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?um(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Pn(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pn(n.document)}return i}function Xu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var wx=Qi&&"documentMode"in document&&11>=document.documentMode,Ja=null,Wu=null,go=null,Yu=!1;function fm(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||Ja==null||Ja!==Pn(c)||(c=Ja,"selectionStart"in c&&Xu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),go&&mo(go,c)||(go=c,c=Ec(Wu,"onSelect"),0<c.length&&(i=new Il("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ja)))}function ya(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var $a={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},ju={},dm={};Qi&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function xa(n){if(ju[n])return ju[n];if(!$a[n])return n;var i=$a[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in dm)return ju[n]=i[a];return n}var pm=xa("animationend"),mm=xa("animationiteration"),gm=xa("animationstart"),Cx=xa("transitionrun"),Dx=xa("transitionstart"),Lx=xa("transitioncancel"),_m=xa("transitionend"),vm=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Ei(n,i){vm.set(n,i),qi(i,[n])}var ym=new WeakMap;function fi(n,i){if(typeof n=="object"&&n!==null){var a=ym.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Qe(i)},ym.set(n,i),i)}return{value:n,source:i,stack:Qe(i)}}var di=[],tr=0,Ku=0;function Fl(){for(var n=tr,i=Ku=tr=0;i<n;){var a=di[i];di[i++]=null;var c=di[i];di[i++]=null;var f=di[i];di[i++]=null;var m=di[i];if(di[i++]=null,c!==null&&f!==null){var M=c.pending;M===null?f.next=f:(f.next=M.next,M.next=f),c.pending=f}m!==0&&xm(a,f,m)}}function Hl(n,i,a,c){di[tr++]=n,di[tr++]=i,di[tr++]=a,di[tr++]=c,Ku|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Zu(n,i,a,c){return Hl(n,i,a,c),Vl(n)}function er(n,i){return Hl(n,null,null,i),Vl(n)}function xm(n,i,a){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&i!==null&&(f=31-wt(a),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[i]:c.push(i),i.lane=a|536870912),m):null}function Vl(n){if(50<Vo)throw Vo=0,nf=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var nr={};function Ux(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,a,c){return new Ux(n,i,a,c)}function Qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ji(n,i){var a=n.alternate;return a===null?(a=ni(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Sm(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Gl(n,i,a,c,f,m){var M=0;if(c=n,typeof n=="function")Qu(n)&&(M=1);else if(typeof n=="string")M=OS(n,a,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case U:return n=ni(31,a,i,f),n.elementType=U,n.lanes=m,n;case E:return Sa(a.children,f,m,i);case b:M=8,f|=24;break;case S:return n=ni(12,a,i,f|2),n.elementType=S,n.lanes=m,n;case B:return n=ni(13,a,i,f),n.elementType=B,n.lanes=m,n;case H:return n=ni(19,a,i,f),n.elementType=H,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case L:M=10;break t;case D:M=9;break t;case w:M=11;break t;case z:M=14;break t;case W:M=16,c=null;break t}M=29,a=Error(s(130,n===null?"null":typeof n,"")),c=null}return i=ni(M,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Sa(n,i,a,c){return n=ni(7,n,c,i),n.lanes=a,n}function Ju(n,i,a){return n=ni(6,n,null,i),n.lanes=a,n}function $u(n,i,a){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ir=[],sr=0,kl=null,Xl=0,pi=[],mi=0,Ma=null,$i=1,ts="";function Ea(n,i){ir[sr++]=Xl,ir[sr++]=kl,kl=n,Xl=i}function Mm(n,i,a){pi[mi++]=$i,pi[mi++]=ts,pi[mi++]=Ma,Ma=n;var c=$i;n=ts;var f=32-wt(c)-1;c&=~(1<<f),a+=1;var m=32-wt(i)+f;if(30<m){var M=f-f%5;m=(c&(1<<M)-1).toString(32),c>>=M,f-=M,$i=1<<32-wt(i)+f|a<<f|c,ts=m+n}else $i=1<<m|a<<f|c,ts=n}function th(n){n.return!==null&&(Ea(n,1),Mm(n,1,0))}function eh(n){for(;n===kl;)kl=ir[--sr],ir[sr]=null,Xl=ir[--sr],ir[sr]=null;for(;n===Ma;)Ma=pi[--mi],pi[mi]=null,ts=pi[--mi],pi[mi]=null,$i=pi[--mi],pi[mi]=null}var Gn=null,en=null,De=!1,ba=null,Oi=!1,nh=Error(s(519));function Ta(n){var i=Error(s(418,""));throw yo(fi(i,n)),nh}function Em(n){var i=n.stateNode,a=n.type,c=n.memoizedProps;switch(i[dn]=n,i[wn]=c,a){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(a=0;a<ko.length;a++)_e(ko[a],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),ke(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),tn(i);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),Cn(i,c.value,c.defaultValue,c.children),tn(i)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||c.suppressHydrationWarning===!0||H_(i.textContent,a)?(c.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),c.onScroll!=null&&_e("scroll",i),c.onScrollEnd!=null&&_e("scrollend",i),c.onClick!=null&&(i.onclick=bc),i=!0):i=!1,i||Ta(n)}function bm(n){for(Gn=n.return;Gn;)switch(Gn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Gn=Gn.return}}function _o(n){if(n!==Gn)return!1;if(!De)return bm(n),De=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||yf(n.type,n.memoizedProps)),a=!a),a&&en&&Ta(n),bm(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){en=Ti(n.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}en=null}}else i===27?(i=en,qs(n.type)?(n=Ef,Ef=null,en=n):en=i):en=Gn?Ti(n.stateNode.nextSibling):null;return!0}function vo(){en=Gn=null,De=!1}function Tm(){var n=ba;return n!==null&&(Zn===null?Zn=n:Zn.push.apply(Zn,n),ba=null),n}function yo(n){ba===null?ba=[n]:ba.push(n)}var ih=tt(null),Aa=null,es=null;function Ns(n,i,a){xt(ih,i._currentValue),i._currentValue=a}function ns(n){n._currentValue=ih.current,vt(ih)}function sh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ah(n,i,a,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var T=m;m=f;for(var P=0;P<i.length;P++)if(T.context===i[P]){m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),sh(m.return,a,n),c||(M=null);break t}m=T.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=a,m=M.alternate,m!==null&&(m.lanes|=a),sh(M,a,n),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===n){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function xo(n,i,a,c){n=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var T=f.type;ei(f.pendingProps.value,M.value)||(n!==null?n.push(T):n=[T])}}else if(f===At.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Ko):n=[Ko])}f=f.return}n!==null&&ah(i,n,a,c),i.flags|=262144}function Wl(n){for(n=n.firstContext;n!==null;){if(!ei(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ra(n){Aa=n,es=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zn(n){return Am(Aa,n)}function Yl(n,i){return Aa===null&&Ra(n),Am(n,i)}function Am(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},es===null){if(n===null)throw Error(s(308));es=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else es=es.next=i;return a}var Nx=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},Ox=o.unstable_scheduleCallback,Px=o.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rh(){return{controller:new Nx,data:new Map,refCount:0}}function So(n){n.refCount--,n.refCount===0&&Ox(Px,function(){n.controller.abort()})}var Mo=null,oh=0,ar=0,rr=null;function Ix(n,i){if(Mo===null){var a=Mo=[];oh=0,ar=uf(),rr={status:"pending",value:void 0,then:function(c){a.push(c)}}}return oh++,i.then(Rm,Rm),i}function Rm(){if(--oh===0&&Mo!==null){rr!==null&&(rr.status="fulfilled");var n=Mo;Mo=null,ar=0,rr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function zx(n,i){var a=[],c={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(c.status="rejected",c.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),c}var wm=I.S;I.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ix(n,i),wm!==null&&wm(n,i)};var wa=tt(null);function lh(){var n=wa.current;return n!==null?n:Ke.pooledCache}function jl(n,i){i===null?xt(wa,wa.current):xt(wa,i.pool)}function Cm(){var n=lh();return n===null?null:{parent:mn._currentValue,pool:n}}var Eo=Error(s(460)),Dm=Error(s(474)),ql=Error(s(542)),ch={then:function(){}};function Lm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Kl(){}function Um(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Kl,Kl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Om(n),n;default:if(typeof i.status=="string")i.then(Kl,Kl);else{if(n=Ke,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=c}},function(c){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Om(n),n}throw bo=i,Eo}}var bo=null;function Nm(){if(bo===null)throw Error(s(459));var n=bo;return bo=null,n}function Om(n){if(n===Eo||n===ql)throw Error(s(483))}var Os=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ps(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Is(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,i=Vl(n),xm(n,null,a),i}return Hl(n,c,i,a),Vl(n)}function To(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ie(n,a)}}function fh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var dh=!1;function Ao(){if(dh){var n=rr;if(n!==null)throw n}}function Ro(n,i,a,c){dh=!1;var f=n.updateQueue;Os=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var P=T,$=P.next;P.next=null,M===null?m=$:M.next=$,M=P;var ct=n.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==M&&(T===null?ct.firstBaseUpdate=$:T.next=$,ct.lastBaseUpdate=P))}if(m!==null){var mt=f.baseState;M=0,ct=$=P=null,T=m;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(be&nt)===nt:(c&nt)===nt){nt!==0&&nt===ar&&(dh=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var te=n,qt=T;nt=i;var Fe=a;switch(qt.tag){case 1:if(te=qt.payload,typeof te=="function"){mt=te.call(Fe,mt,nt);break t}mt=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=qt.payload,nt=typeof te=="function"?te.call(Fe,mt,nt):te,nt==null)break t;mt=g({},mt,nt);break t;case 2:Os=!0}}nt=T.callback,nt!==null&&(n.flags|=64,it&&(n.flags|=8192),it=f.callbacks,it===null?f.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?($=ct=it,P=mt):ct=ct.next=it,M|=nt;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;it=T,T=it.next,it.next=null,f.lastBaseUpdate=it,f.shared.pending=null}}while(!0);ct===null&&(P=mt),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=ct,m===null&&(f.shared.lanes=0),Xs|=M,n.lanes=M,n.memoizedState=mt}}function Pm(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function Im(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Pm(a[n],i)}var or=tt(null),Zl=tt(0);function zm(n,i){n=cs,xt(Zl,n),xt(or,i),cs=n|i.baseLanes}function ph(){xt(Zl,cs),xt(or,or.current)}function mh(){cs=Zl.current,vt(or),vt(Zl)}var zs=0,he=null,ze=null,cn=null,Ql=!1,lr=!1,Ca=!1,Jl=0,wo=0,cr=null,Bx=0;function sn(){throw Error(s(321))}function gh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ei(n[a],i[a]))return!1;return!0}function _h(n,i,a,c,f,m){return zs=m,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=n===null||n.memoizedState===null?xg:Sg,Ca=!1,m=a(c,f),Ca=!1,lr&&(m=Fm(i,a,c,f)),Bm(n),m}function Bm(n){I.H=sc;var i=ze!==null&&ze.next!==null;if(zs=0,cn=ze=he=null,Ql=!1,wo=0,cr=null,i)throw Error(s(300));n===null||Mn||(n=n.dependencies,n!==null&&Wl(n)&&(Mn=!0))}function Fm(n,i,a,c){he=n;var f=0;do{if(lr&&(cr=null),wo=0,lr=!1,25<=f)throw Error(s(301));if(f+=1,cn=ze=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=Wx,m=i(a,c)}while(lr);return m}function Fx(){var n=I.H,i=n.useState()[0];return i=typeof i.then=="function"?Co(i):i,n=n.useState()[0],(ze!==null?ze.memoizedState:null)!==n&&(he.flags|=1024),i}function vh(){var n=Jl!==0;return Jl=0,n}function yh(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function xh(n){if(Ql){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ql=!1}zs=0,cn=ze=he=null,lr=!1,wo=Jl=0,cr=null}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=n:cn=cn.next=n,cn}function un(){if(ze===null){var n=he.alternate;n=n!==null?n.memoizedState:null}else n=ze.next;var i=cn===null?he.memoizedState:cn.next;if(i!==null)cn=i,ze=n;else{if(n===null)throw he.alternate===null?Error(s(467)):Error(s(310));ze=n,n={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?he.memoizedState=cn=n:cn=cn.next=n}return cn}function Sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(n){var i=wo;return wo+=1,cr===null&&(cr=[]),n=Um(cr,n,i),i=he,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?xg:Sg),n}function $l(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Co(n);if(n.$$typeof===L)return zn(n)}throw Error(s(438,String(n)))}function Mh(n){var i=null,a=he.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var c=he.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Sh(),he.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),c=0;c<n;c++)a[c]=C;return i.index++,a}function is(n,i){return typeof i=="function"?i(n):i}function tc(n){var i=un();return Eh(i,ze,n)}function Eh(n,i,a){var c=n.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=a;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{i=f.next;var T=M=null,P=null,$=i,ct=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(be&mt)===mt:(zs&mt)===mt){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===ar&&(ct=!0);else if((zs&nt)===nt){$=$.next,nt===ar&&(ct=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=mt,M=m):P=P.next=mt,he.lanes|=nt,Xs|=nt;mt=$.action,Ca&&a(m,mt),m=$.hasEagerState?$.eagerState:a(m,mt)}else nt={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=nt,M=m):P=P.next=nt,he.lanes|=mt,Xs|=mt;$=$.next}while($!==null&&$!==i);if(P===null?M=m:P.next=T,!ei(m,n.memoizedState)&&(Mn=!0,ct&&(a=rr,a!==null)))throw a;n.memoizedState=m,n.baseState=M,n.baseQueue=P,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function bh(n){var i=un(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);ei(m,i.memoizedState)||(Mn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Hm(n,i,a){var c=he,f=un(),m=De;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=i();var M=!ei((ze||f).memoizedState,a);M&&(f.memoizedState=a,Mn=!0),f=f.queue;var T=km.bind(null,c,f,n);if(Do(2048,8,T,[n]),f.getSnapshot!==i||M||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,ur(9,ec(),Gm.bind(null,c,f,a,i),null),Ke===null)throw Error(s(349));m||(zs&124)!==0||Vm(c,i,a)}return a}function Vm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=he.updateQueue,i===null?(i=Sh(),he.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gm(n,i,a,c){i.value=a,i.getSnapshot=c,Xm(i)&&Wm(n)}function km(n,i,a){return a(function(){Xm(i)&&Wm(n)})}function Xm(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ei(n,a)}catch{return!0}}function Wm(n){var i=er(n,2);i!==null&&oi(i,n,2)}function Th(n){var i=qn();if(typeof n=="function"){var a=n;if(n=a(),Ca){Rt(!0);try{a()}finally{Rt(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},i}function Ym(n,i,a,c){return n.baseState=a,Eh(n,ze,typeof c=="function"?c:is)}function Hx(n,i,a,c,f){if(ic(n))throw Error(s(485));if(n=i.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};I.T!==null?a(!0):m.isTransition=!1,c(m),a=i.pending,a===null?(m.next=i.pending=m,jm(i,m)):(m.next=a.next,i.pending=a.next=m)}}function jm(n,i){var a=i.action,c=i.payload,f=n.state;if(i.isTransition){var m=I.T,M={};I.T=M;try{var T=a(f,c),P=I.S;P!==null&&P(M,T),qm(n,i,T)}catch($){Ah(n,i,$)}finally{I.T=m}}else try{m=a(f,c),qm(n,i,m)}catch($){Ah(n,i,$)}}function qm(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){Km(n,i,c)},function(c){return Ah(n,i,c)}):Km(n,i,a)}function Km(n,i,a){i.status="fulfilled",i.value=a,Zm(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,jm(n,a)))}function Ah(n,i,a){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=a,Zm(i),i=i.next;while(i!==c)}n.action=null}function Zm(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Qm(n,i){return i}function Jm(n,i){if(De){var a=Ke.formState;if(a!==null){t:{var c=he;if(De){if(en){e:{for(var f=en,m=Oi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Ti(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){en=Ti(f.nextSibling),c=f.data==="F!";break t}}Ta(c)}c=!1}c&&(i=a[0])}}return a=qn(),a.memoizedState=a.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qm,lastRenderedState:i},a.queue=c,a=_g.bind(null,he,c),c.dispatch=a,c=Th(!1),m=Lh.bind(null,he,!1,c.queue),c=qn(),f={state:i,dispatch:null,action:n,pending:null},c.queue=f,a=Hx.bind(null,he,f,m,a),f.dispatch=a,c.memoizedState=n,[i,a,!1]}function $m(n){var i=un();return tg(i,ze,n)}function tg(n,i,a){if(i=Eh(n,i,Qm)[0],n=tc(is)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Co(i)}catch(M){throw M===Eo?ql:M}else c=i;i=un();var f=i.queue,m=f.dispatch;return a!==i.memoizedState&&(he.flags|=2048,ur(9,ec(),Vx.bind(null,f,a),null)),[c,m,n]}function Vx(n,i){n.action=i}function eg(n){var i=un(),a=ze;if(a!==null)return tg(i,a,n);un(),i=i.memoizedState,a=un();var c=a.queue.dispatch;return a.memoizedState=n,[i,c,!1]}function ur(n,i,a,c){return n={tag:n,create:a,deps:c,inst:i,next:null},i=he.updateQueue,i===null&&(i=Sh(),he.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n),n}function ec(){return{destroy:void 0,resource:void 0}}function ng(){return un().memoizedState}function nc(n,i,a,c){var f=qn();c=c===void 0?null:c,he.flags|=n,f.memoizedState=ur(1|i,ec(),a,c)}function Do(n,i,a,c){var f=un();c=c===void 0?null:c;var m=f.memoizedState.inst;ze!==null&&c!==null&&gh(c,ze.memoizedState.deps)?f.memoizedState=ur(i,m,a,c):(he.flags|=n,f.memoizedState=ur(1|i,m,a,c))}function ig(n,i){nc(8390656,8,n,i)}function sg(n,i){Do(2048,8,n,i)}function ag(n,i){return Do(4,2,n,i)}function rg(n,i){return Do(4,4,n,i)}function og(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lg(n,i,a){a=a!=null?a.concat([n]):null,Do(4,4,og.bind(null,i,n),a)}function Rh(){}function cg(n,i){var a=un();i=i===void 0?null:i;var c=a.memoizedState;return i!==null&&gh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ug(n,i){var a=un();i=i===void 0?null:i;var c=a.memoizedState;if(i!==null&&gh(i,c[1]))return c[0];if(c=n(),Ca){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[c,i],c}function wh(n,i,a){return a===void 0||(zs&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=d_(),he.lanes|=n,Xs|=n,a)}function hg(n,i,a,c){return ei(a,i)?a:or.current!==null?(n=wh(n,a,c),ei(n,i)||(Mn=!0),n):(zs&42)===0?(Mn=!0,n.memoizedState=a):(n=d_(),he.lanes|=n,Xs|=n,i)}function fg(n,i,a,c,f){var m=Z.p;Z.p=m!==0&&8>m?m:8;var M=I.T,T={};I.T=T,Lh(n,!1,i,a);try{var P=f(),$=I.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=zx(P,c);Lo(n,i,ct,ri(n))}else Lo(n,i,c,ri(n))}catch(mt){Lo(n,i,{then:function(){},status:"rejected",reason:mt},ri())}finally{Z.p=m,I.T=M}}function Gx(){}function Ch(n,i,a,c){if(n.tag!==5)throw Error(s(476));var f=dg(n).queue;fg(n,f,i,q,a===null?Gx:function(){return pg(n),a(c)})}function dg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:q},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function pg(n){var i=dg(n).next.queue;Lo(n,i,{},ri())}function Dh(){return zn(Ko)}function mg(){return un().memoizedState}function gg(){return un().memoizedState}function kx(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=ri();n=Ps(a);var c=Is(i,n,a);c!==null&&(oi(c,i,a),To(c,i,a)),i={cache:rh()},n.payload=i;return}i=i.return}}function Xx(n,i,a){var c=ri();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ic(n)?vg(i,a):(a=Zu(n,i,a,c),a!==null&&(oi(a,n,c),yg(a,i,c)))}function _g(n,i,a){var c=ri();Lo(n,i,a,c)}function Lo(n,i,a,c){var f={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ic(n))vg(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,T=m(M,a);if(f.hasEagerState=!0,f.eagerState=T,ei(T,M))return Hl(n,i,f,0),Ke===null&&Fl(),!1}catch{}finally{}if(a=Zu(n,i,f,c),a!==null)return oi(a,n,c),yg(a,i,c),!0}return!1}function Lh(n,i,a,c){if(c={lane:2,revertLane:uf(),action:c,hasEagerState:!1,eagerState:null,next:null},ic(n)){if(i)throw Error(s(479))}else i=Zu(n,a,c,2),i!==null&&oi(i,n,2)}function ic(n){var i=n.alternate;return n===he||i!==null&&i===he}function vg(n,i){lr=Ql=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yg(n,i,a){if((a&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,ie(n,a)}}var sc={readContext:zn,use:$l,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn},xg={readContext:zn,use:$l,useCallback:function(n,i){return qn().memoizedState=[n,i===void 0?null:i],n},useContext:zn,useEffect:ig,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,nc(4194308,4,og.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nc(4194308,4,n,i)},useInsertionEffect:function(n,i){nc(4,2,n,i)},useMemo:function(n,i){var a=qn();i=i===void 0?null:i;var c=n();if(Ca){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[c,i],c},useReducer:function(n,i,a){var c=qn();if(a!==void 0){var f=a(i);if(Ca){Rt(!0);try{a(i)}finally{Rt(!1)}}}else f=i;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=Xx.bind(null,he,n),[c.memoizedState,n]},useRef:function(n){var i=qn();return n={current:n},i.memoizedState=n},useState:function(n){n=Th(n);var i=n.queue,a=_g.bind(null,he,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Rh,useDeferredValue:function(n,i){var a=qn();return wh(a,n,i)},useTransition:function(){var n=Th(!1);return n=fg.bind(null,he,n.queue,!0,!1),qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var c=he,f=qn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ke===null)throw Error(s(349));(be&124)!==0||Vm(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,ig(km.bind(null,c,m,n),[n]),c.flags|=2048,ur(9,ec(),Gm.bind(null,c,m,a,i),null),a},useId:function(){var n=qn(),i=Ke.identifierPrefix;if(De){var a=ts,c=$i;a=(c&~(1<<32-wt(c)-1)).toString(32)+a,i="«"+i+"R"+a,a=Jl++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Bx++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Dh,useFormState:Jm,useActionState:Jm,useOptimistic:function(n){var i=qn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Lh.bind(null,he,!0,a),a.dispatch=i,[n,i]},useMemoCache:Mh,useCacheRefresh:function(){return qn().memoizedState=kx.bind(null,he)}},Sg={readContext:zn,use:$l,useCallback:cg,useContext:zn,useEffect:sg,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:rg,useMemo:ug,useReducer:tc,useRef:ng,useState:function(){return tc(is)},useDebugValue:Rh,useDeferredValue:function(n,i){var a=un();return hg(a,ze.memoizedState,n,i)},useTransition:function(){var n=tc(is)[0],i=un().memoizedState;return[typeof n=="boolean"?n:Co(n),i]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Dh,useFormState:$m,useActionState:$m,useOptimistic:function(n,i){var a=un();return Ym(a,ze,n,i)},useMemoCache:Mh,useCacheRefresh:gg},Wx={readContext:zn,use:$l,useCallback:cg,useContext:zn,useEffect:sg,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:rg,useMemo:ug,useReducer:bh,useRef:ng,useState:function(){return bh(is)},useDebugValue:Rh,useDeferredValue:function(n,i){var a=un();return ze===null?wh(a,n,i):hg(a,ze.memoizedState,n,i)},useTransition:function(){var n=bh(is)[0],i=un().memoizedState;return[typeof n=="boolean"?n:Co(n),i]},useSyncExternalStore:Hm,useId:mg,useHostTransitionStatus:Dh,useFormState:eg,useActionState:eg,useOptimistic:function(n,i){var a=un();return ze!==null?Ym(a,ze,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Mh,useCacheRefresh:gg},hr=null,Uo=0;function ac(n){var i=Uo;return Uo+=1,hr===null&&(hr=[]),Um(hr,n,i)}function No(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function rc(n,i){throw i.$$typeof===_?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Mg(n){var i=n._init;return i(n._payload)}function Eg(n){function i(Y,V){if(n){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function c(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function f(Y,V){return Y=Ji(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,Q){return Y.index=Q,n?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,Q,ht){return V===null||V.tag!==6?(V=Ju(Q,Y.mode,ht),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function P(Y,V,Q,ht){var Ht=Q.type;return Ht===E?ct(Y,V,Q.props.children,ht,Q.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Mg(Ht)===V.type)?(V=f(V,Q.props),No(V,Q),V.return=Y,V):(V=Gl(Q.type,Q.key,Q.props,null,Y.mode,ht),No(V,Q),V.return=Y,V)}function $(Y,V,Q,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=$u(Q,Y.mode,ht),V.return=Y,V):(V=f(V,Q.children||[]),V.return=Y,V)}function ct(Y,V,Q,ht,Ht){return V===null||V.tag!==7?(V=Sa(Q,Y.mode,ht,Ht),V.return=Y,V):(V=f(V,Q),V.return=Y,V)}function mt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ju(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return Q=Gl(V.type,V.key,V.props,null,Y.mode,Q),No(Q,V),Q.return=Y,Q;case x:return V=$u(V,Y.mode,Q),V.return=Y,V;case W:var ht=V._init;return V=ht(V._payload),mt(Y,V,Q)}if(ft(V)||lt(V))return V=Sa(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,ac(V),Q);if(V.$$typeof===L)return mt(Y,Yl(Y,V),Q);rc(Y,V)}return null}function nt(Y,V,Q,ht){var Ht=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:T(Y,V,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ht?P(Y,V,Q,ht):null;case x:return Q.key===Ht?$(Y,V,Q,ht):null;case W:return Ht=Q._init,Q=Ht(Q._payload),nt(Y,V,Q,ht)}if(ft(Q)||lt(Q))return Ht!==null?null:ct(Y,V,Q,ht,null);if(typeof Q.then=="function")return nt(Y,V,ac(Q),ht);if(Q.$$typeof===L)return nt(Y,V,Yl(Y,Q),ht);rc(Y,Q)}return null}function it(Y,V,Q,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(Q)||null,T(V,Y,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return Y=Y.get(ht.key===null?Q:ht.key)||null,P(V,Y,ht,Ht);case x:return Y=Y.get(ht.key===null?Q:ht.key)||null,$(V,Y,ht,Ht);case W:var pe=ht._init;return ht=pe(ht._payload),it(Y,V,Q,ht,Ht)}if(ft(ht)||lt(ht))return Y=Y.get(Q)||null,ct(V,Y,ht,Ht,null);if(typeof ht.then=="function")return it(Y,V,Q,ac(ht),Ht);if(ht.$$typeof===L)return it(Y,V,Q,Yl(V,ht),Ht);rc(V,ht)}return null}function te(Y,V,Q,ht){for(var Ht=null,pe=null,Gt=V,Jt=V=0,bn=null;Gt!==null&&Jt<Q.length;Jt++){Gt.index>Jt?(bn=Gt,Gt=null):bn=Gt.sibling;var Ce=nt(Y,Gt,Q[Jt],ht);if(Ce===null){Gt===null&&(Gt=bn);break}n&&Gt&&Ce.alternate===null&&i(Y,Gt),V=m(Ce,V,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce,Gt=bn}if(Jt===Q.length)return a(Y,Gt),De&&Ea(Y,Jt),Ht;if(Gt===null){for(;Jt<Q.length;Jt++)Gt=mt(Y,Q[Jt],ht),Gt!==null&&(V=m(Gt,V,Jt),pe===null?Ht=Gt:pe.sibling=Gt,pe=Gt);return De&&Ea(Y,Jt),Ht}for(Gt=c(Gt);Jt<Q.length;Jt++)bn=it(Gt,Y,Jt,Q[Jt],ht),bn!==null&&(n&&bn.alternate!==null&&Gt.delete(bn.key===null?Jt:bn.key),V=m(bn,V,Jt),pe===null?Ht=bn:pe.sibling=bn,pe=bn);return n&&Gt.forEach(function($s){return i(Y,$s)}),De&&Ea(Y,Jt),Ht}function qt(Y,V,Q,ht){if(Q==null)throw Error(s(151));for(var Ht=null,pe=null,Gt=V,Jt=V=0,bn=null,Ce=Q.next();Gt!==null&&!Ce.done;Jt++,Ce=Q.next()){Gt.index>Jt?(bn=Gt,Gt=null):bn=Gt.sibling;var $s=nt(Y,Gt,Ce.value,ht);if($s===null){Gt===null&&(Gt=bn);break}n&&Gt&&$s.alternate===null&&i(Y,Gt),V=m($s,V,Jt),pe===null?Ht=$s:pe.sibling=$s,pe=$s,Gt=bn}if(Ce.done)return a(Y,Gt),De&&Ea(Y,Jt),Ht;if(Gt===null){for(;!Ce.done;Jt++,Ce=Q.next())Ce=mt(Y,Ce.value,ht),Ce!==null&&(V=m(Ce,V,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce);return De&&Ea(Y,Jt),Ht}for(Gt=c(Gt);!Ce.done;Jt++,Ce=Q.next())Ce=it(Gt,Y,Jt,Ce.value,ht),Ce!==null&&(n&&Ce.alternate!==null&&Gt.delete(Ce.key===null?Jt:Ce.key),V=m(Ce,V,Jt),pe===null?Ht=Ce:pe.sibling=Ce,pe=Ce);return n&&Gt.forEach(function(YS){return i(Y,YS)}),De&&Ea(Y,Jt),Ht}function Fe(Y,V,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var Ht=Q.key;V!==null;){if(V.key===Ht){if(Ht=Q.type,Ht===E){if(V.tag===7){a(Y,V.sibling),ht=f(V,Q.props.children),ht.return=Y,Y=ht;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Mg(Ht)===V.type){a(Y,V.sibling),ht=f(V,Q.props),No(ht,Q),ht.return=Y,Y=ht;break t}a(Y,V);break}else i(Y,V);V=V.sibling}Q.type===E?(ht=Sa(Q.props.children,Y.mode,ht,Q.key),ht.return=Y,Y=ht):(ht=Gl(Q.type,Q.key,Q.props,null,Y.mode,ht),No(ht,Q),ht.return=Y,Y=ht)}return M(Y);case x:t:{for(Ht=Q.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),ht=f(V,Q.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,V);break}else i(Y,V);V=V.sibling}ht=$u(Q,Y.mode,ht),ht.return=Y,Y=ht}return M(Y);case W:return Ht=Q._init,Q=Ht(Q._payload),Fe(Y,V,Q,ht)}if(ft(Q))return te(Y,V,Q,ht);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(s(150));return Q=Ht.call(Q),qt(Y,V,Q,ht)}if(typeof Q.then=="function")return Fe(Y,V,ac(Q),ht);if(Q.$$typeof===L)return Fe(Y,V,Yl(Y,Q),ht);rc(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),ht=f(V,Q),ht.return=Y,Y=ht):(a(Y,V),ht=Ju(Q,Y.mode,ht),ht.return=Y,Y=ht),M(Y)):a(Y,V)}return function(Y,V,Q,ht){try{Uo=0;var Ht=Fe(Y,V,Q,ht);return hr=null,Ht}catch(Gt){if(Gt===Eo||Gt===ql)throw Gt;var pe=ni(29,Gt,null,Y.mode);return pe.lanes=ht,pe.return=Y,pe}finally{}}}var fr=Eg(!0),bg=Eg(!1),gi=tt(null),Pi=null;function Bs(n){var i=n.alternate;xt(gn,gn.current&1),xt(gi,n),Pi===null&&(i===null||or.current!==null||i.memoizedState!==null)&&(Pi=n)}function Tg(n){if(n.tag===22){if(xt(gn,gn.current),xt(gi,n),Pi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Pi=n)}}else Fs()}function Fs(){xt(gn,gn.current),xt(gi,gi.current)}function ss(n){vt(gi),Pi===n&&(Pi=null),vt(gn)}var gn=tt(0);function oc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Mf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Uh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:g({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Nh={enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ri(),f=Ps(c);f.payload=i,a!=null&&(f.callback=a),i=Is(n,f,c),i!==null&&(oi(i,n,c),To(i,n,c))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ri(),f=Ps(c);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Is(n,f,c),i!==null&&(oi(i,n,c),To(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ri(),c=Ps(a);c.tag=2,i!=null&&(c.callback=i),i=Is(n,c,a),i!==null&&(oi(i,n,a),To(i,n,a))}};function Ag(n,i,a,c,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!mo(a,c)||!mo(f,m):!0}function Rg(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Nh.enqueueReplaceState(i,i.state,null)}function Da(n,i){var a=i;if("ref"in i){a={};for(var c in i)c!=="ref"&&(a[c]=i[c])}if(n=n.defaultProps){a===i&&(a=g({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var lc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function wg(n){lc(n)}function Cg(n){console.error(n)}function Dg(n){lc(n)}function cc(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function Lg(n,i,a){try{var c=n.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Oh(n,i,a){return a=Ps(a),a.tag=3,a.payload={element:null},a.callback=function(){cc(n,i)},a}function Ug(n){return n=Ps(n),n.tag=3,n}function Ng(n,i,a,c){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){Lg(i,a,c)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(n.callback=function(){Lg(i,a,c),typeof f!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function Yx(n,i,a,c,f){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=a.alternate,i!==null&&xo(i,a,f,!0),a=gi.current,a!==null){switch(a.tag){case 13:return Pi===null?af():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=f,c===ch?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([c]):i.add(c),of(n,c,f)),!1;case 22:return a.flags|=65536,c===ch?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([c]):a.add(c)),of(n,c,f)),!1}throw Error(s(435,a.tag))}return of(n,c,f),af(),!1}if(De)return i=gi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,c!==nh&&(n=Error(s(422),{cause:c}),yo(fi(n,a)))):(c!==nh&&(i=Error(s(423),{cause:c}),yo(fi(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=fi(c,a),f=Oh(n.stateNode,c,f),fh(n,f),nn!==4&&(nn=2)),!1;var m=Error(s(520),{cause:c});if(m=fi(m,a),Ho===null?Ho=[m]:Ho.push(m),nn!==4&&(nn=2),i===null)return!0;c=fi(c,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=Oh(a.stateNode,c,n),fh(a,n),!1;case 1:if(i=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ws===null||!Ws.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=Ug(f),Ng(f,n,a,c),fh(a,f),!1}a=a.return}while(a!==null);return!1}var Og=Error(s(461)),Mn=!1;function Dn(n,i,a,c){i.child=n===null?bg(i,null,a,c):fr(i,n.child,a,c)}function Pg(n,i,a,c,f){a=a.render;var m=i.ref;if("ref"in c){var M={};for(var T in c)T!=="ref"&&(M[T]=c[T])}else M=c;return Ra(i),c=_h(n,i,a,M,m,f),T=vh(),n!==null&&!Mn?(yh(n,i,f),as(n,i,f)):(De&&T&&th(i),i.flags|=1,Dn(n,i,c,f),i.child)}function Ig(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Qu(m)&&m.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=m,zg(n,i,m,c,f)):(n=Gl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Gh(n,f)){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(M,c)&&n.ref===i.ref)return as(n,i,f)}return i.flags|=1,n=Ji(m,c),n.ref=i.ref,n.return=i,i.child=n}function zg(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(mo(m,c)&&n.ref===i.ref)if(Mn=!1,i.pendingProps=c=m,Gh(n,f))(n.flags&131072)!==0&&(Mn=!0);else return i.lanes=n.lanes,as(n,i,f)}return Ph(n,i,a,c,f)}function Bg(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,n!==null){for(f=i.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~c}else i.childLanes=0,i.child=null;return Fg(n,i,c,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&jl(i,m!==null?m.cachePool:null),m!==null?zm(i,m):ph(),Tg(i);else return i.lanes=i.childLanes=536870912,Fg(n,i,m!==null?m.baseLanes|a:a,a)}else m!==null?(jl(i,m.cachePool),zm(i,m),Fs(),i.memoizedState=null):(n!==null&&jl(i,null),ph(),Fs());return Dn(n,i,f,a),i.child}function Fg(n,i,a,c){var f=lh();return f=f===null?null:{parent:mn._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&jl(i,null),ph(),Tg(i),n!==null&&xo(n,i,c,!0),null}function uc(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function Ph(n,i,a,c,f){return Ra(i),a=_h(n,i,a,c,void 0,f),c=vh(),n!==null&&!Mn?(yh(n,i,f),as(n,i,f)):(De&&c&&th(i),i.flags|=1,Dn(n,i,a,f),i.child)}function Hg(n,i,a,c,f,m){return Ra(i),i.updateQueue=null,a=Fm(i,c,a,f),Bm(n),c=vh(),n!==null&&!Mn?(yh(n,i,m),as(n,i,m)):(De&&c&&th(i),i.flags|=1,Dn(n,i,a,m),i.child)}function Vg(n,i,a,c,f){if(Ra(i),i.stateNode===null){var m=nr,M=a.contextType;typeof M=="object"&&M!==null&&(m=zn(M)),m=new a(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Nh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},uh(i),M=a.contextType,m.context=typeof M=="object"&&M!==null?zn(M):nr,m.state=i.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Uh(i,a,M,c),m.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Nh.enqueueReplaceState(m,m.state,null),Ro(i,c,m,f),Ao(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var T=i.memoizedProps,P=Da(a,T);m.props=P;var $=m.context,ct=a.contextType;M=nr,typeof ct=="object"&&ct!==null&&(M=zn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ct||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||$!==M)&&Rg(i,m,c,M),Os=!1;var nt=i.memoizedState;m.state=nt,Ro(i,c,m,f),Ao(),$=i.memoizedState,T||nt!==$||Os?(typeof mt=="function"&&(Uh(i,a,mt,c),$=i.memoizedState),(P=Os||Ag(i,a,P,c,nt,$,M))?(ct||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=$),m.props=c,m.state=$,m.context=M,c=P):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,hh(n,i),M=i.memoizedProps,ct=Da(a,M),m.props=ct,mt=i.pendingProps,nt=m.context,$=a.contextType,P=nr,typeof $=="object"&&$!==null&&(P=zn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==mt||nt!==P)&&Rg(i,m,c,P),Os=!1,nt=i.memoizedState,m.state=nt,Ro(i,c,m,f),Ao();var it=i.memoizedState;M!==mt||nt!==it||Os||n!==null&&n.dependencies!==null&&Wl(n.dependencies)?(typeof T=="function"&&(Uh(i,a,T,c),it=i.memoizedState),(ct=Os||Ag(i,a,ct,c,nt,it,P)||n!==null&&n.dependencies!==null&&Wl(n.dependencies))?($||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,it,P),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,it,P)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),m.props=c,m.state=it,m.context=P,c=ct):(typeof m.componentDidUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===n.memoizedProps&&nt===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,uc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=fr(i,n.child,null,f),i.child=fr(i,null,a,f)):Dn(n,i,a,f),i.memoizedState=m.state,n=i.child):n=as(n,i,f),n}function Gg(n,i,a,c){return vo(),i.flags|=256,Dn(n,i,a,c),i.child}var Ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zh(n){return{baseLanes:n,cachePool:Cm()}}function Bh(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=_i),n}function kg(n,i,a){var c=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=n!==null&&n.memoizedState===null?!1:(gn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,n===null){if(De){if(f?Bs(i):Fs(),De){var T=en,P;if(P=T){t:{for(P=T,T=Oi;P.nodeType!==8;){if(!T){T=null;break t}if(P=Ti(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ma!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},P=ni(18,null,null,0),P.stateNode=T,P.return=i,i.child=P,Gn=i,en=null,P=!0):P=!1}P||Ta(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Mf(T)?i.lanes=32:i.lanes=536870912,null;ss(i)}return T=c.children,c=c.fallback,f?(Fs(),f=i.mode,T=hc({mode:"hidden",children:T},f),c=Sa(c,f,a,null),T.return=i,c.return=i,T.sibling=c,i.child=T,f=i.child,f.memoizedState=zh(a),f.childLanes=Bh(n,M,a),i.memoizedState=Ih,c):(Bs(i),Fh(i,T))}if(P=n.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(m)i.flags&256?(Bs(i),i.flags&=-257,i=Hh(n,i,a)):i.memoizedState!==null?(Fs(),i.child=n.child,i.flags|=128,i=null):(Fs(),f=c.fallback,T=i.mode,c=hc({mode:"visible",children:c.children},T),f=Sa(f,T,a,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,fr(i,n.child,null,a),c=i.child,c.memoizedState=zh(a),c.childLanes=Bh(n,M,a),i.memoizedState=Ih,i=f);else if(Bs(i),Mf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var $=M.dgst;M=$,c=Error(s(419)),c.stack="",c.digest=M,yo({value:c,source:null,stack:null}),i=Hh(n,i,a)}else if(Mn||xo(n,i,a,!1),M=(a&n.childLanes)!==0,Mn||M){if(M=Ke,M!==null&&(c=a&-a,c=(c&42)!==0?1:je(c),c=(c&(M.suspendedLanes|a))!==0?0:c,c!==0&&c!==P.retryLane))throw P.retryLane=c,er(n,c),oi(M,n,c),Og;T.data==="$?"||af(),i=Hh(n,i,a)}else T.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=P.treeContext,en=Ti(T.nextSibling),Gn=i,De=!0,ba=null,Oi=!1,n!==null&&(pi[mi++]=$i,pi[mi++]=ts,pi[mi++]=Ma,$i=n.id,ts=n.overflow,Ma=i),i=Fh(i,c.children),i.flags|=4096);return i}return f?(Fs(),f=c.fallback,T=i.mode,P=n.child,$=P.sibling,c=Ji(P,{mode:"hidden",children:c.children}),c.subtreeFlags=P.subtreeFlags&65011712,$!==null?f=Ji($,f):(f=Sa(f,T,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,T=n.child.memoizedState,T===null?T=zh(a):(P=T.cachePool,P!==null?($=mn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Cm(),T={baseLanes:T.baseLanes|a,cachePool:P}),f.memoizedState=T,f.childLanes=Bh(n,M,a),i.memoizedState=Ih,c):(Bs(i),a=n.child,n=a.sibling,a=Ji(a,{mode:"visible",children:c.children}),a.return=i,a.sibling=null,n!==null&&(M=i.deletions,M===null?(i.deletions=[n],i.flags|=16):M.push(n)),i.child=a,i.memoizedState=null,a)}function Fh(n,i){return i=hc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function hc(n,i){return n=ni(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Hh(n,i,a){return fr(i,n.child,null,a),n=Fh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Xg(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),sh(n.return,i,a)}function Vh(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Wg(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Dn(n,i,c.children,a),c=gn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xg(n,a,i);else if(n.tag===19)Xg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(xt(gn,c),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&oc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Vh(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&oc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Vh(i,!0,a,null,m);break;case"together":Vh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function as(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xs|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(xo(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Ji(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ji(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Gh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Wl(n)))}function jx(n,i,a){switch(i.tag){case 3:Ot(i,i.stateNode.containerInfo),Ns(i,mn,n.memoizedState.cache),vo();break;case 27:case 5:Zt(i);break;case 4:Ot(i,i.stateNode.containerInfo);break;case 10:Ns(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Bs(i),i.flags|=128,null):(a&i.child.childLanes)!==0?kg(n,i,a):(Bs(i),n=as(n,i,a),n!==null?n.sibling:null);Bs(i);break;case 19:var f=(n.flags&128)!==0;if(c=(a&i.childLanes)!==0,c||(xo(n,i,a,!1),c=(a&i.childLanes)!==0),f){if(c)return Wg(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xt(gn,gn.current),c)break;return null;case 22:case 23:return i.lanes=0,Bg(n,i,a);case 24:Ns(i,mn,n.memoizedState.cache)}return as(n,i,a)}function Yg(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Mn=!0;else{if(!Gh(n,a)&&(i.flags&128)===0)return Mn=!1,jx(n,i,a);Mn=(n.flags&131072)!==0}else Mn=!1,De&&(i.flags&1048576)!==0&&Mm(i,Xl,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var c=i.elementType,f=c._init;if(c=f(c._payload),i.type=c,typeof c=="function")Qu(c)?(n=Da(c,n),i.tag=1,i=Vg(null,i,c,n,a)):(i.tag=0,i=Ph(null,i,c,n,a));else{if(c!=null){if(f=c.$$typeof,f===w){i.tag=11,i=Pg(null,i,c,n,a);break t}else if(f===z){i.tag=14,i=Ig(null,i,c,n,a);break t}}throw i=gt(c)||c,Error(s(306,i,""))}}return i;case 0:return Ph(n,i,i.type,i.pendingProps,a);case 1:return c=i.type,f=Da(c,i.pendingProps),Vg(n,i,c,f,a);case 3:t:{if(Ot(i,i.stateNode.containerInfo),n===null)throw Error(s(387));c=i.pendingProps;var m=i.memoizedState;f=m.element,hh(n,i),Ro(i,c,null,a);var M=i.memoizedState;if(c=M.cache,Ns(i,mn,c),c!==m.cache&&ah(i,[mn],a,!0),Ao(),c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Gg(n,i,c,a);break t}else if(c!==f){f=fi(Error(s(424)),i),yo(f),i=Gg(n,i,c,a);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(en=Ti(n.firstChild),Gn=i,De=!0,ba=null,Oi=!0,a=bg(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vo(),c===f){i=as(n,i,a);break t}Dn(n,i,c,a)}i=i.child}return i;case 26:return uc(n,i),n===null?(a=Z_(i.type,null,i.pendingProps,null))?i.memoizedState=a:De||(a=i.type,n=i.pendingProps,c=Tc(yt.current).createElement(a),c[dn]=i,c[wn]=n,Un(c,a,n),ln(c),i.stateNode=c):i.memoizedState=Z_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Zt(i),n===null&&De&&(c=i.stateNode=j_(i.type,i.pendingProps,yt.current),Gn=i,Oi=!0,f=en,qs(i.type)?(Ef=f,en=Ti(c.firstChild)):en=f),Dn(n,i,i.pendingProps.children,a),uc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&De&&((f=c=en)&&(c=SS(c,i.type,i.pendingProps,Oi),c!==null?(i.stateNode=c,Gn=i,en=Ti(c.firstChild),Oi=!1,f=!0):f=!1),f||Ta(i)),Zt(i),f=i.type,m=i.pendingProps,M=n!==null?n.memoizedProps:null,c=m.children,yf(f,m)?c=null:M!==null&&yf(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=_h(n,i,Fx,null,null,a),Ko._currentValue=f),uc(n,i),Dn(n,i,c,a),i.child;case 6:return n===null&&De&&((n=a=en)&&(a=MS(a,i.pendingProps,Oi),a!==null?(i.stateNode=a,Gn=i,en=null,n=!0):n=!1),n||Ta(i)),null;case 13:return kg(n,i,a);case 4:return Ot(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=fr(i,null,c,a):Dn(n,i,c,a),i.child;case 11:return Pg(n,i,i.type,i.pendingProps,a);case 7:return Dn(n,i,i.pendingProps,a),i.child;case 8:return Dn(n,i,i.pendingProps.children,a),i.child;case 12:return Dn(n,i,i.pendingProps.children,a),i.child;case 10:return c=i.pendingProps,Ns(i,i.type,c.value),Dn(n,i,c.children,a),i.child;case 9:return f=i.type._context,c=i.pendingProps.children,Ra(i),f=zn(f),c=c(f),i.flags|=1,Dn(n,i,c,a),i.child;case 14:return Ig(n,i,i.type,i.pendingProps,a);case 15:return zg(n,i,i.type,i.pendingProps,a);case 19:return Wg(n,i,a);case 31:return c=i.pendingProps,a=i.mode,c={mode:c.mode,children:c.children},n===null?(a=hc(c,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ji(n.child,c),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Bg(n,i,a);case 24:return Ra(i),c=zn(mn),n===null?(f=lh(),f===null&&(f=Ke,m=rh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),i.memoizedState={parent:c,cache:f},uh(i),Ns(i,mn,f)):((n.lanes&a)!==0&&(hh(n,i),Ro(i,null,null,a),Ao()),f=n.memoizedState,m=i.memoizedState,f.parent!==c?(f={parent:c,cache:c},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ns(i,mn,c)):(c=m.cache,Ns(i,mn,c),c!==f.cache&&ah(i,[mn],a,!0))),Dn(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function rs(n){n.flags|=4}function jg(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ev(i)){if(i=gi.current,i!==null&&((be&4194048)===be?Pi!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Pi))throw bo=ch,Dm;n.flags|=8192}}function fc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ut():536870912,n.lanes|=i,gr|=i)}function Oo(n,i){if(!De)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Je(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function qx(n,i,a){var c=i.pendingProps;switch(eh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return a=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),ns(mn),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(_o(i)?rs(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tm())),Je(i),null;case 26:return a=i.memoizedState,n===null?(rs(i),a!==null?(Je(i),jg(i,a)):(Je(i),i.flags&=-16777217)):a?a!==n.memoizedState?(rs(i),Je(i),jg(i,a)):(Je(i),i.flags&=-16777217):(n.memoizedProps!==c&&rs(i),Je(i),i.flags&=-16777217),null;case 27:Ye(i),a=yt.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&rs(i);else{if(!c){if(i.stateNode===null)throw Error(s(166));return Je(i),null}n=J.current,_o(i)?Em(i):(n=j_(f,c,a),i.stateNode=n,rs(i))}return Je(i),null;case 5:if(Ye(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&rs(i);else{if(!c){if(i.stateNode===null)throw Error(s(166));return Je(i),null}if(n=J.current,_o(i))Em(i);else{switch(f=Tc(yt.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(a,{is:c.is}):f.createElement(a)}}n[dn]=i,n[wn]=c;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;t:switch(Un(n,a,c),a){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&rs(i)}}return Je(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&rs(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(s(166));if(n=yt.current,_o(i)){if(n=i.stateNode,a=i.memoizedProps,c=null,f=Gn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[dn]=i,n=!!(n.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||H_(n.nodeValue,a)),n||Ta(i)}else n=Tc(n).createTextNode(c),n[dn]=i,i.stateNode=n}return Je(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=_o(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[dn]=i}else vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),f=!1}else f=Tm(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ss(i),i):(ss(i),null)}if(ss(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=c!==null,n=n!==null&&n.memoizedState!==null,a){c=i.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),fc(i,i.updateQueue),Je(i),null;case 4:return le(),n===null&&pf(i.stateNode.containerInfo),Je(i),null;case 10:return ns(i.type),Je(i),null;case 19:if(vt(gn),f=i.memoizedState,f===null)return Je(i),null;if(c=(i.flags&128)!==0,m=f.rendering,m===null)if(c)Oo(f,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=oc(n),m!==null){for(i.flags|=128,Oo(f,!1),n=m.updateQueue,i.updateQueue=n,fc(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Sm(a,n),a=a.sibling;return xt(gn,gn.current&1|2),i.child}n=n.sibling}f.tail!==null&&ne()>mc&&(i.flags|=128,c=!0,Oo(f,!1),i.lanes=4194304)}else{if(!c)if(n=oc(m),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,fc(i,n),Oo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!De)return Je(i),null}else 2*ne()-f.renderingStartTime>mc&&a!==536870912&&(i.flags|=128,c=!0,Oo(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(n=f.last,n!==null?n.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ne(),i.sibling=null,n=gn.current,xt(gn,c?n&1|2:n&1),i):(Je(i),null);case 22:case 23:return ss(i),mh(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(a&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),a=i.updateQueue,a!==null&&fc(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==a&&(i.flags|=2048),n!==null&&vt(wa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ns(mn),Je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Kx(n,i){switch(eh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ns(mn),le(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Ye(i),null;case 13:if(ss(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));vo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return vt(gn),null;case 4:return le(),null;case 10:return ns(i.type),null;case 22:case 23:return ss(i),mh(),n!==null&&vt(wa),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ns(mn),null;case 25:return null;default:return null}}function qg(n,i){switch(eh(i),i.tag){case 3:ns(mn),le();break;case 26:case 27:case 5:Ye(i);break;case 4:le();break;case 13:ss(i);break;case 19:vt(gn);break;case 10:ns(i.type);break;case 22:case 23:ss(i),mh(),n!==null&&vt(wa);break;case 24:ns(mn)}}function Po(n,i){try{var a=i.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var f=c.next;a=f;do{if((a.tag&n)===n){c=void 0;var m=a.create,M=a.inst;c=m(),M.destroy=c}a=a.next}while(a!==f)}}catch(T){Xe(i,i.return,T)}}function Hs(n,i,a){try{var c=i.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var M=c.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,f=i;var P=a,$=T;try{$()}catch(ct){Xe(f,P,ct)}}}c=c.next}while(c!==m)}}catch(ct){Xe(i,i.return,ct)}}function Kg(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Im(i,a)}catch(c){Xe(n,n.return,c)}}}function Zg(n,i,a){a.props=Da(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(c){Xe(n,i,c)}}function Io(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof a=="function"?n.refCleanup=a(c):a.current=c}}catch(f){Xe(n,i,f)}}function Ii(n,i){var a=n.ref,c=n.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(f){Xe(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Xe(n,i,f)}else a.current=null}function Qg(n){var i=n.type,a=n.memoizedProps,c=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break t;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(f){Xe(n,n.return,f)}}function kh(n,i,a){try{var c=n.stateNode;gS(c,n.type,a,i),c[wn]=i}catch(f){Xe(n,n.return,f)}}function Jg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&qs(n.type)||n.tag===4}function Xh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||Jg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&qs(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bc));else if(c!==4&&(c===27&&qs(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(Wh(n,i,a),n=n.sibling;n!==null;)Wh(n,i,a),n=n.sibling}function dc(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(c===27&&qs(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(dc(n,i,a),n=n.sibling;n!==null;)dc(n,i,a),n=n.sibling}function $g(n){var i=n.stateNode,a=n.memoizedProps;try{for(var c=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Un(i,c,a),i[dn]=n,i[wn]=a}catch(m){Xe(n,n.return,m)}}var os=!1,an=!1,Yh=!1,t_=typeof WeakSet=="function"?WeakSet:Set,En=null;function Zx(n,i){if(n=n.containerInfo,_f=Lc,n=hm(n),Xu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else t:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,$=0,ct=0,mt=n,nt=null;e:for(;;){for(var it;mt!==a||f!==0&&mt.nodeType!==3||(T=M+f),mt!==m||c!==0&&mt.nodeType!==3||(P=M+c),mt.nodeType===3&&(M+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===n)break e;if(nt===a&&++$===f&&(T=M),nt===m&&++ct===c&&(P=M),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:n,selectionRange:a},Lc=!1,En=i;En!==null;)if(i=En,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,En=n;else for(;En!==null;){switch(i=En,m=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,a=i,f=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var te=Da(a.type,f,a.elementType===a.type);n=c.getSnapshotBeforeUpdate(te,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(qt){Xe(a,a.return,qt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Sf(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Sf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,En=n;break}En=i.return}}function e_(n,i,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Vs(n,a),c&4&&Po(5,a);break;case 1:if(Vs(n,a),c&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(M){Xe(a,a.return,M)}else{var f=Da(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(a,a.return,M)}}c&64&&Kg(a),c&512&&Io(a,a.return);break;case 3:if(Vs(n,a),c&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Im(n,i)}catch(M){Xe(a,a.return,M)}}break;case 27:i===null&&c&4&&$g(a);case 26:case 5:Vs(n,a),i===null&&c&4&&Qg(a),c&512&&Io(a,a.return);break;case 12:Vs(n,a);break;case 13:Vs(n,a),c&4&&s_(n,a),c&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=aS.bind(null,a),ES(n,a))));break;case 22:if(c=a.memoizedState!==null||os,!c){i=i!==null&&i.memoizedState!==null||an,f=os;var m=an;os=c,(an=i)&&!m?Gs(n,a,(a.subtreeFlags&8772)!==0):Vs(n,a),os=f,an=m}break;case 30:break;default:Vs(n,a)}}function n_(n){var i=n.alternate;i!==null&&(n.alternate=null,n_(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Cs(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ze=null,Kn=!1;function ls(n,i,a){for(a=a.child;a!==null;)i_(n,i,a),a=a.sibling}function i_(n,i,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:an||Ii(a,i),ls(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ii(a,i);var c=Ze,f=Kn;qs(a.type)&&(Ze=a.stateNode,Kn=!1),ls(n,i,a),Wo(a.stateNode),Ze=c,Kn=f;break;case 5:an||Ii(a,i);case 6:if(c=Ze,f=Kn,Ze=null,ls(n,i,a),Ze=c,Kn=f,Ze!==null)if(Kn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(m){Xe(a,i,m)}else try{Ze.removeChild(a.stateNode)}catch(m){Xe(a,i,m)}break;case 18:Ze!==null&&(Kn?(n=Ze,W_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),$o(n)):W_(Ze,a.stateNode));break;case 4:c=Ze,f=Kn,Ze=a.stateNode.containerInfo,Kn=!0,ls(n,i,a),Ze=c,Kn=f;break;case 0:case 11:case 14:case 15:an||Hs(2,a,i),an||Hs(4,a,i),ls(n,i,a);break;case 1:an||(Ii(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"&&Zg(a,i,c)),ls(n,i,a);break;case 21:ls(n,i,a);break;case 22:an=(c=an)||a.memoizedState!==null,ls(n,i,a),an=c;break;default:ls(n,i,a)}}function s_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{$o(n)}catch(a){Xe(i,i.return,a)}}function Qx(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new t_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new t_),i;default:throw Error(s(435,n.tag))}}function jh(n,i){var a=Qx(n);i.forEach(function(c){var f=rS.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}function ii(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c],m=n,M=i,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(qs(T.type)){Ze=T.stateNode,Kn=!1;break t}break;case 5:Ze=T.stateNode,Kn=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,Kn=!0;break t}T=T.return}if(Ze===null)throw Error(s(160));i_(m,M,f),Ze=null,Kn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)a_(i,n),i=i.sibling}var bi=null;function a_(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ii(i,n),si(n),c&4&&(Hs(3,n,n.return),Po(3,n),Hs(5,n,n.return));break;case 1:ii(i,n),si(n),c&512&&(an||a===null||Ii(a,a.return)),c&64&&os&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var f=bi;if(ii(i,n),si(n),c&512&&(an||a===null||Ii(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=n.memoizedState,a===null)if(c===null)if(n.stateNode===null){t:{c=n.type,a=n.memoizedProps,f=f.ownerDocument||f;e:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ws]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),Un(m,c,a),m[dn]=n,ln(m),c=m;break t;case"link":var M=$_("link","href",f).get(c+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(m=M[T],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}m=f.createElement(c),Un(m,c,a),f.head.appendChild(m);break;case"meta":if(M=$_("meta","content",f).get(c+(a.content||""))){for(T=0;T<M.length;T++)if(m=M[T],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}m=f.createElement(c),Un(m,c,a),f.head.appendChild(m);break;default:throw Error(s(468,c))}m[dn]=n,ln(m),c=m}n.stateNode=c}else tv(f,n.type,n.stateNode);else n.stateNode=J_(f,c,n.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?tv(f,n.type,n.stateNode):J_(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&kh(n,n.memoizedProps,a.memoizedProps)}break;case 27:ii(i,n),si(n),c&512&&(an||a===null||Ii(a,a.return)),a!==null&&c&4&&kh(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ii(i,n),si(n),c&512&&(an||a===null||Ii(a,a.return)),n.flags&32){f=n.stateNode;try{Ni(f,"")}catch(it){Xe(n,n.return,it)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,kh(n,f,a!==null?a.memoizedProps:f)),c&1024&&(Yh=!0);break;case 6:if(ii(i,n),si(n),c&4){if(n.stateNode===null)throw Error(s(162));c=n.memoizedProps,a=n.stateNode;try{a.nodeValue=c}catch(it){Xe(n,n.return,it)}}break;case 3:if(wc=null,f=bi,bi=Ac(i.containerInfo),ii(i,n),bi=f,si(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{$o(i.containerInfo)}catch(it){Xe(n,n.return,it)}Yh&&(Yh=!1,r_(n));break;case 4:c=bi,bi=Ac(n.stateNode.containerInfo),ii(i,n),si(n),bi=c;break;case 12:ii(i,n),si(n);break;case 13:ii(i,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($h=ne()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jh(n,c)));break;case 22:f=n.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=os,ct=an;if(os=$||f,an=ct||P,ii(i,n),an=ct,os=$,si(n),c&8192)t:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||P||os||an||La(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){P=a=i;try{if(m=P.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Xe(P,P.return,it)}}}else if(i.tag===6){if(a===null){P=i;try{P.stateNode.nodeValue=f?"":P.memoizedProps}catch(it){Xe(P,P.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,jh(n,a))));break;case 19:ii(i,n),si(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jh(n,c)));break;case 30:break;case 21:break;default:ii(i,n),si(n)}}function si(n){var i=n.flags;if(i&2){try{for(var a,c=n.return;c!==null;){if(Jg(c)){a=c;break}c=c.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,m=Xh(n);dc(n,m,f);break;case 5:var M=a.stateNode;a.flags&32&&(Ni(M,""),a.flags&=-33);var T=Xh(n);dc(n,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Xh(n);Wh(n,$,P);break;default:throw Error(s(161))}}catch(ct){Xe(n,n.return,ct)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function r_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;r_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Vs(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)e_(n,i.alternate,i),i=i.sibling}function La(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Hs(4,i,i.return),La(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Zg(i,i.return,a),La(i);break;case 27:Wo(i.stateNode);case 26:case 5:Ii(i,i.return),La(i);break;case 22:i.memoizedState===null&&La(i);break;case 30:La(i);break;default:La(i)}n=n.sibling}}function Gs(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,f=n,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Gs(f,m,a),Po(4,m);break;case 1:if(Gs(f,m,a),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){Xe(c,c.return,$)}if(c=m,f=c.updateQueue,f!==null){var T=c.stateNode;try{var P=f.shared.hiddenCallbacks;if(P!==null)for(f.shared.hiddenCallbacks=null,f=0;f<P.length;f++)Pm(P[f],T)}catch($){Xe(c,c.return,$)}}a&&M&64&&Kg(m),Io(m,m.return);break;case 27:$g(m);case 26:case 5:Gs(f,m,a),a&&c===null&&M&4&&Qg(m),Io(m,m.return);break;case 12:Gs(f,m,a);break;case 13:Gs(f,m,a),a&&M&4&&s_(f,m);break;case 22:m.memoizedState===null&&Gs(f,m,a),Io(m,m.return);break;case 30:break;default:Gs(f,m,a)}i=i.sibling}}function qh(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&So(a))}function Kh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&So(n))}function zi(n,i,a,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)o_(n,i,a,c),i=i.sibling}function o_(n,i,a,c){var f=i.flags;switch(i.tag){case 0:case 11:case 15:zi(n,i,a,c),f&2048&&Po(9,i);break;case 1:zi(n,i,a,c);break;case 3:zi(n,i,a,c),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&So(n)));break;case 12:if(f&2048){zi(n,i,a,c),n=i.stateNode;try{var m=i.memoizedProps,M=m.id,T=m.onPostCommit;typeof T=="function"&&T(M,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(P){Xe(i,i.return,P)}}else zi(n,i,a,c);break;case 13:zi(n,i,a,c);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?zi(n,i,a,c):zo(n,i):m._visibility&2?zi(n,i,a,c):(m._visibility|=2,dr(n,i,a,c,(i.subtreeFlags&10256)!==0)),f&2048&&qh(M,i);break;case 24:zi(n,i,a,c),f&2048&&Kh(i.alternate,i);break;default:zi(n,i,a,c)}}function dr(n,i,a,c,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=n,M=i,T=a,P=c,$=M.flags;switch(M.tag){case 0:case 11:case 15:dr(m,M,T,P,f),Po(8,M);break;case 23:break;case 22:var ct=M.stateNode;M.memoizedState!==null?ct._visibility&2?dr(m,M,T,P,f):zo(m,M):(ct._visibility|=2,dr(m,M,T,P,f)),f&&$&2048&&qh(M.alternate,M);break;case 24:dr(m,M,T,P,f),f&&$&2048&&Kh(M.alternate,M);break;default:dr(m,M,T,P,f)}i=i.sibling}}function zo(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,c=i,f=c.flags;switch(c.tag){case 22:zo(a,c),f&2048&&qh(c.alternate,c);break;case 24:zo(a,c),f&2048&&Kh(c.alternate,c);break;default:zo(a,c)}i=i.sibling}}var Bo=8192;function pr(n){if(n.subtreeFlags&Bo)for(n=n.child;n!==null;)l_(n),n=n.sibling}function l_(n){switch(n.tag){case 26:pr(n),n.flags&Bo&&n.memoizedState!==null&&IS(bi,n.memoizedState,n.memoizedProps);break;case 5:pr(n);break;case 3:case 4:var i=bi;bi=Ac(n.stateNode.containerInfo),pr(n),bi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Bo,Bo=16777216,pr(n),Bo=i):pr(n));break;default:pr(n)}}function c_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Fo(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];En=c,h_(c,n)}c_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)u_(n),n=n.sibling}function u_(n){switch(n.tag){case 0:case 11:case 15:Fo(n),n.flags&2048&&Hs(9,n,n.return);break;case 3:Fo(n);break;case 12:Fo(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,pc(n)):Fo(n);break;default:Fo(n)}}function pc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];En=c,h_(c,n)}c_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Hs(8,i,i.return),pc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,pc(i));break;default:pc(i)}n=n.sibling}}function h_(n,i){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Hs(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:So(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,En=c;else t:for(a=n;En!==null;){c=En;var f=c.sibling,m=c.return;if(n_(c),c===a){En=null;break t}if(f!==null){f.return=m,En=f;break t}En=m}}}var Jx={getCacheForType:function(n){var i=zn(mn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},$x=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,ge=null,be=0,Ue=0,ai=null,ks=!1,mr=!1,Zh=!1,cs=0,nn=0,Xs=0,Ua=0,Qh=0,_i=0,gr=0,Ho=null,Zn=null,Jh=!1,$h=0,mc=1/0,gc=null,Ws=null,Ln=0,Ys=null,_r=null,vr=0,tf=0,ef=null,f_=null,Vo=0,nf=null;function ri(){if((Le&2)!==0&&be!==0)return be&-be;if(I.T!==null){var n=ar;return n!==0?n:uf()}return Re()}function d_(){_i===0&&(_i=(be&536870912)===0||De?k():536870912);var n=gi.current;return n!==null&&(n.flags|=32),_i}function oi(n,i,a){(n===Ke&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)&&(yr(n,0),js(n,be,_i,!1)),pt(n,a),((Le&2)===0||n!==Ke)&&(n===Ke&&((Le&2)===0&&(Ua|=a),nn===4&&js(n,be,_i,!1)),Bi(n))}function p_(n,i,a){if((Le&6)!==0)throw Error(s(327));var c=!a&&(i&124)===0&&(i&n.expiredLanes)===0||ee(n,i),f=c?nS(n,i):rf(n,i,!0),m=c;do{if(f===0){mr&&!c&&js(n,i,0,!1);break}else{if(a=n.current.alternate,m&&!tS(a)){f=rf(n,i,!1),m=!1;continue}if(f===2){if(m=i,n.errorRecoveryDisabledLanes&m)var M=0;else M=n.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var T=n;f=Ho;var P=T.current.memoizedState.isDehydrated;if(P&&(yr(T,M).flags|=256),M=rf(T,M,!1),M!==2){if(Zh&&!P){T.errorRecoveryDisabledLanes|=m,Ua|=m,f=4;break t}m=Zn,Zn=f,m!==null&&(Zn===null?Zn=m:Zn.push.apply(Zn,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){yr(n,0),js(n,i,0,!0);break}t:{switch(c=n,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:js(c,i,_i,!ks);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=$h+300-ne(),10<f)){if(js(c,i,_i,!ks),ue(c,0,!0)!==0)break t;c.timeoutHandle=k_(m_.bind(null,c,a,Zn,gc,Jh,i,_i,Ua,gr,ks,m,2,-0,0),f);break t}m_(c,a,Zn,gc,Jh,i,_i,Ua,gr,ks,m,0,-0,0)}}break}while(!0);Bi(n)}function m_(n,i,a,c,f,m,M,T,P,$,ct,mt,nt,it){if(n.timeoutHandle=-1,mt=i.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(qo={stylesheets:null,count:0,unsuspend:PS},l_(i),mt=zS(),mt!==null)){n.cancelPendingCommit=mt(M_.bind(null,n,i,m,a,c,f,M,T,P,ct,1,nt,it)),js(n,m,M,!$);return}M_(n,i,m,a,c,f,M,T,P)}function tS(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!ei(m(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function js(n,i,a,c){i&=~Qh,i&=~Ua,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var f=i;0<f;){var m=31-wt(f),M=1<<m;c[m]=-1,f&=~M}a!==0&&Nt(n,a,i)}function _c(){return(Le&6)===0?(Go(0),!1):!0}function sf(){if(ge!==null){if(Ue===0)var n=ge.return;else n=ge,es=Aa=null,xh(n),hr=null,Uo=0,n=ge;for(;n!==null;)qg(n.alternate,n),n=n.return;ge=null}}function yr(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,vS(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),sf(),Ke=n,ge=a=Ji(n.current,null),be=i,Ue=0,ai=null,ks=!1,mr=ee(n,i),Zh=!1,gr=_i=Qh=Ua=Xs=nn=0,Zn=Ho=null,Jh=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var f=31-wt(c),m=1<<f;i|=n[f],c&=~m}return cs=i,Fl(),a}function g_(n,i){he=null,I.H=sc,i===Eo||i===ql?(i=Nm(),Ue=3):i===Dm?(i=Nm(),Ue=4):Ue=i===Og?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,ge===null&&(nn=1,cc(n,fi(i,n.current)))}function __(){var n=I.H;return I.H=sc,n===null?sc:n}function v_(){var n=I.A;return I.A=Jx,n}function af(){nn=4,ks||(be&4194048)!==be&&gi.current!==null||(mr=!0),(Xs&134217727)===0&&(Ua&134217727)===0||Ke===null||js(Ke,be,_i,!1)}function rf(n,i,a){var c=Le;Le|=2;var f=__(),m=v_();(Ke!==n||be!==i)&&(gc=null,yr(n,i)),i=!1;var M=nn;t:do try{if(Ue!==0&&ge!==null){var T=ge,P=ai;switch(Ue){case 8:sf(),M=6;break t;case 3:case 2:case 9:case 6:gi.current===null&&(i=!0);var $=Ue;if(Ue=0,ai=null,xr(n,T,P,$),a&&mr){M=0;break t}break;default:$=Ue,Ue=0,ai=null,xr(n,T,P,$)}}eS(),M=nn;break}catch(ct){g_(n,ct)}while(!0);return i&&n.shellSuspendCounter++,es=Aa=null,Le=c,I.H=f,I.A=m,ge===null&&(Ke=null,be=0,Fl()),M}function eS(){for(;ge!==null;)y_(ge)}function nS(n,i){var a=Le;Le|=2;var c=__(),f=v_();Ke!==n||be!==i?(gc=null,mc=ne()+500,yr(n,i)):mr=ee(n,i);t:do try{if(Ue!==0&&ge!==null){i=ge;var m=ai;e:switch(Ue){case 1:Ue=0,ai=null,xr(n,i,m,1);break;case 2:case 9:if(Lm(m)){Ue=0,ai=null,x_(i);break}i=function(){Ue!==2&&Ue!==9||Ke!==n||(Ue=7),Bi(n)},m.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Lm(m)?(Ue=0,ai=null,x_(i)):(Ue=0,ai=null,xr(n,i,m,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var T=ge;if(!M||ev(M)){Ue=0,ai=null;var P=T.sibling;if(P!==null)ge=P;else{var $=T.return;$!==null?(ge=$,vc($)):ge=null}break e}}Ue=0,ai=null,xr(n,i,m,5);break;case 6:Ue=0,ai=null,xr(n,i,m,6);break;case 8:sf(),nn=6;break t;default:throw Error(s(462))}}iS();break}catch(ct){g_(n,ct)}while(!0);return es=Aa=null,I.H=c,I.A=f,Le=a,ge!==null?0:(Ke=null,be=0,Fl(),nn)}function iS(){for(;ge!==null&&!Wn();)y_(ge)}function y_(n){var i=Yg(n.alternate,n,cs);n.memoizedProps=n.pendingProps,i===null?vc(n):ge=i}function x_(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=Hg(a,i,i.pendingProps,i.type,void 0,be);break;case 11:i=Hg(a,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:xh(i);default:qg(a,i),i=ge=Sm(i,cs),i=Yg(a,i,cs)}n.memoizedProps=n.pendingProps,i===null?vc(n):ge=i}function xr(n,i,a,c){es=Aa=null,xh(i),hr=null,Uo=0;var f=i.return;try{if(Yx(n,f,i,a,be)){nn=1,cc(n,fi(a,n.current)),ge=null;return}}catch(m){if(f!==null)throw ge=f,m;nn=1,cc(n,fi(a,n.current)),ge=null;return}i.flags&32768?(De||c===1?n=!0:mr||(be&536870912)!==0?n=!1:(ks=n=!0,(c===2||c===9||c===3||c===6)&&(c=gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),S_(i,n)):vc(i)}function vc(n){var i=n;do{if((i.flags&32768)!==0){S_(i,ks);return}n=i.return;var a=qx(i.alternate,i,cs);if(a!==null){ge=a;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=n}while(i!==null);nn===0&&(nn=5)}function S_(n,i){do{var a=Kx(n.alternate,n);if(a!==null){a.flags&=32767,ge=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){ge=n;return}ge=n=a}while(n!==null);nn=6,ge=null}function M_(n,i,a,c,f,m,M,T,P){n.cancelPendingCommit=null;do yc();while(Ln!==0);if((Le&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(m=i.lanes|i.childLanes,m|=Ku,It(n,a,m,M,T,P),n===Ke&&(ge=Ke=null,be=0),_r=i,Ys=n,vr=a,tf=m,ef=f,f_=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,oS(O,function(){return R_(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=I.T,I.T=null,f=Z.p,Z.p=2,M=Le,Le|=4;try{Zx(n,i,a)}finally{Le=M,Z.p=f,I.T=c}}Ln=1,E_(),b_(),T_()}}function E_(){if(Ln===1){Ln=0;var n=Ys,i=_r,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var c=Z.p;Z.p=2;var f=Le;Le|=4;try{a_(i,n);var m=vf,M=hm(n.containerInfo),T=m.focusedElem,P=m.selectionRange;if(M!==T&&T&&T.ownerDocument&&um(T.ownerDocument.documentElement,T)){if(P!==null&&Xu(T)){var $=P.start,ct=P.end;if(ct===void 0&&(ct=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ct,T.value.length);else{var mt=T.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=T.textContent.length,qt=Math.min(P.start,te),Fe=P.end===void 0?qt:Math.min(P.end,te);!it.extend&&qt>Fe&&(M=Fe,Fe=qt,qt=M);var Y=cm(T,qt),V=cm(T,Fe);if(Y&&V&&(it.rangeCount!==1||it.anchorNode!==Y.node||it.anchorOffset!==Y.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),it.removeAllRanges(),qt>Fe?(it.addRange(Q),it.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),it.addRange(Q))}}}}for(mt=[],it=T;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var ht=mt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Lc=!!_f,vf=_f=null}finally{Le=f,Z.p=c,I.T=a}}n.current=i,Ln=2}}function b_(){if(Ln===2){Ln=0;var n=Ys,i=_r,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var c=Z.p;Z.p=2;var f=Le;Le|=4;try{e_(n,i.alternate,i)}finally{Le=f,Z.p=c,I.T=a}}Ln=3}}function T_(){if(Ln===4||Ln===3){Ln=0,ye();var n=Ys,i=_r,a=vr,c=f_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,_r=Ys=null,A_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ws=null),on(a),i=i.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=I.T,f=Z.p,Z.p=2,I.T=null;try{for(var m=n.onRecoverableError,M=0;M<c.length;M++){var T=c[M];m(T.value,{componentStack:T.stack})}}finally{I.T=i,Z.p=f}}(vr&3)!==0&&yc(),Bi(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===nf?Vo++:(Vo=0,nf=n):Vo=0,Go(0)}}function A_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,So(i)))}function yc(n){return E_(),b_(),T_(),R_()}function R_(){if(Ln!==5)return!1;var n=Ys,i=tf;tf=0;var a=on(vr),c=I.T,f=Z.p;try{Z.p=32>a?32:a,I.T=null,a=ef,ef=null;var m=Ys,M=vr;if(Ln=0,_r=Ys=null,vr=0,(Le&6)!==0)throw Error(s(331));var T=Le;if(Le|=4,u_(m.current),o_(m,m.current,M,a),Le=T,Go(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ut,m)}catch{}return!0}finally{Z.p=f,I.T=c,A_(n,i)}}function w_(n,i,a){i=fi(a,i),i=Oh(n.stateNode,i,2),n=Is(n,i,2),n!==null&&(pt(n,2),Bi(n))}function Xe(n,i,a){if(n.tag===3)w_(n,n,a);else for(;i!==null;){if(i.tag===3){w_(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ws===null||!Ws.has(c))){n=fi(a,n),a=Ug(2),c=Is(i,a,2),c!==null&&(Ng(a,c,i,n),pt(c,2),Bi(c));break}}i=i.return}}function of(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $x;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(Zh=!0,f.add(a),n=sS.bind(null,n,i,a),i.then(n,n))}function sS(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Ke===n&&(be&a)===a&&(nn===4||nn===3&&(be&62914560)===be&&300>ne()-$h?(Le&2)===0&&yr(n,0):Qh|=a,gr===be&&(gr=0)),Bi(n)}function C_(n,i){i===0&&(i=Ut()),n=er(n,i),n!==null&&(pt(n,i),Bi(n))}function aS(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),C_(n,a)}function rS(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(i),C_(n,a)}function oS(n,i){return de(n,i)}var xc=null,Sr=null,lf=!1,Sc=!1,cf=!1,Na=0;function Bi(n){n!==Sr&&n.next===null&&(Sr===null?xc=Sr=n:Sr=Sr.next=n),Sc=!0,lf||(lf=!0,cS())}function Go(n,i){if(!cf&&Sc){cf=!0;do for(var a=!1,c=xc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var M=c.suspendedLanes,T=c.pingedLanes;m=(1<<31-wt(42|n)+1)-1,m&=f&~(M&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,N_(c,m))}else m=be,m=ue(c,c===Ke?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||ee(c,m)||(a=!0,N_(c,m));c=c.next}while(a);cf=!1}}function lS(){D_()}function D_(){Sc=lf=!1;var n=0;Na!==0&&(_S()&&(n=Na),Na=0);for(var i=ne(),a=null,c=xc;c!==null;){var f=c.next,m=L_(c,i);m===0?(c.next=null,a===null?xc=f:a.next=f,f===null&&(Sr=a)):(a=c,(n!==0||(m&3)!==0)&&(Sc=!0)),c=f}Go(n)}function L_(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var M=31-wt(m),T=1<<M,P=f[M];P===-1?((T&a)===0||(T&c)!==0)&&(f[M]=Ie(T,i)):P<=i&&(n.expiredLanes|=T),m&=~T}if(i=Ke,a=be,a=ue(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,a===0||n===i&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&F(c),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||ee(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(c!==null&&F(c),on(a)){case 2:case 8:a=Vt;break;case 32:a=O;break;case 268435456:a=et;break;default:a=O}return c=U_.bind(null,n),a=de(a,c),n.callbackPriority=i,n.callbackNode=a,i}return c!==null&&c!==null&&F(c),n.callbackPriority=2,n.callbackNode=null,2}function U_(n,i){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(yc()&&n.callbackNode!==a)return null;var c=be;return c=ue(n,n===Ke?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(p_(n,c,i),L_(n,ne()),n.callbackNode!=null&&n.callbackNode===a?U_.bind(null,n):null)}function N_(n,i){if(yc())return null;p_(n,i,!0)}function cS(){yS(function(){(Le&6)!==0?de(Pe,lS):D_()})}function uf(){return Na===0&&(Na=k()),Na}function O_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ul(""+n)}function P_(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function uS(n,i,a,c,f){if(i==="submit"&&a&&a.stateNode===f){var m=O_((f[wn]||null).action),M=c.submitter;M&&(i=(i=M[wn]||null)?O_(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var T=new Il("action","action",null,c,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Na!==0){var P=M?P_(f,M):new FormData(f);Ch(a,{pending:!0,data:P,method:f.method,action:m},null,P)}}else typeof m=="function"&&(T.preventDefault(),P=M?P_(f,M):new FormData(f),Ch(a,{pending:!0,data:P,method:f.method,action:m},m,P))},currentTarget:f}]})}}for(var hf=0;hf<qu.length;hf++){var ff=qu[hf],hS=ff.toLowerCase(),fS=ff[0].toUpperCase()+ff.slice(1);Ei(hS,"on"+fS)}Ei(pm,"onAnimationEnd"),Ei(mm,"onAnimationIteration"),Ei(gm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Cx,"onTransitionRun"),Ei(Dx,"onTransitionStart"),Ei(Lx,"onTransitionCancel"),Ei(_m,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function I_(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;t:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var T=c[M],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=$;try{m(f)}catch(ct){lc(ct)}f.currentTarget=null,m=P}else for(M=0;M<c.length;M++){if(T=c[M],P=T.instance,$=T.currentTarget,T=T.listener,P!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=$;try{m(f)}catch(ct){lc(ct)}f.currentTarget=null,m=P}}}}function _e(n,i){var a=i[ma];a===void 0&&(a=i[ma]=new Set);var c=n+"__bubble";a.has(c)||(z_(i,n,2,!1),a.add(c))}function df(n,i,a){var c=0;i&&(c|=4),z_(a,n,c,i)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function pf(n){if(!n[Mc]){n[Mc]=!0,Dl.forEach(function(a){a!=="selectionchange"&&(dS.has(a)||df(a,!1,n),df(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Mc]||(i[Mc]=!0,df("selectionchange",!1,i))}}function z_(n,i,a,c){switch(ov(i)){case 2:var f=HS;break;case 8:f=VS;break;default:f=wf}a=f.bind(null,i,a,n),f=void 0,!Pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function mf(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)t:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var T=c.stateNode.containerInfo;if(T===f)break;if(M===4)for(M=c.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;T!==null;){if(M=Yi(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){c=m=M;continue t}T=T.parentNode}}c=c.return}Xp(function(){var $=m,ct=Nu(a),mt=[];t:{var nt=vm.get(n);if(nt!==void 0){var it=Il,te=n;switch(n){case"keypress":if(Ol(a)===0)break t;case"keydown":case"keyup":it=ox;break;case"focusin":te="focus",it=Fu;break;case"focusout":te="blur",it=Fu;break;case"beforeblur":case"afterblur":it=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=ux;break;case pm:case mm:case gm:it=Jy;break;case _m:it=fx;break;case"scroll":case"scrollend":it=jy;break;case"wheel":it=px;break;case"copy":case"cut":case"paste":it=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Kp;break;case"toggle":case"beforetoggle":it=gx}var qt=(i&4)!==0,Fe=!qt&&(n==="scroll"||n==="scrollend"),Y=qt?nt!==null?nt+"Capture":null:nt;qt=[];for(var V=$,Q;V!==null;){var ht=V;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||Y===null||(ht=oo(V,Y),ht!=null&&qt.push(Xo(V,ht,Q))),Fe)break;V=V.return}0<qt.length&&(nt=new it(nt,te,null,a,ct),mt.push({event:nt,listeners:qt}))}}if((i&7)===0){t:{if(nt=n==="mouseover"||n==="pointerover",it=n==="mouseout"||n==="pointerout",nt&&a!==Uu&&(te=a.relatedTarget||a.fromElement)&&(Yi(te)||te[Yn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=$,te=te?Yi(te):null,te!==null&&(Fe=l(te),qt=te.tag,te!==Fe||qt!==5&&qt!==27&&qt!==6)&&(te=null)):(it=null,te=$),it!==te)){if(qt=jp,ht="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(qt=Kp,ht="onPointerLeave",Y="onPointerEnter",V="pointer"),Fe=it==null?nt:_a(it),Q=te==null?nt:_a(te),nt=new qt(ht,V+"leave",it,a,ct),nt.target=Fe,nt.relatedTarget=Q,ht=null,Yi(ct)===$&&(qt=new qt(Y,V+"enter",te,a,ct),qt.target=Q,qt.relatedTarget=Fe,ht=qt),Fe=ht,it&&te)e:{for(qt=it,Y=te,V=0,Q=qt;Q;Q=Mr(Q))V++;for(Q=0,ht=Y;ht;ht=Mr(ht))Q++;for(;0<V-Q;)qt=Mr(qt),V--;for(;0<Q-V;)Y=Mr(Y),Q--;for(;V--;){if(qt===Y||Y!==null&&qt===Y.alternate)break e;qt=Mr(qt),Y=Mr(Y)}qt=null}else qt=null;it!==null&&B_(mt,nt,it,qt,!1),te!==null&&Fe!==null&&B_(mt,Fe,te,qt,!0)}}t:{if(nt=$?_a($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=im;else if(em(nt))if(sm)Ht=Ax;else{Ht=bx;var pe=Ex}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Lu($.elementType)&&(Ht=im):Ht=Tx;if(Ht&&(Ht=Ht(n,$))){nm(mt,Ht,a,ct);break t}pe&&pe(n,nt,$),n==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&In(nt,"number",nt.value)}switch(pe=$?_a($):window,n){case"focusin":(em(pe)||pe.contentEditable==="true")&&(Ja=pe,Wu=$,go=null);break;case"focusout":go=Wu=Ja=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,fm(mt,a,ct);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":fm(mt,a,ct)}var Gt;if(Vu)t:{switch(n){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Qa?$p(n,a)&&(Jt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Zp&&a.locale!=="ko"&&(Qa||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Qa&&(Gt=Wp()):(Us=ct,Iu="value"in Us?Us.value:Us.textContent,Qa=!0)),pe=Ec($,Jt),0<pe.length&&(Jt=new qp(Jt,n,null,a,ct),mt.push({event:Jt,listeners:pe}),Gt?Jt.data=Gt:(Gt=tm(a),Gt!==null&&(Jt.data=Gt)))),(Gt=vx?yx(n,a):xx(n,a))&&(Jt=Ec($,"onBeforeInput"),0<Jt.length&&(pe=new qp("onBeforeInput","beforeinput",null,a,ct),mt.push({event:pe,listeners:Jt}),pe.data=Gt)),uS(mt,n,$,a,ct)}I_(mt,i)})}function Xo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ec(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=oo(n,a),f!=null&&c.unshift(Xo(n,f,m)),f=oo(n,i),f!=null&&c.push(Xo(n,f,m))),n.tag===3)return c;n=n.return}return[]}function Mr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function B_(n,i,a,c,f){for(var m=i._reactName,M=[];a!==null&&a!==c;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===c)break;T!==5&&T!==26&&T!==27||$===null||(P=$,f?($=oo(a,m),$!=null&&M.unshift(Xo(a,$,P))):f||($=oo(a,m),$!=null&&M.push(Xo(a,$,P)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function F_(n){return(typeof n=="string"?n:""+n).replace(pS,`
`).replace(mS,"")}function H_(n,i){return i=F_(i),F_(n)===i}function bc(){}function Be(n,i,a,c,f,m){switch(a){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Ni(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Ni(n,""+c);break;case"className":Ct(n,"class",c);break;case"tabIndex":Ct(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(n,a,c);break;case"style":Gp(n,c,m);break;case"data":if(i!=="object"){Ct(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=Ul(""+c),n.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(i!=="input"&&Be(n,i,"name",f.name,f,null),Be(n,i,"formEncType",f.formEncType,f,null),Be(n,i,"formMethod",f.formMethod,f,null),Be(n,i,"formTarget",f.formTarget,f,null)):(Be(n,i,"encType",f.encType,f,null),Be(n,i,"method",f.method,f,null),Be(n,i,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=Ul(""+c),n.setAttribute(a,c);break;case"onClick":c!=null&&(n.onclick=bc);break;case"onScroll":c!=null&&_e("scroll",n);break;case"onScrollEnd":c!=null&&_e("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(a=c.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}a=Ul(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""+c):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":c===!0?n.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,c):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(a,c):n.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(a):n.setAttribute(a,c);break;case"popover":_e("beforetoggle",n),_e("toggle",n),Et(n,"popover",c);break;case"xlinkActuate":Dt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Dt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Dt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Dt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Dt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Dt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Dt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Et(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wy.get(a)||a,Et(n,a,c))}}function gf(n,i,a,c,f,m){switch(a){case"style":Gp(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(a=c.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof c=="string"?Ni(n,c):(typeof c=="number"||typeof c=="bigint")&&Ni(n,""+c);break;case"onScroll":c!=null&&_e("scroll",n);break;case"onScrollEnd":c!=null&&_e("scrollend",n);break;case"onClick":c!=null&&(n.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ll.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),m=n[wn]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(i,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,c,f);break t}a in n?n[a]=c:c===!0?n.setAttribute(a,""):Et(n,a,c)}}}function Un(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",n),_e("load",n);var c=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var M=a[m];if(M!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(n,i,m,M,a,null)}}f&&Be(n,i,"srcSet",a.srcSet,a,null),c&&Be(n,i,"src",a.src,a,null);return;case"input":_e("invalid",n);var T=m=M=f=null,P=null,$=null;for(c in a)if(a.hasOwnProperty(c)){var ct=a[c];if(ct!=null)switch(c){case"name":f=ct;break;case"type":M=ct;break;case"checked":P=ct;break;case"defaultChecked":$=ct;break;case"value":m=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:Be(n,i,c,ct,a,null)}}ke(n,m,T,P,$,M,f,!1),tn(n);return;case"select":_e("invalid",n),c=M=m=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":M=T;break;case"multiple":c=T;default:Be(n,i,f,T,a,null)}i=m,a=M,n.multiple=!!c,i!=null?pn(n,!!c,i,!1):a!=null&&pn(n,!!c,a,!0);return;case"textarea":_e("invalid",n),m=f=c=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":c=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Be(n,i,M,T,a,null)}Cn(n,c,f,m),tn(n);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(c=a[P],c!=null))switch(P){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(n,i,P,c,a,null)}return;case"dialog":_e("beforetoggle",n),_e("toggle",n),_e("cancel",n),_e("close",n);break;case"iframe":case"object":_e("load",n);break;case"video":case"audio":for(c=0;c<ko.length;c++)_e(ko[c],n);break;case"image":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"embed":case"source":case"link":_e("error",n),_e("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(c=a[$],c!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(n,i,$,c,a,null)}return;default:if(Lu(i)){for(ct in a)a.hasOwnProperty(ct)&&(c=a[ct],c!==void 0&&gf(n,i,ct,c,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(c=a[T],c!=null&&Be(n,i,T,c,a,null))}function gS(n,i,a,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,T=null,P=null,$=null,ct=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:c.hasOwnProperty(it)||Be(n,i,it,null,c,mt)}}for(var nt in c){var it=c[nt];if(mt=a[nt],c.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":m=it;break;case"name":f=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":M=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,i));break;default:it!==mt&&Be(n,i,nt,it,c,mt)}}Ki(n,M,T,P,$,ct,m,f);return;case"select":it=M=T=nt=null;for(m in a)if(P=a[m],a.hasOwnProperty(m)&&P!=null)switch(m){case"value":break;case"multiple":it=P;default:c.hasOwnProperty(m)||Be(n,i,m,null,c,P)}for(f in c)if(m=c[f],P=a[f],c.hasOwnProperty(f)&&(m!=null||P!=null))switch(f){case"value":nt=m;break;case"defaultValue":T=m;break;case"multiple":M=m;default:m!==P&&Be(n,i,f,m,c,P)}i=T,a=M,c=it,nt!=null?pn(n,!!a,nt,!1):!!c!=!!a&&(i!=null?pn(n,!!a,i,!0):pn(n,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(n,i,T,null,c,f)}for(M in c)if(f=c[M],m=a[M],c.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":nt=f;break;case"defaultValue":it=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&Be(n,i,M,f,c,m)}Sn(n,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!c.hasOwnProperty(te))switch(te){case"selected":n.selected=!1;break;default:Be(n,i,te,null,c,nt)}for(P in c)if(nt=c[P],it=a[P],c.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":n.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Be(n,i,P,nt,c,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)nt=a[qt],a.hasOwnProperty(qt)&&nt!=null&&!c.hasOwnProperty(qt)&&Be(n,i,qt,null,c,nt);for($ in c)if(nt=c[$],it=a[$],c.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,i));break;default:Be(n,i,$,nt,c,it)}return;default:if(Lu(i)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!c.hasOwnProperty(Fe)&&gf(n,i,Fe,void 0,c,nt);for(ct in c)nt=c[ct],it=a[ct],!c.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||gf(n,i,ct,nt,c,it);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!c.hasOwnProperty(Y)&&Be(n,i,Y,null,c,nt);for(mt in c)nt=c[mt],it=a[mt],!c.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Be(n,i,mt,nt,c,it)}var _f=null,vf=null;function Tc(n){return n.nodeType===9?n:n.ownerDocument}function V_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function yf(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xf=null;function _S(){var n=window.event;return n&&n.type==="popstate"?n===xf?!1:(xf=n,!0):(xf=null,!1)}var k_=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(n){return X_.resolve(null).then(n).catch(xS)}:k_;function xS(n){setTimeout(function(){throw n})}function qs(n){return n==="head"}function W_(n,i){var a=i,c=0,f=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var M=n.ownerDocument;if(a&1&&Wo(M.documentElement),a&2&&Wo(M.body),a&4)for(a=M.head,Wo(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[ws]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(f===0){n.removeChild(m),$o(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);$o(i)}function Sf(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function SS(n,i,a,c){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[ws])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ti(n.nextSibling),n===null)break}return null}function MS(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Ti(n.nextSibling),n===null))return null;return n}function Mf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function ES(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var c=function(){i(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ti(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Ef=null;function Y_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function j_(n,i,a){switch(i=Tc(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Wo(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Cs(n)}var vi=new Map,q_=new Set;function Ac(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var us=Z.d;Z.d={f:bS,r:TS,D:AS,C:RS,L:wS,m:CS,X:LS,S:DS,M:US};function bS(){var n=us.f(),i=_c();return n||i}function TS(n){var i=ji(n);i!==null&&i.tag===5&&i.type==="form"?pg(i):us.r(n)}var Er=typeof document>"u"?null:document;function K_(n,i,a){var c=Er;if(c&&typeof i=="string"&&i){var f=qe(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),q_.has(f)||(q_.add(f),n={rel:n,crossOrigin:a,href:i},c.querySelector(f)===null&&(i=c.createElement("link"),Un(i,"link",n),ln(i),c.head.appendChild(i)))}}function AS(n){us.D(n),K_("dns-prefetch",n,null)}function RS(n,i){us.C(n,i),K_("preconnect",n,i)}function wS(n,i,a){us.L(n,i,a);var c=Er;if(c&&n&&i){var f='link[rel="preload"][as="'+qe(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+qe(a.imageSizes)+'"]')):f+='[href="'+qe(n)+'"]';var m=f;switch(i){case"style":m=br(n);break;case"script":m=Tr(n)}vi.has(m)||(n=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),vi.set(m,n),c.querySelector(f)!==null||i==="style"&&c.querySelector(Yo(m))||i==="script"&&c.querySelector(jo(m))||(i=c.createElement("link"),Un(i,"link",n),ln(i),c.head.appendChild(i)))}}function CS(n,i){us.m(n,i);var a=Er;if(a&&n){var c=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+qe(c)+'"][href="'+qe(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Tr(n)}if(!vi.has(m)&&(n=g({rel:"modulepreload",href:n},i),vi.set(m,n),a.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(m)))return}c=a.createElement("link"),Un(c,"link",n),ln(c),a.head.appendChild(c)}}}function DS(n,i,a){us.S(n,i,a);var c=Er;if(c&&n){var f=Ds(c).hoistableStyles,m=br(n);i=i||"default";var M=f.get(m);if(!M){var T={loading:0,preload:null};if(M=c.querySelector(Yo(m)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},a),(a=vi.get(m))&&bf(n,a);var P=M=c.createElement("link");ln(P),Un(P,"link",n),P._p=new Promise(function($,ct){P.onload=$,P.onerror=ct}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Rc(M,i,c)}M={type:"stylesheet",instance:M,count:1,state:T},f.set(m,M)}}}function LS(n,i){us.X(n,i);var a=Er;if(a&&n){var c=Ds(a).hoistableScripts,f=Tr(n),m=c.get(f);m||(m=a.querySelector(jo(f)),m||(n=g({src:n,async:!0},i),(i=vi.get(f))&&Tf(n,i),m=a.createElement("script"),ln(m),Un(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function US(n,i){us.M(n,i);var a=Er;if(a&&n){var c=Ds(a).hoistableScripts,f=Tr(n),m=c.get(f);m||(m=a.querySelector(jo(f)),m||(n=g({src:n,async:!0,type:"module"},i),(i=vi.get(f))&&Tf(n,i),m=a.createElement("script"),ln(m),Un(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function Z_(n,i,a,c){var f=(f=yt.current)?Ac(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=br(a.href),a=Ds(f).hoistableStyles,c=a.get(i),c||(c={type:"style",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=br(a.href);var m=Ds(f).hoistableStyles,M=m.get(n);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,M),(m=f.querySelector(Yo(n)))&&!m._p&&(M.instance=m,M.state.loading=5),vi.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(n,a),m||NS(f,n,a,M.state))),i&&c===null)throw Error(s(528,""));return M}if(i&&c!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Tr(a),a=Ds(f).hoistableScripts,c=a.get(i),c||(c={type:"script",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function br(n){return'href="'+qe(n)+'"'}function Yo(n){return'link[rel="stylesheet"]['+n+"]"}function Q_(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function NS(n,i,a,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Un(i,"link",a),ln(i),n.head.appendChild(i))}function Tr(n){return'[src="'+qe(n)+'"]'}function jo(n){return"script[async]"+n}function J_(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+qe(a.href)+'"]');if(c)return i.instance=c,ln(c),c;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ln(c),Un(c,"style",f),Rc(c,a.precedence,n),i.instance=c;case"stylesheet":f=br(a.href);var m=n.querySelector(Yo(f));if(m)return i.state.loading|=4,i.instance=m,ln(m),m;c=Q_(a),(f=vi.get(f))&&bf(c,f),m=(n.ownerDocument||n).createElement("link"),ln(m);var M=m;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Un(m,"link",c),i.state.loading|=4,Rc(m,a.precedence,n),i.instance=m;case"script":return m=Tr(a.src),(f=n.querySelector(jo(m)))?(i.instance=f,ln(f),f):(c=a,(f=vi.get(m))&&(c=g({},a),Tf(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),ln(f),Un(f,"link",c),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Rc(c,a.precedence,n));return i.instance}function Rc(n,i,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,M=0;M<c.length;M++){var T=c[M];if(T.dataset.precedence===i)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function bf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Tf(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var wc=null;function $_(n,i,a){if(wc===null){var c=new Map,f=wc=new Map;f.set(a,c)}else f=wc,c=f.get(a),c||(c=new Map,f.set(a,c));if(c.has(n))return c;for(c.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[ws]||m[dn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=n+M;var T=c.get(M);T?T.push(m):c.set(M,[m])}}return c}function tv(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function OS(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function ev(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var qo=null;function PS(){}function IS(n,i,a){if(qo===null)throw Error(s(475));var c=qo;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=br(a.href),m=n.querySelector(Yo(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Cc.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=m,ln(m);return}m=n.ownerDocument||n,a=Q_(a),(f=vi.get(f))&&bf(a,f),m=m.createElement("link"),ln(m);var M=m;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),Un(m,"link",a),i.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=Cc.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function zS(){if(qo===null)throw Error(s(475));var n=qo;return n.stylesheets&&n.count===0&&Af(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Af(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)Af(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dc=null;function Af(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dc=new Map,i.forEach(BS,n),Dc=null,Cc.call(n))}function BS(n,i){if(!(i.state.loading&4)){var a=Dc.get(n);if(a)var c=a.get(null);else{a=new Map,Dc.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),c=M)}c&&a.set(null,c)}f=i.instance,M=f.getAttribute("data-precedence"),m=a.get(M)||c,m===c&&a.set(null,f),a.set(M,f),this.count++,c=Cc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var Ko={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function FS(n,i,a,c,f,m,M,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function nv(n,i,a,c,f,m,M,T,P,$,ct,mt){return n=new FS(n,i,a,M,T,P,$,mt),i=1,m===!0&&(i|=24),m=ni(3,null,null,i),n.current=m,m.stateNode=n,i=rh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:i},uh(m),n}function iv(n){return n?(n=nr,n):nr}function sv(n,i,a,c,f,m){f=iv(f),c.context===null?c.context=f:c.pendingContext=f,c=Ps(i),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Is(n,c,i),a!==null&&(oi(a,n,i),To(a,n,i))}function av(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Rf(n,i){av(n,i),(n=n.alternate)&&av(n,i)}function rv(n){if(n.tag===13){var i=er(n,67108864);i!==null&&oi(i,n,67108864),Rf(n,67108864)}}var Lc=!0;function HS(n,i,a,c){var f=I.T;I.T=null;var m=Z.p;try{Z.p=2,wf(n,i,a,c)}finally{Z.p=m,I.T=f}}function VS(n,i,a,c){var f=I.T;I.T=null;var m=Z.p;try{Z.p=8,wf(n,i,a,c)}finally{Z.p=m,I.T=f}}function wf(n,i,a,c){if(Lc){var f=Cf(c);if(f===null)mf(n,i,c,Uc,a),lv(n,c);else if(kS(f,n,i,a,c))c.stopPropagation();else if(lv(n,c),i&4&&-1<GS.indexOf(n)){for(;f!==null;){var m=ji(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Pt(m.pendingLanes);if(M!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-wt(M);T.entanglements[1]|=P,M&=~P}Bi(m),(Le&6)===0&&(mc=ne()+500,Go(0))}}break;case 13:T=er(m,2),T!==null&&oi(T,m,2),_c(),Rf(m,2)}if(m=Cf(c),m===null&&mf(n,i,c,Uc,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else mf(n,i,c,null,a)}}function Cf(n){return n=Nu(n),Df(n)}var Uc=null;function Df(n){if(Uc=null,n=Yi(n),n!==null){var i=l(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=u(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Uc=n,null}function ov(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Pe:return 2;case Vt:return 8;case O:case A:return 32;case et:return 268435456;default:return 32}default:return 32}}var Lf=!1,Ks=null,Zs=null,Qs=null,Zo=new Map,Qo=new Map,Js=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lv(n,i){switch(n){case"focusin":case"focusout":Ks=null;break;case"dragenter":case"dragleave":Zs=null;break;case"mouseover":case"mouseout":Qs=null;break;case"pointerover":case"pointerout":Zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(i.pointerId)}}function Jo(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ji(i),i!==null&&rv(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function kS(n,i,a,c,f){switch(i){case"focusin":return Ks=Jo(Ks,n,i,a,c,f),!0;case"dragenter":return Zs=Jo(Zs,n,i,a,c,f),!0;case"mouseover":return Qs=Jo(Qs,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return Zo.set(m,Jo(Zo.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Qo.set(m,Jo(Qo.get(m)||null,n,i,a,c,f)),!0}return!1}function cv(n){var i=Yi(n.target);if(i!==null){var a=l(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){n.blockedOn=i,ti(n.priority,function(){if(a.tag===13){var c=ri();c=je(c);var f=er(a,c);f!==null&&oi(f,a,c),Rf(a,c)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cf(n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Uu=c,a.target.dispatchEvent(c),Uu=null}else return i=ji(a),i!==null&&rv(i),n.blockedOn=a,!1;i.shift()}return!0}function uv(n,i,a){Nc(n)&&a.delete(i)}function XS(){Lf=!1,Ks!==null&&Nc(Ks)&&(Ks=null),Zs!==null&&Nc(Zs)&&(Zs=null),Qs!==null&&Nc(Qs)&&(Qs=null),Zo.forEach(uv),Qo.forEach(uv)}function Oc(n,i){n.blockedOn===i&&(n.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,XS)))}var Pc=null;function hv(n){Pc!==n&&(Pc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pc===n&&(Pc=null);for(var i=0;i<n.length;i+=3){var a=n[i],c=n[i+1],f=n[i+2];if(typeof c!="function"){if(Df(c||a)===null)continue;break}var m=ji(a);m!==null&&(n.splice(i,3),i-=3,Ch(m,{pending:!0,data:f,method:a.method,action:c},c,f))}}))}function $o(n){function i(P){return Oc(P,n)}Ks!==null&&Oc(Ks,n),Zs!==null&&Oc(Zs,n),Qs!==null&&Oc(Qs,n),Zo.forEach(i),Qo.forEach(i);for(var a=0;a<Js.length;a++){var c=Js[a];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Js.length&&(a=Js[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&Js.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var f=a[c],m=a[c+1],M=f[wn]||null;if(typeof m=="function")M||hv(a);else if(M){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[wn]||null)T=M.formAction;else if(Df(f)!==null)continue}else T=M.action;typeof T=="function"?a[c+1]=T:(a.splice(c,3),c-=3),hv(a)}}}function Uf(n){this._internalRoot=n}Ic.prototype.render=Uf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,c=ri();sv(a,c,n,i,null,null)},Ic.prototype.unmount=Uf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;sv(n.current,2,null,n,null,null),_c(),i[Yn]=null}};function Ic(n){this._internalRoot=n}Ic.prototype.unstable_scheduleHydration=function(n){if(n){var i=Re();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Js.length&&i!==0&&i<Js[a].priority;a++);Js.splice(a,0,n),a===0&&cv(n)}};var fv=t.version;if(fv!=="19.1.0")throw Error(s(527,fv,"19.1.0"));Z.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=d(i),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var WS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{ut=zc.inject(WS),zt=zc}catch{}}return el.createRoot=function(n,i){if(!r(n))throw Error(s(299));var a=!1,c="",f=wg,m=Cg,M=Dg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=nv(n,1,!1,null,null,a,c,f,m,M,T,null),n[Yn]=i.current,pf(n),new Uf(i)},el.hydrateRoot=function(n,i,a){if(!r(n))throw Error(s(299));var c=!1,f="",m=wg,M=Cg,T=Dg,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),i=nv(n,1,!0,i,a??null,c,f,m,M,T,P,$),i.context=iv(null),a=i.current,c=ri(),c=je(c),f=Ps(c),f.callback=null,Is(a,f,c),a=c,i.current.lanes=a,pt(i,a),Bi(i),n[Yn]=i.current,pf(n),new Ic(i)},el.version="19.1.0",el}var Mv;function eM(){if(Mv)return Pf.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pf.exports=tM(),Pf.exports}var nM=eM();const iM="/Portfolio_DiegoGonzalez/assets/react-CHdo91hT.svg",sM="/Portfolio_DiegoGonzalez/vite.svg",aM="/Portfolio_DiegoGonzalez/images/ideas.svg",rM="/Portfolio_DiegoGonzalez/images/designs.svg",oM="/Portfolio_DiegoGonzalez/images/code.svg",lM="/Portfolio_DiegoGonzalez/images/concepts.svg",cM=[{name:"Perfil",link:"#myself"},{name:"Experience",link:"#experience"},{name:"Skills",link:"#skills"},{name:"Contacto",link:"#contact"}],_p=[{text:"Ideas",imgPath:aM},{text:"Análisis",imgPath:rM},{text:"Ingenio",imgPath:lM},{text:"Diseño",imgPath:oM}],uM=()=>Tt.jsx("header",{className:"navbar",children:Tt.jsxs("div",{className:"inner",children:[Tt.jsx("a",{className:"logo",href:"#hero",children:"DG"}),Tt.jsx("nav",{className:"desktop",children:Tt.jsx("ul",{children:cM.map(({link:o,name:t})=>Tt.jsx("li",{className:"group",children:Tt.jsxs("a",{href:o,children:[Tt.jsx("span",{children:t}),Tt.jsx("span",{className:"underline"})]})},t))})}),Tt.jsx("a",{href:"#contact",className:"contact-btn group",children:Tt.jsx("div",{className:"inner",children:Tt.jsx("span",{children:"Contacto"})})})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="175",kr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hM=0,Ev=1,fM=2,Q0=1,dM=2,_s=3,bs=0,$n=1,Si=2,fa=0,Xr=1,bv=2,Tv=3,Av=4,pM=5,Ga=100,mM=101,gM=102,_M=103,vM=104,yM=200,xM=201,SM=202,MM=203,bd=204,Td=205,EM=206,bM=207,TM=208,AM=209,RM=210,wM=211,CM=212,DM=213,LM=214,Ad=0,Rd=1,wd=2,jr=3,Cd=4,Dd=5,Ld=6,Ud=7,J0=0,UM=1,NM=2,da=0,OM=1,PM=2,IM=3,zM=4,BM=5,FM=6,HM=7,Rv="attached",VM="detached",$0=300,qr=301,Kr=302,Nd=303,Od=304,Ru=306,Zr=1e3,ca=1001,xu=1002,We=1003,ty=1004,hl=1005,ui=1006,fu=1007,ys=1008,Ts=1009,ey=1010,ny=1011,gl=1012,vp=1013,Wa=1014,Nn=1015,Tl=1016,yp=1017,xp=1018,_l=1020,iy=35902,sy=1021,ay=1022,An=1023,ry=1024,oy=1025,vl=1026,yl=1027,Sp=1028,Mp=1029,ly=1030,Ep=1031,bp=1033,du=33776,pu=33777,mu=33778,gu=33779,Pd=35840,Id=35841,zd=35842,Bd=35843,Fd=36196,Hd=37492,Vd=37496,Gd=37808,kd=37809,Xd=37810,Wd=37811,Yd=37812,jd=37813,qd=37814,Kd=37815,Zd=37816,Qd=37817,Jd=37818,$d=37819,tp=37820,ep=37821,_u=36492,np=36494,ip=36495,cy=36283,sp=36284,ap=36285,rp=36286,xl=2300,Sl=2301,Ff=2302,wv=2400,Cv=2401,Dv=2402,GM=2500,kM=0,uy=1,op=2,XM=3200,WM=3201,hy=0,YM=1,la="",fn="srgb",Vn="srgb-linear",Su="linear",He="srgb",Ar=7680,Lv=519,jM=512,qM=513,KM=514,fy=515,ZM=516,QM=517,JM=518,$M=519,lp=35044,Uv="300 es",xs=2e3,Mu=2001;class ja{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){const s=this._listeners;if(s===void 0)return;const r=s[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const s=e[t.type];if(s!==void 0){t.target=this;const r=s.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nv=1234567;const dl=Math.PI/180,Qr=180/Math.PI;function Li(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[e&63|128]+Fn[e>>8&255]+"-"+Fn[e>>16&255]+Fn[e>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function fe(o,t,e){return Math.max(t,Math.min(e,o))}function Tp(o,t){return(o%t+t)%t}function tE(o,t,e,s,r){return s+(o-t)*(r-s)/(e-t)}function eE(o,t,e){return o!==t?(e-o)/(t-o):0}function pl(o,t,e){return(1-e)*o+e*t}function nE(o,t,e,s){return pl(o,t,1-Math.exp(-e*s))}function iE(o,t=1){return t-Math.abs(Tp(o,t*2)-t)}function sE(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function aE(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function rE(o,t){return o+Math.floor(Math.random()*(t-o+1))}function oE(o,t){return o+Math.random()*(t-o)}function lE(o){return o*(.5-Math.random())}function cE(o){o!==void 0&&(Nv=o);let t=Nv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uE(o){return o*dl}function hE(o){return o*Qr}function fE(o){return(o&o-1)===0&&o!==0}function dE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function pE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function mE(o,t,e,s,r){const l=Math.cos,u=Math.sin,h=l(e/2),d=u(e/2),p=l((t+s)/2),g=u((t+s)/2),_=l((t-s)/2),v=u((t-s)/2),x=l((s-t)/2),E=u((s-t)/2);switch(r){case"XYX":o.set(h*g,d*_,d*v,h*p);break;case"YZY":o.set(d*v,h*g,d*_,h*p);break;case"ZXZ":o.set(d*_,d*v,h*g,h*p);break;case"XZX":o.set(h*g,d*E,d*x,h*p);break;case"YXY":o.set(d*x,h*g,d*E,h*p);break;case"ZYZ":o.set(d*E,d*x,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ci(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ne(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dy={DEG2RAD:dl,RAD2DEG:Qr,generateUUID:Li,clamp:fe,euclideanModulo:Tp,mapLinear:tE,inverseLerp:eE,lerp:pl,damp:nE,pingpong:iE,smoothstep:sE,smootherstep:aE,randInt:rE,randFloat:oE,randFloatSpread:lE,seededRandom:cE,degToRad:uE,radToDeg:hE,isPowerOfTwo:fE,ceilPowerOfTwo:dE,floorPowerOfTwo:pE,setQuaternionFromProperEuler:mE,normalize:Ne,denormalize:Ci};class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6],this.y=r[1]*e+r[4]*s+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),r=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*s-u*r+t.x,this.y=l*r+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,s,r,l,u,h,d,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,r,l,u,h,d,p)}set(t,e,s,r,l,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=l,g[5]=d,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,l=this.elements,u=s[0],h=s[3],d=s[6],p=s[1],g=s[4],_=s[7],v=s[2],x=s[5],E=s[8],b=r[0],S=r[3],y=r[6],D=r[1],L=r[4],w=r[7],B=r[2],H=r[5],z=r[8];return l[0]=u*b+h*D+d*B,l[3]=u*S+h*L+d*H,l[6]=u*y+h*w+d*z,l[1]=p*b+g*D+_*B,l[4]=p*S+g*L+_*H,l[7]=p*y+g*w+_*z,l[2]=v*b+x*D+E*B,l[5]=v*S+x*L+E*H,l[8]=v*y+x*w+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return e*u*g-e*h*p-s*l*g+s*h*d+r*l*p-r*u*d}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=g*u-h*p,v=h*d-g*l,x=p*l-u*d,E=e*_+s*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(r*p-g*s)*b,t[2]=(h*s-r*u)*b,t[3]=v*b,t[4]=(g*e-r*d)*b,t[5]=(r*l-h*e)*b,t[6]=x*b,t[7]=(s*d-p*e)*b,t[8]=(u*e-s*l)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,r,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*u+p*h)+u+t,-r*p,r*d,-r*(-p*u+d*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Hf.makeScale(t,e)),this}rotate(t){return this.premultiply(Hf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<9;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new oe;function py(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ml(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gE(){const o=Ml("canvas");return o.style.display="block",o}const Ov={};function vu(o){o in Ov||(Ov[o]=!0,console.warn(o))}function _E(o,t,e){return new Promise(function(s,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:s()}}setTimeout(l,e)})}function vE(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yE(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pv=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xE(){const o={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===He&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===He&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},fromWorkingColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},toWorkingColorSpace:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===la?Su:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Vn]:{primaries:t,whitePoint:s,transfer:Su,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),o}const Ee=xE();function Ms(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Rr;class SE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=Ml("canvas")),Rr.width=t.width,Rr.height=t.height;const r=Rr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ml("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const r=s.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Ms(l[u]/255)*255;return s.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(Ms(e[s]/255)*255):e[s]=Ms(e[s]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ME=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?l.push(Vf(r[u].image)):l.push(Vf(r[u]))}else l=Vf(r);s.url=l}return e||(t.images[this.uuid]=s),s}}function Vf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;class Rn extends ja{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,s=ca,r=ca,l=ui,u=ys,h=An,d=Ts,p=Rn.DEFAULT_ANISOTROPY,g=la){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Li(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case ca:t.x=t.x<0?0:1;break;case xu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case ca:t.y=t.y<0?0:1;break;case xu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=$0;Rn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,s=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=s,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,r){return this.x=t,this.y=e,this.z=s,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*s+u[8]*r+u[12]*l,this.y=u[1]*e+u[5]*s+u[9]*r+u[13]*l,this.z=u[2]*e+u[6]*s+u[10]*r+u[14]*l,this.w=u[3]*e+u[7]*s+u[11]*r+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,r,l;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],x=d[5],E=d[9],b=d[2],S=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(p+1)/2,w=(x+1)/2,B=(y+1)/2,H=(g+v)/4,z=(_+b)/4,W=(E+S)/4;return L>w&&L>B?L<.01?(s=0,r=.707106781,l=.707106781):(s=Math.sqrt(L),r=H/s,l=z/s):w>B?w<.01?(s=.707106781,r=0,l=.707106781):(r=Math.sqrt(w),s=H/r,l=W/r):B<.01?(s=.707106781,r=.707106781,l=0):(l=Math.sqrt(B),s=z/l,r=W/l),this.set(s,r,l,e),this}let D=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(_-b)/D,this.z=(v-g)/D,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bE extends ja{constructor(t=1,e=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Rn(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,s=1){if(this.width!==t||this.height!==e||this.depth!==s){this.width=t,this.height=e,this.depth=s;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=s;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,s=t.textures.length;e<s;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ap(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends bE{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class my extends Rn{constructor(t=null,e=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends Rn{constructor(t=null,e=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=0,e=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=r}static slerpFlat(t,e,s,r,l,u,h){let d=s[r+0],p=s[r+1],g=s[r+2],_=s[r+3];const v=l[u+0],x=l[u+1],E=l[u+2],b=l[u+3];if(h===0){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=b;return}if(_!==b||d!==v||p!==x||g!==E){let S=1-h;const y=d*v+p*x+g*E+_*b,D=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const B=Math.sqrt(L),H=Math.atan2(B,y*D);S=Math.sin(S*H)/B,h=Math.sin(h*H)/B}const w=h*D;if(d=d*S+v*w,p=p*S+x*w,g=g*S+E*w,_=_*S+b*w,S===1-h){const B=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=B,p*=B,g*=B,_*=B}}t[e]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,s,r,l,u){const h=s[r],d=s[r+1],p=s[r+2],g=s[r+3],_=l[u],v=l[u+1],x=l[u+2],E=l[u+3];return t[e]=h*E+g*_+d*x-p*v,t[e+1]=d*E+g*v+p*_-h*x,t[e+2]=p*E+g*x+h*v-d*_,t[e+3]=g*E-h*_-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,r){return this._x=t,this._y=e,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,r=t._y,l=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(s/2),g=h(r/2),_=h(l/2),v=d(s/2),x=d(r/2),E=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"YZX":this._x=v*g*_+p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_-v*x*E;break;case"XZY":this._x=v*g*_-p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],r=e[4],l=e[8],u=e[1],h=e[5],d=e[9],p=e[2],g=e[6],_=e[10],v=s+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(l-p)*x,this._z=(u-r)*x}else if(s>h&&s>_){const x=2*Math.sqrt(1+s-h-_);this._w=(g-d)/x,this._x=.25*x,this._y=(r+u)/x,this._z=(l+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-s-_);this._w=(l-p)/x,this._x=(r+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-s-h);this._w=(u-r)/x,this._x=(l+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,e/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,r=t._y,l=t._z,u=t._w,h=e._x,d=e._y,p=e._z,g=e._w;return this._x=s*g+u*h+r*p-l*d,this._y=r*g+u*d+l*h-s*p,this._z=l*g+u*p+s*d-r*h,this._w=u*g-s*h-r*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const s=this._x,r=this._y,l=this._z,u=this._w;let h=u*t._w+s*t._x+r*t._y+l*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=s,this._y=r,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const x=1-e;return this._w=x*u+e*this._w,this._x=x*s+e*this._x,this._y=x*r+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-e)*g)/p,v=Math.sin(e*g)/p;return this._w=u*_+this._w*v,this._x=s*_+this._x*v,this._y=r*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*s+l[6]*r,this.y=l[1]*e+l[4]*s+l[7]*r,this.z=l[2]*e+l[5]*s+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,l=t.elements,u=1/(l[3]*e+l[7]*s+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*s+l[8]*r+l[12])*u,this.y=(l[1]*e+l[5]*s+l[9]*r+l[13])*u,this.z=(l[2]*e+l[6]*s+l[10]*r+l[14])*u,this}applyQuaternion(t){const e=this.x,s=this.y,r=this.z,l=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*r-h*s),g=2*(h*e-l*r),_=2*(l*s-u*e);return this.x=e+d*p+u*_-h*g,this.y=s+d*g+h*p-l*_,this.z=r+d*_+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*s+l[8]*r,this.y=l[1]*e+l[5]*s+l[9]*r,this.z=l[2]*e+l[6]*s+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,r=t.y,l=t.z,u=e.x,h=e.y,d=e.z;return this.x=r*d-l*h,this.y=l*u-s*d,this.z=s*h-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return e*e+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const r=Math.sin(e)*t;return this.x=r*Math.sin(s),this.y=Math.cos(e)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new X,zv=new Gi;class Rs{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const l=s.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(l,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Bc.copy(s.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Fc.subVectors(this.max,nl),wr.subVectors(t.a,nl),Cr.subVectors(t.b,nl),Dr.subVectors(t.c,nl),ta.subVectors(Cr,wr),ea.subVectors(Dr,Cr),Oa.subVectors(wr,Dr);let e=[0,-ta.z,ta.y,0,-ea.z,ea.y,0,-Oa.z,Oa.y,ta.z,0,-ta.x,ea.z,0,-ea.x,Oa.z,0,-Oa.x,-ta.y,ta.x,0,-ea.y,ea.x,0,-Oa.y,Oa.x,0];return!kf(e,wr,Cr,Dr,Fc)||(e=[1,0,0,0,1,0,0,0,1],!kf(e,wr,Cr,Dr,Fc))?!1:(Hc.crossVectors(ta,ea),e=[Hc.x,Hc.y,Hc.z],kf(e,wr,Cr,Dr,Fc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hs=[new X,new X,new X,new X,new X,new X,new X,new X],Ai=new X,Bc=new Rs,wr=new X,Cr=new X,Dr=new X,ta=new X,ea=new X,Oa=new X,nl=new X,Fc=new X,Hc=new X,Pa=new X;function kf(o,t,e,s,r){for(let l=0,u=o.length-3;l<=u;l+=3){Pa.fromArray(o,l);const h=r.x*Math.abs(Pa.x)+r.y*Math.abs(Pa.y)+r.z*Math.abs(Pa.z),d=t.dot(Pa),p=e.dot(Pa),g=s.dot(Pa);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const AE=new Rs,il=new X,Xf=new X;class Xi{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):AE.setFromPoints(t).getCenter(s);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,s.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const e=il.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),r=(s-this.radius)*.5;this.center.addScaledVector(il,r/s),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(Xf)),this.expandByPoint(il.copy(t.center).sub(Xf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fs=new X,Wf=new X,Vc=new X,na=new X,Yf=new X,Gc=new X,jf=new X;class io{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fs.copy(this.origin).addScaledVector(this.direction,e),fs.distanceToSquared(t))}distanceSqToSegment(t,e,s,r){Wf.copy(t).add(e).multiplyScalar(.5),Vc.copy(e).sub(t).normalize(),na.copy(this.origin).sub(Wf);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Vc),h=na.dot(this.direction),d=-na.dot(Vc),p=na.lengthSq(),g=Math.abs(1-u*u);let _,v,x,E;if(g>0)if(_=u*d-h,v=u*h-d,E=l*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,x=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+p):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Wf).addScaledVector(Vc,v),x}intersectSphere(t,e){fs.subVectors(t.center,this.origin);const s=fs.dot(this.direction),r=fs.dot(fs)-s*s,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),h=s-u,d=s+u;return d<0?null:h<0?this.at(d,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,r,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),g>=0?(l=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||l>r||((l>s||isNaN(s))&&(s=l),(u<r||isNaN(r))&&(r=u),_>=0?(h=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),s>d||h>r)||((h>s||s!==s)&&(s=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(s>=0?s:r,e)}intersectsBox(t){return this.intersectBox(t,fs)!==null}intersectTriangle(t,e,s,r,l){Yf.subVectors(e,t),Gc.subVectors(s,t),jf.crossVectors(Yf,Gc);let u=this.direction.dot(jf),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;na.subVectors(this.origin,t);const d=h*this.direction.dot(Gc.crossVectors(na,Gc));if(d<0)return null;const p=h*this.direction.dot(Yf.cross(na));if(p<0||d+p>u)return null;const g=-h*na.dot(jf);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,s,r,l,u,h,d,p,g,_,v,x,E,b,S){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,r,l,u,h,d,p,g,_,v,x,E,b,S)}set(t,e,s,r,l,u,h,d,p,g,_,v,x,E,b,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=s,y[12]=r,y[1]=l,y[5]=u,y[9]=h,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=E,y[11]=b,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,s=t.elements,r=1/Lr.setFromMatrixColumn(t,0).length(),l=1/Lr.setFromMatrixColumn(t,1).length(),u=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=s[0]*r,e[1]=s[1]*r,e[2]=s[2]*r,e[3]=0,e[4]=s[4]*l,e[5]=s[5]*l,e[6]=s[6]*l,e[7]=0,e[8]=s[8]*u,e[9]=s[9]*u,e[10]=s[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,r=t.y,l=t.z,u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=u*g,x=u*_,E=h*g,b=h*_;e[0]=d*g,e[4]=-d*_,e[8]=p,e[1]=x+E*p,e[5]=v-b*p,e[9]=-h*d,e[2]=b-v*p,e[6]=E+x*p,e[10]=u*d}else if(t.order==="YXZ"){const v=d*g,x=d*_,E=p*g,b=p*_;e[0]=v+b*h,e[4]=E*h-x,e[8]=u*p,e[1]=u*_,e[5]=u*g,e[9]=-h,e[2]=x*h-E,e[6]=b+v*h,e[10]=u*d}else if(t.order==="ZXY"){const v=d*g,x=d*_,E=p*g,b=p*_;e[0]=v-b*h,e[4]=-u*_,e[8]=E+x*h,e[1]=x+E*h,e[5]=u*g,e[9]=b-v*h,e[2]=-u*p,e[6]=h,e[10]=u*d}else if(t.order==="ZYX"){const v=u*g,x=u*_,E=h*g,b=h*_;e[0]=d*g,e[4]=E*p-x,e[8]=v*p+b,e[1]=d*_,e[5]=b*p+v,e[9]=x*p-E,e[2]=-p,e[6]=h*d,e[10]=u*d}else if(t.order==="YZX"){const v=u*d,x=u*p,E=h*d,b=h*p;e[0]=d*g,e[4]=b-v*_,e[8]=E*_+x,e[1]=_,e[5]=u*g,e[9]=-h*g,e[2]=-p*g,e[6]=x*_+E,e[10]=v-b*_}else if(t.order==="XZY"){const v=u*d,x=u*p,E=h*d,b=h*p;e[0]=d*g,e[4]=-_,e[8]=p*g,e[1]=v*_+b,e[5]=u*g,e[9]=x*_-E,e[2]=E*_-x,e[6]=h*g,e[10]=b*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RE,t,wE)}lookAt(t,e,s){const r=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ia.crossVectors(s,li),ia.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ia.crossVectors(s,li)),ia.normalize(),kc.crossVectors(li,ia),r[0]=ia.x,r[4]=kc.x,r[8]=li.x,r[1]=ia.y,r[5]=kc.y,r[9]=li.y,r[2]=ia.z,r[6]=kc.z,r[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,l=this.elements,u=s[0],h=s[4],d=s[8],p=s[12],g=s[1],_=s[5],v=s[9],x=s[13],E=s[2],b=s[6],S=s[10],y=s[14],D=s[3],L=s[7],w=s[11],B=s[15],H=r[0],z=r[4],W=r[8],U=r[12],C=r[1],G=r[5],lt=r[9],rt=r[13],gt=r[2],ft=r[6],I=r[10],Z=r[14],q=r[3],Mt=r[7],N=r[11],tt=r[15];return l[0]=u*H+h*C+d*gt+p*q,l[4]=u*z+h*G+d*ft+p*Mt,l[8]=u*W+h*lt+d*I+p*N,l[12]=u*U+h*rt+d*Z+p*tt,l[1]=g*H+_*C+v*gt+x*q,l[5]=g*z+_*G+v*ft+x*Mt,l[9]=g*W+_*lt+v*I+x*N,l[13]=g*U+_*rt+v*Z+x*tt,l[2]=E*H+b*C+S*gt+y*q,l[6]=E*z+b*G+S*ft+y*Mt,l[10]=E*W+b*lt+S*I+y*N,l[14]=E*U+b*rt+S*Z+y*tt,l[3]=D*H+L*C+w*gt+B*q,l[7]=D*z+L*G+w*ft+B*Mt,l[11]=D*W+L*lt+w*I+B*N,l[15]=D*U+L*rt+w*Z+B*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],r=t[8],l=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],E=t[3],b=t[7],S=t[11],y=t[15];return E*(+l*d*_-r*p*_-l*h*v+s*p*v+r*h*x-s*d*x)+b*(+e*d*x-e*p*v+l*u*v-r*u*x+r*p*g-l*d*g)+S*(+e*p*_-e*h*x-l*u*_+s*u*x+l*h*g-s*p*g)+y*(-r*h*g-e*d*_+e*h*v+r*u*_-s*u*v+s*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],l=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],E=t[12],b=t[13],S=t[14],y=t[15],D=_*S*p-b*v*p+b*d*x-h*S*x-_*d*y+h*v*y,L=E*v*p-g*S*p-E*d*x+u*S*x+g*d*y-u*v*y,w=g*b*p-E*_*p+E*h*x-u*b*x-g*h*y+u*_*y,B=E*_*d-g*b*d-E*h*v+u*b*v+g*h*S-u*_*S,H=e*D+s*L+r*w+l*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=D*z,t[1]=(b*v*l-_*S*l-b*r*x+s*S*x+_*r*y-s*v*y)*z,t[2]=(h*S*l-b*d*l+b*r*p-s*S*p-h*r*y+s*d*y)*z,t[3]=(_*d*l-h*v*l-_*r*p+s*v*p+h*r*x-s*d*x)*z,t[4]=L*z,t[5]=(g*S*l-E*v*l+E*r*x-e*S*x-g*r*y+e*v*y)*z,t[6]=(E*d*l-u*S*l-E*r*p+e*S*p+u*r*y-e*d*y)*z,t[7]=(u*v*l-g*d*l+g*r*p-e*v*p-u*r*x+e*d*x)*z,t[8]=w*z,t[9]=(E*_*l-g*b*l-E*s*x+e*b*x+g*s*y-e*_*y)*z,t[10]=(u*b*l-E*h*l+E*s*p-e*b*p-u*s*y+e*h*y)*z,t[11]=(g*h*l-u*_*l-g*s*p+e*_*p+u*s*x-e*h*x)*z,t[12]=B*z,t[13]=(g*b*r-E*_*r+E*s*v-e*b*v-g*s*S+e*_*S)*z,t[14]=(E*h*r-u*b*r-E*s*d+e*b*d+u*s*S-e*h*S)*z,t[15]=(u*_*r-g*h*r+g*s*d-e*_*d-u*s*v+e*h*v)*z,this}scale(t){const e=this.elements,s=t.x,r=t.y,l=t.z;return e[0]*=s,e[4]*=r,e[8]*=l,e[1]*=s,e[5]*=r,e[9]*=l,e[2]*=s,e[6]*=r,e[10]*=l,e[3]*=s,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,r))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),r=Math.sin(e),l=1-s,u=t.x,h=t.y,d=t.z,p=l*u,g=l*h;return this.set(p*u+s,p*h-r*d,p*d+r*h,0,p*h+r*d,g*h+s,g*d-r*u,0,p*d-r*h,g*d+r*u,l*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,r,l,u){return this.set(1,s,l,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,s){const r=this.elements,l=e._x,u=e._y,h=e._z,d=e._w,p=l+l,g=u+u,_=h+h,v=l*p,x=l*g,E=l*_,b=u*g,S=u*_,y=h*_,D=d*p,L=d*g,w=d*_,B=s.x,H=s.y,z=s.z;return r[0]=(1-(b+y))*B,r[1]=(x+w)*B,r[2]=(E-L)*B,r[3]=0,r[4]=(x-w)*H,r[5]=(1-(v+y))*H,r[6]=(S+D)*H,r[7]=0,r[8]=(E+L)*z,r[9]=(S-D)*z,r[10]=(1-(v+b))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,s){const r=this.elements;let l=Lr.set(r[0],r[1],r[2]).length();const u=Lr.set(r[4],r[5],r[6]).length(),h=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Ri.copy(this);const p=1/l,g=1/u,_=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,e.setFromRotationMatrix(Ri),s.x=l,s.y=u,s.z=h,this}makePerspective(t,e,s,r,l,u,h=xs){const d=this.elements,p=2*l/(e-t),g=2*l/(s-r),_=(e+t)/(e-t),v=(s+r)/(s-r);let x,E;if(h===xs)x=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(h===Mu)x=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,s,r,l,u,h=xs){const d=this.elements,p=1/(e-t),g=1/(s-r),_=1/(u-l),v=(e+t)*p,x=(s+r)*g;let E,b;if(h===xs)E=(u+l)*_,b=-2*_;else if(h===Mu)E=l*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<16;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}}const Lr=new X,Ri=new ae,RE=new X(0,0,0),wE=new X(1,1,1),ia=new X,kc=new X,li=new X,Bv=new ae,Fv=new Gi;class ki{constructor(t=0,e=0,s=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,r=this._order){return this._x=t,this._y=e,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const r=t.elements,l=r[0],u=r[4],h=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(fe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return Bv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bv,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fv.setFromEuler(this),this.setFromQuaternion(Fv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CE=0;const Hv=new X,Ur=new Gi,ds=new ae,Xc=new X,sl=new X,DE=new X,LE=new Gi,Vv=new X(1,0,0),Gv=new X(0,1,0),kv=new X(0,0,1),Xv={type:"added"},UE={type:"removed"},Nr={type:"childadded",child:null},qf={type:"childremoved",child:null};class $e extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new X,e=new ki,s=new Gi,r=new X(1,1,1);function l(){s.setFromEuler(e,!1)}function u(){e.setFromQuaternion(s,void 0,!1)}e._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new oe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(Gv,t)}rotateZ(t){return this.rotateOnAxis(kv,t)}translateOnAxis(t,e){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(Gv,t)}translateZ(t){return this.translateOnAxis(kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?Xc.copy(t):Xc.set(t,e,s);const r=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(sl,Xc,this.up):ds.lookAt(Xc,sl,this.up),this.quaternion.setFromRotationMatrix(ds),r&&(ds.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ds),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(UE),qf.child=t,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,r=this.children.length;s<r;s++){const u=this.children[s].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,LE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].updateMatrixWorld(t)}updateWorldMatrix(t,e){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(t.materials,this.material[d]));r.material=h}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(l(t.animations,d))}}if(e){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),E=u(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=r,s;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const r=t.children[s];this.add(r.clone())}return this}}$e.DEFAULT_UP=new X(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new X,ps=new X,Kf=new X,ms=new X,Or=new X,Pr=new X,Wv=new X,Zf=new X,Qf=new X,Jf=new X,$f=new Ae,td=new Ae,ed=new Ae;class Di{constructor(t=new X,e=new X,s=new X){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,r){r.subVectors(s,e),wi.subVectors(t,e),r.cross(wi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,s,r,l){wi.subVectors(r,e),ps.subVectors(s,e),Kf.subVectors(t,e);const u=wi.dot(wi),h=wi.dot(ps),d=wi.dot(Kf),p=ps.dot(ps),g=ps.dot(Kf),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(p*d-h*g)*v,E=(u*g-h*d)*v;return l.set(1-x-E,E,x)}static containsPoint(t,e,s,r){return this.getBarycoord(t,e,s,r,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,e,s,r,l,u,h,d){return this.getBarycoord(t,e,s,r,ms)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ms.x),d.addScaledVector(u,ms.y),d.addScaledVector(h,ms.z),d)}static getInterpolatedAttribute(t,e,s,r,l,u){return $f.setScalar(0),td.setScalar(0),ed.setScalar(0),$f.fromBufferAttribute(t,e),td.fromBufferAttribute(t,s),ed.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector($f,l.x),u.addScaledVector(td,l.y),u.addScaledVector(ed,l.z),u}static isFrontFacing(t,e,s,r){return wi.subVectors(s,e),ps.subVectors(t,e),wi.cross(ps).dot(r)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,r){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,s,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),wi.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,s,r,l){return Di.getInterpolation(t,this.a,this.b,this.c,e,s,r,l)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,r=this.b,l=this.c;let u,h;Or.subVectors(r,s),Pr.subVectors(l,s),Zf.subVectors(t,s);const d=Or.dot(Zf),p=Pr.dot(Zf);if(d<=0&&p<=0)return e.copy(s);Qf.subVectors(t,r);const g=Or.dot(Qf),_=Pr.dot(Qf);if(g>=0&&_<=g)return e.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),e.copy(s).addScaledVector(Or,u);Jf.subVectors(t,l);const x=Or.dot(Jf),E=Pr.dot(Jf);if(E>=0&&x<=E)return e.copy(l);const b=x*p-d*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),e.copy(s).addScaledVector(Pr,h);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return Wv.subVectors(l,r),h=(_-g)/(_-g+(x-E)),e.copy(r).addScaledVector(Wv,h);const y=1/(S+b+v);return u=b*y,h=v*y,e.copy(s).addScaledVector(Or,u).addScaledVector(Pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sa={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function nd(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class se{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,s,r=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=s,Ee.toWorkingColorSpace(this,r),this}setHSL(t,e,s,r=Ee.workingColorSpace){if(t=Tp(t,1),e=fe(e,0,1),s=fe(s,0,1),e===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+e):s+e-s*e,u=2*s-l;this.r=nd(u,l,t+1/3),this.g=nd(u,l,t),this.b=nd(u,l,t-1/3)}return Ee.toWorkingColorSpace(this,r),this}setStyle(t,e=fn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const s=gy[t.toLowerCase()];return s!==void 0?this.setHex(s,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Ee.fromWorkingColorSpace(Hn.copy(this),t),Math.round(fe(Hn.r*255,0,255))*65536+Math.round(fe(Hn.g*255,0,255))*256+Math.round(fe(Hn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(Hn.copy(this),e);const s=Hn.r,r=Hn.g,l=Hn.b,u=Math.max(s,r,l),h=Math.min(s,r,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case s:d=(r-l)/_+(r<l?6:0);break;case r:d=(l-s)/_+2;break;case l:d=(s-r)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=fn){Ee.fromWorkingColorSpace(Hn.copy(this),t);const e=Hn.r,s=Hn.g,r=Hn.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(t,e,s){return this.getHSL(sa),this.setHSL(sa.h+t,sa.s+e,sa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(sa),t.getHSL(Wc);const s=pl(sa.h,Wc.h,e),r=pl(sa.s,Wc.s,e),l=pl(sa.l,Wc.l,e);return this.setHSL(s,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*s+l[6]*r,this.g=l[1]*e+l[4]*s+l[7]*r,this.b=l[2]*e+l[5]*s+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new se;se.NAMES=gy;let NE=0;class Hi extends ja{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Xr,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Td,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==bs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bd&&(s.blendSrc=this.blendSrc),this.blendDst!==Td&&(s.blendDst=this.blendDst),this.blendEquation!==Ga&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(e){const l=r(t.textures),u=r(t.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const r=e.length;s=new Array(r);for(let l=0;l!==r;++l)s[l]=e[l].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ss extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new X,Yc=new Kt;let OE=0;class rn{constructor(t,e,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=lp,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[s+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)Yc.fromBufferAttribute(this,e),Yc.applyMatrix3(t),this.setXY(e,Yc.x,Yc.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ne(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this}setXYZW(t,e,s,r,l){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array),l=Ne(l,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lp&&(t.usage=this.usage),t}}class _y extends rn{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class vy extends rn{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class Es extends rn{constructor(t,e,s){super(new Float32Array(t),e,s)}}let PE=0;const yi=new ae,id=new $e,Ir=new X,ci=new Rs,al=new Rs,Tn=new X;class hi extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(py(t)?vy:_y)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new oe().getNormalMatrix(t);s.applyNormalMatrix(l),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,s){return yi.makeTranslation(t,e,s),this.applyMatrix4(yi),this}scale(t,e,s){return yi.makeScale(t,e,s),this.applyMatrix4(yi),this}lookAt(t){return id.lookAt(t),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const s=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Es(s,3))}else{const s=Math.min(t.length,e.count);for(let r=0;r<s;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const l=e[s];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const h=e[l];al.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(ci.min,al.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,al.max),ci.expandByPoint(Tn)):(ci.expandByPoint(al.min),ci.expandByPoint(al.max))}ci.getCenter(s);let r=0;for(let l=0,u=t.count;l<u;l++)Tn.fromBufferAttribute(t,l),r=Math.max(r,s.distanceToSquared(Tn));if(e)for(let l=0,u=e.length;l<u;l++){const h=e[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),d&&(Ir.fromBufferAttribute(t,p),Tn.add(Ir)),r=Math.max(r,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let W=0;W<s.count;W++)h[W]=new X,d[W]=new X;const p=new X,g=new X,_=new X,v=new Kt,x=new Kt,E=new Kt,b=new X,S=new X;function y(W,U,C){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,U),_.fromBufferAttribute(s,C),v.fromBufferAttribute(l,W),x.fromBufferAttribute(l,U),E.fromBufferAttribute(l,C),g.sub(p),_.sub(p),x.sub(v),E.sub(v);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(b),h[U].add(b),h[C].add(b),d[W].add(S),d[U].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let W=0,U=D.length;W<U;++W){const C=D[W],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)y(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new X,w=new X,B=new X,H=new X;function z(W){B.fromBufferAttribute(r,W),H.copy(B);const U=h[W];L.copy(U),L.sub(B.multiplyScalar(B.dot(U))).normalize(),w.crossVectors(H,U);const G=w.dot(d[W])<0?-1:1;u.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,U=D.length;W<U;++W){const C=D[W],G=C.start,lt=C.count;for(let rt=G,gt=G+lt;rt<gt;rt+=3)z(t.getX(rt+0)),z(t.getX(rt+1)),z(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let v=0,x=s.count;v<x;v++)s.setXYZ(v,0,0,0);const r=new X,l=new X,u=new X,h=new X,d=new X,p=new X,g=new X,_=new X;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,b),u.fromBufferAttribute(e,S),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),h.fromBufferAttribute(s,E),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),h.add(g),d.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=e.count;v<x;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)Tn.fromBufferAttribute(t,e),Tn.normalize(),t.setXYZ(e,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let x=0,E=0;for(let b=0,S=d.length;b<S;b++){h.isInterleavedBufferAttribute?x=d[b]*h.data.stride+h.offset:x=d[b]*g;for(let y=0;y<g;y++)v[E++]=p[x++]}return new rn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hi,s=this.index.array,r=this.attributes;for(const h in r){const d=r[h],p=t(d,s);e.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,s);d.push(x)}e.morphAttributes[h]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const p=s[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(r[d]=g,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const r=t.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(e))}const l=t.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(e));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yv=new ae,Ia=new io,jc=new Xi,jv=new X,qc=new X,Kc=new X,Zc=new X,sd=new X,Qc=new X,qv=new X,Jc=new X;class On extends $e{constructor(t=new hi,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(t,e){const s=this.geometry,r=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;e.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(l&&h){Qc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],_=l[d];g!==0&&(sd.fromBufferAttribute(_,t),u?Qc.addScaledVector(sd,g):Qc.addScaledVector(sd.sub(e),g))}e.add(Qc)}return e}raycast(t,e){const s=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),Ia.copy(t.ray).recast(t.near),!(jc.containsPoint(Ia.origin)===!1&&(Ia.intersectSphere(jc,jv)===null||Ia.origin.distanceToSquared(jv)>(t.far-t.near)**2))&&(Yv.copy(l).invert(),Ia.copy(t.ray).applyMatrix4(Yv),!(s.boundingBox!==null&&Ia.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,Ia)))}_computeIntersections(t,e,s){let r;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let w=D,B=L;w<B;w+=3){const H=h.getX(w),z=h.getX(w+1),W=h.getX(w+2);r=$c(this,y,t,s,p,g,_,H,z,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const D=h.getX(S),L=h.getX(S+1),w=h.getX(S+2);r=$c(this,u,t,s,p,g,_,D,L,w),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const S=v[E],y=u[S.materialIndex],D=Math.max(S.start,x.start),L=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let w=D,B=L;w<B;w+=3){const H=w,z=w+1,W=w+2;r=$c(this,y,t,s,p,g,_,H,z,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let S=E,y=b;S<y;S+=3){const D=S,L=S+1,w=S+2;r=$c(this,u,t,s,p,g,_,D,L,w),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}}function IE(o,t,e,s,r,l,u,h){let d;if(t.side===$n?d=s.intersectTriangle(u,l,r,!0,h):d=s.intersectTriangle(r,l,u,t.side===bs,h),d===null)return null;Jc.copy(h),Jc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Jc);return p<e.near||p>e.far?null:{distance:p,point:Jc.clone(),object:o}}function $c(o,t,e,s,r,l,u,h,d,p){o.getVertexPosition(h,qc),o.getVertexPosition(d,Kc),o.getVertexPosition(p,Zc);const g=IE(o,t,e,s,qc,Kc,Zc,qv);if(g){const _=new X;Di.getBarycoord(qv,qc,Kc,Zc,_),r&&(g.uv=Di.getInterpolatedAttribute(r,h,d,p,_,new Kt)),l&&(g.uv1=Di.getInterpolatedAttribute(l,h,d,p,_,new Kt)),u&&(g.normal=Di.getInterpolatedAttribute(u,h,d,p,_,new X),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new X,materialIndex:0};Di.getNormal(qc,Kc,Zc,v.normal),g.face=v,g.barycoord=_}return g}class Al extends hi{constructor(t=1,e=1,s=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:r,heightSegments:l,depthSegments:u};const h=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,s,e,t,u,l,0),E("z","y","x",1,-1,s,e,-t,u,l,1),E("x","z","y",1,1,t,s,e,r,u,2),E("x","z","y",1,-1,t,s,-e,r,u,3),E("x","y","z",1,-1,t,e,s,r,l,4),E("x","y","z",-1,-1,t,e,-s,r,l,5),this.setIndex(d),this.setAttribute("position",new Es(p,3)),this.setAttribute("normal",new Es(g,3)),this.setAttribute("uv",new Es(_,2));function E(b,S,y,D,L,w,B,H,z,W,U){const C=w/z,G=B/W,lt=w/2,rt=B/2,gt=H/2,ft=z+1,I=W+1;let Z=0,q=0;const Mt=new X;for(let N=0;N<I;N++){const tt=N*G-rt;for(let vt=0;vt<ft;vt++){const xt=vt*C-lt;Mt[b]=xt*D,Mt[S]=tt*L,Mt[y]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[S]=0,Mt[y]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(vt/z),_.push(1-N/W),Z+=1}}for(let N=0;N<W;N++)for(let tt=0;tt<z;tt++){const vt=v+tt+ft*N,xt=v+tt+ft*(N+1),J=v+(tt+1)+ft*(N+1),dt=v+(tt+1)+ft*N;d.push(vt,xt,dt),d.push(xt,J,dt),q+=6}h.addGroup(x,q,U),x+=q,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(o){const t={};for(const e in o){t[e]={};for(const s in o[e]){const r=o[e][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=r.clone():Array.isArray(r)?t[e][s]=r.slice():t[e][s]=r}}return t}function Xn(o){const t={};for(let e=0;e<o.length;e++){const s=Jr(o[e]);for(const r in s)t[r]=s[r]}return t}function zE(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function yy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const BE={clone:Jr,merge:Xn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=zE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}class xy extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=xs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const aa=new X,Kv=new Kt,Zv=new Kt;class Jn extends xy{constructor(t=50,e=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,s){aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(aa.x,aa.y).multiplyScalar(-t/aa.z),aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(aa.x,aa.y).multiplyScalar(-t/aa.z)}getViewSize(t,e){return this.getViewBounds(t,Kv,Zv),e.subVectors(Zv,Kv)}setViewOffset(t,e,s,r,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dl*.5*this.fov)/this.zoom,s=2*e,r=this.aspect*s,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,e-=u.offsetY*s/p,r*=u.width/d,s*=u.height/p}const h=this.filmOffset;h!==0&&(l+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zr=-90,Br=1;class VE extends $e{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(zr,Br,t,e);r.layers=this.layers,this.add(r);const l=new Jn(zr,Br,t,e);l.layers=this.layers,this.add(l);const u=new Jn(zr,Br,t,e);u.layers=this.layers,this.add(u);const h=new Jn(zr,Br,t,e);h.layers=this.layers,this.add(h);const d=new Jn(zr,Br,t,e);d.layers=this.layers,this.add(d);const p=new Jn(zr,Br,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,r,l,u,h,d]=e;for(const p of e)this.remove(p);if(t===xs)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Mu)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,r),t.render(e,l),t.setRenderTarget(s,1,r),t.render(e,u),t.setRenderTarget(s,2,r),t.render(e,h),t.setRenderTarget(s,3,r),t.render(e,d),t.setRenderTarget(s,4,r),t.render(e,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,r),t.render(e,g),t.setRenderTarget(_,v,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Sy extends Rn{constructor(t=[],e=qr,s,r,l,u,h,d,p,g){super(t,e,s,r,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class GE extends As{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},r=[s,s,s,s,s,s];this.texture=new Sy(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Al(5,5,5),l=new Mi({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:fa});l.uniforms.tEquirect.value=e;const u=new On(r,l),h=e.minFilter;return e.minFilter===ys&&(e.minFilter=ui),new VE(1,10,this).update(t,u),e.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,s=!0,r=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,s,r);t.setRenderTarget(l)}}class Xa extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let r=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const S=e.getJointPose(b,s),y=this._getHandJoint(p,b);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,s),r===null&&l!==null&&(r=l),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new Xa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}class Eu extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class XE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lp,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,s){t*=this.stride,s*=e.stride;for(let r=0,l=this.stride;r<l;r++)this.array[t+r]=e.array[s+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(e,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new X;class wp{constructor(t,e,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,s=this.data.count;e<s;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let s=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=Ne(s,this.array)),this.data.array[t*this.data.stride+this.offset+e]=s,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ci(e,this.array)),e}setXY(t,e,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this}setXYZ(t,e,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,e,s,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),s=Ne(s,this.array),r=Ne(r,this.array),l=Ne(l,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=l,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)e.push(this.data.array[r+l])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)e.push(this.data.array[r+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qv=new X,Jv=new Ae,$v=new Ae,WE=new X,t0=new ae,tu=new X,rd=new Xi,e0=new ae,od=new io;class YE extends On{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rv,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rs),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,tu),this.boundingBox.expandByPoint(tu)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let s=0;s<e.count;s++)this.getVertexPosition(s,tu),this.boundingSphere.expandByPoint(tu)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rd.copy(this.boundingSphere),rd.applyMatrix4(r),t.ray.intersectsSphere(rd)!==!1&&(e0.copy(r).invert(),od.copy(t.ray).applyMatrix4(e0),!(this.boundingBox!==null&&od.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,od)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ae,e=this.geometry.attributes.skinWeight;for(let s=0,r=e.count;s<r;s++){t.fromBufferAttribute(e,s);const l=1/t.manhattanLength();l!==1/0?t.multiplyScalar(l):t.set(1,0,0,0),e.setXYZW(s,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===VM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const s=this.skeleton,r=this.geometry;Jv.fromBufferAttribute(r.attributes.skinIndex,t),$v.fromBufferAttribute(r.attributes.skinWeight,t),Qv.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let l=0;l<4;l++){const u=$v.getComponent(l);if(u!==0){const h=Jv.getComponent(l);t0.multiplyMatrices(s.bones[h].matrixWorld,s.boneInverses[h]),e.addScaledVector(WE.copy(Qv).applyMatrix4(t0),u)}}return e.applyMatrix4(this.bindMatrixInverse)}}class My extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $r extends Rn{constructor(t=null,e=1,s=1,r,l,u,h,d,p=We,g=We,_,v){super(null,u,h,d,p,g,r,l,_,v),this.isDataTexture=!0,this.image={data:t,width:e,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const n0=new ae,jE=new ae;class Cp{constructor(t=[],e=[]){this.uuid=Li(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const s=new ae;this.bones[t]&&s.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&s.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const s=this.bones[t];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const t=this.bones,e=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let l=0,u=t.length;l<u;l++){const h=t[l]?t[l].matrixWorld:jE;n0.multiplyMatrices(h,e[l]),n0.toArray(s,l*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Cp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const s=new $r(e,t,t,An,Nn);return s.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=s,this}getBoneByName(t){for(let e=0,s=this.bones.length;e<s;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let s=0,r=t.bones.length;s<r;s++){const l=t.bones[s];let u=e[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new My),this.bones.push(u),this.boneInverses.push(new ae().fromArray(t.boneInverses[s]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,s=this.boneInverses;for(let r=0,l=e.length;r<l;r++){const u=e[r];t.bones.push(u.uuid);const h=s[r];t.boneInverses.push(h.toArray())}return t}}class cp extends rn{constructor(t,e,s,r=1){super(t,e,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fr=new ae,i0=new ae,eu=[],s0=new Rs,qE=new ae,rl=new On,ol=new Xi;class KE extends On{constructor(t,e,s){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cp(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,qE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,Fr),s0.copy(t.boundingBox).applyMatrix4(Fr),this.boundingBox.union(s0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<e;s++)this.getMatrixAt(s,Fr),ol.copy(t.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(ol)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const s=e.morphTargetInfluences,r=this.morphTexture.source.data.data,l=s.length+1,u=t*l+1;for(let h=0;h<s.length;h++)s[h]=r[u+h]}raycast(t,e){const s=this.matrixWorld,r=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(s),t.ray.intersectsSphere(ol)!==!1))for(let l=0;l<r;l++){this.getMatrixAt(l,Fr),i0.multiplyMatrices(s,Fr),rl.matrixWorld=i0,rl.raycast(t,eu);for(let u=0,h=eu.length;u<h;u++){const d=eu[u];d.instanceId=l,d.object=this,e.push(d)}eu.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const s=e.morphTargetInfluences,r=s.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(r*this.count),r,this.count,Sp,Nn));const l=this.morphTexture.source.data.data;let u=0;for(let p=0;p<s.length;p++)u+=s[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=r*t;l[d]=h,l.set(s,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ld=new X,ZE=new X,QE=new oe;class oa{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,r){return this.normal.set(t,e,s),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const r=ld.subVectors(s,e).cross(ZE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const s=t.delta(ld),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(s,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||QE.getNormalMatrix(t),r=this.coplanarPoint(ld).applyMatrix4(t),l=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const za=new Xi,nu=new X;class Dp{constructor(t=new oa,e=new oa,s=new oa,r=new oa,l=new oa,u=new oa){this.planes=[t,e,s,r,l,u]}set(t,e,s,r,l,u){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(s),h[3].copy(r),h[4].copy(l),h[5].copy(u),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=xs){const s=this.planes,r=t.elements,l=r[0],u=r[1],h=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],x=r[8],E=r[9],b=r[10],S=r[11],y=r[12],D=r[13],L=r[14],w=r[15];if(s[0].setComponents(d-l,v-p,S-x,w-y).normalize(),s[1].setComponents(d+l,v+p,S+x,w+y).normalize(),s[2].setComponents(d+u,v+g,S+E,w+D).normalize(),s[3].setComponents(d-u,v-g,S-E,w-D).normalize(),s[4].setComponents(d-h,v-_,S-b,w-L).normalize(),e===xs)s[5].setComponents(d+h,v+_,S+b,w+L).normalize();else if(e===Mu)s[5].setComponents(h,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),za.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(t){return za.center.set(0,0,0),za.radius=.7071067811865476,za.applyMatrix4(t.matrixWorld),this.intersectsSphere(za)}intersectsSphere(t){const e=this.planes,s=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(s)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const r=e[s];if(nu.x=r.normal.x>0?t.max.x:t.min.x,nu.y=r.normal.y>0?t.max.y:t.min.y,nu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ey extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bu=new X,Tu=new X,a0=new ae,ll=new io,iu=new Xi,cd=new X,r0=new X;class Lp extends $e{constructor(t=new hi,e=new Ey){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[0];for(let r=1,l=e.count;r<l;r++)bu.fromBufferAttribute(e,r-1),Tu.fromBufferAttribute(e,r),s[r]=s[r-1],s[r]+=bu.distanceTo(Tu);t.setAttribute("lineDistance",new Es(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const s=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(r),iu.radius+=l,t.ray.intersectsSphere(iu)===!1)return;a0.copy(r).invert(),ll.copy(t.ray).applyMatrix4(a0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let b=x,S=E-1;b<S;b+=p){const y=g.getX(b),D=g.getX(b+1),L=su(this,t,ll,d,y,D,b);L&&e.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(x),y=su(this,t,ll,d,b,S,E-1);y&&e.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=x,S=E-1;b<S;b+=p){const y=su(this,t,ll,d,b,b+1,b);y&&e.push(y)}if(this.isLineLoop){const b=su(this,t,ll,d,E-1,x,E-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function su(o,t,e,s,r,l,u){const h=o.geometry.attributes.position;if(bu.fromBufferAttribute(h,r),Tu.fromBufferAttribute(h,l),e.distanceSqToSegment(bu,Tu,cd,r0)>s)return;cd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(cd);if(!(p<t.near||p>t.far))return{distance:p,point:r0.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const o0=new X,l0=new X;class JE extends Lp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,s=[];for(let r=0,l=e.count;r<l;r+=2)o0.fromBufferAttribute(e,r),l0.fromBufferAttribute(e,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+o0.distanceTo(l0);t.setAttribute("lineDistance",new Es(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $E extends Lp{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class by extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const c0=new ae,up=new io,au=new Xi,ru=new X;class Up extends $e{constructor(t=new hi,e=new by){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const s=this.geometry,r=this.matrixWorld,l=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),au.copy(s.boundingSphere),au.applyMatrix4(r),au.radius+=l,t.ray.intersectsSphere(au)===!1)return;c0.copy(r).invert(),up.copy(t.ray).applyMatrix4(c0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let E=v,b=x;E<b;E++){const S=p.getX(E);ru.fromBufferAttribute(_,S),u0(ru,S,d,r,t,e,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let E=v,b=x;E<b;E++)ru.fromBufferAttribute(_,E),u0(ru,E,d,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const h=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function u0(o,t,e,s,r,l,u){const h=up.distanceSqToPoint(o);if(h<e){const d=new X;up.closestPointToPoint(o,d),d.applyMatrix4(s);const p=r.ray.origin.distanceTo(d);if(p<r.near||p>r.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Ty extends Rn{constructor(t,e,s=Wa,r,l,u,h=We,d=We,p,g=vl){if(g!==vl&&g!==yl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,l,u,h,d,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pa extends hi{constructor(t=1,e=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:r};const l=t/2,u=e/2,h=Math.floor(s),d=Math.floor(r),p=h+1,g=d+1,_=t/h,v=e/d,x=[],E=[],b=[],S=[];for(let y=0;y<g;y++){const D=y*v-u;for(let L=0;L<p;L++){const w=L*_-l;E.push(w,-D,0),b.push(0,0,1),S.push(L/h),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<h;D++){const L=D+p*y,w=D+p*(y+1),B=D+1+p*(y+1),H=D+1+p*y;x.push(L,w,H),x.push(w,B,H)}this.setIndex(x),this.setAttribute("position",new Es(E,3)),this.setAttribute("normal",new Es(b,3)),this.setAttribute("uv",new Es(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Np extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hy,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wi extends Np{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tb extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eb extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ou(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function nb(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ib(o){function t(r,l){return o[r]-o[l]}const e=o.length,s=new Array(e);for(let r=0;r!==e;++r)s[r]=r;return s.sort(t),s}function h0(o,t,e){const s=o.length,r=new o.constructor(s);for(let l=0,u=0;u!==s;++l){const h=e[l]*t;for(let d=0;d!==t;++d)r[u++]=o[h+d]}return r}function Ay(o,t,e,s){let r=1,l=o[0];for(;l!==void 0&&l[s]===void 0;)l=o[r++];if(l===void 0)return;let u=l[s];if(u!==void 0)if(Array.isArray(u))do u=l[s],u!==void 0&&(t.push(l.time),e.push(...u)),l=o[r++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[s],u!==void 0&&(t.push(l.time),u.toArray(e,e.length)),l=o[r++];while(l!==void 0);else do u=l[s],u!==void 0&&(t.push(l.time),e.push(u)),l=o[r++];while(l!==void 0)}class Rl{constructor(t,e,s,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(s),this.sampleValues=e,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let s=this._cachedIndex,r=e[s],l=e[s-1];t:{e:{let u;n:{i:if(!(t<r)){for(let h=s+2;;){if(r===void 0){if(t<l)break i;return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===h)break;if(l=r,r=e[++s],t<r)break e}u=e.length;break n}if(!(t>=l)){const h=e[1];t<h&&(s=2,l=h);for(let d=s-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===d)break;if(r=l,l=e[--s-1],t>=l)break e}u=s,s=0;break n}break t}for(;s<u;){const h=s+u>>>1;t<e[h]?u=h:s=h+1}if(r=e[s],l=e[s-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=e.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,l,r)}return this.interpolate_(s,l,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,r=this.valueSize,l=t*r;for(let u=0;u!==r;++u)e[u]=s[l+u];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sb extends Rl{constructor(t,e,s,r){super(t,e,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wv,endingEnd:wv}}intervalChanged_(t,e,s){const r=this.parameterPositions;let l=t-2,u=t+1,h=r[l],d=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case Cv:l=t,h=2*e-s;break;case Dv:l=r.length-2,h=e+r[l]-r[l+1];break;default:l=t,h=s}if(d===void 0)switch(this.getSettings_().endingEnd){case Cv:u=t,d=2*s-e;break;case Dv:u=1,d=s+r[1]-r[0];break;default:u=t-1,d=e}const p=(s-e)*.5,g=this.valueSize;this._weightPrev=p/(e-h),this._weightNext=p/(d-s),this._offsetPrev=l*g,this._offsetNext=u*g}interpolate_(t,e,s,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,E=(s-e)/(r-e),b=E*E,S=b*E,y=-v*S+2*v*b-v*E,D=(1+v)*S+(-1.5-2*v)*b+(-.5+v)*E+1,L=(-1-x)*S+(1.5+x)*b+.5*E,w=x*S-x*b;for(let B=0;B!==h;++B)l[B]=y*u[g+B]+D*u[p+B]+L*u[d+B]+w*u[_+B];return l}}class ab extends Rl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t,e,s,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=t*h,p=d-h,g=(s-e)/(r-e),_=1-g;for(let v=0;v!==h;++v)l[v]=u[p+v]*_+u[d+v]*g;return l}}class rb extends Rl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ui{constructor(t,e,s,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ou(e,this.TimeBufferType),this.values=ou(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let s;if(e.toJSON!==this.toJSON)s=e.toJSON(t);else{s={name:t.name,times:ou(t.times,Array),values:ou(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(s.interpolation=r)}return s.type=t.ValueTypeName,s}InterpolantFactoryMethodDiscrete(t){return new rb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ab(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sb(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xl:e=this.InterpolantFactoryMethodDiscrete;break;case Sl:e=this.InterpolantFactoryMethodLinear;break;case Ff:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xl;case this.InterpolantFactoryMethodLinear:return Sl;case this.InterpolantFactoryMethodSmooth:return Ff}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let s=0,r=e.length;s!==r;++s)e[s]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let s=0,r=e.length;s!==r;++s)e[s]*=t}return this}trim(t,e){const s=this.times,r=s.length;let l=0,u=r-1;for(;l!==r&&s[l]<t;)++l;for(;u!==-1&&s[u]>e;)--u;if(++u,l!==0||u!==r){l>=u&&(u=Math.max(u,1),l=u-1);const h=this.getValueSize();this.times=s.slice(l,u),this.values=this.values.slice(l*h,u*h)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const s=this.times,r=this.values,l=s.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let u=null;for(let h=0;h!==l;h++){const d=s[h];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,d),t=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,d,u),t=!1;break}u=d}if(r!==void 0&&nb(r))for(let h=0,d=r.length;h!==d;++h){const p=r[h];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,p),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),s=this.getValueSize(),r=this.getInterpolation()===Ff,l=t.length-1;let u=1;for(let h=1;h<l;++h){let d=!1;const p=t[h],g=t[h+1];if(p!==g&&(h!==1||p!==t[0]))if(r)d=!0;else{const _=h*s,v=_-s,x=_+s;for(let E=0;E!==s;++E){const b=e[_+E];if(b!==e[v+E]||b!==e[x+E]){d=!0;break}}}if(d){if(h!==u){t[u]=t[h];const _=h*s,v=u*s;for(let x=0;x!==s;++x)e[v+x]=e[_+x]}++u}}if(l>0){t[u]=t[l];for(let h=l*s,d=u*s,p=0;p!==s;++p)e[d+p]=e[h+p];++u}return u!==t.length?(this.times=t.slice(0,u),this.values=e.slice(0,u*s)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),s=this.constructor,r=new s(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Ui.prototype.ValueTypeName="";Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=Sl;class so extends Ui{constructor(t,e,s){super(t,e,s)}}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=xl;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class Ry extends Ui{constructor(t,e,s,r){super(t,e,s,r)}}Ry.prototype.ValueTypeName="color";class to extends Ui{constructor(t,e,s,r){super(t,e,s,r)}}to.prototype.ValueTypeName="number";class ob extends Rl{constructor(t,e,s,r){super(t,e,s,r)}interpolate_(t,e,s,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=(s-e)/(r-e);let p=t*h;for(let g=p+h;p!==g;p+=4)Gi.slerpFlat(l,0,u,p-h,u,p,d);return l}}class eo extends Ui{constructor(t,e,s,r){super(t,e,s,r)}InterpolantFactoryMethodLinear(t){return new ob(this.times,this.values,this.getValueSize(),t)}}eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;class ao extends Ui{constructor(t,e,s){super(t,e,s)}}ao.prototype.ValueTypeName="string";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=xl;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Ui{constructor(t,e,s,r){super(t,e,s,r)}}no.prototype.ValueTypeName="vector";class lb{constructor(t="",e=-1,s=[],r=GM){this.name=t,this.tracks=s,this.duration=e,this.blendMode=r,this.uuid=Li(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],s=t.tracks,r=1/(t.fps||1);for(let u=0,h=s.length;u!==h;++u)e.push(ub(s[u]).scale(r));const l=new this(t.name,t.duration,e,t.blendMode);return l.uuid=t.uuid,l}static toJSON(t){const e=[],s=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let l=0,u=s.length;l!==u;++l)e.push(Ui.toJSON(s[l]));return r}static CreateFromMorphTargetSequence(t,e,s,r){const l=e.length,u=[];for(let h=0;h<l;h++){let d=[],p=[];d.push((h+l-1)%l,h,(h+1)%l),p.push(0,1,0);const g=ib(d);d=h0(d,1,g),p=h0(p,1,g),!r&&d[0]===0&&(d.push(l),p.push(p[0])),u.push(new to(".morphTargetInfluences["+e[h].name+"]",d,p).scale(1/s))}return new this(t,-1,u)}static findByName(t,e){let s=t;if(!Array.isArray(t)){const r=t;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===e)return s[r];return null}static CreateClipsFromMorphTargetSequences(t,e,s){const r={},l=/^([\w-]*?)([\d]+)$/;for(let h=0,d=t.length;h<d;h++){const p=t[h],g=p.name.match(l);if(g&&g.length>1){const _=g[1];let v=r[_];v||(r[_]=v=[]),v.push(p)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],e,s));return u}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(_,v,x,E,b){if(x.length!==0){const S=[],y=[];Ay(x,S,y,E),S.length!==0&&b.push(new _(v,S,y))}},r=[],l=t.name||"default",u=t.fps||30,h=t.blendMode;let d=t.length||-1;const p=t.hierarchy||[];for(let _=0;_<p.length;_++){const v=p[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let E;for(E=0;E<v.length;E++)if(v[E].morphTargets)for(let b=0;b<v[E].morphTargets.length;b++)x[v[E].morphTargets[b]]=-1;for(const b in x){const S=[],y=[];for(let D=0;D!==v[E].morphTargets.length;++D){const L=v[E];S.push(L.time),y.push(L.morphTarget===b?1:0)}r.push(new to(".morphTargetInfluence["+b+"]",S,y))}d=x.length*u}else{const x=".bones["+e[_].name+"]";s(no,x+".position",v,"pos",r),s(eo,x+".quaternion",v,"rot",r),s(no,x+".scale",v,"scl",r)}}return r.length===0?null:new this(l,d,r,h)}resetDuration(){const t=this.tracks;let e=0;for(let s=0,r=t.length;s!==r;++s){const l=this.tracks[s];e=Math.max(e,l.times[l.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cb(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return Ry;case"quaternion":return eo;case"bool":case"boolean":return so;case"string":return ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function ub(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=cb(o.type);if(o.times===void 0){const e=[],s=[];Ay(o.keys,e,s,"value"),o.times=e,o.values=s}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const ua={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Op{constructor(t,e,s){const r=this;let l=!1,u=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(g){h++,l===!1&&r.onStart!==void 0&&r.onStart(g,u,h),l=!0},this.itemEnd=function(g){u++,r.onProgress!==void 0&&r.onProgress(g,u,h),u===h&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(g){r.onError!==void 0&&r.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const x=p[_],E=p[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null}}}const hb=new Op;class qa{constructor(t){this.manager=t!==void 0?t:hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise(function(r,l){s.load(t,r,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";const gs={};class fb extends Error{constructor(t,e){super(t),this.response=e}}class Au extends qa{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,e,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=ua.get(t);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(l),this.manager.itemEnd(t)},0),l;if(gs[t]!==void 0){gs[t].push({onLoad:e,onProgress:s,onError:r});return}gs[t]=[],gs[t].push({onLoad:e,onProgress:s,onError:r});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,d=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=gs[t],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),x=v?parseInt(v):0,E=x!==0;let b=0;const S=new ReadableStream({start(y){D();function D(){_.read().then(({done:L,value:w})=>{if(L)y.close();else{b+=w.byteLength;const B=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:x});for(let H=0,z=g.length;H<z;H++){const W=g[H];W.onProgress&&W.onProgress(B)}y.enqueue(w),D()}},L=>{y.error(L)})}}});return new Response(S)}else throw new fb(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(d){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return p.arrayBuffer().then(E=>x.decode(E))}}}).then(p=>{ua.add(t,p);const g=gs[t];delete gs[t];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onLoad&&x.onLoad(p)}}).catch(p=>{const g=gs[t];if(g===void 0)throw this.manager.itemError(t),p;delete gs[t];for(let _=0,v=g.length;_<v;_++){const x=g[_];x.onError&&x.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class db extends qa{constructor(t){super(t)}load(t,e,s,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=ua.get(t);if(u!==void 0)return l.manager.itemStart(t),setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0),u;const h=Ml("img");function d(){g(),ua.add(t,this),e&&e(this),l.manager.itemEnd(t)}function p(_){g(),r&&r(_),l.manager.itemError(t),l.manager.itemEnd(t)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),l.manager.itemStart(t),h.src=t,h}}class pb extends qa{constructor(t){super(t)}load(t,e,s,r){const l=new Rn,u=new db(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(h){l.image=h,l.needsUpdate=!0,e!==void 0&&e(l)},s,r),l}}class Pp extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ud=new ae,f0=new X,d0=new X;class Ip{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;f0.setFromMatrixPosition(t.matrixWorld),e.position.copy(f0),d0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(d0),e.updateMatrixWorld(),ud.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ud)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mb extends Ip{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,s=Qr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,l=t.distance||e.far;(s!==e.fov||r!==e.aspect||l!==e.far)&&(e.fov=s,e.aspect=r,e.far=l,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gb extends Pp{constructor(t,e,s=0,r=Math.PI/3,l=0,u=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=s,this.angle=r,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new mb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const p0=new ae,cl=new X,hd=new X;class _b extends Ip{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,e=0){const s=this.camera,r=this.matrix,l=t.distance||s.far;l!==s.far&&(s.far=l,s.updateProjectionMatrix()),cl.setFromMatrixPosition(t.matrixWorld),s.position.copy(cl),hd.copy(s.position),hd.add(this._cubeDirections[e]),s.up.copy(this._cubeUps[e]),s.lookAt(hd),s.updateMatrixWorld(),r.makeTranslation(-cl.x,-cl.y,-cl.z),p0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p0)}}class vb extends Pp{constructor(t,e,s=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new _b}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ya extends xy{constructor(t=-1,e=1,s=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=s-t,u=s+t,h=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yb extends Ip{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xb extends Pp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new yb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ml{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Sb extends qa{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=ua.get(t);if(u!==void 0){if(l.manager.itemStart(t),u.then){u.then(p=>{e&&e(p),l.manager.itemEnd(t)}).catch(p=>{r&&r(p)});return}return setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const d=fetch(t,h).then(function(p){return p.blob()}).then(function(p){return createImageBitmap(p,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(p){return ua.add(t,p),e&&e(p),l.manager.itemEnd(t),p}).catch(function(p){r&&r(p),ua.remove(t),l.manager.itemError(t),l.manager.itemEnd(t)});ua.add(t,d),l.manager.itemStart(t)}}class Mb extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const zp="\\[\\]\\.:\\/",Eb=new RegExp("["+zp+"]","g"),Bp="[^"+zp+"]",bb="[^"+zp.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",Bp),Ab=/(WCOD+)?/.source.replace("WCOD",bb),Rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bp),wb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bp),Cb=new RegExp("^"+Tb+Ab+Rb+wb+"$"),Db=["material","materials","bones","map"];class Lb{constructor(t,e,s){const r=s||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(t,e)}setValue(t,e){const s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,l=s.length;r!==l;++r)s[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,s=t.length;e!==s;++e)t[e].unbind()}}class Oe{constructor(t,e,s){this.path=e,this.parsedPath=s||Oe.parseTrackName(e),this.node=Oe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,s){return t&&t.isAnimationObjectGroup?new Oe.Composite(t,e,s):new Oe(t,e,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Eb,"")}static parseTrackName(t){const e=Cb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const s={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const l=s.nodeName.substring(r+1);Db.indexOf(l)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=l)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const s=t.skeleton.getBoneByName(e);if(s!==void 0)return s}if(t.children){const s=function(l){for(let u=0;u<l.length;u++){const h=l[u];if(h.name===e||h.uuid===e)return h;const d=s(h.children);if(d)return d}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const s=this.resolvedProperty;for(let r=0,l=s.length;r!==l;++r)t[e++]=s[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const s=this.resolvedProperty;for(let r=0,l=s.length;r!==l;++r)s[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const s=this.resolvedProperty;for(let r=0,l=s.length;r!==l;++r)s[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const s=this.resolvedProperty;for(let r=0,l=s.length;r!==l;++r)s[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,s=e.objectName,r=e.propertyName;let l=e.propertyIndex;if(t||(t=Oe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let p=e.objectIndex;switch(s){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===p){p=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(p!==void 0){if(t[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[p]}}const u=t[r];if(u===void 0){const p=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[l]!==void 0&&(l=t.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=Lb;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const m0=new ae;class wy{constructor(t,e,s=0,r=1/0){this.ray=new io(t,e),this.near=s,this.far=r,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return m0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(m0),this}intersectObject(t,e=!0,s=[]){return hp(t,this,s,e),s.sort(g0),s}intersectObjects(t,e=!0,s=[]){for(let r=0,l=t.length;r<l;r++)hp(t[r],this,s,e);return s.sort(g0),s}}function g0(o,t){return o.distance-t.distance}function hp(o,t,e,s){let r=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(r=!1),r===!0&&s===!0){const l=o.children;for(let u=0,h=l.length;u<h;u++)hp(l[u],t,e,!0)}}class _0{constructor(t=1,e=0,s=0){this.radius=t,this.phi=e,this.theta=s}set(t,e,s){return this.radius=t,this.phi=e,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,s){return this.radius=Math.sqrt(t*t+e*e+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ub extends ja{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function v0(o,t,e,s){const r=Nb(s);switch(e){case sy:return o*t;case ry:return o*t;case oy:return o*t*2;case Sp:return o*t/r.components*r.byteLength;case Mp:return o*t/r.components*r.byteLength;case ly:return o*t*2/r.components*r.byteLength;case Ep:return o*t*2/r.components*r.byteLength;case ay:return o*t*3/r.components*r.byteLength;case An:return o*t*4/r.components*r.byteLength;case bp:return o*t*4/r.components*r.byteLength;case du:case pu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Id:case Bd:return Math.max(o,16)*Math.max(t,8)/4;case Pd:case zd:return Math.max(o,8)*Math.max(t,8)/2;case Fd:case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case jd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case _u:case np:case ip:return Math.ceil(o/4)*Math.ceil(t/4)*16;case cy:case sp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ap:case rp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nb(o){switch(o){case Ts:case ey:return{byteLength:1,components:1};case gl:case ny:case Tl:return{byteLength:2,components:1};case yp:case xp:return{byteLength:2,components:4};case Wa:case vp:case Nn:return{byteLength:4,components:1};case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cy(){let o=null,t=!1,e=null,s=null;function r(l,u){e(l,u),s=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(s=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function Ob(o){const t=new WeakMap;function e(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,d,p){const g=d.array,_=d.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],b=_[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const b=_[x];o.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(o.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,e(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,d),p.version=h.version}}return{get:r,remove:l,update:u}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
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
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
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
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sT=`#define PI 3.141592653589793
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
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rT=`vec3 transformedNormal = objectNormal;
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
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
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
}`,ET=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AT=`uniform bool receiveShadow;
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
#endif`,RT=`#ifdef USE_ENVMAP
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
#endif`,wT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
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
#endif`,NT=`struct PhysicalMaterial {
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
}`,OT=`
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
#endif`,PT=`#if defined( RE_IndirectDiffuse )
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
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XT=`#if defined( USE_POINTS_UV )
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
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
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
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iA=`#ifdef USE_NORMALMAP
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
#endif`,sA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yA=`float getShadowMask() {
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
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SA=`#ifdef USE_SKINNING
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
#endif`,MA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EA=`#ifdef USE_SKINNING
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
#endif`,bA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#ifdef USE_TRANSMISSION
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PA=`uniform sampler2D t2D;
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HA=`#include <common>
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
}`,VA=`#if DEPTH_PACKING == 3200
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
}`,GA=`#define DISTANCE
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
}`,kA=`#define DISTANCE
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`uniform float scale;
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
}`,jA=`uniform vec3 diffuse;
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
}`,qA=`#include <common>
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
}`,KA=`uniform vec3 diffuse;
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
}`,ZA=`#define LAMBERT
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
}`,QA=`#define LAMBERT
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
}`,JA=`#define MATCAP
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
}`,$A=`#define MATCAP
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
}`,t1=`#define NORMAL
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
}`,e1=`#define NORMAL
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
}`,n1=`#define PHONG
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
}`,i1=`#define PHONG
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
}`,s1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,r1=`#define TOON
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
}`,o1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,h1=`uniform vec3 color;
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
}`,f1=`uniform float rotation;
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
}`,d1=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Pb,alphahash_pars_fragment:Ib,alphamap_fragment:zb,alphamap_pars_fragment:Bb,alphatest_fragment:Fb,alphatest_pars_fragment:Hb,aomap_fragment:Vb,aomap_pars_fragment:Gb,batching_pars_vertex:kb,batching_vertex:Xb,begin_vertex:Wb,beginnormal_vertex:Yb,bsdfs:jb,iridescence_fragment:qb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:$b,color_fragment:tT,color_pars_fragment:eT,color_pars_vertex:nT,color_vertex:iT,common:sT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:rT,displacementmap_pars_vertex:oT,displacementmap_vertex:lT,emissivemap_fragment:cT,emissivemap_pars_fragment:uT,colorspace_fragment:hT,colorspace_pars_fragment:fT,envmap_fragment:dT,envmap_common_pars_fragment:pT,envmap_pars_fragment:mT,envmap_pars_vertex:gT,envmap_physical_pars_fragment:RT,envmap_vertex:_T,fog_vertex:vT,fog_pars_vertex:yT,fog_fragment:xT,fog_pars_fragment:ST,gradientmap_pars_fragment:MT,lightmap_pars_fragment:ET,lights_lambert_fragment:bT,lights_lambert_pars_fragment:TT,lights_pars_begin:AT,lights_toon_fragment:wT,lights_toon_pars_fragment:CT,lights_phong_fragment:DT,lights_phong_pars_fragment:LT,lights_physical_fragment:UT,lights_physical_pars_fragment:NT,lights_fragment_begin:OT,lights_fragment_maps:PT,lights_fragment_end:IT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:FT,logdepthbuf_vertex:HT,map_fragment:VT,map_pars_fragment:GT,map_particle_fragment:kT,map_particle_pars_fragment:XT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:YT,morphinstance_vertex:jT,morphcolor_vertex:qT,morphnormal_vertex:KT,morphtarget_pars_vertex:ZT,morphtarget_vertex:QT,normal_fragment_begin:JT,normal_fragment_maps:$T,normal_pars_fragment:tA,normal_pars_vertex:eA,normal_vertex:nA,normalmap_pars_fragment:iA,clearcoat_normal_fragment_begin:sA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:rA,iridescence_pars_fragment:oA,opaque_fragment:lA,packing:cA,premultiplied_alpha_fragment:uA,project_vertex:hA,dithering_fragment:fA,dithering_pars_fragment:dA,roughnessmap_fragment:pA,roughnessmap_pars_fragment:mA,shadowmap_pars_fragment:gA,shadowmap_pars_vertex:_A,shadowmap_vertex:vA,shadowmask_pars_fragment:yA,skinbase_vertex:xA,skinning_pars_vertex:SA,skinning_vertex:MA,skinnormal_vertex:EA,specularmap_fragment:bA,specularmap_pars_fragment:TA,tonemapping_fragment:AA,tonemapping_pars_fragment:RA,transmission_fragment:wA,transmission_pars_fragment:CA,uv_pars_fragment:DA,uv_pars_vertex:LA,uv_vertex:UA,worldpos_vertex:NA,background_vert:OA,background_frag:PA,backgroundCube_vert:IA,backgroundCube_frag:zA,cube_vert:BA,cube_frag:FA,depth_vert:HA,depth_frag:VA,distanceRGBA_vert:GA,distanceRGBA_frag:kA,equirect_vert:XA,equirect_frag:WA,linedashed_vert:YA,linedashed_frag:jA,meshbasic_vert:qA,meshbasic_frag:KA,meshlambert_vert:ZA,meshlambert_frag:QA,meshmatcap_vert:JA,meshmatcap_frag:$A,meshnormal_vert:t1,meshnormal_frag:e1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:s1,meshphysical_frag:a1,meshtoon_vert:r1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:h1,sprite_vert:f1,sprite_frag:d1},Lt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Fi={basic:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Xn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Xn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Xn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Xn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Xn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Xn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Xn([Lt.common,Lt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Xn([Lt.lights,Lt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Fi.physical={uniforms:Xn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const lu={r:0,b:0,g:0},Ba=new ki,p1=new ae;function m1(o,t,e,s,r,l,u){const h=new se(0);let d=l===!0?0:1,p,g,_=null,v=0,x=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?e:t).get(w)),w}function b(L){let w=!1;const B=E(L);B===null?y(h,d):B&&B.isColor&&(y(B,1),w=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,w){const B=E(w);B&&(B.isCubeTexture||B.mapping===Ru)?(g===void 0&&(g=new On(new Al(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Jr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ba.copy(w.backgroundRotation),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(Ba)),g.material.toneMapped=Ee.getTransfer(B.colorSpace)!==He,(_!==B||v!==B.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,_=B,v=B.version,x=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new On(new pa(2,2),new Mi({name:"BackgroundMaterial",uniforms:Jr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(B.colorSpace)!==He,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||v!==B.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=B,v=B.version,x=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,w){L.getRGB(lu,yy(o)),s.buffers.color.setClear(lu.r,lu.g,lu.b,w,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),d=w,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(h,d)},render:b,addToRenderList:S,dispose:D}}function g1(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},r=v(null);let l=r,u=!1;function h(C,G,lt,rt,gt){let ft=!1;const I=_(rt,lt,G);l!==I&&(l=I,p(l.object)),ft=x(C,rt,lt,gt),ft&&E(C,rt,lt,gt),gt!==null&&t.update(gt,o.ELEMENT_ARRAY_BUFFER),(ft||u)&&(u=!1,w(C,G,lt,rt),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function d(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ft=gt[G.id];ft===void 0&&(ft={},gt[G.id]=ft);let I=ft[rt];return I===void 0&&(I=v(d()),ft[rt]=I),I}function v(C){const G=[],lt=[],rt=[];for(let gt=0;gt<e;gt++)G[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function x(C,G,lt,rt){const gt=l.attributes,ft=G.attributes;let I=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){const N=gt[q];let tt=ft[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;I++}return l.attributesNum!==I||l.index!==rt}function E(C,G,lt,rt){const gt={},ft=G.attributes;let I=0;const Z=lt.getAttributes();for(const q in Z)if(Z[q].location>=0){let N=ft[q];N===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),gt[q]=tt,I++}l.attributes=gt,l.attributesNum=I,l.index=rt}function b(){const C=l.newAttributes;for(let G=0,lt=C.length;G<lt;G++)C[G]=0}function S(C){y(C,0)}function y(C,G){const lt=l.newAttributes,rt=l.enabledAttributes,gt=l.attributeDivisors;lt[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function D(){const C=l.newAttributes,G=l.enabledAttributes;for(let lt=0,rt=G.length;lt<rt;lt++)G[lt]!==C[lt]&&(o.disableVertexAttribArray(lt),G[lt]=0)}function L(C,G,lt,rt,gt,ft,I){I===!0?o.vertexAttribIPointer(C,G,lt,gt,ft):o.vertexAttribPointer(C,G,lt,rt,gt,ft)}function w(C,G,lt,rt){b();const gt=rt.attributes,ft=lt.getAttributes(),I=G.defaultAttributeValues;for(const Z in ft){const q=ft[Z];if(q.location>=0){let Mt=gt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const N=Mt.normalized,tt=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const xt=vt.buffer,J=vt.type,dt=vt.bytesPerElement,yt=J===o.INT||J===o.UNSIGNED_INT||Mt.gpuType===vp;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ot=At.stride,le=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)y(q.location+Zt,At.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)S(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Zt=0;Zt<q.locationSize;Zt++)L(q.location+Zt,tt/q.locationSize,J,N,Ot*dt,(le+tt/q.locationSize*Zt)*dt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<q.locationSize;At++)y(q.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<q.locationSize;At++)S(q.location+At);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let At=0;At<q.locationSize;At++)L(q.location+At,tt/q.locationSize,J,N,tt*dt,tt/q.locationSize*At*dt,yt)}}else if(I!==void 0){const N=I[Z];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(q.location,N);break;case 3:o.vertexAttrib3fv(q.location,N);break;case 4:o.vertexAttrib4fv(q.location,N);break;default:o.vertexAttrib1fv(q.location,N)}}}}D()}function B(){W();for(const C in s){const G=s[C];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const lt in G){const rt=G[lt];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete G[lt]}delete s[C.id]}function z(C){for(const G in s){const lt=s[G];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)g(rt[gt].object),delete rt[gt];delete lt[C.id]}}function W(){U(),u=!0,l!==r&&(l=r,p(l.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function _1(o,t,e){let s;function r(p){s=p}function l(p,g){o.drawArrays(s,p,g),e.update(g,s,1)}function u(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),e.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];e.update(x,s,1)}function d(p,g,_,v){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];e.update(E,s,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function v1(o,t,e,s){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(z){return!(z!==An&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const W=z===Tl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ts&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Nn&&!W)}function d(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:B,maxSamples:H}}function y1(o){const t=this;let e=null,s=0,r=!1,l=!1;const u=new oa,h=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||s!==0||r;return r=v,s=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!r||E===null||E.length===0||l&&!S)l?g(null):p();else{const D=l?0:s,L=D*4;let w=y.clippingState||null;d.value=w,w=g(E,v,L,x);for(let B=0;B!==L;++B)w[B]=e[B];y.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,x,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=d.value,E!==!0||S===null){const y=x+b*4,D=v.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,w=x;L!==b;++L,w+=4)u.copy(_[L]).applyMatrix4(D,h),u.normal.toArray(S,w),S[w+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function x1(o){let t=new WeakMap;function e(u,h){return h===Nd?u.mapping=qr:h===Od&&(u.mapping=Kr),u}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Nd||h===Od)if(t.has(u)){const d=t.get(u).texture;return e(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new GE(d.height);return p.fromEquirectangularTexture(o,u),t.set(u,p),u.addEventListener("dispose",r),e(p.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap}return{get:s,dispose:l}}const Gr=4,y0=[.125,.215,.35,.446,.526,.582],ka=20,fd=new Ya,x0=new se;let dd=null,pd=0,md=0,gd=!1;const Va=(1+Math.sqrt(5))/2,Hr=1/Va,S0=[new X(-Va,Hr,0),new X(Va,Hr,0),new X(-Hr,0,Va),new X(Hr,0,Va),new X(0,Va,-Hr),new X(0,Va,Hr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],S1=new X;class M0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,s=.1,r=100,l={}){const{size:u=256,position:h=S1}=l;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,r,d,h),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,cu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qr||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Tl,format:An,colorSpace:Vn,depthBuffer:!1},r=E0(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(t,e,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M1(l)),this._blurMaterial=E1(l,t,e)}return r}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,fd)}_sceneToCubeUV(t,e,s,r,l){const d=new Jn(90,1,e,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(x0),_.toneMapping=da,_.autoClear=!1;const E=new Ss({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),b=new On(new Al,E);let S=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,S=!0):(E.color.copy(x0),S=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(d.up.set(0,p[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[D],l.y,l.z)):L===1?(d.up.set(0,0,p[D]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[D],l.z)):(d.up.set(0,p[D],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[D]));const w=this._cubeSize;cu(r,L*w,D>2?w:0,w,w),_.setRenderTarget(r),S&&_.render(b,d),_.render(t,d)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=v,t.background=y}_textureToCubeUV(t,e){const s=this._renderer,r=t.mapping===qr||t.mapping===Kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b0());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new On(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=t;const d=this._cubeSize;cu(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(u,fd)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=S0[(r-l-1)%S0.length];this._blur(t,l-1,l,u,h)}e.autoClear=s}_blur(t,e,s,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,s,r,"latitudinal",l),this._halfBlur(u,t,s,s,r,"longitudinal",l)}_halfBlur(t,e,s,r,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new On(this._lodPlanes[r],p),v=p.uniforms,x=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ka-1),b=l/E,S=isFinite(l)?1+Math.floor(g*b):ka;S>ka&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ka}`);const y=[];let D=0;for(let z=0;z<ka;++z){const W=z/b,U=Math.exp(-W*W/2);y.push(U),z===0?D+=U:z<S&&(D+=2*U)}for(let z=0;z<y.length;z++)y[z]=y[z]/D;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const w=this._sizeLods[r],B=3*w*(r>L-Gr?r-L+Gr:0),H=4*(this._cubeSize-w);cu(e,B,H,3*w,2*w),d.setRenderTarget(e),d.render(_,fd)}}function M1(o){const t=[],e=[],s=[];let r=o;const l=o-Gr+1+y0.length;for(let u=0;u<l;u++){const h=Math.pow(2,r);e.push(h);let d=1/h;u>o-Gr?d=y0[u-o+Gr-1]:u===0&&(d=0),s.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,b=3,S=2,y=1,D=new Float32Array(b*E*x),L=new Float32Array(S*E*x),w=new Float32Array(y*E*x);for(let H=0;H<x;H++){const z=H%3*2/3-1,W=H>2?0:-1,U=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];D.set(U,b*E*H),L.set(v,S*E*H);const C=[H,H,H,H,H,H];w.set(C,y*E*H)}const B=new hi;B.setAttribute("position",new rn(D,b)),B.setAttribute("uv",new rn(L,S)),B.setAttribute("faceIndex",new rn(w,y)),t.push(B),r>Gr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:s}}function E0(o,t,e){const s=new As(o,t,e);return s.texture.mapping=Ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function cu(o,t,e,s,r){o.viewport.set(t,e,s,r),o.scissor.set(t,e,s,r)}function E1(o,t,e){const s=new Float32Array(ka),r=new X(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function b0(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function T0(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Fp(){return`

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
	`}function b1(o){let t=new WeakMap,e=null;function s(h){if(h&&h.isTexture){const d=h.mapping,p=d===Nd||d===Od,g=d===qr||d===Kr;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return e===null&&(e=new M0(o)),_=p?e.fromEquirectangular(h,_):e.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const x=h.image;return p&&x&&x.height>0||g&&x&&r(x)?(e===null&&(e=new M0(o)),_=p?e.fromEquirectangular(h):e.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function r(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:s,dispose:u}}function T1(o){const t={};function e(s){if(t[s]!==void 0)return t[s];let r;switch(s){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(s)}return t[s]=r,r}return{has:function(s){return e(s)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(s){const r=e(s);return r===null&&vu("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function A1(o,t,e,s){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete r[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function h(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,e.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,E=_.attributes.position;let b=0;if(x!==null){const D=x.array;b=x.version;for(let L=0,w=D.length;L<w;L+=3){const B=D[L+0],H=D[L+1],z=D[L+2];v.push(B,H,H,z,z,B)}}else if(E!==void 0){const D=E.array;b=E.version;for(let L=0,w=D.length/3-1;L<w;L+=3){const B=L+0,H=L+1,z=L+2;v.push(B,H,H,z,z,B)}}else return;const S=new(py(v)?vy:_y)(v,1);S.version=b;const y=l.get(_);y&&t.remove(y),l.set(_,S)}function g(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function R1(o,t,e){let s;function r(v){s=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function d(v,x){o.drawElements(s,x,l,v*u),e.update(x,s,1)}function p(v,x,E){E!==0&&(o.drawElementsInstanced(s,x,l,v*u,E),e.update(x,s,E))}function g(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];e.update(S,s,1)}function _(v,x,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)p(v[y]/u,x[y],b[y]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,l,v,0,b,0,E);let y=0;for(let D=0;D<E;D++)y+=x[D]*b[D];e.update(y,s,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function w1(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,h){switch(e.calls++,u){case o.TRIANGLES:e.triangles+=h*(l/3);break;case o.LINES:e.lines+=h*(l/2);break;case o.LINE_STRIP:e.lines+=h*(l-1);break;case o.LINE_LOOP:e.lines+=h*l;break;case o.POINTS:e.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:s}}function C1(o,t,e){const s=new WeakMap,r=new Ae;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var x=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),S===!0&&(w=3);let B=h.attributes.position.count*w,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*H*4*_),W=new my(z,B,H,_);W.type=Nn,W.needsUpdate=!0;const U=w*4;for(let G=0;G<_;G++){const lt=y[G],rt=D[G],gt=L[G],ft=B*H*4*G;for(let I=0;I<lt.count;I++){const Z=I*U;E===!0&&(r.fromBufferAttribute(lt,I),z[ft+Z+0]=r.x,z[ft+Z+1]=r.y,z[ft+Z+2]=r.z,z[ft+Z+3]=0),b===!0&&(r.fromBufferAttribute(rt,I),z[ft+Z+4]=r.x,z[ft+Z+5]=r.y,z[ft+Z+6]=r.z,z[ft+Z+7]=0),S===!0&&(r.fromBufferAttribute(gt,I),z[ft+Z+8]=r.x,z[ft+Z+9]=r.y,z[ft+Z+10]=r.z,z[ft+Z+11]=gt.itemSize===4?r.w:1)}}v={count:_,texture:W,size:new Kt(B,H)},s.set(h,v),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",u.morphTexture,e);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function D1(o,t,e,s){let r=new WeakMap;function l(d){const p=s.render.frame,g=d.geometry,_=t.get(d,g);if(r.get(_)!==p&&(t.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(e.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,o.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:u}}const Dy=new Rn,A0=new Ty(1,1),Ly=new my,Uy=new TE,Ny=new Sy,R0=[],w0=[],C0=new Float32Array(16),D0=new Float32Array(9),L0=new Float32Array(4);function ro(o,t,e){const s=o[0];if(s<=0||s>0)return o;const r=t*e;let l=R0[r];if(l===void 0&&(l=new Float32Array(r),R0[r]=l),t!==0){s.toArray(l,0);for(let u=1,h=0;u!==t;++u)h+=e,o[u].toArray(l,h)}return l}function vn(o,t){if(o.length!==t.length)return!1;for(let e=0,s=o.length;e<s;e++)if(o[e]!==t[e])return!1;return!0}function yn(o,t){for(let e=0,s=t.length;e<s;e++)o[e]=t[e]}function wu(o,t){let e=w0[t];e===void 0&&(e=new Int32Array(t),w0[t]=e);for(let s=0;s!==t;++s)e[s]=o.allocateTextureUnit();return e}function L1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function U1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2fv(this.addr,t),yn(e,t)}}function N1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vn(e,t))return;o.uniform3fv(this.addr,t),yn(e,t)}}function O1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4fv(this.addr,t),yn(e,t)}}function P1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,s))return;L0.set(s),o.uniformMatrix2fv(this.addr,!1,L0),yn(e,s)}}function I1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,s))return;D0.set(s),o.uniformMatrix3fv(this.addr,!1,D0),yn(e,s)}}function z1(o,t){const e=this.cache,s=t.elements;if(s===void 0){if(vn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(vn(e,s))return;C0.set(s),o.uniformMatrix4fv(this.addr,!1,C0),yn(e,s)}}function B1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function F1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2iv(this.addr,t),yn(e,t)}}function H1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;o.uniform3iv(this.addr,t),yn(e,t)}}function V1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4iv(this.addr,t),yn(e,t)}}function G1(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function k1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vn(e,t))return;o.uniform2uiv(this.addr,t),yn(e,t)}}function X1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vn(e,t))return;o.uniform3uiv(this.addr,t),yn(e,t)}}function W1(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vn(e,t))return;o.uniform4uiv(this.addr,t),yn(e,t)}}function Y1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(A0.compareFunction=fy,l=A0):l=Dy,e.setTexture2D(t||l,r)}function j1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTexture3D(t||Uy,r)}function q1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTextureCube(t||Ny,r)}function K1(o,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(o.uniform1i(this.addr,r),s[0]=r),e.setTexture2DArray(t||Ly,r)}function Z1(o){switch(o){case 5126:return L1;case 35664:return U1;case 35665:return N1;case 35666:return O1;case 35674:return P1;case 35675:return I1;case 35676:return z1;case 5124:case 35670:return B1;case 35667:case 35671:return F1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return k1;case 36295:return X1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}function Q1(o,t){o.uniform1fv(this.addr,t)}function J1(o,t){const e=ro(t,this.size,2);o.uniform2fv(this.addr,e)}function $1(o,t){const e=ro(t,this.size,3);o.uniform3fv(this.addr,e)}function tR(o,t){const e=ro(t,this.size,4);o.uniform4fv(this.addr,e)}function eR(o,t){const e=ro(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function nR(o,t){const e=ro(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function iR(o,t){const e=ro(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function sR(o,t){o.uniform1iv(this.addr,t)}function aR(o,t){o.uniform2iv(this.addr,t)}function rR(o,t){o.uniform3iv(this.addr,t)}function oR(o,t){o.uniform4iv(this.addr,t)}function lR(o,t){o.uniform1uiv(this.addr,t)}function cR(o,t){o.uniform2uiv(this.addr,t)}function uR(o,t){o.uniform3uiv(this.addr,t)}function hR(o,t){o.uniform4uiv(this.addr,t)}function fR(o,t,e){const s=this.cache,r=t.length,l=wu(e,r);vn(s,l)||(o.uniform1iv(this.addr,l),yn(s,l));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||Dy,l[u])}function dR(o,t,e){const s=this.cache,r=t.length,l=wu(e,r);vn(s,l)||(o.uniform1iv(this.addr,l),yn(s,l));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||Uy,l[u])}function pR(o,t,e){const s=this.cache,r=t.length,l=wu(e,r);vn(s,l)||(o.uniform1iv(this.addr,l),yn(s,l));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||Ny,l[u])}function mR(o,t,e){const s=this.cache,r=t.length,l=wu(e,r);vn(s,l)||(o.uniform1iv(this.addr,l),yn(s,l));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||Ly,l[u])}function gR(o){switch(o){case 5126:return Q1;case 35664:return J1;case 35665:return $1;case 35666:return tR;case 35674:return eR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return sR;case 35667:case 35671:return aR;case 35668:case 35672:return rR;case 35669:case 35673:return oR;case 5125:return lR;case 36294:return cR;case 36295:return uR;case 36296:return hR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}class _R{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=Z1(e.type)}}class vR{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gR(e.type)}}class yR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const h=r[l];h.setValue(t,e[h.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function U0(o,t){o.seq.push(t),o.map[t.id]=t}function xR(o,t,e){const s=o.name,r=s.length;for(_d.lastIndex=0;;){const l=_d.exec(s),u=_d.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===r){U0(e,p===void 0?new _R(h,o,t):new vR(h,o,t));break}else{let _=e.map[h];_===void 0&&(_=new yR(h),U0(e,_)),e=_}}}class yu{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const l=t.getActiveUniform(e,r),u=t.getUniformLocation(e,l.name);xR(l,u,this)}}setValue(t,e,s,r){const l=this.map[e];l!==void 0&&l.setValue(t,s,r)}setOptional(t,e,s){const r=e[s];r!==void 0&&this.setValue(t,s,r)}static upload(t,e,s,r){for(let l=0,u=e.length;l!==u;++l){const h=e[l],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,r)}}static seqWithValue(t,e){const s=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in e&&s.push(u)}return s}}function N0(o,t,e){const s=o.createShader(t);return o.shaderSource(s,e),o.compileShader(s),s}const SR=37297;let MR=0;function ER(o,t){const e=o.split(`
`),s=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=r;u<l;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${e[u]}`)}return s.join(`
`)}const O0=new oe;function bR(o){Ee._getMatrix(O0,Ee.workingColorSpace,o);const t=`mat3( ${O0.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Su:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function P0(o,t,e){const s=o.getShaderParameter(t,o.COMPILE_STATUS),r=o.getShaderInfoLog(t).trim();if(s&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+ER(o.getShaderSource(t),u)}else return r}function TR(o,t){const e=bR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function AR(o,t){let e;switch(t){case OM:e="Linear";break;case PM:e="Reinhard";break;case IM:e="Cineon";break;case zM:e="ACESFilmic";break;case FM:e="AgX";break;case HM:e="Neutral";break;case BM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const uu=new X;function RR(){Ee.getLuminanceCoefficients(uu);const o=uu.x.toFixed(4),t=uu.y.toFixed(4),e=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function CR(o){const t=[];for(const e in o){const s=o[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function DR(o,t){const e={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const l=o.getActiveAttrib(t,r),u=l.name;let h=1;l.type===o.FLOAT_MAT2&&(h=2),l.type===o.FLOAT_MAT3&&(h=3),l.type===o.FLOAT_MAT4&&(h=4),e[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:h}}return e}function fl(o){return o!==""}function I0(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function z0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LR=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(o){return o.replace(LR,NR)}const UR=new Map;function NR(o,t){let e=ce[t];if(e===void 0){const s=UR.get(t);if(s!==void 0)e=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return fp(e)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(o){return o.replace(OR,PR)}function PR(o,t,e,s){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function F0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function IR(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Q0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===dM?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===_s&&(t="SHADOWMAP_TYPE_VSM"),t}function zR(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qr:case Kr:t="ENVMAP_TYPE_CUBE";break;case Ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BR(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Kr:t="ENVMAP_MODE_REFRACTION";break}return t}function FR(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case J0:t="ENVMAP_BLENDING_MULTIPLY";break;case UM:t="ENVMAP_BLENDING_MIX";break;case NM:t="ENVMAP_BLENDING_ADD";break}return t}function HR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:s,maxMip:e}}function VR(o,t,e,s){const r=o.getContext(),l=e.defines;let u=e.vertexShader,h=e.fragmentShader;const d=IR(e),p=zR(e),g=BR(e),_=FR(e),v=HR(e),x=wR(e),E=CR(l),b=r.createProgram();let S,y,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(fl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(fl).join(`
`),y.length>0&&(y+=`
`)):(S=[F0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),y=[F0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==da?"#define TONE_MAPPING":"",e.toneMapping!==da?ce.tonemapping_pars_fragment:"",e.toneMapping!==da?AR("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,TR("linearToOutputTexel",e.outputColorSpace),RR(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fl).join(`
`)),u=fp(u),u=I0(u,e),u=z0(u,e),h=fp(h),h=I0(h,e),h=z0(h,e),u=B0(u),h=B0(h),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+S+u,w=D+y+h,B=N0(r,r.VERTEX_SHADER,L),H=N0(r,r.FRAGMENT_SHADER,w);r.attachShader(b,B),r.attachShader(b,H),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function z(G){if(o.debug.checkShaderErrors){const lt=r.getProgramInfoLog(b).trim(),rt=r.getShaderInfoLog(B).trim(),gt=r.getShaderInfoLog(H).trim();let ft=!0,I=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,b,B,H);else{const Z=P0(r,B,"vertex"),q=P0(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+Z+`
`+q)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(I=!1);I&&(G.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:rt,prefix:S},fragmentShader:{log:gt,prefix:y}})}r.deleteShader(B),r.deleteShader(H),W=new yu(r,b),U=DR(r,b)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,SR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=MR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=H,this}let GR=0;class kR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,s=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new XR(t),e.set(t,s)),s}}class XR{constructor(t){this.id=GR++,this.code=t,this.usedTimes=0}}function WR(o,t,e,s,r,l,u){const h=new Rp,d=new kR,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,C,G,lt,rt){const gt=lt.fog,ft=rt.geometry,I=U.isMeshStandardMaterial?lt.environment:null,Z=(U.isMeshStandardMaterial?e:t).get(U.envMap||I),q=Z&&Z.mapping===Ru?Z.image.height:null,Mt=E[U.type];U.precision!==null&&(x=r.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let vt=0;ft.morphAttributes.position!==void 0&&(vt=1),ft.morphAttributes.normal!==void 0&&(vt=2),ft.morphAttributes.color!==void 0&&(vt=3);let xt,J,dt,yt;if(Mt){const Re=Fi[Mt];xt=Re.vertexShader,J=Re.fragmentShader}else xt=U.vertexShader,J=U.fragmentShader,d.update(U),dt=d.getVertexShaderID(U),yt=d.getFragmentShaderID(U);const At=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),le=rt.isInstancedMesh===!0,Zt=rt.isBatchedMesh===!0,Ye=!!U.map,Ge=!!U.matcap,de=!!Z,F=!!U.aoMap,Wn=!!U.lightMap,ye=!!U.bumpMap,ne=!!U.normalMap,Xt=!!U.displacementMap,Pe=!!U.emissiveMap,Vt=!!U.metalnessMap,O=!!U.roughnessMap,A=U.anisotropy>0,et=U.clearcoat>0,_t=U.dispersion>0,St=U.iridescence>0,ut=U.sheen>0,zt=U.transmission>0,Rt=A&&!!U.anisotropyMap,wt=et&&!!U.clearcoatMap,xe=et&&!!U.clearcoatNormalMap,bt=et&&!!U.clearcoatRoughnessMap,Ft=St&&!!U.iridescenceMap,jt=St&&!!U.iridescenceThicknessMap,Qt=ut&&!!U.sheenColorMap,Pt=ut&&!!U.sheenRoughnessMap,ue=!!U.specularMap,ee=!!U.specularColorMap,Ie=!!U.specularIntensityMap,k=zt&&!!U.transmissionMap,Ut=zt&&!!U.thicknessMap,ot=!!U.gradientMap,pt=!!U.alphaMap,It=U.alphaTest>0,Nt=!!U.alphaHash,ie=!!U.extensions;let je=da;U.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(je=o.toneMapping);const on={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:xt,fragmentShader:J,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:yt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Zt,batchingColor:Zt&&rt._colorsTexture!==null,instancing:le,instancingColor:le&&rt.instanceColor!==null,instancingMorph:le&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Vn,alphaToCoverage:!!U.alphaToCoverage,map:Ye,matcap:Ge,envMap:de,envMapMode:de&&Z.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:Wn,bumpMap:ye,normalMap:ne,displacementMap:v&&Xt,emissiveMap:Pe,normalMapObjectSpace:ne&&U.normalMapType===YM,normalMapTangentSpace:ne&&U.normalMapType===hy,metalnessMap:Vt,roughnessMap:O,anisotropy:A,anisotropyMap:Rt,clearcoat:et,clearcoatMap:wt,clearcoatNormalMap:xe,clearcoatRoughnessMap:bt,dispersion:_t,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:ut,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ee,specularIntensityMap:Ie,transmission:zt,transmissionMap:k,thicknessMap:Ut,gradientMap:ot,opaque:U.transparent===!1&&U.blending===Xr&&U.alphaToCoverage===!1,alphaMap:pt,alphaTest:It,alphaHash:Nt,combine:U.combine,mapUv:Ye&&b(U.map.channel),aoMapUv:F&&b(U.aoMap.channel),lightMapUv:Wn&&b(U.lightMap.channel),bumpMapUv:ye&&b(U.bumpMap.channel),normalMapUv:ne&&b(U.normalMap.channel),displacementMapUv:Xt&&b(U.displacementMap.channel),emissiveMapUv:Pe&&b(U.emissiveMap.channel),metalnessMapUv:Vt&&b(U.metalnessMap.channel),roughnessMapUv:O&&b(U.roughnessMap.channel),anisotropyMapUv:Rt&&b(U.anisotropyMap.channel),clearcoatMapUv:wt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(U.sheenRoughnessMap.channel),specularMapUv:ue&&b(U.specularMap.channel),specularColorMapUv:ee&&b(U.specularColorMap.channel),specularIntensityMapUv:Ie&&b(U.specularIntensityMap.channel),transmissionMapUv:k&&b(U.transmissionMap.channel),thicknessMapUv:Ut&&b(U.thicknessMap.channel),alphaMapUv:pt&&b(U.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ne||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(Ye||pt),fog:!!gt,useFog:U.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ot,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:je,decodeVideoTexture:Ye&&U.map.isVideoTexture===!0&&Ee.getTransfer(U.map.colorSpace)===He,decodeVideoTextureEmissive:Pe&&U.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(U.emissiveMap.colorSpace)===He,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Si,flipSided:U.side===$n,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ie&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&U.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return on.vertexUv1s=p.has(1),on.vertexUv2s=p.has(2),on.vertexUv3s=p.has(3),p.clear(),on}function y(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(D(C,U),L(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function D(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function L(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const C=E[U.type];let G;if(C){const lt=Fi[C];G=BE.clone(lt.uniforms)}else G=U.uniforms;return G}function B(U,C){let G;for(let lt=0,rt=g.length;lt<rt;lt++){const gt=g[lt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new VR(o,C,U,l),g.push(G)),G}function H(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function z(U){d.remove(U)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:B,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:W}}function YR(){let o=new WeakMap;function t(u){return o.has(u)}function e(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function s(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{has:t,get:e,remove:s,update:r,dispose:l}}function jR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function H0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function V0(){const o=[];let t=0;const e=[],s=[],r=[];function l(){t=0,e.length=0,s.length=0,r.length=0}function u(_,v,x,E,b,S){let y=o[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},o[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=b,y.group=S),t++,y}function h(_,v,x,E,b,S){const y=u(_,v,x,E,b,S);x.transmission>0?s.push(y):x.transparent===!0?r.push(y):e.push(y)}function d(_,v,x,E,b,S){const y=u(_,v,x,E,b,S);x.transmission>0?s.unshift(y):x.transparent===!0?r.unshift(y):e.unshift(y)}function p(_,v){e.length>1&&e.sort(_||jR),s.length>1&&s.sort(v||H0),r.length>1&&r.sort(v||H0)}function g(){for(let _=t,v=o.length;_<v;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:s,transparent:r,init:l,push:h,unshift:d,finish:g,sort:p}}function qR(){let o=new WeakMap;function t(s,r){const l=o.get(s);let u;return l===void 0?(u=new V0,o.set(s,[u])):r>=l.length?(u=new V0,l.push(u)):u=l[r],u}function e(){o=new WeakMap}return{get:t,dispose:e}}function KR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new se};break;case"SpotLight":e={position:new X,direction:new X,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new X,halfWidth:new X,halfHeight:new X};break}return o[t.id]=e,e}}}function ZR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let QR=0;function JR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $R(o){const t=new KR,e=ZR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new X);const r=new X,l=new ae,u=new ae;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let x=0,E=0,b=0,S=0,y=0,D=0,L=0,w=0,B=0,H=0,z=0;p.sort(JR);for(let U=0,C=p.length;U<C;U++){const G=p[U],lt=G.color,rt=G.intensity,gt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=lt.r*rt,_+=lt.g*rt,v+=lt.b*rt;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],rt);z++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[x]=q,s.directionalShadowMap[x]=ft,s.directionalShadowMatrix[x]=G.shadow.matrix,D++}s.directional[x]=I,x++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(lt).multiplyScalar(rt),I.distance=gt,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[b]=I;const Z=G.shadow;if(G.map&&(s.spotLightMap[B]=G.map,B++,Z.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[b]=Z.matrix,G.castShadow){const q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[b]=q,s.spotShadowMap[b]=ft,w++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(lt).multiplyScalar(rt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=I,S++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const Z=G.shadow,q=e.get(G);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=ft,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(rt),I.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[y]=I,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const W=s.hash;(W.directionalLength!==x||W.pointLength!==E||W.spotLength!==b||W.rectAreaLength!==S||W.hemiLength!==y||W.numDirectionalShadows!==D||W.numPointShadows!==L||W.numSpotShadows!==w||W.numSpotMaps!==B||W.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+B-H,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,W.directionalLength=x,W.pointLength=E,W.spotLength=b,W.rectAreaLength=S,W.hemiLength=y,W.numDirectionalShadows=D,W.numPointShadows=L,W.numSpotShadows=w,W.numSpotMaps=B,W.numLightProbes=z,s.version=QR++)}function d(p,g){let _=0,v=0,x=0,E=0,b=0;const S=g.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const L=p[y];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=s.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=s.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),b++}}}return{setup:h,setupView:d,state:s}}function G0(o){const t=new $R(o),e=[],s=[];function r(g){p.camera=g,e.length=0,s.length=0}function l(g){e.push(g)}function u(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function tw(o){let t=new WeakMap;function e(r,l=0){const u=t.get(r);let h;return u===void 0?(h=new G0(o),t.set(r,[h])):l>=u.length?(h=new G0(o),u.push(h)):h=u[l],h}function s(){t=new WeakMap}return{get:e,dispose:s}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
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
}`;function iw(o,t,e){let s=new Dp;const r=new Kt,l=new Kt,u=new Ae,h=new tb({depthPacking:WM}),d=new eb,p={},g=e.maxTextureSize,_={[bs]:$n,[$n]:bs,[Si]:Si},v=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:ew,fragmentShader:nw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new hi;E.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new On(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let y=this.type;this.render=function(H,z,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(fa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=y!==_s&&this.type===_s,gt=y===_s&&this.type!==_s;for(let ft=0,I=H.length;ft<I;ft++){const Z=H[ft],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Mt=q.getFrameExtents();if(r.multiply(Mt),l.copy(q.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/Mt.x),r.x=l.x*Mt.x,q.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/Mt.y),r.y=l.y*Mt.y,q.mapSize.y=l.y)),q.map===null||rt===!0||gt===!0){const tt=this.type!==_s?{minFilter:We,magFilter:We}:{};q.map!==null&&q.map.dispose(),q.map=new As(r.x,r.y,tt),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const N=q.getViewportCount();for(let tt=0;tt<N;tt++){const vt=q.getViewport(tt);u.set(l.x*vt.x,l.y*vt.y,l.x*vt.z,l.y*vt.w),lt.viewport(u),q.updateMatrices(Z,tt),s=q.getFrustum(),w(z,W,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===_s&&D(q,W),q.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(U,C,G)};function D(H,z){const W=t.update(b);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,x.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new As(r.x,r.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(z,null,W,v,b,null),x.uniforms.shadow_pass.value=H.mapPass.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(z,null,W,x,b,null)}function L(H,z,W,U){let C=null;const G=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?d:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const lt=C.uuid,rt=z.uuid;let gt=p[lt];gt===void 0&&(gt={},p[lt]=gt);let ft=gt[rt];ft===void 0&&(ft=C.clone(),gt[rt]=ft,z.addEventListener("dispose",B)),C=ft}if(C.visible=z.visible,C.wireframe=z.wireframe,U===_s?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=o.properties.get(C);lt.light=W}return C}function w(H,z,W,U,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===_s)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const rt=t.update(H),gt=H.material;if(Array.isArray(gt)){const ft=rt.groups;for(let I=0,Z=ft.length;I<Z;I++){const q=ft[I],Mt=gt[q.materialIndex];if(Mt&&Mt.visible){const N=L(H,Mt,U,C);H.onBeforeShadow(o,H,z,W,rt,N,q),o.renderBufferDirect(W,null,rt,N,H,q),H.onAfterShadow(o,H,z,W,rt,N,q)}}}else if(gt.visible){const ft=L(H,gt,U,C);H.onBeforeShadow(o,H,z,W,rt,ft,null),o.renderBufferDirect(W,null,rt,ft,H,null),H.onAfterShadow(o,H,z,W,rt,ft,null)}}const lt=H.children;for(let rt=0,gt=lt.length;rt<gt;rt++)w(lt[rt],z,W,U,C)}function B(H){H.target.removeEventListener("dispose",B);for(const W in p){const U=p[W],C=H.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const sw={[Ad]:Rd,[wd]:Ld,[Cd]:Ud,[jr]:Dd,[Rd]:Ad,[Ld]:wd,[Ud]:Cd,[Dd]:jr};function aw(o,t){function e(){let k=!1;const Ut=new Ae;let ot=null;const pt=new Ae(0,0,0,0);return{setMask:function(It){ot!==It&&!k&&(o.colorMask(It,It,It,It),ot=It)},setLocked:function(It){k=It},setClear:function(It,Nt,ie,je,on){on===!0&&(It*=je,Nt*=je,ie*=je),Ut.set(It,Nt,ie,je),pt.equals(Ut)===!1&&(o.clearColor(It,Nt,ie,je),pt.copy(Ut))},reset:function(){k=!1,ot=null,pt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,ot=null,pt=null,It=null;return{setReversed:function(Nt){if(Ut!==Nt){const ie=t.get("EXT_clip_control");Nt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Nt;const je=It;It=null,this.setClear(je)}},getReversed:function(){return Ut},setTest:function(Nt){Nt?At(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(o.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Ut&&(Nt=sw[Nt]),pt!==Nt){switch(Nt){case Ad:o.depthFunc(o.NEVER);break;case Rd:o.depthFunc(o.ALWAYS);break;case wd:o.depthFunc(o.LESS);break;case jr:o.depthFunc(o.LEQUAL);break;case Cd:o.depthFunc(o.EQUAL);break;case Dd:o.depthFunc(o.GEQUAL);break;case Ld:o.depthFunc(o.GREATER);break;case Ud:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){It!==Nt&&(Ut&&(Nt=1-Nt),o.clearDepth(Nt),It=Nt)},reset:function(){k=!1,ot=null,pt=null,It=null,Ut=!1}}}function r(){let k=!1,Ut=null,ot=null,pt=null,It=null,Nt=null,ie=null,je=null,on=null;return{setTest:function(Re){k||(Re?At(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Re){Ut!==Re&&!k&&(o.stencilMask(Re),Ut=Re)},setFunc:function(Re,ti,xn){(ot!==Re||pt!==ti||It!==xn)&&(o.stencilFunc(Re,ti,xn),ot=Re,pt=ti,It=xn)},setOp:function(Re,ti,xn){(Nt!==Re||ie!==ti||je!==xn)&&(o.stencilOp(Re,ti,xn),Nt=Re,ie=ti,je=xn)},setLocked:function(Re){k=Re},setClear:function(Re){on!==Re&&(o.clearStencil(Re),on=Re)},reset:function(){k=!1,Ut=null,ot=null,pt=null,It=null,Nt=null,ie=null,je=null,on=null}}}const l=new e,u=new s,h=new r,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],E=null,b=!1,S=null,y=null,D=null,L=null,w=null,B=null,H=null,z=new se(0,0,0),W=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=Z>=2);let Mt=null,N={};const tt=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Ae().fromArray(tt),J=new Ae().fromArray(vt);function dt(k,Ut,ot,pt){const It=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(k,Nt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<ot;ie++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,pt,0,o.RGBA,o.UNSIGNED_BYTE,It):o.texImage2D(Ut+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,It);return Nt}const yt={};yt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),At(o.DEPTH_TEST),u.setFunc(jr),ye(!1),ne(Ev),At(o.CULL_FACE),F(fa);function At(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Ot(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function le(k,Ut){return _[k]!==Ut?(o.bindFramebuffer(k,Ut),_[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(k,Ut){let ot=x,pt=!1;if(k){ot=v.get(Ut),ot===void 0&&(ot=[],v.set(Ut,ot));const It=k.textures;if(ot.length!==It.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ie=It.length;Nt<ie;Nt++)ot[Nt]=o.COLOR_ATTACHMENT0+Nt;ot.length=It.length,pt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,pt=!0);pt&&o.drawBuffers(ot)}function Ye(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Ge={[Ga]:o.FUNC_ADD,[mM]:o.FUNC_SUBTRACT,[gM]:o.FUNC_REVERSE_SUBTRACT};Ge[_M]=o.MIN,Ge[vM]=o.MAX;const de={[yM]:o.ZERO,[xM]:o.ONE,[SM]:o.SRC_COLOR,[bd]:o.SRC_ALPHA,[RM]:o.SRC_ALPHA_SATURATE,[TM]:o.DST_COLOR,[EM]:o.DST_ALPHA,[MM]:o.ONE_MINUS_SRC_COLOR,[Td]:o.ONE_MINUS_SRC_ALPHA,[AM]:o.ONE_MINUS_DST_COLOR,[bM]:o.ONE_MINUS_DST_ALPHA,[wM]:o.CONSTANT_COLOR,[CM]:o.ONE_MINUS_CONSTANT_COLOR,[DM]:o.CONSTANT_ALPHA,[LM]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,ot,pt,It,Nt,ie,je,on,Re){if(k===fa){b===!0&&(Ot(o.BLEND),b=!1);return}if(b===!1&&(At(o.BLEND),b=!0),k!==pM){if(k!==S||Re!==U){if((y!==Ga||w!==Ga)&&(o.blendEquation(o.FUNC_ADD),y=Ga,w=Ga),Re)switch(k){case Xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bv:o.blendFunc(o.ONE,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,L=null,B=null,H=null,z.set(0,0,0),W=0,S=k,U=Re}return}It=It||Ut,Nt=Nt||ot,ie=ie||pt,(Ut!==y||It!==w)&&(o.blendEquationSeparate(Ge[Ut],Ge[It]),y=Ut,w=It),(ot!==D||pt!==L||Nt!==B||ie!==H)&&(o.blendFuncSeparate(de[ot],de[pt],de[Nt],de[ie]),D=ot,L=pt,B=Nt,H=ie),(je.equals(z)===!1||on!==W)&&(o.blendColor(je.r,je.g,je.b,on),z.copy(je),W=on),S=k,U=!1}function Wn(k,Ut){k.side===Si?Ot(o.CULL_FACE):At(o.CULL_FACE);let ot=k.side===$n;Ut&&(ot=!ot),ye(ot),k.blending===Xr&&k.transparent===!1?F(fa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const pt=k.stencilWrite;h.setTest(pt),pt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function ne(k){k!==hM?(At(o.CULL_FACE),k!==G&&(k===Ev?o.cullFace(o.BACK):k===fM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),G=k}function Xt(k){k!==lt&&(I&&o.lineWidth(k),lt=k)}function Pe(k,Ut,ot){k?(At(o.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==ot)&&(o.polygonOffset(Ut,ot),rt=Ut,gt=ot)):Ot(o.POLYGON_OFFSET_FILL)}function Vt(k){k?At(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function O(k){k===void 0&&(k=o.TEXTURE0+ft-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function A(k,Ut,ot){ot===void 0&&(Mt===null?ot=o.TEXTURE0+ft-1:ot=Mt);let pt=N[ot];pt===void 0&&(pt={type:void 0,texture:void 0},N[ot]=pt),(pt.type!==k||pt.texture!==Ut)&&(Mt!==ot&&(o.activeTexture(ot),Mt=ot),o.bindTexture(k,Ut||yt[k]),pt.type=k,pt.texture=Ut)}function et(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _t(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Pt(k){J.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ue(k,Ut){let ot=p.get(Ut);ot===void 0&&(ot=new WeakMap,p.set(Ut,ot));let pt=ot.get(k);pt===void 0&&(pt=o.getUniformBlockIndex(Ut,k.name),ot.set(k,pt))}function ee(k,Ut){const pt=p.get(Ut).get(k);d.get(Ut)!==pt&&(o.uniformBlockBinding(Ut,pt,k.__bindingPointIndex),d.set(Ut,pt))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Mt=null,N={},_={},v=new WeakMap,x=[],E=null,b=!1,S=null,y=null,D=null,L=null,w=null,B=null,H=null,z=new se(0,0,0),W=0,U=!1,C=null,G=null,lt=null,rt=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:At,disable:Ot,bindFramebuffer:le,drawBuffers:Zt,useProgram:Ye,setBlending:F,setMaterial:Wn,setFlipSided:ye,setCullFace:ne,setLineWidth:Xt,setPolygonOffset:Pe,setScissorTest:Vt,activeTexture:O,bindTexture:A,unbindTexture:et,compressedTexImage2D:_t,compressedTexImage3D:St,texImage2D:Ft,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ee,texStorage2D:xe,texStorage3D:bt,texSubImage2D:ut,texSubImage3D:zt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:wt,scissor:Qt,viewport:Pt,reset:Ie}}function rw(o,t,e,s,r,l,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Kt,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return x?new OffscreenCanvas(O,A):Ml("canvas")}function b(O,A,et){let _t=1;const St=Vt(O);if((St.width>et||St.height>et)&&(_t=et/Math.max(St.width,St.height)),_t<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(_t*St.width),zt=Math.floor(_t*St.height);_===void 0&&(_=E(ut,zt));const Rt=A?E(ut,zt):_;return Rt.width=ut,Rt.height=zt,Rt.getContext("2d").drawImage(O,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+zt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function S(O){return O.generateMipmaps}function y(O){o.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,A,et,_t,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=A;if(A===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),A===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),A===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),A===o.RGBA){const zt=St?Su:Ee.getTransfer(_t);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=zt===He?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function w(O,A){let et;return O?A===null||A===Wa||A===_l?et=o.DEPTH24_STENCIL8:A===Nn?et=o.DEPTH32F_STENCIL8:A===gl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wa||A===_l?et=o.DEPTH_COMPONENT24:A===Nn?et=o.DEPTH_COMPONENT32F:A===gl&&(et=o.DEPTH_COMPONENT16),et}function B(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==We&&O.minFilter!==ui?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function H(O){const A=O.target;A.removeEventListener("dispose",H),W(A),A.isVideoTexture&&g.delete(A)}function z(O){const A=O.target;A.removeEventListener("dispose",z),C(A)}function W(O){const A=s.get(O);if(A.__webglInit===void 0)return;const et=O.source,_t=v.get(et);if(_t){const St=_t[A.__cacheKey];St.usedTimes--,St.usedTimes===0&&U(O),Object.keys(_t).length===0&&v.delete(et)}s.remove(O)}function U(O){const A=s.get(O);o.deleteTexture(A.__webglTexture);const et=O.source,_t=v.get(et);delete _t[A.__cacheKey],u.memory.textures--}function C(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let St=0;St<A.__webglFramebuffer[_t].length;St++)o.deleteFramebuffer(A.__webglFramebuffer[_t][St]);else o.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[_t]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=O.textures;for(let _t=0,St=et.length;_t<St;_t++){const ut=s.get(et[_t]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),u.memory.textures--),s.remove(et[_t])}s.remove(O)}let G=0;function lt(){G=0}function rt(){const O=G;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),G+=1,O}function gt(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ft(O,A){const et=s.get(O);if(O.isVideoTexture&&Xt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const _t=O.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,O,A);return}}e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function I(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){J(et,O,A);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function Z(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){J(et,O,A);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function q(O,A){const et=s.get(O);if(O.version>0&&et.__version!==O.version){dt(et,O,A);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const Mt={[Zr]:o.REPEAT,[ca]:o.CLAMP_TO_EDGE,[xu]:o.MIRRORED_REPEAT},N={[We]:o.NEAREST,[ty]:o.NEAREST_MIPMAP_NEAREST,[hl]:o.NEAREST_MIPMAP_LINEAR,[ui]:o.LINEAR,[fu]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},tt={[jM]:o.NEVER,[$M]:o.ALWAYS,[qM]:o.LESS,[fy]:o.LEQUAL,[KM]:o.EQUAL,[JM]:o.GEQUAL,[ZM]:o.GREATER,[QM]:o.NOTEQUAL};function vt(O,A){if(A.type===Nn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ui||A.magFilter===fu||A.magFilter===hl||A.magFilter===ys||A.minFilter===ui||A.minFilter===fu||A.minFilter===hl||A.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Mt[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Mt[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Mt[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,N[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,N[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===We||A.minFilter!==hl&&A.minFilter!==ys||A.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function xt(O,A){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",H));const _t=A.source;let St=v.get(_t);St===void 0&&(St={},v.set(_t,St));const ut=gt(A);if(ut!==O.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,et=!0),St[ut].usedTimes++;const zt=St[O.__cacheKey];zt!==void 0&&(St[O.__cacheKey].usedTimes--,zt.usedTimes===0&&U(A)),O.__cacheKey=ut,O.__webglTexture=St[ut].texture}return et}function J(O,A,et){let _t=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=o.TEXTURE_3D);const St=xt(O,A),ut=A.source;e.bindTexture(_t,O.__webglTexture,o.TEXTURE0+et);const zt=s.get(ut);if(ut.version!==zt.__version||St===!0){e.activeTexture(o.TEXTURE0+et);const Rt=Ee.getPrimaries(Ee.workingColorSpace),wt=A.colorSpace===la?null:Ee.getPrimaries(A.colorSpace),xe=A.colorSpace===la||Rt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let bt=b(A.image,!1,r.maxTextureSize);bt=Pe(A,bt);const Ft=l.convert(A.format,A.colorSpace),jt=l.convert(A.type);let Qt=L(A.internalFormat,Ft,jt,A.colorSpace,A.isVideoTexture);vt(_t,A);let Pt;const ue=A.mipmaps,ee=A.isVideoTexture!==!0,Ie=zt.__version===void 0||St===!0,k=ut.dataReady,Ut=B(A,bt);if(A.isDepthTexture)Qt=w(A.format===yl,A.type),Ie&&(ee?e.texStorage2D(o.TEXTURE_2D,1,Qt,bt.width,bt.height):e.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Ft,jt,null));else if(A.isDataTexture)if(ue.length>0){ee&&Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Qt,ue[0].width,ue[0].height);for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):e.texImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,jt,Pt.data);A.generateMipmaps=!1}else ee?(Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Qt,bt.width,bt.height),k&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,jt,bt.data)):e.texImage2D(o.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Ft,jt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Qt,ue[0].width,ue[0].height,bt.depth);for(let ot=0,pt=ue.length;ot<pt;ot++)if(Pt=ue[ot],A.format!==An)if(Ft!==null)if(ee){if(k)if(A.layerUpdates.size>0){const It=v0(Pt.width,Pt.height,A.format,A.type);for(const Nt of A.layerUpdates){const ie=Pt.data.subarray(Nt*It/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*It/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Nt,Pt.width,Pt.height,1,Ft,ie)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,Ft,Pt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,Ft,jt,Pt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,Ft,jt,Pt.data)}else{ee&&Ie&&e.texStorage2D(o.TEXTURE_2D,Ut,Qt,ue[0].width,ue[0].height);for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],A.format!==An?Ft!==null?ee?k&&e.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,Pt.data):e.compressedTexImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,Ft,jt,Pt.data):e.texImage2D(o.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Ft,jt,Pt.data)}else if(A.isDataArrayTexture)if(ee){if(Ie&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Qt,bt.width,bt.height,bt.depth),k)if(A.layerUpdates.size>0){const ot=v0(bt.width,bt.height,A.format,A.type);for(const pt of A.layerUpdates){const It=bt.data.subarray(pt*ot/bt.data.BYTES_PER_ELEMENT,(pt+1)*ot/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,bt.width,bt.height,1,Ft,jt,It)}A.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,jt,bt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,Ft,jt,bt.data);else if(A.isData3DTexture)ee?(Ie&&e.texStorage3D(o.TEXTURE_3D,Ut,Qt,bt.width,bt.height,bt.depth),k&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,jt,bt.data)):e.texImage3D(o.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,Ft,jt,bt.data);else if(A.isFramebufferTexture){if(Ie)if(ee)e.texStorage2D(o.TEXTURE_2D,Ut,Qt,bt.width,bt.height);else{let ot=bt.width,pt=bt.height;for(let It=0;It<Ut;It++)e.texImage2D(o.TEXTURE_2D,It,Qt,ot,pt,0,Ft,jt,null),ot>>=1,pt>>=1}}else if(ue.length>0){if(ee&&Ie){const ot=Vt(ue[0]);e.texStorage2D(o.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}for(let ot=0,pt=ue.length;ot<pt;ot++)Pt=ue[ot],ee?k&&e.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft,jt,Pt):e.texImage2D(o.TEXTURE_2D,ot,Qt,Ft,jt,Pt);A.generateMipmaps=!1}else if(ee){if(Ie){const ot=Vt(bt);e.texStorage2D(o.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}k&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,jt,bt)}else e.texImage2D(o.TEXTURE_2D,0,Qt,Ft,jt,bt);S(A)&&y(_t),zt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function dt(O,A,et){if(A.image.length!==6)return;const _t=xt(O,A),St=A.source;e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const ut=s.get(St);if(St.version!==ut.__version||_t===!0){e.activeTexture(o.TEXTURE0+et);const zt=Ee.getPrimaries(Ee.workingColorSpace),Rt=A.colorSpace===la?null:Ee.getPrimaries(A.colorSpace),wt=A.colorSpace===la||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const xe=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let pt=0;pt<6;pt++)!xe&&!bt?Ft[pt]=b(A.image[pt],!0,r.maxCubemapSize):Ft[pt]=bt?A.image[pt].image:A.image[pt],Ft[pt]=Pe(A,Ft[pt]);const jt=Ft[0],Qt=l.convert(A.format,A.colorSpace),Pt=l.convert(A.type),ue=L(A.internalFormat,Qt,Pt,A.colorSpace),ee=A.isVideoTexture!==!0,Ie=ut.__version===void 0||_t===!0,k=St.dataReady;let Ut=B(A,jt);vt(o.TEXTURE_CUBE_MAP,A);let ot;if(xe){ee&&Ie&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ue,jt.width,jt.height);for(let pt=0;pt<6;pt++){ot=Ft[pt].mipmaps;for(let It=0;It<ot.length;It++){const Nt=ot[It];A.format!==An?Qt!==null?ee?k&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,Nt.width,Nt.height,Qt,Nt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,ue,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,Nt.width,Nt.height,Qt,Pt,Nt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,ue,Nt.width,Nt.height,0,Qt,Pt,Nt.data)}}}else{if(ot=A.mipmaps,ee&&Ie){ot.length>0&&Ut++;const pt=Vt(Ft[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(bt){ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft[pt].width,Ft[pt].height,Qt,Pt,Ft[pt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Ft[pt].width,Ft[pt].height,0,Qt,Pt,Ft[pt].data);for(let It=0;It<ot.length;It++){const ie=ot[It].image[pt].image;ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,ie.width,ie.height,Qt,Pt,ie.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,ue,ie.width,ie.height,0,Qt,Pt,ie.data)}}else{ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Qt,Pt,Ft[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Qt,Pt,Ft[pt]);for(let It=0;It<ot.length;It++){const Nt=ot[It];ee?k&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,Qt,Pt,Nt.image[pt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,ue,Qt,Pt,Nt.image[pt])}}}S(A)&&y(o.TEXTURE_CUBE_MAP),ut.__version=St.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function yt(O,A,et,_t,St,ut){const zt=l.convert(et.format,et.colorSpace),Rt=l.convert(et.type),wt=L(et.internalFormat,zt,Rt,et.colorSpace),xe=s.get(A),bt=s.get(et);if(bt.__renderTarget=A,!xe.__hasExternalTextures){const Ft=Math.max(1,A.width>>ut),jt=Math.max(1,A.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?e.texImage3D(St,ut,wt,Ft,jt,A.depth,0,zt,Rt,null):e.texImage2D(St,ut,wt,Ft,jt,0,zt,Rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,O),ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,St,bt.__webglTexture,0,ye(A)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,St,bt.__webglTexture,ut),e.bindFramebuffer(o.FRAMEBUFFER,null)}function At(O,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const _t=A.depthTexture,St=_t&&_t.isDepthTexture?_t.type:null,ut=w(A.stencilBuffer,St),zt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ye(A);ne(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ut,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,O)}else{const _t=A.textures;for(let St=0;St<_t.length;St++){const ut=_t[St],zt=l.convert(ut.format,ut.colorSpace),Rt=l.convert(ut.type),wt=L(ut.internalFormat,zt,Rt,ut.colorSpace),xe=ye(A);et&&ne(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,wt,A.width,A.height):ne(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,wt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,wt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ot(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(A.depthTexture);_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ft(A.depthTexture,0);const St=_t.__webglTexture,ut=ye(A);if(A.depthTexture.format===vl)ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(A.depthTexture.format===yl)ne(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function le(O){const A=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const _t=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const St=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",St)};_t.addEventListener("dispose",St),A.__depthDisposeCallback=St}A.__boundDepthTexture=_t}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Ot(A.__webglFramebuffer,O)}else if(et){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=o.createRenderbuffer(),At(A.__webglDepthbuffer[_t],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),At(A.__webglDepthbuffer,O,!1);else{const _t=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,St)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(O,A,et){const _t=s.get(O);A!==void 0&&yt(_t.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&le(O)}function Ye(O){const A=O.texture,et=s.get(O),_t=s.get(A);O.addEventListener("dispose",z);const St=O.textures,ut=O.isWebGLCubeRenderTarget===!0,zt=St.length>1;if(zt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=A.version,u.memory.textures++),ut){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let wt=0;wt<A.mipmaps.length;wt++)et.__webglFramebuffer[Rt][wt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,wt=St.length;Rt<wt;Rt++){const xe=s.get(St[Rt]);xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture(),u.memory.textures++)}if(O.samples>0&&ne(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const wt=St[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const xe=l.convert(wt.format,wt.colorSpace),bt=l.convert(wt.type),Ft=L(wt.internalFormat,xe,bt,wt.colorSpace,O.isXRRenderTarget===!0),jt=ye(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Ft,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){e.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),vt(o.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)yt(et.__webglFramebuffer[Rt][wt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,wt);else yt(et.__webglFramebuffer[Rt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(A)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Rt=0,wt=St.length;Rt<wt;Rt++){const xe=St[Rt],bt=s.get(xe);e.bindTexture(o.TEXTURE_2D,bt.__webglTexture),vt(o.TEXTURE_2D,xe),yt(et.__webglFramebuffer,O,xe,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),S(xe)&&y(o.TEXTURE_2D)}e.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Rt,_t.__webglTexture),vt(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let wt=0;wt<A.mipmaps.length;wt++)yt(et.__webglFramebuffer[wt],O,A,o.COLOR_ATTACHMENT0,Rt,wt);else yt(et.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,Rt,0);S(A)&&y(Rt),e.unbindTexture()}O.depthBuffer&&le(O)}function Ge(O){const A=O.textures;for(let et=0,_t=A.length;et<_t;et++){const St=A[et];if(S(St)){const ut=D(O),zt=s.get(St).__webglTexture;e.bindTexture(ut,zt),y(ut),e.unbindTexture()}}}const de=[],F=[];function Wn(O){if(O.samples>0){if(ne(O)===!1){const A=O.textures,et=O.width,_t=O.height;let St=o.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=s.get(O),Rt=A.length>1;if(Rt)for(let wt=0;wt<A.length;wt++)e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let wt=0;wt<A.length;wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[wt]);const xe=s.get(A[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xe,0)}o.blitFramebuffer(0,0,et,_t,0,0,et,_t,St,o.NEAREST),d===!0&&(de.length=0,F.length=0,de.push(o.COLOR_ATTACHMENT0+wt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(de.push(ut),F.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let wt=0;wt<A.length;wt++){e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[wt]);const xe=s.get(A[wt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,xe,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ye(O){return Math.min(r.maxSamples,O.samples)}function ne(O){const A=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(O){const A=u.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Pe(O,A){const et=O.colorSpace,_t=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Vn&&et!==la&&(Ee.getTransfer(et)===He?(_t!==An||St!==Ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function Vt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Zt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Wn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ne}function ow(o,t){function e(s,r=la){let l;const u=Ee.getTransfer(r);if(s===Ts)return o.UNSIGNED_BYTE;if(s===yp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===xp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===iy)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ey)return o.BYTE;if(s===ny)return o.SHORT;if(s===gl)return o.UNSIGNED_SHORT;if(s===vp)return o.INT;if(s===Wa)return o.UNSIGNED_INT;if(s===Nn)return o.FLOAT;if(s===Tl)return o.HALF_FLOAT;if(s===sy)return o.ALPHA;if(s===ay)return o.RGB;if(s===An)return o.RGBA;if(s===ry)return o.LUMINANCE;if(s===oy)return o.LUMINANCE_ALPHA;if(s===vl)return o.DEPTH_COMPONENT;if(s===yl)return o.DEPTH_STENCIL;if(s===Sp)return o.RED;if(s===Mp)return o.RED_INTEGER;if(s===ly)return o.RG;if(s===Ep)return o.RG_INTEGER;if(s===bp)return o.RGBA_INTEGER;if(s===du||s===pu||s===mu||s===gu)if(u===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===du)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===du)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pd||s===Id||s===zd||s===Bd)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Pd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Id)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fd||s===Hd||s===Vd)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Fd||s===Hd)return u===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Vd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gd||s===kd||s===Xd||s===Wd||s===Yd||s===jd||s===qd||s===Kd||s===Zd||s===Qd||s===Jd||s===$d||s===tp||s===ep)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Gd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jd)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$d)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tp)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return u===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u||s===np||s===ip)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(s===_u)return u===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cy||s===sp||s===ap||s===rp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(s===_u)return l.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:e}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,s){if(this.texture===null){const r=new Rn,l=t.properties.get(r);l.__webglTexture=e.texture,(e.depthNear!==s.depthNear||e.depthFar!==s.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,s=new Mi({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new On(new pa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hw extends ja{constructor(t,e){super();const s=this;let r=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,x=null,E=null;const b=new uw,S=e.getContextAttributes();let y=null,D=null;const L=[],w=[],B=new Kt;let H=null;const z=new Jn;z.viewport=new Ae;const W=new Jn;W.viewport=new Ae;const U=[z,W],C=new Mb;let G=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=L[J];return dt===void 0&&(dt=new ad,L[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=L[J];return dt===void 0&&(dt=new ad,L[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=L[J];return dt===void 0&&(dt=new ad,L[J]=dt),dt.getHandSpace()};function rt(J){const dt=w.indexOf(J.inputSource);if(dt===-1)return;const yt=L[dt];yt!==void 0&&(yt.update(J.inputSource,J.frame,p||u),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",gt),r.removeEventListener("inputsourceschange",ft);for(let J=0;J<L.length;J++){const dt=w[J];dt!==null&&(w[J]=null,L[J].disconnect(dt))}G=null,lt=null,b.reset(),t.setRenderTarget(y),x=null,v=null,_=null,r=null,D=null,xt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",gt),r.addEventListener("inputsourceschange",ft),S.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Ot=null;S.depth&&(Ot=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?yl:vl,At=S.stencil?_l:Wa);const le={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:l};_=new XRWebGLBinding(r,e),v=_.createProjectionLayer(le),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new As(v.textureWidth,v.textureHeight,{format:An,type:Ts,depthTexture:new Ty(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,e,yt),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new As(x.framebufferWidth,x.framebufferHeight,{format:An,type:Ts,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(h),xt.setContext(r),xt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ft(J){for(let dt=0;dt<J.removed.length;dt++){const yt=J.removed[dt],At=w.indexOf(yt);At>=0&&(w[At]=null,L[At].disconnect(yt))}for(let dt=0;dt<J.added.length;dt++){const yt=J.added[dt];let At=w.indexOf(yt);if(At===-1){for(let le=0;le<L.length;le++)if(le>=w.length){w.push(yt),At=le;break}else if(w[le]===null){w[le]=yt,At=le;break}if(At===-1)break}const Ot=L[At];Ot&&Ot.connect(yt)}}const I=new X,Z=new X;function q(J,dt,yt){I.setFromMatrixPosition(dt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const At=I.distanceTo(Z),Ot=dt.projectionMatrix.elements,le=yt.projectionMatrix.elements,Zt=Ot[14]/(Ot[10]-1),Ye=Ot[14]/(Ot[10]+1),Ge=(Ot[9]+1)/Ot[5],de=(Ot[9]-1)/Ot[5],F=(Ot[8]-1)/Ot[0],Wn=(le[8]+1)/le[0],ye=Zt*F,ne=Zt*Wn,Xt=At/(-F+Wn),Pe=Xt*-F;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pe),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ot[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Vt=Zt+Xt,O=Ye+Xt,A=ye-Pe,et=ne+(At-Pe),_t=Ge*Ye/O*Vt,St=de*Ye/O*Vt;J.projectionMatrix.makePerspective(A,et,_t,St,Vt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let dt=J.near,yt=J.far;b.texture!==null&&(b.depthNear>0&&(dt=b.depthNear),b.depthFar>0&&(yt=b.depthFar)),C.near=W.near=z.near=dt,C.far=W.far=z.far=yt,(G!==C.near||lt!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,lt=C.far),z.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=z.layers.mask|W.layers.mask;const At=J.parent,Ot=C.cameras;Mt(C,At);for(let le=0;le<Ot.length;le++)Mt(Ot[le],At);Ot.length===2?q(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),N(J,C,At)};function N(J,dt,yt){yt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let tt=null;function vt(J,dt){if(g=dt.getViewerPose(p||u),E=dt,g!==null){const yt=g.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let At=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Zt=0;Zt<yt.length;Zt++){const Ye=yt[Zt];let Ge=null;if(x!==null)Ge=x.getViewport(Ye);else{const F=_.getViewSubImage(v,Ye);Ge=F.viewport,Zt===0&&(t.setRenderTargetTextures(D,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(D))}let de=U[Zt];de===void 0&&(de=new Jn,de.layers.enable(Zt),de.viewport=new Ae,U[Zt]=de),de.matrix.fromArray(Ye.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Ye.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Zt===0&&(C.matrix.copy(de.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(de)}const Ot=r.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const Zt=_.getDepthInformation(yt[0]);Zt&&Zt.isValid&&Zt.texture&&b.init(t,Zt,r.renderState)}}for(let yt=0;yt<L.length;yt++){const At=w[yt],Ot=L[yt];At!==null&&Ot!==void 0&&Ot.update(At,dt,p||u)}tt&&tt(J,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const xt=new Cy;xt.setAnimationLoop(vt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const Fa=new ki,fw=new ae;function dw(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,yy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,D,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),b(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?d(S,y,D,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===$n&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===$n&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=t.get(y),L=D.envMap,w=D.envMapRotation;L&&(S.envMap.value=L,Fa.copy(w),Fa.x*=-1,Fa.y*=-1,Fa.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fa.y*=-1,Fa.z*=-1),S.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(Fa)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=L*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===$n&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function b(S,y){const D=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function pw(o,t,e,s){let r={},l={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const w=L.program;s.uniformBlockBinding(D,w)}function p(D,L){let w=r[D.id];w===void 0&&(E(D),w=g(D),r[D.id]=w,D.addEventListener("dispose",S));const B=L.program;s.updateUBOMapping(D,B);const H=t.render.frame;l[D.id]!==H&&(v(D),l[D.id]=H)}function g(D){const L=_();D.__bindingPointIndex=L;const w=o.createBuffer(),B=D.__size,H=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,B,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,w),w}function _(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=r[D.id],w=D.uniforms,B=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let H=0,z=w.length;H<z;H++){const W=Array.isArray(w[H])?w[H]:[w[H]];for(let U=0,C=W.length;U<C;U++){const G=W[U];if(x(G,H,U,B)===!0){const lt=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ft=0;ft<rt.length;ft++){const I=rt[ft],Z=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,lt+gt,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,L,w,B){const H=D.value,z=L+"_"+w;if(B[z]===void 0)return typeof H=="number"||typeof H=="boolean"?B[z]=H:B[z]=H.clone(),!0;{const W=B[z];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return B[z]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function E(D){const L=D.uniforms;let w=0;const B=16;for(let z=0,W=L.length;z<W;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,G=U.length;C<G;C++){const lt=U[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ft=rt.length;gt<ft;gt++){const I=rt[gt],Z=b(I),q=w%B,Mt=q%Z.boundary,N=q+Mt;w+=Mt,N!==0&&B-N<Z.storage&&(w+=B-N),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const H=w%B;return H>0&&(w+=B-H),D.__size=w,D.__cache={},this}function b(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function S(D){const L=D.target;L.removeEventListener("dispose",S);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete l[L.id]}function y(){for(const D in r)o.deleteBuffer(r[D]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class Oy{constructor(t={}){const{canvas:e=gE(),context:s=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,y=null;const D=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let B=!1;this._outputColorSpace=fn;let H=0,z=0,W=null,U=-1,C=null;const G=new Ae,lt=new Ae;let rt=null;const gt=new se(0);let ft=0,I=e.width,Z=e.height,q=1,Mt=null,N=null;const tt=new Ae(0,0,I,Z),vt=new Ae(0,0,I,Z);let xt=!1;const J=new Dp;let dt=!1,yt=!1;const At=new ae,Ot=new ae,le=new X,Zt=new Ae,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function de(){return W===null?q:1}let F=s;function Wn(R,j){return e.getContext(R,j)}try{const R={alpha:!0,depth:r,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),F===null){const j="webgl2";if(F=Wn(j,R),F===null)throw Wn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ye,ne,Xt,Pe,Vt,O,A,et,_t,St,ut,zt,Rt,wt,xe,bt,Ft,jt,Qt,Pt,ue,ee,Ie,k;function Ut(){ye=new T1(F),ye.init(),ee=new ow(F,ye),ne=new v1(F,ye,t,ee),Xt=new aw(F,ye),ne.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Pe=new w1(F),Vt=new YR,O=new rw(F,ye,Xt,Vt,ne,ee,Pe),A=new x1(w),et=new b1(w),_t=new Ob(F),Ie=new g1(F,_t),St=new A1(F,_t,Pe,Ie),ut=new D1(F,St,_t,Pe),Qt=new C1(F,ne,O),bt=new y1(Vt),zt=new WR(w,A,et,ye,ne,Ie,bt),Rt=new dw(w,Vt),wt=new qR,xe=new tw(ye),jt=new m1(w,A,et,Xt,ut,x,d),Ft=new iw(w,ut,ne),k=new pw(F,Pe,ne,Xt),Pt=new _1(F,ye,Pe),ue=new R1(F,ye,Pe),Pe.programs=zt.programs,w.capabilities=ne,w.extensions=ye,w.properties=Vt,w.renderLists=wt,w.shadowMap=Ft,w.state=Xt,w.info=Pe}Ut();const ot=new hw(w,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,j,st=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=j,e.width=Math.floor(R*q),e.height=Math.floor(j*q),st===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(I*q,Z*q).floor()},this.setDrawingBufferSize=function(R,j,st){I=R,Z=j,q=st,e.width=Math.floor(R*st),e.height=Math.floor(j*st),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,j,st,at){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,j,st,at),Xt.viewport(G.copy(tt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,j,st,at){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,j,st,at),Xt.scissor(lt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Xt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,st=!0){let at=0;if(R){let K=!1;if(W!==null){const Et=W.texture.format;K=Et===bp||Et===Ep||Et===Mp}if(K){const Et=W.texture.type,Ct=Et===Ts||Et===Wa||Et===gl||Et===_l||Et===yp||Et===xp,Dt=jt.getClearColor(),Bt=jt.getClearAlpha(),$t=Dt.r,Wt=Dt.g,kt=Dt.b;Ct?(E[0]=$t,E[1]=Wt,E[2]=kt,E[3]=Bt,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=$t,b[1]=Wt,b[2]=kt,b[3]=Bt,F.clearBufferiv(F.COLOR,0,b))}else at|=F.COLOR_BUFFER_BIT}j&&(at|=F.DEPTH_BUFFER_BIT),st&&(at|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),wt.dispose(),xe.dispose(),Vt.dispose(),A.dispose(),et.dispose(),ut.dispose(),Ie.dispose(),k.dispose(),zt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",dn),ot.removeEventListener("sessionend",wn),Yn.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Pe.autoReset,j=Ft.enabled,st=Ft.autoUpdate,at=Ft.needsUpdate,K=Ft.type;Ut(),Pe.autoReset=R,Ft.enabled=j,Ft.autoUpdate=st,Ft.needsUpdate=at,Ft.type=K}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const j=R.target;j.removeEventListener("dispose",ie),je(j)}function je(R){on(R),Vt.remove(R)}function on(R){const j=Vt.get(R).programs;j!==void 0&&(j.forEach(function(st){zt.releaseProgram(st)}),R.isShaderMaterial&&zt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,st,at,K,Et){j===null&&(j=Ye);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,Dt=_a(R,j,st,at,K);Xt.setMaterial(at,Ct);let Bt=st.index,$t=1;if(at.wireframe===!0){if(Bt=St.getWireframeAttribute(st),Bt===void 0)return;$t=2}const Wt=st.drawRange,kt=st.attributes.position;let me=Wt.start*$t,we=(Wt.start+Wt.count)*$t;Et!==null&&(me=Math.max(me,Et.start*$t),we=Math.min(we,(Et.start+Et.count)*$t)),Bt!==null?(me=Math.max(me,0),we=Math.min(we,Bt.count)):kt!=null&&(me=Math.max(me,0),we=Math.min(we,kt.count));const Qe=we-me;if(Qe<0||Qe===1/0)return;Ie.setup(K,at,Dt,st,Bt);let Se,Me=Pt;if(Bt!==null&&(Se=_t.get(Bt),Me=ue,Me.setIndex(Se)),K.isMesh)at.wireframe===!0?(Xt.setLineWidth(at.wireframeLinewidth*de()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(K.isLine){let Yt=at.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*de()),K.isLineSegments?Me.setMode(F.LINES):K.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else K.isPoints?Me.setMode(F.POINTS):K.isSprite&&Me.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)vu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,tn=K._multiDrawCounts,Te=K._multiDrawCount,Pn=Bt?_t.get(Bt).bytesPerElement:1,Ls=Vt.get(at).currentProgram.getUniforms();for(let qe=0;qe<Te;qe++)Ls.setValue(F,"_gl_DrawID",qe),Me.render(Yt[qe]/Pn,tn[qe])}else if(K.isInstancedMesh)Me.renderInstances(me,Qe,K.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,tn=Math.min(st.instanceCount,Yt);Me.renderInstances(me,Qe,tn)}else Me.render(me,Qe)};function Re(R,j,st){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,Cs(R,j,st),R.side=bs,R.needsUpdate=!0,Cs(R,j,st),R.side=Si):Cs(R,j,st)}this.compile=function(R,j,st=null){st===null&&(st=R),y=xe.get(st),y.init(j),L.push(y),st.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==st&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const at=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];Re(Dt,st,K),at.add(Dt)}else Re(Et,st,K),at.add(Et)}),y=L.pop(),at},this.compileAsync=function(R,j,st=null){const at=this.compile(R,j,st);return new Promise(K=>{function Et(){if(at.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&at.delete(Ct)}),at.size===0){K(R);return}setTimeout(Et,10)}ye.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ti=null;function xn(R){ti&&ti(R)}function dn(){Yn.stop()}function wn(){Yn.start()}const Yn=new Cy;Yn.setAnimationLoop(xn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){ti=R,ot.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},ot.addEventListener("sessionstart",dn),ot.addEventListener("sessionend",wn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,j,W),y=xe.get(R,L.length),y.init(j),L.push(y),Ot.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Ot),yt=this.localClippingEnabled,dt=bt.init(this.clippingPlanes,yt),S=wt.get(R,D.length),S.init(),D.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&ma(Et,j,-1/0,w.sortObjects)}ma(R,j,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,N),Ge=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ge&&jt.addToRenderList(S,R),this.info.render.frame++,dt===!0&&bt.beginShadows();const st=y.state.shadowsArray;Ft.render(st,R,j),dt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,K=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Et=j.cameras;if(K.length>0)for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const Bt=Et[Ct];Cl(at,K,R,Bt)}Ge&&jt.render(R);for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++){const Bt=Et[Ct];wl(S,R,Bt,Bt.viewport)}}else K.length>0&&Cl(at,K,R,j),Ge&&jt.render(R),wl(S,R,j);W!==null&&z===0&&(O.updateMultisampleRenderTarget(W),O.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,j),Ie.resetDefaultState(),U=-1,C=null,L.pop(),L.length>0?(y=L[L.length-1],dt===!0&&bt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function ma(R,j,st,at){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){at&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ot);const Ct=ut.update(R),Dt=R.material;Dt.visible&&S.push(R,Ct,Dt,st,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ct=ut.update(R),Dt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Zt.copy(Ct.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(Ot)),Array.isArray(Dt)){const Bt=Ct.groups;for(let $t=0,Wt=Bt.length;$t<Wt;$t++){const kt=Bt[$t],me=Dt[kt.materialIndex];me&&me.visible&&S.push(R,Ct,me,st,Zt.z,kt)}}else Dt.visible&&S.push(R,Ct,Dt,st,Zt.z,null)}}const Et=R.children;for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++)ma(Et[Ct],j,st,at)}function wl(R,j,st,at){const K=R.opaque,Et=R.transmissive,Ct=R.transparent;y.setupLightsView(st),dt===!0&&bt.setGlobalState(w.clippingPlanes,st),at&&Xt.viewport(G.copy(at)),K.length>0&&ga(K,j,st),Et.length>0&&ga(Et,j,st),Ct.length>0&&ga(Ct,j,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Cl(R,j,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[at.id]===void 0&&(y.state.transmissionRenderTarget[at.id]=new As(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Tl:Ts,minFilter:ys,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Et=y.state.transmissionRenderTarget[at.id],Ct=at.viewport||G;Et.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const Dt=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(gt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),Ge&&jt.render(st);const Bt=w.toneMapping;w.toneMapping=da;const $t=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),y.setupLightsView(at),dt===!0&&bt.setGlobalState(w.clippingPlanes,at),ga(R,st,at),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let kt=0,me=j.length;kt<me;kt++){const we=j[kt],Qe=we.object,Se=we.geometry,Me=we.material,Yt=we.group;if(Me.side===Si&&Qe.layers.test(at.layers)){const tn=Me.side;Me.side=$n,Me.needsUpdate=!0,ws(Qe,st,at,Se,Me,Yt),Me.side=tn,Me.needsUpdate=!0,Wt=!0}}Wt===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}w.setRenderTarget(Dt),w.setClearColor(gt,ft),$t!==void 0&&(at.viewport=$t),w.toneMapping=Bt}function ga(R,j,st){const at=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Et=R.length;K<Et;K++){const Ct=R[K],Dt=Ct.object,Bt=Ct.geometry,$t=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&at!==null&&(Wt=at),Dt.layers.test(st.layers)&&ws(Dt,j,st,Bt,Wt,$t)}}function ws(R,j,st,at,K,Et){R.onBeforeRender(w,j,st,at,K,Et),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(w,j,st,at,R,Et),K.transparent===!0&&K.side===Si&&K.forceSinglePass===!1?(K.side=$n,K.needsUpdate=!0,w.renderBufferDirect(st,j,at,K,R,Et),K.side=bs,K.needsUpdate=!0,w.renderBufferDirect(st,j,at,K,R,Et),K.side=Si):w.renderBufferDirect(st,j,at,K,R,Et),R.onAfterRender(w,j,st,at,K,Et)}function Cs(R,j,st){j.isScene!==!0&&(j=Ye);const at=Vt.get(R),K=y.state.lights,Et=y.state.shadowsArray,Ct=K.state.version,Dt=zt.getParameters(R,K.state,Et,j,st),Bt=zt.getProgramCacheKey(Dt);let $t=at.programs;at.environment=R.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(R.isMeshStandardMaterial?et:A).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",ie),$t=new Map,at.programs=$t);let Wt=$t.get(Bt);if(Wt!==void 0){if(at.currentProgram===Wt&&at.lightsStateVersion===Ct)return ji(R,Dt),Wt}else Dt.uniforms=zt.getUniforms(R),R.onBeforeCompile(Dt,w),Wt=zt.acquireProgram(Dt,Bt),$t.set(Bt,Wt),at.uniforms=Dt.uniforms;const kt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=bt.uniform),ji(R,Dt),at.needsLights=ln(R),at.lightsStateVersion=Ct,at.needsLights&&(kt.ambientLightColor.value=K.state.ambient,kt.lightProbe.value=K.state.probe,kt.directionalLights.value=K.state.directional,kt.directionalLightShadows.value=K.state.directionalShadow,kt.spotLights.value=K.state.spot,kt.spotLightShadows.value=K.state.spotShadow,kt.rectAreaLights.value=K.state.rectArea,kt.ltc_1.value=K.state.rectAreaLTC1,kt.ltc_2.value=K.state.rectAreaLTC2,kt.pointLights.value=K.state.point,kt.pointLightShadows.value=K.state.pointShadow,kt.hemisphereLights.value=K.state.hemi,kt.directionalShadowMap.value=K.state.directionalShadowMap,kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,kt.spotShadowMap.value=K.state.spotShadowMap,kt.spotLightMatrix.value=K.state.spotLightMatrix,kt.spotLightMap.value=K.state.spotLightMap,kt.pointShadowMap.value=K.state.pointShadowMap,kt.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=Wt,at.uniformsList=null,Wt}function Yi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=yu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ji(R,j){const st=Vt.get(R);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function _a(R,j,st,at,K){j.isScene!==!0&&(j=Ye),O.resetTextureUnits();const Et=j.fog,Ct=at.isMeshStandardMaterial?j.environment:null,Dt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Vn,Bt=(at.isMeshStandardMaterial?et:A).get(at.envMap||Ct),$t=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Wt=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!st.morphAttributes.position,me=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let Qe=da;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Se=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Me=Se!==void 0?Se.length:0,Yt=Vt.get(at),tn=y.state.lights;if(dt===!0&&(yt===!0||R!==C)){const Sn=R===C&&at.id===U;bt.setState(at,R,Sn)}let Te=!1;at.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==tn.state.version||Yt.outputColorSpace!==Dt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==Bt||at.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==$t||Yt.vertexTangents!==Wt||Yt.morphTargets!==kt||Yt.morphNormals!==me||Yt.morphColors!==we||Yt.toneMapping!==Qe||Yt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Yt.__version=at.version);let Pn=Yt.currentProgram;Te===!0&&(Pn=Cs(at,j,K));let Ls=!1,qe=!1,Ki=!1;const ke=Pn.getUniforms(),In=Yt.uniforms;if(Xt.useProgram(Pn.program)&&(Ls=!0,qe=!0,Ki=!0),at.id!==U&&(U=at.id,qe=!0),Ls||C!==R){Xt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),vE(At),yE(At),ke.setValue(F,"projectionMatrix",At)):ke.setValue(F,"projectionMatrix",R.projectionMatrix),ke.setValue(F,"viewMatrix",R.matrixWorldInverse);const Cn=ke.map.cameraPosition;Cn!==void 0&&Cn.setValue(F,le.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&ke.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ke.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,qe=!0,Ki=!0)}if(K.isSkinnedMesh){ke.setOptional(F,K,"bindMatrix"),ke.setOptional(F,K,"bindMatrixInverse");const Sn=K.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ke.setValue(F,"boneTexture",Sn.boneTexture,O))}K.isBatchedMesh&&(ke.setOptional(F,K,"batchingTexture"),ke.setValue(F,"batchingTexture",K._matricesTexture,O),ke.setOptional(F,K,"batchingIdTexture"),ke.setValue(F,"batchingIdTexture",K._indirectTexture,O),ke.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&ke.setValue(F,"batchingColorTexture",K._colorsTexture,O));const pn=st.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Qt.update(K,st,Pn),(qe||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,ke.setValue(F,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(In.envMap.value=Bt,In.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),qe&&(ke.setValue(F,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Ds(In,Ki),Et&&at.fog===!0&&Rt.refreshFogUniforms(In,Et),Rt.refreshMaterialUniforms(In,at,q,Z,y.state.transmissionRenderTarget[R.id]),yu.upload(F,Yi(Yt),In,O)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(yu.upload(F,Yi(Yt),In,O),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ke.setValue(F,"center",K.center),ke.setValue(F,"modelViewMatrix",K.modelViewMatrix),ke.setValue(F,"normalMatrix",K.normalMatrix),ke.setValue(F,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Sn=at.uniformsGroups;for(let Cn=0,Ni=Sn.length;Cn<Ni;Cn++){const Zi=Sn[Cn];k.update(Zi,Pn),k.bind(Zi,Pn)}}return Pn}function Ds(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ln(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,st){const at=Vt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=j,Vt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:st,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const st=Vt.get(R);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const Dl=F.createFramebuffer();this.setRenderTarget=function(R,j=0,st=0){W=R,H=j,z=st;let at=!0,K=null,Et=!1,Ct=!1;if(R){const Bt=Vt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(F.FRAMEBUFFER,null),at=!1;else if(Bt.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Bt.__hasExternalTextures)O.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Vt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Wt=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?K=Wt[j][st]:K=Wt[j],Et=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?K=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?K=Wt[st]:K=Wt,G.copy(R.viewport),lt.copy(R.scissor),rt=R.scissorTest}else G.copy(tt).multiplyScalar(q).floor(),lt.copy(vt).multiplyScalar(q).floor(),rt=xt;if(st!==0&&(K=Dl),Xt.bindFramebuffer(F.FRAMEBUFFER,K)&&at&&Xt.drawBuffers(R,K),Xt.viewport(G),Xt.scissor(lt),Xt.setScissorTest(rt),Et){const Bt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,st)}else if(Ct){const Bt=Vt.get(R.texture),$t=j;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,st,$t)}else if(R!==null&&st!==0){const Bt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(R,j,st,at,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Xt.bindFramebuffer(F.FRAMEBUFFER,Dt);try{const Bt=R.texture,$t=Bt.format,Wt=Bt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-at&&st>=0&&st<=R.height-K&&F.readPixels(j,st,at,K,ee.convert($t),ee.convert(Wt),Et)}finally{const Bt=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,j,st,at,K,Et,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(j>=0&&j<=R.width-at&&st>=0&&st<=R.height-K){Xt.bindFramebuffer(F.FRAMEBUFFER,Dt);const Bt=R.texture,$t=Bt.format,Wt=Bt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(j,st,at,K,ee.convert($t),ee.convert(Wt),0);const me=W!==null?Vt.get(W).__webglFramebuffer:null;Xt.bindFramebuffer(F.FRAMEBUFFER,me);const we=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _E(F,we,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(kt),F.deleteSync(we),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,st=0){const at=Math.pow(2,-st),K=Math.floor(R.image.width*at),Et=Math.floor(R.image.height*at),Ct=j!==null?j.x:0,Dt=j!==null?j.y:0;O.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,st,0,0,Ct,Dt,K,Et),Xt.unbindTexture()};const Ll=F.createFramebuffer(),qi=F.createFramebuffer();this.copyTextureToTexture=function(R,j,st=null,at=null,K=0,Et=null){Et===null&&(K!==0?(vu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Ct,Dt,Bt,$t,Wt,kt,me,we,Qe;const Se=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(st!==null)Ct=st.max.x-st.min.x,Dt=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,Wt=st.min.y,kt=st.isBox3?st.min.z:0;else{const pn=Math.pow(2,-K);Ct=Math.floor(Se.width*pn),Dt=Math.floor(Se.height*pn),R.isDataArrayTexture?Bt=Se.depth:R.isData3DTexture?Bt=Math.floor(Se.depth*pn):Bt=1,$t=0,Wt=0,kt=0}at!==null?(me=at.x,we=at.y,Qe=at.z):(me=0,we=0,Qe=0);const Me=ee.convert(j.format),Yt=ee.convert(j.type);let tn;j.isData3DTexture?(O.setTexture3D(j,0),tn=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),tn=F.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),tn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),Pn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ls=F.getParameter(F.UNPACK_SKIP_PIXELS),qe=F.getParameter(F.UNPACK_SKIP_ROWS),Ki=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const ke=R.isDataArrayTexture||R.isData3DTexture,In=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const pn=Vt.get(R),Sn=Vt.get(j),Cn=Vt.get(pn.__renderTarget),Ni=Vt.get(Sn.__renderTarget);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Zi=0;Zi<Bt;Zi++)ke&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,K,kt+Zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,Et,Qe+Zi)),F.blitFramebuffer($t,Wt,Ct,Dt,me,we,Ct,Dt,F.DEPTH_BUFFER_BIT,F.NEAREST);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Vt.has(R)){const pn=Vt.get(R),Sn=Vt.get(j);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,Ll),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qi);for(let Cn=0;Cn<Bt;Cn++)ke?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,K,kt+Cn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,K),In?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Sn.__webglTexture,Et,Qe+Cn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Sn.__webglTexture,Et),K!==0?F.blitFramebuffer($t,Wt,Ct,Dt,me,we,Ct,Dt,F.COLOR_BUFFER_BIT,F.NEAREST):In?F.copyTexSubImage3D(tn,Et,me,we,Qe+Cn,$t,Wt,Ct,Dt):F.copyTexSubImage2D(tn,Et,me,we,$t,Wt,Ct,Dt);Xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(tn,Et,me,we,Qe,Ct,Dt,Bt,Me,Yt,Se.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(tn,Et,me,we,Qe,Ct,Dt,Bt,Me,Se.data):F.texSubImage3D(tn,Et,me,we,Qe,Ct,Dt,Bt,Me,Yt,Se):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,me,we,Ct,Dt,Me,Yt,Se.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,me,we,Se.width,Se.height,Me,Se.data):F.texSubImage2D(F.TEXTURE_2D,Et,me,we,Ct,Dt,Me,Yt,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ls),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ki),Et===0&&j.generateMipmaps&&F.generateMipmap(tn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,st=null,at=null,K=0){return vu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,st,at,K)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){H=0,z=0,W=null,Xt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}const k0={type:"change"},Hp={type:"start"},Py={type:"end"},hu=new io,X0=new oa,mw=Math.cos(70*dy.DEG2RAD),_n=new X,Qn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6;class Iy extends Ub{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Gi,this._lastTargetPosition=new X,this._quat=new Gi().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _0,this._sphericalDelta=new _0,this._scale=1,this._panOffset=new X,this._rotateStart=new Kt,this._rotateEnd=new Kt,this._rotateDelta=new Kt,this._panStart=new Kt,this._panEnd=new Kt,this._panDelta=new Kt,this._dollyStart=new Kt,this._dollyEnd=new Kt,this._dollyDelta=new Kt,this._dollyDirection=new X,this._mouse=new Kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_w.bind(this),this._onPointerDown=gw.bind(this),this._onPointerUp=vw.bind(this),this._onContextMenu=Tw.bind(this),this._onMouseWheel=Sw.bind(this),this._onKeyDown=Mw.bind(this),this._onTouchStart=Ew.bind(this),this._onTouchMove=bw.bind(this),this._onMouseDown=yw.bind(this),this._onMouseMove=xw.bind(this),this._interceptControlDown=Aw.bind(this),this._interceptControlUp=Rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(k0),this.update(),this.state=Ve.NONE}update(t=null){const e=this.object.position;_n.copy(e).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(s)&&isFinite(r)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),s<=r?this._spherical.theta=Math.max(s,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+r)/2?Math.max(s,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),e.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=_n.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(hu.origin.copy(this.object.position),hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hu.direction))<mw?this.object.lookAt(this.target):(X0.setFromNormalAndCoplanarPoint(this.object.up,this.target),hu.intersectPlane(X0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(k0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_n.setFromMatrixColumn(e,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,e){this.screenSpacePanning===!0?_n.setFromMatrixColumn(e,1):(_n.setFromMatrixColumn(e,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,e){const s=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;_n.copy(r).sub(this.target);let l=_n.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*l/s.clientHeight,this.object.matrix),this._panUp(2*e*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),r=t-s.left,l=e-s.top,u=s.width,h=s.height;this._mouse.x=r/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(s,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(s,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,l=Math.sqrt(s*s+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),r=.5*(t.pageX+s.x),l=.5*(t.pageY+s.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),s=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(s,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),s=t.pageX-e.x,r=t.pageY-e.y,l=Math.sqrt(s*s+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function gw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function _w(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function vw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Py),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yw(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ve.DOLLY;break;case kr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}break;case kr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Hp)}function xw(o){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Sw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(o.preventDefault(),this.dispatchEvent(Hp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Py))}function Mw(o){this.enabled!==!1&&this._handleKeyDown(o)}function Ew(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ve.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ve.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(Hp)}function bw(o){switch(this._trackPointer(o),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ve.NONE}}function Tw(o){this.enabled!==!1&&o.preventDefault()}function Aw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W0(o,t){if(t===kM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===op||t===uy){let e=o.getIndex();if(e===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let d=0;d<h.count;d++)u.push(d);o.setIndex(u),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const s=e.count-2,r=[];if(t===op)for(let u=1;u<=s;u++)r.push(e.getX(0)),r.push(e.getX(u)),r.push(e.getX(u+1));else for(let u=0;u<s;u++)u%2===0?(r.push(e.getX(u)),r.push(e.getX(u+1)),r.push(e.getX(u+2))):(r.push(e.getX(u+2)),r.push(e.getX(u+1)),r.push(e.getX(u)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=o.clone();return l.setIndex(r),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class zy extends qa{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Uw(e)}),this.register(function(e){return new Nw(e)}),this.register(function(e){return new Gw(e)}),this.register(function(e){return new kw(e)}),this.register(function(e){return new Xw(e)}),this.register(function(e){return new Pw(e)}),this.register(function(e){return new Iw(e)}),this.register(function(e){return new zw(e)}),this.register(function(e){return new Bw(e)}),this.register(function(e){return new Lw(e)}),this.register(function(e){return new Fw(e)}),this.register(function(e){return new Ow(e)}),this.register(function(e){return new Vw(e)}),this.register(function(e){return new Hw(e)}),this.register(function(e){return new Cw(e)}),this.register(function(e){return new Ww(e)}),this.register(function(e){return new Yw(e)})}load(t,e,s,r){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const p=ml.extractUrlBase(t);u=ml.resolveURL(p,this.path)}else u=ml.extractUrlBase(t);this.manager.itemStart(t);const h=function(p){r?r(p):console.error(p),l.manager.itemError(t),l.manager.itemEnd(t)},d=new Au(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(p){try{l.parse(p,u,function(g){e(g),l.manager.itemEnd(t)},h)}catch(g){h(g)}},s,h)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,s,r){let l;const u={},h={},d=new TextDecoder;if(typeof t=="string")l=JSON.parse(t);else if(t instanceof ArrayBuffer)if(d.decode(new Uint8Array(t,0,4))===By){try{u[ve.KHR_BINARY_GLTF]=new jw(t)}catch(_){r&&r(_);return}l=JSON.parse(u[ve.KHR_BINARY_GLTF].content)}else l=JSON.parse(d.decode(t));else l=t;if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const p=new rC(l,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});p.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](p);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[_.name]=_,u[_.name]=!0}if(l.extensionsUsed)for(let g=0;g<l.extensionsUsed.length;++g){const _=l.extensionsUsed[g],v=l.extensionsRequired||[];switch(_){case ve.KHR_MATERIALS_UNLIT:u[_]=new Dw;break;case ve.KHR_DRACO_MESH_COMPRESSION:u[_]=new qw(l,this.dracoLoader);break;case ve.KHR_TEXTURE_TRANSFORM:u[_]=new Kw;break;case ve.KHR_MESH_QUANTIZATION:u[_]=new Zw;break;default:v.indexOf(_)>=0&&h[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}p.setExtensions(u),p.setPlugins(h),p.parse(s,r)}parseAsync(t,e){const s=this;return new Promise(function(r,l){s.parse(t,e,r,l)})}}function ww(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cw{constructor(t){this.parser=t,this.name=ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let s=0,r=e.length;s<r;s++){const l=e[s];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(t){const e=this.parser,s="light:"+t;let r=e.cache.get(s);if(r)return r;const l=e.json,d=((l.extensions&&l.extensions[this.name]||{}).lights||[])[t];let p;const g=new se(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Vn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":p=new xb(g),p.target.position.set(0,0,-1),p.add(p.target);break;case"point":p=new vb(g),p.distance=_;break;case"spot":p=new gb(g),p.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,p.angle=d.spot.outerConeAngle,p.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,p.target.position.set(0,0,-1),p.add(p.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return p.position.set(0,0,0),vs(p,d),d.intensity!==void 0&&(p.intensity=d.intensity),p.name=e.createUniqueName(d.name||"light_"+t),r=Promise.resolve(p),e.cache.add(s,r),r}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,s=this.parser,l=s.json.nodes[t],h=(l.extensions&&l.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(d){return s._getNodeRef(e.cache,h,d)})}}class Dw{constructor(){this.name=ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Ss}extendParams(t,e,s){const r=[];t.color=new se(1,1,1),t.opacity=1;const l=e.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;t.color.setRGB(u[0],u[1],u[2],Vn),t.opacity=u[3]}l.baseColorTexture!==void 0&&r.push(s.assignTexture(t,"map",l.baseColorTexture,fn))}return Promise.all(r)}}class Lw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name].emissiveStrength;return l!==void 0&&(e.emissiveIntensity=l),Promise.resolve()}}class Uw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(e.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(s.assignTexture(e,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(s.assignTexture(e,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(s.assignTexture(e,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Kt(h,h)}return Promise.all(l)}}class Nw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_DISPERSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return e.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class Ow{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(e.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(s.assignTexture(e,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(e.iridescenceIOR=u.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(s.assignTexture(e,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class Pw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SHEEN}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[];e.sheenColor=new se(0,0,0),e.sheenRoughness=0,e.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;e.sheenColor.setRGB(h[0],h[1],h[2],Vn)}return u.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(s.assignTexture(e,"sheenColorMap",u.sheenColorTexture,fn)),u.sheenRoughnessTexture!==void 0&&l.push(s.assignTexture(e,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class Iw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(e.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(s.assignTexture(e,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class zw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_VOLUME}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];e.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(s.assignTexture(e,"thicknessMap",u.thicknessTexture)),e.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return e.attenuationColor=new se().setRGB(h[0],h[1],h[2],Vn),Promise.all(l)}}class Bw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IOR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=r.extensions[this.name];return e.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class Fw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SPECULAR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];e.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(s.assignTexture(e,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return e.specularColor=new se().setRGB(h[0],h[1],h[2],Vn),u.specularColorTexture!==void 0&&l.push(s.assignTexture(e,"specularColorMap",u.specularColorTexture,fn)),Promise.all(l)}}class Hw{constructor(t){this.parser=t,this.name=ve.EXT_MATERIALS_BUMP}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return e.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(s.assignTexture(e,"bumpMap",u.bumpTexture)),Promise.all(l)}}class Vw{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:Wi}extendMaterialParams(t,e){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const l=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(e.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(e.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(s.assignTexture(e,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class Gw{constructor(t){this.parser=t,this.name=ve.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,s=e.json,r=s.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const l=r.extensions[this.name],u=e.options.ktx2Loader;if(!u){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,l.source,u)}}class kw{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,r=s.json,l=r.textures[t];if(!l.extensions||!l.extensions[e])return null;const u=l.extensions[e],h=r.images[u.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Xw{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,s=this.parser,r=s.json,l=r.textures[t];if(!l.extensions||!l.extensions[e])return null;const u=l.extensions[e],h=r.images[u.source];let d=s.textureLoader;if(h.uri){const p=s.options.manager.getHandler(h.uri);p!==null&&(d=p)}return this.detectSupport().then(function(p){if(p)return s.loadTextureImage(t,u.source,d);if(r.extensionsRequired&&r.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ww{constructor(t){this.name=ve.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,s=e.bufferViews[t];if(s.extensions&&s.extensions[this.name]){const r=s.extensions[this.name],l=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(h){const d=r.byteOffset||0,p=r.byteLength||0,g=r.count,_=r.byteStride,v=new Uint8Array(h,d,p);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(g,_,v,r.mode,r.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(g*_);return u.decodeGltfBuffer(new Uint8Array(x),g,_,v,r.mode,r.filter),x})})}else return null}}class Yw{constructor(t){this.name=ve.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,s=e.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const r=e.meshes[s.mesh];for(const p of r.primitives)if(p.mode!==xi.TRIANGLES&&p.mode!==xi.TRIANGLE_STRIP&&p.mode!==xi.TRIANGLE_FAN&&p.mode!==void 0)return null;const u=s.extensions[this.name].attributes,h=[],d={};for(const p in u)h.push(this.parser.getDependency("accessor",u[p]).then(g=>(d[p]=g,d[p])));return h.length<1?null:(h.push(this.parser.createNodeMesh(t)),Promise.all(h).then(p=>{const g=p.pop(),_=g.isGroup?g.children:[g],v=p[0].count,x=[];for(const E of _){const b=new ae,S=new X,y=new Gi,D=new X(1,1,1),L=new KE(E.geometry,E.material,v);for(let w=0;w<v;w++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,w),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,w),d.SCALE&&D.fromBufferAttribute(d.SCALE,w),L.setMatrixAt(w,b.compose(S,y,D));for(const w in d)if(w==="_COLOR_0"){const B=d[w];L.instanceColor=new cp(B.array,B.itemSize,B.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&E.geometry.setAttribute(w,d[w]);$e.prototype.copy.call(L,E),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const By="glTF",ul=12,Y0={JSON:1313821514,BIN:5130562};class jw{constructor(t){this.name=ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ul),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==By)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ul,l=new DataView(t,ul);let u=0;for(;u<r;){const h=l.getUint32(u,!0);u+=4;const d=l.getUint32(u,!0);if(u+=4,d===Y0.JSON){const p=new Uint8Array(t,ul+u,h);this.content=s.decode(p)}else if(d===Y0.BIN){const p=ul+u;this.body=t.slice(p,p+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qw{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ve.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const s=this.json,r=this.dracoLoader,l=t.extensions[this.name].bufferView,u=t.extensions[this.name].attributes,h={},d={},p={};for(const g in u){const _=dp[g]||g.toLowerCase();h[_]=u[g]}for(const g in t.attributes){const _=dp[g]||g.toLowerCase();if(u[g]!==void 0){const v=s.accessors[t.attributes[g]],x=Yr[v.componentType];p[_]=x.name,d[_]=v.normalized===!0}}return e.getDependency("bufferView",l).then(function(g){return new Promise(function(_,v){r.decodeDracoFile(g,function(x){for(const E in x.attributes){const b=x.attributes[E],S=d[E];S!==void 0&&(b.normalized=S)}_(x)},h,p,Vn,v)})})}}class Kw{constructor(){this.name=ve.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Zw{constructor(){this.name=ve.KHR_MESH_QUANTIZATION}}class Fy extends Rl{constructor(t,e,s,r){super(t,e,s,r)}copySampleValue_(t){const e=this.resultBuffer,s=this.sampleValues,r=this.valueSize,l=t*r*3+r;for(let u=0;u!==r;u++)e[u]=s[l+u];return e}interpolate_(t,e,s,r){const l=this.resultBuffer,u=this.sampleValues,h=this.valueSize,d=h*2,p=h*3,g=r-e,_=(s-e)/g,v=_*_,x=v*_,E=t*p,b=E-p,S=-2*x+3*v,y=x-v,D=1-S,L=y-v+_;for(let w=0;w!==h;w++){const B=u[b+w+h],H=u[b+w+d]*g,z=u[E+w+h],W=u[E+w]*g;l[w]=D*B+L*H+S*z+y*W}return l}}const Qw=new Gi;class Jw extends Fy{interpolate_(t,e,s,r){const l=super.interpolate_(t,e,s,r);return Qw.fromArray(l).normalize().toArray(l),l}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},j0={9728:We,9729:ui,9984:ty,9985:fu,9986:hl,9987:ys},q0={33071:ca,33648:xu,10497:Zr},yd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ra={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$w={CUBICSPLINE:void 0,LINEAR:Sl,STEP:xl},xd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tC(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Np({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bs})),o.DefaultMaterial}function Ha(o,t,e){for(const s in e.extensions)o[s]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=e.extensions[s])}function vs(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function eC(o,t,e){let s=!1,r=!1,l=!1;for(let p=0,g=t.length;p<g;p++){const _=t[p];if(_.POSITION!==void 0&&(s=!0),_.NORMAL!==void 0&&(r=!0),_.COLOR_0!==void 0&&(l=!0),s&&r&&l)break}if(!s&&!r&&!l)return Promise.resolve(o);const u=[],h=[],d=[];for(let p=0,g=t.length;p<g;p++){const _=t[p];if(s){const v=_.POSITION!==void 0?e.getDependency("accessor",_.POSITION):o.attributes.position;u.push(v)}if(r){const v=_.NORMAL!==void 0?e.getDependency("accessor",_.NORMAL):o.attributes.normal;h.push(v)}if(l){const v=_.COLOR_0!==void 0?e.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(p){const g=p[0],_=p[1],v=p[2];return s&&(o.morphAttributes.position=g),r&&(o.morphAttributes.normal=_),l&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function nC(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,s=t.weights.length;e<s;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let s=0,r=e.length;s<r;s++)o.morphTargetDictionary[e[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iC(o){let t;const e=o.extensions&&o.extensions[ve.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sd(e.attributes):t=o.indices+":"+Sd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let s=0,r=o.targets.length;s<r;s++)t+=":"+Sd(o.targets[s]);return t}function Sd(o){let t="";const e=Object.keys(o).sort();for(let s=0,r=e.length;s<r;s++)t+=e[s]+":"+o[e[s]]+";";return t}function pp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sC(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aC=new ae;class rC{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new ww,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=-1,l=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(h)===!0;const d=h.match(/Version\/(\d+)/);r=s&&d?parseInt(d[1],10):-1,l=h.indexOf("Firefox")>-1,u=l?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&r<17||l&&u<98?this.textureLoader=new pb(this.options.manager):this.textureLoader=new Sb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Au(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const s=this,r=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:s,userData:{}};return Ha(l,h,r),vs(h,r),Promise.all(s._invokeAll(function(d){return d.afterRoot&&d.afterRoot(h)})).then(function(){for(const d of h.scenes)d.updateMatrixWorld();t(h)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],s=this.json.meshes||[];for(let r=0,l=e.length;r<l;r++){const u=e[r].joints;for(let h=0,d=u.length;h<d;h++)t[u[h]].isBone=!0}for(let r=0,l=t.length;r<l;r++){const u=t[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(s[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,s){if(t.refs[e]<=1)return s;const r=s.clone(),l=(u,h)=>{const d=this.associations.get(u);d!=null&&this.associations.set(h,d);for(const[p,g]of u.children.entries())l(g,h.children[p])};return l(s,r),r.name+="_instance_"+t.uses[e]++,r}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let s=0;s<e.length;s++){const r=t(e[s]);if(r)return r}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const s=[];for(let r=0;r<e.length;r++){const l=t(e[r]);l&&s.push(l)}return s}getDependency(t,e){const s=t+":"+e;let r=this.cache.get(s);if(!r){switch(t){case"scene":r=this.loadScene(e);break;case"node":r=this._invokeOne(function(l){return l.loadNode&&l.loadNode(e)});break;case"mesh":r=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(e)});break;case"accessor":r=this.loadAccessor(e);break;case"bufferView":r=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(e)});break;case"buffer":r=this.loadBuffer(e);break;case"material":r=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(e)});break;case"texture":r=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(e)});break;case"skin":r=this.loadSkin(e);break;case"animation":r=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(e)});break;case"camera":r=this.loadCamera(e);break;default:if(r=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(t,e)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(s,r)}return r}getDependencies(t){let e=this.cache.get(t);if(!e){const s=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(r.map(function(l,u){return s.getDependency(t,u)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],s=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(l,u){s.load(ml.resolveURL(e.uri,r.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(s){const r=e.byteLength||0,l=e.byteOffset||0;return s.slice(l,l+r)})}loadAccessor(t){const e=this,s=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const u=yd[r.type],h=Yr[r.componentType],d=r.normalized===!0,p=new h(r.count*u);return Promise.resolve(new rn(p,u,d))}const l=[];return r.bufferView!==void 0?l.push(this.getDependency("bufferView",r.bufferView)):l.push(null),r.sparse!==void 0&&(l.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(l).then(function(u){const h=u[0],d=yd[r.type],p=Yr[r.componentType],g=p.BYTES_PER_ELEMENT,_=g*d,v=r.byteOffset||0,x=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let b,S;if(x&&x!==_){const y=Math.floor(v/x),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count;let L=e.cache.get(D);L||(b=new p(h,y*x,r.count*x/g),L=new XE(b,x/g),e.cache.add(D,L)),S=new wp(L,d,v%x/g,E)}else h===null?b=new p(r.count*d):b=new p(h,v,r.count*d),S=new rn(b,d,E);if(r.sparse!==void 0){const y=yd.SCALAR,D=Yr[r.sparse.indices.componentType],L=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,B=new D(u[1],L,r.sparse.count*y),H=new p(u[2],w,r.sparse.count*d);h!==null&&(S=new rn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let z=0,W=B.length;z<W;z++){const U=B[z];if(S.setX(U,H[z*d]),d>=2&&S.setY(U,H[z*d+1]),d>=3&&S.setZ(U,H[z*d+2]),d>=4&&S.setW(U,H[z*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=E}return S})}loadTexture(t){const e=this.json,s=this.options,l=e.textures[t].source,u=e.images[l];let h=this.textureLoader;if(u.uri){const d=s.manager.getHandler(u.uri);d!==null&&(h=d)}return this.loadTextureImage(t,l,h)}loadTextureImage(t,e,s){const r=this,l=this.json,u=l.textures[t],h=l.images[e],d=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const p=this.loadImageSource(e,s).then(function(g){g.flipY=!1,g.name=u.name||h.name||"",g.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(g.name=h.uri);const v=(l.samplers||{})[u.sampler]||{};return g.magFilter=j0[v.magFilter]||ui,g.minFilter=j0[v.minFilter]||ys,g.wrapS=q0[v.wrapS]||Zr,g.wrapT=q0[v.wrapT]||Zr,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==We&&g.minFilter!==ui,r.associations.set(g,{textures:t}),g}).catch(function(){return null});return this.textureCache[d]=p,p}loadImageSource(t,e){const s=this,r=this.json,l=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(_=>_.clone());const u=r.images[t],h=self.URL||self.webkitURL;let d=u.uri||"",p=!1;if(u.bufferView!==void 0)d=s.getDependency("bufferView",u.bufferView).then(function(_){p=!0;const v=new Blob([_],{type:u.mimeType});return d=h.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(v,x){let E=v;e.isImageBitmapLoader===!0&&(E=function(b){const S=new Rn(b);S.needsUpdate=!0,v(S)}),e.load(ml.resolveURL(_,l.path),E,void 0,x)})}).then(function(_){return p===!0&&h.revokeObjectURL(d),vs(_,u),_.userData.mimeType=u.mimeType||sC(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[t]=g,g}assignTexture(t,e,s,r){const l=this;return this.getDependency("texture",s.index).then(function(u){if(!u)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(u=u.clone(),u.channel=s.texCoord),l.extensions[ve.KHR_TEXTURE_TRANSFORM]){const h=s.extensions!==void 0?s.extensions[ve.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const d=l.associations.get(u);u=l.extensions[ve.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),l.associations.set(u,d)}}return r!==void 0&&(u.colorSpace=r),t[e]=u,u})}assignFinalMaterial(t){const e=t.geometry;let s=t.material;const r=e.attributes.tangent===void 0,l=e.attributes.color!==void 0,u=e.attributes.normal===void 0;if(t.isPoints){const h="PointsMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new by,Hi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,d.sizeAttenuation=!1,this.cache.add(h,d)),s=d}else if(t.isLine){const h="LineBasicMaterial:"+s.uuid;let d=this.cache.get(h);d||(d=new Ey,Hi.prototype.copy.call(d,s),d.color.copy(s.color),d.map=s.map,this.cache.add(h,d)),s=d}if(r||l||u){let h="ClonedMaterial:"+s.uuid+":";r&&(h+="derivative-tangents:"),l&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let d=this.cache.get(h);d||(d=s.clone(),l&&(d.vertexColors=!0),u&&(d.flatShading=!0),r&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(h,d),this.associations.set(d,this.associations.get(s))),s=d}t.material=s}getMaterialType(){return Np}loadMaterial(t){const e=this,s=this.json,r=this.extensions,l=s.materials[t];let u;const h={},d=l.extensions||{},p=[];if(d[ve.KHR_MATERIALS_UNLIT]){const _=r[ve.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),p.push(_.extendParams(h,l,e))}else{const _=l.pbrMetallicRoughness||{};if(h.color=new se(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Vn),h.opacity=v[3]}_.baseColorTexture!==void 0&&p.push(e.assignTexture(h,"map",_.baseColorTexture,fn)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(p.push(e.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),p.push(e.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(t)}),p.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(t,h)})))}l.doubleSided===!0&&(h.side=Si);const g=l.alphaMode||xd.OPAQUE;if(g===xd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,g===xd.MASK&&(h.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==Ss&&(p.push(e.assignTexture(h,"normalMap",l.normalTexture)),h.normalScale=new Kt(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;h.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&u!==Ss&&(p.push(e.assignTexture(h,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==Ss){const _=l.emissiveFactor;h.emissive=new se().setRGB(_[0],_[1],_[2],Vn)}return l.emissiveTexture!==void 0&&u!==Ss&&p.push(e.assignTexture(h,"emissiveMap",l.emissiveTexture,fn)),Promise.all(p).then(function(){const _=new u(h);return l.name&&(_.name=l.name),vs(_,l),e.associations.set(_,{materials:t}),l.extensions&&Ha(r,_,l),_})}createUniqueName(t){const e=Oe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,s=this.extensions,r=this.primitiveCache;function l(h){return s[ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,e).then(function(d){return K0(d,h,e)})}const u=[];for(let h=0,d=t.length;h<d;h++){const p=t[h],g=iC(p),_=r[g];if(_)u.push(_.promise);else{let v;p.extensions&&p.extensions[ve.KHR_DRACO_MESH_COMPRESSION]?v=l(p):v=K0(new hi,p,e),r[g]={primitive:p,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(t){const e=this,s=this.json,r=this.extensions,l=s.meshes[t],u=l.primitives,h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d].material===void 0?tC(this.cache):this.getDependency("material",u[d].material);h.push(g)}return h.push(e.loadGeometries(u)),Promise.all(h).then(function(d){const p=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let x=0,E=g.length;x<E;x++){const b=g[x],S=u[x];let y;const D=p[x];if(S.mode===xi.TRIANGLES||S.mode===xi.TRIANGLE_STRIP||S.mode===xi.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new YE(b,D):new On(b,D),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===xi.TRIANGLE_STRIP?y.geometry=W0(y.geometry,uy):S.mode===xi.TRIANGLE_FAN&&(y.geometry=W0(y.geometry,op));else if(S.mode===xi.LINES)y=new JE(b,D);else if(S.mode===xi.LINE_STRIP)y=new Lp(b,D);else if(S.mode===xi.LINE_LOOP)y=new $E(b,D);else if(S.mode===xi.POINTS)y=new Up(b,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&nC(y,l),y.name=e.createUniqueName(l.name||"mesh_"+t),vs(y,l),S.extensions&&Ha(r,y,S),e.assignFinalMaterial(y),_.push(y)}for(let x=0,E=_.length;x<E;x++)e.associations.set(_[x],{meshes:t,primitives:x});if(_.length===1)return l.extensions&&Ha(r,_[0],l),_[0];const v=new Xa;l.extensions&&Ha(r,v,l),e.associations.set(v,{meshes:t});for(let x=0,E=_.length;x<E;x++)v.add(_[x]);return v})}loadCamera(t){let e;const s=this.json.cameras[t],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?e=new Jn(dy.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(e=new Ya(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(e.name=this.createUniqueName(s.name)),vs(e,s),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],s=[];for(let r=0,l=e.joints.length;r<l;r++)s.push(this._loadNodeShallow(e.joints[r]));return e.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",e.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){const l=r.pop(),u=r,h=[],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p];if(_){h.push(_);const v=new ae;l!==null&&v.fromArray(l.array,p*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[p])}return new Cp(h,d)})}loadAnimation(t){const e=this.json,s=this,r=e.animations[t],l=r.name?r.name:"animation_"+t,u=[],h=[],d=[],p=[],g=[];for(let _=0,v=r.channels.length;_<v;_++){const x=r.channels[_],E=r.samplers[x.sampler],b=x.target,S=b.node,y=r.parameters!==void 0?r.parameters[E.input]:E.input,D=r.parameters!==void 0?r.parameters[E.output]:E.output;b.node!==void 0&&(u.push(this.getDependency("node",S)),h.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",D)),p.push(E),g.push(b))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p),Promise.all(g)]).then(function(_){const v=_[0],x=_[1],E=_[2],b=_[3],S=_[4],y=[];for(let D=0,L=v.length;D<L;D++){const w=v[D],B=x[D],H=E[D],z=b[D],W=S[D];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const U=s._createAnimationTracks(w,B,H,z,W);if(U)for(let C=0;C<U.length;C++)y.push(U[C])}return new lb(l,void 0,y)})}createNodeMesh(t){const e=this.json,s=this,r=e.nodes[t];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(l){const u=s._getNodeRef(s.meshCache,r.mesh,l);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let d=0,p=r.weights.length;d<p;d++)h.morphTargetInfluences[d]=r.weights[d]}),u})}loadNode(t){const e=this.json,s=this,r=e.nodes[t],l=s._loadNodeShallow(t),u=[],h=r.children||[];for(let p=0,g=h.length;p<g;p++)u.push(s.getDependency("node",h[p]));const d=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([l,Promise.all(u),d]).then(function(p){const g=p[0],_=p[1],v=p[2];v!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(v,aC)});for(let x=0,E=_.length;x<E;x++)g.add(_[x]);return g})}_loadNodeShallow(t){const e=this.json,s=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const l=e.nodes[t],u=l.name?r.createUniqueName(l.name):"",h=[],d=r._invokeOne(function(p){return p.createNodeMesh&&p.createNodeMesh(t)});return d&&h.push(d),l.camera!==void 0&&h.push(r.getDependency("camera",l.camera).then(function(p){return r._getNodeRef(r.cameraCache,l.camera,p)})),r._invokeAll(function(p){return p.createNodeAttachment&&p.createNodeAttachment(t)}).forEach(function(p){h.push(p)}),this.nodeCache[t]=Promise.all(h).then(function(p){let g;if(l.isBone===!0?g=new My:p.length>1?g=new Xa:p.length===1?g=p[0]:g=new $e,g!==p[0])for(let _=0,v=p.length;_<v;_++)g.add(p[_]);if(l.name&&(g.userData.name=l.name,g.name=u),vs(g,l),l.extensions&&Ha(s,g,l),l.matrix!==void 0){const _=new ae;_.fromArray(l.matrix),g.applyMatrix4(_)}else l.translation!==void 0&&g.position.fromArray(l.translation),l.rotation!==void 0&&g.quaternion.fromArray(l.rotation),l.scale!==void 0&&g.scale.fromArray(l.scale);return r.associations.has(g)||r.associations.set(g,{}),r.associations.get(g).nodes=t,g}),this.nodeCache[t]}loadScene(t){const e=this.extensions,s=this.json.scenes[t],r=this,l=new Xa;s.name&&(l.name=r.createUniqueName(s.name)),vs(l,s),s.extensions&&Ha(e,l,s);const u=s.nodes||[],h=[];for(let d=0,p=u.length;d<p;d++)h.push(r.getDependency("node",u[d]));return Promise.all(h).then(function(d){for(let g=0,_=d.length;g<_;g++)l.add(d[g]);const p=g=>{const _=new Map;for(const[v,x]of r.associations)(v instanceof Hi||v instanceof Rn)&&_.set(v,x);return g.traverse(v=>{const x=r.associations.get(v);x!=null&&_.set(v,x)}),_};return r.associations=p(l),l})}_createAnimationTracks(t,e,s,r,l){const u=[],h=t.name?t.name:t.uuid,d=[];ra[l.path]===ra.weights?t.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(h);let p;switch(ra[l.path]){case ra.weights:p=to;break;case ra.rotation:p=eo;break;case ra.translation:case ra.scale:p=no;break;default:switch(s.itemSize){case 1:p=to;break;case 2:case 3:default:p=no;break}break}const g=r.interpolation!==void 0?$w[r.interpolation]:Sl,_=this._getArrayFromAccessor(s);for(let v=0,x=d.length;v<x;v++){const E=new p(d[v]+"."+ra[l.path],e.array,_,g);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),u.push(E)}return u}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const s=pp(e.constructor),r=new Float32Array(e.length);for(let l=0,u=e.length;l<u;l++)r[l]=e[l]*s;e=r}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(s){const r=this instanceof eo?Jw:Fy;return new r(this.times,this.values,this.getValueSize()/3,s)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oC(o,t,e){const s=t.attributes,r=new Rs;if(s.POSITION!==void 0){const h=e.json.accessors[s.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(r.set(new X(d[0],d[1],d[2]),new X(p[0],p[1],p[2])),h.normalized){const g=pp(Yr[h.componentType]);r.min.multiplyScalar(g),r.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=t.targets;if(l!==void 0){const h=new X,d=new X;for(let p=0,g=l.length;p<g;p++){const _=l[p];if(_.POSITION!==void 0){const v=e.json.accessors[_.POSITION],x=v.min,E=v.max;if(x!==void 0&&E!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(E[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(E[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(E[2]))),v.normalized){const b=pp(Yr[v.componentType]);d.multiplyScalar(b)}h.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Xi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function K0(o,t,e){const s=t.attributes,r=[];function l(u,h){return e.getDependency("accessor",u).then(function(d){o.setAttribute(h,d)})}for(const u in s){const h=dp[u]||u.toLowerCase();h in o.attributes||r.push(l(s[u],h))}if(t.indices!==void 0&&!o.index){const u=e.getDependency("accessor",t.indices).then(function(h){o.setIndex(h)});r.push(u)}return Ee.workingColorSpace!==Vn&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ee.workingColorSpace}" not supported.`),vs(o,t),oC(o,t,e),Promise.all(r).then(function(){return t.targets!==void 0?eC(o,t.targets,e):o})}const Md=new WeakMap;class Hy extends qa{constructor(t){super(t),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(t){return this.decoderPath=t,this}setDecoderConfig(t){return this.decoderConfig=t,this}setWorkerLimit(t){return this.workerLimit=t,this}load(t,e,s,r){const l=new Au(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,u=>{this.parse(u,e,r)},s,r)}parse(t,e,s=()=>{}){this.decodeDracoFile(t,e,null,null,fn,s).catch(s)}decodeDracoFile(t,e,s,r,l=Vn,u=()=>{}){const h={attributeIDs:s||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!s,vertexColorSpace:l};return this.decodeGeometry(t,h).then(e).catch(u)}decodeGeometry(t,e){const s=JSON.stringify(e);if(Md.has(t)){const d=Md.get(t);if(d.key===s)return d.promise;if(t.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const l=this.workerNextTaskID++,u=t.byteLength,h=this._getWorker(l,u).then(d=>(r=d,new Promise((p,g)=>{r._callbacks[l]={resolve:p,reject:g},r.postMessage({type:"decode",id:l,taskConfig:e,buffer:t},[t])}))).then(d=>this._createGeometry(d.geometry));return h.catch(()=>!0).then(()=>{r&&l&&this._releaseTask(r,l)}),Md.set(t,{key:s,promise:h}),h}_createGeometry(t){const e=new hi;t.index&&e.setIndex(new rn(t.index.array,1));for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s],l=r.name,u=r.array,h=r.itemSize,d=new rn(u,h);l==="color"&&(this._assignVertexColorSpace(d,r.vertexColorSpace),d.normalized=!(u instanceof Float32Array)),e.setAttribute(l,d)}return e}_assignVertexColorSpace(t,e){if(e!==fn)return;const s=new se;for(let r=0,l=t.count;r<l;r++)s.fromBufferAttribute(t,r),Ee.toWorkingColorSpace(s,fn),t.setXYZ(r,s.r,s.g,s.b)}_loadLibrary(t,e){const s=new Au(this.manager);return s.setPath(this.decoderPath),s.setResponseType(e),s.setWithCredentials(this.withCredentials),new Promise((r,l)=>{s.load(t,r,void 0,l)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const t=typeof WebAssembly!="object"||this.decoderConfig.type==="js",e=[];return t?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(s=>{const r=s[0];t||(this.decoderConfig.wasmBinary=s[1]);const l=lC.toString(),u=["/* draco decoder */",r,"","/* worker */",l.substring(l.indexOf("{")+1,l.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([u]))}),this.decoderPending}_getWorker(t,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(l){const u=l.data;switch(u.type){case"decode":r._callbacks[u.id].resolve(u);break;case"error":r._callbacks[u.id].reject(u);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+u.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,l){return r._taskLoad>l._taskLoad?-1:1});const s=this.workerPool[this.workerPool.length-1];return s._taskCosts[t]=e,s._taskLoad+=e,s})}_releaseTask(t,e){t._taskLoad-=t._taskCosts[e],delete t._callbacks[e],delete t._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(t=>t._taskLoad))}dispose(){for(let t=0;t<this.workerPool.length;++t)this.workerPool[t].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function lC(){let o,t;onmessage=function(u){const h=u.data;switch(h.type){case"init":o=h.decoderConfig,t=new Promise(function(g){o.onModuleLoaded=function(_){g({draco:_})},DracoDecoderModule(o)});break;case"decode":const d=h.buffer,p=h.taskConfig;t.then(g=>{const _=g.draco,v=new _.Decoder;try{const x=e(_,v,new Int8Array(d),p),E=x.attributes.map(b=>b.array.buffer);x.index&&E.push(x.index.array.buffer),self.postMessage({type:"decode",id:h.id,geometry:x},E)}catch(x){console.error(x),self.postMessage({type:"error",id:h.id,error:x.message})}finally{_.destroy(v)}});break}};function e(u,h,d,p){const g=p.attributeIDs,_=p.attributeTypes;let v,x;const E=h.GetEncodedGeometryType(d);if(E===u.TRIANGULAR_MESH)v=new u.Mesh,x=h.DecodeArrayToMesh(d,d.byteLength,v);else if(E===u.POINT_CLOUD)v=new u.PointCloud,x=h.DecodeArrayToPointCloud(d,d.byteLength,v);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!x.ok()||v.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+x.error_msg());const b={index:null,attributes:[]};for(const S in g){const y=self[_[S]];let D,L;if(p.useUniqueIDs)L=g[S],D=h.GetAttributeByUniqueId(v,L);else{if(L=h.GetAttributeId(v,u[g[S]]),L===-1)continue;D=h.GetAttribute(v,L)}const w=r(u,h,v,S,y,D);S==="color"&&(w.vertexColorSpace=p.vertexColorSpace),b.attributes.push(w)}return E===u.TRIANGULAR_MESH&&(b.index=s(u,h,v)),u.destroy(v),b}function s(u,h,d){const g=d.num_faces()*3,_=g*4,v=u._malloc(_);h.GetTrianglesUInt32Array(d,_,v);const x=new Uint32Array(u.HEAPF32.buffer,v,g).slice();return u._free(v),{array:x,itemSize:1}}function r(u,h,d,p,g,_){const v=_.num_components(),E=d.num_points()*v,b=E*g.BYTES_PER_ELEMENT,S=l(u,g),y=u._malloc(b);h.GetAttributeDataArrayForAllPoints(d,_,S,b,y);const D=new g(u.HEAPF32.buffer,y,E).slice();return u._free(y),{name:p,array:D,itemSize:v}}function l(u,h){switch(h){case Float32Array:return u.DT_FLOAT32;case Int8Array:return u.DT_INT8;case Int16Array:return u.DT_INT16;case Int32Array:return u.DT_INT32;case Uint8Array:return u.DT_UINT8;case Uint16Array:return u.DT_UINT16;case Uint32Array:return u.DT_UINT32}}}var Vy=`uniform float time;\r
uniform float progress;\r
uniform sampler2D texture1;\r
uniform vec4 resolution;\r
varying vec2 vUv;\r
varying vec4 vColor;\r
float PI = 3.141592653589793238;\r
void main() {\r
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r
    gl_FragColor = vColor;\r
}`,cC=`uniform float time;\r
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
}`,Gy=`uniform float time;\r
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
}`,ky=`uniform float time;\r
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
 */class Vi{constructor(t,e,s,r,l="div"){this.parent=t,this.object=e,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Vi.nextNameID=Vi.nextNameID||0,this.$name.id=`lil-gui-name-${++Vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",u=>u.stopPropagation()),this.domElement.addEventListener("keyup",u=>u.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class uC extends Vi{constructor(t,e,s){super(t,e,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function mp(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const hC={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:mp,toHexString:mp},El={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},fC={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,t,e=1){const s=El.fromHexString(o);t[0]=(s>>16&255)/255*e,t[1]=(s>>8&255)/255*e,t[2]=(s&255)/255*e},toHexString([o,t,e],s=1){s=255/s;const r=o*s<<16^t*s<<8^e*s<<0;return El.toHexString(r)}},dC={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const s=El.fromHexString(o);t.r=(s>>16&255)/255*e,t.g=(s>>8&255)/255*e,t.b=(s&255)/255*e},toHexString({r:o,g:t,b:e},s=1){s=255/s;const r=o*s<<16^t*s<<8^e*s<<0;return El.toHexString(r)}},pC=[hC,El,fC,dC];function mC(o){return pC.find(t=>t.match(o))}class gC extends Vi{constructor(t,e,s,r){super(t,e,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=mC(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const l=mp(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ed extends Vi{constructor(t,e,s){super(t,e,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class _C extends Vi{constructor(t,e,s,r,l,u){super(t,e,s,"number"),this._initInput(),this.min(r),this.max(l);const h=u!==void 0;this.step(h?u:this._getImplicitStep(),h),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},s=D=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+D),this.$input.value=this.getValue())},r=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D)*-1))},l=D=>{this._inputFocused&&(D.preventDefault(),s(this._step*this._normalizeMouseWheel(D)))};let u=!1,h,d,p,g,_;const v=5,x=D=>{h=D.clientX,d=p=D.clientY,u=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",b)},E=D=>{if(u){const L=D.clientX-h,w=D.clientY-d;Math.abs(w)>v?(D.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>v&&b()}if(!u){const L=D.clientY-p;_-=L*this._step*this._arrowKeyMultiplier(D),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}p=D.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",b)},S=()=>{this._inputFocused=!0},y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",x),this.$input.addEventListener("focus",S),this.$input.addEventListener("blur",y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(y,D,L,w,B)=>(y-D)/(L-D)*(B-w)+w,e=y=>{const D=this.$slider.getBoundingClientRect();let L=t(y,D.left,D.right,this._min,this._max);this._snapClampSetValue(L)},s=y=>{this._setDraggingStyle(!0),e(y.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",l)},r=y=>{e(y.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",l)};let u=!1,h,d;const p=y=>{y.preventDefault(),this._setDraggingStyle(!0),e(y.touches[0].clientX),u=!1},g=y=>{y.touches.length>1||(this._hasScrollBar?(h=y.touches[0].clientX,d=y.touches[0].clientY,u=!0):p(y),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",v))},_=y=>{if(u){const D=y.touches[0].clientX-h,L=y.touches[0].clientY-d;Math.abs(D)>Math.abs(L)?p(y):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v))}else y.preventDefault(),e(y.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v)},x=this._callOnFinishChange.bind(this),E=400;let b;const S=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const L=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(x,E)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",S,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),e+-s}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class vC extends Vi{constructor(t,e,s,r){super(t,e,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const s=document.createElement("option");s.textContent=e,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class yC extends Vi{constructor(t,e,s){super(t,e,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var xC=`.lil-gui {
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
}`;function SC(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Z0=!1;class Cu{constructor({parent:t,autoPlace:e=t===void 0,container:s,width:r,title:l="Controls",closeFolders:u=!1,injectStyles:h=!0,touchStyles:d=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Z0&&h&&(SC(xC),Z0=!0),s?s.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=u}add(t,e,s,r,l){if(Object(s)===s)return new vC(this,t,e,s);const u=t[e];switch(typeof u){case"number":return new _C(this,t,e,s,r,l);case"boolean":return new uC(this,t,e);case"string":return new yC(this,t,e);case"function":return new Ed(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,u)}addColor(t,e,s=1){return new gC(this,t,e,s)}addFolder(t){const e=new Cu({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof Ed||s._name in t.controllers&&s.load(t.controllers[s._name])}),e&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof Ed)){if(s._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);e.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);e.folders[s._title]=s.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const s=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class Du{constructor(t){if(this.scene=new Eu,this.container=t.dom,!this.container){console.error("Sketch: el contenedor DOM es null o no existe.");return}this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new Oy({alpha:!0,antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,0),this.raycaster=new wy,this.pointer=new Kt,this.container.appendChild(this.renderer.domElement);let e=this.width/this.height,s=5;this.camera=new Ya(-5*e/2,s*e/2,s/2,-5/2,.1,100),this.camera.position.set(0,0,4),this.camera.lookAt(0,0,0),this.controls=new Iy(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.enablePan=!1,this.controls.enableZoom=!1,this.time=0;const r=`https://unpkg.com/three@0.${bl}.x`;this.dracoLoader=new Hy(new Op).setDecoderPath(`${r}/examples/jsm/libs/draco/gltf/`),this.gltfLoader=new zy,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.isPlaying=!0,this.setupEvents(),this.setupFBO(),this.addObjects(),this.resize(),this.render(),this.setupResize()}setupEvents(){this.dummy=new On(new pa(100,100),new Ss),document.addEventListener("pointermove",t=>{this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObject(this.dummy);if(e.length>0){let[s,r]=e[0].point;this.fboMaterial.uniforms.uMouse.value=new Kt(s,r)}})}setUpSettings(){this.settings={progress:0},this.gui=new Cu,this.gui.add(this.settings,"progress",0,1,.01).onChange(t=>{})}setupResize(){window.addEventListener("resize",this.resize.bind(this))}getRenderTarget(){return new As(this.width,this.height,{minFilter:We,magFilter:We,format:An,type:Nn})}setupFBO(){this.size=256,this.fbo=this.getRenderTarget(),this.fbo1=this.getRenderTarget(),this.fboScene=new Eu,this.fboCamera=new Ya(-1,1,1,-1,-1,1),this.fboCamera.position.set(0,0,.5),this.fboCamera.lookAt(0,0,0);let t=new pa(2,2);this.data=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4,l=Math.random()*Math.PI*2,u=.5+.5*Math.random();this.data[r+0]=u*Math.cos(l),this.data[r+1]=u*Math.sin(l),this.data[r+2]=1,this.data[r+3]=1}this.fboTexture=new $r(this.data,this.size,this.size,An,Nn),this.fboTexture.magFilter=We,this.fboTexture.minFilter=We,this.fboTexture.needsUpdate=!0,this.fboMaterial=new Mi({uniforms:{uPositions:{value:this.fboTexture},uInfo:{value:null},uMouse:{value:new Kt(0,0)},time:{value:0}},vertexShader:ky,fragmentShader:Gy}),this.infoarray=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4;this.infoarray[r+0]=.5+Math.random(),this.infoarray[r+1]=.5+Math.random(),this.infoarray[r+2]=1,this.infoarray[r+3]=1}this.info=new $r(this.infoarray,this.size,this.size,An,Nn),this.info.magFilter=We,this.info.minFilter=We,this.info.needsUpdate=!0,this.fboMaterial.uniforms.uInfo.value=this.info,this.fboMesh=new On(t,this.fboMaterial),this.fboScene.add(this.fboMesh),this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(this.fbo1),this.renderer.render(this.fboScene,this.fboCamera)}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height);let t=this.width/this.height,e=5;this.camera.left=-5*t/2,this.camera.right=e*t/2,this.camera.top=e/2,this.camera.bottom=-5/2,this.camera.updateProjectionMatrix()}addObjects(){this.material=new Mi({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Si,uniforms:{time:{value:0},uPositions:{value:null},resolution:{value:new Ae}},transparent:!0,vertexShader:cC,fragmentShader:Vy}),this.count=this.size**2;let t=new hi,e=new Float32Array(this.count*3),s=new Float32Array(this.count*2);for(let r=0;r<this.size;r++)for(let l=0;l<this.size;l++){let u=r+l*this.size;e[u*3+0]=Math.random(),e[u*3+1]=Math.random(),e[u*3+2]=0,s[u*2+0]=r/this.size,s[u*2+1]=l/this.size}t.setAttribute("position",new rn(e,3)),t.setAttribute("uv",new rn(s,2)),this.material.uniforms.uPositions.value=this.fboTexture,this.points=new Up(t,this.material),this.scene.add(this.points)}render(){if(!this.isPlaying)return;this.time+=.05,this.material.uniforms.time.value=this.time,this.fboMaterial.uniforms.time.value=this.time,requestAnimationFrame(this.render.bind(this)),this.fboMaterial.uniforms.uPositions.value=this.fbo1.texture,this.material.uniforms.uPositions.value=this.fbo.texture,this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera);let t=this.fbo;this.fbo=this.fbo1,this.fbo1=t}}new Du({dom:document.getElementById("container")});const MC=()=>{const o=ha.useRef(null);return ha.useEffect(()=>{o.current&&(console.log("Iniciando Sketch..."),new Du({dom:o.current}))},[]),Tt.jsxs("section",{id:"hero",className:"relative overflow-hidden",children:[Tt.jsx("div",{className:"absolute top-0 left-0 z-10",children:Tt.jsx("div",{ref:o,className:"background-animation",style:{}})}),Tt.jsx("div",{className:"hero-layout pt-70 min-h-[100vh]",children:Tt.jsx("header",{className:"flex flex-col justify-start md:w-full w-screen md:px-20 px-5",children:Tt.jsx("div",{className:"flex flex-col gap-7",children:Tt.jsxs("div",{className:"hero-text mt-16",children:[Tt.jsxs("h1",{children:["Integrando",Tt.jsx("span",{className:"slide",children:Tt.jsx("span",{className:"wrapper",children:_p.map(t=>Tt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[Tt.jsx("img",{src:t.imgPath,alt:t.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),Tt.jsx("span",{children:t.text})]},t.text))})})]}),Tt.jsx("h1",{children:"en cada línea de código"}),Tt.jsx("h1",{children:"y cada experiencia creada."})]})})})})]})},EC=()=>{const o=ha.useRef(null);return ha.useEffect(()=>{o.current&&(console.log("Iniciando Sketch..."),new Du({dom:o.current}))},[]),Tt.jsxs("section",{id:"hero",className:"relative overflow-hidden",children:[Tt.jsx("div",{className:"absolute top-0 left-0 z-10",children:Tt.jsx("div",{ref:o,className:"background-animation",style:{}})}),Tt.jsx("div",{className:"hero-layout",children:Tt.jsx("header",{className:"flex flex-col justify-center md:w-full w-screen md:px-20 px-5",children:Tt.jsx("div",{className:"flex flex-col gap-7",children:Tt.jsxs("div",{className:"hero-text",children:[Tt.jsxs("h1",{children:["Shaping",Tt.jsx("span",{className:"slide",children:Tt.jsx("span",{className:"wrapper",children:_p.map(t=>Tt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[Tt.jsx("img",{src:t.imgPath,alt:t.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),Tt.jsx("span",{children:t.text})]},t.text))})})]}),Tt.jsx("h1",{children:"into Real Projects"}),Tt.jsx("h1",{children:"that Deliver Results"})]})})})})]})},bC="/Portfolio_DiegoGonzalez/images/Perfil_DiegoIA.webp",TC=()=>Tt.jsxs("div",{className:"flex items-center justify-center gap-8 h-screen px-6",children:[Tt.jsx("img",{src:bC,className:"w-[45%] max-w-[450px] object-cover"}),Tt.jsxs("div",{className:"text-center md:text-left w-full md:w-1/2 max-w-xl",children:[Tt.jsx("h2",{className:"text-4xl font-bold mb-4 text-white",children:"Hola, soy Diego González"}),Tt.jsx("p",{className:"text-xl text-white leading-relaxed",children:"Soy un apasionado del desarrollo web con experiencia en React, Three.js y diseño interactivo. Me gusta crear experiencias digitales envolventes que mezclan arte y tecnología."})]})]});var AC=`uniform float time;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r
varying vec4 vColor;\r
varying vec4 vColor1;\r
uniform sampler2D uPositions;\r
float PI = 3.141592653589793238;\r
void main() {\r
    vUv = uv;\r
    vec4 pos = texture2D(uPositions, vUv);

    float angle = atan(pos.y, pos.x);

    
    vColor = vec4(-(angle))+ vec4(0.5 + 0.45*sin(angle+time*0.4));\r

    vec4 mvPosition = modelViewMatrix * vec4(pos.xyz, 1.);\r
    gl_PointSize = 1. * (1. / - mvPosition.z);\r
    gl_Position = projectionMatrix * mvPosition;\r
}`;class Xy{constructor(t){if(this.scene=new Eu,this.container=t.dom,!this.container){console.error("Sketch: el contenedor DOM es null o no existe.");return}this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new Oy({alpha:!0,antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,0),this.raycaster=new wy,this.pointer=new Kt,this.container.appendChild(this.renderer.domElement);let e=this.width/this.height,s=3;this.camera=new Ya(-3*e/2,s*e/2,s/2,-3/2,.1,100),this.camera.position.set(0,0,4),this.camera.lookAt(0,0,0),this.controls=new Iy(this.camera,this.renderer.domElement),this.controls.enableRotate=!1,this.controls.enablePan=!1,this.controls.enableZoom=!1,this.time=0;const r=`https://unpkg.com/three@0.${bl}.x`;this.dracoLoader=new Hy(new Op).setDecoderPath(`${r}/examples/jsm/libs/draco/gltf/`),this.gltfLoader=new zy,this.gltfLoader.setDRACOLoader(this.dracoLoader),this.isPlaying=!0,this.setupEvents(),this.setupFBO(),this.addObjects(),this.resize(),this.render(),this.setupResize()}setupEvents(){this.dummy=new On(new pa(100,100),new Ss),document.addEventListener("pointermove",t=>{this.pointer.x=t.clientX/window.innerWidth*2-1,this.pointer.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObject(this.dummy);if(e.length>0){let[s,r]=e[0].point;this.fboMaterial.uniforms.uMouse.value=new Kt(s,r)}})}setUpSettings(){this.settings={progress:0},this.gui=new Cu,this.gui.add(this.settings,"progress",0,1,.01).onChange(t=>{})}setupResize(){window.addEventListener("resize",this.resize.bind(this))}getRenderTarget(){return new As(this.width,this.height,{minFilter:We,magFilter:We,format:An,type:Nn})}setupFBO(){this.size=384,this.fbo=this.getRenderTarget(),this.fbo1=this.getRenderTarget(),this.fboScene=new Eu,this.fboCamera=new Ya(-1,1,1,-1,-1,1),this.fboCamera.position.set(0,0,.5),this.fboCamera.lookAt(0,0,0);let t=new pa(2,2);this.data=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4,l=Math.random()*Math.PI*2,u=.5+.5*Math.random();this.data[r+0]=u*Math.cos(l),this.data[r+1]=u*Math.sin(l),this.data[r+2]=1,this.data[r+3]=1}this.fboTexture=new $r(this.data,this.size,this.size,An,Nn),this.fboTexture.magFilter=We,this.fboTexture.minFilter=We,this.fboTexture.needsUpdate=!0,this.fboMaterial=new Mi({uniforms:{uPositions:{value:this.fboTexture},uInfo:{value:null},uMouse:{value:new Kt(0,0)},time:{value:0}},vertexShader:ky,fragmentShader:Gy}),this.infoarray=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=(e+s*this.size)*4;this.infoarray[r+0]=.5+Math.random(),this.infoarray[r+1]=.5+Math.random(),this.infoarray[r+2]=1,this.infoarray[r+3]=1}this.info=new $r(this.infoarray,this.size,this.size,An,Nn),this.info.magFilter=We,this.info.minFilter=We,this.info.needsUpdate=!0,this.fboMaterial.uniforms.uInfo.value=this.info,this.fboMesh=new On(t,this.fboMaterial),this.fboScene.add(this.fboMesh),this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(this.fbo1),this.renderer.render(this.fboScene,this.fboCamera)}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height);let t=this.width/this.height,e=3;this.camera.left=-3*t/2,this.camera.right=e*t/2,this.camera.top=e/2,this.camera.bottom=-3/2,this.camera.updateProjectionMatrix()}addObjects(){this.material=new Mi({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Si,uniforms:{time:{value:0},uPositions:{value:null},resolution:{value:new Ae}},transparent:!0,vertexShader:AC,fragmentShader:Vy}),this.count=this.size**2;let t=new hi,e=new Float32Array(this.count*3),s=new Float32Array(this.count*2);for(let r=0;r<this.size;r++)for(let l=0;l<this.size;l++){let u=r+l*this.size;e[u*3+0]=Math.random(),e[u*3+1]=Math.random(),e[u*3+2]=0,s[u*2+0]=r/this.size,s[u*2+1]=l/this.size}t.setAttribute("position",new rn(e,3)),t.setAttribute("uv",new rn(s,2)),this.material.uniforms.uPositions.value=this.fboTexture,this.points=new Up(t,this.material),this.scene.add(this.points)}render(){if(!this.isPlaying)return;this.time+=.05,this.material.uniforms.time.value=this.time,this.fboMaterial.uniforms.time.value=this.time,requestAnimationFrame(this.render.bind(this)),this.fboMaterial.uniforms.uPositions.value=this.fbo1.texture,this.material.uniforms.uPositions.value=this.fbo.texture,this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera);let t=this.fbo;this.fbo=this.fbo1,this.fbo1=t}}new Xy({dom:document.getElementById("container")});const RC=()=>{const o=ha.useRef(null),t=ha.useRef(null);return ha.useEffect(()=>{o.current&&(console.log("Iniciando Sketch..."),new Xy({dom:o.current})),t.current&&(console.log("Iniciando Sketch..."),new Du({dom:t.current}))},[]),Tt.jsxs("section",{id:"hero",className:"relative overflow-hidden ",children:[Tt.jsxs("div",{className:"absolute top-0 left-0 z-10",children:[Tt.jsx("div",{ref:o,className:"background-animation",style:{transform:"rotateX(70deg) rotatey(45deg)"}}),Tt.jsx("div",{ref:t,className:"background-animation",style:{}})]}),Tt.jsx("div",{className:"hero-layout",children:Tt.jsx("header",{className:"flex flex-col justify-center md:w-full w-screen md:px-20 px-5",children:Tt.jsx("div",{className:"flex flex-col gap-7",children:Tt.jsxs("div",{className:"hero-text",children:[Tt.jsxs("h1",{children:["Shaping",Tt.jsx("span",{className:"slide",children:Tt.jsx("span",{className:"wrapper",children:_p.map(e=>Tt.jsxs("span",{className:"flex items-center md:gap-3 gap-1 pb2",children:[Tt.jsx("img",{src:e.imgPath,alt:e.text,className:"xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"}),Tt.jsx("span",{children:e.text})]},e.text))})})]}),Tt.jsx("h1",{children:"into Real Projects"}),Tt.jsx("h1",{children:"that Deliver Results"})]})})})})]})};function wC(){const[o,t]=ha.useState(0);return Tt.jsxs(Tt.Fragment,{children:[Tt.jsx(uM,{}),Tt.jsx("section",{id:"#hero",children:Tt.jsx(MC,{})}),Tt.jsx("section",{id:"myself",children:Tt.jsx(TC,{})}),Tt.jsx("section",{id:"#contact_2",children:Tt.jsx(EC,{})}),Tt.jsx("section",{id:"contact",children:Tt.jsx(RC,{})}),Tt.jsxs("div",{children:[Tt.jsx("a",{href:"https://vite.dev",target:"_blank",children:Tt.jsx("img",{src:sM,className:"logo",alt:"Vite logo"})}),Tt.jsx("a",{href:"https://react.dev",target:"_blank",children:Tt.jsx("img",{src:iM,className:"logo react",alt:"React logo"})})]}),Tt.jsx("h1",{className:"text-3xl underline",children:"Vite + React"}),Tt.jsxs("div",{className:"card",children:[Tt.jsxs("button",{onClick:()=>t(o+1),children:["count is ",o]}),Tt.jsxs("p",{children:["Edit ",Tt.jsx("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),Tt.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}nM.createRoot(document.getElementById("root")).render(Tt.jsx(wC,{}));
