export const Roles = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin'
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];
