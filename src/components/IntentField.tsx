import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { SpendingField } from "./SpendingField";
import { IIntent, ISpending } from './../types/planTypes';



interface IIntentFieldProps {
  intent: IIntent,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: ISpending[], name: string } }) => void;
  remove: () => void;

}

export const IntentField: React.FC<IIntentFieldProps> = ({ intent, onChange, remove }) => {
  const [spendings, setSpendings] = React.useState<ISpending[]>([]);

  React.useEffect(() => {
    onChange({ target: { name: 'spendings', value: spendings } });
  }, [spendings]);

  React.useEffect(() => {
    return () => {
      setSpendings([]);
    }
  }, [])
  return <Box sx={{ border: '1px solid lightblue', borderRadius: 4, p: 2, my: 1 }}>
    <TextField
      fullWidth
      variant='standard'
      required
      id="title"
      name="title"
      label="Intent title"
      value={intent.title}
      onChange={onChange}
    />
    <TextField
      fullWidth
      variant='standard'
      id="address"
      name="address"
      label="Address"
      value={intent.address}
      onChange={onChange}
    />
    <TextField
      fullWidth
      variant='standard'
      multiline
      id="description"
      name="description"
      label="Description"
      value={intent.description}
      onChange={onChange}
    />

    <Box>
      {intent?.spendings?.length > 0 &&
        intent.spendings?.map(
          (spending, idx) => (
            <SpendingField
              key={idx}
              spending={spending}
              onChange={
                (e) => {
                  const newValue: ISpending = {
                    ...spendings[idx],
                    [e.target.name]: e.target.value
                  };
                  const newSpendigs = [...spendings];
                  newSpendigs[idx] = newValue;
                  setSpendings(newSpendigs)
                }
              }
              remove={() => {
                let newSpandings = [...spendings];
                newSpandings.splice(idx, 1);
                setSpendings(newSpandings);
              }} />)
        )}
      <Button size="small" onClick={() => {
        const newEmptyValue: ISpending = {
          title: '',
          cost: 0,
          currency: ''
        }
        const newSpendigs = [...spendings, newEmptyValue];
        setSpendings(newSpendigs);
      }}>
        Add spending
      </Button>

    </Box>

    <Button size="small" onClick={remove}>Delete intent</Button>
  </Box >;
};



