import{a as k}from"./article-a0929e5a.js";import{E as H}from"./el-image-viewer-2c32cfcf.js";import{_ as V}from"./EditArticle1-e2267e45.js";import{d as w,e as i,j as D,E as T,o as a,c as n,a as e,F as m,r as y,f as b,i as L,t as h,A as N,x as I,b as z,p as M,k as U,C as B,u as P,_ as R}from"./index-27c2f93e.js";import{V as O}from"./ViewVideo-a6f521cc.js";import"./scroll-1f77640a.js";const F="/assets/watermelon-a30908d6.png",$="/assets/find-7414855f.png",j="/assets/ToTop-c0814b53.svg",_=u=>(M("data-v-7bd74bca"),u=u(),U(),u),q={class:"table"},J=_(()=>e("h1",null,[B("瓜大棚"),e("img",{src:F,alt:""})],-1)),G=_(()=>e("div",{class:"text"},"种瓜",-1)),K=_(()=>e("img",{src:V,alt:"新增瓜"},null,-1)),Q=[G,K],W=_(()=>e("div",{class:"input-group"},[e("input",{type:"search",placeholder:"请输入..."}),e("img",{src:$,alt:""})],-1)),X=_(()=>e("thead",null,[e("tr",{style:{position:"relative","z-index":"20"}},[e("th",null,"用户"),e("th",null,"信息"),e("th",null,"日期"),e("th",null,"操作")])],-1)),Y={class:"user-info"},Z=["src"],ee={class:"brief"},te={class:"brief-title"},se=["innerHTML"],le={class:"brief-imgs"},oe=["onClick"],ae=_(()=>e("img",{src:j,alt:""},null,-1)),re=[ae],ce=w({__name:"HomeView",setup(u){const v=P();let d=i(1),C=i(5),p=i([]),r=i(0),f=i(!1);i(!1),D(async()=>{await g()});const E=()=>[v.push("/TreeHole/TreeHoleIndex/ArticleEdit/0")],A=async s=>{v.push(`/TreeHole/TreeHoleIndex/ArticleDetail/${s.ARTICLE_UUID}`)},g=async()=>{if(f.value)T({message:"没有更多瓜了",type:"info"});else{let s=await k({page:d.value,pageSize:C.value});if(s.data.data.length===0)f.value=!0,T({message:"没有更多瓜了",type:"info"});else{let c=s.data.data;c=c.map(o=>(o.PICS=JSON.parse(o.PICS).slice(0,3),o)),p.value=[...p.value,...c]}}setTimeout(()=>{clearTimeout(r.value),r.value=0},1500)},S=s=>{r.value==0&&(r.value=setTimeout(()=>{const{scrollTop:c,clientHeight:o,scrollHeight:t}=s.target;c+o+20>=t?(d.value+=1,g()):(clearTimeout(r.value),r.value=0)},0))},x=()=>{document.querySelector(".shell").scrollTo({top:0,behavior:"smooth"})};return(s,c)=>{const o=H;return a(),n("div",q,[e("section",{class:"header"},[J,e("div",{class:"ArticleEdit",onClick:E},Q),W]),e("section",{class:"shell",onScroll:S},[e("table",null,[X,e("tbody",null,[(a(!0),n(m,null,y(b(p),t=>(a(),n("tr",{key:t.ARTICLE_UUID},[e("td",Y,[e("img",{class:"avatar",src:t.AVATAR,alt:""},null,8,Z),e("span",null,h(t.ACCOUNT),1)]),e("td",ee,[e("div",te,h(t.TITLE),1),e("div",{class:"brief-text",innerHTML:t.CONTENT},null,8,se),e("div",le,[(a(!0),n(m,null,y(t.PICS,(l,ie)=>(a(),n(m,null,[l.type=="img"?(a(),N(o,{lazy:"",class:"brief-img",key:l.url,src:l.url,"preview-src-list":[l.url],"zoom-rate":1.1,fit:"cover"},null,8,["src","preview-src-list","zoom-rate"])):I("",!0),l.type=="video"?(a(),n("div",{class:"brief-img",key:l.url},[z(O,{src:l.url},null,8,["src"])])):I("",!0)],64))),256))])]),e("td",null,h(t.UPDATE_TIME||t.ADD_TIME),1),e("td",null,[e("p",{class:"button",onClick:l=>A(t)},"查看",8,oe)])]))),128))])])],32),e("div",{class:"toTop",onClick:x,style:L({opacity:b(d)>1?1:0})},re,4)])}}});const he=R(ce,[["__scopeId","data-v-7bd74bca"]]);export{he as default};
