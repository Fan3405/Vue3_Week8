import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'articles', // path裡路由可自定名稱，巢狀路由的子路由path前面不需要加/斜線
        name: 'articles',
        component: () => import('../views/front/ArticlesView.vue'),
      },
      {
        path: 'article/:id', // 動態路由
        component: () => import('../views/front/ArticleView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue'),
      },
      {
        path: 'product/:id', // 動態路由
        component: () => import('../views/front/ProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue'),
      },
      {
        path: 'cart/check',
        component: () => import('../views/front/CartCheck.vue'),
      },
      {
        path: 'login',
        component: () => import('../views/front/LoginView.vue'),
      },
    ],
  },
  {
    path: '/admin', // 不是子路由，前面要加/斜線
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'adminProducts',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'adminOrders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
      {
        path: 'adminCoupons',
        component: () => import('../views/admin/AdminCoupons.vue'),
      },
      {
        path: 'adminArticles',
        component: () => import('../views/admin/AdminArticles.vue'),
      },
    ],
  },
  // 也可做404頁面
  // {
  //   path:'/:pathMatch(.*)*',
  //   component:()=>import('建立的404頁面路徑')
  // }

  // 重新導向，錯誤頁面會回到首頁
  {
    path: '/:pathMatch(.*)*', // 全部以及子路徑下都符合條件
    redirect: {
      path: '/',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,

  scrollBehavior() {
    // 始终滚动到顶部，參考https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
    return { top: 0, behavior: 'instant' };
  },
});

export default router;
