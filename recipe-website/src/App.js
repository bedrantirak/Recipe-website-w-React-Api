import React,{useEffect,useState} from 'react';
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
  };
  return(
    <div className="App">
      <form  className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button">Search</button>
      </form>
    </div>
  );



};

export default App;
