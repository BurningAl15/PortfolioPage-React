import React from "react";

import "./styles/ExperienceElement.css";

const sign=[' ','-'];

const icon_experience=['ExperienceElement-icon','ExperienceElement-icon-INART']
class ExperienceElement extends React.Component{

    render(){
        return(
            <div className="ExperienceElement">
                <article className="ExperienceElement-icon-container">
                    <img
                        className={this.props.iconDirection==='InartLogo.png'?icon_experience[1]:icon_experience[0]}
                        src={require ('../images/'+this.props.iconDirection)}
                        width="300"
                        alt="Icon image"
                    >
                    </img>
                </article>

                <h1 className="ExperienceElement-name">
                    {this.props.name}
                </h1>

                <h2 className="ExperienceElement-position">
                    {this.props.position}
                </h2>

                <ol className="ExperienceElement-set">

                    <li className="ExperienceElement-setElement">
                        {sign[1]}{this.props.info1}
                    </li>

                    <li className="ExperienceElement-setElement">
                        {this.props.info2===' '?sign[0]:sign[1]}{this.props.info2}
                    </li>

                </ol>
            </div>
        );
    }
}

export default ExperienceElement;