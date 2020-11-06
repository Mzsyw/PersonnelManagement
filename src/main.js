import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./vuex/store";
import * as API from './api'
import './mock/mockServer'
import {
    Container,
    Header,
    Aside,
    Main,
    Submenu,
    Menu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Input,
    Button,
    Table,
    TableColumn
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Card)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router,
  store,
  API
}).$mount('#app')
