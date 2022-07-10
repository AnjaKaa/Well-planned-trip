import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPlan } from '../store/slices/plansSlice';
import { IRootState } from '../store';
import { IPlan } from '../types/planTypes';

export function useSelectPlan() {
  const dispatch = useDispatch();
  const plan: IPlan = useSelector((state: IRootState) => state.plans.current);
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(selectPlan(id));
    return () => {
      dispatch(selectPlan(null));
    }
  }, [])
  return plan;
}
