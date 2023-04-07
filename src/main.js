import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Tabbar, TabbarItem,Swipe,SwipeItem  } from 'vant';


if (process.env.NODE_ENV === 'mock') {
    require('./mock')
}

createApp(App).use(store).use(router)
.use(TabbarItem).use(Tabbar).use(Swipe).use(SwipeItem)
.mount('#app')


