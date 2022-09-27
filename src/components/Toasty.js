
import {
    Snackbar,
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert';

const Toasty = ({ open, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose()
  };

  return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <>
            <MuiAlert elevation={6} variant="filled" severity="succsess" />
          </>
        }
      />
  );
}

export default Toasty