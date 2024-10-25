import { Stack } from '@mui/material';

import { DeliveryRequest } from '@/types/Request';
import { DeliveryRequestCardItem } from '../components/DeliveryRequestCardItem';

interface DeliveryRequestCardItemListProps {
  deliveries: DeliveryRequest[];
  onEdit: (request: DeliveryRequest) => void;
  onDelete: (id: string) => void;
}

export const DeliveryRequestCardItemList = ({ deliveries, onEdit, onDelete }: DeliveryRequestCardItemListProps) => (
  <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent="center">
    {deliveries.map(delivery => (
      <DeliveryRequestCardItem key={delivery.id} delivery={delivery} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </Stack>
);
