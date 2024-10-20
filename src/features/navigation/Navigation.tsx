import { useState, useMemo, useCallback } from 'react';
import { AppBar, Toolbar, useMediaQuery, Theme } from '@mui/material';

import { Drawer } from './mobile/drawer/Drawer';
import { Bar } from './desktop/bar/Bar';
import { LogoButton } from './desktop/controls/logoButton/LogoButton';
import { BurgerButton } from './mobile/controls/burgerButton/BurgerButton';
import { getNavigationItems, getNavigationKey } from './utils';
import { Role } from '@/types/Role';
import { NavItem } from '@/types/NavItem';

const NavigationComponents = {
  desktop: (navItems: NavItem[]) => <Bar navItems={navItems} />,
  mobile: (navItems: NavItem[], isOpen: boolean, onClose: () => void) => (
    <Drawer navItems={navItems} isOpen={isOpen} onClose={onClose} />
  )
};

const NavigationButtons = {
  desktop: () => <LogoButton />,
  mobile: (toggleDrawer: () => void) => <BurgerButton onClick={toggleDrawer} />
};

interface NavigationProps {
  role?: Role;
}

export const Navigation = ({ role = 'user' }: NavigationProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const navItems = useMemo(() => getNavigationItems(role), [role]);

  const toggleDrawer = useCallback(() => setIsDrawerOpen(!isDrawerOpen), [isDrawerOpen]);

  const navigationKey = getNavigationKey(isDesktop);

  const NavigationButton = NavigationButtons[navigationKey](toggleDrawer);
  const NavigationComponent = NavigationComponents[navigationKey](navItems, isDrawerOpen, toggleDrawer);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {NavigationButton}
        {NavigationComponent}
      </Toolbar>
    </AppBar>
  );
};
