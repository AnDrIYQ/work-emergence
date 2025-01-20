// Base imports
import api from '@root/api';
import { createApp } from 'vue';

// Components base import
import App from './App';

// Plugins Import
import store from './store';
import router from './router';
import TranslatePlugin from "@root/plugins/Translate.js";
import Title from "@root/plugins/Title.js";
import GuardPlugin from "@root/plugins/Guard.js";

// Styles import
import './style.css';
import "@flaticon/flaticon-uicons/css/all/all";

// Vars
const app = createApp(App);

// Global config vue
app.config.errorHandler = (err, instance, info) => {
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

window.api = api;
window.translate_messages = {};

// Plugins use
app.use(new GuardPlugin(), { router });
app.use(router);
app.use(store);
app.use(new TranslatePlugin());
app.use(new Title());

// App mount
app.mount('#app');
