import { OrderRequest, DeliveryRequest, Request } from '@/types/Request';

const normalizeString = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ');

const isOrderRequest = (request: OrderRequest | DeliveryRequest): request is OrderRequest => {
  return 'parcelType' in request;
};

export const isDuplicateRequest = (
  existingRequests: (OrderRequest | DeliveryRequest)[],
  newRequest: Request
): boolean => {
  return existingRequests.some(request => {
    const isSameUser = request.userId === newRequest.userId;
    const isSameFrom = normalizeString(request.from) === normalizeString(newRequest.from);
    const isSameTo = normalizeString(request.to) === normalizeString(newRequest.to);
    const isSameDispatchDate =
      normalizeString(request.dispatchDate || '') === normalizeString(newRequest.dispatchDate || '');

    if (isOrderRequest(request) && isOrderRequest(newRequest)) {
      const isSameParcelType = request.parcelType === newRequest.parcelType;
      const isSameDescription =
        normalizeString(request.description || '') === normalizeString(newRequest.description || '');

      return isSameUser && isSameFrom && isSameTo && isSameDispatchDate && isSameParcelType && isSameDescription;
    }

    return isSameUser && isSameFrom && isSameTo && isSameDispatchDate;
  });
};
