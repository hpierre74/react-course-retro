import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Layout } from '../components/layout.component';

export const AboutPage = () => {
  return (
    <Layout>
      <Box display="flex" justifyContent="space-between" m={1}>
        <h2>About</h2>
        <Button component={Link} to="/" color="secondary" variant="outlined">
          Return to Home
        </Button>
      </Box>
    </Layout>
  );
};
