import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

import { selectOrdersByUserId } from '@/store/slices/orderRequestSlice';
import { selectDeliveriesByUserId } from '@/store/slices/deliveryRequestSlice';
import { openEditModal } from '@/store/slices/editModalSlice';
import { openDeleteModal } from '@/store/slices/deleteModalSlice';
import { selectMatchingRequests } from '@/store/selectors/matchingRequestsSelector';
import { EditRequestModal } from '@/features/requests/common/modals/editRequestModal/EditRequestModal';
import { DeleteRequestModal } from '@/features/requests/common/modals/deleteRequestModal/DeleteRequestModal';
import { MatchingRequestsList } from '@/features/requests/common/lists/MatchingRequestsList';
import { RootReducerState } from '@/store';
import { OrderRequest, DeliveryRequest, RequestType } from '@/types/Request';
import { OrderRequestCardItemList } from '../../orderRequest/lists/OrderRequestCardItemList';
import { DeliveryRequestCardItemList } from '../../deliveryRequest/lists/DeliveryRequestCardItemList';

export const UserRequestsPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useDispatch();

  const orders = useSelector((state: RootReducerState) => selectOrdersByUserId(state, userId));
  const deliveries = useSelector((state: RootReducerState) => selectDeliveriesByUserId(state, userId));
  const matchingRequests = useSelector(selectMatchingRequests);

  const handleEdit = (request: OrderRequest | DeliveryRequest) => {
    dispatch(openEditModal(request));
  };

  const handleDelete = (type: RequestType) => (id: string) => {
    dispatch(openDeleteModal({ id, type }));
  };

  const isOrders = orders.length > 0;
  const isDeliveries = deliveries.length > 0;
  const isMatchingRequests = matchingRequests.length > 0;

  return (
    <Box sx={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {isMatchingRequests && (
        <Box marginBottom={2}>
          <MatchingRequestsList matches={matchingRequests} />
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          marginBottom: '24px',
          alignItems: 'flex-start'
        }}
      >
        {isOrders && (
          <Paper
            sx={{
              flex: '1 1 50%',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              boxShadow: 3,
              borderRadius: 2,
              minHeight: '300px'
            }}
          >
            <OrderRequestCardItemList orders={orders} onEdit={handleEdit} onDelete={handleDelete('order')} />
          </Paper>
        )}

        {isDeliveries && (
          <Paper
            sx={{
              flex: '1 1 50%',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              boxShadow: 3,
              borderRadius: 2,
              minHeight: '300px'
            }}
          >
            <DeliveryRequestCardItemList
              deliveries={deliveries}
              onEdit={handleEdit}
              onDelete={handleDelete('deliver')}
            />
          </Paper>
        )}
      </Box>

      <EditRequestModal />
      <DeleteRequestModal />
    </Box>
  );
};
