/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}var N;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(N||(N={}));const st="popstate";function zr(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:d,hash:u}=n.location;return Ee("",{pathname:s,search:d,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Se(a)}return Vt(t,r,null,e)}function F(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qt(){return Math.random().toString(36).substr(2,8)}function ct(e,t){return{usr:e.state,key:e.key,idx:t}}function Ee(e,t,r,n){return r===void 0&&(r=null),T({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ie(t):t,{state:r,key:t&&t.key||n||qt()})}function Se(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ie(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Vt(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,d=a.history,u=N.Pop,f=null,h=m();h==null&&(h=0,d.replaceState(T({},d.state,{idx:h}),""));function m(){return(d.state||{idx:null}).idx}function x(){u=N.Pop;let v=m(),P=v==null?null:v-h;h=v,f&&f({action:u,location:M.location,delta:P})}function D(v,P){u=N.Push;let O=Ee(M.location,v,P);r&&r(O,v),h=m()+1;let W=ct(O,h),l=M.createHref(O);try{d.pushState(W,"",l)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(l)}s&&f&&f({action:u,location:M.location,delta:1})}function C(v,P){u=N.Replace;let O=Ee(M.location,v,P);r&&r(O,v),h=m();let W=ct(O,h),l=M.createHref(O);d.replaceState(W,"",l),s&&f&&f({action:u,location:M.location,delta:0})}function E(v){let P=a.location.origin!=="null"?a.location.origin:a.location.href,O=typeof v=="string"?v:Se(v);return F(P,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,P)}let M={get action(){return u},get location(){return e(a,d)},listen(v){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(st,x),f=v,()=>{a.removeEventListener(st,x),f=null}},createHref(v){return t(a,v)},createURL:E,encodeLocation(v){let P=E(v);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:D,replace:C,go(v){return d.go(v)}};return M}var I;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(I||(I={}));const Yt=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gt(e){return e.index===!0}function qe(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((a,s)=>{let d=[...r,s],u=typeof a.id=="string"?a.id:d.join("-");if(F(a.index!==!0||!a.children,"Cannot specify children on an index route"),F(!n[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),Gt(a)){let f=T({},a,t(a),{id:u});return n[u]=f,f}else{let f=T({},a,t(a),{id:u,children:void 0});return n[u]=f,a.children&&(f.children=qe(a.children,t,d,n)),f}})}function De(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?ie(t):t,a=je(n.pathname||"/",r);if(a==null)return null;let s=Mt(e);Jt(s);let d=null;for(let u=0;d==null&&u<s.length;++u)d=or(s[u],dr(a));return d}function Mt(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(s,d,u)=>{let f={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:d,route:s};f.relativePath.startsWith("/")&&(F(f.relativePath.startsWith(n),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(n.length));let h=Me([n,f.relativePath]),m=r.concat(f);s.children&&s.children.length>0&&(F(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Mt(s.children,t,m,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:nr(h,s.index),routesMeta:m})};return e.forEach((s,d)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))a(s,d);else for(let f of xt(s.path))a(s,d,f)}),t}function xt(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let d=xt(n.join("/")),u=[];return u.push(...d.map(f=>f===""?s:[s,f].join("/"))),a&&u.push(...d),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function Jt(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ar(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Xt=/^:\w+$/,Qt=3,Zt=2,er=1,tr=10,rr=-2,ut=e=>e==="*";function nr(e,t){let r=e.split("/"),n=r.length;return r.some(ut)&&(n+=rr),t&&(n+=Zt),r.filter(a=>!ut(a)).reduce((a,s)=>a+(Xt.test(s)?Qt:s===""?er:tr),n)}function ar(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function or(e,t){let{routesMeta:r}=e,n={},a="/",s=[];for(let d=0;d<r.length;++d){let u=r[d],f=d===r.length-1,h=a==="/"?t:t.slice(a.length)||"/",m=ir({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},h);if(!m)return null;Object.assign(n,m.params);let x=u.route;s.push({params:n,pathname:Me([a,m.pathname]),pathnameBase:hr(Me([a,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(a=Me([a,m.pathnameBase]))}return s}function ir(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=lr(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],d=s.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((h,m,x)=>{if(m==="*"){let D=u[x]||"";d=s.slice(0,s.length-D.length).replace(/(.)\/+$/,"$1")}return h[m]=sr(u[x]||"",m),h},{}),pathname:s,pathnameBase:d,pattern:e}}function lr(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),fe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(d,u)=>(n.push(u),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function dr(e){try{return decodeURI(e)}catch(t){return fe(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sr(e,t){try{return decodeURIComponent(e)}catch(r){return fe(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function je(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function cr(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?ie(e):e;return{pathname:r?r.startsWith("/")?r:ur(r,t):t,search:mr(n),hash:pr(a)}}function ur(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function $e(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Et(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function fr(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=ie(e):(a=T({},e),F(!a.pathname||!a.pathname.includes("?"),$e("?","pathname","search",a)),F(!a.pathname||!a.pathname.includes("#"),$e("#","pathname","hash",a)),F(!a.search||!a.search.includes("#"),$e("#","search","hash",a)));let s=e===""||a.pathname==="",d=s?"/":a.pathname,u;if(n||d==null)u=r;else{let x=t.length-1;if(d.startsWith("..")){let D=d.split("/");for(;D[0]==="..";)D.shift(),x-=1;a.pathname=D.join("/")}u=x>=0?t[x]:"/"}let f=cr(a,u),h=d&&d!=="/"&&d.endsWith("/"),m=(s||d===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(h||m)&&(f.pathname+="/"),f}const Me=e=>e.join("/").replace(/\/\/+/g,"/"),hr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mr=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class St{constructor(t,r,n,a){a===void 0&&(a=!1),this.status=t,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function gr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Pt=["post","put","patch","delete"],yr=new Set(Pt),vr=["get",...Pt],br=new Set(vr),Rr=new Set([301,302,303,307,308]),wr=new Set([307,308]),Ke={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Dr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ve={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Lt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mr=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Ir(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;F(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let o=e.detectErrorBoundary;a=i=>({hasErrorBoundary:o(i)})}else a=Mr;let s={},d=qe(e.routes,a,void 0,s),u,f=e.basename||"/",h=T({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),m=null,x=new Set,D=null,C=null,E=null,M=e.hydrationData!=null,v=De(d,e.history.location,f),P=null;if(v==null){let o=V(404,{pathname:e.history.location.pathname}),{matches:i,route:c}=bt(d);v=i,P={[c.id]:o}}let O=!v.some(o=>o.route.lazy)&&(!v.some(o=>o.route.loader)||e.hydrationData!=null),W,l={historyAction:e.history.action,location:e.history.location,matches:v,initialized:O,navigation:Ke,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||P,fetchers:new Map,blockers:new Map},L=N.Pop,k=!1,j,Y=!1,G=!1,te=[],he=[],z=new Map,Xe=0,ze=-1,le=new Map,re=new Set,de=new Map,ne=new Map,ae=new Map,Ie=!1;function Tt(){return m=e.history.listen(o=>{let{action:i,location:c,delta:p}=o;if(Ie){Ie=!1;return}fe(ae.size===0||p!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let w=ot({currentLocation:l.location,nextLocation:c,historyAction:i});if(w&&p!=null){Ie=!0,e.history.go(p*-1),Le(w,{state:"blocked",location:c,proceed(){Le(w,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),e.history.go(p)},reset(){let b=new Map(l.blockers);b.set(w,ve),H({blockers:b})}});return}return Z(i,c)}),l.initialized||Z(N.Pop,l.location),W}function Ct(){m&&m(),x.clear(),j&&j.abort(),l.fetchers.forEach((o,i)=>Be(i)),l.blockers.forEach((o,i)=>at(i))}function jt(o){return x.add(o),()=>x.delete(o)}function H(o){l=T({},l,o),x.forEach(i=>i(l))}function me(o,i){var c,p;let w=l.actionData!=null&&l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&l.navigation.state==="loading"&&((c=o.state)==null?void 0:c._isRedirect)!==!0,b;i.actionData?Object.keys(i.actionData).length>0?b=i.actionData:b=null:w?b=l.actionData:b=null;let R=i.loaderData?vt(l.loaderData,i.loaderData,i.matches||[],i.errors):l.loaderData,y=l.blockers;y.size>0&&(y=new Map(y),y.forEach((A,S)=>y.set(S,ve)));let g=k===!0||l.navigation.formMethod!=null&&J(l.navigation.formMethod)&&((p=o.state)==null?void 0:p._isRedirect)!==!0;u&&(d=u,u=void 0),Y||L===N.Pop||(L===N.Push?e.history.push(o,o.state):L===N.Replace&&e.history.replace(o,o.state)),H(T({},i,{actionData:b,loaderData:R,historyAction:L,location:o,initialized:!0,navigation:Ke,revalidation:"idle",restoreScrollPosition:lt(o,i.matches||l.matches),preventScrollReset:g,blockers:y})),L=N.Pop,k=!1,Y=!1,G=!1,te=[],he=[]}async function Qe(o,i){if(typeof o=="number"){e.history.go(o);return}let c=Ve(l.location,l.matches,f,h.v7_prependBasename,o,i==null?void 0:i.fromRouteId,i==null?void 0:i.relative),{path:p,submission:w,error:b}=ft(h.v7_normalizeFormMethod,!1,c,i),R=l.location,y=Ee(l.location,p,i&&i.state);y=T({},y,e.history.encodeLocation(y));let g=i&&i.replace!=null?i.replace:void 0,A=N.Push;g===!0?A=N.Replace:g===!1||w!=null&&J(w.formMethod)&&w.formAction===l.location.pathname+l.location.search&&(A=N.Replace);let S=i&&"preventScrollReset"in i?i.preventScrollReset===!0:void 0,K=ot({currentLocation:R,nextLocation:y,historyAction:A});if(K){Le(K,{state:"blocked",location:y,proceed(){Le(K,{state:"proceeding",proceed:void 0,reset:void 0,location:y}),Qe(o,i)},reset(){let B=new Map(l.blockers);B.set(K,ve),H({blockers:B})}});return}return await Z(A,y,{submission:w,pendingError:b,preventScrollReset:S,replace:i&&i.replace})}function zt(){if(Oe(),H({revalidation:"loading"}),l.navigation.state!=="submitting"){if(l.navigation.state==="idle"){Z(l.historyAction,l.location,{startUninterruptedRevalidation:!0});return}Z(L||l.historyAction,l.navigation.location,{overrideNavigation:l.navigation})}}async function Z(o,i,c){j&&j.abort(),j=null,L=o,Y=(c&&c.startUninterruptedRevalidation)===!0,Wt(l.location,l.matches),k=(c&&c.preventScrollReset)===!0;let p=u||d,w=c&&c.overrideNavigation,b=De(p,i,f);if(!b){let B=V(404,{pathname:i.pathname}),{matches:$,route:X}=bt(p);Ne(),me(i,{matches:$,loaderData:{},errors:{[X.id]:B}});return}if(l.initialized&&!G&&Lr(l.location,i)&&!(c&&c.submission&&J(c.submission.formMethod))){me(i,{matches:b});return}j=new AbortController;let R=Re(e.history,i,j.signal,c&&c.submission),y,g;if(c&&c.pendingError)g={[ce(b).route.id]:c.pendingError};else if(c&&c.submission&&J(c.submission.formMethod)){let B=await It(R,i,c.submission,b,{replace:c.replace});if(B.shortCircuited)return;y=B.pendingActionData,g=B.pendingActionError,w=Te(i,c.submission),R=new Request(R.url,{signal:R.signal})}let{shortCircuited:A,loaderData:S,errors:K}=await Ot(R,i,b,w,c&&c.submission,c&&c.fetcherSubmission,c&&c.replace,y,g);A||(j=null,me(i,T({matches:b},y?{actionData:y}:{},{loaderData:S,errors:K})))}async function It(o,i,c,p,w){w===void 0&&(w={}),Oe();let b=Cr(i,c);H({navigation:b});let R,y=Ge(p,i);if(!y.route.action&&!y.route.lazy)R={type:I.error,error:V(405,{method:o.method,pathname:i.pathname,routeId:y.route.id})};else if(R=await be("action",o,y,p,s,a,f),o.signal.aborted)return{shortCircuited:!0};if(ue(R)){let g;return w&&w.replace!=null?g=w.replace:g=R.location===l.location.pathname+l.location.search,await pe(l,R,{submission:c,replace:g}),{shortCircuited:!0}}if(xe(R)){let g=ce(p,y.route.id);return(w&&w.replace)!==!0&&(L=N.Push),{pendingActionData:{},pendingActionError:{[g.route.id]:R.error}}}if(oe(R))throw V(400,{type:"defer-action"});return{pendingActionData:{[y.route.id]:R.data}}}async function Ot(o,i,c,p,w,b,R,y,g){let A=p||Te(i,w),S=w||b||Dt(A),K=u||d,[B,$]=ht(e.history,l,c,S,i,G,te,he,de,re,K,f,y,g);if(Ne(U=>!(c&&c.some(q=>q.route.id===U))||B&&B.some(q=>q.route.id===U)),B.length===0&&$.length===0){let U=rt();return me(i,T({matches:c,loaderData:{},errors:g||null},y?{actionData:y}:{},U?{fetchers:new Map(l.fetchers)}:{})),{shortCircuited:!0}}if(!Y){$.forEach(q=>{let se=l.fetchers.get(q.key),_=we(void 0,se?se.data:void 0);l.fetchers.set(q.key,_)});let U=y||l.actionData;H(T({navigation:A},U?Object.keys(U).length===0?{actionData:null}:{actionData:U}:{},$.length>0?{fetchers:new Map(l.fetchers)}:{}))}ze=++Xe,$.forEach(U=>{z.has(U.key)&&ee(U.key),U.controller&&z.set(U.key,U.controller)});let X=()=>$.forEach(U=>ee(U.key));j&&j.signal.addEventListener("abort",X);let{results:ge,loaderResults:_e,fetcherResults:Ae}=await et(l.matches,c,B,$,o);if(o.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",X),$.forEach(U=>z.delete(U.key));let Q=Rt(ge);if(Q)return await pe(l,Q,{replace:R}),{shortCircuited:!0};let{loaderData:Fe,errors:ke}=yt(l,c,B,_e,g,$,Ae,ne);ne.forEach((U,q)=>{U.subscribe(se=>{(se||U.done)&&ne.delete(q)})});let He=rt(),We=nt(ze),Ue=He||We||$.length>0;return T({loaderData:Fe,errors:ke},Ue?{fetchers:new Map(l.fetchers)}:{})}function Ze(o){return l.fetchers.get(o)||Dr}function Bt(o,i,c,p){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");z.has(o)&&ee(o);let w=u||d,b=Ve(l.location,l.matches,f,h.v7_prependBasename,c,i,p==null?void 0:p.relative),R=De(w,b,f);if(!R){Pe(o,i,V(404,{pathname:b}));return}let{path:y,submission:g,error:A}=ft(h.v7_normalizeFormMethod,!0,b,p);if(A){Pe(o,i,A);return}let S=Ge(R,y);if(k=(p&&p.preventScrollReset)===!0,g&&J(g.formMethod)){Nt(o,i,y,S,R,g);return}de.set(o,{routeId:i,path:y}),_t(o,i,y,S,R,g)}async function Nt(o,i,c,p,w,b){if(Oe(),de.delete(o),!p.route.action&&!p.route.lazy){let _=V(405,{method:b.formMethod,pathname:c,routeId:i});Pe(o,i,_);return}let R=l.fetchers.get(o),y=jr(b,R);l.fetchers.set(o,y),H({fetchers:new Map(l.fetchers)});let g=new AbortController,A=Re(e.history,c,g.signal,b);z.set(o,g);let S=await be("action",A,p,w,s,a,f);if(A.signal.aborted){z.get(o)===g&&z.delete(o);return}if(ue(S)){z.delete(o),re.add(o);let _=we(b);return l.fetchers.set(o,_),H({fetchers:new Map(l.fetchers)}),pe(l,S,{submission:b,isFetchActionRedirect:!0})}if(xe(S)){Pe(o,i,S.error);return}if(oe(S))throw V(400,{type:"defer-action"});let K=l.navigation.location||l.location,B=Re(e.history,K,g.signal),$=u||d,X=l.navigation.state!=="idle"?De($,l.navigation.location,f):l.matches;F(X,"Didn't find any matches after fetcher action");let ge=++Xe;le.set(o,ge);let _e=we(b,S.data);l.fetchers.set(o,_e);let[Ae,Q]=ht(e.history,l,X,b,K,G,te,he,de,re,$,f,{[p.route.id]:S.data},void 0);Q.filter(_=>_.key!==o).forEach(_=>{let ye=_.key,dt=l.fetchers.get(ye),Kt=we(void 0,dt?dt.data:void 0);l.fetchers.set(ye,Kt),z.has(ye)&&ee(ye),_.controller&&z.set(ye,_.controller)}),H({fetchers:new Map(l.fetchers)});let Fe=()=>Q.forEach(_=>ee(_.key));g.signal.addEventListener("abort",Fe);let{results:ke,loaderResults:He,fetcherResults:We}=await et(l.matches,X,Ae,Q,B);if(g.signal.aborted)return;g.signal.removeEventListener("abort",Fe),le.delete(o),z.delete(o),Q.forEach(_=>z.delete(_.key));let Ue=Rt(ke);if(Ue)return pe(l,Ue);let{loaderData:U,errors:q}=yt(l,l.matches,Ae,He,void 0,Q,We,ne);if(l.fetchers.has(o)){let _=Ce(S.data);l.fetchers.set(o,_)}let se=nt(ge);l.navigation.state==="loading"&&ge>ze?(F(L,"Expected pending action"),j&&j.abort(),me(l.navigation.location,{matches:X,loaderData:U,errors:q,fetchers:new Map(l.fetchers)})):(H(T({errors:q,loaderData:vt(l.loaderData,U,X,q)},se||Q.length>0?{fetchers:new Map(l.fetchers)}:{})),G=!1)}async function _t(o,i,c,p,w,b){let R=l.fetchers.get(o),y=we(b,R?R.data:void 0);l.fetchers.set(o,y),H({fetchers:new Map(l.fetchers)});let g=new AbortController,A=Re(e.history,c,g.signal);z.set(o,g);let S=await be("loader",A,p,w,s,a,f);if(oe(S)&&(S=await Ut(S,A.signal,!0)||S),z.get(o)===g&&z.delete(o),A.signal.aborted)return;if(ue(S)){re.add(o),await pe(l,S);return}if(xe(S)){let B=ce(l.matches,i);l.fetchers.delete(o),H({fetchers:new Map(l.fetchers),errors:{[B.route.id]:S.error}});return}F(!oe(S),"Unhandled fetcher deferred data");let K=Ce(S.data);l.fetchers.set(o,K),H({fetchers:new Map(l.fetchers)})}async function pe(o,i,c){let{submission:p,replace:w,isFetchActionRedirect:b}=c===void 0?{}:c;i.revalidate&&(G=!0);let R=Ee(o.location,i.location,T({_isRedirect:!0},b?{_isFetchActionRedirect:!0}:{}));if(F(R,"Expected a location on the redirect navigation"),Lt.test(i.location)&&r){let A=e.history.createURL(i.location),S=je(A.pathname,f)==null;if(t.location.origin!==A.origin||S){w?t.location.replace(i.location):t.location.assign(i.location);return}}j=null;let y=w===!0?N.Replace:N.Push,g=p||Dt(o.navigation);if(wr.has(i.status)&&g&&J(g.formMethod))await Z(y,R,{submission:T({},g,{formAction:i.location}),preventScrollReset:k});else if(b)await Z(y,R,{overrideNavigation:Te(R),fetcherSubmission:g,preventScrollReset:k});else{let A=Te(R,g);await Z(y,R,{overrideNavigation:A,preventScrollReset:k})}}async function et(o,i,c,p,w){let b=await Promise.all([...c.map(g=>be("loader",w,g,i,s,a,f)),...p.map(g=>g.matches&&g.match&&g.controller?be("loader",Re(e.history,g.path,g.controller.signal),g.match,g.matches,s,a,f):{type:I.error,error:V(404,{pathname:g.path})})]),R=b.slice(0,c.length),y=b.slice(c.length);return await Promise.all([wt(o,c,R,R.map(()=>w.signal),!1,l.loaderData),wt(o,p.map(g=>g.match),y,p.map(g=>g.controller?g.controller.signal:null),!0)]),{results:b,loaderResults:R,fetcherResults:y}}function Oe(){G=!0,te.push(...Ne()),de.forEach((o,i)=>{z.has(i)&&(he.push(i),ee(i))})}function Pe(o,i,c){let p=ce(l.matches,i);Be(o),H({errors:{[p.route.id]:c},fetchers:new Map(l.fetchers)})}function Be(o){let i=l.fetchers.get(o);z.has(o)&&!(i&&i.state==="loading"&&le.has(o))&&ee(o),de.delete(o),le.delete(o),re.delete(o),l.fetchers.delete(o)}function ee(o){let i=z.get(o);F(i,"Expected fetch controller: "+o),i.abort(),z.delete(o)}function tt(o){for(let i of o){let c=Ze(i),p=Ce(c.data);l.fetchers.set(i,p)}}function rt(){let o=[],i=!1;for(let c of re){let p=l.fetchers.get(c);F(p,"Expected fetcher: "+c),p.state==="loading"&&(re.delete(c),o.push(c),i=!0)}return tt(o),i}function nt(o){let i=[];for(let[c,p]of le)if(p<o){let w=l.fetchers.get(c);F(w,"Expected fetcher: "+c),w.state==="loading"&&(ee(c),le.delete(c),i.push(c))}return tt(i),i.length>0}function kt(o,i){let c=l.blockers.get(o)||ve;return ae.get(o)!==i&&ae.set(o,i),c}function at(o){l.blockers.delete(o),ae.delete(o)}function Le(o,i){let c=l.blockers.get(o)||ve;F(c.state==="unblocked"&&i.state==="blocked"||c.state==="blocked"&&i.state==="blocked"||c.state==="blocked"&&i.state==="proceeding"||c.state==="blocked"&&i.state==="unblocked"||c.state==="proceeding"&&i.state==="unblocked","Invalid blocker state transition: "+c.state+" -> "+i.state);let p=new Map(l.blockers);p.set(o,i),H({blockers:p})}function ot(o){let{currentLocation:i,nextLocation:c,historyAction:p}=o;if(ae.size===0)return;ae.size>1&&fe(!1,"A router only supports one blocker at a time");let w=Array.from(ae.entries()),[b,R]=w[w.length-1],y=l.blockers.get(b);if(!(y&&y.state==="proceeding")&&R({currentLocation:i,nextLocation:c,historyAction:p}))return b}function Ne(o){let i=[];return ne.forEach((c,p)=>{(!o||o(p))&&(c.cancel(),i.push(p),ne.delete(p))}),i}function Ht(o,i,c){if(D=o,E=i,C=c||null,!M&&l.navigation===Ke){M=!0;let p=lt(l.location,l.matches);p!=null&&H({restoreScrollPosition:p})}return()=>{D=null,E=null,C=null}}function it(o,i){return C&&C(o,i.map(p=>Tr(p,l.loaderData)))||o.key}function Wt(o,i){if(D&&E){let c=it(o,i);D[c]=E()}}function lt(o,i){if(D){let c=it(o,i),p=D[c];if(typeof p=="number")return p}return null}function $t(o){s={},u=qe(o,a,void 0,s)}return W={get basename(){return f},get state(){return l},get routes(){return d},initialize:Tt,subscribe:jt,enableScrollRestoration:Ht,navigate:Qe,fetch:Bt,revalidate:zt,createHref:o=>e.history.createHref(o),encodeLocation:o=>e.history.encodeLocation(o),getFetcher:Ze,deleteFetcher:Be,dispose:Ct,getBlocker:kt,deleteBlocker:at,_internalFetchControllers:z,_internalActiveDeferreds:ne,_internalSetRoutes:$t},W}function xr(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ve(e,t,r,n,a,s,d){let u,f;if(s!=null&&d!=="path"){u=[];for(let m of t)if(u.push(m),m.route.id===s){f=m;break}}else u=t,f=t[t.length-1];let h=fr(a||".",Et(u).map(m=>m.pathnameBase),je(e.pathname,r)||e.pathname,d==="path");return a==null&&(h.search=e.search,h.hash=e.hash),(a==null||a===""||a===".")&&f&&f.route.index&&!Je(h.search)&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),n&&r!=="/"&&(h.pathname=h.pathname==="/"?r:Me([r,h.pathname])),Se(h)}function ft(e,t,r,n){if(!n||!xr(n))return{path:r};if(n.formMethod&&!Ur(n.formMethod))return{path:r,error:V(405,{method:n.formMethod})};let a=()=>({path:r,error:V(400,{type:"invalid-body"})}),s=n.formMethod||"get",d=e?s.toUpperCase():s.toLowerCase(),u=Ft(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!J(d))return a();let D=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((C,E)=>{let[M,v]=E;return""+C+M+"="+v+`
`},""):String(n.body);return{path:r,submission:{formMethod:d,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:D}}}else if(n.formEncType==="application/json"){if(!J(d))return a();try{let D=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:d,formAction:u,formEncType:n.formEncType,formData:void 0,json:D,text:void 0}}}catch{return a()}}}F(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=Ye(n.formData),h=n.formData;else if(n.body instanceof FormData)f=Ye(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=gt(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=gt(f)}catch{return a()}let m={formMethod:d,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(J(m.formMethod))return{path:r,submission:m};let x=ie(r);return t&&x.search&&Je(x.search)&&f.append("index",""),x.search="?"+f,{path:Se(x),submission:m}}function Er(e,t){let r=e;if(t){let n=e.findIndex(a=>a.route.id===t);n>=0&&(r=e.slice(0,n))}return r}function ht(e,t,r,n,a,s,d,u,f,h,m,x,D,C){let E=C?Object.values(C)[0]:D?Object.values(D)[0]:void 0,M=e.createURL(t.location),v=e.createURL(a),P=C?Object.keys(C)[0]:void 0,W=Er(r,P).filter((L,k)=>{if(L.route.lazy)return!0;if(L.route.loader==null)return!1;if(Sr(t.loaderData,t.matches[k],L)||d.some(G=>G===L.route.id))return!0;let j=t.matches[k],Y=L;return mt(L,T({currentUrl:M,currentParams:j.params,nextUrl:v,nextParams:Y.params},n,{actionResult:E,defaultShouldRevalidate:s||M.pathname+M.search===v.pathname+v.search||M.search!==v.search||At(j,Y)}))}),l=[];return f.forEach((L,k)=>{if(!r.some(z=>z.route.id===L.routeId))return;let j=De(m,L.path,x);if(!j){l.push({key:k,routeId:L.routeId,path:L.path,matches:null,match:null,controller:null});return}let Y=t.fetchers.get(k),G=Y&&Y.state!=="idle"&&Y.data===void 0&&!h.has(k),te=Ge(j,L.path);(u.includes(k)||G||mt(te,T({currentUrl:M,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:r[r.length-1].params},n,{actionResult:E,defaultShouldRevalidate:s})))&&l.push({key:k,routeId:L.routeId,path:L.path,matches:j,match:te,controller:new AbortController})}),[W,l]}function Sr(e,t,r){let n=!t||r.route.id!==t.route.id,a=e[r.route.id]===void 0;return n||a}function At(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function mt(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}async function pt(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let a=r[e.id];F(a,"No route found in manifest");let s={};for(let d in n){let f=a[d]!==void 0&&d!=="hasErrorBoundary";fe(!f,'Route "'+a.id+'" has a static property "'+d+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+d+'" will be ignored.')),!f&&!Yt.has(d)&&(s[d]=n[d])}Object.assign(a,s),Object.assign(a,T({},t(a),{lazy:void 0}))}async function be(e,t,r,n,a,s,d,u){u===void 0&&(u={});let f,h,m,x=E=>{let M,v=new Promise((P,O)=>M=O);return m=()=>M(),t.signal.addEventListener("abort",m),Promise.race([E({request:t,params:r.params,context:u.requestContext}),v])};try{let E=r.route[e];if(r.route.lazy)if(E)h=(await Promise.all([x(E),pt(r.route,s,a)]))[0];else if(await pt(r.route,s,a),E=r.route[e],E)h=await x(E);else if(e==="action"){let M=new URL(t.url),v=M.pathname+M.search;throw V(405,{method:t.method,pathname:v,routeId:r.route.id})}else return{type:I.data,data:void 0};else if(E)h=await x(E);else{let M=new URL(t.url),v=M.pathname+M.search;throw V(404,{pathname:v})}F(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(E){f=I.error,h=E}finally{m&&t.signal.removeEventListener("abort",m)}if(Fr(h)){let E=h.status;if(Rr.has(E)){let P=h.headers.get("Location");if(F(P,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lt.test(P))P=Ve(new URL(t.url),n.slice(0,n.indexOf(r)+1),d,!0,P);else if(!u.isStaticRequest){let O=new URL(t.url),W=P.startsWith("//")?new URL(O.protocol+P):new URL(P),l=je(W.pathname,d)!=null;W.origin===O.origin&&l&&(P=W.pathname+W.search+W.hash)}if(u.isStaticRequest)throw h.headers.set("Location",P),h;return{type:I.redirect,status:E,location:P,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(u.isRouteRequest)throw{type:f||I.data,response:h};let M,v=h.headers.get("Content-Type");return v&&/\bapplication\/json\b/.test(v)?M=await h.json():M=await h.text(),f===I.error?{type:f,error:new St(E,h.statusText,M),headers:h.headers}:{type:I.data,data:M,statusCode:h.status,headers:h.headers}}if(f===I.error)return{type:f,error:h};if(Ar(h)){var D,C;return{type:I.deferred,deferredData:h,statusCode:(D=h.init)==null?void 0:D.status,headers:((C=h.init)==null?void 0:C.headers)&&new Headers(h.init.headers)}}return{type:I.data,data:h}}function Re(e,t,r,n){let a=e.createURL(Ft(t)).toString(),s={signal:r};if(n&&J(n.formMethod)){let{formMethod:d,formEncType:u}=n;s.method=d.toUpperCase(),u==="application/json"?(s.headers=new Headers({"Content-Type":u}),s.body=JSON.stringify(n.json)):u==="text/plain"?s.body=n.text:u==="application/x-www-form-urlencoded"&&n.formData?s.body=Ye(n.formData):s.body=n.formData}return new Request(a,s)}function Ye(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function gt(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function Pr(e,t,r,n,a){let s={},d=null,u,f=!1,h={};return r.forEach((m,x)=>{let D=t[x].route.id;if(F(!ue(m),"Cannot handle redirect results in processLoaderData"),xe(m)){let C=ce(e,D),E=m.error;n&&(E=Object.values(n)[0],n=void 0),d=d||{},d[C.route.id]==null&&(d[C.route.id]=E),s[D]=void 0,f||(f=!0,u=gr(m.error)?m.error.status:500),m.headers&&(h[D]=m.headers)}else oe(m)?(a.set(D,m.deferredData),s[D]=m.deferredData.data):s[D]=m.data,m.statusCode!=null&&m.statusCode!==200&&!f&&(u=m.statusCode),m.headers&&(h[D]=m.headers)}),n&&(d=n,s[Object.keys(n)[0]]=void 0),{loaderData:s,errors:d,statusCode:u||200,loaderHeaders:h}}function yt(e,t,r,n,a,s,d,u){let{loaderData:f,errors:h}=Pr(t,r,n,a,u);for(let m=0;m<s.length;m++){let{key:x,match:D,controller:C}=s[m];F(d!==void 0&&d[m]!==void 0,"Did not find corresponding fetcher result");let E=d[m];if(!(C&&C.signal.aborted))if(xe(E)){let M=ce(e.matches,D==null?void 0:D.route.id);h&&h[M.route.id]||(h=T({},h,{[M.route.id]:E.error})),e.fetchers.delete(x)}else if(ue(E))F(!1,"Unhandled fetcher revalidation redirect");else if(oe(E))F(!1,"Unhandled fetcher deferred data");else{let M=Ce(E.data);e.fetchers.set(x,M)}}return{loaderData:f,errors:h}}function vt(e,t,r,n){let a=T({},t);for(let s of r){let d=s.route.id;if(t.hasOwnProperty(d)?t[d]!==void 0&&(a[d]=t[d]):e[d]!==void 0&&s.route.loader&&(a[d]=e[d]),n&&n.hasOwnProperty(d))break}return a}function ce(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function bt(e){let t=e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function V(e,t){let{pathname:r,routeId:n,method:a,type:s}=t===void 0?{}:t,d="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(d="Bad Request",a&&r&&n?u="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):e===403?(d="Forbidden",u='Route "'+n+'" does not match URL "'+r+'"'):e===404?(d="Not Found",u='No route matches URL "'+r+'"'):e===405&&(d="Method Not Allowed",a&&r&&n?u="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":a&&(u='Invalid request method "'+a.toUpperCase()+'"')),new St(e||500,d,new Error(u),!0)}function Rt(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(ue(r))return r}}function Ft(e){let t=typeof e=="string"?ie(e):e;return Se(T({},t,{hash:""}))}function Lr(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function oe(e){return e.type===I.deferred}function xe(e){return e.type===I.error}function ue(e){return(e&&e.type)===I.redirect}function Ar(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Fr(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Ur(e){return br.has(e.toLowerCase())}function J(e){return yr.has(e.toLowerCase())}async function wt(e,t,r,n,a,s){for(let d=0;d<r.length;d++){let u=r[d],f=t[d];if(!f)continue;let h=e.find(x=>x.route.id===f.route.id),m=h!=null&&!At(h,f)&&(s&&s[f.route.id])!==void 0;if(oe(u)&&(a||m)){let x=n[d];F(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ut(u,x,a).then(D=>{D&&(r[d]=D||r[d])})}}}async function Ut(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:I.data,data:e.deferredData.unwrappedData}}catch(a){return{type:I.error,error:a}}return{type:I.data,data:e.deferredData.data}}}function Je(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Tr(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function Ge(e,t){let r=typeof t=="string"?ie(t).search:t.search;if(e[e.length-1].route.index&&Je(r||""))return e[e.length-1];let n=Et(e);return n[n.length-1]}function Dt(e){let{formMethod:t,formAction:r,formEncType:n,text:a,formData:s,json:d}=e;if(!(!t||!r||!n)){if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:a};if(s!=null)return{formMethod:t,formAction:r,formEncType:n,formData:s,json:void 0,text:void 0};if(d!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:d,text:void 0}}}function Te(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Cr(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function we(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function jr(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function Ce(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}export{N as A,St as E,gr as a,zr as b,Ir as c,Se as d,Et as g,F as i,Me as j,De as m,ie as p,fr as r,je as s};
