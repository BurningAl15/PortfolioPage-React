import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

// let path="";
// const build="/Build/Build.json";
// const launcher="/Build/UnityLauncher.js";

export default class WebGame extends React.Component {
  constructor(props) {
    super(props);

    const { gameId } = this.props.location.state;

    // path="FourDirections";

    console.log(gameId);

    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.
    this.four = new UnityContent(
      "MyGames/FourDirections/Build/Build.json",
      "MyGames/FourDirections/Build/UnityLoader.js"
    );

    this.kitten = new UnityContent(
      "MyGames/FlyingKitten/Build/Build.json",
      "MyGames/FlyingKitten/Build/UnityLoader.js"
    );

    this.smasher = new UnityContent(
      "MyGames/BoxSmasher/Build/WebGL.json",
      "MyGames/BoxSmasher/Build/UnityLoader.js"
    );

    this.hamster = new UnityContent(
      "MyGames/SpacialHamster/Build/Build.json",
      "MyGames/SpacialHamster/Build/UnityLoader.js"
    );

    this.free = new UnityContent(
      "MyGames/Landofthefree/Build/CorrectWebPackage.json",
      "MyGames/Landofthefree/Build/UnityLoader.js"
    );

    this.breakout = new UnityContent(
      "MyGames/Breakout/Build/Build.json",
      "MyGames/Breakout/Build/UnityLoader.js"
    );

    this.frogger = new UnityContent(
      "MyGames/ColorfulFrogger/Build/Build.json",
      "MyGames/ColorfulFrogger/Build/UnityLoader.js"
    );

    this.seed = new UnityContent(
      "MyGames/SeedPickupFight/Build/Build.json",
      "MyGames/SeedPickupFight/Build/UnityLoader.js"
    );

    this.lineRider = new UnityContent(
      "MyGames/LineRider/Build/Build.json",
      "MyGames/LineRider/Build/UnityLoader.js"
    );

    this.unityContent = new UnityContent();

    switch (gameId) {
      case "free":
        this.unityContent = this.free;
        break;

      case "hamster":
        this.unityContent = this.hamster;
        break;

      case "seed":
        this.unityContent = this.seed;
        break;


      case "boxsmasher":
        this.unityContent = this.smasher;
        break;
      case "kitten":
        this.unityContent = this.kitten;
        break;
      case "four":
        this.unityContent = this.four;
        break;
      case "breakout":
        this.unityContent = this.breakout;
        break;
      case "frogger":
        this.unityContent = this.frogger;
        break;
      default:
        this.unityContent = this.lineRider;
        break;
    }

    // this.unityContent = new UnityContent(
    //   // `${props.build}`,
    //   // `${props.launcher}`
    // );

    // this.unityContent =this.content;
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }

}
