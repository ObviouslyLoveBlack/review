import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';
import 'vant/lib/index.css';
import './style/index.scss'
import '@/libs/rem'
import './perssion'
   
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Tabbar, TabbarItem,Swipe,SwipeItem,Icon,Popup} from 'vant';

if (process.env.NODE_ENV === 'mock') {
    require('./mock')
}
library.add(faUserSecret,faBars,faTimes)
createApp(App).use(store).use(router)
.use(TabbarItem).use(Tabbar).use(Swipe).use(SwipeItem).use(Icon).use(Popup)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


