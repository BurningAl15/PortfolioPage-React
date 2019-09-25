import React from "react";
import meImage from "../images/Aldhair Vera.jpg";
import "./styles/Portfolio.css";

class PortfolioElement extends React.Component{
    render(){
        return(
            <div className="PortfolioElement">
                <h1 className="PortfolioElement-title">
                    {this.props.title}
                </h1>
                <h2 className="PortfolioElement-tech">
                    {this.props.tech}
                </h2>
                <h2 className="PortfolioElement-date">
                    {this.props.date}
                </h2>
                <ol className="PortfolioElement-set">
                    <li>
                        {this.props.list_element1}
                    </li>
                    <li>
                        {this.props.list_element2}
                    </li>
                    <li>
                        {this.props.list_element3}
                    </li>
                </ol>
                <img
                    className="PortfolioElement-image"
                    src={meImage}
                    width="100"
                    alt="Element image">
                </img>
            </div>
        );
    }
}

export default PortfolioElement;