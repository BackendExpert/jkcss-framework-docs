import React from 'react'
import Npmcode from '../../../components/NPMcode/Npmcode'

const ButtonMain = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold text-purple-600">Button Component Documentation</h1>
        <hr className='py-4'/>

        <h1 className="text-xl font-semibold text-purple-500">Overview</h1>

        <p className="text-gray-500 py-4">The Button component in JKCSS Framework provides a simple, customizable, and utility-first approach to styling buttons for your web application</p>

        <h1 className="text-xl font-semibold text-purple-500">Installation</h1>

        <p className="text-gray-500 py-4">Ensure you have installed JKCSS Framework before using the Button component: <a href="/GetStarted" target='_blank' className='pl-2 text-purple-600 duration-500 hover:font-semibold hover:pl-4'>Installation Guide</a></p>

        <div className="">
            <Npmcode npmcode={'npm i @jehankandy/jkcss'}/>
        </div>

        <p className="text-gray-500 py-4">Or include it via CDN:</p>

        <div className="">
            <Npmcode npmcode={'https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css'}/>
        </div>

        <div className="py-4 text-gray-500">
            <h1 className="text-purple-500 uppercase font-semibold text-xl">Usage</h1>

            <p className="py-2">Use the .btn class to create a basic button:</p>
        </div>

    </div>
  )
}

export default ButtonMain