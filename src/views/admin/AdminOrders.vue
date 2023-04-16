<template>
  <div class="container">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="order in orders" :key="order.id">
          <tr v-if="orders.length" :class="{ 'text-secondary': !order.is_paid }">
            <td>{{ date(order.create_at) }}</td>
            <td><span v-text="order.user.email" v-if="order.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ order.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${order.id}`"
                  v-model="order.is_paid"
                  @change="() => updateOrder(order)"
                />
                <label class="form-check-label" :for="`paidSwitch${order.id}`">
                  <span v-if="order.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button class="btn btn-outline-primary btn-sm" type="button" @click="openModal('edit', order)">檢視</button>
                <button class="btn btn-outline-danger btn-sm" type="button" @click="openModal('deleteOrder', order)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <OrderModal ref="orderModal" :order="tempOrder" @update-order="updateOrder" />
    <!-- delProductModal刪除元件 -->
    <DeleteModal
      ref="delOrderModal"
      :temp-product="tempOrder"
      :delete-product="deleteOrder"
      :is-order="isOrder"
      :temp-order="tempOrder"
    />

    <!-- 將註冊的元件以html標籤方式加入畫面就可顯示、
             用props將資料傳進來前面屬性要放內層自訂的名稱，後面值要放外層資料，但html不能使用大寫所以要寫成get-data、
             也可使用emit寫法@change-page="getData"，(props是傳資料、emit是傳事件) -->
    <PaginationComponent :pages="page" :get-data="getOrders" />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import PaginationComponent from '@/components/PaginationComponent.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import vueLoadingStore from '@/stores/vueLoadingStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      page: {}, // 做分頁使用
      currentPage: 1, // 做當前頁面使用
      isOrder: false, //   確認是訂單或是產品所使用的
    };
  },
  methods: {
    ...mapActions(vueLoadingStore, ['showLoading', 'hideLoading']),
    getOrders(page = 1) {
      this.currentPage = page;
      // vue loading效果
      this.showLoading();
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((response) => {
          this.orders = response.data.orders;
          // 將分頁功能儲存
          this.page = response.data.pagination;
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
    openModal(status, product) {
      if (status === 'edit') {
        // 打開編輯modal
        this.$refs.orderModal.openModal();

        // 如果是編輯產品會帶入當前要編輯的資料
        this.tempOrder = { ...product };
      } else if (status === 'deleteOrder') {
        // 打開刪除modal
        this.$refs.delOrderModal.opendelModal();
        this.tempOrder = { ...product }; // 取id使用

        this.isOrder = true;
      }
    },
    deleteOrder() {
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`)
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.getOrders(this.currentPage); // 刪完資料會停留在當前頁面
          this.$refs.delOrderModal.hidedelModal();
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        });
    },
    updateOrder(tempOrder) {
      this.tempOrder = tempOrder;
      if (this.tempOrder.is_paid) {
        // Math.floor(3.7) 的返回值是 3、Math.round(3.7) 的返回值是 4，如果小数点后的数值大于等于 0.5，Math.round 会将其向上取整，而 Math.floor 则会将其向下取整。
        this.tempOrder.paid_date = Math.round(new Date().getTime() / 1000); // 將取得時間戳記取前10碼並去掉小數點
      } else if (!this.tempOrder.is_paid) {
        this.tempOrder.paid_date = '';
      }
      this.$http
        .put(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`, { data: this.tempOrder })
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.getOrders(this.currentPage);

          //   關閉modal
          this.$refs.orderModal.hideModal();
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
    this.getOrders();
  },
  components: {
    PaginationComponent,
    DeleteModal,
    OrderModal,
  },
};
</script>
