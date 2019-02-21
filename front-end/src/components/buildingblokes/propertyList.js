import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  Navigation
} from "react-mdl";
import { Link } from "react-router-dom";

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div key={this.props.p.id}>
        <Grid className="demo-grid-2">
          <Cell col={2}>
            <Card
              shadow={0}
              style={{
                width: "300px",
                height: "400px",
                margin: "auto",
                position: "center"
              }}
            >
              <CardTitle
                className="cardTitle"
                style={{
                  background: `url(${this.props.p.image})`,
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundsize: "cover",
                  height: "80%"
                }}
              />
              <CardText>
                <b>{this.props.p.homeName}</b> || <b>{this.props.p.price}</b>
              </CardText>
              <Navigation>
                <CardActions border>
                  <Button>
                    {" "}
                    <Link
                      style={{ font: "Roboto", color: "gray" }}
                      target="_blank"
                      to={this.props.p.link}
                    >
                      <b>More Information</b>
                    </Link>
                  </Button>
                </CardActions>
              </Navigation>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default PropertyList;
