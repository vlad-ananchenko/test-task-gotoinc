import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectUserId } from '@/store/slices/accountSlice';
import { generateNavigationItems } from './utils';

export const useNavigation = () => {
  const userId = useSelector(selectUserId);

  const navItems = useMemo(() => generateNavigationItems(userId), [userId]);

  return { navItems, userId };
};
