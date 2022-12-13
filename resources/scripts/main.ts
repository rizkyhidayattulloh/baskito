import "@/scss/stisla.scss";

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'vite-plugin-laravel/inertia'
import { Ziggy } from "@/scripts/utils/ziggy";
import ZiggyVue from "@/scripts/utils/ziggy/ZiggyVue";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
  resolve: (name) => resolvePageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})

InertiaProgress.init();
