<template>
  <!-- 購物車列表 -->
  <!-- 清空購物車deleteAllCarts不用帶參數可以省略()括號 -->
  <!-- 當購物車沒有資料時就不能點擊清空購物車:disabled="!cart?.carts?.length" -->
  <div class="container my-5 bg-primary bg-opacity-50 p-5 border border-primary">
    <div class="text-end">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCarts"
        :disabled="!cart?.carts?.length || delAllLoading"
      >
        <span class="spinner-border spinner-border-sm" role="status" v-if="delAllLoading"></span>
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th style="width: 25%">圖片</th>
          <th style="width: 20%">品名</th>
          <th class="RWD-width" style="width: 20%">數量/單位</th>
          <th class="text-end">單價</th>
          <th class="text-end">小計</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cart?.carts?.length">
          <tr v-for="item in cart.carts" :key="item.id">
            <td>
              <!--在刪除時會顯示區塊不能點擊，避免重複觸發API :disabled="item.id===loadingItem"-->
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="() => deleteCartItem(item)"
                :disabled="item.id === loadingItem"
              >
                <span class="spinner-border spinner-border-sm" role="status" v-if="item.id === loadingItem"></span>
                <span v-else>x</span>
              </button>
            </td>
            <td>
              <img class="w-100 object-fit" height="100" :src="item.product.imageUrl" :alt="item.product.title" />
            </td>
            <td>
              {{ item.product.title }}
              <div v-if="couponText" class="fw-bold text-success">已套用優惠券{{ coupon_code }}</div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <!-- v-model="item.qty"綁定值 -->
                <!--在更新時會顯示灰色區塊不能點擊，等跑完才能再次修改:disabled="item.id===loadingItem"-->
                <select class="form-select" v-model="item.qty" @change="updateCartItem(item)" :disabled="item.id === loadingItem">
                  <option :value="i" v-for="i in 30" :key="i + '12345'">
                    {{ i }}
                  </option>
                </select>
                /{{ item.product.unit }}
              </div>
            </td>
            <td class="text-end">{{ item.product.price }}</td>
            <td class="text-end">
              {{ item.total }}
            </td>
          </tr>
        </template>
        <template v-else
          ><span class="text-danger fw-bold h3">購物車目前是空的!</span
          ><RouterLink to="/products" class="ms-3 btn btn-primary text-light fw-bold">快去看菜單~</RouterLink>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
        <tr v-if="couponText">
          <td colspan="5" class="text-end fw-bold text-success">折扣價</td>
          <td class="text-end fw-bold text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div v-if="cart?.carts?.length" class="input-group mb-3 input-group-sm">
      <input :disabled="couponText" type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠券代碼" />
      <div class="input-group-append">
        <button :disabled="couponText" class="btn btn-outline-secondary" type="button" @click="addCouponCode">
          <span class="spinner-border spinner-border-sm" role="status" v-if="couponLoading"></span>
          套用優惠券
        </button>
      </div>
    </div>
    <RouterLink :to="`/cart/check`" class="btn btn-outline-primary float-end mt-2" v-if="cart?.carts?.length">下一步</RouterLink>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import Swal from 'sweetalert2';
import cartStore from '../../stores/cartStore';
// 引入sweet alert2套件
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      loadingItem: '', // 存id，當id存在時就不能操作
      delAllLoading: false, // 清空購物車loading
      coupon_code: '',
      couponText: false, // 顯示折扣優惠券字樣使用
      couponLoading: false, // 優惠券loading使用
      qty: null,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'qtyMax']),
    updateCartItem(item) {
      // 需要傳入後端的資料格式，data裡要帶的是產品id
      const data = {
        data: {
          product_id: item.product.id,
          qty: item.qty,
        },
      };
      // 將id存起來
      this.loadingItem = item.id;

      // 將數量存起來
      this.qtyMax(item.qty);

      // put裡要帶的是購物車id
      this.$http
        .put(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`, data)
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.getCarts();
          // 結束時再清空id
          this.loadingItem = '';
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    deleteCartItem(item) {
      // 將id存起來
      this.loadingItem = item.id;
      // delete裡要帶的是購物車id
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.getCarts();
          // 結束時再清空id
          this.loadingItem = '';
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    deleteAllCarts() {
      this.delAllLoading = true;
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/carts`)
        .then((response) => {
          this.delAllLoading = false;
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
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
    addCouponCode() {
      this.couponLoading = true;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/coupon`, { data: coupon })
        .then((response) => {
          this.couponText = true;
          this.couponLoading = false;
          this.getCarts();
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
          this.couponLoading = false;
        });
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
    this.getCarts(); // 進入頁面先取得購物車列表
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  .p-5 {
    padding: 3px !important;
  }
  .RWD-width {
    width: 35% !important;
  }
}
</style>
