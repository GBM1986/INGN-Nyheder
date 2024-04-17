import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [click, setClick] = useState(false);


    const content = (
        <div className="absolute left-0 right-0 block w-full bg-white transition xl:hidden top-16 z-20">
            <ul className="p-20 text-xl text-center">
                <Link to="/">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Alle</li>
                </Link>
                <Link to="/indland">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Indland</li>
                </Link>
                <Link to="/udland">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Udland</li>
                </Link>
                <Link to="/teknologi">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Teknologi</li>
                </Link>
                <Link to="/sport">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Sport</li>
                </Link>
                <Link to="/politik">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Politik</li>
                </Link>
                <Link to="/samfund">
                    <li className="py-4 my-4 border-b cursor-pointer border-primary hover:border-primary">Samfund</li>
                </Link>
            </ul>
        </div>
    );


    return (
        <nav className="flex justify-between items-center px-8 w-full h-77 bg-white drop-shadow-lg py-6">
            <div className="flex items-center ">
                <span className="text-red-600 text-4xl font-righteous font-medium mx-14">INGN</span>
                <div className="hidden xl:flex space-x-8 text-lg ml-12">
                    <Link className="transition border-r-2 border-l-2 border-black pr-8 pl-8 cursor-pointer" to="/">Alle</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/indland">Indland</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/udland">Udland</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/teknologi">Teknologi</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/sport">Sport</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/politik">Politik</Link>
                    <Link className="transition border-r-2 border-black pr-8 cursor-pointer" to="/samfund">Samfund</Link>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
                {/* User icon component */}
                <div className="text-red-600"><NavLink to={`/login`}><FaUser /></NavLink></div>

                {/* Menu toggle button for mobile */}
                <button className="block transition xl:hidden text-primary" onClick={() => setClick(!click)} style={{ zIndex: 100 }}>
                    {click ? <FaTimes /> : <CiMenuBurger />}
                </button>
            </div>

            {/* Mobile menu content */}
            {click && content}
        </nav>
    );
};

export default Navbar;
