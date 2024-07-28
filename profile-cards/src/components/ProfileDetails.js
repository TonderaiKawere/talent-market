import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Paper, IconButton, Button, Link as MuiLink } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch profile details. Please try again later.');
        }
        return response.json();
      })
      .then(data => {
        setProfile(data);
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

//   const handleApplyClick = () => {
//     setOpenSnackbar(true);
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {profile ? (
        <Paper elevation={3} style={{ padding: '16px', maxWidth: '600px', width: '100%' }}>
             <IconButton onClick={handleBackClick} style={{ alignSelf: 'flex-start', marginTop: '16px' , position:"absolute"}}>
        <ArrowBackIcon />
      </IconButton>
          <Box textAlign="center">
          <Box mt={2}>
            <img src={profile.image} alt={`${profile.name} image`} style={{ width: '150px', height: '150px' }} />
          </Box>
            <Typography variant="h4" component="h1" mt={2}>
              {profile.name}
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
            {profile.summary}
          </Typography>
            <Typography variant="body1" component="p" mt={2}>
              <strong>CV:</strong> <MuiLink href={profile.cvLink} target="_blank" rel="noopener noreferrer">{profile.cvLink}</MuiLink>
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
              <strong>Portfolio:</strong> <MuiLink href={profile.portfolio} target="_blank" rel="noopener noreferrer">{profile.portfolio}</MuiLink>
            </Typography>
            <Typography variant="body2" component="p" mt={2}>
              <strong>Social Media:</strong>
            </Typography>
            <Box display="flex" justifyContent="center" gap="10px" mt={2}>
              <MuiLink href={profile.facebook} target="_blank" rel="noopener noreferrer">Facebook</MuiLink>
              <MuiLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</MuiLink>
              <MuiLink href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</MuiLink>
            </Box>
          </Box>
        </Paper>
      ) : (
        <div>Profile not found</div>
      )}
    </Container>
  );
};

export default ProfileDetails;
