// Base imports
import { createApp } from 'vue';

// Components base import
import App from './App';

// Plugins Import
import store from './store';
import router from './router';

// Styles import
import './style.css';

// Vars
const app = createApp(App);

// Plugins use
app.use(router);
app.use(store);

// App mount
app.mount('#app');
