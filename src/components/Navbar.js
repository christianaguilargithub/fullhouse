import React, { useState } from "react";
import { Link } from "react-router-dom"
import fullhouse from "../components/images/fullhouse.png"
import '../App.css'
import '../index.css'

const Navbar = () =>{
    const [isOpen, setisOpen] = useState(false);
    function handleClick() {
        setisOpen(!isOpen);
      }

    return(
            <nav class="bg-gray-100 flex justify-between shadow-lg">
                <Link to ="/">
                    <img src={fullhouse}
                        alt="logo"
                        class={`lg:flex ${  isOpen ?
                        "hidden" :
                        "mt-2 pl-4 object-contain h-12 w-100 p-0.5"  } `} >
                    </img>
                </Link>
                <ul class ={`lg:flex ${  isOpen ? "block" : "hidden"  } `}>
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
                        <li class= {`lg:flex ${  isOpen ? "p-3" : "p-3 pr-12"  } `}>Contact Us</li>
                    </Link>
                </ul>
                <button type="button" class="block lg:hidden pl-3 pr-3 " onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path
                                fillRule="evenodd"
                                class="justify-center"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                )}
                            {!isOpen && (
                            <path
                                fillRule="evenodd"
                                class="justify-center"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                </button>
            </nav>
    )
}

export default Navbar;