import * as React from 'react';
import { Typography, Fab } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { CardPlan } from '../components/CardPlan'

export interface IHomePageProps {
}

export function HomePage(props: IHomePageProps) {
  return (
    <>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2">
          Hello! Here you can create a plan for your trip
        </Typography>
        <Link to="/plan/create">
          <Fab variant='extended' color="primary" aria-label="add">
            create plan
          </Fab>
        </Link>
        <Typography variant="h2">
          or tell how it went
        </Typography>
        <Link to="/trip/create">
          <Fab variant='extended' color="primary" aria-label="add">
            create trip
          </Fab>
        </Link>
      </Box>
      <CardPlan title='Title' date="25.06.2022" />
    </>
  );
}
