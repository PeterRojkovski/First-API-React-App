import React from "react";
import HelloWorld from '../Components/HelloWorld.js'

function Home(){
    return(

            <div className="relative">
            <h1 className="font-bold text-2xl mb-3">Home</h1>
            <HelloWorld name="Peter"/>
            <p>
                To use the product feature of the website, add '/products/{product number}' to the url, where {product number} is any integer from 1 to 39!
            </p>
        </div>
        
    )
}
export default Home
