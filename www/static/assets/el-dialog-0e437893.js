import{aK as Me,j as V,G as Be,I as q,V as oe,a5 as Pe,O as re,be as $e,aa as x,bf as fe,D as U,bg as Ue,bh as Ye,bi as Ke,bj as He,bd as J,as as Le,e as A,d as K,$ as ke,f as n,Q as ue,z as ne,aw as Ve,P as D,M as ce,N as se,b as H,a0 as ze,a1 as je,U as We,b0 as ve,s as Y,o as $,c as Q,a as X,h as N,t as Xe,J as B,A as ae,a2 as Ge,S as xe,x as le,i as Ae,bk as qe,a$ as Ze,bl as Je,aj as Qe,bm as et,bn as tt,bo as me,b3 as ot,w as nt,W as st,bp as at,v as lt,Y as rt,Z as ut,R as ct}from"./index-eb6fc829.js";import{t as it,j as dt,U as Oe,b as pe,u as Ee}from"./file-6854be2b.js";import{a as ft}from"./scroll-e839d190.js";const vt=(...e)=>t=>{e.forEach(s=>{Me(s)?s(t):s.value=t})};var G=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(G||{});const mt=(e,t,s)=>{let a={offsetX:0,offsetY:0};const l=c=>{const v=c.clientX,S=c.clientY,{offsetX:m,offsetY:g}=a,i=e.value.getBoundingClientRect(),b=i.left,o=i.top,f=i.width,p=i.height,E=document.documentElement.clientWidth,y=document.documentElement.clientHeight,R=-b+m,I=-o+g,O=E-b-f+m,F=y-o-p+g,k=w=>{const d=Math.min(Math.max(m+w.clientX-v,R),O),h=Math.min(Math.max(g+w.clientY-S,I),F);a={offsetX:d,offsetY:h},e.value.style.transform=`translate(${oe(d)}, ${oe(h)})`},T=()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",T)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",T)},r=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",l)},u=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",l)};V(()=>{Be(()=>{s.value?r():u()})}),q(()=>{u()})},pt=(e,t={})=>{Pe(e)||it("[useLockscreen]","You need to pass a ref param to this function");const s=t.ns||re("popup"),a=$e(()=>s.bm("parent","hidden"));if(!x||fe(document.body,a.value))return;let l=0,r=!1,u="0";const c=()=>{setTimeout(()=>{He(document==null?void 0:document.body,a.value),r&&document&&(document.body.style.width=u)},200)};U(e,v=>{if(!v){c();return}r=!fe(document.body,a.value),r&&(u=document.body.style.width),l=ft(s.namespace.value);const S=document.documentElement.clientHeight<document.body.scrollHeight,m=Ue(document.body,"overflowY");l>0&&(S||m==="scroll")&&r&&(document.body.style.width=`calc(100% - ${l}px)`),Ye(document.body,a.value)}),Ke(()=>c())},De=e=>{if(!e)return{onClick:J,onMousedown:J,onMouseup:J};let t=!1,s=!1;return{onClick:u=>{t&&s&&e(u),t=s=!1},onMousedown:u=>{t=u.target===u.currentTarget},onMouseup:u=>{s=u.target===u.currentTarget}}};let P=[];const ye=e=>{const t=e;t.key===Le.esc&&P.forEach(s=>s(t))},Et=e=>{V(()=>{P.length===0&&document.addEventListener("keydown",ye),x&&P.push(e)}),q(()=>{P=P.filter(t=>t!==e),P.length===0&&x&&document.removeEventListener("keydown",ye)})},ee="focus-trap.focus-after-trapped",te="focus-trap.focus-after-released",yt="focus-trap.focusout-prevented",be={cancelable:!0,bubbles:!1},bt={cancelable:!0,bubbles:!1},Te="focusAfterTrapped",Ce="focusAfterReleased",Ie=Symbol("elFocusTrap"),ie=A(),Z=A(0),de=A(0);let z=0;const Fe=e=>{const t=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0||a===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)t.push(s.currentNode);return t},ge=(e,t)=>{for(const s of e)if(!Tt(s,t))return s},Tt=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Ct=e=>{const t=Fe(e),s=ge(t,e),a=ge(t.reverse(),e);return[s,a]},gt=e=>e instanceof HTMLInputElement&&"select"in e,_=(e,t)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),de.value=window.performance.now(),e!==s&&gt(e)&&t&&e.select()}};function Se(e,t){const s=[...e],a=e.indexOf(t);return a!==-1&&s.splice(a,1),s}const St=()=>{let e=[];return{push:a=>{const l=e[0];l&&a!==l&&l.pause(),e=Se(e,a),e.unshift(a)},remove:a=>{var l,r;e=Se(e,a),(r=(l=e[0])==null?void 0:l.resume)==null||r.call(l)}}},wt=(e,t=!1)=>{const s=document.activeElement;for(const a of e)if(_(a,t),document.activeElement!==s)return},we=St(),ht=()=>Z.value>de.value,j=()=>{ie.value="pointer",Z.value=window.performance.now()},he=()=>{ie.value="keyboard",Z.value=window.performance.now()},Lt=()=>(V(()=>{z===0&&(document.addEventListener("mousedown",j),document.addEventListener("touchstart",j),document.addEventListener("keydown",he)),z++}),q(()=>{z--,z<=0&&(document.removeEventListener("mousedown",j),document.removeEventListener("touchstart",j),document.removeEventListener("keydown",he))}),{focusReason:ie,lastUserFocusTimestamp:Z,lastAutomatedFocusTimestamp:de}),W=e=>new CustomEvent(yt,{...bt,detail:e}),kt=K({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[Te,Ce,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const s=A();let a,l;const{focusReason:r}=Lt();Et(o=>{e.trapped&&!u.paused&&t("release-requested",o)});const u={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},c=o=>{if(!e.loop&&!e.trapped||u.paused)return;const{key:f,altKey:p,ctrlKey:E,metaKey:y,currentTarget:R,shiftKey:I}=o,{loop:O}=e,F=f===Le.tab&&!p&&!E&&!y,k=document.activeElement;if(F&&k){const T=R,[w,d]=Ct(T);if(w&&d){if(!I&&k===d){const C=W({focusReason:r.value});t("focusout-prevented",C),C.defaultPrevented||(o.preventDefault(),O&&_(w,!0))}else if(I&&[w,T].includes(k)){const C=W({focusReason:r.value});t("focusout-prevented",C),C.defaultPrevented||(o.preventDefault(),O&&_(d,!0))}}else if(k===T){const C=W({focusReason:r.value});t("focusout-prevented",C),C.defaultPrevented||o.preventDefault()}}};ke(Ie,{focusTrapRef:s,onKeydown:c}),U(()=>e.focusTrapEl,o=>{o&&(s.value=o)},{immediate:!0}),U([s],([o],[f])=>{o&&(o.addEventListener("keydown",c),o.addEventListener("focusin",m),o.addEventListener("focusout",g)),f&&(f.removeEventListener("keydown",c),f.removeEventListener("focusin",m),f.removeEventListener("focusout",g))});const v=o=>{t(Te,o)},S=o=>t(Ce,o),m=o=>{const f=n(s);if(!f)return;const p=o.target,E=o.relatedTarget,y=p&&f.contains(p);e.trapped||E&&f.contains(E)||(a=E),y&&t("focusin",o),!u.paused&&e.trapped&&(y?l=p:_(l,!0))},g=o=>{const f=n(s);if(!(u.paused||!f))if(e.trapped){const p=o.relatedTarget;!dt(p)&&!f.contains(p)&&setTimeout(()=>{if(!u.paused&&e.trapped){const E=W({focusReason:r.value});t("focusout-prevented",E),E.defaultPrevented||_(l,!0)}},0)}else{const p=o.target;p&&f.contains(p)||t("focusout",o)}};async function i(){await ne();const o=n(s);if(o){we.push(u);const f=o.contains(document.activeElement)?a:document.activeElement;if(a=f,!o.contains(f)){const E=new Event(ee,be);o.addEventListener(ee,v),o.dispatchEvent(E),E.defaultPrevented||ne(()=>{let y=e.focusStartEl;Ve(y)||(_(y),document.activeElement!==y&&(y="first")),y==="first"&&wt(Fe(o),!0),(document.activeElement===f||y==="container")&&_(o)})}}}function b(){const o=n(s);if(o){o.removeEventListener(ee,v);const f=new CustomEvent(te,{...be,detail:{focusReason:r.value}});o.addEventListener(te,S),o.dispatchEvent(f),!f.defaultPrevented&&(r.value=="keyboard"||!ht()||o.contains(document.activeElement))&&_(a??document.body),o.removeEventListener(te,v),we.remove(u)}}return V(()=>{e.trapped&&i(),U(()=>e.trapped,o=>{o?i():b()})}),q(()=>{e.trapped&&b()}),{onKeydown:c}}});function At(e,t,s,a,l,r){return D(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ot=ue(kt,[["render",At],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);const Dt=ce({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:se([String,Array,Object])},zIndex:{type:se([String,Number])}}),It={click:e=>e instanceof MouseEvent},Ft="overlay";var Rt=K({name:"ElOverlay",props:Dt,emits:It,setup(e,{slots:t,emit:s}){const a=re(Ft),l=v=>{s("click",v)},{onClick:r,onMousedown:u,onMouseup:c}=De(e.customMaskEvent?void 0:l);return()=>e.mask?H("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:u,onMouseup:c},[D(t,"default")],G.STYLE|G.CLASS|G.PROPS,["onClick","onMouseup","onMousedown"]):ze("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[D(t,"default")])}});const Nt=Rt,Re=Symbol("dialogInjectionKey"),Ne=ce({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:je},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),_t={close:()=>!0},Mt=["aria-label"],Bt=["id"],Pt=K({name:"ElDialogContent"}),$t=K({...Pt,props:Ne,emits:_t,setup(e){const t=e,{t:s}=We(),{Close:a}=qe,{dialogRef:l,headerRef:r,bodyId:u,ns:c,style:v}=ve(Re),{focusTrapRef:S}=ve(Ie),m=vt(S,l),g=Y(()=>t.draggable);return mt(l,r,g),(i,b)=>($(),Q("div",{ref:n(m),class:N([n(c).b(),n(c).is("fullscreen",i.fullscreen),n(c).is("draggable",n(g)),n(c).is("align-center",i.alignCenter),{[n(c).m("center")]:i.center},i.customClass]),style:Ae(n(v)),tabindex:"-1"},[X("header",{ref_key:"headerRef",ref:r,class:N(n(c).e("header"))},[D(i.$slots,"header",{},()=>[X("span",{role:"heading",class:N(n(c).e("title"))},Xe(i.title),3)]),i.showClose?($(),Q("button",{key:0,"aria-label":n(s)("el.dialog.close"),class:N(n(c).e("headerbtn")),type:"button",onClick:b[0]||(b[0]=o=>i.$emit("close"))},[H(n(xe),{class:N(n(c).e("close"))},{default:B(()=>[($(),ae(Ge(i.closeIcon||n(a))))]),_:1},8,["class"])],10,Mt)):le("v-if",!0)],2),X("div",{id:n(u),class:N(n(c).e("body"))},[D(i.$slots,"default")],10,Bt),i.$slots.footer?($(),Q("footer",{key:0,class:N(n(c).e("footer"))},[D(i.$slots,"footer")],2)):le("v-if",!0)],6))}});var Ut=ue($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Yt=ce({...Ne,appendToBody:{type:Boolean,default:!1},beforeClose:{type:se(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Kt={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Oe]:e=>Ze(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ht=(e,t)=>{const a=Je().emit,{nextZIndex:l}=Qe();let r="";const u=pe(),c=pe(),v=A(!1),S=A(!1),m=A(!1),g=A(e.zIndex||l());let i,b;const o=et("namespace",tt),f=Y(()=>{const L={},M=`--${o.value}-dialog`;return e.fullscreen||(e.top&&(L[`${M}-margin-top`]=e.top),e.width&&(L[`${M}-width`]=oe(e.width))),L}),p=Y(()=>e.alignCenter?{display:"flex"}:{});function E(){a("opened")}function y(){a("closed"),a(Oe,!1),e.destroyOnClose&&(m.value=!1)}function R(){a("close")}function I(){b==null||b(),i==null||i(),e.openDelay&&e.openDelay>0?{stop:i}=me(()=>T(),e.openDelay):T()}function O(){i==null||i(),b==null||b(),e.closeDelay&&e.closeDelay>0?{stop:b}=me(()=>w(),e.closeDelay):w()}function F(){function L(M){M||(S.value=!0,v.value=!1)}e.beforeClose?e.beforeClose(L):O()}function k(){e.closeOnClickModal&&F()}function T(){x&&(v.value=!0)}function w(){v.value=!1}function d(){a("openAutoFocus")}function h(){a("closeAutoFocus")}function C(L){var M;((M=L.detail)==null?void 0:M.focusReason)==="pointer"&&L.preventDefault()}e.lockScroll&&pt(v);function _e(){e.closeOnPressEscape&&F()}return U(()=>e.modelValue,L=>{L?(S.value=!1,I(),m.value=!0,g.value=e.zIndex?g.value++:l(),ne(()=>{a("open"),t.value&&(t.value.scrollTop=0)})):v.value&&O()}),U(()=>e.fullscreen,L=>{t.value&&(L?(r=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=r)}),V(()=>{e.modelValue&&(v.value=!0,m.value=!0,I())}),{afterEnter:E,afterLeave:y,beforeLeave:R,handleClose:F,onModalClick:k,close:O,doClose:w,onOpenAutoFocus:d,onCloseAutoFocus:h,onCloseRequested:_e,onFocusoutPrevented:C,titleId:u,bodyId:c,closed:S,style:f,overlayDialogStyle:p,rendered:m,visible:v,zIndex:g}},Vt=["aria-label","aria-labelledby","aria-describedby"],zt=K({name:"ElDialog",inheritAttrs:!1}),jt=K({...zt,props:Yt,emits:Kt,setup(e,{expose:t}){const s=e,a=ot();Ee({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},Y(()=>!!a.title)),Ee({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},Y(()=>!!s.customClass));const l=re("dialog"),r=A(),u=A(),c=A(),{visible:v,titleId:S,bodyId:m,style:g,overlayDialogStyle:i,rendered:b,zIndex:o,afterEnter:f,afterLeave:p,beforeLeave:E,handleClose:y,onModalClick:R,onOpenAutoFocus:I,onCloseAutoFocus:O,onCloseRequested:F,onFocusoutPrevented:k}=Ht(s,r);ke(Re,{dialogRef:r,headerRef:u,bodyId:m,ns:l,rendered:b,style:g});const T=De(R),w=Y(()=>s.draggable&&!s.fullscreen);return t({visible:v,dialogContentRef:c}),(d,h)=>($(),ae(ut,{to:"body",disabled:!d.appendToBody},[H(rt,{name:"dialog-fade",onAfterEnter:n(f),onAfterLeave:n(p),onBeforeLeave:n(E),persisted:""},{default:B(()=>[nt(H(n(Nt),{"custom-mask-event":"",mask:d.modal,"overlay-class":d.modalClass,"z-index":n(o)},{default:B(()=>[X("div",{role:"dialog","aria-modal":"true","aria-label":d.title||void 0,"aria-labelledby":d.title?void 0:n(S),"aria-describedby":n(m),class:N(`${n(l).namespace.value}-overlay-dialog`),style:Ae(n(i)),onClick:h[0]||(h[0]=(...C)=>n(T).onClick&&n(T).onClick(...C)),onMousedown:h[1]||(h[1]=(...C)=>n(T).onMousedown&&n(T).onMousedown(...C)),onMouseup:h[2]||(h[2]=(...C)=>n(T).onMouseup&&n(T).onMouseup(...C))},[H(n(Ot),{loop:"",trapped:n(v),"focus-start-el":"container",onFocusAfterTrapped:n(I),onFocusAfterReleased:n(O),onFocusoutPrevented:n(k),onReleaseRequested:n(F)},{default:B(()=>[n(b)?($(),ae(Ut,st({key:0,ref_key:"dialogContentRef",ref:c},d.$attrs,{"custom-class":d.customClass,center:d.center,"align-center":d.alignCenter,"close-icon":d.closeIcon,draggable:n(w),fullscreen:d.fullscreen,"show-close":d.showClose,title:d.title,onClose:n(y)}),at({header:B(()=>[d.$slots.title?D(d.$slots,"title",{key:1}):D(d.$slots,"header",{key:0,close:n(y),titleId:n(S),titleClass:n(l).e("title")})]),default:B(()=>[D(d.$slots,"default")]),_:2},[d.$slots.footer?{name:"footer",fn:B(()=>[D(d.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):le("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Vt)]),_:3},8,["mask","overlay-class","z-index"]),[[lt,n(v)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Wt=ue(jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const qt=ct(Wt);export{Nt as E,Kt as a,Ot as b,qt as c,Yt as d,mt as e,pt as f,De as g,Ht as u};
