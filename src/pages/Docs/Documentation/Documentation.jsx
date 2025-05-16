import React from 'react'
import Menu from '../../../components/SliderMenu/Menu'
import { Outlet } from 'react-router-dom'


const Documentation = () => {
    return (
        <div className='px-4'>
            <div className="flex mt-20">
                <div className="w-1/5">
                    <Menu />
                </div>
                <div className="w-full px-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Documentation