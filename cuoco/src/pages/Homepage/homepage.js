import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/Button/button";
import logo  from "../../assets/logo.png";
import logoText from "../../assets/Group(3).png";
import "./homepage.css";

import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="homepage">
        
      <div className="botDiv">
          <div className="sideImage">
            <img src={logo} alt="logo" className="logoImage"/>
          </div>
          <div className="sideInfo">
            <h1>Descobre novos pratos todos os dias</h1>
            <text className="textInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus non turpis vitae pellentesque</text>
            <Button click={() => navigate("/learn")} text={"Começa a aprender"}></Button>
          </div>
        </div>

        <div className="topDiv">
          <img src={logoText} alt="logoText" className="logoText"/>
        </div>

        <div className="botDiv">
          <div className="sideInfo">
            <h1>Descobre novos pratos todos os dias</h1>
            <text className="textInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus non turpis vitae pellentesque</text>
          </div>
        </div>
        

        <div className="topDiv">
          <img src={logoText} alt="logoText" className="logoText"/>
        </div>
      </div>
    </>
  );
}
