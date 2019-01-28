import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Cell, Layout, Navigation } from "react-mdl";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div
        className="landing"
        style={{
          width: "100%",
          margin: "auto"
        }}
      >
        <Layout
          style={{
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover",
            height: "100%",
            width: "100%"
          }}
        >
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h1>Find your way home</h1>
                <hr/> 
                </div>
                
                <Navigation className="banner-nav">
                <Link className="buylinklanding" to="/">
                  Buy
                </Link>
                
                <Link className="agentslinklanding" to="/agents">
                  Agent Finder
                </Link>
                
                <Link className="morelinklanding" to="/more">
                  More
                </Link>
              </Navigation>
              
            </Cell>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default Landing;
