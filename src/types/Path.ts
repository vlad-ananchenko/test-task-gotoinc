import { PATHS } from '@/lib/constants';

export type Path = (typeof PATHS)[keyof typeof PATHS];
