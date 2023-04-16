<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a v-if="category" class="page-link" aria-label="Previous" @click="() => getData(category, pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
        <a v-else class="page-link" aria-label="Previous" @click="() => getData(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: page === pages.current_page }"
        v-for="page in pages.total_pages"
        :key="page + 'pages'"
      >
        <!-- 如果是在產品列表做篩選的會帶參數，在當前頁數時就不能再次點擊取得當前頁數資料 -->
        <template v-if="category">
          <span class="page-link" v-if="page === pages.current_page">{{ page }}</span>
          <a v-else class="page-link" href="#" @click.prevent="() => getData(category, page)">{{ page }}</a>
        </template>
        <template v-else>
          <span class="page-link" v-if="page === pages.current_page">{{ page }}</span>
          <a v-else class="page-link" href="#" @click.prevent="() => getData(page)">{{ page }}</a>
        </template>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a v-if="category" class="page-link" aria-label="Next" @click="() => getData(category, pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
        <a v-else class="page-link" aria-label="Next" @click="() => getData(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // 用props把外層page資料傳進來，pages、getData可自訂名稱，但html不能使用大寫所以要寫成get-data
  props: ['pages', 'getData', 'category'],
};
</script>
