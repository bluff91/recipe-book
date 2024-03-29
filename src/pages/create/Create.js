import "./Create.css"
import React, { useEffect, useRef, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [time, setTime] = useState("")
    const [newIngredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const navigate = useNavigate()

    const { postData, data } = useFetch('https://rcpbook.onrender.com/recipes', 'POST')

    useEffect(() => {
        if (data) {
            navigate('/recipe-book')
        }
    }, [data, navigate])
    

    const addRecipe = (e) => {
        e.preventDefault()
        postData({title, ingredients, method, cookingTime: time})  
    }

    const handleClick = (e) => { 
        const ingredient = newIngredient.trim()
        if (ingredient && !ingredients.includes(ingredient)){
            setIngredients((prevState) => [...prevState, ingredient])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    } 
   

    return (
        <div className="create">
            <h2 className="page-title">Add a new Recipe</h2>
            <form onSubmit={addRecipe}>
                <label htmlFor="title">Recipe Title:</label>
                <input 
                    type='text' 
                    id='title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    required
                >
                </input>

                <label htmlFor='ingredients'>Add Recipe Ingredient</label>
                <div className="ingredients">
                    <input 
                        type='text' 
                        onChange={(e) => setNewIngredient(e.target.value)} 
                        value={newIngredient} 
                        ref= {ingredientInput} 
                    >
                    </input>
                    <button type='button'className="add-ingredient-btn" onClick={handleClick}>Add</button>
                </div>
                {ingredients && <p className="ingredients-list" >Current ingredients:  
                {ingredients.map(item => <span key={item}> {item}</span>)}</p>}

                <label htmlFor="method">Cooking Method:</label>
                <textarea  
                    id='method' 
                    value={method} 
                    onChange={(e) => setMethod(e.target.value)}
                    required
                >
                </textarea>

                <label htmlFor="time">Cooking Time(minutes):</label>
                <input 
                    type='number' 
                    id='time' 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                </input>

                <button className="btn">Create Recipe</button>
           </form> 
        </div>
    );
}

export default Create;