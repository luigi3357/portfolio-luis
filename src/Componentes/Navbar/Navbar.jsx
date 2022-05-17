import { React, useState } from "react";
import Educacion from "../Educacion/Educacion";
import Home from "../Home/Home";
import Skills from "../skills/Skills";
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"
import "./Navbar.css"
import Experience from "../Experience/Experience";
import Project from "../Proyectos/Proyectos";




export default function NavBar() {
    const [home, setHome] = useState(false);
    const [skills, setSkills] = useState(false);
    const [project, setProject] = useState(true);
    const [educacion, setEducacion] = useState(false)
    const [dark, setDark] = useState(true);
    const [image, setImage] = useState(true);
    const [colors, setColors] = useState("blue");



    function handleHome() {
        setEducacion(false)
        setProject(false)
        setSkills(false)
        setHome(true)
    }
    function handleSkills(e) {
        e.preventDefault()
        setEducacion(false)
        setHome(false)
        setProject(false)
        setSkills(true)
    }
    function handleProjects(e) {
        e.preventDefault()
        setEducacion(false)
        setSkills(false)
        setProject(true)
    }
    function handleEducation(e) {
        e.preventDefault()
        setEducacion(true)
        setHome(false)
        setSkills(false)
        setProject(false)
    }
    function handleDark() {
        setDark(!dark)
        setImage(!image)
    }
    function handleColors(e) {
        setColors(e);
        console.log(colors, "colors")
    }
    console.log(colors)
    return (
        <div className={dark === true ? "container--dark" : "container--ligth"}>

            <header className="header">
                <div className="toggle">
                    <div className="switches" onClick={e => handleDark(e)}>
                        <div className="toggle-theme">
                            <img src={image===true?moon: sun} alt="icon theme" className="toggle-theme__icon" />
                            <p className="toggle-theme__text">{image===true ? "Dark Mode":"Light Mode"}</p>
                        </div>
                    </div>

                    <div className="colors2">
                        <div className="colors__item colors__item--blue"></div>
                        <div className="colors__item colors__item--green"></div>
                        <div className="colors__item colors__item--purple"></div>
                        <div className="colors__item colors__item--orange"></div>
                    </div>
                </div>

                <div className="items">

                    <div className="items--space" onClick={e => handleProjects(e)} >Proyectos</div>

                    <div className="items--space" onClick={e => handleSkills(e)} >Habilidades</div>

                    <div className="items--space" onClick={e => handleHome(e)} >Experiencia</div>

                    <div className="items--space" onClick={e => handleEducation(e)} >Educacion</div>


                </div>

                <div className="colors">
                    <div className="colors__item colors__item--blue" onClick={e => handleColors("blue")}></div>
                    <div className="colors__item colors__item--green" onClick={e => handleColors("green")}></div>
                    <div className="colors__item colors__item--purple" onClick={e => handleColors("purple")}></div>
                    <div className="colors__item colors__item--orange" onClick={e => handleColors("orange")}></div>
                </div>

                <div >

                </div>
            </header>

            <div className={colors === "green" ? "colors__item--green" : colors === "purple" ? "colors__item--purple" : colors === "orange" ? "colors__item--orange" : "colors__item--blue"}>

                <div className="container-home">
                    <div className="container-home2">
                        <Home />
                    </div>
                    <div className="column--right">
                        <div className={skills === true ? "notDisabled" : "disabled"}>
                            <Skills />
                        </div>

                        <div className={educacion === true ? "notDisabled" : "disabled"}>
                            <Educacion />
                        </div>

                        <div className={home === true ? "notDisabled" : "disabled"}>
                        <Experience />
                    </div>

                        <div className={project === true ? "notDisabled" : "disabled"}>
                        <Project />
                    </div>
                    
                    </div>

                    
                    {/* <div onClick={e => handleCv(e)} className="containerbutton"> <h3 className="buttonResumen">RESUMEN</h3></div> */}

                </div>





            </div>
        </div>
    )
}