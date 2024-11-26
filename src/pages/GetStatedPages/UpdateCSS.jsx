import React, { useState } from 'react';
import '../CodeBlock.css';
import FileName from '../../components/Text/FileName';


const UpdateCSS = () => {
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
          <link rel="stylesheet" href="https://jkcss-css-framework.github.io/JKCSS-Framework/jkcss/jkcss.min.css">
      </head>
      <body>
          <!-- You can customize following content -->
          <h1>Hello World, I am JKCSS..!</h1>
  
          <script src="https://jkcss-css-framework.github.io/JKCSS-Framework/js/jkcss.min.js"></script>
      </body>
  </html>
      `;
  
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true); // Show success message
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    };

  return (
    <div>
        <div className="">
            <h1 className="">2. Now include JKCSS styles using CDN. Now you have to Update <FileName FName={'index.html'} /> as following</h1>
        
            <div className="my-4">
                <pre>
                    <code>
                        <span className="tag">&lt;!DOCTYPE html&gt;</span><br />
                        <span className="tag">&lt;html lang="en"&gt;</span><br />
                        <span className="tag">    &lt;head&gt;</span><br />
                        <span className="tag">        &lt;meta charset=</span><span className="value">"UTF-8"</span><span className="tag">&gt;</span><br />
                        <span className="tag">        &lt;meta http-equiv=</span><span className="attribute">"X-UA-Compatible"</span><span className="value">"IE=edge"</span><span className="tag">&gt;</span><br />
                        <span className="tag">        &lt;meta name=</span><span className="attribute">"viewport"</span><span className="value">"width=device-width, initial-scale=1.0"</span><span className="tag">&gt;</span><br />
                        <span className="tag">        &lt;title&gt;</span>JKCSS DEMO<span className="tag">&lt;/title&gt;</span><br />
                        <span className="tag">        &lt;link rel=</span><span className="attribute">"stylesheet"</span><span className="value">"href=&quot;https://jkcss-css-framework.github.io/JKCSS-Framework/jkcss/jkcss.min.css&quot;"</span><span className="tag">&gt;</span><br />
                        <span className="tag">    &lt;/head&gt;</span><br />
                        <span className="tag">    &lt;body&gt;</span><br />
                        <span className="tag">        &lt;!-- You can customize following content --&gt;</span><br />
                        <span className="tag">        &lt;h1&gt;</span>Hello World, I am JKCSS..!<span className="tag">&lt;/h1&gt;</span><br />
                        <span className="tag">        &lt;script src=</span><span className="attribute">"src=&quot;https://jkcss-css-framework.github.io/JKCSS-Framework/js/jkcss.min.js&quot;"</span><span className="tag">&gt;&lt;/script&gt;</span><br />
                        <span className="tag">    &lt;/body&gt;</span><br />
                        <span className="tag">&lt;/html&gt;</span><br />
                    </code>
                </pre>

                <button onClick={copyToClipboard} className="bg-purple-800 px-4 py-2 my-2 rounded text-white">
                    {copied ? 'Copied!' : 'Copy Code'}
                </button>
            </div>

        </div>
    </div>
  )
}

export default UpdateCSS