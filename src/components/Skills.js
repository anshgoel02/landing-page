import React from "react";
import { TbBrandCpp } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandJavascript } from "react-icons/tb";
import { ImBooks } from "react-icons/im";

const Skills = () => {
    const skills = [
        { name: "Data Structures and Algorithms", icon: <TbBrandCpp size={48} /> },
        { name: "Web Development", icon: <TbBrandJavascript size={70} /> },
        { name: "Coursework", icon: <ImBooks size={48} /> }
    ];

    const renderedSkills = skills.map((skill, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
            <div className="flex flex-col items-center justify-center m-4 p-4 rounded-md shadow-md hover:bg-blue-100 hover:text-black hover:scale-105 duration-200 h-40 text-4xl text-white bg-gradient-to-b from-gray-500 to-gray-600">
                <div className="flex flex-row items-center">
                    <div className="mx-2">{skill.name}</div>
                    <div className="mx-auto">{skill.icon}</div>
                </div>
            </div>
        </div>
    ));

    return (
        <section id="skills" className="bg-gradient-to-b from-gray-600 to-gray-900 h-screen flex flex-col justify-center">
            <div className="container mx-auto w-5/6">
                <h2 className="text-5xl font-semibold m-8 mb-8 text-white border-b-4 border-gray-400 pb-2 inline-block">
                    Skills
                </h2>
                <div className="flex flex-wrap items-center justify-center text-white">
                    {renderedSkills}
                </div>
            </div>
        </section>
    );
};

export default Skills;
