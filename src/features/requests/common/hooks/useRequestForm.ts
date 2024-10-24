import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, UseFormReturn, FieldValues, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

import { selectUserId } from '@/store/slices/accountSlice';
import { selectOrderError, setOrderError } from '@/store/slices/orderRequestSlice';
import { selectDeliveryError, setDeliveryError } from '@/store/slices/deliveryRequestSlice';
import { OrderRequest, DeliveryRequest } from '@/types/Request';
import { getRequestAction } from '..';
import { prepareOrderRequestData } from '../../orderRequest/forms/orderRequestForm';
import { prepareDeliveryRequestData } from '../../deliveryRequest/forms/deliveryRequestForm';

type UseRequestFormProps<T extends FieldValues> = {
  schema: ZodSchema;
  defaultValues?: DefaultValues<T>;
  requestType: 'order' | 'deliver';
};

export const useRequestForm = <T extends OrderRequest | DeliveryRequest>({
  schema,
  defaultValues,
  requestType
}: UseRequestFormProps<T>): UseFormReturn<T> & {
  error: string | null;
  submitForm: (data: T) => void;
} => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  const error = useSelector(requestType === 'order' ? selectOrderError : selectDeliveryError);

  const formMethods = useForm<T>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues
  });

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        const clearErrorAction = requestType === 'order' ? setOrderError(null) : setDeliveryError(null);
        dispatch(clearErrorAction);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [error, dispatch, requestType]);

  const submitForm = (data: T) => {
    const submitData =
      requestType === 'order'
        ? prepareOrderRequestData(userId, data as Partial<OrderRequest>)
        : prepareDeliveryRequestData(userId, data as Partial<DeliveryRequest>);

    const isEdit = Boolean(data.id);
    const action = getRequestAction(requestType, isEdit);

    dispatch(action(submitData));
    formMethods.reset();
  };

  return { ...formMethods, error, submitForm };
};
