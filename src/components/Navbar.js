import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';


function Navbar() {
    const { color } = useTheme()
    return (
        <div className='navbar' style={{backgroundColor: color}}>
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