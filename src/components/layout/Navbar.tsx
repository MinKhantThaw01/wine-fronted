import React from 'react'

import { FaHome } from "react-icons/fa";
import { PiWineDuotone } from "react-icons/pi";
import { BiMessageError } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import Link from 'next/link';

const navLinks =[
    {
        href: '/',
        name: 'home',
        label: 'Home',
    },
    {
        href: '/wines',
        name: 'wines',
        label: 'Wines',
    },
    {
        href: '/about',
        name: 'about',
        label: 'About',
    },
    {
        href: '/contact',
        name: 'contact',
        label: 'Contact',   
    }
]
export default function Navbar() {

    
  return (
    <nav className='w-full  py-3 bg-black text-white  '>
        {/* Desktop Menu */}
        <div className='lg:block hidden w-full'>

        <div className='flex items-center justify-between px-10 '>
            {/* Logo */}
            <div >
                <h1 className='text-2xl font-bold hover:text-orange-400'><Link href="/">Wine Space</Link></h1>
            </div>


            <div className=''>
                <ul className='flex justify-between items-center gap-10'>
                    {navLinks.map((link,index) => (
                        <li key={index}>
                        <Link  href={link.href} className='font-bold hover:text-orange-400'>{link.name}</Link>
                        </li>
                    ))}
                    
                   
                </ul>
            </div>


            
        </div>
        </div>

        {/* Mobile Menu Button */}
        <div className='fixed bottom-0 lg:hidden text-2xl w-full px-10 mx-auto' >
            <div className='glass-card text-black '>

                 <ul className='flex justify-around items-center gap-10  text-3xl'>
                    <li>
                        <Link href="" className='font-bold hover:text-orange-400'><FaHome /></Link>
                    </li>
                    <li>
                        <Link href="" className='font-bold hover:text-orange-400'><PiWineDuotone /></Link>
                    </li>
                    <li>
                        <Link href="" className='font-bold hover:text-orange-400'><BiMessageError /></Link>
                    </li>
                    <li>
                        <Link href="" className='font-bold hover:text-orange-400'><MdContactSupport /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
