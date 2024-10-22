import { ROLES } from '@/lib/constants';

export type Role = (typeof ROLES)[keyof typeof ROLES];
