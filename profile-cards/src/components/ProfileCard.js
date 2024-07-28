import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={profile.name}
        height="140"
        image={profile.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
        <Button
          component={Link}
          to={`/profiles/${profile.id}`}
          variant="contained"
          color="primary"
          sx={{
            fontSize:"11px", marginTop:"10px"
          }}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
