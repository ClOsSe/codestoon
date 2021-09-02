// first npm i vue-material-design-icons 
// then import this file on nuxt config
import Vue from 'vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue';
import Telegram from 'vue-material-design-icons/SendCircleOutline.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Cart from 'vue-material-design-icons/CartVariant.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import Minus from 'vue-material-design-icons/Minus.vue';
Vue.component('menu-icon', MenuIcon);
Vue.component('whatsapp', Whatsapp);
Vue.component('telegram', Telegram);
Vue.component('instagram', Instagram);
Vue.component('cart', Cart);
Vue.component('plus', Plus);
Vue.component('minus', Minus);
