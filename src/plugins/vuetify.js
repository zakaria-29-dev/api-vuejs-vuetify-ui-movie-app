import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../services/api"
import Carousel3d from 'vue-carousel-3d';

Vue.use(Vuetify);
Vue.use(Carousel3d);
Vue.prototype.$http = api;

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});
