import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { ImProfile } from "react-icons/im";

const Social = () => {
    const links = [
        { name: "Mail", url: "mailto:goelansh164@gmail.com", icon: <CiMail size={40} /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ansh-goel-5656a7212", icon: <FaLinkedin /> },
        { name: "GitHub", url: "https://github.com/anshgoel02", icon: <FaGithub /> },
        { name: "LeetCode", url: "https://leetcode.com/goelansh164/", icon: <SiLeetcode /> },
        { name: "CodeChef", url: "https://www.codechef.com/users/anshgoel_02", icon: <SiCodechef /> },
        { name: "Résumé", url: "https://drive.google.com/file/d/1Ck72WUkLbAfpLzFXzc--DU36pz7URMTu/view?usp=share_link", icon: <ImProfile /> }
    ];

    const renderedLinks = links.map((link, index) => {
        return (
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center m-4 p-4 rounded-md shadow-md hover:bg-blue-100 hover:text-black hover:scale-105 duration-200 h-40 text-4xl text-white bg-gradient-to-b from-gray-500 to-gray-600"
                >
                    <div className="flex flex-row items-center">
                        <div className="mx-auto">{link.icon}</div>
                        <div className="mx-2">{link.name}</div>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <section id="social" className="bg-gradient-to-b from-gray-900 to-gray-600 h-full md:h-screen flex items-center">
            <div className="container mx-auto w-5/6">
                <h2 className="text-white text-5xl font-semibold m-8 mb-8 border-b-4 border-gray-400 pb-2 inline-block">Social Links</h2>
                <div className="flex flex-wrap items-center justify-center">
                    {renderedLinks}
                </div>
            </div>
        </section>
    )
}

export default Social;