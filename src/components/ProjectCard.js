import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

function ProjectCard({ project }) {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const toggleDetail = () => {
        setIsDetailOpen(!isDetailOpen);
    }

    return (
        <div className="bg-gradient-to-b from-gray-700 to-gray-600 text-white p-4 mb-4 rounded-xl shadow-md shadow-gray-400">
            <h3 className="text-2xl font-semibold mb-2 text-center border-b-2 border-gray-400">
                {project.title}
            </h3>
            <img
                src={project.imageUrl}
                alt={project.title}
                className="cursor-pointer w-full h-40 object-cover rounded-xl mb-4 hover:scale-105 duration-200"
                onClick={toggleDetail}
            />

            {isDetailOpen && (
                <ProjectDetails project={project} onClose={toggleDetail} />
            )}
        </div>
    );
};

export default ProjectCard;
