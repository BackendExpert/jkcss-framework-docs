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
        <div className="py-4">
            <h2 className="text-lg font-bold uppercase text-purple-700 mb-2 tracking-wider">{title}</h2>
            <ul className="pl-2 space-y-1">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.link}
                            className="block text-sm text-purple-600 hover:pl-2 transition-all duration-300 hover:text-purple-800"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <aside className="min-h-screen w-full max-w-xs px-4 py-6 border-r border-gray-200 bg-white shadow-sm">
            <a href="/Docs/AllDocs" className="flex items-center space-x-2 mb-6">
                <FaRegFileCode className="text-2xl text-purple-600" />
                <span className="text-xl font-semibold text-purple-600">About Docs</span>
            </a>
            <hr className="border-gray-300 mb-4" />
            <Section title="Components" items={docsdata} />
            <Section title="Content" items={contentdata} />
            <Section title="Layout" items={layoutsData} />
        </aside>
    );
};

export default SideBar;
