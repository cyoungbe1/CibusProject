import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <p>Serving Size: {recipe.serving_size}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
          <h4>Steps:</h4>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
