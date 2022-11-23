import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className='navbar'>
            <nav>
                <Link to='/'>
                    <h1>Recipe Book</h1>
                </Link>
                <Link to='/create'>Create Recipe</Link>
            </nav>    
        </div>
    );
}

export default Navbar;