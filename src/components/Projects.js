import React from "react";
import ProjectCard from "./ProjectCard";
import ChargeHub from "../assets/ChargeHub.png";
import ChatFlareChat from "../assets/ChatFlareChat.png";
import Portfolio from "../assets/Portfolio.png";
import ClassCash from "../assets/ClassCash.png";

function Projects() {
    const projects = [
        {
            title: "ChargeHub",
            details: (
                <div className="pe-2 max-w-4xl mx-auto">
                    <p className="mb-4">
                        ChargeHub is a platform designed to make it easy for electric vehicle (EV) drivers to locate charging stations. The platform provides detailed information about various charging stations, including their locations, availability, and charging rates.
                    </p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Key Features:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Find EV Chargers Easily:</strong> ChargeHub offers a comprehensive map and search functionality to help users quickly find nearby EV charging stations.</li>
                        <li><strong>Community Engagement:</strong> Conceptualized and implemented a community-driven approach on ChargeHub, fostering the sharing and discovery of charging experiences among EV drivers. This feature helps create a supportive and informative environment for the EV community.</li>
                        <li><strong>Technological Stack:</strong> ChargeHub is built using modern web technologies, including HTML, CSS, JavaScript, MongoDB, Express.js, Node.js, Bootstrap, Cloudinary, and the Mapbox API. These technologies ensure a responsive, reliable, and user-friendly platform.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Technological Implementation:</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>User-Friendly Interface:</strong> Developed a user-friendly platform utilizing HTML, CSS, and Bootstrap to ensure a clean and intuitive user interface.</li>
                        <li><strong>Real-Time Data:</strong> MongoDB and Express.js handle the backend, providing efficient data management and real-time updates.</li>
                        <li><strong>Map Integration:</strong> The Mapbox API is used to display charging stations on an interactive map.</li>
                        <li><strong>Media Handling:</strong> Cloudinary manages image uploads and storage, ensuring efficient media handling.</li>
                    </ul>
                    <p className="mt-4">
                        ChargeHub is designed to enhance the convenience of finding EV charging stations and to build a community where users can share valuable information, making EV ownership more accessible and practical.
                    </p>
                </div>
            ),
            githubLink: "https://github.com/anshgoel02/ChargeHub",
            imageUrl: ChargeHub
        },
        {
            title: "ClassCash",
            details: (
                <div className="pe-2 max-w-4xl mx-auto">
                    <p className="mb-4">
                        ClassCash is a platform designed to enhance student engagement and streamline university operations through a digital rewards system. Here's a brief overview:
                    </p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Key Features:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>University Registration Platform:</strong> ClassCash includes a registration system with separate logins for students and teachers, simplifying administrative processes and reducing paperwork.</li>
                        <li><strong>Incentive System:</strong> The platform features a Coin system that incentivizes class attendance and academic participation. Students earn coins for attending classes, which can be used as currency in various college facilities such as the bookstore, cafeteria, and more.</li>
                        <li><strong>Technological Stack:</strong> Developed using HTML, CSS, and the MERN stack (MongoDB, Express.js, React, Node.js), ClassCash provides a robust and interactive experience. Bootstrap is used for styling, while Cloudinary handles media management and Mapbox API integrates for location-based services.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Technological Implementation:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>User-Friendly Interface:</strong> Developed a user-friendly platform utilizing HTML, CSS, and Bootstrap to ensure a clean and intuitive user interface.</li>
                        <li><strong>Real-Time Data:</strong> MongoDB and Express.js handle the backend, providing efficient data management and real-time updates.</li>
                        <li><strong>Map Integration:</strong> The Mapbox API is used to display various university facilities on an interactive map.</li>
                        <li><strong>Media Handling:</strong> Cloudinary manages image uploads and storage, ensuring efficient media handling.</li>
                    </ul>
                    <p className="mt-4">
                        ClassCash aims to create a more engaging and efficient university experience, leveraging technology to connect students with their campus resources effectively.
                    </p>
                </div>
            ),
            githubLink: "https://github.com/ayush-gupta2002/ClassCash",
            imageUrl: ClassCash
        },
        {
            title: "ChatFlare",
            details: (
                <div className="pe-2 max-w-4xl mx-auto">
                    <p className="mb-4">
                        ChatFlare is a real-time chatting application designed to offer a seamless and interactive messaging experience. Below is an overview of its features and technological implementation:
                    </p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Key Features:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Real-Time Chat Functionality:</strong> Developed a dynamic real-time chatting application that allows users to engage in multiple conversations simultaneously through multiple chat boxes.</li>
                        <li><strong>User Authentication:</strong> Integrated secure sign-in and registration features to ensure that only registered users can access the platform. Personalized user experiences are supported through customizable avatars.</li>
                        <li><strong>Multiple Chat Boxes:</strong> Enabled users to manage and participate in several conversations at once, enhancing user interaction and flexibility.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Technological Implementation:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Frontend Development:</strong> Utilized ReactJS for creating a responsive and interactive user interface, ensuring a seamless and engaging user experience.</li>
                        <li><strong>Backend Development:</strong> Implemented Node.js and Express.js to handle server-side operations and real-time communication, providing a robust and scalable backend solution.</li>
                        <li><strong>Data Management:</strong> Employed MongoDB for efficient and scalable data management, facilitating smooth storage and retrieval of user data and chat histories.</li>
                        <li><strong>UI Design:</strong> Designed the user interface with HTML and CSS, focusing on creating a clean and user-friendly layout to enhance usability and visual appeal.</li>
                    </ul>
                </div>
            ),
            githubLink: "https://github.com/anshgoel02/ChatFlare",
            imageUrl: ChatFlareChat
        },
        {
            title: "Portfolio",
            link: "https://ansh-goel-landing-page.netlify.app",
            details: (
                <div className="pe-2 max-w-4xl mx-auto">
                    <p className="mb-4">
                        Landing Page is a personal portfolio developed using React to showcase my projects, academic qualifications, and technical skills. The landing page acts as a central hub for presenting my professional achievements and providing easy access to my coding profiles.
                    </p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Key Features:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Project Showcase:</strong> Highlights detailed descriptions and key aspects of my projects, including the technologies used and their impact, giving visitors insight into my practical experience and capabilities.</li>
                        <li><strong>Academic Qualifications:</strong> Displays my educational background and academic achievements, contextualizing my technical skills and expertise.</li>
                        <li><strong>Skills Overview:</strong> Lists my core technical skills and proficiencies, offering a clear picture of my abilities in various programming languages and tools.</li>
                        <li><strong>Coding Profiles:</strong> Includes handles and links to my profiles on platforms like LeetCode, GeeksforGeeks (GFG), CodeChef, and GitHub, allowing visitors to explore my coding activities and contributions.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-white">Technological Implementation:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Frontend Development:</strong> Utilized React to create a dynamic and interactive portfolio site, ensuring an engaging user experience.</li>
                        <li><strong>Styling:</strong> Applied Tailwind CSS for modern, responsive design, achieving a clean, visually appealing, and user-friendly interface.</li>
                        <li><strong>Integration:</strong> Incorporated links and handles to coding platforms and repositories, providing seamless access to my external profiles for additional insight into my coding skills and project contributions.</li>
                    </ul>
                </div>
            ),
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