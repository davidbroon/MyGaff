import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  IconButton,
  CardMenu,
  Navigation
} from "react-mdl";
import Captain from "../../images/headshots/capt.jpeg";
import SteelMan from "../../images/headshots/steelman.jpeg";
import backgroundImage from "../../images/backgrounds/agentBackground.png";

class Agents extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          background: `url(${backgroundImage}) center / cover`,
          height: "100%",
          width: "100%",
          marginTop: "-7%"
        }}
      >
        <h2 style={{ color: "antiquewhite", marginTop: "7%" }}>
          <u>Find the Perfect Agent to Help You.</u>
        </h2>
        <Card
          shadow={0}
          style={{ width: "512px", margin: "auto", marginTop: "7%" }}
        >
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${Captain}) center / cover`
            }}
          />
          Captain America
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <Navigation>
            <CardActions border>
              <Link className="caplink" to="/captainamerica">
                <Button className="linkbutton" colored>
                  More Info
                </Button>
              </Link>
            </CardActions>
          </Navigation>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <br />
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: `url(${SteelMan}) center / cover`
            }}
          />
          Superman
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <Navigation>
            <CardActions border>
              <Link className="superlink" to="/superman">
                <Button className="linkbutton" colored>
                  More Info
                </Button>
              </Link>
            </CardActions>
          </Navigation>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Agents;
