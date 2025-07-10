import React from 'react';
import { BookOpen, LayoutGrid, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const docsdata = [
        { id: 1, name: 'Buttons', link: 'Button', icon: <FileText size={18} /> },
        { id: 2, name: 'Modals', link: 'Models', icon: <FileText size={18} /> },
        { id: 3, name: 'Forms', link: '#', icon: <FileText size={18} /> },
        { id: 4, name: 'Cards', link: '#', icon: <FileText size={18} /> },
        { id: 5, name: 'Alerts', link: '#', icon: <FileText size={18} /> },
    ];

    const contentdata = [
        { id: 1, name: 'Typography', link: '#', icon: <BookOpen size={18} /> },
        { id: 2, name: 'Tables', link: '#', icon: <BookOpen size={18} /> },
        { id: 3, name: 'Images', link: '#', icon: <BookOpen size={18} /> },
    ];

    const layoutsdata = [
        { id: 1, name: 'Columns', link: '#', icon: <LayoutGrid size={18} /> },
        { id: 2, name: 'Spacing', link: '#', icon: <LayoutGrid size={18} /> },
    ];

    const sectionClass = 'text-xs font-semibold text-purple-300 uppercase mb-4 tracking-widest';
    const linkClass =
        'flex items-center gap-3 px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg';

    return (
        <aside className="sticky top-0 h-screen w-76 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 shadow-2xl rounded-r-3xl p-8 flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="mb-12 select-none text-center">
                <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                    Docs Menu
                </h1>
                <p className="text-purple-300 text-xs mt-1">Components & Layouts</p>
            </div>

            <nav className="flex-grow pr-2">
                <section>
                    <p className={sectionClass}>Components</p>
                    <ul className="space-y-2">
                        {docsdata.map(({ id, name, link, icon }) => (
                            <li key={id}>
                                <Link to={link} className={linkClass}>
                                    {icon}
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='mt-6'>
                    <p className={sectionClass}>Content</p>
                    <ul className="space-y-2">
                        {contentdata.map(({ id, name, link, icon }) => (
                            <li key={id}>
                                <Link to={link} className={linkClass}>
                                    {icon}
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='mt-6'>
                    <p className={sectionClass}>Layout</p>
                    <ul className="space-y-2">
                        {layoutsdata.map(({ id, name, link, icon }) => (
                            <li key={id}>
                                <Link to={link} className={linkClass}>
                                    {icon}
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </nav>

            <footer className="text-center text-purple-400 text-xs mt-auto select-none">
                &copy; {new Date().getFullYear()} <a href="https://www.blackalphalabs.com/" target='_blank'>blackalphalabs</a>
            </footer>
        </aside>
    );
};

export default Menu;
