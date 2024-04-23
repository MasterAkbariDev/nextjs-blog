'use client';
import React, { useEffect, useState } from 'react'
import '../../app/globals.css'
import Link from 'next/link'
import nav from '@/data/nav'
import Slidebar from '../Slidebar/Slidebar'
import { useRouter } from 'next/router';

const Navbar = () => {

  const [navRouter , setNavRouter] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      setNavRouter(router.asPath)
      console.log(navRouter);
    }
  }, [router.isReady, router]);

  return (
    <div>
      <div className='flex justify-between lg:justify-center pt-8 pb-8 mx-2 lg:border-b-2'>
        <h1 className='text-4xl font-bold'>
          Blog
        </h1>
        <Slidebar className="lg:hidden">
          <ul className='justify-center flex flex-col'>
            {nav.map((item, index) => {
              return <li key={index} className='text-lg font-semibold'><Link className={`px-5 py-3 block text-xl transition-colors duration-300 ${navRouter === item.href ? 'text-nav-item' : 'hover:text-nav-item'}`} href={item.href}>{item.name}</Link></li>
            })}
          </ul>
        </Slidebar>
      </div>
      <div className='w-full'>
        <ul className='justify-center lg:flex hidden'>
          {nav.map((item, index) => {
            return <li key={index} className='p-4 text-lg font-semibold'><Link className={`py-2 transition-colors duration-300 ${navRouter === item.href ? 'text-nav-item' : 'hover:text-nav-item'}`} href={item.href}>{item.name}</Link></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar