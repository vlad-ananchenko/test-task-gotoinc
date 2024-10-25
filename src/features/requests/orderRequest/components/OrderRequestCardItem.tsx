import { Card, CardContent, CardActions, Typography, Button, Chip, Box, Divider } from '@mui/material';
import { OrderRequest } from '@/types/Request';

interface OrderRequestCardItemProps {
  order: OrderRequest;
  onEdit: (request: OrderRequest) => void;
  onDelete: (id: string) => void;
}

export const OrderRequestCardItem = ({ order, onEdit, onDelete }: OrderRequestCardItemProps) => (
  <Card sx={{ borderRadius: 4, boxShadow: 3, minWidth: 280, maxWidth: 400 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          {order.from} → {order.to}
        </Typography>
        <Chip label="Order" color="primary" />
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle2" fontWeight="bold">
          Dispatch Date:
        </Typography>{' '}
        <Typography variant="body2">{order.dispatchDate}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle2" fontWeight="bold">
          Parcel Type:
        </Typography>{' '}
        <Typography variant="body2">{order.parcelType}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle2" fontWeight="bold">
          Description:
        </Typography>{' '}
        <Typography variant="body2">{order.description || 'No description provided'}</Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: 'flex-end', padding: '8px 16px' }}>
      <Button size="small" variant="outlined" onClick={() => onEdit(order)}>
        Edit
      </Button>
      <Button size="small" variant="outlined" color="error" onClick={() => onDelete(order.id)}>
        Delete
      </Button>
    </CardActions>
  </Card>
);
