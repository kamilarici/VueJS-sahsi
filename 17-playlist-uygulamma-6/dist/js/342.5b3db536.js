"use strict";(self["webpackChunk_17_playlist_uygulamma_6"]=self["webpackChunk_17_playlist_uygulamma_6"]||[]).push([[342],{3342:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var n=l(3396),i=l(9242),r=l(7139);const u=(0,n._)("h3",null,"Signup",-1),s={key:0,class:"error"},t={key:1},o={key:2};function d(e,a,l,d,p,m){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:a[3]||(a[3]=(0,i.iM)(((...e)=>d.handleSubmit&&d.handleSubmit(...e)),["prevent"]))},[u,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Display Name","onUpdate:modelValue":a[0]||(a[0]=e=>d.displayName=e)},null,512),[[i.nr,d.displayName]]),(0,n.wy)((0,n._)("input",{type:"email",placeholder:"email","onUpdate:modelValue":a[1]||(a[1]=e=>d.email=e)},null,512),[[i.nr,d.email]]),(0,n.wy)((0,n._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[2]||(a[2]=e=>d.password=e)},null,512),[[i.nr,d.password]]),d.error?((0,n.wg)(),(0,n.iD)("div",s,(0,r.zw)(d.error),1)):(0,n.kq)("",!0),d.isPending?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",t,"Signup")),d.isPending?((0,n.wg)(),(0,n.iD)("button",o,"Loading")):(0,n.kq)("",!0)],32)}var p=l(4870),m=l(7732);const c=(0,p.iH)(null),g=(0,p.iH)(!1),y=async(e,a,l)=>{c.value=null,g.value=!0;try{const n=await m.QK.createUserWithEmailAndPassword(e,a);return console.log(n.user),await n.user.updateProfile({displayName:l}),c.value=null,g.value=!1,n}catch(n){console.log(n.message),c.value=n.message,g.value=!1}},w=()=>({error:c,signup:y,isPending:g});var v=w,h={setup(){const{error:e,signup:a,isPending:l}=v(),n=(0,p.iH)(""),i=(0,p.iH)(""),r=(0,p.iH)(""),u=async()=>{await a(n.value,i.value,r.value);e.value||console.log("user signed in")};return{email:n,password:i,displayName:r,isPending:l,handleSubmit:u,error:e}}},_=l(89);const k=(0,_.Z)(h,[["render",d]]);var b=k}}]);
//# sourceMappingURL=342.5b3db536.js.map