import React, { useState } from 'react';
import FileName from '../components/Text/FileName'
import './CodeBlock.css';
import BaseFile from './GetStatedPages/BaseFile';
import UpdateCSS from './GetStatedPages/UpdateCSS';

const GetStarted = () => {
    const [copied, setCopied] = useState(false);

    // Function to copy code to clipboard
    const copyToClipboard = () => {
      const code = `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>JKCSS DEMO</title>
      </head>
      <body>
          <!-- You can customize following content -->
          <h1>Hello World, I am JKCSS..!</h1>
      </body>
  </html>
      `;
  
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true); // Show success message
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    };
  return (
    <div className='my-40 md:mx-32 mx-4'>
        <div className="">
            <h1 className="text-center text-3xl font-semibold text-gray-800 pb-4">Get started with JKCSS</h1>
            <p className="">
                JKCSS CSS - Framework is underdeveloping. This Framework only contains CDN (Content Delivery Network or Content Distribution Network) and Downloaded CSS will be in future versions. JKCSS CSS - Framework still Developing with CSS and Javascript. 
            </p>            
        </div>
        <BaseFile />
        <UpdateCSS />

        <div className="">
            <h1 className="mb-4 text-2xl font-semibold">CDN Information</h1>
            <table className='w-full border border-gray-500/20'>
                <thead className='h-12 bg-gray-500/10 rounded'>
                    <tr>
                        <th className='font-semibold border-r'>Description</th>
                        <th className='font-semibold'>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='h-12 border-r text-center font-semibold text-purple-800'>
                            CSS
                        </td>
                        <td className='h-12 pl-4 text-red-800'>
                            https://jkcss-css-framework.github.io/JKCSS-Framework/jkcss/jkcss.min.css
                        </td>
                    </tr>
                    <tr>
                        <td className='h-12 border-r text-center font-semibold text-purple-800'>
                            Js
                        </td>
                        <td className='h-12 pl-4 text-red-800'>
                            https://jkcss-css-framework.github.io/JKCSS-Framework/js/jkcss.min.js
                        </td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-8 mb-2">Recommended use</h1>

            <table className='w-full border border-gray-500/20 '>
                <thead className='h-12 bg-gray-500/10 rounded'>
                    <tr>
                        <th className='font-semibold border-r'>Description</th>
                        <th className='font-semibold'>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='h-12 border-r text-center font-semibold text-purple-800'>
                            CSS
                        </td>
                        <td className='h-12 pl-4 text-red-800'>
                            https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/src/jkcss.min.css
                        </td>
                    </tr>
                    <tr>
                        <td className='h-12 border-r text-center font-semibold text-purple-800'>
                            Js
                        </td>
                        <td className='h-12 pl-4 text-red-800'>
                            https://cdn.jsdelivr.net/npm/@jehankandy/jkcss@6.0.0/js/jkcss.min.js
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



    </div>
  )
}

export default GetStarted