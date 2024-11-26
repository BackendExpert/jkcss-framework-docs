import React, { useState } from 'react';
import FileName from '../components/Text/FileName'
import './CodeBlock.css';

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







    </div>
  )
}

export default GetStarted