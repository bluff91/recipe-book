import React from 'react';
import './RecipeList.css'
import { Link } from 'react-router-dom'

function RecipeList(props) {
    if (props.recipes.length ===0) {
        return <div className='error'>No recipes to load...</div>
    }
    return (
        <div className='recipe-list'>
            { props.recipes.map(item => (
                <div className='card' key={item._id}>
                    <h3>{item.title}</h3>
                    <p>{item.cookingTime} minutes to make.</p>
                    <div>{item.method.substring(0,100)}...</div>
                    <Link to={`/recipes/${item._id}`}>Cook this</Link>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;