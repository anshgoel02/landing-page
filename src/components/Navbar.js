import React from "react";

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-white font-bold text-5xl">Ansh</h1>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Services</a>
                        <a href="#" className="text-white">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;