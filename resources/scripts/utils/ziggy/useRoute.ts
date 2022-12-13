import { inject } from 'vue';
import { ZiggyRoute } from '.';

export function useRoute() {
  const route = inject('route') as ZiggyRoute;

  return { route };
}
