import React from "react";

import "./styles/GameCard.css";
import GameCardBuild from "./GameCardBuilds";
class GameCard extends React.Component {
  render() {
    return (
    <React.Fragment>
        <h2 className="GameCard-Title">
            {this.props.gameName}
        </h2>
        <div className="GameCard">
            <iframe className="GameCard-videoContainer" 
            width="640" 
            height="480" 
            src={this.props.videoLink} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen=""/>
            <div className="GameCard-Content">
                <div>
                    <h3>
                        Genre:
                    </h3>
                    <p>
                        {this.props.gameGenre}
                    </p>
                </div>
                <div>
                    <h3>
                        Description:
                    </h3>
                    <p>
                        {this.props.gameDescription}
                    </p>
                </div>
            </div>
        </div>
        <div className="GameCard-Links">
            <GameCardBuild />
        </div>
    </React.Fragment>)
  }
}

export default GameCard;
