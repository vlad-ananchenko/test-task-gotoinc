import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersistedRootState } from '..';

type DeleteModalState = {
  isOpen: boolean;
  requestId: string | null;
  requestType: 'order' | 'deliver' | null;
};

const initialDeleteState: DeleteModalState = {
  isOpen: false,
  requestId: null,
  requestType: null
};

const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState: initialDeleteState,
  reducers: {
    openDeleteModal: (state, action: PayloadAction<{ id: string; type: 'order' | 'deliver' }>) => {
      state.isOpen = true;
      state.requestId = action.payload.id;
      state.requestType = action.payload.type;
    },
    closeDeleteModal: state => {
      state.isOpen = false;
      state.requestId = null;
      state.requestType = null;
    }
  }
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;

export const selectDeleteModalState = (state: PersistedRootState) => state.deleteModal;
export const selectIsDeleteModalOpen = (state: PersistedRootState) => state.deleteModal.isOpen;
export const selectDeleteModalRequestId = (state: PersistedRootState) => state.deleteModal.requestId;
export const selectDeleteModalRequestType = (state: PersistedRootState) => state.deleteModal.requestType;

export default deleteModalSlice.reducer;
