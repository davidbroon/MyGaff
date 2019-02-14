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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
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

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
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
                        <Button onClick={this.handleOpenDialog} colored
                        raised
                        ripple style={{position:"center"}}>
                          More Information
                        </Button> 
                    </CardActions>
                  </Navigation>
                    <Dialog
                      col={12}
                      className="dialog"
                      open={this.state.openDialog}
                      style={{ overflowX: "auto", width:"50%" }}
                    >
                      <DialogTitle
                        style={{
                          background: `url(${p.image})`,
                          width: "100%",
                          height: "100%",
                          backgroundRepeat: "no-repeat",
                          position: "relative",
                          backgroundPosition: "center center",
                          backgroundsize: "fill",
                          height: "200px"
                        }}
                      />
                      <DialogContent>
                        <center><b>{p.homeName}</b>
                        <p>
                          {p.address.line1}, {p.address.city}, {p.address.state}
                          , {p.address.zip}
                          <br />
                          {p.price}
                          <br />
                          Bio: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse in ornare quam, eget
                          elementum eros. Quisque vel semper ligula, ac commodo
                          libero. Maecenas tincidunt quam massa, interdum
                          rhoncus tellus
                        </p>
                        </center>
                      </DialogContent>
                      <Navigation style={{float:"right"}}>
                      
                       <DialogActions fullWidth>
                        <Button type="button"><Link to="/agents" style={{color:"black"}}>
                          Find an Agent to Help
                          </Link>
                        </Button>
                        <Button type="button" onClick={this.handleCloseDialog}>
                          Close
                        </Button>
                      </DialogActions>
                      
                      </Navigation>
                    </Dialog>
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
