import{g as a,h as r}from"./index-f4415cd2.js";import{S as s}from"./sweetalert2.all-30eceac2.js";import{v as i}from"./vueLoadingStore-57307fe4.js";const{VITE_APP_URL:c,VITE_APP_PATH:n}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week8/",MODE:"production",DEV:!1,PROD:!0},h=a("cart",{state:()=>({cart:[]}),actions:{getCarts(){const{showLoading:o,hideLoading:e}=i();o(),r.get(`${c}v2/api/${n}/cart`).then(t=>{this.cart=t.data.data,e()}).catch(t=>{s.fire({title:t.response.data.message,icon:"error",confirmButtonText:"OK"}),e()})}},getters:{}});export{h as c};
