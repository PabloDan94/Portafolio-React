import React from 'react'
import Proyecto from './Proyecto'
import Portafolio from '../Img/portafolio.png'
import Reactflix from '../Img/reactflix.png'
import '../Styles/MisProyectos.css'
import FondoProyect from '../Img/fondo.png.png'
import FondoProyect2 from '../Img/proyecto3.png.png'


export default function MisProyectos() {
    return (
        <div className="proyectos__container">
            <img className="fondo__proyect2" src={FondoProyect2} alt="fondo_proyecto" />
            <h1 className="titulo__proyectos">Mis proyectos</h1>
            <Proyecto imagen={Portafolio} titulo="Portafolio" descripcion="Este es mi portafolio personal realizado con React.js"/>
            <Proyecto imagen={Reactflix} titulo="Reactflix" descripcion="Una pagina de peliculas realizada con React.js" link="https://reactmovies-pablodan.netlify.app"/>
            <img class="fondo__proyect" src={FondoProyect} alt="proyecto-img"></img>
        </div>
    )
}
