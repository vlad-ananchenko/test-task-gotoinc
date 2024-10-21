import { v4 as uuidv4 } from 'uuid';

export const ensureUserId = (): string => {
  const existingId = localStorage.getItem('userId');

  if (existingId) return existingId;

  const newId = uuidv4();
  localStorage.setItem('userId', newId);

  return newId;
};
