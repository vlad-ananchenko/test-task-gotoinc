import { NavLink } from '../controls/navLink/NavLink';
import { NavItem } from '@/types/NavItem';

interface NavLinksProps {
  navItems: NavItem[];
}

export const NavLinks = ({ navItems }: NavLinksProps) =>
  navItems.map(({ key, path, label }) => <NavLink key={key} path={path} label={label} />);
