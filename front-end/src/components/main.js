import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage";
import Buy from "./pages/buy";
import Agents from "./pages/agents";
import More from "./pages/more";
import Help from "./pages/help";
import Privacy from "./pages/privacy";
import CaptainAmerica from "./pages/captainamerica";
import Superman from "./pages/superman"
import EmpireState from "./homes/empireState";
import StatueOfLiberty from "./homes/statueofliberty";
import FlatIron from "./homes/flatiron";
import WhiteHouse from "./homes/whitehouse";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Buy} />
    <Route exact path="/home" component={LandingPage} />
    <Route path="/agents" component={Agents} />
    <Route path="/more" component={More} />
    <Route path="/help" component={Help} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/captainamerica" component={CaptainAmerica} />
    <Route path="/superman" component={Superman} />
    <Route path="/empireState" component={EmpireState} />
    <Route path="/statueofliberty" component={StatueOfLiberty} />
    <Route path="/flatiron" component={FlatIron} />
    <Route path="/whitehouse" component={WhiteHouse} />
  </Switch>
);

export default Main;
