import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button
} from "react-mdl";
import Map from "../buildingblokes/map.js";
import Properties from "../buildingblokes/properties.js";

class Buy extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid className="demo-grid-2">
          <Cell col={8} style={{}}>
            <h1 style={{}}>Buy Page</h1>
            <Map />
          </Cell>
          <Properties />
        </Grid>
      </div>
    );
  }
}

export default Buy;
