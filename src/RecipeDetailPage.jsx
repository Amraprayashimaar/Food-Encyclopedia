import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams(); // get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className='recipe'>
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "300px" }} />
      
      <h3>Category: {recipe.strCategory}</h3>
      <h4>Area: {recipe.strArea}</h4>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>

      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          return ingredient ? <li key={i}>{ingredient} - {measure}</li> : null;
        })}
      </ul>
    </div>
    </div>
  );
};

export default RecipeDetailPage;
