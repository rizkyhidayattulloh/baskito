import { usePage } from '@inertiajs/inertia-vue3';
import { computed, inject } from 'vue';
import { ZiggyRoute, RouteName } from './type';

export function useRoute() {
  const route = inject('route') as ZiggyRoute;

  const routeIs = computed(() => {
    usePage().url.value;

    return (name: RouteName) => route().current(name);
  });

  return { route, routeIs };
}
