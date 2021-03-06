import React, { Component } from "react";
import EmpireStateImage from "../../images/buildings/empireState.jpeg";
import { Grid, Cell, Navigation, CardActions, Button } from "react-mdl";
import { Link } from "react-router-dom";

class EmpireState extends Component {
  state = {};
  render() {
    document.title = "Empire State";
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <img
              src={EmpireStateImage}
              alt="EmpireState"
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
                <center>Empire State Building</center>
              </h2>
              <h3>Price: $534,000,000.00</h3>
            </div>
            <div 
            style={{border:"1px solid #4144DD",borderRadius: "10px"}}>
            <p>
              Shreve, Lamb & Harmon and completed in 1931, the building has a
              roof height of 1,250 feet (380 m) and stands a total of 1,454 feet
              (443.2 m) tall, including its antenna. Its name is derived from
              "Empire State", the nickname of New York, which is of unknown
              origin. As of 2017 the building is the 5th-tallest completed
              skyscraper in the United States and the 28th-tallest in the world.
              It is also the 6th-tallest freestanding structure in the Americas.
              The Empire State Building stood as the world's tallest building
              for nearly 40 years until the completion of the World Trade
              Center's North Tower in Lower Manhattan in late 1970. Following
              the September 11 attacks in 2001, it was again the tallest
              building in New York until the new One World Trade Center was
              completed in April 2012. The site of the Empire State Building,
              located in Midtown South on the west side of Fifth Avenue between
              West 33rd and 34th Streets, was originally part of an early
              18th-century farm. It was later purchased by the Astor family, who
              built the Waldorf–Astoria Hotel on the site in the 1890s. The
              hotel remained in operation until the late 1920s, when it was sold
              to the Bethlehem Engineering Corporation, then to Empire State
              Inc., a business venture that included famous businessman and
              former General Motors executive, John J. Raskob, members of the du
              Pont family, and former New York governor Al Smith.[15] The
              original design of the Empire State Building was for a 50-story
              office building. However, after fifteen revisions, the final
              design was for an 86-story 1,250-foot building, with an airship
              mast on top. This ensured it would be the world's tallest
              building, beating the Chrysler Building and 40 Wall Street, two
              other Manhattan skyscrapers under construction at the time that
              were also vying for that distinction. Demolition of the
              Waldorf–Astoria began in October 1929, and the foundation of the
              Empire State Building was excavated before demolition was even
              complete. Construction on the building itself started on March 17,
              1930, with an average construction rate of four and a half floors
              per week. A well-coordinated schedule meant that the 86 stories
              were topped out on September 19; the mast was completed by
              November 21; and the building was opened on May 1, 1931, thirteen
              and a half months after the first steel beam was erected. Despite
              the publicity surrounding the building's construction, its owners
              failed to make a profit until the early 1950s. However, since its
              opening, the building's Art Deco architecture and open-air
              observation deck has made it a popular tourist attraction, with
              around 4 million visitors from around the world visiting the
              building's 86th and 102nd floor observatories every year.[16]
              Since the mid-2010s, the Empire State Building has been undergoing
              improvements to improve access to its observation decks.[1] The
              building stands within a mile of other major Midtown tourist
              attractions including Grand Central Terminal, Pennsylvania
              Station, Madison Square Garden, Koreatown, and Macy's Herald
              Square. The Empire State Building is an American cultural icon and
              has been featured in more than 250 TV shows and movies since the
              film King Kong was released in 1933. A symbol of New York City,
              the tower has been named as one of the Seven Wonders of the Modern
              World by the American Society of Civil Engineers. The Empire State
              Building and its ground-floor interior have been designated as a
              city landmark by the New York City Landmarks Preservation
              Commission, and were confirmed as such by the New York City Board
              of Estimate. It was also designated a National Historic Landmark
              in 1986, and was ranked number one on the American Institute of
              Architects' List of America's Favorite Architecture in 2007.
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

export default EmpireState;
