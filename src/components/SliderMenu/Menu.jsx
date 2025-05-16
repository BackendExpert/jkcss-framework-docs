import React from 'react'
import { BookOpen, LayoutGrid, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const docsdata = [
        { id: 1, name: 'Buttons', link: 'Button', icon: <FileText size={16} /> },
        { id: 2, name: 'Modals', link: '#', icon: <FileText size={16} /> },
        { id: 3, name: 'Forms', link: '#', icon: <FileText size={16} /> },
        { id: 4, name: 'Cards', link: '#', icon: <FileText size={16} /> },
        { id: 5, name: 'Alerts', link: '#', icon: <FileText size={16} /> },
    ]

    const contentdata = [
        { id: 1, name: 'Typography', link: '#', icon: <BookOpen size={16} /> },
        { id: 2, name: 'Tables', link: '#', icon: <BookOpen size={16} /> },
        { id: 3, name: 'Images', link: '#', icon: <BookOpen size={16} /> },
    ]

    const layoutsdata = [
        { id: 1, name: 'Columns', link: '#', icon: <LayoutGrid size={16} /> },
        { id: 2, name: 'Spacing', link: '#', icon: <LayoutGrid size={16} /> },
    ]

    const sectionClass = 'text-xs font-semibold text-gray-500 uppercase mb-2 mt-6'
    const linkClass = 'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#6314ad]/10 hover:text-[#6314ad] transition'

    return (
        <div className="p-6 min-h-screen bg-white border-r border-gray-200 overflow-y-auto scrollbar-thin">
            {/* Header */}
            <div className="mb-6 text-center">
                <h1 className="text-base font-bold text-[#6314ad] tracking-wide uppercase">Docs Menu</h1>
                <p className="text-xs text-gray-500">Components & Layouts</p>
            </div>

            {/* Components */}
            <div>
                <p className={sectionClass}>Components</p>
                <div className="space-y-1">
                    {docsdata.map(item => (
                        <Link key={item.id} to={item.link} className={linkClass}>
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div>
                <p className={sectionClass}>Content</p>
                <div className="space-y-1">
                    {contentdata.map(item => (
                        <Link key={item.id} to={item.link} className={linkClass}>
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Layouts */}
            <div>
                <p className={sectionClass}>Layouts</p>
                <div className="space-y-1">
                    {layoutsdata.map(item => (
                        <Link key={item.id} to={item.link} className={linkClass}>
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
