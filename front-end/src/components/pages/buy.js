import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MapQuestComponent from "../buildingblokes/map.js";
import Properties from "../buildingblokes/properties.js";
import backgroundImage from "../../images/backgrounds/buyBackground.png";

class Buy extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          background: `url(${backgroundImage}) center / cover`,
          height: "100%",
          width: "100%",
          backgroundAttachment: "fixed"
        }}
      >
        <Grid className="demo-grid-2">
          <Cell
            col={8}
            className="map"
            style={{
              overflow: "hidden",
              position: "fixed"
            }}
          >
            <MapQuestComponent
              height={500}
              width={"100%"}
              center={[40.7141667, -74.0063889]}
              baseLayer={"map"}
              zoom={11}
              apiKey={"BM60R2Aav4B7hIZ2SqV6OohRkWZJbWNx"}
            />
          </Cell>

          <Cell
            col={2}
            style={{
              marginLeft: "70%"
            }}
          >
            <Properties />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Buy;
