import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/Button2/button2";
import Button2 from "../../components/Button/button";
import logo  from "../../assets/logo.png";
import i1 from "../../assets/lettuce.jpg";
import i2 from "../../assets/bife.png";
import i3 from "../../assets/arrroz.png";
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
            <h2 className="textBig">Torna-te um melhor cozinheiro hoje!</h2>
            <text className="textInfo">
              <p>O Cuoco vem promover a aprendizagem da culinária de uma forma totalmente interativa!</p>
              <p>Filtra receitas por ingredientes, vê as nossas ofertas na loja e partilha o teu progresso com amigos!</p>
              <p style={{fontWeight:"700"}}><span className="warn">AVISO:</span> Cozinhar pode ser viciante com o Cuoco!</p> 
            </text>
            <div className="buttonContainer">
              <Button click={() => navigate("/learn")} text={"Começa a aprender"} />
            </div>
          </div>
        </div>

        <div className="topDiv">
          <img src={logoText} alt="logoText" className="logoText"/>
        </div>

        <div className="tDiv">
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div style={{ flex: "1 1 30%", textAlign: "center", padding: "10px" }}>
              <h4 style={{ fontSize: "40px", fontWeight: "900", marginBottom: "10px" }}>Desafios Diários</h4>
              <img src={i2} alt="Step 1" style={{ maxWidth: "25rem", height: "auto" }} />
              <p style={{ fontSize: "22px", fontWeight: "600", textDecoration:"none"}}> 
                Experimenta  novas receitas todos os dias 
              </p>
            </div>

            <div style={{ flex: "1 1 30%", textAlign: "center", padding: "10px" }}>
              <h4 style={{ fontSize: "40px", fontWeight: "900", marginBottom: "10px" }}>Receitas Únicas</h4>
              <img src={i3} alt="Step 2" style={{ maxWidth: "25rem", height: "auto"}} />
              <p style={{ fontSize: "22px", fontWeight: "600" , textDecoration:"none"}}>
                Prepara pratos ajustados às tuas necessidades
              </p>
            </div>

            <div style={{ flex: "1 1 30%", textAlign: "center", padding: "10px" }}>
              <h4 style={{ fontSize: "40px", fontWeight: "900", marginBottom: "10px" }}>Partilha com Amigos</h4>
              <img src={i1} alt="Step 3" style={{ maxWidth: "25rem", height: "auto"}} />
              <p style={{ fontSize: "22px", fontWeight: "600", textDecoration:"none" }}>
                Exibe as tuas criações e experiências
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
