import React, { useState } from "react";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookinTime: 0,
    userOwner: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={""}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={""}
          onChange={"handleChange"}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={"recipe.description"}
          onChange={"handleChange"}></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {"recipe.ingredients".map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => "handleIngredientChange"(event, index)}
          />
        ))}
        <button type="button" onClick={"handleAddIngredient"}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={"recipe".instructions}
          onChange={"handleChange"}></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={"recipe".imageUrl}
          onChange={"handleChange"}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={"recipe".cookingTime}
          onChange={"handleChange"}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
