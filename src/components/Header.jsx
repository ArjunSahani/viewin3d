"use client";
import { links } from '@/constants/appdata';
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname= usePathname();
  const[isMenu,setIsMenu]= useState(false)
  console.log(pathname);

  return (
    <div className='bg-gray-100 shadow-lg h-16 flex justify-between items-center md:px-[10%]'>
        <Link href="/" className='text-gray-900 font-bold text-2xl pl-5 md:pl-0'>
            Studio One
            </Link>
            <div className='md:hidden flex flex-col gap-1 pr-5' 
               onClick={() => setIsMenu(!isMenu)}>
              <div className='w-5 h-0.5 bg-black'></div>
              <div className='w-5 h-0.5 bg-black'></div>
              <div className='w-5 h-0.5 bg-black'></div>
            </div>
            <div className={` ${
              isMenu ?"flex flex-col absolute top-16 w-full":"hidden md:flex"} 
               gap-5 md:flex-row bg-gray-100  md:w-auto text-center `}>
              {links?.map((link)=>(
                <div key={link.link}>
                  <Link
                  className={`${pathname === link.link? "text-pink-600":"text-gray-800"}`} href={link.link} exact={link.exact}>
                    <span>{link.text}</span>
                  </Link>
                </div>
              ))}
            </div>

    </div>
  )
};

export default Header;