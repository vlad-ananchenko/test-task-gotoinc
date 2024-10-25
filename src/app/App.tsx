import { RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@/styles/theme';
import { useAppRouter } from '@/router/useAppRouter';

export const App = () => {
  const router = useAppRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
