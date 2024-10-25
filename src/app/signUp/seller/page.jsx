import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-white via-orange-50 to-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg">
       
        <div className="flex flex-col items-center mb-6">
          <Image className="w-[200px]" src={'/img/logo.png'} width={300} height={70} alt='login' />
        </div>

        
        <form className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Shop Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your shop name"
              className="mt-1 block w-full p-2 border border-black bg-[#00000000] rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

    
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              License Number
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="+88##########48"
              className="mt-1 block w-full p-2 border border-black bg-[#00000000] rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

     
          <div>
            <label htmlFor="back-id" className="block text-sm font-medium text-gray-700">
              Front Side of Your ID (or Passport)
            </label>
            <div className="relative mt-1">
              <input
                type="file"
                id="back-id"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center flex-col justify-center w-full p-2 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg">
                <span className="text-center text-black text-3xl">+</span> &nbsp; <span className="-mt-8">Upload</span>
              </div>
            </div>
          </div>

        
          <div>
            <label htmlFor="back-id" className="block text-sm font-medium text-gray-700">
              Back Side of Your ID (or Passport)
            </label>
            <div className="relative mt-1">
              <input
                type="file"
                id="back-id"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center flex-col justify-center w-full p-2 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg">
                <span className="text-center text-black text-3xl">+</span> &nbsp; <span className="-mt-8">Upload</span>
              </div>
            </div>
          </div>


          
          <Link href={'/signUp/accountverify'}>
            <button
              type="submit"
              className="w-full py-2 mt-5 px-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
