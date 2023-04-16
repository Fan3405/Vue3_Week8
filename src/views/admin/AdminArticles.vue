<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="() => openModal(true)">建立新的頁面</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 150px">建立時間</th>
          <th style="width: 150px">是否公開</th>
          <th style="width: 130px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" type="button" @click="() => getArticle(article.id)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" type="button" @click="() => openDelArticleModal(article)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ArticleModal ref="articleModal" :article="tempArticle" :is-new="isNew" @update-article="updateArticle" />
    <DeleteModal :tempArticle="tempArticle" ref="delModal" :delete-product="delArticle" />
  </div>
</template>

<script>
// @參考https://israynotarray.com/vue/20190510/86469050/
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import ArticleModal from '@/components/ArticleModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import vueLoadingStore from '@/stores/vueLoadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      isNew: false,
      tempArticle: {},
      currentPage: 1,
    };
  },
  components: {
    ArticleModal,
    DeleteModal,
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getArticles(page = 1) {
      this.showLoading();
      this.currentPage = page;
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/articles?page=${page}`;
      this.$http
        .get(api)
        .then((response) => {
          this.hideLoading();
          if (response.data.success) {
            this.articles = response.data.articles;
            this.pagination = response.data.pagination;
          }
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    getArticle(id) {
      const api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${id}`;
      this.showLoading();
      this.$http
        .get(api)
        .then((response) => {
          this.hideLoading();
          if (response.data.success) {
            this.openModal(false, response.data.article);
            this.isNew = false;
          }
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.openModal();
    },
    updateArticle(item) {
      this.tempArticle = item;
      let api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        httpMethod = 'put';
      }
      const articleComponent = this.$refs.articleModal;
      this.$http[httpMethod](api, { data: this.tempArticle })
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          articleComponent.hideModal();
          this.getArticles(this.currentPage);
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    openDelArticleModal(item) {
      this.tempArticle = { ...item };
      this.$refs.delModal.opendelModal();
    },
    delArticle() {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.$http
        .delete(url)
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.$refs.delModal.hidedelModal();
          this.getArticles(this.currentPage);
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
    this.getArticles();
  },
};
</script>
