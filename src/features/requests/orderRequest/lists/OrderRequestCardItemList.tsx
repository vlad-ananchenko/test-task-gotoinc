import { Stack } from '@mui/material';
import { OrderRequest } from '@/types/Request';
import { OrderRequestCardItem } from '../components/OrderRequestCardItem';

interface OrderRequestCardItemListProps {
  orders: OrderRequest[];
  onEdit: (request: OrderRequest) => void;
  onDelete: (id: string) => void;
}

export const OrderRequestCardItemList = ({ orders, onEdit, onDelete }: OrderRequestCardItemListProps) => (
  <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent="center">
    {orders.map(order => (
      <OrderRequestCardItem key={order.id} order={order} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </Stack>
);
