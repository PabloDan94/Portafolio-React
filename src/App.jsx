import Header from "./Components/Header";
import './Styles/App.css'
import Skills from "./Components/Skills";
import Skills2 from "./Components/Skills2";
import Skills3 from "./Components/Skills3";
import Footer from './Components/Footer'
import MisProyectos from "./Components/MisProyectos";

function App() {
  return (
   
    <div className="all__container">
      <Header/>
      <div className="skills">
        <Skills/>
        <Skills2/>
        <Skills3/>
      </div>
      <MisProyectos/>
      <Footer/>

    </div>

  );
}

export default App;
