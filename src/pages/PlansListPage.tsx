import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PlansList } from '../components/PlansList';
import { IRootState } from '../store';
import { IPlan } from '../types/planTypes';

export interface IPlanListPageProps {
}

export const PlansListPage: FC<IPlanListPageProps> = () => {
  const plans: IPlan[] = useSelector((state: IRootState) => state.plans.list);
  if (!plans.length) {
    return <span>Plans list is empty</span>
  }

  return (
    <PlansList plans={plans} />
  );
}