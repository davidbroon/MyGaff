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
              "url(https://pmcdeadline2.files.wordpress.com/2014/04/captain-america-wallpaper-batman-vs-superman-avengers-2-captain-america-2-spider-man-2-is-this-the-golden-age-of-superhero-movies__140405050134.jpeg) center / cover", 
                
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
            "url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.themoviethemesong.com%2Fwp-content%2Fuploads%2F2014%2F06%2FSuperman-1.jpg&f=1) center / cover", 
              
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
