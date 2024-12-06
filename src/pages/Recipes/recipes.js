import logo from "../../assets/logo3.png";
import Navbar from "../../components/Navbar/navbar";
import Popup from "../../components/Popup/popup";
import recipes from "../Learn/recipes_list";
import { useState } from "react";
import "./recipes.css";

const Rep = ({ img_node = logo, title, onClick }) => {
  return (
    <div
      className="cardGoof"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        width:"35rem",
      }}
      onClick={onClick}
    >
      <img src={img_node} alt="Recipe" style={{ height: "4rem", marginRight: "1rem" }} />
      <h2>{title}</h2>
    </div>
  );
};

export default function Recipes() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [rec, setRec] = useState(null);
  const [titleSearch, setTitleSearch] = useState("");
  const [ingredientSearch, setIngredientSearch] = useState("");

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const showPopup = (id) => {
    const recipe = recipes.find((r) => r.id === id);
    setRec(recipe);
    setPopupVisible(true);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesTitle = recipe.title.toLowerCase().includes(titleSearch.toLowerCase());
    const matchesIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(ingredientSearch.toLowerCase())
    );
    return matchesTitle && matchesIngredients;
  });

  return (
    <>
      <Navbar />
      <div style={{ margin: "1rem auto", textAlign: "center" }}>
      <div style={{display:"flex", justifyContent:"space around",margin:"auto", width:"50%", }}>
        <input
          style={{ width: "15%", padding: "0.5rem", margin: "0.5rem auto", borderRadius: "5px", border: "4px solid black",}}
          placeholder="Nome da Receita"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        />
        
        <input  style={{ width: "15%", padding: "0.5rem", margin: "0.5rem auto", borderRadius: "5px", border: "4px solid black" }}
          placeholder="Ingredientes"
          value={ingredientSearch}
          onChange={(e) => setIngredientSearch(e.target.value)}
        />
      </div>
      </div>
      <div className="recipes" style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>

        <Popup isPopupVisible={isPopupVisible} setPopupVisible={setPopupVisible} hidePopup={hidePopup} recipe={rec} open={false} />

        <div className="allReps" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredRecipes.map((recipe) => (
            <Rep
              key={recipe.id}
              title={recipe.title}
              onClick={() => showPopup(recipe.id)}
            />
          ))}
        </div>
        {filteredRecipes.length === 0 && <p></p>}
      </div>
    </>
  );
}
