import React from 'react';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';

const profiles = [
  {
    id: 1,
    name: 'Prince Ncube',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 2,
    name: 'Babongile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/babongiledube',
    linkedin: 'https://linkedin.com/in/babongiledube',
    twitter: 'https://twitter.com/babongiledube',
    portfolio: 'https://babongiledube.com',
    cvLink: 'https://babongiledube.com/cv',
  },
  {
    id: 3,
    name: 'Prince Ncube',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 4,
    name: 'Babongile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/babongiledube',
    linkedin: 'https://linkedin.com/in/babongiledube',
    twitter: 'https://twitter.com/babongiledube',
    portfolio: 'https://babongiledube.com',
    cvLink: 'https://babongiledube.com/cv',
  },
  {
    id: 5,
    name: 'Prince Ncube',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 6,
    name: 'Babongile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/babongiledube',
    linkedin: 'https://linkedin.com/in/babongiledube',
    twitter: 'https://twitter.com/babongiledube',
    portfolio: 'https://babongiledube.com',
    cvLink: 'https://babongiledube.com/cv',
  },
  {
    id: 7,
    name: 'Prince Ncube',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 8,
    name: 'Babongile Dube',
    summary: 'Creative UI/UX designer with a knack for making user-friendly interfaces.',
    description: 'UI/UX Designer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/babongiledube',
    linkedin: 'https://linkedin.com/in/babongiledube',
    twitter: 'https://twitter.com/babongiledube',
    portfolio: 'https://babongiledube.com',
    cvLink: 'https://babongiledube.com/cv',
  },
  
];

const ProfileList = () => {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
      {profiles.map(profile => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={profile.id}>
          <ProfileCard profile={profile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileList;
