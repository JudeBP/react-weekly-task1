import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HocTask from './pages/HocTask';
import HooksTask from './pages/HooksTask';
import FormTask from './pages/FormTask';
import LodashTask from './pages/LodashTask';
import Navbar from './components/Navbar';
import { Button, Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const pages = [
    {
        route: '/hoc',
        text: 'HOC',
    },
    {
        route: '/hooks',
        text: 'Hooks',
    },
    {
        route: '/form',
        text: 'Form',
    },
    {
        route: '/lodash',
        text: 'Lodash',
    },
];

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar pages={pages} />
                <header className="App-header">
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>React Weekly Assessment 1</h2>
                        <p>Click on the link from the navbar or from the buttons below to go to each item of the weekly task</p>
                        <Box sx={{ marginBottom: '30px' }}>
                            <Grid container spacing={3}>
                                {pages.map(page => {
                                    return (
                                        <Grid item xs={12} md={4} lg={3} key={page.route}>
                                            <Link to={page.route}>
                                                <Button variant="contained">{page.text}</Button>
                                            </Link>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>
                        <Routes>
                            <Route path="/hoc" element={<HocTask />}></Route>
                            <Route path="/hooks" element={<HooksTask />}></Route>
                            <Route path="/form" element={<FormTask />}></Route>
                            <Route path="/lodash" element={<LodashTask />}></Route>
                        </Routes>

                    </ThemeProvider>
                </header>
            </BrowserRouter>
        </div>
    )
}

export default App