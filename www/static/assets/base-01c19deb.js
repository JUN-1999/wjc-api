import{B as e,aF as l,bj as u}from"./index-2f76c9d1.js";const i=["class","style"],E=/^on[A-Z]/,f=(a={})=>{const{excludeListeners:c=!1,excludeKeys:t}=a,o=e(()=>((t==null?void 0:t.value)||[]).concat(i)),s=l();return s?e(()=>{var n;return u(Object.entries((n=s.proxy)==null?void 0:n.$attrs).filter(([r])=>!o.value.includes(r)&&!(c&&E.test(r))))}):e(()=>({}))};export{f as u};