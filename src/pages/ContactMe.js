import React from "react";

import "../pages/styles/ContactMe.css";

import { SocialIcon } from "react-social-icons";

// const twitter = "https://twitter.com/AldhairVera";
// const facebook = "https://www.facebook.com/aldhair.Vera";
// const whatsapp =
//   "https://api.whatsapp.com/send?phone=51998381252&text=&source=&data=";
// const instagram = "https://www.instagram.com/al_vera15/";
// const linkedin = "https://www.linkedin.com/in/aldhairvera/";
// const github = "https://github.com/BurningAl15";

class ContactMe extends React.Component {
  constructor(props) {
    super(props)
    this.twitter = "https://twitter.com/AldhairVera";
    this.facebook = "https://www.facebook.com/aldhair.Vera";
    this.whatsapp =
      "https://api.whatsapp.com/send?phone=51998381252&text=&source=&data=";
    this.instagram = "https://www.instagram.com/al_vera15/";
    this.linkedin = "https://www.linkedin.com/in/aldhairvera/";
    this.github = "https://github.com/BurningAl15";
  }

  render() {
    return (
      <React.Fragment>
        <div className="ContactMe-Container">
          <div className="ContactMe-Container-grouper">
            <h1 className="ContactMe-title">Contact Me</h1>
            <div className="ContactMe-Social-Set">
              <h2 className="ContactMe-subtitle">Want to work with me?</h2>
              <div className="social-element-container">
                {/* <a className="social-element" href={twitter}>
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
                </a> */}

                <SocialIcon className="social-element" url={this.twitter} />

                <SocialIcon className="social-element" url={this.facebook} />

                <SocialIcon className="social-element" url={this.instagram} />

                <SocialIcon className="social-element" url={this.linkedin} />

                <SocialIcon className="social-element" url={this.github} />

                <SocialIcon className="social-element" url={this.whatsapp} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactMe;
