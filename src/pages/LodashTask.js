import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import _ from 'lodash';

// Question A
const questionA = {
  arrOne: [
    {
      id: 20,
      name: 'alex'
    },
    {
      id: 30,
      name: 'alina'
    }
  ],
  arrTwo: [
    {
      id: 40,
      name: 'hello'
    },
    {
      id: 30,
      name: 'world'
    },
  ]
}

// Question B
const questionB = {
  str: ['u', 'ec'],
  arr: [{
    storageVal: 'u',
    table: ['E', 'F']
  }, {
    storageVal: 'data',
    table: ['E', 'F']
  }, {
    storageVal: 'ec',
    table: ['E']
  }]
}

// Question C
const questionC = [['E'], ['F']];

// Question D
const questionD = [
  ['E', 'F'],
  [['F'], ['G']]
]

// Question E - search box
const questionE = [
  {
    id: 1,
    artist: 'Bruno Mars',
    song: 'Just The Way You Are',
  },
  {
    id: 2,
    artist: 'Roger Rabbit',
    song: 'Sleeping with Sirens',
  },
  {
    id: 3,
    artist: 'Paramore',
    song: "That's What You Get",
  },
  {
    id: 4,
    artist: 'Justin Bieber',
    song: "Beauty and the Beat",
  },
  {
    id: 5,
    artist: 'The Carpenters',
    song: "Close to you",
  },
];

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

const LodashTask = () => {

  // Answer states
  const [ansA, setAnsA] = useState([]);
  const [ansB, setAnsB] = useState([]);
  const [ansC, setAnsC] = useState([]);
  const [ansD, setAnsD] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // var diff = _.differenceBy(arrOne, arrTwo, 'id');
    // console.log(diff);

  }, [])


  // set answer a
  const answerA = () => {
    const arrOne = questionA.arrOne;
    const arrTwo = questionA.arrTwo;

    let ans = _.xorBy(arrOne, arrTwo, 'id');
    setAnsA(ans);
  }

  // set answer b
  const answerB = () => {
    const str = questionB.str;
    const arr = questionB.arr;

    let extracted = _.filter(arr, (item) => str.includes(item.storageVal));
    let ans = _.map(extracted, (item) => item.table)
    setAnsB(ans);
  }

  // set answer c
  const answerC = () => {
    const c = questionC;

    let ans = _.flatten(c);
    setAnsC(ans);
  }

  // set answer d
  const answerD = () => {
    const arr = questionD;

    let ans = _.uniq(_.flattenDeep(arr));
    setAnsD(ans);
  }

  // set answer e
  const answerE = () => {

  }

  // Search handle
  const handleSearch = (text) => {
    let search = text.target.value.toLowerCase();
    let results = _.filter(questionE, (item) => {
      return (item.artist.toLowerCase().includes(search) || item.song.toLowerCase().includes(search));
    })
    if(search.trim().length == 0) results = [];
    setSearchResults(results)
  }

  return (
    <>
      <h2>Lodash Task</h2>
      <Box sx={{ width: '90vw' }}>
        <Box>
          <h4 style={{ marginBottom: '10px' }}>Symmetric difference of 2 arrays</h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Array 1: {JSON.stringify(questionA.arrOne)}
                  <br />
                  Array 2: {JSON.stringify(questionA.arrTwo)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
                {ansA.length == 0 &&
                  (<Button onClick={(answerA)} sx={{ marginLeft: '5px' }}>Show Answer</Button>)
                }
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(ansA)}
                </code>
                <br />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={boxSection}>
          <h4 style={{ marginBottom: '10px' }}>Question B - Filter and Map</h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Array 1: {JSON.stringify(questionB.str)}
                  <br />
                  Array 2: {JSON.stringify(questionB.arr)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
                {ansB.length == 0 &&
                  (<Button onClick={(answerB)} sx={{ marginLeft: '5px' }}>Show Answer</Button>)
                }
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(ansB)}
                </code>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={boxSection}>
          <h4 style={{ marginBottom: '10px' }}>Question C - Flatten</h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Array: {JSON.stringify(questionC)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
                {ansC.length == 0 &&
                  (<Button onClick={(answerC)} sx={{ marginLeft: '5px' }}>Show Answer</Button>)
                }
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(ansC)}
                </code>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={boxSection}>
          <h4 style={{ marginBottom: '10px' }}>Question D - Deep Flatten</h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Array: {JSON.stringify(questionD)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output
                {ansD.length == 0 &&
                  (<Button onClick={(answerD)} sx={{ marginLeft: '5px' }}>Show Answer</Button>)
                }
              </h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  {JSON.stringify(ansD)}
                </code>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={boxSection}>
          <h4 style={{ marginBottom: '10px' }}>Question E - Search Box</h4>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <h5>Input</h5>
              <Box sx={codeBoxStyle}>
                <code className="code-text">
                  Array: {JSON.stringify(questionE)}
                </code>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>Output </h5>
              <Box sx={codeBoxStyle}>
                <div>
                  <TextField
                    onChange={handleSearch}
                    margin="dense"
                    id="search"
                    placeholder="Enter text.."
                  />
                  <br></br>
                  <code className="code-text">
                    {JSON.stringify(searchResults)}

                  </code>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default LodashTask