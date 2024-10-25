import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

interface LogoButtonProps {
  to?: '/';
}

export const LogoButton = ({ to = '/' }: LogoButtonProps) => (
  <ButtonBase
    component={Link}
    to={to}
    color="inherit"
    disableRipple
    sx={{
      marginRight: 'auto',
      paddingLeft: '16px'
    }}
  >
    <LocalShippingIcon />
  </ButtonBase>
);
