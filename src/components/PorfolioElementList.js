import React from "react";

import Element from "../components/PortfolioElement";
import "./styles/PortfolioElementList.css";


class PortfolioElementList extends React.Component {
    render() {
        return (
        <ul className="PortfolioElementList">
            {this.props.elements.map(element => {
                return (
                <li key={element.id} className="Portfolio_Element">
                    <Element
                    title={element.title}
                    tech={element.tech}
                    date={element.date}
                    list_element1={element.list_element1}
                    list_element2={element.list_element2}
                    list_element3={element.list_element3}
                    />
                </li>
                );
            })}
        </ul>
        );
    }
}

export default PortfolioElementList;
