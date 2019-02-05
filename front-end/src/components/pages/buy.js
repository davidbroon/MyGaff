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
import Properties from "../buildingblokes/properties";

class Buy extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid className="demo-grid-2">
          <Cell col={8} style={{}}>
            <h1 style={{}}>Buy Page</h1>
            <Map />
            <Properties />
          </Cell>
          <Cell col={2}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                }}
              >
                Update
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                convallis.
              </CardText>
              <CardActions border>
                <Button colored>View Updates</Button>
              </CardActions>
            </Card>
            ;
          </Cell>
          <Cell col={2}>
            <Card
              shadow={0}
              style={{ width: "320px", height: "320px", margin: "auto" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                }}
              >
                Update
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                convallis.
              </CardText>
              <CardActions border>
                <Button colored>View Updates</Button>
              </CardActions>
            </Card>
            ;
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Buy;
