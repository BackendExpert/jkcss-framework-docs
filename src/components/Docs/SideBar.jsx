import React from 'react';
import { FaRegFileCode } from 'react-icons/fa';

const SideBar = () => {
    const docsdata = [
        { id: 1, name: 'Buttons', link: 'Button' },
        { id: 2, name: 'Modals', link: '#' },
        { id: 3, name: 'Forms', link: '#' },
        { id: 4, name: 'Cards', link: '#' },
        { id: 5, name: 'Alerts', link: '#' },
    ];

    const contentdata = [
        { id: 1, name: 'Typography', link: '#' },
        { id: 2, name: 'Tables', link: '#' },
        { id: 3, name: 'Images', link: '#' },
    ];

    const layoutsData = [
        { id: 1, name: 'Columns', link: '#' },
        { id: 2, name: 'Spacing', link: '#' },
    ];

    const Section = ({ title, items }) => (
        <div className="mb-8">
            <h3 className="text-xs font-semibold text-purple-300 uppercase mb-4 tracking-widest">
                {title}
            </h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.link}
                            className="block px-4 py-2 rounded-lg text-white text-sm font-medium transition-transform transform hover:scale-105 hover:bg-purple-700 hover:shadow-lg"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <aside className="sticky top-0 h-screen w-72 bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 shadow-2xl rounded-r-3xl p-8 flex flex-col">
            <a
                href="/Docs/AllDocs"
                className="flex items-center space-x-3 mb-12 select-none hover:scale-110 transition-transform duration-300"
            >
                <FaRegFileCode className="text-4xl text-purple-300 drop-shadow-lg" />
                <span className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
                    About Docs asdasd
                </span>
            </a>

            <nav className="flex-grow overflow-y-auto pr-2">
                <Section title="Components" items={docsdata} />
                <Section title="Content" items={contentdata} />
                <Section title="Layout" items={layoutsData} />
            </nav>

            <footer className="text-center text-purple-400 text-xs mt-auto select-none">
                &copy; {new Date().getFullYear()} Your Company
            </footer>
        </aside>
    );
};

export default SideBar;
