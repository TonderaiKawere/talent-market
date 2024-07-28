import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <List>
      {jobs.map(job => (
        <ListItem key={job.id} component={Link} to={`/jobs/${job.id}`}>
          <ListItemText primary={job.title} secondary={job.company} />
        </ListItem>
      ))}
    </List>
  );
};

export default JobList;