import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/posts/js/react'>Dynamic route</Link>
            </li>
            <li>
                <Link to='/login'>LogIn</Link>
            </li>
        </ul>
    </nav>
  )
}
