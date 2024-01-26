import React, { useState } from "react";
import SkillDetail from "./SkillDetail";

function SkillCard({ skill }) {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const toggleDetail = () => {
        setIsDetailOpen(!isDetailOpen);
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center cursor-pointer
         m-4 p-4 h-40 text-4xl sm:text-2xl md:text-4xl text-white rounded-md shadow-md bg-gradient-to-b from-gray-600 to-gray-500
         hover:bg-blue-100 hover:text-black hover:scale-105 duration-200" onClick={toggleDetail}>
                <div className="flex flex-row items-center">
                    <div className="mx-2">{skill.name}</div>
                    <div className="mx-auto">{skill.icon}</div>
                </div>
            </div>
            {
                isDetailOpen && (
                    <SkillDetail skill={skill} onClose={toggleDetail} />
                )
            }
        </div>
    )
}

export default SkillCard;