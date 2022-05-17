import { React, useState } from "react";
import luis from "../../assets/luis.jpg"
import("./Home.css")


export default function Home() {

    return (
        <article class="card card--profile">
          <div class="card__image-container">
            <img className="card__image--img"src={luis}alt="profile"/>
          </div>
          <div class="card__header">
            <h2 class="card__title no-margin">Luis Cataldo</h2>
            <p class="card__subtitle no-margin">Full Stack Developer</p>
          </div>
          <div class="car__body">
            <div class="card__link">
              <i class="fas fa-envelope icon"></i>
              <a href="mailto:Luigi33579@gmail.com">Luigi33579@gmail.com</a><br/>
              <i class="fas fa-phone-alt icon"></i>
              <a href="tel: +542612598338">+542612598338</a><br/>
              <i class="fab fa-linkedin icon"></i>
              <a href="https://www.linkedin.com/in/luis-cataldo/">https://www.linkedin.com/in/luis-cataldo/</a><br/>
              <i class="fa-brands fa-github icon"></i>
              <a href="https://github.com/luigi3357">https://github.com/luigi3357</a>   
            </div>
            <p class="card__text">
              Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales.
              Siempre tengo la mejor disposición para la realización de mis labores. <br/>
              Busco un puesto de trabajo desafiante donde pueda aprender nuevas tecnologías y hacer crecer mis conocimientos profesionales.<br/>
              Mi proposito es poder dominar el desarrollo web con buenas practicas y a la perfeccion para luego avanzar a otro sector como el desarrollo de aplicaciones o de video juegos. En definitiva poder desarrollarme profesionalmente en todo lo que es el desarrollo.
            </p>
          </div>
        </article>
    )
}

{/* <div>
            <div className="containerHome">
                <h1>Luis Cataldo</h1>
                <h3>Full Stack Developer</h3>
                <img src="" alt="Full stack developer enfocado al back-end" />
                <h4>Sobre Mi:</h4>
                <div className="containerAllP">
                    <div className="containerP">
                        <p>
                            Soy una persona proactiva, organizada
                            y responsable, con buenas relaciones
                            interpersonales.
                        </p>
                        <p>
                            Siempre tengo la mejor disposición para la
                            realización de mis labores. Busco un
                            puesto de trabajo desafiante donde pueda
                            aprender nuevas tecnologías y hacer
                            crecer mis conocimientos profesionales.
                        </p>
                    </div>
                </div>

                <h2 className="containerimg">Ciudad: <img className="containerimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png" alt="Argentina" /></h2>
            </div>
        </div> */}