import React from "react";
import Navigation from './Navigation.js'

function Header(){
    return(
        <header className="border-b p-3 flex justify-between items-center shadow-2xl">
            <span className="font-bold text-4xl">
                The Store of all Stores
            </span>
                
            <Navigation/>
        </header>
    )
}

export default Header
