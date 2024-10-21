import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Role, Roles } from '@/types/Role';
import { ensureUserId } from '../utils';

interface AccountState {
  userId: string;
  role: Role;
}

const initialState: AccountState = {
  userId: ensureUserId(),
  role: Roles.GUEST
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    }
  }
});

export const { setRole } = accountSlice.actions;
export default accountSlice.reducer;
