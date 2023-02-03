import "./Search.css"
import React from 'react';
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList"

function Search() {
    const queryString = useLocation().search.toString().slice(1)
    const url = "https://rcpbook.onrender.com/recipes/search?" + queryString
    const { error, isPending, data } =  useFetch(url)
   
    return (
        <div>
            <h2 className="page-title">Recipes Including "{queryString}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}

export default Search;