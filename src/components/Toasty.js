import * as React from 'react'
import {
  Snackbar,
  IconButton
} from '@material-ui/core'

import MuiAlert from '@material-ui/lab/Alert'

import CloseIcon from '@material-ui/icons/Close'

const Toasty = ({ open, onClose, severity, message }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        >
        <MuiAlert elevation={6} variant="filled" severity={severity}>     
          {message}
        </MuiAlert> 
      </Snackbar>
  )
}


export default Toasty