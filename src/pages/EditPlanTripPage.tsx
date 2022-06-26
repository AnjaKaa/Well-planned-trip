import * as React from 'react';
import { EditPlanForm } from '../components/EditPlanForm'
import { Box } from '@mui/material';

export interface IEditPlanTripPageProps {
}

export function EditPlanTripPage(props: IEditPlanTripPageProps) {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
      <EditPlanForm />
    </Box>
  );
}
