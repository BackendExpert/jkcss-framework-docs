import React, { useState } from 'react';
import { BsGithub, BsLinkedin, BsList } from 'react-icons/bs';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Get started', link: '/GetStarted' },
        { id: 3, name: 'Docs', link: '/Docs/AllDocs' },
        { id: 4, name: 'Utility-First', link: '' },
        { id: 5, name: 'Projects', link: '' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='h-auto py-4 px-6 bg-white shadow-md text-purple-900'>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img src="https://avatars.githubusercontent.com/u/111488170?s=200&v=4" alt="" className='h-8 w-auto rounded-md'/>
                    <h1 className="text-lg font-bold pl-4">JKCSS Framework</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block duration-500 hover:underline font-bold">
                            {data.name}
                        </a>
                    ))}
                </div>
                <div className="flex">
                    <p className="px-2"><BsGithub /></p>
                    <p className="px-2"><BsLinkedin /></p>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-y-14' : '-translate-y-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 border-b border-gray-200">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;