import{e as te,a as J,c as se,b as oe,g as j,d as le,S as ie,f as ne,A as re,N as ce}from"./navigation.min-ea442a15.js";import{S as G}from"./sweetalert2.all-44e0e40d.js";import{_ as ae,o as _,c as $,b as n,f as V,a as Y,k as P,r as q,d as H,w as U,l as Z,n as R,F as X,e as Q,p as de,t as N,q as fe,s as pe}from"./index-0be279bb.js";import{c as me}from"./cartStore-7a7cb8f4.js";import{M as ue}from"./modal-9e444809.js";import{v as ge}from"./vueLoadingStore-72a671db.js";function M(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function he({swiper:e,extendParams:f,on:s,emit:u}){const r="swiper-pagination";f({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let m,x=0;const g=a=>(Array.isArray(a)||(a=[a].filter(t=>!!t)),a);function F(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function p(a,t){const{bulletActiveClass:o}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${o}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${o}-${t}-${t}`)))}function l(a){const t=a.target.closest(M(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const o=J(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===o)return;(o<e.loopedSlides||o>e.slides.length-e.loopedSlides)&&e.loopFix({direction:o<e.loopedSlides?"prev":"next",activeSlideIndex:o,slideTo:!1}),e.slideToLoop(o)}else e.slideTo(o)}function y(){const a=e.rtl,t=e.params.pagination;if(F())return;let o=e.pagination.el;o=g(o);let i;const c=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,B=e.params.loop?Math.ceil(c/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?i=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex:typeof e.snapIndex<"u"?i=e.snapIndex:i=e.activeIndex||0,t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const d=e.pagination.bullets;let C,v,k;if(t.dynamicBullets&&(m=te(d[0],e.isHorizontal()?"width":"height",!0),o.forEach(h=>{h.style[e.isHorizontal()?"width":"height"]=`${m*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&e.previousIndex!==void 0&&(x+=i-(e.previousIndex||0),x>t.dynamicMainBullets-1?x=t.dynamicMainBullets-1:x<0&&(x=0)),C=Math.max(i-x,0),v=C+(Math.min(d.length,t.dynamicMainBullets)-1),k=(v+C)/2),d.forEach(h=>{h.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map(b=>`${t.bulletActiveClass}${b}`))}),o.length>1)d.forEach(h=>{const b=J(h);b===i&&h.classList.add(t.bulletActiveClass),t.dynamicBullets&&(b>=C&&b<=v&&h.classList.add(`${t.bulletActiveClass}-main`),b===C&&p(h,"prev"),b===v&&p(h,"next"))});else{const h=d[i];if(h&&h.classList.add(t.bulletActiveClass),t.dynamicBullets){const b=d[C],A=d[v];for(let T=C;T<=v;T+=1)d[T]&&d[T].classList.add(`${t.bulletActiveClass}-main`);p(b,"prev"),p(A,"next")}}if(t.dynamicBullets){const h=Math.min(d.length,t.dynamicMainBullets+4),b=(m*h-m)/2-k*m,A=a?"right":"left";d.forEach(T=>{T.style[e.isHorizontal()?A:"top"]=`${b}px`})}}o.forEach((d,C)=>{if(t.type==="fraction"&&(d.querySelectorAll(M(t.currentClass)).forEach(v=>{v.textContent=t.formatFractionCurrent(i+1)}),d.querySelectorAll(M(t.totalClass)).forEach(v=>{v.textContent=t.formatFractionTotal(B)})),t.type==="progressbar"){let v;t.progressbarOpposite?v=e.isHorizontal()?"vertical":"horizontal":v=e.isHorizontal()?"horizontal":"vertical";const k=(i+1)/B;let h=1,b=1;v==="horizontal"?h=k:b=k,d.querySelectorAll(M(t.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${h}) scaleY(${b})`,A.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(d.innerHTML=t.renderCustom(e,i+1,B),C===0&&u("paginationRender",d)):(C===0&&u("paginationRender",d),u("paginationUpdate",d)),e.params.watchOverflow&&e.enabled&&d.classList[e.isLocked?"add":"remove"](t.lockClass)})}function S(){const a=e.params.pagination;if(F())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let o=e.pagination.el;o=g(o);let i="";if(a.type==="bullets"){let c=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&c>t&&(c=t);for(let B=0;B<c;B+=1)a.renderBullet?i+=a.renderBullet.call(e,B,a.bulletClass):i+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?i=a.renderFraction.call(e,a.currentClass,a.totalClass):i=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?i=a.renderProgressbar.call(e,a.progressbarFillClass):i=`<span class="${a.progressbarFillClass}"></span>`),o.forEach(c=>{a.type!=="custom"&&(c.innerHTML=i||""),a.type==="bullets"&&(e.pagination.bullets=[...c.querySelectorAll(M(a.bulletClass))])}),a.type!=="custom"&&u("paginationRender",o[0])}function z(){e.params.pagination=se(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.shadowRoot.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(o=>oe(o,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=g(t),t.forEach(o=>{a.type==="bullets"&&a.clickable&&o.classList.add(a.clickableClass),o.classList.add(a.modifierClass+a.type),o.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(o.classList.add(`${a.modifierClass}${a.type}-dynamic`),x=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&o.classList.add(a.progressbarOppositeClass),a.clickable&&o.addEventListener("click",l),e.enabled||o.classList.add(a.lockClass)}))}function D(){const a=e.params.pagination;if(F())return;let t=e.pagination.el;t&&(t=g(t),t.forEach(o=>{o.classList.remove(a.hiddenClass),o.classList.remove(a.modifierClass+a.type),o.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&o.removeEventListener("click",l)})),e.pagination.bullets&&e.pagination.bullets.forEach(o=>o.classList.remove(a.bulletActiveClass))}s("init",()=>{e.params.pagination.enabled===!1?I():(z(),S(),y())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&y()}),s("snapIndexChange",()=>{y()}),s("snapGridLengthChange",()=>{S(),y()}),s("destroy",()=>{D()}),s("enable disable",()=>{let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{y()}),s("click",(a,t)=>{const o=t.target;let{el:i}=e.pagination;if(Array.isArray(i)||(i=[i].filter(c=>!!c)),e.params.pagination.el&&e.params.pagination.hideOnClick&&i&&i.length>0&&!o.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&o===e.navigation.nextEl||e.navigation.prevEl&&o===e.navigation.prevEl))return;const c=i[0].classList.contains(e.params.pagination.hiddenClass);u(c===!0?"paginationShow":"paginationHide"),i.forEach(B=>B.classList.toggle(e.params.pagination.hiddenClass))}});const L=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),z(),S(),y()},I=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=g(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),D()};Object.assign(e.pagination,{enable:L,disable:I,render:S,update:y,init:z,destroy:D})}function ve(e){const{effect:f,swiper:s,on:u,setTranslate:r,setTransition:m,overwriteParams:x,perspective:g,recreateShadows:F,getEffectParams:p}=e;u("beforeInit",()=>{if(s.params.effect!==f)return;s.classNames.push(`${s.params.containerModifierClass}${f}`),g&&g()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const y=x?x():{};Object.assign(s.params,y),Object.assign(s.originalParams,y)}),u("setTranslate",()=>{s.params.effect===f&&r()}),u("setTransition",(y,S)=>{s.params.effect===f&&m(S)}),u("transitionEnd",()=>{if(s.params.effect===f&&F){if(!p||!p().slideShadows)return;s.slides.forEach(y=>{y.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(S=>S.remove())}),F()}});let l;u("virtualUpdate",()=>{s.params.effect===f&&(s.slides.length||(l=!0),requestAnimationFrame(()=>{l&&s.slides&&s.slides.length&&(r(),l=!1)}))})}function be(e,f){const s=j(f);return s!==f&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function W(e,f,s){const u=`swiper-slide-shadow${s?`-${s}`:""}`,r=j(f);let m=r.querySelector(`.${u}`);return m||(m=le("div",`swiper-slide-shadow${s?`-${s}`:""}`),r.append(m)),m}function ye({swiper:e,extendParams:f,on:s}){f({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ve({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:m,height:x,slides:g,slidesSizesGrid:F}=e,p=e.params.coverflowEffect,l=e.isHorizontal(),y=e.translate,S=l?-y+m/2:-y+x/2,z=l?p.rotate:-p.rotate,D=p.depth;for(let L=0,I=g.length;L<I;L+=1){const a=g[L],t=F[L],o=a.swiperSlideOffset,i=(S-o-t/2)/t,c=typeof p.modifier=="function"?p.modifier(i):i*p.modifier;let B=l?z*c:0,d=l?0:z*c,C=-D*Math.abs(c),v=p.stretch;typeof v=="string"&&v.indexOf("%")!==-1&&(v=parseFloat(p.stretch)/100*t);let k=l?0:v*c,h=l?v*c:0,b=1-(1-p.scale)*Math.abs(c);Math.abs(h)<.001&&(h=0),Math.abs(k)<.001&&(k=0),Math.abs(C)<.001&&(C=0),Math.abs(B)<.001&&(B=0),Math.abs(d)<.001&&(d=0),Math.abs(b)<.001&&(b=0);const A=`translate3d(${h}px,${k}px,${C}px)  rotateX(${d}deg) rotateY(${B}deg) scale(${b})`,T=be(p,a);if(T.style.transform=A,a.style.zIndex=-Math.abs(Math.round(c))+1,p.slideShadows){let O=l?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),E=l?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");O||(O=W(p,a,l?"left":"top")),E||(E=W(p,a,l?"right":"bottom")),O&&(O.style.opacity=c>0?c:0),E&&(E.style.opacity=-c>0?-c:0)}}},setTransition:m=>{e.slides.map(g=>j(g)).forEach(g=>{g.style.transitionDuration=`${m}ms`,g.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(F=>{F.style.transitionDuration=`${m}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const xe={data(){return{UserCouponModal:null}},methods:{openModal(){this.UserCouponModal.show()},hideModal(){this.UserCouponModal.hide()}},mounted(){this.UserCouponModal=new ue(this.$refs.UserCouponModal)}},Ce={class:"modal fade",id:"UserCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"UserCouponModal"},Be=n("div",{class:"modal-dialog",role:"document"},[n("div",{class:"modal-content text-white",style:{"background-repeat":"no-repeat","background-position":"center","background-size":"100%","object-fit":"cover","background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1677768481152.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=msNPlyzL22mB0%2B11FdYXDfM5%2BtPzJKNOfRcAX2x6VUQwRgVMsNNolDvLdy34K5rzGpA%2FO0PH4g0Nw0KLQCZ%2FBZGtN1kscofbr%2F8rmel9eEuLAFBahiyGHwR02EJ7Cf8qGdZoHsjYzaR5PedfF13koGt4ptiDgg3XkrIrdXGUOHl9WRD3bb3nepb%2BkNauu9X8mG6O%2FgCYZ8ZCZJiAmRghrqGRGMfmToq68eu5DnvuRUayLVSlzIT75l3AWi8IphAK34R35PoW6ZsYlQiMsebbLEDu6M9YYI6mkcSu%2FE8yDATlX7xN5ooJZkQlCgrmOH0XOheN5y%2FnghjgOJBkxo7v7w%3D%3D')"}},[n("div",{class:"modal-header"},[n("h3",{class:"modal-title",id:"exampleModalLabel"},[n("span",{class:"fw-bold"},"歡慶開幕優惠券")]),n("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),n("div",{class:"modal-body"},[n("div",{class:"mb-3"},[n("h4",null,[V("結帳時輸入優惠券代碼"),n("span",{class:"text-danger fw-bold"},"888"),V("享有八折優惠!")])])]),n("div",{class:"modal-footer"},[n("button",{type:"button",class:"btn btn-info text-white","data-bs-dismiss":"modal"},"確定")])])],-1),Fe=[Be];function Se(e,f,s,u,r,m){return _(),$("div",Ce,Fe,512)}const ke=ae(xe,[["render",Se]]);const{VITE_APP_URL:K,VITE_APP_PATH:ee}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"zxcv123",BASE_URL:"/Vue3_Week8/",MODE:"production",DEV:!1,PROD:!0},Ae={components:{Swiper:ie,SwiperSlide:ne,UserCouponModal:ke},data(){return{modules:[ye,re,he,ce],products:[],addCartLoading:null,currentPage:1,page:{}}},methods:{...Y(ge,["showLoading","hideLoading"]),getProducts(e=1){this.currentPage=e,this.showLoading();const f=`${K}v2/api/${ee}/products?page=${e}`;this.$http.get(f).then(s=>{this.page=s.data.pagination,this.products=s.data.products,this.hideLoading()}).catch(s=>{G.fire({title:s.response.data.message,icon:"error",confirmButtonText:"OK"}),this.hideLoading()})},...Y(me,["getCarts"]),addToCart(e,f=1){const s={product_id:e,qty:f};this.addCartLoading=e,this.$http.post(`${K}v2/api/${ee}/cart`,{data:s}).then(u=>{G.fire({title:u.data.message,icon:"success",confirmButtonText:"OK"}),this.addCartLoading=null,this.getCarts()}).catch(u=>{G.fire({title:u.response.data.message,icon:"error",confirmButtonText:"OK"})})},backToTop(){window.scrollTo({top:0,behavior:"instant"})}},mounted(){this.getProducts(),this.$refs.UserCouponModal.openModal(),P.to(".boxText",{text:"不想煮飯又不知道吃什麼?",duration:2,scrollTrigger:{trigger:".boxText",toggleActions:"play pause resume reset"}}),P.to(".boxText2",{text:"想吃好料但預算有限?",duration:3,scrollTrigger:{trigger:".boxText2",toggleActions:"play pause resume reset"}}),P.to(".boxText3",{text:"想外帶回家放鬆心情慢慢吃?",duration:4,scrollTrigger:{trigger:".boxText3",toggleActions:"play pause resume reset"}}),P.fromTo(".cursor",{opacity:0},{opacity:1,duration:.3,repeat:-1,yoyo:!0,repeatDelay:0})}},w=e=>(fe("data-v-e4fe6922"),e=e(),pe(),e),Te=Q('<header class="container-fluid" data-v-e4fe6922><div class="row flex-md-row-reverse flex-column" data-v-e4fe6922><div class="col-lg-7 p-0" data-v-e4fe6922><img style="min-height:calc(100vh - 106px);" src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVhdHxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="烤肉圖片" class="img-fluid w-100 object-fit RWD-img" data-v-e4fe6922></div><div class="col-lg-5 p-0 d-flex flex-column justify-content-center bg-primary bg-opacity-50" data-v-e4fe6922><img style="max-height:420px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678638078992.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=R%2BZGbHRhmf6KsCIRCt8bEsrbyTlwwE4yS2Alio5qwo5fb8xgQlTUMFaTJxVcELPqCWDtld8sCkziAUPpsMUqYqVT5%2BG1L8IPAkaB5A1%2FSJx0YFQvoFqQU1pKzFv07oWtS%2FWighTF8L5X09xShz2EimVT4owO%2BnU0IJkRkylqD7Nb8N2UAjoCCBPYtfqoqHQivDvKO9JVdQA32H3VEe7OUzTFlydtrkBMO%2F7JJaFL9MiA1i1TylAdw5Qb5rg0qzvch4VApCpcnhJjxZ1QVx%2FgH8oD3h8lI0Cgn1wuDhkVipAvQDXmsVCTIGVSSaOyZ95bd7d5yynMbgfxQBy33qVYQQ%3D%3D" alt="文字圖片" class="img-fluid object-fit RWD-img" data-v-e4fe6922><a href="#info" class="btn btn-primary w-100 fw-bold text-light" data-v-e4fe6922><i class="fa-solid fa-angles-down pe-1 arrowDown" data-v-e4fe6922></i>搶先看菜單</a></div></div></header>',1),ze={class:"pt-8"},Le=Q('<div class="pt-5" data-v-e4fe6922><div class="row g-0 justify-content-center text-white" data-v-e4fe6922><div data-aos="flip-left" data-aos-once="false" class="col-md-2 bg-primary text-center pt-5 box" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289349428.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=abKAnOn4Eod4ZkcloOyBliYVWrLfxklXhUUg6sohq9hyZ83WvJ1GTbR3nOF1W0%2FbcdI%2FKYvu1vdSdLGA5imGTJFzh%2F%2BPAM4kwqQ0ZQFUQEq0mf2MJz5O5X7pP%2FG%2FC5KRQmbvZ3eeozE6rikqZvRxSYzPXVpanX8082DndKGZfdCae22Pj%2BlwhP5uhkWeP3DUyTOgHrT7jXiMavzn0eEH%2FqGTtPT4z8LaClikzv3Sn35VjNbA13a0WXpFbMnSQodiSufslTNwtg%2Fb0MVHdpcQUIK62LMCo2WR5Tpznu8tC986bY%2F1bN4DoBaDld9Zlpr37pZ9wnyEC41ikH8Sl0Vzuw%3D%3D" alt="問號圖" data-v-e4fe6922><p class="pt-5" data-v-e4fe6922><span class="boxText" data-v-e4fe6922></span><span class="cursor" data-v-e4fe6922>_</span></p></div><div data-aos="flip-left" data-aos-delay="300" data-aos-once="false" class="col-md-2 bg-primary mx-5 text-center pt-5 box2" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289363027.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=Tr8QL4AoQhUJ2O0jtjYIk9fl2uv94xuEzEbXtu%2BhvUXBn4Z7kfmhIDcXUWFLgCYLHVmZQK%2Bt9ll7%2BOJh%2BEOhSJIcz7DO3zjz7fO%2FFtqen%2FRIdcAIxmLbT9Cd7D8I9NYEh4XU1qhVBw7CLXKDw%2F%2BIAg0shD8zSJ2J%2F9JNQLrLo6st2eaLKKqlU%2FqqKhNGsTH%2B9brBBODuz%2FRPaOYajOrhP0VxBu7M7vzw8TTnVv9uHx6X0yjZYeo0tD32v9H30u%2BumZxYS2S%2FMR1fkSIh4DqRHrLIGayHspWnv7Lgy1RpDdTO5vpne28KFzkR%2BxhVeiDUm2SvE6%2FP6mvvBzr3AyRe8w%3D%3D" alt="錢符號圖" data-v-e4fe6922><p class="pt-5" data-v-e4fe6922><span class="boxText2" data-v-e4fe6922></span><span class="cursor" data-v-e4fe6922>_</span></p></div><div data-aos="flip-left" data-aos-delay="500" data-aos-once="false" class="col-md-2 bg-primary text-center pt-5 box3" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289374630.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=hxTW9T%2FNFTw%2FSe3BsggOOehMD0OCBnK27SAeDPJ8oCQf%2FQ3Tc%2B%2Bbj0lNL2L4AnNVHxB7tQ4jkmCpQXQQUWXSN7JPMfUuQSfwL85A6GwPsRnTgeup1Dl8xqSEUAcn35Bi9yK4m4nsbfVsnwhSsV11jP9ybwgGYqt6BxoKnGEokgmCbQc4zwlh3wvX3Ay%2FFxgiP2mgB9qande%2BQ%2FIrJkl%2FB62rjU%2Bv66wf57osOpLnbOx%2BKRVhOqdeDUOa03eO3fgZbQfoS4QjwUz7iroq%2FXwVr68j%2BXD%2BQK48BgJ2aC2wmaySh0BCxiDtUpo%2Fo%2BUmMtgkl4YFQpfWZsguBvjfwfBBGg%3D%3D" alt="包包圖" data-v-e4fe6922><p class="pt-5" data-v-e4fe6922><span class="boxText3" data-v-e4fe6922></span><span class="cursor" data-v-e4fe6922>_</span></p></div></div><h2 class="text-center text-darkGreen pt-6 fw-bold" data-v-e4fe6922>點燒烤</h2><p class="text-center pt-2 pb-6 mb-0" data-v-e4fe6922>解決肚子餓、省荷包、放輕鬆</p></div>',1),_e={class:"container overflow-hidden text-center my-2 pt-3 bg-primary bg-opacity-50"},De=Q('<h2 class="text-darkGreen fw-bold p-5 mb-0 hrService" data-v-e4fe6922>選擇點燒烤好處?</h2><div class="row" data-v-e4fe6922><div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-6" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678698248990.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=g1ypz7YhA6C21pF6I3fvx8yp5sOZsNYd1loyov4kTJdYlgGDC%2Bn28t%2BJ2BcJJNYbdGjlLudjQonF0y7h%2Fsap%2FdavOfU70mwkWrlkFwsljyFidbZzou%2B%2FA4XvLj8h7iJiF2ltV9ZbZBqrCa%2BZERKtfT6D3zOee7yS174QdhMaHnMGvH%2FIZUPcj81Pid6ZdGL2yiXTZ2C3v3P99gfAxn8g7J55bCHkfquO0Tw8r4tSCbkpugzpIJ69WL3BTpaFCV155Nd%2BhIoYzaHamf3gzCGkLplTV74i%2B5ab5FHgLybnTFiGH4qB2i3adWo3LjDC8gyZxhSgYCqjtaWg24N0NBXkTA%3D%3D" alt="聚餐" class="w-100 object-fit" height="400" data-v-e4fe6922></div><div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center" data-v-e4fe6922><h4 class="mt-4 fw-bold" data-v-e4fe6922>聚餐首選</h4><p class="lh-lg" data-v-e4fe6922>無論是想和家人或朋友在家吃飯聊天、或是想自己在家喝點酒放鬆心情都很適合點燒烤吃</p></div></div><div class="row flex-row-reverse justify-content-between mt-4" data-v-e4fe6922><div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-6" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678709545749.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=EEq2KZJ8PYooPLZZAq9v9tXOVJZC5gYSl2fbD7SXto3lacQk8H3GnK22p4WwnToFArXno0vpVwGvbUCsmMttQtFmMmBeb7SrkKqOcTjFeO88MulGkPUmVnmDUoh27AyFKR%2FsHjW5HozZqS%2BhVZ9cQ5aGk36ONbOaedhrXX1se6%2FMn66EWw8Xy4i26D17TiU1JzF5yM0JlU%2FTVLSQi%2Bg31PClhmwIg1t2G0Tj1A%2BAOUxCyB%2BaKkiIBmgCVpkDu4xwVr3xPnb1h4CkQoa%2FdPSEVRegzub4I6C78m9CfvqieHlGw%2FjlmcqnJ4Qe86XaeYvWkLplx7Dc%2BuAIvR4U5YxE1A%3D%3D" alt="外帶" class="w-100 object-fit" height="400" data-v-e4fe6922></div><div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center" data-v-e4fe6922><h4 class="mt-4 fw-bold" data-v-e4fe6922>外帶方便</h4><p class="lh-lg" data-v-e4fe6922> 【不用自己生火、準備食材器具或是烤完還要收拾，也不會衣服褲子都是烤肉味，點燒烤幫您烤好想吃的食物，不只有肉還有蔬菜等多種選擇】 </p></div></div><div class="row mt-4" data-v-e4fe6922><div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-6" data-v-e4fe6922><img src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679035649832.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=Dy6lcp%2BqKlS9h%2FreF41Mxdyp9azJDiEb6R2zJBOz1C6wbpjGrKR29rkIiJIfIRq9T6bgHRFI8Gb8Upo3qDhBXYs71Y7DWodqf1WRnGsHaL1FPH7JSugBc67OJA0n4Gy0aVCwYe%2BFxqdve3CIO6pgqvfWu3BwJSRjtlvAZ1B9a9KWF1eECeaCm51Dok3qGryOE0ls%2FAkwyNgA0ewA4ZtSQ4mX97%2BaVn12HM%2BUnWBxPcBBzmL1cefGpuu%2BJY7Dwc9NIqf75waA7ynTnLH4gLt6YACX2K6Q6sB7YS5ePTA3%2FUy0FkdIPjgAu7JYn23UrbfFnBsWnhm7F9crZYHubktjmg%3D%3D" alt="食材新鮮" class="w-100 object-fit" height="400" data-v-e4fe6922></div><div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center" data-v-e4fe6922><h4 class="mt-4 fw-bold" data-v-e4fe6922>食材新鮮</h4><p class="lh-lg" data-v-e4fe6922>【食材的新鮮程度影響著口感和營養價值，所以我們每天堅持使用新鮮的食材來烹製每一道菜品】</p></div></div>',4),Me=w(()=>n("button",{id:"info",type:"button",class:"btn btn-primary btn-lg m-4 text-light fw-bold"},"查看完整菜單",-1)),Ie={class:"container overflow-hidden pb-4"},Oe=w(()=>n("h2",{class:"text-darkGreen text-center fw-bold p-5 mb-0 hrService"},"熱門菜色",-1)),Ee={class:"card"},Pe=["src","alt"],qe={class:"card-body"},Ue={class:"card-title"},$e={class:"float-start"},Ve={class:"float-end"},we=["onClick","disabled"],Ge={key:0,class:"spinner-border spinner-border-sm",role:"status"},He={class:"d-flex justify-content-end pb-4 pe-2 sticky-bottom",style:{"z-index":"5"}},je=w(()=>n("i",{class:"bi bi-arrow-up-circle text-white arrowUp"},"TOP",-1)),Qe=w(()=>n("img",{style:{height:"50px"},alt:"烤肉圖片",src:"https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678695186672.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZXhdShiWihGliXQGXdmLxYVSYirttV7%2ByeJ6%2FtrmDpwiIvJXQA8zVZEcTKS3egpDq%2F6VHs%2B7y4qVp7ijEYlnIwbjBLUNc6YImnzlvw8NO6ZxwWoSAxg4L%2FhKQvOeCfhrEnhyHtpoSVqksSWyY0BylhFXFnKJToFmQU2yMjzUqV2t8f8SJSNxqzqdtRWbUoJUgac%2BD3buGQToVo3VloEzuNOZBdTQ64%2FHbfXJMEx4ysC46OuMFdXPBMqigQNIuZM5F7ZeF8Ckrir4DXrRWrbbGlvHZFt6qASEAYcwIU%2BNP4Pcg%2FFOMFgGSQttuJ4AAtZlWZJRqdVjyD5bYUUJIPFYUg%3D%3D"},null,-1)),Je=[je,Qe];function Ye(e,f,s,u,r,m){const x=q("UserCouponModal"),g=q("RouterLink"),F=q("swiper-slide"),p=q("swiper");return _(),$(X,null,[H(x,{ref:"UserCouponModal"},null,512),Te,n("main",ze,[Le,n("div",_e,[De,H(g,{to:"/products",class:"nav-link"},{default:U(()=>[Me]),_:1})]),n("div",Ie,[Oe,r.products?(_(),Z(p,{key:0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},loop:!0,spaceBetween:45,slidesPerView:1,breakpoints:{768:{slidesPerView:3}},centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,modules:r.modules,class:"mySwiper px-5 py-2",style:{"z-index":"10"}},{default:U(()=>[(_(!0),$(X,null,de(r.products,l=>(_(),Z(F,{class:"px-2",key:l.id},{default:U(()=>[n("div",Ee,[n("img",{src:l.imageUrl,class:"card-img-top object-fit",height:"200",alt:l.title},null,8,Pe),n("div",qe,[n("h5",Ue,[n("span",$e,N(l.title),1),n("span",Ve,"$ "+N(l.price),1)]),H(g,{to:`/product/${l.id}`,class:"btn btn-outline-secondary w-100 mt-3"},{default:U(()=>[V(" 查看更多產品細節")]),_:2},1032,["to"]),n("button",{type:"button",class:"btn btn-outline-primary w-100 mt-3",onClick:()=>m.addToCart(l.id),disabled:r.addCartLoading===l.id},[r.addCartLoading===l.id?(_(),$("span",Ge)):R("",!0),V(" 加到購物車 ")],8,we)])])]),_:2},1024))),128))]),_:1},8,["modules"])):R("",!0)]),n("div",He,[n("button",{type:"button",onClick:f[0]||(f[0]=(...l)=>m.backToTop&&m.backToTop(...l)),class:"btn btn-primary d-flex flex-column align-items-center"},Je)])])],64)}const ea=ae(Ae,[["render",Ye],["__scopeId","data-v-e4fe6922"]]);export{ea as default};
