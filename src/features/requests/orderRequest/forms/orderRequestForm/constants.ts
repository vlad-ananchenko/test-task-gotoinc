import { OrderFormInputs } from './validation';

const parcelTypes = [
  { value: 'gadgets', label: 'Gadgets' },
  { value: 'drinks', label: 'Drinks' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'medicines', label: 'Medicines' },
  { value: 'other', label: 'Other' }
];

export const defaultValues: OrderFormInputs = {
  from: '',
  to: '',
  dispatchDate: '',
  parcelType: 'other',
  description: ''
};

export const ORDER_REQUEST_FORM_CONFIG = {
  title: 'Create Order Request',
  formName: 'order-request-form',
  labels: {
    from: 'City of departure',
    to: 'Destination city',
    dispatchDate: 'Dispatch Date',
    parcelType: 'Parcel Type',
    description: 'Parcel Description'
  },
  parcelTypes,
  submitButtonText: {
    create: 'Create'
  }
};
