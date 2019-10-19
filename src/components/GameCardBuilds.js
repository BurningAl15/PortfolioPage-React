import React from "react";

import "./styles/GameCardBuild.css";
import { Link } from "react-router-dom";

// const web = "./";
// const android = "./";
// const pc = "./";
// const gdd = "./";

class GameCardBuild extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ol className="GameCardBuild">
          <li>
            <Link className="html5" to="/ComingSoon">
              <h3>Web</h3>
            </Link>
          </li>
          <li>
            <Link className="html5" to="/ComingSoon">
              <h3>PC</h3>
            </Link>
          </li>

          <li>
            <Link className="html5" to="/ComingSoon">
              <h3>Android</h3>
            </Link>
          </li>

          <li>
            <Link className="html5" to="/ComingSoon">
              <h3>GDD</h3>
            </Link>
          </li>
        </ol>

      </React.Fragment>
    );
  }
}
export default GameCardBuild;
