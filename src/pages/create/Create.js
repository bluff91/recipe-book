import "./Create.css"
import React, { useState } from 'react';

function Create(props) {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [time, setTime] = useState("")
    

    const addRecipe = (e) => {
        e.preventDefault()
        console.log(time,method,title)

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

                {/* // ingredients here */}

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