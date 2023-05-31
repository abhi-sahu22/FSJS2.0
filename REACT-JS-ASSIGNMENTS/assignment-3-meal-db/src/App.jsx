import { useState } from "react";
import './App.css'
 const App = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [showError, setShowError] = useState(false);
   const handleChange = (e) => {
    setQuery(e.target.value);
    setShowError(false);
  }
   const handleSearch = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setMeals(data.meals || []);
    setShowError(data.meals === null);
    setQuery("");
  };
   return (
    <div className="container" style={{maxWidth: "600px"}}>
      <h1>Meal Search App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <p>Kindly, search a cuisine that is present in the database like paneer or burger to see the dish picture and description.</p>
      {showError && <p>No results found. Please try something else.</p>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 export default App;