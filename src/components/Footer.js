import React from "react";
import "../components/styles/Footer.css";

class Footer extends React.Component{
    render(){

        return (
            <div className="Footer">
                <div className="Footer-Container">
                    <strong>
                        © 2019 Aldhair Vera. All rights reserved
                    </strong>
                    <strong>
                        | Design by Aldhair Vera.
                    </strong>
                </div>
            </div>
        )
    }

}

export default Footer;