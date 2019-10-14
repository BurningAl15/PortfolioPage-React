import React from "react";

import twitterIcon from "../images/twitter.svg";
import facebookIcon from "../images/facebook.svg";
import whatsappIcon from "../images/whatsapp.svg";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/linkedin.svg";
import githubIcon from "../images/github.svg";

import "../pages/styles/ContactMe.css";

const twitter = "https://twitter.com/AldhairVera";
const facebook = "https://www.facebook.com/aldhair.Vera";
const whatsapp =
  "https://api.whatsapp.com/send?phone=51998381252&text=&source=&data=";
const instagram = "https://www.instagram.com/al_vera15/";
const linkedin = "https://www.linkedin.com/in/aldhairvera/";
const github = "https://github.com/BurningAl15";

class ContactMe extends React.Component {
  render() {
    return (
        <React.Fragment>
        <div className="ContactMe-Container">
          <div className="ContactMe-Container-grouper">
            <h1 className="ContactMe-title">Contact Me</h1>
            <div className="ContactMe-Social-Set">
              <h2 className="ContactMe-subtitle">Want to work with me?</h2>
              <div className="social-element-container">
                <a className="social-element" href={twitter}>
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>

                <a className="social-element" href={facebook}>
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>

                <a className="social-element" href={instagram}>
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>

                <a className="social-element" href={linkedin}>
                  <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>

                <a className="social-element" href={github}>
                  <img src={githubIcon} alt="Github Icon" />
                </a>

                <a className="social-element" href={whatsapp}>
                  <img src={whatsappIcon} alt="Whatsapp Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactMe;
