import { NavigationItem, navigationMap } from '../navigationMap';

export const generateNavigationItems = (userId: string, navMap = navigationMap): NavigationItem[] =>
  navMap.map(navItem => ({
    ...navItem,
    path: navItem.isPrivate ? navItem.path.replace(':userId', userId) : navItem.path
  }));
