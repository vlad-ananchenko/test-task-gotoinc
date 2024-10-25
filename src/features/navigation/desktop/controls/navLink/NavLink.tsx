import { Link, useLocation } from 'react-router-dom';

import { NavigationItem } from '@/features/navigation/navigationMap';
import * as styles from './navLink.module.scss';

export const NavLink = ({ path, label }: Pick<NavigationItem, 'path' | 'label'>) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;
  const className = `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <Link to={path} className={className}>
      {label}
    </Link>
  );
};
