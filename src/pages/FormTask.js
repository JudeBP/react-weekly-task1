import React from 'react'
import Form from '../components/Form'

const FormTask = () => {

  // Submit form
  const submitForm = (user) => {
    console.log(user)
  }

  return (
    <>
      <h2>Form Task</h2>
      <Form submitForm={submitForm} />
    </>
  )
}

export default FormTask