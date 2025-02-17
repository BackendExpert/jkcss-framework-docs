import React from 'react'
import { FaRegFileCode } from "react-icons/fa";

const SideBar = () => {
    const docsdata = [
        { id: 1, name: 'Buttons', link: 'Button' },
        { id: 2, name: 'Modals', link: '#' },
        { id: 3, name: 'Forms', link: '#' },
        { id: 4, name: 'Cards', link: '#' },
        { id: 4, name: 'Alerts', link: '#' },
    ]

    const contentdata = [
        { id: 1, name: 'Typography', link: '#' },
        { id: 2, name: 'Tables', link: '#' },
        { id: 3, name: 'Images', link: '#' },
    ]

    const LayoutsData = [
        { id: 1, name: 'Columns', link: '#' },
        { id: 2, name: 'Spacing', link: '#' },
    ]
  return (
    <div className='border-r border-gray-200'>
        <a href="/Docs/AllDocs">
            <div className="py-4 flex">
                <FaRegFileCode className='h-8 w-auto fill-purple-500'/>
                <p className="text-xl pl-2 text-purple-500">About Docs</p>
            </div>
        </a>
        <hr />
        <div className="py-4">
            <h1 className="text-2xl font-semibold uppercase text-purple-700">Components</h1>

            <div className="pl-4">
                {
                    docsdata.map((docs, index) => {
                        return (
                            <div className="py-2" key={index}>
                                <div className="">
                                    <a href={docs.link}>
                                        <p className="text-purple-600 duration-500 hover:font-semibold hover:pl-2">{docs.name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="py-4">
            <h1 className="text-2xl font-semibold uppercase text-purple-700">Content</h1>

            <div className="pl-4">
                {
                    contentdata.map((content, index) => {
                        return (
                            <div className="py-2" key={index}>
                                <div className="">
                                    <a href={content.link}>
                                        <p className="text-purple-600 duration-500 hover:font-semibold hover:pl-2">{content.name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="py-4">
            <h1 className="text-2xl font-semibold uppercase text-purple-700">Content</h1>

            <div className="pl-4">
                {
                    LayoutsData.map((layout, index) => {
                        return (
                            <div className="py-2" key={index}>
                                <div className="">
                                    <a href={layout.link}>
                                        <p className="text-purple-600 duration-500 hover:font-semibold hover:pl-2">{layout.name}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar