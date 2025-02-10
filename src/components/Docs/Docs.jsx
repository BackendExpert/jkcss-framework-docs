import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Docs = () => {
  return (
    <div className='px-4'>
        <div className="flex mt-20">
            <div className="w-1/5">
                <SideBar />
            </div>
            <div className="w-full px-4">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Docs