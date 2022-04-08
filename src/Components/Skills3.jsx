import Avatar from '../Img/avatar.png'
import '../Styles/Skills3.css'
import Perfil from '../Img/avatar.png'
import Productivo from '../Img/reloj.png'
import Equipo from '../Img/unido.png'
import Crecimiento from '../Img/crecimiento.png'
import ResDeProb from '../Img/resolucion-de-problemas.png'

export default function Skills3() {
    return (
    <div className="skills__container">

        <img className="img__cualidades" src={Perfil} alt="tools" />
        <p className="p__perfil">Perfil</p>
        <p className="perfil__description">Estas son algunas de mis cualidades</p>


       <div className="skills__item item__productivo">
                <h5 className="titulo__productivo">Productivo</h5>
                <img className="img__productivo" src={Productivo} alt="productivo" />
        </div>

        <div className="skills__item">
                <h5 className="titulo__equipo">Trabajo en equipo</h5>
                <img className="img__equipo" src={Equipo} alt="bootstrap" />
        </div>
        <div className="skills__item">
                <h5 className="titulo__problemas">Resolucion de problemas</h5>
                <img className="img__problemas" src={ResDeProb} alt="resdeprob" />
        </div>
        <div className="skills__item">
                <h5 className="titulo__aprender">Con ganas de seguir aprendiendo</h5>
                <img className="img__aprender" src={Crecimiento} alt="aprender"/>
        </div>
    </div>
    )
}
