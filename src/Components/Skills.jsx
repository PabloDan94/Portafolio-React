import React from 'react'
import Tools from '../Img/tool.png'
import Vscode from '../Img/visual__icon.ico'
import Git from '../Img/git__icon.ico'
import Bootstrap from '../Img/bootstrap__icon.ico'
import Firebase from '../Img/firebase__icon.ico'
import '../Styles/Skills.css'


export default function Skills() {
    return (
        
        <div className="skills__container">
            <img className="img__tools" src={Tools} alt="tools" />
            <p className="p__tools">Tools</p>
            <p className="tools__description">Estas son algunas de las herramientas que suelo utilizar a la hora de programar</p>
            <div className="skills__item">
                <h5 className="titulo__git">Github</h5>  
                <img className="img__git" src={Git} alt="git" />  
            </div>
            <div className="skills__item">
                <h5 className="titulo__vsc">Visual Studio Code</h5>
                <img className="img__vscode" src={Vscode} alt="vscode" />
            </div>
            <div className="skills__item">
                <h5 className="titulo__bootstrap">Bootstrap</h5>
                <img className="img__bootstrap" src={Bootstrap} alt="bootstrap" />
            </div>
            <div className="skills__item">
                <h5 className="titulo__firebase">Firebase</h5>
                <img className="img__firebase" src={Firebase} alt="firebase" />
            </div>
        </div>
        
    
    )
}
