
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    // Merged and updated footer links
    const quickLinks = [
        { name: 'Members', href: 'https://www.unesco.org/en/sustainable-development/education/greening-future/members' },
        { name: 'Join GEP', href: '#' },
        { name: 'GEP Chatbot & Resources', href: '#' },
        { name: 'Contact Secretariat', href: 'mailto:gep@unesco.org' },
    ];
    
    return (
        <footer className="bg-[#0A5556] text-white">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Privacy</h3>
                        <p className="text-gray-300 text-sm">
                           
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4 text-green-200">Quick Links</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            {quickLinks.map(link => (
                               <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Partners Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Term of Use</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">-</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">-</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">-</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">-</a></li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                        <div className="flex space-x-4 text-gray-300">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Twitter size={22} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Facebook size={22} />
                            </a>
                            <a href="https://twitter.com/UNESCO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Linkedin size={22} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Instagram size={22} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-white mt-10 pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Greening Education Partnership. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
