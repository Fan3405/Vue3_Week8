import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'node:url';

/* base路徑參考https://israynotarray.com/nodejs/20230214/796256725/#%E8%A8%AD%E7%BD%AE-Vite */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/Vue3_Week8/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
