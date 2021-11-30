(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container py-5"},c={key:1,class:"table"},s=Object(r["g"])("thead",{class:"thead-dark"},[Object(r["g"])("tr",null,[Object(r["g"])("th",{scope:"col"},"#"),Object(r["g"])("th",{scope:"col"},"Email"),Object(r["g"])("th",{scope:"col"},"Role"),Object(r["g"])("th",{scope:"col",width:"140"},"Action")])],-1),i={scope:"row"},u=["onClick"];function o(e,t,n,o,d,b){var f=Object(r["z"])("AdminNav"),O=Object(r["z"])("Spinner");return Object(r["s"])(),Object(r["f"])("div",a,[Object(r["i"])(f),d.isLoading?(Object(r["s"])(),Object(r["d"])(O,{key:0})):(Object(r["s"])(),Object(r["f"])("table",c,[s,Object(r["g"])("tbody",null,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(d.users,(function(t){return Object(r["s"])(),Object(r["f"])("tr",{key:t.id},[Object(r["g"])("th",i,Object(r["B"])(t.id),1),Object(r["g"])("td",null,Object(r["B"])(t.email),1),Object(r["g"])("td",null,Object(r["B"])(t.isAdmin?"admin":"user"),1),Object(r["g"])("td",null,[e.currentUser.id!==t.id?(Object(r["s"])(),Object(r["f"])("button",{key:0,type:"button",class:"btn btn-link",onClick:function(e){return b.toggleUserRole({userId:t.id,isAdmin:t.isAdmin})}},Object(r["B"])(t.isAdmin?"set as user":"set as admin"),9,u)):Object(r["e"])("",!0)])])})),128))])]))])}var d=n("1da1"),b=n("5530"),f=(n("d3b7"),n("25f0"),n("d81d"),n("96cf"),n("e04c")),O=n("2375"),l=n("5502"),j=n("be6c"),m=n("2fa3"),g={name:"AdminUsers",components:{AdminNav:f["a"],Spinner:O["a"]},data:function(){return{users:[],isLoading:!0}},computed:Object(b["a"])({},Object(l["b"])(["currentUser"])),created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,j["a"].users.get();case 4:if(n=t.sent,r=n.data,a=n.statusText,"OK"===a){t.next=9;break}throw new Error(a);case 9:e.users=r.users,e.isLoading=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),e.isLoading=!1,m["a"].fire({icon:"error",title:"無法取得會員資料，請稍後再試"});case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))()},toggleUserRole:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a,c,s,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.userId,a=e.isAdmin,n.prev=1,c=!a,n.next=5,j["a"].users.update({userId:r,isAdmin:c.toString()});case 5:if(s=n.sent,i=s.data,u=s.statusText,"OK"===u&&"success"===i.status){n.next=10;break}throw new Error(u);case 10:t.users=t.users.map((function(e){return e.id===r?Object(b["a"])(Object(b["a"])({},e),{},{isAdmin:c}):e})),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](1),m["a"].fire({icon:"error",title:"無法設成管理員，請稍後再試"});case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))()}}},p=n("6b0d"),h=n.n(p);const v=h()(g,[["render",o]]);t["default"]=v},be6c:function(e,t,n){"use strict";n("b0c0");var r=n("2fa3");t["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t})},delete:function(e){return r["b"].delete("/admin/categories/".concat(e))},update:function(e){var t=e.categoryId,n=e.name;return r["b"].put("/admin/categories/".concat(t),{name:n})}},users:{get:function(){return r["b"].get("/admin/users")},update:function(e){var t=e.userId,n=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:n})}},restaurants:{create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t)},get:function(){return r["b"].get("/admin/restaurants")},delete:function(e){return r["b"].delete("/admin/restaurants/".concat(e))},getDetail:function(e){return r["b"].get("/admin/restaurants/".concat(e))},update:function(e){var t=e.restaurantId,n=e.formData;return r["b"].put("/admin/restaurants/".concat(t),n)}}}},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde"),s=c("map");r({target:"Array",proto:!0,forced:!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,n){"use strict";var r=n("7a23"),a={class:"mb-3"},c=Object(r["g"])("h1",null,"餐廳後台",-1),s=Object(r["h"])("Restaurants"),i=Object(r["h"])(" | "),u=Object(r["h"])("Categories"),o=Object(r["h"])(" | "),d=Object(r["h"])("Users");function b(e,t){var n=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("div",a,[c,Object(r["i"])(n,{to:"/admin/restaurants"},{default:Object(r["H"])((function(){return[s]})),_:1}),i,Object(r["i"])(n,{to:"/admin/categories"},{default:Object(r["H"])((function(){return[u]})),_:1}),o,Object(r["i"])(n,{to:"/admin/users"},{default:Object(r["H"])((function(){return[d]})),_:1})])}var f=n("6b0d"),O=n.n(f);const l={},j=O()(l,[["render",b]]);t["a"]=j}}]);
//# sourceMappingURL=chunk-958bdcfa.3363006f.js.map