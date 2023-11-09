import { Typography, Box } from '@mui/material';
import { Layout } from '../../app/layout';

export const CancelledPayment = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">Votre paiement a été refusé🥴</Typography>
      </Box>
    </Layout>
  );
};
