import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage, PlanTripPage, ReportTripPage, EditPlanTripPage, EditReportTripPage, PlansListPage, TripsList } from "./pages";
import Layout from './components/Layout';

import { database } from './../firebase';
import { useDispatch } from "react-redux";
import { getPlans } from "./store/slices/plansSlice";

const App = () => {
  console.log(database);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getPlans());
    }, []
  )
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plans" component={PlansListPage} />
        <Route exact path="/plan/create" component={EditPlanTripPage} />
        <Route exact path="/plan/edit/:id" component={EditPlanTripPage} />
        <Route exact path="/plan/:id" component={PlanTripPage} />
        <Route exact path="/trips" component={TripsList} />
        <Route exact path="/trip/create" component={EditReportTripPage} />
        <Route exact path="/trip/edit/:id" component={EditReportTripPage} />
        <Route exact path="/trip/:id" component={ReportTripPage} />
        <Route path="*"> Page not found</Route>
      </Switch>
    </Layout>
  );

}

export default hot(module)(App);