import{aa as j,ab as _e,ac as ne,ad as Ee,J as pe,L as oe,ae as ge,af as fe,d as se,ag as de,ah as Le,ai as Ce,T as ye,M as we,aj as Te,e as T,ak as ze,z as xe,S as z,A as le,D as he,j as be,o as L,q as ue,b as g,H as S,a as E,h as w,f as t,i as ce,W as Se,x as O,Q as X,R as Oe,c as V,F as ae,al as Ne,am as Re,an as $e,ao as Ae,a1 as Be,ap as Me,aq as Ve,r as Xe,w as Ye,v as De,N as te,X as Fe,Y as We,O as ke,ar as q,as as P,at as He,P as Ie,au as Pe,t as je,V as qe,av as Ze,aw as Ue,ax as Ge}from"./index-7b180df4.js";import{b as Je}from"./article-167a0564.js";import{g as Ke}from"./scroll-0ce5bbb0.js";const Qe=(n,i)=>{if(!j||!n||!i)return!1;const s=n.getBoundingClientRect();let r;return i instanceof Element?r=i.getBoundingClientRect():r={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<r.bottom&&s.bottom>r.top&&s.right>r.left&&s.left<r.right};var et=/\s/;function tt(n){for(var i=n.length;i--&&et.test(n.charAt(i)););return i}var nt=/^\s+/;function at(n){return n&&n.slice(0,tt(n)+1).replace(nt,"")}var me=0/0,st=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,it=/^0o[0-7]+$/i,ot=parseInt;function ve(n){if(typeof n=="number")return n;if(_e(n))return me;if(ne(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=ne(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=at(n);var s=rt.test(n);return s||it.test(n)?ot(n.slice(2),s?2:8):st.test(n)?me:+n}var lt=function(){return Ee.Date.now()};const re=lt;var ut="Expected a function",ct=Math.max,ft=Math.min;function dt(n,i,s){var r,f,h,o,v,y,b=0,k=!1,p=!1,d=!0;if(typeof n!="function")throw new TypeError(ut);i=ve(i)||0,ne(s)&&(k=!!s.leading,p="maxWait"in s,h=p?ct(ve(s.maxWait)||0,i):h,d="trailing"in s?!!s.trailing:d);function m(l){var I=r,$=f;return r=f=void 0,b=l,o=n.apply($,I),o}function c(l){return b=l,v=setTimeout(R,i),k?m(l):o}function Y(l){var I=l-y,$=l-b,F=i-I;return p?ft(F,h-$):F}function N(l){var I=l-y,$=l-b;return y===void 0||I>=i||I<0||p&&$>=h}function R(){var l=re();if(N(l))return W(l);v=setTimeout(R,Y(l))}function W(l){return v=void 0,d&&r?m(l):(r=f=void 0,o)}function D(){v!==void 0&&clearTimeout(v),b=0,r=y=f=v=void 0}function Z(){return v===void 0?o:W(re())}function x(){var l=re(),I=N(l);if(r=arguments,f=this,y=l,I){if(v===void 0)return c(y);if(p)return clearTimeout(v),v=setTimeout(R,i),m(y)}return v===void 0&&(v=setTimeout(R,i)),o}return x.cancel=D,x.flush=Z,x}var mt="Expected a function";function ie(n,i,s){var r=!0,f=!0;if(typeof n!="function")throw new TypeError(mt);return ne(s)&&(r="leading"in s?!!s.leading:r,f="trailing"in s?!!s.trailing:f),dt(n,i,{leading:r,maxWait:i,trailing:f})}const vt=pe({urlList:{type:oe(Array),default:()=>ge([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),pt={close:()=>!0,switch:n=>fe(n)},gt=["src"],yt=se({name:"ElImageViewer"}),wt=se({...yt,props:vt,emits:pt,setup(n,{expose:i,emit:s}){const r=n,f={CONTAIN:{name:"contain",icon:de(Le)},ORIGINAL:{name:"original",icon:de(Ce)}},{t:h}=ye(),o=we("image-viewer"),{nextZIndex:v}=Te(),y=T(),b=T([]),k=ze(),p=T(!0),d=T(r.initialIndex),m=xe(f.CONTAIN),c=T({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=z(()=>{const{urlList:e}=r;return e.length<=1}),N=z(()=>d.value===0),R=z(()=>d.value===r.urlList.length-1),W=z(()=>r.urlList[d.value]),D=z(()=>{const{scale:e,deg:a,offsetX:u,offsetY:_,enableTransition:B}=c.value;let C=u/e,M=_/e;switch(a%360){case 90:case-270:[C,M]=[M,-C];break;case 180:case-180:[C,M]=[-C,-M];break;case 270:case-90:[C,M]=[-M,C];break}const H={transform:`scale(${e}) rotate(${a}deg) translate(${C}px, ${M}px)`,transition:B?"transform .3s":""};return m.value.name===f.CONTAIN.name&&(H.maxWidth=H.maxHeight="100%"),H}),Z=z(()=>fe(r.zIndex)?r.zIndex:v());function x(){I(),s("close")}function l(){const e=ie(u=>{switch(u.code){case P.esc:r.closeOnPressEscape&&x();break;case P.space:G();break;case P.left:Q();break;case P.up:A("zoomIn");break;case P.right:ee();break;case P.down:A("zoomOut");break}}),a=ie(u=>{const _=u.deltaY||u.deltaX;A(_<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});k.run(()=>{q(document,"keydown",e),q(document,"wheel",a)})}function I(){k.stop()}function $(){p.value=!1}function F(e){p.value=!1,e.target.alt=h("el.image.error")}function K(e){if(p.value||e.button!==0||!y.value)return;c.value.enableTransition=!1;const{offsetX:a,offsetY:u}=c.value,_=e.pageX,B=e.pageY,C=ie(H=>{c.value={...c.value,offsetX:a+H.pageX-_,offsetY:u+H.pageY-B}}),M=q(document,"mousemove",C);q(document,"mouseup",()=>{M()}),e.preventDefault()}function U(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function G(){if(p.value)return;const e=He(f),a=Object.values(f),u=m.value.name,B=(a.findIndex(C=>C.name===u)+1)%e.length;m.value=f[e[B]],U()}function J(e){const a=r.urlList.length;d.value=(e+a)%a}function Q(){N.value&&!r.infinite||J(d.value-1)}function ee(){R.value&&!r.infinite||J(d.value+1)}function A(e,a={}){if(p.value)return;const{zoomRate:u,rotateDeg:_,enableTransition:B}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":c.value.scale>.2&&(c.value.scale=Number.parseFloat((c.value.scale/u).toFixed(3)));break;case"zoomIn":c.value.scale<7&&(c.value.scale=Number.parseFloat((c.value.scale*u).toFixed(3)));break;case"clockwise":c.value.deg+=_;break;case"anticlockwise":c.value.deg-=_;break}c.value.enableTransition=B}return le(W,()=>{he(()=>{const e=b.value[0];e!=null&&e.complete||(p.value=!0)})}),le(d,e=>{U(),s("switch",e)}),be(()=>{var e,a;l(),(a=(e=y.value)==null?void 0:e.focus)==null||a.call(e)}),i({setActiveItem:J}),(e,a)=>(L(),ue(We,{to:"body",disabled:!e.teleported},[g(Fe,{name:"viewer-fade",appear:""},{default:S(()=>[E("div",{ref_key:"wrapper",ref:y,tabindex:-1,class:w(t(o).e("wrapper")),style:ce({zIndex:t(Z)})},[E("div",{class:w(t(o).e("mask")),onClick:a[0]||(a[0]=Se(u=>e.hideOnClickModal&&x(),["self"]))},null,2),O(" CLOSE "),E("span",{class:w([t(o).e("btn"),t(o).e("close")]),onClick:x},[g(t(X),null,{default:S(()=>[g(t(Oe))]),_:1})],2),O(" ARROW "),t(Y)?O("v-if",!0):(L(),V(ae,{key:0},[E("span",{class:w([t(o).e("btn"),t(o).e("prev"),t(o).is("disabled",!e.infinite&&t(N))]),onClick:Q},[g(t(X),null,{default:S(()=>[g(t(Ne))]),_:1})],2),E("span",{class:w([t(o).e("btn"),t(o).e("next"),t(o).is("disabled",!e.infinite&&t(R))]),onClick:ee},[g(t(X),null,{default:S(()=>[g(t(Re))]),_:1})],2)],64)),O(" ACTIONS "),E("div",{class:w([t(o).e("btn"),t(o).e("actions")])},[E("div",{class:w(t(o).e("actions__inner"))},[g(t(X),{onClick:a[1]||(a[1]=u=>A("zoomOut"))},{default:S(()=>[g(t($e))]),_:1}),g(t(X),{onClick:a[2]||(a[2]=u=>A("zoomIn"))},{default:S(()=>[g(t(Ae))]),_:1}),E("i",{class:w(t(o).e("actions__divider"))},null,2),g(t(X),{onClick:G},{default:S(()=>[(L(),ue(Be(t(m).icon)))]),_:1}),E("i",{class:w(t(o).e("actions__divider"))},null,2),g(t(X),{onClick:a[3]||(a[3]=u=>A("anticlockwise"))},{default:S(()=>[g(t(Me))]),_:1}),g(t(X),{onClick:a[4]||(a[4]=u=>A("clockwise"))},{default:S(()=>[g(t(Ve))]),_:1})],2)],2),O(" CANVAS "),E("div",{class:w(t(o).e("canvas"))},[(L(!0),V(ae,null,Xe(e.urlList,(u,_)=>Ye((L(),V("img",{ref_for:!0,ref:B=>b.value[_]=B,key:u,src:u,style:ce(t(D)),class:w(t(o).e("img")),onLoad:$,onError:F,onMousedown:K},null,46,gt)),[[De,_===d.value]])),128))],2),te(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ht=ke(wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const bt=Ie(ht),kt=pe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:oe([String,Object])},previewSrcList:{type:oe(Array),default:()=>ge([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),It={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>fe(n),close:()=>!0,show:()=>!0},_t=["src","loading"],Et={key:0},Lt=se({name:"ElImage",inheritAttrs:!1}),Ct=se({...Lt,props:kt,emits:It,setup(n,{emit:i}){const s=n;let r="";const{t:f}=ye(),h=we("image"),o=Pe(),v=Je(),y=T(),b=T(!1),k=T(!0),p=T(!1),d=T(),m=T(),c=j&&"loading"in HTMLImageElement.prototype;let Y,N;const R=z(()=>o.style),W=z(()=>{const{fit:e}=s;return j&&e?{objectFit:e}:{}}),D=z(()=>{const{previewSrcList:e}=s;return Array.isArray(e)&&e.length>0}),Z=z(()=>{const{previewSrcList:e,initialIndex:a}=s;let u=a;return a>e.length-1&&(u=0),u}),x=z(()=>s.loading==="eager"?!1:!c&&s.loading==="lazy"||s.lazy),l=()=>{j&&(k.value=!0,b.value=!1,y.value=s.src)};function I(e){k.value=!1,b.value=!1,i("load",e)}function $(e){k.value=!1,b.value=!0,i("error",e)}function F(){Qe(d.value,m.value)&&(l(),G())}const K=Ge(F,200);async function U(){var e;if(!j)return;await he();const{scrollContainer:a}=s;Ze(a)?m.value=a:Ue(a)&&a!==""?m.value=(e=document.querySelector(a))!=null?e:void 0:d.value&&(m.value=Ke(d.value)),m.value&&(Y=q(m,"scroll",K),setTimeout(()=>F(),100))}function G(){!j||!m.value||!K||(Y==null||Y(),m.value=void 0)}function J(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function Q(){D.value&&(N=q("wheel",J,{passive:!1}),r=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,i("show"))}function ee(){N==null||N(),document.body.style.overflow=r,p.value=!1,i("close")}function A(e){i("switch",e)}return le(()=>s.src,()=>{x.value?(k.value=!0,b.value=!1,G(),U()):l()}),be(()=>{x.value?U():l()}),(e,a)=>(L(),V("div",{ref_key:"container",ref:d,class:w([t(h).b(),e.$attrs.class]),style:ce(t(R))},[b.value?te(e.$slots,"error",{key:0},()=>[E("div",{class:w(t(h).e("error"))},je(t(f)("el.image.error")),3)]):(L(),V(ae,{key:1},[y.value!==void 0?(L(),V("img",qe({key:0},t(v),{src:y.value,loading:e.loading,style:t(W),class:[t(h).e("inner"),t(D)&&t(h).e("preview"),k.value&&t(h).is("loading")],onClick:Q,onLoad:I,onError:$}),null,16,_t)):O("v-if",!0),k.value?(L(),V("div",{key:1,class:w(t(h).e("wrapper"))},[te(e.$slots,"placeholder",{},()=>[E("div",{class:w(t(h).e("placeholder"))},null,2)])],2)):O("v-if",!0)],64)),t(D)?(L(),V(ae,{key:2},[p.value?(L(),ue(t(bt),{key:0,"z-index":e.zIndex,"initial-index":t(Z),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:ee,onSwitch:A},{default:S(()=>[e.$slots.viewer?(L(),V("div",Et,[te(e.$slots,"viewer")])):O("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}});var Tt=ke(Ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Ot=Ie(Tt);export{Ot as E};
