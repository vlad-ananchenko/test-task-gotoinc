import { z } from 'zod';

export const ParcelTypeEnum = z.enum(['gadgets', 'drinks', 'clothes', 'medicines', 'other']);

export const orderSchema = z.object({
  from: z.string().min(1, 'City of departure is required'),
  to: z.string().min(1, 'Destination city is required'),
  dispatchDate: z.string().optional(),
  parcelType: ParcelTypeEnum.optional(),
  description: z.string().optional()
});

export type OrderFormInputs = z.infer<typeof orderSchema>;
