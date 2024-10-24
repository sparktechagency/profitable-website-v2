import Link from 'next/link';


const page = () => {
  return (
    <div>
      <div className=" md:p-11 p-4">
      <h2 className="text-xl font-bold mb-4 text-primary">Personal Information :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        {/* Name Input */}
        <div>
          <label className="block mb-2 text-gray-700">Name :</label>
          <input
            type="text"
            name="name"
           placeholder='Foisal Ahmed'
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2"
          />
        </div>
        {/* Phone Number Input */}
        <div>
          <label className="block mb-2 text-gray-700">Phone Number :</label>
          <input
            type="text"
            name="phone"
            placeholder='01725300330'
            className="w-full border border-gray-300 bg-white  rounded-md px-4 py-2"
          />
        </div>
        {/* Email Input */}
        <div>
          <label className="block mb-2 text-gray-700">Email :</label>
          <input
            type="email"
            name="email"
            placeholder='foisalrk2@gmail.com'
            className="w-full border border-gray-300 bg-white  rounded-md px-4 py-2"
          />
        </div>
        {/* Gender Input */}
        <div>
  <label className="block mb-2 text-gray-700 bg-white ">Gender :</label>
  <div className="relative">
    <select
      name="gender"
      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white  appearance-none"
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none">
      &gt;
    </span>
  </div>
</div>

      </div>
      {/* Address Input */}
      <div className="mb-4">
        <label className="block mb-2 text-gray-700">Address :</label>
        <input
          type="text"
          name="address"
          
          className="w-full border border-gray-300 bg-white  rounded-md px-4 py-2"
          placeholder="Address Here..."
        />
      </div>
      {/* Edit Button */}
      <div className="text-center">
        <Link href='/profile/savechange'><button className="bg-[#fe6201] text-white px-20 py-2 rounded-md hover:bg-orange-600 transition">
          Edit
        </button></Link>
      </div>
    </div>
    </div>
  );
};

export default page;