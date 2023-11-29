import React from "react";

function RecipeList({ recipes, setRecipes }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const deleteRecipe = function ({ target }) {
    const filteredRecipes = recipes.filter((recipe, index) => index.toString() !== target.id)
    setRecipes([ ...filteredRecipes ])
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { recipes.map((recipe, index) => {
          return (
            <tr key={index}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} /></td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button type="button" onClick={deleteRecipe} id={index}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
