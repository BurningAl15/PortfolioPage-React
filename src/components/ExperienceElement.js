import React from "react";

class ExperienceElement extends React.Component{

    render(){
        return(
            <div className="ExperienceElement">
                <article className="ExperienceElement-icon-container">
                    <img
                        className="ExperienceElement-icon"
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

                    <li>
                        {this.props.info1}
                    </li>

                    <li>
                        {this.props.info2}
                    </li>

                </ol>
            </div>
        );
    }
}

export default ExperienceElement;