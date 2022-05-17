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
import "./Skills.css"
export default function Skills() {
    return (
        <div classNameName="containerSkill">
            <article className="card-skills">
                <h2 className="card__title">Front End</h2>
                <small>Años de experiencia</small>
                <div className="skills"></div>
                <div className="skills__header">
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>
                <div className="skills">
                    <div className="skills__item">
                        <p className="skills_tech">HTML</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={HTML} alt="not found" />
                        <div className="skills__bar skills__bar--80"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">CSS</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={css} alt="not found" />
                        <div className="skills__bar skills__bar--80"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">JavaScript</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={js} alt="not found" />
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">React</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={react} alt="not found" />
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Redux</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={redux} alt="not found" />
                        <div className="skills__bar skills__bar--50"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Bootstrap</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={bootstrap} alt="not found" />
                        <div className="skills__bar skills__bar--30"></div>
                    </div>
                </div>
            </article>

            <article className="card-skills">
                <h2 className="card__title">Back End</h2>
                <small>Años de experiencia</small>
                <div className="skills"></div>
                <div className="skills__header">
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>
                <div className="skills">
                    <div className="skills__item">
                        <p className="skills_tech">Node.Js</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={node} alt="not found" />
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Express</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={express} alt="not found" />
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Sequelize</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={sequelize} alt="not found" />
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">PostgresSQL</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={postgress} alt="not found" />
                        <div className="skills__bar skills__bar--60"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Firebase</p>
                        <div className="skills__bar skills__bar--10"></div>
                    </div>

                </div>
            </article>

            <article className="card-skills">
                <h2 className="card__title">Otros</h2>
                <small>Años de experiencia</small>
                <div className="skills"></div>
                <div className="skills__header">
                    <span className="skills__start-level">0</span>
                    <span className="skills__start-level">2</span>
                </div>

                <div className="skills">
                    <div className="skills__item">
                        <p className="skills_tech">Visual Studio</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={visual} alt="not found" />
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                    <div className="skills__item">
                        <p className="skills_tech">Git</p>
                        <img id="toggle-icon" className="toggle-theme__icon" src={git} alt="not found" />
                        <div className="skills__bar skills__bar--70"></div>
                    </div>

                </div>
            </article>
        </div>
    )
}