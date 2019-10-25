import React from "react";

import "./styles/GameCard.css";
import GameCardBuild from "./GameCardBuilds";
class GameCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="GameCard-Title">{this.props.gameName}</h2>
        <div className="GameCard">
          <div className="GameCard-Part-Top">
            <div className="GameCard-videoContainer">
              <iframe
                className="GameCard-videoIframe"
                width="100%"
                height="100%"
                src={this.props.videoLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>

            <div className="GameCard-Content">
              <div className="Gamecard-Content-Item1">
                <h3 className="Gamecard-Content-H3">Genre:</h3>
                <p>{this.props.gameGenre}</p>
              </div>
              <div className="Gamecard-Content-Item2">
                <h3 className="Gamecard-Content-H3">Description:</h3>
                <p>{this.props.gameDescription}</p>
              </div>
            </div>
          </div>
          <div className="GameCard-Part-Bottom">
            <div className="GameCard-Links">
              <GameCardBuild 
                gameId={this.props.gameId}
                // gameId="4"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GameCard;
