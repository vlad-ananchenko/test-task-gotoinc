import { v4 as uuidv4 } from 'uuid';

export const ensureUserId = (): string => {
  const accountData = JSON.parse(localStorage.getItem('persist:state') || '{}');
  const storedAccount = accountData.account ? JSON.parse(accountData.account) : {};
  const existingId = storedAccount.userId;

  if (existingId) {
    return existingId;
  }

  const defaultId = uuidv4();

  return defaultId;
};
