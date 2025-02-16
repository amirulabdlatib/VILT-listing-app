import './bootstrap';
import '../css/app.css';
import {ZiggyVue} from '../../vendor/tightenco/ziggy';
import { createApp, h } from 'vue'
import { Link,Head,createInertiaApp } from '@inertiajs/vue3'
import Layout from './Layouts/Layout.vue';
import { setThemeOnLoad } from './theme';


createInertiaApp({
  title: (title) => `Listing  ${title}`,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || Layout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .component('Head',Head)
      .component('Link',Link)
      .mount(el)
  },
})

setThemeOnLoad()