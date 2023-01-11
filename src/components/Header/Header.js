import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex items-center justify-around h-14 bg-slate-400'>

            <h2 className='text-4xl text-amber-400 font-bold'>Course Guru</h2>

            <nav className='header-link'>
                <NavLink to="/home" className={({ isActive }) => isActive ? "headerlink" : undefined}>Home</NavLink>
                <NavLink to="/statics" className={({ isActive }) => isActive ? "headerlink" : undefined}>Statics</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "headerlink" : undefined}>Blog</NavLink>
            </nav>

        </div>
    );
};

export default Header;