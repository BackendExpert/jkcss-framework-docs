import React from 'react'
import DefaultBtn from '../components/Buttons/DefaultBtn'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const HomePage = () => {
    const project = [
        {
            id:1,
            name: 'NPM Package for JKCSS',
            desc: 'Support using Node Package Manager. Now JKCSS has NPM Package for Development',
            link: '',
        },
        {
            id:2,
            name: 'ReactJKCSS',
            desc: 'Successfully works with ReactJS, After April 2024 JKCSS successfully launched the React Version of JKCSS',
            link: '',
        },
        {
            id:3,
            name: 'ReactJKIcons',
            desc: 'Icon Framework for JKCSS work with only ReactJS',
            link: '',
        },
    ]

  return (
    <div>
        <div className="my-40 ">
            <center><img src="https://avatars.githubusercontent.com/u/111488170?s=200&v=4" alt="" className='h-full w-auto rounded'/></center>
            <div className="text-center my-4 md:mx-0 mx-4">
                <h1 className="font-semibold md:text-4xl text-2xl mb-2">
                    Develop Your Own code Faster than Faster <br />
                    with JKCSS
                </h1>
                <h1 className="mb-4">South-Asian and Sri Lankan First CSS Framework</h1>
                <h1 className="font-semibold text-purple-900">The JKCSS - A CSS Framework Developed By JehanKandy</h1>
            </div>

            <div className="text-center md:mx-0 mx-4">
                <span className='text-purple-900 font-semibold'>Initial Release: 0.1.0 (pre-release) - 18 May 2023 </span>| 
                Current Release: v6.0.0 - 05 May 2024
            </div>

            <h1 className="text-center mt-16 text-2xl font-semibold text-gray-800">Start Any way You need</h1>
            <p className="text-center">In JKCSS CSS Framework have following methods to start the project</p>

            <div className="md:flex justify-between mt-8 md:mx-16 mx-4">                
                <div className="text-center border rounded-md border-gray-500/40 w-full md:mx-4 py-4 md:px-0 px-4 md:my-0 my-4">
                    <h1 className="text-xl font-semibold">Via Node Package Manager</h1>
                    <p className="py-4">
                        The Developers can use the NPM package of JKCSS for their Developments. <br />
                        (Still in NPM other package managers will be added in future Releases)
                    </p>
                    <div className="bg-gray-500/20 text-purple-800 shadow-md border border-gray-400/50 font-semibold py-4 md:mx-16 rounded">
                        npm i @jehankandy/jkcss
                    </div>

                    <p className="py-4">
                    About JKCSS Npm Package Manager <a href="https://www.npmjs.com/package/@jehankandy/jkcss" className="text-purple-800" target='_blank'>Read More</a>
                    </p>
                </div>
                <div className="text-center border rounded-md border-gray-500/40 w-full md:mx-4 py-4 md:px-0 px-4 md:my-0 my-4">
                    <h1 className="text-xl font-semibold">Via Using CDN</h1>

                    <div className="p-4">
                        The Developers can use NPM and as well as CDN links to use JKCSS
                    </div>

                    <div className="">
                        <DefaultBtn BtnType={'button'} btnValue={"Read Docs"}/>
                    </div>
                </div>
            </div>


            <div className="md:mx-32 mx-4">
                <h1 className="text-center mt-16 text-2xl font-semibold text-gray-800">Framework Guides</h1>
                <p className="text-center">Start New Version with Framework Guide from v5.0.0</p>

                <p className="text-center py-4">
                    JKCSS v5.0.0 introduces exciting updates, including enhanced utility classes, theme customization with dark/light mode, an optimized grid system, improved accessibility, and a smaller CSS footprint for faster performance. You can start using it via CDN, npm, or by downloading the CSS file directly. To set up, create a simple HTML structure, link the JKCSS stylesheet, and organize your project files for a clean workflow. This version provides all the tools needed to build responsive and modern web interfaces effortlessly.
                </p>

                <center>
                    <div className="">
                        <DefaultBtn BtnType={'button'} btnValue={'Read More About Framework Guides'} />
                    </div>
                </center>




                <h1 className="text-center mt-16 text-2xl font-semibold text-gray-800">Utility-First CSS</h1>
                <p className="text-center">Start New Version with Utility-First CSS Approach from v6.0.0</p>

                <p className="text-center py-4">
                    JKCSS v6.0.0 embraces a Utility-First CSS approach, allowing you to style elements directly in your HTML using predefined utility classes. This method simplifies development by reducing custom CSS and enhancing consistency. With expanded utilities for spacing, typography, colors, and layouts, v6.0.0 enables faster, responsive, and scalable UI creation. Start by including the framework and applying utility classe
                </p>

                
                <center>
                    <div className="">
                        <DefaultBtn BtnType={'button'} btnValue={'Read More About Utility-First CSS'} />
                    </div>
                </center>


                <h1 className="text-center mt-16 text-2xl font-semibold text-gray-800">On-Going Projects with JKCSS</h1>
                <p className="text-center">Project that combine with JKCSS</p>


                <div className="md:grid grid-cols-3 gap-4 my-6">
                    {
                        project.map((data, index) => {
                            return (
                                <div className="border border-gray-500/30 p-6 rounded-md md:my-0 my-4">
                                    <h1 className="font-semibold text-xl text-purple-800 pb-2 text-center">{data.name}</h1>
                                    <p className="">
                                        {data.desc}
                                    </p>

                                    <center>
                                        <a href={data.link}>
                                            <div className="mt-4">
                                                <DefaultBtn BtnType={'button'} btnValue={'Read More'} />
                                            </div>
                                        </a>
                                    </center>
                                </div>
                            )
                        })
                    }
                </div>


                <h1 className="text-center mt-16 text-2xl font-semibold text-gray-800">Development Team</h1>
                <p className="text-center"></p>

                <center className='my-4'>
                    <div className="">
                        <div className="md:grid grid-cols-3 gap-4">
                            <div className=""></div>
                            <div className="border border-gray-500/30 py-8 rounded-md shadow-md">
                                <img src="https://avatars.githubusercontent.com/u/138636749?v=4&size=64" alt="" className='rounded-full'/>
                                <h1 className="text-xl font-semibold text-purple-800">Jehan Weerasuriya</h1>
                                <p className="">Founder and CEO of JKCSS</p>

                                <div className="md:mx-16 mx-4 my-4">
                                    <h1 className="flex my-2">
                                        <p className=""><BsGithub className='h-6 w-auto fill-purple-800'/> </p> <p className="pl-4"><a href="https://github.com/BackendExpert" target="_blank">github.com/BackendExpert</a></p>
                                    </h1>
                                    <h1 className="flex my-2">
                                        <p className=""><BsLinkedin className='h-6 w-auto fill-purple-800'/> </p> <p className="pl-4"><a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank'>linkedin.com/JehanWeerasuriya</a></p>
                                    </h1>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </center>
            </div>


        </div>
        

    </div>
  )
}

export default HomePage