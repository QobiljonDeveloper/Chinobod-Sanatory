import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/style.css';
import 'swiper/swiper-bundle.css';


const app = createApp(App);

app.use(ElementPlus);

app.use(VideoPlayer);


// Mount the app
app.mount('#app');
