import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface Props{
    message: string | undefined;
}

export default function FromError(props:Props) {
    const message = props.message;

  if (message === undefined) {
    return <></>;
  
  }else{
    return (
        <Stack sx={{ width: '100%',mt:2 }} spacing={2}>
          <Alert severity="error" icon={false}>{message}</Alert>
        </Stack>
      );
  }
}