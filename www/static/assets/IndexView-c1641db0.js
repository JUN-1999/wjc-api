import{R as w,d as y,l as J,e as E,J as b,o,c,a as e,f as A,w as x,S as V,h as F,b as f,E as H,p as T,k as O,_ as B,j as D,C as Z,t as p,F as h,r as Q,T as P,q as R,x as g,y as q,Q as z,u as $}from"./index-f6354138.js";import{g as K}from"./article-1579b850.js";import{W}from"./WjcUpload-79553446.js";import{E as N}from"./el-image-viewer-3c1c1305.js";import{V as M}from"./ViewVideo-2895b5e7.js";import"./file-90de8626.js";import"./scroll-92bf0dd8.js";const X=t=>w("/treehole/comment/sendComment",{method:"post",data:t}),j=t=>w("/treehole/comment/commentList",{method:"get",params:t}),Y=t=>(T("data-v-3d696b6c"),t=t(),O(),t),G={class:"comment"},ee={class:"comment-input"},te={class:"avatar"},se=["src"],oe=["placeholder"],ne={class:"comment-media"},le=Y(()=>e("div",{class:"comment-title"},"媒体上传",-1)),ce=y({__name:"CommentInput",props:{articleuuid:{default:""},toUserUUID:{default:""},toUserName:{default:""},fatherCommentUUID:{default:""},flag:{default:"out"}},emits:["successComment"],setup(t,{emit:U}){const a=t,i=J(),m="留下你精彩的评论吧",I=E(""),_=E(!1),C=E(!1),n=E([]);b(I,(s,l)=>{s?C.value=!0:C.value=!1});const v=async()=>{var s,l,u;if(I.value=="")H({message:"评论不能为空",type:"warning"});else{const r=I.value,S=n.value,d={AVATAR:(s=i.userInfo)==null?void 0:s.AVATAR,COMMENT:r,PICS:S,ADD_TIME:"刚刚",ACCOUNT:(l=i.userInfo)==null?void 0:l.ACCOUNT,COMMENT_UUID:Date.now()+"",ARTICLE_UUID:a.articleuuid,USER_UUID:(u=i.userInfo)==null?void 0:u.USER_UUID,USERINFO:{ACCOUNT:a.toUserName,AVATAR:""}};console.log("newComment",d),await X({to_user_uuid:a.toUserUUID,father_comment_uuid:a.fatherCommentUUID,comment:r,article_uuid:a.articleuuid,PICS:JSON.stringify(S)}),I.value="",_.value=!0,n.value=[],U("successComment",d)}},k=s=>{n.value=JSON.parse(JSON.stringify(s))};return(s,l)=>{var u;return o(),c("div",G,[e("div",ee,[e("div",te,[e("img",{src:(u=A(i).userInfo)==null?void 0:u.AVATAR,alt:""},null,8,se)]),x(e("input",{placeholder:`${a.toUserUUID?"@"+a.toUserName+"  ":""}`+m,class:"comment_input","onUpdate:modelValue":l[0]||(l[0]=r=>I.value=r),ref:"content"},null,8,oe),[[V,I.value]]),e("div",{class:F(["comment_input_right",C.value?"can-send":"not-can-send"]),onClick:v}," 评论 ",2)]),e("div",ne,[le,f(W,{"label-style-width":"80px","label-style-height":"80px",accept:"video/*,image/*",onUploadSuccess:k,pics:n.value},null,8,["pics"])])])}}});const L=B(ce,[["__scopeId","data-v-3d696b6c"]]),ie="/assets/follow-afc670cf.svg",ae="/assets/not_follow-e1456934.svg",re="data:image/png;base64,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",me=t=>(T("data-v-b165802d"),t=t(),O(),t),ue={class:"acticle-info"},Ie={class:"left"},_e=["src"],de={style:{width:"50px","text-align":"center","word-wrap":"break-word"}},Ce={class:"right"},Ae={class:"tool"},Ee=me(()=>e("img",{title:"聊天室",class:"tool-img",src:re,alt:"聊天室"},null,-1)),Ue={class:"name"},ge={class:"time"},pe={class:"content"},ve=["innerHTML"],Se={class:"imgs"},fe=y({__name:"ArticleInfo",props:{articleInfo:null},setup(t){const U=t,a=J();D(()=>{a.follow||a.getFollow()});const i=Z(()=>a.follow?a.follow.includes(U.articleInfo.ARTICLE_UUID):!1),m=async()=>{await P({id:U.articleInfo.ARTICLE_UUID}),await a.getFollow()};return(I,_)=>{const C=N;return o(),c("div",ue,[e("div",Ie,[e("div",null,[e("img",{src:t.articleInfo.AVATAR},null,8,_e)]),e("h5",de,p(t.articleInfo.ACCOUNT),1)]),e("div",Ce,[e("div",Ae,[A(i)?(o(),c("img",{key:0,title:"已关注",onClick:m,class:"tool-img follow",src:ie,alt:""})):(o(),c("img",{key:1,title:"未关注",onClick:m,class:"tool-img",src:ae,alt:""})),Ee]),e("div",Ue,p(t.articleInfo.TITLE),1),e("div",ge,p(t.articleInfo.UPDATE_TIME||t.articleInfo.ADD_TIME),1),e("div",pe,[e("p",{innerHTML:t.articleInfo.CONTENT},null,8,ve)]),e("div",Se,[(o(!0),c(h,null,Q(t.articleInfo.PICS,(n,v)=>(o(),c("div",{key:v,class:"img-box"},[n.type=="img"?(o(),R(C,{key:0,class:"img-item",fit:"cover",src:n.url,"preview-src-list":[n.url],"zoom-rate":1.1},null,8,["src","preview-src-list","zoom-rate"])):g("",!0),n.type=="video"?(o(),c("div",{class:"img-item",key:n.url},[f(M,{src:n.url},null,8,["src"])])):g("",!0)]))),128))])])])}}});const he=B(fe,[["__scopeId","data-v-b165802d"]]),ke={class:"left"},Qe={class:"avatar"},ye=["src"],Be={class:"right"},Re={class:"name"},Je={key:0,class:"at"},Te={class:"comment"},Oe={class:"pics"},Ne={class:"tool"},Me={class:"tool-item time"},we=["onClick"],De=y({__name:"CommentMinorList",props:{commentList:null},emits:["minorReply"],setup(t,{emit:U}){const a=i=>{U("minorReply",i.FATHER_COMMENT_UUID,i.USER_UUID,i.ACCOUNT)};return(i,m)=>{const I=N;return o(),c("div",null,[(o(!0),c(h,null,Q(t.commentList,(_,C)=>(o(),c("div",{class:"comment-item",key:C},[e("div",ke,[e("div",Qe,[e("img",{src:_.AVATAR,alt:""},null,8,ye)])]),e("div",Be,[e("div",null,[e("span",Re,p(_.ACCOUNT),1),_.USERINFO?(o(),c("span",Je,"@"+p(_.USERINFO.ACCOUNT)+" ：",1)):g("",!0),e("span",Te,p(_.COMMENT),1)]),e("div",Oe,[(o(!0),c(h,null,Q(_.PICS,(n,v)=>(o(),c(h,null,[n.type=="img"?(o(),R(I,{lazy:"",class:"brief-img",key:n.url,src:n.url,"preview-src-list":[n.url],"zoom-rate":1.1,fit:"cover"},null,8,["src","preview-src-list","zoom-rate"])):g("",!0),n.type=="video"?(o(),c("div",{class:"brief-img",key:n.url},[f(M,{src:n.url},null,8,["src"])])):g("",!0)],64))),256))]),e("div",Ne,[e("span",Me,p(i.$common.timeFilter(_.ADD_TIME)),1),e("span",{class:"tool-item reply",onClick:n=>a(_)},"回复",8,we)])])]))),128))])}}});const Le=B(De,[["__scopeId","data-v-06ac5711"]]),be={class:"commont-list"},xe={class:"left"},Ve={class:"avatar"},Fe=["src"],He={key:0,class:"tag"},Ze={class:"right"},Pe={class:"name"},qe={class:"content"},ze={class:"pics"},$e={class:"tool"},Ke={class:"tool-item time"},We=["onClick"],Xe={key:0,style:{"margin-left":"0px","padding-top":"10px"}},je=y({__name:"CommontList",props:{commentList:null,articleuuid:null,articleInfo:null},emits:["minorSuccessComment"],setup(t,{emit:U}){const a=t,i=J();let m=E(),I=E(""),_=E(""),C=E("");const n=s=>{m.value?m.value="":(m.value=s.COMMENT_UUID,I.value="",C.value=s.COMMENT_UUID)},v=(s,l,u)=>{m.value?m.value="":(m.value=s,I.value=l,_.value=u,C.value=s)},k=(s,l)=>{var r,S,d;const u={AVATAR:(r=i.userInfo)==null?void 0:r.AVATAR,COMMENT:l.COMMENT,PICS:l.PICS,ADD_TIME:"刚刚",ACCOUNT:(S=i.userInfo)==null?void 0:S.ACCOUNT,COMMENT_UUID:Date.now()+"",ARTICLE_UUID:a.articleuuid,USER_UUID:(d=i.userInfo)==null?void 0:d.USER_UUID,TO_USER_UUID:l.TO_USER_UUID,FATHER_COMMENT_UUID:l.FATHER_COMMENT_UUID,USERINFO:void 0};U("minorSuccessComment",s,u)};return(s,l)=>{const u=N;return o(),c("div",be,[(o(!0),c(h,null,Q(t.commentList,(r,S)=>(o(),c("div",{class:"comment-item",key:S},[e("div",xe,[e("div",Ve,[e("img",{src:r.AVATAR,alt:""},null,8,Fe)]),t.articleInfo.ACCOUNT===r.ACCOUNT?(o(),c("div",He,"瓜主")):g("",!0)]),e("div",Ze,[e("div",Pe,p(r.ACCOUNT),1),e("div",qe,p(r.COMMENT),1),e("div",ze,[(o(!0),c(h,null,Q(r.PICS,(d,nt)=>(o(),c(h,null,[d.type=="img"?(o(),R(u,{lazy:"",class:"brief-img",key:d.url,src:d.url,"preview-src-list":[d.url],"zoom-rate":1.1,fit:"cover"},null,8,["src","preview-src-list","zoom-rate"])):g("",!0),d.type=="video"?(o(),c("div",{class:"brief-img",key:d.url},[f(M,{src:d.url},null,8,["src"])])):g("",!0)],64))),256))]),e("div",$e,[e("span",Ke,p(s.$common.timeFilter(r.ADD_TIME)),1),e("span",{class:"tool-item reply",onClick:d=>n(r)},"回复",8,We)]),r.childComment?(o(),c("div",Xe,[f(Le,{onMinorReply:v,commentList:r.childComment},null,8,["commentList"])])):g("",!0),A(m)===r.COMMENT_UUID?(o(),R(L,{key:1,class:"minor-reply",onSuccessComment:d=>{k(S,d)},articleuuid:r.ARTICLE_UUID,toUserUUID:A(I),toUserName:A(_),fatherCommentUUID:A(C)},null,8,["onSuccessComment","articleuuid","toUserUUID","toUserName","fatherCommentUUID"])):g("",!0)])]))),128))])}}});const Ye=B(je,[["__scopeId","data-v-13ab7a72"]]),Ge=t=>(T("data-v-e397f924"),t=t(),O(),t),et={class:"article-detail"},tt=Ge(()=>e("i",{class:"iconfont icon-fanhui"},null,-1)),st={class:"comment-box"},ot=y({__name:"IndexView",setup(t){const U=$(),a=z();let i=E(""),m=E([]),I=E({ACCOUNT:"",ADD_TIME:"",ARTICLE_UUID:"",AVATAR:"",CONTENT:"",PICS:"",TITLE:"",UPDATE_TIME:""});const _=()=>{U.go(-1)};D(()=>{i.value=a.params.id,n(),C()});const C=async()=>{const s=await j({article_uuid:i.value});s.data=s.data.map(l=>(l.PICS=JSON.parse(l.PICS),l.childComment&&l.childComment.map(u=>(u.PICS=JSON.parse(u.PICS),u)),l)),m.value=s.data},n=async()=>{const s=await K({article_uuid:i.value});s.data.PICS=JSON.parse(s.data.PICS),I.value=s.data},v=async s=>{m.value.unshift(s)},k=async(s,l)=>{var u;(u=m.value[s].childComment)==null||u.push(l)};return(s,l)=>(o(),c("div",et,[e("div",{class:"back",onClick:_},[tt,q("返回")]),f(he,{articleInfo:A(I)},null,8,["articleInfo"]),e("div",st,[f(L,{onSuccessComment:v,articleuuid:A(i)},null,8,["articleuuid"])]),f(Ye,{commentList:A(m),articleInfo:A(I),articleuuid:A(i),onMinorSuccessComment:k},null,8,["commentList","articleInfo","articleuuid"])]))}});const It=B(ot,[["__scopeId","data-v-e397f924"]]);export{It as default};
