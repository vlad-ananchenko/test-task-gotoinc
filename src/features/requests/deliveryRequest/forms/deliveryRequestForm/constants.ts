import { DeliveryFormInputs } from './validation';

export const defaultValues: DeliveryFormInputs = {
  from: '',
  to: '',
  dispatchDate: ''
};

export const DELIVERY_REQUEST_FORM_CONFIG = {
  title: 'Create Delivery Request',
  formName: 'deliveryForm',
  labels: {
    from: 'City of departure',
    to: 'Destination city',
    dispatchDate: 'Dispatch date',
    parcelType: 'Parcel type'
  },
  submitButtonText: {
    create: 'Create'
  }
};
