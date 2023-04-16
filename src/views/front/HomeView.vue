<template>
  <UserCouponModal ref="UserCouponModal"></UserCouponModal>
  <header class="container-fluid">
    <div class="row flex-md-row-reverse flex-column">
      <div class="col-lg-7 p-0">
        <img
          style="min-height: calc(100vh - 106px)"
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="烤肉圖片"
          class="img-fluid w-100 object-fit RWD-img"
        />
      </div>
      <div class="col-lg-5 p-0 d-flex flex-column justify-content-center bg-primary bg-opacity-50">
        <img
          style="max-height: 420px"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678638078992.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=R%2BZGbHRhmf6KsCIRCt8bEsrbyTlwwE4yS2Alio5qwo5fb8xgQlTUMFaTJxVcELPqCWDtld8sCkziAUPpsMUqYqVT5%2BG1L8IPAkaB5A1%2FSJx0YFQvoFqQU1pKzFv07oWtS%2FWighTF8L5X09xShz2EimVT4owO%2BnU0IJkRkylqD7Nb8N2UAjoCCBPYtfqoqHQivDvKO9JVdQA32H3VEe7OUzTFlydtrkBMO%2F7JJaFL9MiA1i1TylAdw5Qb5rg0qzvch4VApCpcnhJjxZ1QVx%2FgH8oD3h8lI0Cgn1wuDhkVipAvQDXmsVCTIGVSSaOyZ95bd7d5yynMbgfxQBy33qVYQQ%3D%3D"
          alt="文字圖片"
          class="img-fluid object-fit RWD-img"
        />
        <a href="#info" class="btn btn-primary w-100 fw-bold text-light"
          ><i class="fa-solid fa-angles-down pe-1 arrowDown"></i>搶先看菜單</a
        >
      </div>
    </div>
  </header>
  <main class="pt-8">
    <div class="pt-5">
      <div class="row g-0 justify-content-center text-white">
        <div data-aos="flip-left" data-aos-once="false" class="col-md-2 bg-primary text-center pt-5 box">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289349428.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=abKAnOn4Eod4ZkcloOyBliYVWrLfxklXhUUg6sohq9hyZ83WvJ1GTbR3nOF1W0%2FbcdI%2FKYvu1vdSdLGA5imGTJFzh%2F%2BPAM4kwqQ0ZQFUQEq0mf2MJz5O5X7pP%2FG%2FC5KRQmbvZ3eeozE6rikqZvRxSYzPXVpanX8082DndKGZfdCae22Pj%2BlwhP5uhkWeP3DUyTOgHrT7jXiMavzn0eEH%2FqGTtPT4z8LaClikzv3Sn35VjNbA13a0WXpFbMnSQodiSufslTNwtg%2Fb0MVHdpcQUIK62LMCo2WR5Tpznu8tC986bY%2F1bN4DoBaDld9Zlpr37pZ9wnyEC41ikH8Sl0Vzuw%3D%3D"
            alt="問號圖"
          />
          <p class="pt-5">
            <span class="boxText"></span>
            <span class="cursor">_</span>
          </p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-once="false"
          class="col-md-2 bg-primary mx-5 text-center pt-5 box2"
        >
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289363027.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tr8QL4AoQhUJ2O0jtjYIk9fl2uv94xuEzEbXtu%2BhvUXBn4Z7kfmhIDcXUWFLgCYLHVmZQK%2Bt9ll7%2BOJh%2BEOhSJIcz7DO3zjz7fO%2FFtqen%2FRIdcAIxmLbT9Cd7D8I9NYEh4XU1qhVBw7CLXKDw%2F%2BIAg0shD8zSJ2J%2F9JNQLrLo6st2eaLKKqlU%2FqqKhNGsTH%2B9brBBODuz%2FRPaOYajOrhP0VxBu7M7vzw8TTnVv9uHx6X0yjZYeo0tD32v9H30u%2BumZxYS2S%2FMR1fkSIh4DqRHrLIGayHspWnv7Lgy1RpDdTO5vpne28KFzkR%2BxhVeiDUm2SvE6%2FP6mvvBzr3AyRe8w%3D%3D"
            alt="錢符號圖"
          />
          <p class="pt-5">
            <span class="boxText2"></span>
            <span class="cursor">_</span>
          </p>
        </div>
        <div data-aos="flip-left" data-aos-delay="500" data-aos-once="false" class="col-md-2 bg-primary text-center pt-5 box3">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678289374630.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hxTW9T%2FNFTw%2FSe3BsggOOehMD0OCBnK27SAeDPJ8oCQf%2FQ3Tc%2B%2Bbj0lNL2L4AnNVHxB7tQ4jkmCpQXQQUWXSN7JPMfUuQSfwL85A6GwPsRnTgeup1Dl8xqSEUAcn35Bi9yK4m4nsbfVsnwhSsV11jP9ybwgGYqt6BxoKnGEokgmCbQc4zwlh3wvX3Ay%2FFxgiP2mgB9qande%2BQ%2FIrJkl%2FB62rjU%2Bv66wf57osOpLnbOx%2BKRVhOqdeDUOa03eO3fgZbQfoS4QjwUz7iroq%2FXwVr68j%2BXD%2BQK48BgJ2aC2wmaySh0BCxiDtUpo%2Fo%2BUmMtgkl4YFQpfWZsguBvjfwfBBGg%3D%3D"
            alt="包包圖"
          />
          <p class="pt-5">
            <span class="boxText3"></span>
            <span class="cursor">_</span>
          </p>
        </div>
      </div>
      <h2 class="text-center text-darkGreen pt-6 fw-bold">點燒烤</h2>
      <p class="text-center pt-2 pb-6 mb-0">解決肚子餓、省荷包、放輕鬆</p>
    </div>
    <div class="container overflow-hidden text-center my-2 pt-3 bg-primary bg-opacity-50">
      <h2 class="text-darkGreen fw-bold p-5 mb-0 hrService">選擇點燒烤好處?</h2>
      <div class="row">
        <div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-6">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678698248990.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g1ypz7YhA6C21pF6I3fvx8yp5sOZsNYd1loyov4kTJdYlgGDC%2Bn28t%2BJ2BcJJNYbdGjlLudjQonF0y7h%2Fsap%2FdavOfU70mwkWrlkFwsljyFidbZzou%2B%2FA4XvLj8h7iJiF2ltV9ZbZBqrCa%2BZERKtfT6D3zOee7yS174QdhMaHnMGvH%2FIZUPcj81Pid6ZdGL2yiXTZ2C3v3P99gfAxn8g7J55bCHkfquO0Tw8r4tSCbkpugzpIJ69WL3BTpaFCV155Nd%2BhIoYzaHamf3gzCGkLplTV74i%2B5ab5FHgLybnTFiGH4qB2i3adWo3LjDC8gyZxhSgYCqjtaWg24N0NBXkTA%3D%3D"
            alt="聚餐"
            class="w-100 object-fit"
            height="400"
          />
        </div>
        <div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center">
          <h4 class="mt-4 fw-bold">聚餐首選</h4>
          <p class="lh-lg">無論是想和家人或朋友在家吃飯聊天、或是想自己在家喝點酒放鬆心情都很適合點燒烤吃</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-6">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678709545749.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EEq2KZJ8PYooPLZZAq9v9tXOVJZC5gYSl2fbD7SXto3lacQk8H3GnK22p4WwnToFArXno0vpVwGvbUCsmMttQtFmMmBeb7SrkKqOcTjFeO88MulGkPUmVnmDUoh27AyFKR%2FsHjW5HozZqS%2BhVZ9cQ5aGk36ONbOaedhrXX1se6%2FMn66EWw8Xy4i26D17TiU1JzF5yM0JlU%2FTVLSQi%2Bg31PClhmwIg1t2G0Tj1A%2BAOUxCyB%2BaKkiIBmgCVpkDu4xwVr3xPnb1h4CkQoa%2FdPSEVRegzub4I6C78m9CfvqieHlGw%2FjlmcqnJ4Qe86XaeYvWkLplx7Dc%2BuAIvR4U5YxE1A%3D%3D"
            alt="外帶"
            class="w-100 object-fit"
            height="400"
          />
        </div>
        <div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center">
          <h4 class="mt-4 fw-bold">外帶方便</h4>
          <p class="lh-lg">
            【不用自己生火、準備食材器具或是烤完還要收拾，也不會衣服褲子都是烤肉味，點燒烤幫您烤好想吃的食物，不只有肉還有蔬菜等多種選擇】
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div data-aos="fade-up-right" data-aos-offset="180" data-aos-once="false" class="col-md-6">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679035649832.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Dy6lcp%2BqKlS9h%2FreF41Mxdyp9azJDiEb6R2zJBOz1C6wbpjGrKR29rkIiJIfIRq9T6bgHRFI8Gb8Upo3qDhBXYs71Y7DWodqf1WRnGsHaL1FPH7JSugBc67OJA0n4Gy0aVCwYe%2BFxqdve3CIO6pgqvfWu3BwJSRjtlvAZ1B9a9KWF1eECeaCm51Dok3qGryOE0ls%2FAkwyNgA0ewA4ZtSQ4mX97%2BaVn12HM%2BUnWBxPcBBzmL1cefGpuu%2BJY7Dwc9NIqf75waA7ynTnLH4gLt6YACX2K6Q6sB7YS5ePTA3%2FUy0FkdIPjgAu7JYn23UrbfFnBsWnhm7F9crZYHubktjmg%3D%3D"
            alt="食材新鮮"
            class="w-100 object-fit"
            height="400"
          />
        </div>
        <div data-aos="fade-up-left" data-aos-offset="180" data-aos-once="false" class="col-md-4 m-auto text-center">
          <h4 class="mt-4 fw-bold">食材新鮮</h4>
          <p class="lh-lg">【食材的新鮮程度影響著口感和營養價值，所以我們每天堅持使用新鮮的食材來烹製每一道菜品】</p>
        </div>
      </div>
      <RouterLink to="/products" class="nav-link"
        ><button id="info" type="button" class="btn btn-primary btn-lg m-4 text-light fw-bold">查看完整菜單</button></RouterLink
      >
    </div>
    <div class="container overflow-hidden pb-4">
      <h2 class="text-darkGreen text-center fw-bold p-5 mb-0 hrService">熱門菜色</h2>
      <!-- :breakpoints設定，螢幕大於768顯示三個產品，小於768則顯示一個 -->
      <swiper
        v-if="products"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :loop="true"
        :spaceBetween="45"
        :slidesPerView="1"
        :breakpoints="{
          768: {
            slidesPerView: 3,
          },
        }"
        :centeredSlides="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper px-5 py-2"
        style="z-index: 10"
      >
        <swiper-slide class="px-2" v-for="product in products" :key="product.id">
          <div class="card">
            <img :src="product.imageUrl" class="card-img-top object-fit" height="200" :alt="product.title" />
            <div class="card-body">
              <h5 class="card-title">
                <span class="float-start">
                  {{ product.title }}
                </span>
                <!-- float-end可以讓文字在span裡靠最右 -->
                <span class="float-end"
                  >$
                  {{ product.price }}
                </span>
              </h5>
              <!-- w-100把加入購物車按鈕設定滿寬 -->
              <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary w-100 mt-3">
                查看更多產品細節</RouterLink
              >
              <!-- 點擊加入購物車時會先顯示不能再次點擊按鈕:disabled="addCartLoading===product.id" -->
              <!-- @click="() => addToCart(product.id)"前面加入箭頭函式表示要點擊才執行(在JS邏輯才會正確)，沒有加入表示立刻執行 -->
              <button
                type="button"
                class="btn btn-outline-primary w-100 mt-3"
                @click="() => addToCart(product.id)"
                :disabled="addCartLoading === product.id"
              >
                <!-- 當傳入的id相同時會跑loading效果v-if="addCartLoading===product.id" -->
                <span class="spinner-border spinner-border-sm" role="status" v-if="addCartLoading === product.id"></span>
                加到購物車
              </button>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
    <div class="d-flex justify-content-end pb-4 pe-2 sticky-bottom" style="z-index: 5">
      <button type="button" @click="backToTop" class="btn btn-primary d-flex flex-column align-items-center">
        <i class="bi bi-arrow-up-circle text-white arrowUp">TOP</i>
        <img
          style="height: 50px"
          alt="烤肉圖片"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678695186672.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZXhdShiWihGliXQGXdmLxYVSYirttV7%2ByeJ6%2FtrmDpwiIvJXQA8zVZEcTKS3egpDq%2F6VHs%2B7y4qVp7ijEYlnIwbjBLUNc6YImnzlvw8NO6ZxwWoSAxg4L%2FhKQvOeCfhrEnhyHtpoSVqksSWyY0BylhFXFnKJToFmQU2yMjzUqV2t8f8SJSNxqzqdtRWbUoJUgac%2BD3buGQToVo3VloEzuNOZBdTQ64%2FHbfXJMEx4ysC46OuMFdXPBMqigQNIuZM5F7ZeF8Ckrir4DXrRWrbbGlvHZFt6qASEAYcwIU%2BNP4Pcg%2FFOMFgGSQttuJ4AAtZlWZJRqdVjyD5bYUUJIPFYUg%3D%3D"
        />
      </button>
    </div>
  </main>
</template>

<script>
// 引入bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {
  EffectCoverflow, Autoplay, Pagination, Navigation,
} from 'swiper';
import Swal from 'sweetalert2'; // 引入sweet alert2套件
import { mapActions } from 'pinia';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextPlugin } from 'gsap/TextPlugin';
import cartStore from '../../stores/cartStore';
import UserCouponModal from '../../components/front/UserCouponModal.vue';
import vueLoadingStore from '../../stores/vueLoadingStore';

// 用解構方式取得URL、PATH
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  components: {
    Swiper,
    SwiperSlide,
    UserCouponModal,
  },
  data() {
    return {
      modules: [EffectCoverflow, Autoplay, Pagination, Navigation],
      products: [], // 產品列表
      addCartLoading: null, // 設定loading效果用的，點擊加入購物車會先將id傳入之後再清空
      currentPage: 1, // 做當前頁面使用
      page: {}, // 做分頁使用
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getProducts(page = 1) {
      this.currentPage = page;
      this.showLoading();
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?page=${page}`;

      this.$http
        .get(url)
        .then((response) => {
          // 將分頁功能儲存
          this.page = response.data.pagination;
          this.products = response.data.products;
          this.hideLoading();
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
          this.hideLoading();
        });
    },
    ...mapActions(cartStore, ['getCarts']),
    addToCart(productId, qty = 1) {
      // 需要傳入後端的資料格式，qty=1當沒有傳入該參數時，預設值為1
      const data = {
        product_id: productId,
        qty,
      };
      this.addCartLoading = productId; // 加入購物車先傳入id顯示loading效果用
      this.$http
        .post(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`,
          { data }, // {data:data}的縮寫，因為要傳入的資料格式是物件裡帶入data，所以要加括號
        )
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.addCartLoading = null; // 清除id下次點擊比對id才能顯示loading效果
          this.getCarts();
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    backToTop() {
      // 滾動到當前頁面的頂部
      window.scrollTo({
        top: 0,
        behavior: 'instant', // 滾動到目標位置，不會有任何動畫效果
      });
    },
  },
  mounted() {
    this.getProducts();
    this.$refs.UserCouponModal.openModal();
    /* 新增打字效果 */
    gsap.to('.boxText', {
      text: '不想煮飯又不知道吃什麼?' /* text屬性將自動為DOM元素嵌入我們所輸入的文字 */,
      duration: 2,
      scrollTrigger: {
        trigger: '.boxText',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.to('.boxText2', {
      text: '想吃好料但預算有限?' /* text屬性將自動為DOM元素嵌入我們所輸入的文字 */,
      duration: 3,
      scrollTrigger: {
        trigger: '.boxText2',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.to('.boxText3', {
      text: '想外帶回家放鬆心情慢慢吃?' /* text屬性將自動為DOM元素嵌入我們所輸入的文字 */,
      duration: 4,
      scrollTrigger: {
        trigger: '.boxText3',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.fromTo(
      '.cursor',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0,
      },
    );
  },
};
</script>

<!-- scoped 只會影響到當前的 Vue 組件，不會影響到其他 Vue 組件或是全局 -->
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* 螢幕寬度小於991px套用以下 */
@media (max-width: 991px) {
  .RWD-img {
    object-fit: contain;
    min-height: 100% !important;
  }
}

/* 螢幕寬度大於1400套用 */
@media (min-width: 1200px) {
  .RWD-img {
    max-height: 520px !important;
  }
}

.arrowDown {
  position: relative;
  animation: arrowDown 1s infinite;
}
@keyframes arrowDown {
  0% {
    bottom: 6px;
    opacity: 0.6;
  }
  100% {
    bottom: -2px;
  }
}

.arrowUp {
  position: relative;
  animation: arrowUp 1s infinite;
}
@keyframes arrowUp {
  0% {
    bottom: -3px;
    opacity: 0.6;
  }
  100% {
    bottom: 5px;
  }
}
</style>
