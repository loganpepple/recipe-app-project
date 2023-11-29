import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    rating: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = function ({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleCreate = function (event) {
    event.preventDefault();
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      rating: formData.rating,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    };
    setRecipes([...recipes, newRecipe]);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleCreate}>
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
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                id="photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
