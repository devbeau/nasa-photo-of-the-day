import React from 'react';
import Nav from './Nav';
import './Header.css';

export default function Header () {  

    return (
        <header className='header'>
            <h1 className="header-text">NASA Astronomy Picture of the Day</h1>
            <Nav/>
        </header>
    )
}