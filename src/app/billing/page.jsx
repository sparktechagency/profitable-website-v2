import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="p-6 ">
     
      <div className=" space-y-6">
        
        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full mb-6 border-collapse border border-orange-500 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-orange-500 p-3">Product</th>
                <th className="border border-orange-500 p-3">Quantity</th>
                <th className="border border-orange-500 p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 flex items-center justify-center">
                  <Image
                    width={100}
                    height={50}
                    src="/img/monitor.png"
                    alt="LCD Monitor"
                    className="w-16 h-16 mr-3"
                  />
                  <span>LCD Monitor</span>
                </td>
                <td className="border border-orange-500 p-3">02</td>
                <td className="border border-orange-500 p-3">$650</td>
              </tr>
              <tr>
                <td className="border-t border-orange-500 p-3 flex items-center justify-center">
                  <Image
                    width={100}
                    height={50}
                    src="/img/monitor.png"
                    alt="LCD Monitor"
                    className="w-16 h-16 mr-3"
                  />
                  <span>LCD Monitor</span>
                </td>
                <td className="border border-orange-500 p-3">02</td>
                <td className="border border-orange-500 p-3">$650</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Form Section */}
      <div className="grid md:grid-cols-2 md:gap-36">
        <div>
          <form className="space-y-4">
            <div>
              <label className="block  mb-1 font-medium">First Name*</label>
              <input
                type="text"
                className="w-full bg-neutral-100 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Location*</label>
              <input
                type="text"
                className="w-full bg-neutral-100 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number*</label>
              <input
                type="text"
                className="w-full bg-neutral-100 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address*</label>
              <input
                type="email"
                className="w-full bg-neutral-100 p-2 rounded"
              />
            </div>
            <div className="flex gap-2">
              <div className="form-control ">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-error rounded-md border border-black checked:text-orange-500"
                  />
                </label>
              </div>

              <label className="mt-2">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>

          {/* Buttons - Full width */}
          <div className="mt-6 flex justify-between">
            <button className="px-6 py-2 border border-gray-300 rounded">
              Return To Shop
            </button>
            <button className="px-6 py-2 bg-orange-500 text-white rounded">
              Update Cart
            </button>
          </div>
        </div>

        <div className=" p-6 rounded mt-8 lg:mt-0">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <div className="flex ">
                <Image
                  width={100}
                  height={50}
                  src="/img/monitor.png"
                  alt="LCD Monitor"
                  className="w-11 h-11 mr-3"
                />
                <span className="mt-2">HI Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
            <div className="flex justify-between">
              <div className="flex ">
                <Image
                  width={100}
                  height={50}
                  src="/img/monitor.png"
                  alt="LCD Monitor"
                  className="w-11 h-11 mr-3"
                />
                <span className="mt-2">HI Gamepad</span>
              </div>
              <span>$1100</span>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <input type="radio" name="payment" className="mr-2" />
              <span>Bank</span>
              <div className="ml-auto">
                <Image
                  width={100}
                  height={50}
                  src="/img/visa.png"
                  alt="LCD Monitor"
                  className="w-full mr-3"
                />
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
