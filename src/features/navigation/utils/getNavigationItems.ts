import { routesMap as defaultRoutesMap, RoutesMap } from '@/router/routesMap';
import { NavItem } from '@/types/NavItem';
import { Role } from '@/types/Role';

export const getNavigationItems = (role: Role, routesMap: RoutesMap = defaultRoutesMap): NavItem[] =>
  Object.entries(routesMap)
    .filter(([_, route]) => route.isVisible(role))
    .map(([key, { path, label }]) => ({
      key,
      path,
      label
    }));
