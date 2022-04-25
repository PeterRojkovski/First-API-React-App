import React from "react";
import HelloWorld from '../Components/HelloWorld.js'

function Home(){
    return(

            <div className="relative">
            <h1 className="font-bold text-2xl mb-3">Home</h1>
            <HelloWorld name="Peter"/>
        </div>
        
    )
}
export default Home