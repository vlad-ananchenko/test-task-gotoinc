import { Box } from '@mui/material';

import { NavLinks } from '../lists/NavLinks';
import { NavigationItem } from '../../navigationMap';
import * as styles from './bar.module.scss';

interface BarProps {
  navItems: NavigationItem[];
}

export const Bar = ({ navItems }: BarProps) => (
  <Box className={styles.bar}>
    <NavLinks navItems={navItems} />
  </Box>
);
