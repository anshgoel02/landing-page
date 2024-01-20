import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiBars3 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

function Navbar() {
    const [isNavHidden, setIsNavHidden] = useState(true);

    const handleClick = () => {
        setIsNavHidden(!isNavHidden);
    }

    const links = [
        { id: 1, name: "Home", goto: "home" },
        { id: 2, name: "Projects", goto: "projects" },
        { id: 3, name: "Social", goto: "social" },
        { id: 4, name: "Skills", goto: "skills" },
        { id: 5, name: "Contact", goto: "contact" }
    ];

    const renderedLinks = links.map((link) => {
        return (
            <li key={link.id} className="px-4 py-1 cursor-pointer text-white font-medium hover:bg-gray-800 hover:rounded-md hover:scale-105 duration-200">
                <Link to={link.goto} smooth duration={500}>
                    {link.name}
                </Link>
            </li>
        )
    });

    const renderedMidNavLinks = links.map((link) => {
        return (
            <li key={link.id} className="px-4 py-4 text-white cursor-pointer text-4xl hover:bg-gray-900 hover:rounded-md hover:scale-105 duration-200">
                <Link to={link.goto} smooth duration={500}>
                    {link.name}
                </Link>
            </li>
        )
    })


    return (
        <nav className="bg-gray-900 p-4 flex justify-between items-center ">
            <div className="z-10">
                <h1 className="logo text-white text-5xl">Ansh</h1>
            </div>
            <ul className="hidden md:flex">
                {renderedLinks}
            </ul>
            <div onClick={handleClick} className="md:hidden z-10">
                {
                    isNavHidden
                        ? <HiBars3 size={30} className="text-gray-500 hover:text-white hover:scale-105 duration-200 cursor-pointer"></HiBars3>
                        : <IoIosClose size={50} className="text-gray-500 cursor-pointer hover:text-white duration-200"></IoIosClose>
                }
            </div>
            {
                !isNavHidden && <ul className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black absolute w-full h-full left-0 top-0">
                    {renderedMidNavLinks}
                </ul>
            }
        </nav>
    );
}

export default Navbar;