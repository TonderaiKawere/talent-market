const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const profiles = [
  {
    id: 1,
    name: 'Prince Ncube',
    summary: 'Experienced frontend developer with a passion for building scalable web apps.',
    description: 'Frontend Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/princencube',
    linkedin: 'https://linkedin.com/in/princencube',
    twitter: 'https://twitter.com/princencube',
    portfolio: 'https://princencube.com',
    cvLink: 'https://princencube.com/cv',
  },
  {
    id: 2,
    name: 'Usher Ndlovu',
    summary: 'Creative Full Stack Developer s with a knack for making user-friendly interfaces.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/usherndlovu',
    linkedin: 'https://linkedin.com/in/usherndlovu',
    twitter: 'https://twitter.com/usherndlovu',
    portfolio: 'https://usherndlovu.com',
    cvLink: 'https://usherndlovu.com/cv',
  },
  {
    id: 3,
    name: 'Wendy Ndlovu',
    summary: 'Experienced full-stack developer with a passion for building scalable web apps.',
    description: 'Full Stack Developer',
    image: '/pexels-olly-3769021.jpg',
    facebook: 'https://facebook.com/wendyndlovu',
    linkedin: 'https://linkedin.com/in/wendyndlovu',
    twitter: 'https://twitter.com/wendyndlovu',
    portfolio: 'https://wendyndlovu.com',
    cvLink: 'https://wendyndlovu.com/cv',
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

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tecno Mobile',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Develop and maintain software.',
    summary: 'Full-time position for a skilled Software Engineer.',
    requirements: 'Bachelor\'s degree in Computer Science',
    salary: '$500 - $1000',
    contact: 'hr@tecnomobile.com'
  },
  {
    id: 2,
    title: 'Project Manager',
    company: 'BYO Designed',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Manage projects from inception to completion.',
    summary: 'Experienced Project Manager required.',
    requirements: '5 years of experience in project management',
    salary: '$450 - $800',
    contact: 'hr@byodesigned.com'
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Tecno Mobile',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Develop and maintain software.',
    summary: 'Full-time position for a skilled Software Engineer.',
    requirements: 'Bachelor\'s degree in Computer Science',
    salary: '$500 - $1000',
    contact: 'hr@tecnomobile.com'
  },
  {
    id: 4,
    title: 'Project Manager',
    company: 'BYO Designed',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Manage projects from inception to completion.',
    summary: 'Experienced Project Manager required.',
    requirements: '5 years of experience in project management',
    salary: '$450 - $800',
    contact: 'hr@byodesigned.com'
  },
  {
    id: 5,
    title: 'Software Engineer',
    company: 'Tecno Mobile',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Develop and maintain software.',
    summary: 'Full-time position for a skilled Software Engineer.',
    requirements: 'Bachelor\'s degree in Computer Science',
    salary: '$500 - $1000',
    contact: 'hr@tecnomobile.com'
  },
  {
    id: 6,
    title: 'Project Manager',
    company: 'BYO Designed',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Manage projects from inception to completion.',
    summary: 'Experienced Project Manager required.',
    requirements: '5 years of experience in project management',
    salary: '$450 - $800',
    contact: 'hr@byodesigned.com'
  },
  {
    id: 7,
    title: 'Software Engineer',
    company: 'Tecno Mobile',
    companyLogo: '/pexels-olly-3769021.jpg',
    description: 'Develop and maintain software.',
    summary: 'Full-time position for a skilled Software Engineer.',
    requirements: 'Bachelor\'s degree in Computer Science',
    salary: '$500 - $1000',
    contact: 'hr@tecnomobile.com'
  },
];

app.get('/api/profiles/:id', (req, res) => {
  const profile = profiles.find(p => p.id === parseInt(req.params.id));
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/api/jobs/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id));
  if (job) {
    res.json(job);
  } else {
    res.status(404).send('Job not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
