import { PATHS, USER_ID_ROUTE_PREFIX } from '@/lib/constants';

export interface NavigationItem {
  label: string;
  path: string;
  isPrivate: boolean;
  onClick?: () => void;
}

export const navigationMap: NavigationItem[] = [
  {
    path: USER_ID_ROUTE_PREFIX + PATHS.CREATE,
    label: 'Create',
    isPrivate: true
  },
  {
    path: USER_ID_ROUTE_PREFIX + PATHS.REQUESTS,
    label: 'User Requests',
    isPrivate: true
  },
  {
    path: '/' + PATHS.REQUESTS,
    label: 'All Requests',
    isPrivate: false
  },
  {
    path: USER_ID_ROUTE_PREFIX + PATHS.CREATE_ORDER,
    label: 'Create Order',
    isPrivate: true
  },
  {
    path: USER_ID_ROUTE_PREFIX + PATHS.CREATE_DELIVERY,
    label: 'Create Delivery',
    isPrivate: true
  }
];
