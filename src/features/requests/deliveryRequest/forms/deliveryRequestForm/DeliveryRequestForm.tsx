import { forwardRef, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Box, Stack, Alert, Button } from '@mui/material';
import { DELIVERY_REQUEST_FORM_CONFIG as CONFIG, defaultValues } from './constants';
import { DeliveryFormInputs, deliverySchema } from './validation';
import { getTodayDay, useRequestForm } from '@/features/requests/common';

interface DeliveryRequestFormProps {
  initialValues?: DeliveryFormInputs;
  onSubmit?: (data: DeliveryFormInputs) => void;
}

export const DeliveryRequestForm = forwardRef(({ initialValues, onSubmit }: DeliveryRequestFormProps, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    error,
    submitForm
  } = useRequestForm({
    schema: deliverySchema,
    defaultValues: initialValues || defaultValues,
    requestType: 'deliver'
  });

  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onSubmit)
  }));

  const inputVariant = onSubmit ? 'filled' : 'standard';

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={3}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit || submitForm)}
        name={CONFIG.formName}
        sx={{ width: '100%', maxWidth: '600px' }}
      >
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Controller
              name="from"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={CONFIG.labels.from}
                  error={!!errors.from}
                  helperText={errors.from?.message}
                  fullWidth
                  variant={inputVariant}
                  sx={{ flexGrow: 1, minWidth: '200px' }}
                />
              )}
            />
            <Controller
              name="to"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={CONFIG.labels.to}
                  error={!!errors.to}
                  helperText={errors.to?.message}
                  fullWidth
                  variant={inputVariant}
                  sx={{ flexGrow: 1, minWidth: '200px' }}
                />
              )}
            />
          </Stack>

          <Controller
            name="dispatchDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                variant={inputVariant}
                fullWidth
                slotProps={{ htmlInput: { min: getTodayDay() } }}
              />
            )}
          />

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {!onSubmit && (
            <Button
              type="button"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              sx={{ borderRadius: 4, py: 2 }}
              onClick={() => handleSubmit(submitForm)()}
            >
              {CONFIG.submitButtonText.create}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
});
