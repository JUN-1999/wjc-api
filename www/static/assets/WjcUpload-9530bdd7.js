import{a as j}from"./file-7340a9f9.js";import{d as W,e as r,o as i,c as m,a as l,w as b,v as k,f as h,x as S,X as M,h as $,_ as C,F as B,r as F,i as x,E as w,A as I,p as H,k as U}from"./index-bba2f74f.js";import{a as E,V as N}from"./ViewVideo-f4136f38.js";const z=["src"],G={class:"tip"},J={class:"header"},L={class:"content"},O=["src"],A=W({__name:"ViewImg",props:{src:{type:String,default:""},showDelete:{type:Boolean,default:()=>!1},loading:{type:Boolean,default:!1}},emits:["imgDelete"],setup(e,{emit:y}){const f=e;let p=r(!1),n=r(!1);const u=c=>{E({images:[f.src]})},o=()=>{n.value=!0},a=()=>{n.value=!1},v=c=>{y("imgDelete",c)};return(c,t)=>(i(),m("div",{onMouseenter:o,onMouseleave:a,class:"view-img"},[l("img",{id:"img",src:e.src},null,8,z),b(l("div",G,[l("i",{onClick:t[0]||(t[0]=d=>u()),class:"iconfont icon-fangda"}),e.showDelete?(i(),m("i",{key:0,onClick:t[1]||(t[1]=d=>v(e.src)),class:"iconfont icon-shanchu"})):S("",!0)],512),[[k,h(n)]]),b(l("div",{class:$([{"max-img-show":h(p)},"max-img"])},[l("div",J,[l("i",{onClick:t[2]||(t[2]=M(d=>u(),["stop"])),class:"iconfont icon-guanbi"})]),l("div",L,[l("img",{src:e.src,alt:""},null,8,O)])],2),[[k,h(p)]])],32))}}),X=C(A,[["__scopeId","data-v-a62a76f1"]]),q=e=>(H("data-v-fd877e40"),e=e(),U(),e),K=q(()=>l("i",{class:"iconfont icon-tianjia"},null,-1)),P=[K],Q=["accept"],R=W({__name:"WjcUpload",props:{pics:null,accept:{default:"image/*"},labelStyleWidth:null,labelStyleHeight:null},emits:["uploadSuccess","mediaDelete"],setup(e,{expose:y,emit:f}){const p=e,n="uploadIMG_"+Math.random()*1e3,u=r();let o=r(!1);const a=r(null),v=async()=>{var t,d,s;if(o.value=!0,(t=a.value)!=null&&t.files&&((d=a.value)==null?void 0:d.files.length)>0){w({message:"图片开始上传",type:"success"});const V=((s=a.value)==null?void 0:s.files)&&a.value.files[0],D=new FormData;D.append("file",V);let g=await j(D);if(o.value=!1,g.errno===0){w({message:"图片上传成功",type:"success"});let _=JSON.parse(JSON.stringify(p.pics));_.push({name:g.data.name,url:g.data.url,type:g.data.type}),f("uploadSuccess",_),a.value.value=""}}else o.value=!1,w({message:"取消上传"})},c=t=>{f("mediaDelete",t)};return y({wjcUpload:u,inputFile:a}),(t,d)=>(i(),m("div",{class:"wjc-upload",ref_key:"wjcUpload",ref:u},[(i(!0),m(B,null,F(e.pics,s=>(i(),m("div",{class:"input-label",key:s.name,style:x({width:e.labelStyleWidth?e.labelStyleWidth:"140px",height:e.labelStyleHeight?e.labelStyleHeight:"140px"})},[s.type=="img"?(i(),I(X,{key:0,loading:h(o),src:s.url,showDelete:!0,onImgDelete:c},null,8,["loading","src"])):S("",!0),s.type=="video"?(i(),I(N,{key:1,src:s.url,showDelete:!0,onVideoDelete:c},null,8,["src"])):S("",!0)],4))),128)),l("label",{style:x({width:e.labelStyleWidth?e.labelStyleWidth:"140px",height:e.labelStyleHeight?e.labelStyleHeight:"140px"}),for:n,class:"input-label"},P,4),l("input",{accept:e.accept,ref_key:"inputFile",ref:a,onChange:v,type:"file",name:"",id:n,style:{display:"none"}},null,40,Q)],512))}});const ee=C(R,[["__scopeId","data-v-fd877e40"]]);export{ee as W};
