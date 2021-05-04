import { createApp } from 'vue';
require('alpinejs');

import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount("#client");