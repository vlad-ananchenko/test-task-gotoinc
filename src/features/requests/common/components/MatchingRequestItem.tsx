import React from 'react';
import { Box, Typography } from '@mui/material';
import { DeliveryRequest } from '@/types/Request';

interface MatchingRequestItemProps {
  delivery: DeliveryRequest;
}

export const MatchingRequestItem = ({ delivery: { from, to, dispatchDate } }: MatchingRequestItemProps) => (
  <Box>
    <Typography variant="subtitle1">
      Delivery from <b>{from}</b> to <b>{to}</b>
    </Typography>
    <Typography variant="body2">
      <Typography display="inline">Dispatch Date:</Typography> <b>{dispatchDate || 'N/A'}</b>
    </Typography>
  </Box>
);
