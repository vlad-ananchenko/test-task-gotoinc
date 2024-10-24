import { createSelector } from '@reduxjs/toolkit';

import { RootReducerState } from '@/store';
import { OrderRequest, DeliveryRequest } from '@/types/Request';

export const selectMatchingRequests = createSelector(
  (state: RootReducerState) => state.orderRequests.orders,
  (state: RootReducerState) => state.deliveryRequests.deliveries,
  (orders: OrderRequest[], deliveries: DeliveryRequest[]) => {
    return orders
      .map(order => ({
        order,
        matches: deliveries.filter(delivery => {
          const citiesMatch = delivery.from === order.to && delivery.to === order.from;

          const dateMatch = !delivery.dispatchDate || new Date(delivery.dispatchDate) <= new Date(order.dispatchDate);

          return citiesMatch && dateMatch;
        })
      }))
      .filter(({ matches }) => matches.length > 0);
  }
);
