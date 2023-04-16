import { defineStore } from 'pinia';
import axios from 'axios'; // 在pinia裡不是vue環境所以不能使用vueAxios
import Swal from 'sweetalert2';
import vueLoadingStore from './vueLoadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  state: () => ({
    cart: [], // 購物車列表
    qtyMaxStatus: false,
  }),
  actions: {
    getCarts() {
      // 從vueLoadingStore取出vue loading效果使用解構方式
      const { showLoading, hideLoading } = vueLoadingStore();
      showLoading();
      axios
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
        .then((response) => {
          this.cart = response.data.data;
          hideLoading(); // 讀完資料關閉vue loading效果
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
          hideLoading(); // 讀完資料關閉vue loading效果
        });
    },
    qtyMax(qty) {
      if (qty === 30) {
        this.qtyMaxStatus = true;
      } else {
        this.qtyMaxStatus = false;
      }
    },
  },
  getters: {},
});

export default cartStore;
