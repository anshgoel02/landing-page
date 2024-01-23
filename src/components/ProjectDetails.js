import React from "react";

function ProjectDetails({ project, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-gradient-to-b from-gray-700 to-gray-900 p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 p-8">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full object-cover rounded-md mb-4"
                    />
                    <div className="flex flex-row justify-evenly items-center">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white mt-4 shadow-md shadow-gray-700 p-2 rounded-md hover:scale-105 duration-200 bg-gray-500"
                        >
                            GitHub Repository
                        </a>
                        <button className="mx-4 mt-4 text-white bg-gray-500 py-2 px-4 rounded-md hover:scale-105 duration-200 shadow-md shadow-gray-700" onClick={onClose}>
                            Close Details
                        </button>
                    </div>
                </div>
                <div className="md:w-2/5 h-full overflow-y-auto">
                    <h3 className="text-2xl mb-2 text-semibold inline-block border-b-4 border-gray-500">
                        {project.title}
                    </h3>
                    <h4 className="text-lg pb-1 text-semibold text-gray-100">Description</h4>
                    <p className="text-gray-300 mb-2">
                        {project.description}
                    </p>
                    <h4 className="text-lg pb-1 text-semibold text-gray-100">Details</h4>
                    <p className="text-gray-300 mb-4">
                        {project.details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;

