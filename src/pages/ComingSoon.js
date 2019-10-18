import React from "react";

import "../pages/styles/ComingSoon.css";

class ComingSoon extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="ComingSoonContainer">
                    <img className="ComingSoon-image" src="http://ccsmgnt.com/top.png" alt="img"/>
                    <h2 className="ComingSoon-Text">
                        Not Ready yet, still working on it.
                    </h2>
                    <img className="ComingSoon-image" src="http://ccsmgnt.com/coming.png" alt="img"/>
                </div>
            </React.Fragment>
        )
    }
}

export default ComingSoon;