declare module "ziggy-js";

import { Config, RouteParamsWithQueryOverload, RouteParam, Router } from "ziggy-js";
import { Ziggy } from ".";

declare function route(
  name: keyof (typeof Ziggy)['routes'],
  params?: RouteParamsWithQueryOverload | RouteParam,
  absolute?: boolean,
  config?: Config,
): string;

declare function route(
  name?: undefined,
  params?: RouteParamsWithQueryOverload | RouteParam,
  absolute?: boolean,
  config?: Config,
): Router;

export type ZiggyRoute = typeof route;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: ZiggyRoute;
  }
}
