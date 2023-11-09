import { Box, Typography } from '@mui/material';
import { Layout } from '../../app/layout';

export const SuccessfullPayment = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">Merci pour votre commande!🙌</Typography>
      </Box>
    </Layout>
  );
};
