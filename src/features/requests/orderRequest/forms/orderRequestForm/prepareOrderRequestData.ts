import { v4 as uuidv4 } from 'uuid';

import { OrderRequest } from '@/types/Request';

export const prepareOrderRequestData = (userId: string, data: Partial<OrderRequest>): OrderRequest => {
  const { id, from, to, dispatchDate, parcelType, description } = data;

  const baseData: OrderRequest = {
    id: id || uuidv4(),
    userId,
    from,
    to,
    createdAt: data.createdAt || new Date().toISOString()
  };

  return {
    ...baseData,
    ...(dispatchDate && { dispatchDate }),
    ...(parcelType && { parcelType }),
    ...(description && { description })
  };
};
