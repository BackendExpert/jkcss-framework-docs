import React, { useState } from 'react'
import FileName from '../../../components/Text/FileName'

const Popups = () => {
    const [openModal, setOpenModal] = useState(null)
    const [openMultiModal, setOpenMultiModal] = useState(null)

    const handleOpen = (id) => {
        setOpenModal(id)
    }

    const handleClose = () => {
        setOpenModal(null)
    }

    const handleMultiOpen = (id) => {
        setOpenMultiModal(id)
    }

    const handleMultiClose = () => {
        setOpenMultiModal(null)
    }

    return (
        <div className="bg-white min-h-screen mt-20 p-6">
            <h1 className="text-3xl font-bold mb-4">Models (Popups)</h1>
            <p className="text-gray-700 mb-8">
                This is the modals in this Framework (Popup Window). The base class is <FileName FName=".jk-modal" />.
            </p>

            {/* Existing single modal */}
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

            {/* New Multiple Modals Section */}
            <div className="my-16">
                <h2 className="text-2xl font-semibold mb-4">Multiple Modals in Same Page</h2>

                <div className="space-x-4 mb-6">
                    <button className="jkbtn jkbtn-blue" onClick={() => handleMultiOpen('modal1')}>
                        Open Modal 1
                    </button>
                    <button className="jkbtn jkbtn-green" onClick={() => handleMultiOpen('modal2')}>
                        Open Modal 2
                    </button>
                    <button className="jkbtn jkbtn-red" onClick={() => handleMultiOpen('modal3')}>
                        Open Modal 3
                    </button>
                    <button className="jkbtn jkbtn-yellow" onClick={() => handleMultiOpen('modal4')}>
                        Open Modal 4
                    </button>
                </div>

                {/* Modal 1 */}
                <div
                    className="modal"
                    id="modal1"
                    style={{ display: openMultiModal === 'modal1' ? 'block' : 'none' }}
                >
                    <div className="modal-content">
                        <div className="modal-header flex justify-between items-center">
                            <span className="font-semibold">Modal 1</span>
                            <button
                                className="close-btn"
                                onClick={handleMultiClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is the body content of Modal 1.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="jkbtn jkbtn-blue">Links</button>
                        </div>
                    </div>
                </div>

                {/* Modal 2 */}
                <div
                    className="modal"
                    id="modal2"
                    style={{ display: openMultiModal === 'modal2' ? 'block' : 'none' }}
                >
                    <div className="modal-content">
                        <div className="modal-header flex justify-between items-center">
                            <span className="font-semibold">Modal 2</span>
                            <button
                                className="close-btn"
                                onClick={handleMultiClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is the body content of Modal 2.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="jkbtn jkbtn-green">Links</button>
                        </div>
                    </div>
                </div>

                {/* Modal 3 */}
                <div
                    className="modal"
                    id="modal3"
                    style={{ display: openMultiModal === 'modal3' ? 'block' : 'none' }}
                >
                    <div className="modal-content">
                        <div className="modal-header flex justify-between items-center">
                            <span className="font-semibold">Modal 3</span>
                            <button
                                className="close-btn"
                                onClick={handleMultiClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is the body content of Modal 3.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="jkbtn jkbtn-red">Links</button>
                        </div>
                    </div>
                </div>

                {/* Modal 4 */}
                <div
                    className="modal"
                    id="modal4"
                    style={{ display: openMultiModal === 'modal4' ? 'block' : 'none' }}
                >
                    <div className="modal-content">
                        <div className="modal-header flex justify-between items-center">
                            <span className="font-semibold">Modal 4</span>
                            <button
                                className="close-btn"
                                onClick={handleMultiClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>This is the body content of Modal 4.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="jkbtn jkbtn-yellow">Links</button>
                        </div>
                    </div>
                </div>

                {/* Multiple Modals Code Preview */}
                <div className="mt-8 bg-gray-100 p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Multiple Modals HTML Code</h3>
                    <pre className="overflow-x-auto text-sm">
                        <code>
                            <span className="comment">&lt;!-- Modal 1 --&gt;</span><br />

                            <span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal"</span> <span className="attribute">id=</span><span className="value">"modal1"</span><span className="tag">&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="normal-code">...</span><br />
                            <span className="tag">&lt;/div&gt;</span><br /><br />

                            <span className="comment">&lt;!-- Modal 2 --&gt;</span><br />

                            <span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal"</span> <span className="attribute">id=</span><span className="value">"modal2"</span><span className="tag">&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="normal-code">...</span><br />
                            <span className="tag">&lt;/div&gt;</span><br /><br />

                            <span className="comment">&lt;!-- Modal 3 --&gt;</span><br />

                            <span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal"</span> <span className="attribute">id=</span><span className="value">"modal3"</span><span className="tag">&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="normal-code">...</span><br />
                            <span className="tag">&lt;/div&gt;</span><br /><br />

                            <span className="comment">&lt;!-- Modal 4 --&gt;</span><br />

                            <span className="tag">&lt;div</span> <span className="attribute">class=</span><span className="value">"modal"</span> <span className="attribute">id=</span><span className="value">"modal4"</span><span className="tag">&gt;</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="normal-code">...</span><br />
                            <span className="tag">&lt;/div&gt;</span><br />
                        </code>
                    </pre>
                </div>


            </div>
        </div>
    )
}

export default Popups
