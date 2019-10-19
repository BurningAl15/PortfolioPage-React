import React from "react";

import meImage from "../images/Aldhair Vera.jpg";
import PortfolioElementList from "../components/PorfolioElementList";

import ExperienceElementList from "../components/ExperienceElementList";

// import boomware from "../images/BoomwareLogo.png";
import "./styles/KnowMe.css";

class KnowMe extends React.Component{
    portfolioData={
        data:[
            {
                id:1,
                title:'Lazy Love',
                tech:'Tecnología: Unity3D',
                date:'Fecha: 14/02/2019',
                list_element1:'- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019.',
                list_element2:'- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño.',
                list_element3:'- Actualmente clasificó para la sección de estudiantes del Lima Game Fest.',
            },
            {
                id:2,
                title:'Lazy __ Love',
                tech:'Tecnología: Unity3D',
                date:'Fecha: 14/02/2019',
                list_element1:'- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019.',
                list_element2:'- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño.',
                list_element3:'- Actualmente clasificó para la sección de estudiantes del Lima Game Fest.',
            },
            {
                id:3,
                title:'Lazy __ Love __',
                tech:'Tecnología: Unity3D',
                date:'Fecha: 14/02/2019',
                list_element1:'- Este videojuego tuvo 21 días de desarrollo y salió para el 14 de febredo del 2019.',
                list_element2:'- La finalidad de este juego era crear un videojuego hipercasual con mecánicas divertidas que simulara un juego que me gustaba mucho cuando era pequeño.',
                list_element3:'- Actualmente clasificó para la sección de estudiantes del Lima Game Fest.',
            },
        ]
    }

    experienceData={
        data:[
            {
                id:1,
                iconDirection:'BoomwareLogo.png',
                name:'Boomware Technologies S.A.C.',
                position:'Jr. Game Programmer',
                info1:'Programación de simulador de billar.',
                info2:'Programación del sistema de shopping del juego Cinema Panic 2'
            },
            {
                id:2,
                iconDirection:'BLUEBAYMOBLogo.png',
                name:'BLUEBAYMOB LLC.',
                position:'Gameplay Programmer',
                info1:'Programación del videojuego móvil Rush Cube.',
                info2:'Programación del videojuego móvil Dash Ball.'
            },
            {
                id:3,
                iconDirection:'AmazingGamesLogo.png',
                name:'Amazing Games Studio',
                position:'Game Programmer',
                info1:'Programación de un videojuego educativo para la plataforma Legends of Learning.',
                info2:' '
            },
            {
                id:4,
                iconDirection:'DroptekLogo.svg',
                name:'Droptek S.A.C.',
                position:'Game Developer',
                info1:'Programación de simulador de billar.',
                info2:'Programación del sistema de shopping del juego Cinema Panic 2'
            },
            {
                id:5,
                iconDirection:'InartLogo.png',
                name:'Insomnia Art Studio S.A.C.',
                position:'Gameplay Programmer / Game Designer',
                info1:'Diseño y Programación del videojuego móvil Pig Year Food Fight.',
                info2:'Diseño y Programación del videojuego móvil Lazy Love.'
            },
        ]
    }

    render(){
        return(
            <React.Fragment>
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
                            <h2 className="MainPage-AboutMe">
                                About me:
                            </h2>
                            <p className="MainPage-description">
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
                    <PortfolioElementList portfolioElements={this.portfolioData.data}/>
                </div>

                <div className="Experience">
                    <h1 className="MainPage-title">
                        Experience
                    </h1>
                    <ExperienceElementList experienceElements={this.experienceData.data}/>
                </div>
            </React.Fragment>
        );
    }
}

export default KnowMe;