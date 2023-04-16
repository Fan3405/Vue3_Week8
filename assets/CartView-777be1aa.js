import{_ as P,a as O,m as S,r as q,o as a,c as d,b as t,n as u,f as p,F as b,p as A,d as K,w as L,t as l,I as V,K as E,l as R,J as U,q as D,s as M}from"./index-0be279bb.js";import{S as c}from"./sweetalert2.all-44e0e40d.js";import{c as B}from"./cartStore-7a7cb8f4.js";import"./vueLoadingStore-72a671db.js";const{VITE_APP_URL:_,VITE_APP_PATH:g}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week8/",MODE:"production",DEV:!1,PROD:!0},N={data(){return{loadingItem:"",delAllLoading:!1,coupon_code:"",couponText:!1,couponLoading:!1,qty:null}},methods:{...O(B,["getCarts","qtyMax"]),updateCartItem(e){const o={data:{product_id:e.product.id,qty:e.qty}};this.loadingItem=e.id,this.qtyMax(e.qty),this.$http.put(`${_}v2/api/${g}/cart/${e.id}`,o).then(h=>{c.fire({title:h.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts(),this.loadingItem=""}).catch(h=>{c.fire({title:h.response.data.message,icon:"error",confirmButtonText:"OK"})})},deleteCartItem(e){this.loadingItem=e.id,this.$http.delete(`${_}v2/api/${g}/cart/${e.id}`).then(o=>{c.fire({title:o.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts(),this.loadingItem=""}).catch(o=>{c.fire({title:o.response.data.message,icon:"error",confirmButtonText:"OK"})})},deleteAllCarts(){this.delAllLoading=!0,this.$http.delete(`${_}v2/api/${g}/carts`).then(e=>{this.delAllLoading=!1,c.fire({title:e.data.message,icon:"success",confirmButtonText:"OK"}),this.getCarts()}).catch(e=>{c.fire({title:e.response.data.message,icon:"error",confirmButtonText:"OK"})})},addCouponCode(){this.couponLoading=!0;const e={code:this.coupon_code};this.$http.post(`${_}v2/api/${g}/coupon`,{data:e}).then(o=>{this.couponText=!0,this.couponLoading=!1,this.getCarts(),c.fire({title:o.data.message,icon:"success",confirmButtonText:"OK"})}).catch(o=>{c.fire({title:o.response.data.message,icon:"error",confirmButtonText:"OK"}),this.couponLoading=!1})}},computed:{...S(B,["cart"])},mounted(){this.getCarts()}},m=e=>(D("data-v-64f083d8"),e=e(),M(),e),F={class:"container my-5 bg-primary bg-opacity-50 p-5 border border-primary"},H={class:"text-end"},W=["disabled"],j={key:0,class:"spinner-border spinner-border-sm",role:"status"},z={class:"table align-middle"},J=m(()=>t("thead",null,[t("tr",null,[t("th"),t("th",{style:{width:"25%"}},"圖片"),t("th",{style:{width:"20%"}},"品名"),t("th",{class:"RWD-width",style:{width:"20%"}},"數量/單位"),t("th",{class:"text-end"},"單價"),t("th",{class:"text-end"},"小計")])],-1)),G=["onClick","disabled"],Q={key:0,class:"spinner-border spinner-border-sm",role:"status"},X={key:1},Y=["src","alt"],Z={key:0,class:"fw-bold text-success"},$={class:"input-group input-group-sm"},tt=["onUpdate:modelValue","onChange","disabled"],et=["value"],st={class:"text-end"},ot={class:"text-end"},nt=m(()=>t("span",{class:"text-danger fw-bold h3"},"購物車目前是空的!",-1)),at=m(()=>t("td",{colspan:"5",class:"text-end"},"總計",-1)),dt={class:"text-end"},lt={key:0},ct=m(()=>t("td",{colspan:"5",class:"text-end fw-bold text-success"},"折扣價",-1)),rt={class:"text-end fw-bold text-success"},it={key:0,class:"input-group mb-3 input-group-sm"},ut=["disabled"],pt={class:"input-group-append"},ht=["disabled"],_t={key:0,class:"spinner-border spinner-border-sm",role:"status"};function gt(e,o,h,mt,n,r){var y,x,C,k,v,T,I,w;const f=q("RouterLink");return a(),d("div",F,[t("div",H,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:o[0]||(o[0]=(...s)=>r.deleteAllCarts&&r.deleteAllCarts(...s)),disabled:!((x=(y=e.cart)==null?void 0:y.carts)!=null&&x.length)||n.delAllLoading},[n.delAllLoading?(a(),d("span",j)):u("",!0),p(" 清空購物車 ")],8,W)]),t("table",z,[J,t("tbody",null,[(k=(C=e.cart)==null?void 0:C.carts)!=null&&k.length?(a(!0),d(b,{key:0},A(e.cart.carts,s=>(a(),d("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>r.deleteCartItem(s),disabled:s.id===n.loadingItem},[s.id===n.loadingItem?(a(),d("span",Q)):(a(),d("span",X,"x"))],8,G)]),t("td",null,[t("img",{class:"w-100 object-fit",height:"100",src:s.product.imageUrl,alt:s.product.title},null,8,Y)]),t("td",null,[p(l(s.product.title)+" ",1),n.couponText?(a(),d("div",Z,"已套用優惠券"+l(n.coupon_code),1)):u("",!0)]),t("td",null,[t("div",$,[V(t("select",{class:"form-select","onUpdate:modelValue":i=>s.qty=i,onChange:i=>r.updateCartItem(s),disabled:s.id===n.loadingItem},[(a(),d(b,null,A(30,i=>t("option",{value:i,key:i+"12345"},l(i),9,et)),64))],40,tt),[[U,s.qty]]),p(" /"+l(s.product.unit),1)])]),t("td",st,l(s.product.price),1),t("td",ot,l(s.total),1)]))),128)):(a(),d(b,{key:1},[nt,K(f,{to:"/products",class:"ms-3 btn btn-primary text-light fw-bold"},{default:L(()=>[p("快去看菜單~")]),_:1})],64))]),t("tfoot",null,[t("tr",null,[at,t("td",dt,l(e.cart.total),1)]),n.couponText?(a(),d("tr",lt,[ct,t("td",rt,l(e.cart.final_total),1)])):u("",!0)])]),(T=(v=e.cart)==null?void 0:v.carts)!=null&&T.length?(a(),d("div",it,[V(t("input",{disabled:n.couponText,type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=s=>n.coupon_code=s),placeholder:"請輸入優惠券代碼"},null,8,ut),[[E,n.coupon_code]]),t("div",pt,[t("button",{disabled:n.couponText,class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=(...s)=>r.addCouponCode&&r.addCouponCode(...s))},[n.couponLoading?(a(),d("span",_t)):u("",!0),p(" 套用優惠券 ")],8,ht)])])):u("",!0),(w=(I=e.cart)==null?void 0:I.carts)!=null&&w.length?(a(),R(f,{key:1,to:"/cart/check",class:"btn btn-outline-primary float-end mt-2"},{default:L(()=>[p("下一步")]),_:1})):u("",!0)])}const Ct=P(N,[["render",gt],["__scopeId","data-v-64f083d8"]]);export{Ct as default};