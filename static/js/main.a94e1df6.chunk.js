(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(14),r=c.n(n),i=(c(36),c(37),c(5)),o=c(3),l=(c(38),c(4));const d="E_COMMERCE_TOKEN",j=()=>{let e=window.localStorage.getItem(d);return e||!1},u=()=>{window.localStorage.clear()},p={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL||"http://localhost:3000"},b=async e=>{try{const t={method:"GET",headers:{Authorization:"Bearer "+j()}},c=await fetch(p.baseURL+e,t);console.log({res:c});const a=await c.text();return{statusCode:c.status,data:a}}catch(t){return console.error("error in get Request (".concat(e,") :- "),t),{statusCode:400,data:[]}}},O=async(e,t)=>{try{const c={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+j()},body:JSON.stringify(t)},a=await fetch(p.baseURL+e,c),s=await a.text();return{statusCode:a.status,data:s}}catch(c){console.log("error in post Request (".concat(e,") :- "),c)}},h=async e=>{try{const t={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+j()}},c=await fetch(p.baseURL+e,t),a=await c.text();return{statusCode:c.status,data:a}}catch(t){console.log("error in Delete Request (".concat(e,") :- "),t)}},m="SET_USER",x="SET_INITIAL_STATE",g=()=>async e=>{const{statusCode:t,data:c}=await b("/api/user/me");if(400===t||500===t)return void e({type:x});const{user:a}=JSON.parse(c);e({type:m,payload:{isLogin:!0,details:{...a}}})},_=()=>async e=>{e({type:x})};var f=c(0);var v=e=>{let{click:t}=e;const c=Object(l.c)((e=>e.cart)),a=Object(o.f)(),s=Object(l.c)((e=>e.user)),n=Object(l.b)(),{cartItems:r}=c;return Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)("div",{className:"navbar__logo",children:Object(f.jsx)("h2",{children:"JSOM-E-COMERCE"})}),Object(f.jsxs)("ul",{className:"navbar__links",children:[Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/cart",className:"cart__link",children:[Object(f.jsx)("i",{className:"fas fa-shopping-cart"}),Object(f.jsxs)("span",{children:["Cart ",Object(f.jsx)("span",{className:"cartlogo__badge",children:r.reduce(((e,t)=>Number(t.qty)+e),0)})]})]})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/",children:"Shop"})}),s.userInfo.isLogin?Object(f.jsx)("li",{children:Object(f.jsx)("p",{onClick:()=>{n(_()),u(),a.push("/")},children:"Logout"})}):Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/signin",children:"Login"})})]}),Object(f.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})]})};c(49);var y=e=>{let{show:t,click:c}=e;const a=["sidedrawer"],s=Object(l.c)((e=>e.user)),n=Object(o.f)(),r=Object(l.b)(),d=Object(l.c)((e=>e.cart)),{cartItems:j}=d;t&&a.push("show");return Object(f.jsx)("div",{className:a.join(" "),children:Object(f.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/cart",children:[Object(f.jsx)("i",{className:"fas fa-shopping-cart"}),Object(f.jsxs)("span",{children:["Cart"," ",Object(f.jsx)("span",{className:"sidedrawer__cartbadge",children:j.reduce(((e,t)=>Number(t.qty)+e),0)})]})]})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/",children:"Shop"})}),s.userInfo.isLogin?Object(f.jsx)("li",{children:Object(f.jsx)("p",{onClick:()=>{r(_()),u(),n.push("/")},children:"Logout"})}):Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/signin",children:"Login"})})]})})};c(50);var S=e=>{let{click:t,show:c}=e;return c&&Object(f.jsx)("div",{className:"backdrop",onClick:t})};c(51),c(52);var C=e=>{let{imageUrl:t,description:c,price:a,name:s,productId:n}=e;return Object(f.jsxs)("div",{className:"product",children:[Object(f.jsx)("img",{src:t,alt:s}),Object(f.jsxs)("div",{className:"product__info",children:[Object(f.jsx)("p",{className:"info__name",children:s}),Object(f.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(f.jsxs)("p",{className:"info__price",children:["$",a]}),Object(f.jsx)(i.b,{to:"/product/".concat(n),className:"info__button",children:"View"})]})]})};const N="GET_PRODUCTS_REQUEST",I="GET_PRODUCTS_SUCCESS",E="GET_PRODUCTS_FAIL",w="GET_PRODUCT_DETAILS_REQUEST",T="GET_PRODUCT_DETAILS_SUCCESS",k="GET_PRODUCT_DETAILS_FAIL",L="GET_PRODUCT_DETAILS_RESET";c(19);var R=()=>{const e=Object(l.b)(),t=Object(l.c)((e=>e.getProducts)),{products:c,loading:s,error:n}=t;return Object(a.useEffect)((()=>{e((async e=>{try{e({type:N});const{data:t}=await b("/api/products");e({type:I,payload:JSON.parse(t)})}catch(n){e({type:E,payload:n.response&&n.response.data.message?n.response.data.message:n.message})}}))}),[e]),Object(a.useEffect)((()=>{e(g())}),[e]),Object(f.jsxs)("div",{className:"homescreen",children:[Object(f.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(f.jsx)("div",{className:"homescreen__products",children:s?Object(f.jsx)("h2",{children:"Loading..."}):n?Object(f.jsx)("h2",{children:n}):c.map((e=>Object(f.jsx)(C,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)))})]})};c(72);const P="ADD_TO_CART",U="REMOVE_FROM_CART",A="FETCH_MY_CART",D=e=>e.map((e=>({product:e.productId._id,name:e.productId.name,imageUrl:e.productId.imageUrl,price:e.productId.price,countInStock:e.productId.countInStock,qty:e.count,_id:e._id}))),F=(e,t)=>async c=>{const{data:a}=await b("/api/products/".concat(e)),s=JSON.parse(a);c({type:P,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),O("/api/cart",{productId:e,count:t})};var q=e=>{let{match:t,history:c}=e;const[s,n]=Object(a.useState)(1),r=Object(l.c)((e=>e.user)),i=Object(l.b)(),o=Object(l.c)((e=>e.getProductDetails)),{loading:d,error:j,product:u}=o;Object(a.useEffect)((()=>{var e;u&&t.params.id!==u._id&&i((e=t.params.id,async t=>{try{t({type:w});const{data:c}=await b("/api/products/".concat(e)),a=JSON.parse(c);t({type:T,payload:{...a}})}catch(j){t({type:k,payload:j.response&&j.response.data.message?j.response.data.message:j.message})}}))}),[i,t,u]);return Object(f.jsx)("div",{className:"productscreen",children:d?Object(f.jsx)("h2",{children:"Loading..."}):j?Object(f.jsx)("h2",{children:j}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"productscreen__left",children:[Object(f.jsx)("div",{className:"left__image",children:Object(f.jsx)("img",{src:u.imageUrl,alt:u.name})}),Object(f.jsxs)("div",{className:"left__info",children:[Object(f.jsx)("p",{className:"left__name",children:u.name}),Object(f.jsxs)("p",{children:["Price: $",u.price]}),Object(f.jsxs)("p",{children:["Description: ",u.description]})]})]}),Object(f.jsx)("div",{className:"productscreen__right",children:Object(f.jsxs)("div",{className:"right__info",children:[Object(f.jsxs)("p",{children:["Price:",Object(f.jsxs)("span",{children:["$",u.price]})]}),Object(f.jsxs)("p",{children:["Status:",Object(f.jsx)("span",{children:u.countInStock>0?"In Stock":"Out of Stock"})]}),Object(f.jsxs)("p",{children:["Qty",Object(f.jsx)("select",{value:s,onChange:e=>n(e.target.value),children:[...Array(u.countInStock).keys()].map((e=>Object(f.jsx)("option",{value:e+1,children:e+1},e+1)))})]}),Object(f.jsx)("p",{children:Object(f.jsx)("button",{type:"button",onClick:()=>{if(r.userInfo.isLogin)return i(F(u._id,s)),void c.push("/cart");alert("You need to first login.")},children:"Add To Cart"})})]})})]})})};c(73),c(74);var B=e=>{let{item:t,qtyChangeHandler:c,removeHandler:a}=e;return Object(f.jsxs)("div",{className:"cartitem",children:[Object(f.jsx)("div",{className:"cartitem__image",children:Object(f.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(f.jsx)(i.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(f.jsx)("p",{children:t.name})}),Object(f.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(f.jsx)("select",{value:t.qty,onChange:e=>c(t.product,e.target.value),className:"cartItem__select",children:[...Array(t.countInStock).keys()].map((e=>Object(f.jsx)("option",{value:e+1,children:e+1},e+1)))}),Object(f.jsx)("button",{className:"cartItem__deleteBtn",onClick:()=>a(t.product),children:Object(f.jsx)("i",{className:"fas fa-trash"})})]})};var J=function(){const[e,t]=Object(a.useState)({loading:!0,isLogin:!1}),{replace:c}=Object(o.f)(),s=Object(a.useCallback)((async()=>{const{statusCode:e,data:a}=await b("/api/user/me");if(400===e||500===e)return c("/"),void u();t({loading:!1,isLogin:!0})}),[c]);return Object(a.useEffect)((()=>{s()}),[s]),{loginInfo:e}};var G=()=>{const e=Object(l.b)(),t=Object(l.c)((e=>e.cart)),{loginInfo:c}=J(),{cartItems:a}=t,s=(t,c)=>{e(F(t,c))},n=t=>{e((e=>{let{pId:t,_id:c}=e;return e=>{e({type:U,payload:t}),h("/api/cart/"+c)}})({pId:t.product,_id:t._id}))};return c.loading?Object(f.jsx)("h1",{children:"Loading....."}):!c.loading&&c.isLogin?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"cartscreen",children:[Object(f.jsxs)("div",{className:"cartscreen__left",children:[Object(f.jsx)("h2",{children:"Shopping Cart"}),0===a.length?Object(f.jsxs)("div",{children:["Your Cart Is Empty ",Object(f.jsx)(i.b,{to:"/",children:"Go Back"})]}):a.map((e=>Object(f.jsx)(B,{item:e,qtyChangeHandler:s,removeHandler:()=>n(e)},e.product)))]}),Object(f.jsxs)("div",{className:"cartscreen__right",children:[Object(f.jsxs)("div",{className:"cartscreen__info",children:[Object(f.jsxs)("p",{children:["Subtotal (",a.reduce(((e,t)=>Number(t.qty)+e),0),") items"]}),Object(f.jsxs)("p",{children:["$",a.reduce(((e,t)=>e+t.price*t.qty),0).toFixed(2)]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{title:"Functionality need to be add.",onClick:()=>{alert("Functionality pending please stay tune, will be add soon.")},children:"Proceed To Checkout"})})]})]})}):void 0};c(75);var M=function(){const{replace:e,push:t}=Object(o.f)(),[c,s]=Object(a.useState)(""),[n,r]=Object(a.useState)(""),[l,d]=Object(a.useState)(""),[j,u]=Object(a.useState)(!1),p=Object(a.useCallback)((async()=>{if(c.length>2&&n.length>2&&l.length>2){u(!0);const{statusCode:t,data:a}=await O("/api/user/signup",{email:n,fullName:c,password:l});if(400===t||500===t||403===t)return u(!1),void alert(a);alert(a),e("/signin")}}),[n,c,l,e]);return j?Object(f.jsx)("h1",{children:"Loading..."}):Object(f.jsx)("div",{className:"signupscreen",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"innerContainer",children:[Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[Object(f.jsx)("div",{style:{cursor:"pointer"},onClick:()=>t("/"),children:Object(f.jsx)("i",{class:"fas fa-arrow-circle-left fa-5x"})}),Object(f.jsx)("p",{children:"Signup"})]}),Object(f.jsx)("label",{for:"fname",children:"Full Name"}),Object(f.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your full name..",value:c,onChange:e=>s(e.target.value)}),Object(f.jsx)("label",{for:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",id:"lname",name:"email",placeholder:"Your email..",value:n,onChange:e=>r(e.target.value)}),Object(f.jsx)("label",{for:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"lname",name:"password",placeholder:"Your Password..",value:l,onChange:e=>d(e.target.value)}),Object(f.jsx)(i.b,{to:"/signin",className:"link",children:Object(f.jsx)("span",{children:"Already have an account ?"})}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",value:"Sign up",onClick:p})]})})})};c(76);var H=function(){const{replace:e,push:t}=Object(o.f)(),[c,s]=Object(a.useState)(),[n,r]=Object(a.useState)(),[l,j]=Object(a.useState)(!1),u=Object(a.useCallback)((async()=>{if(c.length>2&&n.length>2){j(!0);const{statusCode:t,data:a}=await O("/api/user/signin",{email:c,password:n});if(j(!1),400===t||500===t||403===t)return j(!1),void alert(a);const{token:s}=JSON.parse(a);(e=>{window.localStorage.setItem(d,e)})(s),e("/")}}),[c,n,e]);return l?Object(f.jsx)("h1",{children:"Loading....."}):Object(f.jsx)("div",{className:"signinscreen",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"innerContainer",children:[Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[Object(f.jsx)("div",{style:{cursor:"pointer"},onClick:()=>t("/"),children:Object(f.jsx)("i",{class:"fas fa-arrow-circle-left fa-5x"})}),Object(f.jsx)("p",{children:"Sign In"})]}),Object(f.jsx)("label",{for:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",id:"lname",name:"email",placeholder:"Your email..",value:c,onChange:e=>s(e.target.value)}),Object(f.jsx)("label",{for:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"lname",name:"password",placeholder:"Your Password..",value:n,onChange:e=>r(e.target.value)}),Object(f.jsx)(i.b,{to:"/signup",className:"link",children:Object(f.jsx)("span",{children:"Creat a new account ?"})}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",value:"Sign in",onClick:u})]})})})};var Y=function(){const[e,t]=Object(a.useState)(!1),c=Object(l.b)();return Object(a.useEffect)((()=>{c((async e=>{try{const{data:t}=await b("/api/cart/"),{carts:c}=JSON.parse(t);e({type:A,payload:{carts:D(c)}})}catch(t){console.log("EROROR :  ",t)}})),c(g())}),[c]),Object(f.jsxs)(i.a,{children:[Object(f.jsx)(v,{click:()=>t(!0)}),Object(f.jsx)(y,{show:e,click:()=>t(!1)}),Object(f.jsx)(S,{show:e,click:()=>t(!1)}),Object(f.jsx)("main",{className:"app",children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(f.jsx)(o.a,{exact:!0,path:"/product/:id",component:q}),Object(f.jsx)(o.a,{exact:!0,path:"/cart",component:G}),Object(f.jsx)(o.a,{exact:!0,path:"/signup",component:M}),Object(f.jsx)(o.a,{exact:!0,path:"/signin",component:H})]})})]})};var $=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((t=>{let{getCLS:c,getFID:a,getFCP:s,getLCP:n,getTTFB:r}=t;c(e),a(e),s(e),n(e),r(e)}))},K=c(13),W=c(30),z=c(31);const Q={cartItems:[]},V={userInfo:{isLogin:!1,details:{}}},X=Object(K.combineReducers)({cart:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:const c=t.payload,a=e.cartItems.find((e=>e.product===c.product));return a?{...e,cartItems:e.cartItems.map((e=>e.product===a.product?c:e))}:{...e,cartItems:[...e.cartItems,c]};case U:return{...e,cartItems:e.cartItems.filter((e=>e.product!==t.payload))};case A:return{cartItems:[...t.payload.carts]};default:return e}},getProducts:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0,products:[]};case I:return{products:t.payload,loading:!1};case E:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case T:return{loading:!1,product:t.payload};case k:return{loading:!1,error:t.payload};case L:return{product:{}};default:return e}},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{userInfo:{...t.payload}};case x:return V;default:return e}}}),Z=[W.a],ee={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}};var te=Object(K.createStore)(X,ee,Object(z.composeWithDevTools)(Object(K.applyMiddleware)(...Z)));r.a.render(Object(f.jsx)(l.a,{store:te,children:Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(Y,{})})}),document.getElementById("root")),$()}},[[77,1,2]]]);
//# sourceMappingURL=main.a94e1df6.chunk.js.map