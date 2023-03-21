import{S as p}from"./sweetalert2.all-16308f8d.js";import{_ as w,a as _,r as b,o as l,c as d,b as t,G as g,F as f,p as C,d as v,f as m,t as y,w as k,n as B,q as L,s as z}from"./index-00d6dbdc.js";import{c as E}from"./cartStore-298dabc7.js";import{P as F}from"./PaginationComponent-789187fa.js";import{v as T}from"./vueLoadingStore-8f4f495e.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week8/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{products:[],addCartLoading:null,currentPage:1,page:{},category:{}}},methods:{..._(T,["showLoading","hideLoading"]),getProducts(s="",o=1){this.currentPage=o,this.showLoading();let r=`${u}v2/api/${h}/products?page=${o}`;s==="烤肉"||s==="蔬菜"||s==="飲品"?(r=`${u}v2/api/${h}/products?page=${o}&category=${s}`,this.category=s):s==="所有餐點"&&(this.category={}),this.$http.get(r).then(e=>{this.page=e.data.pagination,this.products=e.data.products,this.hideLoading()}).catch(e=>{p.fire({title:e.response.data.message,icon:"error",confirmButtonText:"OK"}),this.hideLoading()}),window.scrollTo({top:300,behavior:"smooth"})},..._(E,["getCarts"]),addToCart(s,o=1){const r={product_id:s,qty:o};this.addCartLoading=s,this.$http.post(`${u}v2/api/${h}/cart`,{data:r}).then(e=>{p.fire({title:e.data.message,icon:"success",confirmButtonText:"OK"}),this.addCartLoading=null,this.getCarts()}).catch(e=>{p.fire({title:e.response.data.message,icon:"error",confirmButtonText:"OK"})})}},mounted(){this.getProducts()},components:{PaginationComponent:F}},n=s=>(L("data-v-a03c084b"),s=s(),z(),s),D=n(()=>t("div",{style:{"background-position":"center","background-size":"cover","object-fit":"cover",height:"300px","background-image":"url('https://images.unsplash.com/photo-1560380185-9644d262854c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')"}},null,-1)),V={class:"container"},O=n(()=>t("div",{class:"row"},[t("div",{class:"col-md-3"}),t("div",{class:"col-md-9 text-center"},[t("h2",{class:"text-darkGreen fw-bold p-4 mb-0 hrPromotions"},"菜單")])],-1)),S={class:"row"},I={class:"col-md-3"},N={class:"list-group sticky-top top-150 RWD-menu",id:"list-tab",role:"tablist"},R=n(()=>t("h4",{class:"list-group-item bg-primary text-white m-0","aria-current":"true"},"菜單分類",-1)),U={class:"list-unstyled"},G=n(()=>t("li",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679043836381.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FjesjB%2Fr%2B6JLipiNnzSJhxFxp9BCnE0pUrDOPhLo0ZqCrYmGIYRa4R5XZCGExe8UDjXtXVMWc4mMkK6HkfYnUzOMmlKAWGVrGhbIeHDm85YmfuFhXIpKfPj7ftWYQvUlOwKywETk59SFQKop%2FNq25asEYjq7PSDtSMRPfdRtLO0dZyYkT5bfHobi2%2BaA6QYe%2B5umgu8VvNG5V39LP3q92zv1cTaoCwq8I5dEt4YFrNIf4gAgwDqdH%2BEN979yv5bfD3zTkctlQcgJlcEtA5SOo36xOgcWzvprsFK%2Bu0G3F0PO5RQsFJ5xA9MGh%2Bz7zfL8X6gHFF8TbzpPm3%2FdjnmBtA%3D%3D",alt:"",width:"230",height:"120",class:"meat object-fit"})],-1)),j=n(()=>t("li",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679040934274.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CQvxryEJfLZr33%2FoeREEo1zgbRg4n%2B7YuGVzPG6oQVy11nEDCjT0vAu330O%2FKir2tLtjpHgZ5Q9aCHO%2FBdWd3AbidIWXCNA03XKTKNSOA2nx%2B8%2F4J2Jt60kfsqbz7%2FPrRfDFOUFkchu7t0fK8ZhWNn8XNUs78%2BevFIIyWyDNMUz6s2CjUXbT2W%2BUpgSnTDYUMk9LfHs5ATzPCpDHaCUZDUGHwJs78cBSEv2M6RS2fxMcwxQTzvkNVYWynyz%2ByAzphpEalnVrq6gzLjy%2BQNXGOyo8U7lLECCqRunqXFByi2dyENRE6IXPMPgHeJWV%2BUKwYOjOxz4OkeigvemNo7Kh9Q%3D%3D",alt:"",width:"250",height:"100",class:"fire object-fit"})],-1)),H={class:"col-md-9"},K={class:"row my-4 g-4 mt-0"},M={class:"card"},W=["src","alt"],Y={class:"card-body"},q={class:"card-title"},X={class:"float-end"},Q=["onClick","disabled"],J={key:0,class:"spinner-border spinner-border-sm",role:"status"};function Z(s,o,r,e,c,a){const x=b("RouterLink"),P=b("PaginationComponent");return l(),d(f,null,[D,t("main",V,[O,t("div",S,[t("div",I,[t("div",N,[R,t("ul",U,[t("li",null,[t("button",{type:"button",class:"list-group-item list-group-item-action bg-primary bg-opacity-50 text-white",id:"list-home-list",role:"tab","aria-controls":"list-home",onClick:o[0]||(o[0]=()=>a.getProducts("所有餐點"))}," 所有餐點 ")]),t("li",null,[t("a",{class:"list-group-item list-group-item-action bg-primary bg-opacity-50 text-white",id:"list-home-list",href:"#",role:"tab","aria-controls":"list-home",onClick:o[1]||(o[1]=g(()=>a.getProducts("烤肉"),["prevent"]))},"烤肉 ")]),t("li",null,[t("a",{class:"list-group-item list-group-item-action bg-primary bg-opacity-50 text-white",id:"list-home-list",href:"#",role:"tab","aria-controls":"list-home",onClick:o[2]||(o[2]=g(()=>a.getProducts("蔬菜"),["prevent"]))},"蔬菜 ")]),t("li",null,[t("a",{class:"list-group-item list-group-item-action bg-primary text-white bg-opacity-50 bg-opacity-50 rounded-bottom",id:"list-home-list",href:"#",role:"tab","aria-controls":"list-home",onClick:o[3]||(o[3]=g(()=>a.getProducts("飲品"),["prevent"]))},"飲品")]),G,j])])]),t("div",H,[t("div",K,[(l(!0),d(f,null,C(c.products,i=>(l(),d("div",{class:"col-md-4 mt-0 mb-4",key:i.id},[t("div",M,[t("img",{src:i.imageUrl,class:"card-img-top object-fit",height:"200",alt:i.title},null,8,W),t("div",Y,[t("h5",q,[m(y(i.title)+" ",1),t("span",X,"$ "+y(i.price),1)]),v(x,{to:`/product/${i.id}`,class:"btn btn-outline-secondary w-100 mt-3"},{default:k(()=>[m(" 查看更多產品細節")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-outline-primary w-100 mt-3",onClick:()=>a.addToCart(i.id),disabled:c.addCartLoading===i.id},[c.addCartLoading===i.id?(l(),d("span",J)):B("",!0),m(" 加到購物車 ")],8,Q)])])]))),128))]),v(P,{category:c.category,pages:c.page,"get-data":a.getProducts},null,8,["category","pages","get-data"])])])])],64)}const it=w(A,[["render",Z],["__scopeId","data-v-a03c084b"]]);export{it as default};
