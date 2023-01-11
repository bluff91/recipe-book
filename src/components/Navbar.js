import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar';



function Navbar() {
    
    return (
        <div className='navbar'>
            <nav>
                <Link to='/recipe-book'>
                    <h1>Recipe Book</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>Create Recipe</Link>
            </nav>    
        </div>
    );
}

export default Navbar;