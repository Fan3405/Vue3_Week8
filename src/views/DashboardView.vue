<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top px-5">
    <RouterLink to="/" class="navbar-brand fs-1"
      ><img
        height="80"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678379860131.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TK6v4a8JwxXJ%2BS7pPBUR2PTw1KIOuQy7E0jWUKtwPyXkTlRLLNCSIGk5kwrZJXTNPR07F4Nb8%2FdmnDSD%2Fba078gpe3IH4AUe7cWV7yk6MHolsEgJS3i47tRIgYfFI9%2Bse3koGsHujP6AQtYumeAaDzVGrl3Lo%2B6HGeoWCkLh%2FGJX4Xe49fU31vTAzz35iIQwhsvjb5tgOQAqPjtzcpgVG1VJU%2F6Zetcc0R%2FkmZv59qacdS9g5%2Fi1FaRhPLviob7083qFRrI84Sc3Hb8AI4%2Fs81SFsR%2FL8zKl1HQdA4KBAMpE9tL%2Fk%2F0%2F2SlrkPP1Xz3MIGNVUNkvgkwd3M45m9vIfQ%3D%3D"
        alt="點燒烤Logo"
    /></RouterLink>
    <!-- RWD button -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="RWD-padding collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/admin/adminProducts" class="nav-link me-4">後台產品列表</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/adminOrders" class="nav-link me-4">後台訂單列表</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/adminCoupons" class="nav-link me-4">後台優惠券列表 </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/adminArticles" class="nav-link me-4">後台文章列表</RouterLink>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- 將內容設定高度，固定footer在底部 -->
  <div class="min-vh-100">
    <!-- 預設隱藏 RouterView ，當函式 checkAdmin 有驗證通過時再將 RouterView 顯示出來。 -->
    <RouterView v-if="check" />
  </div>
  <footer class="bg-primary">
    <div class="container text-center py-4">
      <p class="m-0 text-white letterSpacing">聯絡我們</p>
      <a class="me-1" href="#"><i class="fa-brands fa-facebook text-white"></i></a>
      <a href="#">
        <i class="fa-solid fa-envelope text-white"></i>
      </a>
      <p class="m-0 text-white fs-7 pt-3">Copyright©2023 點燒烤(僅為個人作品使用，無商業用途)</p>
    </div>
  </footer>
</template>
<script>
import Swal from 'sweetalert2';
// 引入sweet alert2套件
const { VITE_APP_URL } = import.meta.env;
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    logout() {
      // 在點擊登出時把登入存的cookie清除掉
      document.cookie = `myToken=; myexpired=${new Date()}; `;

      Swal.fire({
        title: '已登出',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.$router.push('/login');
    },
    checkAdmin() {
      // 取出 token
      const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // 每次都會帶入
      this.$http.defaults.headers.common.Authorization = cookieValue;

      if (cookieValue) {
        this.$http
          .post(`${VITE_APP_URL}v2/api/user/check`)
          .then(() => {
            this.check = true;
          })
          .catch((error) => {
            Swal.fire({
              title: error.response.data.message,
              icon: 'error',
              confirmButtonText: 'OK',
            });
            this.$router.push('/login');
          });
      } else {
        Swal.fire({
          title: '您尚未登入',
          icon: 'info',
          confirmButtonText: 'OK',
        });
        this.$router.push('/login');
      }
    },
  },
  mounted() {
    this.checkAdmin();
  },
};
</script>
<style>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -5px;
  left: 0;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out 0s;
}

.nav-link:hover::after,
.nav-link.active::after {
  visibility: visible;
  transform: scaleX(1);
}
</style>
