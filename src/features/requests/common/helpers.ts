import { editDeliveryRequest, addDeliveryRequest } from '@/store/slices/deliveryRequestSlice';
import { addOrderRequest, editOrderRequest } from '@/store/slices/orderRequestSlice';
import { RequestType } from '@/types/Request';

export const getTodayDay = () => new Date().toISOString().split('T')[0];

export const getRequestAction = (requestType: RequestType, isEdit: boolean) => {
  if (requestType === 'order') {
    return isEdit ? editOrderRequest : addOrderRequest;
  } else {
    return isEdit ? editDeliveryRequest : addDeliveryRequest;
  }
};
