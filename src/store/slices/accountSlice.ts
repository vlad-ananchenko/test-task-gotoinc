import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ROLES } from '@/lib/constants';
import { Role } from '@/types/Role';
import { ensureUserId } from '../utils/ensureUserId';
import { PersistedRootState } from '..';

interface AccountState {
  userId: string;
  role: Role;
}

const initialState: AccountState = {
  userId: ensureUserId(),
  role: ROLES.USER
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    }
  }
});

export const { setUserId } = accountSlice.actions;

export const selectUserId = (state: PersistedRootState) => state.account.userId;
export const selectUserRole = (state: PersistedRootState) => state.account.role;

export default accountSlice.reducer;
