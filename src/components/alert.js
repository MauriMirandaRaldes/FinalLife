import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert className='custom-alert-welcome' variant="filled" severity="info">
        Please, press the jostick for access
      </Alert>
    </Stack>
  );
}
