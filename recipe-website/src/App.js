import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () =>{
  const APP_ID = "bd4e6bc4";
  const APP_KEY = "92af103e6c8de6672a6c4dc1f2bdc0fd";

  const [recipes, setRecipes] =useState([]);

  useEffect(()=>{

    getRecipes();
  },[]);
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data =await response.json();
       setRecipes(data.hits);
      // console.log(data.hits); u can chech data from here
  };
  return(
    <div className="App">
      <form  className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button">Search</button>
      </form>
      {recipes.map(recipe =>(
         <Recipe
         key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );



};

export default App;
