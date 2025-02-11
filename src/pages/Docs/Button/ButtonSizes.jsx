import React from 'react'

const ButtonSizes = () => {
  return (
    <div>
        <div className="flex my-4">
            <div className="px-2"><button className="jkbtn-sm jkbtn-blue" disabled> Button Blue OutLine </button></div>
            <div className="px-2"><button className="jkbtn-lg jkbtn-blue-outline" disabled> Button Blue OutLine </button></div>            
        </div>

        <pre>
            <code>
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn-sm jkbtn-blue" </span><span className="tag">&gt;</span>Button Blue <span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn-lg jkbtn-blue-outline" </span><span className="tag">&gt;</span>Button Blue Outline<span className="tag">&lt;/button&gt;</span><br />
            </code>
        </pre>
    </div>
  )
}

export default ButtonSizes