import{U as i,ay as d}from"./index-652e1b4d.js";const c=(o,t)=>{if(!i)return!1;const e={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],n=d(o,e);return["scroll","auto","overlay"].some(r=>n.includes(r))},u=(o,t)=>{if(!i)return;let e=o;for(;e;){if([window,document,document.documentElement].includes(e))return window;if(c(e,t))return e;e=e.parentNode}return e};let l;const f=o=>{var t;if(!i)return 0;if(l!==void 0)return l;const e=document.createElement("div");e.className=`${o}-scrollbar__wrap`,e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);const n=e.offsetWidth;e.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",e.appendChild(r);const s=r.offsetWidth;return(t=e.parentNode)==null||t.removeChild(e),l=n-s,l};export{f as a,u as g};
