<template>
  <!-- 跑馬燈 -->
  <div class="bg-light mt-6">
    <div class="container overflow-hidden">
      <div class="row justify-content-center py-7">
        <div class="col-md-8 d-flex marquee">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/zxcv123/1678943740560.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nBnYSh8ZE9X3VUVlKXDoqUk4qUPae%2BnwbBQ%2B%2Bbj6KFsF%2BoJBTwJ8Vtq4tyV0vyAuxe5pwvmoUPen0WZLPjZCo0IrupA3W%2FF41zzY51EqY%2FfEPV%2FakJSWok6G6LaUBwVdMLoyAcsWh3h4rEdorAagrbU%2BeURs%2B1sRuBVJoaXjBQu%2BQerCKefXlzF29SCGHi8ceoB3Yd4Rcg8OUYneFUb6CFq%2BMDodzuYlYJHO1r5ZaCNi2IR5xs%2BoA8noc%2FmzEcfC5zVKXPd%2BmSehfUU%2BIpaNQuc5siafgZ1P5k87B1ZmHVRdmiyoPHqWWz%2B3FS9CXmBP%2FndpcfRI%2BV2foMXlPsktuw%3D%3D"
            alt="Thank you"
            class="rounded-circle me-5"
            style="width: 160px; height: 160px; object-fit: cover"
          />
          <div class="d-flex flex-column">
            <p class="h5 my-auto fw-bold">“最新消息都將在此頁公布，歡迎大家隨時關注此頁動態”</p>
            <p class="my-auto text-muted">點燒烤</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-5">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div data-aos="zoom-in" class="card">
            <img :src="article.imageUrl" height="350" alt="文章圖片" class="card-img-top object-fit" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <RouterLink :to="`/article/${article.id}`" v-if="article.isPublic" class="btn btn-outline-primary">
                文章頁面
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import Swal from 'sweetalert2';
import vueLoadingStore from '../../stores/vueLoadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getArticles(page = 1) {
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/articles?page=${page}`;
      this.showLoading();
      this.$http
        .get(api)
        .then((response) => {
          this.articles = response.data.articles;
          this.pagination = response.data.pagination;
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
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style scoped>
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
