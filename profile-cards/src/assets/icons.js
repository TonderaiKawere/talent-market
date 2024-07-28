// src/components/icons.js
import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Facebook = ({ url }) => (
  <IconButton href={url} target="_blank">
    <FacebookIcon />
  </IconButton>
);

export const LinkedIn = ({ url }) => (
  <IconButton href={url} target="_blank">
    <LinkedInIcon />
  </IconButton>
);

export const Twitter = ({ url }) => (
  <IconButton href={url} target="_blank">
    <TwitterIcon />
  </IconButton>
);
