import { v4 as uuidv4 } from 'uuid';

import { DeliveryRequest } from '@/types/Request';

export const prepareDeliveryRequestData = (userId: string, data: Partial<DeliveryRequest>): DeliveryRequest => {
  const { id, from, to, dispatchDate } = data;

  const baseData: DeliveryRequest = {
    id: id || uuidv4(),
    userId,
    from,
    to,
    createdAt: data.createdAt || new Date().toISOString()
  };

  return {
    ...baseData,
    ...(dispatchDate && { dispatchDate })
  };
};
