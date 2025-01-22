// Base imports
import api from '@root/api';
import { createApp } from 'vue';

// Libs import
import toastr from 'toastr';

// Components base import
import App from './App';

// Plugins Import
import store from './store';
import router from './router';
import TranslatePlugin from "@root/plugins/Translate.js";
import Title from "@root/plugins/Title.js";
import ToasterNotify from "@root/plugins/ToasterNotify.js";

// Styles import
import './style.css';
import "@flaticon/flaticon-uicons/css/all/all";
import 'toastr/build/toastr.min.css';

// Vars
const app = createApp(App);

window.api = api;
window.translate_messages = {};

// Libs
toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '3000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
};
window.toastr = toastr;

// Plugins use
app.use(router);
app.use(store);
app.use(new TranslatePlugin());
app.use(new Title());
app.use(new ToasterNotify());

api.get('/auth/verify').then(() => {
    // App mount
    app.mount('#app');
}).catch((error) => {
    if (error.response && error.response.status === 401) {
        console.warn('Unauthorized. Redirecting to login.');
        window.location.href = '/login';
    } else {
        console.error('Error during authentication check:', error);
    }
});
