import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import PropTypes from 'prop-types'


SnackbarPopup.propTypes = {
  msg: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
}

function SnackbarPopup(props) {
  const [open, setOpen] = useState(false)
  const [msg,] = useState(props.msg)

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const handelClose = () => {
    setOpen(!open)
    props.timeout()   // Inform parent func to change snackbar status when popup disappear
  }

  return (
    <div>
      <Snackbar
        open={open}
        message={msg}
        autoHideDuration={2500}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        onClose={handelClose}
        key={msg}
      />
    </div>
  )
}

export default SnackbarPopup
