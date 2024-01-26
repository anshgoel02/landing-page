import React from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";


const SkillDetail = ({ skill, onClose }) => {
    const renderedDetails = skill.details.map((detail) => {
        return (
            <Link to={detail} smooth duration={500} onClick={onClose} offset={-window.innerHeight / 3} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <div className="flex flex-col items-center justify-center cursor-pointer
            m-4 p-4 h-40 text-4xl text-white rounded-md shadow-md bg-gradient-to-b from-gray-600 to-gray-500
            hover:bg-blue-100 hover:text-black hover:scale-105 duration-200">
                    {detail}
                </div>
            </Link>
        )
    })

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-gradient-to-b from-gray-700 to-gray-900 p-8 rounded-md shadow-md text-white flex flex-col">
                <h2 className=" mx-8 text-4xl font-semibold mb-4 text-center flex justify-between items-center">
                    {skill.name}
                    <IoIosClose size={50} className="text-gray-500 cursor-pointer hover:text-white hover:scale-105 duration-200" onClick={onClose}></IoIosClose>
                </h2>
                <div className="text-gray-300 mb-4 flex flex-wrap overflow-y-auto">{renderedDetails}</div>
            </div>
        </div>
    );
};

export default SkillDetail;
