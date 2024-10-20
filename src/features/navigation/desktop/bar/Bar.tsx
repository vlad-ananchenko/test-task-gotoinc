import { Box } from '@mui/material';

import { NavLinks } from '../lists/NavLinks';
import { NavItem } from '@/types/NavItem';
import * as styles from './bar.module.scss';

interface BarProps {
  navItems: NavItem[];
}

export const Bar = ({ navItems }: BarProps) => (
  <Box className={styles.bar}>
    <NavLinks navItems={navItems} />
  </Box>
);
