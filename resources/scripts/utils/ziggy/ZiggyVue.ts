import { App } from "vue";
import { default as ziggyRoute, Config, RouteParam, RouteParamsWithQueryOverload } from "ziggy-js";

export default {
  install: (app: App, options: Config) => {
      const route = (
        name?: any | string | undefined,
        params?: RouteParamsWithQueryOverload | RouteParam,
        absolute?: boolean,
        config: Config = options
      ) => ziggyRoute(name, params, absolute, config);

      app.config.globalProperties.route = route as typeof ziggyRoute;

      app.provide('route', route);
  },
};
