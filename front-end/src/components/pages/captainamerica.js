import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class CaptainAmerica extends Component {
  render() {
    return (
      <div className="contact-captain-body">
        <Grid className="contact-captain-grid">
          <Cell col={6}> 
            <h2>Steve Rogers</h2>
            <img
                src="https://i.pinimg.com/736x/3f/45/20/3f4520050c77f156ed0ed22216d0b8f8.jpg"
                alt="avatar"
                style={{height: '250px'}} />
            <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras ornare arcu. Et tortor at risus viverra adipiscing at in tellus integer. Ut ornare lectus sit amet est placerat in egestas.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-captain-list">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (212)-576-4000
                    </ListItemContent>
                </ListItem>

                <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fas fa-map-marked-alt" aria-hidden="true"/>
                135 W. 50th Street
                New York, NY 10020                
                </ListItemContent>
            </ListItem>

            <ListItem>
            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
            <i className="fa fa-envelope" aria-hidden="true"/>
             captsteve1941@shield.gov
            </ListItemContent>
        </ListItem>
        <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fab fa-skype" aria-hidden="true"/>
                     @thecaptain
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

export default CaptainAmerica;
