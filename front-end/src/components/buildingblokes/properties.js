import React from "react";
import * as api from "../../utils/api";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  Spinner,
  Navigation
} from "react-mdl";
import { Link } from 'react-router-dom';
class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isLoaded: false
    };
  }

  callProperties = () => {
    api.fetchValues().then(response => {
      console.log("callProperties: ", response);
      this.setState(() => {
        return {
          properties: response,
          isLoaded: true
        };
      });
      console.log("after SetState: ", this.state.properties);
    });
  };

  componentDidMount() {
    this.callProperties();
  }

  render() {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div>
          <Spinner singleColor />
        </div>
      );
    } else {
      return (
        <div>
          {this.state.properties.map(p => (
            <div key={p.id}>
              <Grid className="demo-grid-2">
                <Cell col={2}>
                  <Card
                    shadow={0}
                    style={{
                      width: "300px",
                      height: "400px",
                      margin: "auto",
                      position: "center"
                    }}
                  >
                    <CardTitle
                      className="cardTitle"
                      style={{
                        background: `url(${p.image})`,
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundsize: "cover",
                        height: "80%"
                      }}
                    />
                    <CardText>
                      <b>{p.homeName}</b> || <b>{p.price}</b>
                     
                    </CardText>
                    <Navigation>
                    <CardActions border>
                        <Button> <Link style={{font:"Roboto", color:"gray"}} target='_blank' to={p.link}><b>More Information</b></Link></Button> 
                    </CardActions>
                  </Navigation>
                  </Card>
                </Cell>
              </Grid>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Properties;
