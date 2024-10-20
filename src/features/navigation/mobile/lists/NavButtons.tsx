import { NavButton } from '../controls/navButton/NavButton';
import { NavItem } from '@/types/NavItem';

interface NavButtonsProps {
  navItems: NavItem[];
  onClose: () => void;
}

export const NavButtons = ({ navItems, onClose }: NavButtonsProps) =>
  navItems.map(({ key, label, path, onClick }) => (
    <NavButton key={key} label={label} path={path} onClick={onClick && onClick} onClose={onClose} />
  ));
