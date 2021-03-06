import React, { Component } from "react";
import statueOfLibertyImage from "../../images/buildings/statueOfLiberty.jpeg";
import { Grid, Cell, Navigation, CardActions, Button } from "react-mdl";
import { Link } from "react-router-dom";

class StatueOfLiberty extends Component {
  state = {};
  render() {
    document.title = "Statue Of Liberty";
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <img
              src={statueOfLibertyImage}
              alt="statueOfLiberty"
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
            }}>
            <h2>
              <center>Statue Of Liberty</center>
            </h2>
            <h3>Price: $45,000,000.00</h3>
            </div>
            <div style={{border:"1px solid #4144DD",borderRadius: "10px"}}>
            <p>
              The Statue of Liberty (Liberty Enlightening the World; French: La
              Liberté éclairant le monde) is a colossal neoclassical sculpture
              on Liberty Island in New York Harbor in New York, in the United
              States. The copper statue, a gift from the people of France to the
              people of the United States, was designed by French sculptor
              Frédéric Auguste Bartholdi and its metal framework was built by
              Gustave Eiffel. The statue was dedicated on October 28, 1886. The
              Statue of Liberty is a figure of Libertas, a robed Roman liberty
              goddess. She holds a torch above her head with her right hand, and
              in her left hand carries a tabula ansata inscribed in Roman
              numerals with "JULY IV MDCCLXXVI" (July 4, 1776), the date of the
              U.S. Declaration of Independence. A broken chain lies at her feet
              as she walks forward. The statue became an icon of freedom and of
              the United States, and a national park tourism destination. It is
              a welcoming sight to immigrants arriving from abroad. Bartholdi
              was inspired by a French law professor and politician, Édouard
              René de Laboulaye, who is said to have commented in 1865 that any
              monument raised to U.S. independence would properly be a joint
              project of the French and U.S. peoples. Because of the post-war
              instability in France, work on the statue did not commence until
              the early 1870s. In 1875, Laboulaye proposed that the French
              finance the statue and the U.S. provide the site and build the
              pedestal. Bartholdi completed the head and the torch-bearing arm
              before the statue was fully designed, and these pieces were
              exhibited for publicity at international expositions. The
              torch-bearing arm was displayed at the Centennial Exposition in
              Philadelphia in 1876, and in Madison Square Park in Manhattan from
              1876 to 1882. Fundraising proved difficult, especially for the
              Americans, and by 1885 work on the pedestal was threatened by lack
              of funds. Publisher Joseph Pulitzer, of the New York World,
              started a drive for donations to finish the project and attracted
              more than 120,000 contributors, most of whom gave less than a
              dollar. The statue was built in France, shipped overseas in
              crates, and assembled on the completed pedestal on what was then
              called Bedloe's Island. The statue's completion was marked by New
              York's first ticker-tape parade and a dedication ceremony presided
              over by President Grover Cleveland. The statue was administered by
              the United States Lighthouse Board until 1901 and then by the
              Department of War; since 1933 it has been maintained by the
              National Park Service. Public access to the balcony around the
              torch has been barred since 1916.
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

export default StatueOfLiberty;
