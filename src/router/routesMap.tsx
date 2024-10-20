import { ReactNode } from 'react';

import { Home } from '@/pages/Home';
import { Requests } from '@/pages/Requests';
import { Order } from '@/pages/Order';
import { Delivery } from '@/pages/Delivery';
import { NavItem } from '@/types/NavItem';
import { Role } from '@/types/Role';

type RouteKey = 'home' | 'requests' | 'order' | 'delivery';

interface RouteNavItem extends Omit<NavItem, 'key' | 'onClick'> {
  element: ReactNode;
  isVisible: (role: Role) => boolean;
}

export type RoutesMap = Record<RouteKey, RouteNavItem>;

// draft
export const routesMap: RoutesMap = {
  home: {
    label: 'Home',
    path: '/',
    element: <Home />,
    isVisible: () => true
  },
  requests: {
    label: 'Requests',
    path: '/requests',
    element: <Requests />,
    isVisible: role => role !== 'guest'
  },
  order: {
    label: 'Order',
    path: '/order',
    element: <Order />,
    isVisible: role => role === 'user' || role === 'admin'
  },
  delivery: {
    label: 'Delivery',
    path: '/delivery',
    element: <Delivery />,
    isVisible: role => role === 'user' || role === 'admin'
  }
};
