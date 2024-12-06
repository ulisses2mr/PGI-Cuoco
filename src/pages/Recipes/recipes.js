import { useNavigate } from "react-router-dom";
import  logo  from "../../assets/logo.png";
import Navbar from "../../components/Navbar/navbar";
//import Button from "../../../components/Button/button";
import "./recipes.css";



const Rep = ({ x, y, img_node = logo, onClick, blur = false }) => {
  return (
    <div className="cardGoof" >
      <img onClick={onClick} src={img_node} alt="Node"/>
    </div>
  );
};

export default function Recipes() {

  return (
    <>
      <div className="recipes">
        <Navbar></Navbar>
        <div className="allReps">


        </div>
      </div>
    </>
  );
}