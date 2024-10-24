import { useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal, selectEditModalState } from '@/store/slices/editModalSlice';
import { editOrderRequest } from '@/store/slices/orderRequestSlice';
import { editDeliveryRequest } from '@/store/slices/deliveryRequestSlice';
import { DeliveryRequest, OrderRequest } from '@/types/Request';
import { OrderRequestForm } from '@/features/requests/orderRequest/forms/orderRequestForm';
import { DeliveryRequestForm } from '@/features/requests/deliveryRequest/forms/deliveryRequestForm';

export const EditRequestModal = () => {
  const dispatch = useDispatch();
  const { isOpen, currentRequest } = useSelector(selectEditModalState);
  const formRef = useRef<{ submit: () => void }>(null);

  const isOrder = currentRequest && 'parcelType' in currentRequest;

  const handleClose = () => {
    dispatch(closeEditModal());
  };

  const handleSave = (data: DeliveryRequest | OrderRequest) => {
    if (!currentRequest) return;

    if (isOrder) {
      dispatch(editOrderRequest({ ...currentRequest, ...data }));
    } else {
      dispatch(editDeliveryRequest({ ...currentRequest, ...data }));
    }

    handleClose();
  };

  const handleFormSubmit = () => {
    formRef.current?.submit();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Edit Request
      </DialogTitle>

      <DialogContent dividers sx={{ p: 4 }}>
        {isOrder ? (
          <OrderRequestForm ref={formRef} initialValues={currentRequest} onSubmit={handleSave} />
        ) : (
          <DeliveryRequestForm ref={formRef} initialValues={currentRequest} onSubmit={handleSave} />
        )}
      </DialogContent>

      <DialogActions sx={{ padding: '16px', justifyContent: 'space-between' }}>
        <Button onClick={handleClose} variant="outlined" color="primary" sx={{ px: 3 }}>
          Cancel
        </Button>
        <Button
          onClick={handleFormSubmit}
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            background: 'linear-gradient(to right, #42a5f5, #64b5f6)',
            '&:hover': { background: 'linear-gradient(to right, #1e88e5, #42a5f5)' }
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
