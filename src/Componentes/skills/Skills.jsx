import React from "react";
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import HTML from "../../assets/html.png"
import css from "../../assets/css.png"
import bootstrap from "../../assets/bootstrap.png"
import node from "../../assets/nodejs.png"
import express from "../../assets/express.png"
import sequelize from "../../assets/sequelize.png"
import postgress from "../../assets/postgresql.png"
import visual from "../../assets/vscode.png"
import git from "../../assets/git.png"
import firebase from "../../assets/firebase.jpg"
import java from "../../assets/java.png"

import "./Skills.css"
export default function Skills() {
    return (
        <div classNameName="containerSkill">
            <article className="card-skills">
                <h2 className="card__title">Front End</h2>
                
                <div className="skills"></div>
                <div className="skills__header">
                <small>Años de experiencia</small>
                </div>
                <div className="skills__header">
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>
                <div className="skills">
                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={HTML} alt="not found" />
                        <p className="skills_tech">HTML</p>
                        <div className="skills__bar skills__bar--80"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={css} alt="not found" />
                        <p className="skills_tech">CSS</p>
                        <div className="skills__bar skills__bar--80"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={js} alt="not found" />
                        <p className="skills_tech">JavaScript</p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={react} alt="not found" />
                        <p className="skills_tech">React</p>
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={redux} alt="not found" />
                        <p className="skills_tech">Redux</p>
                        <div className="skills__bar skills__bar--50"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={bootstrap} alt="not found" />
                        <p className="skills_tech">Bootstrap</p>
                        <div className="skills__bar skills__bar--30"></div>
                    </div>
                </div>
            </article>

            <article className="card-skills">
                <h2 className="card__title">Back End</h2>
               
                <div className="skills"></div>
                <div className="skills__header">
                <small>Años de experiencia</small>
                </div>
                <div className="skills__header">                    
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>
                <div className="skills">
                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={node} alt="not found" />
                        <p className="skills_tech">Node.Js</p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                    <img id="toggle-icon" className="toggle-theme__icon" src={express} alt="not found" />
                        <p className="skills_tech">Express</p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={sequelize} alt="not found" />
                        <p className="skills_tech">Sequelize</p>
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={postgress} alt="not found" />
                        <p className="skills_tech">PostgresSQL</p>
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={firebase} alt="not found" />
                        <p className="skills_tech">Firebase</p>
                        <div className="skills__bar skills__bar--10"></div>
                    </div>

                </div>
            </article>

            <article className="card-skills">
                <h2 className="card__title">Otros</h2>
                <div className="skills"></div>
                <div className="skills__header">
                <small>Años de experiencia</small>
                </div>
                <div className="skills__header">
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>

                <div className="skills">
                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={visual} alt="not found" />
                        <p className="skills_tech">Visual Studio</p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={git} alt="not found" />
                        <p className="skills_tech">Git</p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <img id="toggle-icon" className="toggle-theme__icon" src={java} alt="not found" />
                        <p className="skills_tech">Java (NetBeans) </p>
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                </div>
            </article>
        </div>
    )
}