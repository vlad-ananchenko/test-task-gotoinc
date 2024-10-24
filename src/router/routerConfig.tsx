import { RouteObject, Navigate } from 'react-router-dom';

import { AppLayout } from '@/layouts/AppLayout';
import { AllRequestsPage } from '@/pages/AllRequestsPage';
import { DeliveryRequestPage } from '@/features/requests/shared/pages/DeliveryRequestPage';
import { OrderRequestPage } from '@/features/requests/shared/pages/OrderRequestPage';
import { RequestTypeSelectionPage } from '@/pages/RequestTypeSelectionPage';
import { UserRequestsPage } from '@/features/requests/shared/pages/UserRequestsPage';
import { PATHS, USER_ID_ROUTE_PREFIX } from '@/lib/constants';

export const getPublicRoutes = (): RouteObject[] => [
  {
    path: '/' + PATHS.REQUESTS,
    element: <AppLayout />,
    children: [{ path: '', element: <AllRequestsPage /> }]
  },
  {
    path: '*',
    element: <div>Page Not Found</div>
  }
];

export const getPrivateRoutes = (): RouteObject[] => [
  {
    path: USER_ID_ROUTE_PREFIX,
    element: <AppLayout />,
    children: [
      { path: '', element: <Navigate to={PATHS.REQUESTS} replace /> },
      { path: PATHS.CREATE, element: <RequestTypeSelectionPage /> },
      { path: PATHS.REQUESTS, element: <UserRequestsPage /> },
      { path: PATHS.CREATE_ORDER, element: <OrderRequestPage /> },
      { path: PATHS.CREATE_DELIVERY, element: <DeliveryRequestPage /> }
    ]
  }
];

export const getRedirectedRoutes = (userId: string): RouteObject => ({
  path: '/',
  element: <Navigate to={`/${userId}/${PATHS.CREATE}`} replace />
});
