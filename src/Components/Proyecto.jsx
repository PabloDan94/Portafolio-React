import React from 'react'
import '../Styles/Proyecto.css'

export default function Proyecto(props) {

    return (
        <div className="card__proyecto">
            <a href={props.link}>
            <img className="card__img" src={props.imagen} alt="img__proyect" />
            </a>
            <div className="card__cuerpo">
                <h5 className="card__titulo">{props.titulo}</h5>
                <p className="card__descripcion">{props.descripcion}</p>
            </div>
        </div>
    )
}
