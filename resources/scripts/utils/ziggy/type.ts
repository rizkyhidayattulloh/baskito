declare module "ziggy-js";

import { default as ziggyRoute, Config, RouteParamsWithQueryOverload, RouteParam } from "ziggy-js";
import { Ziggy } from ".";

declare function route(
  name: keyof (typeof Ziggy)['routes'],
  params?: RouteParamsWithQueryOverload | RouteParam,
  absolute?: boolean,
  config?: Config,
): string;

export type ZiggyRoute = typeof ziggyRoute & typeof route;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: ZiggyRoute;
  }
}
