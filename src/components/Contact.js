import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, e.g., sending data to a server
        console.log('Form submitted:', formData);
        // You may want to reset the form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="bg-gradient-to-b from-gray-900 to-gray-600 md:h-screen flex items-center">
            <div className="container mx-auto w-5/6">
                <h2 className="text-5xl text-white font-semibold m-8 mb-8 pb-2 border-b-4 border-gray-400 inline-block">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="mx-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white font-semibold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white font-semibold mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 text-white bg-gray-500 py-2 px-4 rounded-md hover:scale-105 duration-200 shadow-md shadow-gray-700">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
