import { z } from 'zod';

export const deliverySchema = z.object({
  from: z.string().min(1, 'City of departure is required'),
  to: z.string().min(1, 'Destination city is required'),
  dispatchDate: z.string().optional()
});

export type DeliveryFormInputs = z.infer<typeof deliverySchema>;
