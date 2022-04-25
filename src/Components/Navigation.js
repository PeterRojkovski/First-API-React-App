import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import {
    Link
  } from "react-router-dom"
function Navigation(){
    var [showMenu, setShowMenu] = useState(false)


    var menu

    var menuMask

    var lines =
    <span className="text-xl">
    <FontAwesomeIcon 
        icon={faBars}
        onClick={()=> setShowMenu(!showMenu)} className="cursor-pointer"
        
    />
    </span>

    var lines2
    if (showMenu){
        


        menu = 
        <div
            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow font-bold py-3"

        >
            <h1 className="text-4xl">
                App Name    
            </h1>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block text-s "
                        onClick={()=>setShowMenu(false)}
                    >Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block text-s "
                        onClick={()=>setShowMenu(false)}
                    >About
                    </Link>
                </li>
            </ul>
        </div>

        menuMask = 
        <div
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50 cursor-pointer"

            onClick={() => setShowMenu(false)}
        >

        </div>


        lines2 =
        <span className="text-4xl fixed top-5 right-7">
            <FontAwesomeIcon 
            icon={faBars}
            onClick={()=> setShowMenu(!showMenu)} className="cursor-pointer "
        />
        </span>

        lines = null
        
    }

    return(
        <nav>
            
            {lines}

            {lines2}

            {menuMask}
            
            {menu}
            

        </nav>
    )
}

export default Navigation