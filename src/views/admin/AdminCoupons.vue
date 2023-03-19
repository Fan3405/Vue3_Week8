<template>
  <div class="container">
    <div>
      <div class="text-end mt-4">
        <button class="btn btn-primary" type="button" @click="() => openCouponModal(true)">建立新的優惠券</button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in coupons" :key="key">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ date(item.due_date) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" @click="() => openCouponModal(false, item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm" @click="() => openDelCouponModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <CouponModal :coupon="tempCoupon" :is-new="isNew" ref="couponModal" @update-coupon="updateCoupon" />
      <DeleteModal :temp-coupon="tempCoupon" ref="delCouponModal" :deleteProduct="delCoupon" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import Swal from 'sweetalert2';
import DeleteModal from '../../components/DeleteModal.vue';
import vueLoadingStore from '../../stores/vueLoadingStore';
import CouponModal from '../../components/CouponModal.vue';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  components: { DeleteModal, CouponModal },
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delCouponModal.opendelModal();
    },
    getCoupons() {
      this.showLoading();
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupons`, this.tempProduct)
        .then((response) => {
          this.coupons = response.data.coupons;
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
    updateCoupon(tempCoupon) {
      let url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon`;
      let httpMethos = 'post';
      let data = tempCoupon;

      if (!this.isNew) {
        url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethos = 'put';
        data = this.tempCoupon;
      }

      this.$http[httpMethos](url, { data })
        .then((response) => {
          this.getCoupons();
          this.$refs.couponModal.hideModal();
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
        });
    },
    delCoupon() {
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.$refs.delCouponModal.hidedelModal();
          this.getCoupons();
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    date(time) {
      const date = new Date(time * 1000); // 後端資料時間戳記只有取10碼所以要*1000變成13碼
      return date.toLocaleDateString(); // 也可用下面方法取得時間
      // return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
