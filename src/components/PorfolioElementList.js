import React from "react";

import Element from "../components/PortfolioElement";
import "./styles/PortfolioElementList.css";


class PortfolioElementList extends React.Component {
    render() {
        return (
        <div className="PortfolioElementList">
            {this.props.portfolioElements.map(element => {
                return (
                    <Element
                    key={element.id}
                    title={element.title}
                    tech={element.tech}
                    date={element.date}
                    list_element1={element.list_element1}
                    list_element2={element.list_element2}
                    list_element3={element.list_element3}
                    />
                );
            })}
        </div>
        );
    }
}

export default PortfolioElementList;
