import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SnackbarContext } from '@/components/context/SnackbarContext';

type Props = {
  isOpen:boolean
  message:string
  severity?: "success" | "info" | "warning" | "error" | undefined
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props:Props) {
  const {snackbarState,setSnackbarState} = useContext(SnackbarContext);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarState({isOpen:false,message:""});
  };
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.isOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%',color:"white" }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}