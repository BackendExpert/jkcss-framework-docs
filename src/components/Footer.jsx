import React from 'react'
import { BsEnvelope, BsPhone, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const release = [
        {id: 1, name: '6.0.0 05 May 2024', link: ''},
        {id: 2, name: '5.1.0 08 March 2024', link: ''},
        {id: 3, name: '5.0.0 25 February 2024', link: ''},
        {id: 4, name: '5.0.0-beta2 24 February 2024', link: ''},
        {id: 5, name: '5.0.0-beta1 22 February 2024', link: ''},
        {id: 6, name: '4.5.0 12 February 2024', link: ''},
    ]

    const Project = [
        {id: 1, name: 'Utility-First CSS', link: ''},
        {id: 1, name: 'JKCSS with React (ReactJKCSS)', link: ''},
        {id: 1, name: 'JKCSS ReactIcons', link: ''},
        {id: 1, name: 'NPM Package for JKCSS', link: ''},
    ]
  return (
    <div className='shadow-md md:px-32 px-4 bg-gray-400/15 border-t border-purple-500/20'>
        <div className="md:grid grid-cols-4 gap-4 pt-16 pb-6">
            <div className="">
                <img src="https://avatars.githubusercontent.com/u/111488170?s=200&v=4" alt="" className='rounded-md'/>

                <div className="my-2">
                    Interfaces and codes are designed by JKCSS Team <br />

                    The Project licensed under <a href="https://github.com/JKCSS-CSS-Framework/JKCSS-Framework/blob/master/LICENSE" target="_blank" className='text-purple-800 font-semibold'>MIT</a> <br />

                    Currently v6.0.0 Latest 05 May 2024
                </div>
            </div>

            <div className="">
                <h1 className="font-semibold text-2xl text-purple-800">Releases</h1>

                <div className="my-4">        
                    {
                        release.map((data, index) => {
                            return (
                                <a href={data.link} target='_blank'>
                                    <h1 className="py-2 hover:text-purple-800" key={index}>{data.name}</h1>
                                </a>
                            )
                        })
                    }                    

                </div>
            </div>

            <div className="">
                <h1 className="font-semibold text-2xl text-purple-800">Projects</h1>

                <div className="my-4">        
                    {
                        Project.map((data, index) => {
                            return (
                                <a href={data.link} target='_blank'>
                                    <h1 className="py-2 hover:text-purple-800" key={index}>{data.name}</h1>
                                </a>
                            )
                        })
                    }                    

                </div>
            </div>

            <div className="">
                <h1 className="font-semibold text-2xl text-purple-800">Contact Us</h1>

                <div className="my-4">
                    <h1 className="flex py-2">
                        <BsEnvelope className='h-6 w-auto'/> 
                        <p className="pl-2">jehankandy@gmail.com</p>
                    </h1>
                    <h1 className="flex py-2">
                        <BsWhatsapp className='h-6 w-auto'/> 
                        <p className="pl-2">+94 711758851</p>
                    </h1>
                </div>
            </div>
        </div>
        <hr className='border border-purple-800/20 mb-2' />

        <div className="text-center pb-4">
            CopyRight &copy; {currentYear} | JKSCS CSS Framework | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank' className='text-[#7466f1]'>JehanKandy</a> | Allrights reserved
        </div>
    </div>
  )
}

export default Footer