import{d as B,l as D,e as o,o as b,c as z,a as e,w as a,a4 as w,v as c,f as t,i as S,p as k,k as U,_ as C,t as N,bu as H,bv as O,bw as P,bx as F,E as G,j as J,q,x as E,h as K,u as Q}from"./index-9d7999d7.js";const W="/assets/login_news-6a2810d6.svg",X="/assets/wallhaven-0wlq8p-4811343e.jpg",Y="/assets/tree-52d65ee4.svg",R=n=>(k("data-v-9eb74269"),n=n(),U(),n),Z=R(()=>e("img",{src:Y,alt:""},null,-1)),ee={class:"account form-item"},se=R(()=>e("span",{class:"input-title"},"账号",-1)),te={class:"input-tip"},ae={class:"password form-item"},le=R(()=>e("span",{class:"input-title"},"密码",-1)),oe={class:"input-tip"},ne=B({__name:"IndexView",props:{zindex:{type:Number,required:!0}},emits:["login-success"],setup(n,{emit:y}){const d=D(),l=o({account:"",password:""});let p=o(0),s=o(0);const u=async()=>{if(l.value.account.trim())p.value=0;else return p.value=1,!1;if(l.value.password.trim())s.value=0;else return s.value=1,!1;await d.login(l.value)&&y("login-success")};return(g,_)=>(b(),z("div",{style:S({zIndex:n.zindex}),class:"login-box"},[Z,e("div",ee,[se,a(e("input",{placeholder:"请输入账号",type:"text","onUpdate:modelValue":_[0]||(_[0]=m=>l.value.account=m)},null,512),[[w,l.value.account,void 0,{trim:!0}]]),a(e("span",te,"请输入账号",512),[[c,t(p)==1]])]),e("div",ae,[le,a(e("input",{type:"password","onUpdate:modelValue":_[1]||(_[1]=m=>l.value.password=m)},null,512),[[w,l.value.password,void 0,{trim:!0}]]),a(e("span",oe,"请输入密码",512),[[c,t(s)==1]])]),e("div",{class:"log-btn",onClick:u}," 登录 ")],4))}});const ie=C(ne,[["__scopeId","data-v-9eb74269"]]),ue="/assets/sandbeach-ecc9a5f4.svg",x=n=>(k("data-v-43410ba2"),n=n(),U(),n),ce=x(()=>e("img",{class:"top-img",src:ue,alt:""},null,-1)),de={class:"account form-item"},re=x(()=>e("span",{class:"input-title"},"账号",-1)),pe={class:"input-tip"},_e={class:"input-tip"},ve={class:"password form-item"},me=x(()=>e("span",{class:"input-title"},"密码",-1)),fe={class:"input-tip"},he={class:"password form-item"},ge=x(()=>e("span",{class:"input-title"},"确认密码",-1)),we={class:"input-tip"},xe={class:"input-tip"},ye={class:"email form-item"},be=x(()=>e("span",{class:"input-title"},"邮箱",-1)),Ie={class:"input-tip"},$e={class:"input-tip"},Ve={class:"input-tip"},Be={class:"authcode form-item"},ze=x(()=>e("span",{class:"input-title"},"验证码",-1)),Se={class:"auth-code"},ke={class:"input-tip"},Ue=B({__name:"IndexView",props:{zindex:{type:Number,required:!0}},emits:["register-success"],setup(n,{emit:y}){let d=o(60),l=o(!1),p=o(0);const s=o({account:"",password:"",confirm_password:"",email:"",authcode:""});let u=o(0);const g=async()=>{s.value.account?(await H({account:s.value.account})).data?u.value=0:u.value=2:u.value=1};let _=o(0);const m=async()=>{s.value.password?_.value=0:_.value=1};let h=o(0);const $=()=>{s.value.confirm_password?s.value.password!=s.value.confirm_password?h.value=2:h.value=0:h.value=1};let r=o(0);const V=async()=>{const f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;s.value.email?f.test(s.value.email)?(await O({email:s.value.email})).data?r.value=0:r.value=2:r.value=3:r.value=1};let I=o(0);const T=()=>{s.value.authcode?I.value=0:I.value=1},L=f=>{const i=f.target.value;/^\d{0,6}$/.test(i)?s.value.authcode=i:s.value.authcode=i.substring(0,6)},M=async()=>{if(l.value)return!1;await V(),r.value==1?alert("请输入邮箱"):r.value==2?alert("当前邮箱已被使用，不能再注册"):r.value==3?alert("当前邮箱格式不正确"):(await P({email:s.value.email})).errno==0&&(l.value=!0,d.value=60,p.value=setInterval(()=>{d.value--,d.value==0&&(l.value=!1,d.value=60,clearInterval(p.value),p.value=0)},1e3))},j=async()=>{if(await g(),await m(),await $(),await V(),await T(),u.value==0&&_.value==0&&h.value==0&&r.value==0&&I.value==0){let f=await F(s.value);f.errno!=0?alert(f.errmsg):(G({message:"注册成功",type:"success"}),setTimeout(()=>{y("register-success")},800))}};return(f,i)=>(b(),z("div",{style:S({zIndex:n.zindex}),class:"register-box"},[ce,e("div",de,[re,a(e("input",{onBlur:g,placeholder:"请输入账号",type:"text","onUpdate:modelValue":i[0]||(i[0]=v=>s.value.account=v)},null,544),[[w,s.value.account]]),a(e("span",pe,"请输入账号",512),[[c,t(u)==1]]),a(e("span",_e,"当前账号已存在，请重新输入账号",512),[[c,t(u)==2]])]),e("div",ve,[me,a(e("input",{onBlur:m,type:"password","onUpdate:modelValue":i[1]||(i[1]=v=>s.value.password=v)},null,544),[[w,s.value.password]]),a(e("span",fe,"请输入密码",512),[[c,t(_)==1]])]),e("div",he,[ge,a(e("input",{onBlur:$,type:"password","onUpdate:modelValue":i[2]||(i[2]=v=>s.value.confirm_password=v)},null,544),[[w,s.value.confirm_password]]),a(e("span",we,"请输入确认密码",512),[[c,t(h)==1]]),a(e("span",xe,"两次密码不一致",512),[[c,t(h)==2]])]),e("div",ye,[be,a(e("input",{onBlur:V,type:"email",placeholder:"请输入邮箱","onUpdate:modelValue":i[3]||(i[3]=v=>s.value.email=v)},null,544),[[w,s.value.email]]),a(e("span",Ie,"请输入邮箱",512),[[c,t(r)==1]]),a(e("span",$e,"该邮箱已被使用",512),[[c,t(r)==2]]),a(e("span",Ve,"邮箱格式不正确",512),[[c,t(r)==3]])]),e("div",Be,[ze,e("div",Se,[a(e("input",{class:"auth-code-input",onInput:L,onBlur:T,type:"number",placeholder:"请输入验证码","onUpdate:modelValue":i[4]||(i[4]=v=>s.value.authcode=v)},null,544),[[w,s.value.authcode]]),e("div",{onClick:M,class:"post-authcode"},N(t(l)?t(d):"发送验证码"),1)]),a(e("span",ke,"请输入验证码",512),[[c,t(I)==1]])]),e("div",{class:"log-btn",onClick:j}," 注册 ")],4))}});const Ce=C(Ue,[["__scopeId","data-v-43410ba2"]]),A=n=>(k("data-v-3d13be6a"),n=n(),U(),n),Re={class:"center"},Te=A(()=>e("div",{class:"news"},[e("img",{src:W,alt:""})],-1)),qe={class:"input-box"},Ee={class:"iconfont icon-zhuce1"},Ne={class:"iconfont icon-dengluzhanghao"},Ae=A(()=>e("img",{class:"bg-img",src:X,alt:""},null,-1)),Le=B({__name:"IndexView",setup(n){const y=Q();let d=o(!0),l=o(!0),p=o(!1),s=o(!1),u=o(!0),g=o(!1),_=o(!1);const m=function(){u.value&&(u.value=!1,d.value?(p.value=!0,s.value=!0,l.value=!1,setTimeout(()=>{d.value=!1,u.value=!0},1e3)):(d.value=!0,l.value=!0,s.value=!1,setTimeout(()=>{p.value=!1,u.value=!0},1e3)))},h=function(){g.value=!0,y.push("/Treehole")};return J(()=>{_.value=!0}),($,r)=>(b(),z("div",{class:K([{login_success:t(g)},"box"])},[e("div",Re,[Te,e("div",qe,[t(d)?(b(),q(ie,{key:0,onLoginSuccess:h,zindex:t(l)?1:0},null,8,["zindex"])):E("",!0),t(p)?(b(),q(Ce,{key:1,onRegisterSuccess:m,zindex:t(s)?1:0},null,8,["zindex"])):E("",!0),e("div",{class:"changbox",onClick:m},[a(e("div",Ee,null,512),[[c,t(l)]]),a(e("div",Ne,null,512),[[c,t(s)]]),e("div",{style:S({"--color":t(l)?"#8cce72":"#7bb835"}),class:"changebox-text"},N(t(l)?"去注册":"去登录"),5)])])]),Ae],2))}});const je=C(Le,[["__scopeId","data-v-3d13be6a"]]);export{je as default};
