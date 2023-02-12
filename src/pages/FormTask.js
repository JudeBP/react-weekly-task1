import React, { useState } from 'react'
import Form from '../components/Form'
import { Alert, Snackbar } from '@mui/material';

const FormTask = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Submit form
  const submitForm = (user) => {
    if (user.name !== "" && user.dob !== "" && user.email !== "" && user.contactNo !== "" && user.quickFact !== "") {
      reOpenSnackbar();
    }
  }

  const reOpenSnackbar = () => {
    setOpenSnackbar(true);
  }

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <>
      <h2>Form Task</h2>
      <Form submitForm={submitForm} />
      <Snackbar
        open={openSnackbar}
        onClose={closeSnackbar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeSnackbar} severity="success" >
          You have signed up!
        </Alert>
      </Snackbar>
    </>
  )
}

export default FormTask