import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    isOpen: boolean;
};


export default function SimpleBackdrop(props: Props) {
    return (
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: 5000 }}
            open={props.isOpen}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
    );
}