import React from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbBracketsAngle } from "react-icons/tb";
import { AiTwotoneFolderAdd } from "react-icons/ai";

const Navbar = () => {
  return (
   <nav className='flex justify-between bg-black text-amber-50 p-4 text-2xl'>
    <div className='font-bold '>
        Sachin Pandey
    </div>
    <ul className='flex gap-10 '>
        <li className='flex items-center hover:underline gap-2'><FaHome/>Home</li>
        <li className='flex items-center hover:underline gap-2'><FcAbout />About</li>
        <li className='flex items-center hover:underline gap-2'><TbBracketsAngle />Skills</li>
        <li className='flex items-center hover:underline gap-2'><AiTwotoneFolderAdd />Projects</li>
        <li className='flex items-center hover:underline gap-2'><IoMdContact />Contact</li>
        <li className='flex items-center hover:underline gap-2  '><TfiHeadphoneAlt />Services</li>
    </ul>
   </nav> 
  )
}

export default Navbar