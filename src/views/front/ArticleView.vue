<template>
  <div class="container py-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/articles">最新消息</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{ date(article.create_at) }}</small> -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img :src="article.imageUrl" height="500" class="w-100 object-fit mb-3" />
        <div v-html="article.content"></div>
      </article>
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
      article: {},
      id: '',
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getArticle() {
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/article/${this.id}`;
      this.showLoading();
      this.$http
        .get(api)
        .then((response) => {
          this.article = response.data.article;
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
    date(time) {
      const date = new Date(time * 1000); // 後端資料時間戳記只有取10碼所以要*1000變成13碼
      return date.toLocaleDateString(); // 也可用下面方法取得時間
      // return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getArticle();
  },
};
</script>
