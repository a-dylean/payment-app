import { Box, Typography } from '@mui/material';

export const NothingFound = () => {
  return (
    <>
      <Box sx={{ width: 300 }}>
        <Typography variant="h6" align="center">
          Aucun article avec ce filtre
        </Typography>
      </Box>
    </>
  );
};
