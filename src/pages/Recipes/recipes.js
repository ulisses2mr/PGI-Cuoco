import { useNavigate } from "react-router-dom";
import  logo  from "../../assets/logo.png";
import Navbar from "../../components/Navbar/navbar";
//import Button from "../../../components/Button/button";
import "./recipes.css";

export default function Recipes() {
  const navigate = useNavigate();

  return (
    <>
      <div className="recipes">
        <Navbar></Navbar>
        <h1>Display de Receitas como lista?</h1>
      </div>
    </>
  );
}