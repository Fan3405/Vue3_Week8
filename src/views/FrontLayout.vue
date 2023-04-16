<template>
  <nav style="z-index: 1030" class="navbar navbar-expand-lg navbar-light bg-primary sticky-top px-5">
    <RouterLink to="/" class="navbar-brand fs-1"
      ><img
        height="80"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678379860131.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TK6v4a8JwxXJ%2BS7pPBUR2PTw1KIOuQy7E0jWUKtwPyXkTlRLLNCSIGk5kwrZJXTNPR07F4Nb8%2FdmnDSD%2Fba078gpe3IH4AUe7cWV7yk6MHolsEgJS3i47tRIgYfFI9%2Bse3koGsHujP6AQtYumeAaDzVGrl3Lo%2B6HGeoWCkLh%2FGJX4Xe49fU31vTAzz35iIQwhsvjb5tgOQAqPjtzcpgVG1VJU%2F6Zetcc0R%2FkmZv59qacdS9g5%2Fi1FaRhPLviob7083qFRrI84Sc3Hb8AI4%2Fs81SFsR%2FL8zKl1HQdA4KBAMpE9tL%2Fk%2F0%2F2SlrkPP1Xz3MIGNVUNkvgkwd3M45m9vIfQ%3D%3D"
        alt=""
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
          <RouterLink to="/articles" class="nav-link me-4">最新消息</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/products" class="nav-link me-4">產品列表</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/cart" class="nav-link me-4 position-relative"
            ><i class="fas fa-shopping-cart"></i>
            <span class="RWD-cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
              {{ cart.carts?.length }}</span
            >
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/admin/adminProducts" class="nav-link">登入後台</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <!-- 將內容設定高度，固定footer在底部 -->
  <div style="min-height: calc(100vh - 106px)">
    <RouterView />
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
import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

export default {
  data() {
    return {};
  },
  computed: {
    // 在computed用mapState取得cartStore裡的資料
    ...mapState(cartStore, ['cart']),
  },
  methods: {
    // 在methods用mapActions取得cartStore裡的方法
    ...mapActions(cartStore, ['getCarts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<!-- lang="scss"使用 SCSS 或 SASS 語言來寫 CSS -->
<style lang="scss">
// bootstrap5 breakpoints:xs: 0,sm: 576px, md: 768px, lg: 992px,  xl: 1200px, xxl: 1400px
@media (max-width: 992px) {
  .RWD-cart-badge {
    top: 5px !important;
    left: 30px !important;
  }
  .RWD-padding {
    padding-left: 30px;
  }
}

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

// .active是Bootstrap預設樣式中的一個類別，用於在當前網頁或元素上應用“活動”或“選定”狀態
// :active是CSS樣式中的一個偽類，用於選擇當前激活（被點擊）的元素、在點擊的瞬間應用樣式
.nav-link:hover::after,
.nav-link.active::after {
  visibility: visible;
  transform: scaleX(1);
}
</style>
