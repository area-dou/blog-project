import Vue from 'vue'
import {
  Button,
  Tabs,
  TabPane,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Message,
  Drawer,
  Breadcrumb,
  BreadcrumbItem,
  Input
} from 'element-ui'

Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Drawer)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Input)
// 全局挂载弹窗
Vue.prototype.$message = Message
