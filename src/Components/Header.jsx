import React from 'react'
import Foto from '../Img/fotoentera.png'
import Informatico from '../Img/informatico.png'
import '../Styles/Header.css'
import Pdf from '../Img/PabloDanCV.pdf'

export default function Header() {
    return (
        <div>
            <div className="header__container">
                <div className="foto__container">
                    <img className="foto" src={Foto} alt="pablo-iriarte"></img>
                </div>      
                <div className="all__container">
                <div className="titulo__container">
                    <p className="header__hola">HOLA!</p>
                    <p className="header__soy">SOY <b>PABLO</b>,</p>
                    <p className="header__desarrollador">DESARROLLADOR WEB JUNIOR</p>
                </div>    
            </div>
            </div>
                <div className="informatico__container">
                    
                        <img className="informatico" src={Informatico} alt="informatico" />

                    <div className="text__container">
                        <p className="p__sobremi">Soy un amante de la informática, siempre en busca de mejorar mis capacidades. Me gusta el trabajo en equipo y siempre estoy dispuesto para enfrentar desafíos y aprender constantemente.</p>
                        <p className="p__cv">Descarga aqui mi 
                        <a className="curriculum" href={Pdf} download="Curriculum Pablo Iriarte"> curriculum</a>
                        </p>
                    </div>
                </div>
            </div>
                
        
    )
}
