import React from "react";
import meImage from "../images/Aldhair Vera.jpg";
import "./styles/PortfolioElement.css";

class PortfolioElement extends React.Component{

    render(){
        return(
            <div className="PortfolioElement">
                <h2 className="PortfolioElement-title">
                    {this.props.title}
                </h2>
                <h3 className="PortfolioElement-tech">
                    {this.props.tech}
                </h3>
                <h3 className="PortfolioElement-date">
                    {this.props.date}
                </h3>
                <ol className="PortfolioElement-set">
                    <li className="PortfolioElement-setElement">
                        {this.props.list_element1}
                    </li>
                    <li className="PortfolioElement-setElement">
                        {this.props.list_element2}
                    </li>
                    <li className="PortfolioElement-setElement">
                        {this.props.list_element3}
                    </li>
                </ol>
                <img
                    className="PortfolioElement-image"
                    src={meImage}
                    width="300"
                    alt="Element image">
                </img>
            </div>
        );
    }
}

export default PortfolioElement;