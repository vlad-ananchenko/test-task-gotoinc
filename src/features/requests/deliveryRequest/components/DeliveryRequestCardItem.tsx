import { Card, CardContent, CardActions, Typography, Button, Chip, Box, Divider } from '@mui/material';
import { DeliveryRequest } from '@/types/Request';

interface DeliveryRequestCardItemProps {
  delivery: DeliveryRequest;
  onEdit: (request: DeliveryRequest) => void;
  onDelete: (id: string) => void;
}

export const DeliveryRequestCardItem = ({ delivery, onEdit, onDelete }: DeliveryRequestCardItemProps) => (
  <Card sx={{ borderRadius: 4, boxShadow: 3, minWidth: 280, maxWidth: 400 }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          {delivery.from} → {delivery.to}
        </Typography>
        <Chip label="Delivery" color="secondary" />
      </Box>

      <Box mb={1}>
        <Typography variant="subtitle2" fontWeight="bold">
          Dispatch Date:
        </Typography>{' '}
        <Typography variant="body2">{delivery.dispatchDate || 'N/A'}</Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: 'flex-end', padding: '8px 16px' }}>
      <Button size="small" variant="outlined" onClick={() => onEdit(delivery)}>
        Edit
      </Button>
      <Button size="small" variant="outlined" color="error" onClick={() => onDelete(delivery.id)}>
        Delete
      </Button>
    </CardActions>
  </Card>
);
