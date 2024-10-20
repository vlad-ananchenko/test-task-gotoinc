import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/layouts/AppLayout';
import { routesMap } from './routesMap';
import { generateRoutes } from './generateRoutes';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: generateRoutes(routesMap)
  }
]);
