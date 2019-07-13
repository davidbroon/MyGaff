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
          <Header
            title="My Gaff"
            scroll
            style={{ color: "white", marginBottom: "2%", position: "fixed" }}
            
          >
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

          <Content style={{ marginTop: "5%" }}>
            <div className="page-content" />
            <Main />
          </Content>

          <Footer size="mini" style={{ height: 5, bottom: 0 }}>
            <FooterSection type="left" logo="My Gaff">
              <FooterLinkList>
                <Navigation>
                  <Link className="footerlink" to="/help">
                    Help
                  </Link>

                  <Link to="/privacy">Privacy & Terms</Link>
                </Navigation>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
