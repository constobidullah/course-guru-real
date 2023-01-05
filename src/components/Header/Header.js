import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex items-center justify-around h-14 bg-slate-400'>

            <h2 className='text-4xl text-amber-400 font-bold'>Course Guru</h2>

            <nav className='header-link'>
                <Link to="/home">Home</Link>
                <Link to="/statics">Statics</Link>
                <Link to="/blog">Blog</Link>
            </nav>

        </div>
    );
};

export default Header;