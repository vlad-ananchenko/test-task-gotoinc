import { useState, useCallback } from 'react';
import { AppBar, Toolbar, useMediaQuery, Theme } from '@mui/material';

import { Drawer } from './mobile/drawer/Drawer';
import { Bar } from './desktop/bar/Bar';
import { LogoButton } from './desktop/controls/logoButton/LogoButton';
import { BurgerButton } from './mobile/controls/burgerButton/BurgerButton';
import { getDeviceKey } from './utils';
import { useNavigation } from './useNavigation';
import { NavigationItem } from './navigationMap';

const NavigationComponents = {
  desktop: (navItems: NavigationItem[]) => <Bar navItems={navItems} />,
  mobile: (navItems: NavigationItem[], isOpen: boolean, onClose: () => void) => (
    <Drawer navItems={navItems} isOpen={isOpen} onClose={onClose} />
  )
};

const NavigationButtons = {
  desktop: () => <LogoButton />,
  mobile: (toggleDrawer: () => void) => <BurgerButton onClick={toggleDrawer} />
};

export const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const { navItems } = useNavigation();

  const toggleDrawer = useCallback(() => setIsDrawerOpen(!isDrawerOpen), [isDrawerOpen]);

  const deviceKey = getDeviceKey(isDesktop);

  const NavigationButton = NavigationButtons[deviceKey](toggleDrawer);
  const NavigationComponent = NavigationComponents[deviceKey](navItems, isDrawerOpen, toggleDrawer);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {NavigationButton}
        {NavigationComponent}
      </Toolbar>
    </AppBar>
  );
};
