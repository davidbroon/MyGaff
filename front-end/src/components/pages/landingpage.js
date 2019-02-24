import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Cell, Layout, Navigation, Textfield } from "react-mdl";
import backgroundImage from "../../images/buildings/streethighrise.jpg";
import $ from "jquery";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch();
  }

  performSearch() {
    console.log("saldkfjasdl");
    const urlString = "https://localhost8080:properties/all";
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("successfully grabbed data");
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
  }
  render() {
    document.title = "My Gaff";
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
            background: `url(${backgroundImage}) center / cover`,
            height: "100%",
            width: "100%"
          }}
        >
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h1>Find your way home</h1>
                <hr />
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

              <Textfield
                style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}
                className="search-bar"
                onChange={() => {}}
                label="Expandable Input"
                expandable
                expandableIcon="search"
              />
            </Cell>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default Landing;
