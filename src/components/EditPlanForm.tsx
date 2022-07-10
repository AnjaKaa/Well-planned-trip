import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Typography, Button, Box } from '@mui/material';
import { useFormik, FormikProvider, FieldArray } from 'formik';
import * as yup from 'yup';
import uuid from 'react-uuid';
import { IntentField } from './IntentField';
import { createPlan, savePlan } from "../store/slices/plansSlice";
import { IPlan } from '../types/planTypes';
import { useHistory } from 'react-router-dom';


export interface IEditPlanFormProps {
  plan?: IPlan;
}

interface IPlanFormValues extends IPlan { }

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Title is required'),
  description: yup.string().optional(),
  amountOfDays: yup.number(),
  intents: yup.array().of(
    yup.object().shape({
      id: yup.number(),
      title: yup.string(),
      address: yup.string().optional(),
      description: yup.string().optional(),
      spending: yup.object().shape({
        title: yup.string(),
        coast: yup.number(),
        currency: yup.string().optional()
      }).optional()
    })
  )

});

export const EditPlanForm: React.FC<IEditPlanFormProps> = ({ plan = null }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const initialValues: IPlanFormValues = {
    planId: null,
    title: '',
    description: '',
    amountOfDays: 1,
    intents: [],
    dateCreate: null,
    dateUpdate: null,
    ...plan
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: () => { },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const save = plan ? savePlan : createPlan;
    alert(JSON.stringify({
      ...formik.values,
      dateCreate: plan?.dateCreate || new Date().getTime(),
      dateUpdate: new Date().getTime()
    }, null, 2));
    dispatch(save({
      ...formik.values,
      dateCreate: plan?.dateCreate || new Date().getTime(),
      dateUpdate: new Date().getTime()
    }));
    push('/plans')
  }

  return (
    <>
      <Typography variant="h5" component="div">
        {plan?.planId ? 'Edit' : 'Create'} plan
      </Typography>
      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
              py: 3
            }}
          >
            <TextField
              fullWidth
              variant='standard'
              required
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth
              variant='standard'
              multiline
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              variant='standard'
              type="number"
              id="amountOfDays"
              name="amountOfDays"
              label="Amount of days"
              value={formik.values.amountOfDays}
              onChange={formik.handleChange}
              InputProps={{ inputProps: { min: 1 } }}
            />

            <FieldArray name="intents">
              {({ insert, remove, push }) => (
                <div>
                  {formik.values.intents?.length > 0 ?
                    formik.values.intents?.map(
                      (intent, idx) => (
                        <IntentField
                          key={intent.id}
                          intent={intent}
                          onChange={
                            (e) => {
                              const newIntents = [...formik.values.intents];
                              newIntents[idx] = { ...newIntents[idx], [e.target.name]: e.target.value };
                              formik.setFieldValue(
                                'intents', newIntents
                              );
                            }
                          }
                          remove={() => remove(idx)} />)
                    ) : <div>List of intents is empty</div>
                  }
                  <Button size="small" onClick={() => push({ id: uuid(), name: '', spendings: [] })}>Add Intents</Button>
                </div>
              )}
            </FieldArray>
          </Box>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </FormikProvider>
    </>
  );
}
