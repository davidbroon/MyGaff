import React, { Component } from "react";
import David from "../../images/headshots/davidShot.jpg";

class More extends Component {
  state = {};
  render() {
    document.title = "More";
    return (
      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: "rgb(45, 129, 185)",
          color: "aliceblue"
        }}
      >
        <div class="sidenav">
          <img
            alt="david portrait"
            style={{
              width: "38%",
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundsize: "cover",
              position: "fixed"
            }}
            src={David}
          />
        </div>
        <div class="main">
          <div class="header-container">
            <header>
              <h1>David Brown</h1>
              <br />
              <h2>Full Stack Developer</h2>
            </header>
          </div>
          <div class="btn-container" onMouseOver={this.mouseOver}>
            <a
              href="https://www.linkedin.com/in/david-brown-180325164/"
              target="_blank"
              class="btn btn-primary"
              rel="noopener noreferrer"
            >
              <i id="LinkedIn" class="fa fa-linkedin" />
              <b> LinkedIn </b>
            </a>
            <a
              href="https://github.com/davidbroon?tab=repositories"
              target="_blank"
              class="btn btn-primary"
              rel="noopener noreferrer"
            >
              <i id="gitHub" class="fa fa-github" />
              <b> GitHub</b>
            </a>
          </div>
          <div class="skills">
            <ul>
              <li>
                <b>
                  <u>Relational:</u>
                </b>
                I enjoy close relationships with others and find deep
                satisfaction in working hard with friends to achieve a goal.
              </li>
              <br />
              <li>
                <b>
                  <u>Adaptable:</u>
                </b>{" "}
                I have strong beliefs that are rooted in core values. It’s from
                these values that comes a steadfast secure person, no matter the
                circumstance.
              </li>
              <br />
              <li>
                <b>
                  <u>Problem Solver:</u>
                </b>{" "}
                I am determined to find a solution to every problem. I believe
                there is always an answer that benefits the environment around
                me.
              </li>
              <br />
              <li>
                <b>
                  <u>Time-Management:</u>
                </b>{" "}
                This is a skill I've built up over time, currently being
                developed by being a full time employee, part-time student,
                full-time dad to a new born and a husband to my wonderful wife
              </li>
              <br />
              <li>
                <b>
                  <u>Bethel School of Technology graduate:</u>
                </b>{" "}
                <br />
                <i>Technical Skills: </i>Languages / Frameworks HTML, CSS,
                JavaScript (JS), Java, ReactJS, jQuery, Bootstrap, AJAX, Node,
                Mongodb, Mongoose, WebAPI, Responsive Design, Flexbox, SQL,
                NoSQL
                <br />
                <i>Technologies:</i> VisualStudio2018, Github, GitKraken, NPM,
                Atom, Spring <br />
                <i>Other Skills:</i> Agile Methodologies, SCRUM
              </li>
            </ul>
          </div>
          <div class="footer-container">
            <footer>
              <span class="glyphicon glyphicon-envelope">
                <a href="mailto:davidbrown090391@gmail.com">
                  <b>davidbrown090391@gmail.com</b>
                </a>
              </span>
              {" || "}
              <span class="glyphicon glyphicon-phone-alt">
                <b>(530)355-9984</b>
              </span>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default More;
