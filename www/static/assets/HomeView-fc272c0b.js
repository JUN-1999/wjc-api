import{a as k}from"./article-7e414216.js";import{E as H}from"./el-image-viewer-08da97d8.js";import{_ as V}from"./EditArticle1-e2267e45.js";import{d as w,e as n,j as D,E as T,o as a,c,a as e,F as m,r as y,f as I,i as L,t as h,q as N,x as E,b as z,p as M,k as U,y as B,u as P,_ as R}from"./index-652e1b4d.js";import{V as O}from"./ViewVideo-8776cce8.js";import"./scroll-6be52854.js";const q="/assets/watermelon-a30908d6.png",F="/assets/find-7414855f.png",$="/assets/ToTop-c0814b53.svg",_=u=>(M("data-v-aeaf64f2"),u=u(),U(),u),j={class:"table"},J=_(()=>e("h1",null,[B("瓜大棚"),e("img",{src:q,alt:""})],-1)),G=_(()=>e("div",{class:"text"},"种瓜",-1)),K=_(()=>e("img",{src:V,alt:"新增瓜"},null,-1)),Q=[G,K],W=_(()=>e("div",{class:"input-group"},[e("input",{type:"search",placeholder:"请输入..."}),e("img",{src:F,alt:""})],-1)),X=_(()=>e("thead",null,[e("tr",{style:{position:"relative","z-index":"20"}},[e("th",null,"用户"),e("th",null,"信息"),e("th",null,"日期"),e("th",null,"操作")])],-1)),Y={class:"user-info"},Z=["src"],ee={class:"brief"},te={class:"brief-title"},se=["innerHTML"],le={class:"brief-imgs"},oe=["onClick"],ae=_(()=>e("img",{src:$,alt:""},null,-1)),re=[ae],ie=w({__name:"HomeView",setup(u){const f=P();let d=n(1),C=n(5),p=n([]),r=n(0),v=n(!1);n(!1),D(async()=>{await g()});const S=()=>[f.push("/TreeHole/TreeHoleIndex/ArticleEdit/0")],b=async s=>{f.push(`/TreeHole/TreeHoleIndex/ArticleDetail/${s.ARTICLE_UUID}`)},g=async()=>{if(v.value)console.log("1"),T({message:"没有更多瓜了",type:"info"});else{let s=await k({page:d.value,pageSize:C.value});if(s.data.data.length===0)console.log("2"),v.value=!0,T({message:"没有更多瓜了",type:"info"});else{let i=s.data.data;i=i.map(o=>(o.PICS=JSON.parse(o.PICS).slice(0,3),o)),p.value=[...p.value,...i]}}setTimeout(()=>{clearTimeout(r.value),r.value=0},1500)},A=s=>{r.value==0&&(r.value=setTimeout(()=>{const{scrollTop:i,clientHeight:o,scrollHeight:t}=s.target;i+o+20>=t?(d.value+=1,g()):(clearTimeout(r.value),r.value=0)},0))},x=()=>{document.querySelector(".shell").scrollTo({top:0,behavior:"smooth"})};return(s,i)=>{const o=H;return a(),c("div",j,[e("section",{class:"header"},[J,e("div",{class:"ArticleEdit",onClick:S},Q),W]),e("section",{class:"shell",onScroll:A},[e("table",null,[X,e("tbody",null,[(a(!0),c(m,null,y(I(p),t=>(a(),c("tr",{key:t.ARTICLE_UUID},[e("td",Y,[e("img",{class:"avatar",src:t.AVATAR,alt:""},null,8,Z),e("span",null,h(t.ACCOUNT),1)]),e("td",ee,[e("div",te,h(t.TITLE),1),e("div",{class:"brief-text",innerHTML:t.CONTENT},null,8,se),e("div",le,[(a(!0),c(m,null,y(t.PICS,(l,ne)=>(a(),c(m,null,[l.type=="img"?(a(),N(o,{lazy:"",class:"brief-img",key:l.url,src:l.url,"preview-src-list":[l.url],"zoom-rate":1.1,fit:"cover"},null,8,["src","preview-src-list","zoom-rate"])):E("",!0),l.type=="video"?(a(),c("div",{class:"brief-img",key:l.url},[z(O,{src:l.url},null,8,["src"])])):E("",!0)],64))),256))])]),e("td",null,h(t.UPDATE_TIME||t.ADD_TIME),1),e("td",null,[e("p",{class:"button",onClick:l=>b(t)},"查看",8,oe)])]))),128))])])],32),e("div",{class:"toTop",onClick:x,style:L({opacity:I(d)>1?1:0})},re,4)])}}});const he=R(ie,[["__scopeId","data-v-aeaf64f2"]]);export{he as default};
