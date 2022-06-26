import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IPlanTripPageProps {
}

export function PlanTripPage(props: IPlanTripPageProps) {
  return (
    <div>
      <Link to="/">home</Link>
      PlanTripPage
    </div>
  );
}
