<template>
  <div
    class="modal fade"
    id="UserCouponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="UserCouponModal"
  >
    <div class="modal-dialog" role="document">
      <div
        class="modal-content text-white"
        style="
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          object-fit: cover;
          background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1677768481152.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=msNPlyzL22mB0%2B11FdYXDfM5%2BtPzJKNOfRcAX2x6VUQwRgVMsNNolDvLdy34K5rzGpA%2FO0PH4g0Nw0KLQCZ%2FBZGtN1kscofbr%2F8rmel9eEuLAFBahiyGHwR02EJ7Cf8qGdZoHsjYzaR5PedfF13koGt4ptiDgg3XkrIrdXGUOHl9WRD3bb3nepb%2BkNauu9X8mG6O%2FgCYZ8ZCZJiAmRghrqGRGMfmToq68eu5DnvuRUayLVSlzIT75l3AWi8IphAK34R35PoW6ZsYlQiMsebbLEDu6M9YYI6mkcSu%2FE8yDATlX7xN5ooJZkQlCgrmOH0XOheN5y%2FnghjgOJBkxo7v7w%3D%3D');
        "
      >
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">
            <span class="fw-bold">歡慶開幕優惠券</span>
          </h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <h4>結帳時輸入優惠券代碼<span class="text-danger fw-bold">888</span>享有八折優惠!</h4>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info text-white" data-bs-dismiss="modal">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      UserCouponModal: null,
    };
  },
  methods: {
    openModal() {
      this.UserCouponModal.show();
    },
    hideModal() {
      this.UserCouponModal.hide();
    },
  },
  mounted() {
    // 將bootstrap的modal實體化
    this.UserCouponModal = new Modal(this.$refs.UserCouponModal);
  },
};
</script>
