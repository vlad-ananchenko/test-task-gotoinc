import { createTheme, ThemeOptions } from '@mui/material';

import { palette } from './palette';
import { breakpoints } from './breakpoints';

const themeOptions: ThemeOptions = {
  palette,
  breakpoints,
  spacing: 8
};

export const theme = createTheme(themeOptions);
