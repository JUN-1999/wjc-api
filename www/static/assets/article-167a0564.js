import{S as s,bl as i,bu as u,a3 as t}from"./index-7b180df4.js";const d=["class","style"],p=/^on[A-Z]/,h=(e={})=>{const{excludeListeners:r=!1,excludeKeys:l}=e,n=s(()=>((l==null?void 0:l.value)||[]).concat(d)),a=i();return a?s(()=>{var o;return u(Object.entries((o=a.proxy)==null?void 0:o.$attrs).filter(([c])=>!n.value.includes(c)&&!(r&&p.test(c))))}):s(()=>({}))};const m=e=>t("/treehole/article/articleList",{method:"get",params:e}),g=e=>t("/treehole/article/articleInfo",{method:"get",params:e}),E=(e,r=0)=>t("/treehole/article/updateArticle",{method:"post",data:{form:e,id:r}}),f=()=>t("/treehole/article/articleCreate",{method:"get"}),L=()=>t("/treehole/article/articleFollow",{method:"get"}),b=e=>t("/treehole/article/updateArticleStatus",{method:"post",data:e});export{m as a,h as b,f as c,L as d,g,b as p,E as u};
