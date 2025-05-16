import React from 'react'

const DocsFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="text-center py-4 bg-gray-100/50 border-t border-gray-100">
            CopyRight &copy; {currentYear} | JKCSS CSS Framework | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank' className='text-[#7466f1]'>JehanKandy</a> | Allrights reserved
        </div>
    )
}

export default DocsFooter