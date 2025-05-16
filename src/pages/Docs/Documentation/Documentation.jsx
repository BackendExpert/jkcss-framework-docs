import React, { useState } from 'react'
import Menu from '../../../components/SliderMenu/Menu'
import { Outlet } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti"
import { MdOutlineClose } from "react-icons/md"
import Footer from '../../../components/Footer'

const Documentation = () => {
    const [openSide, setOpenSide] = useState(false)

    const toggleMenu = () => {
        setOpenSide(!openSide)
    }

    return (
        <div className='w-full bg-gray-200 min-h-screen'>
            <div className="xl:flex">
                <div
                    className={`shadow-[5px_0_15px_-5px_rgba(0,0,0,0.1)] p-0 xl:block fixed top-0 left-0 h-full bg-white shadow-custom z-50 xl:w-[19%] w-[75%] overflow-y-auto transform duration-500 scrollbar-thin `}
                >
                    <Menu />
                </div>
                <div className="xl:ml-[19%] w-full">
                    <div className="ml-0 pl-8 pr-4 py-4 bg-white">
                        <Outlet />
                    </div>
                    <div className="xl:ml-0">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documentation
