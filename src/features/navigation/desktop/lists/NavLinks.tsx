import { NavLink } from '../controls/navLink/NavLink';
import { NavigationItem } from '../../navigationMap';

interface NavLinksProps {
  navItems: NavigationItem[];
}

export const NavLinks = ({ navItems }: NavLinksProps) =>
  navItems.map(({ path, label }) => <NavLink key={label} path={path} label={label} />);
