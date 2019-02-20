import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ClarkKent from "../../images/headshots/clarkkent.jpeg";

class Superman extends Component {
  render() {
    document.title = "Man of Steel";
    return (
      <div className="contact-superman-body">
        <Grid className="contact-superman-grid">
          <Cell col={6}>
            <h2>Clark Kent</h2>
            <img src={ClarkKent} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Blandit libero volutpat sed cras ornare arcu. Et tortor at risus
              viverra adipiscing at in tellus integer. Ut ornare lectus sit amet
              est placerat in egestas.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-superman-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (212)-576-4000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fas fa-map-marked-alt" aria-hidden="true" />
                    1938 Fly Road Metropolis
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    clarkkent@dailyplanet.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-skype" aria-hidden="true" />
                    @thesuperman
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Superman;
