import { createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserId } from '@/store/slices/accountSlice';
import { getPrivateRoutes, getPublicRoutes, getRedirectedRoutes } from './routerConfig';

export const useAppRouter = () => {
  const userId = useSelector(selectUserId);

  const routes = [...getPrivateRoutes(), ...getPublicRoutes(), getRedirectedRoutes(userId)];

  return createBrowserRouter(routes);
};
