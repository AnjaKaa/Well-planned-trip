import { Stack } from '@mui/material';
import React, { FC } from 'react';
import { IPlan } from '../types/planTypes';
import { CardPlan } from './CardPlan';

export interface IPlanListProps {
  plans: IPlan[];
}

export const PlansList = ({ plans }: IPlanListProps) => {
  return (
    <Stack direction="row" spacing={2}>
      {plans?.map(plan => (
        <CardPlan plan={plan} key={plan.planId} />
      ))}
    </Stack>
  );
}
