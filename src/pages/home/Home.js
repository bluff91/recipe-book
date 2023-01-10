import "./Home.css"
import React from 'react';
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

function Home() {
    const {data, pending, error} = useFetch('https://rcpbook.onrender.com/recipes')
    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {pending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}

export default Home;