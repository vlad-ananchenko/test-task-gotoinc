import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Card, CardContent, Select, MenuItem, FormControl, Divider, Chip } from '@mui/material';
import { selectOrders } from '@/store/slices/orderRequestSlice';
import { selectDeliveries } from '@/store/slices/deliveryRequestSlice';
import { formatDate } from '@/lib/helpers';

export const AllRequestsPage = () => {
  const orders = useSelector(selectOrders);
  const deliveries = useSelector(selectDeliveries);

  const [sortBy, setSortBy] = useState<'createdAt' | 'dispatchDate'>('createdAt');

  const sortedRequests = useMemo(() => {
    const allRequests = [...orders, ...deliveries];
    return allRequests.sort((a, b) => {
      const getTime = (request: any) =>
        sortBy === 'dispatchDate' && request.dispatchDate
          ? new Date(request.dispatchDate).getTime()
          : sortBy === 'createdAt' && request.createdAt
            ? new Date(request.createdAt).getTime()
            : Number.MAX_SAFE_INTEGER;

      const timeA = getTime(a);
      const timeB = getTime(b);

      if (timeA !== timeB) return timeA - timeB;

      return a.id.localeCompare(b.id);
    });
  }, [deliveries, orders, sortBy]);

  const getRequestTypeLabel = (request: any) => (request.parcelType ? 'Order' : 'Delivery');

  return (
    <Box sx={{ padding: '24px', maxWidth: '1400px' }}>
      {sortedRequests.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <Select value={sortBy} onChange={e => setSortBy(e.target.value as 'createdAt' | 'dispatchDate')}>
              <MenuItem value="createdAt">Date Created</MenuItem>
              <MenuItem value="dispatchDate">Dispatch Date</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3
        }}
      >
        {sortedRequests.map((request: any) => (
          <Card key={request.id} sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 2 }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Chip
                  label={getRequestTypeLabel(request)}
                  color={request.parcelType ? 'primary' : 'secondary'}
                  sx={{ marginRight: 2, fontWeight: 'bold' }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {request.from} → {request.to}
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ marginBottom: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" display="inline">
                  Date Created:{' '}
                </Typography>
                <Typography variant="body2" display="inline">
                  {formatDate(request.createdAt)}
                </Typography>
              </Box>

              <Box sx={{ marginBottom: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold" display="inline">
                  Dispatch Date:{' '}
                </Typography>
                <Typography variant="body2" display="inline">
                  {formatDate(request.dispatchDate)}
                </Typography>
              </Box>

              {request.parcelType && (
                <Box sx={{ marginBottom: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold" display="inline">
                    Parcel Type:{' '}
                  </Typography>
                  <Typography variant="body2" display="inline">
                    {request.parcelType}
                  </Typography>
                </Box>
              )}
              {request.description && (
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold" display="inline">
                    Description:{' '}
                  </Typography>
                  <Typography variant="body2" display="inline">
                    {request.description}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
