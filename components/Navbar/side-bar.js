import React from 'react'

const SideBar = ({isOpen}) => {
    return (

        <nav>
            <aside
                className={`transform top-0 right-0 w-64 bg-[#161616] fixed h-full overflow-auto ease-in-out rounded-l-xl transition-all duration-300 z-30"
                ${isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'}`}>
                <ul className="items-center justify-between text-base text-white pt-4 mt-48 ml-20 lg:pt-0">
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white" href="/">Home</li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white" href="/about">About Us</li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/contact">Contact</li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/portfoy">For Sale</li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white lg:mb-0 mb-2" href="/kiralik">For Rent</li>

                </ul>
            </aside>



        </nav>

    )
}

export default SideBar