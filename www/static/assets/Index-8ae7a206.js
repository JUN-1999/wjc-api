import{d as j,e as i,o as r,c as u,a as c,F as g,r as w,f as a,h as b,w as I,v as k,t as C,u as M,_ as q}from"./index-bba2f74f.js";const B=[{icon:"dz",name:"刀宗",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/dz.html"},{icon:"btyz",name:"北天药宗",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/btyz.html"},{icon:"ytz",name:"衍天宗",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/ytz.html"},{icon:"lxg",name:"凌雪阁",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/lxg.html"},{icon:"pl",name:"蓬莱",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/pl.html"},{icon:"bd",name:"霸刀",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/bd.html"},{icon:"cy",name:"苍云",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/cangy.html"},{icon:"cg",name:"长歌",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/cg.html"},{icon:"mj",name:"明教",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/mj.html"},{icon:"gb",name:"丐帮",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/gb.html"},{icon:"wd",name:"五毒",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/wd.html"},{icon:"tm",name:"唐门",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/tm.html"},{icon:"cj",name:"藏剑",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/cj.html"},{icon:"tc",name:"天策",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/tc.html"},{icon:"sl",name:"少林",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/sl.html"},{icon:"chunyang",name:"纯阳",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/index.html"},{icon:"wh",name:"万花",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/wh.html"},{icon:"qx",name:"七秀",url:"https://jx3.xoyo.com/zt/2014/11/21/zt/menpai/qx.html"}],D={class:"main"},L={class:"mp-box"},A=["onMouseenter"],F=["onClick"],S=j({__name:"Index",setup(T){const _=M();let m=i(0),s=i(0);const p=B;let n=i(!0);const d=function(){if(!n.value)return!1;n.value=!1,s.value=-1;let e=0,x=p.length,t=0,o=30;const h=function(z){if(n.value)return!1;e<2?(m.value=t,t++,t%x==0&&(e++,t=0)):m.value=Math.floor(Math.random()*18);let l=z+3;l>300&&(l=300),setTimeout(()=>{h(l)},z)};h(o),setTimeout(()=>{n.value=!0},6e3)},y=function(e){window.open(e.url,"_blank")},f=function(e){s.value=e},v=function(){_.push("/")};return(e,x)=>(r(),u("div",D,[c("div",L,[(r(!0),u(g,null,w(a(p),(t,o)=>(r(),u("div",{class:b(["","mp-item "+t.icon+" "+(a(m)==o&&!a(n)?"active":"")]),key:t.icon,onMouseenter:()=>{f(o)}},[I(c("div",{onClick:()=>{y(t)},class:"mp-name"},C(t.name),9,F),[[k,(a(m)==o||a(s)==o)&&a(n)]])],42,A))),128))]),c("div",{class:"btn",onClick:d},"随机选择一个门派"),c("div",{class:"toLeft",onClick:v},"返回")]))}});const N=q(S,[["__scopeId","data-v-90ad7d42"]]);export{N as default};
