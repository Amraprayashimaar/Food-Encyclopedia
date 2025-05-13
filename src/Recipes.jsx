import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Recipes.css'; 

const Recipes = () => {
  const { cuisine } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`);
        setRecipes(response.data.meals);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [cuisine]);

  return (
    <div className='mainPage'>
    <div className="recipes-container">
      <h2>{cuisine.toUpperCase()} Recipes</h2>
      <div className="recipe-grid">
        {recipes && recipes.map((meal) => (
          <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className="recipe-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Recipes;
