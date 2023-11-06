import { Box, Typography } from '@mui/material';

export const NothingFound = () => {
  return (
    <>
      <Box sx={{ width: 300 }}>
        <Typography variant="h6" align="center">
          We couldn't find any items that match your filtering
          parameters.
        </Typography>
      </Box>
    </>
  );
};
