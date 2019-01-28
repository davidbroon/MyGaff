import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu } from "react-mdl";


class Agents extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{}}>Agents Page</h1>
        <Card className="capt" shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://pmcdeadline2.files.wordpress.com/2014/04/captain-america-wallpaper-batman-vs-superman-avengers-2-captain-america-2-spider-man-2-is-this-the-golden-age-of-superhero-movies__140405050134.jpeg) center / cover'}}>Captain America</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border >
        <Button colored>More Info</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
<br/>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
      </div>
    );
  }
}

export default Agents;
