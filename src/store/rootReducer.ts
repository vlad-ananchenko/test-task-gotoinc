import { combineReducers } from '@reduxjs/toolkit';

import accountReducer from './slices/accountSlice';
import orderRequestsReducer from './slices/orderRequestSlice';
import deliveryRequestsReducer from './slices/deliveryRequestSlice';
import deleteModalReducer from './slices/deleteModalSlice';
import editModalReducer from './slices/editModalSlice';

export const rootReducer = combineReducers({
  account: accountReducer,
  orderRequests: orderRequestsReducer,
  deliveryRequests: deliveryRequestsReducer,
  deleteModal: deleteModalReducer,
  editModal: editModalReducer
});
