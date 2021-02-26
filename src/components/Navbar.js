import React from "react";
import { Link } from "react-router-dom"

import fullhouse from "../components/images/fullhouse.png"


import '../App.css'
import '../index.css'


const Navbar = () =>{
    return(
            <nav class="bg-gray-100 flex justify-between shadow-lg">
                <Link to ="/">
                    <img src={fullhouse} alt="logo" class="pl-4 object-contain h-12 w-100 p-0.5"></img>
                </Link>
                <ul class ="flex ">
                     <Link to ="/">
                        <li class="p-3">Home</li>
                    </Link>
                    <Link to ="/About">
                        <li class="p-3">About</li>
                    </Link>
                    <Link to="/Products">
                        <li class="p-3">Products</li>
                    </Link>
                    <Link to ="/Services">
                        <li class="p-3">Services</li>
                    </Link>
                    <Link to = "/ContactUs">
                        <li class="p-3 pr-12">Contact Us</li>
                    </Link>
                </ul>
            </nav>
    )
}

export default Navbar;