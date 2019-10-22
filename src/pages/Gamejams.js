import React from "react";

import "./styles/Projects.css";
import GameCard from "../components/GameCard";

class Gamejams extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Project">
          <h1 className="Project-title">GameJams</h1>

          <div className="Project-content">
            <GameCard
              gameName="Land of a Free"
              videoLink="https://www.youtube.com/embed/6-mc5128xDw"
              gameGenre="Survival/2d simulator"
              gameDescription='Land of the free is a 2d wolf pack simulator game my team and i did in the Lima Game Jam (Global gamejam 2019) The theme of the gamejam was "What is home for you?" so we thought a lot and saw that we all feel that wolves have a home wherever they go, so we used them to make this game. In the game you control a pack of wolves that must hunt, rest, hug and hunt one more time to mantain their family alive.'
              gameId="free"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Ragnar and the sands of time"
              videoLink="https://www.youtube.com/embed/qAJUQLE2ulQ"
              gameGenre="2d Platformer"
              gameDescription="Live adventures as Ragnar, a viking that just arrived an island with a misterious effect that get's you old. Recover your youth by taking clocks, but take care because the island is very dangerous."
              gameId="ragnar"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Hamster Attack"
              videoLink="https://www.youtube.com/embed/faouIeoJbXs"
              gameGenre="2d Topdown Shooter"
              gameDescription="Destroy the evil cat empire while you shoot and avoid enemies, living a cool adventure in the skin of Kion the hamster, but take care, not all is what you see."
              gameId="hamster"
            />
          </div>

          {/* <div className="Project-content">
            <GameCard
              gameName="Minimal Dodgers"
              videoLink="https://www.youtube.com/embed/qAJUQLE2ulQ"
              gameGenre="2d runnerlike"
              gameDescription="Minimal Dodgers is my first gamejam game, I worked as programmer and game designer very hard with some more people and make this little cool game in 48 hours."
            />
          </div> */}

          <div className="Project-content">
            <GameCard
              gameName="Heart Wars"
              videoLink="https://www.youtube.com/embed/PYBRjbTWOdM"
              gameGenre="Topdown 3d party game"
              gameDescription="Select a heart and beat the other one until only one is left standing."
              gameId="heartWars"
              />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Seeds, PickUp, Fight!"
              videoLink="https://www.youtube.com/embed/-MdPKss8vjs"
              gameGenre="2d Brawler"
              gameDescription="Select one seed, destroy the balance in the woods by trying to pick up orbs."
              gameId="seed"
              />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Gamejams;
