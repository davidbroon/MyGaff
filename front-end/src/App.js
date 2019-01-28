import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection,
  FooterLinkList
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header title="My Gaff" scroll style={{ color: "white" }}>
            <Navigation>
              <Link className="homelink" to="/home">
                <i
                  className="fas fa-home"
                  style={{ fontsize: "48", color: "white" }}
                />
                Home
              </Link>
              <Link className="buylink" to="/">
                Buy
              </Link>
              <Link className="agentslink" to="/agents">
                Agent Finder
              </Link>
              <Link className="morelink" to="/more">
                More
              </Link>
            </Navigation>
          </Header>
          <Drawer title="My Gaff" style={{ color: "black" }}>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/">Buy</Link>
              <Link to="/agents">Agent Finder</Link>
              <Link to="/more">More</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>

          <Footer size="mini" style={{ height: 5 }}>
            <FooterSection type="left" logo="Title">
              <FooterLinkList>
                <a href="/help">Help</a>
                <a href="/privacy">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
