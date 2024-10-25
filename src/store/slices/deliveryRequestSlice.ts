import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeliveryRequest } from '@/types/Request';
import { isDuplicateRequest } from '../utils/isDuplicateRequest';
import { PersistedRootState } from '..';

export type DeliveriesState = {
  deliveries: DeliveryRequest[];
  loading: boolean;
  error: string | null;
};

const initialState: DeliveriesState = {
  deliveries: [],
  loading: false,
  error: null
};

const deliveryRequestsSlice = createSlice({
  name: 'deliveryRequests',
  initialState,
  reducers: {
    addDeliveryRequest: (state, action: PayloadAction<DeliveryRequest>) => {
      const request = action.payload;
      if (isDuplicateRequest(state.deliveries, request)) {
        state.error = 'Duplicate delivery request detected. Request was not added.';
      } else {
        state.deliveries.push(request);
        state.error = null;
      }
    },
    editDeliveryRequest: (state, action: PayloadAction<DeliveryRequest>) => {
      const updatedRequest = action.payload;
      const index = state.deliveries.findIndex(req => req.id === updatedRequest.id);

      const isDuplicate = state.deliveries.some(
        req => req.id !== updatedRequest.id && isDuplicateRequest(state.deliveries, updatedRequest)
      );

      if (index !== -1 && !isDuplicate) {
        state.deliveries[index] = { ...state.deliveries[index], ...updatedRequest };
        state.error = null;
      } else {
        state.error = 'Duplicate delivery request detected. Request was not updated.';
      }
    },
    deleteDeliveryRequest: (state, action: PayloadAction<string>) => {
      state.deliveries = state.deliveries.filter(request => request.id !== action.payload);
    },
    setDeliveryLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setDeliveryError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { addDeliveryRequest, editDeliveryRequest, deleteDeliveryRequest, setDeliveryLoading, setDeliveryError } =
  deliveryRequestsSlice.actions;

export const selectDeliveries = (state: PersistedRootState) => state.deliveryRequests.deliveries;
export const selectDeliveryLoading = (state: PersistedRootState) => state.deliveryRequests.loading;
export const selectDeliveryError = (state: PersistedRootState) => state.deliveryRequests.error;
export const selectDeliveriesByUserId = createSelector(
  [selectDeliveries, (_: PersistedRootState, userId: string) => userId],
  (deliveries, userId) => deliveries.filter(delivery => delivery.userId === userId)
);

export default deliveryRequestsSlice.reducer;
