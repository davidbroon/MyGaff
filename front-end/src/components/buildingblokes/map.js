import React, { Component } from "react";

class MapQuestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, properties: [] };
  }

  render() {
    const mapStyle = {
      height: this.state.height,
      width: this.state.width
    };
    return (
      <div id="map" style={mapStyle}>
        <p style={{ textAlign: "center" }}>Map loading...</p>
      </div>
    );
  }

  componentDidMount() {
    let L = window.L;
    console.log(L);
    L.mapquest.key = "this.state.BM60R2Aav4B7hIZ2SqV6OohRkWZJbWNx";

    L.mapquest.map("map", {
      center: this.state.center,
      layers: L.mapquest.tileLayer(this.state.baseLayer),
      zoom: this.state.zoom
    });

    L.mapquest
      .textMarker([40.748817, -73.985428], {
        icon: {
          primaryColor: "#22407F",
          secondaryColor: "#22407F",
          size: "sm"
        },
        draggable: false,
        text: "Empire State",
        position: "right",
        subtext: "$534,000,000.00",
        type: "marker",
        url: "superman"
      })
      .addTo(L.mapquest.Map.getMap());

    L.mapquest
      .textMarker([40.689244, -74.044514], {
        icon: {
          primaryColor: "#22407F",
          secondaryColor: "#22407F",
          size: "sm"
        },
        title: "hello",
        draggable: false,
        text: "Statue of Liberty",
        position: "bottom",
        subtext: "$45,000,000.00",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());

    L.mapquest
      .textMarker([40.7401, -73.9903], {
        icon: {
          primaryColor: "#22407F",
          secondaryColor: "#22407F",
          size: "sm"
        },
        draggable: false,
        text: "FlatIron",
        position: "left",
        subtext: "$190,000,000.00",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());

    L.mapquest
      .textMarker([38.8977, -77.0365], {
        icon: {
          primaryColor: "#22407F",
          secondaryColor: "#22407F",
          size: "sm"
        },
        draggable: false,
        text: "White House",
        position: "right",
        subtext: "$2,386,876,712.00",
        type: "marker"
      })
      .addTo(L.mapquest.Map.getMap());
  }
}

export default MapQuestComponent;
