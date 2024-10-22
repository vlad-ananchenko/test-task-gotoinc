import { ButtonBase } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { NavigationItem } from '@/features/navigation/navigationMap';
import * as styles from './navButton.module.scss';

interface NavButtonProps extends Omit<NavigationItem, 'isPrivate'> {
  onClose: () => void;
}

export const NavButton = ({ label, path, onClick, onClose }: NavButtonProps) => {
  const { pathname } = useLocation();

  const className = `${styles.button} ${pathname === path ? styles.active : ''}`;

  const handleClick = () => {
    if (onClick) onClick();
    onClose();
  };

  return (
    <ButtonBase
      onClick={handleClick}
      className={className}
      component={Link}
      to={path}
      focusRipple={true}
      TouchRippleProps={{
        style: { color: 'rgba(25, 118, 210, 0.3)' }
      }}
      sx={{ padding: '16px 32px', justifyContent: 'flex-start' }}
    >
      {label}
    </ButtonBase>
  );
};
