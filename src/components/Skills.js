import React from "react";
import { TbBrandCpp } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbBrandJavascript } from "react-icons/tb";
import { ImBooks } from "react-icons/im";
import SkillCard from "./SkillCard";

const Skills = () => {
    const skills = [
        {
            name: "Data Structures and Algorithms",
            icon: <TbBrandCpp size={48} />,
            details: [
                {
                    title: "519 Questions on LeetCode",
                    url: "https://leetcode.com/goelansh164/"
                },
                {
                    title: "234 Questions on GFG",
                    url: "https://auth.geeksforgeeks.org/user/goelansh164/practice"
                },
                {
                    title: "⭐️⭐️⭐️ Coder on CodeChef (Max 1741)",
                    url: "https://www.codechef.com/users/anshgoel_02"
                },
                {
                    title: "257 Questions on CodeStudio",
                    url: "https://www.codingninjas.com/studio/home"
                }
            ]
        },
        {
            name: "Web Development",
            icon: <TbBrandJavascript size={70} />,
            details: [
                "ChargeHub",
                "ClassCash",
                "ChatFlare",
                "Portfolio"
            ]
        },
        {
            name: "Coursework",
            icon: <ImBooks size={48} />,
            details: [
                "Object Oriented Programming",
                "Database Management Systems",
                "Operating System",
                "Algorithm Analysis"
            ]
        }
    ];

    const renderedSkills = skills.map((skill, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
            <SkillCard skill={skill} />
        </div>
    ));

    return (
        <section id="skills" className="bg-gradient-to-b from-gray-600 to-gray-900 h-full md:h-screen flex items-center">
            <div className="container mx-auto w-5/6">
                <h2 className="text-5xl text-white font-semibold mx-4 mb-8 pb-2 border-b-4 border-gray-400 inline-block">
                    Skills
                </h2>
                <div className="flex flex-wrap -mx-4">
                    {renderedSkills}
                </div>
            </div>
        </section>
    );
};

export default Skills;
