import React from 'react'
import Logo from '../assets/images/logo.png'
import '../index.css'
export default function Navbar(){
    return(
            <nav>
                <img className="navLogo" src={Logo}/>
            </nav>
    )
}