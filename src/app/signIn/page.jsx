import Image from 'next/image';
import React from 'react';

export default function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-white via-orange-50 to-white">
      <div className="flex w-3/4 max-w-5xl rounded-lg overflow-hidden">
        
        {/* Left Side - Image/Illustration */}
        <div className="w-1/2 p-8 flex justify-center items-center">
          <div className="text-center">
            <div className=" text-white ">
              <Image className='w-[400px]' src={'/img/login.png'} width={300} height={200} alt='login'/>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 ">
        <Image className='w-[200px]' src={'/img/loginl.png'} width={100} height={70} alt='login'/>
          <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Great to have you back!</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">User Name or Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-[#00000000]"
                placeholder="Email"
                required
              />
            
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="flex justify-between items-center">
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Password"
                  required
                />
                <a href="#" className="text-sm text-orange-500 hover:underline">Forgot</a>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-orange-500 hover:underline">Register</a></p>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
