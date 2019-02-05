import React from "react";
import * as api from "../../utils/api";

class Properties extends React.Component {
  state = {
    properties: [],
    isLoaded: false
  };

  callProperties = () => {
    api.fetchValues().then(response => {
      console.log("callProperties: ", response);
      this.setState(() => {
        return {
          properties: response
        };
      });
      console.log("after SetState: ", this.state.properties);
    });
  };

  componentDidMount() {
    this.callProperties();
    this.setState({
      isLoaded: true,
      properties: JSON
    });
  }

  render() {
    const { isLoaded, properties } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {this.state.properties.map((property, index) => (
            <p key={index}>
              Hello, {property.homeName} from {property.city}!
            </p>
          ))}
        </div>
      );
    }
  }
}

export default Properties;
