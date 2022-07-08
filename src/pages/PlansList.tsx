import React from 'react';

import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { IPlan } from '../types/planTypes';
export interface IPlansListProps {
}

export function PlansList(props: IPlansListProps) {

  const plans: IPlan[] = useSelector((state: IRootState) => state.plans.list);

  return (
    <div>
      {
        plans && plans.map(plan => <div key={plan.planId}>{plan.title}</div>)
      }
    </div>
  );
}
