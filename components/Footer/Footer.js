import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-max bg-[#333333] text-white'>
            <div className='py-10'>
                <div className='px-3 flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/3'>
                        <h3 className='text-xl text-gray-300'>About Us</h3>
                        <p className='mt-6 text-[#737373] text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
                    </div>
                    <div className='w-full md:w-1/3 md:mx-10 md:text-center my-10 md:my-0'>
                        <h3 className='text-xl text-gray-300'>Quick Menu</h3>
                        <ul className='text-[#737373] leading-8 mt-6'>
                            <li><Link href='/'>About Us</Link></li>
                            <li><Link href='/'>Advertise</Link></li>
                            <li><Link href='/'>Careers</Link></li>
                            <li><Link href='/'>Subscribes</Link></li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/3 md:text-center'>
                        <h3 className='text-xl text-gray-300'>Connect With Us</h3>
                        <ul className='text-[#737373] leading-8 mt-6'>
                            <li><Link href='/'>Facebook</Link></li>
                            <li><Link href='/'>X</Link></li>
                            <li><Link href='/'>Instagram</Link></li>
                            <li><Link href='/'>Email</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-center w-full text-[#737373] text-lg mt-10'>
                    <span>This template is made by MasterAkbariDev</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer