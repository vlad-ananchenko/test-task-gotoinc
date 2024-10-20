import { Drawer as DrawerComponent, Stack } from '@mui/material';

import { NavButtons } from '../lists/NavButtons';
import { NavItem } from '@/types/NavItem';
import * as styles from './drawer.module.scss';

interface DrawerProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
}

export const Drawer = ({ navItems, isOpen, onClose, anchor = 'left' }: DrawerProps) => {
  return (
    <DrawerComponent
      anchor={anchor}
      open={isOpen}
      onClose={onClose}
      classes={{ paper: styles.drawer }}
      ModalProps={{
        keepMounted: true
      }}
    >
      <Stack>
        <NavButtons navItems={navItems} onClose={onClose} />
      </Stack>
    </DrawerComponent>
  );
};
