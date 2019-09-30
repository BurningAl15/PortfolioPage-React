import React from "react";

import Element from "../components/ExperienceElement";
import "./styles/ExperienceElementList.css";

class PortfolioElementList extends React.Component {
    render() {
        return (
            <div className="ExperienceElementList">
                {this.props.experienceElements.map(expElement=>{
                    return(
                        <Element
                        key={expElement.id}
                        iconDirection={expElement.iconDirection}
                        name={expElement.name}
                        position={expElement.position}
                        info1={expElement.info1}
                        info2={expElement.info2}
                        />
                    );
                })}
            </div>
        );
    }
}

export default PortfolioElementList;