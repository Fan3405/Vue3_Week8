import { createApp } from 'vue';
import { createPinia } from 'pinia';

// vue axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// vue-loading
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// vee-validate
// eslint-disable-next-line object-curly-newline
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 加入 CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

// bootstrap
import './assets/all.scss';

// 引入bootstrap js
import 'bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import App from './App.vue';
import router from './router';

// gsap
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// vee-validate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const pinia = createPinia();

const app = createApp(App);

app.use(LoadingPlugin);

app.use(VueAxios, axios);

app.use(pinia);

app.use(router);

app.use(CKEditor);

// vee-validate註冊全域元件
app.component('VueForm', Form);
app.component('VueField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
