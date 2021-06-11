import React from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "../Components/booking";
import Form from "../Components/booking/form";

export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/add">
          <Form />
        </Route>
        <Route path="/edit/:id">
          <Form />
        </Route>
        <Route path="/">
          <Booking />
        </Route>
      </Switch>
    </div>
  );
}
