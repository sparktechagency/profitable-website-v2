import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrLogout } from "react-icons/gr";
export default function ProfileSlide() {
  return (
    <div className=' p-3'>
  <div className=''>
    <div className='mb-3 text-center'>
      <div className='flex justify-center'>
        <Image className='rounded-full bg-red-200 w-[100px] h-[100px]' alt="profile" src="/img/profile.png" height={100} width={100} />
      </div>
      <h2>Foisal Ahmed</h2>
      <p>foisalrk2@gmail.com</p>
    </div>
  </div>
  
  <Link href='/profile/personalInformation'>
    <li className='flex gap-1 py-2 active:bg-red-700 cursor-pointer'>
      <CiUser className='text-2xl'/> 
      <span className='mt-1'>Profile Details</span>
    </li>
  </Link>

  <Link href='/profile/setting'>
    <li className='flex gap-1 py-2 active:bg-red-700 cursor-pointer'>
      <IoSettingsOutline  className='text-2xl'/>
      <span>Setting</span>
    </li>
  </Link>

  <Link href='/profile/orderhistory'>
    <li className='flex gap-2 py-2 active:bg-red-700 cursor-pointer'>
      <TfiMenuAlt  className='text-xl'/>
      <span>Orderhistory</span>
    </li>
  </Link>

  <li className='flex gap-2 py-2 active:bg-red-700 cursor-pointer'> 
    <GrLogout  className='text-xl pl-[2px]'/>
    <span>Log out</span>
  </li>
</div>  
  )
}
