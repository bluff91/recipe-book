import "./Recipe.css"
import React from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from "../../hooks/useFetch";

function Recipe() {
    const { _id } = useParams()
    const url = `https://rcpbook.onrender.com/recipes/`+_id
    const {error, isPending, data} = useFetch(url)

    return (
        <div className="recipe">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && (
                <>
                    <h2 className="page-title">{data.title}</h2>
                    <p>Takes {data.cookingTime} minutes to make</p>
                    <ul>
                        {data.ingredients.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <p className="method">{data.method}</p>
                </>
            )    
            }
        </div>
    );
}

export default Recipe;