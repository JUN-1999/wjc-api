import{d as p,e as r,o as m,c as d,a as s,w as u,v,f as c,aj as k,az as f,h as C,_ as x}from"./index-df65ba1e.js";const D=["src"],V={class:"tip"},y={class:"header"},I={class:"content"},B=["src"],M=p({__name:"ViewImg",props:{src:{type:String,default:""},showDelete:{type:Boolean,default:()=>!1}},emits:["imgDelete"],setup(t,{emit:g}){let n=r(!1),i=r(!1);const a=o=>{n.value=o},_=()=>{i.value=!0},w=()=>{i.value=!1},h=o=>{g("imgDelete",o)};return(o,e)=>(m(),d("div",{onClick:e[3]||(e[3]=f(l=>a(!0),["stop"])),onMouseenter:_,onMouseleave:w,class:"view-img"},[s("img",{id:"img",src:t.src},null,8,D),u(s("div",V,[s("i",{onClick:e[0]||(e[0]=l=>a(!0)),class:"iconfont icon-fangda"}),t.showDelete?(m(),d("i",{key:0,onClick:e[1]||(e[1]=l=>h(t.src)),class:"iconfont icon-shanchu"})):k("",!0)],512),[[v,c(i)]]),u(s("div",{class:C([{"max-img-show":c(n)},"max-img"])},[s("div",y,[s("i",{onClick:e[2]||(e[2]=f(l=>a(!1),["stop"])),class:"iconfont icon-guanbi"})]),s("div",I,[s("img",{src:t.src,alt:""},null,8,B)])],2),[[v,c(n)]])],32))}});const z=x(M,[["__scopeId","data-v-c7331e61"]]);export{z as V};