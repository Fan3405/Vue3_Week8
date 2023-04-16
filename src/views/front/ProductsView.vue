<template>
  <div
    style="
      background-position: center;
      background-size: cover;
      object-fit: cover;
      height: 300px;
      background-image: url('https://images.unsplash.com/photo-1560380185-9644d262854c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
    "
  ></div>
  <main class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-9 text-center">
        <h2 class="text-darkGreen fw-bold p-4 mb-0 hrPromotions">{{ category ? category : '菜單' }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="list-group sticky-top top-150 RWD-menu" id="list-tab" role="tablist">
          <h4 class="list-group-item bg-primary text-white m-0" aria-current="true">菜單分類</h4>
          <ul class="list-unstyled">
            <li>
              <button
                type="button"
                class="list-group-item list-group-item-action bg-primary bg-opacity-50 text-white"
                id="list-home-list"
                role="tab"
                aria-controls="list-home"
                @click="() => getProducts('所有餐點')"
                :disabled="category === '所有餐點'"
              >
                所有餐點
              </button>
            </li>
            <li>
              <button
                type="button"
                class="list-group-item list-group-item-action bg-primary bg-opacity-50 text-white"
                id="list-home-list"
                href="#"
                role="tab"
                aria-controls="list-home"
                @click.prevent="() => getProducts('烤肉')"
                :disabled="category === '烤肉'"
              >
                烤肉
              </button>
            </li>
            <li>
              <button
                type="button"
                class="list-group-item list-group-item-action bg-primary bg-opacity-50 text-white"
                id="list-home-list"
                href="#"
                role="tab"
                aria-controls="list-home"
                @click.prevent="() => getProducts('蔬菜')"
                :disabled="category === '蔬菜'"
              >
                蔬菜
              </button>
            </li>
            <li>
              <button
                type="button"
                class="list-group-item list-group-item-action bg-primary text-white bg-opacity-50 bg-opacity-50 rounded-bottom"
                id="list-home-list"
                href="#"
                role="tab"
                aria-controls="list-home"
                @click.prevent="() => getProducts('飲品')"
                :disabled="category === '飲品'"
              >
                飲品
              </button>
            </li>
            <li>
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679043836381.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FjesjB%2Fr%2B6JLipiNnzSJhxFxp9BCnE0pUrDOPhLo0ZqCrYmGIYRa4R5XZCGExe8UDjXtXVMWc4mMkK6HkfYnUzOMmlKAWGVrGhbIeHDm85YmfuFhXIpKfPj7ftWYQvUlOwKywETk59SFQKop%2FNq25asEYjq7PSDtSMRPfdRtLO0dZyYkT5bfHobi2%2BaA6QYe%2B5umgu8VvNG5V39LP3q92zv1cTaoCwq8I5dEt4YFrNIf4gAgwDqdH%2BEN979yv5bfD3zTkctlQcgJlcEtA5SOo36xOgcWzvprsFK%2Bu0G3F0PO5RQsFJ5xA9MGh%2Bz7zfL8X6gHFF8TbzpPm3%2FdjnmBtA%3D%3D"
                alt="烤肉圖片"
                width="230"
                height="120"
                class="meat object-fit"
              />
            </li>
            <li>
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679040934274.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CQvxryEJfLZr33%2FoeREEo1zgbRg4n%2B7YuGVzPG6oQVy11nEDCjT0vAu330O%2FKir2tLtjpHgZ5Q9aCHO%2FBdWd3AbidIWXCNA03XKTKNSOA2nx%2B8%2F4J2Jt60kfsqbz7%2FPrRfDFOUFkchu7t0fK8ZhWNn8XNUs78%2BevFIIyWyDNMUz6s2CjUXbT2W%2BUpgSnTDYUMk9LfHs5ATzPCpDHaCUZDUGHwJs78cBSEv2M6RS2fxMcwxQTzvkNVYWynyz%2ByAzphpEalnVrq6gzLjy%2BQNXGOyo8U7lLECCqRunqXFByi2dyENRE6IXPMPgHeJWV%2BUKwYOjOxz4OkeigvemNo7Kh9Q%3D%3D"
                alt="烤肉架圖片"
                width="250"
                height="100"
                class="fire object-fit"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row my-4 g-4 mt-0">
          <div class="col-md-4 mt-0 mb-4" v-for="product in products" :key="product.id">
            <div class="card">
              <img :src="product.imageUrl" class="card-img-top object-fit" height="200" :alt="product.title" />
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.title }}
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
            </div>
          </div>
        </div>
        <PaginationComponent :category="category" :pages="page" :get-data="getProducts"></PaginationComponent>
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2'; // 引入sweet alert2套件
import { mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
import PaginationComponent from '../../components/PaginationComponent.vue';
import vueLoadingStore from '../../stores/vueLoadingStore';

// 用解構方式取得URL、PATH
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [], // 產品列表
      addCartLoading: null, // 設定loading效果用的，點擊加入購物車會先將id傳入之後再清空
      currentPage: 1, // 做當前頁面使用
      page: {}, // 做分頁使用
      category: null, // 儲存分類使用
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getProducts(category = '', page = 1) {
      this.currentPage = page;
      // vue loading效果
      this.showLoading();
      let url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?page=${page}`;
      if (category === '烤肉' || category === '蔬菜' || category === '飲品') {
        url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`;
        this.category = category;
      } else if (category === '所有餐點') {
        this.category = '所有餐點';
      }
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
      // 滾動到當前頁面的指定位置
      window.scrollTo({
        top: 300,
        behavior: 'smooth', // 滾動到目標位置，會有平滑的動畫效果
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
  },
  mounted() {
    this.getProducts();
  },
  components: {
    PaginationComponent,
  },
};
</script>

<style lang="scss" scoped>
.meat {
  position: relative;
  animation: meat 5s ease-in-out infinite;
}

@keyframes meat {
  0% {
    transform: rotate(0deg);
    scale: 1.5;
  }
  50% {
    transform: rotate(-30deg) translateY(20%);
    scale: 1.1;
  }
  100% {
    transform: rotate(0deg);
    scale: 1.5;
  }
}

.fire {
  transform: scale(1.3);
}

@media (max-width: 992px) {
  .meat {
    width: 100%;
  }
  .fire {
    width: 100%;
    transform: scale(2);
  }
}
@media (max-width: 768px) {
  .RWD-menu {
    position: static;
    .meat {
      width: 30%;
      height: 100px;
    }
    .fire {
      width: 30%;
    }
  }
}

@media (max-width: 450px) {
  .RWD-menu {
    position: static;
    .meat {
      width: 30%;
      height: 40px;
    }
    .fire {
      width: 30%;
    }
  }
}
</style>
