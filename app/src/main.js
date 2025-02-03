// Base imports
import api from '@root/api';
import { createApp } from 'vue';

// Libs import
import Vue3EasyDataTable from 'vue3-easy-data-table';
import VueSlider from "vue-3-slider-component";
import Multiselect from 'vue-multiselect';
import VueDatePicker from '@vuepic/vue-datepicker';
import VueToggles from "vue-toggles";
import toastr from 'toastr';
import VueFroala from 'vue-froala-wysiwyg';
import Vue3StarRatings from 'vue3-star-ratings';

// Components base import
import App from './App';

// Plugins Import
import store from './store';
import router from './router';
import TranslatePlugin from "@root/plugins/Translate.js";
import Title from "@root/plugins/Title.js";
import ToasterNotify from "@root/plugins/ToasterNotify.js";

// Libs styles
import "@flaticon/flaticon-uicons/css/all/all";
import 'toastr/build/toastr.min.css';
import 'vue3-easy-data-table/dist/style.css';
import '@vuepic/vue-datepicker/dist/main.css';
import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
// Import Froala Editor css files.
import '@styles/libs/froala_editor.pkgd.min.css';
import '@styles/libs/froala_style.min.css';

// Styles import
import './style.css';

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
app.use(VueFroala);

// Global components
app.component('data-table', Vue3EasyDataTable);
app.component('v-select', Multiselect);
app.component('v-slider', VueSlider);
app.component('v-date-picker', VueDatePicker);
app.component('v-toggle', VueToggles);
app.component('v-rating', Vue3StarRatings);

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
