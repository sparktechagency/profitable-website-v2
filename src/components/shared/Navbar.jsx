"use client";
import Image from "next/image";
import Link from "next/link";
import { LiaBarsSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Sign Up",
      path: "/signUp",
    },
    {
      title: "Sign In",
      path: "/signIn",
    },
  ];
  return (
    <div className="p-2 md:pt-11 pt-5 md:pb-4 px-4">
      <div className="flex justify-between">
        <div className="flex">
          <div className="md:hidden block">
          <details className="dropdown">
            <summary className="btn p-0 pr-3 shadow-none hover:bg-white bg-white border-none text-2xl m-1"><LiaBarsSolid /></summary>
            <ul className="menu dropdown-content bg-[#fe6201] text-white z-[1] rounded-sm w-52 p-4 shadow">
            <div className="flex flex-col gap-3">
            {navItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
            </ul>
          </details>
          </div>
          <div className="mt-3">
            <Link href={"/"}>
              <Image alt="logo" src="/img/logo.png" height={60} width={100} />
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-7 ">
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 ">
              {navItems.map((item) => (
                <Link href={item.path} key={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="hidden md:block">
              <label className="input input-bordered bg-neutral-200 border-none rounded-sm flex items-center gap-2 h-9">
                <input
                  type="text"
                  className="grow text-sm"
                  placeholder="What are you looking for?"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-100 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <CiHeart className="text-3xl" />
            <PiShoppingCartLight className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="md:hidden block ">
        <label className="input input-bordered my-4 bg-neutral-200 border-none rounded-sm flex items-center gap-2 h-9">
          <input
            type="text"
            className="grow text-sm"
            placeholder="What are you looking for?"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-100 "
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}
