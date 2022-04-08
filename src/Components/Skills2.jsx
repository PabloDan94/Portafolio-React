import Codigo from '../Img/code.png'
import Html from '../Img/html.png'
import Css from '../Img/css.png'
import React from '../Img/react.png'
import Js from '../Img/js.png'
import '../Styles/Skills2.css'


export default function Skills2() {
    return (
        
        <div className="skills__container">
            <img className="img__code" src={Codigo} alt="code" />
            <p className="p__programacion">Programacion</p>
            <p className="programacion__description">Estos son los lenguajes que utilizo para programar</p>
            <div className="skills__item">
                <h5 className="titulo__html">html</h5>  
                <img className="img__html" src={Html} alt="html" />  
            </div>
            <div className="skills__item">
                <h5 className="titulo__css">css</h5>
                <img className="img__css" src={Css} alt="css" />
            </div>
            <div className="skills__item">
                <h5 className="titulo__js">java script</h5>
                <img className="img__js" src={Js} alt="js"/>
            </div>
            <div className="skills__item">
                <h5 className="titulo__react">React</h5>
                <img className="img__react" src={React} alt="react" />
            </div>
        </div>
        
    
    )
}
