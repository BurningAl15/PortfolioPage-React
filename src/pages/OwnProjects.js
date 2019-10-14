import React from "react";

import "./styles/OwnProjects.css";
import GameCard from "../components/GameCard";

class OwnProjects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="OwnProject">
          <h1 className="OwnProject-title">Own Projects</h1>

          <div className="OwnProject-content">
            <GameCard
              gameName="Land of a Free"
              videoLink="https://www.youtube.com/embed/6-mc5128xDw"
              gameGenre="Survival/2d simulator"
              gameDescription='Land of the free is a 2d wolf pack simulator game my team and i did in the Lima Game Jam (Global gamejam 2019) The theme of the gamejam was "What is home for you?" so we thought a lot and saw that we all feel that wolves have a home wherever they go, so we used them to make this game. In the game you control a pack of wolves that must hunt, rest, hug and hunt one more time to mantain their family alive.'
            />
          </div>

          <div className="OwnProject-content">
            <GameCard
              gameName="Ragnar and the sands of time"
              videoLink="https://www.youtube.com/embed/qAJUQLE2ulQ"
              gameGenre="2d Platformer"
              gameDescription="Live adventures as Ragnar, a viking that just arrived an island with a misterious effect that get's you old. Recover your youth by taking clocks, but take care because the island is very dangerous."
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default OwnProjects;