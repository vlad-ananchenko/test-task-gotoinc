import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Chip, Stack, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { OrderRequest, DeliveryRequest } from '@/types/Request';
import { MatchingRequestItem } from '../components/MatchingRequestItem';

interface MatchingRequestsListProps {
  matches: {
    order: OrderRequest;
    matches: DeliveryRequest[];
  }[];
}

export const MatchingRequestsList = ({ matches }: MatchingRequestsListProps) => (
  <Stack spacing={2} mt={4}>
    {matches.map(({ order, matches }) => (
      <Accordion
        key={order.id}
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          '&:before': {
            display: 'none'
          }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '&.Mui-expanded': { minHeight: 48 }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h6" fontWeight="bold">
              {order.from} → {order.to}
            </Typography>
            <Chip
              label={`${matches.length} Matching ${matches.length > 1 ? ' Options' : ' Option'}`}
              color="primary"
              sx={{ ml: 2 }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0
          }}
        >
          <Stack spacing={2} sx={{ padding: 2 }}>
            {matches.map(delivery => (
              <MatchingRequestItem key={delivery.id} delivery={delivery} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    ))}
  </Stack>
);
