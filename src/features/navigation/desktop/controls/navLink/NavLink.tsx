import { Link, useLocation } from 'react-router-dom';

import { NavItem } from '@/types/NavItem';
import * as styles from './navLink.module.scss';

export const NavLink = ({ path, label }: NavItem) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;
  const className = `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <Link to={path} className={className}>
      {label}
    </Link>
  );
};
