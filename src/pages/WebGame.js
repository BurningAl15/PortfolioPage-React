import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export default class WebGame extends React.Component {
  constructor(props) {
    super(props);

    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "FourDirections/Build/Build.json",
      "FourDirections/Build/UnityLoader.js"
    );
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}