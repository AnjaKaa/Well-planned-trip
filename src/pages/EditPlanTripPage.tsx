import React from 'react';
import { EditPlanForm } from '../components/EditPlanForm'
import { Box } from '@mui/material';
import { IPlan } from '../types/planTypes';
import { useSelectPlan } from '../hooks/useSelectPlan'


export interface IEditPlanTripPageProps {
}

export function EditPlanTripPage(props: IEditPlanTripPageProps) {

  const plan: IPlan = useSelectPlan();


  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
      <EditPlanForm plan={plan} />
    </Box>
  );
}
