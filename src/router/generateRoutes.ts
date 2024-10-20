import { RoutesMap } from '@/router/routesMap';

export const generateRoutes = (routesMap: RoutesMap) =>
  Object.values(routesMap).map(({ path, element }) => ({
    path,
    element
  }));
