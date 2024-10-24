import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeDeleteModal,
  selectIsDeleteModalOpen,
  selectDeleteModalRequestId,
  selectDeleteModalRequestType
} from '@/store/slices/deleteModalSlice';
import { deleteOrderRequest } from '@/store/slices/orderRequestSlice';
import { deleteDeliveryRequest } from '@/store/slices/deliveryRequestSlice';

export const DeleteRequestModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsDeleteModalOpen);
  const requestId = useSelector(selectDeleteModalRequestId);
  const requestType = useSelector(selectDeleteModalRequestType);

  const handleClose = () => dispatch(closeDeleteModal());

  const handleConfirmDelete = () => {
    if (!requestId || !requestType) return;

    if (requestType === 'order') {
      dispatch(deleteOrderRequest(requestId));
    }

    if (requestType === 'deliver') {
      dispatch(deleteDeliveryRequest(requestId));
    }

    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: '#df4d4d',
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        Confirm Deletion
      </DialogTitle>

      <DialogActions sx={{ padding: '16px', justifyContent: 'space-between' }}>
        <Button onClick={handleClose} variant="outlined" color="primary" sx={{ px: 3 }}>
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} variant="contained" color="error" sx={{ px: 3 }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
