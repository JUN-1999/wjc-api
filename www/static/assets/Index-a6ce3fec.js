import{d as b,r as a,c as d,a as e,t as m,u as s,F as I,b as k,n as _,_ as z,e as C,o as v,f as M,g as w}from"./index-2efbfeb6.js";const B="/assets/chuizi-765603b5.png",L="/assets/OIP-8f3c301b.png",A="/assets/muyu-b5c3f5b9.mp3",E={class:"Electronic-Woodfish"},F={class:"num"},G={id:"add"},P={class:"auto-text"},S=b({__name:"Index",setup(T){const p=M();let i=a(0),o=a(!1),f=0,u=a([]),c=0,t=a(!1);const l=a({top:0,left:0}),r=function(){o.value=!0,u.value.push(f),f++,i.value++,new Audio(A).play(),setTimeout(()=>{u.value.shift(),o.value=!1},250)};(function(){window.onmousemove=function(n){l.value.left=n.x,l.value.top=n.y}})();const h=function(){i.value=0},g=function(){t.value?(t.value=!t.value,clearInterval(c),c=0):(t.value=!t.value,r(),c=setInterval(()=>{r()},1e3))},x=function(){p.push("/")};return(n,N)=>(v(),d("div",E,[e("div",F,[e("div",{class:"reset",onClick:h},"重置"),e("div",null,m(s(i)),1)]),e("div",G,[(v(!0),d(I,null,k(s(u),y=>(v(),d("div",{key:y,class:"text"},"+1"))),128))]),e("img",{draggable:"false",id:"muyuIMG",onClick:r,class:_(s(o)?"scale":""),src:z,alt:""},null,2),e("img",{draggable:"false",style:C({top:l.value.top+"px",left:l.value.left+"px"}),class:_(s(o)?"muyuhit":""),id:"chuiziIMG",src:B,alt:""},null,6),e("div",{class:"toLeft",onClick:x},"返回"),e("div",{class:"auto",onClick:g},[e("div",P,"自动积德："+m(s(t)?"开":"关"),1),e("img",{class:_(["auto-img",s(t)?"auto-img-a":""]),src:L,alt:""},null,2)])]))}});const R=w(S,[["__scopeId","data-v-6db5847c"]]);export{R as default};