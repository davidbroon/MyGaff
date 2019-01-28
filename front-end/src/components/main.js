import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Buy from "./buy";
import Agents from "./agents";
import More from "./more";
import Help from "./help";
import Privacy from "./privacy";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Buy} />
    <Route exact path="/home" component={LandingPage} />
    <Route path="/agents" component={Agents} />
    <Route path="/more" component={More} />
    <Route path="/help" component={Help} />
    <Route path="/privacy" component={Privacy} />
  </Switch>
);

export default Main;
