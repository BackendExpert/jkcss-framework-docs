import React, { useState } from 'react'
import FileName from '../../../components/Text/FileName'

const Popups = () => {
    const [openModal, setOpenModal] = useState(null)

    const handleOpen = (id) => {
        setOpenModal(id)
    }

    const handleClose = () => {
        setOpenModal(null)
    }

    return (
        <div className="bg-white min-h-screen mt-20 p-6">
            <h1 className="text-3xl font-bold mb-4">Models (Popups)</h1>
            <p className="text-gray-700 mb-8">
                This is the modals in this Framework (Popup Window). The base class is <FileName FName=".jk-modal" />.
            </p>

            <div className="my-8">
                <h2 className="text-2xl font-semibold mb-4">Default Modal</h2>

                <button
                    className="jkbtn jkbtn-blue"
                    onClick={() => handleOpen('modal1')}
                >
                    Open Modal 1
                </button>

                {/* Modal */}
                <div
                    className="modal"
                    id="modal1"
                    style={{ display: openModal === 'modal1' ? 'block' : 'none' }}
                >
                    <div className="modal-content">
                        <div className="modal-header flex justify-between items-center">
                            <span className="font-semibold">Modal 1</span>
                            <button
                                className="close-btn"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem est sapiente voluptas repellat nemo temporibus dolores, quo sed illo dicta quasi et asperiores excepturi assumenda culpa molestiae pariatur voluptates?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem est sapiente voluptas repellat nemo temporibus dolores, quo sed illo dicta quasi et asperiores excepturi assumenda culpa molestiae pariatur voluptates?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="jkbtn jkbtn-blue">Links</button>
                        </div>
                    </div>
                </div>

                {/* Custom styled code preview */}
                <div className="mt-8 bg-gray-100 p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Example HTML Code</h3>
                    <pre className="overflow-x-auto text-sm">
                        <code>
                            <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-blue modal-open"</span> <span className="attribute">data-modal=</span><span className="value">"modal1"</span><span className="tag">&gt;</span>
                                Modal
                            <span className="tag">&lt;/button&gt;</span><br />

                            <span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal"</span> <span className="attribute">id=</span><span className="value">"modal1"</span><span className="tag">&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal-content"</span><span className="tag">&gt;</span><br />

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal-header"</span><span className="tag">&gt;</span>
                            JK Modal 1
                            <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"close-btn"</span><span className="tag">&gt;</span>×<span className="tag">&lt;/button&gt;</span>
                            <span className="tag">&lt;/div&gt;</span><br />

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal-body"</span><span className="tag">&gt;</span>
                            This is Body of The Modal
                            <span className="tag">&lt;/div&gt;</span><br />

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal-footer"</span><span className="tag">&gt;</span>
                            <span className="tag">&lt;button</span> <span className="attribute">class=</span><span className="value">"jkbtn jkbtn-blue"</span><span className="tag">&gt;</span>links<span className="tag">&lt;/button&gt;</span>
                            <span className="tag">&lt;/div&gt;</span><br />

                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag">&lt;/div&gt;</span><br />
                            <span className="tag">&lt;/div&gt;</span><br />
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default Popups
