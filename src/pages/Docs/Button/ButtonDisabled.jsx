import React from 'react'

const ButtonDisabled = () => {
  return (
    <div>
        <div className="flex my-4">
            <div className="px-2"><button className="jkbtn jkbtn-blue" disabled> Button Blue OutLine </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-blue-outline" disabled> Button Blue OutLine </button></div>            
        </div>

        <pre>
            <code>
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-blue" <span className='attribute'>disabled</span></span><span className="tag">&gt;</span>Button Blue <span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-blue-outline" <span className='attribute'>disabled</span></span><span className="tag">&gt;</span>Button Blue Outline<span className="tag">&lt;/button&gt;</span><br />
            </code>
        </pre>
    </div>
  )
}

export default ButtonDisabled