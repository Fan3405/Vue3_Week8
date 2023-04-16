<template>
  <!-- 跑馬燈 -->
  <div v-if="product.notice" class="bg-light mt-6">
    <div class="container overflow-hidden">
      <div class="row justify-content-center py-7">
        <div class="col-md-8 d-flex marquee">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678947674648.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IxbuVUaBUEx8MI2zuLJnckYHFXZwWIiMj%2FIN0hJxm1V21fgFNLBtz2kHAsDvck2zmiBnSenb65tiYe7YmC0dRwaEPezgk0hLOD5QnHSpJ5An8vFF7cCEbJH7QIzPzp01ZdcLheh6kXGKVON%2BIVxhE4kud5t3SBvcjNJcwOGOHTfu%2Bg0wDBPGv%2BblDj9CYUCeRgnMMMLVZo1DqLDZ9T03PukYnAbztegdGF%2BqP6ZmOnuoJK34%2F9r123B%2Ba0nBVpPl5DrSn%2BHjz1ou3dDPks%2BLFuKffVZVGlqme3rvnQg2lbQJp1tXyDfOMMwniZocO9oF0FvzCLCzW%2Fjs5o%2BBuoctZg%3D%3D"
            alt="No drinking"
            class="rounded-circle me-5"
            style="width: 160px; height: 160px; object-fit: cover"
          />
          <div class="d-flex flex-column">
            <p class="h5 my-auto text-danger fw-bold">“{{ product.notice }}”</p>
            <p class="my-auto text-muted">點燒烤</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-3" tabindex="-1" role="dialog" aria-hidden="true">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/products">產品列表</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div role="document">
      <div class="border-0">
        <div class="bg-primary p-3 text-white">
          <h5 class="mb-0">
            <span>{{ product.title }}</span>
          </h5>
        </div>
        <div>
          <div class="row">
            <div class="col-sm-6">
              <!-- v-if="imagesUrl.length"等有資料時才建立swiper否則v-for資料還沒渲染完swiper功能會失效 -->
              <swiper
                v-if="imagesUrl.length"
                :style="{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }"
                :loop="true"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }"
                class="mySwiper2"
              >
                <swiper-slide v-for="image in imagesUrl" :key="image + '123'"
                  ><img class="img-fluid" :src="image" alt="產品圖片"
                /></swiper-slide>
              </swiper>
              <swiper
                v-if="imagesUrl.length"
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide v-for="image in imagesUrl" :key="image + '123'"
                  ><img class="img-fluid" :src="image" alt="產品圖片"
                /></swiper-slide>
              </swiper>
            </div>
            <div class="col-sm-6 lh-lg p-3">
              <p class="badge bg-primary rounded-pill">{{ product.category }}</p>
              <span class="fw-bold text-danger">{{ product.notice }}</span>
              <p>商品內容：{{ product.content }}</p>
              <p>商品描述：{{ product.description }}</p>
              <div v-if="product.price === product.origin_price" class="h5">$ {{ product.price }} 元</div>
              <div v-else>
                <del class="h6 text-danger">原價$ {{ product.origin_price }} 元</del>
                <div class="h5 fw-bold">現在只要$ {{ product.price }} 元 / 1 {{ product.unit }}</div>
              </div>
              <div>
                <div class="input-group">
                  <select
                    name=""
                    id=""
                    class="form-select"
                    v-model="qty"
                    :disabled="addCartLoading === product.id || qtyMaxStatus"
                  >
                    <option :value="i" v-for="i in 30" :key="`${i}123`">
                      {{ i }}
                    </option>
                  </select>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addToCart(product.id, qty)"
                    :disabled="addCartLoading === product.id || qtyMaxStatus"
                  >
                    <span class="spinner-border spinner-border-sm" role="status" v-if="addCartLoading === product.id"></span>
                    加入購物車
                  </button>
                </div>
                <p v-if="qtyMaxStatus" class="fw-bold text-danger">此商品於購物車內已達數量上限</p>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
          <div v-if="product" class="row flex-row-reverse justify-content-between my-5">
            <div data-aos="zoom-in" class="col-md-6 p-0">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679035708365.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Z5aK2CO3Vo3fWnJWXsvh4boai%2FTLAavmGMAggqyLl9D8E4hKmDaF0O9zzLQp2tLVYyPYwn%2Ff7C%2FvWWVomz%2BRX64xRbkChlxZ55FMpVrIf6JB%2BRXaAGxN5%2By29d5pov%2FYbiojWT57II5aBthPOABtschk2LRUGx68k4PJ9%2FZ4WFkDzj1auAi5CreZwWvYZvTuTWhOpLoXxeTOnVpMU1fpr%2BQ4atObuwzIwZdag5U6JjRO4S%2BmMbS6Yn13udUW54v%2B0VpYT2casTdLIscUl6hV07Ncpf2mC5sN7bX9p%2FgCFAenElwivlE0ZQTyU%2BsjXPlRi%2BCqWSaoaoEplOC7OAS4TQ%3D%3D"
                alt="新鮮食材"
                class="w-100 object-fit"
                height="400"
              />
            </div>
            <div data-aos="zoom-in" class="col-md-4 m-auto text-center">
              <h4 class="mt-4 fw-bold">食安疑慮</h4>
              <p class="lh-lg">
                【
                我們對食材有很高的品質要求和更嚴格的監管，對於食品產品安全性的擔憂和質疑，我們能保證不會使用低質或有問題的原材料或成分，每天堅持使用新鮮的食材來烹製每一道菜品
                】
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'; // 引入sweet alert2套件
// 引入swiper套件，Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import {
  FreeMode, Navigation, Thumbs, Autoplay,
} from 'swiper';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import vueLoadingStore from '../../stores/vueLoadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null, // swiper套件
      modules: [FreeMode, Navigation, Thumbs, Autoplay], // swiper套件
      product: {},
      imagesUrl: [], // 放主圖跟多圖合併後的資料
      qty: 1, // 定義預設值
      addCartLoading: null, // 設定loading效果用的，點擊加入購物車會先將id傳入之後再清空
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    getProduct() {
      // vue loading效果
      this.showLoading(); //
      const { id } = this.$route.params; // 透過動態路由取得參數id，用解構方式寫，也可寫成const id = this.$route.params.id但解構寫法較正確
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((response) => {
          this.product = response.data.product;
          this.hideLoading();

          // 將主圖跟多圖放到一個新的陣列中，使用filter()方法來過濾掉空值，使用展開運算子 ... 將response.data.product.imagesUrl陣列中的所有元素展開到新的陣列中
          this.imagesUrl = [response.data.product.imageUrl, ...response.data.product.imagesUrl].filter((url) => url !== '');
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
          this.getCarts();
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.addCartLoading = null; // 清除id下次點擊比對id才能顯示loading效果
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
  },
  computed: {
    ...mapState(cartStore, ['qtyMaxStatus']),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
/* swiper樣式 */
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 400px;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100px;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 跑馬燈動畫效果 */
.marquee {
  animation: marquee 10s linear infinite;
  /* 以線性的速度向左移動 */
}

@keyframes marquee {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
