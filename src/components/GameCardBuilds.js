import React from "react";

import "./styles/GameCardBuild.css";
import { Link } from "react-router-dom";

// const web = "./";
// const android = "./";
// const pc = "./";
// const gdd = "./";

function GameCardBuild(props) {
  return (
    <React.Fragment>
      <ol className="GameCardBuild">
        <li>
          <Link
            // to={{ pathname: `/WebGame/${props.gameId}`, state: { gameId: `${props.gameId}`} }}
            to={{ pathname: "/WebGame/", state: { gameId: `${props.gameId}`} }}
          >
            <img
              className="socialNetwork"
              src="https://img.icons8.com/windows/32/000000/html-5.png"
              alt="HTML5"
            />
          </Link>
        </li>
        {/* <li>
            <Link className="html5" to="/ComingSoon">
              <h3>PC</h3>
            </Link>
          </li>

          <li>
            <Link className="html5" to="/ComingSoon">
              <h3>Android</h3>
            </Link>
          </li> */}

        <li>
          <Link to="/ComingSoon">
            <img
              className="socialNetwork"
              src="https://img.icons8.com/windows/50/000000/pdf.png"
              alt="PDF"
            />
          </Link>
        </li>
      </ol>
    </React.Fragment>
  );
}

export default GameCardBuild;
