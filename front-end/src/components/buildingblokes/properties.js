import React from "react";
import * as api from "../../utils/api";
import { Spinner } from "react-mdl";
import PropertyList from "../buildingblokes/propertyList";
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
            <PropertyList p={p} />
          ))}
        </div>
      );
    }
  }
}

export default Properties;
