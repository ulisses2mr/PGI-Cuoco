import Navbar from "../../components/Navbar/navbar";
import "./disclaimer.css";
import logo from "../../assets/logo.png";


export default function Disclaimer() {

  return (
    <>
      <Navbar />
      <div className="disclaimer">
        <img src={logo} alt="logo2" className="logo2"/>
        <text className="textInfoDisc">
          Aviso legal: os conteúdos constantes website foram realizados por 
          alunos no âmbito de uma disciplina - Processos de Gestão e Inovação - do 3º ano da licenciatura de Engenharia Informática da 
          Faculdade de Ciências e Tecnologia da Universidade de  Coimbra (FCTUC), pelo que a FCTUC não  se responsabiliza pelo seu conteúdo.
        </text>
        <img src={logo} alt="logo2" className="logo2"/>
      </div>
    </>
  );
}
