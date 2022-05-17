import React from "react";
import henry from "../../assets/logo.webp"
import Tecnologic from "../../assets/logo2.jpg"
import "./Experience.css"
export default function Experience(){
    return(
        <div class="card-experience" >
            <article class="card card--experience">
          <h2 class="card__title2">Experiencias</h2>
          <div class="experience">
            <img src={henry} alt="logo" class="experience__image"/>
            <div class="experience__info">
              <p class="experience__time">
                ENE 03 2022 - MAR 21 2022
              </p>
              <h3 class="experience__job">Teacher Asistant</h3>
              <p class="experience__description">
                Ayudante de bootcamp (TA) para alumnos de Desarrollo Full Stack <br/>
                •Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.<br/>
                • Orientar a los estudiantes en los primeros pasos de la cursada<br/>
                • Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming)<br/>
                • Proponer ideas para la mejora de los procesos del Bootcam</p>
            </div>
          </div>

          <div class="experience">
            <img src={Tecnologic} alt="logo" class="experience__image"/>
            <div class="experience__info">
              <p class="experience__time">
                2014 - Actualidad
              </p>
              <h3 class="experience__job">Tenico de PC y celulares</h3>
              <p class="experience__description">
                Trabajo de forma autonoma como tecnico en reparacion de celulares, pc,
                notebook y netbook brindando soporte a los clientes realizando
                mantenimiento, reparacion, instalaciones de sistemas operativos, armado
                de pc ,etc y respecto a los celulares tambien realize el mismo trabajo...</p>
            </div>
          </div>
        </article>
        </div>
    )
}