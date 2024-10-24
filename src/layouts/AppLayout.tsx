import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useSyncUserId } from '@/hooks';

import { Navigation } from '@/features/navigation/Navigation';
import * as styles from './appLayout.module.scss';

export const AppLayout = () => {
  useSyncUserId();

  return (
    <Box className={styles.root}>
      <Navigation />
      <Container maxWidth="xl" className={styles.container}>
        <Outlet />
      </Container>
    </Box>
  );
};
