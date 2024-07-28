import React from 'react';
import { Grid, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileList from './components/ProfileList';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  return (
    <Router>
      <Box>
        <Navbar />
        <Grid container spacing={2} style={{ marginTop: '64px' }}>
          <Grid item xs={2}>
            <JobList />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<ProfileList />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/profiles/:id" element={<ProfileDetails />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
