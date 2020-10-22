import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () =>{
  const APP_ID = "bd4e6bc4";
  const APP_KEY = "92af103e6c8de6672a6c4dc1f2bdc0fd";

  const [recipes, setRecipes] =useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(()=>{
    getRecipes();

  },[query]);
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data =await response.json();
       setRecipes(data.hits);
      // console.log(data.hits); u can chech data from here
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
        type="text"
         className="search-bar"
         onChange={updateSearch} 
         value={search} />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
         <Recipe
         key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );



};

export default App;
