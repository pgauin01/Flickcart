(this.webpackJsonpmern_ecomm=this.webpackJsonpmern_ecomm||[]).push([[5],{84:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(4),i=a(0),s=a.n(i),l=a(5),o=a(26),u=a(22),m=a(15),d=function(e){var t=Object(i.useState)(e.value),a=Object(m.a)(t,2),r=a[0],u=a[1],d=Object(l.b)(),p=function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,d(Object(o.e)(e.cartId,r));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("form",{onSubmit:p},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"cart",className:"cart__input--label"},"Qty:"),s.a.createElement("input",{type:"text",id:"cart",className:"cart__input",value:r,onChange:function(e){return function(e){u(e)}(e.target.value)}})))},p=a(7),f=a.n(p),v="https://js.stripe.com/v3",b=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",E=null,g=function(e){return null!==E?E:E=new Promise((function(t,a){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(h),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(v,'"]')),t=0;t<e.length;t++){var a=e[t];if(b.test(a.src))return a}return null}();r&&e?console.warn(h):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(v).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(a),a}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):a(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){a(new Error("Failed to load Stripe.js"))}))}catch(n){return void a(n)}else t(null)}))},w=function(e,t,a){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.9.0",startTime:t})}(r,a),r},_=Promise.resolve().then((function(){return g(null)})),j=!1;_.catch((function(e){j||console.warn(e)}));var N=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];j=!0;var r=Date.now();return _.then((function(e){return w(e,t,r)}))};t.default=function(e){var t=Object(l.b)(),a=Object(l.c)((function(e){return e.cart})),r=Object(l.c)((function(e){return e.cart.loading})),m=(Object(l.c)((function(e){return e.user.credentials.email})),Object(l.c)((function(e){return e.user.credentials.id}))),p=a.total,v=Object(i.useCallback)(Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(o.d)());case 2:case"end":return e.stop()}}),e)})))),b=Object(i.useCallback)(Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(o.b)());case 2:case"end":return e.stop()}}),e)})))),h=Object(i.useCallback)(function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(u.a)(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(i.useCallback)(function(){var e=Object(c.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(o.c)(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Object(i.useEffect)((function(){v(),b()}),[t]);var g,w=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/bookings/checkout-session/".concat(m));case 3:return t=e.sent,a=N("pk_test_51H7e0FFoce81BebJOGLt0D7U5RtX6LOT9zLqFi80EiNSmZFMoeZKUeuwI89UzkIxEeulrwZlOEYxvXxr3Wg5XISJ003LCntMly"),e.next=7,a;case 7:return r=e.sent,e.next=10,r.redirectToCheckout({sessionId:t.data.session.id});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return g=r?s.a.createElement("div",{className:"loading"},s.a.createElement("img",{src:"/loading.gif"})):0===a.cart.length?s.a.createElement("div",{className:"noItem"},s.a.createElement("p",{className:"noItem__text"},"No products found in cart start adding some....")):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"cart"},a.cart.map((function(e){return s.a.createElement("div",{key:e.cartId,className:"cart__card"},s.a.createElement("img",{src:e.img,className:"cart__img"}),s.a.createElement("div",{className:"cart__description"},s.a.createElement("h2",{className:"heading-tertiary"},e.name),s.a.createElement("h2",{className:"heading-tertiary"},e.seller),s.a.createElement("h2",{className:"heading-tertiary"},"\u20b9\u200e",e.price)),s.a.createElement("div",{className:"cart__actions"},s.a.createElement(d,{cartId:e.cartId,value:e.quantity}),s.a.createElement("button",{className:"btn btn--cart--delete",onClick:function(){return t=e.cartId,void E(t);var t}},"Delete"),s.a.createElement("button",{className:"btn btn--cart--later",onClick:function(){return function(e,t){var a=t,r=m;E(e),h({product:a,user:r})}(e.cartId,e.id)}},"Buy later")))}))),s.a.createElement("div",{className:"cartright"},s.a.createElement("h3",{className:"heading-tertiary u-margin-bottom-small"},"PRICE DETAILS"),s.a.createElement("hr",null),s.a.createElement("ul",{className:"cartright__desc"},s.a.createElement("li",{className:"cartright__items"},"Price ",a.cart.length," item"),s.a.createElement("li",{className:"cartright__items"},"\u20b9",p),s.a.createElement("li",{className:"cartright__items"},"Delivery Charges"),s.a.createElement("li",{className:"cartright__items"},"Free")),s.a.createElement("hr",null),s.a.createElement("div",{className:"cartright__amount"},s.a.createElement("h2",null,"Total Amount"),s.a.createElement("h2",null,"\u20b9",p),s.a.createElement("div",{className:"right"},s.a.createElement("button",{className:"btn btn__order",onClick:w},"Place Order"))))),s.a.createElement("section",{className:"section-cart"},g)}}}]);
//# sourceMappingURL=5.89489b44.chunk.js.map