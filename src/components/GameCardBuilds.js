import React from "react";

import "./styles/GameCardBuild.css";

class GameCardBuild extends React.Component{
    render(){
        return (
            <div className="GameCardBuild">
                <div>
                    {this.props.web}
                    Web
                </div>
                <div>
                    {this.props.pc}
                    PC
                </div>
                <div>
                    {this.props.android}
                    Android
                </div>
                <div>
                    {this.props.gdd}
                    GDD
                </div>
            </div>
        );
    }
}
export default GameCardBuild;