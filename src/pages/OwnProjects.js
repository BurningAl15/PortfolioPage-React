import React from "react";

import "./styles/Projects.css";
import GameCard from "../components/GameCard";

class OwnProjects extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Project">
          <h1 className="Project-title">Own Projects</h1>

          <div className="Project-content">
            <GameCard
              gameName="Billiards Simulator"
              videoLink="https://www.youtube.com/embed/HVlr5NpkPJk"
              gameGenre="Simulation video game, Sports game, Billiards"
              gameDescription="Billiards game that tries to make you feel really passionate about this sport giving you two kinds of view of the game for more detail, and some little tricks."
              gameId="billiards"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Box Smasher"
              videoLink="https://www.youtube.com/embed/inBmYbhS4Ak"
              gameGenre="3D Shooter/Survival"
              gameDescription='Destroy all boxes you can, but take care of what box you aim to.'
              gameId="boxsmasher"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Sound Visualizer"
              videoLink="https://www.youtube.com/embed/XmtUJ3wQnsk"
              gameGenre="Sound Visualizer"
              gameDescription="Select one seed, destroy the balance in the woods by trying to pick up orbs."
              gameId="visualizer"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Colorful Frogger"
              videoLink="https://www.youtube.com/embed/_M3M2UuhtB8"
              gameGenre="2d Arcade"
              gameDescription="Play the classic frogger, cross the street and take care of the cars in a colorful new world."
              gameId="frogger"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Break it out!"
              videoLink="https://www.youtube.com/embed/oDFgTWrQD5s"
              gameGenre="2d Arcade"
              gameDescription="Play the classic brekout with a 3d art style and a new game feel."
              gameId="breakout"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Icy Fighters"
              videoLink="https://www.youtube.com/embed/i3bi3goLU8U"
              gameGenre="2d Brawler"
              gameDescription="Select one of the curious icy fighters and fill your enemy with your snowballs until he falls."
              gameId="icy"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Robot Attack"
              videoLink="https://www.youtube.com/embed/xbUsZE2tFo4"
              gameGenre="2d Survival"
              gameDescription="Try to survive in an space lab where robot's went out of control."
              gameId="robot"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Toothie Adventures"
              videoLink="https://www.youtube.com/embed/CKXBjvgJkM8"
              gameGenre="2d runnerlike"
              gameDescription="In a sweet world, became toothie, a little teeth that don't want to get tooth decay."
              gameId="toothie"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="The Walking Dead.io simulator"
              videoLink="https://www.youtube.com/embed/zEBRTZhklco"
              gameGenre="2d Survival"
              gameDescription="Try to survive in a zombie world in a .io style game."
              gameId="walking"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Inquisition"
              videoLink="https://www.youtube.com/embed/dURlVDyh4Sg"
              gameGenre="2d Platformer"
              gameDescription="Get into the skin of a slave that want's to save her wife from the Holy Inquisition that take her from him because they accuse her of witchcraft."
              gameId="inquisition"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Flying Kitten"
              videoLink="https://www.youtube.com/embed/1KWDhGR77QA"
              gameGenre="HyperCasual / Mobile"
              gameDescription="Mantain on the air as much as you can avoiding cucumbers."
              gameId="kitten"
            />
          </div>

          <div className="Project-content">
            <GameCard
              gameName="Four Directions"
              videoLink="https://www.youtube.com/embed/1KWDhGR77QA"
              gameGenre="HyperCasual / Mobile"
              gameDescription="Mantain on the air as much as you can avoiding cucumbers."
              gameId="four"
            />
          </div>

        </div>
      </React.Fragment>
    );
  }
}
export default OwnProjects;
