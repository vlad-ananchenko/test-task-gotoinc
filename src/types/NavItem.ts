export interface NavItem {
  key: string;
  label: string;
  path: string;
  onClick?: () => void;
}
