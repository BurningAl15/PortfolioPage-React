import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

let path="";
const build="/Build/Build.json";
const launcher="/Build/UnityLauncher.js";

export default class WebGame extends React.Component {
  constructor(props) {
    super(props);

    // path="FourDirections";
    
    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.
    // this.content=new UnityContent(
    //   `${path}${build}`,
    //   `${path}${launcher}`
    // )

    this.unityContent = new UnityContent(
      "FourDirections/Build/Build.json",
      "FourDirections/Build/UnityLoader.js"
      // `${props.build}`,
      // `${props.launcher}`
    );

    // this.unityContent =this.content;
    console.log(this.unityContent);
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}