import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderRequest, DeliveryRequest } from '@/types/Request';
import { PersistedRootState } from '..';

type EditModalState = {
  isOpen: boolean;
  currentRequest: OrderRequest | DeliveryRequest | null;
};

const initialEditState: EditModalState = {
  isOpen: false,
  currentRequest: null
};

const editModalSlice = createSlice({
  name: 'editModal',
  initialState: initialEditState,
  reducers: {
    openEditModal: (state, action: PayloadAction<OrderRequest | DeliveryRequest>) => {
      state.isOpen = true;
      state.currentRequest = action.payload;
    },
    closeEditModal: state => {
      state.isOpen = false;
      state.currentRequest = null;
    }
  }
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;

export const selectEditModalState = (state: PersistedRootState) => state.editModal;

export default editModalSlice.reducer;
