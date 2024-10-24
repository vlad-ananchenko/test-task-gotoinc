import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';

export const RequestTypeSelectionPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  const handleSelect = (type: 'order' | 'deliver') => {
    navigate(`/${userId}/create/${type}`);
  };

  return (
    <Box>
      <Stack spacing={4} mt={3}>
        <Button
          onClick={() => handleSelect('order')}
          fullWidth
          sx={{
            background: 'linear-gradient(to right, #42a5f5, #64b5f6)',
            color: '#fff',
            borderRadius: 4,
            py: 2,
            '&:hover': {
              background: 'linear-gradient(to right, #1e88e5, #42a5f5)'
            }
          }}
        >
          Create Order
        </Button>
        <Button
          onClick={() => handleSelect('deliver')}
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: 4,
            py: 2,
            border: '2px solid #f48fb1',
            color: '#f06292',
            '&:hover': {
              borderColor: '#f06292',
              backgroundColor: '#fce4ec'
            }
          }}
        >
          Create Delivery
        </Button>
      </Stack>
    </Box>
  );
};
