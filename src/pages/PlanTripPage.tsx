import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IPlan } from '../types/planTypes';
import { useSelectPlan } from '../hooks/useSelectPlan';


export interface IPlanTripPageProps { }

export const PlanTripPage: FC<IPlanTripPageProps> = ({ }) => {

  const plan: IPlan = useSelectPlan();

  if (!plan) {
    return <span> Plan not found</span>
  }

  return (
    <div>
      <Typography variant="h5" component="div">
        {plan.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {plan.description}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {new Date(plan.dateCreate).getDate().toString()}
      </Typography>

      <Link to={`/plan/edit/${plan.planId}`}>
        <Button
          size="small"
        >
          Edit
        </Button>
      </Link>

    </div>
  );
}
