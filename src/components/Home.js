import React from "react";
import myPhoto from "../assets/myPhoto.jpeg";

function Home() {
    return (
        <section id="home" className="bg-gradient-to-b from-gray-900 to-gray-600 p-8 h-screen w-full justify-center items-center flex">
            <div className="container mx-auto text-center md:flex justify-center items-center">
                <div className="md:w-2/3">
                    <img
                        src={myPhoto}
                        alt="Your Profile"
                        className="rounded-2xl mx-auto mb-8 w-3/4"
                    />
                </div>
                <div className="mx-auto p-4">
                    <h2 className="text-7xl font-bold mb-4 text-white">Welcome to My Portfolio</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Hello, I'm Ansh Goel. I'm a 3rd Year Computer Engineering student at Delhi Technological University. Here's a brief introduction about myself.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;