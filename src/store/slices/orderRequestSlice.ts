import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { OrderRequest } from '@/types/Request';
import { isDuplicateRequest } from '../utils/isDuplicateRequest';
import { PersistedRootState } from '..';

export type OrdersState = {
  orders: OrderRequest[];
  loading: boolean;
  error: string | null;
};

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null
};

const orderRequestsSlice = createSlice({
  name: 'orderRequests',
  initialState,
  reducers: {
    addOrderRequest: (state, action: PayloadAction<OrderRequest>) => {
      const request = action.payload;
      if (isDuplicateRequest(state.orders, request)) {
        state.error = 'Duplicate order request detected. Request was not added.';
      } else {
        state.orders.push(request);
        state.error = null;
      }
    },
    editOrderRequest: (state, action: PayloadAction<OrderRequest>) => {
      const updatedRequest = action.payload;
      const index = state.orders.findIndex(req => req.id === updatedRequest.id);

      const isDuplicate = state.orders.some(
        req => req.id !== updatedRequest.id && isDuplicateRequest(state.orders, updatedRequest)
      );

      if (index !== -1 && !isDuplicate) {
        state.orders[index] = { ...state.orders[index], ...updatedRequest };
        state.error = null;
      } else {
        state.error = 'Duplicate order request detected. Request was not updated.';
      }
    },
    deleteOrderRequest: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(request => request.id !== action.payload);
    },
    setOrderLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setOrderError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { addOrderRequest, editOrderRequest, deleteOrderRequest, setOrderLoading, setOrderError } =
  orderRequestsSlice.actions;

export const selectOrders = (state: PersistedRootState) => state.orderRequests.orders;
export const selectOrderLoading = (state: PersistedRootState) => state.orderRequests.loading;
export const selectOrderError = (state: PersistedRootState) => state.orderRequests.error;
export const selectOrdersByUserId = createSelector(
  [selectOrders, (_: PersistedRootState, userId: string) => userId],
  (orders, userId) => orders.filter(order => order.userId === userId)
);

export default orderRequestsSlice.reducer;
