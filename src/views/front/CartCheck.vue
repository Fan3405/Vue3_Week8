<template>
  <div class="container">
    <div class="my-5 row justify-content-center">
      <VueForm
        ref="form"
        class="col-md-6 p-4 bg-primary bg-opacity-50 border border-primary"
        v-slot="{ errors }"
        @submit="onSubmit"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <!-- name="Email"E改大小寫都可以也可改中文 -->
          <VueField
            id="email"
            name="Email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['Email'] }"
            placeholder="請輸入 Email"
            rules="required|email"
            v-model="data.user.email"
          ></VueField>
          <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VueField
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="data.user.name"
          ></VueField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VueField
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="data.user.tel"
          ></VueField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VueField
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="data.user.address"
          ></VueField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10" v-model="data.message"></textarea>
        </div>
        <div class="text-end">
          <RouterLink :to="`/cart`" class="btn btn-outline-primary float-start" v-if="cart?.carts?.length">回上一步</RouterLink>
          <button type="submit" class="btn btn-danger" :disabled="submitLoading">
            <span class="spinner-border spinner-border-sm" role="status" v-if="submitLoading"></span>
            送出訂單
          </button>
        </div>
      </VueForm>
      <div class="col-md-5 RWD-padding">
        <div class="border border-primary p-4 mb-4 bg-primary bg-opacity-50 shadow">
          <h4 class="mb-4">Order Detail</h4>
          <div v-for="item in cart.carts" :key="item.id" class="d-flex mt-2">
            <img :src="item.product.imageUrl" :alt="item.product.title" style="width: 160px; height: 50px; object-fit: cover" />
            <div class="w-100 ms-2">
              <div class="d-flex justify-content-between fw-bold">
                <p class="mb-0">{{ item.product.title }}</p>
                <p class="mb-0">{{ item.qty }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <del v-if="item.total !== item.final_total" class="text-muted mb-0">
                  <small>NT${{ item.total }}</small>
                </del>
                <small v-else>NT${{ item.product.price }}</small>
                <p class="mb-0">NT${{ item.final_total }}</p>
              </div>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                <td v-if="cart.total == cart.final_total" class="text-end border-0 px-0 pt-4">
                  <span> NT${{ cart.total }}</span>
                </td>
                <td v-else class="text-end border-0 px-0 pt-4">
                  <del> NT${{ cart.total }}</del>
                </td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">Total</p>
            <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
          </div>
        </div>
      </div>
    </div>
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
      data: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      submitLoading: false, // 優惠券loading使用
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    onSubmit() {
      this.submitLoading = true;
      // 先把表單資料賦予到一個變數再使用，使用解構方式與const data = this.data;相同
      const { data } = this;
      this.$http
        .post(
          `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/order`,
          { data }, // {data:data}的縮寫，因為要傳入的資料格式是物件裡帶入data，所以要加括號
        )
        .then((response) => {
          this.submitLoading = false;
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            color: 'white',
            confirmButtonText: 'OK回首頁',
            background:
              'url(https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1677768481152.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=msNPlyzL22mB0%2B11FdYXDfM5%2BtPzJKNOfRcAX2x6VUQwRgVMsNNolDvLdy34K5rzGpA%2FO0PH4g0Nw0KLQCZ%2FBZGtN1kscofbr%2F8rmel9eEuLAFBahiyGHwR02EJ7Cf8qGdZoHsjYzaR5PedfF13koGt4ptiDgg3XkrIrdXGUOHl9WRD3bb3nepb%2BkNauu9X8mG6O%2FgCYZ8ZCZJiAmRghrqGRGMfmToq68eu5DnvuRUayLVSlzIT75l3AWi8IphAK34R35PoW6ZsYlQiMsebbLEDu6M9YYI6mkcSu%2FE8yDATlX7xN5ooJZkQlCgrmOH0XOheN5y%2FnghjgOJBkxo7v7w%3D%3D)',
          }).then((result) => {
            // isConfirmed是SweetAlert2的一個回調函數方法，當彈出對話框中的確認按鈕被點擊時可以執行後續動作
            if (result.isConfirmed) {
              this.$router.push('/');
            }
          });
          // 將表單資料清空
          this.$refs.form.resetForm();
          this.data.message = ''; // 將留言清空
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
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {},
};
</script>

<style scoped>
@media (max-width: 768px) {
  .RWD-padding {
    padding: 0px !important;
  }
}
</style>
