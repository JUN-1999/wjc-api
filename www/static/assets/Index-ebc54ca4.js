import{_ as z}from"./muyu-df18c9f0.js";import{d as C,e as o,o as r,c as d,a as e,t as h,f as n,F as b,r as w,h as _,i as M,u as E,_ as L}from"./index-772a5f49.js";const T="/assets/chuizi-765603b5.png",B="/assets/OIP-8f3c301b.png",P="/assets/muyu-b5c3f5b9.mp3",A={class:"Electronic-Woodfish"},F={class:"num"},G={id:"add"},S={class:"auto-text"},D=C({__name:"Index",setup(N){const x=E();let u=o(0),i=o(!1),f=0,c=o([]);const s=new Audio(P);let t=o(!1);const l=o({top:0,left:0}),v=function(){let a=!1;return i.value=!0,c.value.push(f),f++,u.value++,s.pause(),s.currentTime=0,s.play(),new Promise(p=>{s.addEventListener("ended",()=>{a||(a=!0,c.value.shift(),i.value=!1,setTimeout(()=>{p("sound ended")},1e3))})})};(function(){window.onmousemove=function(a){l.value.left=a.x,l.value.top=a.y}})();const g=function(){u.value=0},y=function(){t.value=!t.value,t.value&&m()},m=async function(){await v(),t.value&&m()},k=function(){t.value=!1,s.pause(),s.currentTime=0,x.push("/")};return(a,p)=>(r(),d("div",A,[e("div",F,[e("div",{class:"reset",onClick:g},"重置"),e("div",null,h(n(u)),1)]),e("div",G,[(r(!0),d(b,null,w(n(c),I=>(r(),d("div",{key:I,class:"text"},"+1"))),128))]),e("img",{draggable:"false",id:"muyuIMG",onClick:v,class:_(n(i)?"scale":""),src:z,alt:""},null,2),e("img",{draggable:"false",style:M({top:l.value.top+"px",left:l.value.left+"px"}),class:_(n(i)?"muyuhit":""),id:"chuiziIMG",src:T,alt:""},null,6),e("div",{class:"toLeft",onClick:k},"返回"),e("div",{class:"auto",onClick:y},[e("div",S,"自动积德："+h(n(t)?"开":"关"),1),e("img",{class:_(["auto-img",n(t)?"auto-img-a":""]),src:B,alt:""},null,2)])]))}});const W=L(D,[["__scopeId","data-v-7644a6f3"]]);export{W as default};
