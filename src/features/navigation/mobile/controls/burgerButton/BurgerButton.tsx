import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface BurgerButtonProps {
  onClick: () => void;
}

export const BurgerButton = ({ onClick }: BurgerButtonProps) => (
  <IconButton size="large" color="inherit" aria-label="menu" onClick={onClick}>
    <MenuIcon />
  </IconButton>
);
