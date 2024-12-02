import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import logoText from "../../assets/Group(6).png";
import logo3 from "../../assets/logo3.png"
import Button from "../Button/button";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className={"nav"}>
        
        <div className="NAVlogo">
          <img src={logoText} alt={"Cuoco"} onClick={() => navigate("/home")} className="logoNav"/>
        </div>

        <div className={"links"}>
          <li className={"link"}>
            <Link to={"/home"}>Home</Link>
          </li>
          <li className={"link"}>
            <Link to={"/recipes"}>Receitas</Link>
          </li>
          <li className={"link"}>
            <Link to={"/disclaimer"}>Disclaimer</Link>
          </li>

          <Button click={() => navigate("/learn") } text={"Aprender"} ></Button>

        </div>
        <img src={logo3} alt={"Cuoco"} className="logoNav2"/>

      </nav>
    </div>
  );
}


