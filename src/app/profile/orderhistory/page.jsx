import React from 'react';

const orders = [
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Processing',
  },
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Delivered',
  },
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Delivered',
  },
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Processing',
  },
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Cancelled',
  },
  {
    orderNo: '#1458118',
    totalProducts: 3,
    price: '$75',
    date: '20-Dec-2024, 3:00 PM',
    status: 'Cancelled',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Processing':
      return 'bg-orange-500 text-white';
    case 'Delivered':
      return 'bg-red-500 text-white';
    case 'Cancelled':
      return 'bg-gray-300 text-gray-500';
    default:
      return '';
  }
};

const OrderHistory = () => {
  return (
    <div className="md:p-11 p-4">
      <h1 className="text-xl font-bold mb-4 text-primary">Order History:</h1>
      
      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-xs sm:text-sm md:text-base">Order No:</th>
              <th className="p-2 text-xs sm:text-sm md:text-base">Total Products:</th>
              <th className="p-2 text-xs sm:text-sm md:text-base">Price:</th>
              <th className="p-2 text-xs sm:text-sm md:text-base">Date:</th>
              <th className="p-2 text-xs sm:text-sm md:text-base">Status:</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 text-xs sm:text-sm md:text-base">{order.orderNo}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base">{order.totalProducts}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base">{order.price}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base">{order.date}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base">
                  <span
                    className={`inline-block px-4 py-2 rounded ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
