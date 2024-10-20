import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { appRoutes } from '@/router/appRoutes';
import { theme } from '@/styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={appRoutes} />
    </ThemeProvider>
  );
};
