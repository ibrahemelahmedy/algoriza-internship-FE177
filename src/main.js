/** @format */
import './dist/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);
app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
