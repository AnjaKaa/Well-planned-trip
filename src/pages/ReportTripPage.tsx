import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IReportTripPageProps {
}

export function ReportTripPage(props: IReportTripPageProps) {
  return (
    <div>
      <Link to="/">home</Link>
      ReportTripPage
    </div>
  );
}
