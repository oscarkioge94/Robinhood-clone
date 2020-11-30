import React from 'react'
import "./Header.css"
import logo from '../../assets/robinhood.svg'

export default function Header() {
    return (
        <div className="header__wrapper">
            {/* logo */}
        <div className="header__logo">
            <img  src={logo} width={25} alt="logo"/>
        </div>
        {/* search */}
        <div className="header__search">
            <div className="header__searchContainer">
                
            </div>
        </div>

        </div>
    )
}
