export type RequestType = 'order' | 'deliver';

export type ParcelType = 'gadgets' | 'drinks' | 'clothes' | 'medicines' | 'other';

interface BaseRequest {
  id: string;
  from: string;
  to: string;
  dispatchDate?: string;
  userId: string;
  createdAt: string;
}

interface OrderDetails {
  parcelType?: ParcelType;
  description?: string;
}

export interface OrderRequest extends BaseRequest, OrderDetails {}

export interface DeliveryRequest extends BaseRequest {}

export type Request = OrderRequest | DeliveryRequest;
