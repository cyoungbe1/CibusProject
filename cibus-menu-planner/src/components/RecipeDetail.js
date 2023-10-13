import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    // Handle the case when the recipe is not available
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Serving Size: {recipe.serving_size}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
