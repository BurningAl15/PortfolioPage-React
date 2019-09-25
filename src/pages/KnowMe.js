import React from "react";
import Navbar from "../components/Navbar";
import PortfolioElement from "../components/PortfolioElement";

import meImage from "../images/Aldhair Vera.jpg";

import "./styles/KnowMe.css";

class KnowMe extends React.Component{
    render(){
        return(
            <div>
                <Navbar />

                <div className="MainPage">
                    <h1 className="MainPage-title">
                        Know Me
                    </h1>

                    <div className="MainPage-content">
                        <img
                        className="MainPage-image"
                        src={meImage}
                        alt="Main Image"
                        width="300">
                        </img>
                        <div>
                            <h2>
                                About me:
                            </h2>
                            <p>
                                Hi, I'm Aldhair Vera, Computer Science student at Universidad Peruana de Ciencias Aplicadas, self teached Game Developer and currently learning Frontend.
                                <br/>
                                I got almost 2 years using unity3d to make videogames and interactive applications as programmer doing games for mobile and pc.
                                <br/>
                                Most of my experience is with 2d games like platformers, brawlers, infinite runners, some android interactive apps and more.
                                <br/>
                                I love videogames so i love to make them too, for this reason i will give to you a good quality, pulished game in no time.
                                <br/>
                                I look forward to hear from you!
                            </p>
                        </div>
                    </div>

                    <div className="MainPage-content">
                        <img
                        className="MainPage-image"
                        src={meImage}
                        alt="Main Image"
                        width="300">
                        </img>
                        <div>
                            <h2>
                                About me:
                            </h2>
                            <p>
                                Hi, I'm Aldhair Vera, Computer Science student at Universidad Peruana de Ciencias Aplicadas, self teached Game Developer and currently learning Frontend.
                                <br/>
                                I got almost 2 years using unity3d to make videogames and interactive applications as programmer doing games for mobile and pc.
                                <br/>
                                Most of my experience is with 2d games like platformers, brawlers, infinite runners, some android interactive apps and more.
                                <br/>
                                I love videogames so i love to make them too, for this reason i will give to you a good quality, pulished game in no time.
                                <br/>
                                I look forward to hear from you!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Portfolio">
                    <h1 className="MainPage-title">
                        Portfolio
                    </h1>
                    <div className="Portfolio-List">
                        <PortfolioElement
                        title="Lazy Love"
                        tech="Tecnología: Unity3D"
                        date="Fecha: 14/02/2019"
                        list_element1="- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019."
                        list_element2="- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño."
                        list_element3="- Actualmente clasificó para la sección de estudiantes del Lima Game Fest."
                        />

                        <PortfolioElement
                        title="Lazy Love"
                        tech="Tecnología: Unity3D"
                        date="Fecha: 14/02/2019"
                        list_element1="- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019."
                        list_element2="- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño."
                        list_element3="- Actualmente clasificó para la sección de estudiantes del Lima Game Fest."
                        />

                        <PortfolioElement
                        title="Lazy Love"
                        tech="Tecnología: Unity3D"
                        date="Fecha: 14/02/2019"
                        list_element1="- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019."
                        list_element2="- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño."
                        list_element3="- Actualmente clasificó para la sección de estudiantes del Lima Game Fest."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default KnowMe;