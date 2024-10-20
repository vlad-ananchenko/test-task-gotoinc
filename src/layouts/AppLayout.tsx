import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import { Navigation } from '@/features/navigation/Navigation';
import * as styles from './appLayout.module.scss';

export const AppLayout = () => (
  <Box className={styles.root}>
    <Navigation />
    <Container maxWidth="lg" className={styles.container}>
      <Outlet />
    </Container>
  </Box>
);
