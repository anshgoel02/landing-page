import React from "react";
import ProjectCard from "./ProjectCard";
import ChargeHub from "../assets/ChargeHub.png";
import ChatFlareChat from "../assets/ChatFlareChat.png";
import Portfolio from "../assets/Portfolio.png";

function Projects() {
    const projects = [
        {
            title: "ChargeHub",
            description: "A user-friendly solution to locate and rate EV chargers in the US",
            details: "Created using HTML, CSS, JavaScript, MapBox api, Bootstrap Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur?",
            githubLink: "https://github.com/anshgoel02/ChargeHub",
            imageUrl: ChargeHub
        },
        {
            title: "ClassCash",
            description: "Implemented a Coin System that incentivises class attendance and using coins as currency in college facilities",
            details: "Utilised HTML, CSS, and the MERN Stack to architect and deploy a streamlined and user-friendly platform, significantly optimizing university operational efficiency Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur? Utilised HTML, CSS, and the MERN Stack to architect and deploy a streamlined and user-friendly platform, significantly optimizing university operational efficiency Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur? Utilised HTML, CSS, and the MERN Stack to architect and deploy a streamlined and user-friendly platform, significantly optimizing university operational efficiency Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur? Utilised HTML, CSS, and the MERN Stack to architect and deploy a streamlined and user-friendly platform, significantly optimizing university operational efficiency Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur?",
            githubLink: "https://github.com/ayush-gupta2002/ClassCash",
            imageUrl: ChargeHub
        },
        {
            title: "ChatFlare",
            description: "Real-time chatting app",
            details: "Created using MERN Stack, Tailwind CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur?",
            githubLink: "https://github.com/anshgoel02/ChatFlare",
            imageUrl: ChatFlareChat
        },
        {
            title: "Portfolio",
            description: "My portfolio",
            details: "Created using React.js, Tailwind CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at dolorum. Ullam, provident consectetur beatae illum quos, autem impedit nemo deleniti dolorum eos sequi. Quaerat cumque deleniti ad soluta doloribus exercitationem quod dignissimos necessitatibus at molestias officia quos illo, totam aspernatur quo ullam dicta veritatis officiis quae quidem optio consequuntur?",
            githubLink: "https://github.com/anshgoel02/landing-page",
            imageUrl: Portfolio
        }
    ];

    const renderedProjects = projects.map((project, index) => {
        return (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <ProjectCard project={project} />
            </div>
        )
    })

    return (
        <section id="projects" className="bg-gradient-to-b from-gray-600 to-gray-900 p-8 h-full md:h-screen flex items-center">
            <div className="container mx-auto w-5/6">
                <h2 className="text-white text-5xl font-semibold mb-8 pb-2 inline-block border-b-4 border-gray-400">
                    Projects
                </h2>
                <div className="flex flex-wrap -mx-4">
                    {renderedProjects}
                </div>
            </div>
        </section>
    )
}

export default Projects;