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

        {/* <div>
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-html5 socialNetwork">Web</h3>
          </Link>
        </div>
        <div>
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-pc socialNetwork">PC</h3>
          </Link>
        </div>
        <div>
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-android socialNetwork">Android</h3>
          </Link>
        </div>
        <div>
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-html5 socialNetwork">GDD</h3>
          </Link>
        </div> */}
      </React.Fragment>
    );
  }
}
export default GameCardBuild;
