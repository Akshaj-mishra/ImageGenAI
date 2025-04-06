import React from "react";
import { assets } from '../assets/assets'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo / Brand */}
            <div>
                <h2 className="text-2xl font-bold mb-4">NuroART</h2>
                <p className="text-sm text-gray-400">
                Building quality of your desired images.
                </p>
            </div>
    
            {/* Links */}
            <div>
                <h3 className="text-lg font-semibold mb-3">NuroART</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                </ul>
            </div>
    
            <div>
                <h3 className="text-lg font-semibold mb-3">Support</h3>
                <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                </ul>
            </div>
    
            {/* Social */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <ul className="flex space-x-4 text-xl">
                <li>
                    <a href="#" className="hover:text-blue-400">
                    <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-600">
                    <FaInstagram className="w-6 h-6" />
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-pink-500">
                    <FaLinkedin className="w-6 h-6" />
                    </a></li>
                </ul>
            </div>
            </div>
    
            {/* Bottom Bar */}
            <div className="text-center text-sm text-gray-500 mt-10">
            © {new Date().getFullYear()} NuroART. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;
