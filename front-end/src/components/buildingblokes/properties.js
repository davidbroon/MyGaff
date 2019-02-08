import React from "react";
import * as api from "../../utils/api";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button
} from "react-mdl";

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
    const { isLoaded, properties } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.state.properties.map(p => (
            
              <div>
              <Grid className="demo-grid-2">
                <Cell col={2}>
                  <Card
                    shadow={0}
                    style={{ width: "320px", height: "320px", margin: "auto" }}
                  >
                    <CardTitle
                      expand
                      style={{
                        color: "#fff",
                        background:
                          "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                      }}
                      ><h3>{p.homeName}</h3></CardTitle>
                    <CardText>
                    {p.address.line1}, {p.address.city}, {p.address.state},{" "}
                    {p.address.zip}
                    </CardText>
                    <CardActions border>
                      <Button colored>View Updates</Button>
                    </CardActions>
                  </Card>
                </Cell>
                
              </Grid>
            </div>
          ),
        
      
            
          )}
        </div>
      );
    }
  }
}

export default Properties;
