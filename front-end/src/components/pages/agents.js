import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Cell,
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
import SteelMan from "../../images/headshots/steelman.jpeg"

class Agents extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{}}>Agents Page</h1>
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
        
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
              `url(${Captain}) center / cover`,
              
                
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
            background:
            `url(${SteelMan}) center / cover`, 
              
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
