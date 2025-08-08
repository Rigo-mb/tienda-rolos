import tsconfigPaths from 'vite-tsconfig-paths';

export default defineNuxtConfig({
  css: [
    '@/assets/css/app.css',
    '@/assets/css/legacy-style.css'
  ],
  vite: {
    plugins: [tsconfigPaths()]
  }
});
