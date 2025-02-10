import React from 'react'

const ButtonVariants = () => {
  return (
    <div>
        <div className="flex my-4">
            <div className="px-2"><button className="jkbtn jkbtn-blue"> Button Blue </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-gray"> Button Gray </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-green"> Button Green </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-red"> Button Red </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-yellow"> Button Yellow </button></div>
            <div className="px-2"><button className="jkbtn jkbtn-info"> Button Info </button></div>
        </div>

        <pre>
            <code>
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-blue"</span><span className="tag">&gt;</span>Button Blue <span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-gray"</span><span className="tag">&gt;</span>Button Gray<span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-green"</span><span className="tag">&gt;</span>Button Green<span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-red"</span><span className="tag">&gt;</span>Button Red<span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-yellow"</span><span className="tag">&gt;</span>Button Yellow<span className="tag">&lt;/button&gt;</span><br />
                <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-info"</span><span className="tag">&gt;</span>Button Info<span className="tag">&lt;/button&gt;</span><br />
            </code>
        </pre>
    </div>
  )
}

export default ButtonVariants