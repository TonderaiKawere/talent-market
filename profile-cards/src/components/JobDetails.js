import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Paper, IconButton, Button, Snackbar, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch job details. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleApplyClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'
      }}
    >
      
      {job ? (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px', textAlign: 'center', width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton onClick={handleBackClick} style={{ alignSelf: 'flex-start', marginTop: '16px', position:"absolute" }}>
        <ArrowBackIcon />
      </IconButton>
          <Box mt={2}>
            <img src={job.companyLogo} alt={`${job.company} logo`} style={{ width: '150px', height: '150px' }} />
          </Box>
          <Typography variant="h4" component="h1" mt={2}>
            {job.title}
          </Typography>
          <Typography variant="h6" component="h2" mt={2}>
            {job.company}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {job.summary}
          </Typography>
          <Typography variant="body1" component="p" mt={2}>
            {job.description}
          </Typography>
          <Typography variant="body2" component="p" mt={2}>
            <strong>Requirements:</strong> {job.requirements}
          </Typography>
          <Typography variant="body2" component="p" mt={2}>
            <strong>Salary:</strong> {job.salary}
          </Typography>
          <Typography variant="body2" component="p" mt={2}>
            <strong>Contact:</strong> {job.contact}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyClick}
            style={{ marginTop: '16px' }}
          >
            Apply
          </Button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Job applied successfully!
            </Alert>
          </Snackbar>
        </Paper>
      ) : (
        <div>Job not found</div>
      )}
    </Container>
  );
};

export default JobDetails;
