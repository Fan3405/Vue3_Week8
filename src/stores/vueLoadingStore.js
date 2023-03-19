import { defineStore } from 'pinia';
import { useLoading } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const vueLoadingStore = defineStore('vueLoading', {
  state: () => ({
    loading: {},
    loader: null, // 新增一個 loader儲存loading狀態
    loadingCount: 0, // 新增loadingCount，不能用布林值判斷
    // 使用布林值作為計數器仍然會出現問題。這是因為布林值只有 true 和 false 兩種狀態，當你需要同時控制多個 Vue Loading 效果的顯示狀態時，使用布林值就無法滿足需求。
  }),
  actions: {
    showLoading() {
      if (this.loadingCount === 0) {
        this.loading = useLoading({
          // Optional parameters
          container: this.fullPage,
          canCancel: false, // 不可點擊關閉vue loading效果
          onCancel: this.onCancel,
          loader: 'dots', // 設定樣式
          width: 100, // 設定大小
          height: 100, // 設定大小
          color: 'gray', // 設定顏色
        });
        this.loader = this.loading.show();
      }
      this.loadingCount += 1; // loadingCount加一
    },
    hideLoading() {
      this.loadingCount -= 1; // loadingCount减一
      if (this.loadingCount === 0) {
        // 只有在loadingCount为0的时候才调用hideLoading()
        this.loader.hide(); // 讀完資料關閉vue loading效果
      }
    },
  },
  getters: {},
});
export default vueLoadingStore;
