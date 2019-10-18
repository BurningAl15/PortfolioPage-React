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
      <div className="GameCardBuild">
        <div>
          {/* <Link className="html5" to={this.props.web}> */}
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-html5 socialNetwork">Web</h3>
          </Link>
        </div>
        <div>
          {/* <Link className="html5" to={this.props.pc}> */}
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-pc socialNetwork">PC</h3>
          </Link>
        </div>
        <div>
          {/* <Link className="html5" to={this.props.android}> */}
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-android socialNetwork">Android</h3>
          </Link>
        </div>
        <div>
          {/* <Link className="html5" to={this.props.gdd}> */}
          <Link className="html5" to="/ComingSoon">
            <h3 className="fa fa-html5 socialNetwork">GDD</h3>
          </Link>
        </div>
      </div>
    );
  }
}
export default GameCardBuild;
