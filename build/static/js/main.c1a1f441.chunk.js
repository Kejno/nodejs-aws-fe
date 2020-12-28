(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{151:function(e){e.exports=JSON.parse('[{"count":4,"description":"Short Product Description1","id":"7567ec4b-b10c-48c5-9345-fc73c48a80aa","price":2.4,"title":"ProductOne"},{"count":6,"description":"Short Product Description3","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a0","price":10,"title":"ProductNew"},{"count":7,"description":"Short Product Description2","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a2","price":23,"title":"ProductTop"},{"count":12,"description":"Short Product Description7","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a1","price":15,"title":"ProductTitle"},{"count":7,"description":"Short Product Description2","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a2","price":23,"title":"Product"},{"count":8,"description":"Short Product Description4","id":"7567ec4b-b10c-48c5-9345-fc73348a80a1","price":15,"title":"ProductTest"},{"count":2,"description":"Short Product Descriptio1","id":"7567ec4b-b10c-48c5-9445-fc73c48a80a2","price":23,"title":"Product2"},{"count":3,"description":"Short Product Description7","id":"7567ec4b-b10c-45c5-9345-fc73c48a80a1","price":15,"title":"ProductName"}]')},175:function(e,t,a){e.exports=a(210)},180:function(e,t,a){},181:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(180),a(181),a(258)),l=a(14),u=a(260),m=a(263),s=a(262),d=a(261),p=a(259),f=a(95),E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),g=function(e){return E.format(e)},h=a(107),b=a.n(h),v=a(150),y=a.n(v),O=a(149),j=a.n(O),S=a(255),C=a(31),k=a(47),x=a.n(k),w=a(86),N=a(157),B=a(84),P={product:"https://.execute-api.eu-west-1.amazonaws.com/dev",order:"https://.execute-api.eu-west-1.amazonaws.com/dev",import:"https://.execute-api.eu-west-1.amazonaws.com/dev",bff:"https://.execute-api.eu-west-1.amazonaws.com/dev",cart:"https://.execute-api.eu-west-1.amazonaws.com/dev"},T=a(12),z=a.n(T),D=Object(B.b)({name:"cart",initialState:{items:[]},reducers:{updateFromApi:function(e,t){var a=t.payload.items;return{items:Object(N.a)(a)}},addToCart:function(e,t){var a=e.items,n=t.payload,r=a.find((function(e){return e.product.id===n.id}));r?r.count++:a.push({product:n,count:1})},removeFromCart:function(e,t){var a=e.items,n=t.payload,r=a.find((function(e){return e.product.id===n.id}));r&&(r.count>1?r.count--:e.items=a.filter((function(e){return e.product.id!==n.id})))},clearCart:function(e){e.items=[]}}}),F=function(e){return function(){var t=Object(w.a)(x.a.mark((function t(a,n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(D.actions.addToCart(e)),r=n(),c=r.cart.items,t.next=4,z.a.put("".concat(P.cart,"/profile/cart"),{items:c},{headers:{Authorization:"Basic ".concat(localStorage.getItem("authorization_token"))}});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},I=D.actions.updateFromApi,q=function(e){return e.cart.items},W=D.reducer;function A(e){var t=e.product,a=Object(C.b)(),n=Object(C.c)(q).find((function(e){return e.product.id===t.id}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{onClick:function(){return a(function(e){return function(){var t=Object(w.a)(x.a.mark((function t(a,n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(D.actions.removeFromCart(e)),r=n(),c=r.cart.items,t.next=4,z.a.put("".concat(P.cart,"/profile/cart"),{items:c},{headers:{Authorization:"Basic ".concat(localStorage.getItem("authorization_token"))}});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}},r.a.createElement(j.a,{color:"secondary"})),r.a.createElement(f.a,{align:"center"},n.count),r.a.createElement(S.a,{onClick:function(){return a(F(t))}},r.a.createElement(y.a,{color:"secondary"}))):r.a.createElement(S.a,{onClick:function(){return a(F(t))}},r.a.createElement(b.a,{color:"secondary"})))}var M=a(151),R=Object(i.a)((function(e){return{card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function U(){var e=R(),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){o(M)}),[]),r.a.createElement(p.a,{container:!0,spacing:4},c.map((function(t,a){return r.a.createElement(p.a,{item:!0,key:t.id,xs:12,sm:6,md:4},r.a.createElement(u.a,{className:e.card},r.a.createElement(d.a,{className:e.cardMedia,image:"https://source.unsplash.com/random?sig=".concat(a),title:"Image title"}),r.a.createElement(s.a,{className:e.cardContent},r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(f.a,null,g(t.price))),r.a.createElement(m.a,null,r.a.createElement(A,{product:t}))))})))}var V=Object(i.a)((function(e){return{content:{backgroundColor:e.palette.background.paper,padding:e.spacing(3,0,3)}}}));function L(){var e=V();return r.a.createElement("div",{className:e.content},r.a.createElement(U,null))}var G=a(269),_=a(270),H=a(283),J=a(265),Y=a(266),$=a(152),K=a.n($),Q=a(268),X=a(156),Z=a(264),ee=a(25);function te(){var e=Object(C.b)();Object(n.useEffect)((function(){z.a.get("".concat(P.cart,"/profile/cart"),{headers:{Authorization:"Basic ".concat(localStorage.getItem("authorization_token"))}}).then((function(t){var a=t.data.data.cart;e(I(a))}))}),[]);var t=Object(C.c)(q).length||void 0;return r.a.createElement(S.a,{"aria-label":"show 4 new mails",color:"inherit",component:ee.b,to:"/cart"},r.a.createElement(Z.a,{badgeContent:t,color:"secondary"},r.a.createElement(b.a,null)))}var ae=Object(i.a)((function(e){return Object(H.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},homeLink:{color:"white",textDecoration:"none"}})}));function ne(){var e=ae(),t=r.a.useState(null),a=Object(l.a)(t,2),n=a[0],c=a[1],o=Boolean(n),i=function(){c(null)};return r.a.createElement(J.a,{position:"static"},r.a.createElement(Y.a,null,r.a.createElement(f.a,{variant:"h6",className:e.title},r.a.createElement(ee.b,{className:e.homeLink,to:"/"},"My Electronic Store!")),r.a.createElement("div",null,r.a.createElement(S.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(K.a,null)),r.a.createElement(X.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:i},r.a.createElement(Q.a,{component:ee.b,to:"/admin/orders",onClick:i},"Manage orders"),r.a.createElement(Q.a,{component:ee.b,to:"/admin/products",onClick:i},"Manage products"))),r.a.createElement(te,null)))}function re(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Artem Rimarchyk",r.a.createElement(G.a,{color:"inherit",href:"https://material-ui.com/"},"My Store")," ",(new Date).getFullYear(),".")}var ce=Object(i.a)((function(e){return{container:{paddingBottom:e.spacing(8)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),oe=function(e){var t=e.children,a=ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement("main",null,r.a.createElement(_.a,{className:a.container,maxWidth:"md"},t)),r.a.createElement("footer",{className:a.footer},r.a.createElement(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Thank you for your purchase!"),r.a.createElement(re,null)))},ie=a(16),le=a(128),ue=a(271),me=a(24),se=me.c().shape({title:me.d().required(),description:me.d(),price:me.b().required()}),de=a(15),pe=a(33),fe=a(93),Ee=a(160),ge=Object(i.a)((function(e){return{layout:Object(fe.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(fe.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)})}})),he=function(e){var t=e.children,a=ge();return r.a.createElement("div",{className:a.layout},r.a.createElement(Ee.a,{className:a.paper},t))},be=function(e){var t=e.dirty,a=e.isSubmitting,n=e.isValid,c=e.handleSubmit;return r.a.createElement("form",{onSubmit:c,autoComplete:"off"},r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.b,{component:pe.a,name:"title",label:"Title",fullWidth:!0,autoComplete:"off",required:!0})),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.b,{component:pe.a,name:"description",label:"Description",fullWidth:!0,autoComplete:"off",multiline:!0,required:!0})),r.a.createElement(p.a,{item:!0,xs:12,sm:4},r.a.createElement(de.b,{component:pe.a,name:"price",label:"Price ($)",fullWidth:!0,autoComplete:"off",required:!0})),r.a.createElement(p.a,{item:!0,xs:12,sm:4},r.a.createElement(de.b,{component:pe.a,name:"count",label:"Count",fullWidth:!0,autoComplete:"off",required:!0})),r.a.createElement(p.a,{item:!0,container:!0,xs:12,justify:"space-between"},r.a.createElement(ue.a,{color:"primary"},"Cancel"),r.a.createElement(ue.a,{type:"submit",variant:"contained",color:"primary",disabled:!t||a||!n},"Save Product"))))},ve=se.cast();function ye(){var e=Object(ie.f)(),t=Object(ie.g)().id,a=Object(n.useState)(null),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(!0),m=Object(l.a)(u,2),s=m[0],d=m[1];return Object(n.useEffect)((function(){t?z.a.get("".concat(P.bff,"/product/").concat(t)).then((function(e){i(e.data),d(!1)})):d(!1)}),[t]),s?r.a.createElement("p",null,"loading..."):r.a.createElement(he,null,r.a.createElement(f.a,{component:"h1",variant:"h4",align:"center"},t?"Edit product":"Create new product"),r.a.createElement(de.d,{initialValues:o||ve,validationSchema:se,onSubmit:function(a){var n=se.cast(a),r=t?Object(le.a)(Object(le.a)({},se.cast(n)),{},{id:t}):n;z.a.put("".concat(P.bff,"/product"),r).then((function(){return e.push("/admin/products")}))}},(function(e){return r.a.createElement(be,e)})))}var Oe=a(284),je=a(273),Se=a(282),Ce=a(267),ke=a(213),xe=a(272),we=Object(i.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function Ne(e){var t=e.items,a=e.isEditable,n=we(),c=t.reduce((function(e,t){return t.count*t.product.price+e}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{disablePadding:!0},t.map((function(e){return r.a.createElement(ke.a,{className:n.listItem,key:e.product.id},a&&r.a.createElement(A,{product:e.product}),r.a.createElement(xe.a,{primary:e.product.title,secondary:e.product.description}),r.a.createElement(f.a,{variant:"body2"},g(e.product.price)," x ",e.count," = ",g(e.product.price*e.count)))})),r.a.createElement(ke.a,{className:n.listItem},r.a.createElement(xe.a,{primary:"Shipping"}),r.a.createElement(f.a,{variant:"body2"},"Free")),r.a.createElement(ke.a,{className:n.listItem},r.a.createElement(xe.a,{primary:"Total"}),r.a.createElement(f.a,{variant:"subtitle1",className:n.total},g(c)))))}function Be(){var e=Object(C.c)(q);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(Ne,{items:e,isEditable:!0}))}var Pe=Object(i.a)((function(e){return{title:{marginTop:e.spacing(2)}}}));function Te(e){var t=e.address,a=e.items,n=Pe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(Ne,{items:a,isEditable:!1}),r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{variant:"h6",gutterBottom:!0,className:n.title},"Shipping"),r.a.createElement(f.a,{gutterBottom:!0},t.firstName," ",t.lastName),r.a.createElement(f.a,{gutterBottom:!0},t.address)),r.a.createElement(p.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},r.a.createElement(f.a,{variant:"h6",gutterBottom:!0,className:n.title},"Comment"),r.a.createElement(f.a,{gutterBottom:!0},t.comment))))}var ze=me.c({firstName:me.d().required(),lastName:me.d().required(),address:me.d().required(),comment:me.d().default("")}).defined(),De=me.c({productId:me.d().required(),count:me.b().integer().positive().required()}).defined(),Fe=me.c({id:me.d().required(),items:me.a().of(De),address:ze,status:me.d().required()}).defined(),Ie=Object(i.a)((function(e){return{stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),qe=["Review your cart","Shipping address","Review your order"],We=ze.cast(),Ae=function(){return r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"The cart is empty. Didn't you like anything in our shop?")},Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),r.a.createElement(f.a,{variant:"subtitle1"},"Your order is placed. Our manager will call you soon to clarify the details."))};function Re(){var e=Ie(),t=r.a.useState(0),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(C.c)(q),u=!i.length,m=Object(n.useState)(We),s=Object(l.a)(m,2),d=s[0],E=s[1],g=Object(n.useState)(!1),h=Object(l.a)(g,2),b=h[0],v=h[1],y=Object(C.b)();return r.a.createElement(he,null,r.a.createElement(f.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),r.a.createElement(Oe.a,{activeStep:c,className:e.stepper},qe.map((function(e){return r.a.createElement(je.a,{key:e},r.a.createElement(Se.a,null,e))}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(de.d,{enableReinitialize:!1,initialValues:We,validationSchema:ze,isInitialValid:!1,onSubmit:function(){}},(function(e){var t=e.values,a=e.isValid;return E(t),v(a),r.a.createElement(de.c,null,u&&0===c&&r.a.createElement(Ae,null),0===c&&!u&&r.a.createElement(Be,null),1===c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Shipping address"),r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0,xs:12,sm:6},r.a.createElement(de.a,{component:pe.a,name:"lastName",label:"Last Name",fullWidth:!0,autoComplete:"off",required:!0})),r.a.createElement(p.a,{item:!0,xs:12,sm:6},r.a.createElement(de.a,{component:pe.a,name:"firstName",label:"First Name",fullWidth:!0,autoComplete:"off",required:!0})),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.a,{component:pe.a,name:"address",label:"Shipping address",fullWidth:!0,autoComplete:"off",multiline:!0})),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.a,{component:pe.a,name:"comment",label:"Comment",fullWidth:!0,autoComplete:"off",multiline:!0})))),2===c&&r.a.createElement(Te,{address:d,items:i}),3===c&&r.a.createElement(Me,null))})),c<=2&&r.a.createElement("div",{className:e.buttons},0!==c&&r.a.createElement(ue.a,{onClick:function(){o(c-1)},className:e.button},"Back"),!u&&r.a.createElement(ue.a,{variant:"contained",color:"primary",onClick:function(){if(o(c+1),2===c){var e=Fe.cast({items:i.map((function(e){return{productId:e.product.id,count:e.count}})),address:d});z.a.put("".concat(P.order,"/order"),e).then((function(){y(function(){var e=Object(w.a)(x.a.mark((function e(t,a){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(D.actions.clearCart()),n=a(),r=n.cart.items,e.next=4,z.a.put("".concat(P.cart,"/profile/cart"),{items:r},{headers:{Authorization:"Basic ".concat(localStorage.getItem("authorization_token"))}});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),o(c+1)}))}},className:e.button,disabled:1===c&&!b},c===qe.length-1?"Place order":"Next"))))}var Ue=a(275),Ve=a(279),Le=a(278),Ge=a(274),_e=a(276),He=a(277);function Je(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){z.a.get("".concat(P.order,"/order")).then((function(e){return c(e.data)}))}),[]);return r.a.createElement(Ge.a,{component:Ee.a},r.a.createElement(Ue.a,{"aria-label":"simple table"},r.a.createElement(_e.a,null,r.a.createElement(He.a,null,r.a.createElement(Le.a,null,"From"),r.a.createElement(Le.a,{align:"right"},"Items count"),r.a.createElement(Le.a,{align:"right"},"Address"),r.a.createElement(Le.a,{align:"right"},"Status"),r.a.createElement(Le.a,{align:"right"},"Action"))),r.a.createElement(Ve.a,null,a.map((function(e){var t,a,n;return r.a.createElement(He.a,{key:e.id},r.a.createElement(Le.a,{component:"th",scope:"row"},null===(t=e.address)||void 0===t?void 0:t.firstName," ",null===(a=e.address)||void 0===a?void 0:a.lastName),r.a.createElement(Le.a,{align:"right"},e.items.length),r.a.createElement(Le.a,{align:"right"},null===(n=e.address)||void 0===n?void 0:n.address),r.a.createElement(Le.a,{align:"right"},e.statusHistory[e.statusHistory.length-1].status.toUpperCase()),r.a.createElement(Le.a,{align:"right"},r.a.createElement(ue.a,{size:"small",color:"primary",component:ee.b,to:"/admin/order/".concat(e.id)},"Manage"),r.a.createElement(ue.a,{size:"small",color:"secondary",onClick:function(){return t=e.id,void z.a.delete("".concat(P.order,"/order/").concat(t)).then((function(){z.a.get("".concat(P.order,"/order")).then((function(e){return c(e.data)}))}));var t}},"Delete")))})))))}var Ye=Object(i.a)((function(e){return{content:{backgroundColor:e.palette.background.paper,padding:e.spacing(3,0,3)}}}));function $e(){var e=Ye();return r.a.createElement("div",{className:e.content},r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Manage orders"),r.a.createElement(Je,null))}var Ke="approved",Qe=["open",Ke,"confirmed","sent","completed","cancelled"],Xe=function(e){var t=e.values,a=e.dirty,n=e.isSubmitting,c=e.isValid,o=e.handleSubmit,i="";return t.status===Ke&&(i="Setting status to APPROVED will decrease products count from stock!!!"),r.a.createElement("form",{onSubmit:o,autoComplete:"off"},r.a.createElement(p.a,{container:!0,spacing:2},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.b,{component:pe.a,name:"status",label:"Status",select:!0,fullWidth:!0,helperText:i},Qe.map((function(e,t){return r.a.createElement(Q.a,{key:t,value:e},e)})))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(de.b,{component:pe.a,name:"comment",label:"Comment",fullWidth:!0,autoComplete:"off",multiline:!0})),r.a.createElement(p.a,{item:!0,container:!0,xs:12,justify:"space-between"},r.a.createElement(ue.a,{type:"submit",variant:"contained",color:"primary",disabled:!a||n||!c},"Change status"))))};function Ze(){var e=Object(ie.g)().id,t=Object(n.useState)({}),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),u=Object(l.a)(i,2),m=u[0],s=u[1],d=Object(n.useState)(!0),p=Object(l.a)(d,2),E=p[0],g=p[1];if(Object(n.useEffect)((function(){if(e){var t=[z.a.get("".concat(P.product,"/product")),z.a.get("".concat(P.order,"/order/").concat(e))];Promise.all(t).then((function(e){var t=Object(l.a)(e,2),a=t[0].data,n=t[1].data,r=n.items.map((function(e){return{product:a.find((function(t){return t.id===e.productId})),count:e.count}}));o(n),s(r),g(!1)}))}else g(!1)}),[e]),E)return r.a.createElement("p",null,"loading...");var h=c.statusHistory||[],b=h[h.length-1];return r.a.createElement(he,null,r.a.createElement(f.a,{component:"h1",variant:"h4",align:"center"},"Manage order"),r.a.createElement(Te,{address:c.address,items:m}),r.a.createElement(f.a,{variant:"h6"},"Status:"),r.a.createElement(f.a,{variant:"h6",color:"primary"},null===b||void 0===b?void 0:b.status.toUpperCase()),r.a.createElement(f.a,{variant:"h6"},"Change status:"),r.a.createElement(de.d,{initialValues:{status:b.status,comment:""},enableReinitialize:!0,onSubmit:function(e){return z.a.put("".concat(P.order,"/order/").concat(c.id,"/status"),e).then((function(e){var t=e.data;return o(t)}))}},(function(e){return r.a.createElement(Xe,e)})),r.a.createElement(f.a,{variant:"h6"},"Status history:"),r.a.createElement(Ge.a,null,r.a.createElement(Ue.a,{"aria-label":"simple table"},r.a.createElement(_e.a,null,r.a.createElement(He.a,null,r.a.createElement(Le.a,null,"Status"),r.a.createElement(Le.a,{align:"right"},"Date and Time"),r.a.createElement(Le.a,{align:"right"},"Comment"))),r.a.createElement(Ve.a,null,h.map((function(e){return r.a.createElement(He.a,{key:c.id},r.a.createElement(Le.a,{component:"th",scope:"row"},e.status.toUpperCase()),r.a.createElement(Le.a,{align:"right"},new Date(e.timestamp).toString()),r.a.createElement(Le.a,{align:"right"},e.comment))}))))))}function et(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){z.a.get("".concat(P.bff,"/product")).then((function(e){return c(e.data)}))}),[]);return r.a.createElement(Ge.a,{component:Ee.a},r.a.createElement(Ue.a,{"aria-label":"simple table"},r.a.createElement(_e.a,null,r.a.createElement(He.a,null,r.a.createElement(Le.a,null,"Title"),r.a.createElement(Le.a,{align:"right"},"Description"),r.a.createElement(Le.a,{align:"right"},"Price"),r.a.createElement(Le.a,{align:"right"},"Count"),r.a.createElement(Le.a,{align:"right"},"Action"))),r.a.createElement(Ve.a,null,a.map((function(e){return r.a.createElement(He.a,{key:e.id},r.a.createElement(Le.a,{component:"th",scope:"row"},e.title),r.a.createElement(Le.a,{align:"right"},e.description),r.a.createElement(Le.a,{align:"right"},g(e.price)),r.a.createElement(Le.a,{align:"right"},e.count),r.a.createElement(Le.a,{align:"right"},r.a.createElement(ue.a,{size:"small",color:"primary",component:ee.b,to:"/admin/product-form/".concat(e.id)},"Manage"),r.a.createElement(ue.a,{size:"small",color:"secondary",onClick:function(){return t=e.id,void z.a.delete("".concat(P.bff,"/product/").concat(t)).then((function(){z.a.get("".concat(P.bff,"/product")).then((function(e){return c(e.data)}))}));var t}},"Delete")))})))))}var tt=Object(i.a)((function(e){return{content:{backgroundColor:e.palette.background.paper,padding:e.spacing(3,0,3)}}}));function at(e){var t=e.url,a=e.title,c=tt(),o=Object(n.useState)(),i=Object(l.a)(o,2),u=i[0],m=i[1],s=function(){var e=Object(w.a)(x.a.mark((function e(a){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()({method:"GET",url:t,params:{name:encodeURIComponent(u.name)}});case 2:return n=e.sent,console.log("File to upload: ",u.name),console.log("Uploading to: ",n.data),e.next=7,fetch(n.data,{method:"PUT",body:u});case 7:r=e.sent,console.log("Result: ",r),m("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:c.content},r.a.createElement(f.a,{variant:"h6",gutterBottom:!0},a),u?r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){m("")}},"Remove file"),r.a.createElement("button",{onClick:s},"Upload file")):r.a.createElement("input",{type:"file",onChange:function(e){console.log(e);var t=e.target.files||e.dataTransfer.files;t.length&&m(t.item(0))}}))}var nt=a(281),rt=Object(i.a)((function(e){return{content:{backgroundColor:e.palette.background.paper,padding:e.spacing(3,0,3)}}}));function ct(){var e=rt();return r.a.createElement("div",{className:e.content},r.a.createElement(nt.a,{display:"flex",alignItems:"center"},r.a.createElement(at,{url:"".concat(P.import,"/import"),title:"Import Products CSV"}),r.a.createElement(ue.a,{size:"small",color:"primary",variant:"contained",component:ee.b,to:"/admin/product-form/"},"create product")),r.a.createElement(et,null))}var ot=function(){return r.a.createElement(ee.a,null,r.a.createElement(ie.c,null,r.a.createElement(ie.a,{path:"/"},r.a.createElement(oe,null,r.a.createElement(ie.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(ie.a,{exact:!0,path:["/admin/product-form/:id","/admin/product-form"]},r.a.createElement(ye,null)),r.a.createElement(ie.a,{exact:!0,path:"/cart"},r.a.createElement(Re,null)),r.a.createElement(ie.a,{exact:!0,path:"/admin/orders"},r.a.createElement($e,null)),r.a.createElement(ie.a,{exact:!0,path:"/admin/order/:id"},r.a.createElement(Ze,null)),r.a.createElement(ie.a,{exact:!0,path:"/admin/products"},r.a.createElement(ct,null))))))},it=Object(B.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),lt=it.actions,ut=(lt.increment,lt.decrement,lt.incrementByAmount,it.reducer),mt=Object(B.a)({reducer:{counter:ut,cart:W}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=a(280);z.a.interceptors.response.use((function(e){return e}),(function(e){var t;400===e.response.status&&alert(null===(t=e.response.data)||void 0===t?void 0:t.data);return Promise.reject(e.response)})),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C.a,{store:mt},r.a.createElement(st.a,null),r.a.createElement(ot,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.c1a1f441.chunk.js.map