import React from "react";
import HelloWorld from '../Components/HelloWorld.js'

function Home(){
    return(

            <div className="relative">
            <h1 className="font-bold text-2xl mb-3">Home</h1>
            <HelloWorld name="User"/>
            <p>
                To use the product feature of the website, add '/products/(productnumber)' to the url, where (productnumber) is any integer from 1 to 39!
            </p>
        </div>
        
    )
}
export default Home
