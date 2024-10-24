import { forwardRef, useImperativeHandle } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, Box, Stack, Alert, MenuItem, Button } from '@mui/material';
import { ORDER_REQUEST_FORM_CONFIG as CONFIG, defaultValues } from './constants';
import { OrderFormInputs, orderSchema } from './validation';
import { getTodayDay, useRequestForm } from '@/features/requests/common';

interface OrderRequestFormProps {
  initialValues?: OrderFormInputs;
  onSubmit?: (data: OrderFormInputs) => void;
}

export const OrderRequestForm = forwardRef(({ initialValues, onSubmit }: OrderRequestFormProps, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    error,
    submitForm
  } = useRequestForm({
    schema: orderSchema,
    defaultValues: initialValues || defaultValues,
    requestType: 'order'
  });

  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onSubmit)
  }));

  const inputVariant = onSubmit ? 'filled' : 'standard';

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={3}>
      <Box component="form" onSubmit={handleSubmit(onSubmit || submitForm)} name={CONFIG.formName}>
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

          <Controller
            name="parcelType"
            control={control}
            render={({ field }) => (
              <TextField {...field} select label={CONFIG.labels.parcelType} variant={inputVariant} fullWidth>
                {CONFIG.parcelTypes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label={CONFIG.labels.description}
                variant={inputVariant}
                multiline
                rows={3}
                fullWidth
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
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              sx={{ borderRadius: 4, py: 2 }}
            >
              {CONFIG.submitButtonText.create}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
});
