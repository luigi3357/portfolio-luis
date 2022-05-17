import React from "react";
import LibraryDogs from "../../assets/LibraryDogs.jpg"
import petcare from "../../assets/PetCare.jpg"

import "./Proyectos.css"
export default function Project() {
    return (
        <div >
            <article className="card-skills card--project">
          <div className="card__image-container">
            <img src={LibraryDogs} alt="Landing page" className="card__image2"/>
          </div>

          <div className="project">
            <div className="project__tags">
              <span className="project__tag">JavaScript</span>
              <span className="project__tag">React</span>
              <span className="project__tag">Redux</span>              
            </div>
            <div className="project__tags">
              
              <span className="project__tag">CSS</span>
              <span className="project__tag">NodeJS</span>
              <span className="project__tag">Express</span>
              
            </div>
            <div className="project__tags">
              
             
              <span className="project__tag">Sequelize</span>
              <span className="project__tag">PostgreSQL</span>
            </div>

            <h2 className="card__title">Library Dogs</h2>
            <p className="card__text">Library Dogs  Es una SPA (Single Page Application) sobre razas de perros. Se usa la API externa (https://thedogapi.com). desarrollada para las practicas del Bootcamp Henry. </p>
            <p className="card__text">Características: <br/>
              🔹 Paginado donde se muestran 9 razas por página<br/>
              🔹 Opciones de filtrado y ordenamiento<br/>
              🔹 Vista de detalles de cada raza<br/>
              🔹 Buscador de razas<br/>
              🔹 Posibilidad de crear y eliminar nuevas razas.<br/>
              </p>

            <div className="buttons">
              <a href="https://library-dogs.vercel.app/Home" target="_blank" className="button button--primary">Demo</a>
              <a href="https://github.com/luigi3357/pi-Dogs" target="_blank" className="button button--ghost">Codigo</a>
            </div>
          </div>
          
        </article>

        <article className="card-skills card--project">
          <div className="card__image-container">
            <img src={petcare} alt="Landing page" className="card__image2"/>
          </div>

          <div className="project">
            <div className="project__tags">
              <span className="project__tag">JavaScript</span>
              <span className="project__tag">React</span>
              <span className="project__tag">Redux</span>
                     
              
            </div>
            <div className="project__tags">          
            <span className="project__tag">Express</span>
              <span className="project__tag">Sequelize</span>
              <span className="project__tag">Auth0</span><br/>    
             

            </div>
            <div className="project__tags">         
               
              <span className="project__tag">Nodemailer</span>              
            <span className="project__tag">PostgreSQL</span>
              <span className="project__tag">Mercado Pago</span>

            </div>
            
            <div className="project__tags">
              
              <span className="project__tag">CSS</span>
              <span className="project__tag">NodeJS</span>
              
              
            </div>

            <h2 className="card__title">Pet Care</h2>
            <p className="card__text">Es una pagina web que esta destinada a conectar personas que
              ofrecen servicio de cuidado de mascotas con personas que requieran
              ese mismo servicio.</p>
              <p className="card__text">En este proyecto  trabaje mas enfocado al Back-End
                donde trabajamos con Nodejs, PostgreSQL, Exprés, Sequelize. Además
                ayude en la resolución de problemas y componentes en el front-end. </p>                         
                
            <div className="buttons">
              <a href="https://library-dogs.vercel.app/Home" target="_blank" className="button button--primary">Demo</a>
              <a href="https://github.com/luigi3357/pi-Dogs" target="_blank" className="button button--ghost">Codigo</a>
            </div>
          </div>
          
        </article>
            </div>
             
    )
}