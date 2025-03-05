import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-white">
                        Annamaya Vasundhara is dedicated to nurturing and preserving our planet. Follow us on social media to stay connected with our environmental initiatives.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                <p className="text-sm md:text-base lg:text-lg font-light">© 2025 Annamaya Vasundhara. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;