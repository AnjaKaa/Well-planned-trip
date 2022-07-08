import * as React from 'react';
import { Stack, TextField, Box, Fab } from '@mui/material';
import { ISpending } from '../types/planTypes';

export interface ISpendingFieldProps {
  spending: ISpending;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  remove: () => void;
}

export const SpendingField: React.FC<ISpendingFieldProps> = ({ spending, onChange, remove }) => {
  return (<Box sx={{ border: '1px solid lightblue', borderRadius: 4, p: 2, my: 1 }}>
    <Stack direction="row" spacing={1}>
      <TextField variant='standard'
        required
        id="title"
        name="title"
        label="Spending title"
        value={spending.title}
        onChange={onChange} />
      <TextField variant='standard'
        required
        type="number"
        id="cost"
        name="cost"
        label="cost"
        value={spending.cost}
        onChange={onChange}
        InputProps={{ inputProps: { min: 0 } }} />
      <TextField variant='standard'

        id="currency"
        name="currency"
        label="currency"
        value={spending.currency}
        onChange={onChange} />
      <Fab variant='extended' onClick={remove}>-</Fab>
    </Stack>
  </Box>
  );
}
