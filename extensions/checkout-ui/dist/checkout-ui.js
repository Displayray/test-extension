(()=>{var te=Object.defineProperty;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var $=(e,r,o)=>r in e?te(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,T=(e,r)=>{for(var o in r||(r={}))oe.call(r,o)&&$(e,o,r[o]);if(U)for(var o of U(r))ne.call(r,o)&&$(e,o,r[o]);return e};var G=(e,r,o)=>new Promise((n,t)=>{var s=p=>{try{c(o.next(p))}catch(f){t(f)}},a=p=>{try{c(o.throw(p))}catch(f){t(f)}},c=p=>p.done?n(p.value):Promise.resolve(p.value).then(s,a);c((o=o.apply(e,r)).next())});function E(e){if(e==null||typeof e!="object")return!1;let r=Object.getPrototypeOf(e);return r==null||r===Object.prototype}function O(e){return e!=null&&e.kind===3}var A="__current",D={},ce=[];function L(e,{strict:r=!0,components:o}={}){let n=0,t={strict:r,mounted:!1,channel:e,children:ce,nodes:new WeakSet,parents:new WeakMap,tops:new WeakMap,components:new WeakMap,fragments:new WeakMap};r&&Object.freeze(o);let s={kind:0,options:r?Object.freeze({strict:r,components:o}):{strict:r,components:o},get children(){return t.children},createComponent(a,...c){if(o&&o.indexOf(a)<0)throw new Error(`Unsupported component: ${a}`);let[p,f,...i]=c,d=p!=null?p:{},m=[],g={};if(p)for(let u of Object.keys(p))u!=="children"&&(g[u]=y(v(p[u])));if(f)if(Array.isArray(f))for(let u of f)m.push(l(u,s));else{m.push(l(f,s));for(let u of i)m.push(l(u,s))}let b=`${n++}`,x={externalProps:r?Object.freeze(d):d,internalProps:g,children:r?Object.freeze(m):m},h=T({kind:1,get children(){return x.children},get props(){return x.externalProps},get remoteProps(){return x.internalProps},remove:()=>q(h),updateProps:u=>ae(h,u,x,t),append:(...u)=>M(h,u.map(k=>l(k,s)),x,t),appendChild:u=>S(h,l(u,s),x,t),removeChild:u=>j(h,u,x,t),replaceChildren:(...u)=>B(h,u.map(k=>l(k,s)),x,t),insertBefore:(u,k)=>P(h,l(u,s),k,x,t),insertChildBefore:(u,k)=>P(h,l(u,s),k,x,t)},D);t.components.set(h,x),Object.defineProperty(h,"type",{value:a,configurable:!1,writable:!1,enumerable:!0}),F(h,t),z(h,b,s);for(let u of x.children)_(h,u,t);return h},createText(a=""){let c=`${n++}`,p={text:a},f=d=>pe(i,d,p,t),i=T({kind:2,get text(){return p.text},update:f,updateText:f,remove:()=>q(i)},D);return F(i,t),z(i,c,s),i},createFragment(){let a=`${n++}`,c={children:r?Object.freeze([]):[]},p=T({kind:3,get children(){return c.children},append:(...f)=>M(p,f.map(i=>l(i,s)),c,t),appendChild:f=>S(p,l(f,s),c,t),removeChild:f=>j(p,f,c,t),replaceChildren:(...f)=>B(p,f.map(i=>l(i,s)),c,t),insertBefore:(f,i)=>P(p,l(f,s),i,c,t),insertChildBefore:(f,i)=>P(p,l(f,s),i,c,t)},D);return t.fragments.set(p,c),F(p,t),z(p,a,s),p},append:(...a)=>M(s,a.map(c=>l(c,s)),t,t),appendChild:a=>S(s,l(a,s),t,t),replaceChildren:(...a)=>B(s,a.map(c=>l(c,s)),t,t),removeChild:a=>j(s,a,t,t),insertBefore:(a,c)=>P(s,l(a,s),c,t,t),insertChildBefore:(a,c)=>P(s,l(a,s),c,t,t),mount(){return t.mounted?Promise.resolve():(t.mounted=!0,Promise.resolve(e(0,t.children.map(I))))}};return s}function fe(e,{tops:r}){var o;return((o=r.get(e))===null||o===void 0?void 0:o.kind)===0}function V(e,r){let o=n=>{if("children"in n)for(let t of n.children)r(t),o(t)};o(e)}function N(e,r,{remote:o,local:n}){let{mounted:t,channel:s}=r;t&&(e.kind===0||fe(e,r))&&o(s),n()}function pe(e,r,o,n){return N(e,n,{remote:t=>t(3,e.id,r),local:()=>{o.text=r}})}var C=Symbol("ignore");function ae(e,r,o,n){let{strict:t}=n,{internalProps:s,externalProps:a}=o,c={},p=[],f=!1;for(let i of Object.keys(r)){if(i==="children")continue;let d=a[i],m=r[i],g=s[i],b=v(m);if(g===b&&(b==null||typeof b!="object"))continue;let[x,h]=H(g,b);h&&p.push(...h),x!==C&&(f=!0,c[i]=x,O(d)&&K(d,n),O(m)&&_(e,m,n))}return N(e,n,{remote:i=>{f&&i(4,e.id,c)},local:()=>{let i=T(T({},a),r);o.externalProps=t?Object.freeze(i):i,o.internalProps=T(T({},o.internalProps),c);for(let[d,m]of p)d[A]=m}})}function H(e,r,o=new Set){return o.has(e)?[C]:(o.add(e),typeof e=="function"&&A in e?[typeof r=="function"?C:y(r),[[e,r]]]:Array.isArray(e)?me(e,r,o):E(e)&&!O(e)?ue(e,r,o):[e===r?C:r])}function y(e,r=new Map){let o=r.get(e);if(o)return o;if(O(e))return r.set(e,e),e;if(Array.isArray(e)){let n=[];r.set(e,n);for(let t of e)n.push(y(t,r));return n}if(E(e)){let n={};r.set(e,n);for(let t of Object.keys(e))n[t]=y(e[t],r);return n}if(typeof e=="function"){let n=(...t)=>n[A](...t);return Object.defineProperty(n,A,{enumerable:!1,configurable:!1,writable:!0,value:e}),r.set(e,n),n}return r.set(e,e),e}function R(e,r=new Set){if(!r.has(e)){if(r.add(e),Array.isArray(e))return e.reduce((o,n)=>{let t=R(n,r);return t?[...o,...t]:o},[]);if(E(e))return Object.keys(e).reduce((o,n)=>{let t=R(e[n],r);return t?[...o,...t]:o},[]);if(typeof e=="function")return A in e?[e]:void 0}}function q(e){var r;(r=e.parent)===null||r===void 0||r.removeChild(e)}function M(e,r,o,n){for(let t of r)S(e,t,o,n)}function S(e,r,o,n){var t;let{nodes:s,strict:a}=n;if(!s.has(r))throw new Error("Cannot append a node that was not created by this remote root");let c=r.parent,p=(t=c==null?void 0:c.children.indexOf(r))!==null&&t!==void 0?t:-1;return N(e,n,{remote:f=>{f(1,e.id,p<0?e.children.length:e.children.length-1,I(r),c?c.id:!1)},local:()=>{_(e,r,n);let f;if(c){let i=ee(c,n),d=[...i.children];d.splice(p,1),c===e?f=d:(i.children=a?Object.freeze(d):d,f=[...o.children])}else f=[...o.children];f.push(r),o.children=a?Object.freeze(f):f}})}function B(e,r,o,n){for(let t of e.children)j(e,t,o,n);M(e,r,o,n)}function j(e,r,o,n){let{strict:t}=n;return N(e,n,{remote:s=>s(2,e.id,e.children.indexOf(r)),local:()=>{K(r,n);let s=[...o.children];s.splice(s.indexOf(r),1),o.children=t?Object.freeze(s):s}})}function P(e,r,o,n,t){var s;let{strict:a,nodes:c}=t;if(!c.has(r))throw new Error("Cannot insert a node that was not created by this remote root");let p=r.parent,f=(s=p==null?void 0:p.children.indexOf(r))!==null&&s!==void 0?s:-1;return N(e,t,{remote:i=>{let d=o==null?e.children.length-1:e.children.indexOf(o);i(1,e.id,d<f||f<0?d:d-1,I(r),p?p.id:!1)},local:()=>{_(e,r,t);let i;if(p){let d=ee(p,t),m=[...d.children];m.splice(f,1),p===e?i=m:(d.children=a?Object.freeze(m):m,i=[...n.children])}else i=[...n.children];o==null?i.push(r):i.splice(i.indexOf(o),0,r),n.children=a?Object.freeze(i):i}})}function l(e,r){return typeof e=="string"?r.createText(e):e}function _(e,r,o){let{tops:n,parents:t}=o,s=e.kind===0?e:n.get(e);n.set(r,s),t.set(r,e),J(r,o),V(r,a=>{n.set(a,s),J(a,o)})}function J(e,r){if(e.kind!==1)return;let o=e.props;o&&Object.values(o).forEach(n=>{O(n)&&_(e,n,r)})}function K(e,r){let{tops:o,parents:n}=r;o.delete(e),n.delete(e),V(e,t=>{o.delete(t),Q(t,r)}),Q(e,r)}function Q(e,r){if(e.kind!==1)return;let o=e.remoteProps;for(let n of Object.keys(o!=null?o:{})){let t=o[n];O(t)&&K(t,r)}}function F(e,{parents:r,tops:o,nodes:n}){n.add(e),Object.defineProperty(e,"parent",{get(){return r.get(e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,"top",{get(){return o.get(e)},configurable:!0,enumerable:!0})}function I(e){return e.kind===2?{id:e.id,kind:e.kind,text:e.text}:{id:e.id,kind:e.kind,type:e.type,props:e.remoteProps,children:e.children.map(r=>I(r))}}function v(e){return O(e)?de(e):e}function de(e){return{id:e.id,kind:e.kind,get children(){return e.children.map(r=>I(r))}}}function ee(e,r){return e.kind===0?r:e.kind===3?r.fragments.get(e):r.components.get(e)}function z(e,r,o){Object.defineProperty(e,"id",{value:r,configurable:!0,writable:!1,enumerable:!1}),Object.defineProperty(e,"root",{value:o,configurable:!0,writable:!1,enumerable:!1})}function ue(e,r,o){if(!E(r)){var n;return[y(r),(n=R(e))===null||n===void 0?void 0:n.map(c=>[c,void 0])]}let t=!1,s=[],a={};for(let c in e){let p=e[c];if(!(c in r)){t=!0;let m=R(p);m&&s.push(...m.map(g=>[g,void 0]))}let f=r[c],[i,d]=H(p,f,o);d&&s.push(...d),i!==C&&(t=!0,a[c]=i)}for(let c in r)c in a||(t=!0,a[c]=y(r[c]));return[t?a:C,s]}function me(e,r,o){if(!Array.isArray(r)){var n;return[y(r),(n=R(e))===null||n===void 0?void 0:n.map(i=>[i,void 0])]}let t=!1,s=[],a=r.length,c=e.length,p=Math.max(c,a),f=[];for(let i=0;i<p;i++){let d=e[i],m=r[i];if(i<a){if(i>=c){t=!0,f[i]=y(m);continue}let[g,b]=H(d,m,o);if(b&&s.push(...b),g===C){f[i]=d;continue}t=!0,f[i]=g}else{t=!0;let g=R(d);g&&s.push(...g.map(b=>[b,void 0]))}}return[t?f:C,s]}function re(){return(r,o)=>{var n;function t(...s){return G(this,null,function*(){if(s.length===1)return o(...s);let[{channel:a,components:c},p]=s,f=L(a,{components:c,strict:!0}),i=o(f,p);return typeof i=="object"&&i!=null&&"then"in i&&(i=yield i),f.mount(),i})}return(n=globalThis.shopify)===null||n===void 0||n.extend(r,t),t}}var W=re();var Y="TextField";var $e=W("purchase.checkout.contact.render-after",le);function le(e,{extension:r,buyerJourney:o}){let t={age:"",canBlockProgress:r.capabilities.current.includes("block_progress")},s=e.createComponent(Y,{label:"Your age",type:"number",value:t.age,onChange:a,onInput:f,required:t.canBlockProgress});r.capabilities.subscribe(i=>{t.canBlockProgress=i.includes("block_progress"),s.updateProps({label:t.canBlockProgress?"Your age":"Your age (optional)",required:t.canBlockProgress})}),o.intercept(({canBlockProgress:i})=>i&&!c()?{behavior:"block",reason:"Age is required",perform:d=>{d.behavior==="block"&&s.updateProps({error:"Enter your age"})}}:i&&!p()?{behavior:"block",reason:"Age is less than 18.",errors:[{message:"You're not legally old enough to buy some of the items in your cart."}]}:{behavior:"allow",perform:()=>{f()}});function a(i){t.age=i,s.updateProps({value:t.age}),f()}function c(){return t.age!==""}function p(){return Number(t.age)>=18}function f(){s.updateProps({error:void 0})}e.appendChild(s)}})();
