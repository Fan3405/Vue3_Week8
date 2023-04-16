<template>
  <div
    class="py-7"
    style="
      background-repeat: no-repeat;
      background-position: center 100%;
      background-size: cover;
      object-fit: cover;
      min-height: calc(100vh - 106px);
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1679037752991.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aU3XcLarWYl6Aqugxi4%2FUSkl2R5xfbGpofcfYGuFGPQmdK2wbmIaYVJa2cFd1VoFbz6XJoHbKYqsH4BZzOebtkqEodk7wxCgZcDWaiENsH4bDb7rtM4WJXhA30%2BXmd7NvZMJf6dnWjAqjk%2FqmpZVCKjJkPQhVFPwYZxM5Ufj8K2NWgT8xTZPNerjcSmm0Xy9Qs3OnfuRznbzwWGLS8thB4v45f4nWUPIo2QTCFnHaYr5M3iRJV2jVC%2FegPqPsi%2BWgJEdcZO740RnxSJPPYeL8EiUsPFWgLbXFk8kT5LVF3sFTPZP4ZpId%2B1gNIwb%2FE1Te6WlpRY1WTmnoMjEPZ4zVQ%3D%3D');
    "
  >
    <VueForm id="form" class="container form bg-primary bg-opacity-50 p-5" v-slot="{ errors }" @submit="login">
      <div class="mb-3">
        <label for="username" class="form-label fw-bold text-light">Email</label>
        <!-- name="Email"E改大小寫都可以也可改中文 -->
        <VueField
          v-model="user.username"
          id="username"
          name="Email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['Email'] }"
          placeholder="請輸入 Email"
          rules="required|email"
        ></VueField>
        <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label fw-bold text-light">Password</label>
        <VueField
          v-model="user.password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          placeholder="請輸入密碼"
          rules="required"
        ></VueField>
        <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-lg btn-primary w-100 mt-3 fw-bold text-light">登入</button>
      </div>
    </VueForm>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
// 引入sweet alert2套件
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$http
        .post(`${VITE_APP_URL}v2/admin/signin`, this.user)
        .then((response) => {
          // 解構寫法，從response.data裡面取出token、expired
          const { token, expired } = response.data;

          // 將token、expired存進cookie
          document.cookie = `myToken=${token}; myexpired=${new Date(expired)}; `;
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.$router.push('/admin/adminProducts'); // 登入成功轉址到後台產品列表
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
  mounted() {},
};
</script>
