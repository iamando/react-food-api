import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./components/Recipe";

const dotenv = require("dotenv");

dotenv.config();

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    console.warn(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div>
        <div className="header-form">
          <div className="cont-logo">
            <a href="/" className="logo">
              FOOD'S COURT
            </a>
          </div>
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          <div className="cont-link">
            <a href="#" className="link">
              Eat balanced
            </a>
          </div>
        </div>
        <div className="container">
          {recipes.slice(0, 9).map((recipe) => (
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              source={recipe.recipe.source}
              url={recipe.recipe.url}
              healths={recipe.recipe.healthLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
