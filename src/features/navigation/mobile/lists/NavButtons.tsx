import { NavigationItem } from '../../navigationMap';
import { NavButton } from '../controls/navButton/NavButton';

interface NavButtonsProps {
  navItems: NavigationItem[];
  onClose: () => void;
}

export const NavButtons = ({ navItems, onClose }: NavButtonsProps) =>
  navItems.map(({ label, path, onClick }) => (
    <NavButton key={label} label={label} path={path} onClick={onClick && onClick} onClose={onClose} />
  ));
