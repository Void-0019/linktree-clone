import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex bg-white w-[90vw] fixed top-12 right-[5vw] rounded-full p-5 justify-between z-50'>
            <div className='logo flex gap-20 items-center ml-5'>
                <img className='h-6' src="/logo.svg" alt="" />

                <ul className='flex gap-10'>
                    <li>Products</li>
                    <li>Templates</li>
                    <li>Marketplace</li>
                    <li>Learn</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className='flex gap-2 font-bold'>
                <button className='login bg-[#eff0ec] py-5 px-7 rounded-lg'>Log in</button>
                <button className='signup bg-[#1e2330] py-5 px-7 rounded-full text-white'>Sign up free</button>
            </div>
        </nav>
    )
}

export default Navbar
