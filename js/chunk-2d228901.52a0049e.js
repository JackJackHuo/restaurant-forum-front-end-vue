(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"container py-5"},i={class:"form-group"},s=Object(n["g"])("label",{for:"name"},"Name",-1),c={class:"form-group"},o=Object(n["g"])("label",{for:"image"},"Image",-1),u=["src"],l=["disabled"];function m(e,t,r,m,d,b){return Object(n["s"])(),Object(n["f"])("div",a,[Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["J"])((function(){return b.handleSubmit&&b.handleSubmit.apply(b,arguments)}),["stop","prevent"]))},[Object(n["g"])("div",i,[s,Object(n["I"])(Object(n["g"])("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.profile.name=e}),type:"text",name:"name",class:"form-control",placeholder:"Enter Name",required:""},null,512),[[n["E"],d.profile.name]])]),Object(n["g"])("div",c,[o,d.profile.image?(Object(n["s"])(),Object(n["f"])("img",{key:0,src:d.profile.image,class:"d-block img-thumbnail mb-2",width:"200",height:"200"},null,8,u)):Object(n["e"])("",!0),Object(n["g"])("input",{id:"image",type:"file",name:"image",accept:"image/*",class:"form-control-file",onChange:t[1]||(t[1]=function(){return b.handleFileChange&&b.handleFileChange.apply(b,arguments)})},null,32)]),Object(n["g"])("button",{type:"submit",class:"btn btn-primary",disabled:d.isProcessing},"Submit",8,l)],32)])}var d=r("1da1"),b=r("5530"),p=(r("96cf"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("1602")),f=r("2fa3"),g=r("5502"),h={name:"UserEdit",data:function(){return{profile:{id:void 0,image:"",name:"",email:""},isProcessing:!1}},computed:Object(b["a"])({},Object(g["b"])(["currentUser"])),beforeRouteUpdate:function(e,t,r){var n=e.params.id;n.toString()===this.currentUser.id.toString()?(this.setUser(),r()):this.$router.push({name:"not-found"})},created:function(){var e=this.$route.params.id;e.toString()===this.currentUser.id.toString()?this.setUser():this.$router.push({name:"not-found"})},watch:{currentUser:function(){this.setUser()}},methods:{setUser:function(){var e=this.currentUser,t=e.name,r=e.image,n=e.email,a=e.id;this.profile=Object(b["a"])(Object(b["a"])({},this.profile),{},{id:a,email:n,name:t,image:r})},handleFileChange:function(e){var t=e.target.files,r=window.URL.createObjectURL(t[0]);this.profile.image=r},handleSubmit:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,a,i,s,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.profile.name){r.next=3;break}return f["a"].fire({type:"warning",title:"您尚未填寫姓名"}),r.abrupt("return");case 3:return n=e.target,a=new FormData(n),r.prev=5,t.isProcessing=!0,r.next=9,p["a"].update({userId:t.profile.id,formData:a});case 9:if(i=r.sent,s=i.data,c=i.statusText,"OK"===c&&"success"===s.status){r.next=14;break}throw new Error(c);case 14:t.$router.push({name:"user",params:{id:t.profile.id}}),r.next=22;break;case 17:r.prev=17,r.t0=r["catch"](5),t.isProcessing=!1,console.log("error",r.t0),f["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 22:case"end":return r.stop()}}),r,null,[[5,17]])})))()}}},O=r("6b0d"),j=r.n(O);const w=j()(h,[["render",m]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-2d228901.52a0049e.js.map