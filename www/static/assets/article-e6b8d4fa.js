import{C as s,aI as i,bs as u,R as t}from"./index-cfc2ccb9.js";const d=["class","style"],p=/^on[A-Z]/,h=(e={})=>{const{excludeListeners:r=!1,excludeKeys:a}=e,n=s(()=>((a==null?void 0:a.value)||[]).concat(d)),l=i();return l?s(()=>{var o;return u(Object.entries((o=l.proxy)==null?void 0:o.$attrs).filter(([c])=>!n.value.includes(c)&&!(r&&p.test(c))))}):s(()=>({}))};const m=e=>t("/treehole/article/articleList",{method:"get",params:e}),g=e=>t("/treehole/article/articleInfo",{method:"get",params:e}),E=(e,r=0)=>t("/treehole/article/updateArticle",{method:"post",data:{form:e,id:r}}),f=()=>t("/treehole/article/articleCreate",{method:"get"}),I=()=>t("/treehole/article/articleFollow",{method:"get"}),L=e=>t("/treehole/article/updateArticleStatus",{method:"post",data:e});export{m as a,h as b,f as c,I as d,g,L as p,E as u};