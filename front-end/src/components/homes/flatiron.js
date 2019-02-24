import React, { Component } from "react";
import FlatIronImage from "../../images/buildings/flatiron.jpeg";
import { Grid, Cell, Navigation, CardActions, Button } from "react-mdl";
import { Link } from "react-router-dom";

class FlatIron extends Component {
  state = {};
  render() {
    document.title = "FlatIron";
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <img
              src={FlatIronImage}
              alt="FlatIron"
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
                margin: "10px"
              }}
            />
          </Cell>
          <Cell col={9}>
            <div
              style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#4144DD",
                color: "aliceblue",
                borderRadius: "10px"
              }}
            >
              <h2>
                <center>FlatIron</center>
              </h2>
              <h3>Price: $190,000,000.00</h3>
            </div>
            <div style={{ border: "1px solid #4144DD", borderRadius: "10px" }}>
              <p>
                The Flatiron Building, originally the Fuller Building, is a
                triangular 22-story, 285-foot (87 m) tall steel-framed
                landmarked building located at 175 Fifth Avenue in the Flatiron
                District neighborhood of borough of Manhattan, New York City.
                Upon completion in 1902, it was one of the tallest buildings in
                the city at 20 floors high and one of only two "skyscrapers"
                north of 14th Street – the other being the Metropolitan Life
                Insurance Company Tower, one block east. The building sits on a
                triangular block formed by Fifth Avenue, Broadway, and East 22nd
                Street – where the building's 87-foot (27 m) back end is located
                – with East 23rd Street grazing the triangle's northern (uptown)
                peak. As with numerous other wedge-shaped buildings, the name
                "Flatiron" derives from its resemblance to a cast-iron clothes
                iron. The building, which has been called "one of the world's
                most iconic skyscrapers and a quintessential symbol of New York
                City", anchors the south (downtown) end of Madison Square and
                the north (uptown) end of the Ladies' Mile Historic District.
                The neighborhood around it is called the Flatiron District after
                its signature building, which has become an icon of New York
                City. The Flatiron Building was designated a New York City
                landmark in 1966, was added to the National Register of Historic
                Places in 1979, and was designated a National Historic Landmark
                in 1989.{" "}
              </p>

              <Navigation>
                <CardActions border>
                  <Button>
                    {" "}
                    <Link
                      style={{ font: "Roboto", color: "gray" }}
                      target="_blank"
                      to="/agents"
                    >
                      <b>Get Some Help From Our Super Agents</b>
                    </Link>
                  </Button>
                </CardActions>
              </Navigation>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default FlatIron;
