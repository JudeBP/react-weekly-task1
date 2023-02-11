import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material';

// Code box style
const codeBoxStyle = {
  bgcolor: 'background.paper',
  overflow: 'auto',
  border: '2px solid #000',
  boxShadow: 12,
  p: 2,
  textAlign: 'left'
}

const boxSection = {
  borderTop: '2px solid gray',
  marginTop: '30px'
}

const HooksTask = () => {

  const initialArray = [
    {
      id: 1,
      name: "Jude Pasco",
      age: 23
    },
    {
      id: 2,
      name: "Uzumaki Naruto",
      age: 21
    },
    {
      id: 3,
      name: "James Bond",
      age: 31
    }
  ]

  const initialObject = {
    name: '',  // string
    age: 23, // int / number
    isMarried: false, // boolean
    address: { // object
      street: "",
      city: "",
      country: "",
    }
  };

  // 1: array of objects
  const [data, setData] = useState(initialArray);

  // 2: object with 2 properties updated
  const [obj, setObj] = useState(initialObject);

  // Start app
  useEffect(() => {
    const updateArray = () => {
      // update array
      let tempArr = data;
      tempArr[1].name = "Uchiha Sasuke";
      setData(tempArr);
    }

    const updateObject = () => {
      // update object
      setObj({
        ...obj,
        name: "Jude",
        address: { ...initialObject.address, street: "Mastrili" }
      })
    }

    updateArray();
    updateObject();
  }, [])

  return (
    <>
      <h2>Hooks Task</h2>
      <Box sx={{ width: '90vw' }}>

        <Box sx={boxSection}>
          <h4> Array of object with updated 2nd value </h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(initialArray)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(data)}
                </code>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={boxSection}>
          <h4> Object with 2 updated properties (nested) </h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Object: {JSON.stringify(initialObject)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(obj)}
                </code>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default HooksTask