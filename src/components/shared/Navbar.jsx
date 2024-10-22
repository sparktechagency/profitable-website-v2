"use client"
import Image from "next/image"
import Link from "next/link"

import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  const navItems = [
    {
      title : "Home",
      path:"/"
    },
    {
      title : "Contact",
      path:"/contact"
    },
    {
      title : "About",
      path:"/about"
    },
    {
      title : "Sign Up",
      path:"/sign In"
    }
  ]
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div>
            <Link href={'/'}><Image alt="logo" src='/img/logo.png' height={60} width={100}/></Link>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          {
            navItems.map((item)=>(<Link href={item.path} key={item.path}>{item.title}</Link>))
          }
          <div>
          <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
          </div>
          <div>
          <CiHeart />
          <GrCart />
          </div>
        </div>
        
      </div>
    </div>
  )
}
